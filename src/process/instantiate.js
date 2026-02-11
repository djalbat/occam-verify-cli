"use strict";

import { ruleFromRuleName } from "../utilities/bnf";
import { REFERENCE_RULE_NAME,
         COMBINATOR_RULE_NAME,
         CONSTRUCTOR_RULE_NAME,
         EQUIVALENCE_RULE_NAME,
         TERM_SUBSTITUTION_RULE_NAME,
         FRAME_SUBSTITUTION_RULE_NAME,
         STATEMENT_SUBSTITUTION_RULE_NAME,
         REFERENCE_SUBSTITUTION_RULE_NAME } from "../ruleNames";

const referencePlaceholderRule = ruleFromRuleName(REFERENCE_RULE_NAME),
      combinatorPlaceholderRule = ruleFromRuleName(COMBINATOR_RULE_NAME),
      constructorPlaceholderRule = ruleFromRuleName(CONSTRUCTOR_RULE_NAME),
      equivalencePlaceholderRule = ruleFromRuleName(EQUIVALENCE_RULE_NAME),
      termSubstitutionPlaceholderRule = ruleFromRuleName(TERM_SUBSTITUTION_RULE_NAME),
      frameSubstitutionPlaceholderRule = ruleFromRuleName(FRAME_SUBSTITUTION_RULE_NAME),
      statementSubstitutionPlaceholderRule = ruleFromRuleName(STATEMENT_SUBSTITUTION_RULE_NAME),
      referenceSubstitutionPlaceholderRule = ruleFromRuleName(REFERENCE_SUBSTITUTION_RULE_NAME);

export function instantiateReference(string, context) { return instantiate(referencePlaceholderRule, string, context); }

export function instantiateCombinator(string, context) { return instantiate(combinatorPlaceholderRule, string, context); }

export function instantiateConstructor(string, context) { return instantiate(constructorPlaceholderRule, string, context); }

export function instantiateEquivalence(string, context) { return instantiate(equivalencePlaceholderRule, string, context); }

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
