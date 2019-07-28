'use strict';

const Error = require('../error'),
			queries = require('../miscellaneous/queries'),
			ruleNames = require('../miscellaneous/ruleNames'),
			TypedTerm = require('../miscellaneous/typedTerm'),
			nodeUtilities = require('../utilities/node');

const { TERM_RULE_NAME } = ruleNames,
			{ termNameTerminalNodeQuery } = queries,
			{ nodeAsString, cloneChildNodes } = nodeUtilities;

function verifyTerm(termNode, context, rules) {
	let type = undefined;

	const constructors = context.getConstructors(),
				topmostTermNode = termNode; ///

	constructors.some((constructor) => {
		const constructorTermNode = constructor.getTermNode(),
					constructorTopmostTermNode = constructorTermNode, ///
					verified = verifyTopmostTermNode(topmostTermNode, constructorTopmostTermNode, context, rules);

		if (verified) {
			type = constructor.getType();

			return true;
		}
	});

	if (type === undefined) {
		const termNameTerminalNode = termNameTerminalNodeQuery(termNode);

		if (termNameTerminalNode !== undefined) {
			const termNameTerminalNodeContent = termNameTerminalNode.getContent(),
						name = termNameTerminalNodeContent, ///
						variable = context.findVariableByName(name);

			if (variable !== undefined) {
				type = variable.getType();
			}
		}
	}

	return type;
}

module.exports = verifyTerm;

function verifyNode(node, constructorNode, typedTerms, context, rules) {
	let verified;

	const nodeTerminalNode = node.isTerminalNode();

	if (nodeTerminalNode) {
		const terminalNode = node;  ///

		verified = verifyTerminalNode(terminalNode, constructorNode, typedTerms, context, rules);
	} else {
		const nonTerminalNode = node; ///

		verified = verifyNonTerminalNode(nonTerminalNode, constructorNode, typedTerms, context, rules);
	}

	return verified;
}

function verifyTermNode(termNode, constructorTermNode, typedTerms, context, rules) {
	const verified = true,  ///
				typedTerm = TypedTerm.fromTermNodeAndConstructorTermNode(termNode, constructorTermNode);

	typedTerms.push(typedTerm);

	return verified;
}

function verifyChildNodes(childNodes, constructorChildNodes, typedTerms, context, rules) {
	let verified = false;

	let childNode = childNodes.shift(),
			constructorChildNode = constructorChildNodes.shift();

	while (childNode !== undefined) {
		if (constructorChildNode === undefined) {
			break;
		}

		const node = childNode, ///
					constructorNode = constructorChildNode; ///

		verified = verifyNode(node, constructorNode, typedTerms, context, rules);

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

function verifyTerminalNode(terminalNode, constructorNode, typedTerms, context, rules) {
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

function verifyNonTerminalNode(nonTerminalNode, constructorNode, typedTerms, context, rules) {
	let verified = false;

	const constructorNodeNonTerminalNode = constructorNode.isNonTerminalNode();

	if (constructorNodeNonTerminalNode) {
		const ruleName = nonTerminalNode.getRuleName(),
					constructorRuleName = constructorNode.getRuleName();

		if (ruleName === constructorRuleName) {
			if (ruleName === TERM_RULE_NAME) {
				const termNode = nonTerminalNode,  ///
							constructorTermNode = constructorNode;  ///

				verified = verifyTermNode(termNode, constructorTermNode, typedTerms, context, rules);
			} else {
				const node = nonTerminalNode, ///
							childNodes = cloneChildNodes(node),
							constructorChildNodes = cloneChildNodes(constructorNode);

				verified = verifyChildNodes(childNodes, constructorChildNodes, typedTerms, context, rules);
			}
		}
	}

	return verified;
}

function verifyTopmostTermNode(topmostTermNode, constructorTopmostTermNode, context, rules) {
	const node = topmostTermNode, ///
				childNodes = cloneChildNodes(node),
				constructorNode = constructorTopmostTermNode, ///
				constructorChildNodes = cloneChildNodes(constructorNode),
				typedTerms = [],
				verified = verifyChildNodes(childNodes, constructorChildNodes, typedTerms, context, rules);

	if (verified) {
		const callback = verifyTopmostTermNode;  ///

		typedTerms.forEach((typedTerm) => {
			const verified = typedTerm.verify(context, rules, callback);

			if (!verified) {
				const node = topmostTermNode,  ///
							typeName = typedTerm.retrieveTypeName(context),
							typedTermString = typedTerm.asString(),
							topmostTermString = nodeAsString(topmostTermNode),
							message = `The term '${topmostTermString}' cannot be verified because '${typedTermString}' is not a term or variable of type '${typeName}'.`;

				throw new Error(node, message);
			}
		});
	}

	return verified;
}
