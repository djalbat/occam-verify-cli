"use strict";

import dom from "../dom";
import Substitutions from "../substitutions";

import { domAssigned } from "../dom";
import { unifyStatementIntrinsically } from "../utilities/unification";

export default domAssigned(class Declaration {
  constructor(string, reference, statement) {
    this.string = string;
    this.reference = reference;
    this.statement = statement;
  }

  getString() {
    return this.string;
  }

  getReference() {
    return this.reference;
  }

  getStatement() {
    return this.statement;
  }

  matchSubstitution(substitution, context) {
    let substitutionMatches;

    const declarationString = this.string,  ///
          substitutionString = substitution.getString();

    context.trace(`Matching the '${substitutionString}' substitution against the '${declarationString}' declaration...`);

    const statement = substitution.getStatement(),
          metavariable = substitution.getMetavariable(),
          statementEqualToStatement = this.statement.isEqualTo(statement),
          referenceMetavariableEqualToMetavariable = this.reference.isMetavariableEqualTo(metavariable);

    substitutionMatches = (referenceMetavariableEqualToMetavariable && statementEqualToStatement);

    if (substitutionMatches) {
      context.debug(`...matched the '${declarationString}' substitution against the '${substitutionString}' declaration.`);
    }

    return substitutionMatches;
  }

  verify(assignments, stated, context) {
    let verifies = false;

    const declarationString = this.string;  ///

    context.trace(`Verifying the '${declarationString}' declaration...`);

    const referenceVerifies = this.verifyReference(assignments, stated, context);

    if (referenceVerifies) {
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

    return verifies;
  }

  verifyReference(assignments, stated, context) {
    let referenceVerifies;

    const referenceString = this.reference.getString();

    context.trace(`Verifying the '${referenceString}' reference...`);

    referenceVerifies = this.reference.verify(context);

    if (referenceVerifies) {
      context.debug(`...verified the '${referenceString}' reference.`);
    }

    return referenceVerifies;
  }

  verifyStatement(assignments, stated, context) {
    let statementVerifies;

    const statementString = this.statement.getString();

    context.trace(`Verifying the '${statementString}' statement...`);

    stated = true;  ///

    assignments = null; ///

    statementVerifies = this.statement.verify(assignments, stated, context);

    if (statementVerifies) {
      context.debug(`...verified the '${statementString}' statement.`);
    }

    return statementVerifies;
  }

  verifyWhenStated(assignments, context) {
    let verifiesWhenStated;

    const declarationString = this.string;  ///

    context.trace(`Verifying the '${declarationString}' stated declaration...`);

    const metavariablePresent = context.isMetavariablePresentByReference(this.reference);

    if (metavariablePresent) {
      verifiesWhenStated = true;
    } else {
      const metaLemmaMetatheorems = context.findMetaLemmaMetatheoremsByReference(this.reference),
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

    const metaLemmaMetatheoremPresent = context.isMetaLemmaMetatheoremPresentByReference(this.reference);

    verifiesWhenDerived = metaLemmaMetatheoremPresent; ///

    if (verifiesWhenDerived) {
      context.debug(`...verified the '${declarationString}' derived declaration.`);
    }

    return verifiesWhenDerived;
  }

  unifyStatement(statement, substitutions, generalContext, specificContext) {
    let statementUnifies;

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

    return statementUnifies;
  }

  unifyLabelWithReference(label, substitutions, generalContext, specificContext) {
    let labelUnifiesWithReference;

    const context = generalContext, ///
          labelString = label.getString(),
          referenceString = this.reference.getString();

    context.trace(`Unifying the '${labelString}' label with the '${referenceString}' reference...`);

    const labelUnifies = this.reference.unifyLabel(label, substitutions, context);

    labelUnifiesWithReference = labelUnifies; ///

    if (labelUnifiesWithReference) {
      context.debug(`...unified the '${labelString}' label with the '${referenceString}' reference.`);
    }

    return labelUnifiesWithReference;
  }

  unifyMetaLemmaMetatheorem(metaLemmaMetatheorem, context) {
    let metaLemmaMetatheoremUnifies = false;

    const declarationString = this.string,  ///
          metaLemmaMetatheoremString = metaLemmaMetatheorem.getString();

    context.trace(`Unifying the '${metaLemmaMetatheoremString}' meta-lemma or metatheorem with the '${declarationString}' declaration...`);

    const fileContext = metaLemmaMetatheorem.getFileContext(),
          generalContext = context, ///
          specificContext = fileContext,
          labelSubstitutions = Substitutions.fromNothing(),
          label = metaLemmaMetatheorem.getLabel(),
          substitutions = labelSubstitutions, ///
          labelUnifiesWithReference = this.unifyLabelWithReference(label, substitutions, generalContext, specificContext);

    if (labelUnifiesWithReference) {
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

function declarationFromDeclarationNode(declarationNode, context) {
  const { Declaration, Reference, Statement } = dom,
        node = declarationNode,  ///
        string = context.nodeAsString(node),
        reference = Reference.fromDeclarationNode(declarationNode, context),
        statement = Statement.fromDeclarationNode(declarationNode, context),
        declaration = new Declaration(string, reference, statement);

  return declaration;
}
