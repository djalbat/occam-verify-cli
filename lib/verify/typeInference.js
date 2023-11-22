"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyTypeInference;
    }
});
var _equality = /*#__PURE__*/ _interop_require_default(require("../equality"));
var _term = /*#__PURE__*/ _interop_require_wildcard(require("./term"));
var _equality1 = /*#__PURE__*/ _interop_require_default(require("../node/statement/equality"));
var _query = require("../utilities/query");
var _array = require("../utilities/array");
var _constants = require("../constants");
var _typeAssertion = require("./typeAssertion");
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
var statementNodeQuery = (0, _query.nodeQuery)("/typeInference/statement!"), typeAssertionNodeQuery = (0, _query.nodeQuery)("/typeInference/typeAssertion!");
function verifyTypeInference(typeInferenceNode, context) {
    var typeInferenceVerified = false;
    var typeInferenceString = context.nodeAsString(typeInferenceNode);
    context.trace("Verifying the '".concat(typeInferenceString, "' type inference..."), typeInferenceNode);
    var statementNode = statementNodeQuery(typeInferenceNode), statementString = context.nodeAsString(statementNode), statementMatches = context.matchStatement(statementNode);
    if (!statementMatches) {
        context.debug("The '".concat(statementString, "' statement is not present in the context."), typeInferenceNode);
    } else {
        var depth = _constants.EQUALITY_DEPTH, statementNodeMatchesEqualityStatementNode = statementNode.match(_equality1.default, depth);
        if (!statementNodeMatchesEqualityStatementNode) {
            context.debug("The '".concat(statementString, "' statement is not an equality."), typeInferenceNode);
        } else {
            var derived = false, equality = _equality.default.fromStatementNode(statementNode), assignments = [], typeAssertionNode = typeAssertionNodeQuery(typeInferenceNode), variableTypeAssertionVerified = (0, _typeAssertion.verifyVariableTypeAssertion)(typeAssertionNode, assignments, derived, context);
            if (variableTypeAssertionVerified) {
                var firstAssignment = (0, _array.first)(assignments), assignment = firstAssignment, variables = [], leftTermNode = equality.getLeftTermNode(), rightTermNode = equality.getRightTermNode(), leftTermVerifiedAsVariable = (0, _term.verifyTermAsVariable)(leftTermNode, variables, context), rightTermVerifiedAsVariable = (0, _term.verifyTermAsVariable)(rightTermNode, variables, context);
                if (leftTermVerifiedAsVariable && rightTermVerifiedAsVariable) {
                    var firstVariable = (0, _array.first)(variables), secondVariable = (0, _array.second)(variables), leftVariable = firstVariable, rightVariable = secondVariable, leftVariableName = leftVariable.getName(), leftVariableType = leftVariable.getType(), rightVariableName = rightVariable.getName(), rightVariableType = rightVariable.getType(), leftVariableTypeEqualToOrSubTypeOfOfSuperTypeOfRightVariableType = leftVariableType.isEqualToOrSubTypeOfOfSuperTypeOf(rightVariableType);
                    if (leftVariableTypeEqualToOrSubTypeOfOfSuperTypeOfRightVariableType) {
                        var leftVariableTypeSuperTypeOfRightVariableType = leftVariableType.isSuperTypeOf(rightVariableType), rightVariableTypeSuperTypeOfLeftVariableType = rightVariableType.isSuperTypeOf(leftVariableType);
                        if (leftVariableTypeSuperTypeOfRightVariableType) {
                            var name = leftVariableName, type = rightVariableType; ///
                            assignAssignment(name, type, assignment, context);
                        }
                        if (rightVariableTypeSuperTypeOfLeftVariableType) {
                            var name1 = rightVariableName, type1 = leftVariableType; ///
                            assignAssignment(name1, type1, assignment, context);
                        }
                    }
                } else if (leftTermVerifiedAsVariable) {
                    var types = [];
                    (0, _term.default)(rightTermNode, types, context);
                    var firstType = (0, _array.first)(types), firstVariable1 = (0, _array.first)(variables), leftVariable1 = firstVariable1, rightTermType = firstType, leftVariableName1 = leftVariable1.getName(), leftVariableType1 = leftVariable1.getType(), leftVariableTypeEqualToOrSuperTypeOfRightTermType = leftVariableType1.isEqualToOrSuperTypeOf(rightTermType);
                    if (leftVariableTypeEqualToOrSuperTypeOfRightTermType) {
                        var name2 = leftVariableName1, type2 = rightTermType; ///
                        assignAssignment(name2, type2, assignment, context);
                    }
                } else if (rightTermVerifiedAsVariable) {
                    var types1 = [];
                    (0, _term.default)(leftTermNode, types1, context);
                    var firstType1 = (0, _array.first)(types1), firstVariable2 = (0, _array.first)(variables), leftTermType = firstType1, rightVariable1 = firstVariable2, rightVariableName1 = rightVariable1.getName(), rightVariableType1 = rightVariable1.getType(), rightVariableTypeEqualToOrSuperTypeOfRightTermType = rightVariableType1.isEqualToOrSuperTypeOf(leftTermType);
                    if (rightVariableTypeEqualToOrSuperTypeOfRightTermType) {
                        var name3 = rightVariableName1, type3 = leftTermType; ///
                        assignAssignment(name3, type3, assignment, context);
                    }
                }
                typeInferenceVerified = true;
            }
        }
    }
    if (typeInferenceVerified) {
        context.debug("...verified the '".concat(typeInferenceString, "' type inference."), typeInferenceNode);
    }
    return typeInferenceVerified;
}
function assignAssignment(name, type, assignment, context) {
    var assignmentMatchesNameAndType = assignment.matchNameAndType(name, type);
    if (assignmentMatchesNameAndType) {
        assignment.assign(context);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdHlwZUluZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVxdWFsaXR5IGZyb20gXCIuLi9lcXVhbGl0eVwiO1xuaW1wb3J0IHZlcmlmeVRlcm0gZnJvbSBcIi4vdGVybVwiO1xuaW1wb3J0IGVxdWFsaXR5U3RhdGVtZW50Tm9kZSBmcm9tIFwiLi4vbm9kZS9zdGF0ZW1lbnQvZXF1YWxpdHlcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IEVRVUFMSVRZX0RFUFRIIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgdmVyaWZ5VGVybUFzVmFyaWFibGUgfSBmcm9tIFwiLi90ZXJtXCI7XG5pbXBvcnQgeyB2ZXJpZnlWYXJpYWJsZVR5cGVBc3NlcnRpb24gfSBmcm9tIFwiLi90eXBlQXNzZXJ0aW9uXCI7XG5cbmNvbnN0IHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlSW5mZXJlbmNlL3N0YXRlbWVudCFcIiksXG4gICAgICB0eXBlQXNzZXJ0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVJbmZlcmVuY2UvdHlwZUFzc2VydGlvbiFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVR5cGVJbmZlcmVuY2UodHlwZUluZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGVJbmZlcmVuY2VWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGVJbmZlcmVuY2VTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlSW5mZXJlbmNlTm9kZSk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlSW5mZXJlbmNlU3RyaW5nfScgdHlwZSBpbmZlcmVuY2UuLi5gLCB0eXBlSW5mZXJlbmNlTm9kZSk7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeSh0eXBlSW5mZXJlbmNlTm9kZSksXG4gICAgICAgIHN0YXRlbWVudFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnRNYXRjaGVzID0gY29udGV4dC5tYXRjaFN0YXRlbWVudChzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAoIXN0YXRlbWVudE1hdGNoZXMpIHtcbiAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGlzIG5vdCBwcmVzZW50IGluIHRoZSBjb250ZXh0LmAsIHR5cGVJbmZlcmVuY2VOb2RlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBkZXB0aCA9IEVRVUFMSVRZX0RFUFRILFxuICAgICAgICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzRXF1YWxpdHlTdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZS5tYXRjaChlcXVhbGl0eVN0YXRlbWVudE5vZGUsIGRlcHRoKTtcblxuICAgIGlmICghc3RhdGVtZW50Tm9kZU1hdGNoZXNFcXVhbGl0eVN0YXRlbWVudE5vZGUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgaXMgbm90IGFuIGVxdWFsaXR5LmAsIHR5cGVJbmZlcmVuY2VOb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGVyaXZlZCA9IGZhbHNlLCAgLy8vXG4gICAgICAgICAgICBlcXVhbGl0eSA9IEVxdWFsaXR5LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICAgIHR5cGVBc3NlcnRpb25Ob2RlID0gdHlwZUFzc2VydGlvbk5vZGVRdWVyeSh0eXBlSW5mZXJlbmNlTm9kZSksXG4gICAgICAgICAgICB2YXJpYWJsZVR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeVZhcmlhYmxlVHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQpXG5cbiAgICAgIGlmICh2YXJpYWJsZVR5cGVBc3NlcnRpb25WZXJpZmllZCkge1xuICAgICAgICBjb25zdCBmaXJzdEFzc2lnbm1lbnQgPSBmaXJzdChhc3NpZ25tZW50cyksXG4gICAgICAgICAgICAgIGFzc2lnbm1lbnQgPSBmaXJzdEFzc2lnbm1lbnQsIC8vL1xuICAgICAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICAgICAgbGVmdFRlcm1Ob2RlID0gZXF1YWxpdHkuZ2V0TGVmdFRlcm1Ob2RlKCksXG4gICAgICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSBlcXVhbGl0eS5nZXRSaWdodFRlcm1Ob2RlKCksXG4gICAgICAgICAgICAgIGxlZnRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gdmVyaWZ5VGVybUFzVmFyaWFibGUobGVmdFRlcm1Ob2RlLCB2YXJpYWJsZXMsIGNvbnRleHQpLFxuICAgICAgICAgICAgICByaWdodFRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSB2ZXJpZnlUZXJtQXNWYXJpYWJsZShyaWdodFRlcm1Ob2RlLCB2YXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChsZWZ0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSAmJiByaWdodFRlcm1WZXJpZmllZEFzVmFyaWFibGUpIHtcbiAgICAgICAgICBjb25zdCBmaXJzdFZhcmlhYmxlID0gZmlyc3QodmFyaWFibGVzKSxcbiAgICAgICAgICAgICAgICBzZWNvbmRWYXJpYWJsZSA9IHNlY29uZCh2YXJpYWJsZXMpLFxuICAgICAgICAgICAgICAgIGxlZnRWYXJpYWJsZSA9IGZpcnN0VmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICAgIHJpZ2h0VmFyaWFibGUgPSBzZWNvbmRWYXJpYWJsZSwgLy8vXG4gICAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlTmFtZSA9IGxlZnRWYXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlVHlwZSA9IGxlZnRWYXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZU5hbWUgPSByaWdodFZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICByaWdodFZhcmlhYmxlVHlwZSA9IHJpZ2h0VmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgIGxlZnRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mUmlnaHRWYXJpYWJsZVR5cGUgPSBsZWZ0VmFyaWFibGVUeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mT2ZTdXBlclR5cGVPZihyaWdodFZhcmlhYmxlVHlwZSk7XG5cbiAgICAgICAgICBpZiAobGVmdFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2ZSaWdodFZhcmlhYmxlVHlwZSkge1xuICAgICAgICAgICAgY29uc3QgbGVmdFZhcmlhYmxlVHlwZVN1cGVyVHlwZU9mUmlnaHRWYXJpYWJsZVR5cGUgPSBsZWZ0VmFyaWFibGVUeXBlLmlzU3VwZXJUeXBlT2YocmlnaHRWYXJpYWJsZVR5cGUpLFxuICAgICAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZVR5cGVTdXBlclR5cGVPZkxlZnRWYXJpYWJsZVR5cGUgPSByaWdodFZhcmlhYmxlVHlwZS5pc1N1cGVyVHlwZU9mKGxlZnRWYXJpYWJsZVR5cGUpO1xuXG4gICAgICAgICAgICBpZiAobGVmdFZhcmlhYmxlVHlwZVN1cGVyVHlwZU9mUmlnaHRWYXJpYWJsZVR5cGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGxlZnRWYXJpYWJsZU5hbWUsIC8vL1xuICAgICAgICAgICAgICAgICAgICB0eXBlID0gcmlnaHRWYXJpYWJsZVR5cGU7ICAvLy9cblxuICAgICAgICAgICAgICBhc3NpZ25Bc3NpZ25tZW50KG5hbWUsIHR5cGUsIGFzc2lnbm1lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmlnaHRWYXJpYWJsZVR5cGVTdXBlclR5cGVPZkxlZnRWYXJpYWJsZVR5cGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IHJpZ2h0VmFyaWFibGVOYW1lLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IGxlZnRWYXJpYWJsZVR5cGU7ICAvLy9cblxuICAgICAgICAgICAgICBhc3NpZ25Bc3NpZ25tZW50KG5hbWUsIHR5cGUsIGFzc2lnbm1lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChsZWZ0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSkge1xuICAgICAgICAgIGNvbnN0IHR5cGVzID0gW107XG5cbiAgICAgICAgICB2ZXJpZnlUZXJtKHJpZ2h0VGVybU5vZGUsIHR5cGVzLCBjb250ZXh0KTtcblxuICAgICAgICAgIGNvbnN0IGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICAgICAgICBmaXJzdFZhcmlhYmxlID0gZmlyc3QodmFyaWFibGVzKSxcbiAgICAgICAgICAgICAgICBsZWZ0VmFyaWFibGUgPSBmaXJzdFZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgICAgICByaWdodFRlcm1UeXBlID0gZmlyc3RUeXBlLCAgLy8vXG4gICAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlTmFtZSA9IGxlZnRWYXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlVHlwZSA9IGxlZnRWYXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSA9IGxlZnRWYXJpYWJsZVR5cGUuaXNFcXVhbFRvT3JTdXBlclR5cGVPZihyaWdodFRlcm1UeXBlKTtcblxuICAgICAgICAgIGlmIChsZWZ0VmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZSaWdodFRlcm1UeXBlKSB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gbGVmdFZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgdHlwZSA9IHJpZ2h0VGVybVR5cGU7IC8vL1xuXG4gICAgICAgICAgICBhc3NpZ25Bc3NpZ25tZW50KG5hbWUsIHR5cGUsIGFzc2lnbm1lbnQsIGNvbnRleHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyaWdodFRlcm1WZXJpZmllZEFzVmFyaWFibGUpIHtcbiAgICAgICAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgICAgICAgdmVyaWZ5VGVybShsZWZ0VGVybU5vZGUsIHR5cGVzLCBjb250ZXh0KTtcblxuICAgICAgICAgIGNvbnN0IGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICAgICAgICBmaXJzdFZhcmlhYmxlID0gZmlyc3QodmFyaWFibGVzKSxcbiAgICAgICAgICAgICAgICBsZWZ0VGVybVR5cGUgPSBmaXJzdFR5cGUsICAvLy9cbiAgICAgICAgICAgICAgICByaWdodFZhcmlhYmxlID0gZmlyc3RWYXJpYWJsZSwgLy8vXG4gICAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZU5hbWUgPSByaWdodFZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICByaWdodFZhcmlhYmxlVHlwZSA9IHJpZ2h0VmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgIHJpZ2h0VmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZSaWdodFRlcm1UeXBlID0gcmlnaHRWYXJpYWJsZVR5cGUuaXNFcXVhbFRvT3JTdXBlclR5cGVPZihsZWZ0VGVybVR5cGUpO1xuXG4gICAgICAgICAgaWYgKHJpZ2h0VmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZSaWdodFRlcm1UeXBlKSB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gcmlnaHRWYXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICAgICAgICAgIHR5cGUgPSBsZWZ0VGVybVR5cGU7IC8vL1xuXG4gICAgICAgICAgICBhc3NpZ25Bc3NpZ25tZW50KG5hbWUsIHR5cGUsIGFzc2lnbm1lbnQsIGNvbnRleHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHR5cGVJbmZlcmVuY2VWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVJbmZlcmVuY2VWZXJpZmllZCkge1xuICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlSW5mZXJlbmNlU3RyaW5nfScgdHlwZSBpbmZlcmVuY2UuYCwgdHlwZUluZmVyZW5jZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVJbmZlcmVuY2VWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gYXNzaWduQXNzaWdubWVudChuYW1lLCB0eXBlLCBhc3NpZ25tZW50LCBjb250ZXh0KSB7XG4gIGNvbnN0IGFzc2lnbm1lbnRNYXRjaGVzTmFtZUFuZFR5cGUgPSBhc3NpZ25tZW50Lm1hdGNoTmFtZUFuZFR5cGUobmFtZSwgdHlwZSk7XG5cbiAgaWYgKGFzc2lnbm1lbnRNYXRjaGVzTmFtZUFuZFR5cGUpIHtcbiAgICBhc3NpZ25tZW50LmFzc2lnbihjb250ZXh0KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInZlcmlmeVR5cGVJbmZlcmVuY2UiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlQXNzZXJ0aW9uTm9kZVF1ZXJ5IiwidHlwZUluZmVyZW5jZU5vZGUiLCJjb250ZXh0IiwidHlwZUluZmVyZW5jZVZlcmlmaWVkIiwidHlwZUluZmVyZW5jZVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFN0cmluZyIsInN0YXRlbWVudE1hdGNoZXMiLCJtYXRjaFN0YXRlbWVudCIsImRlYnVnIiwiZGVwdGgiLCJFUVVBTElUWV9ERVBUSCIsInN0YXRlbWVudE5vZGVNYXRjaGVzRXF1YWxpdHlTdGF0ZW1lbnROb2RlIiwibWF0Y2giLCJlcXVhbGl0eVN0YXRlbWVudE5vZGUiLCJkZXJpdmVkIiwiZXF1YWxpdHkiLCJFcXVhbGl0eSIsImZyb21TdGF0ZW1lbnROb2RlIiwiYXNzaWdubWVudHMiLCJ0eXBlQXNzZXJ0aW9uTm9kZSIsInZhcmlhYmxlVHlwZUFzc2VydGlvblZlcmlmaWVkIiwidmVyaWZ5VmFyaWFibGVUeXBlQXNzZXJ0aW9uIiwiZmlyc3RBc3NpZ25tZW50IiwiZmlyc3QiLCJhc3NpZ25tZW50IiwidmFyaWFibGVzIiwibGVmdFRlcm1Ob2RlIiwiZ2V0TGVmdFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsImdldFJpZ2h0VGVybU5vZGUiLCJsZWZ0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSIsInZlcmlmeVRlcm1Bc1ZhcmlhYmxlIiwicmlnaHRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlIiwiZmlyc3RWYXJpYWJsZSIsInNlY29uZFZhcmlhYmxlIiwic2Vjb25kIiwibGVmdFZhcmlhYmxlIiwicmlnaHRWYXJpYWJsZSIsImxlZnRWYXJpYWJsZU5hbWUiLCJnZXROYW1lIiwibGVmdFZhcmlhYmxlVHlwZSIsImdldFR5cGUiLCJyaWdodFZhcmlhYmxlTmFtZSIsInJpZ2h0VmFyaWFibGVUeXBlIiwibGVmdFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2ZSaWdodFZhcmlhYmxlVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mT2ZTdXBlclR5cGVPZiIsImxlZnRWYXJpYWJsZVR5cGVTdXBlclR5cGVPZlJpZ2h0VmFyaWFibGVUeXBlIiwiaXNTdXBlclR5cGVPZiIsInJpZ2h0VmFyaWFibGVUeXBlU3VwZXJUeXBlT2ZMZWZ0VmFyaWFibGVUeXBlIiwibmFtZSIsInR5cGUiLCJhc3NpZ25Bc3NpZ25tZW50IiwidHlwZXMiLCJ2ZXJpZnlUZXJtIiwiZmlyc3RUeXBlIiwicmlnaHRUZXJtVHlwZSIsImxlZnRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlJpZ2h0VGVybVR5cGUiLCJpc0VxdWFsVG9PclN1cGVyVHlwZU9mIiwibGVmdFRlcm1UeXBlIiwicmlnaHRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlJpZ2h0VGVybVR5cGUiLCJhc3NpZ25tZW50TWF0Y2hlc05hbWVBbmRUeXBlIiwibWF0Y2hOYW1lQW5kVHlwZSIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZUE7OztlQUF3QkE7OzsrREFiSDs0REFDRTtnRUFDVztxQkFFUjtxQkFDSTt5QkFDQzs2QkFFYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUMsSUFBTUMscUJBQXFCQyxJQUFBQSxnQkFBUyxFQUFDLDhCQUMvQkMseUJBQXlCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRTFCLFNBQVNGLG9CQUFvQkksaUJBQWlCLEVBQUVDLE9BQU87SUFDcEUsSUFBSUMsd0JBQXdCO0lBRTVCLElBQU1DLHNCQUFzQkYsUUFBUUcsWUFBWSxDQUFDSjtJQUVqREMsUUFBUUksS0FBSyxDQUFDLEFBQUMsa0JBQXFDLE9BQXBCRixxQkFBb0Isd0JBQXNCSDtJQUUxRSxJQUFNTSxnQkFBZ0JULG1CQUFtQkcsb0JBQ25DTyxrQkFBa0JOLFFBQVFHLFlBQVksQ0FBQ0UsZ0JBQ3ZDRSxtQkFBbUJQLFFBQVFRLGNBQWMsQ0FBQ0g7SUFFaEQsSUFBSSxDQUFDRSxrQkFBa0I7UUFDckJQLFFBQVFTLEtBQUssQ0FBQyxBQUFDLFFBQXVCLE9BQWhCSCxpQkFBZ0IsK0NBQTZDUDtJQUNyRixPQUFPO1FBQ0wsSUFBTVcsUUFBUUMseUJBQWMsRUFDdEJDLDRDQUE0Q1AsY0FBY1EsS0FBSyxDQUFDQyxrQkFBcUIsRUFBRUo7UUFFN0YsSUFBSSxDQUFDRSwyQ0FBMkM7WUFDOUNa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