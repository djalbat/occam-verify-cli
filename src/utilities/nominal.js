"use strict";

import { lexersUtilities, parsersUtilities } from "occam-custom-grammars";

import NominalLexer from "../nominal/lexer";
import NominalParser from "../nominal/parser";

import { combinedCustomGrammarFromNothing } from "./customGrammar";

const { nominalLexerFromCombinedCustomGrammar } = lexersUtilities,
      { nominalParserFromCombinedCustomGrammar } = parsersUtilities;

const combinedCustomGrammar = combinedCustomGrammarFromNothing();

export const nominalLexer = nominalLexerFromCombinedCustomGrammar(NominalLexer, combinedCustomGrammar);

export const nominalParser = nominalParserFromCombinedCustomGrammar(NominalParser, combinedCustomGrammar);
