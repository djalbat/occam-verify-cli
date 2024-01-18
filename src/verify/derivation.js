"use strict";

import ProofStep from "../step/proof";
import LocalContext from "../context/local";
import verifySupposition from "../verify/supposition";
import verifyQualifiedStatement from "../verify/statement/qualified";
import verifyUnqualifiedStatement from "../verify/statement/unqualified";

import { nodeQuery, nodesQuery } from "../utilities/query";
import { SUBPROOF_RULE_NAME, QUALIFIED_STATEMENT_RULE_NAME, UNQUALIFIED_STATEMENT_RULE_NAME } from "../ruleNames";

const childNodesQuery = nodesQuery("/derivation|subDerivation/*"),
      statementNodeQuery = nodeQuery("/qualifiedStatement|unqualifiedStatement/statement!"),
      suppositionNodesQuery = nodesQuery("/subproof/supposition"),
      subDerivationNodeQuery = nodeQuery("/subproof/subDerivation");

export default function verifyDerivation(derivationNode, localContext) {
  let derivationVerified;

  const childNodes = childNodesQuery(derivationNode);

  derivationVerified = childNodes.every((childNode) => {
    const childVerified = verifyChild(childNode, localContext);

    if (childVerified) {
      return true;
    }
  });

  return derivationVerified;
}

function verifySubDerivation(subDerivationNode, localContext) {
  let subDerivationVerified;

  const childNodes = childNodesQuery(subDerivationNode);

  subDerivationVerified = childNodes.every((childNode) => {
    const childVerified = verifyChild(childNode, localContext);

    if (childVerified) {
      return true;
    }
  });

  return subDerivationVerified;
}

function verifySubproof(subproofNode, localContext) {
  let subproofVerified = false;

  localContext = LocalContext.fromLocalContext(localContext); ///

  const suppositions = [],
        suppositionNodes = suppositionNodesQuery(subproofNode),
        suppositionsVerified = suppositionNodes.every((suppositionNode) => {
          const suppositionVerified = verifySupposition(suppositionNode, suppositions, localContext);

          if (suppositionVerified) {
            return true;
          }
        });

  if (suppositionsVerified) {
    const subDerivationNode = subDerivationNodeQuery(subproofNode),
          subDerivationVerified = verifySubDerivation(subDerivationNode, localContext);

    if (subDerivationVerified) {
      subproofVerified = true;
    }
  }

  return subproofVerified;
}

function verifyChild(childNode, localContext) {
  let childVerified;

  const childNodeRuleName = childNode.getRuleName();

  switch (childNodeRuleName) {
    case SUBPROOF_RULE_NAME: {
      const subproofNode = childNode,  ///
            subproofVerified = verifySubproof(subproofNode, localContext);

      if (subproofVerified) {
        const proofStep = ProofStep.fromSubproofNode(subproofNode);

        localContext.addProofStep(proofStep);

        childVerified = true;
      }

      break;
    }

    case QUALIFIED_STATEMENT_RULE_NAME: {
      const derived = true,
            assignments = [],
            qualifiedStatementNode = childNode,  ///
            qualifiedStatementVerified = verifyQualifiedStatement(qualifiedStatementNode, assignments, derived, localContext);

      if (qualifiedStatementVerified) {
        const statementNode = statementNodeQuery(qualifiedStatementNode),
              proofStep = ProofStep.fromStatementNode(statementNode);

        localContext.addProofStep(proofStep);

        childVerified = qualifiedStatementVerified; ///
      }

      break;
    }

    case UNQUALIFIED_STATEMENT_RULE_NAME: {
      const derived = true,
            assignments = [],
            unqualifiedStatementNode = childNode,  ///
            unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, assignments, derived, localContext);

      if (unqualifiedStatementVerified) {
        const statementNode = statementNodeQuery(unqualifiedStatementNode),
              proofStep = ProofStep.fromStatementNode(statementNode);

        localContext.addProofStep(proofStep);

        childVerified = true;
      }

      break;
    }
  }

  return childVerified;
}
