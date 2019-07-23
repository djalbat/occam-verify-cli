'use strict';

const parsers = require('occam-parsers');

const Error = require('../error'),
			queries = require('../queries'),
			Configuration = require('../configuration'),
      nodeUtilities = require('../utilities/node'),
			ruleUtilities = require('../utilities/rule'),
			verifyAgainstConstructor = require('../verify/againstConstructor');

const { partTypes } = parsers,
      { nodeAsString } = nodeUtilities,
			{ findRuleByName } = ruleUtilities,
      { RuleNamePartType,
        OptionalPartPartType,
        GroupOfPartsPartType,
        ChoiceOfPartsPartType,
        OneOrMorePartsPartType,
        ZeroOrMorePartsPartType } = partTypes,
			{ terminalNodeQuery, termNonTerminalNodesQuery, nameTerminalNodeQuery } = queries;

function verifyTermAsConstructor(termNode, context, rules) {
	checkTermNode(termNode, context, rules);

	const termRule = findRuleByName('term', rules),
			  node = termNode,  ///
			  rule = termRule,  ///
			  verified = verifyWithRule(node, rule, context, rules);

  if (!verified) {
    const node = termNode,  ///
          termNodeString = nodeAsString(termNode),
          message = `The constructor '${termNodeString}' cannot be verified.`;

    throw new Error(node, message);
  }
}

module.exports = verifyTermAsConstructor;

function verifyWithRule(node, rule, context, rules) {
  const definitions = rule.getDefinitions(),
        verified = definitions.some((definition) => verifyWithDefinition(node, definition, context, rules));

  return verified;
}

function verifyWithNameRule(node, nameRule, context, rules) {
	const nameTerminalNode = nameTerminalNodeQuery(node),
				nameTerminalNodeContent = nameTerminalNode.getContent(),
				name = nameTerminalNodeContent,
        typePresent = context.isTypePresentByName(name),
        verified = typePresent; ///

  if (!typePresent) {
    const message = `There is no type '${name}' present.`;

    throw new Error(node, message);
  }

  return verified;
}

function verifyWithDefinition(node, definition, context, rules) {
  const parts = definition.getParts(),
		    childNodes = node.getChildNodes().slice();  ///

	let verified = parts.every((part) => verifyWithPart(childNodes, part, context, rules));

	if (verified) {
		const childNode = childNodes.shift();

		if (childNode !== undefined) {
			verified = false;
		}
	}

	return verified;
}

function verifyWithPart(childNodes, part, context, rules) {
  let verified;

  const partTerminalPart = part.isTerminalPart();

  if (partTerminalPart) {
    const terminalPart = part;  ///

    verified = verifyWithTerminalPart(childNodes, terminalPart, context, rules);
  } else {
    const nonTerminalPart = part; ///

    verified = verifyWithNonTerminalPart(childNodes, nonTerminalPart, context, rules);
  }

  return verified;
}

function verifyWithTerminalPart(childNodes, terminalPart, context, rules) {
  let verified = false;

  const childNode = childNodes.shift(),
        childNodeTerminalNode = childNode.isTerminalNode();

  if (childNodeTerminalNode) {
    let terminalNode = childNode; ///

    const significantToken = terminalNode.getSignificantToken(),
          configuration = Configuration.fromSignificantToken(significantToken);

    terminalNode = terminalPart.parse(configuration);

    verified = (terminalNode !== undefined);
  }

  return verified;
}

function verifyWithNonTerminalPart(childNodes, nonTerminalPart, context, rules) {
  let verified = false;

  const nonTerminalPartType = nonTerminalPart.getType();

  switch (nonTerminalPartType) {
    case RuleNamePartType:
      const ruleNamePart = nonTerminalPart;  ///

      verified = verifyWithRuleNamePart(childNodes, ruleNamePart, context, rules);
      break;

    case OptionalPartPartType:
      const optionalPart = nonTerminalPart; ///

      verified = verifyWithOptionalPart(childNodes, optionalPart, context, rules);
      break;

    default:

      debugger
  }

  return verified;
}

function verifyWithRuleNamePart(childNodes, ruleNamePart, context, rules) {
  let verified = false;

  const childNode = childNodes.shift();

  if (childNode !== undefined) {
    const childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      const nonTerminalNode = childNode,  ///
            ruleNamePartRuleName = ruleNamePart.getRuleName(),
            nonTerminalNodeRuleName = nonTerminalNode.getRuleName();

      if (ruleNamePartRuleName === nonTerminalNodeRuleName) {
      	const node = nonTerminalNode, ///
			        ruleName = ruleNamePartRuleName,  ///
			        constructor = context.findConstructorByRuleName(ruleName);

      	if (constructor !== undefined) {
      		verifyAgainstConstructor(node, constructor, context, rules);
	      }

	      const name = nonTerminalNodeRuleName, ///
							rule = findRuleByName(name, rules);

				switch (name) {
					case 'name' :
						const nameRule = rule;  ///

						verified = verifyWithNameRule(node, nameRule, context, rules);
						break;

					default :
						verified = verifyWithRule(node, rule, context, rules);
						break;
	      }
      }
    }
  }

  return verified;
}

function verifyWithOptionalPart(childNodes, optionalPart, context, rules) {
  let verified = true;  ///

  const part = optionalPart.getPart();

  verifyWithPart(childNodes, part, context, rules);

  return verified;
}

function checkTermNode(termNode, context, rules) {
	const termNonTerminalNodes = termNonTerminalNodesQuery(termNode);

	let termNonTerminalNode = termNonTerminalNodes.shift();

	if (termNonTerminalNode === undefined) {
		const node = termNode,  ///
					termNodeString = nodeAsString(termNode),
					message = `The constructor '${termNodeString}' must have a non-terminal child node.`;

		throw new Error(node, message);
	}

	termNonTerminalNode = termNonTerminalNodes.shift();

	if (termNonTerminalNode !== undefined) {
		const node = termNode,  ///
					termNodeString = nodeAsString(termNode),
					message = `The constructor '${termNodeString}' has more than one non-terminal child node.`;

		throw new Error(node, message);
	}

	const terminalNode = terminalNodeQuery(termNode);

	if (terminalNode !== undefined) {
		const node = termNode,  ///
					termNodeString = nodeAsString(termNode),
					message = `The constructor '${termNodeString}' cannot have any child terminal nodes.`;

		throw new Error(node, message);
	}
}
