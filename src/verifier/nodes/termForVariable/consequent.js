"use strict";

import TermForVariableNodesVerifier from "../../../verifier/nodes/termForVariable";

class ConsequentTermForVariableNodesVerifier extends TermForVariableNodesVerifier {
  static createSubstitutions = false;
}

export const consequentTermForVariableNodesVerifier = new ConsequentTermForVariableNodesVerifier();
