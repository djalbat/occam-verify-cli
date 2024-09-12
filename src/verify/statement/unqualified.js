"use strict";

import verifyEquality from "../../verify/equality";
import verifyJudgement from "../../verify/judgement";
import verifyStatement from "../../verify/statement";
import verifyTypeAssertion from "../assertion/type";

import { nodeQuery } from "../../utilities/query";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!"),
      equalityNodeQuery = nodeQuery("/statement/equality!"),
      judgementNodeQuery = nodeQuery("/statement/judgement!"),
      typeAssertionNodeQuery = nodeQuery("/statement/typeAssertion!");

export default function verifyUnqualifiedStatement(unqualifiedStatementNode, assignments, derived, localContext) {
  let unqualifiedStatementVerified;

  const unqualifiedStatementString = localContext.nodeAsString(unqualifiedStatementNode);

  localContext.trace(`Verifying the '${unqualifiedStatementString}' unqualified statement...`, unqualifiedStatementNode);

  const statementNode = statementNodeQuery(unqualifiedStatementNode),
        statementVerified = verifyStatement(statementNode, assignments, derived, localContext);

  // if (statementVerified) {
  //   const verifyUnqualifiedStatementFunctions = [
  //     verifyDerivedUnqualifiedStatement,
  //     verifyStatedUnqualifiedStatement
  //   ];
  //
  //   unqualifiedStatementVerified = verifyUnqualifiedStatementFunctions.some((verifyUnqualifiedStatementFunction) => {
  //     const unqualifiedStatementVerified = verifyUnqualifiedStatementFunction(unqualifiedStatementNode, assignments, derived, localContext);
  //
  //     if (unqualifiedStatementVerified) {
  //       return true;
  //     }
  //   });
  // }

  unqualifiedStatementVerified = statementVerified; ///

  if (unqualifiedStatementVerified) {
    localContext.debug(`...verified the '${unqualifiedStatementString}' unqualified statement.`, unqualifiedStatementNode);
  }

  return unqualifiedStatementVerified;
}

// function verifyDerivedUnqualifiedStatement(unqualifiedStatementNode, assignments, derived, localContext) {
//   let derivedUnqualifiedStatementVerified = false;
//
//   if (derived) {
//     const statementNode = statementNodeQuery(unqualifiedStatementNode),
//           unqualifiedStatementString = localContext.nodeAsString(unqualifiedStatementNode);
//
//     localContext.trace(`Verifying the '${unqualifiedStatementString}' derived unqualified statement...`, unqualifiedStatementNode);
//
//     const statementUnified = localContext.unifyStatement(statementNode, localContext);
//
//     if (statementUnified) {
//       derivedUnqualifiedStatementVerified = true;
//     } else {
//       const statementNode = statementNodeQuery(unqualifiedStatementNode),
//             derivedStatementVerified = verifyDerivedStatement(statementNode, assignments, derived, localContext);
//
//       derivedUnqualifiedStatementVerified = derivedStatementVerified; ///
//     }
//
//     if (derivedUnqualifiedStatementVerified) {
//       localContext.debug(`...verified the '${unqualifiedStatementString}' derived unqualified statement.`, unqualifiedStatementNode);
//     }
//   }
//
//   return derivedUnqualifiedStatementVerified;
// }
//
// function verifyStatedUnqualifiedStatement(unqualifiedStatementNode, assignments, derived, localContext) {
//   let statedUnqualifiedStatementVerified = false;
//
//   if (!derived) {
//     const statementNode = statementNodeQuery(unqualifiedStatementNode),
//           unqualifiedStatementString = localContext.nodeAsString(unqualifiedStatementNode);
//
//     localContext.trace(`Verifying the '${unqualifiedStatementString}' stated unqualified statement...`, unqualifiedStatementNode);
//
//     debugger
//
//     if (statedUnqualifiedStatementVerified) {
//       localContext.debug(`...verified the '${unqualifiedStatementString}' stated unqualified statement.`, unqualifiedStatementNode);
//     }
//   }
//
//   return statedUnqualifiedStatementVerified;
// }
//
// function verifyDerivedStatement(statementNode, assignments, derived, localContext) {
//   let derivedStatementVerified;
//
//   const statementString = localContext.nodeAsString(statementNode);
//
//   localContext.trace(`Verifying the '${statementString}' derived statement...`, statementNode);
//
//   const verifyDerivedStatementFunctions = [
//     verifyDerivedStatementAsEquality,
//     verifyDerivedStatementAsJudgement,
//     verifyDerivedStatementAsTypeAssertion
//   ];
//
//   derivedStatementVerified = verifyDerivedStatementFunctions.every((verifyDerivedStatementFunction) => {  ///
//     const derivedStatementVerified = verifyDerivedStatementFunction(statementNode, assignments, derived, localContext);
//
//     if (derivedStatementVerified) {
//       return true;
//     }
//   });
//
//   if (derivedStatementVerified) {
//     localContext.debug(`...verified the '${statementString}' derived statement.`, statementNode);
//   }
//
//   return derivedStatementVerified;
// }
//
// function verifyDerivedStatementAsEquality(statementNode, assignments, derived, localContext) {
//   let derivedStatementVerifiedAsEquality = true; ///
//
//   const equalityNode = equalityNodeQuery(statementNode);
//
//   if (equalityNode !== null) {
//     const statementString = localContext.nodeAsString(statementNode);
//
//     localContext.trace(`Verifying the '${statementString}' derived statement as an equality...`, statementNode);
//
//     const equalityVerified = verifyEquality(equalityNode, assignments, derived, localContext);
//
//     derivedStatementVerifiedAsEquality = equalityVerified; ///
//
//     if (derivedStatementVerifiedAsEquality) {
//       localContext.debug(`...verified the '${statementString}' derived statement as an equality.`, statementNode);
//     }
//   }
//
//   return derivedStatementVerifiedAsEquality;
// }
//
// function verifyDerivedStatementAsJudgement(statementNode, assignments, derived, localContext) {
//   let derivedStatementVerifiedAsJudgement = true;
//
//   const judgementNode = judgementNodeQuery(statementNode);
//
//   if (judgementNode !== null) {
//     const statementString = localContext.nodeAsString(statementNode);
//
//     localContext.trace(`Verifying the '${statementString}' derived statement as a judgement...`, statementNode);
//
//     const judgementVerified = verifyJudgement(judgementNode, assignments, derived, localContext);
//
//     derivedStatementVerifiedAsJudgement = judgementVerified;  ///
//
//     if (derivedStatementVerifiedAsJudgement) {
//       localContext.debug(`...verified the '${statementString}' derived statement as a judgement.`, statementNode);
//     }
//   }
//
//   return derivedStatementVerifiedAsJudgement;
// }
//
// function verifyDerivedStatementAsTypeAssertion(statementNode, assignments, derived, localContext) {
//   let statementVerifiedAsTypeAssertion = true;  ///
//
//   const typeAssertionNode = typeAssertionNodeQuery(statementNode);
//
//   if (typeAssertionNode !== null) {
//     const statementString = localContext.nodeAsString(statementNode);
//
//     localContext.trace(`Verifying the '${statementString}' derived statement as a type assertion...`, statementNode);
//
//     const typeAssertionVerified = verifyTypeAssertion(typeAssertionNode, assignments, derived, localContext);
//
//     statementVerifiedAsTypeAssertion = typeAssertionVerified; ///
//
//     if (statementVerifiedAsTypeAssertion) {
//       localContext.debug(`...verified the '${statementString}' derived statement as a type assertion.`, statementNode);
//     }
//   }
//
//   return statementVerifiedAsTypeAssertion;
// }

