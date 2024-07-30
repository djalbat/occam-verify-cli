"use strict";

import NodesVerifier from "../../verifier/nodes";
import TermForVariableSubstitution from "../../substitution/termForVariable";
import StatementForMetavariableSubstitution from "../../substitution/statementForMetavariable";

import { nodeQuery } from "../../utilities/query";
import { STATEMENT_RULE_NAME, METASTATEMENT_RULE_NAME, META_ARGUMENT_RULE_NAME } from "../../ruleNames";

const metavariableNodeQuery = nodeQuery('/metastatement/metavariable!'),
      metaArgumentChildNodeNodeQuery = nodeQuery('/metaArgument/*!');

class MetaLevelToIntrinsicLevelNodesVerifier extends NodesVerifier {
  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, localContext) {
    let nonTerminalNodeVerified = false;

    const nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName(),
          nonTerminalNodeBRuleNameMetaArgumentRuleName = (nonTerminalNodeBRuleName === META_ARGUMENT_RULE_NAME);

    if (nonTerminalNodeBRuleNameMetaArgumentRuleName) {
      const metaArgumentNodeB = nonTerminalNodeB, ///
            metaArgumentChildNodeB = metaArgumentChildNodeNodeQuery(metaArgumentNodeB);

      nonTerminalNodeB = metaArgumentChildNodeB;  ///

      nonTerminalNodeVerified = this.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, localContext);
    } else {
      const nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(),
            nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName(),
            nonTerminalNodeARuleNameMetastatementRuleName = (nonTerminalNodeARuleName === METASTATEMENT_RULE_NAME),
            nonTerminalNodeBRuleNameStatementRuleName = (nonTerminalNodeBRuleName === STATEMENT_RULE_NAME);

      if (nonTerminalNodeARuleNameMetastatementRuleName && nonTerminalNodeBRuleNameStatementRuleName) {
        const metastatementNodeA = nonTerminalNodeA,  ///
              statementNodeB = nonTerminalNodeB,  ///
              statementNodeVerified = this.verifyStatementNode(metastatementNodeA, statementNodeB, substitutions, fileContextA, localContext);

        if (statementNodeVerified) {
          nonTerminalNodeVerified = true;  ///
        } else {
          const nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(),
                nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(),
                childNodesA = nonTerminalNodeAChildNodes, ///
                childNodesB = nonTerminalNodeBChildNodes, ///
                childNodesVerified = this.verifyChildNodes(childNodesA, childNodesB, substitutions, fileContextA, localContext);

          nonTerminalNodeVerified = childNodesVerified;  ///
        }
      } else if (nonTerminalNodeBRuleName === nonTerminalNodeARuleName) {
        nonTerminalNodeVerified = super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, localContext);
      }
    }

    return nonTerminalNodeVerified;
  }

  verifyStatementNode(metastatementNodeA, statementNodeB, substitutions, fileContextA, localContext) {
    let statementNodeVerified = false;

    const metavariableNodeA = metavariableNodeQuery(metastatementNodeA);

    if (metavariableNodeA !== null) {
      const metavariableNodeVerified = this.verifyMetavariableNode(metavariableNodeA, statementNodeB, substitutions, fileContextA, localContext);

      statementNodeVerified = metavariableNodeVerified; ///
    }

    return statementNodeVerified;
  }

  verifyMetavariableNode(metavariableNodeA, statementNodeB, substitutions, fileContextA, localContext) {
    let metavariableNodeVerified;

    const substitution = substitutions.find((substitution) => {
            const substitutionMatchesMetavariableNodeA = substitution.matchMetavariableNode(metavariableNodeA);

            if (substitutionMatchesMetavariableNodeA) {
              return true;
            }
          }) || null;

    if (substitution !== null) {
      const statementNode = statementNodeB, ///
            statementNodeMatches = substitution.matchStatementNode(statementNode);

      metavariableNodeVerified = statementNodeMatches;  ///
    } else {
      const metavariableNode = metavariableNodeA, ///
            statementNode = statementNodeB, ///
            statementForMetavariableSubstitution = StatementForMetavariableSubstitution.fromMetavariableNodeAndStatementNode(metavariableNode, statementNode),
            substitution = statementForMetavariableSubstitution;  ///

      substitutions.push(substitution);

      metavariableNodeVerified = true;
    }

    return metavariableNodeVerified;
  }
}

const metaLevelToIntrinsicLevelNodesVerifier = new MetaLevelToIntrinsicLevelNodesVerifier();

export default metaLevelToIntrinsicLevelNodesVerifier;
