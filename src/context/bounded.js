"use strict";

import { arrayUtilities } from "necessary";

import Context from "../context";

import { mergeEquivalences, findEquivalenceByTerm, equivalencesFromEquality, separateGroundedTermsAndDefinedVariables } from "../utilities/equivalences";

const { last, filter } = arrayUtilities;

class BoundedContext extends Context {
  constructor(context, assignments, equivalences, declaredVariables, declaredJudgements, metaLevelAssumptions, subproofOrProofAssertions) {
    super(context);

    this.assignments = assignments;
    this.equivalences = equivalences;
    this.declaredVariables = declaredVariables;
    this.declaredJudgements = declaredJudgements;
    this.metaLevelAssumptions = metaLevelAssumptions;
    this.subproofOrProofAssertions = subproofOrProofAssertions;
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

    equivalences = mergeEquivalences(this.equivalences, equivalences, context);  ///

    return equivalences;
  }

  getDeclaredVariables() {
    let declaredVariables;

    const context = this.getContext();

    declaredVariables = context.getDeclaredVariables();

    declaredVariables = [
      ...this.declaredVariables,
      ...declaredVariables
    ];

    return declaredVariables;
  }

  getDeclaredJudgements() {
    let declaredJudgements;

    const context = this.getContext();

    declaredJudgements = context.getDeclaredJudgements();

    declaredJudgements = [ ///
      ...this.declaredJudgements,
      ...declaredJudgements
    ]

    return declaredJudgements;
  }

  getMetaLevelAssumptions() {
    return this.metaLevelAssumptions;
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

    if (this.metaLevelAssumptiona !== null) {
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
      const equivalence = equivalencesFromEquality(equality, context);

      this.equivalences = mergeEquivalences(this.equivalences, equivalence, context);

      context.debug(`...added the '${equalityString}' equality to the proof context.`);
    } else {
      context.debug(`The reflexive '${equalityString}' equality has not been added to the proof context.`);
    }
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

  addDeclaredVariable(declaredVariable) {
    const context = this, ///
          declaredVariableString = declaredVariable.getString();

    context.trace(`Adding the '${declaredVariableString}' declared variable to the proof context...`);

    this.declaredVariables.push(declaredVariable);

    context.debug(`...added the '${declaredVariableString}' declared variable to the proof context.`);
  }

  addDeclaredJudgement(declaredJudgement) {
    const context = this, ///
          declaredJudgementString = declaredJudgement.getString();

    context.trace(`Adding the '${declaredJudgementString}' declared judgement to the proof context...`);

    this.declaredJudgements.push(declaredJudgement);

    context.debug(`...added the '${declaredJudgementString}' declared judgement to the proof context.`);
  }

  addMetaLevelAssumption(metaLevelAssumption) {
    if (this.metaLevelAssumptions === null) {
      super.addMetaLevelAssumption(metaLevelAssumption);

      return;
    }

    const context = this, ///
          metaLevelAssumptionA = metaLevelAssumption, ///
          metaLevelAssumptionString = metaLevelAssumption.getString();

    context.trace(`Adding the '${metaLevelAssumptionString}' meta-level assumption to the proof context...`);

    const metaLevelAssumptionB = this.metaLevelAssumptions.find((metaLevelAssumption) => {
      const metaLevelAssumptionB = metaLevelAssumption, ///
            metaLevelAssumptionAEqualToAssumptionB = metaLevelAssumptionA.isEqualTo(metaLevelAssumptionB);

      if (metaLevelAssumptionAEqualToAssumptionB) {
        return true;
      }
    }) || null;

    if (metaLevelAssumptionB !== null) {
      context.debug(`The '${metaLevelAssumptionString}' metaLevelAssumption has already been added to the proof context.`);
    } else {
      this.metaLevelAssumptions.push(metaLevelAssumption);
    }

    context.debug(`...added the '${metaLevelAssumptionString}' meta-level assumption to the proof context.`);
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

  findEquivalenceByTerm(term) { return findEquivalenceByTerm(this.equivalences, term); }

  findJudgementByMetavariableNode(metavariableNode) {
    const declaredJudgements = this.getJudgements(),
          judgement = declaredJudgements.find((judgement) => {
            const metavariableNodeMatches = judgement.matchMetavariableNode(metavariableNode);

            if (metavariableNodeMatches) {
              return true;
            }
          }) || null;

    return judgement;
  }

  findDeclaredVariableByVariableIdentifier(variableIdentifier) {
    const declaredVariables = this.getDeclaredVariables(),
          declaredVariable = declaredVariables.find((declaredVariable) => {
            const variableComparesToVariableIdentifier = declaredVariable.compareVariableIdentifier(variableIdentifier);

            if (variableComparesToVariableIdentifier) {
              return true;
            }
          }) || null;

    return declaredVariable;
  }

  findJudgementsByMetavariableNode(metavariableNode) {
    const declaredJudgements = this.getJudgements();

    filter(declaredJudgements, (judgement) => {
      const metavariableNodeMatches = judgement.matchMetavariableNode(metavariableNode);

      if (metavariableNodeMatches) {
        return true;
      }
    });

    return declaredJudgements;
  }

  findMetaLevelAssumptionByMetaLevelAssumptionNode(metaLevelAssumptionNode) {
    let metaLevelAssumption;

    if (this.metaLevelAssumptions === null) {
      metaLevelAssumption = super.findMetaLevelAssumptionByMetaLevelAssumptionNode(metaLevelAssumptionNode);
    } else {
      metaLevelAssumption = this.metaLevelAssumptions.find((metaLevelAssumption) => {
        const metaLevelAssumptionNodeMatches = metaLevelAssumption.matchMetaLevelAssumptionNode(metaLevelAssumptionNode);

        if (metaLevelAssumptionNodeMatches) {
          return true;
        }
      }) || null;
    }

    return metaLevelAssumption;
  }

  isJudgementPresentByMetavariableNode(metavariableNode) {
    const judgement = this.findJudgementByMetavariableNode(metavariableNode),
          judgementPresent = (judgement !== null);

    return judgementPresent;
  }

  isDeclaredVariablePresentByVariableIdentifier(variableIdentifier) {
    const declaredVariable = this.findDeclaredVariableByVariableIdentifier(variableIdentifier),
          declaredVariablePresent = (declaredVariable !== null);

    return declaredVariablePresent;
  }

  isTermGrounded(term) {
    const context = this, ///
          equivalences = this.getEquivalences(),
          groundedTerms = [],
          definedVariables = [];

    separateGroundedTermsAndDefinedVariables(equivalences, groundedTerms, definedVariables, context);

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

  static fromMetaLevelAssumptions(metaLevelAssumptions, context) {
    const assignments = [],
          equivalences = [],
          declaredVariables = [],
          declaredJudgements = [],
          subproofOrProofAssertions = [],
          boundedContext = new BoundedContext(context, assignments, equivalences, declaredVariables, declaredJudgements, metaLevelAssumptions, subproofOrProofAssertions);

    return boundedContext;
  }
}

export default BoundedContext;