"use strict";

import ScopedContext from "../context/scoped";
import LiteralContext from "../context/literal";
import EphemeralContext from "../context/ephemeral";
import SyntheticContext from "../context/synthetic";

import { FUNCTION } from "../constants";

export function chainContext(context) {
  return new Proxy(context, {
    get: (instance, name, receiver) => {
      if (name in instance) {
        return Reflect.get(instance, name, receiver);
      }

      const context = instance.context,
            value = context[name];

      return (typeof value === FUNCTION) ?
               value.bind(context) :
                 value;
    }
  });
}

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
