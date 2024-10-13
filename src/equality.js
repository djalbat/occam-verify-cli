"use strict";

import shim from "./shim";
import equalityUnifier from "./unifier/equality";
import EqualityAssignment from "./assignment/equality";

import { nodeQuery } from "./utilities/query";

const leftTermNodeQuery = nodeQuery("/equality/term[0]"),
      rightTermNodeQuery = nodeQuery("/equality/term[1]");

export default class Equality {
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

    let verifiedWhenStated = false,
        verifiedWhenDerived = false;

    if (stated) {
      verifiedWhenStated = this.verifyWhenStated(localContext);
    } else {
      verifiedWhenDerived = this.verifyWhenDerived(localContext);
    }

    if (verifiedWhenStated || verifiedWhenDerived) {
      if (assignments !== null) {
        const equality = this,  //
              equalityAssignment = EqualityAssignment.fromEquality(equality),
              assignment = equalityAssignment; ///

        assignments.push(assignment);
      }

      verified = true;
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

    const termsVerified = this.verifyTerms(localContext);

    verifiedWhenStated = termsVerified; ///

    if (verifiedWhenStated) {
      localContext.debug(`...verified the '${equalityString}' stated equality.`);
    }

    return verifiedWhenStated;
  }

  verifyWhenDerived(localContext) {
    let verifiedWhenDerived = false;

    const equalityString = this.string; ///

    localContext.trace(`Verifying the '${equalityString}' derived equality...`);

    const termsVerified = this.verifyTerms(localContext);

    if (termsVerified) {
      const equal = this.isEqual(localContext);

      verifiedWhenDerived = equal;  ///
    }

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
