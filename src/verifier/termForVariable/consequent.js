"use strict";

import TermForVariableVerifier from "../../verifier/termForVariable";

class ConsequentTermForVariableVerifier extends TermForVariableVerifier {
  static createSubstitutions = false;
}

export const consequentTermForVariableVerifier = new ConsequentTermForVariableVerifier();
