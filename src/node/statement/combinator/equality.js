"use strict";

import { OBJECT_TYPE_NAME } from "../../../typeNames";
import { statementNodeFromStatementString } from "../../../utilities/node";

const equalityCombinatorStatementString = `${OBJECT_TYPE_NAME} = ${OBJECT_TYPE_NAME}`;

const equalityCombinatorStatementNode = statementNodeFromStatementString(equalityCombinatorStatementString);

export default equalityCombinatorStatementNode;

