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
    verifyStatementAgainstCombinator: function() {
        return verifyStatementAgainstCombinator;
    },
    verifyStatementAgainstCombinators: function() {
        return verifyStatementAgainstCombinators;
    }
});
var _equality = /*#__PURE__*/ _interop_require_default(require("../equality"));
var _term = /*#__PURE__*/ _interop_require_wildcard(require("../verify/term"));
var _equality1 = /*#__PURE__*/ _interop_require_default(require("../ocmbinator/equality"));
var _bracketed = /*#__PURE__*/ _interop_require_default(require("../ocmbinator/bracketed"));
var _typeInference = /*#__PURE__*/ _interop_require_default(require("../verify/typeInference"));
var _type = /*#__PURE__*/ _interop_require_default(require("../verify/assertion/type"));
var _statement = /*#__PURE__*/ _interop_require_default(require("../verifier/nodes/statement"));
var _query = require("../utilities/query");
var _array = require("../utilities/array");
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
var typeInferenceNodeQuery = (0, _query.nodeQuery)("/statement/typeInference!"), typeAssertionNodeQuery = (0, _query.nodeQuery)("/statement/typeAssertion!");
function verifyStatement(statementNode, assignments, derived, context, verifyAhead) {
    var statementVerified;
    var statementString = context.nodeAsString(statementNode);
    context.trace("Verifying the '".concat(statementString, "' statement..."), statementNode);
    var verifyStatementFunctions = [
        verifyStatementAsEquality,
        verifyStatementAsTypeInference,
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
        var statementVerifiedAgainstCombinator = verifyStatementAgainstCombinator(statementNode, combinator, context, function() {
            var verifiedAhead = verifyAhead();
            return verifiedAhead;
        });
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
function verifyStatementAsTypeInference(statementNode, assignments, derived, context, verifyAhead) {
    var statementVerifiedAsTypeInference = false;
    var typeInferenceNode = typeInferenceNodeQuery(statementNode);
    if (typeInferenceNode !== null) {
        var statementString = context.nodeAsString(statementNode);
        context.trace("Verifying the '".concat(statementString, "' statement as a type inference..."), statementNode);
        if (!derived) {
            var typeInferenceString = context.nodeAsString(typeInferenceNode);
            context.info("The '".concat(typeInferenceString, "' type inference can only be derived."), typeInferenceNode);
        } else {
            var typeInferenceVerified = (0, _typeInference.default)(typeInferenceNode, context, verifyAhead);
            statementVerifiedAsTypeInference = typeInferenceVerified; ///
        }
        if (statementVerifiedAsTypeInference) {
            context.debug("...verified the '".concat(statementString, "' statement as a type inference."), statementNode);
        }
    }
    return statementVerifiedAsTypeInference;
}
function verifyStatementAsTypeAssertion(statementNode, assignments, derived, context, verifyAhead) {
    var statementVerifiedAsTypeAssertion = false;
    var typeAssertionNode = typeAssertionNodeQuery(statementNode);
    if (typeAssertionNode !== null) {
        var statementString = context.nodeAsString(statementNode);
        context.trace("Verifying the '".concat(statementString, "' statement as a type assertion..."), statementNode);
        var typeAssertionVerified = (0, _type.default)(typeAssertionNode, assignments, derived, context, verifyAhead);
        statementVerifiedAsTypeAssertion = typeAssertionVerified; ///
        if (statementVerifiedAsTypeAssertion) {
            context.debug("...verified the '".concat(statementString, "' statement as a type assertion."), statementNode);
        }
    }
    return statementVerifiedAsTypeAssertion;
}
function verifyStatementAsEquality(statementNode, assignments, derived, context, verifyAhead) {
    var statementVerifiedAsEquality = false;
    var combinator = _equality1.default, statementVerifiedAgainstCombinator = verifyStatementAgainstCombinator(statementNode, combinator, context, verifyAhead);
    if (statementVerifiedAgainstCombinator) {
        var statementString = context.nodeAsString(statementNode);
        context.trace("Verifying the '".concat(statementString, "' statement as an equality..."), statementNode);
        var equality = _equality.default.fromStatementNode(statementNode);
        if (derived) {
            var equalities = context.getEqualities(), equalityVerified = equality.verify(equalities, context, verifyAhead);
            statementVerifiedAsEquality = equalityVerified; ///
        } else {
            var variables = [], leftTermNode = equality.getLeftTermNode(), rightTermNode = equality.getRightTermNode(), leftTermVerifiedAsVariable = (0, _term.verifyTermAsVariable)(leftTermNode, variables, context, verifyAhead), rightTermVerifiedAsVariable = (0, _term.verifyTermAsVariable)(rightTermNode, variables, context, verifyAhead);
            if (leftTermVerifiedAsVariable && rightTermVerifiedAsVariable) {
                var firstVariable = (0, _array.first)(variables), secondVariable = (0, _array.second)(variables), leftVariable = firstVariable, rightVariable = secondVariable, leftVariableName = leftVariable.getName(), leftVariableType = leftVariable.getType(), rightVariableName = rightVariable.getName(), rightVariableType = rightVariable.getType(), leftVariableTypeEqualToOrSubTypeOfOfSuperTypeOfRightVariableType = leftVariableType.isEqualToOrSubTypeOfOfSuperTypeOf(rightVariableType);
                if (!leftVariableTypeEqualToOrSubTypeOfOfSuperTypeOfRightVariableType) {
                    var leftVariableTypeName = leftVariableType.getName(), rightVariableTypeName = rightVariableType.getName();
                    context.info("The left '".concat(leftVariableName, "' variable's '").concat(leftVariableTypeName, "' type is not equal to, a sub-type of nor a super-type of the right '").concat(rightVariableName, "' variable's '").concat(rightVariableTypeName, "' type."), statementNode);
                } else {
                    statementVerifiedAsEquality = true;
                }
            } else if (leftTermVerifiedAsVariable) {
                var types = [];
                (0, _term.default)(rightTermNode, types, context, verifyAhead);
                var firstType = (0, _array.first)(types), firstVariable1 = (0, _array.first)(variables), leftVariable1 = firstVariable1, rightTermType = firstType, leftVariableName1 = leftVariable1.getName(), leftVariableType1 = leftVariable1.getType(), leftVariableTypeEqualToOrSuperTypeOfRightTermType = leftVariableType1.isEqualToOrSuperTypeOf(rightTermType);
                if (!leftVariableTypeEqualToOrSuperTypeOfRightTermType) {
                    var rightTermString = context.nodeAsString(rightTermNode), rightTermTypeName = rightTermType.getName(), leftVariableTypeName1 = leftVariableType1.getName();
                    context.info("The left '".concat(leftVariableName1, "' variable's '").concat(leftVariableTypeName1, "' type is not equal to or a super-type of the right '").concat(rightTermString, "' term's '").concat(rightTermTypeName, "' type."), statementNode);
                } else {
                    statementVerifiedAsEquality = true;
                }
            } else if (rightTermVerifiedAsVariable) {
                var types1 = [];
                (0, _term.default)(leftTermNode, types1, context, verifyAhead);
                var firstType1 = (0, _array.first)(types1), firstVariable2 = (0, _array.first)(variables), leftTermType = firstType1, rightVariable1 = firstVariable2, rightVariableName1 = rightVariable1.getName(), rightVariableType1 = rightVariable1.getType(), rightVariableTypeEqualToOrSuperTypeOfRightTermType = rightVariableType1.isEqualToOrSuperTypeOf(leftTermType);
                if (!rightVariableTypeEqualToOrSuperTypeOfRightTermType) {
                    var leftTermString = context.nodeAsString(leftTermNode), leftTermTypeName = leftTermType.getName(), rightVariableTypeName1 = rightVariableType1.getName();
                    context.info("The right '".concat(rightVariableName1, "' variable's '").concat(rightVariableTypeName1, "' type is not equal to or a super-type of the left '").concat(leftTermString, "' term's '").concat(leftTermTypeName, "' type."), statementNode);
                } else {
                    statementVerifiedAsEquality = true;
                }
            } else {
                var types2 = [];
                (0, _term.default)(leftTermNode, types2, context, verifyAhead);
                (0, _term.default)(rightTermNode, types2, context, verifyAhead);
                var firstType2 = (0, _array.first)(types2), secondType = (0, _array.second)(types2), leftTermType1 = firstType2, rightTermType1 = secondType, leftTermTypeEqualToOrSubTypeOfOfSuperTypeOf = leftTermType1.isEqualToOrSubTypeOfOfSuperTypeOf(rightTermType1);
                if (!leftTermTypeEqualToOrSubTypeOfOfSuperTypeOf) {
                    var leftTermString1 = context.nodeAsString(leftTermNode), rightTermString1 = context.nodeAsString(rightTermNode), leftTermTypeName1 = leftTermType1.getName(), rightTermTypeName1 = rightTermType1.getName();
                    context.info("The left '".concat(leftTermString1, "' term's '").concat(leftTermTypeName1, "' type is not equal to, a sub-type of or a super-type of the right '").concat(rightTermString1, "' term's '").concat(rightTermTypeName1, "' type."), statementNode);
                } else {
                    statementVerifiedAsEquality = true;
                }
            }
        }
        if (statementVerifiedAsEquality) {
            context.debug("...verified the '".concat(statementString, "' statement as an equality."), statementNode);
        }
    }
    return statementVerifiedAsEquality;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRXF1YWxpdHkgZnJvbSBcIi4uL2VxdWFsaXR5XCI7XG5pbXBvcnQgdmVyaWZ5VGVybSBmcm9tIFwiLi4vdmVyaWZ5L3Rlcm1cIjtcbmltcG9ydCBlcXVhbGl0eUNvbWJpbmF0b3IgZnJvbSBcIi4uL29jbWJpbmF0b3IvZXF1YWxpdHlcIjtcbmltcG9ydCBicmFja2V0ZWRDb21iaW5hdG9yIGZyb20gXCIuLi9vY21iaW5hdG9yL2JyYWNrZXRlZFwiO1xuaW1wb3J0IHZlcmlmeVR5cGVJbmZlcmVuY2UgZnJvbSBcIi4uL3ZlcmlmeS90eXBlSW5mZXJlbmNlXCI7XG5pbXBvcnQgdmVyaWZ5VHlwZUFzc2VydGlvbiBmcm9tIFwiLi4vdmVyaWZ5L2Fzc2VydGlvbi90eXBlXCI7XG5pbXBvcnQgc3RhdGVtZW50Tm9kZXNWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXIvbm9kZXMvc3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyB2ZXJpZnlUZXJtQXNWYXJpYWJsZSB9IGZyb20gXCIuLi92ZXJpZnkvdGVybVwiO1xuXG5jb25zdCB0eXBlSW5mZXJlbmNlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC90eXBlSW5mZXJlbmNlIVwiKSxcbiAgICAgIHR5cGVBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3R5cGVBc3NlcnRpb24hXCIpO1xuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZDtcblxuICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gIGNvbnN0IHZlcmlmeVN0YXRlbWVudEZ1bmN0aW9ucyA9IFtcbiAgICB2ZXJpZnlTdGF0ZW1lbnRBc0VxdWFsaXR5LFxuICAgIHZlcmlmeVN0YXRlbWVudEFzVHlwZUluZmVyZW5jZSxcbiAgICB2ZXJpZnlTdGF0ZW1lbnRBc1R5cGVBc3NlcnRpb24sXG4gICAgdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JzXG4gIF07XG5cbiAgc3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlTdGF0ZW1lbnRGdW5jdGlvbnMuc29tZSgodmVyaWZ5U3RhdGVtZW50RnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVN0YXRlbWVudEZ1bmN0aW9uKHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZDtcbn1cblxuT2JqZWN0LmFzc2lnbih2ZXJpZnlTdGF0ZW1lbnQsIHtcbiAgc3RhdGVtZW50Tm9kZXNWZXJpZmllclxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHZlcmlmeVN0YXRlbWVudDtcblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9ycyhzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzO1xuXG4gIGxldCBjb21iaW5hdG9ycyA9IGNvbnRleHQuZ2V0Q29tYmluYXRvcnMoKTtcblxuICBjb21iaW5hdG9ycyA9IFsgLy8vXG4gICAgYnJhY2tldGVkQ29tYmluYXRvcixcbiAgICAuLi5jb21iaW5hdG9yc1xuICBdO1xuXG4gIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzID0gY29tYmluYXRvcnMuc29tZSgoY29tYmluYXRvcikgPT4ge1xuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IgPSB2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcihzdGF0ZW1lbnROb2RlLCBjb21iaW5hdG9yLCBjb250ZXh0LCAoKSA9PiB7XG4gICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgfSk7XG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcihzdGF0ZW1lbnROb2RlLCBjb21iaW5hdG9yLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcjtcblxuICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgY29tYmluYXRvclN0cmluZyA9IGNvbWJpbmF0b3IuZ2V0U3RyaW5nKCk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYWdhaW5zdCB0aGUgJyR7Y29tYmluYXRvclN0cmluZ30nIGNvbWJpbmF0b3IuLi5gLCBzdGF0ZW1lbnROb2RlKTtcblxuICBjb25zdCBjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSA9IGNvbWJpbmF0b3IuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICBub25UZXJtaW5hbE5vZGVBID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gc3RhdGVtZW50Tm9kZXNWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgIC8vL1xuXG4gIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yKSB7XG4gICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhZ2FpbnN0IHRoZSAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvci5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBc1R5cGVJbmZlcmVuY2Uoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUluZmVyZW5jZSA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGVJbmZlcmVuY2VOb2RlID0gdHlwZUluZmVyZW5jZU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAodHlwZUluZmVyZW5jZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgdHlwZSBpbmZlcmVuY2UuLi5gLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmICghZGVyaXZlZCkge1xuICAgICAgY29uc3QgdHlwZUluZmVyZW5jZVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVJbmZlcmVuY2VOb2RlKTtcblxuICAgICAgY29udGV4dC5pbmZvKGBUaGUgJyR7dHlwZUluZmVyZW5jZVN0cmluZ30nIHR5cGUgaW5mZXJlbmNlIGNhbiBvbmx5IGJlIGRlcml2ZWQuYCwgdHlwZUluZmVyZW5jZU5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlSW5mZXJlbmNlVmVyaWZpZWQgPSB2ZXJpZnlUeXBlSW5mZXJlbmNlKHR5cGVJbmZlcmVuY2VOb2RlLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgIHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlSW5mZXJlbmNlID0gdHlwZUluZmVyZW5jZVZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBc1R5cGVJbmZlcmVuY2UpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSB0eXBlIGluZmVyZW5jZS5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBc1R5cGVJbmZlcmVuY2U7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbihzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgY29uc3QgdHlwZUFzc2VydGlvbk5vZGUgPSB0eXBlQXNzZXJ0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gIGlmICh0eXBlQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSB0eXBlIGFzc2VydGlvbi4uLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29uc3QgdHlwZUFzc2VydGlvblZlcmlmaWVkID0gdmVyaWZ5VHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uID0gdHlwZUFzc2VydGlvblZlcmlmaWVkOyAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHR5cGUgYXNzZXJ0aW9uLmAsIHN0YXRlbWVudE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QXNFcXVhbGl0eShzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IGZhbHNlO1xuXG4gIGNvbnN0IGNvbWJpbmF0b3IgPSBlcXVhbGl0eUNvbWJpbmF0b3IsICAvLy9cbiAgICAgICAgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvciA9IHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yKHN0YXRlbWVudE5vZGUsIGNvbWJpbmF0b3IsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcikge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYW4gZXF1YWxpdHkuLi5gLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIGNvbnN0IGVxdWFsaXR5ID0gRXF1YWxpdHkuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAoZGVyaXZlZCkge1xuICAgICAgY29uc3QgZXF1YWxpdGllcyA9IGNvbnRleHQuZ2V0RXF1YWxpdGllcygpLFxuICAgICAgICAgICAgZXF1YWxpdHlWZXJpZmllZCA9IGVxdWFsaXR5LnZlcmlmeShlcXVhbGl0aWVzLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgIHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IGVxdWFsaXR5VmVyaWZpZWQ7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgICBsZWZ0VGVybU5vZGUgPSBlcXVhbGl0eS5nZXRMZWZ0VGVybU5vZGUoKSxcbiAgICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSBlcXVhbGl0eS5nZXRSaWdodFRlcm1Ob2RlKCksXG4gICAgICAgICAgICBsZWZ0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IHZlcmlmeVRlcm1Bc1ZhcmlhYmxlKGxlZnRUZXJtTm9kZSwgdmFyaWFibGVzLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCksXG4gICAgICAgICAgICByaWdodFRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSB2ZXJpZnlUZXJtQXNWYXJpYWJsZShyaWdodFRlcm1Ob2RlLCB2YXJpYWJsZXMsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgaWYgKGxlZnRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlICYmIHJpZ2h0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSkge1xuICAgICAgICBjb25zdCBmaXJzdFZhcmlhYmxlID0gZmlyc3QodmFyaWFibGVzKSxcbiAgICAgICAgICAgICAgc2Vjb25kVmFyaWFibGUgPSBzZWNvbmQodmFyaWFibGVzKSxcbiAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlID0gZmlyc3RWYXJpYWJsZSwgLy8vXG4gICAgICAgICAgICAgIHJpZ2h0VmFyaWFibGUgPSBzZWNvbmRWYXJpYWJsZSwgLy8vXG4gICAgICAgICAgICAgIGxlZnRWYXJpYWJsZU5hbWUgPSBsZWZ0VmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICBsZWZ0VmFyaWFibGVUeXBlID0gbGVmdFZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZU5hbWUgPSByaWdodFZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZVR5cGUgPSByaWdodFZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2ZSaWdodFZhcmlhYmxlVHlwZSA9IGxlZnRWYXJpYWJsZVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mKHJpZ2h0VmFyaWFibGVUeXBlKTtcblxuICAgICAgICBpZiAoIWxlZnRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mUmlnaHRWYXJpYWJsZVR5cGUpIHtcbiAgICAgICAgICBjb25zdCBsZWZ0VmFyaWFibGVUeXBlTmFtZSA9IGxlZnRWYXJpYWJsZVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIHJpZ2h0VmFyaWFibGVUeXBlTmFtZSA9IHJpZ2h0VmFyaWFibGVUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgIGNvbnRleHQuaW5mbyhgVGhlIGxlZnQgJyR7bGVmdFZhcmlhYmxlTmFtZX0nIHZhcmlhYmxlJ3MgJyR7bGVmdFZhcmlhYmxlVHlwZU5hbWV9JyB0eXBlIGlzIG5vdCBlcXVhbCB0bywgYSBzdWItdHlwZSBvZiBub3IgYSBzdXBlci10eXBlIG9mIHRoZSByaWdodCAnJHtyaWdodFZhcmlhYmxlTmFtZX0nIHZhcmlhYmxlJ3MgJyR7cmlnaHRWYXJpYWJsZVR5cGVOYW1lfScgdHlwZS5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGxlZnRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlKSB7XG4gICAgICAgIGNvbnN0IHR5cGVzID0gW107XG5cbiAgICAgICAgdmVyaWZ5VGVybShyaWdodFRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgIGNvbnN0IGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICAgICAgZmlyc3RWYXJpYWJsZSA9IGZpcnN0KHZhcmlhYmxlcyksXG4gICAgICAgICAgICAgIGxlZnRWYXJpYWJsZSA9IGZpcnN0VmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICByaWdodFRlcm1UeXBlID0gZmlyc3RUeXBlLCAgLy8vXG4gICAgICAgICAgICAgIGxlZnRWYXJpYWJsZU5hbWUgPSBsZWZ0VmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICBsZWZ0VmFyaWFibGVUeXBlID0gbGVmdFZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSA9IGxlZnRWYXJpYWJsZVR5cGUuaXNFcXVhbFRvT3JTdXBlclR5cGVPZihyaWdodFRlcm1UeXBlKTtcblxuICAgICAgICBpZiAoIWxlZnRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlJpZ2h0VGVybVR5cGUpIHtcbiAgICAgICAgICBjb25zdCByaWdodFRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhyaWdodFRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgICByaWdodFRlcm1UeXBlTmFtZSA9IHJpZ2h0VGVybVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIGxlZnRWYXJpYWJsZVR5cGVOYW1lID0gbGVmdFZhcmlhYmxlVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICBjb250ZXh0LmluZm8oYFRoZSBsZWZ0ICcke2xlZnRWYXJpYWJsZU5hbWV9JyB2YXJpYWJsZSdzICcke2xlZnRWYXJpYWJsZVR5cGVOYW1lfScgdHlwZSBpcyBub3QgZXF1YWwgdG8gb3IgYSBzdXBlci10eXBlIG9mIHRoZSByaWdodCAnJHtyaWdodFRlcm1TdHJpbmd9JyB0ZXJtJ3MgJyR7cmlnaHRUZXJtVHlwZU5hbWV9JyB0eXBlLmAsIHN0YXRlbWVudE5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocmlnaHRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlKSB7XG4gICAgICAgIGNvbnN0IHR5cGVzID0gW107XG5cbiAgICAgICAgdmVyaWZ5VGVybShsZWZ0VGVybU5vZGUsIHR5cGVzLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgY29uc3QgZmlyc3RUeXBlID0gZmlyc3QodHlwZXMpLFxuICAgICAgICAgICAgICBmaXJzdFZhcmlhYmxlID0gZmlyc3QodmFyaWFibGVzKSxcbiAgICAgICAgICAgICAgbGVmdFRlcm1UeXBlID0gZmlyc3RUeXBlLCAgLy8vXG4gICAgICAgICAgICAgIHJpZ2h0VmFyaWFibGUgPSBmaXJzdFZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZU5hbWUgPSByaWdodFZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZVR5cGUgPSByaWdodFZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlJpZ2h0VGVybVR5cGUgPSByaWdodFZhcmlhYmxlVHlwZS5pc0VxdWFsVG9PclN1cGVyVHlwZU9mKGxlZnRUZXJtVHlwZSk7XG5cbiAgICAgICAgaWYgKCFyaWdodFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSkge1xuICAgICAgICAgIGNvbnN0IGxlZnRUZXJtU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobGVmdFRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgICBsZWZ0VGVybVR5cGVOYW1lID0gbGVmdFRlcm1UeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICByaWdodFZhcmlhYmxlVHlwZU5hbWUgPSByaWdodFZhcmlhYmxlVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICBjb250ZXh0LmluZm8oYFRoZSByaWdodCAnJHtyaWdodFZhcmlhYmxlTmFtZX0nIHZhcmlhYmxlJ3MgJyR7cmlnaHRWYXJpYWJsZVR5cGVOYW1lfScgdHlwZSBpcyBub3QgZXF1YWwgdG8gb3IgYSBzdXBlci10eXBlIG9mIHRoZSBsZWZ0ICcke2xlZnRUZXJtU3RyaW5nfScgdGVybSdzICcke2xlZnRUZXJtVHlwZU5hbWV9JyB0eXBlLmAsIHN0YXRlbWVudE5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHR5cGVzID0gW107XG5cbiAgICAgICAgdmVyaWZ5VGVybShsZWZ0VGVybU5vZGUsIHR5cGVzLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgdmVyaWZ5VGVybShyaWdodFRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgIGNvbnN0IGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICAgICAgc2Vjb25kVHlwZSA9IHNlY29uZCh0eXBlcyksXG4gICAgICAgICAgICAgIGxlZnRUZXJtVHlwZSA9IGZpcnN0VHlwZSwgLy8vXG4gICAgICAgICAgICAgIHJpZ2h0VGVybVR5cGUgPSBzZWNvbmRUeXBlLCAvLy9cbiAgICAgICAgICAgICAgbGVmdFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mT2ZTdXBlclR5cGVPZiA9IGxlZnRUZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2YocmlnaHRUZXJtVHlwZSk7XG5cbiAgICAgICAgaWYgKCFsZWZ0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mKSB7XG4gICAgICAgICAgY29uc3QgbGVmdFRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhsZWZ0VGVybU5vZGUpLFxuICAgICAgICAgICAgICAgIHJpZ2h0VGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHJpZ2h0VGVybU5vZGUpLFxuICAgICAgICAgICAgICAgIGxlZnRUZXJtVHlwZU5hbWUgPSBsZWZ0VGVybVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIHJpZ2h0VGVybVR5cGVOYW1lID0gcmlnaHRUZXJtVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICBjb250ZXh0LmluZm8oYFRoZSBsZWZ0ICcke2xlZnRUZXJtU3RyaW5nfScgdGVybSdzICcke2xlZnRUZXJtVHlwZU5hbWV9JyB0eXBlIGlzIG5vdCBlcXVhbCB0bywgYSBzdWItdHlwZSBvZiBvciBhIHN1cGVyLXR5cGUgb2YgdGhlIHJpZ2h0ICcke3JpZ2h0VGVybVN0cmluZ30nIHRlcm0ncyAnJHtyaWdodFRlcm1UeXBlTmFtZX0nIHR5cGUuYCwgc3RhdGVtZW50Tm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYW4gZXF1YWxpdHkuYCwgc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eTtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvciIsInZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9ycyIsInR5cGVJbmZlcmVuY2VOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlQXNzZXJ0aW9uTm9kZVF1ZXJ5IiwidmVyaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsImFzc2lnbm1lbnRzIiwiZGVyaXZlZCIsImNvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsInN0YXRlbWVudFZlcmlmaWVkIiwic3RhdGVtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJ2ZXJpZnlTdGF0ZW1lbnRGdW5jdGlvbnMiLCJ2ZXJpZnlTdGF0ZW1lbnRBc0VxdWFsaXR5IiwidmVyaWZ5U3RhdGVtZW50QXNUeXBlSW5mZXJlbmNlIiwidmVyaWZ5U3RhdGVtZW50QXNUeXBlQXNzZXJ0aW9uIiwic29tZSIsInZlcmlmeVN0YXRlbWVudEZ1bmN0aW9uIiwiZGVidWciLCJPYmplY3QiLCJhc3NpZ24iLCJzdGF0ZW1lbnROb2Rlc1ZlcmlmaWVyIiwic3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnMiLCJjb21iaW5hdG9ycyIsImdldENvbWJpbmF0b3JzIiwiYnJhY2tldGVkQ29tYmluYXRvciIsImNvbWJpbmF0b3IiLCJzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yIiwidmVyaWZpZWRBaGVhZCIsImNvbWJpbmF0b3JTdHJpbmciLCJnZXRTdHJpbmciLCJjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwic3RhdGVtZW50VmVyaWZpZWRBc1R5cGVJbmZlcmVuY2UiLCJ0eXBlSW5mZXJlbmNlTm9kZSIsInR5cGVJbmZlcmVuY2VTdHJpbmciLCJpbmZvIiwidHlwZUluZmVyZW5jZVZlcmlmaWVkIiwidmVyaWZ5VHlwZUluZmVyZW5jZSIsInN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uIiwidHlwZUFzc2VydGlvbk5vZGUiLCJ0eXBlQXNzZXJ0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlUeXBlQXNzZXJ0aW9uIiwic3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5IiwiZXF1YWxpdHlDb21iaW5hdG9yIiwiZXF1YWxpdHkiLCJFcXVhbGl0eSIsImZyb21TdGF0ZW1lbnROb2RlIiwiZXF1YWxpdGllcyIsImdldEVxdWFsaXRpZXMiLCJlcXVhbGl0eVZlcmlmaWVkIiwidmVyaWZ5IiwidmFyaWFibGVzIiwibGVmdFRlcm1Ob2RlIiwiZ2V0TGVmdFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsImdldFJpZ2h0VGVybU5vZGUiLCJsZWZ0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSIsInZlcmlmeVRlcm1Bc1ZhcmlhYmxlIiwicmlnaHRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlIiwiZmlyc3RWYXJpYWJsZSIsImZpcnN0Iiwic2Vjb25kVmFyaWFibGUiLCJzZWNvbmQiLCJsZWZ0VmFyaWFibGUiLCJyaWdodFZhcmlhYmxlIiwibGVmdFZhcmlhYmxlTmFtZSIsImdldE5hbWUiLCJsZWZ0VmFyaWFibGVUeXBlIiwiZ2V0VHlwZSIsInJpZ2h0VmFyaWFibGVOYW1lIiwicmlnaHRWYXJpYWJsZVR5cGUiLCJsZWZ0VmFyaWFibGVUeXBlRXF1YWxUb09yU3ViVHlwZU9mT2ZTdXBlclR5cGVPZlJpZ2h0VmFyaWFibGVUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mIiwibGVmdFZhcmlhYmxlVHlwZU5hbWUiLCJyaWdodFZhcmlhYmxlVHlwZU5hbWUiLCJ0eXBlcyIsInZlcmlmeVRlcm0iLCJmaXJzdFR5cGUiLCJyaWdodFRlcm1UeXBlIiwibGVmdFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSIsImlzRXF1YWxUb09yU3VwZXJUeXBlT2YiLCJyaWdodFRlcm1TdHJpbmciLCJyaWdodFRlcm1UeXBlTmFtZSIsImxlZnRUZXJtVHlwZSIsInJpZ2h0VmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZSaWdodFRlcm1UeXBlIiwibGVmdFRlcm1TdHJpbmciLCJsZWZ0VGVybVR5cGVOYW1lIiwic2Vjb25kVHlwZSIsImxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2YiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWtEQSxPQUErQjtlQUEvQjs7SUEyQmdCQSxnQ0FBZ0M7ZUFBaENBOztJQXpC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