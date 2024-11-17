"use strict";

import PartialContext from "../../../context/partial";

import { ruleFromBNF } from "../../../context/partial";

const bnf = `

        _ ::= statementSubstitution... <END_OF_LINE> ;
            
      `,
      rule = ruleFromBNF(bnf);

export default class StatementSubstitutionPartialContext extends PartialContext {
  static rule = rule;

  static fromStringLexerAndParser(string, lexer, parser) { return PartialContext.fromStringLexerAndParser(StatementSubstitutionPartialContext, string, lexer, parser); }
}
