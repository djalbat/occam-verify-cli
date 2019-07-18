'use strict';

const parsers = require('occam-parsers');

const Error = require('../error'),
      Configuration = require('../configuration'),
      ruleUtilities = require('../utilities/rule');

const { partTypes } = parsers,
      { findRuleByName } = ruleUtilities,
      { RuleNamePartType,
        OptionalPartPartType,
        GroupOfPartsPartType,
        ChoiceOfPartsPartType,
        OneOrMorePartsPartType,
        ZeroOrMorePartsPartType } = partTypes;

function verifyTermAsConstructor(termNode, context, rules) {
  const termRule = findRuleByName('term', rules),
        node = termNode,  ///
        rule = termRule,  ///
        verified = verifyWithRule(node, rule, context, rules);

  return verified;
}

module.exports = verifyTermAsConstructor;

function verifyWithRule(node, rule, context, rules) {
  const definitions = rule.getDefinitions(),
        verified = definitions.some((definition) => verifyWithDefinition(node, definition, context, rules));

  return verified;
}

function verifyWithNameRule(node, nameRule, context, rules) {
  let verified = true;  ///

  const childNodes = node.getChildNodes().slice(),  ///
        childNode = childNodes.shift(),
        terminalNode = childNode, ///
        terminalNodeContent = terminalNode.getContent(),
        name =terminalNodeContent,  ///
        typeOrVariablePresent = context.isTypeOrVariablePresentByName(name);

  if (!typeOrVariablePresent) {
    const message = `There is no type or variable with the name '${name}' present.`;

    throw new Error(node, message);
  }

  return verified;
}

function verifyWithDefinition(node, definition, context, rules) {
  const parts = definition.getParts(),
        childNodes = node.getChildNodes().slice(),  ///
        verified = verifyWithParts(childNodes, parts, context, rules);

  return verified;
}

function verifyWithParts(childNodes, parts, context, rules) {
  const verified = parts.every((part) => verifyWithPart(childNodes, part, context, rules));

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
              name = ruleNamePartRuleName,  ///
              rule = findRuleByName(name, rules);

        if (name === 'name') {
          const nameRule = rule,  ///

              verified = verifyWithNameRule(node, nameRule, context, rules);
        } else {
          verified = verifyWithRule(node, rule, context, rules);
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
