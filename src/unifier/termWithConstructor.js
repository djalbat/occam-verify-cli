"use strict";

import shim from "../shim";
import Unifier from "../unifier";

import { nodeQuery } from "../utilities/query";

const termNodeQuery = nodeQuery("/term"),
      typeNodeQuery = nodeQuery("/type");

class TermWithConstructorUnifier extends Unifier {
  unify(termNode, constructorTermNode, localContext) {
    let termUnifiedWithConstructor;

    const nonTerminalNodeA = termNode, ///
          nonTerminalNodeB = constructorTermNode, ///
          nonTerminalNodeUnified = this.unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext);

    termUnifiedWithConstructor = nonTerminalNodeUnified; ///

    return termUnifiedWithConstructor;
  };

  static maps = [
    {
      nodeQueryA: termNodeQuery,
      nodeQueryB: typeNodeQuery,
      unify: (termNodeA, typeNodeB, localContext) => {
        let unified = false;

        const { Term, Type } = shim,
              typeNode = typeNodeB, ///
              type = Type.fromTypeNode(typeNode, localContext),
              typeVerified = type.verify(localContext);

        if (typeVerified) {
          const termNode = termNodeA, ///
                term = Term.fromTermNode(termNode, localContext),
                termVerifiedGivenType = term.verifyGivenType(type, localContext);

          if (termVerifiedGivenType) {
            unified = true;
          }
        }

        return unified;
      }
    }
  ];
}

const termWithConstructorUnifier = new TermWithConstructorUnifier();

export default termWithConstructorUnifier;
