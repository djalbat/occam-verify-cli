"use strict";

import MetaConsequent from "../metaConsequent";
import verifyUnqualifiedStatement from "./statement/unqualified";
import verifyUnqualifiedMetastatement from "./metastatement/unqualified";

import { nodeQuery } from "../utilities/query";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!"),
      metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement!"),
      unqualifiedStatementNodeQuery = nodeQuery("/metaConsequent/unqualifiedStatement!"),
      unqualifiedMetastatementNodeQuery = nodeQuery("/metaConsequent/unqualifiedMetastatement!");

export default function verifyMetaConsequent(metaConsequentNode, metaConsequents, substitutions, localMetaContext) {
  let metaConsequentVerified = false;

  const metaConsequentString = localMetaContext.nodeAsString(metaConsequentNode);

  localMetaContext.trace(`Verifying the '${metaConsequentString}' meta-consequent...`, metaConsequentNode);

  const unqualifiedStatementNode = unqualifiedStatementNodeQuery(metaConsequentNode),
        unqualifiedMetastatementNode = unqualifiedMetastatementNodeQuery(metaConsequentNode);

  if (unqualifiedStatementNode !== null) {
    const derived = false,
          assignments = [],
          localContext = localMetaContext,  ///
          unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, assignments, derived, localContext);

    metaConsequentVerified = unqualifiedStatementVerified; ///
  }

  if (unqualifiedMetastatementNode !== null) {
    const derived = false,
          assignments = [],
          unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, assignments, derived, localMetaContext);

    metaConsequentVerified = unqualifiedMetastatementVerified; ///
  }

  if (metaConsequentVerified) {
    let metaConsequent;

    if (unqualifiedStatementNode !== null) {
      const statementNode = statementNodeQuery(unqualifiedStatementNode);

      metaConsequent = MetaConsequent.fromStatementNode(statementNode);
    }

    if (unqualifiedMetastatementNode !== null) {
      const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode);

      metaConsequent = MetaConsequent.fromMetastatementNode(metastatementNode);
    }

    metaConsequents.push(metaConsequent);

    localMetaContext.debug(`...verified the '${metaConsequentString}' meta-consequent.`, metaConsequentNode);
  }

  return metaConsequentVerified;
}
