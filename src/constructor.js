"use strict";

import { nodeAsString } from "./utilities/string";
import { CONSTRUCTOR_KIND } from "./kinds";

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

  asString() {
    let string;

    const termString = nodeAsString(this.termNode);

    if (this.type === null) {
      string = `${termString}`;
    } else {
      const noSuperType = true,
            typeString = this.type.asString(noSuperType);

      string = `${termString}:${typeString}`;
    }

    return string;
  }

  toJSON() {
    const termString = nodeAsString(this.termNode),
          typeJSON = (this.type === null) ?
                        null :
                          this.type.toJSON(),
          kind = CONSTRUCTOR_KIND,
          term = termString,  ///
          type = typeJSON,  ///
          json = [{
            kind,
            term,
            type
          }];

    return json;
  }

  static fromTermNodeAndType(termNode, type) {
    const constructor = new Constructor(termNode, type);

    return constructor;
  }
}
