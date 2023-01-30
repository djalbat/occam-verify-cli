"use strict";

import { metastatementNodeFromMetastatementString } from "../../utilities/node";

const bracketedMetastatementString = "(A)";

const bracketedMetastatementNode = metastatementNodeFromMetastatementString(bracketedMetastatementString);

export default bracketedMetastatementNode;
