"use strict";

import NodeAndTokens from "../nodeAndTokens";

import { ruleFromBNF } from "../nodeAndTokens";

const bnf = `

        _ ::= variable... <END_OF_LINE> ;
        
      `,
      rule = ruleFromBNF(bnf);

export default class VariableNodeAndTokens extends NodeAndTokens {
  getVariableNode() {
    const variableNode = this.node; ///

    return variableNode;
  }

  getVariableTokens() {
    const variableTokens = this.tokens; ///

    return variableTokens;
  }

  static rule = rule;

  static fromVariable(variable, context) {
    const string = variable.getString(),
          variableNodeAndTokens = NodeAndTokens.fromString(VariableNodeAndTokens, string, context);

    return variableNodeAndTokens;
  }

  static fromVariableString(variableString, context) {
    const string = variableString,  ///
          variableNodeAndTokens = NodeAndTokens.fromString(VariableNodeAndTokens, string, context);

    return variableNodeAndTokens;
  }
}

export function variableNodeFromVariableString(variableString, context) {
  const variableNodeAndTokens = VariableNodeAndTokens.fromVariableString(variableString, context),
        variableNode = variableNodeAndTokens.getVariableNode();

  return variableNode;
}
