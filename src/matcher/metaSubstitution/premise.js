"use strict";

import MetaSubstitutionMatcher from "../../matcher/metaSubstitution";

class PremiseMetaSubstitutionMatcher extends MetaSubstitutionMatcher {
  static createMetaSubstitutions = true;
}

export const premiseMetaSubstitutionMatcher = new PremiseMetaSubstitutionMatcher();
