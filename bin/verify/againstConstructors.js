'use strict';

const Error = require('../error'),
      queries = require('../queries'),
      nodeUtilities = require('../utilities/node');

const { nodeAsString } = nodeUtilities,
			{ nameTerminalNodeQuery, termNonTerminalNodeQuery } = queries;

function againstConstructors(node, context, rules) {
  let type = undefined;

  const ruleName = node.getRuleName(),
		    constructors = context.findConstructorsByRuleName(ruleName),
        verified = constructors.some((constructor) => {
          type = verifyAgainstConstructor(node, constructor, context, rules);

          if (type !== undefined) {
            return true;
          }
        });

  if (!verified) {
    const nodeString = nodeAsString(node),
          message = `The term '${nodeString}' cannot be verified.`;

    throw new Error(node, message);
  }

  return type;
}

module.exports = againstConstructors;

function verifyAgainstConstructor(node, constructor, context, rules) {
  let type = undefined;

  const constructorTermNode = constructor.getTermNode(),
		    constructorTermNonTerminalNode = termNonTerminalNodeQuery(constructorTermNode);

  if (constructorTermNonTerminalNode !== undefined) {
	  const constructorNode = constructorTermNonTerminalNode,  ///
				  nodeChildNodes = node.getChildNodes().slice(),  ///
				  constructorNodeChildNodes = constructorNode.getChildNodes().slice(),  ///
				  verified = verifyChildNodes(nodeChildNodes, constructorNodeChildNodes, context, rules);

	  if (verified) {
		  type = constructor.getType();
	  }
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
      const node = nonTerminalNode, ///
		        name = nonTerminalNodeRuleName; ///

      if (name === 'name') {
      	const nameTerminalNode = nameTerminalNodeQuery(node),
			        nameTerminalNodeContent = nameTerminalNode.getContent(),
			        constructorNameTerminalNode = nameTerminalNodeQuery(constructorNode),
			        constructorNameTerminalNodeContent = constructorNameTerminalNode.getContent(),
			        typeName = constructorNameTerminalNodeContent,  ///
				      variableName = nameTerminalNodeContent, ///
			        variablePresent = context.isVariablePresentByVariableNameAndTypeName(variableName, typeName);

      	verified = variablePresent; ///
      } else  {
        const nodeChildNodes = node.getChildNodes().slice(),  ///
              constructorNodeChildNodes = constructorNode.getChildNodes().slice();  ///

        verified = verifyChildNodes(nodeChildNodes, constructorNodeChildNodes, context, rules);
      }
    }
  }

  return verified;
}
