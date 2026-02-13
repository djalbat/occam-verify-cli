"use strict";

import ScopedContext from "../context/scoped";
import LiminalContext from "../context/liminal";
import LiteralContext from "../context/literal";
import EphemeralContext from "../context/ephemeral";

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

export async function asyncScope(innerFunction, context) {
  const scopedContext = ScopedContext.fromNothing(context);

  context = scopedContext;  ///

  return await innerFunction(context);
}

export async function asyncAttempt(innerFunction, context) {
  const ephemeralContext = EphemeralContext.fromNothing(context);

  context = ephemeralContext;  ///

  return await innerFunction(context);
}

export async function asyncLiminally(innerFunction, context) {
  const liminalContext = LiminalContext.fromNothing(context);

  context = liminalContext;  ///

  return await innerFunction(context);
}

