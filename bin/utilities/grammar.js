'use strict';

const lexers = require('occam-lexers'),
			parsers = require('occam-parsers'),
			customgrammars = require('occam-custom-grammars');  ///;

const { FlorenceLexer } = lexers,
			{ FlorenceParser } = parsers,
			{ CustomGrammar, CombinedCustomGrammars, lexersUtilities, parsersUtilities } = customgrammars,
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

function combinedCustomGrammarsFromPackageName(packageName) {
	const directoryPath = packageName,  ///
				customGrammar = CustomGrammar.fromDirectoryPath(directoryPath),
				customGrammars = [
					customGrammar
				],
				combinedCustomGrammars = CombinedCustomGrammars.fromCustomGrammars(customGrammars);

	return combinedCustomGrammars;
}

module.exports = {
	florenceLexerFromNothing,
	florenceParserFromNothing,
	combinedCustomGrammarsFromPackageName,
	florenceLexerFromCombinedCustomGrammars,
	florenceParserFromCombinedCustomGrammars
};
