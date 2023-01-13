"use strict";

import ProofStep from "../step/proof";
import ProofContext from "../context/proof";
import verifyQualifiedStatement from "../verify/statement/qualified";
import verifyUnqualifiedStatement from "../verify/statement/unqualified";

import { nodeQuery, nodesQuery } from "../utilities/query";
import { SUBPROOF_RULE_NAME, QUALIFIED_STATEMENT_RULE_NAME, UNQUALIFIED_STATEMENT_RULE_NAME } from "../ruleNames";

const childNodesQuery = nodesQuery("/derivation|subDerivation/*"),
      statementNodeQuery = nodeQuery("/qualifiedStatement|unqualifiedStatement/statement!"),
      subDerivationNodeQuery = nodeQuery("/subproof/subDerivation"),
      unqualifiedStatementNodesQuery = nodesQuery("/subproof/unqualifiedStatement");

export default function verifyDerivation(derivationNode, proofContext) {
  let derivationVerified;

  proofContext.begin(derivationNode);

  const childNodes = childNodesQuery(derivationNode);

  derivationVerified = childNodes.every((childNode) => {
    const childVerified = verifyChild(childNode, proofContext);

    if (childVerified) {
      return true;
    }
  });

  derivationVerified ?
    proofContext.complete(derivationNode) :
      proofContext.halt(derivationNode);

  return derivationVerified;
}

function verifySubDerivation(subDerivationNode, proofContext) {
  let subDerivationVerified;

  proofContext.begin(subDerivationNode);

  const childNodes = childNodesQuery(subDerivationNode);

  subDerivationVerified = childNodes.every((childNode) => {
    const childVerified = verifyChild(childNode, proofContext);

    if (childVerified) {
      return true;
    }
  });

  subDerivationVerified ?
    proofContext.complete(subDerivationNode) :
      proofContext.halt(subDerivationNode);

  return subDerivationVerified;
}

function verifySubproof(subproofNode, proofContext) {
  let subproofVerified = false;

  proofContext = ProofContext.fromProofContext(proofContext); ///

  const unqualifiedStatementNodes = unqualifiedStatementNodesQuery(subproofNode),
        unqualifiedStatementsVerified = unqualifiedStatementNodes.every((unqualifiedStatementNode) => {
          const unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, proofContext);

          if (unqualifiedStatementVerified) {
            return true;
          }
        });

  if (unqualifiedStatementsVerified) {
    unqualifiedStatementNodes.forEach((unqualifiedStatementNode) => {
      const statementNode = statementNodeQuery(unqualifiedStatementNode),
            proofStep = ProofStep.fromStatementNode(statementNode);

      proofContext.addProofStep(proofStep);
    });

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
      const qualifiedStatementNode = childNode,  ///
            qualifiedStatementVerified = verifyQualifiedStatement(qualifiedStatementNode, proofContext);

      if (qualifiedStatementVerified) {
        const statementNode = statementNodeQuery(qualifiedStatementNode),
              proofStep = ProofStep.fromStatementNode(statementNode);

        proofContext.addProofStep(proofStep);

        childVerified = qualifiedStatementVerified; ///
      }

      break;
    }

    case UNQUALIFIED_STATEMENT_RULE_NAME: {
      const unqualifiedStatementNode = childNode,  ///
            unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, proofContext);

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
