"use strict";

import MetastatementForMetavariableMatcher from "../../matcher/metastatementForMetavariable";

class PremiseMetastatementForMetavariableMatcher extends MetastatementForMetavariableMatcher {
  static createSubstitutions = true;
}

export const premiseMetastatementForMetavariableMatcher = new PremiseMetastatementForMetavariableMatcher();
