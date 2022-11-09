"use strict";

import { CustomGrammar, CombinedCustomGrammar } from "occam-custom-grammars";

export function customGrammarFromEntries(entries) {
  const name = entries.getName(),
        termBNF = entries.getTermBNF(),
        statementBNF = entries.getStatementBNF(),
        metastatementBNF = entries.getMetastatementBNF(),
        typePattern = entries.getTypePattern(),
        symbolPattern = entries.getSymbolPattern(),
        operatorPattern = entries.getOperatorPattern(),
        customGrammar = CustomGrammar.fromNameTermBNFStatementBNFMetastatementBNFTypePatternSymbolPatternAndOperatorPattern(name, termBNF, statementBNF, metastatementBNF, typePattern, symbolPattern, operatorPattern);

  return customGrammar;
}

export function combinedCustomGrammarFromReleaseContexts(releaseContexts) {
  const customGrammars = releaseContexts.map((releaseContext) => {
          const customGrammar = releaseContext.getCustomGrammar();

          return customGrammar;
        }),
        combinedCustomGrammar = CombinedCustomGrammar.fromCustomGrammars(customGrammars);

  return combinedCustomGrammar;
}

export default {
  customGrammarFromEntries,
  combinedCustomGrammarFromReleaseContexts
};
