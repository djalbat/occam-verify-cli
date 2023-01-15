"use strict";

import MetaMatcher from "../metaMatcher";

class PremiseMetaMatcher extends MetaMatcher {
  static createMetaSubstitutions = true;
}

export const premiseMetaMatcher = new PremiseMetaMatcher();
