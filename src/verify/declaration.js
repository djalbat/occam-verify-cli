"use strict";

import shim from "../shim";
import Declaration from "../declaration"
import referenceMetaType from "../metaType/reference";

import { nodeQuery } from "../utilities/query";

const statementNodeQuery = nodeQuery("/declaration/statement[1]"),
      metavariableNodeQuery = nodeQuery("/declaration/statement[0]/metavariable!");

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

    debugger

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

    const metavariableNode = metavariableNodeQuery(declarationNode),
          metavariableVerified = verifyMetavariable(metavariableNode, localContext);

    if (metavariableVerified) {
      const { verifyStatement } = shim,
            stated = true,
            assignments = null,
            statementNode = statementNodeQuery(declarationNode),
            statementVerified = verifyStatement(statementNode, assignments, stated, localContext);

      if (statementVerified) {
        const declaration = Declaration.fromMetavariableNodeAndStatementNode(metavariableNode, statementNode);

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

function verifyMetavariable(metavariableNode, localContext) {
  let metavariableVerified = false;

  const metavariableString = localContext.nodeAsString(metavariableNode);

  localContext.trace(`Verifying the '${metavariableString}' metavariable...`, metavariableNode);

  const metavariable = localContext.findMetavariableByMetavariableNode(metavariableNode);

  if (metavariable !== null) {
    const metaType = metavariable.getMetaType();

    if (metaType === referenceMetaType) {
      metavariableVerified = true;
    } else {
      const referenceMetaTypeName = referenceMetaType.getName(),
            metaTypeString = metaType.asString();

      localContext.debug(`The '${metavariableString}' metavariable's meta-type is '${metaTypeString}' when it should be '${referenceMetaTypeName}'.`, metavariableNode);
    }
  } else {
    localContext.debug(`The '${metavariableString}' metavariable is not present'.`, metavariableNode);
  }

  if (metavariableVerified) {
    localContext.debug(`...verified the '${metavariableString}' metavariable.`, metavariableNode);
  }

  return metavariableVerified;
}
