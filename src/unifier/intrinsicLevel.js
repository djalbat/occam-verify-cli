"use strict";

import shim from "../shim";
import Unifier from "../unifier";

import { nodeQuery } from "../utilities/query";
import { variableNameFromVariableNode } from "../utilities/name";

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
      unify: (generalVermVariableNode, specificTermNode, substitutions, generalContext, specificContext) => {
        let termUnified = false;

        const variableNode = generalVermVariableNode, ///
              variableName = variableNameFromVariableNode(variableNode),
              variablePresent = generalContext.isVariablePresentByVariableName(variableName);

        if (variablePresent) {
          let context;

          const { Term, Variable } = shim,
                termNode = specificTermNode; ///

          context = generalContext; ///

          const variable = Variable.fromVariableNode(variableNode, context);

          context = specificContext;  ///

          const term = Term.fromTermNode(termNode, context);

          termUnified = variable.unifyTerm(term, substitutions, generalContext, specificContext);
        }

        return termUnified;
      }
    }
  ];
}

const intrinsicLevelUnifier = new IntrinsicLevelUnifier();

export default intrinsicLevelUnifier;
