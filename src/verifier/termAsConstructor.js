"use strict";

import shim from "../shim";
import Verifier from "../verifier";
import LocalContext from "../context/local";

import { nodeQuery } from "../utilities/query";
import {typeNameFromTypeNode} from "../utilities/name";

const termNodeQuery = nodeQuery("/term"),
      typeNodeQuery = nodeQuery("/type");

class TermAsConstructorVerifier extends Verifier {
  verifyTerm(termNode, fileContext) {
    let termVerifiedAsConstructor;

    const nonTerminalNode = termNode, ///
          childNodes = nonTerminalNode.getChildNodes(),
          childNodesVerified = this.verifyChildNodes(childNodes, fileContext, () => {
            const verifiedAhead = true;

            return verifiedAhead;
          });

    termVerifiedAsConstructor = childNodesVerified;  ///

    return termVerifiedAsConstructor;
  }

  static maps = [
    {
      nodeQuery: termNodeQuery,
      verify: (termNode, fileContext, verifyAhead) => {
        const { Term } = shim,
              localContext = LocalContext.fromFileContext(fileContext),
              term = Term.fromTermNode(termNode, localContext),
              termVerified = term.verify(localContext, verifyAhead);

        return termVerified;
      }
    },
    {
      nodeQuery: typeNodeQuery,
      verify: (typeNode, fileContext, verifyAhead) => {
        let typeVerified = false;

        const typeName = typeNameFromTypeNode(typeNode),
              typePresent = fileContext.isTypePresentByTypeName(typeName);

        if (typePresent) {
          const verifiedAhead = verifyAhead();

          if (verifiedAhead) {
            typeVerified = true;
          }
        }

        return typeVerified;
      }
    }
  ];
}

const termAsConstructorVerifier = new TermAsConstructorVerifier();

export default termAsConstructorVerifier;
