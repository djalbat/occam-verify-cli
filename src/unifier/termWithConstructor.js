"use strict";

import shim from "../shim";
import Unifier from "../unifier";

import { nodeQuery } from "../utilities/query";
import { typeNameFromTypeNode } from "../utilities/name";

const termNodeQuery = nodeQuery("/term"),
      typeNodeQuery = nodeQuery("/type");

class TermWithConstructorUnifier extends Unifier {
  unify(constructorTermNode, termNode, localContext) {
    let termUnifiedWithConstructor;

    const nonTerminalNodeA = constructorTermNode, ///
          nonTerminalNodeB = termNode, ///
          nonTerminalNodeUnified = this.unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext);

    termUnifiedWithConstructor = nonTerminalNodeUnified; ///

    return termUnifiedWithConstructor;
  };

  static maps = [
    {
      nodeQueryA: typeNodeQuery,
      nodeQueryB: termNodeQuery,
      unify: (typeNodeB, termNodeB, localContext) => {
        let unified = false;

        const { Term } = shim,
              typeNode = typeNodeB, ///
              typeName = typeNameFromTypeNode(typeNode),
              type = localContext.findTypeByTypeName(typeName);

        if (type !== null) {
          const termNode = termNodeB, ///
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
