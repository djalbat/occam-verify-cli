"use strict";

import contextMetaType from "../metaType/context";

import { nodeQuery } from "../utilities/query";
import { CONTEXT_META_TYPE_NAME } from "../metaTypeNames";

const contextNodeQuery = nodeQuery("/judgement/context!"),
      metavariableNodeQuery = nodeQuery("/judgement/metavariable!");

export default function verifyJudgement(judgementNode, derived, localMetaContext) {
  let judgementVerified;

  const judgementString = localMetaContext.nodeAsString(judgementNode);

  localMetaContext.trace(`Verifying the '${judgementString}' judgement...`, judgementNode);

  const metavariableNode = metavariableNodeQuery(judgementNode),
        metavariable = localMetaContext.findMetavariableByMetavariableNode(metavariableNode);

  if (metavariable !== null) {
    const metaType = metavariable.getMetaType();

    if (metaType === contextMetaType) {
      const contextNode = contextNodeQuery(judgementNode);


    } else {
      const metavariableString = localMetaContext.nodeAsString(metavariableNode),
            metaTypeString = metaType.asString();

      localMetaContext.debug(`The '${metavariableString}' metavariable's meta-type is '${metaTypeString}' when it should be '${CONTEXT_META_TYPE_NAME}'.`, judgementNode);
    }
  }

  if (judgementVerified) {
    localMetaContext.debug(`...verified the '${judgementString}' judgement.`, judgementNode);
  }

  return judgementVerified;
}
