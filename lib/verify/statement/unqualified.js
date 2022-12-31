"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default" // if (derived) {
 //   debugger
 // } else {
 //   const types = [],
 //     context = proofContext, ///
 //     termNode = termNodeQuery(typeAssertionNode),
 //     variables = [],
 //     termString = nodeAsString(termNode),
 //     termVerifiedAsVariable = verifyTermAsVariable(termNode, variables, context);
 //
 //   if (termVerifiedAsVariable) {
 //     const firstValue = first(values),
 //       variableName = termString, ///
 //       value = firstValue; ///
 //
 //     if (value !== undefined) {
 //       proofContext.error(`The value of the ${variableName} variable is not undefined.`);
 //     } else {
 //       const type = proofContext.findTypeByTypeName(typeName),
 //         firstType = first(types),
 //         variableType = firstType, ///
 //         typeEqualToOrSubTypeOfVariableType = type.isEqualToOrSubTypeOf(variableType);
 //
 //       if (!typeEqualToOrSubTypeOfVariableType) {
 //         proofContext.error(`The asserted type of the ${variableName} variable is not equal to or a sub-type of its declared type.`);
 //       } else {
 //         const name = variableName,  ///
 //           variable = Variable.fromTypeAndName(type, name);
 //
 //         proofContext.addVariable(variable);
 //
 //         typeAssertionVerified = true;
 //       }
 //     }
 //   } else {
 //     const termVerifiedAgainstConstructors = verifyTermAgainstConstructors(termNode, types, values, context);
 //
 //     if (termVerifiedAgainstConstructors) {
 //       const type = proofContext.findTypeByTypeName(typeName),
 //         firstType = first(types),
 //         termType = firstType, ///
 //         typeEqualToOrSubTypeOfTermType = type.isEqualToOrSubTypeOf(termType);
 //
 //       if (!typeEqualToOrSubTypeOfTermType) {
 //         proofContext.error(`The asserted type of the '${termString}' term is not equal to or a sub-type of its declared type.`);
 //       } else {
 //
 //         typeAssertionVerified = true;
 //       }
 //     }
 //   }
 // }
