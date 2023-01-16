"use strict";

import StatementForVariableMatcher from "../../matcher/statementForVariable";

class ConsequenceStatementForVariableMatcher extends StatementForVariableMatcher {
  static createSubstitutions = false;
}

export const consequenceStatementForVariableMatcher = new ConsequenceStatementForVariableMatcher();
