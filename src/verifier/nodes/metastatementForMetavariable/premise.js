"use strict";

import MetastatementForMetavariableNodesVerifier from "../../../verifier/nodes/metastatementForMetavariable";

class PremiseMetastatementForMetavariableNodesVerifier extends MetastatementForMetavariableNodesVerifier {
  static createSubstitutions = true;
}

export const premiseMetastatementForMetavariableNodesVerifier = new PremiseMetastatementForMetavariableNodesVerifier();
