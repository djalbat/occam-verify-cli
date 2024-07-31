"use strict";

import NodesVerifier from "../../verifier/nodes";
import intrinsicLevelNodesVerifierMixins from "../../mixins/nodesVerifier/intrinsiclevel";

import { nodeQuery } from "../../utilities/query";
import { TERM_RULE_NAME } from "../../ruleNames";

const variableNodeQuery = nodeQuery("/term/variable!");

class IntrinsicLevelNodesVerifier extends NodesVerifier {
  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead) {
    let nonTerminalNodeVerified = false;

    const nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(),
          nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName();

    if (nonTerminalNodeARuleName === nonTerminalNodeBRuleName) {
      const ruleName = nonTerminalNodeARuleName;  ///

      switch (ruleName) {
        case TERM_RULE_NAME: {
          const termNodeA = nonTerminalNodeA,  ///
                termNodeB = nonTerminalNodeB,  ///
                termNodeVerified = this.verifyTermNode(termNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead);

          nonTerminalNodeVerified = termNodeVerified;  ///

          break;
        }

        default: {
          nonTerminalNodeVerified = super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead);

          break;
        }
      }
    }

    return nonTerminalNodeVerified;
  }

  verifyTermNode(termNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead) {
    let termNodeVerified;

    const variableNodeA = variableNodeQuery(termNodeA);

    if (variableNodeA !== null) {
      const variableNodeVerified = this.verifyVariableNode(variableNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead);

      termNodeVerified = variableNodeVerified; ///
    } else {
      const nonTerminalNodeA = termNodeA, ///
            nonTerminalNodeB = termNodeB, ///
            nonTerminalNodeVerified = super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead);

      termNodeVerified = nonTerminalNodeVerified; ///
    }

    return termNodeVerified;
  }
}

Object.assign(IntrinsicLevelNodesVerifier.prototype, intrinsicLevelNodesVerifierMixins);

const intrinsicLevelNodesVerifier = new IntrinsicLevelNodesVerifier();

export default intrinsicLevelNodesVerifier;
