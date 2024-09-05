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
var _judgement = /*#__PURE__*/ _interop_require_default(require("../verify/judgement"));
var _bracketed = /*#__PURE__*/ _interop_require_default(require("../ocmbinator/bracketed"));
var _type = /*#__PURE__*/ _interop_require_default(require("../verify/assertion/type"));
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("../verifier/nodes/metaLevel"));
var _defined = /*#__PURE__*/ _interop_require_default(require("../verify/assertion/defined"));
var _subproof = /*#__PURE__*/ _interop_require_default(require("../verify/assertion/subproof"));
var _contained = /*#__PURE__*/ _interop_require_default(require("../verify/assertion/contained"));
var _statementAgainstCombinator = /*#__PURE__*/ _interop_require_default(require("../verifier/nodes/statementAgainstCombinator"));
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
Object.assign(_metaLevel.default, {
    verifyStatement: verifyStatement
});
Object.assign(_statementAgainstCombinator.default, {
    verifyStatement: verifyStatement
});
var _default = verifyStatement;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5RXF1YWxpdHkgZnJvbSBcIi4uL3ZlcmlmeS9lcXVhbGl0eVwiO1xuaW1wb3J0IHZlcmlmeUp1ZGdlbWVudCBmcm9tIFwiLi4vdmVyaWZ5L2p1ZGdlbWVudFwiO1xuaW1wb3J0IGJyYWNrZXRlZENvbWJpbmF0b3IgZnJvbSBcIi4uL29jbWJpbmF0b3IvYnJhY2tldGVkXCI7XG5pbXBvcnQgdmVyaWZ5VHlwZUFzc2VydGlvbiBmcm9tIFwiLi4vdmVyaWZ5L2Fzc2VydGlvbi90eXBlXCI7XG5pbXBvcnQgbWV0YUxldmVsTm9kZXNWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXIvbm9kZXMvbWV0YUxldmVsXCI7XG5pbXBvcnQgdmVyaWZ5RGVmaW5lZEFzc2VydGlvbiBmcm9tIFwiLi4vdmVyaWZ5L2Fzc2VydGlvbi9kZWZpbmVkXCI7XG5pbXBvcnQgdmVyaWZ5U3VicHJvb2ZBc3NlcnRpb24gZnJvbSBcIi4uL3ZlcmlmeS9hc3NlcnRpb24vc3VicHJvb2ZcIjtcbmltcG9ydCB2ZXJpZnlDb250YWluZWRBc3NlcnRpb24gZnJvbSBcIi4uL3ZlcmlmeS9hc3NlcnRpb24vY29udGFpbmVkXCI7XG5pbXBvcnQgc3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JOb2Rlc1ZlcmlmaWVyIGZyb20gXCIuLi92ZXJpZmllci9ub2Rlcy9zdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvclwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdWJzdGl0dXRpb24vdmFyaWFibGUhXCIpLFxuICAgICAgZXF1YWxpdHlOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L2VxdWFsaXR5IVwiKSxcbiAgICAgIGp1ZGdlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvanVkZ2VtZW50IVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvbWV0YXZhcmlhYmxlIVwiKSxcbiAgICAgIHN1YnN0aXR1dGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvc3Vic3RpdHV0aW9uIVwiKSxcbiAgICAgIHR5cGVBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3R5cGVBc3NlcnRpb24hXCIpLFxuICAgICAgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnN0aXR1dGlvbi90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIGRlZmluZWRBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L2RlZmluZWRBc3NlcnRpb24hXCIpLFxuICAgICAgc3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3N1YnByb29mQXNzZXJ0aW9uIVwiKSxcbiAgICAgIGNvbnRhaW5lZEFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvY29udGFpbmVkQXNzZXJ0aW9uIVwiKTtcblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkO1xuXG4gIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gIGNvbnN0IHZlcmlmeVN0YXRlbWVudEZ1bmN0aW9ucyA9IFtcbiAgICB2ZXJpZnlTdGF0ZW1lbnRBc01ldGF2YXJpYWJsZSxcbiAgICB2ZXJpZnlTdGF0ZW1lbnRBc0VxdWFsaXR5LFxuICAgIHZlcmlmeVN0YXRlbWVudEFzSnVkZ2VtZW50LFxuICAgIHZlcmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbixcbiAgICB2ZXJpZnlTdGF0ZW1lbnRBc0RlZmluZWRBc3NlcnRpb24sXG4gICAgdmVyaWZ5U3RhdGVtZW50QXNTdWJwcm9vZkFzc2VydGlvbixcbiAgICB2ZXJpZnlTdGF0ZW1lbnRBc0NvbnRhaW5lZEFzc2VydGlvbixcbiAgICB2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcnNcbiAgXTtcblxuICBzdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVN0YXRlbWVudEZ1bmN0aW9ucy5zb21lKCh2ZXJpZnlTdGF0ZW1lbnRGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5U3RhdGVtZW50RnVuY3Rpb24oc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmAsIHN0YXRlbWVudE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5U3RhbmRhbG9uZVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBzdGFuZGFsb25lU3RhdGVtZW50VmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGFuZGFsb25lIHN0YXRlbWVudC4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gIGNvbnN0IGRlcml2ZWQgPSBmYWxzZSxcbiAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgc3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgaWYgKHN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICBzdGFuZGFsb25lU3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZmllZEFoZWFkOyAvLy9cbiAgfVxuXG4gIGlmIChzdGFuZGFsb25lU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGFuZGFsb25lIHN0YXRlbWVudC5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiBzdGFuZGFsb25lU3RhdGVtZW50VmVyaWZpZWQ7XG59XG5cbk9iamVjdC5hc3NpZ24obWV0YUxldmVsTm9kZXNWZXJpZmllciwge1xuICB2ZXJpZnlTdGF0ZW1lbnRcbn0pO1xuXG5PYmplY3QuYXNzaWduKHN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yTm9kZXNWZXJpZmllciwge1xuICB2ZXJpZnlTdGF0ZW1lbnRcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB2ZXJpZnlTdGF0ZW1lbnQ7XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBc0VxdWFsaXR5KHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IGZhbHNlO1xuXG4gIGNvbnN0IGVxdWFsaXR5Tm9kZSA9IGVxdWFsaXR5Tm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gIGlmIChlcXVhbGl0eU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhbiBlcXVhbGl0eS4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29uc3QgZXF1YWxpdHlWZXJpZmllZCA9IHZlcmlmeUVxdWFsaXR5KGVxdWFsaXR5Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgIH0pO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5ID0gZXF1YWxpdHlWZXJpZmllZDsgLy8vXG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5KSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYW4gZXF1YWxpdHkuYCwgc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbihzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGVBc3NlcnRpb25Ob2RlID0gdHlwZUFzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAodHlwZUFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHR5cGUgYXNzZXJ0aW9uLi4uYCwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlUeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uID0gdHlwZUFzc2VydGlvblZlcmlmaWVkOyAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbikge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgdHlwZSBhc3NlcnRpb24uYCwgc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBc0p1ZGdlbWVudChzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFzSnVkZ2VtZW50ID0gZmFsc2U7XG5cbiAgY29uc3QganVkZ2VtZW50Tm9kZSA9IGp1ZGdlbWVudE5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAoanVkZ2VtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEganVkZ2VtZW50Li4uYCwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb25zdCBqdWRnZW1lbnRWZXJpZmllZCA9IHZlcmlmeUp1ZGdlbWVudChqdWRnZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkQXNKdWRnZW1lbnQgPSBqdWRnZW1lbnRWZXJpZmllZDsgIC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQXNKdWRnZW1lbnQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIGp1ZGdlbWVudC5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBc0p1ZGdlbWVudDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QXNNZXRhdmFyaWFibGUoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBc01ldGF2YXJpYWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIG1ldGF2YXJpYWJsZS4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVWZXJpZmllZCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZSA9IHN1YnN0aXR1dGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvblZlcmlmaWVkID0gdmVyaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbk5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25WZXJpZmllZCkge1xuICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZEFzTWV0YXZhcmlhYmxlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBc01ldGF2YXJpYWJsZSkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgbWV0YXZhcmlhYmxlLmAsIHN0YXRlbWVudE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFzTWV0YXZhcmlhYmxlO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBc0RlZmluZWRBc3NlcnRpb24oc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBc0RlZmluZWRBc3NlcnRpb24gPSBmYWxzZTtcblxuICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uTm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKGRlZmluZWRBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBkZWZpbmVkIGFzc2VydGlvbi4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdmVyaWZ5RGVmaW5lZEFzc2VydGlvbihkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgIH0pO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWRBc0RlZmluZWRBc3NlcnRpb24gPSBkZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQXNEZWZpbmVkQXNzZXJ0aW9uKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBkZWZpbmVkIGFzc2VydGlvbi5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBc0RlZmluZWRBc3NlcnRpb247XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFzU3VicHJvb2ZBc3NlcnRpb24oc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBc1N1YnByb29mQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgc3VicHJvb2YgYXNzZXJ0aW9uLi4uYCwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvblZlcmlmaWVkID0gdmVyaWZ5U3VicHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgfSk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZEFzU3VicHJvb2ZBc3NlcnRpb24gPSBzdWJwcm9vZkFzc2VydGlvblZlcmlmaWVkOyAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFzU3VicHJvb2ZBc3NlcnRpb24pIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIGRlZmluZWQgYXNzZXJ0aW9uLmAsIHN0YXRlbWVudE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFzU3VicHJvb2ZBc3NlcnRpb247XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFzQ29udGFpbmVkQXNzZXJ0aW9uKHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQXNDb250YWluZWRBc3NlcnRpb24gPSBmYWxzZTtcblxuICBjb25zdCBjb250YWluZWRBc3NlcnRpb25Ob2RlID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gIGlmIChjb250YWluZWRBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBkZWZpbmVkIGFzc2VydGlvbi4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlDb250YWluZWRBc3NlcnRpb24oY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgIH0pO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWRBc0NvbnRhaW5lZEFzc2VydGlvbiA9IGNvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkOyAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFzQ29udGFpbmVkQXNzZXJ0aW9uKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBkZWZpbmVkIGFzc2VydGlvbi5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBc0NvbnRhaW5lZEFzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JzKHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzID0gZmFsc2U7XG5cbiAgY29uc3QgZXF1YWxpdHlOb2RlID0gZXF1YWxpdHlOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgIGp1ZGdlbWVudE5vZGUgPSBqdWRnZW1lbnROb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgIHR5cGVBc3NlcnRpb25Ob2RlID0gdHlwZUFzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgZGVmaW5lZEFzc2VydGlvbk5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpLFxuICAgICAgICBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAoICAoZXF1YWxpdHlOb2RlID09PSBudWxsKSAmJlxuICAgICAgICAoanVkZ2VtZW50Tm9kZSA9PT0gbnVsbCkgJiZcbiAgICAgICAgKG1ldGF2YXJpYWJsZU5vZGUgPT09IG51bGwpICYmXG4gICAgICAgICh0eXBlQXNzZXJ0aW9uTm9kZSA9PT0gbnVsbCkgJiZcbiAgICAgICAgKGRlZmluZWRBc3NlcnRpb25Ob2RlID09PSBudWxsKSAmJlxuICAgICAgICAoc3VicHJvb2ZBc3NlcnRpb25Ob2RlID09PSBudWxsKSAmJlxuICAgICAgICAoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSA9PT0gbnVsbCkgKSB7XG5cbiAgICBsZXQgY29tYmluYXRvcnMgPSBsb2NhbENvbnRleHQuZ2V0Q29tYmluYXRvcnMoKTtcblxuICAgIGNvbWJpbmF0b3JzID0gWyAvLy9cbiAgICAgIGJyYWNrZXRlZENvbWJpbmF0b3IsXG4gICAgICAuLi5jb21iaW5hdG9yc1xuICAgIF07XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzLnNvbWUoKGNvbWJpbmF0b3IpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IgPSB2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcihzdGF0ZW1lbnROb2RlLCBjb21iaW5hdG9yLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9ycztcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3Ioc3RhdGVtZW50Tm9kZSwgY29tYmluYXRvciwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yO1xuXG4gIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgIGNvbWJpbmF0b3JTdHJpbmcgPSBjb21iaW5hdG9yLmdldFN0cmluZygpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYWdhaW5zdCB0aGUgJyR7Y29tYmluYXRvclN0cmluZ30nIGNvbWJpbmF0b3IuLi5gLCBzdGF0ZW1lbnROb2RlKTtcblxuICBjb25zdCBjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSA9IGNvbWJpbmF0b3IuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICBub25UZXJtaW5hbE5vZGVBID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gc3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JOb2Rlc1ZlcmlmaWVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICB9KTtcblxuICBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yID0gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7ICAvLy9cblxuICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcikge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhZ2FpbnN0IHRoZSAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvci5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBtZXRhdmFyaWFibGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGxvY2FsQ29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBtZXRhVHlwZU5hbWUgID0gbWV0YXZhcmlhYmxlLmdldE1ldGFUeXBlTmFtZSgpO1xuXG4gICAgaWYgKG1ldGFUeXBlTmFtZSA9PT0gU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FKSB7XG4gICAgICBtZXRhdmFyaWFibGVWZXJpZmllZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdWJzdGl0dXRpb25WZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmIChzdWJzdGl0dXRpb25Ob2RlID09PSBudWxsKSB7XG4gICAgc3Vic3RpdHV0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGxvY2FsQ29udGV4dC5pc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAodmFyaWFibGVQcmVzZW50KSB7XG4gICAgICBjb25zdCB0ZXJtVmFyaWFibGVOb2RlID0gdGVybVZhcmlhYmxlTm9kZVF1ZXJ5KHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgICBpZiAodGVybVZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0ZXJtVmFyaWFibGVQcmVzZW50ID0gbG9jYWxDb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5vZGUodGVybVZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgc3Vic3RpdHV0aW9uVmVyaWZpZWQgPSB0ZXJtVmFyaWFibGVQcmVzZW50OyAvLy9cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3Vic3RpdHV0aW9uVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5U3RhbmRhbG9uZVN0YXRlbWVudCIsInZlcmlmeVN0YXRlbWVudEFzRXF1YWxpdHkiLCJ2ZXJpZnlTdGF0ZW1lbnRBc1R5cGVBc3NlcnRpb24iLCJ2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImVxdWFsaXR5Tm9kZVF1ZXJ5IiwianVkZ2VtZW50Tm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3Vic3RpdHV0aW9uTm9kZVF1ZXJ5IiwidHlwZUFzc2VydGlvbk5vZGVRdWVyeSIsInRlcm1WYXJpYWJsZU5vZGVRdWVyeSIsImRlZmluZWRBc3NlcnRpb25Ob2RlUXVlcnkiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSIsImNvbnRhaW5lZEFzc2VydGlvbk5vZGVRdWVyeSIsInZlcmlmeVN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJhc3NpZ25tZW50cyIsImRlcml2ZWQiLCJsb2NhbENvbnRleHQiLCJzdGF0ZW1lbnRWZXJpZmllZCIsInN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwidmVyaWZ5U3RhdGVtZW50RnVuY3Rpb25zIiwidmVyaWZ5U3RhdGVtZW50QXNNZXRhdmFyaWFibGUiLCJ2ZXJpZnlTdGF0ZW1lbnRBc0p1ZGdlbWVudCIsInZlcmlmeVN0YXRlbWVudEFzRGVmaW5lZEFzc2VydGlvbiIsInZlcmlmeVN0YXRlbWVudEFzU3VicHJvb2ZBc3NlcnRpb24iLCJ2ZXJpZnlTdGF0ZW1lbnRBc0NvbnRhaW5lZEFzc2VydGlvbiIsInZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9ycyIsInNvbWUiLCJ2ZXJpZnlTdGF0ZW1lbnRGdW5jdGlvbiIsImRlYnVnIiwidmVyaWZ5QWhlYWQiLCJzdGFuZGFsb25lU3RhdGVtZW50VmVyaWZpZWQiLCJ2ZXJpZmllZEFoZWFkIiwiT2JqZWN0IiwiYXNzaWduIiwibWV0YUxldmVsTm9kZXNWZXJpZmllciIsInN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yTm9kZXNWZXJpZmllciIsInN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSIsImVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5VmVyaWZpZWQiLCJ2ZXJpZnlFcXVhbGl0eSIsInN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uIiwidHlwZUFzc2VydGlvbk5vZGUiLCJ0eXBlQXNzZXJ0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlUeXBlQXNzZXJ0aW9uIiwic3RhdGVtZW50VmVyaWZpZWRBc0p1ZGdlbWVudCIsImp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnRWZXJpZmllZCIsInZlcmlmeUp1ZGdlbWVudCIsInN0YXRlbWVudFZlcmlmaWVkQXNNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlVmVyaWZpZWQiLCJ2ZXJpZnlNZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlTdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnRWZXJpZmllZEFzRGVmaW5lZEFzc2VydGlvbiIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvblZlcmlmaWVkIiwidmVyaWZ5RGVmaW5lZEFzc2VydGlvbiIsInN0YXRlbWVudFZlcmlmaWVkQXNTdWJwcm9vZkFzc2VydGlvbiIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInN1YnByb29mQXNzZXJ0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlTdWJwcm9vZkFzc2VydGlvbiIsInN0YXRlbWVudFZlcmlmaWVkQXNDb250YWluZWRBc3NlcnRpb24iLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlDb250YWluZWRBc3NlcnRpb24iLCJzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9ycyIsImNvbWJpbmF0b3JzIiwiZ2V0Q29tYmluYXRvcnMiLCJicmFja2V0ZWRDb21iaW5hdG9yIiwiY29tYmluYXRvciIsInN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IiLCJ2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvciIsImNvbWJpbmF0b3JTdHJpbmciLCJnZXRTdHJpbmciLCJjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwibWV0YXZhcmlhYmxlIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGFUeXBlTmFtZSIsImdldE1ldGFUeXBlTmFtZSIsIlNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5vZGUiLCJ0ZXJtVmFyaWFibGVOb2RlIiwidGVybVZhcmlhYmxlUHJlc2VudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBMkZBLE9BQStCO2VBQS9COztJQWhDZ0JBLHlCQUF5QjtlQUF6QkE7O0lBa0NBQyx5QkFBeUI7ZUFBekJBOztJQTBCQUMsOEJBQThCO2VBQTlCQTs7OytEQXJIVztnRUFDQztnRUFDSTsyREFDQTtnRUFDRzs4REFDQTsrREFDQztnRUFDQztpRkFDZTtxQkFFMUI7NkJBQ2U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekMsSUFBTUMsb0JBQW9CQyxJQUFBQSxnQkFB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