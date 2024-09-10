"use strict";

import Unifier from "../unifier";
import unifyTermAgainstType from "../unify/termAgainstType";

import { nodeQuery } from "../utilities/query";

const termNodeQuery = nodeQuery("/term"),
      typeNodeQuery = nodeQuery("/type");

class TermAgainstConstructorUnifier extends Unifier {
  unify(termNode, constructorTermNode, localContext) {
    let termUnifiedAgainstConstructor;

    const nonTerminalNodeA = termNode, ///
          nonTerminalNodeB = constructorTermNode, ///
          nonTerminalNodeUnified = this.unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext);

    termUnifiedAgainstConstructor = nonTerminalNodeUnified; ///

    return termUnifiedAgainstConstructor;
  };

  static maps = [
    {
      nodeQueryA: termNodeQuery,
      nodeQueryB: typeNodeQuery,
      unify: (termNodeA, typeNodeB, localContext) => {
        const termNode = termNodeA, ///
              typeNode = typeNodeB, ///
              termUnifiedAgainstType = unifyTermAgainstType(termNode, typeNode, localContext);

        return termUnifiedAgainstType;
      }
    }
  ];
}

const termAgainstConstructorUnifier = new TermAgainstConstructorUnifier();

export default termAgainstConstructorUnifier;
