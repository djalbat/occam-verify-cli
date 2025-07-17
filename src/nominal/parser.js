"use strict";

import { NominalParser as NominalParserBase } from "occam-grammars";

import Node from "../node";
import nodeMap from "../nodeMap";

import { setNonTerminalNodes } from "../utilities/parser";

export default class NominalParser extends NominalParserBase {
  static fromBNF(bnf) {
    const markdownParser = NominalParserBase.fromBNF(NominalParser, bnf),
          DefaultNonTerminalNode = Node;  ///

    setNonTerminalNodes(markdownParser, nodeMap, DefaultNonTerminalNode);

    return markdownParser;
  }

  static fromRules(rules) {
    const markdownParser = NominalParserBase.fromRules(NominalParser, rules),
          DefaultNonTerminalNode = Node;  ///

    setNonTerminalNodes(markdownParser, nodeMap, DefaultNonTerminalNode);

    return markdownParser;
  }

  static fromNothing() {
    const markdownParser = NominalParserBase.fromNothing(NominalParser),
          DefaultNonTerminalNode = Node;  ///

    setNonTerminalNodes(markdownParser, nodeMap, DefaultNonTerminalNode);

    return markdownParser;
  }
}
