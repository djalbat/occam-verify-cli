"use strict";

import shim from "../shim";
import Unifier from "../unifier";

import { nodeQuery } from "../utilities/query";

const termNodeQuery = nodeQuery("/term"),
      termVariableNodeQuery = nodeQuery("/term/variable!");

class LabelUnifier extends Unifier {
  unify(labelMetavariableNode, referenceMetavariableNode, substitutions, generalContext, specificContext) {
    let labelUnified;

    const generalNonTerminalNode = labelMetavariableNode, ///
          specificNonTerminalNode = referenceMetavariableNode, ///
          nonTerminalNodeUnified = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, substitutions, generalContext, specificContext);

    labelUnified = nonTerminalNodeUnified; ///

    return labelUnified;
  }

  static maps = [
    {
      generalNodeQuery: termNodeQuery,
      specificNodeQuery: termVariableNodeQuery,
      unify: (generalTermNode, specificTermVariableNode, substitutions, generalContext, specificContext) => {
        let termUnified;

        const { Term, Variable } = shim,
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

const labelUnifier = new LabelUnifier();

export default labelUnifier;
