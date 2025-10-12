"use strict";

import { arrayUtilities } from "necessary";

import dom from "../dom";
import Verifier from "../verifier";

import { nodeQuery } from "../utilities/query";
import { TYPE_TYPE } from "../constants";

const { last } = arrayUtilities;

const termNodeQuery = nodeQuery("/term"),
      typeNodeQuery = nodeQuery("/type");

class ConstructorVerifier extends Verifier {
  verifyTerm(termNode, context) {
    let termVerifiesAsConstructor;

    const nonTerminalNode = termNode, ///
          childNodes = nonTerminalNode.getChildNodes(),
          childNodesVerify = this.verifyChildNodes(childNodes, context, () => {
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
            context = lastRemainingArgument,  ///
            content = terminalNode.getContent(),
            typeString = content; ///

      context.debug(`The '${typeString}' type is present in the constructor but has not been declared beforehand.`);

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
      verify: (termNode, context, verifyAhead) => {
        const { Term } = dom,
              term = Term.fromTermNode(termNode, context),
              termVerifies = term.verify(context, verifyAhead);

        return termVerifies;
      }
    },
    {
      nodeQuery: typeNodeQuery,
      verify: (typeNode, context, verifyAhead) => {
        let typeVerifies;

        const nominalTypeName = typeNode.getNominalTypeName(),
              typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);

        if (typePresent) {
          const verifiesAhead = verifyAhead();

          typeVerifies = verifiesAhead; ///
        } else {
          const typeString = nominalTypeName; ///

          context.debug(`The '${typeString}' type is not present.`);

          typeVerifies = false;
        }

        return typeVerifies;
      }
    }
  ];
}

const constructorVerifier = new ConstructorVerifier();

export default constructorVerifier;
