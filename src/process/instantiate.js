"use strict";

import { ruleFromRuleName } from "../utilities/bnf";
import { TERM_RULE_NAME,
         VARIABLE_RULE_NAME,
         REFERENCE_RULE_NAME,
         STATEMENT_RULE_NAME,
         COMBINATOR_RULE_NAME,
         CONSTRUCTOR_RULE_NAME,
         EQUIVALENCE_RULE_NAME,
         METAVARIABLE_RULE_NAME,
         TERM_SUBSTITUTION_RULE_NAME,
         FRAME_SUBSTITUTION_RULE_NAME,
         STATEMENT_SUBSTITUTION_RULE_NAME,
         REFERENCE_SUBSTITUTION_RULE_NAME } from "../ruleNames";

const termPlaceholderRule = ruleFromRuleName(TERM_RULE_NAME),
      variablePlaceholderRule = ruleFromRuleName(VARIABLE_RULE_NAME),
      referencePlaceholderRule = ruleFromRuleName(REFERENCE_RULE_NAME),
      statementPlaceholderRule = ruleFromRuleName(STATEMENT_RULE_NAME),
      combinatorPlaceholderRule = ruleFromRuleName(COMBINATOR_RULE_NAME),
      constructorPlaceholderRule = ruleFromRuleName(CONSTRUCTOR_RULE_NAME),
      equivalencePlaceholderRule = ruleFromRuleName(EQUIVALENCE_RULE_NAME),
      metavariablePlaceholderRule = ruleFromRuleName(METAVARIABLE_RULE_NAME),
      termSubstitutionPlaceholderRule = ruleFromRuleName(TERM_SUBSTITUTION_RULE_NAME),
      frameSubstitutionPlaceholderRule = ruleFromRuleName(FRAME_SUBSTITUTION_RULE_NAME),
      statementSubstitutionPlaceholderRule = ruleFromRuleName(STATEMENT_SUBSTITUTION_RULE_NAME),
      referenceSubstitutionPlaceholderRule = ruleFromRuleName(REFERENCE_SUBSTITUTION_RULE_NAME);

export function instantiateTerm(string, context) { return instantiate(termPlaceholderRule, string, context); }

export function instantiateVariable(string, context) { return instantiate(variablePlaceholderRule, string, context); }

export function instantiateReference(string, context) { return instantiate(referencePlaceholderRule, string, context); }

export function instantiateStatement(string, context) { return instantiate(statementPlaceholderRule, string, context); }

export function instantiateCombinator(string, context) { return instantiate(combinatorPlaceholderRule, string, context); }

export function instantiateConstructor(string, context) { return instantiate(constructorPlaceholderRule, string, context); }

export function instantiateEquivalence(string, context) { return instantiate(equivalencePlaceholderRule, string, context); }

export function instantiateMetavariable(string, context) { return instantiate(metavariablePlaceholderRule, string, context); }

export function instantiateTermSubstitution(string, context) { return instantiate(termSubstitutionPlaceholderRule, string, context); }

export function instantiateFrameSubstitution(string, context) { return instantiate(frameSubstitutionPlaceholderRule, string, context); }

export function instantiateStatementSubstitution(string, context) { return instantiate(statementSubstitutionPlaceholderRule, string, context); }

export function instantiateReferenceSubstitution(string, context) { return instantiate(referenceSubstitutionPlaceholderRule, string, context); }

function instantiate(placeholderRule, string, context) {
  let node;

  const lexer = context.getLexer(),
        parser = context.getParser(),
        content = `${string}
`,
        tokens = lexer.tokenise(content);

  context.setTokens(tokens);

  const startRule = placeholderRule;  ///

  node = parser.parse(tokens, startRule);

  const nonTerminalNode = node; ///

  nonTerminalNode.someChildNode((childNode) => {
    node = childNode; ///

    return true;
  });

  return node;
}
