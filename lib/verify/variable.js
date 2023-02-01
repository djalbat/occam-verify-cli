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
                fileContext.error("The '".concat(variableName, "' variable's '").concat(typeName, "' type is not present."), variableNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuLi90eXBlXCI7XG5pbXBvcnQgeyB0eXBlTmFtZUZyb21UeXBlTm9kZSwgdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VmFyaWFibGUodmFyaWFibGVOb2RlLCB0eXBlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgIHZhcmlhYmxlU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKHZhcmlhYmxlTm9kZSksXG4gICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICBpZiAodmFyaWFibGVQcmVzZW50KSB7XG4gICAgZmlsZUNvbnRleHQuZXJyb3IoYFRoZSB2YXJpYWJsZSAnJHt2YXJpYWJsZU5hbWV9JyBpcyBhbHJlYWR5IHByZXNlbnQuYCwgdmFyaWFibGVOb2RlKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgdmFyaWFibGU7XG5cbiAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKTtcbiAgICBcbiAgICBpZiAodHlwZU5hbWUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBvYmplY3RUeXBlLFxuICAgICAgICAgICAgbmFtZSA9IHZhcmlhYmxlTmFtZTsgIC8vL1xuXG4gICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21UeXBlQW5kTmFtZSh0eXBlLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIGZpbGVDb250ZXh0LmVycm9yKGBUaGUgJyR7dmFyaWFibGVOYW1lfScgdmFyaWFibGUncyAnJHt0eXBlTmFtZX0nIHR5cGUgaXMgbm90IHByZXNlbnQuYCwgdmFyaWFibGVOb2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB2YXJpYWJsZU5hbWU7ICAvLy9cblxuICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21UeXBlQW5kTmFtZSh0eXBlLCBuYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGZpbGVDb250ZXh0LmFkZFZhcmlhYmxlKHZhcmlhYmxlKTtcblxuICAgICAgdmFyaWFibGVWZXJpZmllZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKHZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICBmaWxlQ29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS5gLCB2YXJpYWJsZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VmFyaWFibGUiLCJ2YXJpYWJsZU5vZGUiLCJ0eXBlTm9kZSIsImZpbGVDb250ZXh0IiwidmFyaWFibGVWZXJpZmllZCIsInZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInZhcmlhYmxlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUiLCJlcnJvciIsInZhcmlhYmxlIiwidHlwZU5hbWUiLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSIsInR5cGUiLCJvYmplY3RUeXBlIiwibmFtZSIsIlZhcmlhYmxlIiwiZnJvbVR5cGVBbmROYW1lIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwiYWRkVmFyaWFibGUiLCJpbmZvIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQXdCQTs7OzZEQUxIO29CQUVNO3FCQUN3Qzs7Ozs7O0FBRXBELFNBQVNBLGVBQWVDLFlBQVksRUFBRUMsUUFBUSxFQUFFQyxXQUFXLEVBQUU7SUFDMUUsSUFBSUMsbUJBQW1CLEtBQUs7SUFFNUIsSUFBTUMsZUFBZUMsSUFBQUEsbUNBQTRCLEVBQUNMLGVBQzVDTSxpQkFBaUJKLFlBQVlLLFlBQVksQ0FBQ1AsZUFDMUNRLGtCQUFrQk4sWUFBWU8sK0JBQStCLENBQUNMO0lBRXBFLElBQUlJLGlCQUFpQjtRQUNuQk4sWUFBWVEsS0FBSyxDQUFDLEFBQUMsaUJBQTZCLE9BQWJOLGNBQWEsMEJBQXdCSjtJQUMxRSxPQUFPO1FBQ0wsSUFBSVc7UUFFSixJQUFNQyxXQUFXQyxJQUFBQSwyQkFBb0IsRUFBQ1o7UUFFdEMsSUFBSVcsYUFBYSxJQUFJLEVBQUU7WUFDckIsSUFBTUUsT0FBT0MsZ0JBQVUsRUFDakJDLE9BQU9aLGNBQWUsR0FBRztZQUUvQk8sV0FBV00saUJBQVEsQ0FBQ0MsZUFBZSxDQUFDSixNQUFNRTtRQUM1QyxPQUFPO1lBQ0wsSUFBTUYsUUFBT1osWUFBWWlCLGtCQUFrQixDQUFDUDtZQUU1QyxJQUFJRSxVQUFTLElBQUksRUFBRTtnQkFDakJaLFlBQVlRLEtBQUssQ0FBQyxBQUFDLFFBQW9DRSxPQUE3QlIsY0FBYSxrQkFBeUIsT0FBVFEsVUFBUywyQkFBeUJaO1lBQzNGLE9BQU87Z0JBQ0wsSUFBTWdCLFFBQU9aLGNBQWUsR0FBRztnQkFFL0JPLFdBQVdNLGlCQUFRLENBQUNDLGVBQWUsQ0FBQ0osT0FBTUU7WUFDNUMsQ0FBQztRQUNILENBQUM7UUFFRCxJQUFJTCxhQUFhLElBQUksRUFBRTtZQUNyQlQsWUFBWWtCLFdBQVcsQ0FBQ1Q7WUFFeEJSLG1CQUFtQixJQUFJO1FBQ3pCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBSUEsa0JBQWtCO1FBQ3BCRCxZQUFZbUIsSUFBSSxDQUFDLEFBQUMsaUJBQStCLE9BQWZmLGdCQUFlLGdCQUFjTjtJQUNqRSxDQUFDO0lBRUQsT0FBT0c7QUFDVCJ9