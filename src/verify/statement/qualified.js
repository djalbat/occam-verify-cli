"use strict";

import verifyStatement from "../../verify/statement";

import { nodeQuery } from "../../utilities/query";

const statementNodeQuery = nodeQuery("/qualifiedStatement/statement!"),
      metavariableNodeQuery = nodeQuery("/qualifiedStatement/reference/metavariable!");

const unifyDerivedQualifiedStatementFunctions = [
  unifyDerivedQualifiedStatementAWithRule,
  unifyDerivedQualifiedStatementAWithAxiom,
  unifyDerivedQualifiedStatementAWithLemma,
  unifyDerivedQualifiedStatementAWithTheorem,
  unifyDerivedQualifiedStatementAWithConjecture,
  unifyDerivedQualifiedStatementAWithReference
];

export default function verifyQualifiedStatement(qualifiedStatementNode, substitutions, assignments, derived, localContext) {
  let qualifiedStatementVerified;

  const qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

  localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement...`, qualifiedStatementNode);

  const statementNode = statementNodeQuery(qualifiedStatementNode),
        statementVerified = verifyStatement(statementNode, assignments, derived, localContext);

  if (statementVerified) {
    const derivedQualifiedStatementUnified = unifyDerivedQualifiedStatement(qualifiedStatementNode, substitutions, localContext);

    qualifiedStatementVerified = derivedQualifiedStatementUnified; ///
  }

  if (qualifiedStatementVerified) {
    localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement.`, qualifiedStatementNode);
  }

  return qualifiedStatementVerified;
}

function unifyDerivedQualifiedStatement(qualifiedStatementNode, substitutions, localContext) {
  let derivedQualifiedStatementUnified;

  const qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

  localContext.trace(`Unifying the '${qualifiedStatementString}' derived qualified statement...`, qualifiedStatementNode);

  derivedQualifiedStatementUnified = unifyDerivedQualifiedStatementFunctions.some((unifyDerivedQualifiedStatementFunction) => {
    const derivedQualifiedStatementUnified = unifyDerivedQualifiedStatementFunction(qualifiedStatementNode, substitutions, localContext);

    return derivedQualifiedStatementUnified;
  });

  if (derivedQualifiedStatementUnified) {
    localContext.debug(`...unified the '${qualifiedStatementString}' derived qualified statement.`, qualifiedStatementNode);
  }

  return derivedQualifiedStatementUnified;
}

function unifyDerivedQualifiedStatementAWithRule(qualifiedStatementNode, substitutions, localContext) {
  let derivedQualifiedStatementUnifiedWithRule = false;

  const metavariableNode = metavariableNodeQuery(qualifiedStatementNode),
        rule = localContext.findRuleByMetavariableNode(metavariableNode);

  if (rule !== null) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          metavariableString = localContext.nodeAsString(metavariableNode),
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Unifying the '${qualifiedStatementString}' derived qualified statement with the '${metavariableString}' rule...`, qualifiedStatementNode);

    const statementUnified = rule.unifyStatement(statementNode, localContext);

    derivedQualifiedStatementUnifiedWithRule = statementUnified;  ///

    if (derivedQualifiedStatementUnifiedWithRule) {
      localContext.debug(`...unified the '${qualifiedStatementString}' derived qualified statement with the '${metavariableString}' rule.`, qualifiedStatementNode);
    }
  }

  return derivedQualifiedStatementUnifiedWithRule;
}

function unifyDerivedQualifiedStatementAWithAxiom(qualifiedStatementNode, substitutions, localContext) {
  let derivedQualifiedStatementUnifiedWithAxiom = false;

  const metavariableNode = metavariableNodeQuery(qualifiedStatementNode),
        axiom = localContext.findAxiomByMetavariableNode(metavariableNode);

  if (axiom !== null) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          metavariableString = localContext.nodeAsString(metavariableNode),
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Unifying the '${qualifiedStatementString}' derived qualified statement with the '${metavariableString}' axiom...`, qualifiedStatementNode);

    const statementUnified = axiom.unifyStatement(statementNode, localContext);

    derivedQualifiedStatementUnifiedWithAxiom = statementUnified; ///

    if (derivedQualifiedStatementUnifiedWithAxiom) {
      localContext.debug(`...unified the '${qualifiedStatementString}' derived qualified statement with the '${metavariableString}' axiom.`, qualifiedStatementNode);
    }
  }

  return derivedQualifiedStatementUnifiedWithAxiom;
}

