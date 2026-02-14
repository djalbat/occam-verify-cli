"use strict";

import { arrayUtilities } from "necessary";
import { Element, asynchronousUtilities } from "occam-languages";

import assignAssignments from "../process/assign";

import { define } from "../elements";
import { asyncScope } from "../utilities/context";
import { labelsFromJSON,
         premisesFromJSON,
         conclusionFromJSON,
         labelsToLabelsJSON,
         premisesToPremisesJSON,
         conclusionToConclusionJSON } from "../utilities/json";

const { reverse, extract } = arrayUtilities,
      { asyncForwardsEvery, asyncBackwardsEvery } = asynchronousUtilities;

export default define(class Rule extends Element {
  constructor(context, string, node, proof, labels, premises, conclusion) {
    super(context, string, node);

    this.proof = proof;
    this.labels = labels;
    this.premises = premises;
    this.conclusion = conclusion;
  }

  getLabels() {
    return this.labels;
  }

  getPremises() {
    return this.premises;
  }

  getProof() {
    return this.proof;
  }

  getConclusion() {
    return this.conclusion;
  }

  compareMetavariableName(metavariableName) {
    const comparesToMetavariableName = this.labels.some((label) => {
      const labelComparesToMetavariableName = label.compareMetavariableName(metavariableName);

      if (labelComparesToMetavariableName) {
        return true;
      }
    });

    return comparesToMetavariableName;
  }

  verifyLabels() {
    let labelsVerify;

    const context = this.getContext(),
          ruleString = this.getString();  ///

    context.trace(`Verifying the '${ruleString}' rule's labels...`);

    labelsVerify = this.labels.every((label) => {
      const nameOnly = true,
            labelVerifies = label.verify(nameOnly);

      if (labelVerifies) {
        return true;
      }
    });

    if (labelsVerify) {
      context.trace(`...verified the '${ruleString}' rule's labels.`);
    }

    return labelsVerify;
  }

  unifyStatementWithConclusion(statement, context) {
    let statementUnifiesWithConclusion = false;

    const ruleString = this.getString(),
          statementString = statement.getString(),
          conclusionString = this.conclusion.getString();

    context.trace(`Unifying the '${statementString}' statement with the '${ruleString}' rule's '${conclusionString}' conclusion...`);

    const statementUnifies = this.conclusion.unifyStatement(statement, context);

    if (statementUnifies) {
      statementUnifiesWithConclusion = true;
    }

    if (statementUnifiesWithConclusion) {
      context.debug(`...unified the '${statementString}' statement with the '${ruleString}' rule's '${conclusionString}' conclusion.`);
    }

    return statementUnifiesWithConclusion;
  }

  async verify() {
    let verifies = false;

    const context = this.getContext();

    await this.break(context);

    const ruleString = this.getString(); ///

    context.trace(`Verifying the '${ruleString}' rule...`);

    await asyncScope(async (context) => {
      const labelsVerify = this.verifyLabels();

      if (labelsVerify) {
        const premisesVerify = await this.verifyPremises(context);

        if (premisesVerify) {
          const conclusionVerifies = await this.verifyConclusion(context);

          if (conclusionVerifies) {
            const proofVerifies = await this.verifyProof(context);

            if (proofVerifies) {
              const rule = this;  ///

              context.addRule(rule);

              verifies = true;
            }
          }
        }
      }
    }, context);

    if (verifies) {
      context.debug(`...verified the '${ruleString}' rule.`);
    }

    return verifies;
  }

  async verifyProof(context) {
    let proofVerifies;

    if (this.proof === null) {
      proofVerifies = true;
    } else {
      const ruleString = this.getString();  ///

      context.trace(`Verifying the '${ruleString}' rule's proof...`);

      const statement = this.conclusion.getStatement();

      proofVerifies = this.proof.verify(statement, context);

      if (proofVerifies) {
        context.debug(`...verified the '${ruleString}' rule's proof.`);
      }
    }

    return proofVerifies;
  }

  async verifyPremises(context) {
    let premisesVerify;

    const ruleString = this.getString();  ///

    context.trace(`Verifying the '${ruleString}' rule's premises...`);

    premisesVerify = await asyncForwardsEvery(this.premises, async (premise) => {
      const assignments = [],
            premiseVerifies = await premise.verify(assignments, context)

      if (premiseVerifies) {
        const assignmentsAssigned = assignAssignments(assignments, context);

        if (assignmentsAssigned) {
          const subproofOrProofAssertion = premise;  ////

          context.addSubproofOrProofAssertion(subproofOrProofAssertion);

          return true;
        }
      }
    });

    if (premisesVerify) {
      context.debug(`...verified the '${ruleString}' rule's premises.`);
    }

    return premisesVerify;
  }

  async verifyConclusion(context) {
    let conclusionVerifies;

    const ruleString = this.getString();  ///

    context.trace(`Verifying the '${ruleString}' rule's conclusion...`);

    conclusionVerifies = await this.conclusion.verify(context);

    if (conclusionVerifies) {
      context.debug(`...verified the '${ruleString}' rule's conclusion.`);
    }

    return conclusionVerifies;
  }

  async unifyStatementAndSubproofOrProofAssertions(statement, subproofOrProofAssertions, context) {
    let statementAndSubproofOrProofAssertionsUnify = false;

    const statementUnifiesWithConclusion = this.unifyStatementWithConclusion(statement, context);

    if (statementUnifiesWithConclusion) {
      const subproofOrProofAssertionsUnifiesWithPremises = await this.unifySubproofOrProofAssertionsWithPremises(subproofOrProofAssertions, context);

      if (subproofOrProofAssertionsUnifiesWithPremises) {
        const specificContext = context;  ///

        context = this.getContext();

        const generalContext = context;

        context = specificContext;  ///

        const substitutionsResolved = context.areSubstitutionsResolved(generalContext, specificContext);

        if (substitutionsResolved) {
          statementAndSubproofOrProofAssertionsUnify = true;
        }
      }
    }

    return statementAndSubproofOrProofAssertionsUnify;
  }

  async unifySubproofOrProofAssertionsWithPremises(subproofOrProofAssertions, context) {
    let subproofOrProofAssertionsUnifiesWithPremises;

    subproofOrProofAssertions = reverse(subproofOrProofAssertions); ///

    subproofOrProofAssertionsUnifiesWithPremises = asyncBackwardsEvery(this.premises, async (premise) => {
      const stepUnifiesWithPremise = await this.unifySubproofOrProofAssertionsWithPremise(subproofOrProofAssertions, premise, context);

      if (stepUnifiesWithPremise) {
        return true;
      }
    });

    return subproofOrProofAssertionsUnifiesWithPremises;
  }

  async unifySubproofOrProofAssertionsWithPremise(subproofOrProofAssertions, premise, context) {
    let subproofOrProofAssertionsUnifiesWithPremise = false;

    if (!subproofOrProofAssertionsUnifiesWithPremise) {
      const subproofOrProofAssertion = extract(subproofOrProofAssertions, (subproofOrProofAssertion) => {
        const subproofOrProofAssertionUnifies = premise.unifySubproofOrProofAssertion(subproofOrProofAssertion, context);

        if (subproofOrProofAssertionUnifies) {
          const specificContext = context;  ///

          context = this.getContext();

          const generalContext = context;

          context = specificContext;  ///

          context.resolveSubstitutions(generalContext, specificContext);

          return true;
        }
      }) || null;

      if (subproofOrProofAssertion !== null) {
        subproofOrProofAssertionsUnifiesWithPremise = true;
      }
    }

    if (!subproofOrProofAssertionsUnifiesWithPremise) {
      const premiseUnifiesIndependently = await premise.unifyIndependently(context);

      if (premiseUnifiesIndependently) {
        subproofOrProofAssertionsUnifiesWithPremise = true;
      }
    }

    return subproofOrProofAssertionsUnifiesWithPremise;
  }

  toJSON() {
    const labelsJSON = labelsToLabelsJSON(this.labels),
          premisesJSON = premisesToPremisesJSON(this.premises),
          conclusionJSON = conclusionToConclusionJSON(this.conclusion),
          labels = labelsJSON,  ///
          premises = premisesJSON,  ///
          conclusion = conclusionJSON,  ///
          json = {
            labels,
            premises,
            conclusion
          };

    return json;
  }

  static name = "Rule";

  static fromJSON(json, context) {
    let rule;

    const node = null,
          proof = null,
          labels = labelsFromJSON(json, context),
          premises = premisesFromJSON(json, context),
          conclusion = conclusionFromJSON(json, context),
          string = stringFromLabelsPremisesAndConclusion(labels, premises, conclusion);

    rule = new Rule(context, string, node, labels, premises, conclusion, proof);

    return rule;
  }
});
