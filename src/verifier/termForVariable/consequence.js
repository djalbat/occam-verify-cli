"use strict";

import TermForVariableVerifier from "../../verifier/termForVariable";

class ConsequenceTermForVariableVerifier extends TermForVariableVerifier {
  static createSubstitutions = false;
}

export const consequenceTermForVariableVerifier = new ConsequenceTermForVariableVerifier();
