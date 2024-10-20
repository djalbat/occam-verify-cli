"use strict";

import shim from "./shim";
import equalityUnifier from "./unifier/equality";
import EqualityAssignment from "./assignment/equality";
import VariableAssignment from "./assignment/variable";

import { nodeQuery } from "./utilities/query";

const variableNodeQuery = nodeQuery("/term/variable!"),
      leftTermNodeQuery = nodeQuery("/equality/term[0]"),
      rightTermNodeQuery = nodeQuery("/equality/term[1]");

class Equality {
  constructor(string,leftTerm, rightTerm) {
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
    const leftTermMatchesRightTerm = this.leftTerm.match(this.rightTerm),
          reflexive = leftTermMatchesRightTerm; ///

    return reflexive;
  }

  isEqual(localContext) {
    const leftTermNode = this.leftTerm.getNode(),
          rightTermNode = this.rightTerm.getNode(),
          equalityUnified = equalityUnifier.unify(leftTermNode, rightTermNode, localContext),
          equal = equalityUnified;  ///

    return equal;
  }

  verify(assignments, stated, localContext) {
    let verified = false;

    const equalityString = this.string; ///

    localContext.trace(`Verifying the '${equalityString}' equality...`);

    const termsVerified = this.verifyTerms(localContext);

    if (termsVerified) {
      let verifiedWhenStated = false,
          verifiedWhenDerived = false;

      if (stated) {
        verifiedWhenStated = this.verifyWhenStated(localContext);
      } else {
        verifiedWhenDerived = this.verifyWhenDerived(localContext);
      }

      if (verifiedWhenStated || verifiedWhenDerived) {
        if (assignments !== null) {
          const { Variable } = shim,
                type = this.getType(),
                leftTermNode = this.leftTerm.getNode(),
                rightTermNode = this.rightTerm.getNode(),
                leftVariableNode = variableNodeQuery(leftTermNode),
                rightVariableNode = variableNodeQuery(rightTermNode),
                leftVariable = Variable.fromVariableNodeAndType(leftVariableNode, type, localContext),
                rightVariable = Variable.fromVariableNodeAndType(rightVariableNode, type, localContext);

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
      localContext.debug(`...verified the '${equalityString}' equality.`);
    }

    return verified;
  }

  verifyTerms(localContext) {
    let termsVerified;

    const equalityString = this.string; ///

    localContext.trace(`Verifying the '${equalityString}' equality's terms...`);

    const leftTermVerified = this.leftTerm.verify(localContext, () => {
      let verifiedAhead;

      const rightTermVerified = this.rightTerm.verify(localContext, () => {
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
      localContext.debug(`...verified the '${equalityString}' equality's terms.`);
    }

    return termsVerified;
  }

  verifyWhenStated(localContext) {
    let verifiedWhenStated;

    const equalityString = this.string; ///

    localContext.trace(`Verifying the '${equalityString}' stated equality...`);

    verifiedWhenStated = true;

    if (verifiedWhenStated) {
      localContext.debug(`...verified the '${equalityString}' stated equality.`);
    }

    return verifiedWhenStated;
  }

  verifyWhenDerived(localContext) {
    let verifiedWhenDerived;

    const equalityString = this.string; ///

    localContext.trace(`Verifying the '${equalityString}' derived equality...`);

    const equal = this.isEqual(localContext);

    verifiedWhenDerived = equal;  ///

    if (verifiedWhenDerived) {
      localContext.debug(`...verified the '${equalityString}' derived equality.`);
    }

    return verifiedWhenDerived;
  }

  static fromEqualityNode(equalityNode, localContext) {
    let equality = null;

    if (equalityNode !== null) {
      const { Term } = shim,
            leftTermNode = leftTermNodeQuery(equalityNode),
            rightTermNode = rightTermNodeQuery(equalityNode),
            leftTerm = Term.fromTermNode(leftTermNode, localContext),
            rightTerm = Term.fromTermNode(rightTermNode, localContext),
            node = equalityNode,  ///
            string = localContext.nodeAsString(node);

      equality = new Equality(string, leftTerm, rightTerm);
    }

    return equality;
  }
}

Object.assign(shim, {
  Equality
});

export default Equality;