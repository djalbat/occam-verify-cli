"use strict";

import { CustomGrammar, CombinedCustomGrammar } from "occam-custom-grammars";

export function customGrammarFromNameAndEntries(name, entries) {
  const termBNF = entries.getTermBNF(),
        statementBNF = entries.getStatementBNF(),
        typePattern = entries.getTypePattern(),
        symbolPattern = entries.getSymbolPattern(),
        operatorPattern = entries.getOperatorPattern(),
        customGrammar = CustomGrammar.fromNameTermBNFStatementBNFTypePatternSymbolPatternAndOperatorPattern(name, termBNF, statementBNF, typePattern, symbolPattern, operatorPattern);

  return customGrammar;
}

export function combinedCustomGrammarFromNothing() {
  const customGrammars = [],
        combinedCustomGrammar = CombinedCustomGrammar.fromCustomGrammars(customGrammars);

  return combinedCustomGrammar;
}

export function combinedCustomGrammarFromReleaseContexts(releaseContexts) {
  const customGrammars = releaseContexts.map((releaseContext) => {
          const customGrammar = releaseContext.getCustomGrammar();

          return customGrammar;
        });

  customGrammars.reverse(); ///

  const combinedCustomGrammar = CombinedCustomGrammar.fromCustomGrammars(customGrammars);

  return combinedCustomGrammar;
}

export default {
  customGrammarFromNameAndEntries,
  combinedCustomGrammarFromNothing,
  combinedCustomGrammarFromReleaseContexts
};
