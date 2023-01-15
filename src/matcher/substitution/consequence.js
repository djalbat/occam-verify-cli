"use strict";

import SubstitutionMatcher from "../../matcher/substitution";

class ConsequenceSubstitutionMatcher extends SubstitutionMatcher {
  static createSubstitutions = false;
}

export const consequenceSubstitutionMatcher = new ConsequenceSubstitutionMatcher();
