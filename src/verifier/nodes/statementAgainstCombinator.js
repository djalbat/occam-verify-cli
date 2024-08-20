"use strict";

import NodesVerifier from "../../verifier/nodes";
import termAgainstConstructorNodesVerifier from "../../verifier/nodes/termAgainstConstructor";

import { nodeQuery } from "../../utilities/query";
import { verifyNodes } from "../../utilities/verifier";
import { STATEMENT_META_TYPE_NAME } from "../../metaTypeNames";

const argumentNodeQuery = nodeQuery("/argument!"),
      metaTypeTerminalNodeQuery = nodeQuery("/metaType/@meta-type!"),
      metaArgumentMetaTypeNodeQuery = nodeQuery("/metaArgument/metaType!"),
      metaArgumentStatementNodeQuery = nodeQuery("/metaArgument/statement!");

class StatementAgainstCombinatorNodesVerifier extends NodesVerifier {
  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext, verifyAhead) {
    let nonTerminalNodeVerified;

    const nodeQueryMaps = [
      {
        nodeQueryA: argumentNodeQuery,
        nodeQueryB: argumentNodeQuery,
        verifyNodes: (nodeA, nodeB, localContext, verifyAhead) => {
          let nonTerminalNodeVerified;

          const argumentNodeA = nodeA,  ///
                argumentNodeB = nodeB,  ///
                argumentNodeVerifiedAgainstArgumentNode =

                  this.verifyArgumentNodeAgainstArgumentNode(argumentNodeA, argumentNodeB, localContext, verifyAhead);

          nonTerminalNodeVerified = argumentNodeVerifiedAgainstArgumentNode; ///

          return nonTerminalNodeVerified;
        }
      },
      {
        nodeQueryA: metaArgumentStatementNodeQuery,
        nodeQueryB: metaArgumentMetaTypeNodeQuery,
        verifyNodes: (nodeA, nodeB, localContext, verifyAhead) => {
          let nonTerminalNodeVerified;

          const metaArgumentMetaTypeNodeB = nodeB,  ///
                metaArgumentStatementNodeA = nodeA, ///
                metaArgumentStatementVerifiedAgainstMetaArgumentMetaType =

                  this.verifyMetaArgumentStatementAgainstMetaArgumentMetaType(metaArgumentStatementNodeA, metaArgumentMetaTypeNodeB, localContext, verifyAhead);

          nonTerminalNodeVerified = metaArgumentStatementVerifiedAgainstMetaArgumentMetaType; ///

          return nonTerminalNodeVerified;
        }
      }
    ];

    const nodesVerified = verifyNodes(nodeQueryMaps, nonTerminalNodeA, nonTerminalNodeB, localContext, verifyAhead);

    nonTerminalNodeVerified = nodesVerified ?
                                true :
                                  super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext, verifyAhead);

    return nonTerminalNodeVerified;
  }

  verifyMetaArgumentStatementAgainstMetaArgumentMetaType(metaArgumentStatementNodeA, metaArgumentMetaTypeNodeB, localContext, verifyAhead) {
    let metaArgumentStatementVerifiedAgainstMetaArgumentMetaType = false;

    const metaTypeNode = metaArgumentMetaTypeNodeB, ///
          metaTypeTerminalNode = metaTypeTerminalNodeQuery(metaTypeNode),
          content = metaTypeTerminalNode.getContent();

    if (content === STATEMENT_META_TYPE_NAME) {
      const verifiedAhead = verifyAhead();

      metaArgumentStatementVerifiedAgainstMetaArgumentMetaType = verifiedAhead; ///
    }

    return metaArgumentStatementVerifiedAgainstMetaArgumentMetaType;
  }

  verifyArgumentNodeAgainstArgumentNode(argumentNodeA, argumentNodeB, localContext, verifyAhead) {
    let argumentNodeVerifiedAgainstArgumentNode;

    const nonTerminalNodeA = argumentNodeA, ///
          nonTerminalNodeB = argumentNodeB, ///
          nonTerminalNodeVerified = termAgainstConstructorNodesVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext, verifyAhead);

    argumentNodeVerifiedAgainstArgumentNode = nonTerminalNodeVerified; ///

    return argumentNodeVerifiedAgainstArgumentNode;
  }
}

const statementAgainstCombinatorNodesVerifier = new StatementAgainstCombinatorNodesVerifier();

export default statementAgainstCombinatorNodesVerifier;
