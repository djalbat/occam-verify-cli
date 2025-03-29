"use strict";

import dom from "../dom";
import LocalContext from "../context/local";

import { nodeQuery } from "../utilities/query";
import { objectType } from "./type";
import { domAssigned } from "../dom";
import { PROVISIONALLY } from "../constants";
import { unifyTermWithConstructor } from "../utilities/unification";
import { termFromJSON, termToTermJSON } from "../utilities/json";

const lastSecondaryKeywordTerminalNodeQuery = nodeQuery("/constructorDeclaration/@secondary-keyword[-1]");

export default domAssigned(class Constructor {
  constructor(string, term, provisional) {
    this.string = string;
    this.term = term;
    this.provisional = provisional;
  }

  getString() {
    return this.string;
  }

  getTerm() {
    return this.term;
  }

  isProvisional() {
    return this.provisional;
  }

  getType() { return this.term.getType(); }

  setType(type) { this.term.setType(type); }

  unifyTerm(term, context, verifyAhead) {
    let termUnified = false;

    const constructor = this, ///
          termString = term.getString(),
          constructorString = constructor.getString();

    context.trace(`Unifying the '${termString}' term with the '${constructorString}' constructor...`, term);

    const termUnifiedWithConstructor = unifyTermWithConstructor(term, constructor, context);

    if (termUnifiedWithConstructor) {
      let verifiedAhead;

      const type = constructor.getType();

      term.setType(type);

      verifiedAhead = verifyAhead();

      termUnified = verifiedAhead;  ///
    }

    if (termUnified) {
      context.debug(`...unified the '${termString}' term with the '${constructorString}' constructor.`, term);
    }

    return termUnified;
  }

  toJSON() {
    const termJSON = termToTermJSON(this.term),
          provisional = this.provisional,
          term = termJSON,  ///
          json = {
            term,
            provisional
          };

    return json;
  }

  static fromJSON(json, fileContext) {
    const { provisional } = json,
          term = termFromJSON(json, fileContext),
          string = stringFromTermAndProvisional(term, provisional),
          constructor = new Constructor(string, term, provisional);

    return constructor;
  }

  static fromConstructorDeclarationNode(constructorDeclarationNode, fileContext) {
    const { Term } = dom,
          localContext = LocalContext.fromFileContext(fileContext),
          context = localContext, ///
          term = Term.fromConstructorDeclarationNode(constructorDeclarationNode, context),
          provisional = provisionalFromConstructorDeclarationNode(constructorDeclarationNode, fileContext),
          string = stringFromTermAndProvisional(term, provisional),
          constructor = new Constructor(string, term, provisional);

    return constructor;
  }
});

function stringFromTermAndProvisional(term, provisional) {
  let string;

  const type = term.getType(),
        termString = term.getString();

  if (type === objectType) {
    string = termString;  ///
  } else {
    const typeString = type.getString();

    string = `${termString}:${typeString}`;
  }

  if (provisional) {
    string = `${string} ${PROVISIONALLY}`;
  }

  return string;
}

function provisionalFromConstructorDeclarationNode(constructorDeclarationNode, fileContext) {
  let provisional = false;

  const lastSecondaryKeywordTerminalNode = lastSecondaryKeywordTerminalNodeQuery(constructorDeclarationNode);

  if (lastSecondaryKeywordTerminalNode !== null) {
    const content = lastSecondaryKeywordTerminalNode.getContent(),
          contentProvisionally = (content === PROVISIONALLY);

    provisional = contentProvisionally; ///
  }

  return provisional;
}
