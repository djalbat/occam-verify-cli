"use strict";

import Unifier from "../unifier";
import structure from "../structure";

import { nodeQuery } from "../utilities/query";

const termNodeQuery = nodeQuery("/term"),
      typeNodeQuery = nodeQuery("/type");

class TermWithConstructorUnifier extends Unifier {
  unify(constructorTermNode, termNode, generalContext, specificContext) {
    let termUnifiesWithConstructor;

    const generalNonTerminalNode = constructorTermNode, ///
          specificNonTerminalNode = termNode, ///
          nonTerminalNodeUnifies = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, generalContext, specificContext);

    termUnifiesWithConstructor = nonTerminalNodeUnifies; ///

    return termUnifiesWithConstructor;
  };

  static maps = [
    {
      generalNodeQuery: typeNodeQuery,
      specificNodeQuery: termNodeQuery,
      unify: (generalTypeNode, specificTermNode, generalContext, specificContext) => {
        let unifies = false;

        const typeNode = generalTypeNode, ///
              termNode = specificTermNode, ///
              nominalTypeName = typeNode.getNominalTypeName();

        let context;

        context = generalContext; ///

        const type = context.findTypeByNominalTypeName(nominalTypeName);

        if (type !== null) {
          context = specificContext;  ///

          const { Term } = structure,
                term = Term.fromTermNode(termNode, context),
                termVerifiesGivenType = term.verifyGivenType(type, generalContext, specificContext);

          if (termVerifiesGivenType) {
            unifies = true;
          }

          return unifies;
        }
      }
    }
  ];
}

const termWithConstructorUnifier = new TermWithConstructorUnifier();

export default termWithConstructorUnifier;
