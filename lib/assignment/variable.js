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
                var nested = false;
                context.addVariable(this.variable, nested);
                var variableType = this.variable.getType(), variableString = this.variable.getString(), variableAssigned = true, variableTypeString = variableType.getString();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NpZ25tZW50L3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYXJpYWJsZUFzc2lnbm1lbnQge1xuICBjb25zdHJ1Y3Rvcih2YXJpYWJsZSkge1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgYXNzaWduKGNvbnRleHQpIHtcbiAgICBjb25zdCBuZXN0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnRleHQuYWRkVmFyaWFibGUodGhpcy52YXJpYWJsZSwgbmVzdGVkKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlVHlwZSA9IHRoaXMudmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdGhpcy52YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB2YXJpYWJsZUFzc2lnbmVkID0gdHJ1ZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGVUeXBlU3RyaW5nID0gdmFyaWFibGVUeXBlLmdldFN0cmluZygpO1xuXG4gICAgdmFyaWFibGVBc3NpZ25lZCA/XG4gICAgICBjb250ZXh0LnRyYWNlKGBBc3NpZ25lZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSB3aXRoIHR5cGUgJyR7dmFyaWFibGVUeXBlU3RyaW5nfScuYCkgOlxuICAgICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gYXNzaWduIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIHdpdGggdHlwZSAnJHt2YXJpYWJsZVR5cGVTdHJpbmd9Jy5gKTtcblxuICAgIHJldHVybiB2YXJpYWJsZUFzc2lnbmVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudCA9IG5ldyBWYXJpYWJsZUFzc2lnbm1lbnQodmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlZhcmlhYmxlQXNzaWdubWVudCIsInZhcmlhYmxlIiwiZ2V0VmFyaWFibGUiLCJhc3NpZ24iLCJjb250ZXh0IiwibmVzdGVkIiwiYWRkVmFyaWFibGUiLCJ2YXJpYWJsZVR5cGUiLCJnZXRUeXBlIiwidmFyaWFibGVTdHJpbmciLCJnZXRTdHJpbmciLCJ2YXJpYWJsZUFzc2lnbmVkIiwidmFyaWFibGVUeXBlU3RyaW5nIiwidHJhY2UiLCJkZWJ1ZyIsImZyb21WYXJpYWJsZSIsInZhcmlhYmxlQXNzaWdubWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSxtQ0FBTjthQUFNQSxtQkFDUEMsUUFBUTtnQ0FEREQ7UUFFakIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBOztrQkFGQ0Q7O1lBS25CRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFFBQVE7WUFDdEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsT0FBTztnQkFDWixJQUFNQyxTQUFTO2dCQUVmRCxRQUFRRSxXQUFXLENBQUMsSUFBSSxDQUFDTCxRQUFRLEVBQUVJO2dCQUVuQyxJQUFNRSxlQUFlLElBQUksQ0FBQ04sUUFBUSxDQUFDTyxPQUFPLElBQ3BDQyxpQkFBaUIsSUFBSSxDQUFDUixRQUFRLENBQUNTLFNBQVMsSUFDeENDLG1CQUFtQixNQUNuQkMscUJBQXFCTCxhQUFhRyxTQUFTO2dCQUVqREMsbUJBQ0VQLFFBQVFTLEtBQUssQ0FBQyxBQUFDLGlCQUF1REQsT0FBdkNILGdCQUFlLDBCQUEyQyxPQUFuQkcsb0JBQW1CLFNBQ3ZGUixRQUFRVSxLQUFLLENBQUMsQUFBQyx5QkFBK0RGLE9BQXZDSCxnQkFBZSwwQkFBMkMsT0FBbkJHLG9CQUFtQjtnQkFFckcsT0FBT0Q7WUFDVDs7OztZQUVPSSxLQUFBQTttQkFBUCxTQUFPQSxhQUFhZCxRQUFRO2dCQUMxQixJQUFNZSxxQkFBcUIsSUEzQlZoQixtQkEyQmlDQztnQkFFbEQsT0FBT2U7WUFDVDs7O1dBOUJtQmhCIn0=