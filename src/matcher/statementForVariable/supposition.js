"use strict";

import StatementForVariableMatcher from "../../matcher/statementForVariable";

class SuppositionStatementForVariableMatcher extends StatementForVariableMatcher {
  static createSubstitutions = true;
}

export const suppositionStatementForVariableMatcher = new SuppositionStatementForVariableMatcher();
