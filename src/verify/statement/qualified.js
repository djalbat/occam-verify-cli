"use strict";

import { nodeQuery, referenceNameFromReferenceNode } from "../../utilities/query";

const referenceNodeQuery = nodeQuery("/qualifiedStatement/qualification!/reference!"),
      statementNodeQuery = nodeQuery("/qualifiedStatement/statement!");

export default function verifyQualifiedStatement(qualifiedStatementNode, assignments, derived, proofContext) {
  let qualifiedStatementVerified = false;

  const statementNode = statementNodeQuery(qualifiedStatementNode);

  if (statementNode !== null) {
    const statementString = proofContext.nodeAsString(statementNode),
          statementProofContext = proofContext; ///

    proofContext.debug(`Verifying the '${statementString}' qualified statement...`, qualifiedStatementNode);

    const referenceNode = referenceNodeQuery(qualifiedStatementNode),
          referenceName = referenceNameFromReferenceNode(referenceNode);

    if (!qualifiedStatementVerified) {
      const rule = proofContext.findRuleByReferenceName(referenceName);

      if (rule !== null) {
        const ruleMatchesStatement = rule.matchStatement(statementNode, statementProofContext);

        qualifiedStatementVerified = ruleMatchesStatement;  ///
      }
    }

    if (!qualifiedStatementVerified) {
      const axiom = proofContext.findAxiomByReferenceName(referenceName);

      if (axiom !== null) {
        const axiomMatchesStatement = axiom.matchStatement(statementNode, statementProofContext);

        qualifiedStatementVerified = axiomMatchesStatement; ///
      }
    }

    if (!qualifiedStatementVerified) {
      const lemma = proofContext.findLemmaByReferenceName(referenceName);

      if (lemma !== null) {
        const lemmaMatchesStatement = lemma.matchStatement(statementNode, statementProofContext);

        qualifiedStatementVerified = lemmaMatchesStatement; ///
      }
    }

    if (!qualifiedStatementVerified) {
      const theorem = proofContext.findTheoremByReferenceName(referenceName);

      if (theorem !== null) {
        const theoremMatchesStatement = theorem.matchStatement(statementNode, statementProofContext);

        qualifiedStatementVerified = theoremMatchesStatement; ///
      }
    }

    if (!qualifiedStatementVerified) {
      const conjecture = proofContext.findConjectureByReferenceName(referenceName);

      if (conjecture !== null) {
        const conjectureMatchesStatement = conjecture.matchStatement(statementNode, statementProofContext);

        qualifiedStatementVerified = conjectureMatchesStatement; ///
      }
    }
  }

  if (qualifiedStatementVerified) {
    const statementString = proofContext.nodeAsString(statementNode);

    proofContext.info(`Verified the '${statementString}' qualified statement.`, qualifiedStatementNode);
  }

  return qualifiedStatementVerified;
}
