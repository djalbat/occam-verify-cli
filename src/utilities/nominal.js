"use strict";

import { customGrammarUtilities } from "occam-custom-grammars";
import { lexersUtilities, parsersUtilities } from "occam-nominal";

import NominalLexer from "../nominal/lexer";
import NominalParser from "../nominal/parser";

const { combinedCustomGrammarFromNothing } = customGrammarUtilities,
      { nominalLexerFromCombinedCustomGrammar } = lexersUtilities,
      { nominalParserFromCombinedCustomGrammar } = parsersUtilities;

const combinedCustomGrammar = combinedCustomGrammarFromNothing();

export const nominalLexer = nominalLexerFromCombinedCustomGrammar(NominalLexer, combinedCustomGrammar);

export const nominalParser = nominalParserFromCombinedCustomGrammar(NominalParser, combinedCustomGrammar);
