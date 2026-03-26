"use strict";

import NestedContext from "../context/nested";
import TheticContext from "../context/thetic";
import BoundedContext from "../context/bounded";
import NominalContext from "../context/nominal";
import LiteralContext from "../context/literal";
import LiminalContext from "../context/liminal";
import SynopticContext from "../context/synoptic";
import IllativeContext from "../context/illative";
import EphemeralContext from "../context/ephemeral";
import BranchingContext from "../context/branching";
import NominalFileContext from "../context/file/nominal";

import { ephemeralContextFromJSON, ephemeralContextToEphemeralContextJSON } from "../utilities/json";

export function join(innerFunction, ...contexts) {
  const synopticContext = SynopticContext.fromContexts(...contexts),
        context = synopticContext;  ///

  return innerFunction(context);
}

export function ground(innerFunction) {
  let context;

  const nominalContext = NominalContext.fromNothing();

  context = nominalContext; ///

  const literalContext = LiteralContext.fromNothing(context);

  context = literalContext;  ///

  return innerFunction(context);
}

export function ablate(innerFunction, context) {
  let contextNominalFileContext = (context instanceof NominalFileContext);

  while (!contextNominalFileContext) {
    context = context.getContext();

    contextNominalFileContext = (context instanceof NominalFileContext)
  }

  return innerFunction(context);
}

export function choose(innerFunction, context) {
  const branchingContext = BranchingContext.fromNothing(context);

  context = branchingContext;  ///

  return innerFunction(context);
}

export function derive(innerFunction, context) {
  const illativeContext = IllativeContext.fromNothing(context);

  context = illativeContext;  ///

  return innerFunction(context);
}

export function declare(innerFunction, context) {
  const theticContext = TheticContext.fromNothing(context);

  context = theticContext;  ///

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

export function enclose(innerFunction, metaLevelAssumptions, context) {
  if (context === undefined) {
    context = metaLevelAssumptions;  ///

    metaLevelAssumptions = null;
  }

  const boundedContext = BoundedContext.fromMetaLevelAssumptions(metaLevelAssumptions, context);

  context = boundedContext;  ///

  return innerFunction(context);
}

export function evaluate(procedure, terms) {
  const context = procedure.getContext();

  return procedure.call(terms, context);
}

export function reconcile(innerFunction, context) {
  const liminalContext = LiminalContext.fromNothing(context);

  context = liminalContext;  ///

  return innerFunction(context);
}

export function serialise(innerFunction, context) {
  const ephemeralContext = context, ///
        ephemeralContextJSON = ephemeralContextToEphemeralContextJSON(ephemeralContext),
        contextJSON = ephemeralContextJSON; ///

  context = contextJSON;  ///

  return innerFunction(context);
}

export function unserialise(innerFunction, json, context) {
  const ephemeralContext = ephemeralContextFromJSON(json, context);

  context = ephemeralContext; ///

  return innerFunction(json, context);
}

export function instantiate(innerFunction, context) {
  const literalContext = LiteralContext.fromNothing(context);

  context = literalContext;  ///

  return innerFunction(context);
}
