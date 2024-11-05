"use strict";

import dom from "../dom";
import Unifier from "../unifier";

import { nodeQuery } from "../utilities/query";

const termNodeQuery = nodeQuery("/term"),
      termVariableNodeQuery = nodeQuery("/term/variable!");

class IntrinsicLevelUnifier extends Unifier {
  unify(generalNode, specificNode, substitutions, generalContext, specificContext) {
    let unifiedAtMetaLevel;

    const generalNonTerminalNode = generalNode, ///
          specificNonTerminalNode = specificNode, ///
          nonTerminalNodeUnified = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, substitutions, generalContext, specificContext);

    unifiedAtMetaLevel = nonTerminalNodeUnified; ///

    return unifiedAtMetaLevel;
  }

  static maps = [
    {
      generalNodeQuery: termVariableNodeQuery,
      specificNodeQuery: termNodeQuery,
      unify: (generalTermVariableNode, specificTermNode, substitutions, generalContext, specificContext) => {
        let termUnified;

        const { Term, Variable } = dom,
              termNode = specificTermNode, ///
              variableNode = generalTermVariableNode; ///

        let context;

        context = generalContext; ///

        const variable = Variable.fromVariableNode(variableNode, context);

        context = specificContext;  ///

        const term = Term.fromTermNode(termNode, context);

        termUnified = variable.unifyTerm(term, substitutions, generalContext, specificContext);

        return termUnified;
      }
    }
  ];
}

const intrinsicLevelUnifier = new IntrinsicLevelUnifier();

export default intrinsicLevelUnifier;
