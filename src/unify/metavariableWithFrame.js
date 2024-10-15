"use strict";

import FrameForMetavariableSubstitution from "../substitution/frameForMetavariable";

import { metavariableFromFrameNode } from "../utilities/unify";
import {metavariableNameFromMetavariableNode} from "../utilities/name";

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
    const metavariableNameA = metavariableNameFromMetavariableNode(metavariableNodeA),
          metavariableA = localContextA.findMetavariableByMetavariableName(metavariableNameA),
          metavariableB = metavariableFromFrameNode(frameNodeB, localContextB);

    if (metavariableA === metavariableB) {
      metavariableUnifiedWithFrame = true;
    } else {
      const frameNode = frameNodeB, ///
            metavariable = metavariableA, ///
            frameForMetavariableSubstitution = FrameForMetavariableSubstitution.fromFrameAndMetavariable(frame, metavariable, localContextA, localContextB),
            substitution = frameForMetavariableSubstitution;  ///

      substitutions.addSubstitution(substitution, localContextA, localContextB);

      metavariableUnifiedWithFrame = true;
    }
  }

  return metavariableUnifiedWithFrame;
}
