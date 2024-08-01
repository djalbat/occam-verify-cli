"use strict";

import { second } from "../utilities/array";
import { DEFINED } from "../constants";
import { nodeQuery } from "../utilities/query";

const definedVariableNodeQuery = nodeQuery("/argument/term/variable!");

export default function verifyDefining(argumentNode, definingNode, context) {
  let definingVerified = false;

  const definedVariableNode = definedVariableNodeQuery(argumentNode);

  if (definedVariableNode !== null) {
    const defined = definedFromDefiningNode(definingNode),
          variableNode = definedVariableNode, ///
          variableDefined = isVariableDefined(variableNode, context);

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

  return definingVerified;
}

function isVariableDefined(variableNode, context) {
  let variableDefined = false;

  return variableDefined;
}

function definedFromDefiningNode(definingNode) {
  const childNodes = definingNode.getChildNodes(),
        secondChildNode = second(childNodes),
        terminalNode = secondChildNode,  ///
        content = terminalNode.getContent(),
        defined = (content === DEFINED);

  return defined;
}
