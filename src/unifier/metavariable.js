"use strict";

import shim from "../shim";
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
        let termUnified = false;

        const { Term } = shim,
              typeNode = generalTypeNode, ///
              typeName = typeNameFromTypeNode(typeNode);

        const type = generalContext.findTypeByTypeName(typeName);

        if (type !== null) {
          let context;

          const termNode = specificTermNode; ///

          context = generalContext; ///

          const term = Term.fromTermNode(termNode, context);

          context = specificContext; ///

          const termVerifiedGivenType = term.verifyGivenType(type, context);

          if (termVerifiedGivenType) {
            termUnified = true;
          }
        }

        return termUnified;
      }
    }
  ];
}

const metavariableUnifier = new MetavariableUnifier();

export default metavariableUnifier;
