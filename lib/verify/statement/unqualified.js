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
    var unqualifiedStatementString = (0, _string.nodeAsString)(unqualifiedStatementNode);
    proofContext.debug("Verifying the '".concat(unqualifiedStatementString, "' unqualified statement..."));
    var statementNode = statementNodeQuery(unqualifiedStatementNode);
    if (statementNode !== null) {
        var statementVerified = (0, _statement.default)(statementNode, proofContext);
        if (statementVerified) {
            var derived = proofContext.isDerived();
            if (derived) {
                var assertion = _assertion.default.fromStatementNode(statementNode), assertionMatches = proofContext.matchAssertion(assertion);
                unqualifiedStatementVerified = assertionMatches; ///
            } else {
                unqualifiedStatementVerified = true;
            }
        }
    }
    if (unqualifiedStatementVerified) {
        proofContext.info("Verified the '".concat(unqualifiedStatementString, "' unqualified statement."));
    }
    unqualifiedStatementVerified ? proofContext.complete(unqualifiedStatementNode) : proofContext.halt(unqualifiedStatementNode);
    return unqualifiedStatementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50L3VucXVhbGlmaWVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5U3RhdGVtZW50IGZyb20gXCIuLi8uLi92ZXJpZnkvc3RhdGVtZW50XCI7XG5cbmltcG9ydCBBc3NlcnRpb24gZnJvbSBcIi4uLy4uL2Fzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5jb25zdCBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdW5xdWFsaWZpZWRTdGF0ZW1lbnQvc3RhdGVtZW50IVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VW5xdWFsaWZpZWRTdGF0ZW1lbnQodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBwcm9vZkNvbnRleHQpIHtcbiAgbGV0IHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSBmYWxzZTtcblxuICBwcm9vZkNvbnRleHQuYmVnaW4odW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcblxuICBjb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuXG4gIHByb29mQ29udGV4dC5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAnJHt1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ30nIHVucXVhbGlmaWVkIHN0YXRlbWVudC4uLmApO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIHByb29mQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGRlcml2ZWQgPSBwcm9vZkNvbnRleHQuaXNEZXJpdmVkKCk7XG5cbiAgICAgIGlmIChkZXJpdmVkKSB7XG4gICAgICAgIGNvbnN0IGFzc2VydGlvbiA9IEFzc2VydGlvbi5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgICAgYXNzZXJ0aW9uTWF0Y2hlcyA9IHByb29mQ29udGV4dC5tYXRjaEFzc2VydGlvbihhc3NlcnRpb24pO1xuXG4gICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSBhc3NlcnRpb25NYXRjaGVzOyAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAodW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgIHByb29mQ29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7dW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyB1bnF1YWxpZmllZCBzdGF0ZW1lbnQuYCk7XG4gIH1cblxuICB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID9cbiAgICBwcm9vZkNvbnRleHQuY29tcGxldGUodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSA6XG4gICAgICBwcm9vZkNvbnRleHQuaGFsdCh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuXG4gIHJldHVybiB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkO1xufVxuXG4vLyBpZiAoZGVyaXZlZCkge1xuLy8gICBkZWJ1Z2dlclxuLy8gfSBlbHNlIHtcbi8vICAgY29uc3QgdHlwZXMgPSBbXSxcbi8vICAgICBjb250ZXh0ID0gcHJvb2ZDb250ZXh0LCAvLy9cbi8vICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuLy8gICAgIHZhcmlhYmxlcyA9IFtdLFxuLy8gICAgIHRlcm1TdHJpbmcgPSBub2RlQXNTdHJpbmcodGVybU5vZGUpLFxuLy8gICAgIHRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSB2ZXJpZnlUZXJtQXNWYXJpYWJsZSh0ZXJtTm9kZSwgdmFyaWFibGVzLCBjb250ZXh0KTtcbi8vXG4vLyAgIGlmICh0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlKSB7XG4vLyAgICAgY29uc3QgZmlyc3RWYWx1ZSA9IGZpcnN0KHZhbHVlcyksXG4vLyAgICAgICB2YXJpYWJsZU5hbWUgPSB0ZXJtU3RyaW5nLCAvLy9cbi8vICAgICAgIHZhbHVlID0gZmlyc3RWYWx1ZTsgLy8vXG4vL1xuLy8gICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4vLyAgICAgICBwcm9vZkNvbnRleHQuZXJyb3IoYFRoZSB2YWx1ZSBvZiB0aGUgJHt2YXJpYWJsZU5hbWV9IHZhcmlhYmxlIGlzIG5vdCB1bmRlZmluZWQuYCk7XG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgIGNvbnN0IHR5cGUgPSBwcm9vZkNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSxcbi8vICAgICAgICAgZmlyc3RUeXBlID0gZmlyc3QodHlwZXMpLFxuLy8gICAgICAgICB2YXJpYWJsZVR5cGUgPSBmaXJzdFR5cGUsIC8vL1xuLy8gICAgICAgICB0eXBlRXF1YWxUb09yU3ViVHlwZU9mVmFyaWFibGVUeXBlID0gdHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih2YXJpYWJsZVR5cGUpO1xuLy9cbi8vICAgICAgIGlmICghdHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSkge1xuLy8gICAgICAgICBwcm9vZkNvbnRleHQuZXJyb3IoYFRoZSBhc3NlcnRlZCB0eXBlIG9mIHRoZSAke3ZhcmlhYmxlTmFtZX0gdmFyaWFibGUgaXMgbm90IGVxdWFsIHRvIG9yIGEgc3ViLXR5cGUgb2YgaXRzIGRlY2xhcmVkIHR5cGUuYCk7XG4vLyAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICBjb25zdCBuYW1lID0gdmFyaWFibGVOYW1lLCAgLy8vXG4vLyAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVHlwZUFuZE5hbWUodHlwZSwgbmFtZSk7XG4vL1xuLy8gICAgICAgICBwcm9vZkNvbnRleHQuYWRkVmFyaWFibGUodmFyaWFibGUpO1xuLy9cbi8vICAgICAgICAgdHlwZUFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgY29uc3QgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycyA9IHZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3JzKHRlcm1Ob2RlLCB0eXBlcywgdmFsdWVzLCBjb250ZXh0KTtcbi8vXG4vLyAgICAgaWYgKHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnMpIHtcbi8vICAgICAgIGNvbnN0IHR5cGUgPSBwcm9vZkNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSxcbi8vICAgICAgICAgZmlyc3RUeXBlID0gZmlyc3QodHlwZXMpLFxuLy8gICAgICAgICB0ZXJtVHlwZSA9IGZpcnN0VHlwZSwgLy8vXG4vLyAgICAgICAgIHR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUZXJtVHlwZSA9IHR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodGVybVR5cGUpO1xuLy9cbi8vICAgICAgIGlmICghdHlwZUVxdWFsVG9PclN1YlR5cGVPZlRlcm1UeXBlKSB7XG4vLyAgICAgICAgIHByb29mQ29udGV4dC5lcnJvcihgVGhlIGFzc2VydGVkIHR5cGUgb2YgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGlzIG5vdCBlcXVhbCB0byBvciBhIHN1Yi10eXBlIG9mIGl0cyBkZWNsYXJlZCB0eXBlLmApO1xuLy8gICAgICAgfSBlbHNlIHtcbi8vXG4vLyAgICAgICAgIHR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG4iXSwibmFtZXMiOlsidmVyaWZ5VW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJwcm9vZkNvbnRleHQiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkIiwiYmVnaW4iLCJ1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsImRlYnVnIiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFZlcmlmaWVkIiwidmVyaWZ5U3RhdGVtZW50IiwiZGVyaXZlZCIsImlzRGVyaXZlZCIsImFzc2VydGlvbiIsIkFzc2VydGlvbiIsImZyb21TdGF0ZW1lbnROb2RlIiwiYXNzZXJ0aW9uTWF0Y2hlcyIsIm1hdGNoQXNzZXJ0aW9uIiwiaW5mbyIsImNvbXBsZXRlIiwiaGFsdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0EsVUF1Q0EsaUJBQWlCO0NBQ2pCLGFBQWE7Q0FDYixXQUFXO0NBQ1gsc0JBQXNCO0NBQ3RCLGtDQUFrQztDQUNsQyxtREFBbUQ7Q0FDbkQsc0JBQXNCO0NBQ3RCLDJDQUEyQztDQUMzQyxtRkFBbUY7Q0FDbkYsRUFBRTtDQUNGLGtDQUFrQztDQUNsQyx3Q0FBd0M7Q0FDeEMsdUNBQXVDO0NBQ3ZDLGdDQUFnQztDQUNoQyxFQUFFO0NBQ0YsaUNBQWlDO0NBQ2pDLDJGQUEyRjtDQUMzRixlQUFlO0NBQ2YsZ0VBQWdFO0NBQ2hFLG9DQUFvQztDQUNwQyx3Q0FBd0M7Q0FDeEMsd0ZBQXdGO0NBQ3hGLEVBQUU7Q0FDRixtREFBbUQ7Q0FDbkQsdUlBQXVJO0NBQ3ZJLGlCQUFpQjtDQUNqQiwwQ0FBMEM7Q0FDMUMsNkRBQTZEO0NBQzdELEVBQUU7Q0FDRiw4Q0FBOEM7Q0FDOUMsRUFBRTtDQUNGLHdDQUF3QztDQUN4QyxVQUFVO0NBQ1YsUUFBUTtDQUNSLGFBQWE7Q0FDYiwrR0FBK0c7Q0FDL0csRUFBRTtDQUNGLDZDQUE2QztDQUM3QyxnRUFBZ0U7Q0FDaEUsb0NBQW9DO0NBQ3BDLG9DQUFvQztDQUNwQyxnRkFBZ0Y7Q0FDaEYsRUFBRTtDQUNGLCtDQUErQztDQUMvQyxtSUFBbUk7Q0FDbkksaUJBQWlCO0NBQ2pCLEVBQUU7Q0FDRix3Q0FBd0M7Q0FDeEMsVUFBVTtDQUNWLFFBQVE7Q0FDUixNQUFNO0NBQ04sSUFBSTs7OztlQTFGb0JBOzs7OERBVEk7OERBRU47cUJBRUk7c0JBQ0c7Ozs7OztBQUU3QixJQUFNQyxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUM7QUFFdEIsU0FBU0YsMkJBQTJCRyx3QkFBd0IsRUFBRUMsWUFBWSxFQUFFO0lBQ3pGLElBQUlDLCtCQUErQixLQUFLO0lBRXhDRCxhQUFhRSxLQUFLLENBQUNIO0lBRW5CLElBQU1JLDZCQUE2QkMsSUFBQUEsb0JBQVksRUFBQ0w7SUFFaERDLGFBQWFLLEtBQUssQ0FBQyxBQUFDLGtCQUE0QyxPQUEzQkYsNEJBQTJCO0lBRWhFLElBQU1HLGdCQUFnQlQsbUJBQW1CRTtJQUV6QyxJQUFJTyxrQkFBa0IsSUFBSSxFQUFFO1FBQzFCLElBQU1DLG9CQUFvQkMsSUFBQUEsa0JBQWUsRUFBQ0YsZUFBZU47UUFFekQsSUFBSU8sbUJBQW1CO1lBQ3JCLElBQU1FLFVBQVVULGFBQWFVLFNBQVM7WUFFdEMsSUFBSUQsU0FBUztnQkFDWCxJQUFNRSxZQUFZQyxrQkFBUyxDQUFDQyxpQkFBaUIsQ0FBQ1AsZ0JBQ3hDUSxtQkFBbUJkLGFBQWFlLGNBQWMsQ0FBQ0o7Z0JBRXJEViwrQkFBK0JhLGtCQUFtQixHQUFHO1lBQ3ZELE9BQU87Z0JBQ0xiLCtCQUErQixJQUFJO1lBQ3JDLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQUlBLDhCQUE4QjtRQUNoQ0QsYUFBYWdCLElBQUksQ0FBQyxBQUFDLGlCQUEyQyxPQUEzQmIsNEJBQTJCO0lBQ2hFLENBQUM7SUFFREYsK0JBQ0VELGFBQWFpQixRQUFRLENBQUNsQiw0QkFDcEJDLGFBQWFrQixJQUFJLENBQUNuQix5QkFBeUI7SUFFL0MsT0FBT0U7QUFDVCJ9