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
                var variableAdded = localContext.addVariable(this.variable), variableNode = this.variable.getNode(), variableType = this.variable.getType(), variableString = localContext.nodeAsString(variableNode), variableTypeName = variableType.getName(), variableAssigned = variableAdded; ///
                variableAssigned ? localContext.trace("Assigned the '".concat(variableString, "' variable with type '").concat(variableTypeName, "'."), variableNode) : localContext.debug("Unable to assign the '".concat(variableString, "' variable with type '").concat(variableTypeName, "'."), variableNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NpZ25tZW50L3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYXJpYWJsZUFzc2lnbm1lbnQge1xuICBjb25zdHJ1Y3Rvcih2YXJpYWJsZSkge1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgYXNzaWduKGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlQWRkZWQgPSBsb2NhbENvbnRleHQuYWRkVmFyaWFibGUodGhpcy52YXJpYWJsZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gdGhpcy52YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgdmFyaWFibGVUeXBlID0gdGhpcy52YXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVUeXBlTmFtZSA9IHZhcmlhYmxlVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgdmFyaWFibGVBc3NpZ25lZCA9IHZhcmlhYmxlQWRkZWQ7IC8vL1xuXG4gICAgdmFyaWFibGVBc3NpZ25lZCA/XG4gICAgICBsb2NhbENvbnRleHQudHJhY2UoYEFzc2lnbmVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIHdpdGggdHlwZSAnJHt2YXJpYWJsZVR5cGVOYW1lfScuYCwgdmFyaWFibGVOb2RlKSA6XG4gICAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIGFzc2lnbiB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSB3aXRoIHR5cGUgJyR7dmFyaWFibGVUeXBlTmFtZX0nLmAsIHZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVBc3NpZ25lZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGUodmFyaWFibGUpIHtcbiAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnQgPSBuZXcgVmFyaWFibGVBc3NpZ25tZW50KHZhcmlhYmxlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZUFzc2lnbm1lbnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJWYXJpYWJsZUFzc2lnbm1lbnQiLCJ2YXJpYWJsZSIsImdldFZhcmlhYmxlIiwiYXNzaWduIiwibG9jYWxDb250ZXh0IiwidmFyaWFibGVBZGRlZCIsImFkZFZhcmlhYmxlIiwidmFyaWFibGVOb2RlIiwiZ2V0Tm9kZSIsInZhcmlhYmxlVHlwZSIsImdldFR5cGUiLCJ2YXJpYWJsZVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInZhcmlhYmxlVHlwZU5hbWUiLCJnZXROYW1lIiwidmFyaWFibGVBc3NpZ25lZCIsInRyYWNlIiwiZGVidWciLCJmcm9tVmFyaWFibGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEsbUNBQU47YUFBTUEsbUJBQ1BDLFFBQVE7Z0NBREREO1FBRWpCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTs7a0JBRkNEOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxRQUFRO1lBQ3RCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLFlBQVk7Z0JBQ2pCLElBQU1DLGdCQUFnQkQsYUFBYUUsV0FBVyxDQUFDLElBQUksQ0FBQ0wsUUFBUSxHQUN0RE0sZUFBZSxJQUFJLENBQUNOLFFBQVEsQ0FBQ08sT0FBTyxJQUNwQ0MsZUFBZSxJQUFJLENBQUNSLFFBQVEsQ0FBQ1MsT0FBTyxJQUNwQ0MsaUJBQWlCUCxhQUFhUSxZQUFZLENBQUNMLGVBQzNDTSxtQkFBbUJKLGFBQWFLLE9BQU8sSUFDdkNDLG1CQUFtQlYsZUFBZSxHQUFHO2dCQUUzQ1UsbUJBQ0VYLGFBQWFZLEtBQUssQ0FBQyxBQUFDLGlCQUF1REgsT0FBdkNGLGdCQUFlLDBCQUF5QyxPQUFqQkUsa0JBQWlCLE9BQUtOLGdCQUMvRkgsYUFBYWEsS0FBSyxDQUFDLEFBQUMseUJBQStESixPQUF2Q0YsZ0JBQWUsMEJBQXlDLE9BQWpCRSxrQkFBaUIsT0FBS047Z0JBRTdHLE9BQU9RO1lBQ1Q7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EsYUFBYWpCLFFBQVE7Z0JBQzFCLElBQU1rQixxQkFBcUIsSUF6QlZuQixtQkF5QmlDQztnQkFFbEQsT0FBT2tCO1lBQ1Q7OztXQTVCbUJuQiJ9