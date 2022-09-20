"use strict";

const log = require("../log"),
      TermNode = require("../node/term");

const { verifyTerm } = require("../verify/termExpression"),
      { nodeAsString } = require("../utilities/node"),
      { TERM_RULE_NAME } = require("../ruleNames");

function verifyTermAsConstructor(termNode, fileContext) {
  const nonTerminalNode = termNode,  ///
        childNodes = nonTerminalNode.getChildNodes(),
        parentNode = nonTerminalNode,  ///
        verified = verifyChildNodes(childNodes, parentNode, fileContext),
        termVerified = verified;  ///

  return termVerified;
}

module.exports = {
  verifyTermAsConstructor
};

function verifyNode(node, parentNode, fileContext) {
  let verified = false;

  const nodeTerminalNode = node.isTerminalNode();

  if (nodeTerminalNode) {
    const terminalNode = node;  ///

    verified = verifyTerminalNode(terminalNode, parentNode, fileContext);
  } else {
    const nonTerminalNode = node; ///

    verified = verifyNonTerminalNode(nonTerminalNode, parentNode, fileContext);
  }

  return verified;
}

function verifyTerminalNode(terminalNode, parentNode, fileContext) {
  const verified = true;

  ///

  return verified;
}

function verifyNonTerminalNode(nonTerminalNode, parentNode, fileContext) {
  let verified = false;

  const ruleName = nonTerminalNode.getRuleName();

  switch (ruleName) {
    case TERM_RULE_NAME: {
      const termNode = nonTerminalNode; ///

      verified = verifyTermNode(termNode, fileContext);

      break;
    }

    default: {
      if (!verified) {
        const parentNodeTermNode = (parentNode instanceof TermNode);

        if (!parentNodeTermNode) {
          const termNode = TermNode.fromNonTerminalNode(nonTerminalNode);

          verified = verifyTermNode(termNode, fileContext);
        }
      }

      if (!verified) {
        const childNodes = nonTerminalNode.getChildNodes(),
              parentNode = nonTerminalNode; ///

        verified = verifyChildNodes(childNodes, parentNode, fileContext);
      }

      break;
    }
  }

  return verified;
}

function verifyChildNodes(childNodes, parentNode, fileContext) {
  let verified = false;

  let index = 0,
      childNode = childNodes[index];

  while (childNode !== undefined) {
    const node = childNode;  ///

    verified = verifyNode(node, parentNode, fileContext);

    if (!verified) {
      break;
    }

    index++;
    childNode = childNodes[index];
  }

  return verified;
}

function verifyTermNode(termNode, fileContext) {
  let verified = false;

  const type = typeFromTermNode(termNode, fileContext);

  if (type !== undefined) {
    verified = true;
  } else {
    const constructor = verifyTerm(termNode, fileContext);

    if (constructor !== undefined) {
      const constructorType = constructor.getType();

      if (constructorType !== undefined) {
        const termString = nodeAsString(termNode);

        log.error(`The '${termString}' sub-term cannot be verified because its type is not undefined.`);
      }

      verified = true;
    }
  }

  return verified;
}
