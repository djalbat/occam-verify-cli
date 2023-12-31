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
                localContext.addVariable(this.variable);
            }
        }
    ], [
        {
            key: "fromVariable",
            value: function fromVariable(variable) {
                var assignmentAssignment = new VariableAssignment(variable);
                return assignmentAssignment;
            }
        }
    ]);
    return VariableAssignment;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NpZ25tZW50L3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYXJpYWJsZUFzc2lnbm1lbnQge1xuICBjb25zdHJ1Y3Rvcih2YXJpYWJsZSkge1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgYXNzaWduKGxvY2FsQ29udGV4dCkge1xuICAgIGxvY2FsQ29udGV4dC5hZGRWYXJpYWJsZSh0aGlzLnZhcmlhYmxlKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGUodmFyaWFibGUpIHtcbiAgICBjb25zdCBhc3NpZ25tZW50QXNzaWdubWVudCA9IG5ldyBWYXJpYWJsZUFzc2lnbm1lbnQodmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIGFzc2lnbm1lbnRBc3NpZ25tZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiVmFyaWFibGVBc3NpZ25tZW50IiwidmFyaWFibGUiLCJnZXRWYXJpYWJsZSIsImFzc2lnbiIsImxvY2FsQ29udGV4dCIsImFkZFZhcmlhYmxlIiwiZnJvbVZhcmlhYmxlIiwiYXNzaWdubWVudEFzc2lnbm1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEsbUNBQU47YUFBTUEsbUJBQ1BDLFFBQVE7Z0NBREREO1FBRWpCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTs7a0JBRkNEOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxRQUFRO1lBQ3RCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLFlBQVk7Z0JBQ2pCQSxhQUFhQyxXQUFXLENBQUMsSUFBSSxDQUFDSixRQUFRO1lBQ3hDOzs7O1lBRU9LLEtBQUFBO21CQUFQLFNBQU9BLGFBQWFMLFFBQVE7Z0JBQzFCLElBQU1NLHVCQUF1QixJQWRaUCxtQkFjbUNDO2dCQUVwRCxPQUFPTTtZQUNUOzs7V0FqQm1CUCJ9