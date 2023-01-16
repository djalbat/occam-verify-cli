"use strict";

import StatementForMetavariableMatcher from "../../matcher/statementForMetavariable";

class ConclusionStatementForMetavariableMatcher extends StatementForMetavariableMatcher {
  static createSubstitutions = false;
}

export const conclusionStatementForMetavariableMatcher = new ConclusionStatementForMetavariableMatcher();
