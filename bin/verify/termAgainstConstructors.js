'use strict';

const queries = require('../queries');

const { nameTerminalNodeQuery } = queries;

function verifyAgainstConstructors(termNode, constructors, context, rules) {
	const verified = constructors.some((constructor) => verifyAgainstConstructor(termNode, constructor, context, rules));

	return verified;
}

module.exports = verifyAgainstConstructors;

function verifyAgainstConstructor(termNode, constructor, context, rules) {
	const constructorTermNode = constructor.getTermNode(),
				nonTerminalNode = termNode, ///
				constructorNode = constructorTermNode,  ///
				verified = verifyNonTerminalNode(nonTerminalNode, constructorNode, context, rules);

	return verified;
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
							variableName = nameTerminalNodeContent, ///
							typeName = constructorNameTerminalNodeContent,  ///
							type = context.findTypeByTypeName(typeName),
							variablePresent = context.isVariablePresentByVariableNameAndType(variableName, type);

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
