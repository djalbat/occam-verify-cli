'use strict';

const parsers = require('occam-parsers');

const queries = require('../../queries'),
      Configuration = require('../../configuration'),
      ruleUtilities = require('../../utilities/rule');

const { partTypes } = parsers,
      { termNodeQuery } = queries,
      { findRuleByName } = ruleUtilities,
      { RuleNamePartType,
        OptionalPartPartType,
        GroupOfPartsPartType,
        ChoiceOfPartsPartType,
        OneOrMorePartsPartType,
        ZeroOrMorePartsPartType } = partTypes;

function verifyConstructorDeclaration(constructorDeclarationNode, context, rules) {
  const termNode = termNodeQuery(constructorDeclarationNode),
        termRule = findRuleByName('term', rules),
        rule = termRule,
        node = termNode,  ///
        verified = verifyRule(rule, node, context, rules);

  debugger
}

module.exports = verifyConstructorDeclaration;

function verifyRule(rule, node, context, rules) {
  const definitions = rule.getDefinitions(),
        verified = definitions.some((definition) => verifyDefinition(definition, node, context, rules));

  return verified;
}

function verifyDefinition(definition, node, context, rules) {
  const parts = definition.getParts(),
        childNodes = node.getChildNodes().slice(),  ///
        verified = verifyParts(parts, childNodes, context, rules);

  return verified;
}

function verifyParts(parts, childNodes, context, rules) {
  const verified = parts.every((part) => verifyPart(part, childNodes, context, rules));

  return verified;
}

function verifyPart(part, childNodes, context, rules) {
  let verified;

  const partTerminalPart = part.isTerminalPart();

  if (partTerminalPart) {
    const terminalPart = part;  ///

    verified = verifyTerminalPart(terminalPart, childNodes, context, rules);
  } else {
    const nonTerminalPart = part; ///

    verified = verifyNonTerminalPart(nonTerminalPart, childNodes, context, rules);
  }

  return verified;
}

function verifyTerminalPart(terminalPart, childNodes, context, rules) {
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

function verifyNonTerminalPart(nonTerminalPart, childNodes, context, rules) {
  let verified = false;

  const nonTerminalPartType = nonTerminalPart.getType();

  switch (nonTerminalPartType) {
    case RuleNamePartType:
      const ruleNamePart = nonTerminalPart;  ///

      verified = verifyRuleNamePart(ruleNamePart, childNodes, context, rules);
      break;

    case OptionalPartPartType:
      const optionalPart = nonTerminalPart; ///

      verified = verifyOptionalPart(optionalPart, childNodes, context, rules);
      break;

    default:

      debugger
  }

  return verified;
}

function verifyRuleNamePart(ruleNamePart, childNodes, context, rules) {
  let verified = false;

  const childNode = childNodes.shift();

  if (childNode !== undefined) {
    const childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      const nonTerminalNode = childNode,  ///
            ruleNamePartRuleName = ruleNamePart.getRuleName(),
            nonTerminalNodeRuleName = nonTerminalNode.getRuleName();

      if (ruleNamePartRuleName === nonTerminalNodeRuleName) {
        const name = ruleNamePartRuleName,  ///
              rule = findRuleByName(name, rules),
              node = nonTerminalNode; ///

        verified = verifyRule(rule, node, context, rules);
      }
    }
  }

  return verified;
}

function verifyOptionalPart(optionalPart, childNodes, context, rules) {
  let verified = true;  ///

  const part = optionalPart.getPart();

  verifyPart(part, childNodes, context, rules);

  return verified;
}
