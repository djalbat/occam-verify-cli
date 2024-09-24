"use strict";

import bracketedCombinatorStatementTokens from "../../../tokens/combinatorStatement/bracketed";

import { statementNodeFromStatementTokens } from "../../../utilities/node";

const bracketedCombinatorStatementNode = statementNodeFromStatementTokens(bracketedCombinatorStatementTokens);

export default bracketedCombinatorStatementNode;
