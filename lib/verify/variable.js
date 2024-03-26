"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyVariable;
    }
});
var _variable = /*#__PURE__*/ _interop_require_default(require("../variable"));
var _variable1 = /*#__PURE__*/ _interop_require_default(require("../assignment/variable"));
var _type = require("../type");
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyVariable(variableNode, typeNode, fileContext) {
    var variableVerified = false;
    var variableString = fileContext.nodeAsString(variableNode);
    fileContext.trace("Verifying the '".concat(variableString, "' variable..."), variableNode);
    var variablePresent = fileContext.isVariablePresentByVariableNode(variableNode);
    if (variablePresent) {
        fileContext.debug("The variable '".concat(variableString, "' is already present."), variableNode);
    } else {
        var variable;
        var typeName = (0, _query.typeNameFromTypeNode)(typeNode);
        if (typeName === null) {
            var type = _type.objectType;
            variable = _variable.default.fromVariableNodeAndType(variableNode, type);
        } else {
            var type1 = fileContext.findTypeByTypeName(typeName);
            if (type1 === null) {
                fileContext.debug("The '".concat(variableString, "' variable's '").concat(typeName, "' type is not present."), variableNode);
            } else {
                variable = _variable.default.fromVariableNodeAndType(variableNode, type1);
            }
        }
        if (variable !== null) {
            var variableAssignment = _variable1.default.fromVariable(variable), variableAssigned = variableAssignment.assign(fileContext);
            if (variableAssigned) {
                variableVerified = true;
            }
        }
    }
    if (variableVerified) {
        fileContext.debug("...verified the '".concat(variableString, "' variable."), variableNode);
    }
    return variableVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vdmFyaWFibGVcIjtcbmltcG9ydCBWYXJpYWJsZUFzc2lnbm1lbnQgZnJvbSBcIi4uL2Fzc2lnbm1lbnQvdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuLi90eXBlXCI7XG5pbXBvcnQgeyB0eXBlTmFtZUZyb21UeXBlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VmFyaWFibGUodmFyaWFibGVOb2RlLCB0eXBlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyh2YXJpYWJsZU5vZGUpO1xuXG4gIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gLCB2YXJpYWJsZU5vZGUpO1xuXG4gIGNvbnN0IHZhcmlhYmxlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICBpZiAodmFyaWFibGVQcmVzZW50KSB7XG4gICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSB2YXJpYWJsZSAnJHt2YXJpYWJsZVN0cmluZ30nIGlzIGFscmVhZHkgcHJlc2VudC5gLCB2YXJpYWJsZU5vZGUpO1xuICB9IGVsc2Uge1xuICAgIGxldCB2YXJpYWJsZTtcblxuICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpO1xuICAgIFxuICAgIGlmICh0eXBlTmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZSA9IG9iamVjdFR5cGU7XG5cbiAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUodmFyaWFibGVOb2RlLCB0eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSdzICcke3R5cGVOYW1lfScgdHlwZSBpcyBub3QgcHJlc2VudC5gLCB2YXJpYWJsZU5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVOb2RlQW5kVHlwZSh2YXJpYWJsZU5vZGUsIHR5cGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50ID0gVmFyaWFibGVBc3NpZ25tZW50LmZyb21WYXJpYWJsZSh2YXJpYWJsZSksXG4gICAgICAgICAgICB2YXJpYWJsZUFzc2lnbmVkID0gdmFyaWFibGVBc3NpZ25tZW50LmFzc2lnbihmaWxlQ29udGV4dCk7XG5cbiAgICAgIGlmICh2YXJpYWJsZUFzc2lnbmVkKSB7XG4gICAgICAgIHZhcmlhYmxlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICh2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmAsIHZhcmlhYmxlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdmFyaWFibGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlWYXJpYWJsZSIsInZhcmlhYmxlTm9kZSIsInR5cGVOb2RlIiwiZmlsZUNvbnRleHQiLCJ2YXJpYWJsZVZlcmlmaWVkIiwidmFyaWFibGVTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInZhcmlhYmxlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5vZGUiLCJkZWJ1ZyIsInZhcmlhYmxlIiwidHlwZU5hbWUiLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSIsInR5cGUiLCJvYmplY3RUeXBlIiwiVmFyaWFibGUiLCJmcm9tVmFyaWFibGVOb2RlQW5kVHlwZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInZhcmlhYmxlQXNzaWdubWVudCIsIlZhcmlhYmxlQXNzaWdubWVudCIsImZyb21WYXJpYWJsZSIsInZhcmlhYmxlQXNzaWduZWQiLCJhc3NpZ24iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQXdCQTs7OytEQU5IO2dFQUNVO29CQUVKO3FCQUNVOzs7Ozs7QUFFdEIsU0FBU0EsZUFBZUMsWUFBWSxFQUFFQyxRQUFRLEVBQUVDLFdBQVc7SUFDeEUsSUFBSUMsbUJBQW1CO0lBRXZCLElBQU1DLGlCQUFpQkYsWUFBWUcsWUFBWSxDQUFDTDtJQUVoREUsWUFBWUksS0FBSyxDQUFDLEFBQUMsa0JBQWdDLE9BQWZGLGdCQUFlLGtCQUFnQko7SUFFbkUsSUFBTU8sa0JBQWtCTCxZQUFZTSwrQkFBK0IsQ0FBQ1I7SUFFcEUsSUFBSU8saUJBQWlCO1FBQ25CTCxZQUFZTyxLQUFLLENBQUMsQUFBQyxpQkFBK0IsT0FBZkwsZ0JBQWUsMEJBQXdCSjtJQUM1RSxPQUFPO1FBQ0wsSUFBSVU7UUFFSixJQUFNQyxXQUFXQyxJQUFBQSwyQkFBb0IsRUFBQ1g7UUFFdEMsSUFBSVUsYUFBYSxNQUFNO1lBQ3JCLElBQU1FLE9BQU9DLGdCQUFVO1lBRXZCSixXQUFXSyxpQkFBUSxDQUFDQyx1QkFBdUIsQ0FBQ2hCLGNBQWNhO1FBQzVELE9BQU87WUFDTCxJQUFNQSxRQUFPWCxZQUFZZSxrQkFBa0IsQ0FBQ047WUFFNUMsSUFBSUUsVUFBUyxNQUFNO2dCQUNqQlgsWUFBWU8sS0FBSyxDQUFDLEFBQUMsUUFBc0NFLE9BQS9CUCxnQkFBZSxrQkFBeUIsT0FBVE8sVUFBUywyQkFBeUJYO1lBQzdGLE9BQU87Z0JBQ0xVLFdBQVdLLGlCQUFRLENBQUNDLHVCQUF1QixDQUFDaEIsY0FBY2E7WUFDNUQ7UUFDRjtRQUVBLElBQUlILGFBQWEsTUFBTTtZQUNyQixJQUFNUSxxQkFBcUJDLGtCQUFrQixDQUFDQyxZQUFZLENBQUNWLFdBQ3JEVyxtQkFBbUJILG1CQUFtQkksTUFBTSxDQUFDcEI7WUFFbkQsSUFBSW1CLGtCQUFrQjtnQkFDcEJsQixtQkFBbUI7WUFDckI7UUFDRjtJQUNGO0lBRUEsSUFBSUEsa0JBQWtCO1FBQ3BCRCxZQUFZTyxLQUFLLENBQUMsQUFBQyxvQkFBa0MsT0FBZkwsZ0JBQWUsZ0JBQWNKO0lBQ3JFO0lBRUEsT0FBT0c7QUFDVCJ9