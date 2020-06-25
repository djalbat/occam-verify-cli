"use strict";

const parsers = require("occam-parsers");

const Error = require("../error"),
			queries = require("../miscellaneous/queries"),
			ruleNames = require("../miscellaneous/ruleNames"),
      ParserContext = require("../context/parser"),
      verifyUtilities = require("../utilities/verify"),
      NonTerminalNodeContext = require("../context/nonTerminalNode");

const { partTypes } = parsers,
      { verifyTerm } = verifyUtilities,
      { nameTerminalNodeQuery } = queries,
      { RuleNamePartType,
        OptionalPartPartType,
        GroupOfPartsPartType,
        ChoiceOfPartsPartType,
        OneOrMorePartsPartType,
        ZeroOrMorePartsPartType } = partTypes,
      { NAME_RULE_NAME, TERM_RULE_NAME, STATEMENT_RULE_NAME } = ruleNames;

function verifyStatementAsOperator(statementNode, context, ruleMap) {
	const statementRule = ruleMap[STATEMENT_RULE_NAME],
			  nonTerminalNode = statementNode,  ///
			  rule = statementRule,  ///
			  verified = verifyWithRule(nonTerminalNode, rule, context, ruleMap);

	return verified;
}

module.exports = verifyStatementAsOperator;

function verifyWithRule(nonTerminalNode, rule, context, ruleMap) {
  let verified = false;

  const definitions = rule.getDefinitions(),
        nonTerminalNodeContext = NonTerminalNodeContext.fromNonTerminalNode(nonTerminalNode);

  definitions.some((definition) => {
    const savedIndex = nonTerminalNodeContext.getSavedIndex();

    verified = verifyWithDefinition(definition, context, ruleMap, nonTerminalNodeContext);

    if (verified) {
      return true;
    }

    nonTerminalNodeContext.backtrack(savedIndex);
  });

  return verified;
}

function verifyWithDefinition(definition, context, ruleMap, nonTerminalNodeContext) {
  const parts = definition.getParts();

	let verified = parts.every((part) => verifyWithPart(part, context, ruleMap, nonTerminalNodeContext));

	const nextChildNode = nonTerminalNodeContext.getNextChildNode();

	if (nextChildNode !== null) {
	  verified = false;
  }

	return verified;
}

function verifyWithPart(part, context, ruleMap, nonTerminalNodeContext) {
  let verified;

  const partTerminalPart = part.isTerminalPart();

  if (partTerminalPart) {
    const terminalPart = part;  ///

    verified = verifyWithTerminalPart(terminalPart, context, ruleMap, nonTerminalNodeContext);
  } else {
    const nonTerminalPart = part; ///

    verified = verifyWithNonTerminalPart(nonTerminalPart, context, ruleMap, nonTerminalNodeContext);
  }

  return verified;
}

function verifyWithTerminalPart(terminalPart, context, ruleMap, nonTerminalNodeContext) {
  let verified = false;

  const savedIndex = nonTerminalNodeContext.getSavedIndex(),
        nextChildNode = nonTerminalNodeContext.getNextChildNode();

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
        const parserContext = ParserContext.fromTerminalNode(terminalNode),
              context = parserContext;  ///

        terminalNode = terminalPart.parse(context); ///

        verified = (terminalNode !== null);
      }
	  }
  }

  if (!verified) {
    nonTerminalNodeContext.backtrack(savedIndex);
  }

  return verified;
}

function verifyWithNonTerminalPart(nonTerminalPart, context, ruleMap, nonTerminalNodeContext) {
  let verified = false;

  const nonTerminalPartType = nonTerminalPart.getType();

  switch (nonTerminalPartType) {
    case RuleNamePartType:
      const ruleNamePart = nonTerminalPart;  ///

      verified = verifyWithRuleNamePart(ruleNamePart, context, ruleMap, nonTerminalNodeContext);
      break;

    case OptionalPartPartType:
      const optionalPartPart = nonTerminalPart; ///

      verified = verifyWithOptionalPartPart(optionalPartPart, context, ruleMap, nonTerminalNodeContext);
      break;

    case GroupOfPartsPartType:
      const groupOfPartsPart = nonTerminalPart; ///

      verified = verifyWithGroupOfPartsPart(groupOfPartsPart, context, ruleMap, nonTerminalNodeContext);
      break;

    case ChoiceOfPartsPartType:
      const choiceOfPartsPart = nonTerminalPart; ///

      verified = verifyWithChoiceOfPartsPart(choiceOfPartsPart, context, ruleMap, nonTerminalNodeContext);
      break;

	  case ZeroOrMorePartsPartType:
		  const zeroOrMorePartsPart = nonTerminalPart; ///

		  verified = verifyWithZeroOrMorePartsPart(zeroOrMorePartsPart, context, ruleMap, nonTerminalNodeContext);
		  break;

    default:

      debugger
  }

  return verified;
}

function verifyWithRuleNamePart(ruleNamePart, context, ruleMap, nonTerminalNodeContext) {
  let verified = false;

  const savedIndex = nonTerminalNodeContext.getSavedIndex(),
        nextChildNode = nonTerminalNodeContext.getNextChildNode();

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
    nonTerminalNodeContext.backtrack(savedIndex);
  }

  return verified;
}

function verifyWithOptionalPartPart(optionalPartPart, context, ruleMap, nonTerminalNodeContext) {
  const part = optionalPartPart.getPart(),
        savedIndex = nonTerminalNodeContext.getSavedIndex();

  let verified = verifyWithPart(part, context, ruleMap, nonTerminalNodeContext);

  if (!verified) {
    nonTerminalNodeContext.backtrack(savedIndex);

    verified = true;
  }

  return verified;
}

function verifyWithGroupOfPartsPart(groupOfPartsPart, context, ruleMap, nonTerminalNodeContext) {
  const parts = groupOfPartsPart.getParts(),
        savedIndex = nonTerminalNodeContext.getSavedIndex(),
        verified = parts.every((part) => verifyWithPart(part, context, ruleMap, nonTerminalNodeContext));

  if (!verified) {
    nonTerminalNodeContext.backtrack(savedIndex);
  }

  return verified;
}

function verifyWithChoiceOfPartsPart(choiceOfParts, context, ruleMap, nonTerminalNodeContext) {
  const parts = choiceOfParts.getParts(),
        savedIndex = nonTerminalNodeContext.getSavedIndex(),
        verified = parts.some((part) => verifyWithPart(part, context, ruleMap, nonTerminalNodeContext));

  if (!verified) {
    nonTerminalNodeContext.backtrack(savedIndex);
  }

  return verified;
}

function verifyWithZeroOrMorePartsPart(zeroOrMorePartsPart, context, ruleMap, nonTerminalNodeContext) {
	let verified = true;

	const part = zeroOrMorePartsPart.getPart();

	while (verified === true) {
	  const savedIndex = nonTerminalNodeContext.getSavedIndex();

		verified = verifyWithPart(part, context, ruleMap, nonTerminalNodeContext);

		if (!verified) {
		  nonTerminalNodeContext.backtrack(savedIndex);
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
