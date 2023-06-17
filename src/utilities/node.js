"use strict";

import { lexersUtilities, parsersUtilities } from "occam-custom-grammars";

import { nodeQuery } from "../utilities/query";
import { TYPE_RULE_NAME,
         LABEL_RULE_NAME,
         VARIABLE_RULE_NAME,
         META_TYPE_RULE_NAME,
         METAVARIABLE_RULE_NAME,
         UNQUALIFIED_STATEMENT_RULE_NAME,
         CONSTRUCTOR_DECLARATION_RULE_NAME,
         UNQUALIFIED_METASTATEMENT_RULE_NAME } from "../ruleNames";

import { combinedCustomGrammarFromNothing } from "./customGrammar";

const { florenceLexerFromCombinedCustomGrammar } = lexersUtilities,
      { florenceParserFromCombinedCustomGrammar } = parsersUtilities;

const combinedCustomGrammar = combinedCustomGrammarFromNothing(),
      florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar),
      florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar);

const termNodeQuery = nodeQuery("/constructorDeclaration/term!"),
      typeNodeQuery = nodeQuery("/variableDeclaration/type!"),
      variableNodeQuery = nodeQuery("/variableDeclaration/variable!"),
      metaTypeNodeQuery = nodeQuery("/metavariableDeclaration/metaType!"),
      statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!"),
      metavariableNodeQuery = nodeQuery("/metavariableDeclaration/metavariable!"),
      metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement!");

export function termNodeFromTermString(termString, lexer, parser) {
  const ruleName = CONSTRUCTOR_DECLARATION_RULE_NAME,
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

export function typeNodeFromVariableString(variableString, lexer, parser) {
  const ruleName = TYPE_RULE_NAME,
        content = `Variable ${variableString}
`,
        node = nodeFromContentAndRuleName(content, ruleName, lexer, parser),
        typeDeclarationNode = node, ///
        typeNode = typeNodeQuery(typeDeclarationNode);

  return typeNode;
}

export function variableNodeFromVariableString(variableString, lexer, parser) {
  const ruleName = VARIABLE_RULE_NAME,
        content = `Variable ${variableString}
`,
        node = nodeFromContentAndRuleName(content, ruleName, lexer, parser),
        variableDeclarationNode = node, ///
        variableNode = variableNodeQuery(variableDeclarationNode);

  return variableNode;
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

export function metaTypeNodeFromMetavariableString(metavariableString, lexer, parser) {
  const ruleName = META_TYPE_RULE_NAME,
        content = `Metavariable ${metavariableString}
`,
        node = nodeFromContentAndRuleName(content, ruleName, lexer, parser),
        metaTypeDeclarationNode = node, ///
        metaTypeNode = metaTypeNodeQuery(metaTypeDeclarationNode);

  return metaTypeNode;
}

export function metavariableNodeFromMetavariableString(metavariableString, lexer, parser) {
  const ruleName = METAVARIABLE_RULE_NAME,
        content = `Metavariable ${metavariableString}
`,
        node = nodeFromContentAndRuleName(content, ruleName, lexer, parser),
        metavariableDeclarationNode = node, ///
        metavariableNode = metavariableNodeQuery(metavariableDeclarationNode);

  return metavariableNode;
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
        node = parser.parse(tokens, rule);

  return node;
}
