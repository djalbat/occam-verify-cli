"use strict";

import { ruleFromBNF } from "../utilities/bnf";

const termSubtitutionnPlaceholderBNF = ` _ ::= termSubstitution... <END_OF_LINE> ; `,
      frameSubtitutionnPlaceholderBNF = ` _ ::= frameSubstitution... <END_OF_LINE> ; `,
      statementSubtitutionnPlaceholderBNF = ` _ ::= statementSubstitution... <END_OF_LINE> ; `,
      referenceSubtitutionnPlaceholderBNF = ` _ ::= referenceSubstitution... <END_OF_LINE> ; `,
      termSubtitutionnPlaceholderRule = ruleFromBNF(termSubtitutionnPlaceholderBNF),
      frameSubtitutionnPlaceholderRule = ruleFromBNF(frameSubtitutionnPlaceholderBNF),
      statementSubtitutionnPlaceholderRule = ruleFromBNF(statementSubtitutionnPlaceholderBNF),
      referenceSubtitutionnPlaceholderRule = ruleFromBNF(referenceSubtitutionnPlaceholderBNF);

export function instantiateTermSubstitution(string, context) { return instantiate(termSubtitutionnPlaceholderRule, string, context); }

export function instantiateFrameSubstitution(string, context) { return instantiate(frameSubtitutionnPlaceholderRule, string, context); }

export function instantiateStatementSubstitution(string, context) { return instantiate(statementSubtitutionnPlaceholderRule, string, context); }

export function instantiateReferenceSubstitution(string, context) { return instantiate(referenceSubtitutionnPlaceholderRule, string, context); }

function instantiate(placeholderRule, string, context) {
  let node;

  const lexer = context.getLexer(),
        parser = context.getParser(),
        content = `${string}
`,
        startRule = placeholderRule, ///
        tokens = lexer.tokenise(content);

  node = parser.parse(tokens, startRule);

  const nonTerminalNode = node; ///

  nonTerminalNode.someChildNode((childNode) => {
    node = childNode; ///

    return true;
  })

  return node;
}
