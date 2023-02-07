"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyStatement;
    }
});
var _equality = /*#__PURE__*/ _interopRequireDefault(require("../equality"));
var _variable = /*#__PURE__*/ _interopRequireDefault(require("../variable"));
var _assignment = /*#__PURE__*/ _interopRequireDefault(require("../assignment"));
var _term = /*#__PURE__*/ _interopRequireWildcard(require("../verify/term"));
var _statement = /*#__PURE__*/ _interopRequireDefault(require("../verifier/statement"));
var _equality1 = /*#__PURE__*/ _interopRequireDefault(require("../ocmbinator/equality"));
var _bracketed = /*#__PURE__*/ _interopRequireDefault(require("../ocmbinator/bracketed"));
var _type = /*#__PURE__*/ _interopRequireDefault(require("../verify/assertion/type"));
var _array = require("../utilities/array");
var _query = require("../utilities/query");
var _string = require("../utilities/string");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _interopRequireDefault(obj) {
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
function _interopRequireWildcard(obj, nodeInterop) {
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
    var newObj = {};
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
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var leftTermNodeQuery = (0, _query.nodeQuery)("/statement/argument[0]/term!"), rightTermNodeQuery = (0, _query.nodeQuery)("/statement/argument[1]/term!"), typeAssertionNodeQuery = (0, _query.nodeQuery)("/statement/typeAssertion!");
function verifyStatement(statementNode, assignments, derived, context) {
    var statementVerified = false;
    if (!statementVerified) {
        var statementVerifiedAgainstCombinators = verifyStatementAgainstCombinators(statementNode, context);
        statementVerified = statementVerifiedAgainstCombinators; ///
    }
    if (!statementVerified) {
        var statementVerifiedAsTypeAssertion = verifyStatementAsTypeAssertion(statementNode, assignments, derived, context);
        statementVerified = statementVerifiedAsTypeAssertion; ///
    }
    if (!statementVerified) {
        var statementVerifiedAsEquality = verifyStatementAsEquality(statementNode, assignments, derived, context);
        statementVerified = statementVerifiedAsEquality; //
    }
    return statementVerified;
}
function verifyStatementAgainstCombinators(statementNode, context) {
    var statementVerifiedAgainstCombinators = false;
    var combinators = context.getCombinators();
    combinators = [
        _bracketed.default
    ].concat(_toConsumableArray(combinators));
    var combinator = combinators.find(function(combinator) {
        var statementVerifiedAgainstCombinator = verifyStatementAgainstCombinator(statementNode, combinator, context);
        if (statementVerifiedAgainstCombinator) {
            return true;
        }
    }) || null;
    if (combinator !== null) {
        statementVerifiedAgainstCombinators = true;
    }
    return statementVerifiedAgainstCombinators;
}
function verifyStatementAgainstCombinator(statementNode, combinator, context) {
    var combinatorStatementNode = combinator.getStatementNode(), nonTerminalNodeA = statementNode, nonTerminalNodeB = combinatorStatementNode, substitutions = null, nodeVerified = _statement.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, context), statementVerifiedAgainstCombinator = nodeVerified; ///
    return statementVerifiedAgainstCombinator;
}
function verifyStatementAsTypeAssertion(statementNode, assignments, derived, context) {
    var statementVerifiedAsTypeAssertion = false;
    var typeAssertionNode = typeAssertionNodeQuery(statementNode);
    if (typeAssertionNode !== null) {
        var typeAssertionVerified = (0, _type.default)(typeAssertionNode, assignments, derived, context);
        statementVerifiedAsTypeAssertion = typeAssertionVerified; ///
    }
    return statementVerifiedAsTypeAssertion;
}
function verifyStatementAsEquality(statementNode, assignments, derived, context) {
    var statementVerifiedAsEquality = false;
    var statementString = context.nodeAsString(statementNode);
    var combinator = _equality1.default, statementVerifiedAgainstCombinator = verifyStatementAgainstCombinator(statementNode, combinator, context);
    if (statementVerifiedAgainstCombinator) {
        var leftTermNode = leftTermNodeQuery(statementNode), rightTermNode = rightTermNodeQuery(statementNode);
        if (derived) {
            var equality = _equality.default.fromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode), equalityEquates = equality.equate(context);
            statementVerifiedAsEquality = equalityEquates; ///
        } else {
            var types = [], variables = [], leftTermVerifiedAsVariable = (0, _term.verifyTermAsVariable)(leftTermNode, variables, context);
            if (leftTermVerifiedAsVariable) {
                (0, _term.default)(rightTermNode, types, context);
                var firstVariable = (0, _array.first)(variables), leftVariable = firstVariable, firstType = (0, _array.first)(types), rightTermType = firstType, leftVariableType = leftVariable.getType(), leftVariableName = leftVariable.getName(), leftVariableTypeEqualToOrSuperTypeOfRightTermType = leftVariableType.isEqualToOrSuperTypeOf(rightTermType);
                if (!leftVariableTypeEqualToOrSuperTypeOfRightTermType) {
                    var rightTermString = (0, _string.nodeAsString)(rightTermNode), rightTermTypeName = rightTermType.getName(), leftVariableTypeName = leftVariableType.getName();
                    context.error("The left '".concat(leftVariableName, "' variable's '").concat(leftVariableTypeName, "' type is not equal to or a super-type of the right '").concat(rightTermString, "' term's '").concat(rightTermTypeName, "' type."), statementNode);
                } else {
                    var type = leftVariableType, name = leftVariableName, termNode = rightTermNode, variable = _variable.default.fromTypeNameAndTermNode(type, name, termNode), assignment = _assignment.default.fromVariable(variable);
                    assignments.push(assignment);
                    statementVerifiedAsEquality = true;
                }
            } else {
                var rightTermVerifiedAsVariable = (0, _term.verifyTermAsVariable)(rightTermNode, variables, context);
                if (rightTermVerifiedAsVariable) {
                    var firstVariable1 = (0, _array.first)(variables), rightVariable = firstVariable1, leftTermString = (0, _string.nodeAsString)(leftTermNode), rightVariableName = rightVariable.getName();
                    context.error("The left '".concat(leftTermString, "' term cannot be equated with the right '").concat(rightVariableName, "' variable."), statementNode);
                } else {
                    statementVerifiedAsEquality = true;
                }
            }
        }
    }
    if (statementVerifiedAsEquality) {
        context.info("Verified the '".concat(statementString, "' statement as an equality."), statementNode);
    }
    return statementVerifiedAsEquality;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRXF1YWxpdHkgZnJvbSBcIi4uL2VxdWFsaXR5XCI7XG5pbXBvcnQgVmFyaWFibGUgZnJvbSBcIi4uL3ZhcmlhYmxlXCI7XG5pbXBvcnQgQXNzaWdubWVudCBmcm9tIFwiLi4vYXNzaWdubWVudFwiO1xuaW1wb3J0IHZlcmlmeVRlcm0gZnJvbSBcIi4uL3ZlcmlmeS90ZXJtXCI7XG5pbXBvcnQgc3RhdGVtZW50VmVyaWZpZXIgZnJvbSBcIi4uL3ZlcmlmaWVyL3N0YXRlbWVudFwiO1xuaW1wb3J0IGVxdWFsaXR5Q29tYmluYXRvciBmcm9tIFwiLi4vb2NtYmluYXRvci9lcXVhbGl0eVwiO1xuaW1wb3J0IGJyYWNrZXRlZENvbWJpbmF0b3IgZnJvbSBcIi4uL29jbWJpbmF0b3IvYnJhY2tldGVkXCI7XG5pbXBvcnQgdmVyaWZ5VHlwZUFzc2VydGlvbiBmcm9tIFwiLi4vdmVyaWZ5L2Fzc2VydGlvbi90eXBlXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IHZlcmlmeVRlcm1Bc1ZhcmlhYmxlIH0gZnJvbSBcIi4uL3ZlcmlmeS90ZXJtXCI7XG5cbmNvbnN0IGxlZnRUZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9hcmd1bWVudFswXS90ZXJtIVwiKSxcbiAgICAgIHJpZ2h0VGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvYXJndW1lbnRbMV0vdGVybSFcIiksXG4gICAgICB0eXBlQXNzZXJ0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC90eXBlQXNzZXJ0aW9uIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmICghc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9ycyA9IHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9ycyhzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkID0gc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnM7ICAvLy9cbiAgfVxuXG4gIGlmICghc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbiA9IHZlcmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbihzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uOyAvLy9cbiAgfVxuXG4gIGlmICghc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkgPSB2ZXJpZnlTdGF0ZW1lbnRBc0VxdWFsaXR5KHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkID0gc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5OyAgLy9cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JzKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzID0gZmFsc2U7XG5cbiAgbGV0IGNvbWJpbmF0b3JzID0gY29udGV4dC5nZXRDb21iaW5hdG9ycygpO1xuXG4gIGNvbWJpbmF0b3JzID0gWyAvLy9cbiAgICBicmFja2V0ZWRDb21iaW5hdG9yLFxuICAgIC4uLmNvbWJpbmF0b3JzXG4gIF07XG5cbiAgY29uc3QgY29tYmluYXRvciA9IGNvbWJpbmF0b3JzLmZpbmQoKGNvbWJpbmF0b3IpID0+IHtcbiAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yID0gdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3Ioc3RhdGVtZW50Tm9kZSwgY29tYmluYXRvciwgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KSB8fCBudWxsO1xuXG4gIGlmIChjb21iaW5hdG9yICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnMgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcihzdGF0ZW1lbnROb2RlLCBjb21iaW5hdG9yLCBjb250ZXh0KSB7XG4gIGNvbnN0IGNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlID0gY29tYmluYXRvci5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZUEgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIHN1YnN0aXR1dGlvbnMgPSBudWxsLFxuICAgICAgICBub2RlVmVyaWZpZWQgPSBzdGF0ZW1lbnRWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCksXG4gICAgICAgIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IgPSBub2RlVmVyaWZpZWQ7ICAvLy9cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcjtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QXNUeXBlQXNzZXJ0aW9uKHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGVBc3NlcnRpb25Ob2RlID0gdHlwZUFzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAodHlwZUFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlUeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbiA9IHR5cGVBc3NlcnRpb25WZXJpZmllZDsgLy8vXG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBc1R5cGVBc3NlcnRpb247XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFzRXF1YWxpdHkoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IGZhbHNlO1xuXG4gIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gIGNvbnN0IGNvbWJpbmF0b3IgPSBlcXVhbGl0eUNvbWJpbmF0b3IsICAvLy9cbiAgICAgICAgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvciA9IHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yKHN0YXRlbWVudE5vZGUsIGNvbWJpbmF0b3IsIGNvbnRleHQpO1xuXG4gIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yKSB7XG4gICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHJpZ2h0VGVybU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChkZXJpdmVkKSB7XG4gICAgICBjb25zdCBlcXVhbGl0eSA9IEVxdWFsaXR5LmZyb21MZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSksXG4gICAgICAgICAgICBlcXVhbGl0eUVxdWF0ZXMgPSBlcXVhbGl0eS5lcXVhdGUoY29udGV4dCk7XG5cbiAgICAgIHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IGVxdWFsaXR5RXF1YXRlczsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlcyA9IFtdLFxuICAgICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgICBsZWZ0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IHZlcmlmeVRlcm1Bc1ZhcmlhYmxlKGxlZnRUZXJtTm9kZSwgdmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGxlZnRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlKSB7XG4gICAgICAgIHZlcmlmeVRlcm0ocmlnaHRUZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnN0IGZpcnN0VmFyaWFibGUgPSBmaXJzdCh2YXJpYWJsZXMpLFxuICAgICAgICAgICAgICBsZWZ0VmFyaWFibGUgPSBmaXJzdFZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgICAgZmlyc3RUeXBlID0gZmlyc3QodHlwZXMpLFxuICAgICAgICAgICAgICByaWdodFRlcm1UeXBlID0gZmlyc3RUeXBlLCAvLy9cbiAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlVHlwZSA9IGxlZnRWYXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgIGxlZnRWYXJpYWJsZU5hbWUgPSBsZWZ0VmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICBsZWZ0VmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZSaWdodFRlcm1UeXBlID0gbGVmdFZhcmlhYmxlVHlwZS5pc0VxdWFsVG9PclN1cGVyVHlwZU9mKHJpZ2h0VGVybVR5cGUpO1xuXG4gICAgICAgIGlmICghbGVmdFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSkge1xuICAgICAgICAgIGNvbnN0IHJpZ2h0VGVybVN0cmluZyA9IG5vZGVBc1N0cmluZyhyaWdodFRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgICByaWdodFRlcm1UeXBlTmFtZSA9IHJpZ2h0VGVybVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIGxlZnRWYXJpYWJsZVR5cGVOYW1lID0gbGVmdFZhcmlhYmxlVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICBjb250ZXh0LmVycm9yKGBUaGUgbGVmdCAnJHtsZWZ0VmFyaWFibGVOYW1lfScgdmFyaWFibGUncyAnJHtsZWZ0VmFyaWFibGVUeXBlTmFtZX0nIHR5cGUgaXMgbm90IGVxdWFsIHRvIG9yIGEgc3VwZXItdHlwZSBvZiB0aGUgcmlnaHQgJyR7cmlnaHRUZXJtU3RyaW5nfScgdGVybSdzICcke3JpZ2h0VGVybVR5cGVOYW1lfScgdHlwZS5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCB0eXBlID0gbGVmdFZhcmlhYmxlVHlwZSwgIC8vL1xuICAgICAgICAgICAgICAgIG5hbWUgPSBsZWZ0VmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgICAgICAgdGVybU5vZGUgPSByaWdodFRlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21UeXBlTmFtZUFuZFRlcm1Ob2RlKHR5cGUsIG5hbWUsIHRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgICBhc3NpZ25tZW50ID0gQXNzaWdubWVudC5mcm9tVmFyaWFibGUodmFyaWFibGUpO1xuXG4gICAgICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcblxuICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHJpZ2h0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IHZlcmlmeVRlcm1Bc1ZhcmlhYmxlKHJpZ2h0VGVybU5vZGUsIHZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHJpZ2h0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSkge1xuICAgICAgICAgIGNvbnN0IGZpcnN0VmFyaWFibGUgPSBmaXJzdCh2YXJpYWJsZXMpLFxuICAgICAgICAgICAgICAgIHJpZ2h0VmFyaWFibGUgPSBmaXJzdFZhcmlhYmxlLCAgLy8vXG4gICAgICAgICAgICAgICAgbGVmdFRlcm1TdHJpbmcgPSBub2RlQXNTdHJpbmcobGVmdFRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgICByaWdodFZhcmlhYmxlTmFtZSA9IHJpZ2h0VmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgY29udGV4dC5lcnJvcihgVGhlIGxlZnQgJyR7bGVmdFRlcm1TdHJpbmd9JyB0ZXJtIGNhbm5vdCBiZSBlcXVhdGVkIHdpdGggdGhlIHJpZ2h0ICcke3JpZ2h0VmFyaWFibGVOYW1lfScgdmFyaWFibGUuYCwgc3RhdGVtZW50Tm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkpIHtcbiAgICBjb250ZXh0LmluZm8oYFZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYW4gZXF1YWxpdHkuYCwgc3RhdGVtZW50Tm9kZSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5O1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVN0YXRlbWVudCIsImxlZnRUZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicmlnaHRUZXJtTm9kZVF1ZXJ5IiwidHlwZUFzc2VydGlvbk5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGUiLCJhc3NpZ25tZW50cyIsImRlcml2ZWQiLCJjb250ZXh0Iiwic3RhdGVtZW50VmVyaWZpZWQiLCJzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9ycyIsInZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9ycyIsInN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uIiwidmVyaWZ5U3RhdGVtZW50QXNUeXBlQXNzZXJ0aW9uIiwic3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5IiwidmVyaWZ5U3RhdGVtZW50QXNFcXVhbGl0eSIsImNvbWJpbmF0b3JzIiwiZ2V0Q29tYmluYXRvcnMiLCJicmFja2V0ZWRDb21iaW5hdG9yIiwiY29tYmluYXRvciIsImZpbmQiLCJzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yIiwidmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3IiLCJjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsInN1YnN0aXR1dGlvbnMiLCJub2RlVmVyaWZpZWQiLCJzdGF0ZW1lbnRWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsInR5cGVBc3NlcnRpb25Ob2RlIiwidHlwZUFzc2VydGlvblZlcmlmaWVkIiwidmVyaWZ5VHlwZUFzc2VydGlvbiIsInN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsImVxdWFsaXR5Q29tYmluYXRvciIsImxlZnRUZXJtTm9kZSIsInJpZ2h0VGVybU5vZGUiLCJlcXVhbGl0eSIsIkVxdWFsaXR5IiwiZnJvbUxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGUiLCJlcXVhbGl0eUVxdWF0ZXMiLCJlcXVhdGUiLCJ0eXBlcyIsInZhcmlhYmxlcyIsImxlZnRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlIiwidmVyaWZ5VGVybUFzVmFyaWFibGUiLCJ2ZXJpZnlUZXJtIiwiZmlyc3RWYXJpYWJsZSIsImZpcnN0IiwibGVmdFZhcmlhYmxlIiwiZmlyc3RUeXBlIiwicmlnaHRUZXJtVHlwZSIsImxlZnRWYXJpYWJsZVR5cGUiLCJnZXRUeXBlIiwibGVmdFZhcmlhYmxlTmFtZSIsImdldE5hbWUiLCJsZWZ0VmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZSaWdodFRlcm1UeXBlIiwiaXNFcXVhbFRvT3JTdXBlclR5cGVPZiIsInJpZ2h0VGVybVN0cmluZyIsInJpZ2h0VGVybVR5cGVOYW1lIiwibGVmdFZhcmlhYmxlVHlwZU5hbWUiLCJlcnJvciIsInR5cGUiLCJuYW1lIiwidGVybU5vZGUiLCJ2YXJpYWJsZSIsIlZhcmlhYmxlIiwiZnJvbVR5cGVOYW1lQW5kVGVybU5vZGUiLCJhc3NpZ25tZW50IiwiQXNzaWdubWVudCIsImZyb21WYXJpYWJsZSIsInB1c2giLCJyaWdodFRlcm1WZXJpZmllZEFzVmFyaWFibGUiLCJyaWdodFZhcmlhYmxlIiwibGVmdFRlcm1TdHJpbmciLCJyaWdodFZhcmlhYmxlTmFtZSIsImluZm8iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW9CQTs7O2VBQXdCQTs7OzZEQWxC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