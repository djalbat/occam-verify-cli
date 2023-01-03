"use strict";

import ProofStep from "../step/proof";
import ProofContext from "../context/proof";
import verifyQualifiedStatement from "../verify/statement/qualified";
import verifyUnqualifiedStatement from "../verify/statement/unqualified";

import { nodeQuery, nodesQuery } from "../utilities/query";
import { SUBPROOF_RULE_NAME, QUALIFIED_STATEMENT_RULE_NAME, UNQUALIFIED_STATEMENT_RULE_NAME } from "../ruleNames";

const statementNodeQuery = nodeQuery("/qualifiedStatement|unqualifiedStatement/statement!"),
      derivationNodeQuery = nodeQuery("/subproof/derivation|abridgedDerivation!"),  ///
      derivationChildNodesQuery = nodesQuery("/derivation|abridgedDerivation/*"),
      unqualifiedStatementNodesQuery = nodesQuery("/subproof/unqualifiedStatement")

export default function verifyDerivation(derivationNode, proofContext) {
  let derivationVerified;

  proofContext.begin(derivationNode);

  proofContext.setDerived();

  const derivationChildNodes = derivationChildNodesQuery(derivationNode);

  derivationVerified = derivationChildNodes.every((derivationChildNode) => {  ///
    const derivationChildVerified = verifyDerivationChild(derivationChildNode, proofContext);

    if (derivationChildVerified) {
      return true;
    }
  });

  proofContext.setDerived();

  derivationVerified ?
    proofContext.complete(derivationNode) :
      proofContext.halt(derivationNode);

  return derivationVerified;
}

function verifyDerivationChild(derivationChildNode, proofContext) {
  let derivationChildVerified;

  const ruleName = derivationChildNode.getRuleName();

  switch (ruleName) {
    case SUBPROOF_RULE_NAME: {
      const subproofNode = derivationChildNode,  ///
            subproofVerified = verifySubproof(subproofNode, proofContext);

      if (subproofVerified) {
        const proofStep = ProofStep.fromSubproofNode(subproofNode);

        proofContext.addProofStep(proofStep);

        derivationChildVerified = true;
      }

      break;
    }

    case QUALIFIED_STATEMENT_RULE_NAME: {
      const qualifiedStatementNode = derivationChildNode,  ///
            qualifiedStatementVerified = verifyQualifiedStatement(qualifiedStatementNode, proofContext);

      if (qualifiedStatementVerified) {
        const statementNode = statementNodeQuery(qualifiedStatementNode),
              proofStep = ProofStep.fromStatementNode(statementNode);

        proofContext.addProofStep(proofStep);

        derivationChildVerified = qualifiedStatementVerified; ///
      }

      break;
    }

    case UNQUALIFIED_STATEMENT_RULE_NAME: {
      const unqualifiedStatementNode = derivationChildNode,  ///
            unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, proofContext);

      if (unqualifiedStatementVerified) {
        const statementNode = statementNodeQuery(unqualifiedStatementNode),
              proofStep = ProofStep.fromStatementNode(statementNode);

        proofContext.addProofStep(proofStep);

        derivationChildVerified = true;
      }

      break;
    }
  }

  return derivationChildVerified;
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

    const derivationNode = derivationNodeQuery(subproofNode),
          derivationVerified = verifyDerivation(derivationNode, proofContext);

    if (derivationVerified) {
      subproofVerified = true;
    }
  }

  return subproofVerified;
}
