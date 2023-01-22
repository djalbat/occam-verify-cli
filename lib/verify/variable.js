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
    fileContext.begin(variableNode);
    var variableString = fileContext.nodeAsString(variableNode);
    fileContext.debug("Verifying the '".concat(variableString, "' variable..."));
    var variableName = (0, _query.variableNameFromVariableNode)(variableNode), variablePresent = fileContext.isVariablePresentByVariableName(variableName);
    if (variablePresent) {
        fileContext.error("The variable '".concat(variableName, "' is already present."));
    } else {
        var variable;
        var typeName = (0, _query.typeNameFromTypeNode)(typeNode);
        if (typeName === null) {
            var type = _type.objectType, name = variableName; ///
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
        fileContext.info("Verified the '".concat(variableString, "' variable."));
    }
    variableVerified ? fileContext.complete(variableNode) : fileContext.halt(variableNode);
    return variableVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuLi90eXBlXCI7XG5pbXBvcnQgeyB0eXBlTmFtZUZyb21UeXBlTm9kZSwgdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VmFyaWFibGUodmFyaWFibGVOb2RlLCB0eXBlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBmaWxlQ29udGV4dC5iZWdpbih2YXJpYWJsZU5vZGUpO1xuXG4gIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKHZhcmlhYmxlTm9kZSk7XG5cbiAgZmlsZUNvbnRleHQuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gIGNvbnN0IHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gZmlsZUNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gIGlmICh2YXJpYWJsZVByZXNlbnQpIHtcbiAgICBmaWxlQ29udGV4dC5lcnJvcihgVGhlIHZhcmlhYmxlICcke3ZhcmlhYmxlTmFtZX0nIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgdmFyaWFibGU7XG5cbiAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKTtcbiAgICBcbiAgICBpZiAodHlwZU5hbWUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBvYmplY3RUeXBlLFxuICAgICAgICAgICAgbmFtZSA9IHZhcmlhYmxlTmFtZTsgIC8vL1xuXG4gICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21UeXBlQW5kTmFtZSh0eXBlLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIGZpbGVDb250ZXh0LmVycm9yKGBUaGUgJyR7dmFyaWFibGVOYW1lfScgdmFyaWFibGUncyAnJHt0eXBlTmFtZX0nIHR5cGUgaXMgbWlzc2luZy5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB2YXJpYWJsZU5hbWU7ICAvLy9cblxuICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21UeXBlQW5kTmFtZSh0eXBlLCBuYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGZpbGVDb250ZXh0LmFkZFZhcmlhYmxlKHZhcmlhYmxlKTtcblxuICAgICAgdmFyaWFibGVWZXJpZmllZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKHZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICBmaWxlQ29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS5gKTtcbiAgfVxuXG4gIHZhcmlhYmxlVmVyaWZpZWQgP1xuICAgIGZpbGVDb250ZXh0LmNvbXBsZXRlKHZhcmlhYmxlTm9kZSkgOlxuICAgICAgZmlsZUNvbnRleHQuaGFsdCh2YXJpYWJsZU5vZGUpO1xuXG4gIHJldHVybiB2YXJpYWJsZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVZhcmlhYmxlIiwidmFyaWFibGVOb2RlIiwidHlwZU5vZGUiLCJmaWxlQ29udGV4dCIsInZhcmlhYmxlVmVyaWZpZWQiLCJiZWdpbiIsInZhcmlhYmxlU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiZGVidWciLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIiwidmFyaWFibGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsImVycm9yIiwidmFyaWFibGUiLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwidHlwZSIsIm9iamVjdFR5cGUiLCJuYW1lIiwiVmFyaWFibGUiLCJmcm9tVHlwZUFuZE5hbWUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJhZGRWYXJpYWJsZSIsImluZm8iLCJjb21wbGV0ZSIsImhhbHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBd0JBOzs7NkRBTEg7b0JBRU07cUJBQ3dDOzs7Ozs7QUFFcEQsU0FBU0EsZUFBZUMsWUFBWSxFQUFFQyxRQUFRLEVBQUVDLFdBQVcsRUFBRTtJQUMxRSxJQUFJQyxtQkFBbUIsS0FBSztJQUU1QkQsWUFBWUUsS0FBSyxDQUFDSjtJQUVsQixJQUFNSyxpQkFBaUJILFlBQVlJLFlBQVksQ0FBQ047SUFFaERFLFlBQVlLLEtBQUssQ0FBQyxBQUFDLGtCQUFnQyxPQUFmRixnQkFBZTtJQUVuRCxJQUFNRyxlQUFlQyxJQUFBQSxtQ0FBNEIsRUFBQ1QsZUFDNUNVLGtCQUFrQlIsWUFBWVMsK0JBQStCLENBQUNIO0lBRXBFLElBQUlFLGlCQUFpQjtRQUNuQlIsWUFBWVUsS0FBSyxDQUFDLEFBQUMsaUJBQTZCLE9BQWJKLGNBQWE7SUFDbEQsT0FBTztRQUNMLElBQUlLO1FBRUosSUFBTUMsV0FBV0MsSUFBQUEsMkJBQW9CLEVBQUNkO1FBRXRDLElBQUlhLGFBQWEsSUFBSSxFQUFFO1lBQ3JCLElBQU1FLE9BQU9DLGdCQUFVLEVBQ2pCQyxPQUFPVixjQUFlLEdBQUc7WUFFL0JLLFdBQVdNLGlCQUFRLENBQUNDLGVBQWUsQ0FBQ0osTUFBTUU7UUFDNUMsT0FBTztZQUNMLElBQU1GLFFBQU9kLFlBQVltQixrQkFBa0IsQ0FBQ1A7WUFFNUMsSUFBSUUsVUFBUyxJQUFJLEVBQUU7Z0JBQ2pCZCxZQUFZVSxLQUFLLENBQUMsQUFBQyxRQUFvQ0UsT0FBN0JOLGNBQWEsa0JBQXlCLE9BQVRNLFVBQVM7WUFDbEUsT0FBTztnQkFDTCxJQUFNSSxRQUFPVixjQUFlLEdBQUc7Z0JBRS9CSyxXQUFXTSxpQkFBUSxDQUFDQyxlQUFlLENBQUNKLE9BQU1FO1lBQzVDLENBQUM7UUFDSCxDQUFDO1FBRUQsSUFBSUwsYUFBYSxJQUFJLEVBQUU7WUFDckJYLFlBQVlvQixXQUFXLENBQUNUO1lBRXhCVixtQkFBbUIsSUFBSTtRQUN6QixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQUlBLGtCQUFrQjtRQUNwQkQsWUFBWXFCLElBQUksQ0FBQyxBQUFDLGlCQUErQixPQUFmbEIsZ0JBQWU7SUFDbkQsQ0FBQztJQUVERixtQkFDRUQsWUFBWXNCLFFBQVEsQ0FBQ3hCLGdCQUNuQkUsWUFBWXVCLElBQUksQ0FBQ3pCLGFBQWE7SUFFbEMsT0FBT0c7QUFDVCJ9