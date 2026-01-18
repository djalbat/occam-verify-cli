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

export function unchainVariable(variable) {
  const context = variable.getContext(),
        variableIdentifier = variable.getIdentifier();

  variable = context.findVariableByVariableIdentifier(variableIdentifier);

  return variable;
}

export function unchainMetavariable(metavariable) {
  const context = metavariable.getContext(),
        metavariableName = metavariable.getName();

  metavariable = context.findMetavariableByMetavariableName(metavariableName);

  return metavariable;
}
