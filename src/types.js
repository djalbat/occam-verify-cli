"use strict";

import { elements } from "occam-furtle";

import { BASE_TYPE_SYMBOL } from "./constants";

let baseType = null;

export function baseTypeFromNothing() {
  if (baseType === null) {
    const { Type } = elements,
          name = BASE_TYPE_SYMBOL,  ///
          context = null,
          provisional = false;

    baseType = Type.fromNameAndProvisional(name, provisional, context);
  }

  return baseType;
}
