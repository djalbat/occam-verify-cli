"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TypeAssertion;
    }
});
var _variable = /*#__PURE__*/ _interopRequireDefault(require("../variable"));
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var TypeAssertion = /*#__PURE__*/ function() {
    function TypeAssertion(type, termNode, variableName) {
        _classCallCheck(this, TypeAssertion);
        this.type = type;
        this.termNode = termNode;
        this.variableName = variableName;
    }
    _createClass(TypeAssertion, [
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "getTermNode",
            value: function getTermNode() {
                return this.termNode;
            }
        },
        {
            key: "getVariableName",
            value: function getVariableName() {
                return this.variableName;
            }
        },
        {
            key: "assert",
            value: function assert(proofContext) {
                if (this.variableName !== null) {
                    var name = this.variableName, variable = _variable.default.fromTypeAndName(this.type, name);
                    proofContext.addVariable(variable);
                }
            }
        }
    ], [
        {
            key: "fromTypeAndTermNode",
            value: function fromTypeAndTermNode(type, termNode) {
                var variableName = null, typeAssertion = new TypeAssertion(type, termNode, variableName);
                return typeAssertion;
            }
        },
        {
            key: "fromTypeAndVariableName",
            value: function fromTypeAndVariableName(type, variableName) {
                var termNode = null, typeAssertion = new TypeAssertion(type, termNode, variableName);
                return typeAssertion;
            }
        }
    ]);
    return TypeAssertion;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NlcnRpb24vdHlwZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZhcmlhYmxlIGZyb20gXCIuLi92YXJpYWJsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUeXBlQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IodHlwZSwgdGVybU5vZGUsIHZhcmlhYmxlTmFtZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy50ZXJtTm9kZSA9IHRlcm1Ob2RlO1xuICAgIHRoaXMudmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0VGVybU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybU5vZGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVOYW1lO1xuICB9XG5cbiAgYXNzZXJ0KHByb29mQ29udGV4dCkge1xuICAgIGlmICh0aGlzLnZhcmlhYmxlTmFtZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbmFtZSA9IHRoaXMudmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21UeXBlQW5kTmFtZSh0aGlzLnR5cGUsIG5hbWUpO1xuXG4gICAgICBwcm9vZkNvbnRleHQuYWRkVmFyaWFibGUodmFyaWFibGUpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZUFuZFRlcm1Ob2RlKHR5cGUsIHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgdmFyaWFibGVOYW1lID0gbnVsbCxcbiAgICAgICAgICB0eXBlQXNzZXJ0aW9uID0gbmV3IFR5cGVBc3NlcnRpb24odHlwZSwgdGVybU5vZGUsIHZhcmlhYmxlTmFtZSk7XG5cbiAgICByZXR1cm4gdHlwZUFzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZUFuZFZhcmlhYmxlTmFtZSh0eXBlLCB2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IG51bGwsXG4gICAgICAgICAgdHlwZUFzc2VydGlvbiA9IG5ldyBUeXBlQXNzZXJ0aW9uKHR5cGUsIHRlcm1Ob2RlLCB2YXJpYWJsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHR5cGVBc3NlcnRpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiVHlwZUFzc2VydGlvbiIsInR5cGUiLCJ0ZXJtTm9kZSIsInZhcmlhYmxlTmFtZSIsImdldFR5cGUiLCJnZXRUZXJtTm9kZSIsImdldFZhcmlhYmxlTmFtZSIsImFzc2VydCIsInByb29mQ29udGV4dCIsIm5hbWUiLCJ2YXJpYWJsZSIsIlZhcmlhYmxlIiwiZnJvbVR5cGVBbmROYW1lIiwiYWRkVmFyaWFibGUiLCJmcm9tVHlwZUFuZFRlcm1Ob2RlIiwidHlwZUFzc2VydGlvbiIsImZyb21UeXBlQW5kVmFyaWFibGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozs2REFGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVOLElBQUEsQUFBTUEsOEJBQU47YUFBTUEsY0FDUEMsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLFlBQVk7OEJBRHJCSDtRQUVqQixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBOztpQkFKSEg7O1lBT25CSSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVTtnQkFDUixPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjO2dCQUNaLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQjtnQkFDaEIsT0FBTyxJQUFJLENBQUNILFlBQVk7WUFDMUI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsWUFBWSxFQUFFO2dCQUNuQixJQUFJLElBQUksQ0FBQ0wsWUFBWSxLQUFLLElBQUksRUFBRTtvQkFDOUIsSUFBTU0sT0FBTyxJQUFJLENBQUNOLFlBQVksRUFDeEJPLFdBQVdDLGlCQUFRLENBQUNDLGVBQWUsQ0FBQyxJQUFJLENBQUNYLElBQUksRUFBRVE7b0JBRXJERCxhQUFhSyxXQUFXLENBQUNIO2dCQUMzQixDQUFDO1lBQ0g7Ozs7WUFFT0ksS0FBQUE7bUJBQVAsU0FBT0Esb0JBQW9CYixJQUFJLEVBQUVDLFFBQVEsRUFBRTtnQkFDekMsSUFBTUMsZUFBZSxJQUFJLEVBQ25CWSxnQkFBZ0IsSUE5QkxmLGNBOEJ1QkMsTUFBTUMsVUFBVUM7Z0JBRXhELE9BQU9ZO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSx3QkFBd0JmLElBQUksRUFBRUUsWUFBWSxFQUFFO2dCQUNqRCxJQUFNRCxXQUFXLElBQUksRUFDZmEsZ0JBQWdCLElBckNMZixjQXFDdUJDLE1BQU1DLFVBQVVDO2dCQUV4RCxPQUFPWTtZQUNUOzs7V0F4Q21CZiJ9