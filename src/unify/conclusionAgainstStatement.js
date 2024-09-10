"use strict";

import LocalContext from "../context/local";

export default function unifyConclusionAgainstStatement(conclusionA, statementNodeB, substitutions, fileContextA, localContextB) {
  let conclusionUnified = false;

  const conclusionAStatementNode = conclusionA.getStatementNode();

  if (conclusionAStatementNode !== null) {
    const localContextA = LocalContext.fromFileContext(fileContextA),
          statementNodeA = conclusionAStatementNode,  ///
          statementStringA = localContextA.nodeAsString(statementNodeA),
          statementStringB = localContextB.nodeAsString(statementNodeB);

    substitutions.snapshot();

    localContextB.trace(`Unifying the '${statementStringB}' statement against the conclusion's '${statementStringA}' statement...`, statementNodeB);

    const statementUnified = conclusionA.unifyStatement(statementNodeB, substitutions, localContextA, localContextB);

    conclusionUnified = statementUnified; ///

    conclusionUnified ?
      substitutions.continue() :
        substitutions.rollback();

    if (conclusionUnified) {
      localContextB.debug(`...unified the '${statementStringB}' statement against the conclusion's '${statementStringA}' statement.`, statementNodeB);
    }
  }

  return conclusionUnified;
}
