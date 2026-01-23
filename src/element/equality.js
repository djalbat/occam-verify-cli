"use strict";

import Element from "../element";
import elements from "../elements";

import { define } from "../elements";
import { equateTerms } from "../process/equate";
import { equalityAssignmentFromEquality, variableAssignmentFromVariable } from "../process/assign";

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

  verify(assignments, stated, context) {
    let verifies = false;

    const equalityString = this.getString(); ///

    context.trace(`Verifying the '${equalityString}' equality...`);

    const termsVerify = this.verifyTerms(context);

    if (termsVerify) {
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

    if (verifies) {

        this.assign(assignments, context);

    }

    if (verifies) {
      context.debug(`...verified the '${equalityString}' equality.`);
    }

    return verifies;
  }

  verifyTerms(context) {
    let termsVerify;

    const equalityString = this.getString(); ///

    context.trace(`Verifying the '${equalityString}' equality's terms...`);

    const leftTermVerifies = this.leftTerm.verify(context, () => {
      let verifiesAhead;

      const rightTermVerifies = this.rightTerm.verify(context, () => {
        let verifiesAhead;

        const leftTermType = this.leftTerm.getType(),
              rightTermType = this.rightTerm.getType(),
              leftTermTypeComparableToRightTermType = leftTermType.isComparableTo(rightTermType);

        verifiesAhead = leftTermTypeComparableToRightTermType;  ///

        return verifiesAhead;
      });

      verifiesAhead = rightTermVerifies; ///

      return verifiesAhead;
    });

    termsVerify = leftTermVerifies; ///

    if (termsVerify) {
      context.debug(`...verified the '${equalityString}' equality's terms.`);
    }

    return termsVerify;
  }

  verifyWhenStated(assignments, context) {
    let verifiesWhenStated;

    const equalityString = this.getString(); ///

    context.trace(`Verifying the '${equalityString}' stated equality...`);

    verifiesWhenStated = true;

    if (verifiesWhenStated) {
      context.debug(`...verified the '${equalityString}' stated equality.`);
    }

    return verifiesWhenStated;
  }

  verifyWhenDerived(context) {
    let verifiesWhenDerived;

    const equalityString = this.getString(); ///

    context.trace(`Verifying the '${equalityString}' derived equality...`);

    verifiesWhenDerived = true;  ///

    if (verifiesWhenDerived) {
      context.debug(`...verified the '${equalityString}' derived equality.`);
    }

    return verifiesWhenDerived;
  }

  assign(assignments, context) {
    if (assignments === null) {
      return;
    }

    const { Variable } = elements,
          type = this.getType(),
          leftTermNode = this.leftTerm.getNode(),
          rightTermNode = this.rightTerm.getNode(),
          leftTermNodeSingularVariableNode = leftTermNode.getSingularVariableNode(),
          rightTermNodeSingularVariableNode = rightTermNode.getSingularVariableNode(),
          leftVariableNode = leftTermNodeSingularVariableNode,  ///
          rightVariableNode = rightTermNodeSingularVariableNode;  ///

    let assignment;

    if (leftVariableNode !== null) {
      const leftVariable = Variable.fromVariableNodeAndType(leftVariableNode, type, context),
            leftVariableAssignment = variableAssignmentFromVariable(leftVariable);

      assignment = leftVariableAssignment;  ///

      assignments.push(assignment);
    }

    if (rightVariableNode !== null) {
      const rightVariable = Variable.fromVariableNodeAndType(rightVariableNode, type, context),
            rightVariableAssignment = variableAssignmentFromVariable(rightVariable);

      assignment = rightVariableAssignment;  ///

      assignments.push(assignment);
    }

    const equality = this,  //
          equalityAssignment = equalityAssignmentFromEquality(equality);

    assignment = equalityAssignment; ///

    assignments.push(assignment);
  }

  static name = "Equality";
});
