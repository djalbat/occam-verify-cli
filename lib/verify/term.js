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
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _term = /*#__PURE__*/ _interop_require_default(require("../term"));
var _termWithConstructors = /*#__PURE__*/ _interop_require_default(require("../unify/termWithConstructors"));
var _termWithBracketedConstructor = /*#__PURE__*/ _interop_require_default(require("../unify/termWithBracketedConstructor"));
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var variableNodeQuery = (0, _query.nodeQuery)("/term/variable!");
var unifyTermFunctions = [
    _termWithBracketedConstructor.default,
    _termWithConstructors.default
];
function verifyTerm(termNode, terms, localContext, verifyAhead) {
    var termVerified = false;
    var termString = localContext.nodeAsString(termNode);
    localContext.trace("Verifying the '".concat(termString, "' term..."), termNode);
    if (!termVerified) {
        var termVerifiedAsVariable = verifyTermAsVariable(termNode, terms, localContext, verifyAhead);
        termVerified = termVerifiedAsVariable; ///
    }
    if (!termVerified) {
        var termUnified = unifyTermFunctions.some(function(unifyTermFunction) {
            var termUnified = unifyTermFunction(termNode, terms, localContext, verifyAhead);
            if (termUnified) {
                return true;
            }
        });
        termVerified = termUnified; ///
    }
    if (termVerified) {
        localContext.debug("...verified the '".concat(termString, "' term."), termNode);
    }
    return termVerified;
}
Object.assign(_shim.default, {
    verifyTerm: verifyTerm
});
var _default = verifyTerm;
function verifyTermAsVariable(termNode, terms, localContext, verifyAhead) {
    var termVerifiedAsVariable = false;
    var variableNode = variableNodeQuery(termNode);
    if (variableNode !== null) {
        var termString = localContext.nodeAsString(termNode);
        localContext.trace("Verifying the '".concat(termString, "' term as a variable..."), termNode);
        var variableVerified = verifyVariable(variableNode, localContext);
        if (variableVerified) {
            var verifiedAhead;
            var type = variable.getType(), term = _term.default.fromTermNodeAndType(termNode, type);
            terms.push(term);
            verifiedAhead = verifyAhead();
            terms.pop();
            termVerifiedAsVariable = verifiedAhead; ///
        }
        if (termVerifiedAsVariable) {
            localContext.debug("...verified the '".concat(termString, "' term as a variable."), termNode);
        }
    }
    return termVerifiedAsVariable;
}
function verifyVariable(variableNode, localContext) {
    var variableVerified = false;
    var variableString = localContext.nodeAsString(variableNode);
    localContext.trace("Verifying the '".concat(variableString, "' variable..."), variableNode);
    var variablePresent = localContext.isVariablePresentByVariableNode(variableNode);
    if (!variablePresent) {
        localContext.trace("The '".concat(variableString, "' variable is not present."), variableNode);
    } else {
        variableVerified = true;
    }
    if (variableVerified) {
        localContext.debug("...verified the '".concat(variableString, "' variable."), variableNode);
    }
    return variableVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBUZXJtIGZyb20gXCIuLi90ZXJtXCI7XG5pbXBvcnQgdW5pZnlUZXJtV2l0aENvbnN0cnVjdG9ycyBmcm9tIFwiLi4vdW5pZnkvdGVybVdpdGhDb25zdHJ1Y3RvcnNcIjtcbmltcG9ydCB1bmlmeVRlcm1XaXRoQnJhY2tldGVkQ29uc3RydWN0b3IgZnJvbSBcIi4uL3VuaWZ5L3Rlcm1XaXRoQnJhY2tldGVkQ29uc3RydWN0b3JcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKTtcblxuY29uc3QgdW5pZnlUZXJtRnVuY3Rpb25zID0gW1xuICAgICAgICB1bmlmeVRlcm1XaXRoQnJhY2tldGVkQ29uc3RydWN0b3IsXG4gICAgICAgIHVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvcnMsXG4gICAgICBdO1xuXG5mdW5jdGlvbiB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdGVybVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgdGVybVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmAsIHRlcm1Ob2RlKTtcblxuICBpZiAoIXRlcm1WZXJpZmllZCkge1xuICAgIGNvbnN0IHRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSB2ZXJpZnlUZXJtQXNWYXJpYWJsZSh0ZXJtTm9kZSwgdGVybXMsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgdGVybVZlcmlmaWVkID0gdGVybVZlcmlmaWVkQXNWYXJpYWJsZTsgLy8vXG4gIH1cblxuICBpZiAoIXRlcm1WZXJpZmllZCkge1xuICAgIGNvbnN0IHRlcm1VbmlmaWVkID0gdW5pZnlUZXJtRnVuY3Rpb25zLnNvbWUoKHVuaWZ5VGVybUZ1bmN0aW9uKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtVW5pZmllZCA9IHVuaWZ5VGVybUZ1bmN0aW9uKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgIGlmICh0ZXJtVW5pZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRlcm1WZXJpZmllZCA9IHRlcm1VbmlmaWVkOyAvLy9cbiAgfVxuXG4gIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS5gLCB0ZXJtTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdGVybVZlcmlmaWVkO1xufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgdmVyaWZ5VGVybVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHZlcmlmeVRlcm07XG5cbmZ1bmN0aW9uIHZlcmlmeVRlcm1Bc1ZhcmlhYmxlKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdGVybVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFzIGEgdmFyaWFibGUuLi5gLCB0ZXJtTm9kZSk7XG5cbiAgICBjb25zdCB2YXJpYWJsZVZlcmlmaWVkID0gdmVyaWZ5VmFyaWFibGUodmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICBjb25zdCB0eXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlQW5kVHlwZSh0ZXJtTm9kZSwgdHlwZSk7XG5cbiAgICAgIHRlcm1zLnB1c2godGVybSk7XG5cbiAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICB0ZXJtcy5wb3AoKTtcblxuICAgICAgdGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IHZlcmlmaWVkQWhlYWQ7IC8vL1xuICAgIH1cblxuICAgIGlmICh0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhcyBhIHZhcmlhYmxlLmAsIHRlcm1Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGVybVZlcmlmaWVkQXNWYXJpYWJsZTtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5VmFyaWFibGUodmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcodmFyaWFibGVOb2RlKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmAsIHZhcmlhYmxlTm9kZSk7XG5cbiAgY29uc3QgdmFyaWFibGVQcmVzZW50ID0gbG9jYWxDb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICBpZiAoIXZhcmlhYmxlUHJlc2VudCkge1xuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgaXMgbm90IHByZXNlbnQuYCwgdmFyaWFibGVOb2RlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXJpYWJsZVZlcmlmaWVkID0gdHJ1ZTtcbiAgfVxuXG4gIGlmICh2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS5gLCB2YXJpYWJsZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ1bmlmeVRlcm1GdW5jdGlvbnMiLCJ1bmlmeVRlcm1XaXRoQnJhY2tldGVkQ29uc3RydWN0b3IiLCJ1bmlmeVRlcm1XaXRoQ29uc3RydWN0b3JzIiwidmVyaWZ5VGVybSIsInRlcm1Ob2RlIiwidGVybXMiLCJsb2NhbENvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsInRlcm1WZXJpZmllZCIsInRlcm1TdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInRlcm1WZXJpZmllZEFzVmFyaWFibGUiLCJ2ZXJpZnlUZXJtQXNWYXJpYWJsZSIsInRlcm1VbmlmaWVkIiwic29tZSIsInVuaWZ5VGVybUZ1bmN0aW9uIiwiZGVidWciLCJPYmplY3QiLCJhc3NpZ24iLCJzaGltIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVWZXJpZmllZCIsInZlcmlmeVZhcmlhYmxlIiwidmVyaWZpZWRBaGVhZCIsInR5cGUiLCJ2YXJpYWJsZSIsImdldFR5cGUiLCJ0ZXJtIiwiVGVybSIsImZyb21UZXJtTm9kZUFuZFR5cGUiLCJwdXNoIiwicG9wIiwidmFyaWFibGVTdHJpbmciLCJ2YXJpYWJsZVBy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