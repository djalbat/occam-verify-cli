"use strict";

import shim from "../shim";
import Unifier from "../unifier";
import unifyArgumentAgainstArgument from "../unify/argumentAgainstArgument";
import unifyStatementAgainstMetaType from "../unify/statementAgainstMetaType";

import { unify } from "../unifier";
import { nodeQuery } from "../utilities/query";

const argumentNodeQuery = nodeQuery("/argument!"),
      metaTypeNodeQuery = nodeQuery("/metaType!"),
      statementNodeQuery = nodeQuery("/statement!"),
      nonTerminalNodeQuery = nodeQuery("/*");

class StatementAgainstCombinatorUnifier extends Unifier {
  unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext, unifyAhead) {
    let nonTerminalNodeUnified;

    const nodeQueryMaps = [
      {
        nodeQueryA: statementNodeQuery,
        nodeQueryB: metaTypeNodeQuery,
        unify: (nodeA, nodeB, localContext, unifyAhead) => {
          let nonTerminalNodeUnified;

          const metaTypeNodeB = nodeB,  ///
                statementNodeA = nodeA, ///
                statementUnifiedAgainstMetaType =

                  this.unifyMetaArgumentStatementAgainstMetaType(statementNodeA, metaTypeNodeB, localContext, unifyAhead);

          nonTerminalNodeUnified = statementUnifiedAgainstMetaType; ///

          return nonTerminalNodeUnified;
        }
      },
      {
        nodeQueryA: argumentNodeQuery,
        nodeQueryB: argumentNodeQuery,
        unify: (nodeA, nodeB, localContext, unifyAhead) => {
          let nonTerminalNodeUnified;

          const argumentNodeA = nodeA,  ///
                argumentNodeB = nodeB,  ///
                argumentUnifiedAgainstArgument =

                  this.unifyArgumentAgainstArgument(argumentNodeA, argumentNodeB, localContext, unifyAhead);

          nonTerminalNodeUnified = argumentUnifiedAgainstArgument; ///

          return nonTerminalNodeUnified;
        }
      },
      {
        nodeQueryA: nonTerminalNodeQuery,
        nodeQueryB: nonTerminalNodeQuery,
        unify: (nodeA, nodeB, localContext, unifyAhead) => {
          const unified = super.unify(nodeA, nodeB, localContext, unifyAhead);

          return unified;
        }
      }
    ];

    const unified = unify(nodeQueryMaps, nonTerminalNodeA, nonTerminalNodeB, localContext, unifyAhead);

    nonTerminalNodeUnified = unified;  ///

    return nonTerminalNodeUnified;
  }

  unifyMetaArgumentStatementAgainstMetaType(statementNodeA, metaTypeNodeB, localContext, unifyAhead) {
    let statementUnifiedAgainstMetaType;

    const { verifyStatement } = shim,
          metaTypeNode = metaTypeNodeB, ///
          statementNode = statementNodeA;  ///

    statementUnifiedAgainstMetaType = unifyStatementAgainstMetaType(statementNode, metaTypeNode, localContext, unifyAhead, verifyStatement);

    return statementUnifiedAgainstMetaType;
  }

  unifyArgumentAgainstArgument(argumentNodeA, argumentNodeB, localContext, unifyAhead) {
    let argumentUnifiedAgainstArgument;

    argumentUnifiedAgainstArgument = unifyArgumentAgainstArgument(argumentNodeA, argumentNodeB, localContext, unifyAhead);

    return argumentUnifiedAgainstArgument;
  }
}

const statementAgainstCombinatorUnifier = new StatementAgainstCombinatorUnifier();

export default statementAgainstCombinatorUnifier;
