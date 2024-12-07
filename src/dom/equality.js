"use strict";

import dom from "../dom";
import EqualityAssignment from "../assignment/equality";
import VariableAssignment from "../assignment/variable";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";
import { unifyEquality } from "../utilities/unification";

const equalityNodeQuery = nodeQuery("/statement/equality"),
      variableNodeQuery = nodeQuery("/term/variable!"),
      leftTermNodeQuery = nodeQuery("/equality/term[0]"),
      rightTermNodeQuery = nodeQuery("/equality/term[1]");

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
        verifiedWhenStated = this.verifyWhenStated(context);
      } else {
        verifiedWhenDerived = this.verifyWhenDerived(context);
      }

      if (verifiedWhenStated || verifiedWhenDerived) {
        if (assignments !== null) {
          const { Variable } = dom,
                type = this.getType(),
                leftTermNode = this.leftTerm.getNode(),
                rightTermNode = this.rightTerm.getNode(),
                leftVariableNode = variableNodeQuery(leftTermNode),
                rightVariableNode = variableNodeQuery(rightTermNode),
                leftVariable = Variable.fromVariableNodeAndType(leftVariableNode, type, context),
                rightVariable = Variable.fromVariableNodeAndType(rightVariableNode, type, context);

          let assignment;

          if (leftVariable !== null) {
            const leftVariableAssignment = VariableAssignment.fromVariable(leftVariable);

            assignment = leftVariableAssignment;  ///

            assignments.push(assignment);
          }

          if (rightVariable !== null) {
            const rightVariableAssignment = VariableAssignment.fromVariable(rightVariable);

            assignment = rightVariableAssignment;  ///

            assignments.push(assignment);
          }

          const equality = this,  //
                equalityAssignment = EqualityAssignment.fromEquality(equality);

          assignment = equalityAssignment; ///

          assignments.push(assignment);
        }

        verified = true;
      }
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

  verifyWhenStated(context) {
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

  static name = "Equality";

  static fromStatementNode(statementNode, context) {
    let equality = null;

    const equalityNode = equalityNodeQuery(statementNode);

    if (equalityNode !== null) {
      const { Term } = dom,
            leftTermNode = leftTermNodeQuery(equalityNode),
            rightTermNode = rightTermNodeQuery(equalityNode),
            leftTerm = Term.fromTermNode(leftTermNode, context),
            rightTerm = Term.fromTermNode(rightTermNode, context),
            node = equalityNode,  ///
            string = context.nodeAsString(node);

      equality = new Equality(string, leftTerm, rightTerm);
    }

    return equality;
  }
});
