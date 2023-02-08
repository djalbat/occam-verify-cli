"use strict";

import { statementNodeFromStatementString } from "../../utilities/node";

const equalityStatementString = "n=m";

const equalityStatementNode = statementNodeFromStatementString(equalityStatementString);

export default equalityStatementNode;
