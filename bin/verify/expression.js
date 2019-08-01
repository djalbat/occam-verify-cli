'use strict';

const parsers = require('occam-parsers');

const Error = require('../error'),
      emptyType = require('../miscellaneous/emptyType'),
      ruleNames = require('../miscellaneous/ruleNames'),
      ChildNodes = require('../miscellaneous/childNodes'),
			verifyTerm = require('../verify/term'),
      nodeUtilities = require('../utilities/node'),
      ruleUtilities = require('../utilities/rule'),
      Configuration = require('../miscellaneous/configuration');

const { partTypes } = parsers,
      { findRuleByName } = ruleUtilities,
      { RuleNamePartType,
        OptionalPartPartType,
        GroupOfPartsPartType,
        ChoiceOfPartsPartType,
        OneOrMorePartsPartType,
        ZeroOrMorePartsPartType } = partTypes,
			{ nodeAsString, cloneChildNodes } = nodeUtilities,
			{ TERM_RULE_NAME, EXPRESSION_RULE_NAME } = ruleNames;

function verifyExpression(expressionNode, context, rules) {
  Object.assign(context, { verifyExpression }); ///

  const expressionRule = findRuleByName('expression', rules),
        node = expressionNode,  ///
        rule = expressionRule,  ///
        type = verifyWithRule(node, rule, context, rules);

  if (type === undefined) {
    const node = expressionNode,  ///
          expressionString = nodeAsString(expressionNode),
          message = `The expression '${expressionString}' cannot be verified.`;

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

    case OptionalPartPartType:
      const optionalPartPart = nonTerminalPart; ///

      type = verifyWithOptionalPartPart(childNodes, optionalPartPart, context, rules);
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

function verifyWithOptionalPartPart(childNodes, optionalPartPart, context, rules) {
  const part = optionalPartPart.getPart();

  childNodes = ChildNodes.fromChildNodes(childNodes); ///

  let type = verifyWithPart(childNodes, part, context, rules);

  if (type === undefined) {
    childNodes.backtrack();

    type = emptyType; ///
  }

  return type;
}
