"use strict";

import MetastatementForMetavariableVerifier from "../../verifier/metastatementForMetavariable";

class PremiseMetastatementForMetavariableVerifier extends MetastatementForMetavariableVerifier {
  static createSubstitutions = true;
}

export const premiseMetastatementForMetavariableVerifier = new PremiseMetastatementForMetavariableVerifier();
