"use strict";

import { OBJECT_TYPE_NAME } from "../../../typeNames";
import { termNodeFromTermString } from "../../../utilities/node";

export const bracketedConstructorTermString = `(${OBJECT_TYPE_NAME})`;

const bracketedConstructorTermNode = termNodeFromTermString(bracketedConstructorTermString)

export default bracketedConstructorTermNode;
