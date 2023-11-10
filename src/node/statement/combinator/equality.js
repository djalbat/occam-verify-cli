"use strict";

import unqualifiedEqualityCombinatorStatementTokens from "../../../tokens/statement/combinator/equality";

import { statementNodeFromUnqualifiedStatementTokens } from "../../../utilities/node";

const equalityCombinatorStatementNode = statementNodeFromUnqualifiedStatementTokens(unqualifiedEqualityCombinatorStatementTokens);

export default equalityCombinatorStatementNode;
