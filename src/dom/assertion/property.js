"use strict";

import dom from "../../dom";

import VariableAssignment from "../../assignment/variable";

import { domAssigned } from "../../dom";

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

  matchTermAndPropertyRelation(term, propertyRelation, context) {
    let verifiedAsPropertyAssertion = false;

    const termString = term.getString(),
          propertyRelationString = propertyRelation.getString(),
          propertyAssertionString = this.getString();

    context.trace(`Matching the '${termString}' term and '${propertyRelationString}' property relation against the '${propertyAssertionString}' property assertion...`);

    const termA = term,
          termB = this.term, ///
          termAEqualToTermB = termA.isEqualTo(termB);

    if (termAEqualToTermB) {
      const propertyRelationEqualToPropertyRelation = this.propertyRelation.isEqualTo(propertyRelation);

      verifiedAsPropertyAssertion = propertyRelationEqualToPropertyRelation;  ///
    }

    if (verifiedAsPropertyAssertion) {
      context.debug(`...matched the '${termString}' term and '${propertyRelationString}' property relation against the '${propertyAssertionString}' property assertion.`);
    }

    return verifiedAsPropertyAssertion;
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

        verified = verifiedWhenStated || verifiedWhenDerived;
      }
    }

    if (verified) {
      if (stated) {
        this.assign(assignments, context);
      }
    }

    if (verified) {
      context.debug(`...verified the '${propertyAssertionString}' property assertion.`);
    }

    return verified;
  }

  verifyTerm(assignments, stated, context) {
    let termVerified;

    const termString = this.term.getString();

    context.trace(`Verifying the '${termString}' term...`);

    termVerified = this.term.verify(context, () => {
      const verifiedAhead = true;

      return verifiedAhead;
    });

    if (termVerified) {
      context.debug(`...verified the '${termString}' term.`);
    }

    return termVerified;
  }

  verifyPropertyRelation(assignments, stated, context) {
    let propertyRelationVerified;

    const propertyRelationString = this.propertyRelation.getString();

    context.trace(`Verifying the '${propertyRelationString}' property relation...`);

    propertyRelationVerified = this.propertyRelation.verify(context);

    if (propertyRelationVerified) {
      context.debug(`...verified the '${propertyRelationString}' property relation.`);
    }

    return propertyRelationVerified;
  }

  verifyWhenStated(assignments, context) {
    let verifiedWhenStated;

    const propertyAssertionString = this.string; ///

    context.trace(`Verifying the '${propertyAssertionString}' stated property assertion...`);

    verifiedWhenStated = true;

    if (verifiedWhenStated) {
      context.debug(`...verified the '${propertyAssertionString}' stated property assertion.`);
    }

    return verifiedWhenStated;
  }

  verifyWhenDerived(context) {
    let verifiedWhenDerived;

    const propertyAssertionString = this.string; ///

    context.trace(`Verifying the '${propertyAssertionString}' derived property assertion...`);

    verifiedWhenDerived = true;

    if (verifiedWhenDerived) {
      context.debug(`...verified the '${propertyAssertionString}' derived property assertion.`);
    }

    return verifiedWhenDerived;
  }

  assign(assignments, context) {
    if (assignments === null) {
      return;
    }

    let variable;

    const { Variable } = dom,
          termNode = this.term.getNode();

    variable = Variable.fromTermNode(termNode, context);

    if (variable !== null) {
      const variableName = variable.getName();

      variable = context.findVariableByVariableName(variableName);

      variable = Variable.fromVariableAndPropertyRelation(variable, this.propertyRelation);

      const variableAssignment = VariableAssignment.fromVariable(variable),
            assignment = variableAssignment;  ///

      assignments.push(assignment);
    }
  }

  static name = "PropertyAssertion";

  static fromStatementNode(statementNode, context) {
    let propertyAssertion = null;

    const propertyAssertionNode = statementNode.getPropertyAssertionNode();

    if (propertyAssertionNode !== null) {
      const { Term, PropertyRelation } = dom,
            node = propertyAssertionNode,  ///
            string = context.nodeAsString(node),
            tokens = context.nodeAsTokens(node),
            term = Term.fromPropertyAssertionNode(propertyAssertionNode, context),
            propertyRelation = PropertyRelation.fromPropertyAssertionNode(propertyAssertionNode, context);

      propertyAssertion = new PropertyAssertion(string, node, tokens, term, propertyRelation);
    }

    return propertyAssertion;
  }
});
