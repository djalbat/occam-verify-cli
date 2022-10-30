"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyTermAsVariable;
    }
});
var _query = require("../utilities/query");
var variableNodeQuery = (0, _query.nodeQuery)("/term/variable!");
function verifyTermAsVariable(termNode, types, names, values) {
    var context = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this;
    var termVerifiedAsVariable = false;
    context.begin(termNode);
    var variableNode = variableNodeQuery(termNode);
    if (variableNode !== null) {
        var variableName = (0, _query.variableNameFromVariableNode)(variableNode), variablePresent = context.isVariablePresentByVariableName(variableName);
        if (!variablePresent) {
            context.error("The ".concat(variableName, " variable is not present."));
        } else {
            var variable = context.findVariableByVariableName(variableName), type = variable.getType(), name = variableName, value = variable.getValue();
            types.push(type);
            names.push(name);
            values.push(value);
            termVerifiedAsVariable = true;
        }
    }
    termVerifiedAsVariable ? context.complete(termNode) : context.halt(termNode);
    return termVerifiedAsVariable;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybUFzVmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSwgdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZX0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VGVybUFzVmFyaWFibGUodGVybU5vZGUsIHR5cGVzLCBuYW1lcywgdmFsdWVzLCBjb250ZXh0ID0gdGhpcykge1xuICBsZXQgdGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IGZhbHNlO1xuXG4gIGNvbnRleHQuYmVnaW4odGVybU5vZGUpO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKCF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIGNvbnRleHQuZXJyb3IoYFRoZSAke3ZhcmlhYmxlTmFtZX0gdmFyaWFibGUgaXMgbm90IHByZXNlbnQuYClcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgICB0eXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgbmFtZSA9IHZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgdmFsdWUgPSB2YXJpYWJsZS5nZXRWYWx1ZSgpO1xuXG4gICAgICB0eXBlcy5wdXNoKHR5cGUpO1xuXG4gICAgICBuYW1lcy5wdXNoKG5hbWUpO1xuXG4gICAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XG5cbiAgICAgIHRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHRlcm1WZXJpZmllZEFzVmFyaWFibGUgP1xuICAgIGNvbnRleHQuY29tcGxldGUodGVybU5vZGUpIDpcbiAgICAgIGNvbnRleHQuaGFsdCh0ZXJtTm9kZSk7XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZEFzVmFyaWFibGU7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VGVybUFzVmFyaWFibGUiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInRlcm1Ob2RlIiwidHlwZXMiLCJuYW1lcyIsInZhbHVlcyIsImNvbnRleHQiLCJ0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlIiwiYmVnaW4iLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIiwidmFyaWFibGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsImVycm9yIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsInR5cGUiLCJnZXRUeXBlIiwibmFtZSIsInZhbHVlIiwiZ2V0VmFsdWUiLCJwdXNoIiwiY29tcGxldGUiLCJoYWx0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXdCQTs7O3FCQUorQjtBQUV2RCxJQUFNQyxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFckIsU0FBU0YscUJBQXFCRyxRQUFRLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQWtCO1FBQWhCQyxVQUFBQSxpRUFBVSxJQUFJO0lBQ3pGLElBQUlDLHlCQUF5QixLQUFLO0lBRWxDRCxRQUFRRSxLQUFLLENBQUNOO0lBRWQsSUFBTU8sZUFBZVQsa0JBQWtCRTtJQUV2QyxJQUFJTyxpQkFBaUIsSUFBSSxFQUFFO1FBQ3pCLElBQU1DLGVBQWVDLElBQUFBLG1DQUE0QixFQUFDRixlQUM1Q0csa0JBQWtCTixRQUFRTywrQkFBK0IsQ0FBQ0g7UUFFaEUsSUFBSSxDQUFDRSxpQkFBaUI7WUFDcEJOLFFBQVFRLEtBQUssQ0FBQyxBQUFDLE9BQW1CLE9BQWJKLGNBQWE7UUFDcEMsT0FBTztZQUNMLElBQU1LLFdBQVdULFFBQVFVLDBCQUEwQixDQUFDTixlQUM5Q08sT0FBT0YsU0FBU0csT0FBTyxJQUN2QkMsT0FBT1QsY0FDUFUsUUFBUUwsU0FBU00sUUFBUTtZQUUvQmxCLE1BQU1tQixJQUFJLENBQUNMO1lBRVhiLE1BQU1rQixJQUFJLENBQUNIO1lBRVhkLE9BQU9pQixJQUFJLENBQUNGO1lBRVpiLHlCQUF5QixJQUFJO1FBQy9CLENBQUM7SUFDSCxDQUFDO0lBRURBLHlCQUNFRCxRQUFRaUIsUUFBUSxDQUFDckIsWUFDZkksUUFBUWtCLElBQUksQ0FBQ3RCLFNBQVM7SUFFMUIsT0FBT0s7QUFDVCJ9