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
                var variableAdded = localContext.addVariable(this.variable), variableType = this.variable.getType(), variableString = this.variable.getString(), variableTypeName = variableType.getName(), variableAssigned = variableAdded; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NpZ25tZW50L3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYXJpYWJsZUFzc2lnbm1lbnQge1xuICBjb25zdHJ1Y3Rvcih2YXJpYWJsZSkge1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgYXNzaWduKGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlQWRkZWQgPSBsb2NhbENvbnRleHQuYWRkVmFyaWFibGUodGhpcy52YXJpYWJsZSksXG4gICAgICAgICAgdmFyaWFibGVUeXBlID0gdGhpcy52YXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgIHZhcmlhYmxlVHlwZU5hbWUgPSB2YXJpYWJsZVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHZhcmlhYmxlQXNzaWduZWQgPSB2YXJpYWJsZUFkZGVkOyAvLy9cblxuICAgIHZhcmlhYmxlQXNzaWduZWQgP1xuICAgICAgbG9jYWxDb250ZXh0LnRyYWNlKGBBc3NpZ25lZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSB3aXRoIHR5cGUgJyR7dmFyaWFibGVUeXBlTmFtZX0nLmApIDpcbiAgICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gYXNzaWduIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIHdpdGggdHlwZSAnJHt2YXJpYWJsZVR5cGVOYW1lfScuYCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVBc3NpZ25lZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGUodmFyaWFibGUpIHtcbiAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnQgPSBuZXcgVmFyaWFibGVBc3NpZ25tZW50KHZhcmlhYmxlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZUFzc2lnbm1lbnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJWYXJpYWJsZUFzc2lnbm1lbnQiLCJ2YXJpYWJsZSIsImdldFZhcmlhYmxlIiwiYXNzaWduIiwibG9jYWxDb250ZXh0IiwidmFyaWFibGVBZGRlZCIsImFkZFZhcmlhYmxlIiwidmFyaWFibGVUeXBlIiwiZ2V0VHlwZSIsInZhcmlhYmxlU3RyaW5nIiwiZ2V0U3RyaW5nIiwidmFyaWFibGVUeXBlTmFtZSIsImdldE5hbWUiLCJ2YXJpYWJsZUFzc2lnbmVkIiwidHJhY2UiLCJkZWJ1ZyIsImZyb21WYXJpYWJsZSIsInZhcmlhYmxlQXNzaWdubWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSxtQ0FBTjthQUFNQSxtQkFDUEMsUUFBUTtnQ0FEREQ7UUFFakIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBOztrQkFGQ0Q7O1lBS25CRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFFBQVE7WUFDdEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsWUFBWTtnQkFDakIsSUFBTUMsZ0JBQWdCRCxhQUFhRSxXQUFXLENBQUMsSUFBSSxDQUFDTCxRQUFRLEdBQ3RETSxlQUFlLElBQUksQ0FBQ04sUUFBUSxDQUFDTyxPQUFPLElBQ3BDQyxpQkFBaUIsSUFBSSxDQUFDUixRQUFRLENBQUNTLFNBQVMsSUFDeENDLG1CQUFtQkosYUFBYUssT0FBTyxJQUN2Q0MsbUJBQW1CUixlQUFlLEdBQUc7Z0JBRTNDUSxtQkFDRVQsYUFBYVUsS0FBSyxDQUFDLEFBQUMsaUJBQXVESCxPQUF2Q0YsZ0JBQWUsMEJBQXlDLE9BQWpCRSxrQkFBaUIsU0FDMUZQLGFBQWFXLEtBQUssQ0FBQyxBQUFDLHlCQUErREosT0FBdkNGLGdCQUFlLDBCQUF5QyxPQUFqQkUsa0JBQWlCO2dCQUV4RyxPQUFPRTtZQUNUOzs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BLGFBQWFmLFFBQVE7Z0JBQzFCLElBQU1nQixxQkFBcUIsSUF4QlZqQixtQkF3QmlDQztnQkFFbEQsT0FBT2dCO1lBQ1Q7OztXQTNCbUJqQiJ9