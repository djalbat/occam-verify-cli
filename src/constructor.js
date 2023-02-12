"use strict";

import Type from "./type";

import { nodeAsString } from "./utilities/string";
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
          term = termString,  ///
          type = typeJSON,  ///
          json = {
            term,
            type
          };

    return json;
  }

  static fromJSONAndFileContext(json, fileContext) {
    const { term } = json,
          termString = term,  ///
          lexer = fileContext.getLexer(),
          parser = fileContext.getParser(),
          termNode = termNodeFromTermString(termString, lexer, parser);

    let { type } = json;

    if (type !== null) {
      const typeJSON = type;  ///

      json = typeJSON;  ///

      type = Type.fromJSONAndFileContext(json, fileContext);

      const typeName = type.getName();

      type = fileContext.findTypeByTypeName(typeName); ///
    }

    const constructor = new Constructor(termNode, type);

    return constructor;
  }

  static fromTermNodeAndType(termNode, type) {
    const constructor = new Constructor(termNode, type);

    return constructor;
  }
}
