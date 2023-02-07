"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Assignment;
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
var Assignment = /*#__PURE__*/ function() {
    function Assignment(variable) {
        _classCallCheck(this, Assignment);
        this.variable = variable;
    }
    _createClass(Assignment, [
        {
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
            }
        },
        {
            key: "assign",
            value: function assign(proofContext) {
                proofContext.addVariable(this.variable);
            }
        }
    ], [
        {
            key: "fromVariable",
            value: function fromVariable(variable) {
                var assignment = new Assignment(variable);
                return assignment;
            }
        }
    ]);
    return Assignment;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hc3NpZ25tZW50LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBc3NpZ25tZW50IHtcbiAgY29uc3RydWN0b3IodmFyaWFibGUpIHtcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGFzc2lnbihwcm9vZkNvbnRleHQpIHtcbiAgICBwcm9vZkNvbnRleHQuYWRkVmFyaWFibGUodGhpcy52YXJpYWJsZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgY29uc3QgYXNzaWdubWVudCA9IG5ldyBBc3NpZ25tZW50KHZhcmlhYmxlKTtcblxuICAgIHJldHVybiBhc3NpZ25tZW50O1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkFzc2lnbm1lbnQiLCJ2YXJpYWJsZSIsImdldFZhcmlhYmxlIiwiYXNzaWduIiwicHJvb2ZDb250ZXh0IiwiYWRkVmFyaWFibGUiLCJmcm9tVmFyaWFibGUiLCJhc3NpZ25tZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixJQUFBLEFBQU1BLDJCQUFOO2FBQU1BLFdBQ1BDLFFBQVE7OEJBREREO1FBRWpCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTs7aUJBRkNEOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWM7Z0JBQ1osT0FBTyxJQUFJLENBQUNELFFBQVE7WUFDdEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsWUFBWSxFQUFFO2dCQUNuQkEsYUFBYUMsV0FBVyxDQUFDLElBQUksQ0FBQ0osUUFBUTtZQUN4Qzs7OztZQUVPSyxLQUFBQTttQkFBUCxTQUFPQSxhQUFhTCxRQUFRLEVBQUU7Z0JBQzVCLElBQU1NLGFBQWEsSUFkRlAsV0FjaUJDO2dCQUVsQyxPQUFPTTtZQUNUOzs7V0FqQm1CUCJ9