"use strict";

import { arrayUtilities } from "necessary";

import dom from "../dom";

import { objectType } from "./type";
import { domAssigned } from "../dom";
import { nodeQuery, nodesQuery } from "../utilities/query";
import { typeFromJSON, typeToTypeJSON } from "../utilities/json";

const { match } = arrayUtilities;

const nameTerminalNodesQuery = nodesQuery("/property/@name"),
      propertyRelationPropertyNodeQuery = nodeQuery("/propertyRelation/property");

export default domAssigned(class Property {
  constructor(string, names, type) {
    this.string = string;
    this.names = names;
    this.type = type;
  }

  getString() {
    return this.string;
  }

  getNames() {
    return this.names;
  }

  getType() {
    return this.type;
  }

  setType(type) {
    this.type = type;
  }

  matchPropertyNames(propertyNames) {
    const propertyNamesMatch = match(propertyNames, this.names, (propertyName, name) => {
      if (propertyName === name) {
        return true;
      }
    });

    return propertyNamesMatch;
  }

  toJSON() {
    const typeJSON = typeToTypeJSON(this.type),
          names = this.names, ///
          type = typeJSON,  ///
          json = {
            type,
            names
          };

    return json;
  }

  static name = "Property";

  static fromJSON(json, fileContext) {
    const { names } = json,
          type = typeFromJSON(json, fileContext),
          string = stringFromNamesAndType(names, type),
          property = new Property(string, names, type);

    return property;
  }

  static fromPropertyNode(propertyNode, fileContext) {
    const property = propertyFromPropertyNode(propertyNode, fileContext)

    return property;
  }

  static fromPropertyRelationNode(propertyRelationNode, fileContext) {
    const propertyRelationPropertyNode = propertyRelationPropertyNodeQuery(propertyRelationNode),
          propertyNode = propertyRelationPropertyNode,  ///
          property = propertyFromPropertyNode(propertyNode, fileContext);

    return property;
  }

  static fromPropertyDeclarationNode(propertyDeclarationNode, fileContext) {
    const { Type } = dom,
          type = Type.fromPropertyDeclarationNode(propertyDeclarationNode),
          propertyNames = propertyDeclarationNode.getPropertyNames(),
          names = propertyNames,  ///
          string = stringFromNamesAndType(names, type),
          property = new Property(string, names, type);

    return property;
  }
});

function propertyFromPropertyNode(propertyNode, fileContext) {
  const { Property } = dom,
        node = propertyNode,  ///
        names = namesFromPropertyNode(propertyNode),
        type = null,
        string = fileContext.nodeAsString(node),
        property = new Property(string, names, type);

  return property;
}

function stringFromNamesAndType(names, type) {
  let string;

  const namesString = namesStringFromNames(names);

  if (type === objectType) {
    string = namesString;  ///
  } else {
    const typeString = type.getString();

    string = `${namesString}:${typeString}`;
  }

  return string;
}

function namesFromPropertyNode(propertyNode, fileContext) {
  const nameTerminalNodes = nameTerminalNodesQuery(propertyNode),
        names = nameTerminalNodes.map((nameTerminalNode) => {
          const nameTerminalNodeContent = nameTerminalNode.getContent(),
                name = nameTerminalNodeContent; ///

          return name;
        });

  return names;
}

function namesStringFromNames(names) {
  const namesString = names.reduce((namesString, name) => {
    const nameString = name;  ///

    namesString = (namesString === null) ?
                    nameString :  ///
                     `${namesString} ${nameString}`;

    return namesString;
  }, null);

  return namesString;
}

