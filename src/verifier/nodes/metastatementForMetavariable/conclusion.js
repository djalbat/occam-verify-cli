"use strict";

import MetastatementForMetavariableNodesVerifier from "../../../verifier/nodes/metastatementForMetavariable";

class ConclusionMetastatementForMetavariableNodesVerifier extends MetastatementForMetavariableNodesVerifier {
  static createSubstitutions = false;
}

export const conclusionMetastatementForMetavariableNodesVerifier = new ConclusionMetastatementForMetavariableNodesVerifier();
