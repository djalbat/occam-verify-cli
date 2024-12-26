"use strict";

import dom from "../dom";
import LocalContext from "../context/local";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";
import { typeFromJSON, typeToTypeJSON } from "../utilities/json";
import { propertyNameFromPropertyNode } from "../utilities/name";

const propertyDeclarationTypeNodeQuery = nodeQuery("/propertyDeclaration/type");

export default domAssigned(class Property {
  constructor(string, name, type) {
    this.string = string;
    this.name = name;
    this.type = type;
  }

  getString() {
    return this.string;
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }

  verify(context) {
    let verified;

    const propertyString = this.string; ///

    context.trace(`Verifying the '${propertyString}' property...`);

    debugger

    if (verified) {
      context.debug(`...verified the '${propertyString}' property.`);
    }

    return verified;
  }

  toJSON() {
    const typeJSON = typeToTypeJSON(this.type),
          name = this.name, ///
          type = typeJSON,  ///
          json = {
            type,
            name
          };

    return json;
  }

  static name = "Property";

  static fromJSON(json, fileContext) {
    const { name } = json,
          type = typeFromJSON(json, fileContext),
          string = stringFromNameAndType(name, type, fileContext),
          property = new Property(string, name, type);

    return property;
  }

  static fromPropertyDeclarationNode(propertyDeclarationNode, context) {
    let property = null;

    const propertyNode = propertyNodeQuery(propertyDeclarationNode);

    if (propertyNode !== null) {
      const node = propertyNode,  ///
            propertyName = propertyNameFromPropertyNode(propertyDeclarationNode),
            string = context.nodeAsString(node),
            name = propertyName,  ///
            type = null;

      property = new Property(string, node, name, type);
    }

    return property;
  }
});

function typeFromPropertyDeclarationNode(propertyDeclarationNode, fileContext) {
  const { Type } = dom,
        propertyDeclarationTypeNode = propertyDeclarationTypeNodeQuery(propertyDeclarationNode),
        typeNode = propertyDeclarationTypeNode, ///
        context = LocalContext.fromFileContext(fileContext),
        type = Type.fromTypeNode(typeNode, context);

  return type;
}
