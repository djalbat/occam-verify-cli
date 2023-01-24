"use strict";

import TermForVariableMatcher from "../../matcher/termForVariable";

class SuppositionTermForVariableMatcher extends TermForVariableMatcher {
  static createSubstitutions = true;
}

export const suppositionTermForVariableMatcher = new SuppositionTermForVariableMatcher();
