"use strict";

import { NominalParser as NominalParserBase } from "occam-grammars";
import { NonTerminalNode as defaultNonTerminalNode } from "occam-parsers";

import NonTerminalNodeMap from "../nonTerminalNodeMap";

export default class NominalParser extends NominalParserBase {
  static NonTerminalNodeMap = NonTerminalNodeMap;

  static defaultNonTerminalNode = defaultNonTerminalNode;
}
