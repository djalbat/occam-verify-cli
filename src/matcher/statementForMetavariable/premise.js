"use strict";

import StatementForMetavariableMatcher from "../../matcher/statementForMetavariable";

class PremiseStatementForMetavariableMatcher extends StatementForMetavariableMatcher {
  static createSubstitutions = true;
}

export const premiseStatementForMetavariableMatcher = new PremiseStatementForMetavariableMatcher();
