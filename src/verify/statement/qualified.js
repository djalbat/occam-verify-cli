"use strict";

import verifyStatement from "../../verify/statement";

import { nodeQuery, referenceNameFromReferenceNode } from "../../utilities/query";

const referenceNodeQuery = nodeQuery("/qualifiedStatement/qualification!/reference!"),
      statementNodeQuery = nodeQuery("/qualifiedStatement/statement!");

export default function verifyQualifiedStatement(qualifiedStatementNode, assertions, derived, proofContext) {
  let qualifiedStatementVerified = false;

  proofContext.begin(qualifiedStatementNode);

  const statementNode = statementNodeQuery(qualifiedStatementNode);

  if (statementNode !== null) {
    const statementString = proofContext.nodeAsString(statementNode);

    proofContext.debug(`Verifying the '${statementString}' qualified statement...`);

    let statementMatches = false;

    const referenceNode = referenceNodeQuery(qualifiedStatementNode);

    if (referenceNode === null) {
      statementMatches = true;  ///
    } else {
      const referenceName = referenceNameFromReferenceNode(referenceNode);

      if (!statementMatches) {
        const rule = proofContext.findRuleByReferenceName(referenceName),
              ruleMatchesStatement = rule.matchStatement(statementNode, proofContext);

        statementMatches = ruleMatchesStatement;  ///
      }

      if (!statementMatches) {
        const axiom = proofContext.findAxiomByReferenceName(referenceName),
              axiomMatchesStatement = axiom.matchStatement(statementNode, proofContext);

        statementMatches = axiomMatchesStatement; ///
      }

      if (!statementMatches) {
        const lemma = proofContext.findLemmaByReferenceName(referenceName),
              lemmaMatchesStatement = lemma.matchStatement(statementNode, proofContext);

        statementMatches = lemmaMatchesStatement; ///
      }

      if (!statementMatches) {
        const theorem = proofContext.findTheoremByReferenceName(referenceName),
              theoremMatchesStatement = theorem.matchStatement(statementNode, proofContext);

        statementMatches = theoremMatchesStatement; ///
      }

      if (!statementMatches) {
        const conjecture = proofContext.findConjectureByReferenceName(referenceName),
              conjectureMatchesStatement = conjecture.matchStatement(statementNode, proofContext);

        statementMatches = conjectureMatchesStatement; ///
      }
    }

    if (statementMatches) {
      const context = proofContext,
            statementVerified = verifyStatement(statementNode, assertions, derived, context);

      qualifiedStatementVerified = statementVerified; ///
    }
  }

  qualifiedStatementVerified ?
    proofContext.complete(qualifiedStatementNode) :
      proofContext.halt(qualifiedStatementNode);

  return qualifiedStatementVerified;
}
