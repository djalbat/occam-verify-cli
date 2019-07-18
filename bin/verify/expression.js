'use strict';

const parsers = require('occam-parsers');

const Error = require('../error'),
      verifyTerm = require('../verify/term'),
      nodeUtilities = require('../utilities/node'),
      ruleUtilities = require('../utilities/rule');

const { partTypes } = parsers,
      { nodeAsString } = nodeUtilities,
      { findRuleByName } = ruleUtilities,
      { RuleNamePartType,
        OptionalPartPartType,
        GroupOfPartsPartType,
        ChoiceOfPartsPartType,
        OneOrMorePartsPartType,
        ZeroOrMorePartsPartType } = partTypes;

function verifyExpression(expressionNode, context, rules) {
  const expressionRule = findRuleByName('expression', rules),
        node = expressionNode,  ///
        rule = expressionRule,  ///
        type = verifyWithRule(node, rule, context, rules);

  if (type === undefined) {
    const node = expressionNode,  ///
          expressionNodeString = nodeAsString(expressionNode),
          message = `The expression '${expressionNodeString}' cannot be verified.`;

    throw new Error(node, message);
  }

  return type;
}

module.exports = verifyExpression;

function verifyWithRule(node, rule, context, rules) {
  let type = undefined;

  const definitions = rule.getDefinitions();

  definitions.some((definition) => {
    type = verifyWithDefinition(node, definition, context, rules);

    if (type !== undefined) {
      return true;
    }
  });

  return type;
}

function verifyWithDefinition(node, definition, context, rules) {
  const parts = definition.getParts(),
        childNodes = node.getChildNodes().slice(),  ///
        type = verifyWithParts(childNodes, parts, context, rules);

  return type;
}

function verifyWithParts(childNodes, parts, context, rules) {
  let type = undefined;

  const verified = parts.every((part) => {
    let partType;

    const partTerminalPart = part.isTerminalPart();

    if (partTerminalPart) {
      partType = type;  ///
    } else {
      const nonTerminalPart = part; ///

      partType = verifyWithNonTerminalPart(childNodes, nonTerminalPart, context, rules);
    }

    if (type === undefined) {
      type = partType;
    }

    if (partType === type) {
      return true;
    }
  });

  if (!verified) {
    type = undefined;
  }

  return type;
}

function verifyWithRuleNamePart(childNodes, ruleNamePart, context, rules) {
  let type = undefined;

  const childNode = childNodes.shift();

  if (childNode !== undefined) {
    const childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      const nonTerminalNode = childNode,  ///
            ruleNamePartRuleName = ruleNamePart.getRuleName(),
            nonTerminalNodeRuleName = nonTerminalNode.getRuleName();

      if (ruleNamePartRuleName === nonTerminalNodeRuleName) {
        const node = nonTerminalNode, ///
              name = ruleNamePartRuleName;  ///

        if (name === 'term') {
          const termNode = node;

          type = verifyTerm(termNode, context, rules);
        } else {
          debugger
        }
      }
    }
  }

  return type;
}

function verifyWithNonTerminalPart(childNodes, nonTerminalPart, context, rules) {
  let type = undefined;

  const nonTerminalPartType = nonTerminalPart.getType();

  switch (nonTerminalPartType) {
    case RuleNamePartType:
      const ruleNamePart = nonTerminalPart;  ///

      type = verifyWithRuleNamePart(childNodes, ruleNamePart, context, rules);
      break;

    default:

      debugger
  }

  return type;
}
