"use strict";

import structure from "../structure";
import EqualityAssignment from "../assignment/equality";
import VariableAssignment from "../assignment/variable";

import { define } from "../structure";
import { equateTerms } from "../process/equate/equantional";

export default define(class Equality {
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

    const equalityString = this.string; ///

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

    const equalityString = this.string; ///

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

    const equalityString = this.string; ///

    context.trace(`Verifying the '${equalityString}' stated equality...`);

    verifiesWhenStated = true;

    if (verifiesWhenStated) {
      context.debug(`...verified the '${equalityString}' stated equality.`);
    }

    return verifiesWhenStated;
  }

  verifyWhenDerived(context) {
    let verifiesWhenDerived;

    const equalityString = this.string; ///

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

    const { Variable } = structure,
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
  const { Term } = structure,
        leftTermNode = equalityNode.getLeftTermNode(),
        leftTerm = Term.fromTermNode(leftTermNode, context);

  return leftTerm;
}

function rightTermFromEqualityNode(equalityNode, context) {
  const { Term } = structure,
        rightTermNode = equalityNode.getRightTermNode(),
        rightTerm = Term.fromTermNode(rightTermNode, context);

  return rightTerm;
}
