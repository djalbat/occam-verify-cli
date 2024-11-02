"use strict";

import StatementSubstitution from "../../substitution/statement";

import { trim } from "../../utilities/string";

function unifyAWithRule(statement, substitutions, context) {
  let unifiedWithRule = false;

  const reference = statement.getReference(),
        rule = context.findRuleByReference(reference);

  if (rule !== null) {
    const ruleString = rule.getString(),
          statementString = trim(statement.getString());  ///

    context.trace(`Unifying the '${statementString}' statement with the '${ruleString}' rule...`);

    const statement = statement.getStatement(),
          proofSteps = context.getProofSteps(),
          statementAndProofStepsUnified = rule.unifyStatementAndProofSteps(statement, proofSteps, context);

    unifiedWithRule = statementAndProofStepsUnified;  ///

    if (unifiedWithRule) {
      context.debug(`...unified the '${statementString}' statement with the '${ruleString}' rule.`);
    }
  }

  return unifiedWithRule;
}

function unifyAWithReference(statement, substitutions, context) {
  let unifiedWithReference;

  const reference = statement.getReference(),
        statementString = statement.getString(),
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

  return unifiedWithReference;
}

function unifyAWithAxiomLemmaTheoremOrConjecture(statement, substitutions, context) {
  let unifiedWithAxiomLemmaTheoremOrConjecture = false;

  const reference = statement.getReference(),
        axiom = context.findAxiomByReference(reference),
        lemma = context.findLemmaByReference(reference),
        theorem = context.findTheoremByReference(reference),
        conjecture = context.findConjectureByReference(reference),
        axiomLemmaTheoremConjecture = (axiom || lemma || theorem || conjecture);

  if (axiomLemmaTheoremConjecture !== null) {
    const statementString = trim(statement.getString()),  ///
          axiomLemmaTheoremConjectureString = reference.getString();

    context.trace(`Unifying the '${statementString}' statement with the '${axiomLemmaTheoremConjectureString}' axiom, lemma, theorem or conjecture...`);

    const statement = statement.getStatement(),
          proofSteps = context.getProofSteps(),
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

  return unifiedWithAxiomLemmaTheoremOrConjecture;
}

const unifyMixins = [
  unifyAWithRule,
  unifyAWithReference,
  unifyAWithAxiomLemmaTheoremOrConjecture
];

export default unifyMixins;

