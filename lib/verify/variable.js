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
    fileContext.trace("Verifying the '".concat(variableString, "' variable."), variableNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuLi90eXBlXCI7XG5pbXBvcnQgeyB0eXBlTmFtZUZyb21UeXBlTm9kZSwgdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VmFyaWFibGUodmFyaWFibGVOb2RlLCB0eXBlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyh2YXJpYWJsZU5vZGUpO1xuXG4gIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCwgdmFyaWFibGVOb2RlKTtcblxuICBjb25zdCB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICBpZiAodmFyaWFibGVQcmVzZW50KSB7XG4gICAgZmlsZUNvbnRleHQuaW5mbyhgVGhlIHZhcmlhYmxlICcke3ZhcmlhYmxlTmFtZX0nIGlzIGFscmVhZHkgcHJlc2VudC5gLCB2YXJpYWJsZU5vZGUpO1xuICB9IGVsc2Uge1xuICAgIGxldCB2YXJpYWJsZTtcblxuICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpO1xuICAgIFxuICAgIGlmICh0eXBlTmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgbmFtZSA9IHZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgdHlwZSA9IG9iamVjdFR5cGU7XG5cbiAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tTmFtZUFuZFR5cGUobmFtZSwgdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICBmaWxlQ29udGV4dC5pbmZvKGBUaGUgJyR7dmFyaWFibGVOYW1lfScgdmFyaWFibGUncyAnJHt0eXBlTmFtZX0nIHR5cGUgaXMgbm90IHByZXNlbnQuYCwgdmFyaWFibGVOb2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB2YXJpYWJsZU5hbWU7ICAvLy9cblxuICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21OYW1lQW5kVHlwZShuYW1lLCB0eXBlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGZpbGVDb250ZXh0LmFkZFZhcmlhYmxlKHZhcmlhYmxlKTtcblxuICAgICAgdmFyaWFibGVWZXJpZmllZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKHZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCwgdmFyaWFibGVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVZhcmlhYmxlIiwidmFyaWFibGVOb2RlIiwidHlwZU5vZGUiLCJmaWxlQ29udGV4dCIsInZhcmlhYmxlVmVyaWZpZWQiLCJ2YXJpYWJsZVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwidmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUiLCJpbmZvIiwidmFyaWFibGUiLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwibmFtZSIsInR5cGUiLCJvYmplY3RUeXBlIiwiVmFyaWFibGUiLCJmcm9tTmFtZUFuZFR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJhZGRWYXJpYWJsZSIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQXdCQTs7OytEQUxIO29CQUVNO3FCQUN3Qzs7Ozs7O0FBRXBELFNBQVNBLGVBQWVDLFlBQVksRUFBRUMsUUFBUSxFQUFFQyxXQUFXO0lBQ3hFLElBQUlDLG1CQUFtQjtJQUV2QixJQUFNQyxpQkFBaUJGLFlBQVlHLFlBQVksQ0FBQ0w7SUFFaERFLFlBQVlJLEtBQUssQ0FBQyxBQUFDLGtCQUFnQyxPQUFmRixnQkFBZSxnQkFBY0o7SUFFakUsSUFBTU8sZUFBZUMsSUFBQUEsbUNBQTRCLEVBQUNSLGVBQzVDUyxrQkFBa0JQLFlBQVlRLCtCQUErQixDQUFDSDtJQUVwRSxJQUFJRSxpQkFBaUI7UUFDbkJQLFlBQVlTLElBQUksQ0FBQyxBQUFDLGlCQUE2QixPQUFiSixjQUFhLDBCQUF3QlA7SUFDekUsT0FBTztRQUNMLElBQUlZO1FBRUosSUFBTUMsV0FBV0MsSUFBQUEsMkJBQW9CLEVBQUNiO1FBRXRDLElBQUlZLGFBQWEsTUFBTTtZQUNyQixJQUFNRSxPQUFPUixjQUNQUyxPQUFPQyxnQkFBVTtZQUVyQkwsV0FBV00saUJBQVEsQ0FBQ0MsZUFBZSxDQUFDSixNQUFNQztRQUM5QyxPQUFPO1lBQ0wsSUFBTUEsUUFBT2QsWUFBWWtCLGtCQUFrQixDQUFDUDtZQUU1QyxJQUFJRyxVQUFTLE1BQU07Z0JBQ2pCZCxZQUFZUyxJQUFJLENBQUMsQUFBQyxRQUFvQ0UsT0FBN0JOLGNBQWEsa0JBQXlCLE9BQVRNLFVBQVMsMkJBQXlCYjtZQUMxRixPQUFPO2dCQUNMLElBQU1lLFFBQU9SLGNBQWUsR0FBRztnQkFFL0JLLFdBQVdNLGlCQUFRLENBQUNDLGVBQWUsQ0FBQ0osT0FBTUM7WUFDNUM7UUFDRjtRQUVBLElBQUlKLGFBQWEsTUFBTTtZQUNyQlYsWUFBWW1CLFdBQVcsQ0FBQ1Q7WUFFeEJULG1CQUFtQjtRQUNyQjtJQUNGO0lBRUEsSUFBSUEsa0JBQWtCO1FBQ3BCRCxZQUFZb0IsS0FBSyxDQUFDLEFBQUMsb0JBQWtDLE9BQWZsQixnQkFBZSxnQkFBY0o7SUFDckU7SUFFQSxPQUFPRztBQUNUIn0=