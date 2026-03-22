"use strict";

import { arrayUtilities } from "necessary";

import Context from "../context";
import elements from "../elements";

const { last, filter } = arrayUtilities;

class ProofContext extends Context {
  constructor(context, assumptions, variables, judgements, assignments, equivalences, subproofOrProofAssertions) {
    super(context);

    this.assumptions = assumptions;
    this.variables = variables;
    this.judgements = judgements;
    this.assignments = assignments;
    this.equivalences = equivalences;
    this.subproofOrProofAssertions = subproofOrProofAssertions;
  }

  getAssumptions() {
    return this.assumptions;
  }

  getVariables() {
    let variables;

    const context = this.getContext();

    variables = context.getVariables();

    variables = [
      ...this.variables,
      ...variables
    ];

    return variables;
  }

  getJudgements() {
    let judgements;

    const context = this.getContext();

    judgements = context.getJudgements();

    judgements = [ ///
      ...this.judgements,
      ...judgements
    ]

    return judgements;
  }

  getAssignments() {
    return this.assignments;
  }

  getEquivalences() {
    let equivalences;

    let context;

    context = this.getContext();

    equivalences = context.getEquivalences();

    context = this; ///

    equivalences = this.equivalences.mergedWith(equivalences, context);  ///

    return equivalences;
  }

  getSubproofOrProofAssertions() {
    let subproofOrProofAssertions;

    const context = this.getContext();

    subproofOrProofAssertions = context.getSubproofOrProofAssertions();

    subproofOrProofAssertions = [  ///
      ...subproofOrProofAssertions,
      ...this.subproofOrProofAssertions
    ];

    return subproofOrProofAssertions;
  }

  getProofAssertions() {
    const subproofOrProofAssertions = this.getSubproofOrProofAssertions(),
          proofAssertions = subproofOrProofAssertions.filter((subproofOrProofAssertion) => {
            const subproofOrProofAssertionproofAssertion = subproofOrProofAssertion.isProofAssertion();

            if (subproofOrProofAssertionproofAssertion) {
              return true;
            }
          });

    return proofAssertions;
  }

  getLastStep() {
    let lastStep = null;

    const proofAssertions = this.getProofAssertions(),
          proofAssertionsLength = proofAssertions.length;

    if (proofAssertionsLength > 0) {
      const lastProofAssertion = last(proofAssertions);

      lastStep = lastProofAssertion;  ///
    }

    return lastStep;
  }

  isMetaLevel() {
    let metaLevel = false;

    if (this.assumptions !== null) {
      metaLevel = true;
    } else {
      const context = this.getContext();

      metaLevel = context.isMetaLevel();
    }

    return metaLevel;
  }

  addEquality(equality) {
    const context = this, ///
          equalityString = equality.getString();

    context.trace(`Adding the '${equalityString}' equality to the proof context...`);

    const equalityRelfexive = equality.isReflexive();

    if (!equalityRelfexive) {
      const { Equivalence } = elements,
            equivalence = Equivalence.fromEquality(equality, context);

      this.equivalences = this.equivalences.mergedWithEquivalence(equivalence, context);

      context.debug(`...added the '${equalityString}' equality to the proof context.`);
    } else {
      context.debug(`The reflexive '${equalityString}' equality has not been added to the proof context.`);
    }
  }

  addVariable(variable) {
    const context = this, ///
          variableString = variable.getString();

    context.trace(`Adding the '${variableString}' variable to the proof context...`);

    this.variables.push(variable);

    context.debug(`...added the '${variableString}' variable to the proof context.`);
  }

  addJudgement(judgement) {
    const context = this, ///
          judgementString = judgement.getString();

    context.trace(`Adding the '${judgementString}' judgement to the proof context...`);

    this.judgements.push(judgement);

    context.debug(`...added the '${judgementString}' judgement to the proof context.`);
  }

  addAssignment(assignment) {
    this.assignments.push(assignment);
  }

  assignAssignments() {
    const context = this; ///

    this.assignments.forEach((assignment) => {
      assignment(context);
    });
  }

  addAssumption(assumption, metaLevel = true) {
    if (!metaLevel) {
      return;
    }

    if (this.assumptions === null) {
      super.addAssumption(assumption, metaLevel);

      return;
    }

    const context = this, ///
          assumptionA = assumption, ///
          assumptionString = assumption.getString();

    context.trace(`Adding the '${assumptionString}' assumption to the proof context...`);

    const assumptionB = this.assumptions.find((assumption) => {
      const assumptionB = assumption, ///
            assumptionAEqualToAssumptionB = assumptionA.isEqualTo(assumptionB);

      if (assumptionAEqualToAssumptionB) {
        return true;
      }
    }) || null;

    if (assumptionB !== null) {
      context.debug(`The '${assumptionString}' assumption has already been added to the proof context.`);
    } else {
      this.assumptions.push(assumption);

      context.debug(`...added the '${assumptionString}' substitution to the proof context.`);
    }
  }

