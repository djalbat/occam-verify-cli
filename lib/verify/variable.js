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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuLi90eXBlXCI7XG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgdHlwZU5hbWVGcm9tVHlwZU5vZGUsIHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVZhcmlhYmxlKHZhcmlhYmxlTm9kZSwgdHlwZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgZmlsZUNvbnRleHQuYmVnaW4odmFyaWFibGVOb2RlKTtcblxuICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IG5vZGVBc1N0cmluZyh2YXJpYWJsZU5vZGUpO1xuXG4gIGZpbGVDb250ZXh0LmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gKTtcblxuICBjb25zdCB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICBpZiAodmFyaWFibGVQcmVzZW50KSB7XG4gICAgZmlsZUNvbnRleHQuZXJyb3IoYFRoZSB2YXJpYWJsZSAnJHt2YXJpYWJsZU5hbWV9JyBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gIH0gZWxzZSB7XG4gICAgbGV0IHZhcmlhYmxlO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSk7XG4gICAgXG4gICAgaWYgKHR5cGVOYW1lID09PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlID0gb2JqZWN0VHlwZSxcbiAgICAgICAgICAgIG5hbWUgPSB2YXJpYWJsZU5hbWU7ICAvLy9cblxuICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVHlwZUFuZE5hbWUodHlwZSwgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICBmaWxlQ29udGV4dC5lcnJvcihgVGhlICcke3ZhcmlhYmxlTmFtZX0nIHZhcmlhYmxlJ3MgJyR7dHlwZU5hbWV9JyB0eXBlIGlzIG1pc3NpbmcuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuYW1lID0gdmFyaWFibGVOYW1lOyAgLy8vXG5cbiAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVHlwZUFuZE5hbWUodHlwZSwgbmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBmaWxlQ29udGV4dC5hZGRWYXJpYWJsZSh2YXJpYWJsZSk7XG5cbiAgICAgIHZhcmlhYmxlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmICh2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgZmlsZUNvbnRleHQuaW5mbyhgVmVyaWZpZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gIH1cblxuICB2YXJpYWJsZVZlcmlmaWVkID9cbiAgICBmaWxlQ29udGV4dC5jb21wbGV0ZSh2YXJpYWJsZU5vZGUpIDpcbiAgICAgIGZpbGVDb250ZXh0LmhhbHQodmFyaWFibGVOb2RlKTtcblxuICByZXR1cm4gdmFyaWFibGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlWYXJpYWJsZSIsInZhcmlhYmxlTm9kZSIsInR5cGVOb2RlIiwiZmlsZUNvbnRleHQiLCJ2YXJpYWJsZVZlcmlmaWVkIiwiYmVnaW4iLCJ2YXJpYWJsZVN0cmluZyIsIm5vZGVBc1N0cmluZyIsImRlYnVnIiwidmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUiLCJlcnJvciIsInZhcmlhYmxlIiwidHlwZU5hbWUiLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSIsInR5cGUiLCJvYmplY3RUeXBlIiwibmFtZSIsIlZhcmlhYmxlIiwiZnJvbVR5cGVBbmROYW1lIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwiYWRkVmFyaWFibGUiLCJpbmZvIiwiY29tcGxldGUiLCJoYWx0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQXdCQTs7OzZEQU5IO29CQUVNO3NCQUNFO3FCQUNzQzs7Ozs7O0FBRXBELFNBQVNBLGVBQWVDLFlBQVksRUFBRUMsUUFBUSxFQUFFQyxXQUFXLEVBQUU7SUFDMUUsSUFBSUMsbUJBQW1CLEtBQUs7SUFFNUJELFlBQVlFLEtBQUssQ0FBQ0o7SUFFbEIsSUFBTUssaUJBQWlCQyxJQUFBQSxvQkFBWSxFQUFDTjtJQUVwQ0UsWUFBWUssS0FBSyxDQUFDLEFBQUMsa0JBQWdDLE9BQWZGLGdCQUFlO0lBRW5ELElBQU1HLGVBQWVDLElBQUFBLG1DQUE0QixFQUFDVCxlQUM1Q1Usa0JBQWtCUixZQUFZUywrQkFBK0IsQ0FBQ0g7SUFFcEUsSUFBSUUsaUJBQWlCO1FBQ25CUixZQUFZVSxLQUFLLENBQUMsQUFBQyxpQkFBNkIsT0FBYkosY0FBYTtJQUNsRCxPQUFPO1FBQ0wsSUFBSUs7UUFFSixJQUFNQyxXQUFXQyxJQUFBQSwyQkFBb0IsRUFBQ2Q7UUFFdEMsSUFBSWEsYUFBYSxJQUFJLEVBQUU7WUFDckIsSUFBTUUsT0FBT0MsZ0JBQVUsRUFDakJDLE9BQU9WLGNBQWUsR0FBRztZQUUvQkssV0FBV00saUJBQVEsQ0FBQ0MsZUFBZSxDQUFDSixNQUFNRTtRQUM1QyxPQUFPO1lBQ0wsSUFBTUYsUUFBT2QsWUFBWW1CLGtCQUFrQixDQUFDUDtZQUU1QyxJQUFJRSxVQUFTLElBQUksRUFBRTtnQkFDakJkLFlBQVlVLEtBQUssQ0FBQyxBQUFDLFFBQW9DRSxPQUE3Qk4sY0FBYSxrQkFBeUIsT0FBVE0sVUFBUztZQUNsRSxPQUFPO2dCQUNMLElBQU1JLFFBQU9WLGNBQWUsR0FBRztnQkFFL0JLLFdBQVdNLGlCQUFRLENBQUNDLGVBQWUsQ0FBQ0osT0FBTUU7WUFDNUMsQ0FBQztRQUNILENBQUM7UUFFRCxJQUFJTCxhQUFhLElBQUksRUFBRTtZQUNyQlgsWUFBWW9CLFdBQVcsQ0FBQ1Q7WUFFeEJWLG1CQUFtQixJQUFJO1FBQ3pCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBSUEsa0JBQWtCO1FBQ3BCRCxZQUFZcUIsSUFBSSxDQUFDLEFBQUMsaUJBQStCLE9BQWZsQixnQkFBZTtJQUNuRCxDQUFDO0lBRURGLG1CQUNFRCxZQUFZc0IsUUFBUSxDQUFDeEIsZ0JBQ25CRSxZQUFZdUIsSUFBSSxDQUFDekIsYUFBYTtJQUVsQyxPQUFPRztBQUNUIn0=