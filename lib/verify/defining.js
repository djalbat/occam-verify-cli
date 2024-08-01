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
var _array = require("../utilities/array");
var _constants = require("../constants");
var _query = require("../utilities/query");
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
    var variableDefined = false;
    return variableDefined;
}
function definedFromDefiningNode(definingNode) {
    var childNodes = definingNode.getChildNodes(), secondChildNode = (0, _array.second)(childNodes), terminalNode = secondChildNode, content = terminalNode.getContent(), defined = content === _constants.DEFINED;
    return defined;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZGVmaW5pbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IERFRklORUQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGRlZmluZWRWYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcmd1bWVudC90ZXJtL3ZhcmlhYmxlIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5RGVmaW5pbmcoYXJndW1lbnROb2RlLCBkZWZpbmluZ05vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGRlZmluaW5nVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBkZWZpbmVkVmFyaWFibGVOb2RlID0gZGVmaW5lZFZhcmlhYmxlTm9kZVF1ZXJ5KGFyZ3VtZW50Tm9kZSk7XG5cbiAgaWYgKGRlZmluZWRWYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBkZWZpbmVkID0gZGVmaW5lZEZyb21EZWZpbmluZ05vZGUoZGVmaW5pbmdOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBkZWZpbmVkVmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZURlZmluZWQgPSBpc1ZhcmlhYmxlRGVmaW5lZCh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgaWYgKGRlZmluZWQpIHtcbiAgICAgIGlmICh2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgICAgZGVmaW5pbmdWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFkZWZpbmVkKSB7XG4gICAgICBpZiAoIXZhcmlhYmxlRGVmaW5lZCkge1xuICAgICAgICBkZWZpbmluZ1ZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVmaW5pbmdWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gaXNWYXJpYWJsZURlZmluZWQodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZURlZmluZWQgPSBmYWxzZTtcblxuICByZXR1cm4gdmFyaWFibGVEZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVkRnJvbURlZmluaW5nTm9kZShkZWZpbmluZ05vZGUpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IGRlZmluaW5nTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIHNlY29uZENoaWxkTm9kZSA9IHNlY29uZChjaGlsZE5vZGVzKSxcbiAgICAgICAgdGVybWluYWxOb2RlID0gc2Vjb25kQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgIGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBkZWZpbmVkID0gKGNvbnRlbnQgPT09IERFRklORUQpO1xuXG4gIHJldHVybiBkZWZpbmVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeURlZmluaW5nIiwiZGVmaW5lZFZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiYXJndW1lbnROb2RlIiwiZGVmaW5pbmdOb2RlIiwiY29udGV4dCIsImRlZmluaW5nVmVyaWZpZWQiLCJkZWZpbmVkVmFyaWFibGVOb2RlIiwiZGVmaW5lZCIsImRlZmluZWRGcm9tRGVmaW5pbmdOb2RlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVEZWZpbmVkIiwiaXNWYXJpYWJsZURlZmluZWQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInNlY29uZENoaWxkTm9kZSIsInNlY29uZCIsInRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiREVGSU5FRCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUF3QkE7OztxQkFORDt5QkFDQztxQkFDRTtBQUUxQixJQUFNQywyQkFBMkJDLElBQUFBLGdCQUFTLEVBQUM7QUFFNUIsU0FBU0YsZUFBZUcsWUFBWSxFQUFFQyxZQUFZLEVBQUVDLE9BQU87SUFDeEUsSUFBSUMsbUJBQW1CO0lBRXZCLElBQU1DLHNCQUFzQk4seUJBQXlCRTtJQUVyRCxJQUFJSSx3QkFBd0IsTUFBTTtRQUNoQyxJQUFNQyxVQUFVQyx3QkFBd0JMLGVBQ2xDTSxlQUFlSCxxQkFDZkksa0JBQWtCQyxrQkFBa0JGLGNBQWNMO1FBRXhELElBQUlHLFNBQVM7WUFDWCxJQUFJRyxpQkFBaUI7Z0JBQ25CTCxtQkFBbUI7WUFDckI7UUFDRjtRQUVBLElBQUksQ0FBQ0UsU0FBUztZQUNaLElBQUksQ0FBQ0csaUJBQWlCO2dCQUNwQkwsbUJBQW1CO1lBQ3JCO1FBQ0Y7SUFDRjtJQUVBLE9BQU9BO0FBQ1Q7QUFFQSxTQUFTTSxrQkFBa0JGLFlBQVksRUFBRUwsT0FBTztJQUM5QyxJQUFJTSxrQkFBa0I7SUFFdEIsT0FBT0E7QUFDVDtBQUVBLFNBQVNGLHdCQUF3QkwsWUFBWTtJQUMzQyxJQUFNUyxhQUFhVCxhQUFhVSxhQUFhLElBQ3ZDQyxrQkFBa0JDLElBQUFBLGFBQU0sRUFBQ0gsYUFDekJJLGVBQWVGLGlCQUNmRyxVQUFVRCxhQUFhRSxVQUFVLElBQ2pDWCxVQUFXVSxZQUFZRSxrQkFBTztJQUVwQyxPQUFPWjtBQUNUIn0=