  addSubproofOrProofAssertion(subproofOrProofAssertion) {
    const context = this, ///
          subproofOrProofAssertionString = subproofOrProofAssertion.getString();

    context.trace(`Adding the '${subproofOrProofAssertionString}' subproof or proof assertion to the proof context...`);

    this.subproofOrProofAssertions.push(subproofOrProofAssertion);

    context.debug(`...added the '${subproofOrProofAssertionString}' subproof or proof assertion to the proof context.`);
  }

  compareTermAndPropertyRelation(term, propertyRelation) {
    const context = this, ///
          proofAssertions = this.getProofAssertions(),
          comparesToTermAndPropertyRelation = proofAssertions.some((proofAssertion) => {
            const comparesToTermAndPropertyRelation = proofAssertion.compareTermAndPropertyRelation(term, propertyRelation, context);

            if (comparesToTermAndPropertyRelation) {
              return true;
            }
          });

    return comparesToTermAndPropertyRelation;
  }

  findEquivalenceByTerm(term) { return this.equivalences.findEquivalenceByTerm(term); }

  findJudgementByJudgementNode(judgementNode) {
    debugger
  }

  findAssumptionByAssumptionNode(assumptionNode, metaLevel = true) {
    let assumption = null;

    if (metaLevel) {
      if (this.assumptions === null) {
        assumption = super.findAssumptionByAssumptionNode(assumptionNode, metaLevel);
      } else {
        assumption = this.assumptions.find((assumption) => {
          const assumptionNodeMatches = assumption.matchAssumptionNode(assumptionNode);

          if (assumptionNodeMatches) {
            return true;
          }
        }) || null;
      }
    }

    return assumption;
  }

  findJudgementByMetavariableName(metavariableName) {
    const judgements = this.getJudgements(),
          judgement = judgements.find((judgement) => {
            const judgementMetavariableComparesToMetavariable = judgement.compareMetavariableName(metavariableName);

            if (judgementMetavariableComparesToMetavariable) {
              return true;
            }
          }) || null;

    return judgement;
  }

  findVariableByVariableIdentifier(variableIdentifier) {
    const variables = this.getVariables(),
          variable = variables.find((variable) => {
            const variableComparesToVariableIdentifier = variable.compareVariableIdentifier(variableIdentifier);

            if (variableComparesToVariableIdentifier) {
              return true;
            }
          }) || null;

    return variable;
  }

  findJudgementsByMetavariableNode(metavariableNode) {
    const judgements = this.getJudgements();

    filter(judgements, (judgement) => {
      const metavariableNodeMatches = judgement.matchMetavariableNode(metavariableNode);

      if (metavariableNodeMatches) {
        return true;
      }
    });

    return judgements;
  }

  isJudgementPresentByMetavariableName(metavariableName) {
    const judgement = this.findJudgementByMetavariableName(metavariableName),
          judgementPresent = (judgement !== null);

    return judgementPresent;
  }

  isVariablePresentByVariableIdentifier(variableIdentifier) {
    const variable = this.findVariableByVariableIdentifier(variableIdentifier),
          variablePresent = (variable !== null);

    return variablePresent;
  }

  isTermGrounded(term) {
    const context = this, ///
          equivalences = this.getEquivalences(),
          groundedTerms = [],
          definedVariables = [];

    equivalences.separateGroundedTermsAndDefinedVariables(groundedTerms, definedVariables, context);

    const termMatchesGroundedTerm = groundedTerms.some((groundedTerm) => {
            const groundedTermNode = groundedTerm.getNode(),
                  groundedTermNodeMatches = term.matchTermNode(groundedTermNode);

            if (groundedTermNodeMatches) {
              return true;
            }
          }),
          termGrounded = termMatchesGroundedTerm; ///

    return termGrounded;
  }

  static fromAssumptions(assumptions, context) {
    const { Equivalences } = elements,
          variables = [],
          judgements = [],
          assignments = [],
          equivalences = Equivalences.fromNothing(context),
          subproofOrProofAssertions = [],
          proofContext = new ProofContext(context, assumptions, variables, judgements, assignments, equivalences, subproofOrProofAssertions);

    return proofContext;
  }
}

export default ProofContext;