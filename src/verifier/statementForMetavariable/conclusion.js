"use strict";

import StatementForMetavariableVerifier from "../../verifier/statementForMetavariable";

class ConclusionStatementForMetavariableVerifier extends StatementForMetavariableVerifier {
  static createSubstitutions = false;
}

export const conclusionStatementForMetavariableVerifier = new ConclusionStatementForMetavariableVerifier();
