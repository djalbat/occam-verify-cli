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
var _containment = /*#__PURE__*/ _interop_require_wildcard(require("../verify/containment"));
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
var equalityNodeQuery = (0, _query.nodeQuery)("/statement/equality!"), statementNodeQuery = (0, _query.nodeQuery)("/statement/statement!"), containmentNodeQuery = (0, _query.nodeQuery)("/statement/containment!"), typeAssertionNodeQuery = (0, _query.nodeQuery)("/statement/typeAssertion!");
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
    var statementVerifiedWithContainment = false;
    var containmentNode = containmentNodeQuery(statementNode);
    if (containmentNode !== null) {
        statementNode = statementNodeQuery(statementNode); ///
        var statementString = context.nodeAsString(statementNode), containmentVariableNode = (0, _containment.containmentVariableNodeQuery)(containmentNode), containmentVariableString = context.nodeAsString(containmentVariableNode);
        context.trace("Verifying that the '".concat(containmentVariableString, "' is either contained in or omitted from the '").concat(statementString, "' statement..."), statementNode);
        var containmentVerified = (0, _containment.default)(containmentNode, statementNode);
        if (containmentVerified) {
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
            statementVerifiedWithContainment = statementVerified; ///
        }
        if (statementVerifiedWithContainment) {
            context.debug("...verified that '".concat(containmentVariableString, "' is either contained in or omitted from the '").concat(statementString, "' statement."), statementNode);
        }
    }
    return statementVerifiedWithContainment;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5RXF1YWxpdHkgZnJvbSBcIi4uL3ZlcmlmeS9lcXVhbGl0eVwiO1xuaW1wb3J0IHZlcmlmeUNvbnRhaW5tZW50IGZyb20gXCIuLi92ZXJpZnkvY29udGFpbm1lbnRcIjtcbmltcG9ydCBicmFja2V0ZWRDb21iaW5hdG9yIGZyb20gXCIuLi9vY21iaW5hdG9yL2JyYWNrZXRlZFwiO1xuaW1wb3J0IHZlcmlmeVR5cGVBc3NlcnRpb24gZnJvbSBcIi4uL3ZlcmlmeS90eXBlQXNzZXJ0aW9uXCI7XG5pbXBvcnQgc3RhdGVtZW50Tm9kZXNWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXIvbm9kZXMvc3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGNvbnRhaW5tZW50VmFyaWFibGVOb2RlUXVlcnkgfSBmcm9tIFwiLi4vdmVyaWZ5L2NvbnRhaW5tZW50XCI7XG5cbmNvbnN0IGVxdWFsaXR5Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9lcXVhbGl0eSFcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3N0YXRlbWVudCFcIiksXG4gICAgICBjb250YWlubWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvY29udGFpbm1lbnQhXCIpLFxuICAgICAgdHlwZUFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvdHlwZUFzc2VydGlvbiFcIik7XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkO1xuXG4gIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgY29uc3QgdmVyaWZ5U3RhdGVtZW50RnVuY3Rpb25zID0gW1xuICAgIHZlcmlmeVN0YXRlbWVudEFzRXF1YWxpdHksXG4gICAgdmVyaWZ5U3RhdGVtZW50QXNUeXBlQXNzZXJ0aW9uLFxuICAgIHZlcmlmeVN0YXRlbWVudFdpdGhDb250YWlubWVudCxcbiAgICB2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcnNcbiAgXTtcblxuICBzdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVN0YXRlbWVudEZ1bmN0aW9ucy5zb21lKCh2ZXJpZnlTdGF0ZW1lbnRGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5U3RhdGVtZW50RnVuY3Rpb24oc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBpZiAoc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmAsIHN0YXRlbWVudE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5U3RhbmRhbG9uZVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHN0YW5kYWxvbmVTdGF0ZW1lbnRWZXJpZmllZDtcblxuICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhbmRhbG9uZSBzdGF0ZW1lbnQuLi5gLCBzdGF0ZW1lbnROb2RlKTtcblxuICBjb25zdCBjb250ZXh0ID0gZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgZGVyaXZlZCA9IGZhbHNlLFxuICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gIHN0YW5kYWxvbmVTdGF0ZW1lbnRWZXJpZmllZCA9IHN0YXRlbWVudFZlcmlmaWVkOyAgLy8vXG5cbiAgaWYgKHN0YW5kYWxvbmVTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhbmRhbG9uZSBzdGF0ZW1lbnQuYCwgc3RhdGVtZW50Tm9kZSk7XG4gIH1cblxuICByZXR1cm4gc3RhbmRhbG9uZVN0YXRlbWVudFZlcmlmaWVkO1xufVxuXG5PYmplY3QuYXNzaWduKHN0YXRlbWVudE5vZGVzVmVyaWZpZXIsIHtcbiAgdmVyaWZ5U3RhdGVtZW50XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdmVyaWZ5U3RhdGVtZW50O1xuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBc0VxdWFsaXR5KHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5ID0gZmFsc2U7XG5cbiAgY29uc3QgZXF1YWxpdHlOb2RlID0gZXF1YWxpdHlOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKGVxdWFsaXR5Tm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYW4gZXF1YWxpdHkuLi5gLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIGNvbnN0IGVxdWFsaXR5VmVyaWZpZWQgPSB2ZXJpZnlFcXVhbGl0eShlcXVhbGl0eU5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkgPSBlcXVhbGl0eVZlcmlmaWVkOyAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYW4gZXF1YWxpdHkuYCwgc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eTtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QXNUeXBlQXNzZXJ0aW9uKHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBc1R5cGVBc3NlcnRpb24gPSBmYWxzZTtcblxuICBjb25zdCB0eXBlQXNzZXJ0aW9uTm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKHR5cGVBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHR5cGUgYXNzZXJ0aW9uLi4uYCwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlUeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWRBc1R5cGVBc3NlcnRpb24gPSB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgdHlwZSBhc3NlcnRpb24uYCwgc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRXaXRoQ29udGFpbm1lbnQoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZFdpdGhDb250YWlubWVudCA9IGZhbHNlO1xuXG4gIGNvbnN0IGNvbnRhaW5tZW50Tm9kZSA9IGNvbnRhaW5tZW50Tm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gIGlmIChjb250YWlubWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpOyAgLy8vXG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBjb250YWlubWVudFZhcmlhYmxlTm9kZSA9IGNvbnRhaW5tZW50VmFyaWFibGVOb2RlUXVlcnkoY29udGFpbm1lbnROb2RlKSxcbiAgICAgICAgICBjb250YWlubWVudFZhcmlhYmxlU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoY29udGFpbm1lbnRWYXJpYWJsZU5vZGUpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoYXQgdGhlICcke2NvbnRhaW5tZW50VmFyaWFibGVTdHJpbmd9JyBpcyBlaXRoZXIgY29udGFpbmVkIGluIG9yIG9taXR0ZWQgZnJvbSB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb25zdCBjb250YWlubWVudFZlcmlmaWVkID0gdmVyaWZ5Q29udGFpbm1lbnQoY29udGFpbm1lbnROb2RlLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChjb250YWlubWVudFZlcmlmaWVkKSB7XG4gICAgICBjb25zdCB2ZXJpZnlTdGF0ZW1lbnRGdW5jdGlvbnMgPSBbXG4gICAgICAgIHZlcmlmeVN0YXRlbWVudEFzRXF1YWxpdHksXG4gICAgICAgIHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yc1xuICAgICAgXTtcblxuICAgICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlTdGF0ZW1lbnRGdW5jdGlvbnMuc29tZSgodmVyaWZ5U3RhdGVtZW50RnVuY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgZGVyaXZlZCA9IGZhbHNlLFxuICAgICAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVN0YXRlbWVudEZ1bmN0aW9uKHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBzdGF0ZW1lbnRWZXJpZmllZFdpdGhDb250YWlubWVudCA9IHN0YXRlbWVudFZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWRXaXRoQ29udGFpbm1lbnQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoYXQgJyR7Y29udGFpbm1lbnRWYXJpYWJsZVN0cmluZ30nIGlzIGVpdGhlciBjb250YWluZWQgaW4gb3Igb21pdHRlZCBmcm9tIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCwgc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkV2l0aENvbnRhaW5tZW50O1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcnMoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9ycztcblxuICBsZXQgY29tYmluYXRvcnMgPSBjb250ZXh0LmdldENvbWJpbmF0b3JzKCk7XG5cbiAgY29tYmluYXRvcnMgPSBbIC8vL1xuICAgIGJyYWNrZXRlZENvbWJpbmF0b3IsXG4gICAgLi4uY29tYmluYXRvcnNcbiAgXTtcblxuICBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzLnNvbWUoKGNvbWJpbmF0b3IpID0+IHtcbiAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yID0gdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3Ioc3RhdGVtZW50Tm9kZSwgY29tYmluYXRvciwgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcihzdGF0ZW1lbnROb2RlLCBjb21iaW5hdG9yLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcjtcblxuICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgY29tYmluYXRvclN0cmluZyA9IGNvbWJpbmF0b3IuZ2V0U3RyaW5nKCk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYWdhaW5zdCB0aGUgJyR7Y29tYmluYXRvclN0cmluZ30nIGNvbWJpbmF0b3IuLi5gLCBzdGF0ZW1lbnROb2RlKTtcblxuICBjb25zdCBjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSA9IGNvbWJpbmF0b3IuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICBub25UZXJtaW5hbE5vZGVBID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gc3RhdGVtZW50Tm9kZXNWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgIC8vL1xuXG4gIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yKSB7XG4gICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhZ2FpbnN0IHRoZSAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvci5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVN0YW5kYWxvbmVTdGF0ZW1lbnQiLCJlcXVhbGl0eU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsImNvbnRhaW5tZW50Tm9kZVF1ZXJ5IiwidHlwZUFzc2VydGlvbk5vZGVRdWVyeSIsInZlcmlmeVN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJhc3NpZ25tZW50cyIsImRlcml2ZWQiLCJjb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJzdGF0ZW1lbnRWZXJpZmllZCIsInN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwidmVyaWZ5U3RhdGVtZW50RnVuY3Rpb25zIiwidmVyaWZ5U3RhdGVtZW50QXNFcXVhbGl0eSIsInZlcmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbiIsInZlcmlmeVN0YXRlbWVudFdpdGhDb250YWlubWVudCIsInZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9ycyIsInNvbWUiLCJ2ZXJpZnlTdGF0ZW1lbnRGdW5jdGlvbiIsImRlYnVnIiwiZmlsZUNvbnRleHQiLCJzdGFuZGFsb25lU3RhdGVtZW50VmVyaWZpZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJzdGF0ZW1lbnROb2Rlc1ZlcmlmaWVyIiwic3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5IiwiZXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlWZXJpZmllZCIsInZlcmlmeUVxdWFsaXR5Iiwic3RhdGVtZW50VmVyaWZpZWRBc1R5cGVBc3NlcnRpb24iLCJ0eXBlQXNzZXJ0aW9uTm9kZSIsInR5cGVBc3NlcnRpb25WZXJpZmllZCIsInZlcmlmeVR5cGVBc3NlcnRpb24iLCJzdGF0ZW1lbnRWZXJpZmllZFdpdGhDb250YWlubWVudCIsImNvbnRhaW5tZW50Tm9kZSIsImNvbnRhaW5tZW50VmFyaWFibGVOb2RlIiwiY29udGFpbm1lbnRWYXJpYWJsZU5vZGVRdWVyeSIsImNvbnRhaW5tZW50VmFyaWFibGVTdHJpbmciLCJjb250YWlubWVudFZlcmlmaWVkIiwidmVyaWZ5Q29udGFpbm1lbnQiLCJzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9ycyIsImNvbWJpbmF0b3JzIiwiZ2V0Q29tYmluYXRvcnMiLCJicmFja2V0ZWRDb21iaW5hdG9yIiwiY29tYmluYXRvciIsInN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IiLCJ2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvciIsImNvbWJpbmF0b3JTdHJpbmciLCJnZXRTdHJpbmciLCJjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFzRUEsT0FBK0I7ZUFBL0I7O0lBekJnQkEseUJBQXlCO2VBQXpCQTs7OytEQTNDVzttRUFDRztnRUFDRTtvRUFDQTtnRUFDRztxQkFFVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzFCLElBQU1DLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQyx5QkFDOUJDLHFCQUFxQkQsSUFBQUEsZ0JBQVMsRUFBQywwQkFDL0JFLHVCQUF1QkYsSUFBQUEsZ0JBQVMsRUFBQyw0QkFDakNHLHlCQUF5QkgsSUFBQUEsZ0JBQVMsRUFBQztBQUV6QyxTQUFTSSxnQkFBZ0JDLGFBQWEsRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsV0FBVztJQUNoRixJQUFJQztJQUVKLElBQU1DLGtCQUFrQkgsUUFBUUksWUFBWSxDQUFDUDtJQUU3Q0csUUFBUUssS0FBSyxDQUFDLEFBQUMsa0JBQWlDLE9BQWhCRixpQkFBZ0IsbUJBQWlCTjtJQUVqRSxJQUFNUywyQkFBMkI7UUFDL0JDO1FBQ0FDO1FBQ0FDO1FBQ0FDO0tBQ0Q7SUFFRFIsb0JBQW9CSSx5QkFBeUJLLElBQUksQ0FBQyxTQUFDQztRQUNqRCxJQUFNVixvQkFBb0JVLHdCQUF3QmYsZUFBZUMsYUFBYUMsU0FBU0MsU0FBU0M7UUFFaEcsSUFBSUMsbUJBQW1CO1lBQ3JCLE9BQU87UUFDVDtJQUNGO0lBRUEsSUFBSUEsbUJBQW1CO1FBQ3JCRixRQUFRYSxLQUFLLENBQUMsQUFBQyxvQkFBbUMsT0FBaEJWLGlCQUFnQixpQkFBZU47SUFDbkU7SUFFQSxPQUFPSztBQUNUO0FBRU8sU0FBU1osMEJBQTBCTyxhQUFhLEVBQUVpQixXQUFXLEVBQUViLFdBQVc7SUFDL0UsSUFBSWM7SUFFSixJQUFNWixrQkFBa0JXLFlBQVlWLFlBQVksQ0FBQ1A7SUFFakRpQixZQUFZVCxLQUFLLENBQUMsQUFBQyxrQkFBaUMsT0FBaEJGLGlCQUFnQiw4QkFBNEJOO0lBRWhGLElBQU1HLFVBQVVjLGFBQ1ZmLFVBQVUsT0FDVkQsY0FBYyxFQUFFLEVBQ2hCSSxvQkFBb0JOLGdCQUFnQkMsZUFBZUMsYUFBYUMsU0FBU0MsU0FBU0M7SUFFeEZjLDhCQUE4QmIsbUJBQW9CLEdBQUc7SUFFckQsSUFBSWEsNkJBQTZCO1FBQy9CRCxZQUFZRCxLQUFLLENBQUMsQUFBQyxvQkFBbUMsT0FBaEJWLGlCQUFnQiw0QkFBMEJOO0lBQ2xGO0lBRUEsT0FBT2tCO0FBQ1Q7QUFFQUMsT0FBT0MsTUFBTSxDQUFDQyxrQkFBc0IsRUFBRTtJQUNwQ3RCLGlCQUFBQTtBQUNGO0lBRUEsV0FBZUE7QUFFZixTQUFTVywwQkFBMEJWLGFBQWEsRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsV0FBVztJQUMxRixJQUFJa0IsOEJBQThCO0lBRWxDLElBQU1DLGVBQWU3QixrQkFBa0JNO0lBRXZDLElBQUl1QixpQkFBaUIsTUFBTTtRQUN6QixJQUFNakIsa0JBQWtCSCxRQUFRSSxZQUFZLENBQUNQO1FBRTdDRyxRQUFRSyxLQUFLLENBQUMsQUFBQyxrQkFBaUMsT0FBaEJGLGlCQUFnQixrQ0FBZ0NOO1FBRWhGLElBQU13QixtQkFBbUJDLElBQUFBLGlCQUFjLEVBQUNGLGNBQWN0QixhQUFhQyxTQUFTQyxTQUFTQztRQUVyRmtCLDhCQUE4QkUsa0JBQWtCLEdBQUc7UUFFbkQsSUFBSUYsNkJBQTZCO1lBQy9CbkIsUUFBUWEsS0FBSyxDQUFDLEFBQUMsb0JBQW1DLE9BQWhCVixpQkFBZ0IsZ0NBQThCTjtRQUNsRjtJQUNGO0lBRUEsT0FBT3NCO0FBQ1Q7QUFFQSxTQUFTWCwrQkFBK0JYLGFBQWEsRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsV0FBVztJQUMvRixJQUFJc0IsbUNBQW1DO0lBRXZDLElBQU1DLG9CQUFvQjdCLHVCQUF1QkU7SUFFakQsSUFBSTJCLHNCQUFzQixNQUFNO1FBQzlCLElBQU1yQixrQkFBa0JILFFBQVFJLFlBQVksQ0FBQ1A7UUFFN0NHLFFBQVFLLEtBQUssQ0FBQyxBQUFDLGtCQUFpQyxPQUFoQkYsaUJBQWdCLHVDQUFxQ047UUFFckYsSUFBTTRCLHdCQUF3QkMsSUFBQUEsc0JBQW1CLEVBQUNGLG1CQUFtQjFCLGFBQWFDLFNBQVNDLFNBQVNDO1FBRXBHc0IsbUNBQW1DRSx1QkFBdUIsR0FBRztRQUU3RCxJQUFJRixrQ0FBa0M7WUFDcEN2QixRQUFRYSxLQUFLLENBQUMsQUFBQyxvQkFBbUMsT0FBaEJWLGlCQUFnQixxQ0FBbUNOO1FBQ3ZGO0lBQ0Y7SUFFQSxPQUFPMEI7QUFDVDtBQUVBLFNBQVNkLCtCQUErQlosYUFBYSxFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxXQUFXO0lBQy9GLElBQUkwQixtQ0FBbUM7SUFFdkMsSUFBTUMsa0JBQWtCbEMscUJBQXFCRztJQUU3QyxJQUFJK0Isb0JBQW9CLE1BQU07UUFDNUIvQixnQkFBZ0JKLG1CQUFtQkksZ0JBQWlCLEdBQUc7UUFFdkQsSUFBTU0sa0JBQWtCSCxRQUFRSSxZQUFZLENBQUNQLGdCQUN2Q2dDLDBCQUEwQkMsSUFBQUEseUNBQTRCLEVBQUNGLGtCQUN2REcsNEJBQTRCL0IsUUFBUUksWUFBWSxDQUFDeUI7UUFFdkQ3QixRQUFRSyxLQUFLLENBQUMsQUFBQyx1QkFBZ0dGLE9BQTFFNEIsMkJBQTBCLGtEQUFnRSxPQUFoQjVCLGlCQUFnQixtQkFBaUJOO1FBRWhKLElBQU1tQyxzQkFBc0JDLElBQUFBLG9CQUFpQixFQUFDTCxpQkFBaUIvQjtRQUUvRCxJQUFJbUMscUJBQXFCO1lBQ3ZCLElBQU0xQiwyQkFBMkI7Z0JBQy9CQztnQkFDQUc7YUFDRDtZQUVELElBQU1SLG9CQUFvQkkseUJBQXlCSyxJQUFJLENBQUMsU0FBQ0M7Z0JBQ3ZELElBQU1iLFVBQVUsT0FDVkQsY0FBYyxFQUFFLEVBQ2hCSSxvQkFBb0JVLHdCQUF3QmYsZUFBZUMsYUFBYUMsU0FBU0MsU0FBU0M7Z0JBRWhHLElBQUlDLG1CQUFtQjtvQkFDckIsT0FBTztnQkFDVDtZQUNGO1lBRUF5QixtQ0FBbUN6QixtQkFBbUIsR0FBRztRQUMzRDtRQUVBLElBQUl5QixrQ0FBa0M7WUFDcEMzQixRQUFRYSxLQUFLLENBQUMsQUFBQyxxQkFBOEZWLE9BQTFFNEIsMkJBQTBCLGtEQUFnRSxPQUFoQjVCLGlCQUFnQixpQkFBZU47UUFDOUk7SUFDRjtJQUVBLE9BQU84QjtBQUNUO0FBRUEsU0FBU2pCLGtDQUFrQ2IsYUFBYSxFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxXQUFXO0lBQ2xHLElBQUlpQztJQUVKLElBQUlDLGNBQWNuQyxRQUFRb0MsY0FBYztJQUV4Q0QsY0FBYztRQUNaRSxrQkFBbUI7S0FFcEIsQ0FIYSxPQUVaLHFCQUFHRjtJQUdMRCxzQ0FBc0NDLFlBQVl4QixJQUFJLENBQUMsU0FBQzJCO1FBQ3RELElBQU1DLHFDQUFxQ0MsaUNBQWlDM0MsZUFBZXlDLFlBQVl0QyxTQUFTQztRQUVoSCxJQUFJc0Msb0NBQW9DO1lBQ3RDLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT0w7QUFDVDtBQUVBLFNBQVNNLGlDQUFpQzNDLGFBQWEsRUFBRXlDLFVBQVUsRUFBRXRDLE9BQU8sRUFBRUMsV0FBVztJQUN2RixJQUFJc0M7SUFFSixJQUFNcEMsa0JBQWtCSCxRQUFRSSxZQUFZLENBQUNQLGdCQUN2QzRDLG1CQUFtQkgsV0FBV0ksU0FBUztJQUU3QzFDLFFBQVFLLEtBQUssQ0FBQyxBQUFDLGtCQUE0RG9DLE9BQTNDdEMsaUJBQWdCLDZCQUE0QyxPQUFqQnNDLGtCQUFpQixvQkFBa0I1QztJQUU5RyxJQUFNOEMsMEJBQTBCTCxXQUFXTSxnQkFBZ0IsSUFDckRDLG1CQUFtQmhELGVBQ25CaUQsbUJBQW1CSCx5QkFDbkJJLDBCQUEwQjdCLGtCQUFzQixDQUFDOEIscUJBQXFCLENBQUNILGtCQUFrQkMsa0JBQWtCOUMsU0FBU0M7SUFFMUhzQyxxQ0FBcUNRLHlCQUEwQixHQUFHO0lBRWxFLElBQUlSLG9DQUFvQztRQUN0Q3ZDLFFBQVFhLEtBQUssQ0FBQyxBQUFDLG9CQUE4RDRCLE9BQTNDdEMsaUJBQWdCLDZCQUE0QyxPQUFqQnNDLGtCQUFpQixrQkFBZ0I1QztJQUNoSDtJQUVBLE9BQU8wQztBQUNUIn0=