"use strict";

import { OBJECT_TYPE_NAME } from "../../../typeNames";
import { unqualifiedStatementTokensFromStatementString } from "../../../utilities/tokens";

const equalityCombinatorStatementString = `${OBJECT_TYPE_NAME} = ${OBJECT_TYPE_NAME}`;

const unqualifiedEqualityCombinatorStatementTokens = unqualifiedStatementTokensFromStatementString(equalityCombinatorStatementString);

export default unqualifiedEqualityCombinatorStatementTokens;
