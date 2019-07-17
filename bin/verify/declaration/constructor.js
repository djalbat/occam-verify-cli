'use strict';

const parsers = require('occam-parsers');

const queries = require('../../queries'),
      Constructor = require('../../constructor'),
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
        node = termNode,  ///
        constructor = Constructor.fromTermNode(termNode),
        verified = verifyWithTermRule(node, termRule, constructor, context, rules);

  if (verified) {
    context.addConstructor(constructor);
  }
}

module.exports = verifyConstructorDeclaration;

function verifyWithTermRule(node, termRule, constructor, context, rules) {
  const rule = termRule,  ///
        definitions = rule.getDefinitions(),
        verified = definitions.some((definition) => verifyWithDefinition(node, definition, constructor, context, rules));

  return verified;
}

function verifyRule(rule, node, constructor, context, rules) {
  const definitions = rule.getDefinitions(),
        verified = definitions.some((definition) => verifyWithDefinition(node, definition, constructor, context, rules));

  return verified;
}

function verifyWithDefinition(node, definition, constructor, context, rules) {
  const parts = definition.getParts(),
        childNodes = node.getChildNodes().slice(),  ///
        verified = verifyWithParts(childNodes, parts, constructor, context, rules);

  return verified;
}

function verifyWithParts(childNodes, parts, constructor, context, rules) {
  const verified = parts.every((part) => verifyWithPart(childNodes, part, constructor, context, rules));

  return verified;
}

function verifyWithPart(childNodes, part, constructor, context, rules) {
  let verified;

  const partTerminalPart = part.isTerminalPart();

  if (partTerminalPart) {
    const terminalPart = part;  ///

    verified = verifyWithTerminalPart(childNodes, terminalPart, constructor, context, rules);
  } else {
    const nonTerminalPart = part; ///

    verified = verifyWithNonTerminalPart(childNodes, nonTerminalPart, constructor, context, rules);
  }

  return verified;
}

function verifyWithTerminalPart(childNodes, terminalPart, constructor, context, rules) {
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

function verifyWithNonTerminalPart(childNodes, nonTerminalPart, constructor, context, rules) {
  let verified = false;

  const nonTerminalPartType = nonTerminalPart.getType();

  switch (nonTerminalPartType) {
    case RuleNamePartType:
      const ruleNamePart = nonTerminalPart;  ///

      verified = verifyWithRuleNamePart(childNodes, ruleNamePart, constructor, context, rules);
      break;

    case OptionalPartPartType:
      const optionalPart = nonTerminalPart; ///

      verified = verifyWithOptionalPart(childNodes, optionalPart, constructor, context, rules);
      break;

    default:

      debugger
  }

  return verified;
}

function verifyWithRuleNamePart(childNodes, ruleNamePart, constructor, context, rules) {
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

        if (name === 'term') {
          const termRule = rule,  ///

          verified = verifyWithTermRule(node, termRule, constructor, context, rules);
        } else {
          verified = verifyRule(rule, node, constructor, context, rules);
        }
      }
    }
  }

  return verified;
}

function verifyWithOptionalPart(childNodes, optionalPart, constructor, context, rules) {
  let verified = true;  ///

  const part = optionalPart.getPart();

  verifyWithPart(childNodes, part, constructor, context, rules);

  return verified;
}
