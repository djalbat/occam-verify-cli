"use strict";

import { CustomGrammar, CombinedCustomGrammar } from "occam-custom-grammars";

export function customGrammarFromNameAndEntries(name, entries) {
  const termBNF = entries.getTermBNF(),
        statementBNF = entries.getStatementBNF(),
        typeVocabulary = entries.getTypeVocabulary(),
        symbolVocabulary = entries.getSymbolVocabulary(),
        customGrammar = CustomGrammar.fromNameTermBNFStatementBNFTypeVocabularyAndSymbolVocabulary(name, termBNF, statementBNF, typeVocabulary, symbolVocabulary);

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
