"use strict";

import StatementSubstitution from "../../substitution/statement";

import { equalityFromStatement, judgementFromStatement, typeAssertionFromStatement } from "../../utilities/context";

function unifyAWithRule(statement, reference, substitutions, context) {
  let unifiedWithRule = false;

  if (reference !== null) {
    const rule = context.findRuleByReference(reference);

    if (rule !== null) {
      const ruleString = rule.getString(),
            statementString = statement.getString();

      context.trace(`Unifying the '${statementString}' statement with the '${ruleString}' rule...`);

      const proofStepSubproofs = context.getProofStepSubproofs(),
            statementAndProofStepsUnified = rule.unifyStatementAndProofStepSubproofs(statement, proofStepSubproofs, context);

      unifiedWithRule = statementAndProofStepsUnified;  ///

      if (unifiedWithRule) {
        context.debug(`...unified the '${statementString}' statement with the '${ruleString}' rule.`);
      }
    }
  }

  return unifiedWithRule;
}

function unifyAWithReference(statement, reference, substitutions, context) {
  let unifiedWithReference = false;

  if (reference !== null) {
    const metavariableVerified = reference.verifyMetavariable(context);

    if (metavariableVerified) {
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
  }

  return unifiedWithReference;
}

function unifyAWithAxiomLemmaTheoremOrConjecture(statement, reference, substitutions, context) {
  let unifiedWithAxiomLemmaTheoremOrConjecture = false;

  if (reference !== null) {
    const axiomLemmaTheoremConjecture = context.findAxiomLemmaTheoremConjectureByReference(reference);

    if (axiomLemmaTheoremConjecture !== null) {
      const statementString = statement.getString(),
            axiomLemmaTheoremConjectureString = reference.getString();

      context.trace(`Unifying the '${statementString}' statement with the '${axiomLemmaTheoremConjectureString}' axiom, lemma, theorem or conjecture...`);

      const proofStepSubproofs = context.getProofStepSubproofs(),
            statementAndProofStepsUnified = axiomLemmaTheoremConjecture.unifyStatementAndProofStepSubproofs(statement, proofStepSubproofs, context);

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

function unifyAsEquality(statement, reference, substitutions, context) {
  let unifiedAsEquality = false;

  if (reference === null) {
    const equality = equalityFromStatement(statement, context);

    if (equality !== null) {
      const statementString = statement.getString();

      context.trace(`Unifying the '${statementString}' statement as an equality...`);

      unifiedAsEquality = true;

      context.debug(`...unified the '${statementString}' statement as an equality.`);
    }
  }

  return unifiedAsEquality;
}

function unifyAsJudgement(statement, reference, substitutions, context) {
  let unifiedAsJudgement = false;

  if (reference === null) {
    const judgement = judgementFromStatement(statement, context);

    if (judgement !== null) {
      const statementString = statement.getString();

      context.trace(`Unifying the '${statementString}' statement as a judgement...`);

      unifiedAsJudgement = true;

      context.debug(`...unified the '${statementString}' statement as a judgement.`);
    }
  }

  return unifiedAsJudgement;
}

function unifyAsTypeAssertion(statement, reference, substitutions, context) {
  let unifiedAsTypeAssertion = false;

  if (reference === null) {
    const typeAssertion = typeAssertionFromStatement(statement, context);

    if (typeAssertion !== null) {
      const statementString = statement.getString();

      context.trace(`Unifying the '${statementString}' statement as a type assertion...`);

      unifiedAsTypeAssertion = true;

      context.debug(`...unified the '${statementString}' statement as a type assertion.`);
    }
  }

  return unifiedAsTypeAssertion;
}

function unifyWithProofStepSubproofs(statement, reference, substitutions, context) {
  let unifiedWithProofSteps = false;

  if (reference === null) {
    const proofStepSubproofs = context.getProofStepSubproofs(),
          statementUnifiedWithProofSteps = statement.unifyWithProofStepSubproofs(proofStepSubproofs, context);

    unifiedWithProofSteps = statementUnifiedWithProofSteps; ///
  }

  return unifiedWithProofSteps;
}

const unifyMixins = [
  unifyAWithRule,
  unifyAWithReference,
  unifyAWithAxiomLemmaTheoremOrConjecture,
  unifyAsEquality,
  unifyAsJudgement,
  unifyAsTypeAssertion,
  unifyWithProofStepSubproofs
];

export default unifyMixins;

