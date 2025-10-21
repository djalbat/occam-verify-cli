"use strict";

import dom from "../dom";
import Substitutions from "../substitutions";

import { domAssigned } from "../dom";
import { unifyStatementIntrinsically } from "../utilities/unification";

export default domAssigned(class Declaration {
  constructor(string, node, statement, simpleReference) {
    this.string = string;
    this.node = node;
    this.statement = statement;
    this.simpleReference = simpleReference;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  getStatement() {
    return this.statement;
  }

  getSimpleReference() {
    return this.simpleReference;
  }

  isSimple() {
    const simple = (this.statement === null);

    return simple;
  }

  matchSubstitution(substitution, context) {
    let substitutionMatches = false;

    const declarationString = this.string,  ///
          substitutionString = substitution.getString();

    context.trace(`Matching the '${substitutionString}' substitution against the '${declarationString}' declaration...`);

    const simple = this.isSimple();

    if (simple) {
      const judgement = context.findJudgementBySimpleReference(this.simpleReference);

      if (judgement !== null) {
        const declaration = judgement.getDeclaration();

        substitutionMatches = declaration.matchSubstitution(substitution, context);
      }
    } else {
      const statement = substitution.getStatement(),
            simpleReference = substitution.getMetavariable(),
            statementEqualToStatement = this.statement.isEqualTo(statement),
            metavariableEqualToMetavariable = this.simpleReference.isEqualTo(simpleReference);

      if (metavariableEqualToMetavariable && statementEqualToStatement) {
        substitutionMatches = true;
      }
    }

    if (substitutionMatches) {
      context.debug(`...matches the '${declarationString}' substitution against the '${substitutionString}' declaration.`);
    }

    return substitutionMatches;
  }

  verify(assignments, stated, context) {
    let verifies = false;

    const declarationString = this.string;  ///

    context.trace(`Verifying the '${declarationString}' declaration...`);

    const simple = this.isSimple();

    if (simple) {
      const verifiesAsMetavariable = this.verifyAsMetavariable(assignments, stated, context);

      verifies = verifiesAsMetavariable; ///
    } else {
      const metavariableVerifiesAsReference = this.verifyMetavariableAsReference(assignments, stated, context);

      if (metavariableVerifiesAsReference) {
        const statementVerifies = this.verifyStatement(assignments, stated, context);

        if (statementVerifies) {
          let verifiesWhenStated = false,
              verifiesWhenDerived = false;

          if (stated) {
            verifiesWhenStated = this.verifyWhenStated(assignments, context);
          } else {
            verifiesWhenDerived = this.verifyWhenDerived(context);
          }

          if (verifiesWhenStated || verifiesWhenDerived) {
            verifies = true;
          }
        }
      }

      if (verifies) {
        context.debug(`...verified the '${declarationString}' declaration.`);
      }
    }

    return verifies;
  }

  verifyMetavariableAsReference(assignments, stated, context) {
    let metavariableVerifiesAsReference;

    const declarationString = this.string,
          metavariableString = this.simpleReference.getString();

    context.trace(`Verifying the '${declarationString}' declaration's '${metavariableString}' simpleReference as a reference...`);

    const reference = referenceFromMetavariable(this.simpleReference, context),
          referenceVerifies = reference.verify(context);

    metavariableVerifiesAsReference = referenceVerifies;  ///

    if (metavariableVerifiesAsReference) {
      context.debug(`...verified the '${declarationString}' declaration's '${metavariableString}' simpleReference as a reference.`);
    }

    return metavariableVerifiesAsReference;
  }

  verifyStatement(assignments, stated, context) {
    let statementVerifies;

    if (this.statement === null) {
      statementVerifies = true;
    } else {
      const statementString = this.statement.getString();

      context.trace(`Verifying the '${statementString}' statement...`);

      stated = true;  ///

      assignments = null; ///

      statementVerifies = this.statement.verify(assignments, stated, context);

      if (statementVerifies) {
        context.debug(`...verified the '${statementString}' statement.`);
      }
    }

    return statementVerifies;
  }

  verifyAsMetavariable(assignments, stated, context) {
    let verifiesAsMetavariable;

    const declarationString = this.string,  ///
          metavariableString = this.simpleReference.getString();

    context.trace(`Verifying the '${declarationString}' declaration's '${metavariableString}' simpleReference...`);

    verifiesAsMetavariable = this.simpleReference.verify(context);

    if (verifiesAsMetavariable) {
      context.debug(`...verified the '${declarationString}' declaration's '${metavariableString}' simpleReference.`);
    }

    return verifiesAsMetavariable;
  }

  verifyWhenStated(assignments, context) {
    let verifiesWhenStated;

    const declarationString = this.string;  ///

    context.trace(`Verifying the '${declarationString}' stated declaration...`);

    const reference = referenceFromMetavariable(this.simpleReference, context),
          metavariablePresent = context.isMetavariablePresentByReference(reference);

    if (metavariablePresent) {
      verifiesWhenStated = true;
    } else {
      const metaLemmaMetatheorems = context.findMetaLemmaMetatheoremsByReference(reference),
            metaLemmaMetatheoremsUnify = metaLemmaMetatheorems.every((metaLemmaMetatheorem) => {
              const metaLemmaMetatheoremUnifies = this.unifyMetaLemmaMetatheorem(metaLemmaMetatheorem, context);

              if (metaLemmaMetatheoremUnifies) {
                return true;
              }
            });

      verifiesWhenStated = metaLemmaMetatheoremsUnify; ///
    }

    if (verifiesWhenStated) {
      context.debug(`...verified the '${declarationString}' stated declaration.`);
    }

    return verifiesWhenStated;
  }

  verifyWhenDerived(context) {
    let verifiesWhenDerived;

    const declarationString = this.string;  ///

    context.trace(`Verifying the '${declarationString}' derived declaration...`);

    const reference = referenceFromMetavariable(this.simpleReference, context),
          metaLemmaMetatheoremPresent = context.isMetaLemmaMetatheoremPresentByReference(reference);

    verifiesWhenDerived = metaLemmaMetatheoremPresent; ///

    if (verifiesWhenDerived) {
      context.debug(`...verified the '${declarationString}' derived declaration.`);
    }

    return verifiesWhenDerived;
  }

  unifyStatement(statement, substitutions, generalContext, specificContext) {
    let statementUnifies;

    const simple = this.isSimple();

    if (simple) {
      statementUnifies = false;
    } else {
      const context = generalContext,  ///
            statementString = statement.getString(),
            declarationStatementString = this.statement.getString();

      context.trace(`Unifying the '${statementString}' statement with the '${declarationStatementString}' statement...`);

      const generalStatement = this.statement,
            specificStatement = statement,  ///
            statementUUnifiesIntrinsically = unifyStatementIntrinsically(generalStatement, specificStatement, substitutions, generalContext, specificContext);

      statementUnifies = statementUUnifiesIntrinsically;  ///

      if (statementUnifies) {
        context.debug(`...unified the '${statementString}' statement with the '${declarationStatementString}' statement.`);
      }
    }

    return statementUnifies;
  }

  unifyLabel(label, substitutions, generalContext, specificContext) {
    let labelUnifiesWithReference;

    const context = generalContext, ///
          labelString = label.getString(),
          declarationString = this.string;  //;/

    context.trace(`Unifying the '${labelString}' label with the '${declarationString}' declaration...`);

    const reference = referenceFromMetavariable(this.simpleReference, context),
          labelUnifies = reference.unifyLabel(label, substitutions, context);

    labelUnifiesWithReference = labelUnifies; ///

    if (labelUnifiesWithReference) {
      context.debug(`...unified the '${labelString}' label with the '${declarationString}' declaration.`);
    }

    return labelUnifiesWithReference;
  }

  unifyMetaLemmaMetatheorem(metaLemmaMetatheorem, context) {
    let metaLemmaMetatheoremUnifies = false;

    const declarationString = this.string,  ///
          metaLemmaMetatheoremString = metaLemmaMetatheorem.getString();

    context.trace(`Unifying the '${metaLemmaMetatheoremString}' meta-lemma or metatheorem with the '${declarationString}' declaration...`);

    const generalContext = context; ///

    context = metaLemmaMetatheorem.getContext();  ///

    const specificContext = context,  ///
          labelSubstitutions = Substitutions.fromNothing(),
          label = metaLemmaMetatheorem.getLabel(),
          substitutions = labelSubstitutions, ///
          labelUnifies = this.unifyLabel(label, substitutions, generalContext, specificContext);

    if (labelUnifies) {
      const statementSubstitutions = Substitutions.fromNothing(),
            statement = metaLemmaMetatheorem.getStatement(),
            substitutions = statementSubstitutions, ///
            statementUUnifies = this.unifyStatement(statement, substitutions, generalContext, specificContext);

      if (statementUUnifies) {
        const labelSubstitutionsCorrelateStatementSubstitutions = labelSubstitutions.correlateSubstitutions(statementSubstitutions);

        if (labelSubstitutionsCorrelateStatementSubstitutions) {
          metaLemmaMetatheoremUnifies = true; ///
        }
      }
    }

    if (metaLemmaMetatheoremUnifies) {
      context.trace(`...unified the '${metaLemmaMetatheoremString}' meta-lemma or metatheorem with the '${declarationString}' declaration...`);
    }

    return metaLemmaMetatheoremUnifies;
  }

  static name = "Declaration";

  static fromJudgementNode(judgementNode, context) {
    const declarationNode = judgementNode.getDeclarationNode(),
          declaration = declarationFromDeclarationNode(declarationNode, context);

    return declaration;
  }

  static fromDeclarationNode(declarationNode, context) {
    const declaration = declarationFromDeclarationNode(declarationNode, context);

    return declaration;
  }
});

function referenceFromMetavariable(simpleReference, context) {
  const { Reference } = dom,
        metavariableNode = simpleReference.getNode(),
        reference = Reference.fromMetavariableNode(metavariableNode, context);

  return reference;
}

function declarationFromDeclarationNode(declarationNode, context) {
  const { Metavariable, Declaration, Statement } = dom,
        node = declarationNode,  ///
        string = context.nodeAsString(node),
        simpleReference = Metavariable.fromDeclarationNode(declarationNode, context),
        statement = Statement.fromDeclarationNode(declarationNode, context),
        declaration = new Declaration(string, node, statement, simpleReference);

  return declaration;
}
