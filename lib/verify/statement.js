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
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _equality = /*#__PURE__*/ _interop_require_default(require("../verify/equality"));
var _judgement = /*#__PURE__*/ _interop_require_default(require("../verify/judgement"));
var _bracketed = /*#__PURE__*/ _interop_require_default(require("../ocmbinator/bracketed"));
var _type = /*#__PURE__*/ _interop_require_default(require("../verify/assertion/type"));
var _defined = /*#__PURE__*/ _interop_require_default(require("../verify/assertion/defined"));
var _subproof = /*#__PURE__*/ _interop_require_default(require("../verify/assertion/subproof"));
var _contained = /*#__PURE__*/ _interop_require_default(require("../verify/assertion/contained"));
var _statementAgainstCombinator = /*#__PURE__*/ _interop_require_default(require("../unifier/statementAgainstCombinator"));
var _query = require("../utilities/query");
var _metaTypeNames = require("../metaTypeNames");
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
var variableNodeQuery = (0, _query.nodeQuery)("/substitution/variable!"), equalityNodeQuery = (0, _query.nodeQuery)("/statement/equality!"), judgementNodeQuery = (0, _query.nodeQuery)("/statement/judgement!"), metavariableNodeQuery = (0, _query.nodeQuery)("/statement/metavariable!"), substitutionNodeQuery = (0, _query.nodeQuery)("/statement/substitution!"), typeAssertionNodeQuery = (0, _query.nodeQuery)("/statement/typeAssertion!"), termVariableNodeQuery = (0, _query.nodeQuery)("/substitution/term/variable!"), definedAssertionNodeQuery = (0, _query.nodeQuery)("/statement/definedAssertion!"), subproofAssertionNodeQuery = (0, _query.nodeQuery)("/statement/subproofAssertion!"), containedAssertionNodeQuery = (0, _query.nodeQuery)("/statement/containedAssertion!");
function verifyStatement(statementNode, assignments, derived, localContext) {
    var statementVerified;
    var statementString = localContext.nodeAsString(statementNode);
    localContext.trace("Verifying the '".concat(statementString, "' statement..."), statementNode);
    var verifyStatementFunctions = [
        verifyStatementAsMetavariable,
        verifyStatementAsEquality,
        verifyStatementAsJudgement,
        verifyStatementAsTypeAssertion,
        verifyStatementAsDefinedAssertion,
        verifyStatementAsSubproofAssertion,
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
function verifyStandaloneStatement(statementNode, localContext, verifyAhead) {
    var standaloneStatementVerified = false;
    var statementString = localContext.nodeAsString(statementNode);
    localContext.trace("Verifying the '".concat(statementString, "' standalone statement..."), statementNode);
    var derived = false, assignments = [], statementVerified = verifyStatement(statementNode, assignments, derived, localContext);
    if (statementVerified) {
        var verifiedAhead = verifyAhead();
        standaloneStatementVerified = verifiedAhead; ///
    }
    if (standaloneStatementVerified) {
        localContext.debug("...verified the '".concat(statementString, "' standalone statement."), statementNode);
    }
    return standaloneStatementVerified;
}
Object.assign(_shim.default, {
    verifyStatement: verifyStatement
});
var _default = verifyStatement;
function verifyStatementAsMetavariable(statementNode, assignments, derived, localContext) {
    var statementVerifiedAsMetavariable = false;
    var metavariableNode = metavariableNodeQuery(statementNode);
    if (metavariableNode !== null) {
        var statementString = localContext.nodeAsString(statementNode);
        localContext.trace("Verifying the '".concat(statementString, "' statement as a metavariable..."), statementNode);
        var metavariableVerified = verifyMetavariable(metavariableNode, localContext);
        if (metavariableVerified) {
            var substitutionNode = substitutionNodeQuery(statementNode), substitutionVerified = verifySubstitution(substitutionNode, localContext);
            if (substitutionVerified) {
                statementVerifiedAsMetavariable = true;
            }
        }
        if (statementVerifiedAsMetavariable) {
            localContext.debug("...verified the '".concat(statementString, "' statement as a metavariable."), statementNode);
        }
    }
    return statementVerifiedAsMetavariable;
}
function verifyStatementAsEquality(statementNode, assignments, derived, localContext) {
    var statementVerifiedAsEquality = false;
    var equalityNode = equalityNodeQuery(statementNode);
    if (equalityNode !== null) {
        var statementString = localContext.nodeAsString(statementNode);
        localContext.trace("Verifying the '".concat(statementString, "' statement as an equality..."), statementNode);
        var equalityVerified = (0, _equality.default)(equalityNode, assignments, derived, localContext, function() {
            var verifiedAhead = true;
            return verifiedAhead;
        });
        statementVerifiedAsEquality = equalityVerified; ///
        if (statementVerifiedAsEquality) {
            localContext.debug("...verified the '".concat(statementString, "' statement as an equality."), statementNode);
        }
    }
    return statementVerifiedAsEquality;
}
function verifyStatementAsJudgement(statementNode, assignments, derived, localContext) {
    var statementVerifiedAsJudgement = false;
    var judgementNode = judgementNodeQuery(statementNode);
    if (judgementNode !== null) {
        var statementString = localContext.nodeAsString(statementNode);
        localContext.trace("Verifying the '".concat(statementString, "' statement as a judgement..."), statementNode);
        var judgementVerified = (0, _judgement.default)(judgementNode, assignments, derived, localContext);
        statementVerifiedAsJudgement = judgementVerified; ///
        if (statementVerifiedAsJudgement) {
            localContext.debug("...verified the '".concat(statementString, "' statement as a judgement."), statementNode);
        }
    }
    return statementVerifiedAsJudgement;
}
function verifyStatementAsTypeAssertion(statementNode, assignments, derived, localContext) {
    var statementVerifiedAsTypeAssertion = false;
    var typeAssertionNode = typeAssertionNodeQuery(statementNode);
    if (typeAssertionNode !== null) {
        var statementString = localContext.nodeAsString(statementNode);
        localContext.trace("Verifying the '".concat(statementString, "' statement as a type assertion..."), statementNode);
        var typeAssertionVerified = (0, _type.default)(typeAssertionNode, assignments, derived, localContext);
        statementVerifiedAsTypeAssertion = typeAssertionVerified; ///
        if (statementVerifiedAsTypeAssertion) {
            localContext.debug("...verified the '".concat(statementString, "' statement as a type assertion."), statementNode);
        }
    }
    return statementVerifiedAsTypeAssertion;
}
function verifyStatementAsDefinedAssertion(statementNode, assignments, derived, localContext) {
    var statementVerifiedAsDefinedAssertion = false;
    var definedAssertionNode = definedAssertionNodeQuery(statementNode);
    if (definedAssertionNode !== null) {
        var statementString = localContext.nodeAsString(statementNode);
        localContext.trace("Verifying the '".concat(statementString, "' statement as a defined assertion..."), statementNode);
        var definedAssertionVerified = (0, _defined.default)(definedAssertionNode, assignments, derived, localContext, function() {
            var verifiedAhead = true;
            return verifiedAhead;
        });
        statementVerifiedAsDefinedAssertion = definedAssertionVerified; ///
        if (statementVerifiedAsDefinedAssertion) {
            localContext.debug("...verified the '".concat(statementString, "' statement as a defined assertion."), statementNode);
        }
    }
    return statementVerifiedAsDefinedAssertion;
}
function verifyStatementAsSubproofAssertion(statementNode, assignments, derived, localContext) {
    var statementVerifiedAsSubproofAssertion = false;
    var subproofAssertionNode = subproofAssertionNodeQuery(statementNode);
    if (subproofAssertionNode !== null) {
        var statementString = localContext.nodeAsString(statementNode);
        localContext.trace("Verifying the '".concat(statementString, "' statement as a subproof assertion..."), statementNode);
        var subproofAssertionVerified = (0, _subproof.default)(subproofAssertionNode, assignments, derived, localContext, function() {
            var verifiedAhead = true;
            return verifiedAhead;
        });
        statementVerifiedAsSubproofAssertion = subproofAssertionVerified; ///
        if (statementVerifiedAsSubproofAssertion) {
            localContext.debug("...verified the '".concat(statementString, "' statement as a defined assertion."), statementNode);
        }
    }
    return statementVerifiedAsSubproofAssertion;
}
function verifyStatementAsContainedAssertion(statementNode, assignments, derived, localContext) {
    var statementVerifiedAsContainedAssertion = false;
    var containedAssertionNode = containedAssertionNodeQuery(statementNode);
    if (containedAssertionNode !== null) {
        var statementString = localContext.nodeAsString(statementNode);
        localContext.trace("Verifying the '".concat(statementString, "' statement as a defined assertion..."), statementNode);
        var containedAssertionVerified = (0, _contained.default)(containedAssertionNode, assignments, derived, localContext, function() {
            var verifiedAhead = true;
            return verifiedAhead;
        });
        statementVerifiedAsContainedAssertion = containedAssertionVerified; ///
        if (statementVerifiedAsContainedAssertion) {
            localContext.debug("...verified the '".concat(statementString, "' statement as a defined assertion."), statementNode);
        }
    }
    return statementVerifiedAsContainedAssertion;
}
function verifyStatementAgainstCombinators(statementNode, assignments, derived, localContext) {
    var statementVerifiedAgainstCombinators = false;
    var equalityNode = equalityNodeQuery(statementNode), judgementNode = judgementNodeQuery(statementNode), metavariableNode = metavariableNodeQuery(statementNode), typeAssertionNode = typeAssertionNodeQuery(statementNode), definedAssertionNode = definedAssertionNodeQuery(statementNode), subproofAssertionNode = subproofAssertionNodeQuery(statementNode), containedAssertionNode = containedAssertionNodeQuery(statementNode);
    if (equalityNode === null && judgementNode === null && metavariableNode === null && typeAssertionNode === null && definedAssertionNode === null && subproofAssertionNode === null && containedAssertionNode === null) {
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
    var combinatorStatementNode = combinator.getStatementNode(), nonTerminalNodeA = statementNode, nonTerminalNodeB = combinatorStatementNode, nonTerminalNodeUnify = _statementAgainstCombinator.default.unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext, function() {
        var verifiedAhead = true;
        return verifiedAhead;
    });
    statementVerifiedAgainstCombinator = nonTerminalNodeUnify; ///
    if (statementVerifiedAgainstCombinator) {
        localContext.debug("...verified the '".concat(statementString, "' statement against the '").concat(combinatorString, "' combinator."), statementNode);
    }
    return statementVerifiedAgainstCombinator;
}
function verifyMetavariable(metavariableNode, localContext) {
    var metavariableVerified = false;
    var metavariable = localContext.findMetavariableByMetavariableNode(metavariableNode);
    if (metavariable !== null) {
        var metaTypeName = metavariable.getMetaTypeName();
        if (metaTypeName === _metaTypeNames.STATEMENT_META_TYPE_NAME) {
            metavariableVerified = true;
        }
    }
    return metavariableVerified;
}
function verifySubstitution(substitutionNode, localContext) {
    var substitutionVerified = false;
    if (substitutionNode === null) {
        substitutionVerified = true;
    } else {
        var variableNode = variableNodeQuery(substitutionNode), variablePresent = localContext.isVariablePresentByVariableNode(variableNode);
        if (variablePresent) {
            var termVariableNode = termVariableNodeQuery(substitutionNode);
            if (termVariableNode !== null) {
                var termVariablePresent = localContext.isVariablePresentByVariableNode(termVariableNode);
                substitutionVerified = termVariablePresent; ///
            }
        }
    }
    return substitutionVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IHZlcmlmeUVxdWFsaXR5IGZyb20gXCIuLi92ZXJpZnkvZXF1YWxpdHlcIjtcbmltcG9ydCB2ZXJpZnlKdWRnZW1lbnQgZnJvbSBcIi4uL3ZlcmlmeS9qdWRnZW1lbnRcIjtcbmltcG9ydCBicmFja2V0ZWRDb21iaW5hdG9yIGZyb20gXCIuLi9vY21iaW5hdG9yL2JyYWNrZXRlZFwiO1xuaW1wb3J0IHZlcmlmeVR5cGVBc3NlcnRpb24gZnJvbSBcIi4uL3ZlcmlmeS9hc3NlcnRpb24vdHlwZVwiO1xuaW1wb3J0IHZlcmlmeURlZmluZWRBc3NlcnRpb24gZnJvbSBcIi4uL3ZlcmlmeS9hc3NlcnRpb24vZGVmaW5lZFwiO1xuaW1wb3J0IHZlcmlmeVN1YnByb29mQXNzZXJ0aW9uIGZyb20gXCIuLi92ZXJpZnkvYXNzZXJ0aW9uL3N1YnByb29mXCI7XG5pbXBvcnQgdmVyaWZ5Q29udGFpbmVkQXNzZXJ0aW9uIGZyb20gXCIuLi92ZXJpZnkvYXNzZXJ0aW9uL2NvbnRhaW5lZFwiO1xuaW1wb3J0IHN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yVW5pZmllciBmcm9tIFwiLi4vdW5pZmllci9zdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvclwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdWJzdGl0dXRpb24vdmFyaWFibGUhXCIpLFxuICAgICAgZXF1YWxpdHlOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L2VxdWFsaXR5IVwiKSxcbiAgICAgIGp1ZGdlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvanVkZ2VtZW50IVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvbWV0YXZhcmlhYmxlIVwiKSxcbiAgICAgIHN1YnN0aXR1dGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvc3Vic3RpdHV0aW9uIVwiKSxcbiAgICAgIHR5cGVBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3R5cGVBc3NlcnRpb24hXCIpLFxuICAgICAgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnN0aXR1dGlvbi90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIGRlZmluZWRBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L2RlZmluZWRBc3NlcnRpb24hXCIpLFxuICAgICAgc3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3N1YnByb29mQXNzZXJ0aW9uIVwiKSxcbiAgICAgIGNvbnRhaW5lZEFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvY29udGFpbmVkQXNzZXJ0aW9uIVwiKTtcblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkO1xuXG4gIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gIGNvbnN0IHZlcmlmeVN0YXRlbWVudEZ1bmN0aW9ucyA9IFtcbiAgICB2ZXJpZnlTdGF0ZW1lbnRBc01ldGF2YXJpYWJsZSxcbiAgICB2ZXJpZnlTdGF0ZW1lbnRBc0VxdWFsaXR5LFxuICAgIHZlcmlmeVN0YXRlbWVudEFzSnVkZ2VtZW50LFxuICAgIHZlcmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbixcbiAgICB2ZXJpZnlTdGF0ZW1lbnRBc0RlZmluZWRBc3NlcnRpb24sXG4gICAgdmVyaWZ5U3RhdGVtZW50QXNTdWJwcm9vZkFzc2VydGlvbixcbiAgICB2ZXJpZnlTdGF0ZW1lbnRBc0NvbnRhaW5lZEFzc2VydGlvbixcbiAgICB2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcnNcbiAgXTtcblxuICBzdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVN0YXRlbWVudEZ1bmN0aW9ucy5zb21lKCh2ZXJpZnlTdGF0ZW1lbnRGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5U3RhdGVtZW50RnVuY3Rpb24oc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmAsIHN0YXRlbWVudE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5U3RhbmRhbG9uZVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBzdGFuZGFsb25lU3RhdGVtZW50VmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGFuZGFsb25lIHN0YXRlbWVudC4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gIGNvbnN0IGRlcml2ZWQgPSBmYWxzZSxcbiAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgc3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgaWYgKHN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICBzdGFuZGFsb25lU3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZmllZEFoZWFkOyAvLy9cbiAgfVxuXG4gIGlmIChzdGFuZGFsb25lU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGFuZGFsb25lIHN0YXRlbWVudC5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiBzdGFuZGFsb25lU3RhdGVtZW50VmVyaWZpZWQ7XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICB2ZXJpZnlTdGF0ZW1lbnRcbn0pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHZlcmlmeVN0YXRlbWVudDtcblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QXNNZXRhdmFyaWFibGUoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBc01ldGF2YXJpYWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIG1ldGF2YXJpYWJsZS4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVWZXJpZmllZCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZSA9IHN1YnN0aXR1dGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvblZlcmlmaWVkID0gdmVyaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbk5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25WZXJpZmllZCkge1xuICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZEFzTWV0YXZhcmlhYmxlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBc01ldGF2YXJpYWJsZSkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgbWV0YXZhcmlhYmxlLmAsIHN0YXRlbWVudE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFzTWV0YXZhcmlhYmxlO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBc0VxdWFsaXR5KHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IGZhbHNlO1xuXG4gIGNvbnN0IGVxdWFsaXR5Tm9kZSA9IGVxdWFsaXR5Tm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gIGlmIChlcXVhbGl0eU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhbiBlcXVhbGl0eS4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29uc3QgZXF1YWxpdHlWZXJpZmllZCA9IHZlcmlmeUVxdWFsaXR5KGVxdWFsaXR5Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgIH0pO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5ID0gZXF1YWxpdHlWZXJpZmllZDsgLy8vXG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5KSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYW4gZXF1YWxpdHkuYCwgc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eTtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QXNKdWRnZW1lbnQoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBc0p1ZGdlbWVudCA9IGZhbHNlO1xuXG4gIGNvbnN0IGp1ZGdlbWVudE5vZGUgPSBqdWRnZW1lbnROb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKGp1ZGdlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIGp1ZGdlbWVudC4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29uc3QganVkZ2VtZW50VmVyaWZpZWQgPSB2ZXJpZnlKdWRnZW1lbnQoanVkZ2VtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZEFzSnVkZ2VtZW50ID0ganVkZ2VtZW50VmVyaWZpZWQ7ICAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFzSnVkZ2VtZW50KSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBqdWRnZW1lbnQuYCwgc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNKdWRnZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbihzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGVBc3NlcnRpb25Ob2RlID0gdHlwZUFzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAodHlwZUFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHR5cGUgYXNzZXJ0aW9uLi4uYCwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlUeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uID0gdHlwZUFzc2VydGlvblZlcmlmaWVkOyAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbikge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgdHlwZSBhc3NlcnRpb24uYCwgc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBc0RlZmluZWRBc3NlcnRpb24oc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBc0RlZmluZWRBc3NlcnRpb24gPSBmYWxzZTtcblxuICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uTm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKGRlZmluZWRBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBkZWZpbmVkIGFzc2VydGlvbi4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdmVyaWZ5RGVmaW5lZEFzc2VydGlvbihkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgIH0pO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWRBc0RlZmluZWRBc3NlcnRpb24gPSBkZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQXNEZWZpbmVkQXNzZXJ0aW9uKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBkZWZpbmVkIGFzc2VydGlvbi5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBc0RlZmluZWRBc3NlcnRpb247XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFzU3VicHJvb2ZBc3NlcnRpb24oc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBc1N1YnByb29mQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgc3VicHJvb2YgYXNzZXJ0aW9uLi4uYCwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvblZlcmlmaWVkID0gdmVyaWZ5U3VicHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgfSk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZEFzU3VicHJvb2ZBc3NlcnRpb24gPSBzdWJwcm9vZkFzc2VydGlvblZlcmlmaWVkOyAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFzU3VicHJvb2ZBc3NlcnRpb24pIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIGRlZmluZWQgYXNzZXJ0aW9uLmAsIHN0YXRlbWVudE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFzU3VicHJvb2ZBc3NlcnRpb247XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFzQ29udGFpbmVkQXNzZXJ0aW9uKHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQXNDb250YWluZWRBc3NlcnRpb24gPSBmYWxzZTtcblxuICBjb25zdCBjb250YWluZWRBc3NlcnRpb25Ob2RlID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gIGlmIChjb250YWluZWRBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBkZWZpbmVkIGFzc2VydGlvbi4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlDb250YWluZWRBc3NlcnRpb24oY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgIH0pO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWRBc0NvbnRhaW5lZEFzc2VydGlvbiA9IGNvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkOyAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFzQ29udGFpbmVkQXNzZXJ0aW9uKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBkZWZpbmVkIGFzc2VydGlvbi5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBc0NvbnRhaW5lZEFzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JzKHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzID0gZmFsc2U7XG5cbiAgY29uc3QgZXF1YWxpdHlOb2RlID0gZXF1YWxpdHlOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgIGp1ZGdlbWVudE5vZGUgPSBqdWRnZW1lbnROb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgIHR5cGVBc3NlcnRpb25Ob2RlID0gdHlwZUFzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgZGVmaW5lZEFzc2VydGlvbk5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpLFxuICAgICAgICBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAoICAoZXF1YWxpdHlOb2RlID09PSBudWxsKSAmJlxuICAgICAgICAoanVkZ2VtZW50Tm9kZSA9PT0gbnVsbCkgJiZcbiAgICAgICAgKG1ldGF2YXJpYWJsZU5vZGUgPT09IG51bGwpICYmXG4gICAgICAgICh0eXBlQXNzZXJ0aW9uTm9kZSA9PT0gbnVsbCkgJiZcbiAgICAgICAgKGRlZmluZWRBc3NlcnRpb25Ob2RlID09PSBudWxsKSAmJlxuICAgICAgICAoc3VicHJvb2ZBc3NlcnRpb25Ob2RlID09PSBudWxsKSAmJlxuICAgICAgICAoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSA9PT0gbnVsbCkgKSB7XG5cbiAgICBsZXQgY29tYmluYXRvcnMgPSBsb2NhbENvbnRleHQuZ2V0Q29tYmluYXRvcnMoKTtcblxuICAgIGNvbWJpbmF0b3JzID0gWyAvLy9cbiAgICAgIGJyYWNrZXRlZENvbWJpbmF0b3IsXG4gICAgICAuLi5jb21iaW5hdG9yc1xuICAgIF07XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzLnNvbWUoKGNvbWJpbmF0b3IpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IgPSB2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcihzdGF0ZW1lbnROb2RlLCBjb21iaW5hdG9yLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9ycztcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3Ioc3RhdGVtZW50Tm9kZSwgY29tYmluYXRvciwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yO1xuXG4gIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgIGNvbWJpbmF0b3JTdHJpbmcgPSBjb21iaW5hdG9yLmdldFN0cmluZygpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYWdhaW5zdCB0aGUgJyR7Y29tYmluYXRvclN0cmluZ30nIGNvbWJpbmF0b3IuLi5gLCBzdGF0ZW1lbnROb2RlKTtcblxuICBjb25zdCBjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSA9IGNvbWJpbmF0b3IuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICBub25UZXJtaW5hbE5vZGVBID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVVuaWZ5ID0gc3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JVbmlmaWVyLnVuaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgIH0pO1xuXG4gIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IgPSBub25UZXJtaW5hbE5vZGVVbmlmeTsgIC8vL1xuXG4gIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFnYWluc3QgdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yLmAsIHN0YXRlbWVudE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3I7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSAgPSBtZXRhdmFyaWFibGUuZ2V0TWV0YVR5cGVOYW1lKCk7XG5cbiAgICBpZiAobWV0YVR5cGVOYW1lID09PSBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUpIHtcbiAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb25Ob2RlLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN1YnN0aXR1dGlvblZlcmlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKHN1YnN0aXR1dGlvbk5vZGUgPT09IG51bGwpIHtcbiAgICBzdWJzdGl0dXRpb25WZXJpZmllZCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gbG9jYWxDb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgIGlmICh2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIGNvbnN0IHRlcm1WYXJpYWJsZU5vZGUgPSB0ZXJtVmFyaWFibGVOb2RlUXVlcnkoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtVmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHRlcm1WYXJpYWJsZVByZXNlbnQgPSBsb2NhbENvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTm9kZSh0ZXJtVmFyaWFibGVOb2RlKTtcblxuICAgICAgICBzdWJzdGl0dXRpb25WZXJpZmllZCA9IHRlcm1WYXJpYWJsZVByZXNlbnQ7IC8vL1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJzdGl0dXRpb25WZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlTdGFuZGFsb25lU3RhdGVtZW50IiwidmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJlcXVhbGl0eU5vZGVRdWVyeSIsImp1ZGdlbWVudE5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsInN1YnN0aXR1dGlvbk5vZGVRdWVyeSIsInR5cGVBc3NlcnRpb25Ob2RlUXVlcnkiLCJ0ZXJtVmFyaWFibGVOb2RlUXVlcnkiLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZVF1ZXJ5Iiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkiLCJjb250YWluZWRBc3NlcnRpb25Ob2RlUXVlcnkiLCJ2ZXJpZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwiYXNzaWdubWVudHMiLCJkZXJpdmVkIiwibG9jYWxDb250ZXh0Iiwic3RhdGVtZW50VmVyaWZpZWQiLCJzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInZlcmlmeVN0YXRlbWVudEZ1bmN0aW9ucyIsInZlcmlmeVN0YXRlbWVudEFzTWV0YXZhcmlhYmxlIiwidmVyaWZ5U3RhdGVtZW50QXNFcXVhbGl0eSIsInZlcmlmeVN0YXRlbWVudEFzSnVkZ2VtZW50IiwidmVyaWZ5U3RhdGVtZW50QXNUeXBlQXNzZXJ0aW9uIiwidmVyaWZ5U3RhdGVtZW50QXNEZWZpbmVkQXNzZXJ0aW9uIiwidmVyaWZ5U3RhdGVtZW50QXNTdWJwcm9vZkFzc2VydGlvbiIsInZlcmlmeVN0YXRlbWVudEFzQ29udGFpbmVkQXNzZXJ0aW9uIiwidmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JzIiwic29tZSIsInZlcmlmeVN0YXRlbWVudEZ1bmN0aW9uIiwiZGVidWciLCJ2ZXJpZnlBaGVhZCIsInN0YW5kYWxvbmVTdGF0ZW1lbnRWZXJpZmllZCIsInZlcmlmaWVkQWhlYWQiLCJPYmplY3QiLCJhc3NpZ24iLCJzaGltIiwic3RhdGVtZW50VmVyaWZpZWRBc01ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVWZXJpZmllZCIsInZlcmlmeU1ldGF2YXJpYWJsZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25WZXJpZmllZCIsInZlcmlmeVN1YnN0aXR1dGlvbiIsInN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSIsImVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5VmVyaWZpZWQiLCJ2ZXJpZnlFcXVhbGl0eSIsInN0YXRlbWVudFZlcmlmaWVkQXNKdWRnZW1lbnQiLCJqdWRnZW1lbnROb2RlIiwianVkZ2VtZW50VmVyaWZpZWQiLCJ2ZXJpZnlKdWRnZW1lbnQiLCJzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbiIsInR5cGVBc3NlcnRpb25Ob2RlIiwidHlwZUFzc2VydGlvblZlcmlmaWVkIiwidmVyaWZ5VHlwZUFzc2VydGlvbiIsInN0YXRlbWVudFZlcmlmaWVkQXNEZWZpbmVkQXNzZXJ0aW9uIiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlEZWZpbmVkQXNzZXJ0aW9uIiwic3RhdGVtZW50VmVyaWZpZWRBc1N1YnByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwic3VicHJvb2ZBc3NlcnRpb25WZXJpZmllZCIsInZlcmlmeVN1YnByb29mQXNzZXJ0aW9uIiwic3RhdGVtZW50VmVyaWZpZWRBc0NvbnRhaW5lZEFzc2VydGlvbiIsImNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJjb250YWluZWRBc3NlcnRpb25WZXJpZmllZCIsInZlcmlmeUNvbnRhaW5lZEFzc2VydGlvbiIsInN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzIiwiY29tYmluYXRvcnMiLCJnZXRDb21iaW5hdG9ycyIsImJyYWNrZXRlZENvbWJpbmF0b3IiLCJjb21iaW5hdG9yIiwic3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvciIsInZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yIiwiY29tYmluYXRvclN0cmluZyIsImdldFN0cmluZyIsImNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwibm9uVGVybWluYWxOb2RlVW5pZnkiLCJzdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvclVuaWZpZXIiLCJ1bmlmeU5vblRlcm1pbmFsTm9kZSIsIm1ldGF2YXJpYWJsZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhVHlwZU5hbWUiLCJnZXRNZXRhVHlwZU5hbWUiLCJTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOb2RlIiwidGVybVZhcmlhYmxlTm9kZSIsInRlcm1WYXJpYWJsZVByZXNlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQXdGQSxPQUErQjtlQUEvQjs7SUE3QmdCQSx5QkFBeUI7ZUFBekJBOzs7MkRBekRDOytEQUNVO2dFQUNDO2dFQUNJOzJEQUNBOzhEQUNHOytEQUNDO2dFQUNDO2lGQUNTO3FCQUVwQjs2QkFDZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QyxJQUFNQyxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMsNEJBQzlCQyxvQkFBb0JELElBQUFBLGdCQUFTLEVBQUMseUJBQzlCRSxxQkFBcUJGLElBQUFBLGdCQUFTLEVBQUMsMEJBQy9CRyx3QkFBd0JILElBQUFBLGdCQUFTLEVBQUMsNkJBQ2xDSSx3QkFBd0JKLElBQUFBLGdCQUFTLEVBQUMsNkJBQ2xDSyx5QkFBeUJMLElBQUFBLGdCQUFTLEVBQUMsOEJBQ25DTSx3QkFBd0JOLElBQUFBLGdCQUFTLEVBQUMsaUNBQ2xDTyw0QkFBNEJQLElBQUFBLGdCQUFTLEVBQUMsaUNBQ3RDUSw2QkFB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