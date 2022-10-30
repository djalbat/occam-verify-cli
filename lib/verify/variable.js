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
function verifyVariable(variableNode, typeNode) {
    var context = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this;
    var variableVerified = false;
    context.begin(variableNode);
    var variable = null;
    var variableName = (0, _query.variableNameFromVariableNode)(variableNode), variablePresent = context.isVariablePresentByVariableName(variableName);
    if (variablePresent) {
        context.error("The variable '".concat(variableName, "' is already present."));
    } else {
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
            var variableString = (0, _string.nodeAsString)(variableName);
            context.info("Verified the '".concat(variableString, "' variable."));
            context.addVariable(variable);
            variableVerified = true;
        }
    }
    variableVerified ? context.complete(variableNode) : context.halt(variableNode);
    return variableVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IHR5cGVOYW1lRnJvbVR5cGVOb2RlLCB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlWYXJpYWJsZSh2YXJpYWJsZU5vZGUsIHR5cGVOb2RlLCBjb250ZXh0ID0gdGhpcykge1xuICBsZXQgdmFyaWFibGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnRleHQuYmVnaW4odmFyaWFibGVOb2RlKTtcblxuICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSk7XG5cbiAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgIGNvbnRleHQuZXJyb3IoYFRoZSB2YXJpYWJsZSAnJHt2YXJpYWJsZU5hbWV9JyBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSk7XG4gICAgXG4gICAgaWYgKHR5cGVOYW1lID09PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlID0gbnVsbCxcbiAgICAgICAgICAgIG5hbWUgPSB2YXJpYWJsZU5hbWU7ICAvLy9cblxuICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVHlwZUFuZE5hbWUodHlwZSwgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIGNvbnRleHQuZXJyb3IoYFRoZSAnJHt2YXJpYWJsZU5hbWV9JyB2YXJpYWJsZSdzICcke3R5cGVOYW1lfScgdHlwZSBpcyBtaXNzaW5nLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHZhcmlhYmxlTmFtZTsgIC8vL1xuXG4gICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVR5cGVBbmROYW1lKHR5cGUsIG5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSBub2RlQXNTdHJpbmcodmFyaWFibGVOYW1lKTtcblxuICAgICAgY29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS5gKTtcblxuICAgICAgY29udGV4dC5hZGRWYXJpYWJsZSh2YXJpYWJsZSk7XG5cbiAgICAgIHZhcmlhYmxlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHZhcmlhYmxlVmVyaWZpZWQgP1xuICAgIGNvbnRleHQuY29tcGxldGUodmFyaWFibGVOb2RlKSA6XG4gICAgICBjb250ZXh0LmhhbHQodmFyaWFibGVOb2RlKTtcblxuICByZXR1cm4gdmFyaWFibGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlWYXJpYWJsZSIsInZhcmlhYmxlTm9kZSIsInR5cGVOb2RlIiwiY29udGV4dCIsInZhcmlhYmxlVmVyaWZpZWQiLCJiZWdpbiIsInZhcmlhYmxlIiwidmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUiLCJlcnJvciIsInR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJ0eXBlIiwibmFtZSIsIlZhcmlhYmxlIiwiZnJvbVR5cGVBbmROYW1lIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidmFyaWFibGVTdHJpbmciLCJub2RlQXNTdHJpbmciLCJpbmZvIiwiYWRkVmFyaWFibGUiLCJjb21wbGV0ZSIsImhhbHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBd0JBOzs7NkRBTEg7c0JBRVE7cUJBQ3NDOzs7Ozs7QUFFcEQsU0FBU0EsZUFBZUMsWUFBWSxFQUFFQyxRQUFRLEVBQWtCO1FBQWhCQyxVQUFBQSxpRUFBVSxJQUFJO0lBQzNFLElBQUlDLG1CQUFtQixLQUFLO0lBRTVCRCxRQUFRRSxLQUFLLENBQUNKO0lBRWQsSUFBSUssV0FBVyxJQUFJO0lBRW5CLElBQU1DLGVBQWVDLElBQUFBLG1DQUE0QixFQUFDUCxlQUM1Q1Esa0JBQWtCTixRQUFRTywrQkFBK0IsQ0FBQ0g7SUFFaEUsSUFBSUUsaUJBQWlCO1FBQ25CTixRQUFRUSxLQUFLLENBQUMsQUFBQyxpQkFBNkIsT0FBYkosY0FBYTtJQUM5QyxPQUFPO1FBQ0wsSUFBTUssV0FBV0MsSUFBQUEsMkJBQW9CLEVBQUNYO1FBRXRDLElBQUlVLGFBQWEsSUFBSSxFQUFFO1lBQ3JCLElBQU1FLE9BQU8sSUFBSSxFQUNYQyxPQUFPUixjQUFlLEdBQUc7WUFFL0JELFdBQVdVLGlCQUFRLENBQUNDLGVBQWUsQ0FBQ0gsTUFBTUM7UUFDNUMsT0FBTztZQUNMLElBQU1ELFFBQU9YLFFBQVFlLGtCQUFrQixDQUFDTjtZQUV4QyxJQUFJRSxVQUFTLElBQUksRUFBRTtnQkFDakJYLFFBQVFRLEtBQUssQ0FBQyxBQUFDLFFBQW9DQyxPQUE3QkwsY0FBYSxrQkFBeUIsT0FBVEssVUFBUztZQUM5RCxPQUFPO2dCQUNMLElBQU1HLFFBQU9SLGNBQWUsR0FBRztnQkFFL0JELFdBQVdVLGlCQUFRLENBQUNDLGVBQWUsQ0FBQ0gsT0FBTUM7WUFDNUMsQ0FBQztRQUNILENBQUM7UUFFRCxJQUFJVCxhQUFhLElBQUksRUFBRTtZQUNyQixJQUFNYSxpQkFBaUJDLElBQUFBLG9CQUFZLEVBQUNiO1lBRXBDSixRQUFRa0IsSUFBSSxDQUFDLEFBQUMsaUJBQStCLE9BQWZGLGdCQUFlO1lBRTdDaEIsUUFBUW1CLFdBQVcsQ0FBQ2hCO1lBRXBCRixtQkFBbUIsSUFBSTtRQUN6QixDQUFDO0lBQ0gsQ0FBQztJQUVEQSxtQkFDRUQsUUFBUW9CLFFBQVEsQ0FBQ3RCLGdCQUNmRSxRQUFRcUIsSUFBSSxDQUFDdkIsYUFBYTtJQUU5QixPQUFPRztBQUNUIn0=