"use strict";

import Constructor from "../constructor";

import { define } from "../../elements";
import { termFromTermNode } from "../../utilities/element";

export default define(class BracketedConstructor extends Constructor {
  getBracketedConstructorNode() {
    const node = this.getNode(),
          bracketedConstructorNode = node;  ///

    return bracketedConstructorNode;
  }

  unifyTerm(term, context, validateForwards) {
    let termUnifies;

    const termString = term.getString();

    context.trace(`Unifying the '${termString}' term with the bracketed constructor...`);

    termUnifies = super.unifyTerm(term, context, () => {
      let validatesForwards = false;

      const bracketedTerm = term, ///
            bracketedTermNode = bracketedTerm.getNode(),
            singularTermNode = bracketedTermNode.getSingularTermNode();

      if (singularTermNode !== null) {
        const termNode = singularTermNode;  ///

        term = termFromTermNode(termNode, context);

        term = term.validate(context, () => {
          let validatesForwards;

          const type = term.getType();

          bracketedTerm.setType(type);

          validatesForwards = validateForwards();

          return validatesForwards;
        });

        if (term !== null) {
          validatesForwards = true;
        }
      }

      return validatesForwards;
    });

    if (termUnifies) {
      context.debug(`...unified the '${termString}' term with the bracketed constructor.`);
    }

    return termUnifies;
  }

  static name = "BracketedConstructor";
});
