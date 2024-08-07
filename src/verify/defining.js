"use strict";

import verifyTerm from "./term";

import { DEFINED } from "../constants";
import { nodeQuery } from "../utilities/query";
import { first, second } from "../utilities/array";

const termNodeQuery = nodeQuery("/argument/term!"),
      variableNodeQuery = nodeQuery("/argument/term/variable!");

export default function verifyDefining(argumentNode, definingNode, context) {
  let definingVerified = false;

  const defined = definedFromDefiningNode(definingNode),
        termNode = termNodeQuery(argumentNode),
        variableNode = variableNodeQuery(argumentNode);

  if (false) {
    ///
  } else if (variableNode !== null) {
    const variable = context.findVariableByVariableNode(variableNode);

    if (variable !== null) {
      const variableDefined = context.isVariableDefined(variable);

      if (defined) {
        if (variableDefined) {
          definingVerified = true;
        }
      }

      if (!defined) {
        if (!variableDefined) {
          definingVerified = true;
        }
      }
    }
  } else if (termNode !== null) {
    const terms = [],
          termVerified = verifyTerm(termNode, terms, context, () => {
            let verifiedAhead;

            const firstTerm = first(terms),
                  term = firstTerm, ///
                  termGrounded = context.isTermGrounded(term);

            if (defined) {
              if (termGrounded) {
                verifiedAhead = true;
              }
            }

            if (!defined) {
              if (!termGrounded) {
                verifiedAhead = true;
              }
            }

            return verifiedAhead;
          });

    definingVerified = termVerified;  ///

  }

  return definingVerified;
}

function definedFromDefiningNode(definingNode) {
  const childNodes = definingNode.getChildNodes(),
        secondChildNode = second(childNodes),
        terminalNode = secondChildNode,  ///
        content = terminalNode.getContent(),
        defined = (content === DEFINED);

  return defined;
}
