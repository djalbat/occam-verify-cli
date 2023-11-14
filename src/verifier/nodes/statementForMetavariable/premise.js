"use strict";

import StatementForMetavariableNodesVerifier from "../../../verifier/nodes/statementForMetavariable";

class PremiseStatementForMetavariableNodesVerifier extends StatementForMetavariableNodesVerifier {
  static createSubstitutions = true;
}

const premiseStatementForMetavariableNodesVerifier = new PremiseStatementForMetavariableNodesVerifier();

export default premiseStatementForMetavariableNodesVerifier;
