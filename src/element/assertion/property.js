"use strict";

import elements from "../../elements";
import Assertion from "../assertion";

import { define } from "../../elements";
import { variableAssignmentFromVariable } from "../../process/assign";

export default define(class PropertyAssertion extends Assertion {
  constructor(context, string, node, term, propertyRelation) {
    super(context, string, node);

    this.term = term;
    this.propertyRelation = propertyRelation;
  }

  getTerm() {
    return this.term;
  }

  getPropertyRelation() {
    return this.propertyRelation;
  }

  compareTermAndPropertyRelation(term, propertyRelation, context) {
    let comparesToTermAndPropertyRelation = false;

    const termString = term.getString(),
          propertyRelationString = propertyRelation.getString(),
          propertyAssertionString = this.getString(); ///

    context.trace(`Comparing the '${propertyAssertionString}' property assertion to the '${termString}' term and '${propertyRelationString}' property relation...`);

    const termA = term,
          termB = this.term, ///
          termAEqualToTermB = termA.isEqualTo(termB);

    if (termAEqualToTermB) {
      const propertyRelationEqualToPropertyRelation = this.propertyRelation.isEqualTo(propertyRelation);

      comparesToTermAndPropertyRelation = propertyRelationEqualToPropertyRelation;  ///
    }

    if (comparesToTermAndPropertyRelation) {
      context.debug(`...compared the '${propertyAssertionString}' property assertion to the '${termString}' term and '${propertyRelationString}' property relation.`);
    }

    return comparesToTermAndPropertyRelation;
  }

  validate(assignments, stated, context) {
    let validates = false;

    const propertyAssertionString = this.getString(); ///

    context.trace(`Validating the '${propertyAssertionString}' property assertion...`);

    const termValidates = this.validateTerm(assignments, stated, context);

    if (termValidates) {
      const propertyRelationVerifies = this.validatePropertyRelation(assignments, stated, context);

      if (propertyRelationVerifies) {
        let validatesWhenStated = false,
            validatesWhenDerived = false;

        if (stated) {
          validatesWhenStated = this.validateWhenStated(assignments, context);
        } else {
          validatesWhenDerived = this.validateWhenDerived(context);
        }

        if (validatesWhenStated || validatesWhenDerived) {
          validates = true;
        }
      }
    }

    if (validates) {
      if (stated) {
        this.assign(assignments, context);
      }
    }

    if (validates) {
      context.debug(`...validated the '${propertyAssertionString}' property assertion.`);
    }

    return validates;
  }

  validateTerm(assignments, stated, context) {
    let termValidates;

    const termString = this.term.getString();

    context.trace(`Validating the '${termString}' term...`);

    termValidates = this.term.validate(context, () => {
      const validatesForwards = true;

      return validatesForwards;
    });

    if (termValidates) {
      context.debug(`...validated the '${termString}' term.`);
    }

    return termValidates;
  }

  validatePropertyRelation(assignments, stated, context) {
    let propertyRelationVerifies;

    const propertyRelationString = this.propertyRelation.getString();

    context.trace(`Validating the '${propertyRelationString}' property relation...`);

    propertyRelationVerifies = this.propertyRelation.validate(context);

    if (propertyRelationVerifies) {
      context.debug(`...validated the '${propertyRelationString}' property relation.`);
    }

    return propertyRelationVerifies;
  }

  validateWhenStated(assignments, context) {
    let validatesWhenStated;

    const propertyAssertionString = this.getString(); ///

    context.trace(`Validating the '${propertyAssertionString}' stated property assertion...`);

    validatesWhenStated = true;

    if (validatesWhenStated) {
      context.debug(`...validated the '${propertyAssertionString}' stated property assertion.`);
    }

    return validatesWhenStated;
  }

  validateWhenDerived(context) {
    let validatesWhenDerived;

    const propertyAssertionString = this.getString(); ///

    context.trace(`Validating the '${propertyAssertionString}' derived property assertion...`);

    validatesWhenDerived = true;

    if (validatesWhenDerived) {
      context.debug(`...validated the '${propertyAssertionString}' derived property assertion.`);
    }

    return validatesWhenDerived;
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
