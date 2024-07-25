"use strict";

import bracketedCombinatorUnqualifiedStatementTokens from "../../../tokens/unqualifiedStatement/combinator/bracketed";

import { statementNodeFromUnqualifiedStatementTokens } from "../../../utilities/node";

const bracketedCombinatorStatementNode = statementNodeFromUnqualifiedStatementTokens(bracketedCombinatorUnqualifiedStatementTokens);

export default bracketedCombinatorStatementNode;
