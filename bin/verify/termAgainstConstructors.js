'use strict';

const queries = require('../miscellaneous/queries'),
			ruleNames = require('../miscellaneous/ruleNames'),
			nodeUtilities = require('../utilities/node');

const { getChildNodes } = nodeUtilities,
			{ TERM_RULE_NAME } = ruleNames,
			{ termNameTerminalNodeQuery } = queries;

function verifyTermAgainstConstructors(termNode, context, rules) {
	const constructors = context.getConstructors(),
				verified = constructors.some((constructor) => verifyAgainstConstructor(constructor, termNode, context, rules));

	return verified;
}

module.exports = verifyTermAgainstConstructors;

function verifyAgainstConstructor(constructor, termNode, context, rules) {
	const constructorTermNode = constructor.getTermNode(),
				nonTerminalNode = termNode, ///
				constructorNode = constructorTermNode,  ///
				verified = verifyNonTerminalNode(nonTerminalNode, constructorNode, termNode, context, rules);

	return verified;
}

function verifyNode(node, constructorNode, termNode, context, rules) {
	let verified;

	const nodeTerminalNode = node.isTerminalNode();

	if (nodeTerminalNode) {
		const terminalNode = node;  ///

		verified = verifyTerminalNode(terminalNode, constructorNode, termNode, context, rules);
	} else {
		const nonTerminalNode = node; ///

		verified = verifyNonTerminalNode(nonTerminalNode, constructorNode, termNode, context, rules);
	}

	return verified;
}

function verifyChildNodes(childNodes, constructorChildNodes, termNode, context, rules) {
	let verified = false;

	let childNode = childNodes.shift(),
			constructorChildNode = constructorChildNodes.shift();

	while (childNode !== undefined) {
		if (constructorChildNode === undefined) {
			break;
		}

		const node = childNode, ///
					constructorNode = constructorChildNode; ///

		verified = verifyNode(node, constructorNode, termNode, context, rules);

		if (!verified) {
			break;
		}

		childNode = childNodes.shift();
		constructorChildNode = constructorChildNodes.shift();
	}

	if (verified) {
		if (constructorChildNode !== undefined) {
			verified = false;
		}
	}

	return verified;
}

function verifyTerminalNode(terminalNode, constructorNode, termNode, context, rules) {
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

function verifyNonTerminalNode(nonTerminalNode, constructorNode, termNode, context, rules) {
	let verified = false;

	const constructorNodeNonTerminalNode = constructorNode.isNonTerminalNode();

	if (constructorNodeNonTerminalNode) {
		const nonTerminalNodeRuleName = nonTerminalNode.getRuleName(),
					constructorNonTerminalNode = constructorNode, ///
					constructorNonTerminalNodeRuleName = constructorNonTerminalNode.getRuleName();

		if (nonTerminalNodeRuleName === constructorNonTerminalNodeRuleName) {
			const node = nonTerminalNode, ///
						ruleName = nonTerminalNodeRuleName; ///

			if ((ruleName === TERM_RULE_NAME) && (node !== termNode)) {
				const termNode = node,  ///
							constructorTermNode = constructorNode;  ///

				verified = verifyTerm(termNode, constructorTermNode, context, rules);
			}

			if (!verified) {
				const childNodes = getChildNodes(node),
							constructorChildNodes = getChildNodes(constructorNode);

				verified = verifyChildNodes(childNodes, constructorChildNodes, termNode, context, rules);
			}
		}
	}

	return verified;
}

function verifyTerm(termNode, constructorTermNode, context, rules) {
	let verified = false;

	const termNameTerminalNode = termNameTerminalNodeQuery(termNode),
				constructorTermNameTerminalNode = termNameTerminalNodeQuery(constructorTermNode),
				constructorTermNameTerminalNodeContent = constructorTermNameTerminalNode.getContent(),
				typeName = constructorTermNameTerminalNodeContent,  ///
				type = context.findTypeByTypeName(typeName);

	if (termNameTerminalNode === undefined) {
		const constructors = context.getConstructors();

		constructors.some((constructor) => {
			verified = verifyAgainstConstructor(constructor, termNode, context, rules);

			if (verified) {
				const constructorType = constructor.getType(),  ///
							constructorTypeMatchesTermType = constructorType.matchType(type);

				verified = constructorTypeMatchesTermType;  ///
			}

			if (verified) {
				return true;
			}
		});
	} else {
		const termNameTerminalNodeContent = termNameTerminalNode.getContent(),
					variableName = termNameTerminalNodeContent, ///
					variablePresent = context.isVariablePresentByVariableNameAndType(variableName, type);

		verified = variablePresent; ///
	}

	return verified;
}
