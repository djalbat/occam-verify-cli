"use strict";

import TermForVariableVerifier from "../../verifier/termForVariable";

class SuppositionTermForVariableVerifier extends TermForVariableVerifier {
  static createSubstitutions = true;
}

export const suppositionTermForVariableVerifier = new SuppositionTermForVariableVerifier();
