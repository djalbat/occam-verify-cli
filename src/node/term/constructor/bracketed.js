"use strict";

import bracketedConstructorDeclarationTokens from "../../../tokens/constructorDeclaration/bracketed";

import { termNodeFromConstructorDeclarationTokens } from "../../../utilities/node";

const bracketedConstructorTermNode = termNodeFromConstructorDeclarationTokens(bracketedConstructorDeclarationTokens);

export default bracketedConstructorTermNode;
