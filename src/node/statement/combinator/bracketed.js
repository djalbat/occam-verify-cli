"use strict";

import { STATEMENT_META_TYPE_NAME } from "../../../metaTypeNames";
import { statementNodeFromStatementString } from "../../../utilities/node";

const bracketedCombinatorStatementString = `(${STATEMENT_META_TYPE_NAME})`;

const bracketedCombinatorStatementNode = statementNodeFromStatementString(bracketedCombinatorStatementString);

export default bracketedCombinatorStatementNode;
