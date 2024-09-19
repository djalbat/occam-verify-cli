"use strict";

import metaLevelUnifier from "../unifier/metaLevel";

export default function unifyComplexSubstitutionStatementWithSimpleSubstitutionStatement(complexSubstitutionStatementNode, simpleSubstitutionStatementNode, substitutions, localContextA, localContextB) {
  let complexSubstitutionStatementWithSimpleSubstitutionStatement;

  const nodeA = complexSubstitutionStatementNode,  ///
        nodeB = simpleSubstitutionStatementNode;  ///

  localContextA = localContextB;  ///

  const unified = metaLevelUnifier.unify(nodeA, nodeB, substitutions, localContextA, localContextB);

  complexSubstitutionStatementWithSimpleSubstitutionStatement = unified;  ///

  return complexSubstitutionStatementWithSimpleSubstitutionStatement;
}
