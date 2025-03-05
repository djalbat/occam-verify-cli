"use strict";

import { arrayUtilities } from "necessary";

import dom from "../dom";
import Verifier from "../verifier";
import LocalContext from "../context/local";

import { nodeQuery } from "../utilities/query";
import { TYPE_TYPE } from "../constants";
import { typeNameFromTypeNode } from "../utilities/name";

const { last } = arrayUtilities;

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

  verifyTerminalNode(terminalNode, ...remainingArguments) {
    let terminalNodeVerified;

    const type = terminalNode.getType();

    if (type === TYPE_TYPE) {
      const verifyAhead = remainingArguments.pop(), ///
            lastRemainingArgument = last(remainingArguments),
            fileContext = lastRemainingArgument,  ///
            content = terminalNode.getContent(),
            typeString = content; ///

      fileContext.debug(`The '${typeString}' type is present in the constructor but has not been declared beforehand.`);

      terminalNodeVerified = false;

      remainingArguments.push(verifyAhead);
    } else {
      terminalNodeVerified = super.verifyTerminalNode(terminalNode, ...remainingArguments);
    }

    return terminalNodeVerified;
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
        let typeVerified;

        const typeName = typeNameFromTypeNode(typeNode),
              typePresent = fileContext.isTypePresentByTypeName(typeName);

        if (typePresent) {
          const verifiedAhead = verifyAhead();

          typeVerified = verifiedAhead; ///
        } else {
          const typeString = typeName;  ///

          fileContext.debug(`The '${typeString}' type is not present.`);

          typeVerified = false;
        }

        return typeVerified;
      }
    }
  ];
}

const constructorVerifier = new ConstructorVerifier();

export default constructorVerifier;
