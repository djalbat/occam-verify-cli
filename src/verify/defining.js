"use strict";

import verifyTerm from "./term";

import { DEFINED } from "../constants";
import { nodeQuery } from "../utilities/query";
import { first, second } from "../utilities/array";

const variableNodeQuery = nodeQuery("/term/variable!");

export default function verifyDefining(termNode, definingNode, localContext) {
  let definingVerified = false;

  const defined = definedFromDefiningNode(definingNode),
        variableNode = variableNodeQuery(termNode);

  if (false) {
    ///
  } else if (variableNode !== null) {
    const variable = localContext.findVariableByVariableNode(variableNode);

    if (variable !== null) {
      const variableDefined = localContext.isVariableDefined(variable);

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
          termVerified = verifyTerm(termNode, terms, localContext, () => {
            let verifiedAhead;

            const firstTerm = first(terms),
                  term = firstTerm, ///
                  termGrounded = localContext.isTermGrounded(term);

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
