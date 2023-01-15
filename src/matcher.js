"use strict";

import matcherMixins from "./mixins/matcher";

export default class Matcher {}

Object.assign(Matcher.prototype, matcherMixins);

export const matcher = new Matcher();
