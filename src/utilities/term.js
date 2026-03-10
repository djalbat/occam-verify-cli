"use strict";

import { variableFromTermNode } from "../utilities/element";

export function variableFromTerm(term, context) {
  const termNode = term.getNode(),
        variable = variableFromTermNode(termNode, context);

  return variable;
}
