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
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("../unifier/metaLevel"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5RXF1YWxpdHkgZnJvbSBcIi4uL3ZlcmlmeS9lcXVhbGl0eVwiO1xuaW1wb3J0IHZlcmlmeUp1ZGdlbWVudCBmcm9tIFwiLi4vdmVyaWZ5L2p1ZGdlbWVudFwiO1xuaW1wb3J0IG1ldGFMZXZlbFVuaWZpZXIgZnJvbSBcIi4uL3VuaWZpZXIvbWV0YUxldmVsXCI7XG5pbXBvcnQgYnJhY2tldGVkQ29tYmluYXRvciBmcm9tIFwiLi4vb2NtYmluYXRvci9icmFja2V0ZWRcIjtcbmltcG9ydCB2ZXJpZnlUeXBlQXNzZXJ0aW9uIGZyb20gXCIuLi92ZXJpZnkvYXNzZXJ0aW9uL3R5cGVcIjtcbmltcG9ydCB2ZXJpZnlEZWZpbmVkQXNzZXJ0aW9uIGZyb20gXCIuLi92ZXJpZnkvYXNzZXJ0aW9uL2RlZmluZWRcIjtcbmltcG9ydCB2ZXJpZnlTdWJwcm9vZkFzc2VydGlvbiBmcm9tIFwiLi4vdmVyaWZ5L2Fzc2VydGlvbi9zdWJwcm9vZlwiO1xuaW1wb3J0IHZlcmlmeUNvbnRhaW5lZEFzc2VydGlvbiBmcm9tIFwiLi4vdmVyaWZ5L2Fzc2VydGlvbi9jb250YWluZWRcIjtcbmltcG9ydCBzdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvclVuaWZpZXIgZnJvbSBcIi4uL3VuaWZpZXIvc3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4uL21ldGFUeXBlTmFtZXNcIjtcblxuY29uc3QgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3Vic3RpdHV0aW9uL3ZhcmlhYmxlIVwiKSxcbiAgICAgIGVxdWFsaXR5Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9lcXVhbGl0eSFcIiksXG4gICAgICBqdWRnZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L2p1ZGdlbWVudCFcIiksXG4gICAgICBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBzdWJzdGl0dXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3N1YnN0aXR1dGlvbiFcIiksXG4gICAgICB0eXBlQXNzZXJ0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC90eXBlQXNzZXJ0aW9uIVwiKSxcbiAgICAgIHRlcm1WYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdWJzdGl0dXRpb24vdGVybS92YXJpYWJsZSFcIiksXG4gICAgICBkZWZpbmVkQXNzZXJ0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9kZWZpbmVkQXNzZXJ0aW9uIVwiKSxcbiAgICAgIHN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9zdWJwcm9vZkFzc2VydGlvbiFcIiksXG4gICAgICBjb250YWluZWRBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L2NvbnRhaW5lZEFzc2VydGlvbiFcIik7XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZDtcblxuICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gLCBzdGF0ZW1lbnROb2RlKTtcblxuICBjb25zdCB2ZXJpZnlTdGF0ZW1lbnRGdW5jdGlvbnMgPSBbXG4gICAgdmVyaWZ5U3RhdGVtZW50QXNNZXRhdmFyaWFibGUsXG4gICAgdmVyaWZ5U3RhdGVtZW50QXNFcXVhbGl0eSxcbiAgICB2ZXJpZnlTdGF0ZW1lbnRBc0p1ZGdlbWVudCxcbiAgICB2ZXJpZnlTdGF0ZW1lbnRBc1R5cGVBc3NlcnRpb24sXG4gICAgdmVyaWZ5U3RhdGVtZW50QXNEZWZpbmVkQXNzZXJ0aW9uLFxuICAgIHZlcmlmeVN0YXRlbWVudEFzU3VicHJvb2ZBc3NlcnRpb24sXG4gICAgdmVyaWZ5U3RhdGVtZW50QXNDb250YWluZWRBc3NlcnRpb24sXG4gICAgdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JzXG4gIF07XG5cbiAgc3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlTdGF0ZW1lbnRGdW5jdGlvbnMuc29tZSgodmVyaWZ5U3RhdGVtZW50RnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVN0YXRlbWVudEZ1bmN0aW9uKHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVN0YW5kYWxvbmVTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgc3RhbmRhbG9uZVN0YXRlbWVudFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhbmRhbG9uZSBzdGF0ZW1lbnQuLi5gLCBzdGF0ZW1lbnROb2RlKTtcblxuICBjb25zdCBkZXJpdmVkID0gZmFsc2UsXG4gICAgICAgIGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgIHN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpO1xuXG4gIGlmIChzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgc3RhbmRhbG9uZVN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZpZWRBaGVhZDsgLy8vXG4gIH1cblxuICBpZiAoc3RhbmRhbG9uZVN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhbmRhbG9uZSBzdGF0ZW1lbnQuYCwgc3RhdGVtZW50Tm9kZSk7XG4gIH1cblxuICByZXR1cm4gc3RhbmRhbG9uZVN0YXRlbWVudFZlcmlmaWVkO1xufVxuXG5PYmplY3QuYXNzaWduKG1ldGFMZXZlbFVuaWZpZXIsIHtcbiAgdmVyaWZ5U3RhdGVtZW50XG59KTtcblxuT2JqZWN0LmFzc2lnbihzdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvclVuaWZpZXIsIHtcbiAgdmVyaWZ5U3RhdGVtZW50XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdmVyaWZ5U3RhdGVtZW50O1xuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QXNFcXVhbGl0eShzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkgPSBmYWxzZTtcblxuICBjb25zdCBlcXVhbGl0eU5vZGUgPSBlcXVhbGl0eU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAoZXF1YWxpdHlOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYW4gZXF1YWxpdHkuLi5gLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIGNvbnN0IGVxdWFsaXR5VmVyaWZpZWQgPSB2ZXJpZnlFcXVhbGl0eShlcXVhbGl0eU5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICB9KTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IGVxdWFsaXR5VmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGFuIGVxdWFsaXR5LmAsIHN0YXRlbWVudE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBc1R5cGVBc3NlcnRpb24oc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBc1R5cGVBc3NlcnRpb24gPSBmYWxzZTtcblxuICBjb25zdCB0eXBlQXNzZXJ0aW9uTm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKHR5cGVBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSB0eXBlIGFzc2VydGlvbi4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29uc3QgdHlwZUFzc2VydGlvblZlcmlmaWVkID0gdmVyaWZ5VHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbiA9IHR5cGVBc3NlcnRpb25WZXJpZmllZDsgLy8vXG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBc1R5cGVBc3NlcnRpb24pIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHR5cGUgYXNzZXJ0aW9uLmAsIHN0YXRlbWVudE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QXNKdWRnZW1lbnQoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBc0p1ZGdlbWVudCA9IGZhbHNlO1xuXG4gIGNvbnN0IGp1ZGdlbWVudE5vZGUgPSBqdWRnZW1lbnROb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKGp1ZGdlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIGp1ZGdlbWVudC4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29uc3QganVkZ2VtZW50VmVyaWZpZWQgPSB2ZXJpZnlKdWRnZW1lbnQoanVkZ2VtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZEFzSnVkZ2VtZW50ID0ganVkZ2VtZW50VmVyaWZpZWQ7ICAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFzSnVkZ2VtZW50KSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBqdWRnZW1lbnQuYCwgc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNKdWRnZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFzTWV0YXZhcmlhYmxlKHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQXNNZXRhdmFyaWFibGUgPSBmYWxzZTtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBtZXRhdmFyaWFibGUuLi5gLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gdmVyaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdWJzdGl0dXRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25WZXJpZmllZCA9IHZlcmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb25Ob2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgc3RhdGVtZW50VmVyaWZpZWRBc01ldGF2YXJpYWJsZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQXNNZXRhdmFyaWFibGUpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIG1ldGF2YXJpYWJsZS5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBc01ldGF2YXJpYWJsZTtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QXNEZWZpbmVkQXNzZXJ0aW9uKHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQXNEZWZpbmVkQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgY29uc3QgZGVmaW5lZEFzc2VydGlvbk5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gIGlmIChkZWZpbmVkQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgZGVmaW5lZCBhc3NlcnRpb24uLi5gLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeURlZmluZWRBc3NlcnRpb24oZGVmaW5lZEFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICB9KTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkQXNEZWZpbmVkQXNzZXJ0aW9uID0gZGVmaW5lZEFzc2VydGlvblZlcmlmaWVkOyAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFzRGVmaW5lZEFzc2VydGlvbikge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgZGVmaW5lZCBhc3NlcnRpb24uYCwgc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNEZWZpbmVkQXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBc1N1YnByb29mQXNzZXJ0aW9uKHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQXNTdWJwcm9vZkFzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gIGlmIChzdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHN1YnByb29mIGFzc2VydGlvbi4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeVN1YnByb29mQXNzZXJ0aW9uKHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgIH0pO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWRBc1N1YnByb29mQXNzZXJ0aW9uID0gc3VicHJvb2ZBc3NlcnRpb25WZXJpZmllZDsgLy8vXG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBc1N1YnByb29mQXNzZXJ0aW9uKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBkZWZpbmVkIGFzc2VydGlvbi5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBc1N1YnByb29mQXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBc0NvbnRhaW5lZEFzc2VydGlvbihzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFzQ29udGFpbmVkQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgZGVmaW5lZCBhc3NlcnRpb24uLi5gLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdmVyaWZ5Q29udGFpbmVkQXNzZXJ0aW9uKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICB9KTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkQXNDb250YWluZWRBc3NlcnRpb24gPSBjb250YWluZWRBc3NlcnRpb25WZXJpZmllZDsgLy8vXG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBc0NvbnRhaW5lZEFzc2VydGlvbikge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgZGVmaW5lZCBhc3NlcnRpb24uYCwgc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNDb250YWluZWRBc3NlcnRpb247XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9ycyhzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9ycyA9IGZhbHNlO1xuXG4gIGNvbnN0IGVxdWFsaXR5Tm9kZSA9IGVxdWFsaXR5Tm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpLFxuICAgICAgICBqdWRnZW1lbnROb2RlID0ganVkZ2VtZW50Tm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpLFxuICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpLFxuICAgICAgICB0eXBlQXNzZXJ0aW9uTm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgIGRlZmluZWRBc3NlcnRpb25Ob2RlID0gZGVmaW5lZEFzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgIGNvbnRhaW5lZEFzc2VydGlvbk5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKCAgKGVxdWFsaXR5Tm9kZSA9PT0gbnVsbCkgJiZcbiAgICAgICAgKGp1ZGdlbWVudE5vZGUgPT09IG51bGwpICYmXG4gICAgICAgIChtZXRhdmFyaWFibGVOb2RlID09PSBudWxsKSAmJlxuICAgICAgICAodHlwZUFzc2VydGlvbk5vZGUgPT09IG51bGwpICYmXG4gICAgICAgIChkZWZpbmVkQXNzZXJ0aW9uTm9kZSA9PT0gbnVsbCkgJiZcbiAgICAgICAgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9PT0gbnVsbCkgJiZcbiAgICAgICAgKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUgPT09IG51bGwpICkge1xuXG4gICAgbGV0IGNvbWJpbmF0b3JzID0gbG9jYWxDb250ZXh0LmdldENvbWJpbmF0b3JzKCk7XG5cbiAgICBjb21iaW5hdG9ycyA9IFsgLy8vXG4gICAgICBicmFja2V0ZWRDb21iaW5hdG9yLFxuICAgICAgLi4uY29tYmluYXRvcnNcbiAgICBdO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnMgPSBjb21iaW5hdG9ycy5zb21lKChjb21iaW5hdG9yKSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yID0gdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3Ioc3RhdGVtZW50Tm9kZSwgY29tYmluYXRvciwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnM7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yKHN0YXRlbWVudE5vZGUsIGNvbWJpbmF0b3IsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcjtcblxuICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICBjb21iaW5hdG9yU3RyaW5nID0gY29tYmluYXRvci5nZXRTdHJpbmcoKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFnYWluc3QgdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yLi4uYCwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgY29uc3QgY29tYmluYXRvclN0YXRlbWVudE5vZGUgPSBjb21iaW5hdG9yLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgbm9uVGVybWluYWxOb2RlQSA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gY29tYmluYXRvclN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBub25UZXJtaW5hbE5vZGVVbmlmeSA9IHN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yVW5pZmllci51bmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICB9KTtcblxuICBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yID0gbm9uVGVybWluYWxOb2RlVW5pZnk7ICAvLy9cblxuICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcikge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhZ2FpbnN0IHRoZSAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvci5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBtZXRhdmFyaWFibGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGxvY2FsQ29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBtZXRhVHlwZU5hbWUgID0gbWV0YXZhcmlhYmxlLmdldE1ldGFUeXBlTmFtZSgpO1xuXG4gICAgaWYgKG1ldGFUeXBlTmFtZSA9PT0gU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FKSB7XG4gICAgICBtZXRhdmFyaWFibGVWZXJpZmllZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdWJzdGl0dXRpb25WZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmIChzdWJzdGl0dXRpb25Ob2RlID09PSBudWxsKSB7XG4gICAgc3Vic3RpdHV0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGxvY2FsQ29udGV4dC5pc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAodmFyaWFibGVQcmVzZW50KSB7XG4gICAgICBjb25zdCB0ZXJtVmFyaWFibGVOb2RlID0gdGVybVZhcmlhYmxlTm9kZVF1ZXJ5KHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgICBpZiAodGVybVZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0ZXJtVmFyaWFibGVQcmVzZW50ID0gbG9jYWxDb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5vZGUodGVybVZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgc3Vic3RpdHV0aW9uVmVyaWZpZWQgPSB0ZXJtVmFyaWFibGVQcmVzZW50OyAvLy9cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3Vic3RpdHV0aW9uVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5U3RhbmRhbG9uZVN0YXRlbWVudCIsInZlcmlmeVN0YXRlbWVudEFzRXF1YWxpdHkiLCJ2ZXJpZnlTdGF0ZW1lbnRBc1R5cGVBc3NlcnRpb24iLCJ2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImVxdWFsaXR5Tm9kZVF1ZXJ5IiwianVkZ2VtZW50Tm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3Vic3RpdHV0aW9uTm9kZVF1ZXJ5IiwidHlwZUFzc2VydGlvbk5vZGVRdWVyeSIsInRlcm1WYXJpYWJsZU5vZGVRdWVyeSIsImRlZmluZWRBc3NlcnRpb25Ob2RlUXVlcnkiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSIsImNvbnRhaW5lZEFzc2VydGlvbk5vZGVRdWVyeSIsInZlcmlmeVN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJhc3NpZ25tZW50cyIsImRlcml2ZWQiLCJsb2NhbENvbnRleHQiLCJzdGF0ZW1lbnRWZXJpZmllZCIsInN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwidmVyaWZ5U3RhdGVtZW50RnVuY3Rpb25zIiwidmVyaWZ5U3RhdGVtZW50QXNNZXRhdmFyaWFibGUiLCJ2ZXJpZnlTdGF0ZW1lbnRBc0p1ZGdlbWVudCIsInZlcmlmeVN0YXRlbWVudEFzRGVmaW5lZEFzc2VydGlvbiIsInZlcmlmeVN0YXRlbWVudEFzU3VicHJvb2ZBc3NlcnRpb24iLCJ2ZXJpZnlTdGF0ZW1lbnRBc0NvbnRhaW5lZEFzc2VydGlvbiIsInZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9ycyIsInNvbWUiLCJ2ZXJpZnlTdGF0ZW1lbnRGdW5jdGlvbiIsImRlYnVnIiwidmVyaWZ5QWhlYWQiLCJzdGFuZGFsb25lU3RhdGVtZW50VmVyaWZpZWQiLCJ2ZXJpZmllZEFoZWFkIiwiT2JqZWN0IiwiYXNzaWduIiwibWV0YUxldmVsVW5pZmllciIsInN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yVW5pZmllciIsInN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSIsImVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5VmVyaWZpZWQiLCJ2ZXJpZnlFcXVhbGl0eSIsInN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uIiwidHlwZUFzc2VydGlvbk5vZGUiLCJ0eXBlQXNzZXJ0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlUeXBlQXNzZXJ0aW9uIiwic3RhdGVtZW50VmVyaWZpZWRBc0p1ZGdlbWVudCIsImp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnRWZXJpZmllZCIsInZlcmlmeUp1ZGdlbWVudCIsInN0YXRlbWVudFZlcmlmaWVkQXNNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlVmVyaWZpZWQiLCJ2ZXJpZnlNZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlTdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnRWZXJpZmllZEFzRGVmaW5lZEFzc2VydGlvbiIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvblZlcmlmaWVkIiwidmVyaWZ5RGVmaW5lZEFzc2VydGlvbiIsInN0YXRlbWVudFZlcmlmaWVkQXNTdWJwcm9vZkFzc2VydGlvbiIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInN1YnByb29mQXNzZXJ0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlTdWJwcm9vZkFzc2VydGlvbiIsInN0YXRlbWVudFZlcmlmaWVkQXNDb250YWluZWRBc3NlcnRpb24iLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlDb250YWluZWRBc3NlcnRpb24iLCJzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9ycyIsImNvbWJpbmF0b3JzIiwiZ2V0Q29tYmluYXRvcnMiLCJicmFja2V0ZWRDb21iaW5hdG9yIiwiY29tYmluYXRvciIsInN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IiLCJ2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvciIsImNvbWJpbmF0b3JTdHJpbmciLCJnZXRTdHJpbmciLCJjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsIm5vblRlcm1pbmFsTm9kZVVuaWZ5IiwidW5pZnlOb25UZXJtaW5hbE5vZGUiLCJtZXRhdmFyaWFibGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YVR5cGVOYW1lIiwiZ2V0TWV0YVR5cGVOYW1lIiwiU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTm9kZSIsInRlcm1WYXJpYWJsZU5vZGUiLCJ0ZXJtVmFyaWFibGVQcmVzZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUEyRkEsT0FBK0I7ZUFBL0I7O0lBaENnQkEseUJBQXlCO2VBQXpCQTs7SUFrQ0FDLHlCQUF5QjtlQUF6QkE7O0lBMEJBQyw4QkFBOEI7ZUFBOUJBOzs7K0RBckhXO2dFQUNDO2dFQUNDO2dFQUNHOzJEQUNBOzhEQUNHOytEQUNDO2dFQUNDO2lGQUNTO3FCQUVwQjs2QkFDZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QyxJQUFNQyxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMsNEJBQzlCQyxvQkFBb0JELElBQUFBLGdCQUFTLEVBQUMseUJBQzlCRSxxQkFBcUJGLElBQUFBLGdCQUFT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