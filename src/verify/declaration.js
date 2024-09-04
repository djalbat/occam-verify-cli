"use strict";

import Declaration from "../declaration"
import referenceMetaType from "../metaType/reference";
import metaLevelNodeVerifier from "../verifier/node/metaLevel";

import { nodeQuery } from "../utilities/query";

const referenceNodeQuery = nodeQuery("/declaration/reference!"),
      statementNodeQuery = nodeQuery("/declaration/statement!"),
      metavariableNodeQuery = nodeQuery("/reference/metavariable!");

export default function verifyDeclaration(declarationNode, declarations, localContext) {
  let declarationVerified = false;

  const declarationString = localContext.nodeAsString(declarationNode);

  localContext.trace(`Verifying the '${declarationString}' declaration...`, declarationNode);

  const referenceNode = referenceNodeQuery(declarationNode),
        referenceVerified = verifyReference(referenceNode, localContext);

  if (referenceVerified) {
    const statementNode = statementNodeQuery(declarationNode);

    const { verifyStatement } = metaLevelNodeVerifier,
          derived = false,
          assignments = [],
          statementVerified = verifyStatement(statementNode, assignments, derived, localContext, () => {
            const verifiedAhead = true;

            return verifiedAhead;
          });

    if (statementVerified) {
      const metavariableNode = metavariableNodeQuery(referenceNode),
            declaration = Declaration.fromMetavariableNodeAndStatementNode(metavariableNode, statementNode);

      declarations.push(declaration);

      declarationVerified = true;
    }
  }

  if (declarationVerified) {
    localContext.debug(`...verified the '${declarationString}' declaration.`, declarationNode);
  }

  return declarationVerified;
}

function verifyReference(referenceNode, localContext) {
  let referenceVerified = false;

  const referenceString = localContext.nodeAsString(referenceNode);

  localContext.trace(`Verifying the '${referenceString}' reference...`, referenceNode);

  const metavariableNode = metavariableNodeQuery(referenceNode),
        metavariable = localContext.findMetavariableByMetavariableNode(metavariableNode, localContext);

  if (metavariable !== null) {
    const metaType = metavariable.getMetaType();

    if (metaType === referenceMetaType) {
      referenceVerified = true;
    } else {
      const referenceMetaTypeName = referenceMetaType.getName(),
            metaTypeString = metaType.asString();

      localContext.debug(`The '${referenceString}' metavariable's meta-type is '${metaTypeString}' when it should be '${referenceMetaTypeName}'.`, referenceNode);
    }
  } else {
    localContext.debug(`The '${referenceString}' metavariable is not present'.`, referenceNode);
  }

  if (referenceVerified) {
    localContext.debug(`...verified the '${referenceString}' reference.`, referenceNode);
  }

  return referenceVerified;
}