// function verifyStatedStatement(statementNode, assignments, derived, localContext) {
//   let statedStatementVerified;
//
//   const statementString = localContext.nodeAsString(statementNode);
//
//   localContext.trace(`Verifying the '${statementString}' stated statement...`, statementNode);
//
//   const verifyStatedStatementFunctions = [
//     verifyStatedStatementAsEquality,
//     verifyStatedStatementAsJudgement,
//     verifyStatedStatementAsTypeAssertion
//   ];
//
//   verifyStatedStatementFunctions.every((verifyStatedStatementFunction) => { ///
//     const statedStatementVerified = verifyStatedStatementFunction(statementNode, assignments, derived, localContext);
//
//     if (statedStatementVerified) {
//       return true;
//     }
//   });
//
//   statedStatementVerified = true; ///
//
//   if (statedStatementVerified) {
//     localContext.debug(`...verified the '${statementString}' stated statement.`, statementNode);
//   }
//
//   return statedStatementVerified;
// }
//
// function verifyStatedStatementAsEquality(statementNode, assignments, derived, localContext) {
//   let statedStatementVerifiedAsEquality = true; ///
//
//   const equalityNode = equalityNodeQuery(statementNode);
//
//   if (equalityNode !== null) {
//     const statementString = localContext.nodeAsString(statementNode);
//
//     localContext.trace(`Verifying the '${statementString}' stated statement as an equality...`, statementNode);
//
//     const equalityVerified = verifyEquality(equalityNode, assignments, derived, localContext);
//
//     statedStatementVerifiedAsEquality = equalityVerified; ///
//
//     if (statedStatementVerifiedAsEquality) {
//       localContext.debug(`...verified the '${statementString}' stated statement as an equality.`, statementNode);
//     }
//   }
//
//   return statedStatementVerifiedAsEquality;
// }
//
// function verifyStatedStatementAsJudgement(statementNode, assignments, derived, localContext) {
//   let statedStatementVerifiedAsJudgement = true;
//
//   const judgementNode = judgementNodeQuery(statementNode);
//
//   if (judgementNode !== null) {
//     const statementString = localContext.nodeAsString(statementNode);
//
//     localContext.trace(`Verifying the '${statementString}' stated statement as a judgement...`, statementNode);
//
//     const judgementVerified = verifyJudgement(judgementNode, assignments, derived, localContext);
//
//     statedStatementVerifiedAsJudgement = judgementVerified;  ///
//
//     if (statedStatementVerifiedAsJudgement) {
//       localContext.debug(`...verified the '${statementString}' stated statement as a judgement.`, statementNode);
//     }
//   }
//
//   return statedStatementVerifiedAsJudgement;
// }
//
// function verifyStatedStatementAsTypeAssertion(statementNode, assignments, derived, localContext) {
//   let statementVerifiedAsTypeAssertion = true;  ///
//
//   const typeAssertionNode = typeAssertionNodeQuery(statementNode);
//
//   if (typeAssertionNode !== null) {
//     const statementString = localContext.nodeAsString(statementNode);
//
//     localContext.trace(`Verifying the '${statementString}' stated statement as a type assertion...`, statementNode);
//
//     const typeAssertionVerified = verifyTypeAssertion(typeAssertionNode, assignments, derived, localContext);
//
//     statementVerifiedAsTypeAssertion = typeAssertionVerified; ///
//
//     if (statementVerifiedAsTypeAssertion) {
//       localContext.debug(`...verified the '${statementString}' stated statement as a type assertion.`, statementNode);
//     }
//   }
//
//   return statementVerifiedAsTypeAssertion;
// }
