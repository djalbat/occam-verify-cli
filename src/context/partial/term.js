"use strict";

import PartialContext from "../../context/partial";

import { ruleFromBNF } from "../../context/partial";

const bnf = `

        _ ::= term... <END_OF_LINE> ;
        
      `,
      rule = ruleFromBNF(bnf);

export default class TermPartialContext extends PartialContext {
  getTermNode() {
    const termNode = this.node; ///

    return termNode;
  }

  getTermTokens() {
    const termTokens = this.tokens; ///

    return termTokens;
  }

  static rule = rule;

  static fromTerm(term, context) {
    const string = term.getString(),
          lexer = context.getLexer(),
          parser = context.getParser(),
          termPartialContext = PartialContext.fromStringLexerAndParser(TermPartialContext, string, lexer, parser);

    return termPartialContext;
  }

  static fromStringLexerAndParser(string, lexer, parser) { return PartialContext.fromStringLexerAndParser(TermPartialContext, string, lexer, parser); }
}

export function termNodeFromTermString(termString, context) {
  const string = termString,  ///
        lexer = context.getLexer(),
        parser = context.getParser(),
        termPartialContext = TermPartialContext.fromStringLexerAndParser(string, lexer, parser),
        termNode = termPartialContext.getTermNode();

  return termNode;
}
