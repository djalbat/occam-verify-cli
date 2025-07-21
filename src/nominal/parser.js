"use strict";

import { NominalParser as NominalParserBase } from "occam-grammars";

import NonTerminalNodeMap from "../nonTerminalNodeMap";
import defaultNonTerminalNode from "../defaultTerminalNode";

export default class NominalParser extends NominalParserBase {
  static NonTerminalNodeMap = NonTerminalNodeMap;

  static defaultNonTerminalNode = defaultNonTerminalNode;
}
