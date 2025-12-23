"use strict";

import ontology from "../ontology";

import { define } from "../ontology";
import { unifyStatementIntrinsically } from "../utilities/unification";
import { metavariableFromJSON, metavariableToMetavariableJSON } from "../utilities/json";

export default define(class Assumption {
  constructor(string, node, statement, metavariable) {
    this.string = string;
    this.node = node;
    this.statement = statement;
    this.metavariable = metavariable;
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

  getMetavariable() {
    return this.metavariable;
  }

  isSimple() {
    const simple = (this.statement === null);

    return simple;
  }

  matchSubstitution(substitution, context) {
    let substitutionMatches = false;

    const assumptionString = this.string,  ///
          substitutionString = substitution.getString();

    context.trace(`Matching the '${substitutionString}' substitution against the '${assumptionString}' assumption...`);

    const simple = this.isSimple();

    if (simple) {
      const judgement = context.findJudgementByMetavariable(this.metavariable);

      if (judgement !== null) {
        const assumption = judgement.getDeclaration();

        substitutionMatches = assumption.matchSubstitution(substitution, context);
      }
    } else {
      const statement = substitution.getStatement(),
            metavariable = substitution.getMetavariable(),
            statementEqualToStatement = this.statement.isEqualTo(statement),
            metavariableEqualToMetavariable = this.metavariable.isEqualTo(metavariable);

      if (metavariableEqualToMetavariable && statementEqualToStatement) {
        substitutionMatches = true;
      }
    }

    if (substitutionMatches) {
      context.debug(`...matches the '${assumptionString}' substitution against the '${substitutionString}' assumption.`);
    }

    return substitutionMatches;
  }

  verify(assignments, stated, context) {
    let verifies = false;

    const assumptionString = this.string;  ///

    context.trace(`Verifying the '${assumptionString}' assumption...`);

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
        context.debug(`...verified the '${assumptionString}' assumption.`);
      }
    }

    return verifies;
  }

  verifyMetavariableAsReference(assignments, stated, context) {
    let metavariableVerifiesAsReference;

    const assumptionString = this.string,
          metavariableString = this.metavariable.getString();

    context.trace(`Verifying the '${assumptionString}' assumption's '${metavariableString}' metavariable as a reference...`);

    const reference = referenceFromMetavariable(this.metavariable, context),
          referenceVerifies = reference.verify(context);

    metavariableVerifiesAsReference = referenceVerifies;  ///

    if (metavariableVerifiesAsReference) {
      context.debug(`...verified the '${assumptionString}' assumption's '${metavariableString}' metavariable as a reference.`);
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

    const assumptionString = this.string,  ///
          metavariableString = this.metavariable.getString();

    context.trace(`Verifying the '${assumptionString}' assumption's '${metavariableString}' metavariable...`);

    verifiesAsMetavariable = this.metavariable.verify(context);

    if (verifiesAsMetavariable) {
      context.debug(`...verified the '${assumptionString}' assumption's '${metavariableString}' metavariable.`);
    }

    return verifiesAsMetavariable;
  }

  verifyWhenStated(assignments, context) {
    let verifiesWhenStated;

    const assumptionString = this.string;  ///

    context.trace(`Verifying the '${assumptionString}' stated assumption...`);

    const reference = referenceFromMetavariable(this.metavariable, context),
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
      context.debug(`...verified the '${assumptionString}' stated assumption.`);
    }

    return verifiesWhenStated;
  }

  verifyWhenDerived(context) {
    let verifiesWhenDerived;

    const assumptionString = this.string;  ///

    context.trace(`Verifying the '${assumptionString}' derived assumption...`);

    const reference = referenceFromMetavariable(this.metavariable, context),
          metaLemmaMetatheoremPresent = context.isMetaLemmaMetatheoremPresentByReference(reference);

    verifiesWhenDerived = metaLemmaMetatheoremPresent; ///

    if (verifiesWhenDerived) {
      context.debug(`...verified the '${assumptionString}' derived assumption.`);
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
            assumptionStatementString = this.statement.getString();

      context.trace(`Unifying the '${statementString}' statement with the '${assumptionStatementString}' statement...`);

      const generalStatement = this.statement,
            specificStatement = statement,  ///
            statementUUnifiesIntrinsically = unifyStatementIntrinsically(generalStatement, specificStatement, substitutions, generalContext, specificContext);

      statementUnifies = statementUUnifiesIntrinsically;  ///

      if (statementUnifies) {
        context.debug(`...unified the '${statementString}' statement with the '${assumptionStatementString}' statement.`);
      }
    }

    return statementUnifies;
  }

  unifyLabel(label, substitutions, generalContext, specificContext) {
    let labelUnifiesWithReference;

    const context = generalContext, ///
          labelString = label.getString(),
          assumptionString = this.string;  //;/

    context.trace(`Unifying the '${labelString}' label with the '${assumptionString}' assumption...`);

    const reference = referenceFromMetavariable(this.metavariable, context),
          labelUnifies = reference.unifyLabel(label, substitutions, context);

    labelUnifiesWithReference = labelUnifies; ///

    if (labelUnifiesWithReference) {
      context.debug(`...unified the '${labelString}' label with the '${assumptionString}' assumption.`);
    }

    return labelUnifiesWithReference;
  }

  unifyMetaLemmaMetatheorem(metaLemmaMetatheorem, context) {
    let metaLemmaMetatheoremUnifies = false;

    const assumptionString = this.string,  ///
          metaLemmaMetatheoremString = metaLemmaMetatheorem.getString();

    context.trace(`Unifying the '${metaLemmaMetatheoremString}' meta-lemma or metatheorem with the '${assumptionString}' assumption...`);

    const generalContext = context; ///

    context = metaLemmaMetatheorem.getContext();  ///

    const { Substitutions } = ontology,
          specificContext = context,  ///
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
      context = generalContext; ///

      context.trace(`...unified the '${metaLemmaMetatheoremString}' meta-lemma or metatheorem with the '${assumptionString}' assumption...`);
    }

    return metaLemmaMetatheoremUnifies;
  }

  toJSON() {
    let json = null;

    const simple = this.isSimple();

    if (simple) {
      const metavariable = this.getMetavariable(),
            metavariableJSON = metavariableToMetavariableJSON(metavariable);

      json = metavariableJSON;  ///
    }

    return json;
  }

  static name = "Assumption";

  static fromJSON(json, context) {
    let assumption = null;

    if (json !== null) {
      const string = null,
            node = null,
            statement = null,
            metavariable = metavariableFromJSON(json, context);

      assumption = new Assumption(string, node, statement, metavariable)
    }

    return assumption;
  }

  static fromJudgementNode(judgementNode, context) {
    const assumptionNode = judgementNode.getAssumptionNode(),
          assumption = assumptionFromAssumptionNode(assumptionNode, context);

    return assumption;
  }

  static fromAssumptionNode(assumptionNode, context) {
    const assumption = assumptionFromAssumptionNode(assumptionNode, context);

    return assumption;
  }
});

function referenceFromMetavariable(metavariable, context) {
  const { Reference } = ontology,
        metavariableNode = metavariable.getNode(),
        reference = Reference.fromMetavariableNode(metavariableNode, context);

  return reference;
}

function assumptionFromAssumptionNode(assumptionNode, context) {
  const { Metavariable, Assumption, Statement } = ontology,
        node = assumptionNode,  ///
        string = context.nodeAsString(node),
        statement = Statement.fromAssumptionNode(assumptionNode, context),
        metavariable = Metavariable.fromAssumptionNode(assumptionNode, context),
        assumption = new Assumption(string, node, statement, metavariable);

  return assumption;
}
