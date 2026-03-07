"use strict";

import { ZipPass as ZipPassBase } from "occam-languages";

export default class ZipPass extends ZipPassBase {
  run(generalNonTerminalNode, specificNonTerminalNode, ...remainingArguments) {
    let success = false;

    const specificChildNodes = specificNonTerminalNode.getChildNodes(), ///
          generalChildNodes = generalNonTerminalNode.getChildNodes(), ///
          descended = this.descend(generalChildNodes, specificChildNodes, ...remainingArguments);

    if (descended) {
      success = true;
    }

    return success;
  }
}
