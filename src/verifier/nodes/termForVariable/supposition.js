"use strict";

import TermForVariableNodesVerifier from "../../../verifier/nodes/termForVariable";

class SuppositionTermForVariableNodesVerifier extends TermForVariableNodesVerifier {
  static createSubstitutions = true;
}

export const suppositionTermForVariableNodesVerifier = new SuppositionTermForVariableNodesVerifier();
