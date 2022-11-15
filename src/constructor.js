"use strict";

import Type from "./type";

import { nodeQuery } from "./utilities/query";
import { nodeAsString } from "./utilities/string";
import { CONSTRUCTOR_KIND } from "./kinds";
import { CONSTRUCTOR_DECLARATION_RULE_NAME } from "./ruleNames";

const statementNodeQuery = nodeQuery("/constructorDeclaration/term");

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
          json = {
            kind,
            term,
            type
          };

    return json;
  }

  static fromJSON(json, callback) {
    let { type } = json;

    const { term } = json,
          ruleName = CONSTRUCTOR_DECLARATION_RULE_NAME,
          content = `Constructor ${term}
`,
          constructorDeclarationNode = callback(content, ruleName),
          termNode = statementNodeQuery(constructorDeclarationNode);

    json = type;  ///

    type = Type.fromJSON(json);

    const constructor = new Constructor(termNode, type);

    return constructor;
  }

  static fromTermNodeAndType(termNode, type) {
    const constructor = new Constructor(termNode, type);

    return constructor;
  }
}
