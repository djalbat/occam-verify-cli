"use strict";

import ontology from "../../ontology";
import Constructor from "../constructor";

import { define } from "../../ontology";
import { bracketedConstructorTermString, instantiateBracketedConstructorTerm } from "../../process/instantiate";

export default define(class BracketedConstructor extends Constructor {
  unifyTerm(term, context, verifyAhead) {
    let termUnifies;

    const termString = term.getString();

    context.trace(`Unifying the '${termString}' term with the bracketed constructor...`);

    termUnifies = super.unifyTerm(term, context, () => {
      let verifiesAhead = false;

      const { Term } = ontology,
            bracketedTerm = term, ///
            bracketedTermNode = bracketedTerm.getNode(),
            singularTermNode = bracketedTermNode.getSingularTermNode();

      if (singularTermNode !== null) {
        const termNode = singularTermNode;  ///

        term = Term.fromTermNode(termNode, context);

        const termVVerifies = term.verify(context, () => {
          let verifiesAhead;

          const type = term.getType();

          bracketedTerm.setType(type);

          verifiesAhead = verifyAhead();

          return verifiesAhead;
        });

        verifiesAhead = termVVerifies;  ///
      }

      return verifiesAhead;
    });

    if (termUnifies) {
      context.debug(`...unified the '${termString}' term with the bracketed constructor.`);
    }

    return termUnifies;
  }

  static name = "BracketedConstructor";

  static fromNothing() {
    const { Term } = ontology,
          bracketedConstructorTermNode = instantiateBracketedConstructorTerm(),
          string = bracketedConstructorTermString,  ///
          node = bracketedConstructorTermNode,  ///
          type = null,
          term = new Term(string, node, type),
          bracketedConstructor = new BracketedConstructor(term);

    return bracketedConstructor;
  }
});
