"use strict";

import MetastatementForMetavariableMatcher from "../../matcher/metastatementForMetavariable";

class ConclusionMetastatementForMetavariableMatcher extends MetastatementForMetavariableMatcher {
  static createSubstitutions = false;
}

export const conclusionMetastatementForMetavariableMatcher = new ConclusionMetastatementForMetavariableMatcher();
