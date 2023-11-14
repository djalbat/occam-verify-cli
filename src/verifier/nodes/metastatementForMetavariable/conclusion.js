"use strict";

import MetastatementForMetavariableNodesVerifier from "../../../verifier/nodes/metastatementForMetavariable";

class ConclusionMetastatementForMetavariableNodesVerifier extends MetastatementForMetavariableNodesVerifier {
  static createSubstitutions = false;
}

const conclusionMetastatementForMetavariableNodesVerifier = new ConclusionMetastatementForMetavariableNodesVerifier();

export default conclusionMetastatementForMetavariableNodesVerifier;
