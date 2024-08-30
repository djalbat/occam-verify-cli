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
    },
    verifyStatementAsEquality: function() {
        return verifyStatementAsEquality;
    },
    verifyStatementAsTypeAssertion: function() {
        return verifyStatementAsTypeAssertion;
    }
});
var _equality = /*#__PURE__*/ _interop_require_default(require("../verify/equality"));
var _bracketed = /*#__PURE__*/ _interop_require_default(require("../ocmbinator/bracketed"));
var _typeAssertion = /*#__PURE__*/ _interop_require_default(require("../verify/typeAssertion"));
var _definedAssertion = /*#__PURE__*/ _interop_require_default(require("../verify/definedAssertion"));
var _containedAssertion = /*#__PURE__*/ _interop_require_default(require("../verify/containedAssertion"));
var _statementAgainstCombinator = /*#__PURE__*/ _interop_require_default(require("../verifier/nodes/statementAgainstCombinator"));
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
var equalityNodeQuery = (0, _query.nodeQuery)("/statement/equality!"), statementNodeQuery = (0, _query.nodeQuery)("/containedAssertion/statement!"), typeAssertionNodeQuery = (0, _query.nodeQuery)("/statement/typeAssertion!"), definedAssertionNodeQuery = (0, _query.nodeQuery)("/statement/definedAssertion!"), containedAssertionNodeQuery = (0, _query.nodeQuery)("/statement/containedAssertion!");
function verifyStatement(statementNode, assignments, derived, localContext) {
    var statementVerified;
    var statementString = localContext.nodeAsString(statementNode);
    localContext.trace("Verifying the '".concat(statementString, "' statement..."), statementNode);
    var verifyStatementFunctions = [
        verifyStatementAsEquality,
        verifyStatementAsTypeAssertion,
        verifyStatementAsDefinedAssertion,
        verifyStatementAsContainedAssertion,
        verifyStatementAgainstCombinators
    ];
    statementVerified = verifyStatementFunctions.some(function(verifyStatementFunction) {
        var statementVerified = verifyStatementFunction(statementNode, assignments, derived, localContext);
        if (statementVerified) {
            return true;
        }
    });
    if (statementVerified) {
        localContext.debug("...verified the '".concat(statementString, "' statement."), statementNode);
    }
    return statementVerified;
}
function verifyStandaloneStatement(statementNode, localContext) {
    var standaloneStatementVerified;
    var statementString = localContext.nodeAsString(statementNode);
    localContext.trace("Verifying the '".concat(statementString, "' standalone statement..."), statementNode);
    var derived = false, assignments = [], statementVerified = verifyStatement(statementNode, assignments, derived);
    standaloneStatementVerified = statementVerified; ///
    if (standaloneStatementVerified) {
        localContext.debug("...verified the '".concat(statementString, "' standalone statement."), statementNode);
    }
    return standaloneStatementVerified;
}
Object.assign(_statementAgainstCombinator.default, {
    verifyStatement: verifyStatement
});
var _default = verifyStatement;
function verifyStatementAsEquality(statementNode, assignments, derived, localContext) {
    var statementVerifiedAsEquality = false;
    var equalityNode = equalityNodeQuery(statementNode);
    if (equalityNode !== null) {
        var statementString = localContext.nodeAsString(statementNode);
        localContext.trace("Verifying the '".concat(statementString, "' statement as an equality..."), equalityNode);
        var equalityVerified = (0, _equality.default)(equalityNode, assignments, derived, localContext, function() {
            var verifiedAhead = true;
            return verifiedAhead;
        });
        statementVerifiedAsEquality = equalityVerified; ///
        if (statementVerifiedAsEquality) {
            localContext.debug("...verified the '".concat(statementString, "' statement as an equality."), equalityNode);
        }
    }
    return statementVerifiedAsEquality;
}
function verifyStatementAsTypeAssertion(statementNode, assignments, derived, localContext) {
    var statementVerifiedAsTypeAssertion = false;
    var typeAssertionNode = typeAssertionNodeQuery(statementNode);
    if (typeAssertionNode !== null) {
        var statementString = localContext.nodeAsString(statementNode);
        localContext.trace("Verifying the '".concat(statementString, "' statement as a type assertion..."), typeAssertionNode);
        var typeAssertionVerified = (0, _typeAssertion.default)(typeAssertionNode, assignments, derived, localContext, function() {
            var verifiedAhead = true;
            return verifiedAhead;
        });
        statementVerifiedAsTypeAssertion = typeAssertionVerified; ///
        if (statementVerifiedAsTypeAssertion) {
            localContext.debug("...verified the '".concat(statementString, "' statement as a type assertion."), typeAssertionNode);
        }
    }
    return statementVerifiedAsTypeAssertion;
}
function verifyStatementAsDefinedAssertion(statementNode, assignments, derived, localContext) {
    var statementVerifiedAsDefinedAssertion = false;
    var definedAssertionNode = definedAssertionNodeQuery(statementNode);
    if (definedAssertionNode !== null) {
        var statementString = localContext.nodeAsString(statementNode);
        localContext.trace("Verifying the '".concat(statementString, "' statement as a defined assertion..."), definedAssertionNode);
        var definedAssertionVerified = (0, _definedAssertion.default)(definedAssertionNode, localContext, function() {
            var verifiedAhead = true;
            return verifiedAhead;
        });
        statementVerifiedAsDefinedAssertion = definedAssertionVerified; ///
        if (statementVerifiedAsDefinedAssertion) {
            localContext.debug("...verified the '".concat(statementString, "' statement as a defined assertion."), definedAssertionNode);
        }
    }
    return statementVerifiedAsDefinedAssertion;
}
function verifyStatementAsContainedAssertion(statementNode, assignments, derived, localContext) {
    var statementVerifiedAsContainedAssertion = false;
    var containedAssertionNode = containedAssertionNodeQuery(statementNode);
    if (containedAssertionNode !== null) {
        var statementString = localContext.nodeAsString(statementNode);
        localContext.trace("Verifying the '".concat(statementString, "' statement as a contained assertion..."), containedAssertionNode);
        var containedVerified = (0, _containedAssertion.default)(containedAssertionNode);
        if (containedVerified) {
            statementNode = statementNodeQuery(containedAssertionNode); ///
            var verifyStatementFunctions = [
                verifyStatementAsEquality,
                verifyStatementAgainstCombinators
            ];
            var statementVerified = verifyStatementFunctions.some(function(verifyStatementFunction) {
                var derived = false, assignments = [], statementVerified = verifyStatementFunction(statementNode, assignments, derived, localContext);
                if (statementVerified) {
                    return true;
                }
            });
            statementVerifiedAsContainedAssertion = statementVerified; ///
        }
        if (statementVerifiedAsContainedAssertion) {
            localContext.debug("...verified the '".concat(statementString, "' statement as a contained assertion."), containedAssertionNode);
        }
    }
    return statementVerifiedAsContainedAssertion;
}
function verifyStatementAgainstCombinators(statementNode, assignments, derived, localContext) {
    var statementVerifiedAgainstCombinators = false;
    var equalityNode = equalityNodeQuery(statementNode), typeAssertionNode = typeAssertionNodeQuery(statementNode), definedAssertionNode = definedAssertionNodeQuery(statementNode), containedAssertionNode = containedAssertionNodeQuery(statementNode);
    if (equalityNode === null && typeAssertionNode === null && definedAssertionNode === null && containedAssertionNode === null) {
        var combinators = localContext.getCombinators();
        combinators = [
            _bracketed.default
        ].concat(_to_consumable_array(combinators));
        statementVerifiedAgainstCombinators = combinators.some(function(combinator) {
            var statementVerifiedAgainstCombinator = verifyStatementAgainstCombinator(statementNode, combinator, localContext);
            if (statementVerifiedAgainstCombinator) {
                return true;
            }
        });
    }
    return statementVerifiedAgainstCombinators;
}
function verifyStatementAgainstCombinator(statementNode, combinator, localContext) {
    var statementVerifiedAgainstCombinator;
    var statementString = localContext.nodeAsString(statementNode), combinatorString = combinator.getString();
    localContext.trace("Verifying the '".concat(statementString, "' statement against the '").concat(combinatorString, "' combinator..."), statementNode);
    var combinatorStatementNode = combinator.getStatementNode(), nonTerminalNodeA = statementNode, nonTerminalNodeB = combinatorStatementNode, nonTerminalNodeVerified = _statementAgainstCombinator.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext, function() {
        var verifiedAhead = true;
        return verifiedAhead;
    });
    statementVerifiedAgainstCombinator = nonTerminalNodeVerified; ///
    if (statementVerifiedAgainstCombinator) {
        localContext.debug("...verified the '".concat(statementString, "' statement against the '").concat(combinatorString, "' combinator."), statementNode);
    }
    return statementVerifiedAgainstCombinator;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5RXF1YWxpdHkgZnJvbSBcIi4uL3ZlcmlmeS9lcXVhbGl0eVwiO1xuaW1wb3J0IGJyYWNrZXRlZENvbWJpbmF0b3IgZnJvbSBcIi4uL29jbWJpbmF0b3IvYnJhY2tldGVkXCI7XG5pbXBvcnQgdmVyaWZ5VHlwZUFzc2VydGlvbiBmcm9tIFwiLi4vdmVyaWZ5L3R5cGVBc3NlcnRpb25cIjtcbmltcG9ydCB2ZXJpZnlEZWZpbmVkQXNzZXJ0aW9uIGZyb20gXCIuLi92ZXJpZnkvZGVmaW5lZEFzc2VydGlvblwiO1xuaW1wb3J0IHZlcmlmeUNvbnRhaW5lZEFzc2VydGlvbiBmcm9tIFwiLi4vdmVyaWZ5L2NvbnRhaW5lZEFzc2VydGlvblwiO1xuaW1wb3J0IHN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yTm9kZXNWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXIvbm9kZXMvc3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBlcXVhbGl0eU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvZXF1YWxpdHkhXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbnRhaW5lZEFzc2VydGlvbi9zdGF0ZW1lbnQhXCIpLFxuICAgICAgdHlwZUFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvdHlwZUFzc2VydGlvbiFcIiksXG4gICAgICBkZWZpbmVkQXNzZXJ0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9kZWZpbmVkQXNzZXJ0aW9uIVwiKSxcbiAgICAgIGNvbnRhaW5lZEFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvY29udGFpbmVkQXNzZXJ0aW9uIVwiKTtcblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkO1xuXG4gIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gIGNvbnN0IHZlcmlmeVN0YXRlbWVudEZ1bmN0aW9ucyA9IFtcbiAgICB2ZXJpZnlTdGF0ZW1lbnRBc0VxdWFsaXR5LFxuICAgIHZlcmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbixcbiAgICB2ZXJpZnlTdGF0ZW1lbnRBc0RlZmluZWRBc3NlcnRpb24sXG4gICAgdmVyaWZ5U3RhdGVtZW50QXNDb250YWluZWRBc3NlcnRpb24sXG4gICAgdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JzXG4gIF07XG5cbiAgc3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlTdGF0ZW1lbnRGdW5jdGlvbnMuc29tZSgodmVyaWZ5U3RhdGVtZW50RnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVN0YXRlbWVudEZ1bmN0aW9uKHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVN0YW5kYWxvbmVTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGFuZGFsb25lU3RhdGVtZW50VmVyaWZpZWQ7XG5cbiAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhbmRhbG9uZSBzdGF0ZW1lbnQuLi5gLCBzdGF0ZW1lbnROb2RlKTtcblxuICBjb25zdCBkZXJpdmVkID0gZmFsc2UsXG4gICAgICAgIGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgIHN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkKTtcblxuICBzdGFuZGFsb25lU3RhdGVtZW50VmVyaWZpZWQgPSBzdGF0ZW1lbnRWZXJpZmllZDsgIC8vL1xuXG4gIGlmIChzdGFuZGFsb25lU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGFuZGFsb25lIHN0YXRlbWVudC5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiBzdGFuZGFsb25lU3RhdGVtZW50VmVyaWZpZWQ7XG59XG5cbk9iamVjdC5hc3NpZ24oc3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JOb2Rlc1ZlcmlmaWVyLCB7XG4gIHZlcmlmeVN0YXRlbWVudFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHZlcmlmeVN0YXRlbWVudDtcblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFzRXF1YWxpdHkoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5ID0gZmFsc2U7XG5cbiAgY29uc3QgZXF1YWxpdHlOb2RlID0gZXF1YWxpdHlOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKGVxdWFsaXR5Tm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGFuIGVxdWFsaXR5Li4uYCwgZXF1YWxpdHlOb2RlKTtcblxuICAgIGNvbnN0IGVxdWFsaXR5VmVyaWZpZWQgPSB2ZXJpZnlFcXVhbGl0eShlcXVhbGl0eU5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICB9KTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IGVxdWFsaXR5VmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGFuIGVxdWFsaXR5LmAsIGVxdWFsaXR5Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbihzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGVBc3NlcnRpb25Ob2RlID0gdHlwZUFzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAodHlwZUFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHR5cGUgYXNzZXJ0aW9uLi4uYCwgdHlwZUFzc2VydGlvbk5vZGUpO1xuXG4gICAgY29uc3QgdHlwZUFzc2VydGlvblZlcmlmaWVkID0gdmVyaWZ5VHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgIH0pO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWRBc1R5cGVBc3NlcnRpb24gPSB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSB0eXBlIGFzc2VydGlvbi5gLCB0eXBlQXNzZXJ0aW9uTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBc0RlZmluZWRBc3NlcnRpb24oc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBc0RlZmluZWRBc3NlcnRpb24gPSBmYWxzZTtcblxuICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uTm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKGRlZmluZWRBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBkZWZpbmVkIGFzc2VydGlvbi4uLmAsIGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeURlZmluZWRBc3NlcnRpb24oZGVmaW5lZEFzc2VydGlvbk5vZGUsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgIH0pO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWRBc0RlZmluZWRBc3NlcnRpb24gPSBkZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQXNEZWZpbmVkQXNzZXJ0aW9uKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBkZWZpbmVkIGFzc2VydGlvbi5gLCBkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNEZWZpbmVkQXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBc0NvbnRhaW5lZEFzc2VydGlvbihzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFzQ29udGFpbmVkQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgY29udGFpbmVkIGFzc2VydGlvbi4uLmAsIGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgY29uc3QgY29udGFpbmVkVmVyaWZpZWQgPSB2ZXJpZnlDb250YWluZWRBc3NlcnRpb24oY29udGFpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBpZiAoY29udGFpbmVkVmVyaWZpZWQpIHtcbiAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSk7IC8vL1xuXG4gICAgICBjb25zdCB2ZXJpZnlTdGF0ZW1lbnRGdW5jdGlvbnMgPSBbXG4gICAgICAgIHZlcmlmeVN0YXRlbWVudEFzRXF1YWxpdHksXG4gICAgICAgIHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yc1xuICAgICAgXTtcblxuICAgICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlTdGF0ZW1lbnRGdW5jdGlvbnMuc29tZSgodmVyaWZ5U3RhdGVtZW50RnVuY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgZGVyaXZlZCA9IGZhbHNlLFxuICAgICAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVN0YXRlbWVudEZ1bmN0aW9uKHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgc3RhdGVtZW50VmVyaWZpZWRBc0NvbnRhaW5lZEFzc2VydGlvbiA9IHN0YXRlbWVudFZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBc0NvbnRhaW5lZEFzc2VydGlvbikge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgY29udGFpbmVkIGFzc2VydGlvbi5gLCBjb250YWluZWRBc3NlcnRpb25Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBc0NvbnRhaW5lZEFzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JzKHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzID0gZmFsc2U7XG5cbiAgY29uc3QgZXF1YWxpdHlOb2RlID0gZXF1YWxpdHlOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgIHR5cGVBc3NlcnRpb25Ob2RlID0gdHlwZUFzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgZGVmaW5lZEFzc2VydGlvbk5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpLFxuICAgICAgICBjb250YWluZWRBc3NlcnRpb25Ob2RlID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gIGlmICgoZXF1YWxpdHlOb2RlID09PSBudWxsKSAmJiAodHlwZUFzc2VydGlvbk5vZGUgPT09IG51bGwpICYmIChkZWZpbmVkQXNzZXJ0aW9uTm9kZSA9PT0gbnVsbCkgJiYgKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUgPT09IG51bGwpKSB7XG4gICAgbGV0IGNvbWJpbmF0b3JzID0gbG9jYWxDb250ZXh0LmdldENvbWJpbmF0b3JzKCk7XG5cbiAgICBjb21iaW5hdG9ycyA9IFsgLy8vXG4gICAgICBicmFja2V0ZWRDb21iaW5hdG9yLFxuICAgICAgLi4uY29tYmluYXRvcnNcbiAgICBdO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnMgPSBjb21iaW5hdG9ycy5zb21lKChjb21iaW5hdG9yKSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yID0gdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3Ioc3RhdGVtZW50Tm9kZSwgY29tYmluYXRvciwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnM7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yKHN0YXRlbWVudE5vZGUsIGNvbWJpbmF0b3IsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcjtcblxuICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICBjb21iaW5hdG9yU3RyaW5nID0gY29tYmluYXRvci5nZXRTdHJpbmcoKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFnYWluc3QgdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yLi4uYCwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgY29uc3QgY29tYmluYXRvclN0YXRlbWVudE5vZGUgPSBjb21iaW5hdG9yLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgbm9uVGVybWluYWxOb2RlQSA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gY29tYmluYXRvclN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yTm9kZXNWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgfSk7XG5cbiAgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvciA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAgLy8vXG5cbiAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYWdhaW5zdCB0aGUgJyR7Y29tYmluYXRvclN0cmluZ30nIGNvbWJpbmF0b3IuYCwgc3RhdGVtZW50Tm9kZSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcjtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlTdGFuZGFsb25lU3RhdGVtZW50IiwidmVyaWZ5U3RhdGVtZW50QXNFcXVhbGl0eSIsInZlcmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbiIsImVxdWFsaXR5Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5IiwidHlwZUFzc2VydGlvbk5vZGVRdWVyeSIsImRlZmluZWRBc3NlcnRpb25Ob2RlUXVlcnkiLCJjb250YWluZWRBc3NlcnRpb25Ob2RlUXVlcnkiLCJ2ZXJpZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwiYXNzaWdubWVudHMiLCJkZXJpdmVkIiwibG9jYWxDb250ZXh0Iiwic3RhdGVtZW50VmVyaWZpZWQiLCJzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInZlcmlmeVN0YXRlbWVudEZ1bmN0aW9ucyIsInZlcmlmeVN0YXRlbWVudEFzRGVmaW5lZEFzc2VydGlvbiIsInZlcmlmeVN0YXRlbWVudEFzQ29udGFpbmVkQXNzZXJ0aW9uIiwidmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JzIiwic29tZSIsInZlcmlmeVN0YXRlbWVudEZ1bmN0aW9uIiwiZGVidWciLCJzdGFuZGFsb25lU3RhdGVtZW50VmVyaWZpZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJzdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvck5vZGVzVmVyaWZpZXIiLCJzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkiLCJlcXVhbGl0eU5vZGUiLCJlcXVhbGl0eVZlcmlmaWVkIiwidmVyaWZ5RXF1YWxpdHkiLCJ2ZXJpZmllZEFoZWFkIiwic3RhdGVtZW50VmVyaWZpZWRBc1R5cGVBc3NlcnRpb24iLCJ0eXBlQXNzZXJ0aW9uTm9kZSIsInR5cGVBc3NlcnRpb25WZXJpZmllZCIsInZlcmlmeVR5cGVBc3NlcnRpb24iLCJzdGF0ZW1lbnRWZXJpZmllZEFzRGVmaW5lZEFzc2VydGlvbiIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvblZlcmlmaWVkIiwidmVyaWZ5RGVmaW5lZEFzc2VydGlvbiIsInN0YXRlbWVudFZlcmlmaWVkQXNDb250YWluZWRBc3NlcnRpb24iLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkVmVyaWZpZWQiLCJ2ZXJpZnlDb250YWluZWRBc3NlcnRpb24iLCJzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9ycyIsImNvbWJpbmF0b3JzIiwiZ2V0Q29tYmluYXRvcnMiLCJicmFja2V0ZWRDb21iaW5hdG9yIiwiY29tYmluYXRvciIsInN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IiLCJ2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvciIsImNvbWJpbmF0b3JTdHJpbmciLCJnZXRTdHJpbmciLCJjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUF1RUEsT0FBK0I7ZUFBL0I7O0lBeEJnQkEseUJBQXlCO2VBQXpCQTs7SUEwQkFDLHlCQUF5QjtlQUF6QkE7O0lBMEJBQyw4QkFBOEI7ZUFBOUJBOzs7K0RBakdXO2dFQUNLO29FQUNBO3VFQUNHO3lFQUNFO2lGQUNlO3FCQUUxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQyxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMseUJBQzlCQyxxQkFBcUJELElBQUFBLGdCQUFTLEVBQUMsbUNBQy9CRSx5QkFBeUJGLElBQUFBLGdCQUFTLEVBQUMsOEJBQ25DRyw0QkFBNEJILElBQUFBLGdCQUFTLEVBQUMsaUNBQ3RD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