'use strict';

function verifyTermAgainstConstructor(termNode, constructor, context, rules) {
  let type = undefined;

  const constructorTermNode = constructor.getTermNode(),
        verified = verifyTermNode(termNode, constructorTermNode, context);

  if (verified) {
    type = constructor.getType();
  }

  return type;
}

module.exports = verifyTermAgainstConstructor;

function verifyTermNode(termNode, constructorTermNode, context) {
  let verified = false;

  const termNodeChildNodes = termNode.getChildNodes().slice(),  ///
        constructorTermNodeChildNodes = constructorTermNode.getChildNodes().slice();  ///

  let termNodeChildNode = termNodeChildNodes.shift(),
      constructorTermNodeChildNode = constructorTermNodeChildNodes.shift();

  while (termNodeChildNode !== undefined) {
    if (constructorTermNodeChildNode === undefined) {
      break;
    }

    const node = termNodeChildNode, ///
          constructorNode = constructorTermNodeChildNode; ///

    verified = verifyNode(node, constructorNode, context);

    if (!verified) {
      break;
    }

    termNodeChildNode = termNodeChildNodes.shift();
    constructorTermNodeChildNode = constructorTermNodeChildNodes.shift();
  }

  if (verified) {
    if (constructorTermNodeChildNode !== undefined) {
      verified = false;
    }
  }

  return verified;
}

function verifyNode(node, constructorNode, context) {
  let verified;

  const nodeTerminalNode = node.isTerminalNode();

  if (nodeTerminalNode) {
    const terminalNode = node;  ///

    verified = verifyTerminalNode(terminalNode, constructorNode, context);
  } else {
    const nonTerminalNode = node;

    verified = verifyNonTerminalNode(nonTerminalNode, constructorNode, context);
  }

  return verified;
}

function verifyTerminalNode(terminalNode, constructorNode, context) {
  let verified = false;

  const constructorNodeTerminalNode = constructorNode.isTerminalNode();

  if (constructorNodeTerminalNode) {
    const constructorTerminalNode = constructorNode,  ///
          terminalNodeType = terminalNode.getType(),
          constructorTerminalNodeType = constructorTerminalNode.getType();

    if (terminalNodeType === constructorTerminalNodeType) {
      const terminalNodeContent = terminalNode.getContent(),
            constructorTerminalNodeContent = constructorTerminalNode.getContent();

      if (terminalNodeContent === constructorTerminalNodeContent) {
        verified = true;
      }
    }
  }

  return verified;
}

function verifyNonTerminalNode(nonTerminalNode, constructorNode, context) {
  let verified = false;

  debugger

  return verified;
}
