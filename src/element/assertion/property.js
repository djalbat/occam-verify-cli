"use strict";

import Assertion from "../assertion";

import { define } from "../../elements";
import { variableAssignmentFromPrepertyAssertion } from "../../process/assign";

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

  getPropertyAssertionNode() {
    const node = this.getNode(),
          propertyAssertionNode = node; ///

    return propertyAssertionNode;
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

  validate(stated, context) {
    let propertyAssertion = null;

    const propertyAssertionString = this.getString(); ///

    context.trace(`Validating the '${propertyAssertionString}' property assertion...`);

    const validAssertion = this.findValidAssertion(context);

    if (validAssertion) {
      propertyAssertion = validAssertion; ///

      context.debug(`...the '${propertyAssertionString}' property assertion is already valid.`);
    } else {
      let validates = false;

      const termValidates = this.validateTerm(stated, context);

      if (termValidates) {
        const propertyRelationVerifies = this.validatePropertyRelation(stated, context);

        if (propertyRelationVerifies) {
          let validatesWhenStated = false,
              validatesWhenDerived = false;

          if (stated) {
            validatesWhenStated = this.validateWhenStated(context);
          } else {
            validatesWhenDerived = this.validateWhenDerived(context);
          }

          if (validatesWhenStated || validatesWhenDerived) {
            validates = true;
          }
        }
      }

      if (validates) {
        const assertion = this; ///

        propertyAssertion = assertion;  ///

        this.assign(stated, context);

        context.addAssertion(assertion);

        context.debug(`...validated the '${propertyAssertionString}' property assertion.`);
      }
    }

    return propertyAssertion;
  }

  validateTerm(stated, context) {
    let termValidates = false;

    const termString = this.term.getString();

    context.trace(`Validating the '${termString}' term...`);

    const term = this.term.validate(context, () => {
      const validatesForwards = true;

      return validatesForwards;
    });

    if ((term !== null)) {
      this.term = term;

      termValidates = true;
    }

    if (termValidates) {
      context.debug(`...validated the '${termString}' term.`);
    }

    return termValidates;
  }

  validatePropertyRelation(stated, context) {
    let propertyRelationVerifies;

    const propertyRelationString = this.propertyRelation.getString();

    context.trace(`Validating the '${propertyRelationString}' property relation...`);

    propertyRelationVerifies = this.propertyRelation.validate(context);

    if (propertyRelationVerifies) {
      context.debug(`...validated the '${propertyRelationString}' property relation.`);
    }

    return propertyRelationVerifies;
  }

  validateWhenStated(context) {
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

  assign(stated, context) {
    if (!stated) {
      return;
    }

    const propertyAssertion = this, ///
          variableAssigment = variableAssignmentFromPrepertyAssertion(propertyAssertion, context),
          assignment = variableAssigment; ///

    context.addAssignment(assignment);
  }

  toJSON() {
    debugger

    const { name } = this.constructor,
          string = this.getString(),
          json = {
            name,
            string
          };

    return json;
  }

  static name = "PropertyAssertion";

  static fromJSON(json, context) {
    let proopertyAssertion = null;

    const { name } = json;

    if (this.name === name) {
      debugger
    }

    return proopertyAssertion;
  }
});
