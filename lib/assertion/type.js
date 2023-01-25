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
var TypeAssertion = /*#__PURE__*/ function() {
    function TypeAssertion(variable) {
        _classCallCheck(this, TypeAssertion);
        this.variable = variable;
    }
    _createClass(TypeAssertion, [
        {
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
            }
        },
        {
            key: "assert",
            value: function assert(proofContext) {
                proofContext.addVariable(this.variable);
            }
        }
    ], [
        {
            key: "fromVariable",
            value: function fromVariable(variable) {
                var typeAssertion = new TypeAssertion(variable);
                return typeAssertion;
            }
        }
    ]);
    return TypeAssertion;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NlcnRpb24vdHlwZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHlwZUFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKHZhcmlhYmxlKSB7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBhc3NlcnQocHJvb2ZDb250ZXh0KSB7XG4gICAgcHJvb2ZDb250ZXh0LmFkZFZhcmlhYmxlKHRoaXMudmFyaWFibGUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIGNvbnN0IHR5cGVBc3NlcnRpb24gPSBuZXcgVHlwZUFzc2VydGlvbih2YXJpYWJsZSk7XG5cbiAgICByZXR1cm4gdHlwZUFzc2VydGlvbjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJUeXBlQXNzZXJ0aW9uIiwidmFyaWFibGUiLCJnZXRWYXJpYWJsZSIsImFzc2VydCIsInByb29mQ29udGV4dCIsImFkZFZhcmlhYmxlIiwiZnJvbVZhcmlhYmxlIiwidHlwZUFzc2VydGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSw4QkFBTjthQUFNQSxjQUNQQyxRQUFROzhCQURERDtRQUVqQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7O2lCQUZDRDs7WUFLbkJFLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjO2dCQUNaLE9BQU8sSUFBSSxDQUFDRCxRQUFRO1lBQ3RCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLFlBQVksRUFBRTtnQkFDbkJBLGFBQWFDLFdBQVcsQ0FBQyxJQUFJLENBQUNKLFFBQVE7WUFDeEM7Ozs7WUFFT0ssS0FBQUE7bUJBQVAsU0FBT0EsYUFBYUwsUUFBUSxFQUFFO2dCQUM1QixJQUFNTSxnQkFBZ0IsSUFkTFAsY0FjdUJDO2dCQUV4QyxPQUFPTTtZQUNUOzs7V0FqQm1CUCJ9