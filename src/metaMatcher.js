"use strict";

import matcherMixins from "./mixins/matcher";

export default class MetaMatcher {}

Object.assign(MetaMatcher.prototype, matcherMixins);

export const metaMatcher = new MetaMatcher();
