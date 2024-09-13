"use strict";

import Declaration from "../declaration"
import referenceMetaType from "../metaType/reference";

import { nodeQuery } from "../utilities/query";

const statementNodeQuery = nodeQuery("/declaration/statement!"),
      metavariableNodeQuery = nodeQuery("/declaration/metavariable!");

const verifyDeclarationFunctions = [
  verifyDerivedDeclaration,
  verifyStatedDeclaration
];

export default function verifyDeclaration(declarationNode, assignments, derived, localContext) {
  let declarationVerified;

  const declarationString = localContext.nodeAsString(declarationNode);

  localContext.trace(`Verifying the '${declarationString}' declaration...`, declarationNode);

  declarationVerified = verifyDeclarationFunctions.some((verifyDeclarationFunction) => {
    const declarationVerified = verifyDeclarationFunction(declarationNode, assignments, derived, localContext);

    if (declarationVerified) {
      return true;
    }
  });

  if (declarationVerified) {
    localContext.debug(`...verified the '${declarationString}' declaration.`, declarationNode);
  }

  return declarationVerified;
}

function verifyDerivedDeclaration(declarationNode, declarations, localContext) {
  let derivedDeclarationVerified = false;

  const declarationString = localContext.nodeAsString(declarationNode);

  localContext.trace(`Verifying the '${declarationString}' derived declaration...`, declarationNode);

  debugger

  if (derivedDeclarationVerified) {
    localContext.debug(`...verified the '${declarationString}' derived declaration.`, declarationNode);
  }

  return derivedDeclarationVerified;
}

function verifyStatedDeclaration(declarationNode, declarations, localContext) {
  let statedDeclarationVerified = false;

  const declarationString = localContext.nodeAsString(declarationNode);

  localContext.trace(`Verifying the '${declarationString}' stated declaration...`, declarationNode);

  const metavariableNode = metavariableNodeQuery(declarationNode),
        metavariableVerified = verifyMetavariable(metavariableNode, localContext);

  if (metavariableVerified) {
    const statementNode = statementNodeQuery(declarationNode);

    debugger

    if (statementVerified) {
      const declaration = Declaration.fromMetavariableNodeAndStatementNode(metavariableNode, statementNode);

      declarations.push(declaration);

      statedDeclarationVerified = true;
    }
  }

  if (statedDeclarationVerified) {
    localContext.debug(`...verified the '${declarationString}' stated declaration.`, declarationNode);
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
