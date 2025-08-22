"use strict";

import dom from "../dom";
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

        const { Term } = dom,
              typeNode = generalTypeNode, ///
              termNode = specificTermNode, ///
              typeName = typeNode.getTypeName(),
              type = generalContext.findTypeByTypeName(typeName),
              context = specificContext, ///
              term = Term.fromTermNode(termNode, context),
              termVerifiedGivenType = term.verifyGivenType(type, generalContext, specificContext);

        termUnifies = termVerifiedGivenType;  ///

        return termUnifies;
      }
    }
  ];
}

const metavariableUnifier = new MetavariableUnifier();

export default metavariableUnifier;
