"use strict";

import Verifier from "../verifier";

import { verify } from "../verifier";
import { nodeQuery } from "../utilities/query";
import { verifyStandaloneType } from "../verify/type";
import { verifyStandaloneTerm } from "../verify/term";
import { verifyStandaloneStatement } from "../verify/statement";

const termNodeQuery = nodeQuery("/term!"),
      typeNodeQuery = nodeQuery("/type!"),
      statementNodeQuery = nodeQuery("/statement!"),
      nonTerminalNodeQuery = nodeQuery("/*");

class StatementAsCombinatorVerifier extends Verifier {
  verifyNonTerminalNode(nonTerminalNode, localContext, verifyAhead) {
    let nonTerminalNodeVerified;

    const nodeQueryMaps = [
      {
        nodeQuery: termNodeQuery,
        verify: (node, localContext, verifyAhead) => {
          let nonTerminalNodeVerified;

          const termNode = node, ///
                termVerified = this.verifyTerm(termNode, localContext, verifyAhead);

          nonTerminalNodeVerified = termVerified; ///

          return nonTerminalNodeVerified;
        }
      },
      {
        nodeQuery: typeNodeQuery,
        verify: (node, localContext, verifyAhead) => {
          let nonTerminalNodeVerified;

          const typeNode = node, ///
                typeVerified = this.verifyType(typeNode, localContext, verifyAhead);

          nonTerminalNodeVerified = typeVerified; ///

          return nonTerminalNodeVerified;
        }
      },
      {
        nodeQuery: statementNodeQuery,
        verify: (node, localContext, verifyAhead) => {
          let nonTerminalNodeVerified;

          const statementNode = node, ///
                statementVerified = this.verifyStatement(statementNode, localContext, verifyAhead);

          nonTerminalNodeVerified = statementVerified; ///

          return nonTerminalNodeVerified;
        }
      },
      {
        nodeQuery: nonTerminalNodeQuery,
        verify: (node, localContext, verifyAhead) => {
          const verified = super.verify(node, localContext, verifyAhead);

          return verified;
        }
      }
    ];

    const verified = verify(nodeQueryMaps, nonTerminalNode, localContext, verifyAhead);

    nonTerminalNodeVerified = verified; ///

    return nonTerminalNodeVerified;
  }

  verifyStatement(statementNode, localContext, verifyAhead) {
    const standaloneStatementVerified = verifyStandaloneStatement(statementNode, localContext, verifyAhead),
          statementVerified = standaloneStatementVerified;  ///

    return statementVerified;
  }

  verifyTerm(termNode, localContext, verifyAhead) {
    const standaloneTermVerified = verifyStandaloneTerm(termNode, localContext, verifyAhead),
          termVerified = standaloneTermVerified;  ///

    return termVerified;
  }

  verifyType(typeNode, localContext, verifyAhead) {
    const standaloneTypeVerified = verifyStandaloneType(typeNode, localContext, verifyAhead),
          typeVerified = standaloneTypeVerified;  ///

    return typeVerified;
  }
}

const statementAsCombinatorVerifier = new StatementAsCombinatorVerifier();

export default statementAsCombinatorVerifier;
