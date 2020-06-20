"use strict";

const parsers = require("occam-parsers");

const Error = require("../error"),
			queries = require("../miscellaneous/queries"),
			TermNode = require("../miscellaneous/termNode"),
			ruleNames = require("../miscellaneous/ruleNames"),
      ChildNodes = require("../miscellaneous/childNodes"),
      nodeUtilities = require("../utilities/node"),
			Configuration = require("../miscellaneous/configuration"),
      verifyUtilities = require("../utilities/verify");

const { partTypes } = parsers,
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

function verifyTermAsConstructor(termNode, context, ruleMap) {
	const termRule = ruleMap[TERM_RULE_NAME],
			  node = termNode,  ///
			  rule = termRule,  ///
			  verified = verifyWithRule(node, rule, context, ruleMap);

  if (!verified) {
    const node = termNode,  ///
          termString = nodeAsString(termNode),
          message = `The constructor '${termString}' cannot be verified.`;

    throw new Error(node, message);
  }
}

module.exports = verifyTermAsConstructor;

function verifyWithRule(node, rule, context, ruleMap) {
  const definitions = rule.getDefinitions(),
        verified = definitions.some((definition) => verifyWithDefinition(node, definition, context, ruleMap));

  return verified;
}

function verifyWithDefinition(node, definition, context, ruleMap) {
  const parts = definition.getParts(),
		    childNodes = cloneChildNodes(node);

	let verified = parts.every((part) => verifyWithPart(childNodes, part, context, ruleMap));

	if (verified) {
		const childNode = childNodes.shift();

		if (childNode !== undefined) {
			verified = false;
		}
	}

	return verified;
}

function verifyWithPart(childNodes, part, context, ruleMap) {
  let verified;

  const partTerminalPart = part.isTerminalPart();

  if (partTerminalPart) {
    const terminalPart = part;  ///

    verified = verifyWithTerminalPart(childNodes, terminalPart, context, ruleMap);
  } else {
    const nonTerminalPart = part; ///

    verified = verifyWithNonTerminalPart(childNodes, nonTerminalPart, context, ruleMap);
  }

  return verified;
}

function verifyWithTerminalPart(childNodes, terminalPart, context, ruleMap) {
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

function verifyWithNonTerminalPart(childNodes, nonTerminalPart, context, ruleMap) {
  let verified = false;

  const nonTerminalPartType = nonTerminalPart.getType();

  switch (nonTerminalPartType) {
    case RuleNamePartType:
      const ruleNamePart = nonTerminalPart;  ///

      verified = verifyWithRuleNamePart(childNodes, ruleNamePart, context, ruleMap);
      break;

    case GroupOfPartsPartType:
      const groupOfPartsPart = nonTerminalPart; ///

      verified = verifyWithGroupOfPartsPart(childNodes, groupOfPartsPart, context, ruleMap);
      break;

    case OptionalPartPartType:
      const optionalPartPart = nonTerminalPart; ///

      verified = verifyWithOptionalPartPart(childNodes, optionalPartPart, context, ruleMap);
      break;

	  case ZeroOrMorePartsPartType:
		  const zeroOrMorePartsPart = nonTerminalPart; ///

		  verified = verifyWithZeroOrMorePartsPart(childNodes, zeroOrMorePartsPart, context, ruleMap);
		  break;

    default:

      debugger
  }

  return verified;
}

function verifyWithRuleNamePart(childNodes, ruleNamePart, context, ruleMap) {
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
              rule = ruleMap[ruleName] || null;

        if (ruleName === NAME_RULE_NAME) {
          const nameRule = rule;  ///

          verified = verifyWithNameRule(node, nameRule, context, ruleMap);
        } else {
          const termNode = TermNode.fromChildNode(childNode),
                type = verifyTerm(termNode, context, ruleMap, verifyExpression);

          verified = (type !== undefined);

          if (!verified) {
            verified = verifyWithRule(node, rule, context, ruleMap);
          }
        }
      }
    }
  }

  return verified;
}

function verifyWithGroupOfPartsPart(childNodes, groupOfPartsPart, context, ruleMap) {
  const parts = groupOfPartsPart.getParts();

  let verified = parts.every((part) => verifyWithPart(childNodes, part, context, ruleMap));

  childNodes = ChildNodes.fromChildNodes(childNodes); ///

  if (!verified) {
    childNodes.backtrack();
  }

  return verified;
}

function verifyWithOptionalPartPart(childNodes, optionalPartPart, context, ruleMap) {
  const part = optionalPartPart.getPart();

  childNodes = ChildNodes.fromChildNodes(childNodes); ///

  let verified = verifyWithPart(childNodes, part, context, ruleMap);

  if (!verified) {
    childNodes.backtrack();

    verified = true;
  }

  return verified;
}

function verifyWithZeroOrMorePartsPart(childNodes, zeroOrMorePartsPart, context, ruleMap) {
	let verified = true;

	const part = zeroOrMorePartsPart.getPart();

	while (verified === true) {
		verified = verifyWithPart(childNodes, part, context, ruleMap);
	}

	verified = true;

	return verified;
}

function verifyWithNameRule(node, nameRule, context, ruleMap) {
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
