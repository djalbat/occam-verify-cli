"use strict";

import Type from "./type";

import { VARIABLE_KIND } from "./kinds";

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

  matchName(name) {
    const matchesName = (this.name === name);

    return matchesName;
  }

  asString(tokens) {
    const typeName = this.type.getName(),
          string = `${this.name}:${typeName}`;

    return string;
  }

  toJSON(tokens) {
    const typeJSON = this.type.toJSON(tokens),
          kind = VARIABLE_KIND,
          name = this.name, ///
          type = typeJSON,  ///
          json = {
            kind,
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
