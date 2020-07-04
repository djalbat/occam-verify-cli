"use strict";

const parsers = require("occam-parsers");

const queries = require("../miscellaneous/queries"),
      ruleNames = require("../miscellaneous/ruleNames"),
      ParserContext = require("../context/parser"),
      NonTerminalNodeContext = require("../context/nonTerminalNode");

const { partTypes } = parsers,
      { RuleNamePartType,
        OptionalPartPartType,
        GroupOfPartsPartType,
        ChoiceOfPartsPartType,
        OneOrMorePartsPartType,
        ZeroOrMorePartsPartType } = partTypes,
      { nameTerminalNodeQuery } = queries,
      { NAME_RULE_NAME, TERM_RULE_NAME } = ruleNames;

function verifyWithRule(nonTerminalNode, rule, fileContext) {
  let verified = false;

  const definitions = rule.getDefinitions(),
        nonTerminalNodeContext = NonTerminalNodeContext.fromFileContextAndNonTerminalNode(fileContext, nonTerminalNode);

  definitions.some((definition) => {
    const savedIndex = nonTerminalNodeContext.getSavedIndex();

    verified = verifyWithDefinition(definition, nonTerminalNodeContext);

    if (verified) {
      return true;
    }

    nonTerminalNodeContext.backtrack(savedIndex);
  });

  return verified;
}

module.exports = {
  verifyWithRule
};

function verifyWithDefinition(definition, nonTerminalNodeContext) {
  let verified = false;

  const parts = definition.getParts();

  parts.every((part) => {
    verified = verifyWithPart(part, nonTerminalNodeContext);

    if (verified) {
      return true;
    }
  });

  const nextChildNode = nonTerminalNodeContext.getNextChildNode();

  if (nextChildNode !== undefined) {
    verified = false;
  }

  return verified;
}

function verifyWithPart(part, nonTerminalNodeContext) {
  let verified;

  const partTerminalPart = part.isTerminalPart();

  if (partTerminalPart) {
    const terminalPart = part;  ///

    verified = verifyWithTerminalPart(terminalPart, nonTerminalNodeContext);
  } else {
    const nonTerminalPart = part; ///

    verified = verifyWithNonTerminalPart(nonTerminalPart, nonTerminalNodeContext);
  }

  return verified;
}

function verifyWithTerminalPart(terminalPart, nonTerminalNodeContext) {
  let verified = false;

  const savedIndex = nonTerminalNodeContext.getSavedIndex(),
        nextChildNode = nonTerminalNodeContext.getNextChildNode();

  if (nextChildNode !== undefined) {
    const childNode = nextChildNode,  ///
          childNodeTerminalNode = childNode.isTerminalNode();

    if (childNodeTerminalNode) {
      let terminalNode = childNode; ///

      const terminalPartNoWhitespacePart = terminalPart.isNoWhitespacePart();

      if (terminalPartNoWhitespacePart) {
        const terminalNodeNoWhitespaceNode = terminalNode.isNoWhitespaceNode();

        if (terminalNodeNoWhitespaceNode) {
          verified = true;
        }
      } else {
        const parserContext = ParserContext.fromTerminalNode(terminalNode),
              context = parserContext;  ///

        terminalNode = terminalPart.parse(context);

        if (terminalNode !== null) {
          verified = true;
        }
      }
    }
  }

  if (!verified) {
    nonTerminalNodeContext.backtrack(savedIndex);
  }

  return verified;
}

