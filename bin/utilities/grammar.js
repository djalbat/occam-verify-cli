"use strict";

const lexers = require("occam-lexers"),
			parsers = require("occam-parsers"),
      customGrammars = require("occam-custom-grammars"),  ///
      grammarUtilities = require("occam-grammar-utilities");

const { FlorenceLexer } = lexers,
			{ FlorenceParser } = parsers,
      { removeOrRenameIntermediateNodes } = grammarUtilities,
			{ lexersUtilities, parsersUtilities } = customGrammars,
			{ florenceLexerFromCombinedCustomGrammar } = lexersUtilities,
			{ florenceParserFromCombinedCustomGrammar } = parsersUtilities;

function florenceLexerFromNothing() {
	const florenceLexer = FlorenceLexer.fromNothing();

	return florenceLexer;
}

function florenceParserFromNothing() {
	const florenceParser = FlorenceParser.fromNothing();

	return florenceParser;
}

module.exports = {
	florenceLexerFromNothing,
	florenceParserFromNothing,
  removeOrRenameIntermediateNodes,
  florenceLexerFromCombinedCustomGrammar,
  florenceParserFromCombinedCustomGrammar
};
