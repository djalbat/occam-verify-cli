'use strict';

const parsers = require('occam-parsers');

const queries = require('../miscellaneous/queries'),
      emptyType = require('../miscellaneous/emptyType'),
      ruleNames = require('../miscellaneous/ruleNames'),
      verifyTerm = require('../verify/term'),
      nodeUtilities = require('../utilities/node'),
      ruleUtilities = require('../utilities/rule'),
      Configuration = require('../miscellaneous/configuration'),
      verifyEquality = require('../verify/equality'),
      verifyExpression = require('../verify/expression');

const { partTypes } = parsers,
      { findRuleByName } = ruleUtilities,
      { cloneChildNodes } = nodeUtilities,
      { equalityNodeQuery } = queries,
      { RuleNamePartType,
        OptionalPartPartType,
        GroupOfPartsPartType,
        ChoiceOfPartsPartType,
        OneOrMorePartsPartType,
        ZeroOrMorePartsPartType } = partTypes,
      { TERM_RULE_NAME, EXPRESSION_RULE_NAME } = ruleNames;

function verifyStatement(statementNode, context, rules) {
  let verified = false;

  const equalityNode = equalityNodeQuery(statementNode);

  if (false) {
    ///
  } else if (equalityNode !== undefined) {
    verified = verifyEquality(equalityNode, context, rules);
  } else {
    const statementRule = findRuleByName('statement', rules),
          node = statementNode, ///
          rule = statementRule; ///

    verified = verifyWithRule(node, rule, context, rules);
  }

  return verified;
}

module.exports = verifyStatement;

function verifyWithRule(node, rule, context, rules) {
  const definitions = rule.getDefinitions(),
        verified = definitions.some((definition) => verifyWithDefinition(node, definition, context, rules));

  return verified;
}

function verifyWithDefinition(node, definition, context, rules) {
  let type = undefined;

  const parts = definition.getParts(),
        childNodes = cloneChildNodes(node);

  parts.every((part) => {
    const partType = verifyWithPart(childNodes, part, context, rules);

    if (partType !== undefined) {
      if (type === undefined) {
        type = partType;  ///

        return true;
      }

      if (partType === emptyType) {
        return true;
      }

      const partTypeEqualToOrSubTypeOfType = partType.isEqualToOrSubTypeOf(type);

      if (partTypeEqualToOrSubTypeOfType) {
        return true;
      }

      const typeSubTypeOfPartType = type.isSubTypeOf(partType);

      if (typeSubTypeOfPartType) {
        type = partType;  ///

        return true;
      }
    }
  });

  return type;
}

function verifyWithPart(childNodes, part, context, rules) {
  let type = undefined;

  const partTerminalPart = part.isTerminalPart();

  if (partTerminalPart) {
    const terminalPart = part;  ///

    type = verifyWithTerminalPart(childNodes, terminalPart, context, rules);
  } else {
    const nonTerminalPart = part; ///

    type = verifyWithNonTerminalPart(childNodes, nonTerminalPart, context, rules);
  }

  return type;
}

function verifyWithTerminalPart(childNodes, terminalPart, context, rules) {
  let type = undefined;

  const childNode = childNodes.shift();

  if (childNode !== undefined) {
    const childNodeTerminalNode = childNode.isTerminalNode();

    if (childNodeTerminalNode) {
      let terminalNode = childNode; ///

      const significantToken = terminalNode.getSignificantToken(),
            configuration = Configuration.fromSignificantToken(significantToken);

      terminalNode = terminalPart.parse(configuration);

      if (terminalNode !== undefined) {
        type = emptyType; ///
      }
    }
  }

  return type;
}

function verifyWithNonTerminalPart(childNodes, nonTerminalPart, context, rules) {
  let type = undefined;

  const nonTerminalPartType = nonTerminalPart.getType();

  switch (nonTerminalPartType) {
    case RuleNamePartType :
      const ruleNamePart = nonTerminalPart;  ///

      type = verifyWithRuleNamePart(childNodes, ruleNamePart, context, rules);
      break;

    default:

      debugger
  }

  return type;
}

function verifyWithRuleNamePart(childNodes, ruleNamePart, context, rules) {
  let type = undefined;

  const childNode = childNodes.shift();

  if (childNode !== undefined) {
    const childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      const ruleName = ruleNamePart.getRuleName(),
            nonTerminalNode = childNode,  ///
            nonTerminalNodeRuleName = nonTerminalNode.getRuleName();

      if (ruleName === nonTerminalNodeRuleName) {
        switch (ruleName) {
          case TERM_RULE_NAME : {
            const termNode = nonTerminalNode;  ///

            type = verifyTerm(termNode, context, rules);

            break;
          }

          case EXPRESSION_RULE_NAME : {
            const expressionNode = nonTerminalNode;  ///

            type = verifyExpression(expressionNode, context, rules);

            break;
          }

          default : {
            const name = ruleName,  ///
                  node = nonTerminalNode, ///
                  rule = findRuleByName(name, rules);

            type = verifyWithRule(node, rule, context, rules);

            break;
          }
        }
      }
    }
  }

  return type;
}
