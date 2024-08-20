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
      metavariableNodeQuery = nodeQuery("/metavariable!");

class MetastatementNodeVerifier extends NodeVerifier {
  verifyNonTerminalNode(nonTerminalNode, localMetaContext, verifyAhead) {
    let nonTerminalNodeVerified;

    const nodeQueryMaps = [
      {
        nodeQuery: termNodeQuery,
        verifyNode: this.verifyTermNode
      },
      {
        nodeQuery: variableNodeQuery,
        verifyNode: this.verifyVariableNode
      },
      {
        nodeQuery: metavariableNodeQuery,
        verifyNode: this.verifyMetavariableNode
      }
    ];

    const nodeVerified = verifyNode(nodeQueryMaps, nonTerminalNode, localMetaContext, verifyAhead);

    nonTerminalNodeVerified = nodeVerified ?
                                true :
                                  super.verifyNonTerminalNode(nonTerminalNode, localMetaContext, verifyAhead);

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
