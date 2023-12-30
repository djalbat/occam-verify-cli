"use strict";

import { nodeQuery, referenceNameFromReferenceNode } from "../../utilities/query";

const referenceNodeQuery = nodeQuery("/qualifiedStatement/qualification!/reference!"),
      statementNodeQuery = nodeQuery("/qualifiedStatement/statement!");

export default function verifyQualifiedStatement(qualifiedStatementNode, assignments, derived, localContext) {
  let qualifiedStatementVerified = false;

  const statementNode = statementNodeQuery(qualifiedStatementNode);

  if (statementNode !== null) {
    const statementString = localContext.nodeAsString(statementNode),
          statementLocalContext = localContext; ///

    localContext.trace(`Verifying the '${statementString}' qualified statement...`, qualifiedStatementNode);

    const referenceNode = referenceNodeQuery(qualifiedStatementNode),
          referenceName = referenceNameFromReferenceNode(referenceNode);

    if (!qualifiedStatementVerified) {
      const rule = localContext.findRuleByReferenceName(referenceName);

      if (rule !== null) {
        const ruleMatchesStatement = rule.matchStatement(statementNode, statementLocalContext);

        qualifiedStatementVerified = ruleMatchesStatement;  ///
      }
    }

    if (!qualifiedStatementVerified) {
      const axiom = localContext.findAxiomByReferenceName(referenceName);

      if (axiom !== null) {
        const axiomMatchesStatement = axiom.matchStatement(statementNode, statementLocalContext);

        qualifiedStatementVerified = axiomMatchesStatement; ///
      }
    }

    if (!qualifiedStatementVerified) {
      const lemma = localContext.findLemmaByReferenceName(referenceName);

      if (lemma !== null) {
        const lemmaMatchesStatement = lemma.matchStatement(statementNode, statementLocalContext);

        qualifiedStatementVerified = lemmaMatchesStatement; ///
      }
    }

    if (!qualifiedStatementVerified) {
      const theorem = localContext.findTheoremByReferenceName(referenceName);

      if (theorem !== null) {
        const theoremMatchesStatement = theorem.matchStatement(statementNode, statementLocalContext);

        qualifiedStatementVerified = theoremMatchesStatement; ///
      }
    }

    if (!qualifiedStatementVerified) {
      const conjecture = localContext.findConjectureByReferenceName(referenceName);

      if (conjecture !== null) {
        const conjectureMatchesStatement = conjecture.matchStatement(statementNode, statementLocalContext);

        qualifiedStatementVerified = conjectureMatchesStatement; ///
      }
    }

    if (qualifiedStatementVerified) {
      localContext.debug(`...verified the '${statementString}' qualified statement.`, qualifiedStatementNode);
    }
  }

  return qualifiedStatementVerified;
}
