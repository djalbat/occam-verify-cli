"use strict";

const parsers = require("occam-parsers");

const Error = require("../error"),
			queries = require("../miscellaneous/queries"),
			ruleNames = require("../miscellaneous/ruleNames"),
      Configuration = require("../miscellaneous/configuration"),
      verifyUtilities = require("../utilities/verify"),
      ParserConfiguration = require("../miscellaneous/parserConfiguration");

const { partTypes } = parsers,
      { verifyTerm } = verifyUtilities,
      { nameTerminalNodeQuery } = queries,
      { RuleNamePartType,
        OptionalPartPartType,
        GroupOfPartsPartType,
        ChoiceOfPartsPartType,
        OneOrMorePartsPartType,
        ZeroOrMorePartsPartType } = partTypes,
      { NAME_RULE_NAME, TERM_RULE_NAME } = ruleNames;

function verifyTermAsConstructor(termNode, context, ruleMap) {
	const termRule = ruleMap[TERM_RULE_NAME],
			  nonTerminalNode = termNode,  ///
			  rule = termRule,  ///
			  verified = verifyWithRule(nonTerminalNode, rule, context, ruleMap);

	return verified;
}

module.exports = verifyTermAsConstructor;

function verifyWithRule(nonTerminalNode, rule, context, ruleMap) {
  let verified = false;

  const definitions = rule.getDefinitions(),
        configuration = Configuration.fromNonTerminalNode(nonTerminalNode);

  definitions.some((definition) => {
    const savedIndex = configuration.getSavedIndex();

    verified = verifyWithDefinition(definition, context, ruleMap, configuration);

    if (verified) {
      return true;
    }

    configuration.backtrack(savedIndex);
  });

  return verified;
}

function verifyWithDefinition(definition, context, ruleMap, configuration) {
  const parts = definition.getParts();

	let verified = parts.every((part) => verifyWithPart(part, context, ruleMap, configuration));

	const nextChildNode = configuration.getNextChildNode();

	if (nextChildNode !== null) {
	  verified = false;
  }

	return verified;
}

function verifyWithPart(part, context, ruleMap, configuration) {
  let verified;

  const partTerminalPart = part.isTerminalPart();

  if (partTerminalPart) {
    const terminalPart = part;  ///

    verified = verifyWithTerminalPart(terminalPart, context, ruleMap, configuration);
  } else {
    const nonTerminalPart = part; ///

    verified = verifyWithNonTerminalPart(nonTerminalPart, context, ruleMap, configuration);
  }

  return verified;
}

function verifyWithTerminalPart(terminalPart, context, ruleMap, configuration) {
  let verified = false;

  const savedIndex = configuration.getSavedIndex(),
        nextChildNode = configuration.getNextChildNode();

  if (nextChildNode !== null) {
	  const childNode = nextChildNode,  ///
          childNodeTerminalNode = childNode.isTerminalNode();

	  if (childNodeTerminalNode) {
		  let terminalNode = childNode; ///

      const terminalPartNoWhitespacePart = terminalPart.isNoWhitespacePart();

      if (terminalPartNoWhitespacePart) {
        const terminalNodeNoWhitespaceNode = terminalNode.isNoWhitespaceNode();

        verified = terminalNodeNoWhitespaceNode;  ///
      } else {
        const parserConfiguration = ParserConfiguration.fromTerminalNode(terminalNode),
              configuration = parserConfiguration;  ///

        terminalNode = terminalPart.parse(configuration); ///

        verified = (terminalNode !== null);
      }
	  }
  }

  if (!verified) {
    configuration.backtrack(savedIndex);
  }

  return verified;
}

