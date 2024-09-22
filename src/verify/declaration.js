"use strict";

import shim from "../shim";
import Reference from "../reference";
import Declaration from "../declaration"
import referenceMetaType from "../metaType/reference";
import verifyMetavariableGivenMetaType from "../verify/metavariableGivenMetaType";

import { nodeQuery } from "../utilities/query";

const statementNodeQuery = nodeQuery("/declaration/statement"),
      metavariableNodeQuery = nodeQuery("/declaration/reference/metavariable"); ///

const verifyDeclarationFunctions = [
  verifyDerivedDeclaration,
  verifyStatedDeclaration
];

export default function verifyDeclaration(declarationNode, declarations, stated, localContext) {
  let declarationVerified;

  const declarationString = localContext.nodeAsString(declarationNode);

  localContext.trace(`Verifying the '${declarationString}' declaration...`, declarationNode);

  declarationVerified = verifyDeclarationFunctions.some((verifyDeclarationFunction) => {
    const declarationVerified = verifyDeclarationFunction(declarationNode, declarations, stated, localContext);

    if (declarationVerified) {
      return true;
    }
  });

  if (declarationVerified) {
    localContext.debug(`...verified the '${declarationString}' declaration.`, declarationNode);
  }

  return declarationVerified;
}

function verifyDerivedDeclaration(declarationNode, declarations, stated, localContext) {
  let derivedDeclarationVerified;

  if (!stated) {
    const declarationString = localContext.nodeAsString(declarationNode);

    localContext.trace(`Verifying the '${declarationString}' derived declaration...`, declarationNode);

    const metaType = referenceMetaType, ///
          metavariables = [],
          reference = referenceQuery(declarationNode),
          metavariableVerifiedGivenMetaType = verifyMetavariableGivenMetaType(reference, metaType, metavariables, localContext);

    if (metavariableVerifiedGivenMetaType) {
      const { verifyStatement } = shim,
            stated = true,
            assignments = null,
            statementNode = statementNodeQuery(declarationNode),
            statementVerified = verifyStatement(statementNode, assignments, stated, localContext);

      if (statementVerified) {
        const declaration = Declaration.fromMetavariableNodeAndStatementNode(reference, statementNode);

        declarations.push(declaration);

        derivedDeclarationVerified = true;
      }
    }

    if (derivedDeclarationVerified) {
      localContext.debug(`...verified the '${declarationString}' derived declaration.`, declarationNode);
    }
  }

  return derivedDeclarationVerified;
}

function verifyStatedDeclaration(declarationNode, declarations, stated, localContext) {
  let statedDeclarationVerified = false;

  if (stated) {
    const declarationString = localContext.nodeAsString(declarationNode);

    localContext.trace(`Verifying the '${declarationString}' stated declaration...`, declarationNode);

    const statementNode = statementNodeQuery(declarationNode),
          metaType = referenceMetaType,
          metavariables = [],
          metavariableNode = metavariableNodeQuery(declarationNode),
          metavariableVerifiedGivenMetaType = verifyMetavariableGivenMetaType(metavariableNode, metaType, metavariables, localContext);

    if (metavariableVerifiedGivenMetaType) {
        const { verifyStatement } = shim,
              stated = true,
              assignments = null,
              statementVerified = verifyStatement(statementNode, assignments, stated, localContext);

      if (statementVerified) {
        const reference = Reference.fromMetavariableNode(metavariableNode),
              declaration = Declaration.fromReferenceAndStatementNode(reference, statementNode);

        declarations.push(declaration);

        statedDeclarationVerified = true;
      }
    }

    if (statedDeclarationVerified) {
      localContext.debug(`...verified the '${declarationString}' stated declaration.`, declarationNode);
    }
  }

  return statedDeclarationVerified;
}
