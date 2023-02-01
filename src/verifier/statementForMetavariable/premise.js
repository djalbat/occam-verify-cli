"use strict";

import StatementForMetavariableVerifier from "../../verifier/statementForMetavariable";

class PremiseStatementForMetavariableVerifier extends StatementForMetavariableVerifier {
  static createSubstitutions = true;
}

export const premiseStatementForMetavariableVerifier = new PremiseStatementForMetavariableVerifier();
