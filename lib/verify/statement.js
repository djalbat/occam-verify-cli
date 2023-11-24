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
    verifyStatementAgainstCombinators: function() {
        return verifyStatementAgainstCombinators;
    }
});
var _equality = /*#__PURE__*/ _interop_require_default(require("../equality"));
var _terms = /*#__PURE__*/ _interop_require_default(require("../verify/terms"));
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
var typeAssertionNodeQuery = (0, _query.nodeQuery)("/statement/typeAssertion!");
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
Object.assign(verifyStatement, {
    statementNodesVerifier: _statement.default
});
var _default = verifyStatement;
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
function verifyStatementAsEquality(statementNode, assignments, derived, context, verifyAhead) {
    var statementVerifiedAsEquality = false;
    var equality = _equality.default.fromStatementNode(statementNode);
    if (equality !== null) {
        var statementString = context.nodeAsString(statementNode);
        context.trace("Verifying the '".concat(statementString, "' statement as an equality..."), statementNode);
        var verifyStatementAsEqualityFunctions = [
            verifyStatementAsDerivedEquality,
            verifyStatementAsStandaloneEquality
        ];
        statementVerifiedAsEquality = verifyStatementAsEqualityFunctions.some(function(verifyStatementAsEqualityFunction) {
            var statementVerified = verifyStatementAsEqualityFunction(statementNode, equality, derived, context, verifyAhead);
            if (statementVerified) {
                return true;
            }
        });
        if (statementVerifiedAsEquality) {
            context.debug("...verified the '".concat(statementString, "' statement as an equality."), statementNode);
        }
    }
    return statementVerifiedAsEquality;
}
function verifyStatementAsDerivedEquality(statementNode, equality, derived, context, verifyAhead) {
    var verifiedStatementAsDerivedEquality = false;
    if (derived) {
        var statementString = context.nodeAsString(statementNode);
        context.trace("Verifying the '".concat(statementString, "' derived equality..."), statementNode);
        var equalities = context.getEqualities(), equalityVerified = equality.verify(equalities, context, verifyAhead);
        verifiedStatementAsDerivedEquality = equalityVerified; ///
        if (verifiedStatementAsDerivedEquality) {
            context.debug("...verified the '".concat(statementString, "' derived equality."), statementNode);
        }
    }
    return verifiedStatementAsDerivedEquality;
}
function verifyStatementAsStandaloneEquality(statementNode, equality, derived, context, verifyAhead) {
    var statementVerifiedAsStandaloneEquality = false;
    if (!derived) {
        var statementString = context.nodeAsString(statementNode);
        context.trace("Verifying the '".concat(statementString, "' statement as a standalone equality..."), statementNode);
        var leftTermNode = equality.getLeftTermNode(), rightTermNode = equality.getRightTermNode(), termsVerified = (0, _terms.default)(leftTermNode, rightTermNode, context, verifyAhead);
        statementVerifiedAsStandaloneEquality = termsVerified; ///
        if (statementVerifiedAsStandaloneEquality) {
            context.trace("...verified the '".concat(statementString, "' statement as a standalone equality."), statementNode);
        }
    }
    return statementVerifiedAsStandaloneEquality;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRXF1YWxpdHkgZnJvbSBcIi4uL2VxdWFsaXR5XCI7XG5pbXBvcnQgdmVyaWZ5VGVybXMgZnJvbSBcIi4uL3ZlcmlmeS90ZXJtc1wiO1xuaW1wb3J0IGJyYWNrZXRlZENvbWJpbmF0b3IgZnJvbSBcIi4uL29jbWJpbmF0b3IvYnJhY2tldGVkXCI7XG5pbXBvcnQgdmVyaWZ5VHlwZUFzc2VydGlvbiBmcm9tIFwiLi4vdmVyaWZ5L3R5cGVBc3NlcnRpb25cIjtcbmltcG9ydCBzdGF0ZW1lbnROb2Rlc1ZlcmlmaWVyIGZyb20gXCIuLi92ZXJpZmllci9ub2Rlcy9zdGF0ZW1lbnRcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0eXBlQXNzZXJ0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC90eXBlQXNzZXJ0aW9uIVwiKTtcblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWQ7XG5cbiAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gLCBzdGF0ZW1lbnROb2RlKTtcblxuICBjb25zdCB2ZXJpZnlTdGF0ZW1lbnRGdW5jdGlvbnMgPSBbXG4gICAgdmVyaWZ5U3RhdGVtZW50QXNFcXVhbGl0eSxcbiAgICB2ZXJpZnlTdGF0ZW1lbnRBc1R5cGVBc3NlcnRpb24sXG4gICAgdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JzXG4gIF07XG5cbiAgc3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlTdGF0ZW1lbnRGdW5jdGlvbnMuc29tZSgodmVyaWZ5U3RhdGVtZW50RnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVN0YXRlbWVudEZ1bmN0aW9uKHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZDtcbn1cblxuT2JqZWN0LmFzc2lnbih2ZXJpZnlTdGF0ZW1lbnQsIHtcbiAgc3RhdGVtZW50Tm9kZXNWZXJpZmllclxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHZlcmlmeVN0YXRlbWVudDtcblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9ycyhzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzO1xuXG4gIGxldCBjb21iaW5hdG9ycyA9IGNvbnRleHQuZ2V0Q29tYmluYXRvcnMoKTtcblxuICBjb21iaW5hdG9ycyA9IFsgLy8vXG4gICAgYnJhY2tldGVkQ29tYmluYXRvcixcbiAgICAuLi5jb21iaW5hdG9yc1xuICBdO1xuXG4gIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzID0gY29tYmluYXRvcnMuc29tZSgoY29tYmluYXRvcikgPT4ge1xuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IgPSB2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcihzdGF0ZW1lbnROb2RlLCBjb21iaW5hdG9yLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnM7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yKHN0YXRlbWVudE5vZGUsIGNvbWJpbmF0b3IsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yO1xuXG4gIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICBjb21iaW5hdG9yU3RyaW5nID0gY29tYmluYXRvci5nZXRTdHJpbmcoKTtcblxuICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhZ2FpbnN0IHRoZSAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvci4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gIGNvbnN0IGNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlID0gY29tYmluYXRvci5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZUEgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IGNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBzdGF0ZW1lbnROb2Rlc1ZlcmlmaWVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvciA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAgLy8vXG5cbiAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IpIHtcbiAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFnYWluc3QgdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yLmAsIHN0YXRlbWVudE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3I7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbihzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgY29uc3QgdHlwZUFzc2VydGlvbk5vZGUgPSB0eXBlQXNzZXJ0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gIGlmICh0eXBlQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSB0eXBlIGFzc2VydGlvbi4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29uc3QgdHlwZUFzc2VydGlvblZlcmlmaWVkID0gdmVyaWZ5VHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uID0gdHlwZUFzc2VydGlvblZlcmlmaWVkOyAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHR5cGUgYXNzZXJ0aW9uLmAsIHN0YXRlbWVudE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QXNFcXVhbGl0eShzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IGZhbHNlO1xuXG4gIGNvbnN0IGVxdWFsaXR5ID0gRXF1YWxpdHkuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKGVxdWFsaXR5ICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhbiBlcXVhbGl0eS4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29uc3QgdmVyaWZ5U3RhdGVtZW50QXNFcXVhbGl0eUZ1bmN0aW9ucyA9IFtcbiAgICAgIHZlcmlmeVN0YXRlbWVudEFzRGVyaXZlZEVxdWFsaXR5LFxuICAgICAgdmVyaWZ5U3RhdGVtZW50QXNTdGFuZGFsb25lRXF1YWxpdHlcbiAgICBdO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5ID0gdmVyaWZ5U3RhdGVtZW50QXNFcXVhbGl0eUZ1bmN0aW9ucy5zb21lKCh2ZXJpZnlTdGF0ZW1lbnRBc0VxdWFsaXR5RnVuY3Rpb24pID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5U3RhdGVtZW50QXNFcXVhbGl0eUZ1bmN0aW9uKHN0YXRlbWVudE5vZGUsIGVxdWFsaXR5LCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYW4gZXF1YWxpdHkuYCwgc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eTtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QXNEZXJpdmVkRXF1YWxpdHkoc3RhdGVtZW50Tm9kZSwgZXF1YWxpdHksIGRlcml2ZWQsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB2ZXJpZmllZFN0YXRlbWVudEFzRGVyaXZlZEVxdWFsaXR5ID0gZmFsc2U7XG5cbiAgaWYgKGRlcml2ZWQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgZGVyaXZlZCBlcXVhbGl0eS4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29uc3QgZXF1YWxpdGllcyA9IGNvbnRleHQuZ2V0RXF1YWxpdGllcygpLFxuICAgICAgICAgIGVxdWFsaXR5VmVyaWZpZWQgPSBlcXVhbGl0eS52ZXJpZnkoZXF1YWxpdGllcywgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgdmVyaWZpZWRTdGF0ZW1lbnRBc0Rlcml2ZWRFcXVhbGl0eSA9IGVxdWFsaXR5VmVyaWZpZWQ7ICAvLy9cblxuICAgIGlmICh2ZXJpZmllZFN0YXRlbWVudEFzRGVyaXZlZEVxdWFsaXR5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgZGVyaXZlZCBlcXVhbGl0eS5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmVyaWZpZWRTdGF0ZW1lbnRBc0Rlcml2ZWRFcXVhbGl0eTtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QXNTdGFuZGFsb25lRXF1YWxpdHkoc3RhdGVtZW50Tm9kZSwgZXF1YWxpdHksIGRlcml2ZWQsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFzU3RhbmRhbG9uZUVxdWFsaXR5ID0gZmFsc2U7XG5cbiAgaWYgKCFkZXJpdmVkKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHN0YW5kYWxvbmUgZXF1YWxpdHkuLi5gLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIGNvbnN0IGxlZnRUZXJtTm9kZSA9IGVxdWFsaXR5LmdldExlZnRUZXJtTm9kZSgpLFxuICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSBlcXVhbGl0eS5nZXRSaWdodFRlcm1Ob2RlKCksXG4gICAgICAgICAgdGVybXNWZXJpZmllZCA9IHZlcmlmeVRlcm1zKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWRBc1N0YW5kYWxvbmVFcXVhbGl0eSA9IHRlcm1zVmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQXNTdGFuZGFsb25lRXF1YWxpdHkpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBzdGFuZGFsb25lIGVxdWFsaXR5LmAsIHN0YXRlbWVudE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFzU3RhbmRhbG9uZUVxdWFsaXR5O1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9ycyIsInR5cGVBc3NlcnRpb25Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2ZXJpZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwiYXNzaWdubWVudHMiLCJkZXJpdmVkIiwiY29udGV4dCIsInZlcmlmeUFoZWFkIiwic3RhdGVtZW50VmVyaWZpZWQiLCJzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInZlcmlmeVN0YXRlbWVudEZ1bmN0aW9ucyIsInZlcmlmeVN0YXRlbWVudEFzRXF1YWxpdHkiLCJ2ZXJpZnlTdGF0ZW1lbnRBc1R5cGVBc3NlcnRpb24iLCJzb21lIiwidmVyaWZ5U3RhdGVtZW50RnVuY3Rpb24iLCJkZWJ1ZyIsIk9iamVjdCIsImFzc2lnbiIsInN0YXRlbWVudE5vZGVzVmVyaWZpZXIiLCJzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9ycyIsImNvbWJpbmF0b3JzIiwiZ2V0Q29tYmluYXRvcnMiLCJicmFja2V0ZWRDb21iaW5hdG9yIiwiY29tYmluYXRvciIsInN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IiLCJ2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvciIsImNvbWJpbmF0b3JTdHJpbmciLCJnZXRTdHJpbmciLCJjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwic3RhdGVtZW50VmVyaWZpZWRBc1R5cGVBc3NlcnRpb24iLCJ0eXBlQXNzZXJ0aW9uTm9kZSIsInR5cGVBc3NlcnRpb25WZXJpZmllZCIsInZlcmlmeVR5cGVBc3NlcnRpb24iLCJzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkiLCJlcXVhbGl0eSIsIkVxdWFsaXR5IiwiZnJvbVN0YXRlbWVudE5vZGUiLCJ2ZXJpZnlTdGF0ZW1lbnRBc0VxdWFsaXR5RnVuY3Rpb25zIiwidmVyaWZ5U3RhdGVtZW50QXNEZXJpdmVkRXF1YWxpdHkiLCJ2ZXJpZnlTdGF0ZW1lbnRBc1N0YW5kYWxvbmVFcXVhbGl0eSIsInZlcmlmeVN0YXRlbWVudEFzRXF1YWxpdHlGdW5jdGlvbiIsInZlcmlmaWVkU3RhdGVtZW50QXNEZXJpdmVkRXF1YWxpdHkiLCJlcXVhbGl0aWVzIiwiZ2V0RXF1YWxpdGllcyIsImVxdWFsaXR5VmVyaWZpZWQiLCJ2ZXJpZnkiLCJzdGF0ZW1lbnRWZXJpZmllZEFzU3RhbmRhbG9uZUVxdWFsaXR5IiwibGVmdFRlcm1Ob2RlIiwiZ2V0TGVmdFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsImdldFJpZ2h0VGVybU5vZGUiLCJ0ZXJtc1ZlcmlmaWVkIiwidmVyaWZ5VGVybXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQTRDQSxPQUErQjtlQUEvQjs7SUFFZ0JBLGlDQUFpQztlQUFqQ0E7OzsrREE1Q0s7NERBQ0c7Z0VBQ1E7b0VBQ0E7Z0VBQ0c7cUJBRVQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUMseUJBQXlCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXpDLFNBQVNDLGdCQUFnQkMsYUFBYSxFQUFFQyxXQUFXLEVBQUVDLE9B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