function verifyWithNonTerminalPart(nonTerminalPart, nonTerminalNodeContext) {
  let verified = false;

  const nonTerminalPartType = nonTerminalPart.getType();

  switch (nonTerminalPartType) {
    case RuleNamePartType:
      const ruleNamePart = nonTerminalPart;  ///

      verified = verifyWithRuleNamePart(ruleNamePart, nonTerminalNodeContext);

      break;

    case OptionalPartPartType:
      const optionalPartPart = nonTerminalPart; ///

      verified = verifyWithOptionalPartPart(optionalPartPart, nonTerminalNodeContext);

      break;

    case GroupOfPartsPartType:
      const groupOfPartsPart = nonTerminalPart; ///

      verified = verifyWithGroupOfPartsPart(groupOfPartsPart, nonTerminalNodeContext);

      break;

    case ChoiceOfPartsPartType:
      const choiceOfPartsPart = nonTerminalPart; ///

      verified = verifyWithChoiceOfPartsPart(choiceOfPartsPart, nonTerminalNodeContext);

      break;

    case ZeroOrMorePartsPartType:
      const zeroOrMorePartsPart = nonTerminalPart; ///

      verified = verifyWithZeroOrMorePartsPart(zeroOrMorePartsPart, nonTerminalNodeContext);

      break;

    default:

      debugger
  }

  return verified;
}

function verifyWithOptionalPartPart(optionalPartPart, nonTerminalNodeContext) {
  const part = optionalPartPart.getPart(),
        savedIndex = nonTerminalNodeContext.getSavedIndex();

  let verified = verifyWithPart(part, nonTerminalNodeContext);

  if (!verified) {
    nonTerminalNodeContext.backtrack(savedIndex);

    verified = true;
  }

  return verified;
}

function verifyWithGroupOfPartsPart(groupOfPartsPart, nonTerminalNodeContext) {
  const parts = groupOfPartsPart.getParts(),
        savedIndex = nonTerminalNodeContext.getSavedIndex(),
        verified = parts.every((part) => verifyWithPart(part, nonTerminalNodeContext));

  if (!verified) {
    nonTerminalNodeContext.backtrack(savedIndex);
  }

  return verified;
}

function verifyWithChoiceOfPartsPart(choiceOfParts, nonTerminalNodeContext) {
  const parts = choiceOfParts.getParts(),
        savedIndex = nonTerminalNodeContext.getSavedIndex(),
        verified = parts.some((part) => verifyWithPart(part, nonTerminalNodeContext));

  if (!verified) {
    nonTerminalNodeContext.backtrack(savedIndex);
  }

  return verified;
}

function verifyWithZeroOrMorePartsPart(zeroOrMorePartsPart, nonTerminalNodeContext) {
  let verified = true;

  const part = zeroOrMorePartsPart.getPart();

  while (verified) {
    const savedIndex = nonTerminalNodeContext.getSavedIndex();

    verified = verifyWithPart(part, nonTerminalNodeContext);

    if (!verified) {
      nonTerminalNodeContext.backtrack(savedIndex);
    }
  }

  verified = true;

  return verified;
}

function verifyWithRuleNamePart(ruleNamePart, nonTerminalNodeContext) {
  let verified = false;

  const savedIndex = nonTerminalNodeContext.getSavedIndex(),
        nextChildNode = nonTerminalNodeContext.getNextChildNode();

  if (nextChildNode !== undefined) {
    const childNode = nextChildNode,  ///
          childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      const ruleName = ruleNamePart.getRuleName(),
            nonTerminalNode = childNode,  ///
            nonTerminalNodeRuleName = nonTerminalNode.getRuleName();

      if (ruleName === nonTerminalNodeRuleName) {
        const rule = nonTerminalNodeContext.findRuleByRuleName(ruleName),
              fileContext = nonTerminalNodeContext.getFileContext();

        switch (ruleName) {
          case NAME_RULE_NAME: {
            const nameNode = nonTerminalNode, ///
                  nameRule = rule;  ///

            verified = verifyWithNameRule(nameNode, nameRule, fileContext);

            break;
          }

          case TERM_RULE_NAME: {
            const termNode = nonTerminalNode, ///
                  type = verifyTerm(termNode, fileContext);

            verified = (type !== undefined);

            break;
          }
        }

        if (!verified) {
          verified = verifyWithRule(nonTerminalNode, rule, fileContext);
        }
      }
    }
  }

  if (!verified) {
    nonTerminalNodeContext.backtrack(savedIndex);
  }

  return verified;
}
