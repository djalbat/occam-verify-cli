"use strict";

import LocalContext from "../../context/local";
import NodesVerifier from "../../verifier/nodes";
import intrinsicLevelNodesVerifierMixins from "../../mixins/nodesVerifier/intrinsiclevel";
import StatementForMetavariableSubstitution from "../../substitution/statementForMetavariable";

import { nodeQuery } from "../../utilities/query";
import { TERM_RULE_NAME, STATEMENT_RULE_NAME, METASTATEMENT_RULE_NAME, META_ARGUMENT_RULE_NAME } from "../../ruleNames";

const termNodeQuery = nodeQuery("/substitution/term!"),
      variableNodeQuery = nodeQuery("/*/variable!"),
      statementNodeQuery = nodeQuery("/metaArgument/statement"),
      metavariableNodeQuery = nodeQuery("/metastatement/metavariable!"),
      substitutionNodeQuery = nodeQuery("/metastatement/substitution!");

class MetaLevelToIntrinsicLevelNodesVerifier extends NodesVerifier {
  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, localContextB, verifyAhead) {
    let nonTerminalNodeVerified;

    const nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName();

    switch (nonTerminalNodeARuleName) {
      case METASTATEMENT_RULE_NAME: {
        const metastatementNodeA = nonTerminalNodeA, ///
              metaArgumentNodeVerified = this.verifyMetastatementNode(metastatementNodeA, nonTerminalNodeB, substitutions, fileContextA, localContextB, verifyAhead);

        nonTerminalNodeVerified = metaArgumentNodeVerified; ///

        break;
      }

      case TERM_RULE_NAME: {
        const termNodeA = nonTerminalNodeA, ///
              localContextA = LocalContext.fromFileContext(fileContextA),
              termNodeVerified = this.verifyTermNode(termNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead);

        nonTerminalNodeVerified = termNodeVerified; ///

        break;
      }

      default: {
        nonTerminalNodeVerified = super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, localContextB, verifyAhead);
      }
    }

    return nonTerminalNodeVerified;
  }

  verifyMetastatementNode(metastatementNodeA, nonTerminalNodeB, substitutions, fileContextA, localContextB, verifyAhead) {
    let metastatementNodeVerified;

    const nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName();

    switch (nonTerminalNodeBRuleName) {
      case META_ARGUMENT_RULE_NAME: {
        const metaArgumentNodeB = nonTerminalNodeB, ///
              metaArgumentNodeVerified = this.verifyMetaArgumentNode(metastatementNodeA, metaArgumentNodeB, substitutions, fileContextA, localContextB, verifyAhead);

        metastatementNodeVerified = metaArgumentNodeVerified; ///

        break;
      }

      case STATEMENT_RULE_NAME: {
        const statementNodeB = nonTerminalNodeB,  ///
              statementNodeVerified = this.verifyStatementNode(metastatementNodeA, statementNodeB, substitutions, fileContextA, localContextB, verifyAhead);

        metastatementNodeVerified = statementNodeVerified;  ///

        break;
      }
    }

    return metastatementNodeVerified;
  }

  verifyMetaArgumentNode(metastatementNodeA, metaArgumentNodeB, substitutions, fileContextA, localContextB, verifyAhead) {
    let metaArgumentNodeVerified = false;

    const statementNodeB = statementNodeQuery(metaArgumentNodeB),
          metavariableNodeA = metavariableNodeQuery(metastatementNodeA);

    if ((metavariableNodeA !== null) && (statementNodeB !== null)) {
      const substitutionNode = substitutionNodeQuery(metastatementNodeA);

      if (substitutionNode !== null) {
        const variableNode = variableNodeQuery(substitutionNode),
              variable = fileContextA.findVariableByVariableNode(variableNode);

        if (variable !== null) {
          const termNode = termNodeQuery(substitutionNode);

          debugger


        }
      } else {
        const metavariableNodeVerified = this.verifyMetavariableNode(metavariableNodeA, statementNodeB, substitutions, fileContextA, localContextB, verifyAhead);

        metaArgumentNodeVerified = metavariableNodeVerified;  ///
      }
    }

    return metaArgumentNodeVerified;
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

  verifyStatementNode(metastatementNodeA, statementNodeB, substitutions, fileContextA, localContextB, verifyAhead) {
    let statementNodeVerified;

    const metavariableNodeA = metavariableNodeQuery(metastatementNodeA);

    if (metavariableNodeA !== null) {
      const metavariableNodeVerified = this.verifyMetavariableNode(metavariableNodeA, statementNodeB, substitutions, fileContextA, localContextB, verifyAhead);

      statementNodeVerified = metavariableNodeVerified;  ///
    } else {
      const nonTerminalNodeA = metastatementNodeA,  ///
            nonTerminalNodeB = statementNodeB,  ///
            nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(),
            nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(),
            childNodesA = nonTerminalNodeAChildNodes, ///
            childNodesB = nonTerminalNodeBChildNodes, ///
            childNodesVerified = super.verifyChildNodes(childNodesA, childNodesB, substitutions, fileContextA, localContextB, verifyAhead);

      statementNodeVerified = childNodesVerified;  ///
    }

    return statementNodeVerified;
  }

  verifyTermNode(termNodeA, nonTerminalNodeB, substitutions, fileContextA, localContextB, verifyAhead) {
    let termNodeVerified = false;

    const nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName();

    switch (nonTerminalNodeBRuleName) {
      case TERM_RULE_NAME: {
        const variableNodeA = variableNodeQuery(termNodeA);

        if (variableNodeA !== null) {
          const termNodeB = nonTerminalNodeB, ///
                localContextA = LocalContext.fromFileContext(fileContextA),
                variableNodeVerified = this.verifyVariableNode(variableNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead);

          termNodeVerified = variableNodeVerified; ///
        } else {
          const nonTerminalNodeA = termNodeA, ///
                nonTerminalNodeB = termNodeB, ///
                nonTerminalNodeVerified = super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, localContextB, verifyAhead);

          termNodeVerified = nonTerminalNodeVerified; ///
        }
      }
    }

    return termNodeVerified;
  }
}

Object.assign(MetaLevelToIntrinsicLevelNodesVerifier.prototype, intrinsicLevelNodesVerifierMixins);

const metaLevelToIntrinsicLevelNodesVerifier = new MetaLevelToIntrinsicLevelNodesVerifier();

export default metaLevelToIntrinsicLevelNodesVerifier;