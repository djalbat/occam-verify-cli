"use strict";

import { rewriteNodes } from "occam-grammar-utilities";
import { lexersUtilities, parsersUtilities } from "occam-custom-grammars";

import { nodeQuery } from "../utilities/query";
import { LABEL_RULE_NAME, UNQUALIFIED_STATEMENT_RULE_NAME, UNQUALIFIED_METASTATEMENT_RULE_NAME, CONSTRUCTOR_DECLARATIONRULE_NAME } from "../ruleNames";

import { combinedCustomGrammarFromNothing } from "./customGrammar";

const { florenceLexerFromCombinedCustomGrammar } = lexersUtilities,
      { florenceParserFromCombinedCustomGrammar } = parsersUtilities;

const combinedCustomGrammar = combinedCustomGrammarFromNothing(),
      florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar),
      florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar);

const termNodeQuery = nodeQuery("/constructorDeclaration/term!"),
      statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!"),
      metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement!");

export function termNodeFromTermString(termString, lexer, parser) {
  const ruleName = CONSTRUCTOR_DECLARATIONRULE_NAME,
        content = `Constructor ${termString}
`,
        node = nodeFromContentAndRuleName(content, ruleName, lexer, parser),
        constructorDeclarationNode = node, ///
        termNode = termNodeQuery(constructorDeclarationNode);

  return termNode;
}

export function labelNodeFromLabelString(labelString, lexer, parser) {
  const content = labelString, ///
        ruleName = LABEL_RULE_NAME,
        node = nodeFromContentAndRuleName(content, ruleName, lexer, parser),
        labelNode = node; ///

  return labelNode;
}

export function statementNodeFromStatementString(statementString, lexer, parser) {
  const ruleName = UNQUALIFIED_STATEMENT_RULE_NAME,
        content = `${statementString}
`,
        node = nodeFromContentAndRuleName(content, ruleName, lexer, parser),
        unqualifiedStatementNode = node,  ///
        statementNode = statementNodeQuery(unqualifiedStatementNode);

  return statementNode;
}

export function metastatementNodeFromMetastatementString(metastatementString, lexer, parser) {
  const ruleName = UNQUALIFIED_METASTATEMENT_RULE_NAME,
        content = `${metastatementString}
`,
        node = nodeFromContentAndRuleName(content, ruleName, lexer, parser),
        unqualifiedMetastatementNode = node,  ///
        metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode);

  return metastatementNode;
}

function nodeFromContentAndRuleName(content, ruleName, lexer = florenceLexer, parser = florenceParser) {
  const ruleMap = parser.getRuleMap(),
        rule = ruleMap[ruleName],
        tokens = lexer.tokenise(content),
        node = parser.parse(tokens, rule),
        nonTerminalNode = node; ///

  rewriteNodes(nonTerminalNode);

  return node;
}
