"use strict";

import { arrayUtilities } from "necessary";

import dom from "../dom";
import Verifier from "../verifier";
import LocalContext from "../context/local";

import { nodeQuery } from "../utilities/query";
import { TYPE_TYPE } from "../constants";

const { last } = arrayUtilities;

const termNodeQuery = nodeQuery("/term"),
      typeNodeQuery = nodeQuery("/type");

class ConstructorVerifier extends Verifier {
  verifyTerm(termNode, fileContext) {
    let termVerifiesAsConstructor;

    const nonTerminalNode = termNode, ///
          childNodes = nonTerminalNode.getChildNodes(),
          childNodesVerify = this.verifyChildNodes(childNodes, fileContext, () => {
            const verifiesAhead = true;

            return verifiesAhead;
          });

    termVerifiesAsConstructor = childNodesVerify;  ///

    return termVerifiesAsConstructor;
  }

  verifyTerminalNode(terminalNode, ...remainingArguments) {
    let terminalNodeVerifies;

    const type = terminalNode.getType();

    if (type === TYPE_TYPE) {
      const verifyAhead = remainingArguments.pop(), ///
            lastRemainingArgument = last(remainingArguments),
            fileContext = lastRemainingArgument,  ///
            content = terminalNode.getContent(),
            typeString = content; ///

      fileContext.debug(`The '${typeString}' type is present in the constructor but has not been declared beforehand.`);

      terminalNodeVerifies = false;

      remainingArguments.push(verifyAhead);
    } else {
      terminalNodeVerifies = super.verifyTerminalNode(terminalNode, ...remainingArguments);
    }

    return terminalNodeVerifies;
  }

  static maps = [
    {
      nodeQuery: termNodeQuery,
      verify: (termNode, fileContext, verifyAhead) => {
        const { Term } = dom,
              localContext = LocalContext.fromFileContext(fileContext),
              context = localContext, ///
              term = Term.fromTermNode(termNode, context),
              termVerifies = term.verify(localContext, verifyAhead);

        return termVerifies;
      }
    },
    {
      nodeQuery: typeNodeQuery,
      verify: (typeNode, fileContext, verifyAhead) => {
        let typeVerifies;

        const typeName = typeNode.getTypeName(),
              typePresent = fileContext.isTypePresentByTypeName(typeName);

        if (typePresent) {
          const verifiesAhead = verifyAhead();

          typeVerifies = verifiesAhead; ///
        } else {
          const typeString = typeName;  ///

          fileContext.debug(`The '${typeString}' type is not present.`);

          typeVerifies = false;
        }

        return typeVerifies;
      }
    }
  ];
}

const constructorVerifier = new ConstructorVerifier();

export default constructorVerifier;
