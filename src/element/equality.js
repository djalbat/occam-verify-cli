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

  isEqualTo(equality) {
    const equalityNode = equality.getNode(),
          equalityNodeMatches = this.matchEqualityNode(equalityNode),
          equalTo = equalityNodeMatches;  ///

    return equalTo;
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

  findValidEquality(context) {
    const equalityNode = this.getEqualityNode(),
          equality = context.findEqualityByEqualityNode(equalityNode),
          validEquality = equality;  ///

    return validEquality;
  }

  validate(stated, context) {
    let equality = false;

    const equalityString = this.getString(); ///

    context.trace(`Validating the '${equalityString}' equality...`);

    const validEquality = this.isValid(context);

    if (validEquality !== null) {
      equality = validEquality; ///

      context.debug(`...the '${equalityString}' equality is already valid.`);
    } else {
      let validates = false;

      const termsValidate = this.validateTerms(context);

      if (termsValidate) {
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
        const equality = this;  ///

        this.assign(stated, context);

        context.addEquality(equality);

        context.debug(`...validated the '${equalityString}' equality.`);
      }
    }

    return equality;
  }

  validateTerms(context) {
    let termsValidate = false;

    const equalityString = this.getString(); ///

    context.trace(`Validating the '${equalityString}' equality's terms...`);

    let leftTerm,
        rightTerm = null;

    leftTerm = this.leftTerm.validate(context, () => {
        let validatesForwards;

        rightTerm = this.rightTerm.validate(context, () => {
          let validatesForwards;

          const leftTermType = this.leftTerm.getType(),
                rightTermType = this.rightTerm.getType(),
                leftTermTypeComparableToRightTermType = leftTermType.isComparableTo(rightTermType);

          validatesForwards = leftTermTypeComparableToRightTermType;  ///

          return validatesForwards;
        });

        const rightTermValidates = (rightTerm !== null);

        validatesForwards = rightTermValidates; ///

        return validatesForwards;
      });

    const leftTermValidates = (leftTerm !== null);

    if (leftTermValidates) {
      this.leftTerm = leftTerm;

      this.rightTerm = rightTerm;

      termsValidate = true;
    }

    if (termsValidate) {
      context.debug(`...validated the '${equalityString}' equality's terms.`);
    }

    return termsValidate;
  }

  validateWhenStated(context) {
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

  assign(stated, context) {
    const equality = this,  ///
          equalityAssignment = equalityAssignmentFromEquality(equality, context),
          leftVariableAssignment = leftVariableAssignmentFromEquality(equality, context),
          rightVariableAssignment = rightVariableAssignmentFromEquality(equality, context);

    let assignment;

    assignment = equalityAssignment; ///

    context.addAssignment(assignment);

    if (leftVariableAssignment !== null) {
      assignment = leftVariableAssignment;  ///

      context.addAssignment(assignment);
    }

    if (rightVariableAssignment !== null) {
      assignment = rightVariableAssignment;  ///

      context.addAssignment(assignment);
    }
  }

  static name = "Equality";
});
