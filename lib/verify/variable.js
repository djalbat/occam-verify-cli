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
    fileContext.trace("Verifying the '".concat(variableString, "' variable."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuLi90eXBlXCI7XG5pbXBvcnQgeyB0eXBlTmFtZUZyb21UeXBlTm9kZSwgdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VmFyaWFibGUodmFyaWFibGVOb2RlLCB0eXBlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyh2YXJpYWJsZU5vZGUpO1xuXG4gIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG5cbiAgY29uc3QgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSBmaWxlQ29udGV4dC5pc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSk7XG5cbiAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgIGZpbGVDb250ZXh0LmluZm8oYFRoZSB2YXJpYWJsZSAnJHt2YXJpYWJsZU5hbWV9JyBpcyBhbHJlYWR5IHByZXNlbnQuYCwgdmFyaWFibGVOb2RlKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgdmFyaWFibGU7XG5cbiAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKTtcbiAgICBcbiAgICBpZiAodHlwZU5hbWUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5hbWUgPSB2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICAgIHR5cGUgPSBvYmplY3RUeXBlO1xuXG4gICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbU5hbWVBbmRUeXBlKG5hbWUsIHR5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlID0gZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgZmlsZUNvbnRleHQuaW5mbyhgVGhlICcke3ZhcmlhYmxlTmFtZX0nIHZhcmlhYmxlJ3MgJyR7dHlwZU5hbWV9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmAsIHZhcmlhYmxlTm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuYW1lID0gdmFyaWFibGVOYW1lOyAgLy8vXG5cbiAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tTmFtZUFuZFR5cGUobmFtZSwgdHlwZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBmaWxlQ29udGV4dC5hZGRWYXJpYWJsZSh2YXJpYWJsZSk7XG5cbiAgICAgIHZhcmlhYmxlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmICh2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmAsIHZhcmlhYmxlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdmFyaWFibGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlWYXJpYWJsZSIsInZhcmlhYmxlTm9kZSIsInR5cGVOb2RlIiwiZmlsZUNvbnRleHQiLCJ2YXJpYWJsZVZlcmlmaWVkIiwidmFyaWFibGVTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwiaW5mbyIsInZhcmlhYmxlIiwidHlwZU5hbWUiLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSIsIm5hbWUiLCJ0eXBlIiwib2JqZWN0VHlwZSIsIlZhcmlhYmxlIiwiZnJvbU5hbWVBbmRUeXBlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwiYWRkVmFyaWFibGUiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUF3QkE7OzsrREFMSDtvQkFFTTtxQkFDd0M7Ozs7OztBQUVwRCxTQUFTQSxlQUFlQyxZQUFZLEVBQUVDLFFBQVEsRUFBRUMsV0FBVztJQUN4RSxJQUFJQyxtQkFBbUI7SUFFdkIsSUFBTUMsaUJBQWlCRixZQUFZRyxZQUFZLENBQUNMO0lBRWhERSxZQUFZSSxLQUFLLENBQUMsQUFBQyxrQkFBZ0MsT0FBZkYsZ0JBQWU7SUFFbkQsSUFBTUcsZUFBZUMsSUFBQUEsbUNBQTRCLEVBQUNSLGVBQzVDUyxrQkFBa0JQLFlBQVlRLCtCQUErQixDQUFDSDtJQUVwRSxJQUFJRSxpQkFBaUI7UUFDbkJQLFlBQVlTLElBQUksQ0FBQyxBQUFDLGlCQUE2QixPQUFiSixjQUFhLDBCQUF3QlA7SUFDekUsT0FBTztRQUNMLElBQUlZO1FBRUosSUFBTUMsV0FBV0MsSUFBQUEsMkJBQW9CLEVBQUNiO1FBRXRDLElBQUlZLGFBQWEsTUFBTTtZQUNyQixJQUFNRSxPQUFPUixjQUNQUyxPQUFPQyxnQkFBVTtZQUVyQkwsV0FBV00saUJBQVEsQ0FBQ0MsZUFBZSxDQUFDSixNQUFNQztRQUM5QyxPQUFPO1lBQ0wsSUFBTUEsUUFBT2QsWUFBWWtCLGtCQUFrQixDQUFDUDtZQUU1QyxJQUFJRyxVQUFTLE1BQU07Z0JBQ2pCZCxZQUFZUyxJQUFJLENBQUMsQUFBQyxRQUFvQ0UsT0FBN0JOLGNBQWEsa0JBQXlCLE9BQVRNLFVBQVMsMkJBQXlCYjtZQUMxRixPQUFPO2dCQUNMLElBQU1lLFFBQU9SLGNBQWUsR0FBRztnQkFFL0JLLFdBQVdNLGlCQUFRLENBQUNDLGVBQWUsQ0FBQ0osT0FBTUM7WUFDNUM7UUFDRjtRQUVBLElBQUlKLGFBQWEsTUFBTTtZQUNyQlYsWUFBWW1CLFdBQVcsQ0FBQ1Q7WUFFeEJULG1CQUFtQjtRQUNyQjtJQUNGO0lBRUEsSUFBSUEsa0JBQWtCO1FBQ3BCRCxZQUFZb0IsS0FBSyxDQUFDLEFBQUMsb0JBQWtDLE9BQWZsQixnQkFBZSxnQkFBY0o7SUFDckU7SUFFQSxPQUFPRztBQUNUIn0=