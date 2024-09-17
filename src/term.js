"use strict";

import { filter } from "./utilities/array";
import { nodesQuery } from "./utilities/query"

const variableNodesQuery = nodesQuery("//variable");

export default class Term {
  constructor(node, type) {
    this.node = node;
    this.type = type;
  }

  getNode() {
    return this.node;
  }

  getType() {
    return this.type;
  }

  match(term) {
    const node = term.getNode(),
          matches = this.node.match(node);

    return matches;
  }

  getVariables(localContext) {
    const variables = [],
          variableNodes = variableNodesQuery(this.node);

    variableNodes.forEach((variableNode) => {
      const variable = localContext.findVariableByVariableNode(variableNode),
            variablesIncludesVariable = variables.includes(variable);

      if (!variablesIncludesVariable) {
        variables.push(variable);
      }
    });

    return variables;
  }

  isGrounded(definedVariables, localContext) {
    const variables = this.getVariables(localContext);

    filter(variables, (variable) => {
      const definedVariablesIncludesVariable = definedVariables.includes(variable);

      if (!definedVariablesIncludesVariable) {
        return true;
      }
    });

    const undefinedVariables = variables, ///
          undefinedVariablesLength = undefinedVariables.length,
          grounded = (undefinedVariablesLength <= 1);

    return grounded;
  }

  matchTermNode(termNode) {
    const termNodeMatches = this.node.match(termNode);

    return termNodeMatches;
  }

  isInitiallyGrounded(localContext) {
    const variables = this.getVariables(localContext),
          variablesLength = variables.length,
          initiallyGrounded = (variablesLength === 0);

    return initiallyGrounded;
  }

  isImplicitlyGrounded(definedVariables, localContext) {
    const grounded = this.isGrounded(definedVariables, localContext),
          implicitlyGrounded = grounded;  ///

    return implicitlyGrounded;
  }

  static fromTermNodeAndType(termNode, type) {
    const node = termNode,  ///
          term = new Term(node, type);

    return term;
  }
}
