"use strict";

import verifyContext from "../verify/context";
import contextMetaType from "../metaType/context";

import { nodeQuery } from "../utilities/query";

const contextNodeQuery = nodeQuery("/judgement/metastatement/context!"),
      metavariableNodeQuery = nodeQuery("/judgement/metavariable!");

export default function verifyJudgement(judgementNode, derived, localMetaContext) {
  let judgementVerified = false;

  const judgementString = localMetaContext.nodeAsString(judgementNode);

  localMetaContext.trace(`Verifying the '${judgementString}' judgement...`, judgementNode);

  const metavariableNode = metavariableNodeQuery(judgementNode),
        metavariable = localMetaContext.findMetavariableByMetavariableNode(metavariableNode, localMetaContext);

  if (metavariable !== null) {
    const metaType = metavariable.getMetaType();

    if (metaType === contextMetaType) {
      const contextNode = contextNodeQuery(judgementNode);

      if (contextNode !== null) {
        const contextVerified = verifyContext(contextNode, derived, localMetaContext);

        judgementVerified = contextVerified;  ///
      } else {
        localMetaContext.debug(`The right hand side of the '${judgementString}' judgement must be a context.`, judgementNode);
      }
    } else {
      const contextMetaTypeName = contextMetaType.getName(),
            metavariableString = localMetaContext.nodeAsString(metavariableNode),
            metaTypeString = metaType.asString();

      localMetaContext.debug(`The '${metavariableString}' metavariable's meta-type is '${metaTypeString}' when it should be '${contextMetaTypeName}'.`, judgementNode);
    }
  }

  if (judgementVerified) {
    localMetaContext.debug(`...verified the '${judgementString}' judgement.`, judgementNode);
  }

  return judgementVerified;
}
