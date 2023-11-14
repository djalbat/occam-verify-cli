"use strict";

import TermForVariableNodesVerifier from "../../../verifier/nodes/termForVariable";

class SuppositionTermForVariableNodesVerifier extends TermForVariableNodesVerifier {
  static createSubstitutions = true;
}

const suppositionTermForVariableNodesVerifier = new SuppositionTermForVariableNodesVerifier();

export default suppositionTermForVariableNodesVerifier;
