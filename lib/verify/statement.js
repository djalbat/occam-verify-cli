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
var equalityNodeQuery = (0, _query.nodeQuery)("/statement/equality!"), statementNodeQuery = (0, _query.nodeQuery)("/statement/metaArgument/statement!"), containmentNodeQuery = (0, _query.nodeQuery)("/statement/containment!"), typeAssertionNodeQuery = (0, _query.nodeQuery)("/statement/typeAssertion!");
function verifyStatement(statementNode, assignments, derived, context, verifyAhead) {
    var statementVerified;
    var statementString = context.nodeAsString(statementNode);
    context.trace("Verifying the '".concat(statementString, "' statement..."), statementNode);
    var verifyStatementFunctions = [
        verifyStatementAsEquality,
        verifyStatementAsTypeAssertion,
        verifyStatementWithContainment,
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
function verifyStandaloneStatement(statementNode, fileContext, verifyAhead) {
    var standaloneStatementVerified;
    var statementString = fileContext.nodeAsString(statementNode);
    fileContext.trace("Verifying the '".concat(statementString, "' standalone statement..."), statementNode);
    var context = fileContext, derived = false, assignments = [], statementVerified = verifyStatement(statementNode, assignments, derived, context, verifyAhead);
    standaloneStatementVerified = statementVerified; ///
    if (standaloneStatementVerified) {
        fileContext.debug("...verified the '".concat(statementString, "' standalone statement."), statementNode);
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
function verifyStatementWithContainment(statementNode, assignments, derived, context, verifyAhead) {
    var statementVerifiedWithContainment = false;
    var containmentNode = containmentNodeQuery(statementNode);
    if (containmentNode !== null) {
        var statementString = context.nodeAsString(statementNode);
        statementNode = statementNodeQuery(statementNode); ///
        if (statementNode !== null) {
            context.trace("Verifying the '".concat(statementString, "' statement with containment..."), statementNode);
            var containmentVerified = (0, _containment.default)(containmentNode, statementNode);
            if (containmentVerified) {
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
                statementVerifiedWithContainment = statementVerified; ///
            }
            if (statementVerifiedWithContainment) {
                context.debug("...verified the '".concat(statementString, "' statement with containment."), statementNode);
            }
        }
    }
    return statementVerifiedWithContainment;
}
function verifyStatementAgainstCombinators(statementNode, assignments, derived, context, verifyAhead) {
    var statementVerifiedAgainstCombinators;
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
    return statementVerifiedAgainstCombinators;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5RXF1YWxpdHkgZnJvbSBcIi4uL3ZlcmlmeS9lcXVhbGl0eVwiO1xuaW1wb3J0IHZlcmlmeUNvbnRhaW5tZW50IGZyb20gXCIuLi92ZXJpZnkvY29udGFpbm1lbnRcIjtcbmltcG9ydCBicmFja2V0ZWRDb21iaW5hdG9yIGZyb20gXCIuLi9vY21iaW5hdG9yL2JyYWNrZXRlZFwiO1xuaW1wb3J0IHZlcmlmeVR5cGVBc3NlcnRpb24gZnJvbSBcIi4uL3ZlcmlmeS90eXBlQXNzZXJ0aW9uXCI7XG5pbXBvcnQgc3RhdGVtZW50Tm9kZXNWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXIvbm9kZXMvc3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgZXF1YWxpdHlOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L2VxdWFsaXR5IVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvbWV0YUFyZ3VtZW50L3N0YXRlbWVudCFcIiksXG4gICAgICBjb250YWlubWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvY29udGFpbm1lbnQhXCIpLFxuICAgICAgdHlwZUFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvdHlwZUFzc2VydGlvbiFcIik7XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkO1xuXG4gIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgY29uc3QgdmVyaWZ5U3RhdGVtZW50RnVuY3Rpb25zID0gW1xuICAgIHZlcmlmeVN0YXRlbWVudEFzRXF1YWxpdHksXG4gICAgdmVyaWZ5U3RhdGVtZW50QXNUeXBlQXNzZXJ0aW9uLFxuICAgIHZlcmlmeVN0YXRlbWVudFdpdGhDb250YWlubWVudCxcbiAgICB2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcnNcbiAgXTtcblxuICBzdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVN0YXRlbWVudEZ1bmN0aW9ucy5zb21lKCh2ZXJpZnlTdGF0ZW1lbnRGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5U3RhdGVtZW50RnVuY3Rpb24oc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBpZiAoc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmAsIHN0YXRlbWVudE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5U3RhbmRhbG9uZVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHN0YW5kYWxvbmVTdGF0ZW1lbnRWZXJpZmllZDtcblxuICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhbmRhbG9uZSBzdGF0ZW1lbnQuLi5gLCBzdGF0ZW1lbnROb2RlKTtcblxuICBjb25zdCBjb250ZXh0ID0gZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgZGVyaXZlZCA9IGZhbHNlLFxuICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gIHN0YW5kYWxvbmVTdGF0ZW1lbnRWZXJpZmllZCA9IHN0YXRlbWVudFZlcmlmaWVkOyAgLy8vXG5cbiAgaWYgKHN0YW5kYWxvbmVTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhbmRhbG9uZSBzdGF0ZW1lbnQuYCwgc3RhdGVtZW50Tm9kZSk7XG4gIH1cblxuICByZXR1cm4gc3RhbmRhbG9uZVN0YXRlbWVudFZlcmlmaWVkO1xufVxuXG5PYmplY3QuYXNzaWduKHN0YXRlbWVudE5vZGVzVmVyaWZpZXIsIHtcbiAgdmVyaWZ5U3RhdGVtZW50XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdmVyaWZ5U3RhdGVtZW50O1xuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBc0VxdWFsaXR5KHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5ID0gZmFsc2U7XG5cbiAgY29uc3QgZXF1YWxpdHlOb2RlID0gZXF1YWxpdHlOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKGVxdWFsaXR5Tm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYW4gZXF1YWxpdHkuLi5gLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIGNvbnN0IGVxdWFsaXR5VmVyaWZpZWQgPSB2ZXJpZnlFcXVhbGl0eShlcXVhbGl0eU5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkgPSBlcXVhbGl0eVZlcmlmaWVkOyAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYW4gZXF1YWxpdHkuYCwgc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eTtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QXNUeXBlQXNzZXJ0aW9uKHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBc1R5cGVBc3NlcnRpb24gPSBmYWxzZTtcblxuICBjb25zdCB0eXBlQXNzZXJ0aW9uTm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKHR5cGVBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHR5cGUgYXNzZXJ0aW9uLi4uYCwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlUeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWRBc1R5cGVBc3NlcnRpb24gPSB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgdHlwZSBhc3NlcnRpb24uYCwgc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRXaXRoQ29udGFpbm1lbnQoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZFdpdGhDb250YWlubWVudCA9IGZhbHNlO1xuXG4gIGNvbnN0IGNvbnRhaW5tZW50Tm9kZSA9IGNvbnRhaW5tZW50Tm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gIGlmIChjb250YWlubWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7ICAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIGNvbnRhaW5tZW50Li4uYCwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIGNvbnN0IGNvbnRhaW5tZW50VmVyaWZpZWQgPSB2ZXJpZnlDb250YWlubWVudChjb250YWlubWVudE5vZGUsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBpZiAoY29udGFpbm1lbnRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCB2ZXJpZnlTdGF0ZW1lbnRGdW5jdGlvbnMgPSBbXG4gICAgICAgICAgdmVyaWZ5U3RhdGVtZW50QXNFcXVhbGl0eSxcbiAgICAgICAgICB2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcnNcbiAgICAgICAgXTtcblxuICAgICAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVN0YXRlbWVudEZ1bmN0aW9ucy5zb21lKCh2ZXJpZnlTdGF0ZW1lbnRGdW5jdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IGRlcml2ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5U3RhdGVtZW50RnVuY3Rpb24oc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZFdpdGhDb250YWlubWVudCA9IHN0YXRlbWVudFZlcmlmaWVkOyAvLy9cbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkV2l0aENvbnRhaW5tZW50KSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCBjb250YWlubWVudC5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRXaXRoQ29udGFpbm1lbnQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9ycyhzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzO1xuXG4gIGxldCBjb21iaW5hdG9ycyA9IGNvbnRleHQuZ2V0Q29tYmluYXRvcnMoKTtcblxuICBjb21iaW5hdG9ycyA9IFsgLy8vXG4gICAgYnJhY2tldGVkQ29tYmluYXRvcixcbiAgICAuLi5jb21iaW5hdG9yc1xuICBdO1xuXG4gIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzID0gY29tYmluYXRvcnMuc29tZSgoY29tYmluYXRvcikgPT4ge1xuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IgPSB2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcihzdGF0ZW1lbnROb2RlLCBjb21iaW5hdG9yLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnM7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yKHN0YXRlbWVudE5vZGUsIGNvbWJpbmF0b3IsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yO1xuXG4gIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICBjb21iaW5hdG9yU3RyaW5nID0gY29tYmluYXRvci5nZXRTdHJpbmcoKTtcblxuICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhZ2FpbnN0IHRoZSAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvci4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gIGNvbnN0IGNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlID0gY29tYmluYXRvci5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZUEgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IGNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBzdGF0ZW1lbnROb2Rlc1ZlcmlmaWVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvciA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAgLy8vXG5cbiAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IpIHtcbiAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFnYWluc3QgdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yLmAsIHN0YXRlbWVudE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3I7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5U3RhbmRhbG9uZVN0YXRlbWVudCIsImVxdWFsaXR5Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5IiwiY29udGFpbm1lbnROb2RlUXVlcnkiLCJ0eXBlQXNzZXJ0aW9uTm9kZVF1ZXJ5IiwidmVyaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsImFzc2lnbm1lbnRzIiwiZGVyaXZlZCIsImNvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsInN0YXRlbWVudFZlcmlmaWVkIiwic3RhdGVtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJ2ZXJpZnlTdGF0ZW1lbnRGdW5jdGlvbnMiLCJ2ZXJpZnlTdGF0ZW1lbnRBc0VxdWFsaXR5IiwidmVyaWZ5U3RhdGVtZW50QXNUeXBlQXNzZXJ0aW9uIiwidmVyaWZ5U3RhdGVtZW50V2l0aENvbnRhaW5tZW50IiwidmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JzIiwic29tZSIsInZlcmlmeVN0YXRlbWVudEZ1bmN0aW9uIiwiZGVidWciLCJmaWxlQ29udGV4dCIsInN0YW5kYWxvbmVTdGF0ZW1lbnRWZXJpZmllZCIsIk9iamVjdCIsImFzc2lnbiIsInN0YXRlbWVudE5vZGVzVmVyaWZpZXIiLCJzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkiLCJlcXVhbGl0eU5vZGUiLCJlcXVhbGl0eVZlcmlmaWVkIiwidmVyaWZ5RXF1YWxpdHkiLCJzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbiIsInR5cGVBc3NlcnRpb25Ob2RlIiwidHlwZUFzc2VydGlvblZlcmlmaWVkIiwidmVyaWZ5VHlwZUFzc2VydGlvbiIsInN0YXRlbWVudFZlcmlmaWVkV2l0aENvbnRhaW5tZW50IiwiY29udGFpbm1lbnROb2RlIiwiY29udGFpbm1lbnRWZXJpZmllZCIsInZlcmlmeUNvbnRhaW5tZW50Iiwic3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnMiLCJjb21iaW5hdG9ycyIsImdldENvbWJpbmF0b3JzIiwiYnJhY2tldGVkQ29tYmluYXRvciIsImNvbWJpbmF0b3IiLCJzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yIiwidmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3IiLCJjb21iaW5hdG9yU3RyaW5nIiwiZ2V0U3RyaW5nIiwiY29tYmluYXRvclN0YXRlbWVudE5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBcUVBLE9BQStCO2VBQS9COztJQXpCZ0JBLHlCQUF5QjtlQUF6QkE7OzsrREExQ1c7a0VBQ0c7Z0VBQ0U7b0VBQ0E7Z0VBQ0c7cUJBRVQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUMsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLHlCQUM5QkMscUJBQXFCRCxJQUFBQSxnQkFBUyxFQUFDLHVDQUMvQkUsdUJBQXVCRixJQUFBQSxnQkFBUyxFQUFDLDRCQUNqQ0cseUJBQXlCSCxJQUFBQSxnQkFBUyxFQUFDO0FBRXpDLFNBQVNJLGdCQUFnQkMsYUFBYSxFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxXQUFXO0lBQ2hGLElBQUlDO0lBRUosSUFBTUMsa0JBQWtCSCxRQUFRSSxZQUFZLENBQUNQO0lBRTdDRyxRQUFRSyxLQUFLLENBQUMsQUFBQyxrQkFBaUMsT0FBaEJGLGlCQUFnQixtQkFBaUJOO0lBRWpFLElBQU1TLDJCQUEyQjtRQUMvQkM7UUFDQUM7UUFDQUM7UUFDQUM7S0FDRDtJQUVEUixvQkFBb0JJLHlCQUF5QkssSUFBSSxDQUFDLFNBQUNDO1FBQ2pELElBQU1WLG9CQUFvQlUsd0JBQXdCZixlQUFlQyxhQUFhQyxTQUFTQyxTQUFTQztRQUVoRyxJQUFJQyxtQkFBbUI7WUFDckIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxJQUFJQSxt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