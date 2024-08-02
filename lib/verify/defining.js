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
        var defined = definedFromDefiningNode(definingNode), variableNode = definedVariableNode, variableDefined = context.isVariableDefined(variableNode);
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
function definedFromDefiningNode(definingNode) {
    var childNodes = definingNode.getChildNodes(), secondChildNode = (0, _array.second)(childNodes), terminalNode = secondChildNode, content = terminalNode.getContent(), defined = content === _constants.DEFINED;
    return defined;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZGVmaW5pbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IERFRklORUQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGRlZmluZWRWYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcmd1bWVudC90ZXJtL3ZhcmlhYmxlIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5RGVmaW5pbmcoYXJndW1lbnROb2RlLCBkZWZpbmluZ05vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGRlZmluaW5nVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBkZWZpbmVkVmFyaWFibGVOb2RlID0gZGVmaW5lZFZhcmlhYmxlTm9kZVF1ZXJ5KGFyZ3VtZW50Tm9kZSk7XG5cbiAgaWYgKGRlZmluZWRWYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBkZWZpbmVkID0gZGVmaW5lZEZyb21EZWZpbmluZ05vZGUoZGVmaW5pbmdOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBkZWZpbmVkVmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZURlZmluZWQgPSBjb250ZXh0LmlzVmFyaWFibGVEZWZpbmVkKHZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAoZGVmaW5lZCkge1xuICAgICAgaWYgKHZhcmlhYmxlRGVmaW5lZCkge1xuICAgICAgICBkZWZpbmluZ1ZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWRlZmluZWQpIHtcbiAgICAgIGlmICghdmFyaWFibGVEZWZpbmVkKSB7XG4gICAgICAgIGRlZmluaW5nVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZWZpbmluZ1ZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVkRnJvbURlZmluaW5nTm9kZShkZWZpbmluZ05vZGUpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IGRlZmluaW5nTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIHNlY29uZENoaWxkTm9kZSA9IHNlY29uZChjaGlsZE5vZGVzKSxcbiAgICAgICAgdGVybWluYWxOb2RlID0gc2Vjb25kQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgIGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBkZWZpbmVkID0gKGNvbnRlbnQgPT09IERFRklORUQpO1xuXG4gIHJldHVybiBkZWZpbmVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeURlZmluaW5nIiwiZGVmaW5lZFZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiYXJndW1lbnROb2RlIiwiZGVmaW5pbmdOb2RlIiwiY29udGV4dCIsImRlZmluaW5nVmVyaWZpZWQiLCJkZWZpbmVkVmFyaWFibGVOb2RlIiwiZGVmaW5lZCIsImRlZmluZWRGcm9tRGVmaW5pbmdOb2RlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVEZWZpbmVkIiwiaXNWYXJpYWJsZURlZmluZWQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInNlY29uZENoaWxkTm9kZSIsInNlY29uZCIsInRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiREVGSU5FRCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUF3QkE7OztxQkFORDt5QkFDQztxQkFDRTtBQUUxQixJQUFNQywyQkFBMkJDLElBQUFBLGdCQUFTLEVBQUM7QUFFNUIsU0FBU0YsZUFBZUcsWUFBWSxFQUFFQyxZQUFZLEVBQUVDLE9BQU87SUFDeEUsSUFBSUMsbUJBQW1CO0lBRXZCLElBQU1DLHNCQUFzQk4seUJBQXlCRTtJQUVyRCxJQUFJSSx3QkFBd0IsTUFBTTtRQUNoQyxJQUFNQyxVQUFVQyx3QkFBd0JMLGVBQ2xDTSxlQUFlSCxxQkFDZkksa0JBQWtCTixRQUFRTyxpQkFBaUIsQ0FBQ0Y7UUFFbEQsSUFBSUYsU0FBUztZQUNYLElBQUlHLGlCQUFpQjtnQkFDbkJMLG1CQUFtQjtZQUNyQjtRQUNGO1FBRUEsSUFBSSxDQUFDRSxTQUFTO1lBQ1osSUFBSSxDQUFDRyxpQkFBaUI7Z0JBQ3BCTCxtQkFBbUI7WUFDckI7UUFDRjtJQUNGO0lBRUEsT0FBT0E7QUFDVDtBQUVBLFNBQVNHLHdCQUF3QkwsWUFBWTtJQUMzQyxJQUFNUyxhQUFhVCxhQUFhVSxhQUFhLElBQ3ZDQyxrQkFBa0JDLElBQUFBLGFBQU0sRUFBQ0gsYUFDekJJLGVBQWVGLGlCQUNmRyxVQUFVRCxhQUFhRSxVQUFVLElBQ2pDWCxVQUFXVSxZQUFZRSxrQkFBTztJQUVwQyxPQUFPWjtBQUNUIn0=