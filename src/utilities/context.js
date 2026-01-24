"use strict";

import { arrayUtilities } from "necessary";

import ScopedContext from "../context/scoped";
import LiminalContext from "../context/liminal";
import LiteralContext from "../context/literal";
import EphemeralContext from "../context/ephemeral";
import SyntheticContext from "../context/synthetic";

import { LEVELS, FUNCTION, DOUBLE_SPACE } from "../constants";

const { secondLast } = arrayUtilities;

export function chainContext(context) {
  return new Proxy(context, {
    get: (instance, name, receiver) => {
      const levelsIncludeName = LEVELS.includes(name);

      if (levelsIncludeName) {
        return (message, node = null) => {
          let depth = -1,
              context = instance; ///

          const contexts = [
            context
          ];

          context = context.getContext();

          while (context !== null) {
            depth++;

            contexts.push(context);

            context = context.getContext();
          }

          const secondLastContext = secondLast(contexts),
                fileContext = secondLastContext,  ///
                indent = DOUBLE_SPACE.repeat(depth),
                level = name; ///

          message = `${indent}${message}`;

          return fileContext.writeToLog(level, message, node);
        }
      }

      if (name in instance) {
        return Reflect.get(instance, name, receiver);
      }

      const context = instance.getContext(),
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
