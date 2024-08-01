"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyDefining;
    }
});
var _term = /*#__PURE__*/ _interop_require_default(require("../term"));
var _array = require("../utilities/array");
var _constants = require("../constants");
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var definedVariableNodeQuery = (0, _query.nodeQuery)("/argument/term/variable!");
function verifyDefining(argumentNode, definingNode, context) {
    var definingVerified = false;
    var definedVariableNode = definedVariableNodeQuery(argumentNode);
    if (definedVariableNode !== null) {
        var defined = definedFromDefiningNode(definingNode), variableNode = definedVariableNode, variableDefined = isVariableDefined(variableNode, context);
        if (defined) {
            if (variableDefined) {
                definingVerified = true;
            }
        }
        if (!defined) {
            if (!variableDefined) {
                definingVerified = true;
            }
        }
    }
    return definingVerified;
}
function isVariableDefined(variableNode, context) {
    var variable = context.findVariableByVariableNode(variableNode), term = _term.default.fromVariable(variable, context), termGrounded = context.isTermGrounded(term, context), variableDefined = termGrounded; ///
    return variableDefined;
}
function definedFromDefiningNode(definingNode) {
    var childNodes = definingNode.getChildNodes(), secondChildNode = (0, _array.second)(childNodes), terminalNode = secondChildNode, content = terminalNode.getContent(), defined = content === _constants.DEFINED;
    return defined;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZGVmaW5pbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXJtIGZyb20gXCIuLi90ZXJtXCI7XG5cbmltcG9ydCB7IHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IERFRklORUQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGRlZmluZWRWYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcmd1bWVudC90ZXJtL3ZhcmlhYmxlIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5RGVmaW5pbmcoYXJndW1lbnROb2RlLCBkZWZpbmluZ05vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGRlZmluaW5nVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBkZWZpbmVkVmFyaWFibGVOb2RlID0gZGVmaW5lZFZhcmlhYmxlTm9kZVF1ZXJ5KGFyZ3VtZW50Tm9kZSk7XG5cbiAgaWYgKGRlZmluZWRWYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBkZWZpbmVkID0gZGVmaW5lZEZyb21EZWZpbmluZ05vZGUoZGVmaW5pbmdOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBkZWZpbmVkVmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZURlZmluZWQgPSBpc1ZhcmlhYmxlRGVmaW5lZCh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgaWYgKGRlZmluZWQpIHtcbiAgICAgIGlmICh2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgICAgZGVmaW5pbmdWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFkZWZpbmVkKSB7XG4gICAgICBpZiAoIXZhcmlhYmxlRGVmaW5lZCkge1xuICAgICAgICBkZWZpbmluZ1ZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVmaW5pbmdWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gaXNWYXJpYWJsZURlZmluZWQodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICB0ZXJtID0gVGVybS5mcm9tVmFyaWFibGUodmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJtR3JvdW5kZWQgPSBjb250ZXh0LmlzVGVybUdyb3VuZGVkKHRlcm0sIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZURlZmluZWQgPSB0ZXJtR3JvdW5kZWQ7IC8vL1xuXG4gIHJldHVybiB2YXJpYWJsZURlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGRlZmluZWRGcm9tRGVmaW5pbmdOb2RlKGRlZmluaW5nTm9kZSkge1xuICBjb25zdCBjaGlsZE5vZGVzID0gZGVmaW5pbmdOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgc2Vjb25kQ2hpbGROb2RlID0gc2Vjb25kKGNoaWxkTm9kZXMpLFxuICAgICAgICB0ZXJtaW5hbE5vZGUgPSBzZWNvbmRDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIGRlZmluZWQgPSAoY29udGVudCA9PT0gREVGSU5FRCk7XG5cbiAgcmV0dXJuIGRlZmluZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5RGVmaW5pbmciLCJkZWZpbmVkVmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJhcmd1bWVudE5vZGUiLCJkZWZpbmluZ05vZGUiLCJjb250ZXh0IiwiZGVmaW5pbmdWZXJpZmllZCIsImRlZmluZWRWYXJpYWJsZU5vZGUiLCJkZWZpbmVkIiwiZGVmaW5lZEZyb21EZWZpbmluZ05vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZURlZmluZWQiLCJpc1ZhcmlhYmxlRGVmaW5lZCIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJ0ZXJtIiwiVGVybSIsImZyb21WYXJpYWJsZSIsInRlcm1Hcm91bmRlZCIsImlzVGVybUdyb3VuZGVkIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJzZWNvbmRDaGlsZE5vZGUiLCJzZWNvbmQiLCJ0ZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsIkRFRklORUQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBd0JBOzs7MkRBUlA7cUJBRU07eUJBQ0M7cUJBQ0U7Ozs7OztBQUUxQixJQUFNQywyQkFBMkJDLElBQUFBLGdCQUFTLEVBQUM7QUFFNUIsU0FBU0YsZUFBZUcsWUFBWSxFQUFFQyxZQUFZLEVBQUVDLE9BQU87SUFDeEUsSUFBSUMsbUJBQW1CO0lBRXZCLElBQU1DLHNCQUFzQk4seUJBQXlCRTtJQUVyRCxJQUFJSSx3QkFBd0IsTUFBTTtRQUNoQyxJQUFNQyxVQUFVQyx3QkFBd0JMLGVBQ2xDTSxlQUFlSCxxQkFDZkksa0JBQWtCQyxrQkFBa0JGLGNBQWNMO1FBRXhELElBQUlHLFNBQVM7WUFDWCxJQUFJRyxpQkFBaUI7Z0JBQ25CTCxtQkFBbUI7WUFDckI7UUFDRjtRQUVBLElBQUksQ0FBQ0UsU0FBUztZQUNaLElBQUksQ0FBQ0csaUJBQWlCO2dCQUNwQkwsbUJBQW1CO1lBQ3JCO1FBQ0Y7SUFDRjtJQUVBLE9BQU9BO0FBQ1Q7QUFFQSxTQUFTTSxrQkFBa0JGLFlBQVksRUFBRUwsT0FBTztJQUM5QyxJQUFNUSxXQUFXUixRQUFRUywwQkFBMEIsQ0FBQ0osZUFDOUNLLE9BQU9DLGFBQUksQ0FBQ0MsWUFBWSxDQUFDSixVQUFVUixVQUNuQ2EsZUFBZWIsUUFBUWMsY0FBYyxDQUFDSixNQUFNVixVQUM1Q00sa0JBQWtCTyxjQUFjLEdBQUc7SUFFekMsT0FBT1A7QUFDVDtBQUVBLFNBQVNGLHdCQUF3QkwsWUFBWTtJQUMzQyxJQUFNZ0IsYUFBYWhCLGFBQWFpQixhQUFhLElBQ3ZDQyxrQkFBa0JDLElBQUFBLGFBQU0sRUFBQ0gsYUFDekJJLGVBQWVGLGlCQUNmRyxVQUFVRCxhQUFhRSxVQUFVLElBQ2pDbEIsVUFBV2lCLFlBQVlFLGtCQUFPO0lBRXBDLE9BQU9uQjtBQUNUIn0=