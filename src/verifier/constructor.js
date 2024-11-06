"use strict";

import dom from "../dom";
import Verifier from "../verifier";
import LocalContext from "../context/local";

import { nodeQuery } from "../utilities/query";
import { typeNameFromTypeNode } from "../utilities/name";

const termNodeQuery = nodeQuery("/term"),
      typeNodeQuery = nodeQuery("/type");

class ConstructorVerifier extends Verifier {
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
        const { Term } = dom,
              localContext = LocalContext.fromFileContext(fileContext),
              context = localContext, ///
              term = Term.fromTermNode(termNode, context),
              termVerified = term.verify(localContext, verifyAhead);

        return termVerified;
      }
    },
    {
      nodeQuery: typeNodeQuery,
      verify: (typeNode, fileContext, verifyAhead) => {
        let typeVerified = false;

        const typeName = typeNameFromTypeNode(typeNode),
              typeDeclared = fileContext.isTypeDeclaredByTypeName(typeName);

        if (typeDeclared) {
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

const constructorVerifier = new ConstructorVerifier();

export default constructorVerifier;
