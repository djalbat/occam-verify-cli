"use strict";

import elements from "../../elements";
import Constructor from "../constructor";

import { define } from "../../elements";

export default define(class BracketedConstructor extends Constructor {
  unifyTerm(term, context, verifyForwards) {
    let termUnifies;

    const termString = term.getString();

    context.trace(`Unifying the '${termString}' term with the bracketed constructor...`);

    termUnifies = super.unifyTerm(term, context, () => {
      let verifiesForwards = false;

      const { Term } = elements,
            bracketedTerm = term, ///
            bracketedTermNode = bracketedTerm.getNode(),
            singularTermNode = bracketedTermNode.getSingularTermNode();

      if (singularTermNode !== null) {
        const termNode = singularTermNode;  ///

        term = Term.fromTermNode(termNode, context);

        const termVVerifies = term.verify(context, () => {
          let verifiesForwards;

          const type = term.getType();

          bracketedTerm.setType(type);

          verifiesForwards = verifyForwards();

          return verifiesForwards;
        });

        verifiesForwards = termVVerifies;  ///
      }

      return verifiesForwards;
    });

    if (termUnifies) {
      context.debug(`...unified the '${termString}' term with the bracketed constructor.`);
    }

    return termUnifies;
  }

  static name = "BracketedConstructor";
});
