"use strict";

import elements from "../../elements";
import Assertion from "../assertion";

import { define } from "../../elements";
import { variableAssignmentFromVariable } from "../../process/assign";

export default define(class PropertyAssertion extends Assertion {
  constructor(string, node, term, propertyRelation) {
    super(string, node);

    this.term = term;
    this.propertyRelation = propertyRelation;
  }

  getTerm() {
    return this.term;
  }

  getPropertyRelation() {
    return this.propertyRelation;
  }

  matchTermAndPropertyRelation(term, propertyRelation, context) {
    let propertyMatchesTermAndPropertyRelation = false;

    const termString = term.getString(),
          propertyRelationString = propertyRelation.getString(),
          propertyAssertionString = this.getString();

    context.trace(`Matching the '${termString}' term and '${propertyRelationString}' property relation against the '${propertyAssertionString}' property assertion...`);

    const termA = term,
          termB = this.term, ///
          termAEqualToTermB = termA.isEqualTo(termB);

    if (termAEqualToTermB) {
      const propertyRelationEqualToPropertyRelation = this.propertyRelation.isEqualTo(propertyRelation);

      propertyMatchesTermAndPropertyRelation = propertyRelationEqualToPropertyRelation;  ///
    }

    if (propertyMatchesTermAndPropertyRelation) {
      context.debug(`...matched the '${termString}' term and '${propertyRelationString}' property relation against the '${propertyAssertionString}' property assertion.`);
    }

    return propertyMatchesTermAndPropertyRelation;
  }

  verify(assignments, stated, context) {
    let verifies = false;

    const propertyAssertionString = this.getString(); ///

    context.trace(`Verifying the '${propertyAssertionString}' property assertion...`);

    const termVerifies = this.verifyTerm(assignments, stated, context);

    if (termVerifies) {
      const propertyRelationVerifies = this.verifyPropertyRelation(assignments, stated, context);

      if (propertyRelationVerifies) {
        let verifiesWhenStated = false,
            verifiesWhenDerived = false;

        if (stated) {
          verifiesWhenStated = this.verifyWhenStated(assignments, context);
        } else {
          verifiesWhenDerived = this.verifyWhenDerived(context);
        }

        if (verifiesWhenStated || verifiesWhenDerived) {
          verifies = true;
        }
      }
    }

    if (verifies) {
      if (stated) {
        this.assign(assignments, context);
      }
    }

    if (verifies) {
      context.debug(`...verified the '${propertyAssertionString}' property assertion.`);
    }

    return verifies;
  }

  verifyTerm(assignments, stated, context) {
    let termVerifies;

    const termString = this.term.getString();

    context.trace(`Verifying the '${termString}' term...`);

    termVerifies = this.term.verify(context, () => {
      const verifiesAhead = true;

      return verifiesAhead;
    });

    if (termVerifies) {
      context.debug(`...verified the '${termString}' term.`);
    }

    return termVerifies;
  }

  verifyPropertyRelation(assignments, stated, context) {
    let propertyRelationVerifies;

    const propertyRelationString = this.propertyRelation.getString();

    context.trace(`Verifying the '${propertyRelationString}' property relation...`);

    propertyRelationVerifies = this.propertyRelation.verify(context);

    if (propertyRelationVerifies) {
      context.debug(`...verified the '${propertyRelationString}' property relation.`);
    }

    return propertyRelationVerifies;
  }

  verifyWhenStated(assignments, context) {
    let verifiesWhenStated = false;

    const propertyAssertionString = this.getString(); ///

    context.trace(`Verifying the '${propertyAssertionString}' stated property assertion...`);

    verifiesWhenStated = true;

    if (verifiesWhenStated) {
      context.debug(`...verified the '${propertyAssertionString}' stated property assertion.`);
    }

    return verifiesWhenStated;
  }

  verifyWhenDerived(context) {
    let verifiesWhenDerived;

    const propertyAssertionString = this.getString(); ///

    context.trace(`Verifying the '${propertyAssertionString}' derived property assertion...`);

    verifiesWhenDerived = true;

    if (verifiesWhenDerived) {
      context.debug(`...verified the '${propertyAssertionString}' derived property assertion.`);
    }

    return verifiesWhenDerived;
  }

  assign(assignments, context) {
    if (assignments === null) {
      return;
    }

    let variable;

    const { Variable } = elements,
          termNode = this.term.getNode();

    variable = Variable.fromTermNode(termNode, context);

    if (variable !== null) {
      const variableIdentifier = variable.getIdentifier();

      variable = context.findVariableByVariableIdentifier(variableIdentifier);

      variable = Variable.fromVariableAndPropertyRelation(variable, this.propertyRelation);

      const variableAssignment = variableAssignmentFromVariable(variable),
            assignment = variableAssignment;  ///

      assignments.push(assignment);
    }
  }

  static name = "PropertyAssertion";
});
