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
var _dom = /*#__PURE__*/ _interop_require_default(require("../../dom"));
var _context = require("../../utilities/context");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function unifyWithBracketedCombinator(statement, assignments, stated, context) {
    stated = true; ///
    assignments = null; ///
    var BracketedCombinator = _dom.default.BracketedCombinator, bracketedCombinator = BracketedCombinator.fromNothing(), unifiedWithBracketedCombinator = bracketedCombinator.unifyStatement(statement, assignments, stated, context);
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
function verifyAsMetavariable(statement, assignments, stated, context) {
    var verifiedAsMetavariable = false;
    var metavariable = (0, _context.metavariableFromStatement)(statement, context);
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
    var equality = (0, _context.equalityFromStatement)(statement, context);
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
    var judgement = (0, _context.judgementFromStatement)(statement, context);
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
    var typeAssertion = (0, _context.typeAssertionFromStatement)(statement, context);
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
    var definedAssertion = (0, _context.definedAssertionFromStatement)(statement, context);
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
function verifyAsPropertyAssertion(statement, assignments, stated, context) {
    var verifiedAsPropertyAssertion = false;
    var propertyAssertion = (0, _context.propertyAssertionFromStatement)(statement, context);
    if (propertyAssertion !== null) {
        var statementString = statement.getString();
        context.trace("Verifying the '".concat(statementString, "' statement as a property assertion..."));
        var propertyAssertionVerified = propertyAssertion.verify(assignments, stated, context);
        verifiedAsPropertyAssertion = propertyAssertionVerified; ///
        if (verifiedAsPropertyAssertion) {
            context.debug("...verified the '".concat(statementString, "' statement as a property assertion."));
        }
    }
    return verifiedAsPropertyAssertion;
}
function verifyAsSubproofAssertion(statement, assignments, stated, context) {
    var verifiedAsSubproofAssertion = false;
    var subproofAssertion = (0, _context.subproofAssertionFromStatement)(statement, context);
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
function verifyAsContainedAssertion(statement, assignments, stated, context) {
    var verifiedAsContainedAssertion = false;
    var containedAssertion = (0, _context.containedAssertionFromStatement)(statement, context);
    if (containedAssertion !== null) {
        var statementString = statement.getString();
        context.trace("Verifying the '".concat(statementString, "' statement as a contained assertion..."));
        var containedAssertionVerified = containedAssertion.verify(assignments, stated, context);
        verifiedAsContainedAssertion = containedAssertionVerified; ///
        if (verifiedAsContainedAssertion) {
            context.debug("...verified the '".concat(statementString, "' statement as a contained assertion."));
        }
    }
    return verifiedAsContainedAssertion;
}
function verifyAsSatisfiesAssertion(statement, assignments, stated, context) {
    var verifiedAsSatisfiesAssertion = false;
    var satisfiesAssertion = (0, _context.satisfiesAssertionFromStatement)(statement, context);
    if (satisfiesAssertion !== null) {
        var statementString = statement.getString();
        context.trace("Verifying the '".concat(statementString, "' statement as a satisfies assertion..."));
        var satisfiesAssertionVerified = satisfiesAssertion.verify(assignments, stated, context);
        verifiedAsSatisfiesAssertion = satisfiesAssertionVerified; ///
        if (verifiedAsSatisfiesAssertion) {
            context.debug("...verified the '".concat(statementString, "' statement as a satisfies assertion."));
        }
    }
    return verifiedAsSatisfiesAssertion;
}
var verifyMixins = [
    unifyWithBracketedCombinator,
    unifyWithCombinators,
    verifyAsMetavariable,
    verifyAsEquality,
    verifyAsJudgement,
    verifyAsTypeAssertion,
    verifyAsDefinedAssertion,
    verifyAsPropertyAssertion,
    verifyAsSubproofAssertion,
    verifyAsContainedAssertion,
    verifyAsSatisfiesAssertion
];
var _default = verifyMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taXhpbnMvc3RhdGVtZW50L3ZlcmlmeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IGVxdWFsaXR5RnJvbVN0YXRlbWVudCxcbiAgICAgICAgIGp1ZGdlbWVudEZyb21TdGF0ZW1lbnQsXG4gICAgICAgICBtZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50LFxuICAgICAgICAgdHlwZUFzc2VydGlvbkZyb21TdGF0ZW1lbnQsXG4gICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCxcbiAgICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCxcbiAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCxcbiAgICAgICAgIGNvbnRhaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnQsXG4gICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RhdGVtZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmZ1bmN0aW9uIHVuaWZ5V2l0aEJyYWNrZXRlZENvbWJpbmF0b3Ioc3RhdGVtZW50LCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gIHN0YXRlZCA9IHRydWU7ICAvLy9cblxuICBhc3NpZ25tZW50cyA9IG51bGw7IC8vL1xuXG4gIGNvbnN0IHsgQnJhY2tldGVkQ29tYmluYXRvciB9ID0gZG9tLFxuICAgICAgICBicmFja2V0ZWRDb21iaW5hdG9yID0gQnJhY2tldGVkQ29tYmluYXRvci5mcm9tTm90aGluZygpLFxuICAgICAgICB1bmlmaWVkV2l0aEJyYWNrZXRlZENvbWJpbmF0b3IgPSBicmFja2V0ZWRDb21iaW5hdG9yLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHVuaWZpZWRXaXRoQnJhY2tldGVkQ29tYmluYXRvcjtcbn1cblxuZnVuY3Rpb24gdW5pZnlXaXRoQ29tYmluYXRvcnMoc3RhdGVtZW50LCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gIHN0YXRlZCA9IHRydWU7ICAvLy9cblxuICBhc3NpZ25tZW50cyA9IG51bGw7IC8vL1xuXG4gIGNvbnN0IGNvbWJpbmF0b3JzID0gY29udGV4dC5nZXRDb21iaW5hdG9ycygpLFxuICAgICAgICB1bmlmaWVkV2l0aENvbWJpbmF0b3JzID0gY29tYmluYXRvcnMuc29tZSgoY29tYmluYXRvcikgPT4ge1xuICAgICAgICAgIGNvbnN0IHVuaWZpZWRXaXRoQ29tYmluYXRvciA9IGNvbWJpbmF0b3IudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmICh1bmlmaWVkV2l0aENvbWJpbmF0b3IpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHVuaWZpZWRXaXRoQ29tYmluYXRvcnM7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeUFzTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICBsZXQgdmVyaWZpZWRBc01ldGF2YXJpYWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gbWV0YXZhcmlhYmxlLnZlcmlmeShjb250ZXh0KTtcblxuICAgIHZlcmlmaWVkQXNNZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVWZXJpZmllZDsgLy8vXG5cbiAgICBpZiAodmVyaWZpZWRBc01ldGF2YXJpYWJsZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmVyaWZpZWRBc01ldGF2YXJpYWJsZTtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5QXNFcXVhbGl0eShzdGF0ZW1lbnQsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgbGV0IHZlcmlmaWVkQXNFcXVhbGl0eSA9IGZhbHNlO1xuXG4gIGNvbnN0IGVxdWFsaXR5ID0gZXF1YWxpdHlGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgaWYgKGVxdWFsaXR5ICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYW4gZXF1YWxpdHkuLi5gKTtcblxuICAgIGNvbnN0IGVxdWFsaXR5VmVyaWZpZWQgPSBlcXVhbGl0eS52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICB2ZXJpZmllZEFzRXF1YWxpdHkgPSBlcXVhbGl0eVZlcmlmaWVkOyAvLy9cblxuICAgIGlmICh2ZXJpZmllZEFzRXF1YWxpdHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYW4gZXF1YWxpdHkuYCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZlcmlmaWVkQXNFcXVhbGl0eTtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5QXNKdWRnZW1lbnQoc3RhdGVtZW50LCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gIGxldCB2ZXJpZmllZEFzSnVkZ2VtZW50ID0gZmFsc2U7XG5cbiAgY29uc3QganVkZ2VtZW50ID0ganVkZ2VtZW50RnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gIGlmIChqdWRnZW1lbnQgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIGp1ZGdlbWVudC4uLmApO1xuXG4gICAgY29uc3QganVkZ2VtZW50VmVyaWZpZWQgPSBqdWRnZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgdmVyaWZpZWRBc0p1ZGdlbWVudCA9IGp1ZGdlbWVudFZlcmlmaWVkOyAgLy8vXG5cbiAgICBpZiAodmVyaWZpZWRBc0p1ZGdlbWVudCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIGp1ZGdlbWVudC5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmVyaWZpZWRBc0p1ZGdlbWVudDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5QXNUeXBlQXNzZXJ0aW9uKHN0YXRlbWVudCwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICBsZXQgdmVyaWZpZWRBc1R5cGVBc3NlcnRpb24gPSBmYWxzZTtcblxuICBjb25zdCB0eXBlQXNzZXJ0aW9uID0gdHlwZUFzc2VydGlvbkZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICBpZiAodHlwZUFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgdHlwZSBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHR5cGVBc3NlcnRpb24udmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgdmVyaWZpZWRBc1R5cGVBc3NlcnRpb24gPSB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKHZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgdHlwZSBhc3NlcnRpb24uYCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlBc0RlZmluZWRBc3NlcnRpb24oc3RhdGVtZW50LCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gIGxldCB2ZXJpZmllZEFzRGVmaW5lZEFzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGNvbnN0IGRlZmluZWRBc3NlcnRpb24gPSBkZWZpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gIGlmIChkZWZpbmVkQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBkZWZpbmVkIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvblZlcmlmaWVkID0gZGVmaW5lZEFzc2VydGlvbi52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICB2ZXJpZmllZEFzRGVmaW5lZEFzc2VydGlvbiA9IGRlZmluZWRBc3NlcnRpb25WZXJpZmllZDsgLy8vXG5cbiAgICBpZiAodmVyaWZpZWRBc0RlZmluZWRBc3NlcnRpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBkZWZpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmVyaWZpZWRBc0RlZmluZWRBc3NlcnRpb247XG59XG5cbmZ1bmN0aW9uIHZlcmlmeUFzUHJvcGVydHlBc3NlcnRpb24oc3RhdGVtZW50LCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gIGxldCB2ZXJpZmllZEFzUHJvcGVydHlBc3NlcnRpb24gPSBmYWxzZTtcblxuICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvbiA9IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gIGlmIChwcm9wZXJ0eUFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgcHJvcGVydHkgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvblZlcmlmaWVkID0gcHJvcGVydHlBc3NlcnRpb24udmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgdmVyaWZpZWRBc1Byb3BlcnR5QXNzZXJ0aW9uID0gcHJvcGVydHlBc3NlcnRpb25WZXJpZmllZDsgLy8vXG5cbiAgICBpZiAodmVyaWZpZWRBc1Byb3BlcnR5QXNzZXJ0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgcHJvcGVydHkgYXNzZXJ0aW9uLmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2ZXJpZmllZEFzUHJvcGVydHlBc3NlcnRpb247XG59XG5cbmZ1bmN0aW9uIHZlcmlmeUFzU3VicHJvb2ZBc3NlcnRpb24oc3RhdGVtZW50LCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gIGxldCB2ZXJpZmllZEFzU3VicHJvb2ZBc3NlcnRpb24gPSBmYWxzZTtcblxuICBjb25zdCBzdWJwcm9vZkFzc2VydGlvbiA9IHN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gIGlmIChzdWJwcm9vZkFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgc3VicHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvblZlcmlmaWVkID0gc3VicHJvb2ZBc3NlcnRpb24udmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgdmVyaWZpZWRBc1N1YnByb29mQXNzZXJ0aW9uID0gc3VicHJvb2ZBc3NlcnRpb25WZXJpZmllZDsgLy8vXG5cbiAgICBpZiAodmVyaWZpZWRBc1N1YnByb29mQXNzZXJ0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgc3VicHJvb2YgYXNzZXJ0aW9uLmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2ZXJpZmllZEFzU3VicHJvb2ZBc3NlcnRpb247XG59XG5cbmZ1bmN0aW9uIHZlcmlmeUFzQ29udGFpbmVkQXNzZXJ0aW9uKHN0YXRlbWVudCwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICBsZXQgdmVyaWZpZWRBc0NvbnRhaW5lZEFzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvbiA9IGNvbnRhaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICBpZiAoY29udGFpbmVkQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBjb250YWluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25WZXJpZmllZCA9IGNvbnRhaW5lZEFzc2VydGlvbi52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICB2ZXJpZmllZEFzQ29udGFpbmVkQXNzZXJ0aW9uID0gY29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKHZlcmlmaWVkQXNDb250YWluZWRBc3NlcnRpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBjb250YWluZWQgYXNzZXJ0aW9uLmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2ZXJpZmllZEFzQ29udGFpbmVkQXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlBc1NhdGlzZmllc0Fzc2VydGlvbihzdGF0ZW1lbnQsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgbGV0IHZlcmlmaWVkQXNTYXRpc2ZpZXNBc3NlcnRpb24gPSBmYWxzZTtcblxuICBjb25zdCBzYXRpc2ZpZXNBc3NlcnRpb24gPSBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgaWYgKHNhdGlzZmllc0Fzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgc2F0aXNmaWVzIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc2F0aXNmaWVzQXNzZXJ0aW9uVmVyaWZpZWQgPSBzYXRpc2ZpZXNBc3NlcnRpb24udmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgdmVyaWZpZWRBc1NhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvblZlcmlmaWVkOyAvLy9cblxuICAgIGlmICh2ZXJpZmllZEFzU2F0aXNmaWVzQXNzZXJ0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgc2F0aXNmaWVzIGFzc2VydGlvbi5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmVyaWZpZWRBc1NhdGlzZmllc0Fzc2VydGlvbjtcbn1cblxuY29uc3QgdmVyaWZ5TWl4aW5zID0gW1xuICB1bmlmeVdpdGhCcmFja2V0ZWRDb21iaW5hdG9yLFxuICB1bmlmeVdpdGhDb21iaW5hdG9ycyxcbiAgdmVyaWZ5QXNNZXRhdmFyaWFibGUsXG4gIHZlcmlmeUFzRXF1YWxpdHksXG4gIHZlcmlmeUFzSnVkZ2VtZW50LFxuICB2ZXJpZnlBc1R5cGVBc3NlcnRpb24sXG4gIHZlcmlmeUFzRGVmaW5lZEFzc2VydGlvbixcbiAgdmVyaWZ5QXNQcm9wZXJ0eUFzc2VydGlvbixcbiAgdmVyaWZ5QXNTdWJwcm9vZkFzc2VydGlvbixcbiAgdmVyaWZ5QXNDb250YWluZWRBc3NlcnRpb24sXG4gIHZlcmlmeUFzU2F0aXNmaWVzQXNzZXJ0aW9uXG5dO1xuXG5leHBvcnQgZGVmYXVsdCB2ZXJpZnlNaXhpbnM7XG4iXSwibmFtZXMiOlsidW5pZnlXaXRoQnJhY2tldGVkQ29tYmluYXRvciIsInN0YXRlbWVudCIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwiY29udGV4dCIsIkJyYWNrZXRlZENvbWJpbmF0b3IiLCJkb20iLCJicmFja2V0ZWRDb21iaW5hdG9yIiwiZnJvbU5vdGhpbmciLCJ1bmlmaWVkV2l0aEJyYWNrZXRlZENvbWJpbmF0b3IiLCJ1bmlmeVN0YXRlbWVudCIsInVuaWZ5V2l0aENvbWJpbmF0b3JzIiwiY29tYmluYXRvcnMiLCJnZXRDb21iaW5hdG9ycyIsInVuaWZpZWRXaXRoQ29tYmluYXRvcnMiLCJzb21lIiwiY29tYmluYXRvciIsInVuaWZpZWRXaXRoQ29tYmluYXRvciIsInZlcmlmeUFzTWV0YXZhcmlhYmxlIiwidmVyaWZpZWRBc01ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnRTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsIm1ldGF2YXJpYWJsZVZlcmlmaWVkIiwidmVyaWZ5IiwiZGVidWciLCJ2ZXJpZnlBc0VxdWFsaXR5IiwidmVyaWZpZWRBc0VxdWFsaXR5IiwiZXF1YWxpdHkiLCJlcXVhbGl0eUZyb21TdGF0ZW1lbnQiLCJlcXVhbGl0eVZlcmlmaWVkIiwidmVyaWZ5QXNKdWRnZW1lbnQiLCJ2ZXJpZmllZEFzSnVkZ2VtZW50IiwianVkZ2VtZW50IiwianVkZ2VtZW50RnJvbVN0YXRlbWVudCIsImp1ZGdlbWVudFZlcmlmaWVkIiwidmVyaWZ5QXNUeXBlQXNzZXJ0aW9uIiwidmVyaWZpZWRBc1R5cGVBc3NlcnRpb24iLCJ0eXBlQXNzZXJ0aW9uIiwidHlwZUFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJ0eXBlQXNzZXJ0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlBc0RlZmluZWRBc3NlcnRpb24iLCJ2ZXJpZmllZEFzRGVmaW5lZEFzc2VydGlvbiIsImRlZmluZWRBc3NlcnRpb24iLCJkZWZpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsImRlZmluZWRBc3NlcnRpb25WZXJpZmllZCIsInZlcmlmeUFzUHJvcGVydHlBc3NlcnRpb24iLCJ2ZXJpZmllZEFzUHJvcGVydHlBc3NlcnRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbiIsInByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsInByb3BlcnR5QXNzZXJ0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlBc1N1YnByb29mQXNzZXJ0aW9uIiwidmVyaWZpZWRBc1N1YnByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJzdWJwcm9vZkFzc2VydGlvblZlcmlmaWVkIiwidmVyaWZ5QXNDb250YWluZWRBc3NlcnRpb24iLCJ2ZXJpZmllZEFzQ29udGFpbmVkQXNzZXJ0aW9uIiwiY29udGFpbmVkQXNzZXJ0aW9uIiwiY29udGFpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsImNvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkIiwidmVyaWZ5QXNTYXRpc2ZpZXNBc3NlcnRpb24iLCJ2ZXJpZmllZEFzU2F0aXNmaWVzQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsInNhdGlzZmllc0Fzc2VydGlvblZlcmlmaWVkIiwidmVyaWZ5TWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkErUEE7OztlQUFBOzs7MERBN1BnQjt1QkFVZ0M7Ozs7OztBQUVoRCxTQUFTQSw2QkFBNkJDLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLE9BQU87SUFDM0VELFNBQVMsTUFBTyxH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