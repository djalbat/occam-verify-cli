"use strict";

import { nodeQuery } from "../utilities/query";
import { TERM_RULE_NAME,
         LABEL_RULE_NAME,
         UNQUALIFIED_STATEMENT_RULE_NAME,
         UNQUALIFIED_METASTATEMENT_RULE_NAME } from "../ruleNames";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement"),
      metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement");

export function termNodeFromTermJSON(termJSON, releaseContext) {
  const ruleName = TERM_RULE_NAME,
        content = termJSON, ///
        node = releaseContext.nodeFromContentAndRuleName(content, ruleName),
        termNode = node;  ///

  return termNode;
}

export function labelNodeFromLabelJSON(labelJSON, releaseContext) {
  const content = labelJSON, ///
        ruleName = LABEL_RULE_NAME,
        node = releaseContext.nodeFromContentAndRuleName(content, ruleName),
        labelNode = node; ///

  return labelNode;
}

export function statementNodeFromStatementJSON(statementJSON, releaseContext) {
  const ruleName = UNQUALIFIED_STATEMENT_RULE_NAME,
        content = `${statementJSON}
`,
        node = releaseContext.nodeFromContentAndRuleName(content, ruleName),
        unqualifiedStatementNode = node,  ///
        statementNode = statementNodeQuery(unqualifiedStatementNode);

  return statementNode;
}

export function metastatementNodeFromMetastatementJSON(metastatementJSON, releaseContext) {
  const ruleName = UNQUALIFIED_METASTATEMENT_RULE_NAME,
        content = `${metastatementJSON}
`,
        node = releaseContext.nodeFromContentAndRuleName(content, ruleName),
        unqualifiedMetastatementNode = node,  ///
        metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode);

  return metastatementNode;
}
