'use strict';

const Error = require('../error'),
			ruleNames = require('../miscellaneous/ruleNames'),
			TypedTerm = require('../miscellaneous/typedTerm'),
			nodeUtilities = require('../utilities/node');

const { TERM_RULE_NAME } = ruleNames,
			{ nodeAsString, getChildNodes } = nodeUtilities;

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
				typedTerms = [];

	let verified = verifyNonTerminalNode(nonTerminalNode, constructorNode, typedTerms, termNode, context, rules);

	if (verified) {
		const callback = verifyAgainstConstructor;  ///

		typedTerms.forEach((typedTerm) => {
			const verified = typedTerm.verify(context, rules, callback);

			if (!verified) {
				const node = termNode,  ///
							typeName = typedTerm.retrieveTypeName(context),
							termString = nodeAsString(termNode),
							typedTermString = typedTerm.asString(),
							message = `The term '${termString}' cannot be verified because '${typedTermString}' is not a term or variable of type '${typeName}'.`;

				throw new Error(node, message);
			}
		});
	}

	return verified;
}

function verifyNode(node, constructorNode, typedTerms, termNode, context, rules) {
	let verified;

	const nodeTerminalNode = node.isTerminalNode();

	if (nodeTerminalNode) {
		const terminalNode = node;  ///

		verified = verifyTerminalNode(terminalNode, constructorNode, typedTerms, termNode, context, rules);
	} else {
		const nonTerminalNode = node; ///

		verified = verifyNonTerminalNode(nonTerminalNode, constructorNode, typedTerms, termNode, context, rules);
	}

	return verified;
}

function verifyChildNodes(childNodes, constructorChildNodes, typedTerms, termNode, context, rules) {
	let verified = false;

	let childNode = childNodes.shift(),
			constructorChildNode = constructorChildNodes.shift();

	while (childNode !== undefined) {
		if (constructorChildNode === undefined) {
			break;
		}

		const node = childNode, ///
					constructorNode = constructorChildNode; ///

		verified = verifyNode(node, constructorNode, typedTerms, termNode, context, rules);

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

function verifyTerminalNode(terminalNode, constructorNode, typedTerms, termNode, context, rules) {
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

function verifyNonTerminalNode(nonTerminalNode, constructorNode, typedTerms, termNode, context, rules) {
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
							constructorTermNode = constructorNode,  ///
							typedTerm = TypedTerm.fromTermNodeAndConstructorTermNode(termNode, constructorTermNode);

				typedTerms.push(typedTerm);

				verified = true;  ///
			} else {
				const childNodes = getChildNodes(node),
							constructorChildNodes = getChildNodes(constructorNode);

				verified = verifyChildNodes(childNodes, constructorChildNodes, typedTerms, termNode, context, rules);
			}
		}
	}

	return verified;
}
