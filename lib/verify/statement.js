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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5RXF1YWxpdHkgZnJvbSBcIi4uL3ZlcmlmeS9lcXVhbGl0eVwiO1xuaW1wb3J0IHZlcmlmeURlZmluaW5nIGZyb20gXCIuLi92ZXJpZnkvZGVmaW5pbmdcIjtcbmltcG9ydCB2ZXJpZnlDb250YWlubWVudCBmcm9tIFwiLi4vdmVyaWZ5L2NvbnRhaW5tZW50XCI7XG5pbXBvcnQgYnJhY2tldGVkQ29tYmluYXRvciBmcm9tIFwiLi4vb2NtYmluYXRvci9icmFja2V0ZWRcIjtcbmltcG9ydCB2ZXJpZnlUeXBlQXNzZXJ0aW9uIGZyb20gXCIuLi92ZXJpZnkvdHlwZUFzc2VydGlvblwiO1xuaW1wb3J0IHN0YXRlbWVudE5vZGVzVmVyaWZpZXIgZnJvbSBcIi4uL3ZlcmlmaWVyL25vZGVzL3N0YXRlbWVudFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGVxdWFsaXR5Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9lcXVhbGl0eSFcIiksXG4gICAgICBhcmd1bWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvYXJndW1lbnQhXCIpLFxuICAgICAgZGVmaW5pbmdOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L2RlZmluaW5nIVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhQXJndW1lbnQvc3RhdGVtZW50IVwiKSxcbiAgICAgIGNvbnRhaW5tZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9jb250YWlubWVudCFcIiksXG4gICAgICBtZXRhQXJndW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L21ldGFBcmd1bWVudCFcIiksXG4gICAgICB0eXBlQXNzZXJ0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC90eXBlQXNzZXJ0aW9uIVwiKTtcblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWQ7XG5cbiAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gLCBzdGF0ZW1lbnROb2RlKTtcblxuICBjb25zdCB2ZXJpZnlTdGF0ZW1lbnRGdW5jdGlvbnMgPSBbXG4gICAgdmVyaWZ5U3RhdGVtZW50QXNFcXVhbGl0eSxcbiAgICB2ZXJpZnlTdGF0ZW1lbnRBYm91dERlZmluaW5nLFxuICAgIHZlcmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbixcbiAgICB2ZXJpZnlTdGF0ZW1lbnRBYm91dENvbnRhaW5tZW50LFxuICAgIHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yc1xuICBdO1xuXG4gIHN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5U3RhdGVtZW50RnVuY3Rpb25zLnNvbWUoKHZlcmlmeVN0YXRlbWVudEZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlTdGF0ZW1lbnRGdW5jdGlvbihzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCwgc3RhdGVtZW50Tm9kZSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlTdGFuZGFsb25lU3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgc3RhbmRhbG9uZVN0YXRlbWVudFZlcmlmaWVkO1xuXG4gIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGFuZGFsb25lIHN0YXRlbWVudC4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gIGNvbnN0IGNvbnRleHQgPSBmaWxlQ29udGV4dCwgIC8vL1xuICAgICAgICBkZXJpdmVkID0gZmFsc2UsXG4gICAgICAgIGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgIHN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgc3RhbmRhbG9uZVN0YXRlbWVudFZlcmlmaWVkID0gc3RhdGVtZW50VmVyaWZpZWQ7ICAvLy9cblxuICBpZiAoc3RhbmRhbG9uZVN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGFuZGFsb25lIHN0YXRlbWVudC5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiBzdGFuZGFsb25lU3RhdGVtZW50VmVyaWZpZWQ7XG59XG5cbk9iamVjdC5hc3NpZ24oc3RhdGVtZW50Tm9kZXNWZXJpZmllciwge1xuICB2ZXJpZnlTdGF0ZW1lbnRcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB2ZXJpZnlTdGF0ZW1lbnQ7XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFzRXF1YWxpdHkoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkgPSBmYWxzZTtcblxuICBjb25zdCBlcXVhbGl0eU5vZGUgPSBlcXVhbGl0eU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAoZXF1YWxpdHlOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhbiBlcXVhbGl0eS4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29uc3QgZXF1YWxpdHlWZXJpZmllZCA9IHZlcmlmeUVxdWFsaXR5KGVxdWFsaXR5Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IGVxdWFsaXR5VmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhbiBlcXVhbGl0eS5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5O1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBYm91dERlZmluaW5nKHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBYm91dERlZmluaW5nID0gZmFsc2U7XG5cbiAgY29uc3QgZGVmaW5pbmdOb2RlID0gZGVmaW5pbmdOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKGRlZmluaW5nTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYWJvdXQgZGVmaW5pbmcuLi5gLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIGNvbnN0IGFyZ3VtZW50Tm9kZSA9IGFyZ3VtZW50Tm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIGRlZmluaW5nVmVyaWZpZWQgPSB2ZXJpZnlEZWZpbmluZyhhcmd1bWVudE5vZGUsIGRlZmluaW5nTm9kZSwgY29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZEFib3V0RGVmaW5pbmcgPSBkZWZpbmluZ1ZlcmlmaWVkOyAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFib3V0RGVmaW5pbmcpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYWJvdXQgZGVmaW5pbmcuYCwgc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQWJvdXREZWZpbmluZztcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QXNUeXBlQXNzZXJ0aW9uKHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBc1R5cGVBc3NlcnRpb24gPSBmYWxzZTtcblxuICBjb25zdCB0eXBlQXNzZXJ0aW9uTm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKHR5cGVBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHR5cGUgYXNzZXJ0aW9uLi4uYCwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlUeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWRBc1R5cGVBc3NlcnRpb24gPSB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgdHlwZSBhc3NlcnRpb24uYCwgc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBYm91dENvbnRhaW5tZW50KHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBYm91dENvbnRhaW5tZW50ID0gZmFsc2U7XG5cbiAgY29uc3QgY29udGFpbm1lbnROb2RlID0gY29udGFpbm1lbnROb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKGNvbnRhaW5tZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYWJvdXQgY29udGFpbm1lbnQuLi5gLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIGNvbnN0IGFyZ3VtZW50Tm9kZSA9IGFyZ3VtZW50Tm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIG1ldGFBcmd1bWVudE5vZGUgPSBtZXRhQXJndW1lbnROb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgY29udGFpbm1lbnRWZXJpZmllZCA9IHZlcmlmeUNvbnRhaW5tZW50KGFyZ3VtZW50Tm9kZSwgY29udGFpbm1lbnROb2RlLCBtZXRhQXJndW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIGlmIChjb250YWlubWVudFZlcmlmaWVkKSB7XG4gICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KG1ldGFBcmd1bWVudE5vZGUpOyAvLy9cblxuICAgICAgY29uc3QgdmVyaWZ5U3RhdGVtZW50RnVuY3Rpb25zID0gW1xuICAgICAgICB2ZXJpZnlTdGF0ZW1lbnRBc0VxdWFsaXR5LFxuICAgICAgICB2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcnNcbiAgICAgIF07XG5cbiAgICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5U3RhdGVtZW50RnVuY3Rpb25zLnNvbWUoKHZlcmlmeVN0YXRlbWVudEZ1bmN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlcml2ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICAgICAgc3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlTdGF0ZW1lbnRGdW5jdGlvbihzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgc3RhdGVtZW50VmVyaWZpZWRBYm91dENvbnRhaW5tZW50ID0gc3RhdGVtZW50VmVyaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFib3V0Q29udGFpbm1lbnQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYWJvdXQgY29udGFpbm1lbnQuYCwgc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQWJvdXRDb250YWlubWVudDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3Ioc3RhdGVtZW50Tm9kZSwgY29tYmluYXRvciwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3I7XG5cbiAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgIGNvbWJpbmF0b3JTdHJpbmcgPSBjb21iaW5hdG9yLmdldFN0cmluZygpO1xuXG4gIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFnYWluc3QgdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yLi4uYCwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgY29uc3QgY29tYmluYXRvclN0YXRlbWVudE5vZGUgPSBjb21iaW5hdG9yLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgbm9uVGVybWluYWxOb2RlQSA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gY29tYmluYXRvclN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHN0YXRlbWVudE5vZGVzVmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yID0gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7ICAvLy9cblxuICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcikge1xuICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYWdhaW5zdCB0aGUgJyR7Y29tYmluYXRvclN0cmluZ30nIGNvbWJpbmF0b3IuYCwgc3RhdGVtZW50Tm9kZSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcjtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JzKHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnMgPSBmYWxzZTtcblxuICBjb25zdCBlcXVhbGl0eU5vZGUgPSBlcXVhbGl0eU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgZGVmaW5pbmdOb2RlID0gZGVmaW5pbmdOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgIGNvbnRhaW5tZW50Tm9kZSA9IGNvbnRhaW5tZW50Tm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpLFxuICAgICAgICB0eXBlQXNzZXJ0aW9uTm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKChlcXVhbGl0eU5vZGUgPT09IG51bGwpICYmIChkZWZpbmluZ05vZGUgPT09IG51bGwpICYmIChjb250YWlubWVudE5vZGUgPT09IG51bGwpICYmICh0eXBlQXNzZXJ0aW9uTm9kZSA9PT0gbnVsbCkpIHtcbiAgICBsZXQgY29tYmluYXRvcnMgPSBjb250ZXh0LmdldENvbWJpbmF0b3JzKCk7XG5cbiAgICBjb21iaW5hdG9ycyA9IFsgLy8vXG4gICAgICBicmFja2V0ZWRDb21iaW5hdG9yLFxuICAgICAgLi4uY29tYmluYXRvcnNcbiAgICBdO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnMgPSBjb21iaW5hdG9ycy5zb21lKChjb21iaW5hdG9yKSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yID0gdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3Ioc3RhdGVtZW50Tm9kZSwgY29tYmluYXRvciwgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9ycztcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlTdGFuZGFsb25lU3RhdGVtZW50IiwiZXF1YWxpdHlOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJhcmd1bWVudE5vZGVRdWVyeSIsImRlZmluaW5nTm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5IiwiY29udGFpbm1lbnROb2RlUXVlcnkiLCJtZXRhQXJndW1lbnROb2RlUXVlcnkiLCJ0eXBlQXNzZXJ0aW9uTm9kZVF1ZXJ5IiwidmVyaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsImFzc2lnbm1lbnRzIiwiZGVyaXZlZCIsImNvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsInN0YXRlbWVudFZlcmlmaWVkIiwic3RhdGVtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJ2ZXJpZnlTdGF0ZW1lbnRGdW5jdGlvbnMiLCJ2ZXJpZnlTdGF0ZW1lbnRBc0VxdWFsaXR5IiwidmVyaWZ5U3RhdGVtZW50QWJvdXREZWZpbmluZyIsInZlcmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbiIsInZlcmlmeVN0YXRlbWVudEFib3V0Q29udGFpbm1lbnQiLCJ2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcnMiLCJzb21lIiwidmVyaWZ5U3RhdGVtZW50RnVuY3Rpb24iLCJkZWJ1ZyIsImZpbGVDb250ZXh0Iiwic3RhbmRhbG9uZVN0YXRlbWVudFZlcmlmaWVkIiwiT2JqZWN0IiwiYXNzaWduIiwic3RhdGVtZW50Tm9kZXNWZXJpZmllciIsInN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSIsImVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5VmVyaWZpZWQiLCJ2ZXJpZnlFcXVhbGl0eSIsInN0YXRlbWVudFZlcmlmaWVkQWJvdXREZWZpbmluZyIsImRlZmluaW5nTm9kZSIsImFyZ3VtZW50Tm9kZSIsImRlZmluaW5nVmVyaWZpZWQiLCJ2ZXJpZnlEZWZpbmluZyIsInN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uIiwidHlwZUFzc2VydGlvbk5vZGUiLCJ0eXBlQXNzZXJ0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlUeXBlQXNzZXJ0aW9uIiwic3RhdGVtZW50VmVyaWZpZWRBYm91dENvbnRhaW5tZW50IiwiY29udGFpbm1lbnROb2RlIiwibWV0YUFyZ3VtZW50Tm9kZSIsImNvbnRhaW5tZW50VmVyaWZpZWQiLCJ2ZXJpZnlDb250YWlubWVudCIsInZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yIiwiY29tYmluYXRvciIsInN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IiLCJjb21iaW5hdG9yU3RyaW5nIiwiZ2V0U3RyaW5nIiwiY29tYmluYXRvclN0YXRlbWVudE5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsInN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzIiwiY29tYmluYXRvcnMiLCJnZXRDb21iaW5hdG9ycyIsImJyYWNrZXRlZENvbWJpbmF0b3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQTBFQSxPQUErQjtlQUEvQjs7SUF6QmdCQSx5QkFBeUI7ZUFBekJBOzs7K0RBL0NXOytEQUNBO2tFQUNHO2dFQUNFO29FQUNBO2dFQUNHO3FCQUVUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1DLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQyx5QkFDOUJDLG9CQUFvQkQsSUFBQUEsZ0JBQVMsRUFBQyx5QkFDOUJFLG9CQUFvQkYsSUFBQUEsZ0JBQVMsRUFBQyx5QkFDOUJHLHFCQUFxQkgsSUFBQUEsZ0JBQVMsRUFBQyw2QkFDL0JJLHVCQUF1QkosSUFBQUEsZ0JBQVMsRUFBQyw0QkFDakNLLHdCQUF3QkwsSUFBQUEsZ0JBQVMsRUFBQyw2QkFDbENNLHlCQUF5Qk4sSUFBQUEsZ0JBQVMsRUFBQztBQUV6QyxTQUFTTyxnQkFBZ0JDLGFBQWEsRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsV0FBVztJQUNoRixJQUFJQztJQUVKLElBQU1DLGtCQUFrQkgsUUFBUUksWUFBWSxDQUFDUDtJQUU3Q0csUUFBUUssS0FBSyxDQUFDLEFBQUMsa0JBQWlDLE9BQWhCRixpQkFBZ0IsbUJBQWlCTjtJQUVqRSxJQUFNUywyQkFBMkI7UUFDL0JDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO0tBQ0Q7SUFFRFQsb0JBQW9CSSx5QkFBeUJNLElBQUksQ0FBQyxTQUFDQztRQUNqRCxJQUFNWCxvQkFBb0JXLHdCQUF3QmhCLGVBQWVDLGFBQWFDLFNBQVNDLFNBQVNDO1FBRWhHLElBQUlDLG1CQUFtQjtZQUNyQixPQUFPO1FBQ1Q7SUFDRjtJQUVBLElBQUlBLG1CQUFtQjtRQUNyQkYsUUFBUWMsS0FBSyxDQUFDLEFBQUMsb0JBQW1DLE9BQWhCWCxpQkFBZ0IsaUJBQWVOO0lBQ25FO0lBRUEsT0FBT0s7QUFDVDtBQUVPLFNBQVNmLDBCQUEwQlUsYUFBYSxFQUFFa0IsV0FBVyxFQUFFZCxXQUFXO0lBQy9FLElBQUllO0lBRUosSUFBTWIsa0JBQWtCWSxZQUFZWCxZQUFZLENBQUNQO0lBRWpEa0IsWUFBWVYsS0FBSyxDQUFDLEFBQUMsa0JBQWlDLE9BQWhCRixpQkFBZ0IsOEJBQTRCTjtJQUVoRixJQUFNRyxVQUFVZSxhQUNWaEIsVUFBVSxPQUNWRCxjQUFjLEVBQUUsRUFDaEJJLG9CQUFvQk4sZ0JBQWdCQyxlQUFlQyxhQUFhQyxTQUFTQyxTQUFTQztJQUV4RmUsOEJBQThCZCxtQkFBb0IsR0FBRztJQUVyRCxJQUFJYyw2QkFBNkI7UUFDL0JELFlBQVlELEtBQUssQ0FBQyxBQUFDLG9CQUFtQyxPQUFoQlgsaUJBQWdCLDRCQUEwQk47SUFDbEY7SUFFQSxPQUFPbUI7QUFDVDtBQUVBQyxPQUFPQyxNQUFNLENBQUNDLGtCQUFzQixFQUFFO0lBQ3BDdkIsaUJBQUFBO0FBQ0Y7SUFFQSxXQUFlQTtBQUVmLFNBQVNXLDBCQUEwQlYsYUFBYSxFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxXQUFXO0lBQzFGLElBQUltQiw4QkFBOEI7SUFFbEMsSUFBTUMsZUFBZWpDLGtCQUFrQlM7SUFFdkMsSUFBSXdCLGlCQUFpQixNQUFNO1FBQ3pCLElBQU1sQixrQkFBa0JILFFBQVFJLFlBQVksQ0FBQ1A7UUFFN0NHLFFBQVFLLEtBQUssQ0FBQyxBQUFDLGtCQUFpQyxPQUFoQkYsaUJBQWdCLGtDQUFnQ047UUFFaEYsSUFBTXlCLG1CQUFtQkMsSUFBQUEsaUJBQWMsRUFBQ0YsY0FBY3ZCLGFBQWFDLFNBQVNDLFNBQVNDO1FBRXJGbUIsOEJBQThCRSxrQkFBa0IsR0FBRztRQUVuRCxJQUFJRiw2QkFBNkI7WUFDL0JwQixRQUFRYyxLQUFLLENBQUMsQUFBQyxvQkFBbUMsT0FBaEJYLGlCQUFnQixnQ0FBOEJOO1FBQ2xGO0lBQ0Y7SUFFQSxPQUFPdUI7QUFDVDtBQUVBLFNBQVNaLDZCQUE2QlgsYUFBYSxFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxXQUFXO0lBQzdGLElBQUl1QixpQ0FBaUM7SUFFckMsSUFBTUMsZUFBZWxDLGtCQUFrQk07SUFFdkMsSUFBSTRCLGlCQUFpQixNQUFNO1FBQ3pCLElBQU10QixrQkFBa0JILFFBQVFJLFlBQVksQ0FBQ1A7UUFFN0NHLFFBQVFLLEtBQUssQ0FBQyxBQUFDLGtCQUFpQyxPQUFoQkYsaUJBQWdCLGtDQUFnQ047UUFFaEYsSUFBTTZCLGVBQWVwQyxrQkFBa0JPLGdCQUNqQzhCLG1CQUFtQkMsSUFBQUEsaUJBQWMsRUFBQ0YsY0FBY0QsY0FBY3pCO1FBRXBFd0IsaUNBQWlDRyxrQkFBa0IsR0FBRztRQUV0RCxJQUFJSCxnQ0FBZ0M7WUFDbEN4QixRQUFRYyxLQUFLLENBQUMsQUFBQyxvQkFBbUMsT0FBaEJYLGlCQUFnQixnQ0FBOEJOO1FBQ2xGO0lBQ0Y7SUFFQSxPQUFPMkI7QUFDVDtBQUVBLFNBQVNmLCtCQUErQlosYUFBYSxFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxXQUFXO0lBQy9GLElBQUk0QixtQ0FBbUM7SUFFdkMsSUFBTUMsb0JBQW9CbkMsdUJBQXVCRTtJQUVqRCxJQUFJaUMsc0JBQXNCLE1BQU07UUFDOUIsSUFBTTNCLGtCQUFrQkgsUUFBUUksWUFBWSxDQUFDUDtRQUU3Q0csUUFBUUssS0FBSyxDQUFDLEFBQUMsa0JBQWlDLE9BQWhCRixpQkFBZ0IsdUNBQXFDTjtRQUVyRixJQUFNa0Msd0JBQXdCQyxJQUFBQSxzQkFBbUIsRUFBQ0YsbUJBQW1CaEMsYUFBYUMsU0FBU0MsU0FBU0M7UUFFcEc0QixtQ0FBbUNFLHVCQUF1QixHQUFHO1FBRTdELElBQUlGLGtDQUFrQztZQUNwQzdCLFFBQVFjLEtBQUssQ0FBQyxBQUFDLG9CQUFtQyxPQUFoQlgsaUJBQWdCLHFDQUFtQ047UUFDdkY7SUFDRjtJQUVBLE9BQU9nQztBQUNUO0FBRUEsU0FBU25CLGdDQUFnQ2IsYUFBYSxFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxXQUFXO0lBQ2hHLElBQUlnQyxvQ0FBb0M7SUFFeEMsSUFBTUMsa0JBQWtCekMscUJBQXFCSTtJQUU3QyxJQUFJcUMsb0JBQW9CLE1BQU07UUFDNUIsSUFBTS9CLGtCQUFrQkgsUUFBUUksWUFBWSxDQUFDUDtRQUU3Q0csUUFBUUssS0FBSyxDQUFDLEFBQUMsa0JBQWlDLE9BQWhCRixpQkFBZ0IscUNBQW1DTjtRQUVuRixJQUFNNkIsZUFBZXBDLGtCQUFrQk8sZ0JBQ2pDc0MsbUJBQW1CekMsc0JBQXNCRyxnQkFDekN1QyxzQkFBc0JDLElBQUFBLG9CQUFpQixFQUFDWCxjQUFjUSxpQkFBaUJDLGtCQUFrQm5DO1FBRS9GLElBQUlvQyxxQkFBcUI7WUFDdkJ2QyxnQkFBZ0JMLG1CQUFtQjJDLG1CQUFtQixHQUFHO1lBRXpELElBQU03QiwyQkFBMkI7Z0JBQy9CQztnQkFDQUk7YUFDRDtZQUVELElBQU1ULG9CQUFvQkkseUJBQXlCTSxJQUFJLENBQUMsU0FBQ0M7Z0JBQ3ZELElBQU1kLFVBQVUsT0FDVkQsY0FBYyxFQUFFLEVBQ2hCSSxvQkFBb0JXLHdCQUF3QmhCLGVBQWVDLGFBQWFDLFNBQVNDLFNBQVNDO2dCQUVoRyxJQUFJQyxtQkFBbUI7b0JBQ3JCLE9BQU87Z0JBQ1Q7WUFDRjtZQUVBK0Isb0NBQW9DL0IsbUJBQW1CLEdBQUc7UUFDNUQ7UUFFQSxJQUFJK0IsbUNBQW1DO1lBQ3JDakMsUUFBUWMsS0FBSyxDQUFDLEFBQUMsb0JBQW1DLE9BQWhCWCxpQkFBZ0IsbUNBQWlDTjtRQUNyRjtJQUNGO0lBRUEsT0FBT29DO0FBQ1Q7QUFFQSxTQUFTSyxpQ0FBaUN6QyxhQUFhLEVBQUUwQyxVQUFVLEVBQUV2QyxPQUFPLEVBQUVDLFdBQVc7SUFDdkYsSUFBSXVDO0lBRUosSUFBTXJDLGtCQUFrQkgsUUFBUUksWUFBWSxDQUFDUCxnQkFDdkM0QyxtQkFBbUJGLFdBQVdHLFNBQVM7SUFFN0MxQyxRQUFRSyxLQUFLLENBQUMsQUFBQyxrQkFBNERvQyxPQUEzQ3RDLGlCQUFnQiw2QkFBNEMsT0FBakJzQyxrQkFBaUIsb0JBQWtCNUM7SUFFOUcsSUFBTThDLDBCQUEwQkosV0FBV0ssZ0JBQWdCLElBQ3JEQyxtQkFBbUJoRCxlQUNuQmlELG1CQUFtQkgseUJBQ25CSSwwQkFBMEI1QixrQkFBc0IsQ0FBQzZCLHFCQUFxQixDQUFDSCxrQkFBa0JDLGtCQUFrQjlDLFNBQVNDO0lBRTFIdUMscUNBQXFDTyx5QkFBMEIsR0FBRztJQUVsRSxJQUFJUCxvQ0FBb0M7UUFDdEN4QyxRQUFRYyxLQUFLLENBQUMsQUFBQyxvQkFBOEQyQixPQUEzQ3RDLGlCQUFnQiw2QkFBNEMsT0FBakJzQyxrQkFBaUIsa0JBQWdCNUM7SUFDaEg7SUFFQSxPQUFPMkM7QUFDVDtBQUVBLFNBQVM3QixrQ0FBa0NkLGFBQWEsRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsV0FBVztJQUNsRyxJQUFJZ0Qsc0NBQXNDO0lBRTFDLElBQU01QixlQUFlakMsa0JBQWtCUyxnQkFDakM0QixlQUFlbEMsa0JBQWtCTSxnQkFDakNxQyxrQkFBa0J6QyxxQkFBcUJJLGdCQUN2Q2lDLG9CQUFvQm5DLHVCQUF1QkU7SUFFakQsSUFBSSxBQUFDd0IsaUJBQWlCLFFBQVVJLGlCQUFpQixRQUFVUyxvQkFBb0IsUUFBVUosc0JBQXNCLE1BQU87UUFDcEgsSUFBSW9CLGNBQWNsRCxRQUFRbUQsY0FBYztRQUV4Q0QsY0FBYztZQUNaRSxrQkFBbUI7U0FFcEIsQ0FIYSxPQUVaLHFCQUFHRjtRQUdMRCxzQ0FBc0NDLFlBQVl0QyxJQUFJLENBQUMsU0FBQzJCO1lBQ3RELElBQU1DLHFDQUFxQ0YsaUNBQWlDekMsZUFBZTBDLFlBQVl2QyxTQUFTQztZQUVoSCxJQUFJdUMsb0NBQW9DO2dCQUN0QyxPQUFPO1lBQ1Q7UUFDRjtJQUNGO0lBRUEsT0FBT1M7QUFDVCJ9