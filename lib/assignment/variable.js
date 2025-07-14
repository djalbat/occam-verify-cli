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
                var nested = false, variableAdded = context.addVariable(this.variable, nested), variableType = this.variable.getType(), variableString = this.variable.getString(), variableAssigned = variableAdded, variableTypeString = variableType.getString();
                variableAssigned ? context.trace("Assigned the '".concat(variableString, "' variable with type '").concat(variableTypeString, "'.")) : context.debug("Unable to assign the '".concat(variableString, "' variable with type '").concat(variableTypeString, "'."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NpZ25tZW50L3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYXJpYWJsZUFzc2lnbm1lbnQge1xuICBjb25zdHJ1Y3Rvcih2YXJpYWJsZSkge1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgYXNzaWduKGNvbnRleHQpIHtcbiAgICBjb25zdCBuZXN0ZWQgPSBmYWxzZSxcbiAgICAgICAgICB2YXJpYWJsZUFkZGVkID0gY29udGV4dC5hZGRWYXJpYWJsZSh0aGlzLnZhcmlhYmxlLCBuZXN0ZWQpLFxuICAgICAgICAgIHZhcmlhYmxlVHlwZSA9IHRoaXMudmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdGhpcy52YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB2YXJpYWJsZUFzc2lnbmVkID0gdmFyaWFibGVBZGRlZCwgLy8vXG4gICAgICAgICAgdmFyaWFibGVUeXBlU3RyaW5nID0gdmFyaWFibGVUeXBlLmdldFN0cmluZygpO1xuXG4gICAgdmFyaWFibGVBc3NpZ25lZCA/XG4gICAgICBjb250ZXh0LnRyYWNlKGBBc3NpZ25lZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSB3aXRoIHR5cGUgJyR7dmFyaWFibGVUeXBlU3RyaW5nfScuYCkgOlxuICAgICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gYXNzaWduIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIHdpdGggdHlwZSAnJHt2YXJpYWJsZVR5cGVTdHJpbmd9Jy5gKTtcblxuICAgIHJldHVybiB2YXJpYWJsZUFzc2lnbmVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudCA9IG5ldyBWYXJpYWJsZUFzc2lnbm1lbnQodmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlZhcmlhYmxlQXNzaWdubWVudCIsInZhcmlhYmxlIiwiZ2V0VmFyaWFibGUiLCJhc3NpZ24iLCJjb250ZXh0IiwibmVzdGVkIiwidmFyaWFibGVBZGRlZCIsImFkZFZhcmlhYmxlIiwidmFyaWFibGVUeXBlIiwiZ2V0VHlwZSIsInZhcmlhYmxlU3RyaW5nIiwiZ2V0U3RyaW5nIiwidmFyaWFibGVBc3NpZ25lZCIsInZhcmlhYmxlVHlwZVN0cmluZyIsInRyYWNlIiwiZGVidWciLCJmcm9tVmFyaWFibGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEsbUNBQU47YUFBTUEsbUJBQ1BDLFFBQVE7Z0NBREREO1FBRWpCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTs7a0JBRkNEOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxRQUFRO1lBQ3RCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE9BQU87Z0JBQ1osSUFBTUMsU0FBUyxPQUNUQyxnQkFBZ0JGLFFBQVFHLFdBQVcsQ0FBQyxJQUFJLENBQUNOLFFBQVEsRUFBRUksU0FDbkRHLGVBQWUsSUFBSSxDQUFDUCxRQUFRLENBQUNRLE9BQU8sSUFDcENDLGlCQUFpQixJQUFJLENBQUNULFFBQVEsQ0FBQ1UsU0FBUyxJQUN4Q0MsbUJBQW1CTixlQUNuQk8scUJBQXFCTCxhQUFhRyxTQUFTO2dCQUVqREMsbUJBQ0VSLFFBQVFVLEtBQUssQ0FBQyxBQUFDLGlCQUF1REQsT0FBdkNILGdCQUFlLDBCQUEyQyxPQUFuQkcsb0JBQW1CLFNBQ3ZGVCxRQUFRVyxLQUFLLENBQUMsQUFBQyx5QkFBK0RGLE9BQXZDSCxnQkFBZSwwQkFBMkMsT0FBbkJHLG9CQUFtQjtnQkFFckcsT0FBT0Q7WUFDVDs7OztZQUVPSSxLQUFBQTttQkFBUCxTQUFPQSxhQUFhZixRQUFRO2dCQUMxQixJQUFNZ0IscUJBQXFCLElBekJWakIsbUJBeUJpQ0M7Z0JBRWxELE9BQU9nQjtZQUNUOzs7V0E1Qm1CakIifQ==