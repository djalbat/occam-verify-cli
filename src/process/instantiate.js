"use strict";

import { ruleFromBNF } from "../utilities/bnf";

const termPlaceholderBNF = ` _ ::= term... <END_OF_LINE> ; `,
      variablePlaceholderBNF = ` _ ::= variable... <END_OF_LINE> ; `,
      referencePlaceholderBNF = ` _ ::= reference... <END_OF_LINE> ; `,
      statementPlaceholderBNF = ` _ ::= statement... <END_OF_LINE> ; `,
      equivalencePlaceholderBNF = ` _ ::= equivalence... <END_OF_LINE> ; `,
      metavariablePlaceholderBNF = ` _ ::= metavariable... <END_OF_LINE> ; `,
      termSubstitutionPlaceholderBNF = ` _ ::= termSubstitution... <END_OF_LINE> ; `,
      frameSubstitutionPlaceholderBNF = ` _ ::= frameSubstitution... <END_OF_LINE> ; `,
      statementSubstitutionPlaceholderBNF = ` _ ::= statementSubstitution... <END_OF_LINE> ; `,
      referenceSubstitutionPlaceholderBNF = ` _ ::= referenceSubstitution... <END_OF_LINE> ; `,
      termPlaceholderRule = ruleFromBNF(termPlaceholderBNF),
      variablePlaceholderRule = ruleFromBNF(variablePlaceholderBNF),
      referencePlaceholderRule = ruleFromBNF(referencePlaceholderBNF),
      statementPlaceholderRule = ruleFromBNF(statementPlaceholderBNF),
      equivalencePlaceholderRule = ruleFromBNF(equivalencePlaceholderBNF),
      metavariablePlaceholderRule = ruleFromBNF(metavariablePlaceholderBNF),
      termSubstitutionPlaceholderRule = ruleFromBNF(termSubstitutionPlaceholderBNF),
      frameSubstitutionPlaceholderRule = ruleFromBNF(frameSubstitutionPlaceholderBNF),
      statementSubstitutionPlaceholderRule = ruleFromBNF(statementSubstitutionPlaceholderBNF),
      referenceSubstitutionPlaceholderRule = ruleFromBNF(referenceSubstitutionPlaceholderBNF);

export function instantiateTerm(string, context) { return instantiate(termPlaceholderRule, string, context); }

export function instantiateVariable(string, context) { return instantiate(variablePlaceholderRule, string, context); }

export function instantiateReference(string, context) { return instantiate(referencePlaceholderRule, string, context); }

export function instantiateStatement(string, context) { return instantiate(statementPlaceholderRule, string, context); }

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
        tokens = lexer.tokenise(content),
        startRule = placeholderRule;  ///

  node = parser.parse(tokens, startRule);

  const nonTerminalNode = node; ///

  nonTerminalNode.someChildNode((childNode) => {
    node = childNode; ///

    return true;
  });

  return node;
}
