"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { equateTerms } from "../process/equate";
import { equalityAssignmentFromEquality, leftVariableAssignmentFromEquality, rightVariableAssignmentFromEquality } from "../process/assign";

export default define(class Equality extends Element {
  constructor(context, string, node, leftTerm, rightTerm) {
    super(context, string, node);

    this.leftTerm = leftTerm;
    this.rightTerm = rightTerm;
  }

  getLeftTerm() {
    return this.leftTerm;
  }

  getRightTerm() {
    return this.rightTerm;
  }

  getEqualityNode() {
    const node = this.getNode(),
          equalityNde = node; ///

    return equalityNde;
  }

  getLeftTermNode() {
    const leftTermNode = this.leftTerm.getNode();

    return leftTermNode;
  }

  getRightTermNode() {
    const rightTermNode = this.rightTerm.getNode();

    return rightTermNode;
  }

  getType() {
    let type;

    const leftTermType = this.leftTerm.getType(),
          rightTermType = this.rightTerm.getType(),
          leftTermTypeEqualToOrSubTypeOfRightTermType = leftTermType.isEqualToOrSubTypeOf(rightTermType),
          rightTermTypeEqualToOrSubTypeOfLeftTermType = rightTermType.isEqualToOrSubTypeOf(leftTermType);

    if (leftTermTypeEqualToOrSubTypeOfRightTermType) {
      type = leftTermType;  ///
    }

    if (rightTermTypeEqualToOrSubTypeOfLeftTermType) {
      type = rightTermType; ///
    }

    return type;
  }

  getTerms() {
    const terms = [
      this.leftTerm,
      this.rightTerm
    ];

    return terms;
  }

  matchEqualityNode(equalityNode) {
    const equalityNodeA = equalityNode; ///

    equalityNode = this.getEqualityNode();

    const equalityNodeB = equalityNode, ///
          equalityNodeAAMatchesEqualityBNodeB = equalityNodeA.match(equalityNodeB),
          equalityNodeMatches = equalityNodeAAMatchesEqualityBNodeB; ///

    return equalityNodeMatches;
  }

  isReflexive() {
    const leftTermString = this.leftTerm.getString(),
          rightTermString = this.rightTerm.getString(),
          reflexive = (leftTermString === rightTermString);

    return reflexive;
  }

  isEqual(context) {
    let equal = false;

    const leftTermNode = this.leftTerm.getNode(),
          rightTermNode = this.rightTerm.getNode(),
          termsEquate = equateTerms(leftTermNode, rightTermNode, context);

    if (termsEquate) {
      equal = true;
    }

    return equal;
  }

  isValid(context) {
    const equalityNode = this.getEqualityNode(),
          equalityPresent = context.isEqualityPresentByEqualityNode(equalityNode),
          valid = equalityPresent;  ///

    return valid;
  }

  validate(assignments, stated, context) {
    let validates = false;

    const equalityString = this.getString(); ///

    context.trace(`Validating the '${equalityString}' equality...`);

    const valid = this.isValid(context);

    if (valid) {
      validates = true;

      context.debug(`...the '${equalityString}' equality is already valid.`);
    } else {
      const termsValidate = this.validateTerms(context);

      if (termsValidate) {
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
        const equality = this;  ///

        context.addEquality(equality);

        this.assign(assignments, stated, context);

        context.debug(`...validated the '${equalityString}' equality.`);
      }
    }

    return validates;
  }

  validateTerms(context) {
    let termsValidate;

    const equalityString = this.getString(); ///

    context.trace(`Validating the '${equalityString}' equality's terms...`);

    const leftTermValidates = this.leftTerm.validate(context, () => {
      let validatesForwards;

      const rightTermValidates = this.rightTerm.validate(context, () => {
        let validatesForwards;

        const leftTermType = this.leftTerm.getType(),
              rightTermType = this.rightTerm.getType(),
              leftTermTypeComparableToRightTermType = leftTermType.isComparableTo(rightTermType);

        validatesForwards = leftTermTypeComparableToRightTermType;  ///

        return validatesForwards;
      });

      validatesForwards = rightTermValidates; ///

      return validatesForwards;
    });

    termsValidate = leftTermValidates; ///

    if (termsValidate) {
      context.debug(`...validated the '${equalityString}' equality's terms.`);
    }

    return termsValidate;
  }

  validateWhenStated(assignments, context) {
    let validatesWhenStated;

    const equalityString = this.getString(); ///

    context.trace(`Validating the '${equalityString}' stated equality...`);

    validatesWhenStated = true;

    if (validatesWhenStated) {
      context.debug(`...validated the '${equalityString}' stated equality.`);
    }

    return validatesWhenStated;
  }

  validateWhenDerived(context) {
    let validatesWhenDerived;

    const equalityString = this.getString(); ///

    context.trace(`Validating the '${equalityString}' derived equality...`);

    validatesWhenDerived = true;  ///

    if (validatesWhenDerived) {
      context.debug(`...validated the '${equalityString}' derived equality.`);
    }

    return validatesWhenDerived;
  }

  assign(assignments, stated, context) {
    if (assignments === null) {
      return;
    }

    const equality = this,  ///
          equalityAssignment = equalityAssignmentFromEquality(equality, context),
          leftVariableAssignment = leftVariableAssignmentFromEquality(equality, context),
          rightVariableAssignment = rightVariableAssignmentFromEquality(equality, context);

    let assignment;

    assignment = equalityAssignment; ///

    assignments.push(assignment);

    if (leftVariableAssignment !== null) {
      assignment = leftVariableAssignment;  ///

      assignments.push(assignment);
    }

    if (rightVariableAssignment !== null) {
      assignment = rightVariableAssignment;  ///

      assignments.push(assignment);
    }
  }

  static name = "Equality";
});
