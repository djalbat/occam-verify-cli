"use strict";

import ProofStep from "../step/proof";
import ProofContext from "../context/proof";
import verifySupposition from "./supposition";
import verifyQualifiedStatement from "../verify/statement/qualified";
import verifyUnqualifiedStatement from "../verify/statement/unqualified";

import { nodeQuery, nodesQuery } from "../utilities/query";
import { SUBPROOF_RULE_NAME, QUALIFIED_STATEMENT_RULE_NAME, UNQUALIFIED_STATEMENT_RULE_NAME } from "../ruleNames";

const childNodesQuery = nodesQuery("/derivation|subDerivation/*"),
      statementNodeQuery = nodeQuery("/qualifiedStatement|unqualifiedStatement/statement!"),
      suppositionNodesQuery = nodesQuery("/subproof/supposition"),
      subDerivationNodeQuery = nodeQuery("/subproof/subDerivation");

export default function verifyDerivation(derivationNode, proofContext) {
  let derivationVerified;

  const childNodes = childNodesQuery(derivationNode);

  derivationVerified = childNodes.every((childNode) => {
    const childVerified = verifyChild(childNode, proofContext);

    if (childVerified) {
      return true;
    }
  });

  return derivationVerified;
}

function verifySubDerivation(subDerivationNode, proofContext) {
  let subDerivationVerified;

  const childNodes = childNodesQuery(subDerivationNode);

  subDerivationVerified = childNodes.every((childNode) => {
    const childVerified = verifyChild(childNode, proofContext);

    if (childVerified) {
      return true;
    }
  });

  return subDerivationVerified;
}

function verifySubproof(subproofNode, proofContext) {
  let subproofVerified = false;

  proofContext = ProofContext.fromProofContext(proofContext); ///

  const suppositions = [],
        suppositionNodes = suppositionNodesQuery(subproofNode),
        suppositionsVerified = suppositionNodes.every((suppositionNode) => {
          const suppositionVerified = verifySupposition(suppositionNode, suppositions, proofContext);

          if (suppositionVerified) {
            return true;
          }
        });

  if (suppositionsVerified) {
    const subDerivationNode = subDerivationNodeQuery(subproofNode),
          subDerivationVerified = verifySubDerivation(subDerivationNode, proofContext);

    if (subDerivationVerified) {
      subproofVerified = true;
    }
  }

  return subproofVerified;
}

function verifyChild(childNode, proofContext) {
  let childVerified;

  const childNodeRuleName = childNode.getRuleName();

  switch (childNodeRuleName) {
    case SUBPROOF_RULE_NAME: {
      const subproofNode = childNode,  ///
            subproofVerified = verifySubproof(subproofNode, proofContext);

      if (subproofVerified) {
        const proofStep = ProofStep.fromSubproofNode(subproofNode);

        proofContext.addProofStep(proofStep);

        childVerified = true;
      }

      break;
    }

    case QUALIFIED_STATEMENT_RULE_NAME: {
      const derived = true,
            assertions = [],
            qualifiedStatementNode = childNode,  ///
            qualifiedStatementVerified = verifyQualifiedStatement(qualifiedStatementNode, assertions, derived, proofContext);

      if (qualifiedStatementVerified) {
        const statementNode = statementNodeQuery(qualifiedStatementNode),
              proofStep = ProofStep.fromStatementNode(statementNode);

        proofContext.addProofStep(proofStep);

        childVerified = qualifiedStatementVerified; ///
      }

      break;
    }

    case UNQUALIFIED_STATEMENT_RULE_NAME: {
      const derived = true,
            assertions = [],
            unqualifiedStatementNode = childNode,  ///
            unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, assertions, derived, proofContext);

      if (unqualifiedStatementVerified) {
        const statementNode = statementNodeQuery(unqualifiedStatementNode),
              proofStep = ProofStep.fromStatementNode(statementNode);

        proofContext.addProofStep(proofStep);

        childVerified = true;
      }

      break;
    }
  }

  return childVerified;
}
