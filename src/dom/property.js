"use strict";

import dom from "../dom";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";
import { typeFromJSON, typeToTypeJSON } from "../utilities/json";

const typeNodeQuery = nodeQuery("/property/type"),
      propertyNodeQuery = nodeQuery("/propertyDeclaration/property"),
      nameTerminalNodeQuery = nodeQuery("/property/@name");

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

  static fromPropertyDeclarationNode(propertyDeclarationNode, fileContext) {
    const propertyNode = propertyNodeQuery(propertyDeclarationNode),
          node = propertyNode,  ///
          name = nameFromPropertyNode(propertyNode),
          type = typeFromPropertyNode(propertyNode),
          string = fileContext.nodeAsString(node),
          property = new Property(string, name, type);

    return property;
  }
});

function nameFromPropertyNode(propertyNode, fileContext) {
  const nameTerminalNode = nameTerminalNodeQuery(propertyNode),
        nameTerminalNodeContent = nameTerminalNode.getContent(),
        name = nameTerminalNodeContent; ///

  return name;
}

function typeFromPropertyNode(propertyNode, fileContext) {
  const { Type } = dom,
        typeNode = typeNodeQuery(propertyNode),
        type = Type.fromTypeNode(typeNode);

  return type;
}
