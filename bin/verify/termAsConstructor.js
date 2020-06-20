"use strict";

const parsers = require("occam-parsers");

const Error = require("../error"),
			queries = require("../miscellaneous/queries"),
			TermNode = require("../miscellaneous/termNode"),
			ruleNames = require("../miscellaneous/ruleNames"),
      ChildNodes = require("../miscellaneous/childNodes"),
      nodeUtilities = require("../utilities/node"),
			ruleUtilities = require("../utilities/rule"),
			Configuration = require("../miscellaneous/configuration"),
      verifyUtilities = require("../utilities/verify");

const { partTypes } = parsers,
			{ findRuleByName } = ruleUtilities,
			{ nameTerminalNodeQuery } = queries,
      { RuleNamePartType,
        OptionalPartPartType,
        GroupOfPartsPartType,
        ChoiceOfPartsPartType,
        OneOrMorePartsPartType,
        ZeroOrMorePartsPartType } = partTypes,
      { verifyTerm, verifyExpression } = verifyUtilities,
			{ nodeAsString, cloneChildNodes } = nodeUtilities,
      { NAME_RULE_NAME, TERM_RULE_NAME } = ruleNames;

function verifyTermAsConstructor(termNode, context, rules) {
	const termRule = findRuleByName(TERM_RULE_NAME, rules),
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

function verifyWithDefinition(node, definition, context, rules) {
  const parts = definition.getParts(),
		    childNodes = cloneChildNodes(node);

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

    case GroupOfPartsPartType:
      const groupOfPartsPart = nonTerminalPart; ///

      verified = verifyWithGroupOfPartsPart(childNodes, groupOfPartsPart, context, rules);
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
      const ruleName = ruleNamePart.getRuleName(),
            nonTerminalNode = childNode,  ///
            nonTerminalNodeRuleName = nonTerminalNode.getRuleName();

      if (ruleName === nonTerminalNodeRuleName) {
        const name = ruleName,  ///
              node = nonTerminalNode, ///
              rule = findRuleByName(name, rules);

        if (ruleName === NAME_RULE_NAME) {
          const nameRule = rule;  ///

          verified = verifyWithNameRule(node, nameRule, context, rules);
        } else {
          const termNode = TermNode.fromChildNode(childNode),
                type = verifyTerm(termNode, context, rules, verifyExpression);

          verified = (type !== undefined);

          if (!verified) {
            verified = verifyWithRule(node, rule, context, rules);
          }
        }
      }
    }
  }

  return verified;
}

function verifyWithGroupOfPartsPart(childNodes, groupOfPartsPart, context, rules) {
  const parts = groupOfPartsPart.getParts();

  let verified = parts.every((part) => verifyWithPart(childNodes, part, context, rules));

  childNodes = ChildNodes.fromChildNodes(childNodes); ///

  if (!verified) {
    childNodes.backtrack();
  }

  return verified;
}

function verifyWithOptionalPartPart(childNodes, optionalPartPart, context, rules) {
  const part = optionalPartPart.getPart();

  childNodes = ChildNodes.fromChildNodes(childNodes); ///

  let verified = verifyWithPart(childNodes, part, context, rules);

  if (!verified) {
    childNodes.backtrack();

    verified = true;
  }

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
