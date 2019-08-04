'use strict';

const SubTerm = require('../miscellaneous/subTerm'),
      queries = require('../miscellaneous/queries'),
			ruleNames = require('../miscellaneous/ruleNames'),
			nodeUtilities = require('../utilities/node'),
      SubExpression = require('../miscellaneous/subExpression');

const { cloneChildNodes } = nodeUtilities,
      { nameTerminalNodeQuery, termNameTerminalNodeQuery } = queries,
      { NAME_RULE_NAME, TERM_RULE_NAME, EXPRESSION_RULE_NAME } = ruleNames;

function verifyTerm(termNode, context, rules, verifyExpression) {
  let type = undefined;

  if (type === undefined) {
    type = verifyTermNodeAgainstConstructors(termNode, context, rules, verifyExpression);
  }

	if (type === undefined) {
	  type = verifyTermNodeAgainstVariables(termNode, context, rules, verifyExpression);
	}

	return type;
}

module.exports = verifyTerm;

function verifyTermNodeAgainstConstructors(termNode, context, rules, verifyExpression) {
  let type = undefined;

  const constructors = context.getConstructors();

  constructors.some((constructor) => {
    const constructorTermNode = constructor.getTermNode(),
          verified = verifyTermNode(termNode, constructorTermNode, context, rules, verifyExpression);

    if (verified) {
      type = constructor.getType();

      return true;
    }
  });

  return type;
}

function verifyTermNodeAgainstVariables(termNode, context, rules, verifyExpression) {
  let type = undefined;

  const termNameTerminalNode = termNameTerminalNodeQuery(termNode);

  if (termNameTerminalNode !== undefined) {
    const termNameTerminalNodeContent = termNameTerminalNode.getContent(),
          name = termNameTerminalNodeContent, ///
          variable = context.findVariableByName(name);

    if (variable !== undefined) {
      type = variable.getType();
    }
  }

  return type;
}

function verifyTermNode(termNode, constructorTermNode, context, rules, verifyExpression) {
  let verified;

  const node = termNode, ///
        subTerms = [],
        childNodes = cloneChildNodes(node),
        subExpressions = [],
        constructorNode = constructorTermNode, ///
        constructorChildNodes = cloneChildNodes(constructorNode);

  verified = verifyChildNodes(childNodes, constructorChildNodes, subExpressions, subTerms, context, rules, verifyExpression);

  if (verified) {
    verified = subTerms.every((subTerm) => subTerm.verify(context, rules, verifyExpression, verifyTermNode));
  }

  if (verified) {
    subExpressions.forEach((subExpression) => subExpression.verify(termNode, context, rules, verifyExpression));
  }

  return verified;
}

function verifyNode(node, constructorNode, subExpressions, subTerms, context, rules, verifyExpression) {
	let verified;

	const nodeTerminalNode = node.isTerminalNode();

	if (nodeTerminalNode) {
		const terminalNode = node;  ///

		verified = verifyTerminalNode(terminalNode, constructorNode, subExpressions, subTerms, context, rules, verifyExpression);
	} else {
		const nonTerminalNode = node; ///

		verified = verifyNonTerminalNode(nonTerminalNode, constructorNode, subExpressions, subTerms, context, rules, verifyExpression);
	}

	return verified;
}

function verifyChildNodes(childNodes, constructorChildNodes, subExpressions, subTerms, context, rules, verifyExpression) {
	let verified = false;

	let childNode = childNodes.shift(),
			constructorChildNode = constructorChildNodes.shift();

	while (childNode !== undefined) {
		if (constructorChildNode === undefined) {
			break;
		}

		const node = childNode, ///
					constructorNode = constructorChildNode; ///

		verified = verifyNode(node, constructorNode, subExpressions, subTerms, context, rules, verifyExpression);

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

function verifyTerminalNode(terminalNode, constructorNode, subExpressions, subTerms, context, rules, verifyExpression) {
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

function verifyNonTerminalNode(nonTerminalNode, constructorNode, subExpressions, subTerms, context, rules, verifyExpression) {
	let verified = false;

	const constructorNodeNonTerminalNode = constructorNode.isNonTerminalNode();

	if (constructorNodeNonTerminalNode) {
		const ruleName = nonTerminalNode.getRuleName(),
					constructorRuleName = constructorNode.getRuleName();

		if (ruleName === constructorRuleName) {
		  switch (ruleName) {
        case NAME_RULE_NAME : {
          const node = nonTerminalNode, ///
                nameTerminalNode = nameTerminalNodeQuery(node),
                constructorNameTerminalNode = nameTerminalNodeQuery(constructorNode);

          verified = verifyNameTerminalNode(nameTerminalNode, constructorNameTerminalNode, subExpressions, subTerms, context, rules, verifyExpression);

          break;
        }

        case TERM_RULE_NAME : {
          const termNode = nonTerminalNode,  ///
                constructorTermNode = constructorNode,  ///
                subTerm = SubTerm.fromTermNodeAndConstructorTermNode(termNode, constructorTermNode);

          subTerms.push(subTerm);

          verified = true;  ///

          break;
        }

        case EXPRESSION_RULE_NAME : {
          const expressionNode = nonTerminalNode,  ///
                constructorTermNode = constructorNode,  ///
                subExpression = SubExpression.fromExpressionNodeAndConstructorTermNode(expressionNode, constructorTermNode);

          subExpressions.push(subExpression);

          verified = true;  ///

          break;
        }

        default: {
          const node = nonTerminalNode, ///
                childNodes = cloneChildNodes(node),
                constructorChildNodes = cloneChildNodes(constructorNode);

          verified = verifyChildNodes(childNodes, constructorChildNodes, subExpressions, subTerms, context, rules, verifyExpression);
        }
      }
		}
	}

	return verified;
}

function verifyNameTerminalNode(nameTerminalNode, constructorNameTerminalNode, subExpressions, subTerms, context, rules, verifyExpression) {
  let verified = false;

  const nameTerminalNodeContent = nameTerminalNode.getContent(),
        name = nameTerminalNodeContent, ///
        variable = context.findVariableByName(name);

  if (variable !== undefined) {
    const constructorNameTerminalNodeContent = constructorNameTerminalNode.getContent(),
          constructorName = constructorNameTerminalNodeContent;  ///

    if (constructorName === name) {
      verified = true;
    } else {
      const name = constructorName, ///
            type = context.findTypeByName(name),
            variableType = variable.getType(),
            variableTypeEqualToOrSubTypeOfType = variableType.isEqualToOrSubTypeOf(type);

      verified = variableTypeEqualToOrSubTypeOfType;  ///
    }
  }

  return verified;
}
