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
var _equality1 = /*#__PURE__*/ _interop_require_default(require("../ocmbinator/equality"));
var _query = require("../utilities/query");
var _array = require("../utilities/array");
var _type = require("./assertion/type");
var _statement = require("../verify/statement");
var _proof = require("../utilities/proof");
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
        var combinator = _equality1.default, statementVerifiedAgainstCombinator = (0, _statement.verifyStatementAgainstCombinator)(statementNode, combinator, context);
        if (!statementVerifiedAgainstCombinator) {
            context.error("The '".concat(statementString, "' statement is not an equality."), typeInferenceNode);
        } else {
            var derived = false, equality = _equality.default.fromStatementNode(statementNode), assignments = [], typeAssertionNode = typeAssertionNodeQuery(typeInferenceNode), variableTypeAssertionVerified = (0, _type.verifyVariableTypeAssertion)(typeAssertionNode, assignments, derived, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdHlwZUluZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVxdWFsaXR5IGZyb20gXCIuLi9lcXVhbGl0eVwiO1xuaW1wb3J0IHZlcmlmeVRlcm0gZnJvbSBcIi4vdGVybVwiO1xuaW1wb3J0IGVxdWFsaXR5Q29tYmluYXRvciBmcm9tIFwiLi4vb2NtYmluYXRvci9lcXVhbGl0eVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgdmVyaWZ5VGVybUFzVmFyaWFibGUgfSBmcm9tIFwiLi90ZXJtXCI7XG5pbXBvcnQgeyB2ZXJpZnlWYXJpYWJsZVR5cGVBc3NlcnRpb24gfSBmcm9tIFwiLi9hc3NlcnRpb24vdHlwZVwiO1xuaW1wb3J0IHsgdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3IgfSBmcm9tIFwiLi4vdmVyaWZ5L3N0YXRlbWVudFwiO1xuaW1wb3J0IHsgYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlRnJvbVN0YXRlbWVudE5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Byb29mXCI7XG5cbmNvbnN0IHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlSW5mZXJlbmNlL3N0YXRlbWVudCFcIiksXG4gICAgICB0eXBlQXNzZXJ0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVJbmZlcmVuY2UvdHlwZUFzc2VydGlvbiFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVR5cGVJbmZlcmVuY2UodHlwZUluZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGVJbmZlcmVuY2VWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGVJbmZlcmVuY2VTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlSW5mZXJlbmNlTm9kZSk7XG5cbiAgY29udGV4dC5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlSW5mZXJlbmNlU3RyaW5nfScgdHlwZSBpbmZlcmVuY2UuLi5gLCB0eXBlSW5mZXJlbmNlTm9kZSk7XG5cbiAgbGV0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkodHlwZUluZmVyZW5jZU5vZGUpO1xuXG4gIGNvbnN0IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZSA9IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gIGlmIChicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnROb2RlID0gYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlOyAvLy9cbiAgfVxuXG4gIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnRNYXRjaGVzID0gY29udGV4dC5tYXRjaFN0YXRlbWVudChzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAoIXN0YXRlbWVudE1hdGNoZXMpIHtcbiAgICBjb250ZXh0LmVycm9yKGBUaGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGlzIG5vdCBwcmVzZW50IGluIHRoZSBjb250ZXh0LmAsIHR5cGVJbmZlcmVuY2VOb2RlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBjb21iaW5hdG9yID0gZXF1YWxpdHlDb21iaW5hdG9yLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvciA9IHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yKHN0YXRlbWVudE5vZGUsIGNvbWJpbmF0b3IsIGNvbnRleHQpO1xuXG4gICAgaWYgKCFzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yKSB7XG4gICAgICBjb250ZXh0LmVycm9yKGBUaGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGlzIG5vdCBhbiBlcXVhbGl0eS5gLCB0eXBlSW5mZXJlbmNlTm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRlcml2ZWQgPSBmYWxzZSwgIC8vL1xuICAgICAgICAgICAgZXF1YWxpdHkgPSBFcXVhbGl0eS5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgICAgICB0eXBlQXNzZXJ0aW9uTm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlUXVlcnkodHlwZUluZmVyZW5jZU5vZGUpLFxuICAgICAgICAgICAgdmFyaWFibGVUeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlWYXJpYWJsZVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0KVxuXG4gICAgICBpZiAodmFyaWFibGVUeXBlQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgZmlyc3RBc3NpZ25tZW50ID0gZmlyc3QoYXNzaWdubWVudHMpLFxuICAgICAgICAgICAgICBhc3NpZ25tZW50ID0gZmlyc3RBc3NpZ25tZW50LCAvLy9cbiAgICAgICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgICAgIGxlZnRUZXJtTm9kZSA9IGVxdWFsaXR5LmdldExlZnRUZXJtTm9kZSgpLFxuICAgICAgICAgICAgICByaWdodFRlcm1Ob2RlID0gZXF1YWxpdHkuZ2V0UmlnaHRUZXJtTm9kZSgpLFxuICAgICAgICAgICAgICBsZWZ0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IHZlcmlmeVRlcm1Bc1ZhcmlhYmxlKGxlZnRUZXJtTm9kZSwgdmFyaWFibGVzLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgcmlnaHRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gdmVyaWZ5VGVybUFzVmFyaWFibGUocmlnaHRUZXJtTm9kZSwgdmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAobGVmdFRlcm1WZXJpZmllZEFzVmFyaWFibGUgJiYgcmlnaHRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlKSB7XG4gICAgICAgICAgY29uc3QgZmlyc3RWYXJpYWJsZSA9IGZpcnN0KHZhcmlhYmxlcyksXG4gICAgICAgICAgICAgICAgc2Vjb25kVmFyaWFibGUgPSBzZWNvbmQodmFyaWFibGVzKSxcbiAgICAgICAgICAgICAgICBsZWZ0VmFyaWFibGUgPSBmaXJzdFZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgICAgICByaWdodFZhcmlhYmxlID0gc2Vjb25kVmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICAgIGxlZnRWYXJpYWJsZU5hbWUgPSBsZWZ0VmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIGxlZnRWYXJpYWJsZVR5cGUgPSBsZWZ0VmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgIHJpZ2h0VmFyaWFibGVOYW1lID0gcmlnaHRWYXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZVR5cGUgPSByaWdodFZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICBsZWZ0VmFyaWFibGVUeXBlRXF1YWxUb09yU3ViVHlwZU9mT2ZTdXBlclR5cGVPZlJpZ2h0VmFyaWFibGVUeXBlID0gbGVmdFZhcmlhYmxlVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2YocmlnaHRWYXJpYWJsZVR5cGUpO1xuXG4gICAgICAgICAgaWYgKGxlZnRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mUmlnaHRWYXJpYWJsZVR5cGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGxlZnRWYXJpYWJsZVR5cGVTdXBlclR5cGVPZlJpZ2h0VmFyaWFibGVUeXBlID0gbGVmdFZhcmlhYmxlVHlwZS5pc1N1cGVyVHlwZU9mKHJpZ2h0VmFyaWFibGVUeXBlKSxcbiAgICAgICAgICAgICAgICAgIHJpZ2h0VmFyaWFibGVUeXBlU3VwZXJUeXBlT2ZMZWZ0VmFyaWFibGVUeXBlID0gcmlnaHRWYXJpYWJsZVR5cGUuaXNTdXBlclR5cGVPZihsZWZ0VmFyaWFibGVUeXBlKTtcblxuICAgICAgICAgICAgaWYgKGxlZnRWYXJpYWJsZVR5cGVTdXBlclR5cGVPZlJpZ2h0VmFyaWFibGVUeXBlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBsZWZ0VmFyaWFibGVOYW1lLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IHJpZ2h0VmFyaWFibGVUeXBlOyAgLy8vXG5cbiAgICAgICAgICAgICAgYXNzaWduQXNzaWdubWVudChuYW1lLCB0eXBlLCBhc3NpZ25tZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJpZ2h0VmFyaWFibGVUeXBlU3VwZXJUeXBlT2ZMZWZ0VmFyaWFibGVUeXBlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSByaWdodFZhcmlhYmxlTmFtZSwgLy8vXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBsZWZ0VmFyaWFibGVUeXBlOyAgLy8vXG5cbiAgICAgICAgICAgICAgYXNzaWduQXNzaWdubWVudChuYW1lLCB0eXBlLCBhc3NpZ25tZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobGVmdFRlcm1WZXJpZmllZEFzVmFyaWFibGUpIHtcbiAgICAgICAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgICAgICAgdmVyaWZ5VGVybShyaWdodFRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCk7XG5cbiAgICAgICAgICBjb25zdCBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgICAgICAgZmlyc3RWYXJpYWJsZSA9IGZpcnN0KHZhcmlhYmxlcyksXG4gICAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlID0gZmlyc3RWYXJpYWJsZSwgLy8vXG4gICAgICAgICAgICAgICAgcmlnaHRUZXJtVHlwZSA9IGZpcnN0VHlwZSwgIC8vL1xuICAgICAgICAgICAgICAgIGxlZnRWYXJpYWJsZU5hbWUgPSBsZWZ0VmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIGxlZnRWYXJpYWJsZVR5cGUgPSBsZWZ0VmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgIGxlZnRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlJpZ2h0VGVybVR5cGUgPSBsZWZ0VmFyaWFibGVUeXBlLmlzRXF1YWxUb09yU3VwZXJUeXBlT2YocmlnaHRUZXJtVHlwZSk7XG5cbiAgICAgICAgICBpZiAobGVmdFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSkge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGxlZnRWYXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICAgICAgICAgIHR5cGUgPSByaWdodFRlcm1UeXBlOyAvLy9cblxuICAgICAgICAgICAgYXNzaWduQXNzaWdubWVudChuYW1lLCB0eXBlLCBhc3NpZ25tZW50LCBjb250ZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocmlnaHRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlKSB7XG4gICAgICAgICAgY29uc3QgdHlwZXMgPSBbXTtcblxuICAgICAgICAgIHZlcmlmeVRlcm0obGVmdFRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCk7XG5cbiAgICAgICAgICBjb25zdCBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgICAgICAgZmlyc3RWYXJpYWJsZSA9IGZpcnN0KHZhcmlhYmxlcyksXG4gICAgICAgICAgICAgICAgbGVmdFRlcm1UeXBlID0gZmlyc3RUeXBlLCAgLy8vXG4gICAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZSA9IGZpcnN0VmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICAgIHJpZ2h0VmFyaWFibGVOYW1lID0gcmlnaHRWYXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZVR5cGUgPSByaWdodFZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICByaWdodFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSA9IHJpZ2h0VmFyaWFibGVUeXBlLmlzRXF1YWxUb09yU3VwZXJUeXBlT2YobGVmdFRlcm1UeXBlKTtcblxuICAgICAgICAgIGlmIChyaWdodFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSkge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHJpZ2h0VmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgICAgICAgICB0eXBlID0gbGVmdFRlcm1UeXBlOyAvLy9cblxuICAgICAgICAgICAgYXNzaWduQXNzaWdubWVudChuYW1lLCB0eXBlLCBhc3NpZ25tZW50LCBjb250ZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0eXBlSW5mZXJlbmNlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlSW5mZXJlbmNlVmVyaWZpZWQpIHtcbiAgICBjb250ZXh0LmluZm8oYFZlcmlmaWVkIHRoZSAnJHt0eXBlSW5mZXJlbmNlU3RyaW5nfScgdHlwZSBpbmZlcmVuY2UuYCwgdHlwZUluZmVyZW5jZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVJbmZlcmVuY2VWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gYXNzaWduQXNzaWdubWVudChuYW1lLCB0eXBlLCBhc3NpZ25tZW50LCBjb250ZXh0KSB7XG4gIGNvbnN0IGFzc2lnbm1lbnRNYXRjaGVzTmFtZUFuZFR5cGUgPSBhc3NpZ25tZW50Lm1hdGNoTmFtZUFuZFR5cGUobmFtZSwgdHlwZSk7XG5cbiAgaWYgKGFzc2lnbm1lbnRNYXRjaGVzTmFtZUFuZFR5cGUpIHtcbiAgICBhc3NpZ25tZW50LmFzc2lnbihjb250ZXh0KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInZlcmlmeVR5cGVJbmZlcmVuY2UiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlQXNzZXJ0aW9uTm9kZVF1ZXJ5IiwidHlwZUluZmVyZW5jZU5vZGUiLCJjb250ZXh0IiwidHlwZUluZmVyZW5jZVZlcmlmaWVkIiwidHlwZUluZmVyZW5jZVN0cmluZyIsIm5vZGVBc1N0cmluZyIsImRlYnVnIiwic3RhdGVtZW50Tm9kZSIsImJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZSIsImJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZUZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50U3RyaW5nIiwic3RhdGVtZW50TWF0Y2hlcyIsIm1hdGNoU3RhdGVtZW50IiwiZXJyb3IiLCJjb21iaW5hdG9yIiwiZXF1YWxpdHlDb21iaW5hdG9yIiwic3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvciIsInZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yIiwiZGVyaXZlZCIsImVxdWFsaXR5IiwiRXF1YWxpdHkiLCJmcm9tU3RhdGVtZW50Tm9kZSIsImFzc2lnbm1lbnRzIiwidHlwZUFzc2VydGlvbk5vZGUiLCJ2YXJpYWJsZVR5cGVBc3NlcnRpb25WZXJpZmllZCIsInZlcmlmeVZhcmlhYmxlVHlwZUFzc2VydGlvbiIsImZpcnN0QXNzaWdubWVudCIsImZpcnN0IiwiYXNzaWdubWVudCIsInZhcmlhYmxlcyIsImxlZnRUZXJtTm9kZSIsImdldExlZnRUZXJtTm9kZSIsInJpZ2h0VGVybU5vZGUiLCJnZXRSaWdodFRlcm1Ob2RlIiwibGVmdFRlcm1WZXJpZmllZEFzVmFyaWFibGUiLCJ2ZXJpZnlUZXJtQXNWYXJpYWJsZSIsInJpZ2h0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSIsImZpcnN0VmFyaWFibGUiLCJzZWNvbmRWYXJpYWJsZSIsInNlY29uZCIsImxlZnRWYXJpYWJsZSIsInJpZ2h0VmFyaWFibGUiLCJsZWZ0VmFyaWFibGVOYW1lIiwiZ2V0TmFtZSIsImxlZnRWYXJpYWJsZVR5cGUiLCJnZXRUeXBlIiwicmlnaHRWYXJpYWJsZU5hbWUiLCJyaWdodFZhcmlhYmxlVHlwZSIsImxlZnRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mUmlnaHRWYXJpYWJsZVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2YiLCJsZWZ0VmFyaWFibGVUeXBlU3VwZXJUeXBlT2ZSaWdodFZhcmlhYmxlVHlwZSIsImlzU3VwZXJUeXBlT2YiLCJyaWdodFZhcmlhYmxlVHlwZVN1cGVyVHlwZU9mTGVmdFZhcmlhYmxlVHlwZSIsIm5hbWUiLCJ0eXBlIiwiYXNzaWduQXNzaWdubWVudCIsInR5cGVzIiwidmVyaWZ5VGVybSIsImZpcnN0VHlwZSIsInJpZ2h0VGVybVR5cGUiLCJsZWZ0VmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZSaWdodFRlcm1UeXBlIiwiaXNFcXVhbFRvT3JTdXBlclR5cGVPZiIsImxlZnRUZXJtVHlwZSIsInJpZ2h0VmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZSaWdodFRlcm1UeXBlIiwiaW5mbyIsImFzc2lnbm1lbnRNYXRjaGVzTmFtZUFuZFR5cGUiLCJtYXRjaE5hbWVBbmRUeXBlIiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnQkE7OztlQUF3QkE7OzsrREFkSDs0REFDRTtnRUFDUTtxQkFFTDtxQkFDSTtvQkFFYzt5QkFDSztxQkFDWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0QsSUFBTUMscUJBQXFCQyxJQUFBQSxnQkFBUyxFQUFDLDhCQUMvQkMseUJBQXlCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRTFCLFNB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