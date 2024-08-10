"use strict";

import MetastatementForMetavariableSubstitution from "../../substitution/metastatementForMetavariable";

function verifyMetavariableNode(metavariableNodeA, metastatementNodeB, substitutions, localContextA, localMetaContextB, verifyAhead) {
  let metavariableNodeVerified;

  const substitution = substitutions.find((substitution) => {
    const substitutionMatchesMetavariableNodeA = substitution.matchMetavariableNode(metavariableNodeA);

    if (substitutionMatchesMetavariableNodeA) {
      return true;
    }
  }) || null;

  if (substitution !== null) {
    const metastatementNode = metastatementNodeB, ///
          metastatementNodeMatches = substitution.matchMetastatementNode(metastatementNode);

    metavariableNodeVerified = metastatementNodeMatches;  ///
  } else {
    const metavariableNode = metavariableNodeA, ///
          metastatementNode = metastatementNodeB, ///
          metastatementForMetavariableSubstitution = MetastatementForMetavariableSubstitution.fromMetavariableNodeAndMetastatementNode(metavariableNode, metastatementNode),
          substitution = metastatementForMetavariableSubstitution;  ///

    substitutions.push(substitution);

    metavariableNodeVerified = true;
  }

  return metavariableNodeVerified;
}

const metaLevelNodesVerifierMixins = {
  verifyMetavariableNode
};

export default metaLevelNodesVerifierMixins;
