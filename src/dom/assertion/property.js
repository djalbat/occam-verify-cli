"use strict";

import dom from "../../dom";

import { nodeQuery } from "../../utilities/query";
import { domAssigned } from "../../dom";
import VariableAssignment from "../../assignment/variable";

const termNodeQuery = nodeQuery("/propertyAssertion/term"),
      propertyRelationNodeQuery = nodeQuery("/propertyAssertion/propertyRelation"),
      propertyAssertionNodeQuery = nodeQuery("/statement/propertyAssertion");

export default domAssigned(class PropertyAssertion {
  constructor(string, node, tokens, term, propertyRelation) {
    this.string = string;
    this.node = node;
    this.tokens = tokens;
    this.term = term;
    this.propertyRelation = propertyRelation;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  getTokens() {
    return this.tokens;
  }

  getTerm() {
    return this.term;
  }

  getPropertyRelation() {
    return this.propertyRelation;
  }

  verify(assignments, stated, context) {
    let verified = false;

    const propertyAssertionString = this.string; ///

    context.trace(`Verifying the '${propertyAssertionString}' property assertion...`);

    const termVerified = this.verifyTerm(assignments, stated, context);

    if (termVerified) {
      const propertyRelationVerified = this.verifyPropertyRelation(assignments, stated, context);

      if (propertyRelationVerified) {
        let verifiedWhenStated = false,
            verifiedWhenDerived = false;

        if (stated) {
          verifiedWhenStated = this.verifyWhenStated(assignments, context);
        } else {
          verifiedWhenDerived = this.verifyWhenDerived(context);
        }

        if (verifiedWhenStated || verifiedWhenDerived) {
          verified = true;
        }
      }
    }

    if (verified) {
      context.debug(`...verified the '${propertyAssertionString}' property assertion.`);
    }

    return verified;
  }

  verifyTerm(assignments, stated, context) {
    let termVerified;

    const termString = this.term.getString(),
          propertyAssertionString = this.string; ///

    context.trace(`Verifying the '${propertyAssertionString}' property assertion's '${termString}' term...`);

    termVerified = this.term.verify(context, () => {
      const verifiedAhead = true;

      return verifiedAhead;
    });

    if (termVerified) {
      context.debug(`...verified the '${propertyAssertionString}' property assertion's '${termString}' term.`);
    }

    return termVerified;
  }

  verifyPropertyRelation(assignments, stated, context) {
    let propertyRelationVerified;

    const propertyRelationString = this.propertyRelation.getString(),
          propertyAssertionString = this.string; ///

    context.trace(`Verifying the '${propertyAssertionString}' property assertion's '${propertyRelationString}' property relation...`);

    propertyRelationVerified = this.propertyRelation.verify(context);

    if (propertyRelationVerified) {
      context.debug(`...verified the '${propertyAssertionString}' property assertion's '${propertyRelationString}' property relation.`);
    }

    return propertyRelationVerified;
  }

  verifyWhenStated(assignments, context) {
    let verifiedWhenStated = false;

    const propertyAssertionString = this.string; ///

    context.trace(`Verifying the '${propertyAssertionString}' stated property assertion...`);

    if (assignments !== null) {
      let variable;

      const { Variable } = dom,
            termNode = this.term.getNode();

      variable = Variable.fromTermNode(termNode, context);

      if (variable === null) {
        const termString = this.term.getString();

        context.debug(`The '${propertyAssertionString}' stated property assertion's '${termString}' term is not a variable.`);
      } else {
        const variableName = variable.getName();

        variable = context.findVariableByVariableName(variableName);

        variable = Variable.fromVariableAndPropertyRelation(variable, this.propertyRelation);

        const variableAssignment = VariableAssignment.fromVariable(variable),
              assignment = variableAssignment;  ///

        assignments.push(assignment);
      }
    }

    verifiedWhenStated = true;

    if (verifiedWhenStated) {
      context.debug(`...verified the '${propertyAssertionString}' stated property assertion.`);
    }

    return verifiedWhenStated;
  }

  verifyWhenDerived(assignments, context) {
    let verifiedWhenDerived = false;

    const propertyAssertionString = this.string; ///

    context.trace(`Verifying the '${propertyAssertionString}' derived property assertion...`);

    debugger

    if (verifiedWhenDerived) {
      context.debug(`...verified the '${propertyAssertionString}' derived property assertion.`);
    }

    return verifiedWhenDerived;
  }

  static name = "PropertyAssertion";

  static fromStatementNode(statementNode, context) {
    let propertyAssertion = null;

    const propertyAssertionNode = propertyAssertionNodeQuery(statementNode);

    if (propertyAssertionNode !== null) {
      const { Term, PropertyRelation } = dom,
            node = propertyAssertionNode,  ///
            string = context.nodeAsString(node),
            tokens = context.nodeAsTokens(node),
            termNode = termNodeQuery(propertyAssertionNode),
            propertyRelationNode = propertyRelationNodeQuery(propertyAssertionNode),
            term = Term.fromTermNode(termNode, context),
            propertyRelation = PropertyRelation.fromPropertyRelationNode(propertyRelationNode, context);

      propertyAssertion = new PropertyAssertion(string, node, tokens, term, propertyRelation);
    }

    return propertyAssertion;
  }
});
