"use strict";

import PartialContext from "../../../context/partial";

import { ruleFromBNF } from "../../../context/partial";

const bnf = `

        _ ::= termSubstitution... <END_OF_LINE> ;
            
      `,
      rule = ruleFromBNF(bnf);

export default class TermSubstitutionPartialContext extends PartialContext {
  static rule = rule;

  static fromStringLexerAndParser(string, lexer, parser) { return PartialContext.fromStringLexerAndParser(TermSubstitutionPartialContext, string, lexer, parser); }
}
