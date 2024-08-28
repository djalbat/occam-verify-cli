"use strict";

import Declaration from "../declaration"
import referenceMetaType from "../metaType/reference";
import metastatementNodeVerifier from "../verifier/node/metastatement";

import { nodeQuery } from "../utilities/query";

const referenceNodeQuery = nodeQuery("/declaration/reference!"),
      metavariableNodeQuery = nodeQuery("/reference/metavariable!"),
      metastatementNodeQuery = nodeQuery("/declaration/metastatement!");

export default function verifyDeclaration(declarationNode, declarations, localMetaContext) {
  let declarationVerified = false;

  const declarationString = localMetaContext.nodeAsString(declarationNode);

  localMetaContext.trace(`Verifying the '${declarationString}' declaration...`, declarationNode);

  const referenceNode = referenceNodeQuery(declarationNode),
        referenceVerified = verifyReference(referenceNode, localMetaContext);

  if (referenceVerified) {
    const metastatementNode = metastatementNodeQuery(declarationNode);

    const { verifyMetastatement } = metastatementNodeVerifier,
          derived = false,
          assignments = [],
          metastatementVerified = verifyMetastatement(metastatementNode, assignments, derived, localMetaContext, () => {
            const verifiedAhead = true;

            return verifiedAhead;
          });

    if (metastatementVerified) {
      const metavariableNode = metavariableNodeQuery(referenceNode),
            declaration = Declaration.fromMetavariableNodeAndMetastatementNode(metavariableNode, metastatementNode);

      declarations.push(declaration);

      declarationVerified = true;
    }
  }

  if (declarationVerified) {
    localMetaContext.debug(`...verified the '${declarationString}' declaration.`, declarationNode);
  }

  return declarationVerified;
}

function verifyReference(referenceNode, localMetaContext) {
  let referenceVerified = false;

  const referenceString = localMetaContext.nodeAsString(referenceNode);

  localMetaContext.trace(`Verifying the '${referenceString}' reference...`, referenceNode);

  const metavariableNode = metavariableNodeQuery(referenceNode),
        metavariable = localMetaContext.findMetavariableByMetavariableNode(metavariableNode, localMetaContext);

  if (metavariable !== null) {
    const metaType = metavariable.getMetaType();

    if (metaType === referenceMetaType) {
      referenceVerified = true;
    } else {
      const referenceMetaTypeName = referenceMetaType.getName(),
            metaTypeString = metaType.asString();

      localMetaContext.debug(`The '${referenceString}' metavariable's meta-type is '${metaTypeString}' when it should be '${referenceMetaTypeName}'.`, referenceNode);
    }
  } else {
    localMetaContext.debug(`The '${referenceString}' metavariable is not present'.`, referenceNode);
  }

  if (referenceVerified) {
    localMetaContext.debug(`...verified the '${referenceString}' reference.`, referenceNode);
  }

  return referenceVerified;
}