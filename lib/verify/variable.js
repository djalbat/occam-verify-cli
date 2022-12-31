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
    var variableString = (0, _string.nodeAsString)(variableNode);
    fileContext.debug("Verifying the '".concat(variableString, "' variable..."));
    var variableName = (0, _query.variableNameFromVariableNode)(variableNode), variablePresent = fileContext.isVariablePresentByVariableName(variableName);
    if (variablePresent) {
        fileContext.error("The variable '".concat(variableName, "' is already present."));
    } else {
        var variable;
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
        fileContext.info("Verified the '".concat(variableString, "' variable."));
    }
    variableVerified ? fileContext.complete(variableNode) : fileContext.halt(variableNode);
    return variableVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IHR5cGVOYW1lRnJvbVR5cGVOb2RlLCB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlWYXJpYWJsZSh2YXJpYWJsZU5vZGUsIHR5cGVOb2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgdmFyaWFibGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGZpbGVDb250ZXh0LmJlZ2luKHZhcmlhYmxlTm9kZSk7XG5cbiAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSBub2RlQXNTdHJpbmcodmFyaWFibGVOb2RlKTtcblxuICBmaWxlQ29udGV4dC5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLi4uYCk7XG5cbiAgY29uc3QgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSBmaWxlQ29udGV4dC5pc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSk7XG5cbiAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgIGZpbGVDb250ZXh0LmVycm9yKGBUaGUgdmFyaWFibGUgJyR7dmFyaWFibGVOYW1lfScgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICB9IGVsc2Uge1xuICAgIGxldCB2YXJpYWJsZTtcblxuICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpO1xuICAgIFxuICAgIGlmICh0eXBlTmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZSA9IG51bGwsXG4gICAgICAgICAgICBuYW1lID0gdmFyaWFibGVOYW1lOyAgLy8vXG5cbiAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVR5cGVBbmROYW1lKHR5cGUsIG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlID0gZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgZmlsZUNvbnRleHQuZXJyb3IoYFRoZSAnJHt2YXJpYWJsZU5hbWV9JyB2YXJpYWJsZSdzICcke3R5cGVOYW1lfScgdHlwZSBpcyBtaXNzaW5nLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHZhcmlhYmxlTmFtZTsgIC8vL1xuXG4gICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVR5cGVBbmROYW1lKHR5cGUsIG5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgZmlsZUNvbnRleHQuYWRkVmFyaWFibGUodmFyaWFibGUpO1xuXG4gICAgICB2YXJpYWJsZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAodmFyaWFibGVWZXJpZmllZCkge1xuICAgIGZpbGVDb250ZXh0LmluZm8oYFZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmApO1xuICB9XG5cbiAgdmFyaWFibGVWZXJpZmllZCA/XG4gICAgZmlsZUNvbnRleHQuY29tcGxldGUodmFyaWFibGVOb2RlKSA6XG4gICAgICBmaWxlQ29udGV4dC5oYWx0KHZhcmlhYmxlTm9kZSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VmFyaWFibGUiLCJ2YXJpYWJsZU5vZGUiLCJ0eXBlTm9kZSIsImZpbGVDb250ZXh0IiwidmFyaWFibGVWZXJpZmllZCIsImJlZ2luIiwidmFyaWFibGVTdHJpbmciLCJub2RlQXNTdHJpbmciLCJkZWJ1ZyIsInZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwiZXJyb3IiLCJ2YXJpYWJsZSIsInR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJ0eXBlIiwibmFtZSIsIlZhcmlhYmxlIiwiZnJvbVR5cGVBbmROYW1lIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwiYWRkVmFyaWFibGUiLCJpbmZvIiwiY29tcGxldGUiLCJoYWx0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQXdCQTs7OzZEQUxIO3NCQUVRO3FCQUNzQzs7Ozs7O0FBRXBELFNBQVNBLGVBQWVDLFlBQVksRUFBRUMsUUFBUSxFQUFFQyxXQUFXLEVBQUU7SUFDMUUsSUFBSUMsbUJBQW1CLEtBQUs7SUFFNUJELFlBQVlFLEtBQUssQ0FBQ0o7SUFFbEIsSUFBTUssaUJBQWlCQyxJQUFBQSxvQkFBWSxFQUFDTjtJQUVwQ0UsWUFBWUssS0FBSyxDQUFDLEFBQUMsa0JBQWdDLE9BQWZGLGdCQUFlO0lBRW5ELElBQU1HLGVBQWVDLElBQUFBLG1DQUE0QixFQUFDVCxlQUM1Q1Usa0JBQWtCUixZQUFZUywrQkFBK0IsQ0FBQ0g7SUFFcEUsSUFBSUUsaUJBQWlCO1FBQ25CUixZQUFZVSxLQUFLLENBQUMsQUFBQyxpQkFBNkIsT0FBYkosY0FBYTtJQUNsRCxPQUFPO1FBQ0wsSUFBSUs7UUFFSixJQUFNQyxXQUFXQyxJQUFBQSwyQkFBb0IsRUFBQ2Q7UUFFdEMsSUFBSWEsYUFBYSxJQUFJLEVBQUU7WUFDckIsSUFBTUUsT0FBTyxJQUFJLEVBQ1hDLE9BQU9ULGNBQWUsR0FBRztZQUUvQkssV0FBV0ssaUJBQVEsQ0FBQ0MsZUFBZSxDQUFDSCxNQUFNQztRQUM1QyxPQUFPO1lBQ0wsSUFBTUQsUUFBT2QsWUFBWWtCLGtCQUFrQixDQUFDTjtZQUU1QyxJQUFJRSxVQUFTLElBQUksRUFBRTtnQkFDakJkLFlBQVlVLEtBQUssQ0FBQyxBQUFDLFFBQW9DRSxPQUE3Qk4sY0FBYSxrQkFBeUIsT0FBVE0sVUFBUztZQUNsRSxPQUFPO2dCQUNMLElBQU1HLFFBQU9ULGNBQWUsR0FBRztnQkFFL0JLLFdBQVdLLGlCQUFRLENBQUNDLGVBQWUsQ0FBQ0gsT0FBTUM7WUFDNUMsQ0FBQztRQUNILENBQUM7UUFFRCxJQUFJSixhQUFhLElBQUksRUFBRTtZQUNyQlgsWUFBWW1CLFdBQVcsQ0FBQ1I7WUFFeEJWLG1CQUFtQixJQUFJO1FBQ3pCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBSUEsa0JBQWtCO1FBQ3BCRCxZQUFZb0IsSUFBSSxDQUFDLEFBQUMsaUJBQStCLE9BQWZqQixnQkFBZTtJQUNuRCxDQUFDO0lBRURGLG1CQUNFRCxZQUFZcUIsUUFBUSxDQUFDdkIsZ0JBQ25CRSxZQUFZc0IsSUFBSSxDQUFDeEIsYUFBYTtJQUVsQyxPQUFPRztBQUNUIn0=