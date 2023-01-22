"use strict";

import { nodeQuery } from "../utilities/query";
import { COMMA, EMPTY_STRING } from "../constants";
import { LABEL_RULE_NAME, UNQUALIFIED_STATEMENT_RULE_NAME, CONSTRUCTOR_DECLARATIONRULE_NAME, UNQUALIFIED_METASTATEMENT_RULE_NAME } from "../ruleNames";

const termNodeQuery = nodeQuery("/constructorDeclaration/term!"),
      statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!"),
      metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement!");

export function nodeAsString(node, tokens) {
  let string = null;

  if (node !== null) {
    const nodeTerminalNode = node.isTerminalNode();

    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            content = terminalNode.getContent();

      string = content; ///
    } else {
      const nonTerminalNode = node, ///
            firstSignificantToken = nonTerminalNode.getFirstSignificantToken(),
            lastSignificantToken = nonTerminalNode.getLastSignificantToken(),
            firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken),
            lastSignificantTokenIndex = tokens.indexOf(lastSignificantToken),
            start = firstSignificantTokenIndex, ///
            end = lastSignificantTokenIndex + 1;

      tokens = tokens.slice(start, end);  ///

      string = tokens.reduce((string, token) => {
        const content = token.getContent();

        string = `${string}${content}`;

        return string;
      }, EMPTY_STRING);
    }
  }

  if (string !== null) {
    string = string.replace(/[\r\n]/, EMPTY_STRING)
  }

  return string;
}

export function nodesAsString(nodes, tokens) {
  const string = nodes.reduce((string, node) => {
    const nodeString = nodeAsString(node, tokens);

    if (string === null) {
      string = nodeString;  ///
    } else {
      string = `${string}${COMMA}${nodeString}`;
    }

    return string;
  }, null);

  return string;
}

export function termNodeFromTermString(termString, releaseContext) {
  const ruleName = CONSTRUCTOR_DECLARATIONRULE_NAME,
        content = `Constructor ${termString}
`,
        node = releaseContext.nodeFromContentAndRuleName(content, ruleName),
        constructorDeclarationNode = node, ///
        termNode = termNodeQuery(constructorDeclarationNode);

  return termNode;
}

export function labelNodeFromLabelString(labelString, releaseContext) {
  const content = labelString, ///
        ruleName = LABEL_RULE_NAME,
        node = releaseContext.nodeFromContentAndRuleName(content, ruleName),
        labelNode = node; ///

  return labelNode;
}

export function statementNodeFromStatementString(statementString, releaseContext) {
  const ruleName = UNQUALIFIED_STATEMENT_RULE_NAME,
        content = `${statementString}
`,
        node = releaseContext.nodeFromContentAndRuleName(content, ruleName),
        unqualifiedStatementNode = node,  ///
        statementNode = statementNodeQuery(unqualifiedStatementNode);

  return statementNode;
}

export function metastatementNodeFromMetastatementString(metastatementString, releaseContext) {
  const ruleName = UNQUALIFIED_METASTATEMENT_RULE_NAME,
        content = `${metastatementString}
`,
        node = releaseContext.nodeFromContentAndRuleName(content, ruleName),
        unqualifiedMetastatementNode = node,  ///
        metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode);

  return metastatementNode;
}
