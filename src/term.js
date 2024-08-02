"use strict";

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

  getVariables(variables, context) {
    const variableNodes = variableNodesQuery(this.node);

    variableNodes.forEach((variableNode) => {
      const variable = context.findVariableByVariableNode(variableNode),
            variablesIncludesVariable = variables.includes(variable);

      if (!variablesIncludesVariable) {
        variables.push(variable);
      }
    });

    return variables;
  }

  isInitiallyGrounded() {
    const definedVariables = [],
          implicitlyGrounded = this.isImplicitlyGrounded(definedVariables),
          initiallyGrounded = implicitlyGrounded; ///

    return initiallyGrounded;
  }

  isImplicitlyGrounded(definedVariables) {
    const variableNodes = variableNodesQuery(this.node),
          variables = definedVariables, ///
          nodes = variableNodes,  ///
          implicitlyGrounded = nodes.every((node) => {
            const variableMatchesNode = variables.some((variable) => {
              const variableMatchesNode = variable.matchNode(node);

              if (variableMatchesNode) {
                return true;
              }
            });

            if (variableMatchesNode) {
              return true;
            }
          });

    return implicitlyGrounded;
  }

  static fromTermNodeAndType(termNode, type) {
    const node = termNode,  ///
          term = new Term(node, type);

    return term;
  }
}
