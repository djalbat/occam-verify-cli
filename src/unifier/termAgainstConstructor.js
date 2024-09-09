"use strict";

import Unifier from "../unifier";
import unifyTermAgainstType from "../unify/termAgainstType";

import { nodeQuery } from "../utilities/query";

const termNodeQuery = nodeQuery("/term"),
      typeNodeQuery = nodeQuery("/type");

class TermAgainstConstructorUnifier extends Unifier {
  unify(termNode, constructorTermNode, localContext, unifyAhead) {
    let termUnifiedAgainstConstructor;

    const nonTerminalNodeA = termNode, ///
          nonTerminalNodeB = constructorTermNode, ///
          nonTerminalNodeUnified = this.unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext, unifyAhead);

    termUnifiedAgainstConstructor = nonTerminalNodeUnified; ///

    return termUnifiedAgainstConstructor;
  };

  static maps = [
    {
      nodeQueryA: termNodeQuery,
      nodeQueryB: typeNodeQuery,
      unify: (termNodeA, typeNodeB, localContext, unifyAhead) => {
        const termNode = termNodeA, ///
              typeNode = typeNodeB, ///
              termUnifiedAgainstType = unifyTermAgainstType(termNode, typeNode, localContext, unifyAhead);

        return termUnifiedAgainstType;
      }
    }
  ];
}

const termAgainstConstructorUnifier = new TermAgainstConstructorUnifier();

export default termAgainstConstructorUnifier;
