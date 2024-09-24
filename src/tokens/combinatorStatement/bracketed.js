"use strict";

import { STATEMENT_META_TYPE_NAME } from "../../metaTypeNames";
import { statementTokensFromStatementString } from "../../utilities/tokens";

const bracketedCombinatorStatementString = `(${STATEMENT_META_TYPE_NAME})`;

const bracketedCombinatorStatementTokens = statementTokensFromStatementString(bracketedCombinatorStatementString)

export default bracketedCombinatorStatementTokens;
