"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _bracketed = /*#__PURE__*/ _interop_require_default(require("../../combinator/bracketed"));
var _verification = require("../../utilities/verification");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyAsMetavariable(statement, assignments, stated, context) {
    var verifiedAsMetavariable = false;
    var metavariable = (0, _verification.metavariableFromStatement)(statement, context);
    if (metavariable !== null) {
        var statementString = statement.getString();
        context.trace("Verifying the '".concat(statementString, "' statement as a metavariable..."));
        var metavariableVerified = metavariable.verify(context);
        verifiedAsMetavariable = metavariableVerified; ///
        if (verifiedAsMetavariable) {
            context.debug("...verified the '".concat(statementString, "' statement as a metavariable."));
        }
    }
    return verifiedAsMetavariable;
}
function verifyAsEquality(statement, assignments, stated, context) {
    var verifiedAsEquality = false;
    var equality = (0, _verification.equalityFromStatement)(statement, context);
    if (equality !== null) {
        var statementString = statement.getString();
        context.trace("Verifying the '".concat(statementString, "' statement as an equality..."));
        var equalityVerified = equality.verify(assignments, stated, context);
        verifiedAsEquality = equalityVerified; ///
        if (verifiedAsEquality) {
            context.debug("...verified the '".concat(statementString, "' statement as an equality."));
        }
    }
    return verifiedAsEquality;
}
function verifyAsJudgement(statement, assignments, stated, context) {
    var verifiedAsJudgement = false;
    var judgement = (0, _verification.judgementFromStatement)(statement, context);
    if (judgement !== null) {
        var statementString = statement.getString();
        context.trace("Verifying the '".concat(statementString, "' statement as a judgement..."));
        var judgementVerified = judgement.verify(assignments, stated, context);
        verifiedAsJudgement = judgementVerified; ///
        if (verifiedAsJudgement) {
            context.debug("...verified the '".concat(statementString, "' statement as a judgement."));
        }
    }
    return verifiedAsJudgement;
}
function verifyAsTypeAssertion(statement, assignments, stated, context) {
    var verifiedAsTypeAssertion = false;
    var typeAssertion = (0, _verification.typeAssertionFromStatement)(statement, context);
    if (typeAssertion !== null) {
        var statementString = statement.getString();
        context.trace("Verifying the '".concat(statementString, "' statement as a type assertion..."));
        var typeAssertionVerified = typeAssertion.verify(assignments, stated, context);
        verifiedAsTypeAssertion = typeAssertionVerified; ///
        if (verifiedAsTypeAssertion) {
            context.debug("...verified the '".concat(statementString, "' statement as a type assertion."));
        }
    }
    return verifiedAsTypeAssertion;
}
function verifyAsDefinedAssertion(statement, assignments, stated, context) {
    var verifiedAsDefinedAssertion = false;
    var definedAssertion = (0, _verification.definedAssertionFromStatement)(statement, context);
    if (definedAssertion !== null) {
        var statementString = statement.getString();
        context.trace("Verifying the '".concat(statementString, "' statement as a defined assertion..."));
        var definedAssertionVerified = definedAssertion.verify(assignments, stated, context);
        verifiedAsDefinedAssertion = definedAssertionVerified; ///
        if (verifiedAsDefinedAssertion) {
            context.debug("...verified the '".concat(statementString, "' statement as a defined assertion."));
        }
    }
    return verifiedAsDefinedAssertion;
}
function verifyAsContainedAssertion(statement, assignments, stated, context) {
    var verifiedAsContainedAssertion = false;
    var containedAssertion = (0, _verification.containedAssertionFromStatement)(statement, context);
    if (containedAssertion !== null) {
        var statementString = statement.getString();
        context.trace("Verifying the '".concat(statementString, "' statement as a contained assertion..."));
        var containedAssertionVerified = containedAssertion.verify(assignments, stated, context);
        verifiedAsContainedAssertion = containedAssertionVerified; ///
        if (verifiedAsContainedAssertion) {
            context.debug("...verified the '".concat(statementString, "' statement as a defined assertion."));
        }
    }
    return verifiedAsContainedAssertion;
}
function verifyAsSubproofAssertion(statement, assignments, stated, context) {
    var verifiedAsSubproofAssertion = false;
    var subproofAssertion = (0, _verification.subproofAssertionFromStatement)(statement, context);
    if (subproofAssertion !== null) {
        var statementString = statement.getString();
        context.trace("Verifying the '".concat(statementString, "' statement as a subproof assertion..."));
        var subproofAssertionVerified = subproofAssertion.verify(assignments, stated, context);
        verifiedAsSubproofAssertion = subproofAssertionVerified; ///
        if (verifiedAsSubproofAssertion) {
            context.debug("...verified the '".concat(statementString, "' statement as a subproof assertion."));
        }
    }
    return verifiedAsSubproofAssertion;
}
function unifyWithBracketedCombinator(statement, assignments, stated, context) {
    stated = true; ///
    assignments = null; ///
    var bracketedCombinator = _bracketed.default.fromNothing(), unifiedWithBracketedCombinator = bracketedCombinator.unifyStatement(statement, assignments, stated, context);
    return unifiedWithBracketedCombinator;
}
function unifyWithCombinators(statement, assignments, stated, context) {
    stated = true; ///
    assignments = null; ///
    var combinators = context.getCombinators(), unifiedWithCombinators = combinators.some(function(combinator) {
        var unifiedWithCombinator = combinator.unifyStatement(statement, assignments, stated, context);
        if (unifiedWithCombinator) {
            return true;
        }
    });
    return unifiedWithCombinators;
}
var verifyMixins = [
    verifyAsMetavariable,
    verifyAsEquality,
    verifyAsJudgement,
    verifyAsTypeAssertion,
    verifyAsDefinedAssertion,
    verifyAsContainedAssertion,
    verifyAsSubproofAssertion,
    unifyWithBracketedCombinator,
    unifyWithCombinators
];
var _default = verifyMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taXhpbnMvc3RhdGVtZW50L3ZlcmlmeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEJyYWNrZXRlZENvbWJpbmF0b3IgZnJvbSBcIi4uLy4uL2NvbWJpbmF0b3IvYnJhY2tldGVkXCI7XG5cbmltcG9ydCB7IGVxdWFsaXR5RnJvbVN0YXRlbWVudCxcbiAgICAgICAgIGp1ZGdlbWVudEZyb21TdGF0ZW1lbnQsXG4gICAgICAgICBtZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50LFxuICAgICAgICAgdHlwZUFzc2VydGlvbkZyb21TdGF0ZW1lbnQsXG4gICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCxcbiAgICAgICAgIGNvbnRhaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnQsXG4gICAgICAgICBzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3ZlcmlmaWNhdGlvblwiO1xuXG5mdW5jdGlvbiB2ZXJpZnlBc01ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgbGV0IHZlcmlmaWVkQXNNZXRhdmFyaWFibGUgPSBmYWxzZTtcblxuICBjb25zdCBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVWZXJpZmllZCA9IG1ldGF2YXJpYWJsZS52ZXJpZnkoY29udGV4dCk7XG5cbiAgICB2ZXJpZmllZEFzTWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlVmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKHZlcmlmaWVkQXNNZXRhdmFyaWFibGUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZlcmlmaWVkQXNNZXRhdmFyaWFibGU7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeUFzRXF1YWxpdHkoc3RhdGVtZW50LCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gIGxldCB2ZXJpZmllZEFzRXF1YWxpdHkgPSBmYWxzZTtcblxuICBjb25zdCBlcXVhbGl0eSA9IGVxdWFsaXR5RnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gIGlmIChlcXVhbGl0eSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGFuIGVxdWFsaXR5Li4uYCk7XG5cbiAgICBjb25zdCBlcXVhbGl0eVZlcmlmaWVkID0gZXF1YWxpdHkudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgdmVyaWZpZWRBc0VxdWFsaXR5ID0gZXF1YWxpdHlWZXJpZmllZDsgLy8vXG5cbiAgICBpZiAodmVyaWZpZWRBc0VxdWFsaXR5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGFuIGVxdWFsaXR5LmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2ZXJpZmllZEFzRXF1YWxpdHk7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeUFzSnVkZ2VtZW50KHN0YXRlbWVudCwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICBsZXQgdmVyaWZpZWRBc0p1ZGdlbWVudCA9IGZhbHNlO1xuXG4gIGNvbnN0IGp1ZGdlbWVudCA9IGp1ZGdlbWVudEZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICBpZiAoanVkZ2VtZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBqdWRnZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFZlcmlmaWVkID0ganVkZ2VtZW50LnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIHZlcmlmaWVkQXNKdWRnZW1lbnQgPSBqdWRnZW1lbnRWZXJpZmllZDsgIC8vL1xuXG4gICAgaWYgKHZlcmlmaWVkQXNKdWRnZW1lbnQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBqdWRnZW1lbnQuYCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZlcmlmaWVkQXNKdWRnZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeUFzVHlwZUFzc2VydGlvbihzdGF0ZW1lbnQsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgbGV0IHZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgY29uc3QgdHlwZUFzc2VydGlvbiA9IHR5cGVBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgaWYgKHR5cGVBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHR5cGUgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB0eXBlQXNzZXJ0aW9uLnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIHZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uID0gdHlwZUFzc2VydGlvblZlcmlmaWVkOyAvLy9cblxuICAgIGlmICh2ZXJpZmllZEFzVHlwZUFzc2VydGlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHR5cGUgYXNzZXJ0aW9uLmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2ZXJpZmllZEFzVHlwZUFzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5QXNEZWZpbmVkQXNzZXJ0aW9uKHN0YXRlbWVudCwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICBsZXQgdmVyaWZpZWRBc0RlZmluZWRBc3NlcnRpb24gPSBmYWxzZTtcblxuICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uID0gZGVmaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICBpZiAoZGVmaW5lZEFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgZGVmaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25WZXJpZmllZCA9IGRlZmluZWRBc3NlcnRpb24udmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgdmVyaWZpZWRBc0RlZmluZWRBc3NlcnRpb24gPSBkZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKHZlcmlmaWVkQXNEZWZpbmVkQXNzZXJ0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgZGVmaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZlcmlmaWVkQXNEZWZpbmVkQXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlBc0NvbnRhaW5lZEFzc2VydGlvbihzdGF0ZW1lbnQsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgbGV0IHZlcmlmaWVkQXNDb250YWluZWRBc3NlcnRpb24gPSBmYWxzZTtcblxuICBjb25zdCBjb250YWluZWRBc3NlcnRpb24gPSBjb250YWluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgaWYgKGNvbnRhaW5lZEFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgY29udGFpbmVkIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSBjb250YWluZWRBc3NlcnRpb24udmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgdmVyaWZpZWRBc0NvbnRhaW5lZEFzc2VydGlvbiA9IGNvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkOyAvLy9cblxuICAgIGlmICh2ZXJpZmllZEFzQ29udGFpbmVkQXNzZXJ0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgZGVmaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZlcmlmaWVkQXNDb250YWluZWRBc3NlcnRpb247XG59XG5cbmZ1bmN0aW9uIHZlcmlmeUFzU3VicHJvb2ZBc3NlcnRpb24oc3RhdGVtZW50LCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gIGxldCB2ZXJpZmllZEFzU3VicHJvb2ZBc3NlcnRpb24gPSBmYWxzZTtcblxuICBjb25zdCBzdWJwcm9vZkFzc2VydGlvbiA9IHN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gIGlmIChzdWJwcm9vZkFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgc3VicHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvblZlcmlmaWVkID0gc3VicHJvb2ZBc3NlcnRpb24udmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgdmVyaWZpZWRBc1N1YnByb29mQXNzZXJ0aW9uID0gc3VicHJvb2ZBc3NlcnRpb25WZXJpZmllZDsgLy8vXG5cbiAgICBpZiAodmVyaWZpZWRBc1N1YnByb29mQXNzZXJ0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgc3VicHJvb2YgYXNzZXJ0aW9uLmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2ZXJpZmllZEFzU3VicHJvb2ZBc3NlcnRpb247XG59XG5cbmZ1bmN0aW9uIHVuaWZ5V2l0aEJyYWNrZXRlZENvbWJpbmF0b3Ioc3RhdGVtZW50LCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gIHN0YXRlZCA9IHRydWU7ICAvLy9cblxuICBhc3NpZ25tZW50cyA9IG51bGw7IC8vL1xuXG4gIGNvbnN0IGJyYWNrZXRlZENvbWJpbmF0b3IgPSBCcmFja2V0ZWRDb21iaW5hdG9yLmZyb21Ob3RoaW5nKCksXG4gICAgICAgIHVuaWZpZWRXaXRoQnJhY2tldGVkQ29tYmluYXRvciA9IGJyYWNrZXRlZENvbWJpbmF0b3IudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICByZXR1cm4gdW5pZmllZFdpdGhCcmFja2V0ZWRDb21iaW5hdG9yO1xufVxuXG5mdW5jdGlvbiB1bmlmeVdpdGhDb21iaW5hdG9ycyhzdGF0ZW1lbnQsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gIGFzc2lnbm1lbnRzID0gbnVsbDsgLy8vXG5cbiAgY29uc3QgY29tYmluYXRvcnMgPSBjb250ZXh0LmdldENvbWJpbmF0b3JzKCksXG4gICAgICAgIHVuaWZpZWRXaXRoQ29tYmluYXRvcnMgPSBjb21iaW5hdG9ycy5zb21lKChjb21iaW5hdG9yKSA9PiB7XG4gICAgICAgICAgY29uc3QgdW5pZmllZFdpdGhDb21iaW5hdG9yID0gY29tYmluYXRvci51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHVuaWZpZWRXaXRoQ29tYmluYXRvcikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICByZXR1cm4gdW5pZmllZFdpdGhDb21iaW5hdG9ycztcbn1cblxuY29uc3QgdmVyaWZ5TWl4aW5zID0gW1xuICB2ZXJpZnlBc01ldGF2YXJpYWJsZSxcbiAgdmVyaWZ5QXNFcXVhbGl0eSxcbiAgdmVyaWZ5QXNKdWRnZW1lbnQsXG4gIHZlcmlmeUFzVHlwZUFzc2VydGlvbixcbiAgdmVyaWZ5QXNEZWZpbmVkQXNzZXJ0aW9uLFxuICB2ZXJpZnlBc0NvbnRhaW5lZEFzc2VydGlvbixcbiAgdmVyaWZ5QXNTdWJwcm9vZkFzc2VydGlvbixcbiAgdW5pZnlXaXRoQnJhY2tldGVkQ29tYmluYXRvcixcbiAgdW5pZnlXaXRoQ29tYmluYXRvcnNcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHZlcmlmeU1peGlucztcbiJdLCJuYW1lcyI6WyJ2ZXJpZnlBc01ldGF2YXJpYWJsZSIsInN0YXRlbWVudCIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwiY29udGV4dCIsInZlcmlmaWVkQXNNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50U3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJtZXRhdmFyaWFibGVWZXJpZmllZCIsInZlcmlmeSIsImRlYnVnIiwidmVyaWZ5QXNFcXVhbGl0eSIsInZlcmlmaWVkQXNFcXVhbGl0eSIsImVxdWFsaXR5IiwiZXF1YWxpdHlGcm9tU3RhdGVtZW50IiwiZXF1YWxpdHlWZXJpZmllZCIsInZlcmlmeUFzSnVkZ2VtZW50IiwidmVyaWZpZWRBc0p1ZGdlbWVudCIsImp1ZGdlbWVudCIsImp1ZGdlbWVudEZyb21TdGF0ZW1lbnQiLCJqdWRnZW1lbnRWZXJpZmllZCIsInZlcmlmeUFzVHlwZUFzc2VydGlvbiIsInZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uIiwidHlwZUFzc2VydGlvbiIsInR5cGVBc3NlcnRpb25Gcm9tU3RhdGVtZW50IiwidHlwZUFzc2VydGlvblZlcmlmaWVkIiwidmVyaWZ5QXNEZWZpbmVkQXNzZXJ0aW9uIiwidmVyaWZpZWRBc0RlZmluZWRBc3NlcnRpb24iLCJkZWZpbmVkQXNzZXJ0aW9uIiwiZGVmaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJkZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlBc0NvbnRhaW5lZEFzc2VydGlvbiIsInZlcmlmaWVkQXNDb250YWluZWRBc3NlcnRpb24iLCJjb250YWluZWRBc3NlcnRpb24iLCJjb250YWluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50IiwiY29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlBc1N1YnByb29mQXNzZXJ0aW9uIiwidmVyaWZpZWRBc1N1YnByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJzdWJwcm9vZkFzc2VydGlvblZlcmlmaWVkIiwidW5pZnlXaXRoQnJhY2tldGVkQ29tYmluYXRvciIsImJyYWNrZXRlZENvbWJpbmF0b3IiLCJCcmFja2V0ZWRDb21iaW5hdG9yIiwiZnJvbU5vdGhpbmciLCJ1bmlmaWVkV2l0aEJyYWNrZXRlZENvbWJpbmF0b3IiLCJ1bmlmeVN0YXRlbWVudCIsInVuaWZ5V2l0aENvbWJpbmF0b3JzIiwiY29tYmluYXRvcnMiLCJnZXRDb21iaW5hdG9ycyIsInVuaWZpZWRXaXRoQ29tYmluYXRvcnMiLCJzb21lIiwiY29tYmluYXRvciIsInVuaWZpZWRXaXRoQ29tYmluYXRvciIsInZlcmlmeU1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBOE1BOzs7ZUFBQTs7O2dFQTVNZ0M7NEJBUWU7Ozs7OztBQUUvQyxTQUFTQSxxQkFBcUJDLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLE9BQU87SUFDbkUsSUFBSUMseUJBQXlCO0lBRTdCLElBQU1DLGVBQWVDLElBQUFBLHVDQUF5QixFQUFDTixXQUFXRztJQUUxRCxJQUFJRSxpQkFBaUIsTUFBTTtRQUN6QixJQUFNRSxrQkFBa0JQLFVBQVVRLFNBQVM7UUFFM0NMLFFBQVFNLEtBQUssQ0FBQyxBQUFDLGtCQUFpQyxPQUFoQkYsaUJBQWdCO1FBRWhELElBQU1HLHVCQUF1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