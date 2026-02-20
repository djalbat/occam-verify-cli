"use strict";

import Assertion from "../assertion";

import { define } from "../../elements";
import { variableAssignmentFromTypeAssertion } from "../../process/assign";

export default define(class TypeAssertion extends Assertion {
  constructor(context, string, node, term, type) {
    super(context, string, node);

    this.term = term;
    this.type = type;
  }

  getTerm() {
    return this.term;
  }

  getType() {
    return this.type;
  }

  getTypeAssertionNBode() {
    const node = this.getNode(),
          typeAssertionNode = node; ///

    return typeAssertionNode;
  }

  validate(assignments, stated, context) {
    let validates = false;

    const typeAssertionString = this.getString();  ///

    context.trace(`Validating the '${typeAssertionString}' type assertion...`);

    const valid = this.isValid();

    if (valid) {
      validates = true;

      context.debug(`...the '${typeAssertionString}' type assertion is already valid.`);
    } else {
      const typeValidates = this.validateType(context);

      if (typeValidates) {
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

      if (validates) {
        const assertion = this; ///

        context.addAssertion(assertion);

        this.assign(assignments, stated, context);

        context.debug(`...verified the '${typeAssertionString}' type assertion.`);
      }
    }

    return validates;
  }

  validateType(context) {
    let typeValidates;

    const typeString = this.type.getString();

    context.trace(`Validating the '${typeString}' type...`);

    const nominalTypeName = this.type.getNominalTypeName(),
          type = context.findTypeByNominalTypeName(nominalTypeName);

    if (type !== null) {
      this.type = type;

      typeValidates = true;
    } else {
      context.debug(`The '${typeString}' type is not present.`);
    }

    if (typeValidates) {
      context.debug(`...verified the '${typeString}' type.`);
    }

    return typeValidates;
  }

  validateWhenStated(assignments, context) {
    let validatesWhenStated = false;

    const typeAssertionString = this.getString(); ///

    context.trace(`Validating the '${typeAssertionString}' stated type assertion...`);

    const termValidates = this.term.validate(context, () => {
      let validatesForwards;

      const termType = this.term.getType(),
            typeEqualToOrSubTypeOfTermType = this.type.isEqualToOrSubTypeOf(termType);

      if (typeEqualToOrSubTypeOfTermType) {
        validatesForwards = true;
      }

      return validatesForwards;
    });

    if (termValidates) {
      validatesWhenStated = true;
    }

    if (validatesWhenStated) {
      context.debug(`...verified the '${typeAssertionString}' stated type assertion.`);
    }

    return validatesWhenStated;
  }

  validateWhenDerived(context) {
    let validatesWhenDerived;

    const typeAssertionString = this.getString(); ///

    context.trace(`Validating the '${typeAssertionString}' derived type assertion...`);

    const termValidates = this.term.validate(context, () => {
      let validatesForwards = false;

      const termType = this.term.getType(),
            termTypeProvisional = termType.isProvisional();

      if (!termTypeProvisional) {
        const typeEqualToOrSuperTypeOfTermType = this.type.isEqualToOrSuperTypeOf(termType);

        if (typeEqualToOrSuperTypeOfTermType) {
          validatesForwards = true;
        }
      }

      return validatesForwards;
    });

    validatesWhenDerived = termValidates; ///

    if (validatesWhenDerived) {
      context.debug(`...verified the '${typeAssertionString}' derived type assertion.`);
    }

    return validatesWhenDerived;
  }

  assign(assignments, stated, context) {
    if (assignments === null) {
      return;
    }

    if (!stated) {
      return;
    }

    const typeAssertion = this, ///
          variableAssigment = variableAssignmentFromTypeAssertion(typeAssertion, context),
          assignment = variableAssigment;  ///

    assignments.push(assignment);
  }

  static name = "TypeAssertion";
});
