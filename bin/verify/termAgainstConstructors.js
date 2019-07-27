'use strict';

const queries = require('../miscellaneous/queries'),
			ruleNames = require('../miscellaneous/ruleNames'),
			nodeUtilities = require('../utilities/node');

const { getChildNodes } = nodeUtilities,
			{ TERM_RULE_NAME } = ruleNames,
			{ termNameTerminalNodeQuery } = queries;

function verifyTermAgainstConstructors(termNode, context, rules) {
	const constructors = context.getConstructors(),
				verified = constructors.some((constructor) => verifyAgainstConstructor(termNode, constructor, context, rules));

	return verified;
}

module.exports = verifyTermAgainstConstructors;

function verifyAgainstConstructor(termNode, constructor, context, rules) {
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

			if (ruleName === TERM_RULE_NAME) {
				if (node !== termNode) {
					const termNode = node,  ///
								constructorTermNode = constructorNode;  ///

					if (!verified) {
						verified = verifyTermNameTerminalNode(termNode, constructorTermNode, context, rules);
					}

					if (!verified) {
						verified = verifyTerm(termNode, constructorTermNode, context, rules);
					}
				}
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

function verifyTermNameTerminalNode(termNode, constructorTermNode, context, rules) {
	let verified = false;

	const termNameTerminalNode = termNameTerminalNodeQuery(termNode);

	if (termNameTerminalNode !== undefined) {
		const termNameTerminalNodeContent = termNameTerminalNode.getContent(),
					constructorTermNameTerminalNode = termNameTerminalNodeQuery(constructorTermNode),
					constructorTermNameTerminalNodeContent = constructorTermNameTerminalNode.getContent(),
					variableName = termNameTerminalNodeContent, ///
					typeName = constructorTermNameTerminalNodeContent,  ///
					type = context.findTypeByTypeName(typeName),
					variablePresent = context.isVariablePresentByVariableNameAndType(variableName, type);

		verified = variablePresent; ///
	}

	return verified;
}

function verifyTerm(termNode, constructorTermNode, context, rules) {
	let verified = false;

	const constructors = context.getConstructors();

	constructors.some((constructor) => {
		verified = verifyAgainstConstructor(termNode, constructor, context, rules);

		if (verified) {
			const constructorTermNameTerminalNode = termNameTerminalNodeQuery(constructorTermNode),
						constructorTermNameTerminalNodeContent = constructorTermNameTerminalNode.getContent(),
						termTypeName = constructorTermNameTerminalNodeContent,  ///
						termType = context.findTypeByTypeName(termTypeName),
						constructorType = constructor.getType(),  ///
						constructorTypeMatchesTermType = constructorType.matchType(termType);

			verified = constructorTypeMatchesTermType;  ///
		}

		if (verified) {
			return true;
		}
	});

	return verified;
}
