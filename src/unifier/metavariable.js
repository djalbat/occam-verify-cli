"use strict";

import dom from "../dom";
import Unifier from "../unifier";

import { nodeQuery } from "../utilities/query";
import { typeNameFromTypeNode } from "../utilities/name";

const typeNodeQuery = nodeQuery("/type"),
      termNodeQuery = nodeQuery("/term");

class MetavariableUnifier extends Unifier {
  unify(generalMetavariableNode, specificMetavariableNode, generalContext, specificContext) {
    let metavariableUnified;

    const generalNonTerminalNode = generalMetavariableNode, ///
          specificNonTerminalNode = specificMetavariableNode, ///
          nonTerminalNodeUnified = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, generalContext, specificContext);

    metavariableUnified = nonTerminalNodeUnified; ///

    return metavariableUnified;
  }

  static maps = [
    {
      generalNodeQuery: typeNodeQuery,
      specificNodeQuery: termNodeQuery,
      unify: (generalTypeNode, specificTermNode, generalContext, specificContext) => {
        let termUnified;

        const { Term } = dom,
              typeNode = generalTypeNode, ///
              termNode = specificTermNode, ///
              typeName = typeNameFromTypeNode(typeNode),
              type = generalContext.findTypeByTypeName(typeName),
              context = specificContext, ///
              term = Term.fromTermNode(termNode, context),
              termVerifiedGivenType = term.verifyGivenType(type, generalContext, specificContext);

        termUnified = termVerifiedGivenType;  ///

        return termUnified;
      }
    }
  ];
}

const metavariableUnifier = new MetavariableUnifier();

export default metavariableUnifier;
