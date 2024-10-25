"use strict";

import StatementSubstitution from "../../../substitution/statement";

import { trim } from "../../../utilities/string";

function unifyAWithRule(qualifiedStatement, substitutions, context) {
  let unifiedWithRule = false;

  const reference = qualifiedStatement.getReference(),
        rule = context.findRuleByReference(reference);

  if (rule !== null) {
    const referenceString = reference.getString(),
          qualifiedStatementString = trim(qualifiedStatement.getString());  ///

    context.trace(`Unifying the '${qualifiedStatementString}' qualified statement with the '${referenceString}' rule...`);

    const statement = qualifiedStatement.getStatement(),
          statementUnified = rule.unifyStatement(statement, context);

    unifiedWithRule = statementUnified;  ///

    if (unifiedWithRule) {
      context.debug(`...unified the '${qualifiedStatementString}' qualified statement with the '${referenceString}' rule.`);
    }
  }

  return unifiedWithRule;
}

function unifyAWithReference(qualifiedStatement, substitutions, context) {
  let unifiedWithReference = false;

  const reference = qualifiedStatement.getReference(),
        metavariableNode = reference.getMetavariableNode(),
        metavariablePresent = context.isMetavariablePresentByMetavariableNode(metavariableNode);

  if (metavariablePresent) {
    const statement = qualifiedStatement.getStatement(),
          statementString = statement.getString(),
          referenceString = reference.getString();

    context.trace(`Unifying the '${statementString}' qualified statement with the '${referenceString}' reference...`);

    const metavariable = reference.getMetavariable(),
          statementSubstitution = StatementSubstitution.fromStatementAndMetavariable(statement, metavariable, context),
          substitution = statementSubstitution; ///

    substitutions.addSubstitution(substitution, context);

    unifiedWithReference = true;

    if (unifiedWithReference) {
      context.debug(`...unified the '${statementString}' qualified statement with the '${referenceString}' reference.`);
    }
  }

  return unifiedWithReference;
}

function unifyAWithAxiomLemmaTheoremOrConjecture(qualifiedStatement, substitutions, context) {
  let unifiedWithAxiomLemmaTheoremOrConjecture = false;

  const reference = qualifiedStatement.getReference(),
        axiom = context.findAxiomByReference(reference),
        lemma = context.findLemmaByReference(reference),
        theorem = context.findTheoremByReference(reference),
        conjecture = context.findConjectureByReference(reference),
        axiomLemmaTheoremConjecture = (axiom || lemma || theorem || conjecture);

  if (axiomLemmaTheoremConjecture !== null) {
    const referenceString = reference.getString(),
          qualifiedStatementString = trim(qualifiedStatement.getString());  ///

    context.trace(`Unifying the '${qualifiedStatementString}' qualified statement with the '${referenceString}' axiom, lemma, theorem or conjecture...`);

    const statement = qualifiedStatement.getStatement(),
          statementUnified = axiomLemmaTheoremConjecture.unifyStatement(statement, context);

    if (statementUnified) {
      const metavariable = reference.getMetavariable(),
            statementSubstitution = StatementSubstitution.fromStatementAndMetavariable(statement, metavariable, context),
            substitution = statementSubstitution; ///

      substitutions.addSubstitution(substitution, context);

      unifiedWithAxiomLemmaTheoremOrConjecture = true;
    }

    if (unifiedWithAxiomLemmaTheoremOrConjecture) {
      context.debug(`...unified the '${qualifiedStatementString}' qualified statement with the '${referenceString}' axiom, lemma, theorem or conjecture.`);
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

