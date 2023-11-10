"use strict";

import unqualifiedBracketedCombinatorStatementTokens from "../../../tokens/statement/combinator/bracketed";

import { statementNodeFromUnqualifiedStatementTokens } from "../../../utilities/node";

const bracketedCombinatorStatementNode = statementNodeFromUnqualifiedStatementTokens(unqualifiedBracketedCombinatorStatementTokens);

export default bracketedCombinatorStatementNode;
