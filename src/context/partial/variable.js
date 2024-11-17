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
          lexer = context.getLexer(),
          parser = context.getParser(),
          variablePartialContext = PartialContext.fromStringLexerAndParser(VariablePartialContext, string, context, lexer, parser);

    return variablePartialContext;
  }

  static fromStringLexerAndParser(string, lexer, parser) { return PartialContext.fromStringLexerAndParser(VariablePartialContext, string, lexer, parser); }
}

export function variableNodeFromVariableString(variableString, context) {
  const string = variableString,  ///
        lexer = context.getLexer(),
        parser = context.getParser(),
        variablePartialContext = VariablePartialContext.fromStringLexerAndParser(string, lexer, parser),
        variableNode = variablePartialContext.getVariableNode();

  return variableNode;
}
