"use strict";

import NodeVerifier from "../../verifier/node";

import { nodeQuery } from "../../utilities/query";
import { verifyNode } from "../../utilities/verifier";
import { verifyStandaloneType } from "./../../verify/type";
import { verifyStandaloneTerm } from "./../../verify/term";
import { verifyStandaloneStatement } from "../../verify/statement";

const termNodeQuery = nodeQuery("/term!"),
      typeNodeQuery = nodeQuery("/type!"),
      statementNodeQuery = nodeQuery("/statement!"),
      nonTerminalNodeQuery = nodeQuery("/*");

class StatementAsCombinatorNodeVerifier extends NodeVerifier {
  verifyNonTerminalNode(nonTerminalNode, localContext, verifyAhead) {
    let nonTerminalNodeVerified;

    const nodeQueryMaps = [
      {
        nodeQuery: termNodeQuery,
        verifyNode: (node, localMetaContext, verifyAhead) => {
          let nonTerminalNodeVerified;

          const termNode = node, ///
                termNodeVerified = this.verifyTermNode(termNode, localMetaContext, verifyAhead);

          nonTerminalNodeVerified = termNodeVerified; ///

          return nonTerminalNodeVerified;
        }
      },
      {
        nodeQuery: typeNodeQuery,
        verifyNode: (node, localMetaContext, verifyAhead) => {
          let nonTerminalNodeVerified;

          const typeNode = node, ///
                typeNodeVerified = this.verifyTypeNode(typeNode, localMetaContext, verifyAhead);

          nonTerminalNodeVerified = typeNodeVerified; ///

          return nonTerminalNodeVerified;
        }
      },
      {
        nodeQuery: statementNodeQuery,
        verifyNode: (node, localMetaContext, verifyAhead) => {
          let nonTerminalNodeVerified;

          const statementNode = node, ///
                statementNodeVerified = this.verifyStatementNode(statementNode, localMetaContext, verifyAhead);

          nonTerminalNodeVerified = statementNodeVerified; ///

          return nonTerminalNodeVerified;
        }
      },
      {
        nodeQuery: nonTerminalNodeQuery,
        verifyNode: (node, localMetaContext, verifyAhead) => {
          let nonTerminalNodeVerified;

          const nonTerminalNode = node; ///

          nonTerminalNodeVerified =

            super.verifyNonTerminalNode(nonTerminalNode, localMetaContext, verifyAhead);

          return nonTerminalNodeVerified;
        }
      }
    ];

    const nodeVerified = verifyNode(nodeQueryMaps, nonTerminalNode, localContext, verifyAhead);

    nonTerminalNodeVerified = nodeVerified; ///

    return nonTerminalNodeVerified;
  }

  verifyStatementNode(statementNode, localContext, verifyAhead) {
    const standaloneStatementVerified = verifyStandaloneStatement(statementNode, localContext, verifyAhead),
          statementNodeVerified = standaloneStatementVerified;  ///

    return statementNodeVerified;
  }

  verifyTermNode(termNode, localContext, verifyAhead) {
    const standaloneTermVerified = verifyStandaloneTerm(termNode, localContext, verifyAhead),
          termNodeVerified = standaloneTermVerified;  ///

    return termNodeVerified;
  }

  verifyTypeNode(typeNode, localContext, verifyAhead) {
    const standaloneTypeVerified = verifyStandaloneType(typeNode, localContext, verifyAhead),
          typeNodeVerified = standaloneTypeVerified;  ///

    return typeNodeVerified;
  }
}

const statementAsCombinatorNodeVerifier = new StatementAsCombinatorNodeVerifier();

export default statementAsCombinatorNodeVerifier;
