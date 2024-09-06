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
var variableNodeQuery = (0, _query.nodeQuery)("/*/variable!"), equalityNodeQuery = (0, _query.nodeQuery)("/statement/equality!"), judgementNodeQuery = (0, _query.nodeQuery)("/statement/judgement!"), metavariableNodeQuery = (0, _query.nodeQuery)("/*/metavariable!"), substitutionNodeQuery = (0, _query.nodeQuery)("/statement/substitution!"), termVariableNodeQuery = (0, _query.nodeQuery)("/substitution/term/variable!"), typeAssertionNodeQuery = (0, _query.nodeQuery)("/statement/typeAssertion!"), definedAssertionNodeQuery = (0, _query.nodeQuery)("/statement/definedAssertion!"), subproofAssertionNodeQuery = (0, _query.nodeQuery)("/statement/subproofAssertion!"), containedAssertionNodeQuery = (0, _query.nodeQuery)("/statement/containedAssertion!"), statementMetavariableNodeQuery = (0, _query.nodeQuery)("/substitution/statement/metavariable!");
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
        var variableNode = variableNodeQuery(substitutionNode), metavariableNode = metavariableNodeQuery(substitutionNode);
        if (variableNode !== null) {
            var variablePresent = localContext.isVariablePresentByVariableNode(variableNode);
            if (variablePresent) {
                var termVariableNode = termVariableNodeQuery(substitutionNode);
                if (termVariableNode !== null) {
                    var termVariablePresent = localContext.isVariablePresentByVariableNode(termVariableNode);
                    substitutionVerified = termVariablePresent; ///
                }
            }
        }
        if (metavariableNode !== null) {
            var metavariablePresent = localContext.isMetavariablePresentByMetavariableNode(metavariableNode);
            if (metavariablePresent) {
                var statementMetavariableNode = statementMetavariableNodeQuery(substitutionNode);
                if (statementMetavariableNode !== null) {
                    var statementMetavariablePresent = localContext.isMetavariablePresentByMetavariableNode(statementMetavariableNode);
                    substitutionVerified = statementMetavariablePresent; ///
                }
            }
        }
    }
    return substitutionVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IHZlcmlmeUVxdWFsaXR5IGZyb20gXCIuLi92ZXJpZnkvZXF1YWxpdHlcIjtcbmltcG9ydCB2ZXJpZnlKdWRnZW1lbnQgZnJvbSBcIi4uL3ZlcmlmeS9qdWRnZW1lbnRcIjtcbmltcG9ydCBicmFja2V0ZWRDb21iaW5hdG9yIGZyb20gXCIuLi9vY21iaW5hdG9yL2JyYWNrZXRlZFwiO1xuaW1wb3J0IHZlcmlmeVR5cGVBc3NlcnRpb24gZnJvbSBcIi4uL3ZlcmlmeS9hc3NlcnRpb24vdHlwZVwiO1xuaW1wb3J0IHZlcmlmeURlZmluZWRBc3NlcnRpb24gZnJvbSBcIi4uL3ZlcmlmeS9hc3NlcnRpb24vZGVmaW5lZFwiO1xuaW1wb3J0IHZlcmlmeVN1YnByb29mQXNzZXJ0aW9uIGZyb20gXCIuLi92ZXJpZnkvYXNzZXJ0aW9uL3N1YnByb29mXCI7XG5pbXBvcnQgdmVyaWZ5Q29udGFpbmVkQXNzZXJ0aW9uIGZyb20gXCIuLi92ZXJpZnkvYXNzZXJ0aW9uL2NvbnRhaW5lZFwiO1xuaW1wb3J0IHN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yVW5pZmllciBmcm9tIFwiLi4vdW5pZmllci9zdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvclwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qL3ZhcmlhYmxlIVwiKSxcbiAgICAgIGVxdWFsaXR5Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9lcXVhbGl0eSFcIiksXG4gICAgICBqdWRnZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L2p1ZGdlbWVudCFcIiksXG4gICAgICBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi9tZXRhdmFyaWFibGUhXCIpLFxuICAgICAgc3Vic3RpdHV0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9zdWJzdGl0dXRpb24hXCIpLFxuICAgICAgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnN0aXR1dGlvbi90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIHR5cGVBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3R5cGVBc3NlcnRpb24hXCIpLFxuICAgICAgZGVmaW5lZEFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvZGVmaW5lZEFzc2VydGlvbiFcIiksXG4gICAgICBzdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvc3VicHJvb2ZBc3NlcnRpb24hXCIpLFxuICAgICAgY29udGFpbmVkQXNzZXJ0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9jb250YWluZWRBc3NlcnRpb24hXCIpLFxuICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnQvbWV0YXZhcmlhYmxlIVwiKTtcblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkO1xuXG4gIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gIGNvbnN0IHZlcmlmeVN0YXRlbWVudEZ1bmN0aW9ucyA9IFtcbiAgICB2ZXJpZnlTdGF0ZW1lbnRBc01ldGF2YXJpYWJsZSxcbiAgICB2ZXJpZnlTdGF0ZW1lbnRBc0VxdWFsaXR5LFxuICAgIHZlcmlmeVN0YXRlbWVudEFzSnVkZ2VtZW50LFxuICAgIHZlcmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbixcbiAgICB2ZXJpZnlTdGF0ZW1lbnRBc0RlZmluZWRBc3NlcnRpb24sXG4gICAgdmVyaWZ5U3RhdGVtZW50QXNTdWJwcm9vZkFzc2VydGlvbixcbiAgICB2ZXJpZnlTdGF0ZW1lbnRBc0NvbnRhaW5lZEFzc2VydGlvbixcbiAgICB2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcnNcbiAgXTtcblxuICBzdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVN0YXRlbWVudEZ1bmN0aW9ucy5zb21lKCh2ZXJpZnlTdGF0ZW1lbnRGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5U3RhdGVtZW50RnVuY3Rpb24oc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmAsIHN0YXRlbWVudE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5U3RhbmRhbG9uZVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBzdGFuZGFsb25lU3RhdGVtZW50VmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGFuZGFsb25lIHN0YXRlbWVudC4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gIGNvbnN0IGRlcml2ZWQgPSBmYWxzZSxcbiAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgc3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgaWYgKHN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICBzdGFuZGFsb25lU3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZmllZEFoZWFkOyAvLy9cbiAgfVxuXG4gIGlmIChzdGFuZGFsb25lU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGFuZGFsb25lIHN0YXRlbWVudC5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiBzdGFuZGFsb25lU3RhdGVtZW50VmVyaWZpZWQ7XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICB2ZXJpZnlTdGF0ZW1lbnRcbn0pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHZlcmlmeVN0YXRlbWVudDtcblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QXNNZXRhdmFyaWFibGUoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBc01ldGF2YXJpYWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIG1ldGF2YXJpYWJsZS4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVWZXJpZmllZCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZSA9IHN1YnN0aXR1dGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvblZlcmlmaWVkID0gdmVyaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbk5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25WZXJpZmllZCkge1xuICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZEFzTWV0YXZhcmlhYmxlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBc01ldGF2YXJpYWJsZSkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgbWV0YXZhcmlhYmxlLmAsIHN0YXRlbWVudE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFzTWV0YXZhcmlhYmxlO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBc0VxdWFsaXR5KHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IGZhbHNlO1xuXG4gIGNvbnN0IGVxdWFsaXR5Tm9kZSA9IGVxdWFsaXR5Tm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gIGlmIChlcXVhbGl0eU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhbiBlcXVhbGl0eS4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29uc3QgZXF1YWxpdHlWZXJpZmllZCA9IHZlcmlmeUVxdWFsaXR5KGVxdWFsaXR5Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgIH0pO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5ID0gZXF1YWxpdHlWZXJpZmllZDsgLy8vXG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5KSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYW4gZXF1YWxpdHkuYCwgc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eTtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QXNKdWRnZW1lbnQoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBc0p1ZGdlbWVudCA9IGZhbHNlO1xuXG4gIGNvbnN0IGp1ZGdlbWVudE5vZGUgPSBqdWRnZW1lbnROb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKGp1ZGdlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIGp1ZGdlbWVudC4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29uc3QganVkZ2VtZW50VmVyaWZpZWQgPSB2ZXJpZnlKdWRnZW1lbnQoanVkZ2VtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZEFzSnVkZ2VtZW50ID0ganVkZ2VtZW50VmVyaWZpZWQ7ICAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFzSnVkZ2VtZW50KSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBqdWRnZW1lbnQuYCwgc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNKdWRnZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbihzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGVBc3NlcnRpb25Ob2RlID0gdHlwZUFzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAodHlwZUFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHR5cGUgYXNzZXJ0aW9uLi4uYCwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlUeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uID0gdHlwZUFzc2VydGlvblZlcmlmaWVkOyAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbikge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgdHlwZSBhc3NlcnRpb24uYCwgc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBc0RlZmluZWRBc3NlcnRpb24oc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBc0RlZmluZWRBc3NlcnRpb24gPSBmYWxzZTtcblxuICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uTm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKGRlZmluZWRBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBkZWZpbmVkIGFzc2VydGlvbi4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdmVyaWZ5RGVmaW5lZEFzc2VydGlvbihkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgIH0pO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWRBc0RlZmluZWRBc3NlcnRpb24gPSBkZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQXNEZWZpbmVkQXNzZXJ0aW9uKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBkZWZpbmVkIGFzc2VydGlvbi5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBc0RlZmluZWRBc3NlcnRpb247XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFzU3VicHJvb2ZBc3NlcnRpb24oc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBc1N1YnByb29mQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgc3VicHJvb2YgYXNzZXJ0aW9uLi4uYCwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvblZlcmlmaWVkID0gdmVyaWZ5U3VicHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgfSk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZEFzU3VicHJvb2ZBc3NlcnRpb24gPSBzdWJwcm9vZkFzc2VydGlvblZlcmlmaWVkOyAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFzU3VicHJvb2ZBc3NlcnRpb24pIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIGRlZmluZWQgYXNzZXJ0aW9uLmAsIHN0YXRlbWVudE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFzU3VicHJvb2ZBc3NlcnRpb247XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFzQ29udGFpbmVkQXNzZXJ0aW9uKHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQXNDb250YWluZWRBc3NlcnRpb24gPSBmYWxzZTtcblxuICBjb25zdCBjb250YWluZWRBc3NlcnRpb25Ob2RlID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gIGlmIChjb250YWluZWRBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBkZWZpbmVkIGFzc2VydGlvbi4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlDb250YWluZWRBc3NlcnRpb24oY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgIH0pO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWRBc0NvbnRhaW5lZEFzc2VydGlvbiA9IGNvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkOyAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFzQ29udGFpbmVkQXNzZXJ0aW9uKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBkZWZpbmVkIGFzc2VydGlvbi5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBc0NvbnRhaW5lZEFzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JzKHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzID0gZmFsc2U7XG5cbiAgY29uc3QgZXF1YWxpdHlOb2RlID0gZXF1YWxpdHlOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgIGp1ZGdlbWVudE5vZGUgPSBqdWRnZW1lbnROb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgIHR5cGVBc3NlcnRpb25Ob2RlID0gdHlwZUFzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgZGVmaW5lZEFzc2VydGlvbk5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpLFxuICAgICAgICBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAoICAoZXF1YWxpdHlOb2RlID09PSBudWxsKSAmJlxuICAgICAgICAoanVkZ2VtZW50Tm9kZSA9PT0gbnVsbCkgJiZcbiAgICAgICAgKG1ldGF2YXJpYWJsZU5vZGUgPT09IG51bGwpICYmXG4gICAgICAgICh0eXBlQXNzZXJ0aW9uTm9kZSA9PT0gbnVsbCkgJiZcbiAgICAgICAgKGRlZmluZWRBc3NlcnRpb25Ob2RlID09PSBudWxsKSAmJlxuICAgICAgICAoc3VicHJvb2ZBc3NlcnRpb25Ob2RlID09PSBudWxsKSAmJlxuICAgICAgICAoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSA9PT0gbnVsbCkgKSB7XG5cbiAgICBsZXQgY29tYmluYXRvcnMgPSBsb2NhbENvbnRleHQuZ2V0Q29tYmluYXRvcnMoKTtcblxuICAgIGNvbWJpbmF0b3JzID0gWyAvLy9cbiAgICAgIGJyYWNrZXRlZENvbWJpbmF0b3IsXG4gICAgICAuLi5jb21iaW5hdG9yc1xuICAgIF07XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzLnNvbWUoKGNvbWJpbmF0b3IpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IgPSB2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcihzdGF0ZW1lbnROb2RlLCBjb21iaW5hdG9yLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9ycztcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3Ioc3RhdGVtZW50Tm9kZSwgY29tYmluYXRvciwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yO1xuXG4gIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgIGNvbWJpbmF0b3JTdHJpbmcgPSBjb21iaW5hdG9yLmdldFN0cmluZygpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYWdhaW5zdCB0aGUgJyR7Y29tYmluYXRvclN0cmluZ30nIGNvbWJpbmF0b3IuLi5gLCBzdGF0ZW1lbnROb2RlKTtcblxuICBjb25zdCBjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSA9IGNvbWJpbmF0b3IuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICBub25UZXJtaW5hbE5vZGVBID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVVuaWZ5ID0gc3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JVbmlmaWVyLnVuaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgIH0pO1xuXG4gIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IgPSBub25UZXJtaW5hbE5vZGVVbmlmeTsgIC8vL1xuXG4gIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFnYWluc3QgdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yLmAsIHN0YXRlbWVudE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3I7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSAgPSBtZXRhdmFyaWFibGUuZ2V0TWV0YVR5cGVOYW1lKCk7XG5cbiAgICBpZiAobWV0YVR5cGVOYW1lID09PSBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUpIHtcbiAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb25Ob2RlLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN1YnN0aXR1dGlvblZlcmlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKHN1YnN0aXR1dGlvbk5vZGUgPT09IG51bGwpIHtcbiAgICBzdWJzdGl0dXRpb25WZXJpZmllZCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlUHJlc2VudCA9IGxvY2FsQ29udGV4dC5pc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmICh2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgICAgY29uc3QgdGVybVZhcmlhYmxlTm9kZSA9IHRlcm1WYXJpYWJsZU5vZGVRdWVyeShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgICAgICBpZiAodGVybVZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHRlcm1WYXJpYWJsZVByZXNlbnQgPSBsb2NhbENvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTm9kZSh0ZXJtVmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgIHN1YnN0aXR1dGlvblZlcmlmaWVkID0gdGVybVZhcmlhYmxlUHJlc2VudDsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGxvY2FsQ29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnRNZXRhdmFyaWFibGVQcmVzZW50ID0gbG9jYWxDb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgIHN1YnN0aXR1dGlvblZlcmlmaWVkID0gc3RhdGVtZW50TWV0YXZhcmlhYmxlUHJlc2VudDsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3Vic3RpdHV0aW9uVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5U3RhbmRhbG9uZVN0YXRlbWVudCIsInZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZXF1YWxpdHlOb2RlUXVlcnkiLCJqdWRnZW1lbnROb2RlUXVlcnkiLCJtZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJzdWJzdGl0dXRpb25Ob2RlUXVlcnkiLCJ0ZXJtVmFyaWFibGVOb2RlUXVlcnkiLCJ0eXBlQXNzZXJ0aW9uTm9kZVF1ZXJ5IiwiZGVmaW5lZEFzc2VydGlvbk5vZGVRdWVyeSIsInN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5IiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZVF1ZXJ5Iiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwidmVyaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsImFzc2lnbm1lbnRzIiwiZGVyaXZlZCIsImxvY2FsQ29udGV4dCIsInN0YXRlbWVudFZlcmlmaWVkIiwic3RhdGVtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJ2ZXJpZnlTdGF0ZW1lbnRGdW5jdGlvbnMiLCJ2ZXJpZnlTdGF0ZW1lbnRBc01ldGF2YXJpYWJsZSIsInZlcmlmeVN0YXRlbWVudEFzRXF1YWxpdHkiLCJ2ZXJpZnlTdGF0ZW1lbnRBc0p1ZGdlbWVudCIsInZlcmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbiIsInZlcmlmeVN0YXRlbWVudEFzRGVmaW5lZEFzc2VydGlvbiIsInZlcmlmeVN0YXRlbWVudEFzU3VicHJvb2ZBc3NlcnRpb24iLCJ2ZXJpZnlTdGF0ZW1lbnRBc0NvbnRhaW5lZEFzc2VydGlvbiIsInZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9ycyIsInNvbWUiLCJ2ZXJpZnlTdGF0ZW1lbnRGdW5jdGlvbiIsImRlYnVnIiwidmVyaWZ5QWhlYWQiLCJzdGFuZGFsb25lU3RhdGVtZW50VmVyaWZpZWQiLCJ2ZXJpZmllZEFoZWFkIiwiT2JqZWN0IiwiYXNzaWduIiwic2hpbSIsInN0YXRlbWVudFZlcmlmaWVkQXNNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlVmVyaWZpZWQiLCJ2ZXJpZnlNZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlTdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkiLCJlcXVhbGl0eU5vZGUiLCJlcXVhbGl0eVZlcmlmaWVkIiwidmVyaWZ5RXF1YWxpdHkiLCJzdGF0ZW1lbnRWZXJpZmllZEFzSnVkZ2VtZW50IiwianVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudFZlcmlmaWVkIiwidmVyaWZ5SnVkZ2VtZW50Iiwic3RhdGVtZW50VmVyaWZpZWRBc1R5cGVBc3NlcnRpb24iLCJ0eXBlQXNzZXJ0aW9uTm9kZSIsInR5cGVBc3NlcnRpb25WZXJpZmllZCIsInZlcmlmeVR5cGVBc3NlcnRpb24iLCJzdGF0ZW1lbnRWZXJpZmllZEFzRGVmaW5lZEFzc2VydGlvbiIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvblZlcmlmaWVkIiwidmVyaWZ5RGVmaW5lZEFzc2VydGlvbiIsInN0YXRlbWVudFZlcmlmaWVkQXNTdWJwcm9vZkFzc2VydGlvbiIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInN1YnByb29mQXNzZXJ0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlTdWJwcm9vZkFzc2VydGlvbiIsInN0YXRlbWVudFZlcmlmaWVkQXNDb250YWluZWRBc3NlcnRpb24iLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlDb250YWluZWRBc3NlcnRpb24iLCJzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9ycyIsImNvbWJpbmF0b3JzIiwiZ2V0Q29tYmluYXRvcnMiLCJicmFja2V0ZWRDb21iaW5hdG9yIiwiY29tYmluYXRvciIsInN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IiLCJ2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvciIsImNvbWJpbmF0b3JTdHJpbmciLCJnZXRTdHJpbmciLCJjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsIm5vblRlcm1pbmFsTm9kZVVuaWZ5Iiwic3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JVbmlmaWVyIiwidW5pZnlOb25UZXJtaW5hbE5vZGUiLCJtZXRhdmFyaWFibGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YVR5cGVOYW1lIiwiZ2V0TWV0YVR5cGVOYW1lIiwiU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTm9kZSIsInRlcm1WYXJpYWJsZU5vZGUiLCJ0ZXJtVmFyaWFibGVQcmVzZW50IiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVQcmVzZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUF5RkEsT0FBK0I7ZUFBL0I7O0lBN0JnQkEseUJBQXlCO2VBQXpCQTs7OzJEQTFEQzsrREFDVTtnRUFDQztnRUFDSTsyREFDQTs4REFDRzsrREFDQztnRUFDQztpRkFDUztxQkFFcEI7NkJBQ2U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekMsSUFBTUMsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLGlCQUM5QkMsb0JBQW9CRCxJQUFBQSxnQkFBUyxFQUFDLHlCQUM5QkUscUJBQXFCRixJQUFBQSxnQkFBUyxFQUFDLDBCQUMvQkcsd0JBQXdCSCxJQUFBQSxnQkFBUyxFQUFDLHFCQUNsQ0ksd0JBQXdCSixJQUFBQSxnQkFBUyxFQUFDLDZCQUNsQ0ssd0JBQXdCTCxJQUFBQSxnQkFBUyxFQUFDLGlDQUNsQ00seUJBQXlCTixJQUFBQSxnQkFBUyxFQUFDLDhCQUNuQ08sNEJBQTRCUCxJQUFBQSxnQkFBUyxF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