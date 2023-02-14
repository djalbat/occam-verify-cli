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
var _term = /*#__PURE__*/ _interopRequireWildcard(require("./term"));
var _equality = /*#__PURE__*/ _interopRequireDefault(require("../ocmbinator/equality"));
var _query = require("../utilities/query");
var _array = require("../utilities/array");
var _type = require("./assertion/type");
var _statement = require("../verify/statement");
var _proof = require("../utilities/proof");
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
var leftTermNodeQuery = (0, _query.nodeQuery)("/statement/argument[0]/term!"), rightTermNodeQuery = (0, _query.nodeQuery)("/statement/argument[1]/term!"), statementNodeQuery = (0, _query.nodeQuery)("/typeInference/statement!"), typeAssertionNodeQuery = (0, _query.nodeQuery)("/typeInference/typeAssertion!");
function verifyTypeInference(typeInferenceNode, context) {
    var typeInferenceVerified = false;
    var typeInferenceString = context.nodeAsString(typeInferenceNode);
    context.debug("Verifying the '".concat(typeInferenceString, "' type inference..."), typeInferenceNode);
    var statementNode = statementNodeQuery(typeInferenceNode);
    var bracketedStatementChildNode = (0, _proof.bracketedStatementChildNodeFromStatementNode)(statementNode);
    if (bracketedStatementChildNode !== null) {
        statementNode = bracketedStatementChildNode; ///
    }
    var statementString = context.nodeAsString(statementNode), statementMatches = context.matchStatement(statementNode);
    if (!statementMatches) {
        context.error("The '".concat(statementString, "' statement is not present in the context."), typeInferenceNode);
    } else {
        var combinator = _equality.default, statementVerifiedAgainstCombinator = (0, _statement.verifyStatementAgainstCombinator)(statementNode, combinator, context);
        if (!statementVerifiedAgainstCombinator) {
            context.error("The '".concat(statementString, "' statement is not an equality."), typeInferenceNode);
        } else {
            var derived = false, assignments = [], typeAssertionNode = typeAssertionNodeQuery(typeInferenceNode), variableTypeAssertionVerified = (0, _type.verifyVariableTypeAssertion)(typeAssertionNode, assignments, derived, context);
            if (variableTypeAssertionVerified) {
                var assignment = assignments.pop(), variables = [], leftTermNode = leftTermNodeQuery(statementNode), rightTermNode = rightTermNodeQuery(statementNode), leftTermVerifiedAsVariable = (0, _term.verifyTermAsVariable)(leftTermNode, variables, context), rightTermVerifiedAsVariable = (0, _term.verifyTermAsVariable)(rightTermNode, variables, context);
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
        context.info("Verified the '".concat(typeInferenceString, "' type inference."), typeInferenceNode);
    }
    return typeInferenceVerified;
}
function assignAssignment(name, type, assignment, context) {
    var assignmentMatchesNameAndType = assignment.matchNameAndType(name, type);
    if (assignmentMatchesNameAndType) {
        assignment.assign(context);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdHlwZUluZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeVRlcm0gZnJvbSBcIi4vdGVybVwiO1xuaW1wb3J0IGVxdWFsaXR5Q29tYmluYXRvciBmcm9tIFwiLi4vb2NtYmluYXRvci9lcXVhbGl0eVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgdmVyaWZ5VGVybUFzVmFyaWFibGUgfSBmcm9tIFwiLi90ZXJtXCI7XG5pbXBvcnQgeyB2ZXJpZnlWYXJpYWJsZVR5cGVBc3NlcnRpb24gfSBmcm9tIFwiLi9hc3NlcnRpb24vdHlwZVwiO1xuaW1wb3J0IHsgdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3IgfSBmcm9tIFwiLi4vdmVyaWZ5L3N0YXRlbWVudFwiO1xuaW1wb3J0IHsgYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlRnJvbVN0YXRlbWVudE5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Byb29mXCI7XG5cbmNvbnN0IGxlZnRUZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9hcmd1bWVudFswXS90ZXJtIVwiKSxcbiAgICAgIHJpZ2h0VGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvYXJndW1lbnRbMV0vdGVybSFcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZUluZmVyZW5jZS9zdGF0ZW1lbnQhXCIpLFxuICAgICAgdHlwZUFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlSW5mZXJlbmNlL3R5cGVBc3NlcnRpb24hXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlUeXBlSW5mZXJlbmNlKHR5cGVJbmZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlSW5mZXJlbmNlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB0eXBlSW5mZXJlbmNlU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodHlwZUluZmVyZW5jZU5vZGUpO1xuXG4gIGNvbnRleHQuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7dHlwZUluZmVyZW5jZVN0cmluZ30nIHR5cGUgaW5mZXJlbmNlLi4uYCwgdHlwZUluZmVyZW5jZU5vZGUpO1xuXG4gIGxldCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KHR5cGVJbmZlcmVuY2VOb2RlKTtcblxuICBjb25zdCBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUgPSBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGVGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAoYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50Tm9kZSA9IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZTsgLy8vXG4gIH1cblxuICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgc3RhdGVtZW50TWF0Y2hlcyA9IGNvbnRleHQubWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKCFzdGF0ZW1lbnRNYXRjaGVzKSB7XG4gICAgY29udGV4dC5lcnJvcihgVGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBpcyBub3QgcHJlc2VudCBpbiB0aGUgY29udGV4dC5gLCB0eXBlSW5mZXJlbmNlTm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgY29tYmluYXRvciA9IGVxdWFsaXR5Q29tYmluYXRvciwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IgPSB2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcihzdGF0ZW1lbnROb2RlLCBjb21iaW5hdG9yLCBjb250ZXh0KTtcblxuICAgIGlmICghc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcikge1xuICAgICAgY29udGV4dC5lcnJvcihgVGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBpcyBub3QgYW4gZXF1YWxpdHkuYCwgdHlwZUluZmVyZW5jZU5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkZXJpdmVkID0gZmFsc2UsICAvLy9cbiAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgICAgICB0eXBlQXNzZXJ0aW9uTm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlUXVlcnkodHlwZUluZmVyZW5jZU5vZGUpLFxuICAgICAgICAgICAgdmFyaWFibGVUeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlWYXJpYWJsZVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0KVxuXG4gICAgICBpZiAodmFyaWFibGVUeXBlQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgYXNzaWdubWVudCA9IGFzc2lnbm1lbnRzLnBvcCgpLFxuICAgICAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICAgICAgbGVmdFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSByaWdodFRlcm1Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICAgIGxlZnRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gdmVyaWZ5VGVybUFzVmFyaWFibGUobGVmdFRlcm1Ob2RlLCB2YXJpYWJsZXMsIGNvbnRleHQpLFxuICAgICAgICAgICAgICByaWdodFRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSB2ZXJpZnlUZXJtQXNWYXJpYWJsZShyaWdodFRlcm1Ob2RlLCB2YXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChsZWZ0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSAmJiByaWdodFRlcm1WZXJpZmllZEFzVmFyaWFibGUpIHtcbiAgICAgICAgICBjb25zdCBmaXJzdFZhcmlhYmxlID0gZmlyc3QodmFyaWFibGVzKSxcbiAgICAgICAgICAgICAgICBzZWNvbmRWYXJpYWJsZSA9IHNlY29uZCh2YXJpYWJsZXMpLFxuICAgICAgICAgICAgICAgIGxlZnRWYXJpYWJsZSA9IGZpcnN0VmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICAgIHJpZ2h0VmFyaWFibGUgPSBzZWNvbmRWYXJpYWJsZSwgLy8vXG4gICAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlTmFtZSA9IGxlZnRWYXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlVHlwZSA9IGxlZnRWYXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZU5hbWUgPSByaWdodFZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICByaWdodFZhcmlhYmxlVHlwZSA9IHJpZ2h0VmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgIGxlZnRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mUmlnaHRWYXJpYWJsZVR5cGUgPSBsZWZ0VmFyaWFibGVUeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mT2ZTdXBlclR5cGVPZihyaWdodFZhcmlhYmxlVHlwZSk7XG5cbiAgICAgICAgICBpZiAobGVmdFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2ZSaWdodFZhcmlhYmxlVHlwZSkge1xuICAgICAgICAgICAgY29uc3QgbGVmdFZhcmlhYmxlVHlwZVN1cGVyVHlwZU9mUmlnaHRWYXJpYWJsZVR5cGUgPSBsZWZ0VmFyaWFibGVUeXBlLmlzU3VwZXJUeXBlT2YocmlnaHRWYXJpYWJsZVR5cGUpLFxuICAgICAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZVR5cGVTdXBlclR5cGVPZkxlZnRWYXJpYWJsZVR5cGUgPSByaWdodFZhcmlhYmxlVHlwZS5pc1N1cGVyVHlwZU9mKGxlZnRWYXJpYWJsZVR5cGUpO1xuXG4gICAgICAgICAgICBpZiAobGVmdFZhcmlhYmxlVHlwZVN1cGVyVHlwZU9mUmlnaHRWYXJpYWJsZVR5cGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGxlZnRWYXJpYWJsZU5hbWUsIC8vL1xuICAgICAgICAgICAgICAgICAgICB0eXBlID0gcmlnaHRWYXJpYWJsZVR5cGU7ICAvLy9cblxuICAgICAgICAgICAgICBhc3NpZ25Bc3NpZ25tZW50KG5hbWUsIHR5cGUsIGFzc2lnbm1lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmlnaHRWYXJpYWJsZVR5cGVTdXBlclR5cGVPZkxlZnRWYXJpYWJsZVR5cGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IHJpZ2h0VmFyaWFibGVOYW1lLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IGxlZnRWYXJpYWJsZVR5cGU7ICAvLy9cblxuICAgICAgICAgICAgICBhc3NpZ25Bc3NpZ25tZW50KG5hbWUsIHR5cGUsIGFzc2lnbm1lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChsZWZ0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSkge1xuICAgICAgICAgIGNvbnN0IHR5cGVzID0gW107XG5cbiAgICAgICAgICB2ZXJpZnlUZXJtKHJpZ2h0VGVybU5vZGUsIHR5cGVzLCBjb250ZXh0KTtcblxuICAgICAgICAgIGNvbnN0IGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICAgICAgICBmaXJzdFZhcmlhYmxlID0gZmlyc3QodmFyaWFibGVzKSxcbiAgICAgICAgICAgICAgICBsZWZ0VmFyaWFibGUgPSBmaXJzdFZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgICAgICByaWdodFRlcm1UeXBlID0gZmlyc3RUeXBlLCAgLy8vXG4gICAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlTmFtZSA9IGxlZnRWYXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlVHlwZSA9IGxlZnRWYXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSA9IGxlZnRWYXJpYWJsZVR5cGUuaXNFcXVhbFRvT3JTdXBlclR5cGVPZihyaWdodFRlcm1UeXBlKTtcblxuICAgICAgICAgIGlmIChsZWZ0VmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZSaWdodFRlcm1UeXBlKSB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gbGVmdFZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgdHlwZSA9IHJpZ2h0VGVybVR5cGU7IC8vL1xuXG4gICAgICAgICAgICBhc3NpZ25Bc3NpZ25tZW50KG5hbWUsIHR5cGUsIGFzc2lnbm1lbnQsIGNvbnRleHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyaWdodFRlcm1WZXJpZmllZEFzVmFyaWFibGUpIHtcbiAgICAgICAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgICAgICAgdmVyaWZ5VGVybShsZWZ0VGVybU5vZGUsIHR5cGVzLCBjb250ZXh0KTtcblxuICAgICAgICAgIGNvbnN0IGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICAgICAgICBmaXJzdFZhcmlhYmxlID0gZmlyc3QodmFyaWFibGVzKSxcbiAgICAgICAgICAgICAgICBsZWZ0VGVybVR5cGUgPSBmaXJzdFR5cGUsICAvLy9cbiAgICAgICAgICAgICAgICByaWdodFZhcmlhYmxlID0gZmlyc3RWYXJpYWJsZSwgLy8vXG4gICAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZU5hbWUgPSByaWdodFZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICByaWdodFZhcmlhYmxlVHlwZSA9IHJpZ2h0VmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgIHJpZ2h0VmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZSaWdodFRlcm1UeXBlID0gcmlnaHRWYXJpYWJsZVR5cGUuaXNFcXVhbFRvT3JTdXBlclR5cGVPZihsZWZ0VGVybVR5cGUpO1xuXG4gICAgICAgICAgaWYgKHJpZ2h0VmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZSaWdodFRlcm1UeXBlKSB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gcmlnaHRWYXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICAgICAgICAgIHR5cGUgPSBsZWZ0VGVybVR5cGU7IC8vL1xuXG4gICAgICAgICAgICBhc3NpZ25Bc3NpZ25tZW50KG5hbWUsIHR5cGUsIGFzc2lnbm1lbnQsIGNvbnRleHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHR5cGVJbmZlcmVuY2VWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVJbmZlcmVuY2VWZXJpZmllZCkge1xuICAgIGNvbnRleHQuaW5mbyhgVmVyaWZpZWQgdGhlICcke3R5cGVJbmZlcmVuY2VTdHJpbmd9JyB0eXBlIGluZmVyZW5jZS5gLCB0eXBlSW5mZXJlbmNlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdHlwZUluZmVyZW5jZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25Bc3NpZ25tZW50KG5hbWUsIHR5cGUsIGFzc2lnbm1lbnQsIGNvbnRleHQpIHtcbiAgY29uc3QgYXNzaWdubWVudE1hdGNoZXNOYW1lQW5kVHlwZSA9IGFzc2lnbm1lbnQubWF0Y2hOYW1lQW5kVHlwZShuYW1lLCB0eXBlKTtcblxuICBpZiAoYXNzaWdubWVudE1hdGNoZXNOYW1lQW5kVHlwZSkge1xuICAgIGFzc2lnbm1lbnQuYXNzaWduKGNvbnRleHQpO1xuICB9XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VHlwZUluZmVyZW5jZSIsImxlZnRUZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicmlnaHRUZXJtTm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5IiwidHlwZUFzc2VydGlvbk5vZGVRdWVyeSIsInR5cGVJbmZlcmVuY2VOb2RlIiwiY29udGV4dCIsInR5cGVJbmZlcmVuY2VWZXJpZmllZCIsInR5cGVJbmZlcmVuY2VTdHJpbmciLCJub2RlQXNTdHJpbmciLCJkZWJ1ZyIsInN0YXRlbWVudE5vZGUiLCJicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUiLCJicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGVGcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFN0cmluZyIsInN0YXRlbWVudE1hdGNoZXMiLCJtYXRjaFN0YXRlbWVudCIsImVycm9yIiwiY29tYmluYXRvciIsImVxdWFsaXR5Q29tYmluYXRvciIsInN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IiLCJ2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvciIsImRlcml2ZWQiLCJhc3NpZ25tZW50cyIsInR5cGVBc3NlcnRpb25Ob2RlIiwidmFyaWFibGVUeXBlQXNzZXJ0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlWYXJpYWJsZVR5cGVBc3NlcnRpb24iLCJhc3NpZ25tZW50IiwicG9wIiwidmFyaWFibGVzIiwibGVmdFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsImxlZnRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlIiwidmVyaWZ5VGVybUFzVmFyaWFibGUiLCJyaWdodFRlcm1WZXJpZmllZEFzVmFyaWFibGUiLCJmaXJzdFZhcmlhYmxlIiwiZmlyc3QiLCJzZWNvbmRWYXJpYWJsZSIsInNlY29uZCIsImxlZnRWYXJpYWJsZSIsInJpZ2h0VmFyaWFibGUiLCJsZWZ0VmFyaWFibGVOYW1lIiwiZ2V0TmFtZSIsImxlZnRWYXJpYWJsZVR5cGUiLCJnZXRUeXBlIiwicmlnaHRWYXJpYWJsZU5hbWUiLCJyaWdodFZhcmlhYmxlVHlwZSIsImxlZnRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mUmlnaHRWYXJpYWJsZVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2YiLCJsZWZ0VmFyaWFibGVUeXBlU3VwZXJUeXBlT2ZSaWdodFZhcmlhYmxlVHlwZSIsImlzU3VwZXJUeXBlT2YiLCJyaWdodFZhcmlhYmxlVHlwZVN1cGVyVHlwZU9mTGVmdFZhcmlhYmxlVHlwZSIsIm5hbWUiLCJ0eXBlIiwiYXNzaWduQXNzaWdubWVudCIsInR5cGVzIiwidmVyaWZ5VGVybSIsImZpcnN0VHlwZSIsInJpZ2h0VGVybVR5cGUiLCJsZWZ0VmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZSaWdodFRlcm1UeXBlIiwiaXNFcXVhbFRvT3JTdXBlclR5cGVPZiIsImxlZnRUZXJtVHlwZSIsInJpZ2h0VmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZSaWdodFRlcm1UeXBlIiwiaW5mbyIsImFzc2lnbm1lbnRNYXRjaGVzTmFtZUFuZFR5cGUiLCJtYXRjaE5hbWVBbmRUeXBlIiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpQkE7OztlQUF3QkE7OzswREFmRDs2REFDUTtxQkFFTDtxQkFDSTtvQkFFYzt5QkFDSztxQkFDWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdELElBQU1DLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQyxpQ0FDOUJDLHFCQUFxQkQsSUFBQUEsZ0JBQVMsRUFBQyxpQ0FDL0JFLHFCQUFxQkYsSUFBQUEsZ0JBQVMsRUFBQyw4QkFDL0JHLHlCQUF5QkgsSUFBQUEsZ0JBQVMsRUFBQztBQUUxQixTQUFTRixvQkFBb0JNLGlCQUFpQixFQUFFQyxPQUFPLEVBQUU7SUFDdEUsSUFBSUMsd0JBQXdCLEtBQUs7SUFFakMsSUFBTUMsc0JBQXNCRixRQUFRRyxZQUFZLENBQUNKO0lBRWpEQyxRQUFRSSxLQUFLLENBQUMsQUFBQyxrQkFBcUMsT0FBcEJGLHFCQUFvQix3QkFBc0JIO0lBRTFFLElBQUlNLGdCQUFnQlIsbUJBQW1CRTtJQUV2QyxJQUFNTyw4QkFBOEJDLElBQUFBLG1EQUE0QyxFQUFDRjtJQUVqRixJQUFJQyxnQ0FBZ0MsSUFBSSxFQUFFO1FBQ3hDRCxnQkFBZ0JDLDZCQUE2QixHQUFHO0lBQ2xELENBQUM7SUFFRCxJQUFNRSxrQkFBa0JSLFFBQVFHLFlBQVksQ0FBQ0UsZ0JBQ3ZDSSxtQkFBbUJULFFBQVFVLGNBQWMsQ0FBQ0w7SUFFaEQsSUFBSSxDQUFDSSxrQkFBa0I7UUFDckJULFFBQVFXLEtBQUssQ0FBQyxBQUFDLFFBQXVCLE9BQWhCSCxpQkFBZ0IsK0NBQTZDVDtJQUNyRixPQUFPO1FBQ0wsSUFBTWEsYUFBYUMsaUJBQWtCLEVBQy9CQyxxQ0FBcUNDLElBQUFBLDJDQUFnQyxFQUFDVixlQUFlTyxZQUFZWjtRQUV2RyxJQUFJLENBQUNjLG9DQUFvQztZQUN2Q2QsUUFBUVcsS0FBSyxDQUFDLEFBQUMsUUFBdUIsT0FBaEJILGlCQUFnQixvQ0FBa0NUO1FBQzFFLE9BQU87WUFDTCxJQUFNaUIsVUFBVSxLQUFLLEVBQ2ZDLGNBQWMsRUFBRSxFQUNoQkMsb0JBQW9CcEIsdUJBQXVCQyxvQkFDM0NvQixnQ0FBZ0NDLElBQUFBLGlDQUEyQixFQUFDRixtQkFBbUJELGFBQWFELFNBQVNoQjtZQUUzRyxJQUFJbUIsK0JBQStCO2dCQUNqQyxJQUFNRSxhQUFhSixZQUFZSyxHQUFHLElBQzVCQyxZQUFZLEVBQUUsRUFDZEMsZUFBZTlCLGtCQUFrQlcsZ0JBQ2pDb0IsZ0JBQWdCN0IsbUJBQW1CUyxnQkFDbkNxQiw2QkFBNkJDLElBQUFBLDBCQUFvQixFQUFDSCxjQUFjRCxXQUFXdkIsVUFDM0U0Qiw4QkFBOEJELElBQUFBLDBCQUFvQixFQUFDRixlQUFlRixXQUFXdkI7Z0JBRW5GLElBQUkwQiw4QkFBOEJFLDZCQUE2QjtvQkFDN0QsSUFBTUMsZ0JBQWdCQyxJQUFBQSxZQUFLLEVBQUNQLFlBQ3RCUSxpQkFBaUJDLElBQUFBLGFBQU0sRUFBQ1QsWUFDeEJVLGVBQWVKLGVBQ2ZLLGdCQUFnQkgsZ0JBQ2hCSSxtQkFBbUJGLGFBQWFHLE9BQU8sSUFDdkNDLG1CQUFtQkosYUFBYUssT0FBTyxJQUN2Q0Msb0JBQW9CTCxjQUFjRSxPQUFPLElBQ3pDSSxvQkFBb0JOLGNBQWNJLE9BQU8sSUFDekNHLG1FQUFtRUosaUJBQWlCSyxpQ0FBaUMsQ0FBQ0Y7b0JBRTVILElBQUlDLGtFQUFrRTt3QkFDcEUsSUFBTUUsK0NBQStDTixpQkFBaUJPLGFBQWEsQ0FBQ0osb0JBQzlFSywrQ0FBK0NMLGtCQUFrQkksYUFBYSxDQUFDUDt3QkFFckYsSUFBSU0sOENBQThDOzRCQUNoRCxJQUFNRyxPQUFPWCxrQkFDUFksT0FBT1AsbUJBQW9CLEdBQUc7NEJBRXBDUSxpQkFBaUJGLE1BQU1DLE1BQU0xQixZQUFZckI7d0JBQzNDLENBQUM7d0JBRUQsSUFBSTZDLDhDQUE4Qzs0QkFDaEQsSUFBTUMsUUFBT1AsbUJBQ1BRLFFBQU9WLGtCQUFtQixHQUFHOzRCQUVuQ1csaUJBQWlCRixPQUFNQyxPQUFNMUIsWUFBWXJCO3dCQUMzQyxDQUFDO29CQUNILENBQUM7Z0JBQ0gsT0FBTyxJQUFJMEIsNEJBQTRCO29CQUNyQyxJQUFNdUIsUUFBUSxFQUFFO29CQUVoQkMsSUFBQUEsYUFBVSxFQUFDekIsZUFBZXdCLE9BQU9qRDtvQkFFakMsSUFBTW1ELFlBQVlyQixJQUFBQSxZQUFLLEVBQUNtQixRQUNsQnBCLGlCQUFnQkMsSUFBQUEsWUFBSyxFQUFDUCxZQUN0QlUsZ0JBQWVKLGdCQUNmdUIsZ0JBQWdCRCxXQUNoQmhCLG9CQUFtQkYsY0FBYUcsT0FBTyxJQUN2Q0Msb0JBQW1CSixjQUFhSyxPQUFPLElBQ3ZDZSxvREFBb0RoQixrQkFBaUJpQixzQkFBc0IsQ0FBQ0Y7b0JBRWxHLElBQUlDLG1EQUFtRDt3QkFDckQsSUFBTVAsUUFBT1gsbUJBQ1BZLFFBQU9LLGVBQWUsR0FBRzt3QkFFL0JKLGlCQUFpQkYsT0FBTUMsT0FBTTFCLFlBQVlyQjtvQkFDM0MsQ0FBQztnQkFDSCxPQUFPLElBQUk0Qiw2QkFBNkI7b0JBQ3RDLElBQU1xQixTQUFRLEVBQUU7b0JBRWhCQyxJQUFBQSxhQUFVLEVBQUMxQixjQUFjeUIsUUFBT2pEO29CQUVoQyxJQUFNbUQsYUFBWXJCLElBQUFBLFlBQUssRUFBQ21CLFNBQ2xCcEIsaUJBQWdCQyxJQUFBQSxZQUFLLEVBQUNQLFlBQ3RCZ0MsZUFBZUosWUFDZmpCLGlCQUFnQkwsZ0JBQ2hCVSxxQkFBb0JMLGVBQWNFLE9BQU8sSUFDekNJLHFCQUFvQk4sZUFBY0ksT0FBTyxJQUN6Q2tCLHFEQUFxRGhCLG1CQUFrQmMsc0JBQXNCLENBQUNDO29CQUVwRyxJQUFJQyxvREFBb0Q7d0JBQ3RELElBQU1WLFFBQU9QLG9CQUNQUSxRQUFPUSxjQUFjLEdBQUc7d0JBRTlCUCxpQkFBaUJGLE9BQU1DLE9BQU0xQixZQUFZckI7b0JBQzNDLENBQUM7Z0JBQ0gsQ0FBQztnQkFFREMsd0JBQXdCLElBQUk7WUFDOUIsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBSUEsdUJBQXVCO1FBQ3pCRCxRQUFReUQsSUFBSSxDQUFDLEFBQUMsaUJBQW9DLE9BQXBCdkQscUJBQW9CLHNCQUFvQkg7SUFDeEUsQ0FBQztJQUVELE9BQU9FO0FBQ1Q7QUFFQSxTQUFTK0MsaUJBQWlCRixJQUFJLEVBQUVDLElBQUksRUFBRTFCLFVBQVUsRUFBRXJCLE9BQU8sRUFBRTtJQUN6RCxJQUFNMEQsK0JBQStCckMsV0FBV3NDLGdCQUFnQixDQUFDYixNQUFNQztJQUV2RSxJQUFJVyw4QkFBOEI7UUFDaENyQyxXQUFXdUMsTUFBTSxDQUFDNUQ7SUFDcEIsQ0FBQztBQUNIIn0=