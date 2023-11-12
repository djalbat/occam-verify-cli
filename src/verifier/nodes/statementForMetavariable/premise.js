"use strict";

import StatementForMetavariableNodesVerifier from "../../../verifier/nodes/statementForMetavariable";

class PremiseStatementForMetavariableNodesVerifier extends StatementForMetavariableNodesVerifier {
  static createSubstitutions = true;
}

export const premiseStatementForMetavariableNodesVerifier = new PremiseStatementForMetavariableNodesVerifier();
