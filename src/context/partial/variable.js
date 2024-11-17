"use strict";

import PartialContext from "../../context/partial";

import { ruleFromBNF } from "../../context/partial";

const bnf = `

        _ ::= variable... <END_OF_LINE> ;
        
      `,
      rule = ruleFromBNF(bnf);

export default class VariablePartialContext extends PartialContext {
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
          variablePartialContext = PartialContext.fromString(VariablePartialContext, string, context);

    return variablePartialContext;
  }

  static fromString(string, context) { return PartialContext.fromString(VariablePartialContext, string, context); }
}

export function variableNodeFromVariableString(variableString, context) {
  const string = variableString,  ///
        variablePartialContext = VariablePartialContext.fromString(string, context),
        variableNode = variablePartialContext.getVariableNode();

  return variableNode;
}
