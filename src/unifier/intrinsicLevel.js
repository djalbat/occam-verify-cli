"use strict";

import Unifier from "../unifier";

import { nodeQuery } from "../utilities/query";
import { termVariableIdentifierFromTermNode, variableIdentifierFromVariableNode } from "../unifier/metaLevel";

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
        let termUnifies = false;

        const termNode = specificTermNode, ///
              variableNode = generalTermVariableNode, ///
              variableIdentifier = variableIdentifierFromVariableNode(variableNode);

        let context;

        context = generalContext; ///

        const variable = context.findVariableByVariableIdentifier(variableIdentifier);

        context = specificContext;  ///

        const term = context.findTermByTermNode(termNode);

        if (term !== null) {
          termUnifies = variable.unifyTerm(term, substitutions, generalContext, specificContext);
        } else {
          const termVariaibleIdentifer = termVariableIdentifierFromTermNode(termNode),
                termVariable = context.findVariableByVariableIdentifier(termVariaibleIdentifer),
                termVariableUnifies = variable.unifyTermVariable(termVariable, substitutions, generalContext, specificContext);

          if (termVariableUnifies) {
            termUnifies = true;
          }
        }

        return termUnifies;
      }
    }
  ];
}

const intrinsicLevelUnifier = new IntrinsicLevelUnifier();

export default intrinsicLevelUnifier;
