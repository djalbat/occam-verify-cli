"use strict";

import Declaration from "../declaration"
import referenceMetaType from "../metaType/reference";
import metastatementNodeVerifier from "../verifier/node/metastatement";

import { nodeQuery } from "../utilities/query";

const metavariableNodeQuery = nodeQuery("/declaration/metavariable!"),
      metastatementNodeQuery = nodeQuery("/declaration/metastatement!");

export default function verifyDeclaration(declarationNode, declarations, localMetaContext) {
  let declarationVerified = false;

  const declarationString = localMetaContext.nodeAsString(declarationNode);

  localMetaContext.trace(`Verifying the '${declarationString}' declaration...`, declarationNode);

  const metavariableNode = metavariableNodeQuery(declarationNode),
        metavariableVerified = verifyMetavariable(metavariableNode, localMetaContext);

  if (metavariableVerified) {
    const metastatementNode = metastatementNodeQuery(declarationNode);

    const { verifyMetastatement } = metastatementNodeVerifier,
          derived = false,
          assignments = [],
          metastatementVerified = verifyMetastatement(metastatementNode, assignments, derived, localMetaContext, () => {
            const verifiedAhead = true;

            return verifiedAhead;
          });

    if (metastatementVerified) {
      const declaration = Declaration.fromMetavariableNodeAndMetastatementNode(metavariableNode, metastatementNode);

      declarations.push(declaration);

      declarationVerified = true;
    }
  }

  if (declarationVerified) {
    localMetaContext.debug(`...verified the '${declarationString}' declaration.`, declarationNode);
  }

  return declarationVerified;
}

function verifyMetavariable(metavariableNode, localMetaContext) {
  let metavariableVerified = false;

  const metavariableString = localMetaContext.nodeAsString(metavariableNode);

  localMetaContext.trace(`Verifying the '${metavariableString}' metavariable...`, metavariableNode);

  const metavariable = localMetaContext.findMetavariableByMetavariableNode(metavariableNode, localMetaContext);

  if (metavariable !== null) {
    const metaType = metavariable.getMetaType();

    if (metaType === referenceMetaType) {
      metavariableVerified = true;
    } else {
      const referenceMetaTypeName = referenceMetaType.getName(),
            metaTypeString = metaType.asString();

      localMetaContext.debug(`The '${metavariableString}' metavariable's meta-type is '${metaTypeString}' when it should be '${referenceMetaTypeName}'.`, metavariableNode);
    }
  } else {
    localMetaContext.debug(`The '${metavariableString}' metavariable is not present'.`, metavariableNode);
  }

  if (metavariableVerified) {
    localMetaContext.debug(`...verified the '${metavariableString}' metavariable.`, metavariableNode);
  }

  return metavariableVerified;
}