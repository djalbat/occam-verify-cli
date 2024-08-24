"use strict";

import MetastatementForMetavariableSubstitution from "../substitution/metastatementForMetavariable";

export default function verifyMetavariableAgainstMetastatement(metavariableNode, metastatementNode, substitutions, verifyAhead) {
  let metavariableVerifiedAgainstMetastatement = false;

  const substitution = substitutions.find((substitution) => {
    const substitutionMatchesMetavariableNodeA = substitution.matchMetavariableNode(metavariableNode);

    if (substitutionMatchesMetavariableNodeA) {
      return true;
    }
  }) || null;

  if (substitution !== null) {
    const metastatementNodeMatches = substitution.matchMetastatementNode(metastatementNode);

    if (metastatementNodeMatches) {
      const verifiedAhead = verifyAhead();

      metavariableVerifiedAgainstMetastatement = verifiedAhead; ///
    }
  } else {
    let verifiedAhead;

    const metastatementForMetavariableSubstitution = MetastatementForMetavariableSubstitution.fromMetavariableNodeAndMetastatementNode(metavariableNode, metastatementNode),
          substitution = metastatementForMetavariableSubstitution;  ///

    substitutions.push(substitution);

    verifiedAhead = verifyAhead();

    if (!verifiedAhead) {
      substitutions.pop();
    }

    metavariableVerifiedAgainstMetastatement = verifiedAhead; ///
  }

  return metavariableVerifiedAgainstMetastatement;
}
