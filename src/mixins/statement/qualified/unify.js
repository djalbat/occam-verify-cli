"use strict";

import StatementForMetavariableSubstitution from "../../../substitution/statementForMetavariable";

import { trim } from "../../../utilities/string";
import { metavariableNameFromMetavariableNode } from "../../../utilities/name";

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

function unifyAWithAxiom(qualifiedStatement, substitutions, localContext) {
  let unifiedWithAxiom = false;

  const reference = qualifiedStatement.getReference(),
        axiom = localContext.findAxiomByReference(reference);

  if (axiom !== null) {
    const referenceString = reference.getString(),
          qualifiedStatementString = trim(qualifiedStatement.getString());  ///

    localContext.trace(`Unifying the '${qualifiedStatementString}' qualified statement with the '${referenceString}' axiom...`);

    const statement = qualifiedStatement.getStatement(),
          statementUnified = axiom.unifyStatement(statement, localContext);

    unifiedWithAxiom = statementUnified; ///

    if (unifiedWithAxiom) {
      localContext.debug(`...unified the '${qualifiedStatementString}' qualified statement with the '${referenceString}' axiom.`);
    }
  }

  return unifiedWithAxiom;
}

function unifyAWithLemma(qualifiedStatement, substitutions, localContext) {
  let unifiedWithLemma = false;

  const reference = qualifiedStatement.getReference(),
        lemma = localContext.findLemmaByReference(reference);

  if (lemma !== null) {
    const referenceString = reference.getString(),
          qualifiedStatementString = trim(qualifiedStatement.getString());  ///

    localContext.trace(`Unifying the '${qualifiedStatementString}' qualified statement with the '${referenceString}' lemma...`);

    const statement = qualifiedStatement.getStatement(),
          statementUnified = lemma.unifyStatement(statement, localContext);

    unifiedWithLemma = statementUnified; ///

    if (unifiedWithLemma) {
      localContext.debug(`...unified the '${qualifiedStatementString}' qualified statement with the '${referenceString}' lemma.`);
    }
  }

  return unifiedWithLemma;
}

function unifyAWithTheorem(qualifiedStatement, substitutions, localContext) {
  let unifiedWithTheorem = false;

  const reference = qualifiedStatement.getReference(),
        theorem = localContext.findTheoremByReference(reference);

  if (theorem !== null) {
    const referenceString = reference.getString(),
          qualifiedStatementString = trim(qualifiedStatement.getString());  ///

    localContext.trace(`Unifying the '${qualifiedStatementString}' qualified statement with the '${referenceString}' theorem...`);

    const statement = qualifiedStatement.getStatement(),
          statementUnified = theorem.unifyStatement(statement, localContext);

    unifiedWithTheorem = statementUnified; ///

    if (unifiedWithTheorem) {
      localContext.debug(`...unified the '${qualifiedStatementString}' qualified statement with the '${referenceString}' theorem.`);
    }
  }

  return unifiedWithTheorem;
}

function unifyAWithConjecture(qualifiedStatement, substitutions, localContext) {
  let unifiedWithConjecture = false;

  const reference = qualifiedStatement.getReference(),
        conjecture = localContext.findConjectureByReference(reference);

  if (conjecture !== null) {
    const referenceString = reference.getString(),
          qualifiedStatementString = trim(qualifiedStatement.getString());  ///

    localContext.trace(`Unifying the '${qualifiedStatementString}' qualified statement with the '${referenceString}' conjecture...`);

    const statement = qualifiedStatement.getStatement(),
          statementUnified = conjecture.unifyStatement(statement, localContext);

    unifiedWithConjecture = statementUnified; ///

    if (unifiedWithConjecture) {
      localContext.debug(`...unified the '${qualifiedStatementString}' qualified statement with the '${referenceString}' conjecture.`);
    }
  }

  return unifiedWithConjecture;
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

const unifyMixins = [
  unifyAWithRule,
  unifyAWithAxiom,
  unifyAWithLemma,
  unifyAWithTheorem,
  unifyAWithConjecture,
  unifyAWithReference
];

export default unifyMixins;

