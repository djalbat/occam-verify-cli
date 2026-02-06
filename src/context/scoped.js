"use strict";

import { arrayUtilities } from "necessary";
import { Context, contextUtilities } from "occam-furtle";

import elements from "../elements";

const { last } = arrayUtilities,
      { chainContext } = contextUtilities;

class ScopedContext extends Context {
  constructor(context, variables, judgements, equivalences, subproofOrProofAssertions) {
    super(context);

    this.variables = variables;
    this.judgements = judgements;
    this.equivalences = equivalences;
    this.subproofOrProofAssertions = subproofOrProofAssertions;

    return chainContext(this);
  }

  getVariables(nested = true) {
    let variables;

    if (nested) {
      const context = this.getContext();

      variables = context.getVariables();

      variables = [
        ...this.variables,
        ...variables
      ];
    } else {
      variables = this.variables;
    }

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

  addEquality(equality) {
    let equalityAdded;

    const equalityReflexive = equality.isReflexive();

    if (!equalityReflexive) {
      const { Equivalence } = elements,
            equivalence = Equivalence.fromEquality(equality),
            context = this; ///

      this.equivalences = this.equivalences.mergedWithEquivalence(equivalence, context);
    }

    equalityAdded = true;

    if (equalityAdded) {
      const context = this, ///
            equalityString = equality.getString();

      context.trace(`Added the '${equalityString}' equality.`)
    }

    return equalityAdded;
  }

  addVariable(variable, nested = true) {
    let variableAdded = false;

    const variableIdentifier = variable.getIdentifier(),
          variablePresent = this.isVariablePresentByVariableIdentifier(variableIdentifier, nested);

    if (!variablePresent) {
      this.variables.push(variable);

      variableAdded = true;
    }

    if (variableAdded) {
      const context = this,
            variableString = variable.getString();

      context.trace(`Added the '${variableString}' variable.`)
    }

    return variableAdded;
  }

  addJudgement(judgement) {
    let judgementAdded = false;

    const metavariable = judgement.getMetavariable(),
          judgementPresent = this.isJudgementPresentByMetavariable(metavariable);

    if (!judgementPresent) {
      this.judgements.push(judgement);

      judgementAdded = true;
    }

    if (judgementAdded) {
      const context = this, ///
            judgementString = judgement.getString();

      context.trace(`Added the '${judgementString}' judgement.`)
    }

    return judgementAdded;
  }

  addSubproofOrProofAssertion(subproofOrProofAssertion) {
    this.subproofOrProofAssertions.push(subproofOrProofAssertion);
  }

  findEquivalenceByTerm(term) { return this.equivalences.findEquivalenceByTerm(term); }

  findJudgementByMetavariable(metavariable) {
    const judgements = this.getJudgements(),
          judgement = judgements.find((judgement) => {
            const judgementSingular = judgement.isSingular();

            if (judgementSingular) {
              const judgementMetavariable = judgement.getMetavariable(),
                    judgementMetavariableEqualToMetavariable = judgementMetavariable.isEqualTo(metavariable);

              if (judgementMetavariableEqualToMetavariable) {
                return true;
              }
            }
          }) || null;

    return judgement;
  }

  findVariableByVariableIdentifier(variableIdentifier, nested = true) {
    const variables = this.getVariables(nested),
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
              groundedTermNodeMatches = term.matchNode(groundedTermNode);

            if (groundedTermNodeMatches) {
              return true;
            }
          }),
          termGrounded = termMatchesGroundedTerm; ///

    return termGrounded;
  }

  isVariableDefined(variable) {
    const context = this, ///
          equivalences = this.getEquivalences(),
          groundedTerms = [],
          definedVariables = [];

    equivalences.separateGroundedTermsAndDefinedVariables(groundedTerms, definedVariables, context);

    const variableMatchesDefinedVariable = definedVariables.some((definedVariable) => {
            const definedVariableEqualToVariable = definedVariable.isEqualTo(variable);

            if (definedVariableEqualToVariable === variable) {
              return true;
            }
          }),
          variableDefined = variableMatchesDefinedVariable; ///

    return variableDefined;
  }

  isMetavariableDefined(metavariable) {
    const judgementPresent = this.isJudgementPresentByMetavariable(metavariable),
          metavariableDefined = judgementPresent; ///

    return metavariableDefined
  }

  isJudgementPresentByMetavariable(metavariable) {
    const judgement = this.findJudgementByMetavariable(metavariable),
          judgementPresent = (judgement !== null);

    return judgementPresent;
  }

  isVariablePresentByVariableIdentifier(variableIdentifier, nested = true) {
    const variable = this.findVariableByVariableIdentifier(variableIdentifier, nested),
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