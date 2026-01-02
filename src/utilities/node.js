"use strict";

import elements from "../elements";

import { baseType } from "../element/type";

export function variableFromTerm(term, context) {
  let variable = null;

  const termNode = term.getNode(),
        singularVariableNode = termNode.getSingularVariableNode();

  if (singularVariableNode !== null) {
    const { Variable } = elements,
          variableNode = singularVariableNode;  ///

    variable = Variable.fromVariableNode(variableNode, context);

    const type = term.getType();

    variable.setType(type);
  }

  return variable;
}

export function stringFromTerms(terms) {
  const termsString = terms.reduce((termsString, term) => {
          const termString = term.getString();

          termsString = (termsString !== null) ?
                         `${termsString}, ${termString}` :
                           termString;

          return termsString;
        }, null),
        string = `[${termsString}]`;

  return string;
}
