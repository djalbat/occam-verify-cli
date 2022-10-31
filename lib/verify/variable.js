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
            var variableString = (0, _string.nodeAsString)(variableName);
            fileContext.info("Verified the '".concat(variableString, "' variable."));
            fileContext.addVariable(variable);
            variableVerified = true;
        }
    }
    variableVerified ? fileContext.complete(variableNode) : fileContext.halt(variableNode);
    return variableVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IHR5cGVOYW1lRnJvbVR5cGVOb2RlLCB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlWYXJpYWJsZSh2YXJpYWJsZU5vZGUsIHR5cGVOb2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgdmFyaWFibGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGZpbGVDb250ZXh0LmJlZ2luKHZhcmlhYmxlTm9kZSk7XG5cbiAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICBpZiAodmFyaWFibGVQcmVzZW50KSB7XG4gICAgZmlsZUNvbnRleHQuZXJyb3IoYFRoZSB2YXJpYWJsZSAnJHt2YXJpYWJsZU5hbWV9JyBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSk7XG4gICAgXG4gICAgaWYgKHR5cGVOYW1lID09PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlID0gbnVsbCxcbiAgICAgICAgICAgIG5hbWUgPSB2YXJpYWJsZU5hbWU7ICAvLy9cblxuICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVHlwZUFuZE5hbWUodHlwZSwgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICBmaWxlQ29udGV4dC5lcnJvcihgVGhlICcke3ZhcmlhYmxlTmFtZX0nIHZhcmlhYmxlJ3MgJyR7dHlwZU5hbWV9JyB0eXBlIGlzIG1pc3NpbmcuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuYW1lID0gdmFyaWFibGVOYW1lOyAgLy8vXG5cbiAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVHlwZUFuZE5hbWUodHlwZSwgbmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IG5vZGVBc1N0cmluZyh2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBmaWxlQ29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS5gKTtcblxuICAgICAgZmlsZUNvbnRleHQuYWRkVmFyaWFibGUodmFyaWFibGUpO1xuXG4gICAgICB2YXJpYWJsZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICB2YXJpYWJsZVZlcmlmaWVkID9cbiAgICBmaWxlQ29udGV4dC5jb21wbGV0ZSh2YXJpYWJsZU5vZGUpIDpcbiAgICAgIGZpbGVDb250ZXh0LmhhbHQodmFyaWFibGVOb2RlKTtcblxuICByZXR1cm4gdmFyaWFibGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlWYXJpYWJsZSIsInZhcmlhYmxlTm9kZSIsInR5cGVOb2RlIiwiZmlsZUNvbnRleHQiLCJ2YXJpYWJsZVZlcmlmaWVkIiwiYmVnaW4iLCJ2YXJpYWJsZSIsInZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwiZXJyb3IiLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwidHlwZSIsIm5hbWUiLCJWYXJpYWJsZSIsImZyb21UeXBlQW5kTmFtZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInZhcmlhYmxlU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiaW5mbyIsImFkZFZhcmlhYmxlIiwiY29tcGxldGUiLCJoYWx0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQXdCQTs7OzZEQUxIO3NCQUVRO3FCQUNzQzs7Ozs7O0FBRXBELFNBQVNBLGVBQWVDLFlBQVksRUFBRUMsUUFBUSxFQUFFQyxXQUFXLEVBQUU7SUFDMUUsSUFBSUMsbUJBQW1CLEtBQUs7SUFFNUJELFlBQVlFLEtBQUssQ0FBQ0o7SUFFbEIsSUFBSUssV0FBVyxJQUFJO0lBRW5CLElBQU1DLGVBQWVDLElBQUFBLG1DQUE0QixFQUFDUCxlQUM1Q1Esa0JBQWtCTixZQUFZTywrQkFBK0IsQ0FBQ0g7SUFFcEUsSUFBSUUsaUJBQWlCO1FBQ25CTixZQUFZUSxLQUFLLENBQUMsQUFBQyxpQkFBNkIsT0FBYkosY0FBYTtJQUNsRCxPQUFPO1FBQ0wsSUFBTUssV0FBV0MsSUFBQUEsMkJBQW9CLEVBQUNYO1FBRXRDLElBQUlVLGFBQWEsSUFBSSxFQUFFO1lBQ3JCLElBQU1FLE9BQU8sSUFBSSxFQUNYQyxPQUFPUixjQUFlLEdBQUc7WUFFL0JELFdBQVdVLGlCQUFRLENBQUNDLGVBQWUsQ0FBQ0gsTUFBTUM7UUFDNUMsT0FBTztZQUNMLElBQU1ELFFBQU9YLFlBQVllLGtCQUFrQixDQUFDTjtZQUU1QyxJQUFJRSxVQUFTLElBQUksRUFBRTtnQkFDakJYLFlBQVlRLEtBQUssQ0FBQyxBQUFDLFFBQW9DQyxPQUE3QkwsY0FBYSxrQkFBeUIsT0FBVEssVUFBUztZQUNsRSxPQUFPO2dCQUNMLElBQU1HLFFBQU9SLGNBQWUsR0FBRztnQkFFL0JELFdBQVdVLGlCQUFRLENBQUNDLGVBQWUsQ0FBQ0gsT0FBTUM7WUFDNUMsQ0FBQztRQUNILENBQUM7UUFFRCxJQUFJVCxhQUFhLElBQUksRUFBRTtZQUNyQixJQUFNYSxpQkFBaUJDLElBQUFBLG9CQUFZLEVBQUNiO1lBRXBDSixZQUFZa0IsSUFBSSxDQUFDLEFBQUMsaUJBQStCLE9BQWZGLGdCQUFlO1lBRWpEaEIsWUFBWW1CLFdBQVcsQ0FBQ2hCO1lBRXhCRixtQkFBbUIsSUFBSTtRQUN6QixDQUFDO0lBQ0gsQ0FBQztJQUVEQSxtQkFDRUQsWUFBWW9CLFFBQVEsQ0FBQ3RCLGdCQUNuQkUsWUFBWXFCLElBQUksQ0FBQ3ZCLGFBQWE7SUFFbEMsT0FBT0c7QUFDVCJ9