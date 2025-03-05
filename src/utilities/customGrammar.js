"use strict";

import { CustomGrammar, CombinedCustomGrammar } from "occam-custom-grammars";

export function customGrammarFromNameAndEntries(name, entries) {
  const typeBNF = entries.getTypeBNF(),
        termBNF = entries.getTermBNF(),
        statementBNF = entries.getStatementBNF(),
        typePattern = entries.getTypePattern(),
        symbolPattern = entries.getSymbolPattern(),
        customGrammar = CustomGrammar.fromNameTypeBNFTermBNFStatementBNFTypePatternAndSymbolPattern(name, typeBNF, termBNF, statementBNF, typePattern, symbolPattern);

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
