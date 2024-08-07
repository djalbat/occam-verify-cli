"use strict";

import { STATEMENT_META_TYPE_NAME } from "../../../metaTypeNames";
import { unqualifiedStatementTokensFromStatementString } from "../../../utilities/tokens";

const bracketedCombinatorStatementString = `(${STATEMENT_META_TYPE_NAME})`;

const bracketedCombinatorUnqualifiedStatementTokens = unqualifiedStatementTokensFromStatementString(bracketedCombinatorStatementString)

export default bracketedCombinatorUnqualifiedStatementTokens;
