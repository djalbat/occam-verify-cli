"use strict";

import TermForVariableNodesVerifier from "../../../verifier/nodes/termForVariable";

class ConsequentTermForVariableNodesVerifier extends TermForVariableNodesVerifier {
  static createSubstitutions = false;
}

const consequentTermForVariableNodesVerifier = new ConsequentTermForVariableNodesVerifier();

export default consequentTermForVariableNodesVerifier;
