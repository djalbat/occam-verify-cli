"use strict";

import Assertion from "../assertion";

import { define } from "../../elements";
import { instantiate } from "../../utilities/context";
import { instantiateTypeAssertion } from "../../process/instantiate";
import { termFromTypeAssertionNode } from "../../utilities/element";
import { typeFromJSON, typeToTypeJSON } from "../../utilities/json";
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

  validate(context) {
    let typeAssertion = null;

    const typeAssertionString = this.getString();  ///

    context.trace(`Validating the '${typeAssertionString}' type assertion...`);

    const validAssertion = this.findValidAssertion(context);

    if (validAssertion) {
      typeAssertion = validAssertion; ///

      context.debug(`...the '${typeAssertionString}' type assertion is already valid.`);
    } else {
      let validates = false;

      const typeValidates = this.validateType(context);

      if (typeValidates) {
        const stated = context.isStated();

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

      if (validates) {
        const assertion = this; ///

        typeAssertion = assertion;  ///

        this.assign(context);

        context.addAssertion(assertion);

        context.debug(`...verified the '${typeAssertionString}' type assertion.`);
      }
    }

    return typeAssertion;
  }

  validateType(context) {
    let typeValidates;

    const typeString = this.type.getString(),
          typeAssertionString = this.getString();  ///

    context.trace(`Validating the '${typeAssertionString}' type assertion's '${typeString}' type...`);

    const nominalTypeName = this.type.getNominalTypeName(),
          type = context.findTypeByNominalTypeName(nominalTypeName);

    if (type !== null) {
      this.type = type;

      typeValidates = true;
    } else {
      context.debug(`The '${typeString}' type is not present.`);
    }

    if (typeValidates) {
      context.debug(`...validated the '${typeAssertionString}' type assertion's '${typeString}' type.`);
    }

    return typeValidates;
  }

  validateWhenStated(context) {
    let validatesWhenStated = false;

    const typeAssertionString = this.getString(); ///

    context.trace(`Validating the '${typeAssertionString}' stated type assertion...`);

    const term = this.term.validate(context, (term) => {
      let validatesForwards = false;

      const termType = term.getType(),
            typeEqualToOrSubTypeOfTermType = this.type.isEqualToOrSubTypeOf(termType);

      if (typeEqualToOrSubTypeOfTermType) {
        validatesForwards = true;
      }

      return validatesForwards;
    });

    if (term !== null) {
      this.term = term;

      validatesWhenStated = true;
    }

    if (validatesWhenStated) {
      context.debug(`...verified the '${typeAssertionString}' stated type assertion.`);
    }

    return validatesWhenStated;
  }

  validateWhenDerived(context) {
    let validatesWhenDerived = false;

    const typeAssertionString = this.getString(); ///

    context.trace(`Validating the '${typeAssertionString}' derived type assertion...`);

    const term = this.term.validate(context, (term) => {
      let validatesForwards = false;

      const termType = term.getType(),
            termTypeProvisional = termType.isProvisional();

      if (!termTypeProvisional) {
        const typeEqualToOrSuperTypeOfTermType = this.type.isEqualToOrSuperTypeOf(termType);

        if (typeEqualToOrSuperTypeOfTermType) {
          validatesForwards = true;
        }
      }

      return validatesForwards;
    });

    if (term !== null) {
      this.term = term;

      validatesWhenDerived = true;
    }

    if (validatesWhenDerived) {
      context.debug(`...verified the '${typeAssertionString}' derived type assertion.`);
    }

    return validatesWhenDerived;
  }

  assign(context) {
    const stated = context.isStated();

    if (!stated) {
      return;
    }

    const typeAssertion = this, ///
          variableAssigment = variableAssignmentFromTypeAssertion(typeAssertion, context);

    context.addAssignment(variableAssigment);
  }

  toJSON() {
    const { name } = this.constructor,
          typeJSON = typeToTypeJSON(this.type),
          type = typeJSON,  ///
          string = this.getString(),
          json = {
            name,
            string,
            type
          };

    return json;
  }

  static name = "TypeAssertion";

  static fromJSON(json, context) {
    let typeAssertion = null;

    const { name } = json;

    if (this.name === name) {
      instantiate((context) => {
        const { string } = json,
              typeAssertionNode = instantiateTypeAssertion(string, context),
              term = termFromTypeAssertionNode(typeAssertionNode, context),
              type = typeFromJSON(json, context),
              node = typeAssertionNode; ///

        context = null;

        typeAssertion = new TypeAssertion(context, string, node, term, type);
      }, context);
    }

    return typeAssertion;
  }
});
