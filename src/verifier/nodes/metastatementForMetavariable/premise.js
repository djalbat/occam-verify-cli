"use strict";

import MetastatementForMetavariableNodesVerifier from "../../../verifier/nodes/metastatementForMetavariable";

class PremiseMetastatementForMetavariableNodesVerifier extends MetastatementForMetavariableNodesVerifier {
  static createSubstitutions = true;
}

const premiseMetastatementForMetavariableNodesVerifier = new PremiseMetastatementForMetavariableNodesVerifier();

export default premiseMetastatementForMetavariableNodesVerifier;
