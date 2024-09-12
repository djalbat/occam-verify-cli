"use strict";

import { nodeQuery } from "../utilities/query";
import { unifyTermWithTermType } from "../metavariable";
import { nameFromMetavariableNode } from "../utilities/name";

const termNodeQuery = nodeQuery("/metavariable/argument/term"),
      typeNodeQuery = nodeQuery("/metavariable/argument/type");

export default function verifyMetavariable(metavariableNode, localContext) {
  let metavariableVerified = false;

  const metavariableString = localContext.nodeAsString(metavariableNode);

  localContext.trace(`Verifying the '${metavariableString}' metavariable...`, metavariableNode);

  const name = nameFromMetavariableNode(metavariableNode),
        metavariable = localContext.findMetavariableByName(name);

  if (metavariable === null) {
    localContext.debug(`The metavariable '${metavariableString}' is not present.`, metavariableNode);
  } else {
    const typeNode = typeNodeQuery(metavariableNode);

    if (typeNode !== null) {
      const typeString = localContext.nodeAsString(typeNode);

      localContext.debug(`The '${typeString}' type was found when a term should be present.`, typeNode);
    } else {
      const termType = metavariable.getTermType(),
            termNode = termNodeQuery(metavariableNode);

      if (false) {
        ///
      } else if ((termType === null) && (termNode === null)) {
        metavariableVerified = true;
      } else if ((termType === null) && (termNode !== null)) {
        const termString = localContext.nodeAsString(termNode);

        localContext.debug(`The '${termString}' term was found when none is expected.`, termNode);
      } else if ((termType !== null) && (termNode === null)) {
        const termTypeName = termType.getName();

        localContext.debug(`No term was found when the metavariable's term type is '${termTypeName}'.`, termNode);
      } else {
        const termUnifiedWithTermType = unifyTermWithTermType(termNode, termType, localContext);

        metavariableVerified = termUnifiedWithTermType; ///
      }
    }
  }

  if (metavariableVerified) {
    localContext.debug(`...verified the '${metavariableString}' metavariable.`, metavariableNode);
  }

  return metavariableVerified;
}
