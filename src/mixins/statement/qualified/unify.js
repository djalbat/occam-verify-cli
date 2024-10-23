"use strict";

import StatementForMetavariableSubstitution from "../../../substitution/statementForMetavariable";

import { trim } from "../../../utilities/string";

function unifyAWithRule(qualifiedStatement, substitutions, localContext) {
  let unifiedWithRule = false;

  const reference = qualifiedStatement.getReference(),
        rule = localContext.findRuleByReference(reference);

  if (rule !== null) {
    const referenceString = reference.getString(),
          qualifiedStatementString = trim(qualifiedStatement.getString());  ///

    localContext.trace(`Unifying the '${qualifiedStatementString}' qualified statement with the '${referenceString}' rule...`);

    const statement = qualifiedStatement.getStatement(),
          statementUnified = rule.unifyStatement(statement, localContext);

    unifiedWithRule = statementUnified;  ///

    if (unifiedWithRule) {
      localContext.debug(`...unified the '${qualifiedStatementString}' qualified statement with the '${referenceString}' rule.`);
    }
  }

  return unifiedWithRule;
}

function unifyAWithReference(qualifiedStatement, substitutions, localContext) {
  let unifiedWithReference = false;

  const reference = qualifiedStatement.getReference(),
        metavariableNode = reference.getMetavariableNode(),
        metavariablePresent = localContext.isMetavariablePresentByMetavariableNode(metavariableNode, localContext);

  if (metavariablePresent) {
    const statement = qualifiedStatement.getStatement(),
          statementString = statement.getString(),
          referenceString = reference.getString();

    localContext.trace(`Unifying the '${statementString}' qualified statement with the '${referenceString}' reference...`);

    const metavariable = reference.getMetavariable(),
          statementForMetavariableSubstitution = StatementForMetavariableSubstitution.fromStatementAndMetavariable(statement, metavariable, localContext),
          substitution = statementForMetavariableSubstitution; ///

    substitutions.addSubstitution(substitution, localContext);

    unifiedWithReference = true;

    if (unifiedWithReference) {
      localContext.debug(`...unified the '${statementString}' qualified statement with the '${referenceString}' reference.`);
    }
  }

  return unifiedWithReference;
}

function unifyAWithAxiomLemmaTheoremOrConjecture(qualifiedStatement, substitutions, localContext) {
  let unifiedWithAxiomLemmaTheoremOrConjecture = false;

  const reference = qualifiedStatement.getReference(),
        axiom = localContext.findAxiomByReference(reference),
        lemma = localContext.findLemmaByReference(reference),
        theorem = localContext.findTheoremByReference(reference),
        conjecture = localContext.findConjectureByReference(reference),
        axiomLemmaTheoremConjecture = (axiom || lemma || theorem || conjecture);

  if (axiomLemmaTheoremConjecture !== null) {
    const referenceString = reference.getString(),
          qualifiedStatementString = trim(qualifiedStatement.getString());  ///

    localContext.trace(`Unifying the '${qualifiedStatementString}' qualified statement with the '${referenceString}' axiom, lemma, theorem or conjecture...`);

    const statement = qualifiedStatement.getStatement(),
          statementUnified = axiomLemmaTheoremConjecture.unifyStatement(statement, localContext);

    if (statementUnified) {
      const metavariable = reference.getMetavariable(),
            statementForMetavariableSubstitution = StatementForMetavariableSubstitution.fromStatementAndMetavariable(statement, metavariable, localContext),
            substitution = statementForMetavariableSubstitution; ///

      substitutions.addSubstitution(substitution, localContext);

      unifiedWithAxiomLemmaTheoremOrConjecture = true;
    }

    if (unifiedWithAxiomLemmaTheoremOrConjecture) {
      localContext.debug(`...unified the '${qualifiedStatementString}' qualified statement with the '${referenceString}' axiom, lemma, theorem or conjecture.`);
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

