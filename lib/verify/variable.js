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
var _query = require("../utilities/query");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyVariable(variableNode, typeNode, context) {
    var variableVerified = false;
    var variableName = (0, _query.variableNameFromVariableNode)(variableNode), variablePresent = context.isVariablePresentByVariableName(variableName);
    if (variablePresent) {
        context.error("The variable '".concat(variableName, "' is already present."), variableNode);
    } else {
        var variable = null;
        var typeName = (0, _query.typeNameFromTypeNode)(typeNode);
        if (typeName === null) {
            var type = null, name = variableName; ///
            variable = _variable.default.fromTypeAndName(type, name);
        } else {
            var type1 = context.findTypeByTypeName(typeName);
            if (type1 === null) {
                context.error("The '".concat(variableName, "' variable's '").concat(typeName, "' type is missing."), variableNode);
            } else {
                var name1 = variableName; ///
                variable = _variable.default.fromTypeAndName(type1, name1);
            }
        }
        if (variable !== null) {
            var variableString = variable.asString();
            context.addVariable(variable);
            variableVerified = true;
            context.info("Verified the '".concat(variableString, "' variable."), variableNode);
        }
    }
    return variableVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgdHlwZU5hbWVGcm9tVHlwZU5vZGUsIHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVZhcmlhYmxlKHZhcmlhYmxlTm9kZSwgdHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gIGlmICh2YXJpYWJsZVByZXNlbnQpIHtcbiAgICBjb250ZXh0LmVycm9yKGBUaGUgdmFyaWFibGUgJyR7dmFyaWFibGVOYW1lfScgaXMgYWxyZWFkeSBwcmVzZW50LmAsIHZhcmlhYmxlTm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpO1xuICAgIFxuICAgIGlmICh0eXBlTmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZSA9IG51bGwsXG4gICAgICAgICAgICBuYW1lID0gdmFyaWFibGVOYW1lOyAgLy8vXG5cbiAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVR5cGVBbmROYW1lKHR5cGUsIG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICBjb250ZXh0LmVycm9yKGBUaGUgJyR7dmFyaWFibGVOYW1lfScgdmFyaWFibGUncyAnJHt0eXBlTmFtZX0nIHR5cGUgaXMgbWlzc2luZy5gLCB2YXJpYWJsZU5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHZhcmlhYmxlTmFtZTsgIC8vL1xuXG4gICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVR5cGVBbmROYW1lKHR5cGUsIG5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZS5hc1N0cmluZygpO1xuXG4gICAgICBjb250ZXh0LmFkZFZhcmlhYmxlKHZhcmlhYmxlKTtcblxuICAgICAgdmFyaWFibGVWZXJpZmllZCA9IHRydWU7XG5cbiAgICAgIGNvbnRleHQuaW5mbyhgVmVyaWZpZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCwgdmFyaWFibGVOb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFyaWFibGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlWYXJpYWJsZSIsInZhcmlhYmxlTm9kZSIsInR5cGVOb2RlIiwiY29udGV4dCIsInZhcmlhYmxlVmVyaWZpZWQiLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIiwidmFyaWFibGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsImVycm9yIiwidmFyaWFibGUiLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwidHlwZSIsIm5hbWUiLCJWYXJpYWJsZSIsImZyb21UeXBlQW5kTmFtZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInZhcmlhYmxlU3RyaW5nIiwiYXNTdHJpbmciLCJhZGRWYXJpYWJsZSIsImluZm8iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBd0JBOzs7NkRBSkg7cUJBRThDOzs7Ozs7QUFFcEQsU0FBU0EsZUFBZUMsWUFBWSxFQUFFQyxRQUFRLEVBQUVDLE9BQU8sRUFBRTtJQUN0RSxJQUFJQyxtQkFBbUIsS0FBSztJQUU1QixJQUFNQyxlQUFlQyxJQUFBQSxtQ0FBNEIsRUFBQ0wsZUFDNUNNLGtCQUFrQkosUUFBUUssK0JBQStCLENBQUNIO0lBRWhFLElBQUlFLGlCQUFpQjtRQUNuQkosUUFBUU0sS0FBSyxDQUFDLEFBQUMsaUJBQTZCLE9BQWJKLGNBQWEsMEJBQXdCSjtJQUN0RSxPQUFPO1FBQ0wsSUFBSVMsV0FBVyxJQUFJO1FBRW5CLElBQU1DLFdBQVdDLElBQUFBLDJCQUFvQixFQUFDVjtRQUV0QyxJQUFJUyxhQUFhLElBQUksRUFBRTtZQUNyQixJQUFNRSxPQUFPLElBQUksRUFDWEMsT0FBT1QsY0FBZSxHQUFHO1lBRS9CSyxXQUFXSyxpQkFBUSxDQUFDQyxlQUFlLENBQUNILE1BQU1DO1FBQzVDLE9BQU87WUFDTCxJQUFNRCxRQUFPVixRQUFRYyxrQkFBa0IsQ0FBQ047WUFFeEMsSUFBSUUsVUFBUyxJQUFJLEVBQUU7Z0JBQ2pCVixRQUFRTSxLQUFLLENBQUMsQUFBQyxRQUFvQ0UsT0FBN0JOLGNBQWEsa0JBQXlCLE9BQVRNLFVBQVMsdUJBQXFCVjtZQUNuRixPQUFPO2dCQUNMLElBQU1hLFFBQU9ULGNBQWUsR0FBRztnQkFFL0JLLFdBQVdLLGlCQUFRLENBQUNDLGVBQWUsQ0FBQ0gsT0FBTUM7WUFDNUMsQ0FBQztRQUNILENBQUM7UUFFRCxJQUFJSixhQUFhLElBQUksRUFBRTtZQUNyQixJQUFNUSxpQkFBaUJSLFNBQVNTLFFBQVE7WUFFeENoQixRQUFRaUIsV0FBVyxDQUFDVjtZQUVwQk4sbUJBQW1CLElBQUk7WUFFdkJELFFBQVFrQixJQUFJLENBQUMsQUFBQyxpQkFBK0IsT0FBZkgsZ0JBQWUsZ0JBQWNqQjtRQUM3RCxDQUFDO0lBQ0gsQ0FBQztJQUVELE9BQU9HO0FBQ1QifQ==