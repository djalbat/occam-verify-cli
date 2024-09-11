"use strict";

import verifyTerm from "./verify/term";

import { first } from "./utilities/array";
import { nodeQuery } from "./utilities/query";
import { nodeAsString } from "./utilities/string";
import { nameFromMetavariableNode } from "./utilities/name";
import { metaTypeFromJSONAndFileContext } from "./metaType";
import { metavariableNodeFromMetavariableString } from "./utilities/node";

const termNodeQuery = nodeQuery("/metavariable/argument/term!"),
      typeNodeQuery = nodeQuery("/metavariable/argument/type!");

export default class Metavariable {
  constructor(node, name, termType, metaType) {
    this.node = node;
    this.name = name;
    this.termType = termType;
    this.metaType = metaType;
  }

  getNode() {
    return this.node;
  }

  getName() {
    return this.name;
  }

  getTermType() {
    return this.termType;
  }

  getMetaType() {
    return this.metaType;
  }

  getMetaTypeName() {
    const metaTypeName = this.metaType.getName();

    return metaTypeName;
  }

  matchName(name) {
    const matchesName = (this.name === name);

    return matchesName;
  }

  matchNode(node, localContext) {
    let matchesNode = false;

    const metavariableNode = node,  ///
          typeNode = typeNodeQuery(metavariableNode);

    if (typeNode === null) {
      const name = nameFromMetavariableNode(metavariableNode);

      if (this.name === name) {
        const termNode = termNodeQuery(metavariableNode);

        if (false) {
          ///
        } else if ((termNode === null) && (this.termType === null)) {
          matchesNode = true;
        } else if ((termNode !== null) && (this.termType !== null)) {
          const termUnifiedAgainstTermType = unifyTermAgainstTermType(termNode, this.termType, localContext);

          matchesNode = termUnifiedAgainstTermType;  ///
        }
      }
    }

    return matchesNode;
  }

  toJSON(tokens) {
    const metaTypeJSON = this.metaType.toJSON(tokens),
          string = nodeAsString(this.node, tokens),
          node = string,  //
          metaType = metaTypeJSON,  ///
          json = {
            node,
            metaType
          };

    return json;
  }

  asString(tokens) {
    const metaTypeName = this.metaType.getName();

    let string = nodeAsString(this.node, tokens);

    string = `${string}:${metaTypeName}`; ///

    return string;
  }

  static fromJSONAndFileContext(json, fileContext) {
    let { node } = json;

    const lexer  = fileContext.getLexer(),
          parser = fileContext.getParser(),
          variableString = node,  ///
          metavariableNode = metavariableNodeFromMetavariableString(variableString, lexer, parser);

    node = metavariableNode;  ///

    let { metaType } = json;

    json = metaType;  ///

    metaType = metaTypeFromJSONAndFileContext(json, fileContext);

    const name = nameFromMetavariableNode(metavariableNode),
          termType = termTypeFromMetavariableNode(metavariableNode, fileContext),
          metavariable = new Metavariable(node, name, termType, metaType);

    return metavariable;
  }

  static fromNodeNameTermTypeAndMetaType(node, name, termType, metaType) {
    const metavariable = new Metavariable(node, name, termType, metaType);

    return metavariable;
  }
}

export function unifyTermAgainstTermType(termNode, termType, localContext) {
  let termUnifiedAgainstTermType;

  const type = termType,  ///
        terms = [],
        termVerified = verifyTerm(termNode, terms, localContext, () => {
          let verifiedAhead = false;

          const firstTerm = first(terms),
                term = firstTerm, ///
                termType = term.getType(),
                termTypeEqualToOrSubTypeOfType = termType.isEqualToOrSubTypeOf(type);

          if (termTypeEqualToOrSubTypeOfType) {
            verifiedAhead = true;
          }

          return verifiedAhead;
        });

  termUnifiedAgainstTermType = termVerified;  ///

  return termUnifiedAgainstTermType;
}

function termTypeFromMetavariableNode(metavariableNode, fileContext) {
  let termType = null;

  const typeNode = typeNodeQuery(metavariableNode);

  if (typeNode !== null) {
    const type = fileContext.findTypeByTypeNode(typeNode);

    termType = type;  ///
  }

  return termType;
}
