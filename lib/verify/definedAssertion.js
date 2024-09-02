"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyDefinedAssertion;
    }
});
var _term = /*#__PURE__*/ _interop_require_default(require("./term"));
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("../verifier/node/metaLevel"));
var _array = require("../utilities/array");
var _query = require("../utilities/query");
var _verify = require("../utilities/verify");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var termNodeQuery = (0, _query.nodeQuery)("/definedAssertion/term!"), variableNodeQuery = (0, _query.nodeQuery)("/definedAssertion/term/variable!");
function verifyDefinedAssertion(definedAssertionNode, assignments, derived, localContext) {
    var definedAssertionVerified;
    var definedAssertionString = localContext.nodeAsString(definedAssertionNode);
    localContext.trace("Verifying the '".concat(definedAssertionString, "' defined assertion..."), definedAssertionNode);
    var definedAssertionFunctions = [
        verifyDerivedDefinedAssertion,
        verifyStatedDefinedAssertion
    ];
    definedAssertionVerified = definedAssertionFunctions.some(function(definedAssertionFunction) {
        var definedAssertionVerified = definedAssertionFunction(definedAssertionNode, assignments, derived, localContext);
        if (definedAssertionVerified) {
            return true;
        }
    });
    if (definedAssertionVerified) {
        localContext.debug("...verified the '".concat(definedAssertionString, "' defined assertion."), definedAssertionNode);
    }
    return definedAssertionVerified;
}
function verifyDerivedDefinedAssertion(definedAssertionNode, assignments, derived, localContext) {
    var derivedDefinedAssertionVerified = false;
    if (derived) {
        var definedAssertionString = localContext.nodeAsString(definedAssertionNode);
        localContext.trace("Verifying the derived '".concat(definedAssertionString, "' defined assertion..."), definedAssertionNode);
        var definedAssertionNegated = (0, _verify.isAssertionNegated)(definedAssertionNode), variableNode = variableNodeQuery(definedAssertionNode), termNode = termNodeQuery(definedAssertionNode), negated = definedAssertionNegated; ///
        if (false) {
        ///
        } else if (variableNode !== null) {
            var variable = localContext.findVariableByVariableNode(variableNode);
            if (variable !== null) {
                var variableDefined = localContext.isVariableDefined(variable);
                if (!negated) {
                    if (variableDefined) {
                        derivedDefinedAssertionVerified = true;
                    }
                }
                if (negated) {
                    if (!variableDefined) {
                        derivedDefinedAssertionVerified = true;
                    }
                }
            }
        } else if (termNode !== null) {
            var terms = [], termVerified = (0, _term.default)(termNode, terms, localContext, function() {
                var verifiedAhead = true;
                return verifiedAhead;
            });
            if (termVerified) {
                var firstTerm = (0, _array.first)(terms), term = firstTerm, termGrounded = localContext.isTermGrounded(term);
                if (!negated) {
                    if (termGrounded) {
                        derivedDefinedAssertionVerified = true;
                    }
                }
                if (negated) {
                    if (!termGrounded) {
                        derivedDefinedAssertionVerified = true;
                    }
                }
            }
        }
        if (derivedDefinedAssertionVerified) {
            localContext.debug("...verified the derived '".concat(definedAssertionString, "' defined assertion."), definedAssertionNode);
        }
    }
    return derivedDefinedAssertionVerified;
}
function verifyStatedDefinedAssertion(definedAssertionNode, assignments, derived, localContext) {
    var statedDefinedAssertionVerified = false;
    if (!derived) {
        var definedAssertionString = localContext.nodeAsString(definedAssertionNode);
        localContext.trace("Verifying the stated '".concat(definedAssertionString, "' defined assertion..."), definedAssertionNode);
        var intrinsicLevel = localContext.isIntrinsicLevel();
        if (intrinsicLevel) {
            localContext.debug("The stated '".concat(definedAssertionString, "' defined assertion cannot be verified at intrinsic level."), definedAssertionNode);
        } else {
            var nonTerminalNode = definedAssertionNode, nonTerminalNodeVerified = _metaLevel.default.verifyNonTerminalNode(nonTerminalNode, localContext, function() {
                var verifiedAhead = true;
                return verifiedAhead;
            });
            statedDefinedAssertionVerified = nonTerminalNodeVerified; ///
        }
        if (statedDefinedAssertionVerified) {
            localContext.debug("...verified the stated '".concat(definedAssertionString, "' defined assertion."), definedAssertionNode);
        }
    }
    return statedDefinedAssertionVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZGVmaW5lZEFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeVRlcm0gZnJvbSBcIi4vdGVybVwiO1xuaW1wb3J0IG1ldGFMZXZlbE5vZGVWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXIvbm9kZS9tZXRhTGV2ZWxcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBpc0Fzc2VydGlvbk5lZ2F0ZWQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ZlcmlmeVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2RlZmluZWRBc3NlcnRpb24vdGVybSFcIiksXG4gICAgICB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9kZWZpbmVkQXNzZXJ0aW9uL3Rlcm0vdmFyaWFibGUhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlEZWZpbmVkQXNzZXJ0aW9uKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBkZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQ7XG5cbiAgY29uc3QgZGVmaW5lZEFzc2VydGlvblN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24uLi5gLCBkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgY29uc3QgZGVmaW5lZEFzc2VydGlvbkZ1bmN0aW9ucyA9IFtcbiAgICB2ZXJpZnlEZXJpdmVkRGVmaW5lZEFzc2VydGlvbixcbiAgICB2ZXJpZnlTdGF0ZWREZWZpbmVkQXNzZXJ0aW9uXG4gIF07XG5cbiAgZGVmaW5lZEFzc2VydGlvblZlcmlmaWVkID0gZGVmaW5lZEFzc2VydGlvbkZ1bmN0aW9ucy5zb21lKChkZWZpbmVkQXNzZXJ0aW9uRnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSBkZWZpbmVkQXNzZXJ0aW9uRnVuY3Rpb24oZGVmaW5lZEFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKGRlZmluZWRBc3NlcnRpb25WZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBpZiAoZGVmaW5lZEFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uLmAsIGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiBkZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeURlcml2ZWREZWZpbmVkQXNzZXJ0aW9uKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBkZXJpdmVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKGRlcml2ZWQpIHtcbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgZGVyaXZlZCAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24uLi5gLCBkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uTmVnYXRlZCA9IGlzQXNzZXJ0aW9uTmVnYXRlZChkZWZpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkoZGVmaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeShkZWZpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgbmVnYXRlZCA9IGRlZmluZWRBc3NlcnRpb25OZWdhdGVkOyAgLy8vXG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZSA9IGxvY2FsQ29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVEZWZpbmVkID0gbG9jYWxDb250ZXh0LmlzVmFyaWFibGVEZWZpbmVkKHZhcmlhYmxlKTtcblxuICAgICAgICBpZiAoIW5lZ2F0ZWQpIHtcbiAgICAgICAgICBpZiAodmFyaWFibGVEZWZpbmVkKSB7XG4gICAgICAgICAgICBkZXJpdmVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmVnYXRlZCkge1xuICAgICAgICAgIGlmICghdmFyaWFibGVEZWZpbmVkKSB7XG4gICAgICAgICAgICBkZXJpdmVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtcyA9IFtdLFxuICAgICAgICAgICAgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdGVybXMsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0VGVybSA9IGZpcnN0KHRlcm1zKSxcbiAgICAgICAgICAgICAgdGVybSA9IGZpcnN0VGVybSwgLy8vXG4gICAgICAgICAgICAgIHRlcm1Hcm91bmRlZCA9IGxvY2FsQ29udGV4dC5pc1Rlcm1Hcm91bmRlZCh0ZXJtKTtcblxuICAgICAgICBpZiAoIW5lZ2F0ZWQpIHtcbiAgICAgICAgICBpZiAodGVybUdyb3VuZGVkKSB7XG4gICAgICAgICAgICBkZXJpdmVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmVnYXRlZCkge1xuICAgICAgICAgIGlmICghdGVybUdyb3VuZGVkKSB7XG4gICAgICAgICAgICBkZXJpdmVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGVyaXZlZERlZmluZWRBc3NlcnRpb25WZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgZGVyaXZlZCAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24uYCwgZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZXJpdmVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZWREZWZpbmVkQXNzZXJ0aW9uKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSBmYWxzZTtcblxuICBpZiAoIWRlcml2ZWQpIHtcbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgc3RhdGVkICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZWZpbmVkIGFzc2VydGlvbi4uLmAsIGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGNvbnN0IGludHJpbnNpY0xldmVsID0gbG9jYWxDb250ZXh0LmlzSW50cmluc2ljTGV2ZWwoKTtcblxuICAgIGlmIChpbnRyaW5zaWNMZXZlbCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGBUaGUgc3RhdGVkICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZWZpbmVkIGFzc2VydGlvbiBjYW5ub3QgYmUgdmVyaWZpZWQgYXQgaW50cmluc2ljIGxldmVsLmAsIGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gZGVmaW5lZEFzc2VydGlvbk5vZGUsIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBtZXRhTGV2ZWxOb2RlVmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIHN0YXRlZERlZmluZWRBc3NlcnRpb25WZXJpZmllZCA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSBzdGF0ZWQgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uLmAsIGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeURlZmluZWRBc3NlcnRpb24iLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFyaWFibGVOb2RlUXVlcnkiLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImFzc2lnbm1lbnRzIiwiZGVyaXZlZCIsImxvY2FsQ29udGV4dCIsImRlZmluZWRBc3NlcnRpb25WZXJpZmllZCIsImRlZmluZWRBc3NlcnRpb25TdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsImRlZmluZWRBc3NlcnRpb25GdW5jdGlvbnMiLCJ2ZXJpZnlEZXJpdmVkRGVmaW5lZEFzc2VydGlvbiIsInZlcmlmeVN0YXRlZERlZmluZWRBc3NlcnRpb24iLCJzb21lIiwiZGVmaW5lZEFzc2VydGlvbkZ1bmN0aW9uIiwiZGVidWciLCJkZXJpdmVkRGVmaW5lZEFzc2VydGlvblZlcmlmaWVkIiwiZGVmaW5lZEFzc2VydGlvbk5lZ2F0ZWQiLCJpc0Fzc2VydGlvbk5lZ2F0ZWQiLCJ2YXJpYWJsZU5vZGUiLCJ0ZXJtTm9kZSIsIm5lZ2F0ZWQiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlIiwidmFyaWFibGVEZWZpbmVkIiwiaXNWYXJpYWJsZURlZmluZWQiLCJ0ZXJtcyIsInRlcm1WZXJpZmllZCIsInZlcmlmeVRlcm0iLCJ2ZXJpZmllZEFoZWFkIiwiZmlyc3RUZXJtIiwiZmlyc3QiLCJ0ZXJtIiwidGVybUdyb3VuZGVkIiwiaXNUZXJtR3JvdW5kZWQiLCJzdGF0ZWREZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQiLCJpbnRyaW5zaWNMZXZlbCIsImlzSW50cmluc2ljTGV2ZWwiLCJub25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsIm1ldGFMZXZlbE5vZGVWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUF3QkE7OzsyREFWRDtnRUFDVztxQkFFWjtxQkFDSTtzQkFDUzs7Ozs7O0FBRW5DLElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyw0QkFDMUJDLG9CQUFvQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUVyQixTQUFTRix1QkFBdUJJLG9CQUFvQixFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsWUFBWTtJQUNyRyxJQUFJQztJQUVKLElBQU1DLHlCQUF5QkYsYUFBYUcsWUFBWSxDQUFDTjtJQUV6REcsYUFBYUksS0FBSyxDQUFDLEFBQUMsa0JBQXdDLE9BQXZCRix3QkFBdUIsMkJBQXlCTDtJQUVyRixJQUFNUSw0QkFBNEI7UUFDaENDO1FBQ0FDO0tBQ0Q7SUFFRE4sMkJBQTJCSSwwQkFBMEJHLElBQUksQ0FBQyxTQUFDQztRQUN6RCxJQUFNUiwyQkFBMkJRLHlCQUF5Qlosc0JBQXNCQyxhQUFhQyxTQUFTQztRQUV0RyxJQUFJQywwQkFBMEI7WUFDNUIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxJQUFJQSwwQkFBMEI7UUFDNUJELGFBQWFVLEtBQUssQ0FBQyxBQUFDLG9CQUEwQyxPQUF2QlIsd0JBQXVCLHlCQUF1Qkw7SUFDdkY7SUFFQSxPQUFPSTtBQUNUO0FBRUEsU0FBU0ssOEJBQThCVCxvQkFBb0IsRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLFlBQVk7SUFDN0YsSUFBSVcsa0NBQWtDO0lBRXRDLElBQUlaLFNBQVM7UUFDWCxJQUFNRyx5QkFBeUJGLGFBQWFHLFlBQVksQ0FBQ047UUFFekRHLGFB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