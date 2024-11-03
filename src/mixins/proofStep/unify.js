"use strict";

import { arrayUtilities } from "necessary";

import StatementSubstitution from "../../substitution/statement";

import { definedAssertionFromStatement, containedAssertionFromStatement } from "../../utilities/verification";

const { front } = arrayUtilities;

function unifyAWithRule(statement, reference, substitutions, context) {
  let unifiedWithRule = false;

  if (reference !== null) {
    const rule = context.findRuleByReference(reference);

    if (rule !== null) {
      const ruleString = rule.getString(),
            statementString = statement.getString();

      context.trace(`Unifying the '${statementString}' statement with the '${ruleString}' rule...`);

      const proofSteps = context.getProofSteps(),
            statementAndProofStepsUnified = rule.unifyStatementAndProofSteps(statement, proofSteps, context);

      unifiedWithRule = statementAndProofStepsUnified;  ///

      if (unifiedWithRule) {
        context.debug(`...unified the '${statementString}' statement with the '${ruleString}' rule.`);
      }
    }
  }

  return unifiedWithRule;
}

function unifyAWithReference(statement, reference, substitutions, context) {
  let unifiedWithReference;

  if (reference !== null) {
    const statementString = statement.getString(),
          referenceString = reference.getString();

    context.trace(`Unifying the '${statementString}' statement with the '${referenceString}' reference...`);

    const metavariable = reference.getMetavariable(),
          statementSubstitution = StatementSubstitution.fromStatementAndMetavariable(statement, metavariable, context),
          substitution = statementSubstitution; ///

    substitutions.addSubstitution(substitution, context);

    unifiedWithReference = true;

    if (unifiedWithReference) {
      context.debug(`...unified the '${statementString}' statement with the '${referenceString}' reference.`);
    }
  }

  return unifiedWithReference;
}

function unifyAWithAxiomLemmaTheoremOrConjecture(statement, reference, substitutions, context) {
  let unifiedWithAxiomLemmaTheoremOrConjecture = false;

  if (reference !== null) {
    const axiom = context.findAxiomByReference(reference),
          lemma = context.findLemmaByReference(reference),
          theorem = context.findTheoremByReference(reference),
          conjecture = context.findConjectureByReference(reference),
          axiomLemmaTheoremConjecture = (axiom || lemma || theorem || conjecture);

    if (axiomLemmaTheoremConjecture !== null) {
      const statementString = statement.getString(),
            axiomLemmaTheoremConjectureString = reference.getString();

      context.trace(`Unifying the '${statementString}' statement with the '${axiomLemmaTheoremConjectureString}' axiom, lemma, theorem or conjecture...`);

      const proofSteps = context.getProofSteps(),
            statementAndProofStepsUnified = axiomLemmaTheoremConjecture.unifyStatementAndProofSteps(statement, proofSteps, context);

      if (statementAndProofStepsUnified) {
        const metavariable = reference.getMetavariable(),
              statementSubstitution = StatementSubstitution.fromStatementAndMetavariable(statement, metavariable, context),
              substitution = statementSubstitution; ///

        substitutions.addSubstitution(substitution, context);

        unifiedWithAxiomLemmaTheoremOrConjecture = true;
      }

      if (unifiedWithAxiomLemmaTheoremOrConjecture) {
        context.debug(`...unified the '${statementString}' statement with the '${axiomLemmaTheoremConjectureString}' axiom, lemma, theorem or conjecture.`);
      }
    }
  }

  return unifiedWithAxiomLemmaTheoremOrConjecture;
}

function unifyIndependentlyAsContainedAssertion(statement, reference, substitutions, context) {
  let unifiedIndependentlyAsContainedAssertion = false;

  if (reference === null) {
    const containedAssertion = containedAssertionFromStatement(statement, context);

    if (containedAssertion !== null) {
      const statementString = statement.getString();

      context.trace(`Unifying the '${statementString}' statement as a contained assertion independently...`);

      const containedAssertionUnifiedIndependently = containedAssertion.unifyIndependently(substitutions, context);

      unifiedIndependentlyAsContainedAssertion = containedAssertionUnifiedIndependently; ///

      if (unifiedIndependentlyAsContainedAssertion) {
        context.debug(`...unified the '${statementString}' statement as a contained assertion independently.`);
      }
    }
  }

  return unifiedIndependentlyAsContainedAssertion;
}

function unifyIndependentlyAsDefinedAssertion(statement, reference, substitutions, context) {
  let unifiedIndependentlyAsDefinedAssertion = false;

  if (reference === null) {
    const definedAssertion = definedAssertionFromStatement(statement, context);

    if (definedAssertion !== null) {
      const statementString = statement.getString();

      context.trace(`Unifying the '${statementString}' statement as a defined assertion independently...`);

      const definedAssertionUnifiedIndependently = definedAssertion.unifyIndependently(substitutions, context);

      unifiedIndependentlyAsDefinedAssertion = definedAssertionUnifiedIndependently; ///

      if (unifiedIndependentlyAsDefinedAssertion) {
        context.debug(`...unified the '${statementString}' statement as a defined assertion independently.`);
      }
    }
  }

  return unifiedIndependentlyAsDefinedAssertion;
}

function unifyWithProofSteps(statement, reference, substitutions, context) {
  let unifiedWithProofSteps = false;

  if (reference === null) {
    let proofSteps = context.getProofSteps();

    proofSteps = front(proofSteps); ///

    const statementUnifiedWithProofSteps = statement.unifyWithProofSteps(proofSteps, context);

    unifiedWithProofSteps = statementUnifiedWithProofSteps; ///
  }

  return unifiedWithProofSteps;
}

const unifyMixins = [
  unifyAWithRule,
  unifyAWithReference,
  unifyAWithAxiomLemmaTheoremOrConjecture,
  unifyIndependentlyAsContainedAssertion,
  unifyIndependentlyAsDefinedAssertion,
  unifyWithProofSteps
];

export default unifyMixins;

