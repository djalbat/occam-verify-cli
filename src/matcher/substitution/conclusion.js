"use strict";

import SubstitutionMatcher from "../../matcher/substitution";

class ConclusionSubstitutionMatcher extends SubstitutionMatcher {
  static createMetaSubstitutions = false;
}

export const conclusionSubstitutionMatcher = new ConclusionSubstitutionMatcher();
