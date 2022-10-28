"use strict";

import { CustomGrammar, CombinedCustomGrammar } from "occam-custom-grammars";

export function customGrammarFromRelease(release) {
  const name = release.getName(),
        termBNF = release.getTermBNF(),
        statementBNF = release.getStatementBNF(),
        metastatementBNF = release.getMetastatementBNF(),
        typePattern = release.getTypePattern(),
        symbolPattern = release.getSymbolPattern(),
        operatorPattern = release.getOperatorPattern(),
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