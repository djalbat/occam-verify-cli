"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyTypeAssertion;
    }
});
var _variable = /*#__PURE__*/ _interopRequireDefault(require("../../variable"));
var _array = require("../../utilities/array");
var _query = require("../../utilities/query");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var termNodeQuery = (0, _query.nodeQuery)("/typeAssertion/term"), typeNodeQuery = (0, _query.nodeQuery)("/typeAssertion/type");
function verifyTypeAssertion(typeAssertionNode) {
    var context = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this;
    var typeAssertionVerified = false;
    context.begin(typeAssertionNode);
    var typeNode = typeNodeQuery(typeAssertionNode), typeName = (0, _query.typeNameFromTypeNode)(typeNode), typePresent = context.isTypePresentByTypeName(typeName);
    if (!typePresent) {
        context.error("The ".concat(typeName, " type is not present."));
    } else {
        var derived = context.isDerived();
        if (derived) {
            debugger;
        } else {
            var types = [], names = [], values = [], termNode = termNodeQuery(typeAssertionNode), termVerified = context.verifyTermAsVariable(termNode, types, names, values);
            if (termVerified) {
                var firstName = (0, _array.first)(names), firstValue = (0, _array.first)(values), variableName = firstName, value = firstValue;
                if (value !== undefined) {
                    context.error("The value of the ".concat(variableName, " variable is not undefined."));
                } else {
                    var type = context.findTypeByTypeName(typeName), firstType = (0, _array.first)(types), variableType = firstType, typeSubTypeOfVariableType = type.isSubTypeOf(variableType);
                    if (!typeSubTypeOfVariableType) {
                        context.error("The asserted type of the ".concat(variableName, " variable is not a sub-type of its declared type."));
                    } else {
                        var name = variableName, variable = _variable.default.fromTypeAndName(type, name);
                        context.addVariable(variable);
                        typeAssertionVerified = true;
                    }
                }
            }
        }
    }
    typeAssertionVerified ? context.complete(typeAssertionNode) : context.halt(typeAssertionNode);
    return typeAssertionVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvYXNzZXJ0aW9uL3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vLi4vdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIHR5cGVOYW1lRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVBc3NlcnRpb24vdGVybVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZUFzc2VydGlvbi90eXBlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlUeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0ID0gdGhpcykge1xuICBsZXQgdHlwZUFzc2VydGlvblZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29udGV4dC5iZWdpbih0eXBlQXNzZXJ0aW9uTm9kZSk7XG5cbiAgY29uc3QgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KHR5cGVBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgIHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgIGNvbnRleHQuZXJyb3IoYFRoZSAke3R5cGVOYW1lfSB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGRlcml2ZWQgPSBjb250ZXh0LmlzRGVyaXZlZCgpO1xuXG4gICAgaWYgKGRlcml2ZWQpIHtcbiAgICAgIGRlYnVnZ2VyXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVzID0gW10sXG4gICAgICAgICAgICBuYW1lcyA9IFtdLFxuICAgICAgICAgICAgdmFsdWVzID0gW10sXG4gICAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgdGVybVZlcmlmaWVkID0gY29udGV4dC52ZXJpZnlUZXJtQXNWYXJpYWJsZSh0ZXJtTm9kZSwgdHlwZXMsIG5hbWVzLCB2YWx1ZXMpO1xuXG4gICAgICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0TmFtZSA9IGZpcnN0KG5hbWVzKSxcbiAgICAgICAgICAgICAgZmlyc3RWYWx1ZSA9IGZpcnN0KHZhbHVlcyksXG4gICAgICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IGZpcnN0TmFtZSwgLy8vXG4gICAgICAgICAgICAgIHZhbHVlID0gZmlyc3RWYWx1ZTtcblxuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNvbnRleHQuZXJyb3IoYFRoZSB2YWx1ZSBvZiB0aGUgJHt2YXJpYWJsZU5hbWV9IHZhcmlhYmxlIGlzIG5vdCB1bmRlZmluZWQuYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSxcbiAgICAgICAgICAgICAgICBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgICAgICAgdmFyaWFibGVUeXBlID0gZmlyc3RUeXBlLCAvLy9cbiAgICAgICAgICAgICAgICB0eXBlU3ViVHlwZU9mVmFyaWFibGVUeXBlID0gdHlwZS5pc1N1YlR5cGVPZih2YXJpYWJsZVR5cGUpO1xuXG4gICAgICAgICAgaWYgKCF0eXBlU3ViVHlwZU9mVmFyaWFibGVUeXBlKSB7XG4gICAgICAgICAgICBjb250ZXh0LmVycm9yKGBUaGUgYXNzZXJ0ZWQgdHlwZSBvZiB0aGUgJHt2YXJpYWJsZU5hbWV9IHZhcmlhYmxlIGlzIG5vdCBhIHN1Yi10eXBlIG9mIGl0cyBkZWNsYXJlZCB0eXBlLmApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21UeXBlQW5kTmFtZSh0eXBlLCBuYW1lKTtcblxuICAgICAgICAgICAgY29udGV4dC5hZGRWYXJpYWJsZSh2YXJpYWJsZSk7XG5cbiAgICAgICAgICAgIHR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdHlwZUFzc2VydGlvblZlcmlmaWVkID9cbiAgICBjb250ZXh0LmNvbXBsZXRlKHR5cGVBc3NlcnRpb25Ob2RlKSA6XG4gICAgICBjb250ZXh0LmhhbHQodHlwZUFzc2VydGlvbk5vZGUpO1xuXG4gIHJldHVybiB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VHlwZUFzc2VydGlvbiIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwidHlwZUFzc2VydGlvbk5vZGUiLCJjb250ZXh0IiwidHlwZUFzc2VydGlvblZlcmlmaWVkIiwiYmVnaW4iLCJ0eXBlTm9kZSIsInR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwiZXJyb3IiLCJkZXJpdmVkIiwiaXNEZXJpdmVkIiwidHlwZXMiLCJuYW1lcyIsInZhbHVlcyIsInRlcm1Ob2RlIiwidGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybUFzVmFyaWFibGUiLCJmaXJzdE5hbWUiLCJmaXJzdCIsImZpcnN0VmFsdWUiLCJ2YXJpYWJsZU5hbWUiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsInR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJmaXJzdFR5cGUiLCJ2YXJpYWJsZVR5cGUiLCJ0eXBlU3ViVHlwZU9mVmFyaWFibGVUeXBlIiwiaXNTdWJUeXBlT2YiLCJuYW1lIiwidmFyaWFibGUiLCJWYXJpYWJsZSIsImZyb21UeXBlQW5kTmFtZSIsImFkZFZhcmlhYmxlIiwiY29tcGxldGUiLCJoYWx0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQXdCQTs7OzZEQVJIO3FCQUVDO3FCQUMwQjs7Ozs7O0FBRWhELElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyx3QkFDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUVqQixTQUFTRixvQkFBb0JJLGlCQUFpQixFQUFrQjtRQUFoQkMsVUFBQUEsaUVBQVUsSUFBSTtJQUMzRSxJQUFJQyx3QkFBd0IsS0FBSztJQUVqQ0QsUUFBUUUsS0FBSyxDQUFDSDtJQUVkLElBQU1JLFdBQVdMLGNBQWNDLG9CQUN6QkssV0FBV0MsSUFBQUEsMkJBQW9CLEVBQUNGLFdBQ2hDRyxjQUFjTixRQUFRTyx1QkFBdUIsQ0FBQ0g7SUFFcEQsSUFBSSxDQUFDRSxhQUFhO1FBQ2hCTixRQUFRUSxLQUFLLENBQUMsQUFBQyxPQUFlLE9BQVRKLFVBQVM7SUFDaEMsT0FBTztRQUNMLElBQU1LLFVBQVVULFFBQVFVLFNBQVM7UUFFakMsSUFBSUQsU0FBUztZQUNYLFFBQVE7UUFDVixPQUFPO1lBQ0wsSUFBTUUsUUFBUSxFQUFFLEVBQ1ZDLFFBQVEsRUFBRSxFQUNWQyxTQUFTLEVBQUUsRUFDWEMsV0FBV2xCLGNBQWNHLG9CQUN6QmdCLGVBQWVmLFFBQVFnQixvQkFBb0IsQ0FBQ0YsVUFBVUgsT0FBT0MsT0FBT0M7WUFFMUUsSUFBSUUsY0FBYztnQkFDaEIsSUFBTUUsWUFBWUMsSUFBQUEsWUFBSyxFQUFDTixRQUNsQk8sYUFBYUQsSUFBQUEsWUFBSyxFQUFDTCxTQUNuQk8sZUFBZUgsV0FDZkksUUFBUUY7Z0JBRWQsSUFBSUUsVUFBVUMsV0FBVztvQkFDdkJ0QixRQUFRUSxLQUFLLENBQUMsQUFBQyxvQkFBZ0MsT0FBYlksY0FBYTtnQkFDakQsT0FBTztvQkFDTCxJQUFNRyxPQUFPdkIsUUFBUXdCLGtCQUFrQixDQUFDcEIsV0FDbENxQixZQUFZUCxJQUFBQSxZQUFLLEVBQUNQLFFBQ2xCZSxlQUFlRCxXQUNmRSw0QkFBNEJKLEtBQUtLLFdBQVcsQ0FBQ0Y7b0JBRW5ELElBQUksQ0FBQ0MsMkJBQTJCO3dCQUM5QjNCLFFBQVFRLEtBQUssQ0FBQyxBQUFDLDRCQUF3QyxPQUFiWSxjQUFhO29CQUN6RCxPQUFPO3dCQUNMLElBQU1TLE9BQU9ULGNBQ1BVLFdBQVdDLGlCQUFRLENBQUNDLGVBQWUsQ0FBQ1QsTUFBTU07d0JBRWhEN0IsUUFBUWlDLFdBQVcsQ0FBQ0g7d0JBRXBCN0Isd0JBQXdCLElBQUk7b0JBQzlCLENBQUM7Z0JBQ0gsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVEQSx3QkFDRUQsUUFBUWtDLFFBQVEsQ0FBQ25DLHFCQUNmQyxRQUFRbUMsSUFBSSxDQUFDcEMsa0JBQWtCO0lBRW5DLE9BQU9FO0FBQ1QifQ==