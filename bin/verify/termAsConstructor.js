'use strict';

const parsers = require('occam-parsers');

const Error = require('../error'),
			queries = require('../miscellaneous/queries'),
			TermNode = require('../miscellaneous/termNode'),
			ruleNames = require('../miscellaneous/ruleNames'),
			verifyTermA = require('../verify/term'),
      nodeUtilities = require('../utilities/node'),
			ruleUtilities = require('../utilities/rule'),
			Configuration = require('../miscellaneous/configuration');

const { partTypes } = parsers,
			{ findRuleByName } = ruleUtilities,
			{ NAME_RULE_NAME } = ruleNames,
			{ nameTerminalNodeQuery } = queries,
      { RuleNamePartType,
        OptionalPartPartType,
        GroupOfPartsPartType,
        ChoiceOfPartsPartType,
        OneOrMorePartsPartType,
        ZeroOrMorePartsPartType } = partTypes,
			{ nodeAsString, getChildNodes } = nodeUtilities;

function verifyTermAsConstructor(termNode, context, rules) {
	const termRule = findRuleByName('term', rules),
			  node = termNode,  ///
			  rule = termRule,  ///
			  verified = verifyWithRule(node, rule, context, rules);

  if (!verified) {
    const node = termNode,  ///
          termString = nodeAsString(termNode),
          message = `The constructor '${termString}' cannot be verified.`;

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
    const message = `The '${name}' type is missing.`;

    throw new Error(node, message);
  }

  return verified;
}

function verifyWithDefinition(node, definition, context, rules) {
  const parts = definition.getParts(),
		    childNodes = getChildNodes(node);

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

  const childNode = childNodes.shift();

  if (childNode !== undefined) {
	  const childNodeTerminalNode = childNode.isTerminalNode();

	  if (childNodeTerminalNode) {
		  let terminalNode = childNode; ///

		  const significantToken = terminalNode.getSignificantToken(),
					  configuration = Configuration.fromSignificantToken(significantToken);

		  terminalNode = terminalPart.parse(configuration);

		  verified = (terminalNode !== undefined);
	  }
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
      const optionalPartPart = nonTerminalPart; ///

      verified = verifyWithOptionalPartPart(childNodes, optionalPartPart, context, rules);
      break;

	  case ZeroOrMorePartsPartType:
		  const zeroOrMorePartsPart = nonTerminalPart; ///

		  verified = verifyWithZeroOrMorePartsPart(childNodes, zeroOrMorePartsPart, context, rules);
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
        const termNode = TermNode.fromChildNode(childNode),
		          type = verifyTermA(termNode, context, rules);

        verified = (type !== undefined);

	      if (!verified) {
		      const node = nonTerminalNode, ///
				        name = nonTerminalNodeRuleName, ///
					      rule = findRuleByName(name, rules);

		      if (name === NAME_RULE_NAME) {
			      const nameRule = rule;  ///

			      verified = verifyWithNameRule(node, nameRule, context, rules);
		      } else {
			      verified = verifyWithRule(node, rule, context, rules);
		      }
	      }
      }
    }
  }

  return verified;
}

function verifyWithOptionalPartPart(childNodes, optionalPartPart, context, rules) {
  let verified = true;

  const part = optionalPartPart.getPart();

  verifyWithPart(childNodes, part, context, rules);

  return verified;
}

function verifyWithZeroOrMorePartsPart(childNodes, zeroOrMorePartsPart, context, rules) {
	let verified = true;

	const part = zeroOrMorePartsPart.getPart();

	while (verified === true) {
		verified = verifyWithPart(childNodes, part, context, rules);
	}

	verified = true;

	return verified;
}