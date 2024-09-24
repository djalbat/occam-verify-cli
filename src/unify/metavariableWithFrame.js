"use strict";

import FrameForMetavariableSubstitution from "../substitution/frameForMetavariable";

import { metavariableFromFrameNode } from "../utilities/unify";

export default function unifyMetavariableWithFrame(metavariableNodeA, frameNodeB, substitutions, localContextA, localContextB) {
  let metavariableUnifiedWithFrame = false;

  const simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariableNode(metavariableNodeA),
        substitution = simpleSubstitution;  ///

  if (substitution !== null) {
    const frameNodeMatches = substitution.matchFrameNode(frameNodeB);

    if (frameNodeMatches) {
      metavariableUnifiedWithFrame = true;
    }
  } else {
    const metavariableA = localContextA.findMetavariableByMetavariableNode(metavariableNodeA),
          metavariableB = metavariableFromFrameNode(frameNodeB, localContextB);

    if (metavariableA === metavariableB) {
      metavariableUnifiedWithFrame = true;
    } else {
      const frameNode = frameNodeB, ///
            metavariableNode = metavariableNodeA, ///
            frameForMetavariableSubstitution = FrameForMetavariableSubstitution.fromFrameNodeAndMetavariableNode(frameNode, metavariableNode),
            substitution = frameForMetavariableSubstitution;  ///

      substitutions.addSubstitution(substitution, localContextA, localContextB);

      metavariableUnifiedWithFrame = true;
    }
  }

  return metavariableUnifiedWithFrame;
}
