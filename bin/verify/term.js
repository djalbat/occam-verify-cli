'use strict';

const Error = require('../error'),
      queries = require('../queries'),
      ruleUtilities = require('../utilities/rule');

const { findRuleByName } = ruleUtilities,
      { nameNodeQuery, termNodesQuery, parenthesisedTermsNodeQuery } = queries;

function verifyTerm(termNode, context, rules) {
  let term = undefined;

  const termRule = findRuleByName('term', rules),
        rule = termRule;  ///

  verifyTermByRule(termNode, rule, context, rules);

  debugger

  // const nameNode = nameNodeQuery(termNode),
  //       nameNodeContent = nameNode.getContent(),
  //       name = nameNodeContent, ///
  //       parenthesisedTermsNode = parenthesisedTermsNodeQuery(termNode);
  //
  // if (parenthesisedTermsNode === undefined) {
  //   const variable = context.retrieveVariableByName(name);
  //
  //   if (variable !== undefined) {
  //     term = variable;  ///
  //   } else {
  //     const typeNames = undefined,
  //           constructor = context.retrieveConstructorByNameAndTypeNames(name, typeNames),
  //           constructorPresent = (constructor !== undefined);
  //
  //     if (constructorPresent) {
  //       const typeName = constructor.getTypeName(),
  //             compoundTerm = CompoundTerm.fromNameAndTypeName(name, typeName);
  //
  //       term = compoundTerm;  ///
  //     }
  //   }
  // } else {
  //   const termNodes = termNodesQuery(parenthesisedTermsNode),
  //         terms = termNodes.map((termNode) => verifyTerm(termNode, context, rules)),
  //         typeNames = terms.map((term) => term.getTypeName()),
  //         constructor = context.retrieveConstructorByNameAndTypeNames(name, typeNames),
  //         constructorPresent = (constructor !== undefined);
  //
  //   if (constructorPresent) {
  //     const typeName = constructor.getTypeName(),
  //           compoundTerm = CompoundTerm.fromNameTermsAndTypeName(name, terms, typeName);
  //
  //     term = compoundTerm;  ///
  //   }
  // }
  //
  // if (term === undefined) {
  //   const node = termNode, ///
  //         message = `The term '${name}' cannot be verified.`;
  //
  //   throw new Error(node, message);
  // }

  return term;
}

module.exports = verifyTerm;

function verifyTermByRule(termNode, rule, context, rules) {
  let term = undefined;

  const definitions = rule.getDefinitions();

  definitions.some((definition) => {
    term = verifyTermByDefinition(termNode, definition, context ,rules);

    if (term !== undefined) {
      return true;
    }
  });

  return term;
}

function verifyTermByDefinition(termNode, definition, context, rules) {
  let term = undefined;

  const parts = definition.getParts(),
        childNodes = termNode.getChildNodes().slice();  ///

  parts.every((part) => {
    verifyTermByPart(termNode, part, context, rules);
  });

  return term;
}

function verifyTermByPart(termNode, part, context, rules) {
  let term = undefined;

  const partType = part.getType();

  switch (partType) {
    case RuleNamePartType :
      const ruleNamePart = part;  ///

      term = verifyTermByRuleNamePart(termNode, ruleNamePart, context, rules);

      break;
  }

  return term;
}

function verifyTermByRuleNamePart(termNode, ruleNamePart, context, rules) {
  const ruleName = ruleNamePart.getRuleName(),
        name = ruleName,  ///
        rule = findRuleByName(name, rules);

  if (rule === undefined) {
    const node = termNode, ///
          message = `The term '${name}' cannot be verified because the '${ruleName}' is missing.`;

    throw new Error(node, message);
  }

  const term = verifyTermByRule(termNode, ruleNamePart, context, rules);

  return term;
}
