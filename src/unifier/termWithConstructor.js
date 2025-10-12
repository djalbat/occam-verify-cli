"use strict";

import dom from "../dom";
import Unifier from "../unifier";

import { nodeQuery } from "../utilities/query";

const termNodeQuery = nodeQuery("/term"),
      typeNodeQuery = nodeQuery("/type");

class TermWithConstructorUnifier extends Unifier {
  unify(constructorTermNode, termNode, context) {
    let termUnifiesWithConstructor;

    const generalNonTerminalNode = constructorTermNode, ///
          specificNonTerminalNode = termNode, ///
          nonTerminalNodeUnifies = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, context);

    termUnifiesWithConstructor = nonTerminalNodeUnifies; ///

    return termUnifiesWithConstructor;
  };

  static maps = [
    {
      generalNodeQuery: typeNodeQuery,
      specificNodeQuery: termNodeQuery,
      unify: (generalTypeNode, specificTermNode, context) => {
        let unifies = false;

        const { Term } = dom,
              typeNode = generalTypeNode, ///
              nominalTypeName = typeNode.getNominalTypeName(),
              type = context.findTypeByNominalTypeName(nominalTypeName);

        if (type !== null) {
          const termNode = specificTermNode, ///
                term = Term.fromTermNode(termNode, context),
                generalContext = context, ///
                specificContext = context,  ///
                termVerifiesGivenType = term.verifyGivenType(type, generalContext, specificContext);

          if (termVerifiesGivenType) {
            unifies = true;
          }
        }

        return unifies;
      }
    }
  ];
}

const termWithConstructorUnifier = new TermWithConstructorUnifier();

export default termWithConstructorUnifier;
