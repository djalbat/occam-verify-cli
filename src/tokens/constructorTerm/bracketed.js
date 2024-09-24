"use strict";

import { OBJECT_TYPE_NAME } from "../../typeNames";
import { termTokensFromTermString } from "../../utilities/tokens";

const bracketedConstructorTermString = `(${OBJECT_TYPE_NAME})`;

const bracketedConstructorDeclarationTokens = termTokensFromTermString(bracketedConstructorTermString)

export default bracketedConstructorDeclarationTokens;
