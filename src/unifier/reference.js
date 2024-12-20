"use strict";

import dom from "../dom";
import Unifier from "../unifier";

import { nodeQuery } from "../utilities/query";

const termNodeQuery = nodeQuery("/term"),
      termVariableNodeQuery = nodeQuery("/term/variable!");

class ReferenceUnifier extends Unifier {
  unify(labelMetavariableNode, referenceMetavariableNode, substitutions, generalContext, specificContext) {
    let referenceUnified;

    const generalNonTerminalNode = labelMetavariableNode, ///
          specificNonTerminalNode = referenceMetavariableNode, ///
          nonTerminalNodeUnified = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, substitutions, generalContext, specificContext);

    referenceUnified = nonTerminalNodeUnified; ///

    return referenceUnified;
  }

  static maps = [
    {
      generalNodeQuery: termNodeQuery,
      specificNodeQuery: termVariableNodeQuery,
      unify: (generalTermNode, specificTermVariableNode, substitutions, generalContext, specificContext) => {
        let termUnified;

        const { Term, Variable } = dom,
              termNode = generalTermNode, ///
              variableNode = specificTermVariableNode; ///

        let context;

        context = specificContext;  ///

        const variable = Variable.fromVariableNode(variableNode, context);

        context = generalContext; ///

        const term = Term.fromTermNode(termNode, context),
              contextsReversed = true;

        termUnified = variable.unifyTerm(term, substitutions, generalContext, specificContext, contextsReversed);

        return termUnified;
      }
    }
  ];
}

const referenceUnified = new ReferenceUnifier();

export default referenceUnified;
