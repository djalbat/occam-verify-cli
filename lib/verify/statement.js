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
var equalityNodeQuery = (0, _query.nodeQuery)("/statement/equality!"), containmentNodeQuery = (0, _query.nodeQuery)("/statement/containment!"), typeAssertionNodeQuery = (0, _query.nodeQuery)("/statement/typeAssertion!");
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
    var statementVerifiedAsTypeAssertion = false;
    var containmentNode = containmentNodeQuery(statementNode);
    if (containmentNode !== null) {
    // const statementString = context.nodeAsString(statementNode);
    //
    // context.trace(`Verifying the '${statementString}' statement with a containment...`, statementNode);
    //
    // const containmentVerified = verifyTypeAssertion(containmentNode, assignments, derived, context, verifyAhead);
    //
    // statementVerifiedAsTypeAssertion = containmentVerified; ///
    //
    // if (statementVerifiedAsTypeAssertion) {
    //   context.debug(`...verified the '${statementString}' statement with a containment.`, statementNode);
    // }
    }
    return statementVerifiedAsTypeAssertion;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5RXF1YWxpdHkgZnJvbSBcIi4uL3ZlcmlmeS9lcXVhbGl0eVwiO1xuaW1wb3J0IGJyYWNrZXRlZENvbWJpbmF0b3IgZnJvbSBcIi4uL29jbWJpbmF0b3IvYnJhY2tldGVkXCI7XG5pbXBvcnQgdmVyaWZ5VHlwZUFzc2VydGlvbiBmcm9tIFwiLi4vdmVyaWZ5L3R5cGVBc3NlcnRpb25cIjtcbmltcG9ydCBzdGF0ZW1lbnROb2Rlc1ZlcmlmaWVyIGZyb20gXCIuLi92ZXJpZmllci9ub2Rlcy9zdGF0ZW1lbnRcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBlcXVhbGl0eU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvZXF1YWxpdHkhXCIpLFxuICAgICAgY29udGFpbm1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L2NvbnRhaW5tZW50IVwiKSxcbiAgICAgIHR5cGVBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3R5cGVBc3NlcnRpb24hXCIpO1xuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZDtcblxuICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gIGNvbnN0IHZlcmlmeVN0YXRlbWVudEZ1bmN0aW9ucyA9IFtcbiAgICB2ZXJpZnlTdGF0ZW1lbnRBc0VxdWFsaXR5LFxuICAgIHZlcmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbixcbiAgICB2ZXJpZnlTdGF0ZW1lbnRXaXRoQ29udGFpbm1lbnQsXG4gICAgdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JzXG4gIF07XG5cbiAgc3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlTdGF0ZW1lbnRGdW5jdGlvbnMuc29tZSgodmVyaWZ5U3RhdGVtZW50RnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVN0YXRlbWVudEZ1bmN0aW9uKHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVN0YW5kYWxvbmVTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgZmlsZUNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBzdGFuZGFsb25lU3RhdGVtZW50VmVyaWZpZWQ7XG5cbiAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YW5kYWxvbmUgc3RhdGVtZW50Li4uYCwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgY29uc3QgY29udGV4dCA9IGZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgIGRlcml2ZWQgPSBmYWxzZSxcbiAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgc3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICBzdGFuZGFsb25lU3RhdGVtZW50VmVyaWZpZWQgPSBzdGF0ZW1lbnRWZXJpZmllZDsgIC8vL1xuXG4gIGlmIChzdGFuZGFsb25lU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YW5kYWxvbmUgc3RhdGVtZW50LmAsIHN0YXRlbWVudE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YW5kYWxvbmVTdGF0ZW1lbnRWZXJpZmllZDtcbn1cblxuT2JqZWN0LmFzc2lnbihzdGF0ZW1lbnROb2Rlc1ZlcmlmaWVyLCB7XG4gIHZlcmlmeVN0YXRlbWVudFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHZlcmlmeVN0YXRlbWVudDtcblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QXNFcXVhbGl0eShzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IGZhbHNlO1xuXG4gIGNvbnN0IGVxdWFsaXR5Tm9kZSA9IGVxdWFsaXR5Tm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gIGlmIChlcXVhbGl0eU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGFuIGVxdWFsaXR5Li4uYCwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb25zdCBlcXVhbGl0eVZlcmlmaWVkID0gdmVyaWZ5RXF1YWxpdHkoZXF1YWxpdHlOb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5ID0gZXF1YWxpdHlWZXJpZmllZDsgLy8vXG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGFuIGVxdWFsaXR5LmAsIHN0YXRlbWVudE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHk7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbihzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgY29uc3QgdHlwZUFzc2VydGlvbk5vZGUgPSB0eXBlQXNzZXJ0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gIGlmICh0eXBlQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSB0eXBlIGFzc2VydGlvbi4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29uc3QgdHlwZUFzc2VydGlvblZlcmlmaWVkID0gdmVyaWZ5VHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uID0gdHlwZUFzc2VydGlvblZlcmlmaWVkOyAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHR5cGUgYXNzZXJ0aW9uLmAsIHN0YXRlbWVudE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50V2l0aENvbnRhaW5tZW50KHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBc1R5cGVBc3NlcnRpb24gPSBmYWxzZTtcblxuICBjb25zdCBjb250YWlubWVudE5vZGUgPSBjb250YWlubWVudE5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAoY29udGFpbm1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgLy8gY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG4gICAgLy9cbiAgICAvLyBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIGEgY29udGFpbm1lbnQuLi5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgICAvL1xuICAgIC8vIGNvbnN0IGNvbnRhaW5tZW50VmVyaWZpZWQgPSB2ZXJpZnlUeXBlQXNzZXJ0aW9uKGNvbnRhaW5tZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcbiAgICAvL1xuICAgIC8vIHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uID0gY29udGFpbm1lbnRWZXJpZmllZDsgLy8vXG4gICAgLy9cbiAgICAvLyBpZiAoc3RhdGVtZW50VmVyaWZpZWRBc1R5cGVBc3NlcnRpb24pIHtcbiAgICAvLyAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCBhIGNvbnRhaW5tZW50LmAsIHN0YXRlbWVudE5vZGUpO1xuICAgIC8vIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JzKHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnM7XG5cbiAgbGV0IGNvbWJpbmF0b3JzID0gY29udGV4dC5nZXRDb21iaW5hdG9ycygpO1xuXG4gIGNvbWJpbmF0b3JzID0gWyAvLy9cbiAgICBicmFja2V0ZWRDb21iaW5hdG9yLFxuICAgIC4uLmNvbWJpbmF0b3JzXG4gIF07XG5cbiAgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnMgPSBjb21iaW5hdG9ycy5zb21lKChjb21iaW5hdG9yKSA9PiB7XG4gICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvciA9IHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yKHN0YXRlbWVudE5vZGUsIGNvbWJpbmF0b3IsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9ycztcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3Ioc3RhdGVtZW50Tm9kZSwgY29tYmluYXRvciwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3I7XG5cbiAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgIGNvbWJpbmF0b3JTdHJpbmcgPSBjb21iaW5hdG9yLmdldFN0cmluZygpO1xuXG4gIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFnYWluc3QgdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yLi4uYCwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgY29uc3QgY29tYmluYXRvclN0YXRlbWVudE5vZGUgPSBjb21iaW5hdG9yLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgbm9uVGVybWluYWxOb2RlQSA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gY29tYmluYXRvclN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHN0YXRlbWVudE5vZGVzVmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yID0gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7ICAvLy9cblxuICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcikge1xuICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYWdhaW5zdCB0aGUgJyR7Y29tYmluYXRvclN0cmluZ30nIGNvbWJpbmF0b3IuYCwgc3RhdGVtZW50Tm9kZSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcjtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlTdGFuZGFsb25lU3RhdGVtZW50IiwiZXF1YWxpdHlOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJjb250YWlubWVudE5vZGVRdWVyeSIsInR5cGVBc3NlcnRpb25Ob2RlUXVlcnkiLCJ2ZXJpZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwiYXNzaWdubWVudHMiLCJkZXJpdmVkIiwiY29udGV4dCIsInZlcmlmeUFoZWFkIiwic3RhdGVtZW50VmVyaWZpZWQiLCJzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInZlcmlmeVN0YXRlbWVudEZ1bmN0aW9ucyIsInZlcmlmeVN0YXRlbWVudEFzRXF1YWxpdHkiLCJ2ZXJpZnlTdGF0ZW1lbnRBc1R5cGVBc3NlcnRpb24iLCJ2ZXJpZnlTdGF0ZW1lbnRXaXRoQ29udGFpbm1lbnQiLCJ2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcnMiLCJzb21lIiwidmVyaWZ5U3RhdGVtZW50RnVuY3Rpb24iLCJkZWJ1ZyIsImZpbGVDb250ZXh0Iiwic3RhbmRhbG9uZVN0YXRlbWVudFZlcmlmaWVkIiwiT2JqZWN0IiwiYXNzaWduIiwic3RhdGVtZW50Tm9kZXNWZXJpZmllciIsInN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSIsImVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5VmVyaWZpZWQiLCJ2ZXJpZnlFcXVhbGl0eSIsInN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uIiwidHlwZUFzc2VydGlvbk5vZGUiLCJ0eXBlQXNzZXJ0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlUeXBlQXNzZXJ0aW9uIiwiY29udGFpbm1lbnROb2RlIiwic3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnMiLCJjb21iaW5hdG9ycyIsImdldENvbWJpbmF0b3JzIiwiYnJhY2tldGVkQ29tYmluYXRvciIsImNvbWJpbmF0b3IiLCJzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yIiwidmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3IiLCJjb21iaW5hdG9yU3RyaW5nIiwiZ2V0U3RyaW5nIiwiY29tYmluYXRvclN0YXRlbWVudE5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBbUVBLE9BQStCO2VBQS9COztJQXpCZ0JBLHlCQUF5QjtlQUF6QkE7OzsrREF4Q1c7Z0VBQ0s7b0VBQ0E7Z0VBQ0c7cUJBRVQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUMsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLHlCQUM5QkMsdUJBQXVCRCxJQUFBQSxnQkFBUyxFQUFDLDRCQUNqQ0UseUJBQXlCRixJQUFBQSxnQkFBUyxFQUFDO0FBRXpDLFNBQVNHLGdCQUFnQkMsYUFBYSxFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxXQUFXO0lBQ2hGLElBQUlDO0lBRUosSUFBTUMsa0JBQWtCSCxRQUFRSSxZQUFZLENBQUNQO0lBRTdDRyxRQUFRSyxLQUFLLENBQUMsQUFBQyxrQkFBaUMsT0FBaEJGLGlCQUFnQixtQkFBaUJOO0lBRWpFLElBQU1TLDJCQUEyQjtRQUMvQkM7UUFDQUM7UUFDQUM7UUFDQUM7S0FDRDtJQUVEUixvQkFBb0JJLHlCQUF5QkssSUFBSSxDQUFDLFNBQUNDO1FBQ2pELElBQU1WLG9CQUFvQlUsd0JBQXdCZixlQUFlQyxhQUFhQyxTQUFTQyxTQUFTQztRQUVoRyxJQUFJQyxtQkFBbUI7WUFDckIs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