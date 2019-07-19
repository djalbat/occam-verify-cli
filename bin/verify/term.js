'use strict';

const Error = require('../error'),
      queries = require('../queries'),
      nodeUtilities = require('../utilities/node');

const { nameNodeQuery } = queries,
      { nodeAsString } = nodeUtilities;

function verifyTerm(termNode, context, rules) {
  let type = undefined;

  const constructors = context.getConstructors(),
        verified = constructors.some((constructor) => {
          type = verifyTermAgainstConstructor(termNode, constructor, context, rules);

          if (type !== undefined) {
            return true;
          }
        });

  if (!verified) {
    const node = termNode,  ///
          termNodeString = nodeAsString(termNode),
          message = `The term '${termNodeString}' cannot be verified.`;

    throw new Error(node, message);
  }

  return type;
}

module.exports = verifyTerm;

function verifyTermAgainstConstructor(termNode, constructor, context, rules) {
  let type = undefined;

  const node = termNode,  ///
        constructorTermNode = constructor.getTermNode(),
        constructorNode = constructorTermNode,  ///
        nodeChildNodes = node.getChildNodes().slice(),  ///
        constructorNodeChildNodes = constructorNode.getChildNodes().slice(),  ///
        verified = verifyChildNodes(nodeChildNodes, constructorNodeChildNodes, context, rules);

  if (verified) {
    type = constructor.getType();
  }

  return type;
}

function verifyNode(node, constructorNode, context, rules) {
  let verified;

  const nodeTerminalNode = node.isTerminalNode();

  if (nodeTerminalNode) {
    const terminalNode = node;  ///

    verified = verifyTerminalNode(terminalNode, constructorNode, context, rules);
  } else {
    const nonTerminalNode = node;

    verified = verifyNonTerminalNode(nonTerminalNode, constructorNode, context, rules);
  }

  return verified;
}

function verifyChildNodes(nodeChildNodes, constructorNodeChildNodes, context, rules) {
  let verified = false;

  let nodeChildNode = nodeChildNodes.shift(),
      constructorNodeChildNode = constructorNodeChildNodes.shift();

  while (nodeChildNode !== undefined) {
    if (constructorNodeChildNode === undefined) {
      break;
    }

    const node = nodeChildNode, ///
          constructorNode = constructorNodeChildNode; ///

    verified = verifyNode(node, constructorNode, context, rules);

    if (!verified) {
      break;
    }

    nodeChildNode = nodeChildNodes.shift();
    constructorNodeChildNode = constructorNodeChildNodes.shift();
  }

  if (verified) {
    if (constructorNodeChildNode !== undefined) {
      verified = false;
    }
  }

  return verified;
}

function verifyTerminalNode(terminalNode, constructorNode, context, rules) {
  let verified = false;

  const constructorNodeTerminalNode = constructorNode.isTerminalNode();

  if (constructorNodeTerminalNode) {
    const terminalNodeType = terminalNode.getType(),
          constructorTerminalNode = constructorNode,  ///
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

function verifyNonTerminalNode(nonTerminalNode, constructorNode, context, rules) {
  let verified = false;

  const constructorNodeNonTerminalNode = constructorNode.isNonTerminalNode();

  if (constructorNodeNonTerminalNode) {
    const nonTerminalNodeRuleName = nonTerminalNode.getRuleName(),
          constructorNonTerminalNode = constructorNode, ///
          constructorNonTerminalNodeRuleName = constructorNonTerminalNode.getRuleName();

    if (nonTerminalNodeRuleName === constructorNonTerminalNodeRuleName) {
      const name = nonTerminalNodeRuleName; ///

      if (name === 'term') {
        const termNode = nonTerminalNode,
              constructorTermNode = constructorNode,  ///
              type = verifyTerm(termNode, context, rules),
              constructorType = constructorTypeFromConstructorTermNode(constructorTermNode, context),
              typeMatchesConstructorType = type.matchType(constructorType);

        verified = typeMatchesConstructorType;  ///
      } else  {
        const node = nonTerminalNode, ///
              nodeChildNodes = node.getChildNodes().slice(),  ///
              constructorNodeChildNodes = constructorNode.getChildNodes().slice();  ///

        verified = verifyChildNodes(nodeChildNodes, constructorNodeChildNodes, context, rules);
      }
    }
  }

  return verified;
}

function constructorTypeFromConstructorTermNode(constructorTermNode, context) {
  const nameNode = nameNodeQuery(constructorTermNode),
        nameNodeContent = nameNode.getContent(),
        name = nameNodeContent, ///
        type = context.findTypeByName(name),
        constructorType = type; ///

  return constructorType;
}
