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
            value: function assign(localContext) {
                var nested = false, variableAdded = localContext.addVariable(this.variable, nested), variableType = this.variable.getType(), variableString = this.variable.getString(), variableTypeName = variableType.getName(), variableAssigned = variableAdded; ///
                variableAssigned ? localContext.trace("Assigned the '".concat(variableString, "' variable with type '").concat(variableTypeName, "'.")) : localContext.debug("Unable to assign the '".concat(variableString, "' variable with type '").concat(variableTypeName, "'."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NpZ25tZW50L3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYXJpYWJsZUFzc2lnbm1lbnQge1xuICBjb25zdHJ1Y3Rvcih2YXJpYWJsZSkge1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgYXNzaWduKGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IG5lc3RlZCA9IGZhbHNlLFxuICAgICAgICAgIHZhcmlhYmxlQWRkZWQgPSBsb2NhbENvbnRleHQuYWRkVmFyaWFibGUodGhpcy52YXJpYWJsZSwgbmVzdGVkKSxcbiAgICAgICAgICB2YXJpYWJsZVR5cGUgPSB0aGlzLnZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHRoaXMudmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdmFyaWFibGVUeXBlTmFtZSA9IHZhcmlhYmxlVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgdmFyaWFibGVBc3NpZ25lZCA9IHZhcmlhYmxlQWRkZWQ7IC8vL1xuXG4gICAgdmFyaWFibGVBc3NpZ25lZCA/XG4gICAgICBsb2NhbENvbnRleHQudHJhY2UoYEFzc2lnbmVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIHdpdGggdHlwZSAnJHt2YXJpYWJsZVR5cGVOYW1lfScuYCkgOlxuICAgICAgICBsb2NhbENvbnRleHQuZGVidWcoYFVuYWJsZSB0byBhc3NpZ24gdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgd2l0aCB0eXBlICcke3ZhcmlhYmxlVHlwZU5hbWV9Jy5gKTtcblxuICAgIHJldHVybiB2YXJpYWJsZUFzc2lnbmVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudCA9IG5ldyBWYXJpYWJsZUFzc2lnbm1lbnQodmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlZhcmlhYmxlQXNzaWdubWVudCIsInZhcmlhYmxlIiwiZ2V0VmFyaWFibGUiLCJhc3NpZ24iLCJsb2NhbENvbnRleHQiLCJuZXN0ZWQiLCJ2YXJpYWJsZUFkZGVkIiwiYWRkVmFyaWFibGUiLCJ2YXJpYWJsZVR5cGUiLCJnZXRUeXBlIiwidmFyaWFibGVTdHJpbmciLCJnZXRTdHJpbmciLCJ2YXJpYWJsZVR5cGVOYW1lIiwiZ2V0TmFtZSIsInZhcmlhYmxlQXNzaWduZWQiLCJ0cmFjZSIsImRlYnVnIiwiZnJvbVZhcmlhYmxlIiwidmFyaWFibGVBc3NpZ25tZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixJQUFBLEFBQU1BLG1DQUFOO2FBQU1BLG1CQUNQQyxRQUFRO2dDQURERDtRQUVqQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7O2tCQUZDRDs7WUFLbkJFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsUUFBUTtZQUN0Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxZQUFZO2dCQUNqQixJQUFNQyxTQUFTLE9BQ1RDLGdCQUFnQkYsYUFBYUcsV0FBVyxDQUFDLElBQUksQ0FBQ04sUUFBUSxFQUFFSSxTQUN4REcsZUFBZSxJQUFJLENBQUNQLFFBQVEsQ0FBQ1EsT0FBTyxJQUNwQ0MsaUJBQWlCLElBQUksQ0FBQ1QsUUFBUSxDQUFDVSxTQUFTLElBQ3hDQyxtQkFBbUJKLGFBQWFLLE9BQU8sSUFDdkNDLG1CQUFtQlIsZUFBZSxHQUFHO2dCQUUzQ1EsbUJBQ0VWLGFBQWFXLEtBQUssQ0FBQyxBQUFDLGlCQUF1REgsT0FBdkNGLGdCQUFlLDBCQUF5QyxPQUFqQkUsa0JBQWlCLFNBQzFGUixhQUFhWSxLQUFLLENBQUMsQUFBQyx5QkFBK0RKLE9BQXZDRixnQkFBZSwwQkFBeUMsT0FBakJFLGtCQUFpQjtnQkFFeEcsT0FBT0U7WUFDVDs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxhQUFhaEIsUUFBUTtnQkFDMUIsSUFBTWlCLHFCQUFxQixJQXpCVmxCLG1CQXlCaUNDO2dCQUVsRCxPQUFPaUI7WUFDVDs7O1dBNUJtQmxCIn0=