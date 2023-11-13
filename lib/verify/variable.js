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
    var variableName = (0, _query.variableNameFromVariableNode)(variableNode), variablePresent = fileContext.isVariablePresentByVariableName(variableName);
    if (variablePresent) {
        fileContext.info("The variable '".concat(variableName, "' is already present."), variableNode);
    } else {
        var variable;
        var typeName = (0, _query.typeNameFromTypeNode)(typeNode);
        if (typeName === null) {
            var name = variableName, type = _type.objectType;
            variable = _variable.default.fromNameAndType(name, type);
        } else {
            var type1 = fileContext.findTypeByTypeName(typeName);
            if (type1 === null) {
                fileContext.info("The '".concat(variableName, "' variable's '").concat(typeName, "' type is not present."), variableNode);
            } else {
                var name1 = variableName; ///
                variable = _variable.default.fromNameAndType(name1, type1);
            }
        }
        if (variable !== null) {
            fileContext.addVariable(variable);
            variableVerified = true;
        }
    }
    if (variableVerified) {
        fileContext.debug("...verified the '".concat(variableString, "' variable."), variableNode);
    }
    return variableVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuLi90eXBlXCI7XG5pbXBvcnQgeyB0eXBlTmFtZUZyb21UeXBlTm9kZSwgdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VmFyaWFibGUodmFyaWFibGVOb2RlLCB0eXBlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyh2YXJpYWJsZU5vZGUpO1xuXG4gIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gLCB2YXJpYWJsZU5vZGUpO1xuXG4gIGNvbnN0IHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gZmlsZUNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gIGlmICh2YXJpYWJsZVByZXNlbnQpIHtcbiAgICBmaWxlQ29udGV4dC5pbmZvKGBUaGUgdmFyaWFibGUgJyR7dmFyaWFibGVOYW1lfScgaXMgYWxyZWFkeSBwcmVzZW50LmAsIHZhcmlhYmxlTm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgbGV0IHZhcmlhYmxlO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSk7XG4gICAgXG4gICAgaWYgKHR5cGVOYW1lID09PSBudWxsKSB7XG4gICAgICBjb25zdCBuYW1lID0gdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgICB0eXBlID0gb2JqZWN0VHlwZTtcblxuICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21OYW1lQW5kVHlwZShuYW1lLCB0eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIGZpbGVDb250ZXh0LmluZm8oYFRoZSAnJHt2YXJpYWJsZU5hbWV9JyB2YXJpYWJsZSdzICcke3R5cGVOYW1lfScgdHlwZSBpcyBub3QgcHJlc2VudC5gLCB2YXJpYWJsZU5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHZhcmlhYmxlTmFtZTsgIC8vL1xuXG4gICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbU5hbWVBbmRUeXBlKG5hbWUsIHR5cGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgZmlsZUNvbnRleHQuYWRkVmFyaWFibGUodmFyaWFibGUpO1xuXG4gICAgICB2YXJpYWJsZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAodmFyaWFibGVWZXJpZmllZCkge1xuICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS5gLCB2YXJpYWJsZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VmFyaWFibGUiLCJ2YXJpYWJsZU5vZGUiLCJ0eXBlTm9kZSIsImZpbGVDb250ZXh0IiwidmFyaWFibGVWZXJpZmllZCIsInZhcmlhYmxlU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIiwidmFyaWFibGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsImluZm8iLCJ2YXJpYWJsZSIsInR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJuYW1lIiwidHlwZSIsIm9iamVjdFR5cGUiLCJWYXJpYWJsZSIsImZyb21OYW1lQW5kVHlwZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsImFkZFZhcmlhYmxlIiwiZGVidWciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBd0JBOzs7K0RBTEg7b0JBRU07cUJBQ3dDOzs7Ozs7QUFFcEQsU0FBU0EsZUFBZUMsWUFBWSxFQUFFQyxRQUFRLEVBQUVDLFdBQVc7SUFDeEUsSUFBSUMsbUJBQW1CO0lBRXZCLElBQU1DLGlCQUFpQkYsWUFBWUcsWUFBWSxDQUFDTDtJQUVoREUsWUFBWUksS0FBSyxDQUFDLEFBQUMsa0JBQWdDLE9BQWZGLGdCQUFlLGtCQUFnQko7SUFFbkUsSUFBTU8sZUFBZUMsSUFBQUEsbUNBQTRCLEVBQUNSLGVBQzVDUyxrQkFBa0JQLFlBQVlRLCtCQUErQixDQUFDSDtJQUVwRSxJQUFJRSxpQkFBaUI7UUFDbkJQLFlBQVlTLElBQUksQ0FBQyxBQUFDLGlCQUE2QixPQUFiSixjQUFhLDBCQUF3QlA7SUFDekUsT0FBTztRQUNMLElBQUlZO1FBRUosSUFBTUMsV0FBV0MsSUFBQUEsMkJBQW9CLEVBQUNiO1FBRXRDLElBQUlZLGFBQWEsTUFBTTtZQUNyQixJQUFNRSxPQUFPUixjQUNQUyxPQUFPQyxnQkFBVTtZQUVyQkwsV0FBV00saUJBQVEsQ0FBQ0MsZUFBZSxDQUFDSixNQUFNQztRQUM5QyxPQUFPO1lBQ0wsSUFBTUEsUUFBT2QsWUFBWWtCLGtCQUFrQixDQUFDUDtZQUU1QyxJQUFJRyxVQUFTLE1BQU07Z0JBQ2pCZCxZQUFZUyxJQUFJLENBQUMsQUFBQyxRQUFvQ0UsT0FBN0JOLGNBQWEsa0JBQXlCLE9BQVRNLFVBQVMsMkJBQXlCYjtZQUMxRixPQUFPO2dCQUNMLElBQU1lLFFBQU9SLGNBQWUsR0FBRztnQkFFL0JLLFdBQVdNLGlCQUFRLENBQUNDLGVBQWUsQ0FBQ0osT0FBTUM7WUFDNUM7UUFDRjtRQUVBLElBQUlKLGFBQWEsTUFBTTtZQUNyQlYsWUFBWW1CLFdBQVcsQ0FBQ1Q7WUFFeEJULG1CQUFtQjtRQUNyQjtJQUNGO0lBRUEsSUFBSUEsa0JBQWtCO1FBQ3BCRCxZQUFZb0IsS0FBSyxDQUFDLEFBQUMsb0JBQWtDLE9BQWZsQixnQkFBZSxnQkFBY0o7SUFDckU7SUFFQSxPQUFPRztBQUNUIn0=