"use strict";

import metaLevelUnifier from "../unifier/metaLevel";

export default function unifyComplexSubstitutionStatementWithSimpleSubstitutionStatement(complexSubstitutionStatementNode, simpleSubstitutionStatementNode, substitutions, localContextA, localContextB) {
  let complexSubstitutionStatementWithSimpleSubstitutionStatement;

  const complexSubstitutionStatementString = localContextB.nodeAsString(complexSubstitutionStatementNode),
        simpleSubstitutionStatementString = localContextB.nodeAsString(simpleSubstitutionStatementNode);

  localContextB.trace(`Unifying the complex substitution's '${complexSubstitutionStatementString}' statement with the simple substitution's '${simpleSubstitutionStatementString}' statement...`, simpleSubstitutionStatementNode);

  const nodeA = complexSubstitutionStatementNode,  ///
        nodeB = simpleSubstitutionStatementNode;  ///

  localContextA = localContextB;  ///

  const unified = metaLevelUnifier.unify(nodeA, nodeB, substitutions, localContextA, localContextB);

  complexSubstitutionStatementWithSimpleSubstitutionStatement = unified;  ///

  if (complexSubstitutionStatementWithSimpleSubstitutionStatement) {
    localContextB.trace(`...unified the complex substitution's '${complexSubstitutionStatementString}' statement with the simple substitution's '${simpleSubstitutionStatementString}' statement.`, simpleSubstitutionStatementNode);
  }

  return complexSubstitutionStatementWithSimpleSubstitutionStatement;
}
