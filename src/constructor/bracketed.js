"use strict";

import dom from "../dom";
import ConstructorBracketedContext from "../context/bracketed/constructor";

import { nodeQuery } from "../utilities/query";
import { stringFromTermAndType } from "../constructor";

const termNodeQuery = nodeQuery("/term/argument/term");

const constructorBracketedContext = ConstructorBracketedContext.fromNothing();

export const bracketedTermNode = constructorBracketedContext.getBracketedTermNode();

export default class BracketedConstructor {
  constructor(string, term) {
    this.string = string;
    this.term = term;
  }

  getString() {
    return this.string;
  }

  getTerm() {
    return this.term;
  }

  unifyTerm(term, context, verifyAhead) {
    let termUnified;

    const termString = term.getString();

    context.trace(`Unifying the '${termString}' term with the bracketed constructor...`, term);

    termUnified = super.unifyTerm(term, context, () => {
      let verifiedAhead = false;

      const { Term } = dom,
            bracketedTerm = term, ///
            bracketedTermNode = bracketedTerm.getNode(),
            termNode = termNodeQuery(bracketedTermNode); ///

      term = Term.fromTermNode(termNode, context);

      if (term !== null) {
        const termVVerified = term.verify(context, () => {
          let verifiedAhead;

          const type = term.getType();

          bracketedTerm.setType(type);

          verifiedAhead = verifyAhead();

          return verifiedAhead;
        });

        verifiedAhead = termVVerified;  ///
      }

      return verifiedAhead;
    });

    if (termUnified) {
      context.debug(`...unified the '${termString}' term with the bracketed constructor.`, term);
    }

    return termUnified;
  }

  static fromNothing() {
    const { Term } = dom,
          termNode = bracketedTermNode,  ///
          context = constructorBracketedContext, ///
          term = Term.fromTermNode(termNode, context),
          type = null,
          string = stringFromTermAndType(term, type),
          bracketedConstructor = new BracketedConstructor(string, term);

    return bracketedConstructor;
  }
}
