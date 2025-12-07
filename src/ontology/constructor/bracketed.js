"use strict";

import ontology from "../../ontology";
import Constructor from "../constructor";
import constructorBracketedContext from "../../context/bracketed/constructor";

import { define } from "../../ontology";

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

  static fromNothing() {
    const { Term } = ontology,
          bracketedTermNode = constructorBracketedContext.getBracketedTermNode(),
          termNode = bracketedTermNode,  ///
          context = constructorBracketedContext, ///
          term = Term.fromTermNode(termNode, context),
          string = term.getString(),
          bracketedConstructor = new BracketedConstructor(string, term);

    return bracketedConstructor;
  }
});
