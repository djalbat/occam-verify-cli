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
        var combinator = _equality1.default, statementVerifiedAgainstCombinator = (0, _statement.verifyStatementAgainstCombinator)(statementNode, combinator, context);
        if (!statementVerifiedAgainstCombinator) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdHlwZUluZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVxdWFsaXR5IGZyb20gXCIuLi9lcXVhbGl0eVwiO1xuaW1wb3J0IHZlcmlmeVRlcm0gZnJvbSBcIi4vdGVybVwiO1xuaW1wb3J0IGVxdWFsaXR5Q29tYmluYXRvciBmcm9tIFwiLi4vb2NtYmluYXRvci9lcXVhbGl0eVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgdmVyaWZ5VGVybUFzVmFyaWFibGUgfSBmcm9tIFwiLi90ZXJtXCI7XG5pbXBvcnQgeyB2ZXJpZnlWYXJpYWJsZVR5cGVBc3NlcnRpb24gfSBmcm9tIFwiLi9hc3NlcnRpb24vdHlwZVwiO1xuaW1wb3J0IHsgdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3IgfSBmcm9tIFwiLi4vdmVyaWZ5L3N0YXRlbWVudFwiO1xuaW1wb3J0IHsgYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlRnJvbVN0YXRlbWVudE5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Byb29mXCI7XG5cbmNvbnN0IHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlSW5mZXJlbmNlL3N0YXRlbWVudCFcIiksXG4gICAgICB0eXBlQXNzZXJ0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVJbmZlcmVuY2UvdHlwZUFzc2VydGlvbiFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVR5cGVJbmZlcmVuY2UodHlwZUluZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGVJbmZlcmVuY2VWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGVJbmZlcmVuY2VTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlSW5mZXJlbmNlTm9kZSk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlSW5mZXJlbmNlU3RyaW5nfScgdHlwZSBpbmZlcmVuY2UuLi5gLCB0eXBlSW5mZXJlbmNlTm9kZSk7XG5cbiAgbGV0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkodHlwZUluZmVyZW5jZU5vZGUpO1xuXG4gIGNvbnN0IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZSA9IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gIGlmIChicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnROb2RlID0gYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlOyAvLy9cbiAgfVxuXG4gIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICBzdGF0ZW1lbnRNYXRjaGVzID0gY29udGV4dC5tYXRjaFN0YXRlbWVudChzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAoIXN0YXRlbWVudE1hdGNoZXMpIHtcbiAgICBjb250ZXh0LmluZm8oYFRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgaXMgbm90IHByZXNlbnQgaW4gdGhlIGNvbnRleHQuYCwgdHlwZUluZmVyZW5jZU5vZGUpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGNvbWJpbmF0b3IgPSBlcXVhbGl0eUNvbWJpbmF0b3IsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yID0gdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3Ioc3RhdGVtZW50Tm9kZSwgY29tYmluYXRvciwgY29udGV4dCk7XG5cbiAgICBpZiAoIXN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IpIHtcbiAgICAgIGNvbnRleHQuaW5mbyhgVGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBpcyBub3QgYW4gZXF1YWxpdHkuYCwgdHlwZUluZmVyZW5jZU5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkZXJpdmVkID0gZmFsc2UsICAvLy9cbiAgICAgICAgICAgIGVxdWFsaXR5ID0gRXF1YWxpdHkuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgICAgdHlwZUFzc2VydGlvbk5vZGUgPSB0eXBlQXNzZXJ0aW9uTm9kZVF1ZXJ5KHR5cGVJbmZlcmVuY2VOb2RlKSxcbiAgICAgICAgICAgIHZhcmlhYmxlVHlwZUFzc2VydGlvblZlcmlmaWVkID0gdmVyaWZ5VmFyaWFibGVUeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dClcblxuICAgICAgaWYgKHZhcmlhYmxlVHlwZUFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0QXNzaWdubWVudCA9IGZpcnN0KGFzc2lnbm1lbnRzKSxcbiAgICAgICAgICAgICAgYXNzaWdubWVudCA9IGZpcnN0QXNzaWdubWVudCwgLy8vXG4gICAgICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgICAgICBsZWZ0VGVybU5vZGUgPSBlcXVhbGl0eS5nZXRMZWZ0VGVybU5vZGUoKSxcbiAgICAgICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IGVxdWFsaXR5LmdldFJpZ2h0VGVybU5vZGUoKSxcbiAgICAgICAgICAgICAgbGVmdFRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSB2ZXJpZnlUZXJtQXNWYXJpYWJsZShsZWZ0VGVybU5vZGUsIHZhcmlhYmxlcywgY29udGV4dCksXG4gICAgICAgICAgICAgIHJpZ2h0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IHZlcmlmeVRlcm1Bc1ZhcmlhYmxlKHJpZ2h0VGVybU5vZGUsIHZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGxlZnRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlICYmIHJpZ2h0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSkge1xuICAgICAgICAgIGNvbnN0IGZpcnN0VmFyaWFibGUgPSBmaXJzdCh2YXJpYWJsZXMpLFxuICAgICAgICAgICAgICAgIHNlY29uZFZhcmlhYmxlID0gc2Vjb25kKHZhcmlhYmxlcyksXG4gICAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlID0gZmlyc3RWYXJpYWJsZSwgLy8vXG4gICAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZSA9IHNlY29uZFZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgICAgICBsZWZ0VmFyaWFibGVOYW1lID0gbGVmdFZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICBsZWZ0VmFyaWFibGVUeXBlID0gbGVmdFZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICByaWdodFZhcmlhYmxlTmFtZSA9IHJpZ2h0VmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIHJpZ2h0VmFyaWFibGVUeXBlID0gcmlnaHRWYXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2ZSaWdodFZhcmlhYmxlVHlwZSA9IGxlZnRWYXJpYWJsZVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mKHJpZ2h0VmFyaWFibGVUeXBlKTtcblxuICAgICAgICAgIGlmIChsZWZ0VmFyaWFibGVUeXBlRXF1YWxUb09yU3ViVHlwZU9mT2ZTdXBlclR5cGVPZlJpZ2h0VmFyaWFibGVUeXBlKSB7XG4gICAgICAgICAgICBjb25zdCBsZWZ0VmFyaWFibGVUeXBlU3VwZXJUeXBlT2ZSaWdodFZhcmlhYmxlVHlwZSA9IGxlZnRWYXJpYWJsZVR5cGUuaXNTdXBlclR5cGVPZihyaWdodFZhcmlhYmxlVHlwZSksXG4gICAgICAgICAgICAgICAgICByaWdodFZhcmlhYmxlVHlwZVN1cGVyVHlwZU9mTGVmdFZhcmlhYmxlVHlwZSA9IHJpZ2h0VmFyaWFibGVUeXBlLmlzU3VwZXJUeXBlT2YobGVmdFZhcmlhYmxlVHlwZSk7XG5cbiAgICAgICAgICAgIGlmIChsZWZ0VmFyaWFibGVUeXBlU3VwZXJUeXBlT2ZSaWdodFZhcmlhYmxlVHlwZSkge1xuICAgICAgICAgICAgICBjb25zdCBuYW1lID0gbGVmdFZhcmlhYmxlTmFtZSwgLy8vXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSByaWdodFZhcmlhYmxlVHlwZTsgIC8vL1xuXG4gICAgICAgICAgICAgIGFzc2lnbkFzc2lnbm1lbnQobmFtZSwgdHlwZSwgYXNzaWdubWVudCwgY29udGV4dCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyaWdodFZhcmlhYmxlVHlwZVN1cGVyVHlwZU9mTGVmdFZhcmlhYmxlVHlwZSkge1xuICAgICAgICAgICAgICBjb25zdCBuYW1lID0gcmlnaHRWYXJpYWJsZU5hbWUsIC8vL1xuICAgICAgICAgICAgICAgICAgICB0eXBlID0gbGVmdFZhcmlhYmxlVHlwZTsgIC8vL1xuXG4gICAgICAgICAgICAgIGFzc2lnbkFzc2lnbm1lbnQobmFtZSwgdHlwZSwgYXNzaWdubWVudCwgY29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGxlZnRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlKSB7XG4gICAgICAgICAgY29uc3QgdHlwZXMgPSBbXTtcblxuICAgICAgICAgIHZlcmlmeVRlcm0ocmlnaHRUZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgY29uc3QgZmlyc3RUeXBlID0gZmlyc3QodHlwZXMpLFxuICAgICAgICAgICAgICAgIGZpcnN0VmFyaWFibGUgPSBmaXJzdCh2YXJpYWJsZXMpLFxuICAgICAgICAgICAgICAgIGxlZnRWYXJpYWJsZSA9IGZpcnN0VmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICAgIHJpZ2h0VGVybVR5cGUgPSBmaXJzdFR5cGUsICAvLy9cbiAgICAgICAgICAgICAgICBsZWZ0VmFyaWFibGVOYW1lID0gbGVmdFZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICBsZWZ0VmFyaWFibGVUeXBlID0gbGVmdFZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICBsZWZ0VmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZSaWdodFRlcm1UeXBlID0gbGVmdFZhcmlhYmxlVHlwZS5pc0VxdWFsVG9PclN1cGVyVHlwZU9mKHJpZ2h0VGVybVR5cGUpO1xuXG4gICAgICAgICAgaWYgKGxlZnRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlJpZ2h0VGVybVR5cGUpIHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBsZWZ0VmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgICAgICAgICB0eXBlID0gcmlnaHRUZXJtVHlwZTsgLy8vXG5cbiAgICAgICAgICAgIGFzc2lnbkFzc2lnbm1lbnQobmFtZSwgdHlwZSwgYXNzaWdubWVudCwgY29udGV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJpZ2h0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSkge1xuICAgICAgICAgIGNvbnN0IHR5cGVzID0gW107XG5cbiAgICAgICAgICB2ZXJpZnlUZXJtKGxlZnRUZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgY29uc3QgZmlyc3RUeXBlID0gZmlyc3QodHlwZXMpLFxuICAgICAgICAgICAgICAgIGZpcnN0VmFyaWFibGUgPSBmaXJzdCh2YXJpYWJsZXMpLFxuICAgICAgICAgICAgICAgIGxlZnRUZXJtVHlwZSA9IGZpcnN0VHlwZSwgIC8vL1xuICAgICAgICAgICAgICAgIHJpZ2h0VmFyaWFibGUgPSBmaXJzdFZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgICAgICByaWdodFZhcmlhYmxlTmFtZSA9IHJpZ2h0VmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIHJpZ2h0VmFyaWFibGVUeXBlID0gcmlnaHRWYXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlJpZ2h0VGVybVR5cGUgPSByaWdodFZhcmlhYmxlVHlwZS5pc0VxdWFsVG9PclN1cGVyVHlwZU9mKGxlZnRUZXJtVHlwZSk7XG5cbiAgICAgICAgICBpZiAocmlnaHRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlJpZ2h0VGVybVR5cGUpIHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSByaWdodFZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgdHlwZSA9IGxlZnRUZXJtVHlwZTsgLy8vXG5cbiAgICAgICAgICAgIGFzc2lnbkFzc2lnbm1lbnQobmFtZSwgdHlwZSwgYXNzaWdubWVudCwgY29udGV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdHlwZUluZmVyZW5jZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAodHlwZUluZmVyZW5jZVZlcmlmaWVkKSB7XG4gICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVJbmZlcmVuY2VTdHJpbmd9JyB0eXBlIGluZmVyZW5jZS5gLCB0eXBlSW5mZXJlbmNlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdHlwZUluZmVyZW5jZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25Bc3NpZ25tZW50KG5hbWUsIHR5cGUsIGFzc2lnbm1lbnQsIGNvbnRleHQpIHtcbiAgY29uc3QgYXNzaWdubWVudE1hdGNoZXNOYW1lQW5kVHlwZSA9IGFzc2lnbm1lbnQubWF0Y2hOYW1lQW5kVHlwZShuYW1lLCB0eXBlKTtcblxuICBpZiAoYXNzaWdubWVudE1hdGNoZXNOYW1lQW5kVHlwZSkge1xuICAgIGFzc2lnbm1lbnQuYXNzaWduKGNvbnRleHQpO1xuICB9XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VHlwZUluZmVyZW5jZSIsInN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVBc3NlcnRpb25Ob2RlUXVlcnkiLCJ0eXBlSW5mZXJlbmNlTm9kZSIsImNvbnRleHQiLCJ0eXBlSW5mZXJlbmNlVmVyaWZpZWQiLCJ0eXBlSW5mZXJlbmNlU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJzdGF0ZW1lbnROb2RlIiwiYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlIiwiYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlRnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRTdHJpbmciLCJzdGF0ZW1lbnRNYXRjaGVzIiwibWF0Y2hTdGF0ZW1lbnQiLCJpbmZvIiwiY29tYmluYXRvciIsImVxdWFsaXR5Q29tYmluYXRvciIsInN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IiLCJ2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvciIsImRlcml2ZWQiLCJlcXVhbGl0eSIsIkVxdWFsaXR5IiwiZnJvbVN0YXRlbWVudE5vZGUiLCJhc3NpZ25tZW50cyIsInR5cGVBc3NlcnRpb25Ob2RlIiwidmFyaWFibGVUeXBlQXNzZXJ0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlWYXJpYWJsZVR5cGVBc3NlcnRpb24iLCJmaXJzdEFzc2lnbm1lbnQiLCJmaXJzdCIsImFzc2lnbm1lbnQiLCJ2YXJpYWJsZXMiLCJsZWZ0VGVybU5vZGUiLCJnZXRMZWZ0VGVybU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiZ2V0UmlnaHRUZXJtTm9kZSIsImxlZnRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlIiwidmVyaWZ5VGVybUFzVmFyaWFibGUiLCJyaWdodFRlcm1WZXJpZmllZEFzVmFyaWFibGUiLCJmaXJzdFZhcmlhYmxlIiwic2Vjb25kVmFyaWFibGUiLCJzZWNvbmQiLCJsZWZ0VmFyaWFibGUiLCJyaWdodFZhcmlhYmxlIiwibGVmdFZhcmlhYmxlTmFtZSIsImdldE5hbWUiLCJsZWZ0VmFyaWFibGVUeXBlIiwiZ2V0VHlwZSIsInJpZ2h0VmFyaWFibGVOYW1lIiwicmlnaHRWYXJpYWJsZVR5cGUiLCJsZWZ0VmFyaWFibGVUeXBlRXF1YWxUb09yU3ViVHlwZU9mT2ZTdXBlclR5cGVPZlJpZ2h0VmFyaWFibGVUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mIiwibGVmdFZhcmlhYmxlVHlwZVN1cGVyVHlwZU9mUmlnaHRWYXJpYWJsZVR5cGUiLCJpc1N1cGVyVHlwZU9mIiwicmlnaHRWYXJpYWJsZVR5cGVTdXBlclR5cGVPZkxlZnRWYXJpYWJsZVR5cGUiLCJuYW1lIiwidHlwZSIsImFzc2lnbkFzc2lnbm1lbnQiLCJ0eXBlcyIsInZlcmlmeVRlcm0iLCJmaXJzdFR5cGUiLCJyaWdodFRlcm1UeXBlIiwibGVmdFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSIsImlzRXF1YWxUb09yU3VwZXJUeXBlT2YiLCJsZWZ0VGVybVR5cGUiLCJyaWdodFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSIsImRlYnVnIiwiYXNzaWdubWVudE1hdGNoZXNOYW1lQW5kVHlwZSIsIm1hdGNoTmFtZUFuZFR5cGUiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWdCQTs7O2VBQXdCQTs7OytEQWRIOzREQUNFO2dFQUNRO3FCQUVMO3FCQUNJO29CQUVjO3lCQUNLO3FCQUNZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3RCxJQUFNQyxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUMsOEJBQy9CQyx5QkFBeUJELElBQUFBLGdCQUFTLEVBQUM7QUFFMUIs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