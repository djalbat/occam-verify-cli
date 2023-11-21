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
var _type = require("./assertion/type");
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
    context.trace("Verifying the '".concat(typeInferenceString, "' type inference..."), typeInferenceNode);
    var statementNode = statementNodeQuery(typeInferenceNode);
    var bracketedStatementChildNode = (0, _proof.bracketedStatementChildNodeFromStatementNode)(statementNode);
    if (bracketedStatementChildNode !== null) {
        statementNode = bracketedStatementChildNode; ///
    }
    var statementString = context.nodeAsString(statementNode), statementMatches = context.matchStatement(statementNode);
    if (!statementMatches) {
        context.info("The '".concat(statementString, "' statement is not present in the context."), typeInferenceNode);
    } else {
        var depth = _constants.EQUALITY_DEPTH, statementNodeMatchesEqualityStatementNode = statementNode.match(_equality1.default, depth);
        if (!statementNodeMatchesEqualityStatementNode) {
            context.info("The '".concat(statementString, "' statement is not an equality."), typeInferenceNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdHlwZUluZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVxdWFsaXR5IGZyb20gXCIuLi9lcXVhbGl0eVwiO1xuaW1wb3J0IHZlcmlmeVRlcm0gZnJvbSBcIi4vdGVybVwiO1xuaW1wb3J0IGVxdWFsaXR5U3RhdGVtZW50Tm9kZSBmcm9tIFwiLi4vbm9kZS9zdGF0ZW1lbnQvZXF1YWxpdHlcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IEVRVUFMSVRZX0RFUFRIIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgdmVyaWZ5VGVybUFzVmFyaWFibGUgfSBmcm9tIFwiLi90ZXJtXCI7XG5pbXBvcnQgeyB2ZXJpZnlWYXJpYWJsZVR5cGVBc3NlcnRpb24gfSBmcm9tIFwiLi9hc3NlcnRpb24vdHlwZVwiO1xuaW1wb3J0IHsgYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlRnJvbVN0YXRlbWVudE5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Byb29mXCI7XG5cbmNvbnN0IHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlSW5mZXJlbmNlL3N0YXRlbWVudCFcIiksXG4gICAgICB0eXBlQXNzZXJ0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVJbmZlcmVuY2UvdHlwZUFzc2VydGlvbiFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVR5cGVJbmZlcmVuY2UodHlwZUluZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGVJbmZlcmVuY2VWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGVJbmZlcmVuY2VTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlSW5mZXJlbmNlTm9kZSk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlSW5mZXJlbmNlU3RyaW5nfScgdHlwZSBpbmZlcmVuY2UuLi5gLCB0eXBlSW5mZXJlbmNlTm9kZSk7XG5cbiAgbGV0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkodHlwZUluZmVyZW5jZU5vZGUpO1xuXG4gIGNvbnN0IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZSA9IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gIGlmIChicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnROb2RlID0gYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlOyAvLy9cbiAgfVxuXG4gIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnRNYXRjaGVzID0gY29udGV4dC5tYXRjaFN0YXRlbWVudChzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAoIXN0YXRlbWVudE1hdGNoZXMpIHtcbiAgICBjb250ZXh0LmluZm8oYFRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgaXMgbm90IHByZXNlbnQgaW4gdGhlIGNvbnRleHQuYCwgdHlwZUluZmVyZW5jZU5vZGUpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGRlcHRoID0gRVFVQUxJVFlfREVQVEgsXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZU1hdGNoZXNFcXVhbGl0eVN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlLm1hdGNoKGVxdWFsaXR5U3RhdGVtZW50Tm9kZSwgZGVwdGgpO1xuXG4gICAgaWYgKCFzdGF0ZW1lbnROb2RlTWF0Y2hlc0VxdWFsaXR5U3RhdGVtZW50Tm9kZSkge1xuICAgICAgY29udGV4dC5pbmZvKGBUaGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGlzIG5vdCBhbiBlcXVhbGl0eS5gLCB0eXBlSW5mZXJlbmNlTm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRlcml2ZWQgPSBmYWxzZSwgIC8vL1xuICAgICAgICAgICAgZXF1YWxpdHkgPSBFcXVhbGl0eS5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgICAgICB0eXBlQXNzZXJ0aW9uTm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlUXVlcnkodHlwZUluZmVyZW5jZU5vZGUpLFxuICAgICAgICAgICAgdmFyaWFibGVUeXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlWYXJpYWJsZVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0KVxuXG4gICAgICBpZiAodmFyaWFibGVUeXBlQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgZmlyc3RBc3NpZ25tZW50ID0gZmlyc3QoYXNzaWdubWVudHMpLFxuICAgICAgICAgICAgICBhc3NpZ25tZW50ID0gZmlyc3RBc3NpZ25tZW50LCAvLy9cbiAgICAgICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgICAgIGxlZnRUZXJtTm9kZSA9IGVxdWFsaXR5LmdldExlZnRUZXJtTm9kZSgpLFxuICAgICAgICAgICAgICByaWdodFRlcm1Ob2RlID0gZXF1YWxpdHkuZ2V0UmlnaHRUZXJtTm9kZSgpLFxuICAgICAgICAgICAgICBsZWZ0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IHZlcmlmeVRlcm1Bc1ZhcmlhYmxlKGxlZnRUZXJtTm9kZSwgdmFyaWFibGVzLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgcmlnaHRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gdmVyaWZ5VGVybUFzVmFyaWFibGUocmlnaHRUZXJtTm9kZSwgdmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAobGVmdFRlcm1WZXJpZmllZEFzVmFyaWFibGUgJiYgcmlnaHRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlKSB7XG4gICAgICAgICAgY29uc3QgZmlyc3RWYXJpYWJsZSA9IGZpcnN0KHZhcmlhYmxlcyksXG4gICAgICAgICAgICAgICAgc2Vjb25kVmFyaWFibGUgPSBzZWNvbmQodmFyaWFibGVzKSxcbiAgICAgICAgICAgICAgICBsZWZ0VmFyaWFibGUgPSBmaXJzdFZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgICAgICByaWdodFZhcmlhYmxlID0gc2Vjb25kVmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICAgIGxlZnRWYXJpYWJsZU5hbWUgPSBsZWZ0VmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIGxlZnRWYXJpYWJsZVR5cGUgPSBsZWZ0VmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgIHJpZ2h0VmFyaWFibGVOYW1lID0gcmlnaHRWYXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZVR5cGUgPSByaWdodFZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICBsZWZ0VmFyaWFibGVUeXBlRXF1YWxUb09yU3ViVHlwZU9mT2ZTdXBlclR5cGVPZlJpZ2h0VmFyaWFibGVUeXBlID0gbGVmdFZhcmlhYmxlVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2YocmlnaHRWYXJpYWJsZVR5cGUpO1xuXG4gICAgICAgICAgaWYgKGxlZnRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mUmlnaHRWYXJpYWJsZVR5cGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGxlZnRWYXJpYWJsZVR5cGVTdXBlclR5cGVPZlJpZ2h0VmFyaWFibGVUeXBlID0gbGVmdFZhcmlhYmxlVHlwZS5pc1N1cGVyVHlwZU9mKHJpZ2h0VmFyaWFibGVUeXBlKSxcbiAgICAgICAgICAgICAgICAgIHJpZ2h0VmFyaWFibGVUeXBlU3VwZXJUeXBlT2ZMZWZ0VmFyaWFibGVUeXBlID0gcmlnaHRWYXJpYWJsZVR5cGUuaXNTdXBlclR5cGVPZihsZWZ0VmFyaWFibGVUeXBlKTtcblxuICAgICAgICAgICAgaWYgKGxlZnRWYXJpYWJsZVR5cGVTdXBlclR5cGVPZlJpZ2h0VmFyaWFibGVUeXBlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBsZWZ0VmFyaWFibGVOYW1lLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IHJpZ2h0VmFyaWFibGVUeXBlOyAgLy8vXG5cbiAgICAgICAgICAgICAgYXNzaWduQXNzaWdubWVudChuYW1lLCB0eXBlLCBhc3NpZ25tZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJpZ2h0VmFyaWFibGVUeXBlU3VwZXJUeXBlT2ZMZWZ0VmFyaWFibGVUeXBlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSByaWdodFZhcmlhYmxlTmFtZSwgLy8vXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBsZWZ0VmFyaWFibGVUeXBlOyAgLy8vXG5cbiAgICAgICAgICAgICAgYXNzaWduQXNzaWdubWVudChuYW1lLCB0eXBlLCBhc3NpZ25tZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobGVmdFRlcm1WZXJpZmllZEFzVmFyaWFibGUpIHtcbiAgICAgICAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgICAgICAgdmVyaWZ5VGVybShyaWdodFRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCk7XG5cbiAgICAgICAgICBjb25zdCBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgICAgICAgZmlyc3RWYXJpYWJsZSA9IGZpcnN0KHZhcmlhYmxlcyksXG4gICAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlID0gZmlyc3RWYXJpYWJsZSwgLy8vXG4gICAgICAgICAgICAgICAgcmlnaHRUZXJtVHlwZSA9IGZpcnN0VHlwZSwgIC8vL1xuICAgICAgICAgICAgICAgIGxlZnRWYXJpYWJsZU5hbWUgPSBsZWZ0VmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIGxlZnRWYXJpYWJsZVR5cGUgPSBsZWZ0VmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgIGxlZnRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlJpZ2h0VGVybVR5cGUgPSBsZWZ0VmFyaWFibGVUeXBlLmlzRXF1YWxUb09yU3VwZXJUeXBlT2YocmlnaHRUZXJtVHlwZSk7XG5cbiAgICAgICAgICBpZiAobGVmdFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSkge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGxlZnRWYXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICAgICAgICAgIHR5cGUgPSByaWdodFRlcm1UeXBlOyAvLy9cblxuICAgICAgICAgICAgYXNzaWduQXNzaWdubWVudChuYW1lLCB0eXBlLCBhc3NpZ25tZW50LCBjb250ZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocmlnaHRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlKSB7XG4gICAgICAgICAgY29uc3QgdHlwZXMgPSBbXTtcblxuICAgICAgICAgIHZlcmlmeVRlcm0obGVmdFRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCk7XG5cbiAgICAgICAgICBjb25zdCBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgICAgICAgZmlyc3RWYXJpYWJsZSA9IGZpcnN0KHZhcmlhYmxlcyksXG4gICAgICAgICAgICAgICAgbGVmdFRlcm1UeXBlID0gZmlyc3RUeXBlLCAgLy8vXG4gICAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZSA9IGZpcnN0VmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICAgIHJpZ2h0VmFyaWFibGVOYW1lID0gcmlnaHRWYXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZVR5cGUgPSByaWdodFZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICByaWdodFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSA9IHJpZ2h0VmFyaWFibGVUeXBlLmlzRXF1YWxUb09yU3VwZXJUeXBlT2YobGVmdFRlcm1UeXBlKTtcblxuICAgICAgICAgIGlmIChyaWdodFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSkge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHJpZ2h0VmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgICAgICAgICB0eXBlID0gbGVmdFRlcm1UeXBlOyAvLy9cblxuICAgICAgICAgICAgYXNzaWduQXNzaWdubWVudChuYW1lLCB0eXBlLCBhc3NpZ25tZW50LCBjb250ZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0eXBlSW5mZXJlbmNlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlSW5mZXJlbmNlVmVyaWZpZWQpIHtcbiAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZUluZmVyZW5jZVN0cmluZ30nIHR5cGUgaW5mZXJlbmNlLmAsIHR5cGVJbmZlcmVuY2VOb2RlKTtcbiAgfVxuXG4gIHJldHVybiB0eXBlSW5mZXJlbmNlVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbkFzc2lnbm1lbnQobmFtZSwgdHlwZSwgYXNzaWdubWVudCwgY29udGV4dCkge1xuICBjb25zdCBhc3NpZ25tZW50TWF0Y2hlc05hbWVBbmRUeXBlID0gYXNzaWdubWVudC5tYXRjaE5hbWVBbmRUeXBlKG5hbWUsIHR5cGUpO1xuXG4gIGlmIChhc3NpZ25tZW50TWF0Y2hlc05hbWVBbmRUeXBlKSB7XG4gICAgYXNzaWdubWVudC5hc3NpZ24oY29udGV4dCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUeXBlSW5mZXJlbmNlIiwic3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZUFzc2VydGlvbk5vZGVRdWVyeSIsInR5cGVJbmZlcmVuY2VOb2RlIiwiY29udGV4dCIsInR5cGVJbmZlcmVuY2VWZXJpZmllZCIsInR5cGVJbmZlcmVuY2VTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInN0YXRlbWVudE5vZGUiLCJicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUiLCJicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGVGcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFN0cmluZyIsInN0YXRlbWVudE1hdGNoZXMiLCJtYXRjaFN0YXRlbWVudCIsImluZm8iLCJkZXB0aCIsIkVRVUFMSVRZX0RFUFRIIiwic3RhdGVtZW50Tm9kZU1hdGNoZXNFcXVhbGl0eVN0YXRlbWVudE5vZGUiLCJtYXRjaCIsImVxdWFsaXR5U3RhdGVtZW50Tm9kZSIsImRlcml2ZWQiLCJlcXVhbGl0eSIsIkVxdWFsaXR5IiwiZnJvbVN0YXRlbWVudE5vZGUiLCJhc3NpZ25tZW50cyIsInR5cGVBc3NlcnRpb25Ob2RlIiwidmFyaWFibGVUeXBlQXNzZXJ0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlWYXJpYWJsZVR5cGVBc3NlcnRpb24iLCJmaXJzdEFzc2lnbm1lbnQiLCJmaXJzdCIsImFzc2lnbm1lbnQiLCJ2YXJpYWJsZXMiLCJsZWZ0VGVybU5vZGUiLCJnZXRMZWZ0VGVybU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiZ2V0UmlnaHRUZXJtTm9kZSIsImxlZnRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlIiwidmVyaWZ5VGVybUFzVmFyaWFibGUiLCJyaWdodFRlcm1WZXJpZmllZEFzVmFyaWFibGUiLCJmaXJzdFZhcmlhYmxlIiwic2Vjb25kVmFyaWFibGUiLCJzZWNvbmQiLCJsZWZ0VmFyaWFibGUiLCJyaWdodFZhcmlhYmxlIiwibGVmdFZhcmlhYmxlTmFtZSIsImdldE5hbWUiLCJsZWZ0VmFyaWFibGVUeXBlIiwiZ2V0VHlwZSIsInJpZ2h0VmFyaWFibGVOYW1lIiwicmlnaHRWYXJpYWJsZVR5cGUiLCJsZWZ0VmFyaWFibGVUeXBlRXF1YWxUb09yU3ViVHlwZU9mT2ZTdXBlclR5cGVPZlJpZ2h0VmFyaWFibGVUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mIiwibGVmdFZhcmlhYmxlVHlwZVN1cGVyVHlwZU9mUmlnaHRWYXJpYWJsZVR5cGUiLCJpc1N1cGVyVHlwZU9mIiwicmlnaHRWYXJpYWJsZVR5cGVTdXBlclR5cGVPZkxlZnRWYXJpYWJsZVR5cGUiLCJuYW1lIiwidHlwZSIsImFzc2lnbkFzc2lnbm1lbnQiLCJ0eXBlcyIsInZlcmlmeVRlcm0iLCJmaXJzdFR5cGUiLCJyaWdodFRlcm1UeXBlIiwibGVmdFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSIsImlzRXF1YWxUb09yU3VwZXJUeXBlT2YiLCJsZWZ0VGVybVR5cGUiLCJyaWdodFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSIsImRlYnVnIiwiYXNzaWdubWVudE1hdGNoZXNOYW1lQW5kVHlwZSIsIm1hdGNoTmFtZUFuZFR5cGUiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWdCQTs7O2VBQXdCQTs7OytEQWRIOzREQUNFO2dFQUNXO3FCQUVSO3FCQUNJO3lCQUNDO29CQUVhO3FCQUNpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0QsSUFBTUMscUJBQXFCQyxJQUFBQSxnQkFBUyxFQUFDLDhCQUMvQkMseUJBQXlCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRTFCLFNBQVNGLG9CQUFvQkksaUJBQWlCLEVBQUVDLE9BQU87SUFDcEUsSUFB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