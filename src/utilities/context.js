"use strict";

import MnemicContext from "../context/mnemic";
import NestedContext from "../context/nested";
import TheticContext from "../context/thetic";
import AphasicContext from "../context/aphasic";
import BoundedContext from "../context/bounded";
import NominalContext from "../context/nominal";
import LiteralContext from "../context/literal";
import LiminalContext from "../context/liminal";
import PhanericContext from "../context/phaneric";
import IllativeContext from "../context/illative";
import EphemeralContext from "../context/ephemeral";
import BranchingContext from "../context/branching";
import NominalFileContext from "../context/file/nominal";

import { mnemicContextFromJSON, mnemicContextsFromJSON, mnemicContextToMnemicContextJSON, mnemicContextsToMnemicContextsJSON } from "../utilities/json";

export function enclose(innerFunction, context) {
  assert(context, NominalFileContext, BoundedContext)

  const boundedContext = BoundedContext.fromNothing(context);

  context = boundedContext;  ///

  return innerFunction(context);
}

export function encapsulate(innerFunction, metaLevelAssumptions, context) {
  assert(context, NominalFileContext)

  const boundedContext = BoundedContext.fromMetaLevelAssumptions(metaLevelAssumptions, context);

  context = boundedContext;  ///

  return innerFunction(context);
}

export function derive(innerFunction, context) {
  assert(context, BoundedContext)

  const illativeContext = IllativeContext.fromNothing(context);

  context = illativeContext;  ///

  return innerFunction(context);
}

export function declare(innerFunction, context) {
  assert(context, BoundedContext)

  const theticContext = TheticContext.fromNothing(context);

  context = theticContext;  ///

  return innerFunction(context);
}

export function reconcile(innerFunction, context) {
  assert(context, LiminalContext, MnemicContext, AphasicContext)

  const liminalContext = LiminalContext.fromNothing(context);

  context = liminalContext;  ///

  return innerFunction(context);
}

export function speculate(innerFunction, context) {
  assert(context, MnemicContext, NestedContext, AphasicContext)

  const liminalContext = LiminalContext.fromNothing(context);

  context = liminalContext;  ///

  return innerFunction(context);
}

export function choose(innerFunction, context) {
  assert(context, BranchingContext, MnemicContext, NestedContext, AphasicContext)

  const branchingContext = BranchingContext.fromNothing(context);

  context = branchingContext;  ///

  return innerFunction(context);
}

export function descend(innerFunction, context) {
  assert(context, NestedContext, MnemicContext, AphasicContext)

  const nestedContext = NestedContext.fromNothing(context);

  context = nestedContext;  ///

  return innerFunction(context);
}

export function attempt(innerFunction, context) {
  assert(context, AphasicContext, TheticContext, IllativeContext, LiteralContext, NominalFileContext)

  const unreleased = context.isUnreleased();

  if (unreleased) {
    const mnemicContext = MnemicContext.fromNothing(context);

    context = mnemicContext;  ///
  }

  return innerFunction(context);
}

export function elide(innerFunction, context) {
  assert(context, TheticContext, IllativeContext, MnemicContext, PhanericContext)

  const aphasicContext = AphasicContext.fromNothing(context);

  context = aphasicContext;  ///

  return innerFunction(context);
}

export function manifest(innerFunction, ...contexts) {
  asserts(contexts, MnemicContext)

  const phanericContext = PhanericContext.fromContexts(contexts),
        context = phanericContext;  ///

  return innerFunction(context);
}

export function attempts(innerFunction, ...contexts) {
  asserts(contexts, AphasicContext, TheticContext, IllativeContext, LiteralContext, NominalFileContext)

  contexts = contexts.map((context) => {  ///
    const unreleased = context.isUnreleased();

    if (unreleased) {
      const mnemicContext = MnemicContext.fromNothing(context);

      context = mnemicContext;  ///
    }

    return context;
  });

  return innerFunction(...contexts);
}










export function newAblate(innerFunction, context) {
  const unreleased = context.isUnreleased();

  if (unreleased) {
    let contextGroundedContext = isContextGroundedContext(context);

    while (!contextGroundedContext) {
      context = context.getContext();

      contextGroundedContext = isContextGroundedContext(context);
    }
  }

  return innerFunction(context);
}








