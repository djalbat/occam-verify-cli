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
        fileContext.debug("The variable '".concat(variableName, "' is already present."), variableNode);
    } else {
        var variable;
        var typeName = (0, _query.typeNameFromTypeNode)(typeNode);
        if (typeName === null) {
            var name = variableName, type = _type.objectType;
            variable = _variable.default.fromNameAndType(name, type);
        } else {
            var type1 = fileContext.findTypeByTypeName(typeName);
            if (type1 === null) {
                fileContext.debug("The '".concat(variableName, "' variable's '").concat(typeName, "' type is not present."), variableNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuLi90eXBlXCI7XG5pbXBvcnQgeyB0eXBlTmFtZUZyb21UeXBlTm9kZSwgdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VmFyaWFibGUodmFyaWFibGVOb2RlLCB0eXBlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyh2YXJpYWJsZU5vZGUpO1xuXG4gIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gLCB2YXJpYWJsZU5vZGUpO1xuXG4gIGNvbnN0IHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gZmlsZUNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gIGlmICh2YXJpYWJsZVByZXNlbnQpIHtcbiAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlIHZhcmlhYmxlICcke3ZhcmlhYmxlTmFtZX0nIGlzIGFscmVhZHkgcHJlc2VudC5gLCB2YXJpYWJsZU5vZGUpO1xuICB9IGVsc2Uge1xuICAgIGxldCB2YXJpYWJsZTtcblxuICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpO1xuICAgIFxuICAgIGlmICh0eXBlTmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgbmFtZSA9IHZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgdHlwZSA9IG9iamVjdFR5cGU7XG5cbiAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tTmFtZUFuZFR5cGUobmFtZSwgdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3ZhcmlhYmxlTmFtZX0nIHZhcmlhYmxlJ3MgJyR7dHlwZU5hbWV9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmAsIHZhcmlhYmxlTm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuYW1lID0gdmFyaWFibGVOYW1lOyAgLy8vXG5cbiAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tTmFtZUFuZFR5cGUobmFtZSwgdHlwZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBmaWxlQ29udGV4dC5hZGRWYXJpYWJsZSh2YXJpYWJsZSk7XG5cbiAgICAgIHZhcmlhYmxlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmICh2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmAsIHZhcmlhYmxlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdmFyaWFibGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlWYXJpYWJsZSIsInZhcmlhYmxlTm9kZSIsInR5cGVOb2RlIiwiZmlsZUNvbnRleHQiLCJ2YXJpYWJsZVZlcmlmaWVkIiwidmFyaWFibGVTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwiZGVidWciLCJ2YXJpYWJsZSIsInR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJuYW1lIiwidHlwZSIsIm9iamVjdFR5cGUiLCJWYXJpYWJsZSIsImZyb21OYW1lQW5kVHlwZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsImFkZFZhcmlhYmxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQXdCQTs7OytEQUxIO29CQUVNO3FCQUN3Qzs7Ozs7O0FBRXBELFNBQVNBLGVBQWVDLFlBQVksRUFBRUMsUUFBUSxFQUFFQyxXQUFXO0lBQ3hFLElBQUlDLG1CQUFtQjtJQUV2QixJQUFNQyxpQkFBaUJGLFlBQVlHLFlBQVksQ0FBQ0w7SUFFaERFLFlBQVlJLEtBQUssQ0FBQyxBQUFDLGtCQUFnQyxPQUFmRixnQkFBZSxrQkFBZ0JKO0lBRW5FLElBQU1PLGVBQWVDLElBQUFBLG1DQUE0QixFQUFDUixlQUM1Q1Msa0JBQWtCUCxZQUFZUSwrQkFBK0IsQ0FBQ0g7SUFFcEUsSUFBSUUsaUJBQWlCO1FBQ25CUCxZQUFZUyxLQUFLLENBQUMsQUFBQyxpQkFBNkIsT0FBYkosY0FBYSwwQkFBd0JQO0lBQzFFLE9BQU87UUFDTCxJQUFJWTtRQUVKLElBQU1DLFdBQVdDLElBQUFBLDJCQUFvQixFQUFDYjtRQUV0QyxJQUFJWSxhQUFhLE1BQU07WUFDckIsSUFBTUUsT0FBT1IsY0FDUFMsT0FBT0MsZ0JBQVU7WUFFckJMLFdBQVdNLGlCQUFRLENBQUNDLGVBQWUsQ0FBQ0osTUFBTUM7UUFDOUMsT0FBTztZQUNMLElBQU1BLFFBQU9kLFlBQVlrQixrQkFBa0IsQ0FBQ1A7WUFFNUMsSUFBSUcsVUFBUyxNQUFNO2dCQUNqQmQsWUFBWVMsS0FBSyxDQUFDLEFBQUMsUUFBb0NFLE9BQTdCTixjQUFhLGtCQUF5QixPQUFUTSxVQUFTLDJCQUF5QmI7WUFDM0YsT0FBTztnQkFDTCxJQUFNZSxRQUFPUixjQUFlLEdBQUc7Z0JBRS9CSyxXQUFXTSxpQkFBUSxDQUFDQyxlQUFlLENBQUNKLE9BQU1DO1lBQzVDO1FBQ0Y7UUFFQSxJQUFJSixhQUFhLE1BQU07WUFDckJWLFlBQVltQixXQUFXLENBQUNUO1lBRXhCVCxtQkFBbUI7UUFDckI7SUFDRjtJQUVBLElBQUlBLGtCQUFrQjtRQUNwQkQsWUFBWVMsS0FBSyxDQUFDLEFBQUMsb0JBQWtDLE9BQWZQLGdCQUFlLGdCQUFjSjtJQUNyRTtJQUVBLE9BQU9HO0FBQ1QifQ==