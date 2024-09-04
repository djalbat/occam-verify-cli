"use strict";

import StatementForMetavariableSubstitution from "../../substitution/statementForMetavariable";

function verifyMetavariableNode(metavariableNodeA, statementNodeB, substitutions, localContextA, localMetaContextB, verifyAhead) {
  let metavariableNodeVerified;

  const substitution = substitutions.find((substitution) => {
    const substitutionMatchesMetavariableNodeA = substitution.matchMetavariableNode(metavariableNodeA);

    if (substitutionMatchesMetavariableNodeA) {
      return true;
    }
  }) || null;

  if (substitution !== null) {
    const statementNode = statementNodeB, ///
          substitutionStatementNode = substitution.matchStatementNode(statementNode);

    metavariableNodeVerified = substitutionStatementNode;  ///
  } else {
    const metavariableNode = metavariableNodeA, ///
          statementNode = statementNodeB, ///
          statementForMetavariableSubstitution = StatementForMetavariableSubstitution.fromMetavariableNodeAndStatementNode(metavariableNode, statementNode),
          substitution = statementForMetavariableSubstitution;  ///

    substitutions.push(substitution);

    metavariableNodeVerified = true;
  }

  return metavariableNodeVerified;
}

const metaLevelNodesVerifierMixins = {
  verifyMetavariableNode
};

export default metaLevelNodesVerifierMixins;
