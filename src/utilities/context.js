"use strict";

import ProofContext from "../context/proof";
import NestedContext from "../context/nested";
import NominalContext from "../context/nominal";
import LiteralContext from "../context/literal";
import LiminalContext from "../context/liminal";
import EphemeralContext from "../context/ephemeral";
import BranchingContext from "../context/branching";
import SyntheticContext from "../context/synthetic";

export function nominally(innerFunction) {
  let context;

  const nominalContext = NominalContext.fromNothing();

  context = nominalContext; ///

  const literalContext = LiteralContext.fromNothing(context);

  context = literalContext;  ///

  return innerFunction(context);
}

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

export function descend(innerFunction, context) {
  const nestedContext = NestedContext.fromNothing(context);

  context = nestedContext;  ///

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

export function instantiate(innerFunction, context) {
  const literalContext = LiteralContext.fromNothing(context);

  context = literalContext;  ///

  return innerFunction(context);
}

export async function asyncRestrict(innerFunction, metaLevelSubstitutions, context) {
  if (context === undefined) {
    context = metaLevelSubstitutions;  ///

    metaLevelSubstitutions = null;
  }

  const proofcontext = ProofContext.fromMetaLevelSubstitutions(metaLevelSubstitutions, context);

  context = proofcontext;  ///

  return await innerFunction(context);
}

export async function asyncReconcile(innerFunction, context) {
  const liminalContext = LiminalContext.fromNothing(context);

  context = liminalContext;  ///

  return await innerFunction(context);
}

export function sanitisedContextFromContext(context) {
  let contextExtraneousContext = isContextExtraneousContext(context);

  while (contextExtraneousContext) {
    context = context.getContext();

    contextExtraneousContext = isContextExtraneousContext(context);
  }

  const ephemeralContext = EphemeralContext.fromNothing(context),
        sanitisedContext = ephemeralContext; ///

  return sanitisedContext;
}

function isContextExtraneousContext(context) {
  const contextLiminalContext = (context instanceof LiminalContext),
        contextEphemeralContext = (context instanceof EphemeralContext),
        contextBranchingContext = (context instanceof BranchingContext),
        contextSyntheticContext = (context instanceof SyntheticContext),
        contextExtraneousContext = (contextLiminalContext || contextEphemeralContext || contextBranchingContext || contextSyntheticContext);

  return contextExtraneousContext;
}
