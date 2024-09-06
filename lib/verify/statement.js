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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5RXF1YWxpdHkgZnJvbSBcIi4uL3ZlcmlmeS9lcXVhbGl0eVwiO1xuaW1wb3J0IHZlcmlmeUp1ZGdlbWVudCBmcm9tIFwiLi4vdmVyaWZ5L2p1ZGdlbWVudFwiO1xuaW1wb3J0IG1ldGFMZXZlbFVuaWZpZXIgZnJvbSBcIi4uL3VuaWZpZXIvbWV0YUxldmVsXCI7XG5pbXBvcnQgYnJhY2tldGVkQ29tYmluYXRvciBmcm9tIFwiLi4vb2NtYmluYXRvci9icmFja2V0ZWRcIjtcbmltcG9ydCB2ZXJpZnlUeXBlQXNzZXJ0aW9uIGZyb20gXCIuLi92ZXJpZnkvYXNzZXJ0aW9uL3R5cGVcIjtcbmltcG9ydCB2ZXJpZnlEZWZpbmVkQXNzZXJ0aW9uIGZyb20gXCIuLi92ZXJpZnkvYXNzZXJ0aW9uL2RlZmluZWRcIjtcbmltcG9ydCB2ZXJpZnlTdWJwcm9vZkFzc2VydGlvbiBmcm9tIFwiLi4vdmVyaWZ5L2Fzc2VydGlvbi9zdWJwcm9vZlwiO1xuaW1wb3J0IHZlcmlmeUNvbnRhaW5lZEFzc2VydGlvbiBmcm9tIFwiLi4vdmVyaWZ5L2Fzc2VydGlvbi9jb250YWluZWRcIjtcbmltcG9ydCBzdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvclVuaWZpZXIgZnJvbSBcIi4uL3VuaWZpZXIvc3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4uL21ldGFUeXBlTmFtZXNcIjtcblxuY29uc3QgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3Vic3RpdHV0aW9uL3ZhcmlhYmxlIVwiKSxcbiAgICAgIGVxdWFsaXR5Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9lcXVhbGl0eSFcIiksXG4gICAgICBqdWRnZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L2p1ZGdlbWVudCFcIiksXG4gICAgICBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBzdWJzdGl0dXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3N1YnN0aXR1dGlvbiFcIiksXG4gICAgICB0eXBlQXNzZXJ0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC90eXBlQXNzZXJ0aW9uIVwiKSxcbiAgICAgIHRlcm1WYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdWJzdGl0dXRpb24vdGVybS92YXJpYWJsZSFcIiksXG4gICAgICBkZWZpbmVkQXNzZXJ0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9kZWZpbmVkQXNzZXJ0aW9uIVwiKSxcbiAgICAgIHN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9zdWJwcm9vZkFzc2VydGlvbiFcIiksXG4gICAgICBjb250YWluZWRBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L2NvbnRhaW5lZEFzc2VydGlvbiFcIik7XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZDtcblxuICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gLCBzdGF0ZW1lbnROb2RlKTtcblxuICBjb25zdCB2ZXJpZnlTdGF0ZW1lbnRGdW5jdGlvbnMgPSBbXG4gICAgdmVyaWZ5U3RhdGVtZW50QXNNZXRhdmFyaWFibGUsXG4gICAgdmVyaWZ5U3RhdGVtZW50QXNFcXVhbGl0eSxcbiAgICB2ZXJpZnlTdGF0ZW1lbnRBc0p1ZGdlbWVudCxcbiAgICB2ZXJpZnlTdGF0ZW1lbnRBc1R5cGVBc3NlcnRpb24sXG4gICAgdmVyaWZ5U3RhdGVtZW50QXNEZWZpbmVkQXNzZXJ0aW9uLFxuICAgIHZlcmlmeVN0YXRlbWVudEFzU3VicHJvb2ZBc3NlcnRpb24sXG4gICAgdmVyaWZ5U3RhdGVtZW50QXNDb250YWluZWRBc3NlcnRpb24sXG4gICAgdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JzXG4gIF07XG5cbiAgc3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlTdGF0ZW1lbnRGdW5jdGlvbnMuc29tZSgodmVyaWZ5U3RhdGVtZW50RnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVN0YXRlbWVudEZ1bmN0aW9uKHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVN0YW5kYWxvbmVTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgc3RhbmRhbG9uZVN0YXRlbWVudFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhbmRhbG9uZSBzdGF0ZW1lbnQuLi5gLCBzdGF0ZW1lbnROb2RlKTtcblxuICBjb25zdCBkZXJpdmVkID0gZmFsc2UsXG4gICAgICAgIGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgIHN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpO1xuXG4gIGlmIChzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgc3RhbmRhbG9uZVN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZpZWRBaGVhZDsgLy8vXG4gIH1cblxuICBpZiAoc3RhbmRhbG9uZVN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhbmRhbG9uZSBzdGF0ZW1lbnQuYCwgc3RhdGVtZW50Tm9kZSk7XG4gIH1cblxuICByZXR1cm4gc3RhbmRhbG9uZVN0YXRlbWVudFZlcmlmaWVkO1xufVxuXG5PYmplY3QuYXNzaWduKG1ldGFMZXZlbFVuaWZpZXIsIHtcbiAgdmVyaWZ5U3RhdGVtZW50XG59KTtcblxuT2JqZWN0LmFzc2lnbihzdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvclVuaWZpZXIsIHtcbiAgdmVyaWZ5U3RhdGVtZW50XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdmVyaWZ5U3RhdGVtZW50O1xuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBc01ldGF2YXJpYWJsZShzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFzTWV0YXZhcmlhYmxlID0gZmFsc2U7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgbWV0YXZhcmlhYmxlLi4uYCwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVWZXJpZmllZCA9IHZlcmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlID0gc3Vic3RpdHV0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uVmVyaWZpZWQgPSB2ZXJpZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uTm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvblZlcmlmaWVkKSB7XG4gICAgICAgIHN0YXRlbWVudFZlcmlmaWVkQXNNZXRhdmFyaWFibGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFzTWV0YXZhcmlhYmxlKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBtZXRhdmFyaWFibGUuYCwgc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNNZXRhdmFyaWFibGU7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFzRXF1YWxpdHkoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5ID0gZmFsc2U7XG5cbiAgY29uc3QgZXF1YWxpdHlOb2RlID0gZXF1YWxpdHlOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKGVxdWFsaXR5Tm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGFuIGVxdWFsaXR5Li4uYCwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb25zdCBlcXVhbGl0eVZlcmlmaWVkID0gdmVyaWZ5RXF1YWxpdHkoZXF1YWxpdHlOb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkgPSBlcXVhbGl0eVZlcmlmaWVkOyAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhbiBlcXVhbGl0eS5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5O1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBc0p1ZGdlbWVudChzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFzSnVkZ2VtZW50ID0gZmFsc2U7XG5cbiAgY29uc3QganVkZ2VtZW50Tm9kZSA9IGp1ZGdlbWVudE5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAoanVkZ2VtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEganVkZ2VtZW50Li4uYCwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb25zdCBqdWRnZW1lbnRWZXJpZmllZCA9IHZlcmlmeUp1ZGdlbWVudChqdWRnZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkQXNKdWRnZW1lbnQgPSBqdWRnZW1lbnRWZXJpZmllZDsgIC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQXNKdWRnZW1lbnQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIGp1ZGdlbWVudC5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBc0p1ZGdlbWVudDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QXNUeXBlQXNzZXJ0aW9uKHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgY29uc3QgdHlwZUFzc2VydGlvbk5vZGUgPSB0eXBlQXNzZXJ0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gIGlmICh0eXBlQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgdHlwZSBhc3NlcnRpb24uLi5gLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWRBc1R5cGVBc3NlcnRpb24gPSB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSB0eXBlIGFzc2VydGlvbi5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBc1R5cGVBc3NlcnRpb247XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFzRGVmaW5lZEFzc2VydGlvbihzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFzRGVmaW5lZEFzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGNvbnN0IGRlZmluZWRBc3NlcnRpb25Ob2RlID0gZGVmaW5lZEFzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAoZGVmaW5lZEFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlEZWZpbmVkQXNzZXJ0aW9uKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgfSk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZEFzRGVmaW5lZEFzc2VydGlvbiA9IGRlZmluZWRBc3NlcnRpb25WZXJpZmllZDsgLy8vXG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBc0RlZmluZWRBc3NlcnRpb24pIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIGRlZmluZWQgYXNzZXJ0aW9uLmAsIHN0YXRlbWVudE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFzRGVmaW5lZEFzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QXNTdWJwcm9vZkFzc2VydGlvbihzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFzU3VicHJvb2ZBc3NlcnRpb24gPSBmYWxzZTtcblxuICBjb25zdCBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAoc3VicHJvb2ZBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBzdWJwcm9vZiBhc3NlcnRpb24uLi5gLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlTdWJwcm9vZkFzc2VydGlvbihzdWJwcm9vZkFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICB9KTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkQXNTdWJwcm9vZkFzc2VydGlvbiA9IHN1YnByb29mQXNzZXJ0aW9uVmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQXNTdWJwcm9vZkFzc2VydGlvbikge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgZGVmaW5lZCBhc3NlcnRpb24uYCwgc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNTdWJwcm9vZkFzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QXNDb250YWluZWRBc3NlcnRpb24oc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBc0NvbnRhaW5lZEFzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeUNvbnRhaW5lZEFzc2VydGlvbihjb250YWluZWRBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgfSk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZEFzQ29udGFpbmVkQXNzZXJ0aW9uID0gY29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQXNDb250YWluZWRBc3NlcnRpb24pIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIGRlZmluZWQgYXNzZXJ0aW9uLmAsIHN0YXRlbWVudE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFzQ29udGFpbmVkQXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcnMoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnMgPSBmYWxzZTtcblxuICBjb25zdCBlcXVhbGl0eU5vZGUgPSBlcXVhbGl0eU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAganVkZ2VtZW50Tm9kZSA9IGp1ZGdlbWVudE5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgdHlwZUFzc2VydGlvbk5vZGUgPSB0eXBlQXNzZXJ0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpLFxuICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uTm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgIHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpLFxuICAgICAgICBjb250YWluZWRBc3NlcnRpb25Ob2RlID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gIGlmICggIChlcXVhbGl0eU5vZGUgPT09IG51bGwpICYmXG4gICAgICAgIChqdWRnZW1lbnROb2RlID09PSBudWxsKSAmJlxuICAgICAgICAobWV0YXZhcmlhYmxlTm9kZSA9PT0gbnVsbCkgJiZcbiAgICAgICAgKHR5cGVBc3NlcnRpb25Ob2RlID09PSBudWxsKSAmJlxuICAgICAgICAoZGVmaW5lZEFzc2VydGlvbk5vZGUgPT09IG51bGwpICYmXG4gICAgICAgIChzdWJwcm9vZkFzc2VydGlvbk5vZGUgPT09IG51bGwpICYmXG4gICAgICAgIChjb250YWluZWRBc3NlcnRpb25Ob2RlID09PSBudWxsKSApIHtcblxuICAgIGxldCBjb21iaW5hdG9ycyA9IGxvY2FsQ29udGV4dC5nZXRDb21iaW5hdG9ycygpO1xuXG4gICAgY29tYmluYXRvcnMgPSBbIC8vL1xuICAgICAgYnJhY2tldGVkQ29tYmluYXRvcixcbiAgICAgIC4uLmNvbWJpbmF0b3JzXG4gICAgXTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzID0gY29tYmluYXRvcnMuc29tZSgoY29tYmluYXRvcikgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvciA9IHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yKHN0YXRlbWVudE5vZGUsIGNvbWJpbmF0b3IsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcihzdGF0ZW1lbnROb2RlLCBjb21iaW5hdG9yLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3I7XG5cbiAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgY29tYmluYXRvclN0cmluZyA9IGNvbWJpbmF0b3IuZ2V0U3RyaW5nKCk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhZ2FpbnN0IHRoZSAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvci4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gIGNvbnN0IGNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlID0gY29tYmluYXRvci5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZUEgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IGNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgbm9uVGVybWluYWxOb2RlVW5pZnkgPSBzdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvclVuaWZpZXIudW5pZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgfSk7XG5cbiAgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvciA9IG5vblRlcm1pbmFsTm9kZVVuaWZ5OyAgLy8vXG5cbiAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYWdhaW5zdCB0aGUgJyR7Y29tYmluYXRvclN0cmluZ30nIGNvbWJpbmF0b3IuYCwgc3RhdGVtZW50Tm9kZSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcjtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBtZXRhdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YVR5cGVOYW1lICA9IG1ldGF2YXJpYWJsZS5nZXRNZXRhVHlwZU5hbWUoKTtcblxuICAgIGlmIChtZXRhVHlwZU5hbWUgPT09IFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSkge1xuICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGVWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbk5vZGUsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3Vic3RpdHV0aW9uVmVyaWZpZWQgPSBmYWxzZTtcblxuICBpZiAoc3Vic3RpdHV0aW9uTm9kZSA9PT0gbnVsbCkge1xuICAgIHN1YnN0aXR1dGlvblZlcmlmaWVkID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeShzdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSBsb2NhbENvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgY29uc3QgdGVybVZhcmlhYmxlTm9kZSA9IHRlcm1WYXJpYWJsZU5vZGVRdWVyeShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgICAgaWYgKHRlcm1WYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdGVybVZhcmlhYmxlUHJlc2VudCA9IGxvY2FsQ29udGV4dC5pc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOb2RlKHRlcm1WYXJpYWJsZU5vZGUpO1xuXG4gICAgICAgIHN1YnN0aXR1dGlvblZlcmlmaWVkID0gdGVybVZhcmlhYmxlUHJlc2VudDsgLy8vXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvblZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVN0YW5kYWxvbmVTdGF0ZW1lbnQiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImVxdWFsaXR5Tm9kZVF1ZXJ5IiwianVkZ2VtZW50Tm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3Vic3RpdHV0aW9uTm9kZVF1ZXJ5IiwidHlwZUFzc2VydGlvbk5vZGVRdWVyeSIsInRlcm1WYXJpYWJsZU5vZGVRdWVyeSIsImRlZmluZWRBc3NlcnRpb25Ob2RlUXVlcnkiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSIsImNvbnRhaW5lZEFzc2VydGlvbk5vZGVRdWVyeSIsInZlcmlmeVN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJhc3NpZ25tZW50cyIsImRlcml2ZWQiLCJsb2NhbENvbnRleHQiLCJzdGF0ZW1lbnRWZXJpZmllZCIsInN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwidmVyaWZ5U3RhdGVtZW50RnVuY3Rpb25zIiwidmVyaWZ5U3RhdGVtZW50QXNNZXRhdmFyaWFibGUiLCJ2ZXJpZnlTdGF0ZW1lbnRBc0VxdWFsaXR5IiwidmVyaWZ5U3RhdGVtZW50QXNKdWRnZW1lbnQiLCJ2ZXJpZnlTdGF0ZW1lbnRBc1R5cGVBc3NlcnRpb24iLCJ2ZXJpZnlTdGF0ZW1lbnRBc0RlZmluZWRBc3NlcnRpb24iLCJ2ZXJpZnlTdGF0ZW1lbnRBc1N1YnByb29mQXNzZXJ0aW9uIiwidmVyaWZ5U3RhdGVtZW50QXNDb250YWluZWRBc3NlcnRpb24iLCJ2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcnMiLCJzb21lIiwidmVyaWZ5U3RhdGVtZW50RnVuY3Rpb24iLCJkZWJ1ZyIsInZlcmlmeUFoZWFkIiwic3RhbmRhbG9uZVN0YXRlbWVudFZlcmlmaWVkIiwidmVyaWZpZWRBaGVhZCIsIk9iamVjdCIsImFzc2lnbiIsIm1ldGFMZXZlbFVuaWZpZXIiLCJzdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvclVuaWZpZXIiLCJzdGF0ZW1lbnRWZXJpZmllZEFzTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZVZlcmlmaWVkIiwidmVyaWZ5TWV0YXZhcmlhYmxlIiwic3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvblZlcmlmaWVkIiwidmVyaWZ5U3Vic3RpdHV0aW9uIiwic3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5IiwiZXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlWZXJpZmllZCIsInZlcmlmeUVxdWFsaXR5Iiwic3RhdGVtZW50VmVyaWZpZWRBc0p1ZGdlbWVudCIsImp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnRWZXJpZmllZCIsInZlcmlmeUp1ZGdlbWVudCIsInN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uIiwidHlwZUFzc2VydGlvbk5vZGUiLCJ0eXBlQXNzZXJ0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlUeXBlQXNzZXJ0aW9uIiwic3RhdGVtZW50VmVyaWZpZWRBc0RlZmluZWRBc3NlcnRpb24iLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImRlZmluZWRBc3NlcnRpb25WZXJpZmllZCIsInZlcmlmeURlZmluZWRBc3NlcnRpb24iLCJzdGF0ZW1lbnRWZXJpZmllZEFzU3VicHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJzdWJwcm9vZkFzc2VydGlvblZlcmlmaWVkIiwidmVyaWZ5U3VicHJvb2ZBc3NlcnRpb24iLCJzdGF0ZW1lbnRWZXJpZmllZEFzQ29udGFpbmVkQXNzZXJ0aW9uIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImNvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkIiwidmVyaWZ5Q29udGFpbmVkQXNzZXJ0aW9uIiwic3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnMiLCJjb21iaW5hdG9ycyIsImdldENvbWJpbmF0b3JzIiwiYnJhY2tldGVkQ29tYmluYXRvciIsImNvbWJpbmF0b3IiLCJzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yIiwidmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3IiLCJjb21iaW5hdG9yU3RyaW5nIiwiZ2V0U3RyaW5nIiwiY29tYmluYXRvclN0YXRlbWVudE5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJub25UZXJtaW5hbE5vZGVVbmlmeSIsInVuaWZ5Tm9uVGVybWluYWxOb2RlIiwibWV0YXZhcmlhYmxlIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGFUeXBlTmFtZSIsImdldE1ldGFUeXBlTmFtZSIsIlNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5vZGUiLCJ0ZXJtVmFyaWFibGVOb2RlIiwidGVybVZhcmlhYmxlUHJlc2VudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBMkZBLE9BQStCO2VBQS9COztJQWhDZ0JBLHlCQUF5QjtlQUF6QkE7OzsrREF6RFc7Z0VBQ0M7Z0VBQ0M7Z0VBQ0c7MkRBQ0E7OERBQ0c7K0RBQ0M7Z0VBQ0M7aUZBQ1M7cUJBRXBCOzZCQUNlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpDLElBQU1DLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQyw0QkFDOUJDLG9CQUFvQkQsSUFBQUEsZ0JBQVMsRUFBQyx5QkFDOUJFLHFCQUFxQkYsSUFBQUEsZ0JBQVMsRUFBQywwQkFDL0JHLHdCQUF3QkgsSUFBQUEsZ0JBQVMsRUFBQyw2QkFDbENJLHdCQUF3QkosSUFB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