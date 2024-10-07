"use strict";

import { nodeQuery } from "./utilities/query";
import { typeNameFromTypeNode } from "./utilities/name";

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

  verifyAtTopLevel(fileContext) {
    let verifiedAtTopLevel = false;

    const argumentString = this.string; ///

    fileContext.trace(`Verifying the '${argumentString}' argument at top level...`);

    if (this.node === null) {
      verifiedAtTopLevel = true;
    } else {
      const termNode = termNodeQuery(this.node);

      if (termNode !== null) {
        const termString = this.fileContext.nodeAsString(termNode);

        this.fileContext.debug(`The '${termString}' term was found when a type should have been present.`);
      } else {
        const typeNode = typeNodeQuery(this.node);

        if (typeNode !== null) {
          const typeName = typeNameFromTypeNode(typeNode),
                typePresent = this.fileContext.isTypePresentByTypeName(typeName);

          if (typePresent) {
            verifiedAtTopLevel = true;
          } else {
            this.fileContext.debug(`The '${typeName}' type is not present.`);
          }
        }
      }
    }

    if (verifiedAtTopLevel) {
      fileContext.debug(`...verified the '${argumentString}' argument at top level.`);
    }

    return verifiedAtTopLevel;
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
