"use strict";

const grammars = require("occam-grammars"),
      customGrammars = require("occam-custom-grammars");

const { FlorenceLexer, FlorenceParser } = grammars,
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
  florenceLexerFromCombinedCustomGrammar,
  florenceParserFromCombinedCustomGrammar
};
