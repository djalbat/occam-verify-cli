"use strict";

import MetastatementForMetavariableVerifier from "../../verifier/metastatementForMetavariable";

class ConclusionMetastatementForMetavariableVerifier extends MetastatementForMetavariableVerifier {
  static createSubstitutions = false;
}

export const conclusionMetastatementForMetavariableVerifier = new ConclusionMetastatementForMetavariableVerifier();
