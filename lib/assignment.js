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
        },
        {
            key: "match",
            value: function match(assignment) {
                var variable = assignment.getVariable(), variableMatches = variable.match(this.variable), matches = variableMatches; ///
                return matches;
            }
        },
        {
            key: "matchNameAndType",
            value: function matchNameAndType(name, type) {
                var variableMatchesNameAndType = this.variable.matchNameAndType(name, type), nameAndTypeMatch = variableMatchesNameAndType; ///
                return nameAndTypeMatch;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hc3NpZ25tZW50LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBc3NpZ25tZW50IHtcbiAgY29uc3RydWN0b3IodmFyaWFibGUpIHtcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGFzc2lnbihwcm9vZkNvbnRleHQpIHtcbiAgICBwcm9vZkNvbnRleHQuYWRkVmFyaWFibGUodGhpcy52YXJpYWJsZSk7XG4gIH1cblxuICBtYXRjaChhc3NpZ25tZW50KSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSBhc3NpZ25tZW50LmdldFZhcmlhYmxlKCksXG4gICAgICAgICAgdmFyaWFibGVNYXRjaGVzID0gdmFyaWFibGUubWF0Y2godGhpcy52YXJpYWJsZSksXG4gICAgICAgICAgbWF0Y2hlcyA9IHZhcmlhYmxlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE5hbWVBbmRUeXBlKG5hbWUsIHR5cGUpIHtcbiAgICBjb25zdCB2YXJpYWJsZU1hdGNoZXNOYW1lQW5kVHlwZSA9IHRoaXMudmFyaWFibGUubWF0Y2hOYW1lQW5kVHlwZShuYW1lLCB0eXBlKSxcbiAgICAgICAgICBuYW1lQW5kVHlwZU1hdGNoID0gdmFyaWFibGVNYXRjaGVzTmFtZUFuZFR5cGU7IC8vL1xuXG4gICAgcmV0dXJuIG5hbWVBbmRUeXBlTWF0Y2g7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgY29uc3QgYXNzaWdubWVudCA9IG5ldyBBc3NpZ25tZW50KHZhcmlhYmxlKTtcblxuICAgIHJldHVybiBhc3NpZ25tZW50O1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkFzc2lnbm1lbnQiLCJ2YXJpYWJsZSIsImdldFZhcmlhYmxlIiwiYXNzaWduIiwicHJvb2ZDb250ZXh0IiwiYWRkVmFyaWFibGUiLCJtYXRjaCIsImFzc2lnbm1lbnQiLCJ2YXJpYWJsZU1hdGNoZXMiLCJtYXRjaGVzIiwibWF0Y2hOYW1lQW5kVHlwZSIsIm5hbWUiLCJ0eXBlIiwidmFyaWFibGVNYXRjaGVzTmFtZUFuZFR5cGUiLCJuYW1lQW5kVHlwZU1hdGNoIiwiZnJvbVZhcmlhYmxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixJQUFBLEFBQU1BLDJCQUFOO2FBQU1BLFdBQ1BDLFFBQVE7OEJBREREO1FBRWpCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTs7aUJBRkNEOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWM7Z0JBQ1osT0FBTyxJQUFJLENBQUNELFFBQVE7WUFDdEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsWUFBWSxFQUFFO2dCQUNuQkEsYUFBYUMsV0FBVyxDQUFDLElBQUksQ0FBQ0osUUFBUTtZQUN4Qzs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxVQUFVLEVBQUU7Z0JBQ2hCLElBQU1OLFdBQVdNLFdBQVdMLFdBQVcsSUFDakNNLGtCQUFrQlAsU0FBU0ssS0FBSyxDQUFDLElBQUksQ0FBQ0wsUUFBUSxHQUM5Q1EsVUFBVUQsaUJBQWtCLEdBQUc7Z0JBRXJDLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCQyxJQUFJLEVBQUVDLElBQUksRUFBRTtnQkFDM0IsSUFBTUMsNkJBQTZCLElBQUksQ0FBQ1osUUFBUSxDQUFDUyxnQkFBZ0IsQ0FBQ0MsTUFBTUMsT0FDbEVFLG1CQUFtQkQsNEJBQTRCLEdBQUc7Z0JBRXhELE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsYUFBYWQsUUFBUSxFQUFFO2dCQUM1QixJQUFNTSxhQUFhLElBN0JGUCxXQTZCaUJDO2dCQUVsQyxPQUFPTTtZQUNUOzs7V0FoQ21CUCJ9