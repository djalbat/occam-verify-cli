"use strict";

import NodesVerifier from "../../verifier/nodes";
import TermForVariableSubstitution from "../../substitution/termForVariable";
import StatementForMetavariableSubstitution from "../../substitution/statementForMetavariable";

import { nodeQuery } from "../../utilities/query";
import { STATEMENT_RULE_NAME, METASTATEMENT_RULE_NAME, META_ARGUMENT_RULE_NAME } from "../../ruleNames";

const metavariableNodeQuery = nodeQuery('/metastatement/metavariable!'),
      metaArgumentChildNodeNodeQuery = nodeQuery('/metaArgument/*!');

class MetaLevelToIntrinsicLevelNodesVerifier extends NodesVerifier {
  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, localContextB, verifyAhead) {
    let nonTerminalNodeVerified = false;

    const nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName();

    switch (nonTerminalNodeBRuleName) {
      case META_ARGUMENT_RULE_NAME: {
        const metaArgumentNodeB = nonTerminalNodeB, ///
              metaArgumentVerified = this.verifyMetaArgumentNode(nonTerminalNodeA, metaArgumentNodeB, substitutions, fileContextA, localContextB, verifyAhead);

        nonTerminalNodeVerified = metaArgumentVerified; ///

        break;
      }

      case STATEMENT_RULE_NAME: {
        const statementNodeB = nonTerminalNodeB,  ///
              statementNodeVerified = this.verifyStatementNode(nonTerminalNodeA, statementNodeB, substitutions, fileContextA, localContextB, verifyAhead);

        nonTerminalNodeVerified = statementNodeVerified;  ///

        break;
      }

      default: {
        nonTerminalNodeVerified = super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, localContextB, verifyAhead);

        break;
      }
    }

    return nonTerminalNodeVerified;
  }

  verifyMetastatementNode(metastatementNodeA, statementNodeB, substitutions, fileContextA, localContextB, verifyAhead) {
    let metastatementNodeVerified = false;

    const metavariableNodeA = metavariableNodeQuery(metastatementNodeA);

    if (metavariableNodeA !== null) {
      const metavariableNodeVerified = this.verifyMetavariableNode(metavariableNodeA, statementNodeB, substitutions, fileContextA, localContextB, verifyAhead);

      metastatementNodeVerified = metavariableNodeVerified; ///
    }

    return metastatementNodeVerified;
  }

  verifyMetavariableNode(metavariableNodeA, statementNodeB, substitutions, fileContextA, localContextB, verifyAhead) {
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

  verifyMetaArgumentNode(nonTerminalNodeA, metaArgumentNodeB, substitutions, fileContextA, localContextB, verifyAhead) {
    const metaArgumentChildNodeB = metaArgumentChildNodeNodeQuery(metaArgumentNodeB),
          nonTerminalNodeB = metaArgumentChildNodeB,  ///
          nonTerminalNodeVerified = this.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, localContextB, verifyAhead),
          metaArgumentVerified = nonTerminalNodeVerified; ///

    return metaArgumentVerified;
  }

  verifyStatementNode(nonTerminalNodeA, statementNodeB, substitutions, fileContextA, localContextB, verifyAhead) {
    let statementNodeVerified = false;

    const nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName();

    switch (nonTerminalNodeARuleName) {
      case METASTATEMENT_RULE_NAME: {
        const metastatementNodeA = nonTerminalNodeA,  ///
              metastatementNodeVerified = this.verifyMetastatementNode(metastatementNodeA, statementNodeB, substitutions, fileContextA, localContextB, verifyAhead);

        if (metastatementNodeVerified) {
          statementNodeVerified = true;  ///
        } else {
          const nonTerminalNodeB = statementNodeB,  ///
                nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(),
                nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(),
                childNodesA = nonTerminalNodeAChildNodes, ///
                childNodesB = nonTerminalNodeBChildNodes, ///
                childNodesVerified = super.verifyChildNodes(childNodesA, childNodesB, substitutions, fileContextA, localContextB, verifyAhead);

          statementNodeVerified = childNodesVerified;  ///
        }

        break;
      }
    }

    return statementNodeVerified;
  }
}

const metaLevelToIntrinsicLevelNodesVerifier = new MetaLevelToIntrinsicLevelNodesVerifier();

export default metaLevelToIntrinsicLevelNodesVerifier;
