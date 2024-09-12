"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default" // function verifyDerivedUnqualifiedStatement(unqualifiedStatementNode, assignments, derived, localContext) {
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
, {
    enumerable: true,
    get: function() {
        return verifyUnqualifiedStatement;
    }
});
var _equality = /*#__PURE__*/ _interop_require_default(require("../../verify/equality"));
var _judgement = /*#__PURE__*/ _interop_require_default(require("../../verify/judgement"));
var _statement = /*#__PURE__*/ _interop_require_default(require("../../verify/statement"));
var _type = /*#__PURE__*/ _interop_require_default(require("../assertion/type"));
var _query = require("../../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var statementNodeQuery = (0, _query.nodeQuery)("/unqualifiedStatement/statement!"), equalityNodeQuery = (0, _query.nodeQuery)("/statement/equality!"), judgementNodeQuery = (0, _query.nodeQuery)("/statement/judgement!"), typeAssertionNodeQuery = (0, _query.nodeQuery)("/statement/typeAssertion!");
function verifyUnqualifiedStatement(unqualifiedStatementNode, assignments, derived, localContext) {
    var unqualifiedStatementVerified;
    var unqualifiedStatementString = localContext.nodeAsString(unqualifiedStatementNode);
    localContext.trace("Verifying the '".concat(unqualifiedStatementString, "' unqualified statement..."), unqualifiedStatementNode);
    var statementNode = statementNodeQuery(unqualifiedStatementNode), statementVerified = (0, _statement.default)(statementNode, assignments, derived, localContext);
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
        localContext.debug("...verified the '".concat(unqualifiedStatementString, "' unqualified statement."), unqualifiedStatementNode);
    }
    return unqualifiedStatementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50L3VucXVhbGlmaWVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5RXF1YWxpdHkgZnJvbSBcIi4uLy4uL3ZlcmlmeS9lcXVhbGl0eVwiO1xuaW1wb3J0IHZlcmlmeUp1ZGdlbWVudCBmcm9tIFwiLi4vLi4vdmVyaWZ5L2p1ZGdlbWVudFwiO1xuaW1wb3J0IHZlcmlmeVN0YXRlbWVudCBmcm9tIFwiLi4vLi4vdmVyaWZ5L3N0YXRlbWVudFwiO1xuaW1wb3J0IHZlcmlmeVR5cGVBc3NlcnRpb24gZnJvbSBcIi4uL2Fzc2VydGlvbi90eXBlXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3Qgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3VucXVhbGlmaWVkU3RhdGVtZW50L3N0YXRlbWVudCFcIiksXG4gICAgICBlcXVhbGl0eU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvZXF1YWxpdHkhXCIpLFxuICAgICAganVkZ2VtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9qdWRnZW1lbnQhXCIpLFxuICAgICAgdHlwZUFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvdHlwZUFzc2VydGlvbiFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50KHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZDtcblxuICBjb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyB1bnF1YWxpZmllZCBzdGF0ZW1lbnQuLi5gLCB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgc3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgLy8gaWYgKHN0YXRlbWVudFZlcmlmaWVkKSB7XG4gIC8vICAgY29uc3QgdmVyaWZ5VW5xdWFsaWZpZWRTdGF0ZW1lbnRGdW5jdGlvbnMgPSBbXG4gIC8vICAgICB2ZXJpZnlEZXJpdmVkVW5xdWFsaWZpZWRTdGF0ZW1lbnQsXG4gIC8vICAgICB2ZXJpZnlTdGF0ZWRVbnF1YWxpZmllZFN0YXRlbWVudFxuICAvLyAgIF07XG4gIC8vXG4gIC8vICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50RnVuY3Rpb25zLnNvbWUoKHZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50RnVuY3Rpb24pID0+IHtcbiAgLy8gICAgIGNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudEZ1bmN0aW9uKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCk7XG4gIC8vXG4gIC8vICAgICBpZiAodW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAvLyAgICAgICByZXR1cm4gdHJ1ZTtcbiAgLy8gICAgIH1cbiAgLy8gICB9KTtcbiAgLy8gfVxuXG4gIHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSBzdGF0ZW1lbnRWZXJpZmllZDsgLy8vXG5cbiAgaWYgKHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ30nIHVucXVhbGlmaWVkIHN0YXRlbWVudC5gLCB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQ7XG59XG5cbi8vIGZ1bmN0aW9uIHZlcmlmeURlcml2ZWRVbnF1YWxpZmllZFN0YXRlbWVudCh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbi8vICAgbGV0IGRlcml2ZWRVbnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gZmFsc2U7XG4vL1xuLy8gICBpZiAoZGVyaXZlZCkge1xuLy8gICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSxcbi8vICAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcbi8vXG4vLyAgICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3VucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nfScgZGVyaXZlZCB1bnF1YWxpZmllZCBzdGF0ZW1lbnQuLi5gLCB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuLy9cbi8vICAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVkID0gbG9jYWxDb250ZXh0LnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCk7XG4vL1xuLy8gICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4vLyAgICAgICBkZXJpdmVkVW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHRydWU7XG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSxcbi8vICAgICAgICAgICAgIGRlcml2ZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeURlcml2ZWRTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCk7XG4vL1xuLy8gICAgICAgZGVyaXZlZFVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSBkZXJpdmVkU3RhdGVtZW50VmVyaWZpZWQ7IC8vL1xuLy8gICAgIH1cbi8vXG4vLyAgICAgaWYgKGRlcml2ZWRVbnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4vLyAgICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ30nIGRlcml2ZWQgdW5xdWFsaWZpZWQgc3RhdGVtZW50LmAsIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG4vLyAgICAgfVxuLy8gICB9XG4vL1xuLy8gICByZXR1cm4gZGVyaXZlZFVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQ7XG4vLyB9XG4vL1xuLy8gZnVuY3Rpb24gdmVyaWZ5U3RhdGVkVW5xdWFsaWZpZWRTdGF0ZW1lbnQodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4vLyAgIGxldCBzdGF0ZWRVbnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gZmFsc2U7XG4vL1xuLy8gICBpZiAoIWRlcml2ZWQpIHtcbi8vICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSksXG4vLyAgICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG4vL1xuLy8gICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ30nIHN0YXRlZCB1bnF1YWxpZmllZCBzdGF0ZW1lbnQuLi5gLCB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuLy9cbi8vICAgICBkZWJ1Z2dlclxuLy9cbi8vICAgICBpZiAoc3RhdGVkVW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuLy8gICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZWQgdW5xdWFsaWZpZWQgc3RhdGVtZW50LmAsIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG4vLyAgICAgfVxuLy8gICB9XG4vL1xuLy8gICByZXR1cm4gc3RhdGVkVW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZDtcbi8vIH1cbi8vXG4vLyBmdW5jdGlvbiB2ZXJpZnlEZXJpdmVkU3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbi8vICAgbGV0IGRlcml2ZWRTdGF0ZW1lbnRWZXJpZmllZDtcbi8vXG4vLyAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG4vL1xuLy8gICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgZGVyaXZlZCBzdGF0ZW1lbnQuLi5gLCBzdGF0ZW1lbnROb2RlKTtcbi8vXG4vLyAgIGNvbnN0IHZlcmlmeURlcml2ZWRTdGF0ZW1lbnRGdW5jdGlvbnMgPSBbXG4vLyAgICAgdmVyaWZ5RGVyaXZlZFN0YXRlbWVudEFzRXF1YWxpdHksXG4vLyAgICAgdmVyaWZ5RGVyaXZlZFN0YXRlbWVudEFzSnVkZ2VtZW50LFxuLy8gICAgIHZlcmlmeURlcml2ZWRTdGF0ZW1lbnRBc1R5cGVBc3NlcnRpb25cbi8vICAgXTtcbi8vXG4vLyAgIGRlcml2ZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeURlcml2ZWRTdGF0ZW1lbnRGdW5jdGlvbnMuZXZlcnkoKHZlcmlmeURlcml2ZWRTdGF0ZW1lbnRGdW5jdGlvbikgPT4geyAgLy8vXG4vLyAgICAgY29uc3QgZGVyaXZlZFN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5RGVyaXZlZFN0YXRlbWVudEZ1bmN0aW9uKHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpO1xuLy9cbi8vICAgICBpZiAoZGVyaXZlZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4vLyAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICB9XG4vLyAgIH0pO1xuLy9cbi8vICAgaWYgKGRlcml2ZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuLy8gICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIGRlcml2ZWQgc3RhdGVtZW50LmAsIHN0YXRlbWVudE5vZGUpO1xuLy8gICB9XG4vL1xuLy8gICByZXR1cm4gZGVyaXZlZFN0YXRlbWVudFZlcmlmaWVkO1xuLy8gfVxuLy9cbi8vIGZ1bmN0aW9uIHZlcmlmeURlcml2ZWRTdGF0ZW1lbnRBc0VxdWFsaXR5KHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbi8vICAgbGV0IGRlcml2ZWRTdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkgPSB0cnVlOyAvLy9cbi8vXG4vLyAgIGNvbnN0IGVxdWFsaXR5Tm9kZSA9IGVxdWFsaXR5Tm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuLy9cbi8vICAgaWYgKGVxdWFsaXR5Tm9kZSAhPT0gbnVsbCkge1xuLy8gICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG4vL1xuLy8gICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBkZXJpdmVkIHN0YXRlbWVudCBhcyBhbiBlcXVhbGl0eS4uLmAsIHN0YXRlbWVudE5vZGUpO1xuLy9cbi8vICAgICBjb25zdCBlcXVhbGl0eVZlcmlmaWVkID0gdmVyaWZ5RXF1YWxpdHkoZXF1YWxpdHlOb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KTtcbi8vXG4vLyAgICAgZGVyaXZlZFN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IGVxdWFsaXR5VmVyaWZpZWQ7IC8vL1xuLy9cbi8vICAgICBpZiAoZGVyaXZlZFN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSkge1xuLy8gICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgZGVyaXZlZCBzdGF0ZW1lbnQgYXMgYW4gZXF1YWxpdHkuYCwgc3RhdGVtZW50Tm9kZSk7XG4vLyAgICAgfVxuLy8gICB9XG4vL1xuLy8gICByZXR1cm4gZGVyaXZlZFN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eTtcbi8vIH1cbi8vXG4vLyBmdW5jdGlvbiB2ZXJpZnlEZXJpdmVkU3RhdGVtZW50QXNKdWRnZW1lbnQoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCkge1xuLy8gICBsZXQgZGVyaXZlZFN0YXRlbWVudFZlcmlmaWVkQXNKdWRnZW1lbnQgPSB0cnVlO1xuLy9cbi8vICAgY29uc3QganVkZ2VtZW50Tm9kZSA9IGp1ZGdlbWVudE5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcbi8vXG4vLyAgIGlmIChqdWRnZW1lbnROb2RlICE9PSBudWxsKSB7XG4vLyAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcbi8vXG4vLyAgICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIGRlcml2ZWQgc3RhdGVtZW50IGFzIGEganVkZ2VtZW50Li4uYCwgc3RhdGVtZW50Tm9kZSk7XG4vL1xuLy8gICAgIGNvbnN0IGp1ZGdlbWVudFZlcmlmaWVkID0gdmVyaWZ5SnVkZ2VtZW50KGp1ZGdlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpO1xuLy9cbi8vICAgICBkZXJpdmVkU3RhdGVtZW50VmVyaWZpZWRBc0p1ZGdlbWVudCA9IGp1ZGdlbWVudFZlcmlmaWVkOyAgLy8vXG4vL1xuLy8gICAgIGlmIChkZXJpdmVkU3RhdGVtZW50VmVyaWZpZWRBc0p1ZGdlbWVudCkge1xuLy8gICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgZGVyaXZlZCBzdGF0ZW1lbnQgYXMgYSBqdWRnZW1lbnQuYCwgc3RhdGVtZW50Tm9kZSk7XG4vLyAgICAgfVxuLy8gICB9XG4vL1xuLy8gICByZXR1cm4gZGVyaXZlZFN0YXRlbWVudFZlcmlmaWVkQXNKdWRnZW1lbnQ7XG4vLyB9XG4vL1xuLy8gZnVuY3Rpb24gdmVyaWZ5RGVyaXZlZFN0YXRlbWVudEFzVHlwZUFzc2VydGlvbihzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4vLyAgIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbiA9IHRydWU7ICAvLy9cbi8vXG4vLyAgIGNvbnN0IHR5cGVBc3NlcnRpb25Ob2RlID0gdHlwZUFzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcbi8vXG4vLyAgIGlmICh0eXBlQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuLy8gICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG4vL1xuLy8gICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBkZXJpdmVkIHN0YXRlbWVudCBhcyBhIHR5cGUgYXNzZXJ0aW9uLi4uYCwgc3RhdGVtZW50Tm9kZSk7XG4vL1xuLy8gICAgIGNvbnN0IHR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpO1xuLy9cbi8vICAgICBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbiA9IHR5cGVBc3NlcnRpb25WZXJpZmllZDsgLy8vXG4vL1xuLy8gICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbikge1xuLy8gICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgZGVyaXZlZCBzdGF0ZW1lbnQgYXMgYSB0eXBlIGFzc2VydGlvbi5gLCBzdGF0ZW1lbnROb2RlKTtcbi8vICAgICB9XG4vLyAgIH1cbi8vXG4vLyAgIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbjtcbi8vIH1cblxuLy8gZnVuY3Rpb24gdmVyaWZ5U3RhdGVkU3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbi8vICAgbGV0IHN0YXRlZFN0YXRlbWVudFZlcmlmaWVkO1xuLy9cbi8vICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcbi8vXG4vLyAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZWQgc3RhdGVtZW50Li4uYCwgc3RhdGVtZW50Tm9kZSk7XG4vL1xuLy8gICBjb25zdCB2ZXJpZnlTdGF0ZWRTdGF0ZW1lbnRGdW5jdGlvbnMgPSBbXG4vLyAgICAgdmVyaWZ5U3RhdGVkU3RhdGVtZW50QXNFcXVhbGl0eSxcbi8vICAgICB2ZXJpZnlTdGF0ZWRTdGF0ZW1lbnRBc0p1ZGdlbWVudCxcbi8vICAgICB2ZXJpZnlTdGF0ZWRTdGF0ZW1lbnRBc1R5cGVBc3NlcnRpb25cbi8vICAgXTtcbi8vXG4vLyAgIHZlcmlmeVN0YXRlZFN0YXRlbWVudEZ1bmN0aW9ucy5ldmVyeSgodmVyaWZ5U3RhdGVkU3RhdGVtZW50RnVuY3Rpb24pID0+IHsgLy8vXG4vLyAgICAgY29uc3Qgc3RhdGVkU3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlTdGF0ZWRTdGF0ZW1lbnRGdW5jdGlvbihzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KTtcbi8vXG4vLyAgICAgaWYgKHN0YXRlZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4vLyAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICB9XG4vLyAgIH0pO1xuLy9cbi8vICAgc3RhdGVkU3RhdGVtZW50VmVyaWZpZWQgPSB0cnVlOyAvLy9cbi8vXG4vLyAgIGlmIChzdGF0ZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuLy8gICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlZCBzdGF0ZW1lbnQuYCwgc3RhdGVtZW50Tm9kZSk7XG4vLyAgIH1cbi8vXG4vLyAgIHJldHVybiBzdGF0ZWRTdGF0ZW1lbnRWZXJpZmllZDtcbi8vIH1cbi8vXG4vLyBmdW5jdGlvbiB2ZXJpZnlTdGF0ZWRTdGF0ZW1lbnRBc0VxdWFsaXR5KHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbi8vICAgbGV0IHN0YXRlZFN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IHRydWU7IC8vL1xuLy9cbi8vICAgY29uc3QgZXF1YWxpdHlOb2RlID0gZXF1YWxpdHlOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG4vL1xuLy8gICBpZiAoZXF1YWxpdHlOb2RlICE9PSBudWxsKSB7XG4vLyAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcbi8vXG4vLyAgICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlZCBzdGF0ZW1lbnQgYXMgYW4gZXF1YWxpdHkuLi5gLCBzdGF0ZW1lbnROb2RlKTtcbi8vXG4vLyAgICAgY29uc3QgZXF1YWxpdHlWZXJpZmllZCA9IHZlcmlmeUVxdWFsaXR5KGVxdWFsaXR5Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCk7XG4vL1xuLy8gICAgIHN0YXRlZFN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IGVxdWFsaXR5VmVyaWZpZWQ7IC8vL1xuLy9cbi8vICAgICBpZiAoc3RhdGVkU3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5KSB7XG4vLyAgICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZWQgc3RhdGVtZW50IGFzIGFuIGVxdWFsaXR5LmAsIHN0YXRlbWVudE5vZGUpO1xuLy8gICAgIH1cbi8vICAgfVxuLy9cbi8vICAgcmV0dXJuIHN0YXRlZFN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eTtcbi8vIH1cbi8vXG4vLyBmdW5jdGlvbiB2ZXJpZnlTdGF0ZWRTdGF0ZW1lbnRBc0p1ZGdlbWVudChzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4vLyAgIGxldCBzdGF0ZWRTdGF0ZW1lbnRWZXJpZmllZEFzSnVkZ2VtZW50ID0gdHJ1ZTtcbi8vXG4vLyAgIGNvbnN0IGp1ZGdlbWVudE5vZGUgPSBqdWRnZW1lbnROb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG4vL1xuLy8gICBpZiAoanVkZ2VtZW50Tm9kZSAhPT0gbnVsbCkge1xuLy8gICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG4vL1xuLy8gICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZWQgc3RhdGVtZW50IGFzIGEganVkZ2VtZW50Li4uYCwgc3RhdGVtZW50Tm9kZSk7XG4vL1xuLy8gICAgIGNvbnN0IGp1ZGdlbWVudFZlcmlmaWVkID0gdmVyaWZ5SnVkZ2VtZW50KGp1ZGdlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpO1xuLy9cbi8vICAgICBzdGF0ZWRTdGF0ZW1lbnRWZXJpZmllZEFzSnVkZ2VtZW50ID0ganVkZ2VtZW50VmVyaWZpZWQ7ICAvLy9cbi8vXG4vLyAgICAgaWYgKHN0YXRlZFN0YXRlbWVudFZlcmlmaWVkQXNKdWRnZW1lbnQpIHtcbi8vICAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlZCBzdGF0ZW1lbnQgYXMgYSBqdWRnZW1lbnQuYCwgc3RhdGVtZW50Tm9kZSk7XG4vLyAgICAgfVxuLy8gICB9XG4vL1xuLy8gICByZXR1cm4gc3RhdGVkU3RhdGVtZW50VmVyaWZpZWRBc0p1ZGdlbWVudDtcbi8vIH1cbi8vXG4vLyBmdW5jdGlvbiB2ZXJpZnlTdGF0ZWRTdGF0ZW1lbnRBc1R5cGVBc3NlcnRpb24oc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCkge1xuLy8gICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBc1R5cGVBc3NlcnRpb24gPSB0cnVlOyAgLy8vXG4vL1xuLy8gICBjb25zdCB0eXBlQXNzZXJ0aW9uTm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG4vL1xuLy8gICBpZiAodHlwZUFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbi8vICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuLy9cbi8vICAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVkIHN0YXRlbWVudCBhcyBhIHR5cGUgYXNzZXJ0aW9uLi4uYCwgc3RhdGVtZW50Tm9kZSk7XG4vL1xuLy8gICAgIGNvbnN0IHR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpO1xuLy9cbi8vICAgICBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbiA9IHR5cGVBc3NlcnRpb25WZXJpZmllZDsgLy8vXG4vL1xuLy8gICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbikge1xuLy8gICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVkIHN0YXRlbWVudCBhcyBhIHR5cGUgYXNzZXJ0aW9uLmAsIHN0YXRlbWVudE5vZGUpO1xuLy8gICAgIH1cbi8vICAgfVxuLy9cbi8vICAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uO1xuLy8gfVxuIl0sIm5hbWVzIjpbInZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZXF1YWxpdHlOb2RlUXVlcnkiLCJqdWRnZW1lbnROb2RlUXVlcnkiLCJ0eXBlQXNzZXJ0aW9uTm9kZVF1ZXJ5IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiYXNzaWdubWVudHMiLCJkZXJpdmVkIiwibG9jYWxDb250ZXh0IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCIsInVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50VmVyaWZpZWQiLCJ2ZXJpZnlTdGF0ZW1lbnQiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0EsVUFrQ0EsNkdBQTZHO0NBQzdHLHFEQUFxRDtDQUNyRCxFQUFFO0NBQ0YsbUJBQW1CO0NBQ25CLDBFQUEwRTtDQUMxRSw4RkFBOEY7Q0FDOUYsRUFBRTtDQUNGLHNJQUFzSTtDQUN0SSxFQUFFO0NBQ0YseUZBQXlGO0NBQ3pGLEVBQUU7Q0FDRiw4QkFBOEI7Q0FDOUIsb0RBQW9EO0NBQ3BELGVBQWU7Q0FDZiw0RUFBNEU7Q0FDNUUsb0hBQW9IO0NBQ3BILEVBQUU7Q0FDRiw0RUFBNEU7Q0FDNUUsUUFBUTtDQUNSLEVBQUU7Q0FDRixpREFBaUQ7Q0FDakQsd0lBQXdJO0NBQ3hJLFFBQVE7Q0FDUixNQUFNO0NBQ04sRUFBRTtDQUNGLGdEQUFnRDtDQUNoRCxJQUFJO0NBQ0osRUFBRTtDQUNGLDRHQUE0RztDQUM1RyxvREFBb0Q7Q0FDcEQsRUFBRTtDQUNGLG9CQUFvQjtDQUNwQiwwRUFBMEU7Q0FDMUUsOEZBQThGO0NBQzlGLEVBQUU7Q0FDRixxSUFBcUk7Q0FDckksRUFBRTtDQUNGLGVBQWU7Q0FDZixFQUFFO0NBQ0YsZ0RBQWdEO0NBQ2hELHVJQUF1STtDQUN2SSxRQUFRO0NBQ1IsTUFBTTtDQUNOLEVBQUU7Q0FDRiwrQ0FBK0M7Q0FDL0MsSUFBSTtDQUNKLEVBQUU7Q0FDRix1RkFBdUY7Q0FDdkYsa0NBQWtDO0NBQ2xDLEVBQUU7Q0FDRixzRUFBc0U7Q0FDdEUsRUFBRTtDQUNGLGtHQUFrRztDQUNsRyxFQUFFO0NBQ0YsOENBQThDO0NBQzlDLHdDQUF3QztDQUN4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