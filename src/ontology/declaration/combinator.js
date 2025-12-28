"use strict";

import ontology from "../../ontology";
import Declaration from "../declaration";

import { define } from "../../ontology";
import { verifyStatement } from "../../process/verify";

export default define(class CombinatorDeclaration extends Declaration {
  constructor(context, node, string, combinator) {
    super(context, node, string);
    this.combinator = combinator;
  }

  getCombinator() {
    return this.combinator;
  }

  verify() {
    let verifies = false;

    const node = this.getNode(),
          context = this.getContext(),
          combinatorDeclarationString = this.getString();  ///

    context.trace(`Verifying the '${combinatorDeclarationString}' combinator declaration...`, node);

    const combinatorVerifies = this.verifyCombinator();

    if (combinatorVerifies) {
      context.addCombinator(this.combinator);

      verifies = true;
    }

    if (verifies) {
      context.debug(`...verified the '${combinatorDeclarationString}' combinator declaration.`, node);
    }

    return verifies;
  }

  verifyCombinator() {
    let statementVerifies;

    const node = this.getNode(),
          context = this.getContext(),
          combinatorString = this.combinator.getString();

    context.trace(`Verifying the '${combinatorString}' combinator...`, node);

    const statement = this.combinator.getStatement(),
          statementNode = statement.getNode();

    statementVerifies = verifyStatement(statementNode, context);

    if (statementVerifies) {
      context.debug(`...verified the '${combinatorString}' combinator.`, node);
    }

    return statementVerifies;
  }

  static name = "CombinatorDeclaration";

  static fromCombinatorDeclarationNode(combinatorDeclarationNode, context) {
    const { Combinator } = ontology,
          node = combinatorDeclarationNode, ///
          string = context.nodeAsString(node),
          combinator = Combinator.fromCombinatorDeclarationNode(combinatorDeclarationNode, context),
          combinatorDeclaration = new CombinatorDeclaration(context, node, string, combinator);

    return combinatorDeclaration;
  }
});
