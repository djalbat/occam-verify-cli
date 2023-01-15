"use strict";

import MetaSubstitutionMatcher from "../../matcher/metaSubstitution";

class ConclusionMetaSubstitutionMatcher extends MetaSubstitutionMatcher {
  static createMetaSubstitutions = false;
}

export const conclusionMetaSubstitutionMatcher = new ConclusionMetaSubstitutionMatcher();
