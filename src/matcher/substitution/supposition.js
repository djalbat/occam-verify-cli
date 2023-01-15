"use strict";

import SubstitutionMatcher from "../../matcher/substitution";

class SuppositionSubstitutionMatcher extends SubstitutionMatcher {
  static createSubstitutions = true;
}

export const suppositionSubstitutionMatcher = new SuppositionSubstitutionMatcher();
