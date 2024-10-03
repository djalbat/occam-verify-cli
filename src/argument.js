"use strict";

import { nodeQuery } from "./utilities/query";

const termNodeQuery = nodeQuery("/argument/term"),
      typeNodeQuery = nodeQuery("/argument//type");

export default class Argument {
  constructor(string, node, fileContext) {
    this.string = string;
    this.node = node;
    this.fileContext = fileContext;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  getFileContext() {
    return this.fileContext;
  }

  verify(fileContext) {
    let verified = false;

    const argumentString = this.string; ///

    fileContext.trace(`Verifying the '${argumentString}' argument...`);

    if (this.node === null) {
      verified = true;
    } else {
      const termNode = termNodeQuery(this.node);

      if (termNode !== null) {
        const termString = this.fileContext.nodeAsString(termNode);

        this.fileContext.debug(`The '${termString}' term was found when a type should have been present.`);
      } else {
        const typeNode = typeNodeQuery(this.node);

        if (typeNode !== null) {
          const typePresent = this.fileContext.isTypePresentByTypeNode(typeNode);

          if (typePresent) {
            verified = true;
          } else {
            const typeString = this.fileContext.nodeAsString(typeNode);

            this.fileContext.debug(`The '${typeString}' type is not present.`);
          }
        }
      }
    }

    if (verified) {
      fileContext.debug(`...verified the '${argumentString}' argument.`);
    }

    return verified;
  }

  static fromArgumentNode(argumentNode, fileContext) {
    let argument = null;

    if (argumentNode !== null) {
      const node = argumentNode,  ///
            string = fileContext.nodeAsString(node);

      argument = new Argument(string, node, fileContext);
    }

    return argument;
  }
}
