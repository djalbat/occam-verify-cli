"use strict";

import ScopedContext from "../context/scoped";
import LiminalContext from "../context/liminal";
import LiteralContext from "../context/literal";
import nominalContext from "../context/nominal";
import EphemeralContext from "../context/ephemeral";
import BranchingContext from "../context/branching";
import SyntheticContext from "../context/synthetic";

export function join(innerFunction, ...contexts) {
  const syntheticContext = SyntheticContext.fromContexts(...contexts),
        context = syntheticContext;  ///

  return innerFunction(context);
}

export function choose(innerFunction, context) {
  const branchingContext = BranchingContext.fromNothing(context);

  context = branchingContext;  ///

  return innerFunction(context);
}

export function attempt(innerFunction, context) {
  const ephemeralContext = EphemeralContext.fromNothing(context);

  context = ephemeralContext;  ///

  return innerFunction(context);
}

export function reconcile(innerFunction, context) {
  const liminalContext = LiminalContext.fromNothing(context);

  context = liminalContext;  ///

  return innerFunction(context);
}

export function nominally(innerFunction) {
  let context;

  context = nominalContext; ///

  const literalContext = LiteralContext.fromNothing(context);

  context = literalContext;  ///

  return innerFunction(context);
}

export function instantiate(innerFunction, context) {
  const literalContext = LiteralContext.fromNothing(context);

  steriiseLiteralContext(literalContext);

  context = literalContext;  ///

  return innerFunction(context);
}

export async function asyncRestrict(innerFunction, metaLevelSubstitutions, context) {
  if (context === undefined) {
    context = metaLevelSubstitutions;  ///

    metaLevelSubstitutions = null;
  }

  const scopedContext = ScopedContext.fromMetaLevelSubstitutions(metaLevelSubstitutions, context);

  context = scopedContext;  ///

  return await innerFunction(context);
}

export async function asyncReconcile(innerFunction, context) {
  const liminalContext = LiminalContext.fromNothing(context);

  context = liminalContext;  ///

  return await innerFunction(context);
}

function steriiseLiteralContext(literalContext) {
  let context;

  context = literalContext.getContext();


}
