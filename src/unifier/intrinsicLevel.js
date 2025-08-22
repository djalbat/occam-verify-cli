"use strict";

import dom from "../dom";
import Unifier from "../unifier";

import { nodeQuery } from "../utilities/query";

const termNodeQuery = nodeQuery("/term"),
      termVariableNodeQuery = nodeQuery("/term/variable!");

class IntrinsicLevelUnifier extends Unifier {
  unify(generalNonTerminalNode, specificNonTerminalNode, substitutions, generalContext, specificContext) {
    let unifiesAtIntrinsicLevel;

    const nonTerminalNodeUnifies = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, substitutions, generalContext, specificContext);

    unifiesAtIntrinsicLevel = nonTerminalNodeUnifies; ///

    return unifiesAtIntrinsicLevel;
  }

  static maps = [
    {
      generalNodeQuery: termVariableNodeQuery,
      specificNodeQuery: termNodeQuery,
      unify: (generalTermVariableNode, specificTermNode, substitutions, generalContext, specificContext) => {
        let termUnifies;

        const { Term, Variable } = dom,
              termNode = specificTermNode, ///
              variableNode = generalTermVariableNode; ///

        let context;

        context = generalContext; ///

        const variable = Variable.fromVariableNode(variableNode, context);

        context = specificContext;  ///

        const term = Term.fromTermNode(termNode, context);

        termUnifies = variable.unifyTerm(term, substitutions, generalContext, specificContext);

        return termUnifies;
      }
    }
  ];
}

const intrinsicLevelUnifier = new IntrinsicLevelUnifier();

export default intrinsicLevelUnifier;
