"use strict";

import { OBJECT_TYPE_NAME } from "../../typeNames";
import { constructorDeclarationTokensFromTermString } from "../../utilities/tokens";

const bracketedConstructorTermString = `(${OBJECT_TYPE_NAME}):${OBJECT_TYPE_NAME}`;

const bracketedConstructorDeclarationTokens = constructorDeclarationTokensFromTermString(bracketedConstructorTermString)

export default bracketedConstructorDeclarationTokens;
