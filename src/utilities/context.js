"use strict";

import ScopedContext from "../context/scoped";
import LiminalContext from "../context/liminal";
import LiteralContext from "../context/literal";
import EphemeralContext from "../context/ephemeral";
import SyntheticContext from "../context/synthetic";
import BranchingContext from "../context/branching";

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

export function tentatively(innerFunction, context) {
  const branchingContext = BranchingContext.fromNothing(context);

  context = branchingContext;  ///

  return innerFunction(context);
}

export function synthetically(innerFunction, contexts, context) {
  const syntheticContext = SyntheticContext.fromContexts(contexts, context);

  context = syntheticContext;  ///

  return innerFunction(context);
}

export async function asyncScope(innerFunction, metaLevelSubstitutions, context) {
  if (context === undefined) {
    context = metaLevelSubstitutions;  ///

    metaLevelSubstitutions = null;
  }

  const scopedContext = ScopedContext.fromMetaLevelSubstitutions(metaLevelSubstitutions, context);

  context = scopedContext;  ///

  return await innerFunction(context);
}

export async function asyncLiminally(innerFunction, context) {
  const liminalContext = LiminalContext.fromNothing(context);

  context = liminalContext;  ///

  return await innerFunction(context);
}
