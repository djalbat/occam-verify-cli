"use strict";

import { lexersUtilities, parsersUtilities } from "occam-custom-grammars";

import { combinedCustomGrammarFromNothing } from "./customGrammar";

const { nominalLexerFromCombinedCustomGrammar } = lexersUtilities,
      { nominalParserFromCombinedCustomGrammar } = parsersUtilities;

const combinedCustomGrammar = combinedCustomGrammarFromNothing();

export const nominalLexer = nominalLexerFromCombinedCustomGrammar(combinedCustomGrammar);

export const nominalParser = nominalParserFromCombinedCustomGrammar(combinedCustomGrammar);
