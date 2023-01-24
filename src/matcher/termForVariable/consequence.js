"use strict";

import TermForVariableMatcher from "../../matcher/termForVariable";

class ConsequenceTermForVariableMatcher extends TermForVariableMatcher {
  static createSubstitutions = false;
}

export const consequenceTermForVariableMatcher = new ConsequenceTermForVariableMatcher();
