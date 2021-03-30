"use strict";

const { FlorenceLexer, FlorenceParser } = require("occam-grammars"),
      { lexersUtilities, parsersUtilities } = require("occam-custom-grammars");

const { florenceLexerFromCombinedCustomGrammar } = lexersUtilities,
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
