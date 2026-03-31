"use strict";

import Assertion from "../assertion";

import { define } from "../../elements";
import { instantiate } from "../../utilities/context";
import { instantiatePropertyAssertion } from "../../process/instantiate";
import { variableAssignmentFromPrepertyAssertion } from "../../process/assign";
import { termFromPropertyAssertionNode, propertyAssertionFromStatementNode, propertyRelationFromPropertyAssertionNode } from "../../utilities/element";

export default define(class PropertyAssertion extends Assertion {
  constructor(context, string, node, lineIndex, term, propertyRelation) {
    super(context, string, node, lineIndex);

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

  validate(context) {
    let propertyAssertion = null;

    const propertyAssertionString = this.getString(); ///

    context.trace(`Validating the '${propertyAssertionString}' property assertion...`);

    const validAssertion = this.findValidAssertion(context);

    if (validAssertion) {
      propertyAssertion = validAssertion; ///

      context.debug(`...the '${propertyAssertionString}' property assertion is already valid.`);
    } else {
      let validates = false;

      const termValidates = this.validateTerm(context);

      if (termValidates) {
        const propertyRelationVerifies = this.validatePropertyRelation(context);

        if (propertyRelationVerifies) {
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
      }

      if (validates) {
        const assertion = this; ///

        propertyAssertion = assertion;  ///

        this.assign(context);

        context.addAssertion(assertion);

        context.debug(`...validated the '${propertyAssertionString}' property assertion.`);
      }
    }

    return propertyAssertion;
  }

  validateTerm(context) {
    let termValidates = false;

    const termString = this.term.getString();

    context.trace(`Validating the '${termString}' term...`);

    const term = this.term.validate(context, (term) => {
      const validatesForwards = true;

      return validatesForwards;
    });

    if (term !== null) {
      this.term = term;

      termValidates = true;
    }

    if (termValidates) {
      context.debug(`...validated the '${termString}' term.`);
    }

    return termValidates;
  }

  validatePropertyRelation(context) {
    let propertyRelationValidates = false;

    const propertyRelationString = this.propertyRelation.getString();

    context.trace(`Validating the '${propertyRelationString}' property relation...`);

    const propertyRelation = this.propertyRelation.validate(context);

    if (propertyRelation !== null) {
      propertyRelationValidates = true;
    }

    if (propertyRelationValidates) {
      context.debug(`...validated the '${propertyRelationString}' property relation.`);
    }

    return propertyRelationValidates;
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

  assign(context) {
    const stated = context.isStated();

    if (!stated) {
      return;
    }

    const propertyAssertion = this, ///
          variableAssigment = variableAssignmentFromPrepertyAssertion(propertyAssertion, context);

    context.addAssignment(variableAssigment);
  }

  static name = "PropertyAssertion";

  toJSON() {
    const string = this.getString(),
          lineIndex = this.getLineIndex(),
          json = {
            string,
            lineIndex
          };

    return json;
  }

  static fromJSON(json, context) {
    let propertyAssertion = null;

    const { name } = json;

    if (this.name === name) {
      instantiate((context) => {
        const { string, lineIndex } = json,
              propertyAssertionNode = instantiatePropertyAssertion(string, context),
              node = propertyAssertionNode,  ///
              term = termFromPropertyAssertionNode(propertyAssertionNode, context),
              propertyRelation = propertyRelationFromPropertyAssertionNode(propertyAssertionNode, context);

        context = null;

        propertyAssertion = new PropertyAssertion(context, string, node, lineIndex, term, propertyRelation);
      }, context);
    }

    return propertyAssertion;
  }

  static fromStatement(statement, context) {
    const statementNode = statement.getNode(),
          propertyAssertion = propertyAssertionFromStatementNode(statementNode, context);

    return propertyAssertion;
  }
});
