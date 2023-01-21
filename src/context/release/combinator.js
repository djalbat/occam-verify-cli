"use strict";

import { rewriteNodes } from "occam-grammar-utilities";
import { lexersUtilities, parsersUtilities } from "occam-custom-grammars";

import { combinedCustomGrammarFromNothing } from "../../utilities/customGrammar";

const { florenceLexerFromCombinedCustomGrammar } = lexersUtilities,
      { florenceParserFromCombinedCustomGrammar } = parsersUtilities;

const combinedCustomGrammar = combinedCustomGrammarFromNothing(),
      florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar),
      florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar);

class CombinatorReleaseContext {
  nodeFromContentAndRuleName(content, ruleName) {
    const ruleMap = florenceParser.getRuleMap(),
          rule = ruleMap[ruleName],
          tokens = florenceLexer.tokenise(content),
          node = florenceParser.parse(tokens, rule);

    if (node !== null) {
      rewriteNodes(node);
    }

    return node;
  }

  static fromNothing() {
    const combinatorReleaseContext = new CombinatorReleaseContext();

    return combinatorReleaseContext;
  }
}

const combinatorReleaseContext = CombinatorReleaseContext.fromNothing();

export default combinatorReleaseContext;

