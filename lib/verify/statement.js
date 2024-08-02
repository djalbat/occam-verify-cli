"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    verifyStandaloneStatement: function() {
        return verifyStandaloneStatement;
    }
});
var _equality = /*#__PURE__*/ _interop_require_default(require("../verify/equality"));
var _defining = /*#__PURE__*/ _interop_require_default(require("../verify/defining"));
var _containment = /*#__PURE__*/ _interop_require_default(require("../verify/containment"));
var _bracketed = /*#__PURE__*/ _interop_require_default(require("../ocmbinator/bracketed"));
var _typeAssertion = /*#__PURE__*/ _interop_require_default(require("../verify/typeAssertion"));
var _statement = /*#__PURE__*/ _interop_require_default(require("../verifier/nodes/statement"));
var _query = require("../utilities/query");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var equalityNodeQuery = (0, _query.nodeQuery)("/statement/equality!"), argumentNodeQuery = (0, _query.nodeQuery)("/statement/argument!"), definingNodeQuery = (0, _query.nodeQuery)("/statement/defining!"), statementNodeQuery = (0, _query.nodeQuery)("/metaArgument/statement!"), containmentNodeQuery = (0, _query.nodeQuery)("/statement/containment!"), metaArgumentNodeQuery = (0, _query.nodeQuery)("/statement/metaArgument!"), typeAssertionNodeQuery = (0, _query.nodeQuery)("/statement/typeAssertion!");
function verifyStatement(statementNode, assignments, derived, context, verifyAhead) {
    var statementVerified;
    var statementString = context.nodeAsString(statementNode);
    context.trace("Verifying the '".concat(statementString, "' statement..."), statementNode);
    var verifyStatementFunctions = [
        verifyStatementAsEquality,
        verifyStatementAboutDefining,
        verifyStatementAsTypeAssertion,
        verifyStatementAboutContainment,
        verifyStatementAgainstCombinators
    ];
    statementVerified = verifyStatementFunctions.some(function(verifyStatementFunction) {
        var statementVerified = verifyStatementFunction(statementNode, assignments, derived, context, verifyAhead);
        if (statementVerified) {
            return true;
        }
    });
    if (statementVerified) {
        context.debug("...verified the '".concat(statementString, "' statement."), statementNode);
    }
    return statementVerified;
}
function verifyStandaloneStatement(statementNode, context, verifyAhead) {
    var standaloneStatementVerified;
    var statementString = context.nodeAsString(statementNode);
    context.trace("Verifying the '".concat(statementString, "' standalone statement..."), statementNode);
    var derived = false, assignments = [], statementVerified = verifyStatement(statementNode, assignments, derived, context, verifyAhead);
    standaloneStatementVerified = statementVerified; ///
    if (standaloneStatementVerified) {
        context.debug("...verified the '".concat(statementString, "' standalone statement."), statementNode);
    }
    return standaloneStatementVerified;
}
Object.assign(_statement.default, {
    verifyStatement: verifyStatement
});
var _default = verifyStatement;
function verifyStatementAsEquality(statementNode, assignments, derived, context, verifyAhead) {
    var statementVerifiedAsEquality = false;
    var equalityNode = equalityNodeQuery(statementNode);
    if (equalityNode !== null) {
        var statementString = context.nodeAsString(statementNode);
        context.trace("Verifying the '".concat(statementString, "' statement as an equality..."), statementNode);
        var equalityVerified = (0, _equality.default)(equalityNode, assignments, derived, context, verifyAhead);
        statementVerifiedAsEquality = equalityVerified; ///
        if (statementVerifiedAsEquality) {
            context.debug("...verified the '".concat(statementString, "' statement as an equality."), statementNode);
        }
    }
    return statementVerifiedAsEquality;
}
function verifyStatementAboutDefining(statementNode, assignments, derived, context, verifyAhead) {
    var statementVerifiedAboutDefining = false;
    var definingNode = definingNodeQuery(statementNode);
    if (definingNode !== null) {
        var statementString = context.nodeAsString(statementNode);
        context.trace("Verifying the '".concat(statementString, "' statement about defining..."), statementNode);
        var argumentNode = argumentNodeQuery(statementNode), definingVerified = (0, _defining.default)(argumentNode, definingNode, context);
        statementVerifiedAboutDefining = definingVerified; ///
        if (statementVerifiedAboutDefining) {
            context.debug("...verified the '".concat(statementString, "' statement about defining."), statementNode);
        }
    }
    return statementVerifiedAboutDefining;
}
function verifyStatementAsTypeAssertion(statementNode, assignments, derived, context, verifyAhead) {
    var statementVerifiedAsTypeAssertion = false;
    var typeAssertionNode = typeAssertionNodeQuery(statementNode);
    if (typeAssertionNode !== null) {
        var statementString = context.nodeAsString(statementNode);
        context.trace("Verifying the '".concat(statementString, "' statement as a type assertion..."), statementNode);
        var typeAssertionVerified = (0, _typeAssertion.default)(typeAssertionNode, assignments, derived, context, verifyAhead);
        statementVerifiedAsTypeAssertion = typeAssertionVerified; ///
        if (statementVerifiedAsTypeAssertion) {
            context.debug("...verified the '".concat(statementString, "' statement as a type assertion."), statementNode);
        }
    }
    return statementVerifiedAsTypeAssertion;
}
function verifyStatementAboutContainment(statementNode, assignments, derived, context, verifyAhead) {
    var statementVerifiedAboutContainment = false;
    var containmentNode = containmentNodeQuery(statementNode);
    if (containmentNode !== null) {
        var statementString = context.nodeAsString(statementNode);
        context.trace("Verifying the '".concat(statementString, "' statement about containment..."), statementNode);
        var argumentNode = argumentNodeQuery(statementNode), metaArgumentNode = metaArgumentNodeQuery(statementNode), containmentVerified = (0, _containment.default)(argumentNode, containmentNode, metaArgumentNode, context);
        if (containmentVerified) {
            statementNode = statementNodeQuery(metaArgumentNode); ///
            var verifyStatementFunctions = [
                verifyStatementAsEquality,
                verifyStatementAgainstCombinators
            ];
            var statementVerified = verifyStatementFunctions.some(function(verifyStatementFunction) {
                var derived = false, assignments = [], statementVerified = verifyStatementFunction(statementNode, assignments, derived, context, verifyAhead);
                if (statementVerified) {
                    return true;
                }
            });
            statementVerifiedAboutContainment = statementVerified; ///
        }
        if (statementVerifiedAboutContainment) {
            context.debug("...verified the '".concat(statementString, "' statement about containment."), statementNode);
        }
    }
    return statementVerifiedAboutContainment;
}
function verifyStatementAgainstCombinator(statementNode, combinator, context, verifyAhead) {
    var statementVerifiedAgainstCombinator;
    var statementString = context.nodeAsString(statementNode), combinatorString = combinator.getString();
    context.trace("Verifying the '".concat(statementString, "' statement against the '").concat(combinatorString, "' combinator..."), statementNode);
    var combinatorStatementNode = combinator.getStatementNode(), nonTerminalNodeA = statementNode, nonTerminalNodeB = combinatorStatementNode, nonTerminalNodeVerified = _statement.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, context, verifyAhead);
    statementVerifiedAgainstCombinator = nonTerminalNodeVerified; ///
    if (statementVerifiedAgainstCombinator) {
        context.debug("...verified the '".concat(statementString, "' statement against the '").concat(combinatorString, "' combinator."), statementNode);
    }
    return statementVerifiedAgainstCombinator;
}
function verifyStatementAgainstCombinators(statementNode, assignments, derived, context, verifyAhead) {
    var statementVerifiedAgainstCombinators = false;
    var equalityNode = equalityNodeQuery(statementNode), definingNode = definingNodeQuery(statementNode), containmentNode = containmentNodeQuery(statementNode), typeAssertionNode = typeAssertionNodeQuery(statementNode);
    if (equalityNode === null && definingNode === null && containmentNode === null && typeAssertionNode === null) {
        var combinators = context.getCombinators();
        combinators = [
            _bracketed.default
        ].concat(_to_consumable_array(combinators));
        statementVerifiedAgainstCombinators = combinators.some(function(combinator) {
            var statementVerifiedAgainstCombinator = verifyStatementAgainstCombinator(statementNode, combinator, context, verifyAhead);
            if (statementVerifiedAgainstCombinator) {
                return true;
            }
        });
    }
    return statementVerifiedAgainstCombinators;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5RXF1YWxpdHkgZnJvbSBcIi4uL3ZlcmlmeS9lcXVhbGl0eVwiO1xuaW1wb3J0IHZlcmlmeURlZmluaW5nIGZyb20gXCIuLi92ZXJpZnkvZGVmaW5pbmdcIjtcbmltcG9ydCB2ZXJpZnlDb250YWlubWVudCBmcm9tIFwiLi4vdmVyaWZ5L2NvbnRhaW5tZW50XCI7XG5pbXBvcnQgYnJhY2tldGVkQ29tYmluYXRvciBmcm9tIFwiLi4vb2NtYmluYXRvci9icmFja2V0ZWRcIjtcbmltcG9ydCB2ZXJpZnlUeXBlQXNzZXJ0aW9uIGZyb20gXCIuLi92ZXJpZnkvdHlwZUFzc2VydGlvblwiO1xuaW1wb3J0IHN0YXRlbWVudE5vZGVzVmVyaWZpZXIgZnJvbSBcIi4uL3ZlcmlmaWVyL25vZGVzL3N0YXRlbWVudFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGVxdWFsaXR5Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9lcXVhbGl0eSFcIiksXG4gICAgICBhcmd1bWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvYXJndW1lbnQhXCIpLFxuICAgICAgZGVmaW5pbmdOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L2RlZmluaW5nIVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhQXJndW1lbnQvc3RhdGVtZW50IVwiKSxcbiAgICAgIGNvbnRhaW5tZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9jb250YWlubWVudCFcIiksXG4gICAgICBtZXRhQXJndW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L21ldGFBcmd1bWVudCFcIiksXG4gICAgICB0eXBlQXNzZXJ0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC90eXBlQXNzZXJ0aW9uIVwiKTtcblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWQ7XG5cbiAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gLCBzdGF0ZW1lbnROb2RlKTtcblxuICBjb25zdCB2ZXJpZnlTdGF0ZW1lbnRGdW5jdGlvbnMgPSBbXG4gICAgdmVyaWZ5U3RhdGVtZW50QXNFcXVhbGl0eSxcbiAgICB2ZXJpZnlTdGF0ZW1lbnRBYm91dERlZmluaW5nLFxuICAgIHZlcmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbixcbiAgICB2ZXJpZnlTdGF0ZW1lbnRBYm91dENvbnRhaW5tZW50LFxuICAgIHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yc1xuICBdO1xuXG4gIHN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5U3RhdGVtZW50RnVuY3Rpb25zLnNvbWUoKHZlcmlmeVN0YXRlbWVudEZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlTdGF0ZW1lbnRGdW5jdGlvbihzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCwgc3RhdGVtZW50Tm9kZSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlTdGFuZGFsb25lU3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBzdGFuZGFsb25lU3RhdGVtZW50VmVyaWZpZWQ7XG5cbiAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGFuZGFsb25lIHN0YXRlbWVudC4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gIGNvbnN0IGRlcml2ZWQgPSBmYWxzZSxcbiAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgc3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICBzdGFuZGFsb25lU3RhdGVtZW50VmVyaWZpZWQgPSBzdGF0ZW1lbnRWZXJpZmllZDsgIC8vL1xuXG4gIGlmIChzdGFuZGFsb25lU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhbmRhbG9uZSBzdGF0ZW1lbnQuYCwgc3RhdGVtZW50Tm9kZSk7XG4gIH1cblxuICByZXR1cm4gc3RhbmRhbG9uZVN0YXRlbWVudFZlcmlmaWVkO1xufVxuXG5PYmplY3QuYXNzaWduKHN0YXRlbWVudE5vZGVzVmVyaWZpZXIsIHtcbiAgdmVyaWZ5U3RhdGVtZW50XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdmVyaWZ5U3RhdGVtZW50O1xuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBc0VxdWFsaXR5KHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5ID0gZmFsc2U7XG5cbiAgY29uc3QgZXF1YWxpdHlOb2RlID0gZXF1YWxpdHlOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKGVxdWFsaXR5Tm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYW4gZXF1YWxpdHkuLi5gLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIGNvbnN0IGVxdWFsaXR5VmVyaWZpZWQgPSB2ZXJpZnlFcXVhbGl0eShlcXVhbGl0eU5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkgPSBlcXVhbGl0eVZlcmlmaWVkOyAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYW4gZXF1YWxpdHkuYCwgc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eTtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QWJvdXREZWZpbmluZyhzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQWJvdXREZWZpbmluZyA9IGZhbHNlO1xuXG4gIGNvbnN0IGRlZmluaW5nTm9kZSA9IGRlZmluaW5nTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gIGlmIChkZWZpbmluZ05vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFib3V0IGRlZmluaW5nLi4uYCwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb25zdCBhcmd1bWVudE5vZGUgPSBhcmd1bWVudE5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBkZWZpbmluZ1ZlcmlmaWVkID0gdmVyaWZ5RGVmaW5pbmcoYXJndW1lbnROb2RlLCBkZWZpbmluZ05vZGUsIGNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWRBYm91dERlZmluaW5nID0gZGVmaW5pbmdWZXJpZmllZDsgLy8vXG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBYm91dERlZmluaW5nKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFib3V0IGRlZmluaW5nLmAsIHN0YXRlbWVudE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFib3V0RGVmaW5pbmc7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbihzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgY29uc3QgdHlwZUFzc2VydGlvbk5vZGUgPSB0eXBlQXNzZXJ0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gIGlmICh0eXBlQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSB0eXBlIGFzc2VydGlvbi4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29uc3QgdHlwZUFzc2VydGlvblZlcmlmaWVkID0gdmVyaWZ5VHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uID0gdHlwZUFzc2VydGlvblZlcmlmaWVkOyAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHR5cGUgYXNzZXJ0aW9uLmAsIHN0YXRlbWVudE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QWJvdXRDb250YWlubWVudChzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQWJvdXRDb250YWlubWVudCA9IGZhbHNlO1xuXG4gIGNvbnN0IGNvbnRhaW5tZW50Tm9kZSA9IGNvbnRhaW5tZW50Tm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gIGlmIChjb250YWlubWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFib3V0IGNvbnRhaW5tZW50Li4uYCwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb25zdCBhcmd1bWVudE5vZGUgPSBhcmd1bWVudE5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBtZXRhQXJndW1lbnROb2RlID0gbWV0YUFyZ3VtZW50Tm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIGNvbnRhaW5tZW50VmVyaWZpZWQgPSB2ZXJpZnlDb250YWlubWVudChhcmd1bWVudE5vZGUsIGNvbnRhaW5tZW50Tm9kZSwgbWV0YUFyZ3VtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICBpZiAoY29udGFpbm1lbnRWZXJpZmllZCkge1xuICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeShtZXRhQXJndW1lbnROb2RlKTsgLy8vXG5cbiAgICAgIGNvbnN0IHZlcmlmeVN0YXRlbWVudEZ1bmN0aW9ucyA9IFtcbiAgICAgICAgdmVyaWZ5U3RhdGVtZW50QXNFcXVhbGl0eSxcbiAgICAgICAgdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JzXG4gICAgICBdO1xuXG4gICAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVN0YXRlbWVudEZ1bmN0aW9ucy5zb21lKCh2ZXJpZnlTdGF0ZW1lbnRGdW5jdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBkZXJpdmVkID0gZmFsc2UsXG4gICAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5U3RhdGVtZW50RnVuY3Rpb24oc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHN0YXRlbWVudFZlcmlmaWVkQWJvdXRDb250YWlubWVudCA9IHN0YXRlbWVudFZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBYm91dENvbnRhaW5tZW50KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFib3V0IGNvbnRhaW5tZW50LmAsIHN0YXRlbWVudE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFib3V0Q29udGFpbm1lbnQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yKHN0YXRlbWVudE5vZGUsIGNvbWJpbmF0b3IsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yO1xuXG4gIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICBjb21iaW5hdG9yU3RyaW5nID0gY29tYmluYXRvci5nZXRTdHJpbmcoKTtcblxuICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhZ2FpbnN0IHRoZSAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvci4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gIGNvbnN0IGNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlID0gY29tYmluYXRvci5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZUEgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IGNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBzdGF0ZW1lbnROb2Rlc1ZlcmlmaWVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvciA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAgLy8vXG5cbiAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IpIHtcbiAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFnYWluc3QgdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yLmAsIHN0YXRlbWVudE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3I7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9ycyhzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzID0gZmFsc2U7XG5cbiAgY29uc3QgZXF1YWxpdHlOb2RlID0gZXF1YWxpdHlOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgIGRlZmluaW5nTm9kZSA9IGRlZmluaW5nTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpLFxuICAgICAgICBjb250YWlubWVudE5vZGUgPSBjb250YWlubWVudE5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgdHlwZUFzc2VydGlvbk5vZGUgPSB0eXBlQXNzZXJ0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gIGlmICgoZXF1YWxpdHlOb2RlID09PSBudWxsKSAmJiAoZGVmaW5pbmdOb2RlID09PSBudWxsKSAmJiAoY29udGFpbm1lbnROb2RlID09PSBudWxsKSAmJiAodHlwZUFzc2VydGlvbk5vZGUgPT09IG51bGwpKSB7XG4gICAgbGV0IGNvbWJpbmF0b3JzID0gY29udGV4dC5nZXRDb21iaW5hdG9ycygpO1xuXG4gICAgY29tYmluYXRvcnMgPSBbIC8vL1xuICAgICAgYnJhY2tldGVkQ29tYmluYXRvcixcbiAgICAgIC4uLmNvbWJpbmF0b3JzXG4gICAgXTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzID0gY29tYmluYXRvcnMuc29tZSgoY29tYmluYXRvcikgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvciA9IHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yKHN0YXRlbWVudE5vZGUsIGNvbWJpbmF0b3IsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnM7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5U3RhbmRhbG9uZVN0YXRlbWVudCIsImVxdWFsaXR5Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiYXJndW1lbnROb2RlUXVlcnkiLCJkZWZpbmluZ05vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsImNvbnRhaW5tZW50Tm9kZVF1ZXJ5IiwibWV0YUFyZ3VtZW50Tm9kZVF1ZXJ5IiwidHlwZUFzc2VydGlvbk5vZGVRdWVyeSIsInZlcmlmeVN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJhc3NpZ25tZW50cyIsImRlcml2ZWQiLCJjb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJzdGF0ZW1lbnRWZXJpZmllZCIsInN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwidmVyaWZ5U3RhdGVtZW50RnVuY3Rpb25zIiwidmVyaWZ5U3RhdGVtZW50QXNFcXVhbGl0eSIsInZlcmlmeVN0YXRlbWVudEFib3V0RGVmaW5pbmciLCJ2ZXJpZnlTdGF0ZW1lbnRBc1R5cGVBc3NlcnRpb24iLCJ2ZXJpZnlTdGF0ZW1lbnRBYm91dENvbnRhaW5tZW50IiwidmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JzIiwic29tZSIsInZlcmlmeVN0YXRlbWVudEZ1bmN0aW9uIiwiZGVidWciLCJzdGFuZGFsb25lU3RhdGVtZW50VmVyaWZpZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJzdGF0ZW1lbnROb2Rlc1ZlcmlmaWVyIiwic3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5IiwiZXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlWZXJpZmllZCIsInZlcmlmeUVxdWFsaXR5Iiwic3RhdGVtZW50VmVyaWZpZWRBYm91dERlZmluaW5nIiwiZGVmaW5pbmdOb2RlIiwiYXJndW1lbnROb2RlIiwiZGVmaW5pbmdWZXJpZmllZCIsInZlcmlmeURlZmluaW5nIiwic3RhdGVtZW50VmVyaWZpZWRBc1R5cGVBc3NlcnRpb24iLCJ0eXBlQXNzZXJ0aW9uTm9kZSIsInR5cGVBc3NlcnRpb25WZXJpZmllZCIsInZlcmlmeVR5cGVBc3NlcnRpb24iLCJzdGF0ZW1lbnRWZXJpZmllZEFib3V0Q29udGFpbm1lbnQiLCJjb250YWlubWVudE5vZGUiLCJtZXRhQXJndW1lbnROb2RlIiwiY29udGFpbm1lbnRWZXJpZmllZCIsInZlcmlmeUNvbnRhaW5tZW50IiwidmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3IiLCJjb21iaW5hdG9yIiwic3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvciIsImNvbWJpbmF0b3JTdHJpbmciLCJnZXRTdHJpbmciLCJjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwic3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnMiLCJjb21iaW5hdG9ycyIsImdldENvbWJpbmF0b3JzIiwiYnJhY2tldGVkQ29tYmluYXRvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBeUVBLE9BQStCO2VBQS9COztJQXhCZ0JBLHlCQUF5QjtlQUF6QkE7OzsrREEvQ1c7K0RBQ0E7a0VBQ0c7Z0VBQ0U7b0VBQ0E7Z0VBQ0c7cUJBRVQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUMsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLHlCQUM5QkMsb0JBQW9CRCxJQUFBQSxnQkFBUyxFQUFDLHlCQUM5QkUsb0JBQW9CRixJQUFBQSxnQkFBUyxFQUFDLHlCQUM5QkcscUJBQXFCSCxJQUFBQSxnQkFBUyxFQUFDLDZCQUMvQkksdUJBQXVCSixJQUFBQSxnQkFBUyxFQUFDLDRCQUNqQ0ssd0JBQXdCTCxJQUFBQSxnQkFBUyxFQUFDLDZCQUNsQ00seUJBQXlCTixJQUFBQSxnQkFBUyxFQUFDO0FBRXpDLFNBQVNPLGdCQUFnQkMsYUFBYSxFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxXQUFXO0lBQ2hGLElBQUlDO0lBRUosSUFBTUMsa0JBQWtCSCxRQUFRSSxZQUFZLENBQUNQO0lBRTdDRyxRQUFRSyxLQUFLLENBQUMsQUFBQyxrQkFBaUMsT0FBaEJGLGlCQUFnQixtQkFBaUJOO0lBRWpFLElBQU1TLDJCQUEyQjtRQUMvQkM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7S0FDRDtJQUVEVCxvQkFBb0JJLHlCQUF5Qk0sSUFBSSxDQUFDLFNBQUNDO1FBQ2pELElBQU1YLG9CQUFvQlcsd0JBQXdCaEIsZUFBZUMsYUFBYUMsU0FBU0MsU0FB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