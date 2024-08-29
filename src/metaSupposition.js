"use strict";

import LocalMetaContext from "./context/localMeta";
import metaLevelNodesVerifier from "./verifier/nodes/metaLevel";

import { match } from "./utilities/array";
import { nodeAsString } from "./utilities/string";
import { nodeQuery, nodesQuery } from "./utilities/query";
import { metastatementNodeFromMetastatementString } from "./utilities/node";

const subproofAssertionNodeQuery = nodeQuery("/metastatement/subproofAssertion!"),
      subproofAssertionMetastatementNodesQuery = nodesQuery("/subproofAssertion/metastatement"),
      metaSubproofMetaSuppositionMetastatementNodesQuery = nodesQuery("/metaSubproof/metaSupposition/unqualifiedMetastatement/metastatement!"),
      metaSubproofLastMetaProofStepMetastatementNodeQuery = nodeQuery("/metaSubproof/metaSubDerivation/lastMetaProofStep/unqualifiedMetastatement|qualifiedMetastatement/metastatement!");

export default class MetaSupposition {
  constructor(metastatementNode) {
    this.metastatementNode = metastatementNode;
  }

  getMetastatementNode() {
    return this.metastatementNode;
  }

  matchMetaSubproofNode(metaSubproofNode, substitutions, fileContext, localMetaContext) {
    let metaSubproofNodeMatches = false;

    const subproofAssertionNode = subproofAssertionNodeQuery(this.metastatementNode);

    if (subproofAssertionNode !== null) {
      const metaSubproofMetaSuppositionMetastatementNodes = metaSubproofMetaSuppositionMetastatementNodesQuery(metaSubproofNode),
            metaSubproofLastMetaProofStepMetastatementNode = metaSubproofLastMetaProofStepMetastatementNodeQuery(metaSubproofNode),
            metaSubproofMetastatementNodes = [
              ...metaSubproofMetaSuppositionMetastatementNodes,
              metaSubproofLastMetaProofStepMetastatementNode
            ],
            subproofAssertionMetastatementNodes = subproofAssertionMetastatementNodesQuery(subproofAssertionNode);

      metaSubproofNodeMatches = match(subproofAssertionMetastatementNodes, metaSubproofMetastatementNodes, (subproofAssertionMetastatementNode, ruleSubproofMetastatementNode) => {
        const nonTerminalNodeA = subproofAssertionMetastatementNode,  ///
              nonTerminalNodeB = ruleSubproofMetastatementNode, ///
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
