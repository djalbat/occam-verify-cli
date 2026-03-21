"use strict";

import { arrayUtilities } from "necessary";

import Context from "../context";
import elements from "../elements";

const { last } = arrayUtilities;

class ProofContext extends Context {
  constructor(context, variables, judgements, assignments, equivalences, subproofOrProofAssertions, metaLevelSubstitutions) {
    super(context);

    this.variables = variables;
    this.judgements = judgements;
    this.assignments = assignments;
    this.equivalences = equivalences;
    this.subproofOrProofAssertions = subproofOrProofAssertions;
    this.metaLevelSubstitutions = metaLevelSubstitutions;
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

  getMetaLevelSubstitutions() {
    return this.metaLevelSubstitutions;
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

  hasMetaLevelSubstitutions() {
    let metaLevelSubstitutions;

    if (this.metaLevelSubstitutions !== null) {
      metaLevelSubstitutions = true;
    } else {
      const context = this.getContext();

      metaLevelSubstitutions = context.hasMetaLevelSubstitutions();
    }

    return metaLevelSubstitutions;
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

  addMetaLevelSubstitution(metaLevelSubstitution) {
    if (this.metaLevelSubstitutions === null) {
      super.addMetaLevelSubstitution(metaLevelSubstitution);

      return;
    }

    const context = this, ///
          metaLevelSubstitutionA = metaLevelSubstitution, ///
          metaLevelSubstitutionString = metaLevelSubstitution.getString();

    context.trace(`Adding the '${metaLevelSubstitutionString}' meta-level substitution to the proof context...`);

    const metaLevelSubstitutionB = this.metaLevelSubstitutions.find((metaLevelSubstitution) => {
      const metaLevelSubstitutionB = metaLevelSubstitution, ///
            metaLevelSubstitutionAEqualToMetaLevelSubstitutionB = metaLevelSubstitutionA.isEqualTo(metaLevelSubstitutionB);

      if (metaLevelSubstitutionAEqualToMetaLevelSubstitutionB) {
        return true;
      }
    }) || null;

    if (metaLevelSubstitutionB !== null) {
      context.debug(`The '${metaLevelSubstitutionString}' meta-level substitution has already been added to the proof context.`);
    } else {
      this.metaLevelSubstitutions.push(metaLevelSubstitution);

      context.debug(`...added the '${metaLevelSubstitutionString}' substitution to the proof context.`);
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

  findMetaLevelSubstitutionByMetaLevelSubstitutionNode(metaLevelSubstitutionNode) {
    let metaLevelSubstitution;

    if (this.metaLevelSubstitutions === null) {
      metaLevelSubstitution = super.findMetaLevelSubstitutionByMetaLevelSubstitutionNode(metaLevelSubstitutionNode);
    } else {
      metaLevelSubstitution = this.metaLevelSubstitutions.find((metaLevelSubstitution) => {
        const metaLevelSubstitutionNodeMatches = metaLevelSubstitution.matchMetaLevelSubstitutionNode(metaLevelSubstitutionNode);

        if (metaLevelSubstitutionNodeMatches) {
          return true;
        }
      }) || null;
    }

    return metaLevelSubstitution;
  }

  static fromMetaLevelSubstitutions(metaLevelSubstitutions, context) {
    const { Equivalences } = elements,
          variables = [],
          judgements = [],
          assignments = [],
          equivalences = Equivalences.fromNothing(context),
          subproofOrProofAssertions = [],
          proofContext = new ProofContext(context, variables, judgements, assignments, equivalences, subproofOrProofAssertions, metaLevelSubstitutions);

    return proofContext;
  }
}

export default ProofContext;