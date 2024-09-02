"use strict";

import MetaConsequent from "../metaConsequent";
import verifyUnqualifiedStatement from "./statement/unqualified";
import verifyUnqualifiedMetastatement from "./metastatement/unqualified";

import { nodeQuery } from "../utilities/query";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!"),
      metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement!"),
      unqualifiedStatementNodeQuery = nodeQuery("/metaConsequent/unqualifiedStatement!"),
      unqualifiedMetastatementNodeQuery = nodeQuery("/metaConsequent/unqualifiedMetastatement!");

export default function verifyMetaConsequent(metaConsequentNode, metaConsequents, substitutions, localContext) {
  let metaConsequentVerified = false;

  const metaConsequentString = localContext.nodeAsString(metaConsequentNode);

  localContext.trace(`Verifying the '${metaConsequentString}' meta-consequent...`, metaConsequentNode);

  const unqualifiedStatementNode = unqualifiedStatementNodeQuery(metaConsequentNode),
        unqualifiedMetastatementNode = unqualifiedMetastatementNodeQuery(metaConsequentNode);

  if (unqualifiedStatementNode !== null) {
    const derived = false,
          assignments = [],
          unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, assignments, derived, localContext);

    metaConsequentVerified = unqualifiedStatementVerified; ///
  }

  if (unqualifiedMetastatementNode !== null) {
    const derived = false,
          assignments = [],
          unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, assignments, derived, localContext);

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

    localContext.debug(`...verified the '${metaConsequentString}' meta-consequent.`, metaConsequentNode);
  }

  return metaConsequentVerified;
}
