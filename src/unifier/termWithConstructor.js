"use strict";

import shim from "../shim";
import Unifier from "../unifier";

import { nodeQuery } from "../utilities/query";
import { typeNameFromTypeNode } from "../utilities/name";

const termNodeQuery = nodeQuery("/term"),
      typeNodeQuery = nodeQuery("/type");

class TermWithConstructorUnifier extends Unifier {
  unify(constructorTermNode, termNode, context) {
    let termUnifiedWithConstructor;

    const generalNonTerminalNode = constructorTermNode, ///
          specificNonTerminalNode = termNode, ///
          nonTerminalNodeUnified = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, context);

    termUnifiedWithConstructor = nonTerminalNodeUnified; ///

    return termUnifiedWithConstructor;
  };

  static maps = [
    {
      nodeQueryA: typeNodeQuery,
      nodeQueryB: termNodeQuery,
      unify: (typeNodeB, termNodeB, context) => {
        let unified = false;

        const { Term } = shim,
              typeNode = typeNodeB, ///
              typeName = typeNameFromTypeNode(typeNode),
              type = context.findTypeByTypeName(typeName);

        if (type !== null) {
          const termNode = termNodeB, ///
                term = Term.fromTermNode(termNode, context),
                termVerifiedGivenType = term.verifyGivenType(type, context);

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