function unifyDerivedQualifiedStatementAWithLemma(qualifiedStatementNode, substitutions, localContext) {
  let derivedQualifiedStatementUnifiedWithLemma = false;

  const metavariableNode = metavariableNodeQuery(qualifiedStatementNode),
        lemma = localContext.findLemmaByMetavariableNode(metavariableNode);

  if (lemma !== null) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          metavariableString = localContext.nodeAsString(metavariableNode),
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Unifying the '${qualifiedStatementString}' derived qualified statement with the '${metavariableString}' lemma...`, qualifiedStatementNode);

    const statementUnified = lemma.unifyStatement(statementNode, localContext);

    derivedQualifiedStatementUnifiedWithLemma = statementUnified; ///

    if (derivedQualifiedStatementUnifiedWithLemma) {
      localContext.debug(`...unified the '${qualifiedStatementString}' derived qualified statement with the '${metavariableString}' lemma.`, qualifiedStatementNode);
    }
  }

  return derivedQualifiedStatementUnifiedWithLemma;
}

function unifyDerivedQualifiedStatementAWithTheorem(qualifiedStatementNode, substitutions, localContext) {
  let derivedQualifiedStatementUnifiedWithTheorem = false;

  const metavariableNode = metavariableNodeQuery(qualifiedStatementNode),
        theorem = localContext.findTheoremByMetavariableNode(metavariableNode);

  if (theorem !== null) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          metavariableString = localContext.nodeAsString(metavariableNode),
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Unifying the '${qualifiedStatementString}' derived qualified statement with the '${metavariableString}' theorem...`, qualifiedStatementNode);

    const statementUnified = theorem.unifyStatement(statementNode, localContext);

    derivedQualifiedStatementUnifiedWithTheorem = statementUnified; ///

    if (derivedQualifiedStatementUnifiedWithTheorem) {
      localContext.debug(`...unified the '${qualifiedStatementString}' derived qualified statement with the '${metavariableString}' theorem.`, qualifiedStatementNode);
    }
  }

  return derivedQualifiedStatementUnifiedWithTheorem;
}

function unifyDerivedQualifiedStatementAWithConjecture(qualifiedStatementNode, substitutions, localContext) {
  let derivedQualifiedStatementUnifiedWithConjecture = false;

  const metavariableNode = metavariableNodeQuery(qualifiedStatementNode),
        conjecture = localContext.findConjectureByMetavariableNode(metavariableNode);

  if (conjecture !== null) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          metavariableString = localContext.nodeAsString(metavariableNode),
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Unifying the '${qualifiedStatementString}' derived qualified statement with the '${metavariableString}' conjecture...`, qualifiedStatementNode);

    const statementUnified = conjecture.unifyStatement(statementNode, localContext);

    derivedQualifiedStatementUnifiedWithConjecture = statementUnified; ///

    if (derivedQualifiedStatementUnifiedWithConjecture) {
      localContext.debug(`...unified the '${qualifiedStatementString}' derived qualified statement with the '${metavariableString}' conjecture.`, qualifiedStatementNode);
    }
  }

  return derivedQualifiedStatementUnifiedWithConjecture;
}

function unifyDerivedQualifiedStatementAWithReference(qualifiedStatementNode, substitutions, localContext) {
  let derivedQualifiedStatementUnifiedWithReference = false;

  const metavariableNode = metavariableNodeQuery(qualifiedStatementNode),
        metavariableString = localContext.nodeAsString(metavariableNode),
        metavariablePresent = localContext.isMetavariablePresentByMetavariableNode(metavariableNode),
        qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

  localContext.trace(`Unifying the '${qualifiedStatementString}' derived qualified statement with the '${metavariableString}' reference...`, qualifiedStatementNode);

  if (metavariablePresent) {

    debugger

  }

  if (derivedQualifiedStatementUnifiedWithReference) {
    localContext.debug(`...unified the '${qualifiedStatementString}' derived qualified statement with the '${metavariableString}' reference.`, qualifiedStatementNode);
  }

  return derivedQualifiedStatementUnifiedWithReference;
}
