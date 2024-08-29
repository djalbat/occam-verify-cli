"use strict";

import LocalMetaContext from "./context/localMeta";
import metaLevelNodesVerifier from "./verifier/nodes/metaLevel";

import { match } from "./utilities/array";
import { nodeAsString } from "./utilities/string";
import { nodeQuery, nodesQuery } from "./utilities/query";
import { metastatementNodeFromMetastatementString } from "./utilities/node";

const metaSubproofAssertionNodeQuery = nodeQuery("/metastatement/metaSubproofAssertion!"),
      metaSubproofAssertionMetastatementNodesQuery = nodesQuery("/metaSubproofAssertion/metastatement"),
      metaSubproofMetaSuppositionMetastatementNodesQuery = nodesQuery("/metaSubproof/metaSupposition/unqualifiedMetastatement/metastatement!"),
      metaSubproofSubDerivationLastMetastatementNodeQuery = nodeQuery("/metaSubproof/metaSubDerivation/qualifiedMetastatement|unqualifiedMetastatement[-1]/metastatement!");

export default class MetaSupposition {
  constructor(metastatementNode) {
    this.metastatementNode = metastatementNode;
  }

  getMetastatementNode() {
    return this.metastatementNode;
  }

  matchMetaSubproofNode(metaSubproofNode, substitutions, fileContext, localMetaContext) {
    let metaSubproofNodeMatches = false;

    const metaSubproofAssertionNode = metaSubproofAssertionNodeQuery(this.metastatementNode);

    if (metaSubproofAssertionNode !== null) {
      const metaSubproofMetaSuppositionMetastatementNodes = metaSubproofMetaSuppositionMetastatementNodesQuery(metaSubproofNode),
            metaSubproofSubDerivationLastMetastatementNode = metaSubproofSubDerivationLastMetastatementNodeQuery(metaSubproofNode),
            metaSubproofMetastatementNodes = [
              ...metaSubproofMetaSuppositionMetastatementNodes,
              metaSubproofSubDerivationLastMetastatementNode
            ],
            metaSubproofAssertionMetastatementNodes = metaSubproofAssertionMetastatementNodesQuery(metaSubproofAssertionNode),
            metaSubproofMetastatementNodesLength = metaSubproofMetastatementNodes.length,
            metaSubproofAssertionMetastatementNodesLength = metaSubproofAssertionMetastatementNodes.length;

      if (metaSubproofMetastatementNodesLength === metaSubproofAssertionMetastatementNodesLength) {
        metaSubproofNodeMatches = match(metaSubproofAssertionMetastatementNodes, metaSubproofMetastatementNodes, (metaSubproofAssertionMetastatementNode, metaSubproofMetastatementNode) => {
          const nonTerminalNodeA = metaSubproofAssertionMetastatementNode,  ///
                nonTerminalNodeB = metaSubproofMetastatementNode, ///
                fileContextA = fileContext, ///
                localMetaContextA = LocalMetaContext.fromFileContext(fileContextA),
                localMetaContextB = localMetaContext,  ///
                nonTerminalNodeVerified = metaLevelNodesVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localMetaContextA, localMetaContextB, () => {
                  const verifiedAhead = true;

                  return verifiedAhead;
                });

          if (nonTerminalNodeVerified) {
            return true;
          }
        });
      }
    }

    return metaSubproofNodeMatches;
  }

  matchMetastatementNode(metastatementNode, substitutions, fileContext, localMetaContext) {
    const nonTerminalNodeA = this.metastatementNode,  ///
          nonTerminalNodeB = metastatementNode,  ///
          fileContextA = fileContext, ///
          localMetaContextA = LocalMetaContext.fromFileContext(fileContextA),
          localMetaContextB = localMetaContext,  ///
          nonTerminalNodeVerified = metaLevelNodesVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localMetaContextA, localMetaContextB, () => {
            const verifiedAhead = true;

            return verifiedAhead;
          }),
          metastatementNodeMatches = nonTerminalNodeVerified; ///

    return metastatementNodeMatches;
  }

  toJSON(tokens) {
    const metastatementString = nodeAsString(this.metastatementNode, tokens),
          metastatement = metastatementString, ///
          json = {
            metastatement
          };

    return json;
  }

  static fromMetastatementNode(metastatementNode) {
    const metaSupposition = new MetaSupposition(metastatementNode);

    return metaSupposition;
  }

  static fromJSONAndFileContext(json, fileContext) {
    const { metastatement } = json,
          metastatementString = metastatement,  ///
          lexer = fileContext.getLexer(),
          parser = fileContext.getParser(),
          metastatementNode = metastatementNodeFromMetastatementString(metastatementString, lexer, parser),
          metaSupposition = new MetaSupposition(metastatementNode);

    return metaSupposition;
  }
}
