"use strict";

import verifyStatement from "../../verify/statement";

import { nodeQuery } from "../../utilities/query";

const statementNodeQuery = nodeQuery("/qualifiedStatement/statement!"),
      metavariableNodeQuery = nodeQuery("/qualifiedStatement/reference/metavariable!");

export default function verifyQualifiedStatement(qualifiedStatementNode, substitutions, assignments, derived, localContext) {
  let qualifiedStatementVerified;

  const qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

  localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement...`, qualifiedStatementNode);

  const statementNode = statementNodeQuery(qualifiedStatementNode),
        statementVerified = verifyStatement(statementNode, assignments, derived, localContext);

  if (statementVerified) {
    const unifyQualifiedStatementFunctions = [
      unifyQualifiedStatementAWithRule,
      unifyQualifiedStatementAWithAxiom,
      unifyQualifiedStatementAWithLemma,
      unifyQualifiedStatementAWithTheorem,
      unifyQualifiedStatementAWithConjecture,
      unifyQualifiedStatementAWithReference
    ];

    const qualifiedStatementUnified = unifyQualifiedStatementFunctions.some((unifyQualifiedStatementFunction) => {  ///
      const qualifiedStatementUnified = unifyQualifiedStatementFunction(qualifiedStatementNode, substitutions, localContext);

      if (qualifiedStatementUnified) {
        return true;
      }
    });

    qualifiedStatementVerified = qualifiedStatementUnified; ///
  }

  if (qualifiedStatementVerified) {
    localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement.`, qualifiedStatementNode);
  }

  return qualifiedStatementVerified;
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

    const ruleMatchesStatement = rule.unifyStatement(statementNode, localContext);

    qualifiedStatementUnifiedWithRule = ruleMatchesStatement;  ///

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

    const axiomMatchesStatement = axiom.unifyStatement(statementNode, localContext);

    qualifiedStatementUnifiedWithAxiom = axiomMatchesStatement; ///

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

    const lemmaMatchesStatement = lemma.unifyStatement(statementNode, localContext);

    qualifiedStatementUnifiedWithLemma = lemmaMatchesStatement; ///

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

    const theoremMatchesStatement = theorem.unifyStatement(statementNode, localContext);

    qualifiedStatementUnifiedWithTheorem = theoremMatchesStatement; ///

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

    const conjectureMatchesStatement = conjecture.unifyStatement(statementNode, localContext);

    qualifiedStatementUnifiedWithConjecture = conjectureMatchesStatement; ///

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
    const statementNode = statementNodeQuery(qualifiedStatementNode),
          localContextA = null,
          localContextB = localContext, ///
          statementNodeB = statementNode, ///
          substitutionNodeA = null,
          metavariableNodeA = metavariableNode, ///
          metavariableUnifiedWithStatement = unifyMetavariableWithStatement(metavariableNodeA, statementNodeB, substitutionNodeA, substitutions, localContextA, localContextB, () => {
            const verifiedAhead = true;

            return verifiedAhead;
          });

    qualifiedStatementUnifiedWithReference = metavariableUnifiedWithStatement; ///
  }

  if (qualifiedStatementUnifiedWithReference) {
    localContext.debug(`...unified the '${qualifiedStatementString}' qualified statement with the '${metavariableString}' reference.`, qualifiedStatementNode);
  }

  return qualifiedStatementUnifiedWithReference;
}
