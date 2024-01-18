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
                var variableAdded = context.addVariable(this.variable), variableNode = this.variable.getNode(), variableType = this.variable.getType(), variableString = context.nodeAsString(variableNode), variableTypeName = variableType.getName(), variableAssigned = variableAdded; ///
                variableAssigned ? context.debug("Able to assign the '".concat(variableString, "' variable with type '").concat(variableTypeName, "'."), variableNode) : context.trace("Unable to assign the '".concat(variableString, "' variable with type '").concat(variableTypeName, "'."), variableNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NpZ25tZW50L3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYXJpYWJsZUFzc2lnbm1lbnQge1xuICBjb25zdHJ1Y3Rvcih2YXJpYWJsZSkge1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgYXNzaWduKGNvbnRleHQpIHtcbiAgICBjb25zdCB2YXJpYWJsZUFkZGVkID0gY29udGV4dC5hZGRWYXJpYWJsZSh0aGlzLnZhcmlhYmxlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB0aGlzLnZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZVR5cGUgPSB0aGlzLnZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVUeXBlTmFtZSA9IHZhcmlhYmxlVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgdmFyaWFibGVBc3NpZ25lZCA9IHZhcmlhYmxlQWRkZWQ7IC8vL1xuXG4gICAgdmFyaWFibGVBc3NpZ25lZCA/XG4gICAgICBjb250ZXh0LmRlYnVnKGBBYmxlIHRvIGFzc2lnbiB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSB3aXRoIHR5cGUgJyR7dmFyaWFibGVUeXBlTmFtZX0nLmAsIHZhcmlhYmxlTm9kZSkgOlxuICAgICAgICBjb250ZXh0LnRyYWNlKGBVbmFibGUgdG8gYXNzaWduIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIHdpdGggdHlwZSAnJHt2YXJpYWJsZVR5cGVOYW1lfScuYCwgdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZUFzc2lnbmVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudCA9IG5ldyBWYXJpYWJsZUFzc2lnbm1lbnQodmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlZhcmlhYmxlQXNzaWdubWVudCIsInZhcmlhYmxlIiwiZ2V0VmFyaWFibGUiLCJhc3NpZ24iLCJjb250ZXh0IiwidmFyaWFibGVBZGRlZCIsImFkZFZhcmlhYmxlIiwidmFyaWFibGVOb2RlIiwiZ2V0Tm9kZSIsInZhcmlhYmxlVHlwZSIsImdldFR5cGUiLCJ2YXJpYWJsZVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInZhcmlhYmxlVHlwZU5hbWUiLCJnZXROYW1lIiwidmFyaWFibGVBc3NpZ25lZCIsImRlYnVnIiwidHJhY2UiLCJmcm9tVmFyaWFibGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEsbUNBQUQsQUFBTDthQUFNQSxtQkFDUEMsUUFBUTtnQ0FEREQ7UUFFakIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBOztrQkFGQ0Q7O1lBS25CRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFFBQVE7WUFDdEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsT0FBTztnQkFDWixJQUFNQyxnQkFBZ0JELFFBQVFFLFdBQVcsQ0FBQyxJQUFJLENBQUNMLFFBQVEsR0FDakRNLGVBQWUsSUFBSSxDQUFDTixRQUFRLENBQUNPLE9BQU8sSUFDcENDLGVBQWUsSUFBSSxDQUFDUixRQUFRLENBQUNTLE9BQU8sSUFDcENDLGlCQUFpQlAsUUFBUVEsWUFBWSxDQUFDTCxlQUN0Q00sbUJBQW1CSixhQUFhSyxPQUFPLElBQ3ZDQyxtQkFBbUJWLGVBQWUsR0FBRztnQkFFM0NVLG1CQUNFWCxRQUFRWSxLQUFLLENBQUMsQUFBQyx1QkFBNkRILE9BQXZDRixnQkFBZSwwQkFBeUMsT0FBakJFLGtCQUFpQixPQUFLTixnQkFDaEdILFFBQVFhLEtBQUssQ0FBQyxBQUFDLHlCQUErREosT0FBdkNGLGdCQUFlLDBCQUF5QyxPQUFqQkUsa0JBQWlCLE9BQUtOO2dCQUV4RyxPQUFPUTtZQUNUOzs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BLGFBQWFqQixRQUFRO2dCQUMxQixJQUFNa0IscUJBQXFCLElBekJWbkIsbUJBeUJpQ0M7Z0JBRWxELE9BQU9rQjtZQUNUOzs7V0E1Qm1CbkIifQ==