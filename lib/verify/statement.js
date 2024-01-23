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
var equalityNodeQuery = (0, _query.nodeQuery)("/statement/equality!"), typeAssertionNodeQuery = (0, _query.nodeQuery)("/statement/typeAssertion!");
function verifyStatement(statementNode, assignments, derived, context, verifyAhead) {
    var statementVerified;
    var statementString = context.nodeAsString(statementNode);
    context.trace("Verifying the '".concat(statementString, "' statement..."), statementNode);
    var verifyStatementFunctions = [
        verifyStatementAsEquality,
        verifyStatementAsTypeAssertion,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5RXF1YWxpdHkgZnJvbSBcIi4uL3ZlcmlmeS9lcXVhbGl0eVwiO1xuaW1wb3J0IGJyYWNrZXRlZENvbWJpbmF0b3IgZnJvbSBcIi4uL29jbWJpbmF0b3IvYnJhY2tldGVkXCI7XG5pbXBvcnQgdmVyaWZ5VHlwZUFzc2VydGlvbiBmcm9tIFwiLi4vdmVyaWZ5L3R5cGVBc3NlcnRpb25cIjtcbmltcG9ydCBzdGF0ZW1lbnROb2Rlc1ZlcmlmaWVyIGZyb20gXCIuLi92ZXJpZmllci9ub2Rlcy9zdGF0ZW1lbnRcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBlcXVhbGl0eU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvZXF1YWxpdHkhXCIpLFxuICAgICAgdHlwZUFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvdHlwZUFzc2VydGlvbiFcIik7XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkO1xuXG4gIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgY29uc3QgdmVyaWZ5U3RhdGVtZW50RnVuY3Rpb25zID0gW1xuICAgIHZlcmlmeVN0YXRlbWVudEFzRXF1YWxpdHksXG4gICAgdmVyaWZ5U3RhdGVtZW50QXNUeXBlQXNzZXJ0aW9uLFxuICAgIHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yc1xuICBdO1xuXG4gIHN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5U3RhdGVtZW50RnVuY3Rpb25zLnNvbWUoKHZlcmlmeVN0YXRlbWVudEZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlTdGF0ZW1lbnRGdW5jdGlvbihzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCwgc3RhdGVtZW50Tm9kZSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlTdGFuZGFsb25lU3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgc3RhbmRhbG9uZVN0YXRlbWVudFZlcmlmaWVkO1xuXG4gIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGFuZGFsb25lIHN0YXRlbWVudC4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gIGNvbnN0IGNvbnRleHQgPSBmaWxlQ29udGV4dCwgIC8vL1xuICAgICAgICBkZXJpdmVkID0gZmFsc2UsXG4gICAgICAgIGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgIHN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgc3RhbmRhbG9uZVN0YXRlbWVudFZlcmlmaWVkID0gc3RhdGVtZW50VmVyaWZpZWQ7ICAvLy9cblxuICBpZiAoc3RhbmRhbG9uZVN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGFuZGFsb25lIHN0YXRlbWVudC5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiBzdGFuZGFsb25lU3RhdGVtZW50VmVyaWZpZWQ7XG59XG5cbk9iamVjdC5hc3NpZ24oc3RhdGVtZW50Tm9kZXNWZXJpZmllciwge1xuICB2ZXJpZnlTdGF0ZW1lbnRcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB2ZXJpZnlTdGF0ZW1lbnQ7XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFzRXF1YWxpdHkoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkgPSBmYWxzZTtcblxuICBjb25zdCBlcXVhbGl0eU5vZGUgPSBlcXVhbGl0eU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAoZXF1YWxpdHlOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhbiBlcXVhbGl0eS4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29uc3QgZXF1YWxpdHlWZXJpZmllZCA9IHZlcmlmeUVxdWFsaXR5KGVxdWFsaXR5Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IGVxdWFsaXR5VmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhbiBlcXVhbGl0eS5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5O1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBc1R5cGVBc3NlcnRpb24oc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGVBc3NlcnRpb25Ob2RlID0gdHlwZUFzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAodHlwZUFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgdHlwZSBhc3NlcnRpb24uLi5gLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbiA9IHR5cGVBc3NlcnRpb25WZXJpZmllZDsgLy8vXG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBc1R5cGVBc3NlcnRpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSB0eXBlIGFzc2VydGlvbi5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBc1R5cGVBc3NlcnRpb247XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9ycyhzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzO1xuXG4gIGxldCBjb21iaW5hdG9ycyA9IGNvbnRleHQuZ2V0Q29tYmluYXRvcnMoKTtcblxuICBjb21iaW5hdG9ycyA9IFsgLy8vXG4gICAgYnJhY2tldGVkQ29tYmluYXRvcixcbiAgICAuLi5jb21iaW5hdG9yc1xuICBdO1xuXG4gIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzID0gY29tYmluYXRvcnMuc29tZSgoY29tYmluYXRvcikgPT4ge1xuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IgPSB2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcihzdGF0ZW1lbnROb2RlLCBjb21iaW5hdG9yLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnM7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yKHN0YXRlbWVudE5vZGUsIGNvbWJpbmF0b3IsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yO1xuXG4gIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICBjb21iaW5hdG9yU3RyaW5nID0gY29tYmluYXRvci5nZXRTdHJpbmcoKTtcblxuICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhZ2FpbnN0IHRoZSAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvci4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gIGNvbnN0IGNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlID0gY29tYmluYXRvci5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZUEgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IGNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBzdGF0ZW1lbnROb2Rlc1ZlcmlmaWVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvciA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAgLy8vXG5cbiAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IpIHtcbiAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFnYWluc3QgdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yLmAsIHN0YXRlbWVudE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3I7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5U3RhbmRhbG9uZVN0YXRlbWVudCIsImVxdWFsaXR5Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZUFzc2VydGlvbk5vZGVRdWVyeSIsInZlcmlmeVN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJhc3NpZ25tZW50cyIsImRlcml2ZWQiLCJjb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJzdGF0ZW1lbnRWZXJpZmllZCIsInN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwidmVyaWZ5U3RhdGVtZW50RnVuY3Rpb25zIiwidmVyaWZ5U3RhdGVtZW50QXNFcXVhbGl0eSIsInZlcmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbiIsInZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9ycyIsInNvbWUiLCJ2ZXJpZnlTdGF0ZW1lbnRGdW5jdGlvbiIsImRlYnVnIiwiZmlsZUNvbnRleHQiLCJzdGFuZGFsb25lU3RhdGVtZW50VmVyaWZpZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJzdGF0ZW1lbnROb2Rlc1ZlcmlmaWVyIiwic3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5IiwiZXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlWZXJpZmllZCIsInZlcmlmeUVxdWFsaXR5Iiwic3RhdGVtZW50VmVyaWZpZWRBc1R5cGVBc3NlcnRpb24iLCJ0eXBlQXNzZXJ0aW9uTm9kZSIsInR5cGVBc3NlcnRpb25WZXJpZmllZCIsInZlcmlmeVR5cGVBc3NlcnRpb24iLCJzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9ycyIsImNvbWJpbmF0b3JzIiwiZ2V0Q29tYmluYXRvcnMiLCJicmFja2V0ZWRDb21iaW5hdG9yIiwiY29tYmluYXRvciIsInN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IiLCJ2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvciIsImNvbWJpbmF0b3JTdHJpbmciLCJnZXRTdHJpbmciLCJjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFpRUEsT0FBK0I7ZUFBL0I7O0lBekJnQkEseUJBQXlCO2VBQXpCQTs7OytEQXRDVztnRUFDSztvRUFDQTtnRUFDRztxQkFFVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQyxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMseUJBQzlCQyx5QkFBeUJELElBQUFBLGdCQUFTLEVBQUM7QUFFekMsU0FBU0UsZ0JBQWdCQyxhQUFhLEVBQUVDLFdBQVcsRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLFdBQVc7SUFDaEYsSUFBSUM7SUFFSixJQUFNQyxrQkFBa0JILFFBQVFJLFlBQVksQ0FBQ1A7SUFFN0NHLFFBQVFLLEtBQUssQ0FBQyxBQUFDLGtCQUFpQyxPQUFoQkYsaUJBQWdCLG1CQUFpQk47SUFFakUsSUFBTVMsMkJBQTJCO1FBQy9CQztRQUNBQztRQUNBQztLQUNEO0lBRURQLG9CQUFvQkkseUJBQXlCSSxJQUFJLENBQUMsU0FBQ0M7UUFDakQsSUFBTVQsb0JBQW9CUyx3QkFBd0JkLGVBQWVDLGFBQWFDLFNBQVNDLFNBQVNDO1FBRWhHLElBQUlDLG1CQUFtQjtZQUNyQixPQUFPO1FBQ1Q7SUFDRjtJQUVBLElBQUlBLG1CQUFtQjtRQUNyQkYsUUFBUVksS0FBSyxDQUFDLEFBQUMsb0JBQW1DLE9BQWhCVCxpQkFBZ0IsaUJBQWVOO0lBQ25FO0lBRUEsT0FBT0s7QUFDVDtBQUVPLFNBQVNWLDBCQUEwQkssYUFBYSxFQUFFZ0IsV0FBVyxFQUFFWixXQUFXO0lBQy9FLElBQUlhO0lBRUosSUFBTVgsa0JBQWtCVSxZQUFZ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