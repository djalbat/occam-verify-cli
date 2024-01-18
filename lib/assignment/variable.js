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
                var variableAdded = localContext.addVariable(this.variable), variableNode = this.variable.getNode(), variableString = localContext.nodeAsString(variableNode), variableAssigned = variableAdded; ///
                variableAssigned ? localContext.debug("Able to assign the '".concat(variableString, "' variable."), variableNode) : localContext.trace("Unable to assign the '".concat(variableString, "' variable."), variableNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NpZ25tZW50L3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYXJpYWJsZUFzc2lnbm1lbnQge1xuICBjb25zdHJ1Y3Rvcih2YXJpYWJsZSkge1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgYXNzaWduKGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlQWRkZWQgPSBsb2NhbENvbnRleHQuYWRkVmFyaWFibGUodGhpcy52YXJpYWJsZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gdGhpcy52YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVBc3NpZ25lZCA9IHZhcmlhYmxlQWRkZWQ7IC8vL1xuXG4gICAgdmFyaWFibGVBc3NpZ25lZCA/XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYEFibGUgdG8gYXNzaWduIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmAsIHZhcmlhYmxlTm9kZSkgOlxuICAgICAgICBsb2NhbENvbnRleHQudHJhY2UoYFVuYWJsZSB0byBhc3NpZ24gdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCwgdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZUFzc2lnbmVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudCA9IG5ldyBWYXJpYWJsZUFzc2lnbm1lbnQodmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlZhcmlhYmxlQXNzaWdubWVudCIsInZhcmlhYmxlIiwiZ2V0VmFyaWFibGUiLCJhc3NpZ24iLCJsb2NhbENvbnRleHQiLCJ2YXJpYWJsZUFkZGVkIiwiYWRkVmFyaWFibGUiLCJ2YXJpYWJsZU5vZGUiLCJnZXROb2RlIiwidmFyaWFibGVTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ2YXJpYWJsZUFzc2lnbmVkIiwiZGVidWciLCJ0cmFjZSIsImZyb21WYXJpYWJsZSIsInZhcmlhYmxlQXNzaWdubWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSxtQ0FBRCxBQUFMO2FBQU1BLG1CQUNQQyxRQUFRO2dDQURERDtRQUVqQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7O2tCQUZDRDs7WUFLbkJFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsUUFBUTtZQUN0Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxZQUFZO2dCQUNqQixJQUFNQyxnQkFBZ0JELGFBQWFFLFdBQVcsQ0FBQyxJQUFJLENBQUNMLFFBQVEsR0FDdERNLGVBQWUsSUFBSSxDQUFDTixRQUFRLENBQUNPLE9BQU8sSUFDcENDLGlCQUFpQkwsYUFBYU0sWUFBWSxDQUFDSCxlQUMzQ0ksbUJBQW1CTixlQUFlLEdBQUc7Z0JBRTNDTSxtQkFDRVAsYUFBYVEsS0FBSyxDQUFDLEFBQUMsdUJBQXFDLE9BQWZILGdCQUFlLGdCQUFjRixnQkFDckVILGFBQWFTLEtBQUssQ0FBQyxBQUFDLHlCQUF1QyxPQUFmSixnQkFBZSxnQkFBY0Y7Z0JBRTdFLE9BQU9JO1lBQ1Q7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EsYUFBYWIsUUFBUTtnQkFDMUIsSUFBTWMscUJBQXFCLElBdkJWZixtQkF1QmlDQztnQkFFbEQsT0FBT2M7WUFDVDs7O1dBMUJtQmYifQ==