, {
    enumerable: true,
    get: function() {
        return verifyUnqualifiedStatement;
    }
});
var _statement = /*#__PURE__*/ _interopRequireDefault(require("../../verify/statement"));
var _assertion = /*#__PURE__*/ _interopRequireDefault(require("../../assertion"));
var _query = require("../../utilities/query");
var _string = require("../../utilities/string");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var statementNodeQuery = (0, _query.nodeQuery)("/unqualifiedStatement/statement!");
function verifyUnqualifiedStatement(unqualifiedStatementNode, proofContext) {
    var unqualifiedStatementVerified = false;
    proofContext.begin(unqualifiedStatementNode);
    var statementNode = statementNodeQuery(unqualifiedStatementNode);
    if (statementNode !== null) {
        var derived = proofContext.isDerived();
        if (derived) {
            var assertion = _assertion.default.fromStatementNode(statementNode), assertionMatches = proofContext.matchAssertion(assertion);
            unqualifiedStatementVerified = assertionMatches; ///
        } else {
            unqualifiedStatementVerified = true;
        }
    }
    if (unqualifiedStatementVerified) {
        var statementString = (0, _string.nodeAsString)(statementNode);
        proofContext.debug("Verified the '".concat(statementString, "' unqualified statement."));
    }
    unqualifiedStatementVerified ? proofContext.complete(unqualifiedStatementNode) : proofContext.halt(unqualifiedStatementNode);
    return unqualifiedStatementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50L3VucXVhbGlmaWVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5U3RhdGVtZW50IGZyb20gXCIuLi8uLi92ZXJpZnkvc3RhdGVtZW50XCI7XG5cbmltcG9ydCBBc3NlcnRpb24gZnJvbSBcIi4uLy4uL2Fzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5jb25zdCBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdW5xdWFsaWZpZWRTdGF0ZW1lbnQvc3RhdGVtZW50IVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VW5xdWFsaWZpZWRTdGF0ZW1lbnQodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBwcm9vZkNvbnRleHQpIHtcbiAgbGV0IHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSBmYWxzZTtcblxuICBwcm9vZkNvbnRleHQuYmVnaW4odW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBkZXJpdmVkID0gcHJvb2ZDb250ZXh0LmlzRGVyaXZlZCgpO1xuXG4gICAgaWYgKGRlcml2ZWQpIHtcbiAgICAgIGNvbnN0IGFzc2VydGlvbiA9IEFzc2VydGlvbi5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgIGFzc2VydGlvbk1hdGNoZXMgPSBwcm9vZkNvbnRleHQubWF0Y2hBc3NlcnRpb24oYXNzZXJ0aW9uKTtcblxuICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IGFzc2VydGlvbk1hdGNoZXM7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBwcm9vZkNvbnRleHQuZGVidWcoYFZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyB1bnF1YWxpZmllZCBzdGF0ZW1lbnQuYCk7XG4gIH1cblxuICB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID9cbiAgICBwcm9vZkNvbnRleHQuY29tcGxldGUodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSA6XG4gICAgICBwcm9vZkNvbnRleHQuaGFsdCh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuXG4gIHJldHVybiB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkO1xufVxuXG4vLyBpZiAoZGVyaXZlZCkge1xuLy8gICBkZWJ1Z2dlclxuLy8gfSBlbHNlIHtcbi8vICAgY29uc3QgdHlwZXMgPSBbXSxcbi8vICAgICBjb250ZXh0ID0gcHJvb2ZDb250ZXh0LCAvLy9cbi8vICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuLy8gICAgIHZhcmlhYmxlcyA9IFtdLFxuLy8gICAgIHRlcm1TdHJpbmcgPSBub2RlQXNTdHJpbmcodGVybU5vZGUpLFxuLy8gICAgIHRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSB2ZXJpZnlUZXJtQXNWYXJpYWJsZSh0ZXJtTm9kZSwgdmFyaWFibGVzLCBjb250ZXh0KTtcbi8vXG4vLyAgIGlmICh0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlKSB7XG4vLyAgICAgY29uc3QgZmlyc3RWYWx1ZSA9IGZpcnN0KHZhbHVlcyksXG4vLyAgICAgICB2YXJpYWJsZU5hbWUgPSB0ZXJtU3RyaW5nLCAvLy9cbi8vICAgICAgIHZhbHVlID0gZmlyc3RWYWx1ZTsgLy8vXG4vL1xuLy8gICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4vLyAgICAgICBwcm9vZkNvbnRleHQuZXJyb3IoYFRoZSB2YWx1ZSBvZiB0aGUgJHt2YXJpYWJsZU5hbWV9IHZhcmlhYmxlIGlzIG5vdCB1bmRlZmluZWQuYCk7XG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgIGNvbnN0IHR5cGUgPSBwcm9vZkNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSxcbi8vICAgICAgICAgZmlyc3RUeXBlID0gZmlyc3QodHlwZXMpLFxuLy8gICAgICAgICB2YXJpYWJsZVR5cGUgPSBmaXJzdFR5cGUsIC8vL1xuLy8gICAgICAgICB0eXBlRXF1YWxUb09yU3ViVHlwZU9mVmFyaWFibGVUeXBlID0gdHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih2YXJpYWJsZVR5cGUpO1xuLy9cbi8vICAgICAgIGlmICghdHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSkge1xuLy8gICAgICAgICBwcm9vZkNvbnRleHQuZXJyb3IoYFRoZSBhc3NlcnRlZCB0eXBlIG9mIHRoZSAke3ZhcmlhYmxlTmFtZX0gdmFyaWFibGUgaXMgbm90IGVxdWFsIHRvIG9yIGEgc3ViLXR5cGUgb2YgaXRzIGRlY2xhcmVkIHR5cGUuYCk7XG4vLyAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICBjb25zdCBuYW1lID0gdmFyaWFibGVOYW1lLCAgLy8vXG4vLyAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVHlwZUFuZE5hbWUodHlwZSwgbmFtZSk7XG4vL1xuLy8gICAgICAgICBwcm9vZkNvbnRleHQuYWRkVmFyaWFibGUodmFyaWFibGUpO1xuLy9cbi8vICAgICAgICAgdHlwZUFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgY29uc3QgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycyA9IHZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3JzKHRlcm1Ob2RlLCB0eXBlcywgdmFsdWVzLCBjb250ZXh0KTtcbi8vXG4vLyAgICAgaWYgKHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnMpIHtcbi8vICAgICAgIGNvbnN0IHR5cGUgPSBwcm9vZkNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSxcbi8vICAgICAgICAgZmlyc3RUeXBlID0gZmlyc3QodHlwZXMpLFxuLy8gICAgICAgICB0ZXJtVHlwZSA9IGZpcnN0VHlwZSwgLy8vXG4vLyAgICAgICAgIHR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUZXJtVHlwZSA9IHR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodGVybVR5cGUpO1xuLy9cbi8vICAgICAgIGlmICghdHlwZUVxdWFsVG9PclN1YlR5cGVPZlRlcm1UeXBlKSB7XG4vLyAgICAgICAgIHByb29mQ29udGV4dC5lcnJvcihgVGhlIGFzc2VydGVkIHR5cGUgb2YgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGlzIG5vdCBlcXVhbCB0byBvciBhIHN1Yi10eXBlIG9mIGl0cyBkZWNsYXJlZCB0eXBlLmApO1xuLy8gICAgICAgfSBlbHNlIHtcbi8vXG4vLyAgICAgICAgIHR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG4iXSwibmFtZXMiOlsidmVyaWZ5VW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJwcm9vZkNvbnRleHQiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkIiwiYmVnaW4iLCJzdGF0ZW1lbnROb2RlIiwiZGVyaXZlZCIsImlzRGVyaXZlZCIsImFzc2VydGlvbiIsIkFzc2VydGlvbiIsImZyb21TdGF0ZW1lbnROb2RlIiwiYXNzZXJ0aW9uTWF0Y2hlcyIsIm1hdGNoQXNzZXJ0aW9uIiwic3RhdGVtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiZGVidWciLCJjb21wbGV0ZSIsImhhbHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBLFVBaUNBLGlCQUFpQjtDQUNqQixhQUFhO0NBQ2IsV0FBVztDQUNYLHNCQUFzQjtDQUN0QixrQ0FBa0M7Q0FDbEMsbURBQW1EO0NBQ25ELHNCQUFzQjtDQUN0QiwyQ0FBMkM7Q0FDM0MsbUZBQW1GO0NBQ25GLEVBQUU7Q0FDRixrQ0FBa0M7Q0FDbEMsd0NBQXdDO0NBQ3hDLHVDQUF1QztDQUN2QyxnQ0FBZ0M7Q0FDaEMsRUFBRTtDQUNGLGlDQUFpQztDQUNqQywyRkFBMkY7Q0FDM0YsZUFBZTtDQUNmLGdFQUFnRTtDQUNoRSxvQ0FBb0M7Q0FDcEMsd0NBQXdDO0NBQ3hDLHdGQUF3RjtDQUN4RixFQUFFO0NBQ0YsbURBQW1EO0NBQ25ELHVJQUF1STtDQUN2SSxpQkFBaUI7Q0FDakIsMENBQTBDO0NBQzFDLDZEQUE2RDtDQUM3RCxFQUFFO0NBQ0YsOENBQThDO0NBQzlDLEVBQUU7Q0FDRix3Q0FBd0M7Q0FDeEMsVUFBVTtDQUNWLFFBQVE7Q0FDUixhQUFhO0NBQ2IsK0dBQStHO0NBQy9HLEVBQUU7Q0FDRiw2Q0FBNkM7Q0FDN0MsZ0VBQWdFO0NBQ2hFLG9DQUFvQztDQUNwQyxvQ0FBb0M7Q0FDcEMsZ0ZBQWdGO0NBQ2hGLEVBQUU7Q0FDRiwrQ0FBK0M7Q0FDL0MsbUlBQW1JO0NBQ25JLGlCQUFpQjtDQUNqQixFQUFFO0NBQ0Ysd0NBQXdDO0NBQ3hDLFVBQVU7Q0FDVixRQUFRO0NBQ1IsTUFBTTtDQUNOLElBQUk7Ozs7ZUFwRm9CQTs7OzhEQVRJOzhEQUVOO3FCQUVJO3NCQUNHOzs7Ozs7QUFFN0IsSUFBTUMscUJBQXFCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXRCLFNBQVNGLDJCQUEyQkcsd0JBQXdCLEVBQUVDLFlBQVksRUFBRTtJQUN6RixJQUFJQywrQkFBK0IsS0FBSztJQUV4Q0QsYUFBYUUsS0FBSyxDQUFDSDtJQUVuQixJQUFNSSxnQkFBZ0JOLG1CQUFtQkU7SUFFekMsSUFBSUksa0JBQWtCLElBQUksRUFBRTtRQUMxQixJQUFNQyxVQUFVSixhQUFhSyxTQUFTO1FBRXRDLElBQUlELFNBQVM7WUFDWCxJQUFNRSxZQUFZQyxrQkFBUyxDQUFDQyxpQkFBaUIsQ0FBQ0wsZ0JBQ3hDTSxtQkFBbUJULGFBQWFVLGNBQWMsQ0FBQ0o7WUFFckRMLCtCQUErQlEsa0JBQW1CLEdBQUc7UUFDdkQsT0FBTztZQUNMUiwrQkFBK0IsSUFBSTtRQUNyQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQUlBLDhCQUE4QjtRQUNoQyxJQUFNVSxrQkFBa0JDLElBQUFBLG9CQUFZLEVBQUNUO1FBRXJDSCxhQUFhYSxLQUFLLENBQUMsQUFBQyxpQkFBZ0MsT0FBaEJGLGlCQUFnQjtJQUN0RCxDQUFDO0lBRURWLCtCQUNFRCxhQUFhYyxRQUFRLENBQUNmLDRCQUNwQkMsYUFBYWUsSUFBSSxDQUFDaEIseUJBQXlCO0lBRS9DLE9BQU9FO0FBQ1QifQ==