"use strict";

import shim from "../shim";
import Verifier from "../verifier";

import { nodeQuery } from "../utilities/query";

const termNodeQuery = nodeQuery("/term"),
      frameNodeQuery = nodeQuery("/frame"),
      variableNodeQuery = nodeQuery("/variable"),
      metavariableNodeQuery = nodeQuery("/metavariable");

class SubstitutionVerifier extends Verifier {
  verify(substitutionNode, assignments, stated, localContext) {
    let substitutionVerified;

    const nonTerminalNode = substitutionNode, ///
          nonTerminalNodeVerified = this.verifyNonTerminalNode(nonTerminalNode, assignments, stated, localContext);

    substitutionVerified = nonTerminalNodeVerified;  ///

    return substitutionVerified;
  }

  static maps = [
    {
      nodeQuery: metavariableNodeQuery,
      verify: (metavariableNode, assignments, stated, localContext) => {
        const { Metavariable } = shim,
              metavariable = Metavariable.fromMetavariableNode(metavariableNode, localContext),
              metavariableVerified = metavariable.verify(localContext);

        return metavariableVerified;
      }
    },
    {
      nodeQuery: variableNodeQuery,
      verify: (variableNode, assignments, stated, localContext) => {
        const { Variable } = shim,
              variable = Variable.fromVariableNode(variableNode, localContext),
              variableVerified = variable.verify(localContext);

        return variableVerified;
      }
    },
    {
      nodeQuery: frameNodeQuery,
      verify: (frameNode, assignments, stated, localContext) => {
        const { Frame } = shim,
              frame = Frame.fromFrameNode(frameNode, localContext),
              frameVerified = frame.verify(localContext);

        return frameVerified;
      }
    },
    {
      nodeQuery: termNodeQuery,
      verify: (termNode, assignments, stated, localContext) => {
        const { Term } = shim,
              term = Term.fromTermNode(termNode, localContext),
              termVerified = term.verify(localContext, () => {
                const verifiedAhead = true;

                return verifiedAhead;
              });

        return termVerified;
      }
    }
  ];
}

const substitutionVerifier = new SubstitutionVerifier();

export default substitutionVerifier;
