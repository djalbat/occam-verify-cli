"use strict";

import { NominalLexer as NominalLexerBase } from "occam-grammars";

export default class NominalLexer extends NominalLexerBase {
  static fromRules(rules) { return NominalLexerBase.fromRules(NominalLexer, rules); }

  static fromEntries(entries) { return NominalLexerBase.fromEntries(NominalLexer, entries); }

  static fromNothing() { return NominalLexerBase.fromNothing(NominalLexer); }
}
