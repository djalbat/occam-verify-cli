"use strict";

import ontology from "../ontology";
import Unifier from "../unifier";

import { nodeQuery } from "../utilities/query";

const typeNodeQuery = nodeQuery("/type"),
      termNodeQuery = nodeQuery("/term");

class MetavariableUnifier extends Unifier {
  unify(generalMetavariableNode, specificMetavariableNode, generalContext, specificContext) {
    let metavariableUnifies;

    const generalNonTerminalNode = generalMetavariableNode, ///
          specificNonTerminalNode = specificMetavariableNode, ///
          nonTerminalNodeUnifies = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, generalContext, specificContext);

    metavariableUnifies = nonTerminalNodeUnifies; ///

    return metavariableUnifies;
  }

  static maps = [
    {
      generalNodeQuery: typeNodeQuery,
      specificNodeQuery: termNodeQuery,
      unify: (generalTypeNode, specificTermNode, generalContext, specificContext) => {
        let termUnifies;

        const { Term } = ontology,
              typeNode = generalTypeNode, ///
              termNode = specificTermNode, ///
              nominalTypeName = typeNode.getNominalTypeName(),
              type = generalContext.findTypeByNominalTypeName(nominalTypeName),
              context = specificContext, ///
              term = Term.fromTermNode(termNode, context),
              termVerifiesGivenType = term.verifyGivenType(type, generalContext, specificContext);

        termUnifies = termVerifiesGivenType;  ///

        return termUnifies;
      }
    }
  ];
}

const metavariableUnifier = new MetavariableUnifier();

export default metavariableUnifier;
