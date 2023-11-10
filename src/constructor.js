"use strict";

import Type from "./type";

import { nodeAsString } from "./utilities/string";
import { termNodeFromConstructorDeclarationTokens } from "./utilities/node";
import { constructorDeclarationTokensFromTermString } from "./utilities/tokens";

export default class Constructor {
  constructor(termNode, string, type) {
    this.termNode = termNode;
    this.string = string;
    this.type = type;
  }

  getTermNode() {
    return this.termNode;
  }

  getString() {
    return this.string;
  }

  getType() {
    return this.type;
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

  static fromTermNodeTypeAndTokens(termNode, type, tokens) {
    const string = stringFromTermNodeTypeAndTokens(termNode, type, tokens),
          constructor = new Constructor(termNode, string, type);

    return constructor;
  }

  static fromJSONAndFileContext(json, fileContext) {
    const { term } = json,
          termString = term,  ///
          lexer = fileContext.getLexer(),
          parser = fileContext.getParser(),
          constructorDeclarationTokens = constructorDeclarationTokensFromTermString(termString, lexer),
          termNode = termNodeFromConstructorDeclarationTokens(constructorDeclarationTokens, parser);

    let { type } = json;

    if (type !== null) {
      const typeJSON = type;  ///

      json = typeJSON;  ///

      type = Type.fromJSONAndFileContext(json, fileContext);

      const typeName = type.getName();

      type = fileContext.findTypeByTypeName(typeName); ///
    }

    const tokens = constructorDeclarationTokens,  ///
          string = stringFromTermNodeTypeAndTokens(termNode, type, tokens),
          constructor = new Constructor(termNode, string, type);

    return constructor;
  }
}

function stringFromTermNodeTypeAndTokens(termNode, type, tokens) {
  let string;

  const termString = nodeAsString(termNode, tokens);

  if (type === null) {
    string = `${termString}`;
  } else {
    const noSuperType = true,
          typeString = type.asString(tokens, noSuperType);

    string = `${termString}:${typeString}`;
  }

  return string;
}
