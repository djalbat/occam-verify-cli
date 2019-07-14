'use strict';

const customgrammars = require('occam-custom-grammars');  ///

const { CustomGrammar, CombinedCustomGrammars, lexersUtilities, parsersUtilities } = customgrammars,
      { florenceLexerFromCombinedCustomGrammars } = lexersUtilities,
      { florenceParserFromCombinedCustomGrammars } = parsersUtilities;

function verifyPackage(packageName, context) {
  const directoryName = packageName, ///
        customGrammar = CustomGrammar.fromDirectoryName(directoryName),
        customGrammars = [
          customGrammar
        ],
        combinedCustomGrammars = CombinedCustomGrammars.fromCustomGrammars(customGrammars),
        florenceLexer = florenceLexerFromCombinedCustomGrammars(combinedCustomGrammars),
        florenceParser = florenceParserFromCombinedCustomGrammars(combinedCustomGrammars);

  debugger
}

module.exports = verifyPackage;
