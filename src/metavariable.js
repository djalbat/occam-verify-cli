"use strict";

import shim from "./shim";
import Argument from "./argument";
import LocalContext from "./context/local";

import { nodeQuery } from "./utilities/query";
import { metavariableNameFromMetavariableNode } from "./utilities/name";
import { metavariableNodeFromMetavariableString } from "./utilities/node";

const argumentNodeQuery = nodeQuery("/metavariable/argument"),
      metaTypeNodeQuery = nodeQuery("/metavariableDeclaration/metaType"),
      metavariableNodeQuery = nodeQuery("/metavariableDeclaration/metavariable");

export default class Metavariable {
  constructor(string, node, name, metaType) {
    this.string = string;
    this.node = node;
    this.name = name;
    this.metaType = metaType;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  getName() {
    return this.name;
  }

  getMetaType() {
    return this.metaType;
  }

  getMetaTypeName() {
    const metaTypeName = this.metaType.getName();

    return metaTypeName;
  }

  matchName(name) {
    const nameMatches = (this.name === name);

    return nameMatches;
  }

  matchMetavariableNode(metavariableNode) {
    const metavariableNodeMatches = this.node.match(metavariableNode);

    return metavariableNodeMatches;
  }

  verify(localContext) {
    let verified = false;

    const metavariableString = this.string; ///

    localContext.trace(`Verifying the '${metavariableString}' metavariable...`);

    debugger

    if (verified) {
      localContext.debug(`...verified the '${metavariableString}' metavariable.`);
    }

    return verified;
  }

  verifyAtTopLevel(fileContext) {
    let verifiedAtTopLevel = false;

    const metavariableString = this.string; ///

    fileContext.trace(`Verifying the '${metavariableString}' metavariable at top level...`);

    const metavariableNode = this.node, ///
          metavariableName = metavariableNameFromMetavariableNode(metavariableNode),
          metavariablePresent = fileContext.isMetavariablePresentByMetavariableName(metavariableName);

    if (metavariablePresent) {
      fileContext.debug(`The metavariable '${metavariableString}' is already present.`);
    } else {
      const argumentNode = argumentNodeQuery(metavariableNode),
            argument = Argument.fromArgumentNode(argumentNode, fileContext);

      if (argument === null) {
        verifiedAtTopLevel = true;
      } else {
        const argumentVerified = argument.verify(fileContext);

        if (argumentVerified) {
          verifiedAtTopLevel = true;
        }
      }
    }

    if (verifiedAtTopLevel) {
      fileContext.debug(`...verified the '${metavariableString}' metavariable at top level.`);
    }

    return verifiedAtTopLevel;
  }

  toJSON() {
    const metaTypeJSON = (this.metaType !== null) ?
                            this.metaType.toJSON() :
                              null,
          string = this.string,
          metaType = metaTypeJSON,  ///
          json = {
            string,
            metaType
          };

    return json;
  }

  static fromJSON(json, fileContext) {
    const { string } = json,
          lexer  = fileContext.getLexer(),
          parser = fileContext.getParser(),
          metavariableString = string,  ///
          metavariableNode = metavariableNodeFromMetavariableString(metavariableString, lexer, parser),
          metavariableName = metavariableNameFromMetavariableNode(metavariableNode),
          node = metavariableNode,  ///
          name = metavariableName,  ///
          metaType = metaTypeFromJSON(json, fileContext),
          metavariable = new Metavariable(string, node, name, metaType);

    return metavariable;
  }

  static fromMetavariableNode(metavariableNode, fileContext) {
    const metavariableName = metavariableNameFromMetavariableNode(metavariableNode),
          node = metavariableNode,  ///
          name = metavariableName,  ///
          string = fileContext.nodeAsString(node),
          metaType = null,
          metavariable = new Metavariable(string, node, name, metaType);

    return metavariable;
  }

  static fromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext) {
    const { MetaType } = shim,
          metaTypeNode = metaTypeNodeQuery(metavariableDeclarationNode),
          metavariableNode = metavariableNodeQuery(metavariableDeclarationNode),
          metavariableName = metavariableNameFromMetavariableNode(metavariableNode),
          localContext = LocalContext.fromFileContext(fileContext),
          metavariableString = fileContext.nodeAsString(metavariableNode),
          string = metavariableString,  ///
          node = metavariableNode,  ///
          name = metavariableName,  ///
          metaType = MetaType.fromMetaTypeNode(metaTypeNode, localContext),
          metavariable = new Metavariable(string, node, name, metaType);

    return metavariable;
  }
}

function metaTypeFromJSON(json, fileContext) {
  let { metaType } = json;

  if (metaType !== null) {
    const { name } = metaType,
          metaTypeName = name;  ///

    metaType = fileContext.findMetaTypeByMetaTypeName(metaTypeName);
  }

  return metaType;
}