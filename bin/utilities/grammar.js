'use strict';

const lexers = require('occam-lexers'),
			parsers = require('occam-parsers'),
			customgrammars = require('occam-custom-grammars');  ///;

const { FlorenceLexer } = lexers,
			{ FlorenceParser } = parsers,
			{ lexersUtilities, parsersUtilities } = customgrammars,
			{ florenceLexerFromCombinedCustomGrammars } = lexersUtilities,
			{ florenceParserFromCombinedCustomGrammars } = parsersUtilities;

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
	florenceLexerFromCombinedCustomGrammars,
	florenceParserFromCombinedCustomGrammars
};
