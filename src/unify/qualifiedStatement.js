"use strict";

import { nodeQuery } from "../utilities/query";

const statementNodeQuery = nodeQuery("/qualifiedStatement/statement!"),
      metavariableNodeQuery = nodeQuery("/qualifiedStatement/reference/metavariable!");

const unifyQualifiedStatementFunctions = [
  unifyQualifiedStatementAWithRule,
  unifyQualifiedStatementAWithAxiom,
  unifyQualifiedStatementAWithLemma,
  unifyQualifiedStatementAWithTheorem,
  unifyQualifiedStatementAWithConjecture,
  unifyQualifiedStatementAWithReference
];

export default function unifyQualifiedStatement(qualifiedStatementNode, substitutions, localContext) {
  let qualifiedStatementUnified;

  const qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

  localContext.trace(`Unifying the '${qualifiedStatementString}' qualified statement...`, qualifiedStatementNode);

  qualifiedStatementUnified = unifyQualifiedStatementFunctions.some((unifyQualifiedStatementFunction) => {
    const qualifiedStatementUnified = unifyQualifiedStatementFunction(qualifiedStatementNode, substitutions, localContext);

    return qualifiedStatementUnified;
  });

  if (qualifiedStatementUnified) {
    localContext.debug(`...unified the '${qualifiedStatementString}' qualified statement.`, qualifiedStatementNode);
  }

  return qualifiedStatementUnified;
}

function unifyQualifiedStatementAWithRule(qualifiedStatementNode, substitutions, localContext) {
  let qualifiedStatementUnifiedWithRule = false;

  const metavariableNode = metavariableNodeQuery(qualifiedStatementNode),
        rule = localContext.findRuleByMetavariableNode(metavariableNode);

  if (rule !== null) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          metavariableString = localContext.nodeAsString(metavariableNode),
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Unifying the '${qualifiedStatementString}' qualified statement with the '${metavariableString}' rule...`, qualifiedStatementNode);

    const statementUnified = rule.unifyStatement(statementNode, localContext);

    qualifiedStatementUnifiedWithRule = statementUnified;  ///

    if (qualifiedStatementUnifiedWithRule) {
      localContext.debug(`...unified the '${qualifiedStatementString}' qualified statement with the '${metavariableString}' rule.`, qualifiedStatementNode);
    }
  }

  return qualifiedStatementUnifiedWithRule;
}

function unifyQualifiedStatementAWithAxiom(qualifiedStatementNode, substitutions, localContext) {
  let qualifiedStatementUnifiedWithAxiom = false;

  const metavariableNode = metavariableNodeQuery(qualifiedStatementNode),
        axiom = localContext.findAxiomByMetavariableNode(metavariableNode);

  if (axiom !== null) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          metavariableString = localContext.nodeAsString(metavariableNode),
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Unifying the '${qualifiedStatementString}' qualified statement with the '${metavariableString}' axiom...`, qualifiedStatementNode);

    const statementUnified = axiom.unifyStatement(statementNode, localContext);

    qualifiedStatementUnifiedWithAxiom = statementUnified; ///

    if (qualifiedStatementUnifiedWithAxiom) {
      localContext.debug(`...unified the '${qualifiedStatementString}' qualified statement with the '${metavariableString}' axiom.`, qualifiedStatementNode);
    }
  }

  return qualifiedStatementUnifiedWithAxiom;
}

function unifyQualifiedStatementAWithLemma(qualifiedStatementNode, substitutions, localContext) {
  let qualifiedStatementUnifiedWithLemma = false;

  const metavariableNode = metavariableNodeQuery(qualifiedStatementNode),
        lemma = localContext.findLemmaByMetavariableNode(metavariableNode);

  if (lemma !== null) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          metavariableString = localContext.nodeAsString(metavariableNode),
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Unifying the '${qualifiedStatementString}' qualified statement with the '${metavariableString}' lemma...`, qualifiedStatementNode);

    const statementUnified = lemma.unifyStatement(statementNode, localContext);

    qualifiedStatementUnifiedWithLemma = statementUnified; ///

    if (qualifiedStatementUnifiedWithLemma) {
      localContext.debug(`...unified the '${qualifiedStatementString}' qualified statement with the '${metavariableString}' lemma.`, qualifiedStatementNode);
    }
  }

  return qualifiedStatementUnifiedWithLemma;
}

function unifyQualifiedStatementAWithTheorem(qualifiedStatementNode, substitutions, localContext) {
  let qualifiedStatementUnifiedWithTheorem = false;

  const metavariableNode = metavariableNodeQuery(qualifiedStatementNode),
        theorem = localContext.findTheoremByMetavariableNode(metavariableNode);

  if (theorem !== null) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          metavariableString = localContext.nodeAsString(metavariableNode),
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Unifying the '${qualifiedStatementString}' qualified statement with the '${metavariableString}' theorem...`, qualifiedStatementNode);

    const statementUnified = theorem.unifyStatement(statementNode, localContext);

    qualifiedStatementUnifiedWithTheorem = statementUnified; ///

    if (qualifiedStatementUnifiedWithTheorem) {
      localContext.debug(`...unified the '${qualifiedStatementString}' qualified statement with the '${metavariableString}' theorem.`, qualifiedStatementNode);
    }
  }

  return qualifiedStatementUnifiedWithTheorem;
}

function unifyQualifiedStatementAWithConjecture(qualifiedStatementNode, substitutions, localContext) {
  let qualifiedStatementUnifiedWithConjecture = false;

  const metavariableNode = metavariableNodeQuery(qualifiedStatementNode),
        conjecture = localContext.findConjectureByMetavariableNode(metavariableNode);

  if (conjecture !== null) {
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          metavariableString = localContext.nodeAsString(metavariableNode),
          qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

    localContext.trace(`Unifying the '${qualifiedStatementString}' qualified statement with the '${metavariableString}' conjecture...`, qualifiedStatementNode);

    const statementUnified = conjecture.unifyStatement(statementNode, localContext);

    qualifiedStatementUnifiedWithConjecture = statementUnified; ///

    if (qualifiedStatementUnifiedWithConjecture) {
      localContext.debug(`...unified the '${qualifiedStatementString}' qualified statement with the '${metavariableString}' conjecture.`, qualifiedStatementNode);
    }
  }

  return qualifiedStatementUnifiedWithConjecture;
}

function unifyQualifiedStatementAWithReference(qualifiedStatementNode, substitutions, localContext) {
  let qualifiedStatementUnifiedWithReference = false;

  const metavariableNode = metavariableNodeQuery(qualifiedStatementNode),
        metavariableString = localContext.nodeAsString(metavariableNode),
        metavariablePresent = localContext.isMetavariablePresentByMetavariableNode(metavariableNode),
        qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

  localContext.trace(`Unifying the '${qualifiedStatementString}' qualified statement with the '${metavariableString}' reference...`, qualifiedStatementNode);

  if (metavariablePresent) {

    debugger

  }

  if (qualifiedStatementUnifiedWithReference) {
    localContext.debug(`...unified the '${qualifiedStatementString}' qualified statement with the '${metavariableString}' reference.`, qualifiedStatementNode);
  }

  return qualifiedStatementUnifiedWithReference;
}
