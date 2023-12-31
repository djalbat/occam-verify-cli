"use strict";

export default class Equality {
  constructor(leftTerm, rightTerm) {
    this.leftTerm = leftTerm;
    this.rightTerm = rightTerm;
  }

  getLeftTerm() {
    return this.leftTerm;
  }

  getRightTerm() {
    return this.rightTerm;
  }

  isReflexive() {
    const leftTermMatchesRightTerm = this.leftTerm.match(this.rightTerm),
          reflexive = leftTermMatchesRightTerm;

    return reflexive;
  }

  // matchTermNodes(leftTermNode, rightTermNode, reversed, equalities, context) {
  //   let termNodesMatch = true;
  //
  //   if (termNodesMatch) {
  //     const leftNonTerminalNode = reversed ?
  //                                   this.rightTermNode :
  //                                     this.leftTermNode,  ///
  //           rightNonTerminalNode = leftTermNode,  ///
  //           nonTerminalNodeVerified = equalityNodesVerifier.verifyNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, context);
  //
  //     termNodesMatch = nonTerminalNodeVerified; ///
  //   }
  //
  //   if (termNodesMatch) {
  //     const leftNonTerminalNode = reversed ?
  //                                   this.leftTermNode :
  //                                     this.rightTermNode,  ///
  //           rightNonTerminalNode = rightTermNode,  ///
  //           nonTerminalNodeVerified = equalityNodesVerifier.verifyNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, context);
  //
  //     termNodesMatch = nonTerminalNodeVerified; ///
  //   }
  //
  //   return termNodesMatch;
  // }

  // match(equality, equalities, context) {
  //   let matches = false;
  //
  //   const leftTermNode = equality.getLeftTermNode(),
  //         rightTermNode = equality.getRightTermNode();
  //
  //   equalities = filterEqualities(equalities, equality);  ///
  //
  //   if (!matches) {
  //     const reversed = false,
  //           leftTermNodeAndRightTermNodeMatch = this.matchTermNodes(leftTermNode, rightTermNode, reversed, equalities, context);
  //
  //     matches = leftTermNodeAndRightTermNodeMatch;  ///
  //   }
  //
  //   if (!matches) {
  //     const reversed = true,
  //           leftTermNodeAndRightTermNodeMatch = this.matchTermNodes(leftTermNode, rightTermNode, reversed, equalities, context);
  //
  //     matches = leftTermNodeAndRightTermNodeMatch;  ///
  //   }
  //
  //   return matches;
  // }

  // verify(equalities, context, verifyAhead) {
  //   const leftNonTerminalNode = this.leftTermNode,  ///
  //         rightNonTerminalNode = this.rightTermNode,  ///
  //         nonTerminalNodeVerified = equalityNodesVerifier.verifyNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, context, verifyAhead),
  //         verified = nonTerminalNodeVerified; ///
  //
  //   return verified;
  // }

  static fromLeftTermAndRightTerm(leftTerm, rightTerm) {
    let equality = null;

    const leftTermType = leftTerm.getType(),
          rightTermType = rightTerm.getType(),
          leftTermTypeEqualToSubTypeOfOrSuperTypeOfRightTermType = leftTermType.isEqualToSubTypeOfOrSuperTypeOf(rightTermType);

    if (leftTermTypeEqualToSubTypeOfOrSuperTypeOfRightTermType) {
      equality = new Equality(leftTerm, rightTerm);
    }

    return equality;
  }
}

// function filterEqualities(equalities, equality) {
//   const equalityA = equality; ///
//
//   equalities = equalities.filter((equality) => {
//     const equalityB = equality; ///
//
//     if (equalityA !== equalityB) {
//       return true;
//     }
//   });
//
//   return equalities;
// }