function verifyWithNonTerminalPart(nonTerminalPart, context, ruleMap, configuration) {
  let verified = false;

  const nonTerminalPartType = nonTerminalPart.getType();

  switch (nonTerminalPartType) {
    case RuleNamePartType:
      const ruleNamePart = nonTerminalPart;  ///

      verified = verifyWithRuleNamePart(ruleNamePart, context, ruleMap, configuration);
      break;

    case OptionalPartPartType:
      const optionalPartPart = nonTerminalPart; ///

      verified = verifyWithOptionalPartPart(optionalPartPart, context, ruleMap, configuration);
      break;

    case GroupOfPartsPartType:
      const groupOfPartsPart = nonTerminalPart; ///

      verified = verifyWithGroupOfPartsPart(groupOfPartsPart, context, ruleMap, configuration);
      break;

    case ChoiceOfPartsPartType:
      const choiceOfPartsPart = nonTerminalPart; ///

      verified = verifyWithChoiceOfPartsPart(choiceOfPartsPart, context, ruleMap, configuration);
      break;

	  case ZeroOrMorePartsPartType:
		  const zeroOrMorePartsPart = nonTerminalPart; ///

		  verified = verifyWithZeroOrMorePartsPart(zeroOrMorePartsPart, context, ruleMap, configuration);
		  break;

    default:

      debugger
  }

  return verified;
}

function verifyWithRuleNamePart(ruleNamePart, context, ruleMap, configuration) {
  let verified = false;

  const savedIndex = configuration.getSavedIndex(),
        nextChildNode = configuration.getNextChildNode();

  if (nextChildNode !== null) {
    const childNode = nextChildNode,  ///
          childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      const ruleName = ruleNamePart.getRuleName(),
            nonTerminalNode = childNode,  ///
            nonTerminalNodeRuleName = nonTerminalNode.getRuleName();

      if (ruleName === nonTerminalNodeRuleName) {
        const rule = ruleMap[ruleName] || null;

        if (false) {
          ///
        } else if (ruleName === NAME_RULE_NAME) {
          const nameNode = nonTerminalNode, ///
                nameRule = rule;  ///

          verified = verifyWithNameRule(nameNode, nameRule, context, ruleMap);
        } else if (ruleName === TERM_RULE_NAME) {
          const termNode = nonTerminalNode, ///
                termRule = rule;  ///

          verified = verifyWithTermRule(termNode, termRule, context, ruleMap);
        }

        if (!verified) {
          verified = verifyWithRule(nonTerminalNode, rule, context, ruleMap);
        }
      }
    }
  }

  if (!verified) {
    configuration.backtrack(savedIndex);
  }

  return verified;
}

function verifyWithOptionalPartPart(optionalPartPart, context, ruleMap, configuration) {
  const part = optionalPartPart.getPart(),
        savedIndex = configuration.getSavedIndex();

  let verified = verifyWithPart(part, context, ruleMap, configuration);

  if (!verified) {
    configuration.backtrack(savedIndex);

    verified = true;
  }

  return verified;
}

function verifyWithGroupOfPartsPart(groupOfPartsPart, context, ruleMap, configuration) {
  const parts = groupOfPartsPart.getParts(),
        savedIndex = configuration.getSavedIndex(),
        verified = parts.every((part) => verifyWithPart(part, context, ruleMap, configuration));

  if (!verified) {
    configuration.backtrack(savedIndex);
  }

  return verified;
}

function verifyWithChoiceOfPartsPart(choiceOfParts, context, ruleMap, configuration) {
  const parts = choiceOfParts.getParts(),
        savedIndex = configuration.getSavedIndex(),
        verified = parts.some((part) => verifyWithPart(part, context, ruleMap, configuration));

  if (!verified) {
    configuration.backtrack(savedIndex);
  }

  return verified;
}

function verifyWithZeroOrMorePartsPart(zeroOrMorePartsPart, context, ruleMap, configuration) {
	let verified = true;

	const part = zeroOrMorePartsPart.getPart();

	while (verified === true) {
	  const savedIndex = configuration.getSavedIndex();

		verified = verifyWithPart(part, context, ruleMap, configuration);

		if (!verified) {
		  configuration.backtrack(savedIndex);
    }
	}

	verified = true;

	return verified;
}

function verifyWithNameRule(nameNode, nameRule, context, ruleMap) {
  const nameTerminalNode = nameTerminalNodeQuery(nameNode),
        nameTerminalNodeContent = nameTerminalNode.getContent(),
        name = nameTerminalNodeContent, ///
        typePresent = context.isTypePresentByName(name),
        verified = typePresent; ///

  if (!typePresent) {
    const node = nonTerminalNode, ///
          message = `The '${name}' type is missing.`;

    throw new Error(node, message);
  }

  return verified;
}

function verifyWithTermRule(termNode, termRule, context, ruleMap) {
  const type = verifyTerm(termNode, context, ruleMap),
        verified = (type !== undefined);

  return verified;
}
