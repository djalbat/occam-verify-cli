"use strict";

import MetaMatcher from "../metaMatcher";

class ConclusionMetaMatcher extends MetaMatcher {
  static createMetaSubstitutions = false;
}

export const conclusionMetaMatcher = new ConclusionMetaMatcher();
