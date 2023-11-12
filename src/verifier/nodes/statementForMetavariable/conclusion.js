"use strict";

import StatementForMetavariableNodesVerifier from "../../../verifier/nodes/statementForMetavariable";

class ConclusionStatementForMetavariableNodesVerifier extends StatementForMetavariableNodesVerifier {
  static createSubstitutions = false;
}

export const conclusionStatementForMetavariableNodesVerifier = new ConclusionStatementForMetavariableNodesVerifier();
