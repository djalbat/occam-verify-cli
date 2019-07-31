'use strict';

const Error = require('../error'),
			queries = require('../miscellaneous/queries'),
			TermNode = require('../miscellaneous/termNode'),
			ruleNames = require('../miscellaneous/ruleNames'),
			TypedTerm = require('../miscellaneous/typedTerm'),
			nodeUtilities = require('../utilities/node');

const { termNameTerminalNodeQuery } = queries,
      { nodeAsString, cloneChildNodes } = nodeUtilities,
      { NAME_RULE_NAME, TERM_RULE_NAME } = ruleNames;

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

function verifyTopmostTermNode(topmostTermNode, constructorTopmostTermNode, context, rules) {
  const node = topmostTermNode, ///
        topmost = true,
        typedTerms = [],
        childNodes = cloneChildNodes(node),
        constructorNode = constructorTopmostTermNode, ///
        constructorChildNodes = cloneChildNodes(constructorNode),
        verified = verifyChildNodes(childNodes, constructorChildNodes, typedTerms, context, rules, topmost);

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

function verifyNode(node, constructorNode, typedTerms, context, rules, topmost) {
	let verified;

	const nodeTerminalNode = node.isTerminalNode();

	if (nodeTerminalNode) {
		const terminalNode = node;  ///

		verified = verifyTerminalNode(terminalNode, constructorNode, typedTerms, context, rules);
	} else {
		const nonTerminalNode = node; ///

		verified = verifyNonTerminalNode(nonTerminalNode, constructorNode, typedTerms, context, rules, topmost);
	}

	return verified;
}

function verifyChildNodes(childNodes, constructorChildNodes, typedTerms, context, rules, topmost) {
	let verified = false;

	let childNode = childNodes.shift(),
			constructorChildNode = constructorChildNodes.shift();

	while (childNode !== undefined) {
		if (constructorChildNode === undefined) {
			break;
		}

		const node = childNode, ///
					constructorNode = constructorChildNode; ///

		verified = verifyNode(node, constructorNode, typedTerms, context, rules, topmost);

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

function verifyNonTerminalNode(nonTerminalNode, constructorNode, typedTerms, context, rules, topmost) {
	let verified = false;

	const constructorNodeNonTerminalNode = constructorNode.isNonTerminalNode();

	if (constructorNodeNonTerminalNode) {
		const ruleName = nonTerminalNode.getRuleName(),
					constructorRuleName = constructorNode.getRuleName();

		if (ruleName === constructorRuleName) {
		  switch (ruleName) {
        case NAME_RULE_NAME : {
          const childNode = nonTerminalNode,  ///
                constructorChildNode = constructorNode, ///
                termNode = TermNode.fromChildNode(childNode),
                constructorTermNode = TermNode.fromChildNode(constructorChildNode),
                typedTerm = TypedTerm.fromTermNodeAndConstructorTermNode(termNode, constructorTermNode);

          typedTerms.push(typedTerm);

          verified = true;

          break;
        }

        case TERM_RULE_NAME : {
          const termNode = nonTerminalNode,  ///
                constructorTermNode = constructorNode,  ///
                typedTerm = TypedTerm.fromTermNodeAndConstructorTermNode(termNode, constructorTermNode);

          typedTerms.push(typedTerm);

          verified = true;

          break;
        }

        default: {
          if (!topmost) {
            const childNode = nonTerminalNode,  ///
                  termNode = TermNode.fromChildNode(childNode);

            verifyTerm(termNode, context, rules);

            verified = true;
          }

          if (!verified) {
            const node = nonTerminalNode, ///
                  topmost = false,
                  childNodes = cloneChildNodes(node),
                  constructorChildNodes = cloneChildNodes(constructorNode);

            verified = verifyChildNodes(childNodes, constructorChildNodes, typedTerms, context, rules, topmost);
          }
        }
      }
		}
	}

	return verified;
}
