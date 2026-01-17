"use strict";

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
