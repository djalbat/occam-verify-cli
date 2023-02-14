"use strict";

import Type from "./type";

export default class Variable {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }

  match(variable) {
    const name = variable.getName(),
          type = variable.getType(),
          nameMatches = this.matchName(name),
          typeMatches = this.matchType(type),
          matches = (nameMatches && typeMatches);

    return matches;
  }

  matchName(name) {
    const nameMatches = (this.name === name);

    return nameMatches;
  }

  matchType(type) {
    const typeMatches = this.type.match(type);

    return typeMatches;
  }

  matchNameAndType(name, type) {
    const nameMatches = this.matchName(name),
          typeMatches = this.matchType(type),
          nameAndTypeMatch = (nameMatches && typeMatches);

    return nameAndTypeMatch;
  }

  asString(tokens) {
    const typeName = this.type.getName(),
          string = `${this.name}:${typeName}`;

    return string;
  }

  toJSON(tokens) {
    const typeJSON = this.type.toJSON(tokens),
          name = this.name, ///
          type = typeJSON,  ///
          json = {
            name,
            type
          };

    return json;
  }

  static fromNameAndType(name, type) {
    const variable = new Variable(name, type);

    return variable;
  }

  static fromJSONAndFileContext(json, fileContext) {
    const { name } = json;

    let { type } = json;

    json = type;  ///

    type = Type.fromJSONAndFileContext(json, fileContext);

    const typeName = type.getName();

    type = fileContext.findTypeByTypeName(typeName); ///

    const variable = new Variable(name, type);

    return variable;
  }
}
