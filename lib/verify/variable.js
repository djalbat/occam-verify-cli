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
var _necessary = require("necessary");
var _variable = /*#__PURE__*/ _interopRequireDefault(require("../variable"));
var _query = require("../utilities/query");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var log = _necessary.loggingUtilities.log;
function verifyVariable(variableNode, typeNode, context) {
    var variableVerified = false;
    var variableName = (0, _query.variableNameFromVariableNode)(variableNode), variablePresent = context.isVariablePresentByVariableName(variableName);
    if (variablePresent) {
        log.error("The variable '".concat(variableName, "' is already present."));
    } else {
        var variable = null;
        var typeName = (0, _query.typeNameFromTypeNode)(typeNode);
        if (typeName === null) {
            var type = null, name = variableName; ///
            variable = _variable.default.fromTypeAndName(type, name);
        } else {
            var type1 = context.findTypeByTypeName(typeName);
            if (type1 === null) {
                log.error("The '".concat(variableName, "' variable's '").concat(typeName, "' type is missing."));
            } else {
                var name1 = variableName; ///
                variable = _variable.default.fromTypeAndName(type1, name1);
            }
        }
        if (variable !== null) {
            var variableString = variable.asString();
            context.addVariable(variable);
            variableVerified = true;
            log.info("Verified the '".concat(variableString, "' variable."));
        }
    }
    return variableVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxvZ2dpbmdVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgdHlwZU5hbWVGcm9tVHlwZU5vZGUsIHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHsgbG9nIH0gPSBsb2dnaW5nVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlWYXJpYWJsZSh2YXJpYWJsZU5vZGUsIHR5cGVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICBpZiAodmFyaWFibGVQcmVzZW50KSB7XG4gICAgbG9nLmVycm9yKGBUaGUgdmFyaWFibGUgJyR7dmFyaWFibGVOYW1lfScgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICB9IGVsc2Uge1xuICAgIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKTtcbiAgICBcbiAgICBpZiAodHlwZU5hbWUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBudWxsLFxuICAgICAgICAgICAgbmFtZSA9IHZhcmlhYmxlTmFtZTsgIC8vL1xuXG4gICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21UeXBlQW5kTmFtZSh0eXBlLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgbG9nLmVycm9yKGBUaGUgJyR7dmFyaWFibGVOYW1lfScgdmFyaWFibGUncyAnJHt0eXBlTmFtZX0nIHR5cGUgaXMgbWlzc2luZy5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB2YXJpYWJsZU5hbWU7ICAvLy9cblxuICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21UeXBlQW5kTmFtZSh0eXBlLCBuYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGUuYXNTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC5hZGRWYXJpYWJsZSh2YXJpYWJsZSk7XG5cbiAgICAgIHZhcmlhYmxlVmVyaWZpZWQgPSB0cnVlO1xuXG4gICAgICBsb2cuaW5mbyhgVmVyaWZpZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VmFyaWFibGUiLCJsb2ciLCJsb2dnaW5nVXRpbGl0aWVzIiwidmFyaWFibGVOb2RlIiwidHlwZU5vZGUiLCJjb250ZXh0IiwidmFyaWFibGVWZXJpZmllZCIsInZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwiZXJyb3IiLCJ2YXJpYWJsZSIsInR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJ0eXBlIiwibmFtZSIsIlZhcmlhYmxlIiwiZnJvbVR5cGVBbmROYW1lIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidmFyaWFibGVTdHJpbmciLCJhc1N0cmluZyIsImFkZFZhcmlhYmxlIiwiaW5mbyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUF3QkE7Ozt5QkFSUzs2REFFWjtxQkFFOEM7Ozs7OztBQUVuRSxJQUFNLEFBQUVDLE1BQVFDLDJCQUFnQixDQUF4QkQ7QUFFTyxTQUFTRCxlQUFlRyxZQUFZLEVBQUVDLFFBQVEsRUFBRUMsT0FBTyxFQUFFO0lBQ3RFLElBQUlDLG1CQUFtQixLQUFLO0lBRTVCLElBQU1DLGVBQWVDLElBQUFBLG1DQUE0QixFQUFDTCxlQUM1Q00sa0JBQWtCSixRQUFRSywrQkFBK0IsQ0FBQ0g7SUFFaEUsSUFBSUUsaUJBQWlCO1FBQ25CUixJQUFJVSxLQUFLLENBQUMsQUFBQyxpQkFBNkIsT0FBYkosY0FBYTtJQUMxQyxPQUFPO1FBQ0wsSUFBSUssV0FBVyxJQUFJO1FBRW5CLElBQU1DLFdBQVdDLElBQUFBLDJCQUFvQixFQUFDVjtRQUV0QyxJQUFJUyxhQUFhLElBQUksRUFBRTtZQUNyQixJQUFNRSxPQUFPLElBQUksRUFDWEMsT0FBT1QsY0FBZSxHQUFHO1lBRS9CSyxXQUFXSyxpQkFBUSxDQUFDQyxlQUFlLENBQUNILE1BQU1DO1FBQzVDLE9BQU87WUFDTCxJQUFNRCxRQUFPVixRQUFRYyxrQkFBa0IsQ0FBQ047WUFFeEMsSUFBSUUsVUFBUyxJQUFJLEVBQUU7Z0JBQ2pCZCxJQUFJVSxLQUFLLENBQUMsQUFBQyxRQUFvQ0UsT0FBN0JOLGNBQWEsa0JBQXlCLE9BQVRNLFVBQVM7WUFDMUQsT0FBTztnQkFDTCxJQUFNRyxRQUFPVCxjQUFlLEdBQUc7Z0JBRS9CSyxXQUFXSyxpQkFBUSxDQUFDQyxlQUFlLENBQUNILE9BQU1DO1lBQzVDLENBQUM7UUFDSCxDQUFDO1FBRUQsSUFBSUosYUFBYSxJQUFJLEVBQUU7WUFDckIsSUFBTVEsaUJBQWlCUixTQUFTUyxRQUFRO1lBRXhDaEIsUUFBUWlCLFdBQVcsQ0FBQ1Y7WUFFcEJOLG1CQUFtQixJQUFJO1lBRXZCTCxJQUFJc0IsSUFBSSxDQUFDLEFBQUMsaUJBQStCLE9BQWZILGdCQUFlO1FBQzNDLENBQUM7SUFDSCxDQUFDO0lBRUQsT0FBT2Q7QUFDVCJ9