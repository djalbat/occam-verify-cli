"use strict";

import { BNFLexer } from "occam-lexers";
import { BNFParser } from "occam-parsers";
import { arrayUtilities } from "necessary";

const { first } = arrayUtilities;

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

export default class PartialContext {
  constructor(node, tokens) {
    this.node = node;
    this.tokens = tokens;
  }

  getNode() {
    return this.node;
  }

  getTokens() {
    return this.tokens;
  }

  static fromStringLexerAndParser(Class, string, lexer, parser) {
    const { rule } = Class,
          startRule = rule, ///
          content = `${string}
`;

    let tokens = lexer.tokenise(content),
        node = parser.parse(tokens, startRule);

    node.someChildNode((childNode) => {
      const childNodeNonTerminalNode = childNode.isNonTerminalNode();

      if (childNodeNonTerminalNode) {
        node = childNode; ///

        tokens = tokensFromTokensAndNode(tokens, node);  ///

        return true;
      }
    })

    const partialContext = new Class(node, tokens);

    return partialContext;
  }
}

export function ruleFromBNF(bnf) {
  const tokens = bnfLexer.tokensFromBNF(bnf),
        rules = bnfParser.rulesFromTokens(tokens),
        firstRule = first(rules),
        rule = firstRule; ///

  return rule;
}

function tokensFromTokensAndNode(tokens, node) {
  const lastSignificantTokenIndex = node.getLastSignificantTokenIndex(tokens),
        firstSignificantTokenIndex = node.getFirstSignificantTokenIndex(tokens),
        start = firstSignificantTokenIndex, ///
        end = lastSignificantTokenIndex + 1;

  tokens = tokens.slice(start, end);  ///

  return tokens;
}
