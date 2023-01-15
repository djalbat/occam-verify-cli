"use strict";

import SubstitutionMatcher from "../../matcher/substitution";

class PremiseSubstitutionMatcher extends SubstitutionMatcher {
  static createMetaSubstitutions = true;
}

export const premiseSubstitutionMatcher = new PremiseSubstitutionMatcher();
