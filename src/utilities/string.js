"use strict";

import { COMMA } from "../constants";
import { nodeQuery } from "../utilities/query";
import { TERM_RULE_NAME,
         LABEL_RULE_NAME,
         UNQUALIFIED_STATEMENT_RULE_NAME,
         INDICATIVE_CONDITIONAL_RULE_NAME,
         UNQUALIFIED_METASTATEMENT_RULE_NAME} from "../ruleNames";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement"),
      metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement");

export function nodeAsString(node) {
  let string = null;

  if (node !== null) {
    const nodeTerminalNode = node.isTerminalNode();

    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            content = terminalNode.getContent();

      string = content; ///
    } else {
      const nonTerminalNode = node, ///
            childNodes = nonTerminalNode.getChildNodes();

      childNodes.forEach((childNode) => {
        const nodeString = nodeAsString(childNode);

        string = (string === null) ?
                   nodeString : ///
                    `${string}${nodeString}`;
      });
    }
  }

  return string;
}

export function nodesAsString(nodes) {
  const string = nodes.reduce((string, node) => {
    const nodeString = nodeAsString(node);

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
  const ruleName = TERM_RULE_NAME,
        content = termString, ///
        node = releaseContext.nodeFromContentAndRuleName(content, ruleName),
        termNode = node;  ///

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

export function unqualifiedStatementNodeFromUnqualifiedStatementString(unqualifiedStatementString, releaseContext) {
  const ruleName = UNQUALIFIED_STATEMENT_RULE_NAME,
        content = unqualifiedStatementString, ///
        node = releaseContext.nodeFromContentAndRuleName(content, ruleName),
        unqualifiedStatementNode = node;  ///

  return unqualifiedStatementNode;
}

export function indicativeConditionalNodeFromIndicativeConditionalString(indicativeConditionalString, releaseContext) {
  const ruleName = INDICATIVE_CONDITIONAL_RULE_NAME,
        content = indicativeConditionalString, ///
        node = releaseContext.nodeFromContentAndRuleName(content, ruleName),
        indicativeConditionalNode = node;  ///

  return indicativeConditionalNode;
}
