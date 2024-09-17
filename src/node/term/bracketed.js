"use strict";

import { termNodeFromTermString } from "../../utilities/node";

const bracketedTermString = "(n)";

const bracketedTermNode = termNodeFromTermString(bracketedTermString);

export default bracketedTermNode;