export function posit(innerFunction, context) {
  const stated = true,
    ephemeralContext = EphemeralContext.fromStated(stated, context);

  context = ephemeralContext;  ///

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

export function ablate(innerFunction, forced, context) {
  if (context === undefined) {
    context = forced; ///

    forced = false;
  }

  const unreleased = context.isUnreleased();

  if (forced || unreleased) {
    context = ablateContext(context);
  }

  return innerFunction(context);
}

export function proffer(innerFunction, context) {
  const stated = false,
        ephemeralContext = EphemeralContext.fromStated(stated, context);

  context = ephemeralContext;  ///

  return innerFunction(context);
}

export function serialise(innerFunction, context) {
  const mnemicContext = context, ///
        mnemicContextJSON = mnemicContextToMnemicContextJSON(mnemicContext),
        contextJSON = mnemicContextJSON; ///

  context = contextJSON;  ///

  return innerFunction(context);
}

export function instantiate(innerFunction, context) {
  const literalContext = LiteralContext.fromNothing(context);

  context = literalContext;  ///

  return innerFunction(context);
}

export function unserialise(innerFunction, json, context) {
  const mnemicContext = mnemicContextFromJSON(json, context);

  context = mnemicContext; ///

  return innerFunction(json, context);
}

export function ablates(innerFunction, ...contexts) {
  contexts = contexts.map((context) => {  ///
    const unreleased = context.isUnreleased();

    if (unreleased) {
      context = ablateContext(context);
    }

    return context;
  });

  return innerFunction(...contexts);
}

export function serialises(innerFunction, ...contexts) {
  const mnemicContexts = contexts, ///
        mnemicContextsJSON = mnemicContextsToMnemicContextsJSON(mnemicContexts),
        contextsJSON = mnemicContextsJSON; ///

  contexts = contextsJSON;  ///

  return innerFunction(...contexts);
}

export function unserialises(innerFunction, json, context) {
  const mnemicContexts = mnemicContextsFromJSON(json, context),
        contexts = mnemicContexts; ///

  return innerFunction(json, ...contexts);
}

export function evaluate(procedure, terms) {
  const context = procedure.getContext();

  return procedure.call(terms, context);
}

function ablateContext(context) {
  const stated = context.isStated();

  let contextExtraneousContext = isContextExtraneousContext(context);

  while (contextExtraneousContext) {
    context = context.getContext();

    contextExtraneousContext = isContextExtraneousContext(context);
  }

  const Context = stated ? TheticContext : IllativeContext;

  context = augmentContext(context, Context);

  return context;
}

function augmentContext(context, Context) {
  const contextContext = (context instanceof Context);

  if (!contextContext) {
    context = Context.fromNothing(context);
  }

  return context;
}

function isContextExtraneousContext(context) {
  const contextSubstantiveContext = isContextSubstantiveContext(context),
        contextExtraneousContext = !contextSubstantiveContext;

  return contextExtraneousContext;
}

function isContextGroundedContext(context) {
  const contextTheticContext = (context instanceof TheticContext),
        contextIllativeContext = (context instanceof IllativeContext),
        contextGroundedContext = (contextTheticContext || contextIllativeContext);

  return contextGroundedContext;
}

function isContextSubstantiveContext(context) {
  const contextTheticContext = (context instanceof TheticContext),
        contextIllativeContext = (context instanceof IllativeContext),
        contextBoundedContext = (context instanceof BoundedContext),
        contextNominalFileContext = (context instanceof NominalFileContext),
        contextSubstantiveContext = (contextTheticContext || contextIllativeContext || contextBoundedContext || contextNominalFileContext);

  return contextSubstantiveContext;
}

function assert(context, ...Contexts) {
  const passed = Contexts.some((Context) => {
    if (context instanceof Context) {
      return true;
    }
  });

  if (!passed) {
    debugger

    process.exit(1);
  }
}

function asserts(contexts, ...Contexts) {
  contexts.forEach((context) => {
    assert(context, ...Contexts);
  });
}
