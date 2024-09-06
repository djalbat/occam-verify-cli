"use strict";

import shim from "../shim";
import Declaration from "../declaration"
import referenceMetaType from "../metaType/reference";

import { nodeQuery } from "../utilities/query";

const statementNodeQuery = nodeQuery("/declaration/statement!"),
      metavariableNodeQuery = nodeQuery("/declaration/metavariable!");

export default function verifyDeclaration(declarationNode, declarations, localContext) {
  let declarationVerified = false;

  const declarationString = localContext.nodeAsString(declarationNode);

  localContext.trace(`Verifying the '${declarationString}' declaration...`, declarationNode);

  const metavariableNode = metavariableNodeQuery(declarationNode),
        metavariableVerified = verifyMetavariable(metavariableNode, localContext);

  if (metavariableVerified) {
    const statementNode = statementNodeQuery(declarationNode);

    const { verifyStatement } = shim,
          derived = false,
          assignments = [],
          statementVerified = verifyStatement(statementNode, assignments, derived, localContext);

    if (statementVerified) {
      const declaration = Declaration.fromMetavariableNodeAndStatementNode(metavariableNode, statementNode);

      declarations.push(declaration);

      declarationVerified = true;
    }
  }

  if (declarationVerified) {
    localContext.debug(`...verified the '${declarationString}' declaration.`, declarationNode);
  }

  return declarationVerified;
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
