"use strict";

import { domAssigned } from "../dom";

class TypePrefix {
  constructor(string, name) {
    this.string = string;
    this.name = name;
  }

  getString() {
    return this.string;
  }

  getName() {
    return this.name;
  }

  matchTypePrefixName(typePrefixName) {
    const typePrefixNameMatches = (this.name === typePrefixName);

    return typePrefixNameMatches;
  }

  toJSON() {
    const name = this.name,
          json = {
            name
          };

    return json;
  }

  static name = "TypePrefix";

  static fromJSON(json, context) {
    const { name } = json,
          string = name,  ///
          typePrefix = new TypePrefix(string, name);

    return typePrefix;
  }

  static fromTypePrefixDeclarationNode(typePrefixDeclarationNode, context) {
    const typePrefix = typePrefixDeclarationNode.getTypePrefix(),
          name = typePrefix,  ///
          string = name,  ///
          type = new TypePrefix(string, name);

    return type;
  }
}

export default domAssigned(TypePrefix);
