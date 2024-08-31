"use strict";

import LocalContext from "../../context/local";
import NodeVerifier from "../../verifier/node";

import { nodeQuery } from "../../utilities/query";
import { verifyNode } from "../../utilities/verifier";
import { verifyStandaloneTerm } from "../../verify/term";
import { verifyStandaloneVariable } from "../../verify/variable";
import { verifyStandaloneMetavariable } from "../../verify/metavariable";

const termNodeQuery = nodeQuery("/term!"),
      variableNodeQuery = nodeQuery("/variable!"),
      nonTerminalNodeQuery = nodeQuery("/*"),
      metavariableNodeQuery = nodeQuery("/metavariable!");

class MetastatementNodeVerifier extends NodeVerifier {
  verifyNonTerminalNode(nonTerminalNode, localMetaContext, verifyAhead) {
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
        nodeQuery: variableNodeQuery,
        verifyNode: (node, localMetaContext, verifyAhead) => {
          let nonTerminalNodeVerified;

          const variableNode = node, ///
                variableNodeVerified = this.verifyVariableNode(variableNode, localMetaContext, verifyAhead);

          nonTerminalNodeVerified = variableNodeVerified; ///

          return nonTerminalNodeVerified;
        }
      },
      {
        nodeQuery: metavariableNodeQuery,
        verifyNode: (node, localMetaContext, verifyAhead) => {
          let nonTerminalNodeVerified;

          const metavariableNode = node, ///
                metavariableNodeVerified = this.verifyMetavariableNode(metavariableNode, localMetaContext, verifyAhead);

          nonTerminalNodeVerified = metavariableNodeVerified; ///

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

    const nodeVerified = verifyNode(nodeQueryMaps, nonTerminalNode, localMetaContext, verifyAhead);

    nonTerminalNodeVerified = nodeVerified; ///

    return nonTerminalNodeVerified;
  }

  verifyMetavariableNode(metavariableNode, localMetaContext, verifyAhead) {
    const standaloneMetavariableVerified = verifyStandaloneMetavariable(metavariableNode, localMetaContext, verifyAhead),
          metavariableNodeVerified = standaloneMetavariableVerified;  ///

    return metavariableNodeVerified;
  }

  verifyVariableNode(variableNode, localMetaContext, verifyAhead) {
    const localContext = LocalContext.fromLocalMetaContext(localMetaContext),
          standaloneVariableVerified = verifyStandaloneVariable(variableNode, localContext, verifyAhead),
          variableNodeVerified = standaloneVariableVerified;  ///

    return variableNodeVerified;
  }

  verifyTermNode(termNode, localMetaContext, verifyAhead) {
    const localContext = LocalContext.fromLocalMetaContext(localMetaContext),
          standaloneTermVerified = verifyStandaloneTerm(termNode, localContext, verifyAhead),
          termNodeVerified = standaloneTermVerified;  ///

    return termNodeVerified;
  }
}

const metastatementNodeVerifier = new MetastatementNodeVerifier();

export default metastatementNodeVerifier;
