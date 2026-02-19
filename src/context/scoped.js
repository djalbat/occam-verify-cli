"use strict";

import { arrayUtilities } from "necessary";

import Context from "../context";
import elements from "../elements";

const { last } = arrayUtilities;

class ScopedContext extends Context {
  constructor(context, variables, judgements, equivalences, subproofOrProofAssertions) {
    super(context);

    this.variables = variables;
    this.judgements = judgements;
    this.equivalences = equivalences;
    this.subproofOrProofAssertions = subproofOrProofAssertions;
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

  getLastProofAssertion() {
    let lastProofAssertion = null;

    const proofAssertions = this.getProofAssertions(),
          proofAssertionsLength = proofAssertions.length;

    if (proofAssertionsLength > 0) {
      lastProofAssertion = last(proofAssertions);
    }

    return lastProofAssertion;
  }

  addEquality(equality) {
    const context = this, ///
          equalityString = equality.getString();

    context.trace(`Adding the '${equalityString}' equality to the scoped context...`);

    const equalityRelfexive = equality.isReflexive();

    if (equalityRelfexive) {
      context.trace(`The '${equalityString}' equality is reflexive and will not added to the scoped context.`);
    } else {
      const { Equivalence } = elements,
            equivalence = Equivalence.fromEquality(equality, context);

      this.equivalences = this.equivalences.mergedWithEquivalence(equivalence, context);

      context.debug(`...added the '${equalityString}' equality to the scoped context.`);
    }
  }

  addVariable(variable) {
    const context = this, ///
          variableString = variable.getString();

    context.trace(`Adding the '${variableString}' variable to the scoped context...`);

    this.variables.push(variable);

    context.debug(`...added the '${variableString}' variable to the scoped context.`);
  }

  addJudgement(judgement) {
    const context = this, ///
          judgementString = judgement.getString();

    context.trace(`Adding the '${judgementString}' judgement to the scoped context...`);

    this.judgements.push(judgement);

    context.debug(`...added the '${judgementString}' judgement to the scoped context.`);
  }

  addSubproofOrProofAssertion(subproofOrProofAssertion) {
    const context = this, ///
          subproofOrProofAssertionString = subproofOrProofAssertion.getString();

    context.trace(`Adding the '${subproofOrProofAssertionString}' subproof or proof assertion to the scoped context...`);

    this.subproofOrProofAssertions.push(subproofOrProofAssertion);

    context.debug(`...added the '${subproofOrProofAssertionString}' subproof or proof assertion to the scoped context.`);
  }

  findEquivalenceByTerm(term) { return this.equivalences.findEquivalenceByTerm(term); }

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

  static fromNothing(context) {
    const { Equivalences } = elements,
          variables = [],
          judgements = [],
          equivalences = Equivalences.fromNothing(context),
          subproofOrProofAssertions = [],
          scopedContext = new ScopedContext(context, variables, judgements, equivalences, subproofOrProofAssertions);

    return scopedContext;
  }
}

export default ScopedContext;