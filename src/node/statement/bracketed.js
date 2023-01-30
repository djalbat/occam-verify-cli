"use strict";

import { statementNodeFromStatementString } from "../../utilities/node";

const bracketedStatementString = "(n=m)";

const bracketedStatementNode = statementNodeFromStatementString(bracketedStatementString);

export default bracketedStatementNode;
