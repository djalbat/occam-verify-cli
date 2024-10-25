"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return VariableAssignment;
    }
});
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var VariableAssignment = /*#__PURE__*/ function() {
    function VariableAssignment(variable) {
        _class_call_check(this, VariableAssignment);
        this.variable = variable;
    }
    _create_class(VariableAssignment, [
        {
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
            }
        },
        {
            key: "assign",
            value: function assign(context) {
                var nested = false, variableAdded = context.addVariable(this.variable, nested), variableType = this.variable.getType(), variableString = this.variable.getString(), variableTypeName = variableType.getName(), variableAssigned = variableAdded; ///
                variableAssigned ? context.trace("Assigned the '".concat(variableString, "' variable with type '").concat(variableTypeName, "'.")) : context.debug("Unable to assign the '".concat(variableString, "' variable with type '").concat(variableTypeName, "'."));
                return variableAssigned;
            }
        }
    ], [
        {
            key: "fromVariable",
            value: function fromVariable(variable) {
                var variableAssignment = new VariableAssignment(variable);
                return variableAssignment;
            }
        }
    ]);
    return VariableAssignment;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NpZ25tZW50L3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYXJpYWJsZUFzc2lnbm1lbnQge1xuICBjb25zdHJ1Y3Rvcih2YXJpYWJsZSkge1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgYXNzaWduKGNvbnRleHQpIHtcbiAgICBjb25zdCBuZXN0ZWQgPSBmYWxzZSxcbiAgICAgICAgICB2YXJpYWJsZUFkZGVkID0gY29udGV4dC5hZGRWYXJpYWJsZSh0aGlzLnZhcmlhYmxlLCBuZXN0ZWQpLFxuICAgICAgICAgIHZhcmlhYmxlVHlwZSA9IHRoaXMudmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdGhpcy52YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB2YXJpYWJsZVR5cGVOYW1lID0gdmFyaWFibGVUeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICB2YXJpYWJsZUFzc2lnbmVkID0gdmFyaWFibGVBZGRlZDsgLy8vXG5cbiAgICB2YXJpYWJsZUFzc2lnbmVkID9cbiAgICAgIGNvbnRleHQudHJhY2UoYEFzc2lnbmVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIHdpdGggdHlwZSAnJHt2YXJpYWJsZVR5cGVOYW1lfScuYCkgOlxuICAgICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gYXNzaWduIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIHdpdGggdHlwZSAnJHt2YXJpYWJsZVR5cGVOYW1lfScuYCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVBc3NpZ25lZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGUodmFyaWFibGUpIHtcbiAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnQgPSBuZXcgVmFyaWFibGVBc3NpZ25tZW50KHZhcmlhYmxlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZUFzc2lnbm1lbnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJWYXJpYWJsZUFzc2lnbm1lbnQiLCJ2YXJpYWJsZSIsImdldFZhcmlhYmxlIiwiYXNzaWduIiwiY29udGV4dCIsIm5lc3RlZCIsInZhcmlhYmxlQWRkZWQiLCJhZGRWYXJpYWJsZSIsInZhcmlhYmxlVHlwZSIsImdldFR5cGUiLCJ2YXJpYWJsZVN0cmluZyIsImdldFN0cmluZyIsInZhcmlhYmxlVHlwZU5hbWUiLCJnZXROYW1lIiwidmFyaWFibGVBc3NpZ25lZCIsInRyYWNlIiwiZGVidWciLCJmcm9tVmFyaWFibGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEsbUNBQU47YUFBTUEsbUJBQ1BDLFFBQVE7Z0NBREREO1FBRWpCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTs7a0JBRkNEOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxRQUFRO1lBQ3RCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE9BQU87Z0JBQ1osSUFBTUMsU0FBUyxPQUNUQyxnQkFBZ0JGLFFBQVFHLFdBQVcsQ0FBQyxJQUFJLENBQUNOLFFBQVEsRUFBRUksU0FDbkRHLGVBQWUsSUFBSSxDQUFDUCxRQUFRLENBQUNRLE9BQU8sSUFDcENDLGlCQUFpQixJQUFJLENBQUNULFFBQVEsQ0FBQ1UsU0FBUyxJQUN4Q0MsbUJBQW1CSixhQUFhSyxPQUFPLElBQ3ZDQyxtQkFBbUJSLGVBQWUsR0FBRztnQkFFM0NRLG1CQUNFVixRQUFRVyxLQUFLLENBQUMsQUFBQyxpQkFBdURILE9BQXZDRixnQkFBZSwwQkFBeUMsT0FBakJFLGtCQUFpQixTQUNyRlIsUUFBUVksS0FBSyxDQUFDLEFBQUMseUJBQStESixPQUF2Q0YsZ0JBQWUsMEJBQXlDLE9BQWpCRSxrQkFBaUI7Z0JBRW5HLE9BQU9FO1lBQ1Q7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EsYUFBYWhCLFFBQVE7Z0JBQzFCLElBQU1pQixxQkFBcUIsSUF6QlZsQixtQkF5QmlDQztnQkFFbEQsT0FBT2lCO1lBQ1Q7OztXQTVCbUJsQiJ9