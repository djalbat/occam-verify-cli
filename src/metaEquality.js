"use strict";

import contextMetaType from "./metaType/context";
import metastatementNodeVerifier from "./verifier/node/metastatement";

import { nodeQuery } from "./utilities/query";
import { first, second }  from "./utilities/array";

const contextNodeQuery = nodeQuery("/metastatement/context!"),
      metaVariableNodeQuery = nodeQuery("/metastatement/metavariable!");

export default class MetaEquality {
  constructor(node, metaType) {
    this.node = node;
    this.metaType = metaType;
  }

  getNode() {
    return this.node;
  }

  getMetaType() {
    return this.metaType;
  }

  static fromLeftMetastatementNodeRightMetastatementNodeAndMetaEqualityNode(leftMetastatementNode, rightMetastatementNode, metaEqualityNode, localMetaContext) {
    let metaEquality = null;

    const metaTypes = [],
          leftMetastatementVerifiedAsMetavariableOrContext = verifyMetastatementAsMetavariableOrContext(leftMetastatementNode, metaTypes, localMetaContext),
          rightMetastatementVerifiedAsMetavariableOrContext = verifyMetastatementAsMetavariableOrContext(rightMetastatementNode, metaTypes, localMetaContext);

    if (leftMetastatementVerifiedAsMetavariableOrContext && rightMetastatementVerifiedAsMetavariableOrContext) {
      const firstMetaType = first(metaTypes),
            secondMetaType = second(metaTypes);

      if (firstMetaType === secondMetaType) {
        const metaType = firstMetaType, ///
              node = metaEqualityNode;  ///

        metaEquality = new MetaEquality(node, metaType);
      }
    }

    return metaEquality;
  }
}

function verifyMetastatementAsMetavariableOrContext(metastatementNode, metaTypes, localMetaContext) {
  let metastatementVerifiedAsMetavariableOrContext = false;

  const { verifyMetastatement } = metastatementNodeVerifier,
        derived = false,  ///
        metastatementVerified = verifyMetastatement(metastatementNode, derived, localMetaContext, () => {
          const verifiedAhead = true;

          return verifiedAhead;
        });

  if (metastatementVerified) {
    const contextNode = contextNodeQuery(metastatementNode),
          metavariableNode = metaVariableNodeQuery(metastatementNode);

    if (false) {
      ///
    } else if (contextNode !== null) {
      const metaType = contextMetaType; ///

      metaTypes.push(metaType);

      metastatementVerifiedAsMetavariableOrContext = true;
    } else if (metavariableNode !== null) {
      const metavariable = localMetaContext.findMetavariableByMetavariableNode(metavariableNode, localMetaContext),
            metaType = metavariable.getMetaType();

      metaTypes.push(metaType);

      metastatementVerifiedAsMetavariableOrContext = true;
    }
  }

  return metastatementVerifiedAsMetavariableOrContext;
}
