"use strict";

import ScopedContext from "../context/scoped";
import LiminalContext from "../context/liminal";
import LiteralContext from "../context/literal";
import EphemeralContext from "../context/ephemeral";
import SyntheticContext from "../context/synthetic";

export function scope(innerFunction, context) {
  const scopedContext = ScopedContext.fromNothing(context);

  context = scopedContext;  ///

  return innerFunction(context);
}

export function attempt(innerFunction, context) {
  const ephemeralContext = EphemeralContext.fromNothing(context);

  context = ephemeralContext;  ///

  return innerFunction(context);
}

export function liminally(innerFunction, context) {
  const liminalContext = LiminalContext.fromNothing(context);

  context = liminalContext;  ///

  return innerFunction(context);
}

export function literally(innerFunction, context) {
  const literalContext = LiteralContext.fromNothing(context);

  context = literalContext;  ///

  return innerFunction(context);
}

export function synthetically(innerFunction, generalContext, specificContext) {
  const syntheticContext = SyntheticContext.fromNothing(generalContext, specificContext),
        context = syntheticContext;  ///

  return innerFunction(context);
}
