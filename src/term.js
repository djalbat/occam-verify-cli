"use strict";

import { lexersUtilities, parsersUtilities } from "occam-custom-grammars";

import { nodesQuery } from "./utilities/query"
import { TERM_RULE_NAME } from "./ruleNames";

const { florenceLexerFromNothing } = lexersUtilities,
      { florenceParserFromNothing } = parsersUtilities;

const florenceLexer = florenceLexerFromNothing(),
      florenceParser = florenceParserFromNothing();

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

  static fromVariable(variable, context) {
    const variableNode = variable.getNode(),
          termNode = termNodeFromVariableNode(variableNode, context),
          node = termNode,  ///
          type = variable.getType(),
          term = new Term(node, type);

    return term;
  }

  static fromTermNodeAndType(termNode, type) {
    const node = termNode,  ///
          term = new Term(node, type);

    return term;
  }
}

function termNodeFromVariableNode(variableNode, context) {
  const variableString = context.nodeAsString(variableNode),
        content = variableString, ///
        lexer = florenceLexer,  ///
        parser = florenceParser,  ///
        ruleMap = parser.getRuleMap(),
        startRuleName = TERM_RULE_NAME, ///
        startRule = ruleMap[startRuleName],
        tokens = lexer.tokenise(content),
        node = parser.parse(tokens, startRule),
        termNode = node;  ///

  return termNode;
}