"use strict";

import { FRAME_META_TYPE_NAME } from "../../metaTypeNames";
import { fromTokensFromFrameString } from "../../utilities/tokens";

const bracketedCombinatorFrameString = `(${FRAME_META_TYPE_NAME})`;

const bracketedCombinatorFrameTokens = fromTokensFromFrameString(bracketedCombinatorFrameString)

export default bracketedCombinatorFrameTokens;
