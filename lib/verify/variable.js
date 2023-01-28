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
var _type = require("../type");
var _query = require("../utilities/query");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyVariable(variableNode, typeNode, fileContext) {
    var variableVerified = false;
    var variableName = (0, _query.variableNameFromVariableNode)(variableNode), variableString = fileContext.nodeAsString(variableNode), variablePresent = fileContext.isVariablePresentByVariableName(variableName);
    if (variablePresent) {
        fileContext.error("The variable '".concat(variableName, "' is already present."), variableNode);
    } else {
        var variable;
        var typeName = (0, _query.typeNameFromTypeNode)(typeNode);
        if (typeName === null) {
            var type = _type.objectType, name = variableName; ///
            variable = _variable.default.fromTypeAndName(type, name);
        } else {
            var type1 = fileContext.findTypeByTypeName(typeName);
            if (type1 === null) {
                fileContext.error("The '".concat(variableName, "' variable's '").concat(typeName, "' type is missing."), variableNode);
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
        fileContext.info("Verified the '".concat(variableString, "' variable."), variableNode);
    }
    return variableVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuLi90eXBlXCI7XG5pbXBvcnQgeyB0eXBlTmFtZUZyb21UeXBlTm9kZSwgdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VmFyaWFibGUodmFyaWFibGVOb2RlLCB0eXBlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgIHZhcmlhYmxlU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKHZhcmlhYmxlTm9kZSksXG4gICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICBpZiAodmFyaWFibGVQcmVzZW50KSB7XG4gICAgZmlsZUNvbnRleHQuZXJyb3IoYFRoZSB2YXJpYWJsZSAnJHt2YXJpYWJsZU5hbWV9JyBpcyBhbHJlYWR5IHByZXNlbnQuYCwgdmFyaWFibGVOb2RlKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgdmFyaWFibGU7XG5cbiAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKTtcbiAgICBcbiAgICBpZiAodHlwZU5hbWUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBvYmplY3RUeXBlLFxuICAgICAgICAgICAgbmFtZSA9IHZhcmlhYmxlTmFtZTsgIC8vL1xuXG4gICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21UeXBlQW5kTmFtZSh0eXBlLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIGZpbGVDb250ZXh0LmVycm9yKGBUaGUgJyR7dmFyaWFibGVOYW1lfScgdmFyaWFibGUncyAnJHt0eXBlTmFtZX0nIHR5cGUgaXMgbWlzc2luZy5gLCB2YXJpYWJsZU5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHZhcmlhYmxlTmFtZTsgIC8vL1xuXG4gICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVR5cGVBbmROYW1lKHR5cGUsIG5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgZmlsZUNvbnRleHQuYWRkVmFyaWFibGUodmFyaWFibGUpO1xuXG4gICAgICB2YXJpYWJsZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAodmFyaWFibGVWZXJpZmllZCkge1xuICAgIGZpbGVDb250ZXh0LmluZm8oYFZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmAsIHZhcmlhYmxlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdmFyaWFibGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlWYXJpYWJsZSIsInZhcmlhYmxlTm9kZSIsInR5cGVOb2RlIiwiZmlsZUNvbnRleHQiLCJ2YXJpYWJsZVZlcmlmaWVkIiwidmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidmFyaWFibGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsImVycm9yIiwidmFyaWFibGUiLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwidHlwZSIsIm9iamVjdFR5cGUiLCJuYW1lIiwiVmFyaWFibGUiLCJmcm9tVHlwZUFuZE5hbWUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJhZGRWYXJpYWJsZSIsImluZm8iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBd0JBOzs7NkRBTEg7b0JBRU07cUJBQ3dDOzs7Ozs7QUFFcEQsU0FBU0EsZUFBZUMsWUFBWSxFQUFFQyxRQUFRLEVBQUVDLFdBQVcsRUFBRTtJQUMxRSxJQUFJQyxtQkFBbUIsS0FBSztJQUU1QixJQUFNQyxlQUFlQyxJQUFBQSxtQ0FBNEIsRUFBQ0wsZUFDNUNNLGlCQUFpQkosWUFBWUssWUFBWSxDQUFDUCxlQUMxQ1Esa0JBQWtCTixZQUFZTywrQkFBK0IsQ0FBQ0w7SUFFcEUsSUFBSUksaUJBQWlCO1FBQ25CTixZQUFZUSxLQUFLLENBQUMsQUFBQyxpQkFBNkIsT0FBYk4sY0FBYSwwQkFBd0JKO0lBQzFFLE9BQU87UUFDTCxJQUFJVztRQUVKLElBQU1DLFdBQVdDLElBQUFBLDJCQUFvQixFQUFDWjtRQUV0QyxJQUFJVyxhQUFhLElBQUksRUFBRTtZQUNyQixJQUFNRSxPQUFPQyxnQkFBVSxFQUNqQkMsT0FBT1osY0FBZSxHQUFHO1lBRS9CTyxXQUFXTSxpQkFBUSxDQUFDQyxlQUFlLENBQUNKLE1BQU1FO1FBQzVDLE9BQU87WUFDTCxJQUFNRixRQUFPWixZQUFZaUIsa0JBQWtCLENBQUNQO1lBRTVDLElBQUlFLFVBQVMsSUFBSSxFQUFFO2dCQUNqQlosWUFBWVEsS0FBSyxDQUFDLEFBQUMsUUFBb0NFLE9BQTdCUixjQUFhLGtCQUF5QixPQUFUUSxVQUFTLHVCQUFxQlo7WUFDdkYsT0FBTztnQkFDTCxJQUFNZ0IsUUFBT1osY0FBZSxHQUFHO2dCQUUvQk8sV0FBV00saUJBQVEsQ0FBQ0MsZUFBZSxDQUFDSixPQUFNRTtZQUM1QyxDQUFDO1FBQ0gsQ0FBQztRQUVELElBQUlMLGFBQWEsSUFBSSxFQUFFO1lBQ3JCVCxZQUFZa0IsV0FBVyxDQUFDVDtZQUV4QlIsbUJBQW1CLElBQUk7UUFDekIsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFJQSxrQkFBa0I7UUFDcEJELFlBQVltQixJQUFJLENBQUMsQUFBQyxpQkFBK0IsT0FBZmYsZ0JBQWUsZ0JBQWNOO0lBQ2pFLENBQUM7SUFFRCxPQUFPRztBQUNUIn0=