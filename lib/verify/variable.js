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
var _variable = /*#__PURE__*/ _interopRequireDefault(require("../variable"));
var _string = require("../utilities/string");
var _query = require("../utilities/query");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyVariable(variableNode, typeNode, fileContext) {
    var variableVerified = false;
    fileContext.begin(variableNode);
    var variable = null;
    var variableName = (0, _query.variableNameFromVariableNode)(variableNode), variablePresent = fileContext.isVariablePresentByVariableName(variableName);
    if (variablePresent) {
        fileContext.error("The variable '".concat(variableName, "' is already present."));
    } else {
        var typeName = (0, _query.typeNameFromTypeNode)(typeNode);
        if (typeName === null) {
            var type = null, name = variableName; ///
            variable = _variable.default.fromTypeAndName(type, name);
        } else {
            var type1 = fileContext.findTypeByTypeName(typeName);
            if (type1 === null) {
                fileContext.error("The '".concat(variableName, "' variable's '").concat(typeName, "' type is missing."));
            } else {
                var name1 = variableName; ///
                variable = _variable.default.fromTypeAndName(type1, name1);
            }
        }
        if (variable !== null) {
            fileContext.addVariable(variable);
            variableVerified = true;
        }
    }
    if (variableVerified) {
        var variableString = (0, _string.nodeAsString)(variableNode);
        fileContext.info("Verified the '".concat(variableString, "' variable."));
    }
    variableVerified ? fileContext.complete(variableNode) : fileContext.halt(variableNode);
    return variableVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IHR5cGVOYW1lRnJvbVR5cGVOb2RlLCB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlWYXJpYWJsZSh2YXJpYWJsZU5vZGUsIHR5cGVOb2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgdmFyaWFibGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGZpbGVDb250ZXh0LmJlZ2luKHZhcmlhYmxlTm9kZSk7XG5cbiAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICBpZiAodmFyaWFibGVQcmVzZW50KSB7XG4gICAgZmlsZUNvbnRleHQuZXJyb3IoYFRoZSB2YXJpYWJsZSAnJHt2YXJpYWJsZU5hbWV9JyBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSk7XG4gICAgXG4gICAgaWYgKHR5cGVOYW1lID09PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlID0gbnVsbCxcbiAgICAgICAgICAgIG5hbWUgPSB2YXJpYWJsZU5hbWU7ICAvLy9cblxuICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVHlwZUFuZE5hbWUodHlwZSwgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICBmaWxlQ29udGV4dC5lcnJvcihgVGhlICcke3ZhcmlhYmxlTmFtZX0nIHZhcmlhYmxlJ3MgJyR7dHlwZU5hbWV9JyB0eXBlIGlzIG1pc3NpbmcuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuYW1lID0gdmFyaWFibGVOYW1lOyAgLy8vXG5cbiAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVHlwZUFuZE5hbWUodHlwZSwgbmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBmaWxlQ29udGV4dC5hZGRWYXJpYWJsZSh2YXJpYWJsZSk7XG5cbiAgICAgIHZhcmlhYmxlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmICh2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSBub2RlQXNTdHJpbmcodmFyaWFibGVOb2RlKTtcblxuICAgIGZpbGVDb250ZXh0LmluZm8oYFZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmApO1xuICB9XG5cbiAgdmFyaWFibGVWZXJpZmllZCA/XG4gICAgZmlsZUNvbnRleHQuY29tcGxldGUodmFyaWFibGVOb2RlKSA6XG4gICAgICBmaWxlQ29udGV4dC5oYWx0KHZhcmlhYmxlTm9kZSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VmFyaWFibGUiLCJ2YXJpYWJsZU5vZGUiLCJ0eXBlTm9kZSIsImZpbGVDb250ZXh0IiwidmFyaWFibGVWZXJpZmllZCIsImJlZ2luIiwidmFyaWFibGUiLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIiwidmFyaWFibGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsImVycm9yIiwidHlwZU5hbWUiLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSIsInR5cGUiLCJuYW1lIiwiVmFyaWFibGUiLCJmcm9tVHlwZUFuZE5hbWUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJhZGRWYXJpYWJsZSIsInZhcmlhYmxlU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiaW5mbyIsImNvbXBsZXRlIiwiaGFsdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUF3QkE7Ozs2REFMSDtzQkFFUTtxQkFDc0M7Ozs7OztBQUVwRCxTQUFTQSxlQUFlQyxZQUFZLEVBQUVDLFFBQVEsRUFBRUMsV0FBVyxFQUFFO0lBQzFFLElBQUlDLG1CQUFtQixLQUFLO0lBRTVCRCxZQUFZRSxLQUFLLENBQUNKO0lBRWxCLElBQUlLLFdBQVcsSUFBSTtJQUVuQixJQUFNQyxlQUFlQyxJQUFBQSxtQ0FBNEIsRUFBQ1AsZUFDNUNRLGtCQUFrQk4sWUFBWU8sK0JBQStCLENBQUNIO0lBRXBFLElBQUlFLGlCQUFpQjtRQUNuQk4sWUFBWVEsS0FBSyxDQUFDLEFBQUMsaUJBQTZCLE9BQWJKLGNBQWE7SUFDbEQsT0FBTztRQUNMLElBQU1LLFdBQVdDLElBQUFBLDJCQUFvQixFQUFDWDtRQUV0QyxJQUFJVSxhQUFhLElBQUksRUFBRTtZQUNyQixJQUFNRSxPQUFPLElBQUksRUFDWEMsT0FBT1IsY0FBZSxHQUFHO1lBRS9CRCxXQUFXVSxpQkFBUSxDQUFDQyxlQUFlLENBQUNILE1BQU1DO1FBQzVDLE9BQU87WUFDTCxJQUFNRCxRQUFPWCxZQUFZZSxrQkFBa0IsQ0FBQ047WUFFNUMsSUFBSUUsVUFBUyxJQUFJLEVBQUU7Z0JBQ2pCWCxZQUFZUSxLQUFLLENBQUMsQUFBQyxRQUFvQ0MsT0FBN0JMLGNBQWEsa0JBQXlCLE9BQVRLLFVBQVM7WUFDbEUsT0FBTztnQkFDTCxJQUFNRyxRQUFPUixjQUFlLEdBQUc7Z0JBRS9CRCxXQUFXVSxpQkFBUSxDQUFDQyxlQUFlLENBQUNILE9BQU1DO1lBQzVDLENBQUM7UUFDSCxDQUFDO1FBRUQsSUFBSVQsYUFBYSxJQUFJLEVBQUU7WUFDckJILFlBQVlnQixXQUFXLENBQUNiO1lBRXhCRixtQkFBbUIsSUFBSTtRQUN6QixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQUlBLGtCQUFrQjtRQUNwQixJQUFNZ0IsaUJBQWlCQyxJQUFBQSxvQkFBWSxFQUFDcEI7UUFFcENFLFlBQVltQixJQUFJLENBQUMsQUFBQyxpQkFBK0IsT0FBZkYsZ0JBQWU7SUFDbkQsQ0FBQztJQUVEaEIsbUJBQ0VELFlBQVlvQixRQUFRLENBQUN0QixnQkFDbkJFLFlBQVlxQixJQUFJLENBQUN2QixhQUFhO0lBRWxDLE9BQU9HO0FBQ1QifQ==