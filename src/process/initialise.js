"use strict";

import { SimplePass, queryUtilities } from "occam-languages"

import { ruleFromRuleNode,
         axiomFromAxiomNode,
         theoremFromTheoremNode,
         conjectureFromConjectureNode } from "../utilities/element";

const { nodeQuery } = queryUtilities;

const ruleNodeQuery = nodeQuery("/rule"),
      axiomNodeQuery = nodeQuery("/axiom"),
      theoremNodeQuery = nodeQuery("/theorem"),
      conjectureNodeQuery = nodeQuery("/conjecture");

class TopLevelPass extends SimplePass {
  static maps = [
    {
      nodeQuery: ruleNodeQuery,
      run: (ruleNode, context) => {
        const success = true,
              rule = ruleFromRuleNode(ruleNode, context);

        context.addRule(rule);

        return success;
      }
    },
    {
      nodeQuery: axiomNodeQuery,
      run: (axiomNode, context) => {
        const success = true,
              axiom = axiomFromAxiomNode(axiomNode, context);

        context.addAxiom(axiom);

        return success;
      }
    },
    {
      nodeQuery: theoremNodeQuery,
      run: (theoremNode, context) => {
        const success = true,
              theorem = theoremFromTheoremNode(theoremNode, context);

        context.addTheorem(theorem);

        return success;
      }
    },
    {
      nodeQuery: conjectureNodeQuery,
      run: (conjectureNode, context) => {
        const success = true,
              conjecture = conjectureFromConjectureNode(conjectureNode, context);

        context.addConjecture(conjecture);

        return success;
      }
    }
  ];
}

const topLevelPass = new TopLevelPass();

export function initialiseFile(fileNode, context) {
  const node = fileNode; ///

  topLevelPass.run(node, context);
}
