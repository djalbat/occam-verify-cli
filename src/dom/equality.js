"use strict";

import dom from "../dom";
import EqualityAssignment from "../assignment/equality";
import VariableAssignment from "../assignment/variable";

import { domAssigned } from "../dom";
import { unifyEquality } from "../utilities/unification";

export default domAssigned(class Equality {
  constructor(string, leftTerm, rightTerm) {
    this.string = string;
    this.leftTerm = leftTerm;
    this.rightTerm = rightTerm;
  }

  getString() {
    return this.string;
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

  isReflexive() {
    const leftTermString = this.leftTerm.getString(),
          rightTermString = this.rightTerm.getString(),
          reflexive = (leftTermString === rightTermString);

    return reflexive;
  }

  isEqual(context) {
    const equality = this,  ///
          equalityUnified = unifyEquality(equality, context),
          equal = equalityUnified;  ///

    return equal;
  }

  verify(assignments, stated, context) {
    let verified = false;

    const equalityString = this.string; ///

    context.trace(`Verifying the '${equalityString}' equality...`);

    const termsVerified = this.verifyTerms(context);

    if (termsVerified) {
      let verifiedWhenStated = false,
          verifiedWhenDerived = false;

      if (stated) {
        verifiedWhenStated = this.verifyWhenStated(assignments, context);
      } else {
        verifiedWhenDerived = this.verifyWhenDerived(context);
      }

      verified = verifiedWhenStated || verifiedWhenDerived;
    }

    if (verified) {
      this.assign(assignments, context);
    }

    if (verified) {
      context.debug(`...verified the '${equalityString}' equality.`);
    }

    return verified;
  }

  verifyTerms(context) {
    let termsVerified;

    const equalityString = this.string; ///

    context.trace(`Verifying the '${equalityString}' equality's terms...`);

    const leftTermVerified = this.leftTerm.verify(context, () => {
      let verifiedAhead;

      const rightTermVerified = this.rightTerm.verify(context, () => {
        let verifiedAhead;

        const leftTermType = this.leftTerm.getType(),
              rightTermType = this.rightTerm.getType(),
              leftTermTypeComparableToRightTermType = leftTermType.isComparableTo(rightTermType);

        verifiedAhead = leftTermTypeComparableToRightTermType;  ///

        return verifiedAhead;
      });

      verifiedAhead = rightTermVerified; ///

      return verifiedAhead;
    });

    termsVerified = leftTermVerified; ///

    if (termsVerified) {
      context.debug(`...verified the '${equalityString}' equality's terms.`);
    }

    return termsVerified;
  }

  verifyWhenStated(assignments, context) {
    let verifiedWhenStated;

    const equalityString = this.string; ///

    context.trace(`Verifying the '${equalityString}' stated equality...`);

    verifiedWhenStated = true;

    if (verifiedWhenStated) {
      context.debug(`...verified the '${equalityString}' stated equality.`);
    }

    return verifiedWhenStated;
  }

  verifyWhenDerived(context) {
    let verifiedWhenDerived;

    const equalityString = this.string; ///

    context.trace(`Verifying the '${equalityString}' derived equality...`);

    const equal = this.isEqual(context);

    verifiedWhenDerived = equal;  ///

    if (verifiedWhenDerived) {
      context.debug(`...verified the '${equalityString}' derived equality.`);
    }

    return verifiedWhenDerived;
  }

  assign(assignments, context) {
    if (assignments === null) {
      return;
    }

    const { Variable } = dom,
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
            leftVariableAssignment = VariableAssignment.fromVariable(leftVariable);

      assignment = leftVariableAssignment;  ///

      assignments.push(assignment);
    }

    if (rightVariableNode !== null) {
      const rightVariable = Variable.fromVariableNodeAndType(rightVariableNode, type, context),
            rightVariableAssignment = VariableAssignment.fromVariable(rightVariable);

      assignment = rightVariableAssignment;  ///

      assignments.push(assignment);
    }

    const equality = this,  //
          equalityAssignment = EqualityAssignment.fromEquality(equality);

    assignment = equalityAssignment; ///

    assignments.push(assignment);
  }

  static name = "Equality";

  static fromStatementNode(statementNode, context) {
    let equality = null;

    const equalityNode = statementNode.getEqualityNode();

    if (equalityNode !== null) {
      const node = equalityNode,  ///
            string = context.nodeAsString(node),
            leftTerm = leftTermFromEqualityNode(equalityNode, context),
            rightTerm = rightTermFromEqualityNode(equalityNode, context);

      equality = new Equality(string, leftTerm, rightTerm);
    }

    return equality;
  }
});

function leftTermFromEqualityNode(equalityNode, context) {
  const { Term } = dom,
        leftTermNode = equalityNode.getLeftTermNode(),
        leftTerm = Term.fromTermNode(leftTermNode, context);

  return leftTerm;
}

function rightTermFromEqualityNode(equalityNode, context) {
  const { Term } = dom,
        rightTermNode = equalityNode.getRightTermNode(),
        rightTerm = Term.fromTermNode(rightTermNode, context);

  return rightTerm;
}
