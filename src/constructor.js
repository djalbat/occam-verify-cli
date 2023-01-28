"use strict";

import Type from "./type";

import { nodeAsString } from "./utilities/string";
import { CONSTRUCTOR_KIND } from "./kinds";
import { termNodeFromTermString } from "./utilities/node";

export default class Constructor {
  constructor(termNode, type) {
    this.termNode = termNode;
    this.type = type;
  }

  getTermNode() {
    return this.termNode;
  }

  getType() {
    return this.type;
  }

  asString(tokens) {
    let string;

    const termString = nodeAsString(this.termNode, tokens);

    if (this.type === null) {
      string = `${termString}`;
    } else {
      const noSuperType = true,
            typeString = this.type.asString(tokens, noSuperType);

      string = `${termString}:${typeString}`;
    }

    return string;
  }

  toJSON(tokens) {
    const termString = nodeAsString(this.termNode, tokens),
          typeJSON = (this.type === null) ?
                        null :
                          this.type.toJSON(tokens),
          kind = CONSTRUCTOR_KIND,
          term = termString,  ///
          type = typeJSON,  ///
          json = {
            kind,
            term,
            type
          };

    return json;
  }

  static fromJSON(json, lexer, parser) {
    const { term } = json,
          termString = term,  ///
          termNode = termNodeFromTermString(termString, lexer, parser);

    let { type } = json;

    if (type !== null) {
      const typeJSON = type;  ///

      json = typeJSON;  ///

      type = Type.fromJSON(json, lexer, parser);

      const typeName = type.getName();

      type = releaseContext.findTypeByTypeName(typeName); ///
    }

    const constructor = new Constructor(termNode, type);

    return constructor;
  }

  static fromTermNodeAndType(termNode, type) {
    const constructor = new Constructor(termNode, type);

    return constructor;
  }
}
