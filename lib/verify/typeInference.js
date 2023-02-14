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
                var firstAssignment = (0, _array.first)(assignments), assignment = firstAssignment, variables = [], leftTermNode = leftTermNodeQuery(statementNode), rightTermNode = rightTermNodeQuery(statementNode), leftTermVerifiedAsVariable = (0, _term.verifyTermAsVariable)(leftTermNode, variables, context), rightTermVerifiedAsVariable = (0, _term.verifyTermAsVariable)(rightTermNode, variables, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdHlwZUluZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeVRlcm0gZnJvbSBcIi4vdGVybVwiO1xuaW1wb3J0IGVxdWFsaXR5Q29tYmluYXRvciBmcm9tIFwiLi4vb2NtYmluYXRvci9lcXVhbGl0eVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgdmVyaWZ5VGVybUFzVmFyaWFibGUgfSBmcm9tIFwiLi90ZXJtXCI7XG5pbXBvcnQgeyB2ZXJpZnlWYXJpYWJsZVR5cGVBc3NlcnRpb24gfSBmcm9tIFwiLi9hc3NlcnRpb24vdHlwZVwiO1xuaW1wb3J0IHsgdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3IgfSBmcm9tIFwiLi4vdmVyaWZ5L3N0YXRlbWVudFwiO1xuaW1wb3J0IHsgYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlRnJvbVN0YXRlbWVudE5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Byb29mXCI7XG5cbmNvbnN0IGxlZnRUZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9hcmd1bWVudFswXS90ZXJtIVwiKSxcbiAgICAgIHJpZ2h0VGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvYXJndW1lbnRbMV0vdGVybSFcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZUluZmVyZW5jZS9zdGF0ZW1lbnQhXCIpLFxuICAgICAgdHlwZUFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlSW5mZXJlbmNlL3R5cGVBc3NlcnRpb24hXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlUeXBlSW5mZXJlbmNlKHR5cGVJbmZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGxldCB0eXBlSW5mZXJlbmNlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB0eXBlSW5mZXJlbmNlU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodHlwZUluZmVyZW5jZU5vZGUpO1xuXG4gIGNvbnRleHQuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7dHlwZUluZmVyZW5jZVN0cmluZ30nIHR5cGUgaW5mZXJlbmNlLi4uYCwgdHlwZUluZmVyZW5jZU5vZGUpO1xuXG4gIGxldCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KHR5cGVJbmZlcmVuY2VOb2RlKTtcblxuICBjb25zdCBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUgPSBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGVGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAoYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50Tm9kZSA9IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZTsgLy8vXG4gIH1cblxuICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgc3RhdGVtZW50TWF0Y2hlcyA9IGNvbnRleHQubWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKCFzdGF0ZW1lbnRNYXRjaGVzKSB7XG4gICAgY29udGV4dC5lcnJvcihgVGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBpcyBub3QgcHJlc2VudCBpbiB0aGUgY29udGV4dC5gLCB0eXBlSW5mZXJlbmNlTm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgY29tYmluYXRvciA9IGVxdWFsaXR5Q29tYmluYXRvciwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IgPSB2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcihzdGF0ZW1lbnROb2RlLCBjb21iaW5hdG9yLCBjb250ZXh0KTtcblxuICAgIGlmICghc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcikge1xuICAgICAgY29udGV4dC5lcnJvcihgVGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBpcyBub3QgYW4gZXF1YWxpdHkuYCwgdHlwZUluZmVyZW5jZU5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkZXJpdmVkID0gZmFsc2UsICAvLy9cbiAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgICAgICB0eXBlQXNzZXJ0aW9uTm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlUXVlcnkodHlwZUluZmVyZW5jZU5vZGUpLFxuICAgICAgICAgICAgdmFyaWFibGVUeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlWYXJpYWJsZVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0KVxuXG4gICAgICBpZiAodmFyaWFibGVUeXBlQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgZmlyc3RBc3NpZ25tZW50ID0gZmlyc3QoYXNzaWdubWVudHMpLFxuICAgICAgICAgICAgICBhc3NpZ25tZW50ID0gZmlyc3RBc3NpZ25tZW50LCAvLy9cbiAgICAgICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgICAgIGxlZnRUZXJtTm9kZSA9IGxlZnRUZXJtTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgICByaWdodFRlcm1Ob2RlID0gcmlnaHRUZXJtTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgICBsZWZ0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IHZlcmlmeVRlcm1Bc1ZhcmlhYmxlKGxlZnRUZXJtTm9kZSwgdmFyaWFibGVzLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgcmlnaHRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gdmVyaWZ5VGVybUFzVmFyaWFibGUocmlnaHRUZXJtTm9kZSwgdmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAobGVmdFRlcm1WZXJpZmllZEFzVmFyaWFibGUgJiYgcmlnaHRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlKSB7XG4gICAgICAgICAgY29uc3QgZmlyc3RWYXJpYWJsZSA9IGZpcnN0KHZhcmlhYmxlcyksXG4gICAgICAgICAgICAgICAgc2Vjb25kVmFyaWFibGUgPSBzZWNvbmQodmFyaWFibGVzKSxcbiAgICAgICAgICAgICAgICBsZWZ0VmFyaWFibGUgPSBmaXJzdFZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgICAgICByaWdodFZhcmlhYmxlID0gc2Vjb25kVmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICAgIGxlZnRWYXJpYWJsZU5hbWUgPSBsZWZ0VmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIGxlZnRWYXJpYWJsZVR5cGUgPSBsZWZ0VmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgIHJpZ2h0VmFyaWFibGVOYW1lID0gcmlnaHRWYXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZVR5cGUgPSByaWdodFZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICBsZWZ0VmFyaWFibGVUeXBlRXF1YWxUb09yU3ViVHlwZU9mT2ZTdXBlclR5cGVPZlJpZ2h0VmFyaWFibGVUeXBlID0gbGVmdFZhcmlhYmxlVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2YocmlnaHRWYXJpYWJsZVR5cGUpO1xuXG4gICAgICAgICAgaWYgKGxlZnRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mUmlnaHRWYXJpYWJsZVR5cGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGxlZnRWYXJpYWJsZVR5cGVTdXBlclR5cGVPZlJpZ2h0VmFyaWFibGVUeXBlID0gbGVmdFZhcmlhYmxlVHlwZS5pc1N1cGVyVHlwZU9mKHJpZ2h0VmFyaWFibGVUeXBlKSxcbiAgICAgICAgICAgICAgICAgIHJpZ2h0VmFyaWFibGVUeXBlU3VwZXJUeXBlT2ZMZWZ0VmFyaWFibGVUeXBlID0gcmlnaHRWYXJpYWJsZVR5cGUuaXNTdXBlclR5cGVPZihsZWZ0VmFyaWFibGVUeXBlKTtcblxuICAgICAgICAgICAgaWYgKGxlZnRWYXJpYWJsZVR5cGVTdXBlclR5cGVPZlJpZ2h0VmFyaWFibGVUeXBlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBsZWZ0VmFyaWFibGVOYW1lLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IHJpZ2h0VmFyaWFibGVUeXBlOyAgLy8vXG5cbiAgICAgICAgICAgICAgYXNzaWduQXNzaWdubWVudChuYW1lLCB0eXBlLCBhc3NpZ25tZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJpZ2h0VmFyaWFibGVUeXBlU3VwZXJUeXBlT2ZMZWZ0VmFyaWFibGVUeXBlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSByaWdodFZhcmlhYmxlTmFtZSwgLy8vXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBsZWZ0VmFyaWFibGVUeXBlOyAgLy8vXG5cbiAgICAgICAgICAgICAgYXNzaWduQXNzaWdubWVudChuYW1lLCB0eXBlLCBhc3NpZ25tZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobGVmdFRlcm1WZXJpZmllZEFzVmFyaWFibGUpIHtcbiAgICAgICAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgICAgICAgdmVyaWZ5VGVybShyaWdodFRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCk7XG5cbiAgICAgICAgICBjb25zdCBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgICAgICAgZmlyc3RWYXJpYWJsZSA9IGZpcnN0KHZhcmlhYmxlcyksXG4gICAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlID0gZmlyc3RWYXJpYWJsZSwgLy8vXG4gICAgICAgICAgICAgICAgcmlnaHRUZXJtVHlwZSA9IGZpcnN0VHlwZSwgIC8vL1xuICAgICAgICAgICAgICAgIGxlZnRWYXJpYWJsZU5hbWUgPSBsZWZ0VmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIGxlZnRWYXJpYWJsZVR5cGUgPSBsZWZ0VmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgIGxlZnRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlJpZ2h0VGVybVR5cGUgPSBsZWZ0VmFyaWFibGVUeXBlLmlzRXF1YWxUb09yU3VwZXJUeXBlT2YocmlnaHRUZXJtVHlwZSk7XG5cbiAgICAgICAgICBpZiAobGVmdFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSkge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGxlZnRWYXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICAgICAgICAgIHR5cGUgPSByaWdodFRlcm1UeXBlOyAvLy9cblxuICAgICAgICAgICAgYXNzaWduQXNzaWdubWVudChuYW1lLCB0eXBlLCBhc3NpZ25tZW50LCBjb250ZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocmlnaHRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlKSB7XG4gICAgICAgICAgY29uc3QgdHlwZXMgPSBbXTtcblxuICAgICAgICAgIHZlcmlmeVRlcm0obGVmdFRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCk7XG5cbiAgICAgICAgICBjb25zdCBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgICAgICAgZmlyc3RWYXJpYWJsZSA9IGZpcnN0KHZhcmlhYmxlcyksXG4gICAgICAgICAgICAgICAgbGVmdFRlcm1UeXBlID0gZmlyc3RUeXBlLCAgLy8vXG4gICAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZSA9IGZpcnN0VmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICAgIHJpZ2h0VmFyaWFibGVOYW1lID0gcmlnaHRWYXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZVR5cGUgPSByaWdodFZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICByaWdodFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSA9IHJpZ2h0VmFyaWFibGVUeXBlLmlzRXF1YWxUb09yU3VwZXJUeXBlT2YobGVmdFRlcm1UeXBlKTtcblxuICAgICAgICAgIGlmIChyaWdodFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSkge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHJpZ2h0VmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgICAgICAgICB0eXBlID0gbGVmdFRlcm1UeXBlOyAvLy9cblxuICAgICAgICAgICAgYXNzaWduQXNzaWdubWVudChuYW1lLCB0eXBlLCBhc3NpZ25tZW50LCBjb250ZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0eXBlSW5mZXJlbmNlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlSW5mZXJlbmNlVmVyaWZpZWQpIHtcbiAgICBjb250ZXh0LmluZm8oYFZlcmlmaWVkIHRoZSAnJHt0eXBlSW5mZXJlbmNlU3RyaW5nfScgdHlwZSBpbmZlcmVuY2UuYCwgdHlwZUluZmVyZW5jZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVJbmZlcmVuY2VWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gYXNzaWduQXNzaWdubWVudChuYW1lLCB0eXBlLCBhc3NpZ25tZW50LCBjb250ZXh0KSB7XG4gIGNvbnN0IGFzc2lnbm1lbnRNYXRjaGVzTmFtZUFuZFR5cGUgPSBhc3NpZ25tZW50Lm1hdGNoTmFtZUFuZFR5cGUobmFtZSwgdHlwZSk7XG5cbiAgaWYgKGFzc2lnbm1lbnRNYXRjaGVzTmFtZUFuZFR5cGUpIHtcbiAgICBhc3NpZ25tZW50LmFzc2lnbihjb250ZXh0KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInZlcmlmeVR5cGVJbmZlcmVuY2UiLCJsZWZ0VGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInJpZ2h0VGVybU5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsInR5cGVBc3NlcnRpb25Ob2RlUXVlcnkiLCJ0eXBlSW5mZXJlbmNlTm9kZSIsImNvbnRleHQiLCJ0eXBlSW5mZXJlbmNlVmVyaWZpZWQiLCJ0eXBlSW5mZXJlbmNlU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiZGVidWciLCJzdGF0ZW1lbnROb2RlIiwiYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlIiwiYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlRnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRTdHJpbmciLCJzdGF0ZW1lbnRNYXRjaGVzIiwibWF0Y2hTdGF0ZW1lbnQiLCJlcnJvciIsImNvbWJpbmF0b3IiLCJlcXVhbGl0eUNvbWJpbmF0b3IiLCJzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yIiwidmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3IiLCJkZXJpdmVkIiwiYXNzaWdubWVudHMiLCJ0eXBlQXNzZXJ0aW9uTm9kZSIsInZhcmlhYmxlVHlwZUFzc2VydGlvblZlcmlmaWVkIiwidmVyaWZ5VmFyaWFibGVUeXBlQXNzZXJ0aW9uIiwiZmlyc3RBc3NpZ25tZW50IiwiZmlyc3QiLCJhc3NpZ25tZW50IiwidmFyaWFibGVzIiwibGVmdFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsImxlZnRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlIiwidmVyaWZ5VGVybUFzVmFyaWFibGUiLCJyaWdodFRlcm1WZXJpZmllZEFzVmFyaWFibGUiLCJmaXJzdFZhcmlhYmxlIiwic2Vjb25kVmFyaWFibGUiLCJzZWNvbmQiLCJsZWZ0VmFyaWFibGUiLCJyaWdodFZhcmlhYmxlIiwibGVmdFZhcmlhYmxlTmFtZSIsImdldE5hbWUiLCJsZWZ0VmFyaWFibGVUeXBlIiwiZ2V0VHlwZSIsInJpZ2h0VmFyaWFibGVOYW1lIiwicmlnaHRWYXJpYWJsZVR5cGUiLCJsZWZ0VmFyaWFibGVUeXBlRXF1YWxUb09yU3ViVHlwZU9mT2ZTdXBlclR5cGVPZlJpZ2h0VmFyaWFibGVUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mIiwibGVmdFZhcmlhYmxlVHlwZVN1cGVyVHlwZU9mUmlnaHRWYXJpYWJsZVR5cGUiLCJpc1N1cGVyVHlwZU9mIiwicmlnaHRWYXJpYWJsZVR5cGVTdXBlclR5cGVPZkxlZnRWYXJpYWJsZVR5cGUiLCJuYW1lIiwidHlwZSIsImFzc2lnbkFzc2lnbm1lbnQiLCJ0eXBlcyIsInZlcmlmeVRlcm0iLCJmaXJzdFR5cGUiLCJyaWdodFRlcm1UeXBlIiwibGVmdFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSIsImlzRXF1YWxUb09yU3VwZXJUeXBlT2YiLCJsZWZ0VGVybVR5cGUiLCJyaWdodFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSIsImluZm8iLCJhc3NpZ25tZW50TWF0Y2hlc05hbWVBbmRUeXBlIiwibWF0Y2hOYW1lQW5kVHlwZSIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUJBOzs7ZUFBd0JBOzs7MERBZkQ7NkRBQ1E7cUJBRUw7cUJBQ0k7b0JBRWM7eUJBQ0s7cUJBQ1k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3RCxJQUFNQyxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMsaUNBQzlCQyxxQkFBcUJELElBQUFBLGdCQUFTLEVBQUMsaUNB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