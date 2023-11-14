"use strict";

import StatementForMetavariableNodesVerifier from "../../../verifier/nodes/statementForMetavariable";

class ConclusionStatementForMetavariableNodesVerifier extends StatementForMetavariableNodesVerifier {
  static createSubstitutions = false;
}

const conclusionStatementForMetavariableNodesVerifier = new ConclusionStatementForMetavariableNodesVerifier();

export default conclusionStatementForMetavariableNodesVerifier;
