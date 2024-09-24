"use strict";

import bracketedConstructorTermTokens from "../../../tokens/constructorTerm/bracketed";

import { termNodeFromTermTokens } from "../../../utilities/node";

const bracketedConstructorTermNode = termNodeFromTermTokens(bracketedConstructorTermTokens);

export default bracketedConstructorTermNode;
