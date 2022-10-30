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
        context.error("The variable '".concat(variableName, "' is already present."));
    } else {
        var variable = null;
        var typeName = (0, _query.typeNameFromTypeNode)(typeNode);
        if (typeName === null) {
            var type = null, name = variableName; ///
            variable = _variable.default.fromTypeAndName(type, name);
        } else {
            var type1 = context.findTypeByTypeName(typeName);
            if (type1 === null) {
                context.error("The '".concat(variableName, "' variable's '").concat(typeName, "' type is missing."));
            } else {
                var name1 = variableName; ///
                variable = _variable.default.fromTypeAndName(type1, name1);
            }
        }
        if (variable !== null) {
            var variableString = variable.asString();
            context.addVariable(variable);
            variableVerified = true;
            context.info("Verified the '".concat(variableString, "' variable."));
        }
    }
    return variableVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgdHlwZU5hbWVGcm9tVHlwZU5vZGUsIHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVZhcmlhYmxlKHZhcmlhYmxlTm9kZSwgdHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gIGlmICh2YXJpYWJsZVByZXNlbnQpIHtcbiAgICBjb250ZXh0LmVycm9yKGBUaGUgdmFyaWFibGUgJyR7dmFyaWFibGVOYW1lfScgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICB9IGVsc2Uge1xuICAgIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKTtcbiAgICBcbiAgICBpZiAodHlwZU5hbWUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBudWxsLFxuICAgICAgICAgICAgbmFtZSA9IHZhcmlhYmxlTmFtZTsgIC8vL1xuXG4gICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21UeXBlQW5kTmFtZSh0eXBlLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgY29udGV4dC5lcnJvcihgVGhlICcke3ZhcmlhYmxlTmFtZX0nIHZhcmlhYmxlJ3MgJyR7dHlwZU5hbWV9JyB0eXBlIGlzIG1pc3NpbmcuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuYW1lID0gdmFyaWFibGVOYW1lOyAgLy8vXG5cbiAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVHlwZUFuZE5hbWUodHlwZSwgbmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlLmFzU3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQuYWRkVmFyaWFibGUodmFyaWFibGUpO1xuXG4gICAgICB2YXJpYWJsZVZlcmlmaWVkID0gdHJ1ZTtcblxuICAgICAgY29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFyaWFibGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlWYXJpYWJsZSIsInZhcmlhYmxlTm9kZSIsInR5cGVOb2RlIiwiY29udGV4dCIsInZhcmlhYmxlVmVyaWZpZWQiLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIiwidmFyaWFibGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsImVycm9yIiwidmFyaWFibGUiLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwidHlwZSIsIm5hbWUiLCJWYXJpYWJsZSIsImZyb21UeXBlQW5kTmFtZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInZhcmlhYmxlU3RyaW5nIiwiYXNTdHJpbmciLCJhZGRWYXJpYWJsZSIsImluZm8iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBd0JBOzs7NkRBSkg7cUJBRThDOzs7Ozs7QUFFcEQsU0FBU0EsZUFBZUMsWUFBWSxFQUFFQyxRQUFRLEVBQUVDLE9BQU8sRUFBRTtJQUN0RSxJQUFJQyxtQkFBbUIsS0FBSztJQUU1QixJQUFNQyxlQUFlQyxJQUFBQSxtQ0FBNEIsRUFBQ0wsZUFDNUNNLGtCQUFrQkosUUFBUUssK0JBQStCLENBQUNIO0lBRWhFLElBQUlFLGlCQUFpQjtRQUNuQkosUUFBUU0sS0FBSyxDQUFDLEFBQUMsaUJBQTZCLE9BQWJKLGNBQWE7SUFDOUMsT0FBTztRQUNMLElBQUlLLFdBQVcsSUFBSTtRQUVuQixJQUFNQyxXQUFXQyxJQUFBQSwyQkFBb0IsRUFBQ1Y7UUFFdEMsSUFBSVMsYUFBYSxJQUFJLEVBQUU7WUFDckIsSUFBTUUsT0FBTyxJQUFJLEVBQ1hDLE9BQU9ULGNBQWUsR0FBRztZQUUvQkssV0FBV0ssaUJBQVEsQ0FBQ0MsZUFBZSxDQUFDSCxNQUFNQztRQUM1QyxPQUFPO1lBQ0wsSUFBTUQsUUFBT1YsUUFBUWMsa0JBQWtCLENBQUNOO1lBRXhDLElBQUlFLFVBQVMsSUFBSSxFQUFFO2dCQUNqQlYsUUFBUU0sS0FBSyxDQUFDLEFBQUMsUUFBb0NFLE9BQTdCTixjQUFhLGtCQUF5QixPQUFUTSxVQUFTO1lBQzlELE9BQU87Z0JBQ0wsSUFBTUcsUUFBT1QsY0FBZSxHQUFHO2dCQUUvQkssV0FBV0ssaUJBQVEsQ0FBQ0MsZUFBZSxDQUFDSCxPQUFNQztZQUM1QyxDQUFDO1FBQ0gsQ0FBQztRQUVELElBQUlKLGFBQWEsSUFBSSxFQUFFO1lBQ3JCLElBQU1RLGlCQUFpQlIsU0FBU1MsUUFBUTtZQUV4Q2hCLFFBQVFpQixXQUFXLENBQUNWO1lBRXBCTixtQkFBbUIsSUFBSTtZQUV2QkQsUUFBUWtCLElBQUksQ0FBQyxBQUFDLGlCQUErQixPQUFmSCxnQkFBZTtRQUMvQyxDQUFDO0lBQ0gsQ0FBQztJQUVELE9BQU9kO0FBQ1QifQ==