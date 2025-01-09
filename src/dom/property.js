"use strict";

import dom from "../dom";

import { nodeQuery } from "../utilities/query";
import { objectType } from "./type";
import { domAssigned } from "../dom";
import { typeFromJSON, typeToTypeJSON } from "../utilities/json";

const propertyNodeQuery = nodeQuery("/propertyDeclaration/property"),
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

  setType(type) {
    this.type = type;
  }

  matchPropertyName(propertyName) {
    const propertyNameMatches = (propertyName === this.name);

    return propertyNameMatches;
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
          string = stringFromNameAndType(name, type),
          property = new Property(string, name, type);

    return property;
  }

  static fromPropertyNode(propertyNode, fileContext) {
    const node = propertyNode,  ///
          name = nameFromPropertyNode(propertyNode),
          type = null,
          string = fileContext.nodeAsString(node),
          property = new Property(string, name, type);

    return property;
  }

  static fromPropertyDeclarationNode(propertyDeclarationNode, fileContext) {
    const { Type } = dom,
          propertyNode = propertyNodeQuery(propertyDeclarationNode),
          node = propertyDeclarationNode,  ///
          name = nameFromPropertyNode(propertyNode),
          type = Type.fromPropertyDeclarationNode(propertyDeclarationNode),
          string = fileContext.nodeAsString(node),
          property = new Property(string, name, type);

    return property;
  }
});

function stringFromNameAndType(name, type) {
  let string;

  if (type === objectType) {
    string = name;  ///
  } else {
    const typeName = type.getName();

    string = `${name}:${typeName}`;
  }

  return string;
}

function nameFromPropertyNode(propertyNode, fileContext) {
  const nameTerminalNode = nameTerminalNodeQuery(propertyNode),
        nameTerminalNodeContent = nameTerminalNode.getContent(),
        name = nameTerminalNodeContent; ///

  return name;
}
