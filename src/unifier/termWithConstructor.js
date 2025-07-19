"use strict";

import dom from "../dom";
import Unifier from "../unifier";

import { nodeQuery } from "../utilities/query";

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
      generalNodeQuery: typeNodeQuery,
      specificNodeQuery: termNodeQuery,
      unify: (generalTypeNode, specificTermNode, context) => {
        let unified = false;

        const { Term } = dom,
              typeNode = generalTypeNode, ///
              typeName = typeNode.getTypeName(),
              type = context.findTypeByTypeName(typeName);

        if (type !== null) {
          const termNode = specificTermNode, ///
                term = Term.fromTermNode(termNode, context),
                generalContext = context, ///
                specificContext = context,  ///
                termVerifiedGivenType = term.verifyGivenType(type, generalContext, specificContext);

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
