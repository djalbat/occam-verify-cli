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
var Assignment = /*#__PURE__*/ function() {
    function Assignment(variable) {
        _class_call_check(this, Assignment);
        this.variable = variable;
    }
    _create_class(Assignment, [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hc3NpZ25tZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBc3NpZ25tZW50IHtcbiAgY29uc3RydWN0b3IodmFyaWFibGUpIHtcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGFzc2lnbihwcm9vZkNvbnRleHQpIHtcbiAgICBwcm9vZkNvbnRleHQuYWRkVmFyaWFibGUodGhpcy52YXJpYWJsZSk7XG4gIH1cblxuICBtYXRjaChhc3NpZ25tZW50KSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSBhc3NpZ25tZW50LmdldFZhcmlhYmxlKCksXG4gICAgICAgICAgdmFyaWFibGVNYXRjaGVzID0gdmFyaWFibGUubWF0Y2godGhpcy52YXJpYWJsZSksXG4gICAgICAgICAgbWF0Y2hlcyA9IHZhcmlhYmxlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE5hbWVBbmRUeXBlKG5hbWUsIHR5cGUpIHtcbiAgICBjb25zdCB2YXJpYWJsZU1hdGNoZXNOYW1lQW5kVHlwZSA9IHRoaXMudmFyaWFibGUubWF0Y2hOYW1lQW5kVHlwZShuYW1lLCB0eXBlKSxcbiAgICAgICAgICBuYW1lQW5kVHlwZU1hdGNoID0gdmFyaWFibGVNYXRjaGVzTmFtZUFuZFR5cGU7IC8vL1xuXG4gICAgcmV0dXJuIG5hbWVBbmRUeXBlTWF0Y2g7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgY29uc3QgYXNzaWdubWVudCA9IG5ldyBBc3NpZ25tZW50KHZhcmlhYmxlKTtcblxuICAgIHJldHVybiBhc3NpZ25tZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiQXNzaWdubWVudCIsInZhcmlhYmxlIiwiZ2V0VmFyaWFibGUiLCJhc3NpZ24iLCJwcm9vZkNvbnRleHQiLCJhZGRWYXJpYWJsZSIsIm1hdGNoIiwiYXNzaWdubWVudCIsInZhcmlhYmxlTWF0Y2hlcyIsIm1hdGNoZXMiLCJtYXRjaE5hbWVBbmRUeXBlIiwibmFtZSIsInR5cGUiLCJ2YXJpYWJsZU1hdGNoZXNOYW1lQW5kVHlwZSIsIm5hbWVBbmRUeXBlTWF0Y2giLCJmcm9tVmFyaWFibGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEsMkJBQU47YUFBTUEsV0FDUEMsUUFBUTtnQ0FEREQ7UUFFakIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBOztrQkFGQ0Q7O1lBS25CRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFFBQVE7WUFDdEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsWUFBWTtnQkFDakJBLGFBQWFDLFdBQVcsQ0FBQyxJQUFJLENBQUNKLFFBQVE7WUFDeEM7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsVUFBVTtnQkFDZCxJQUFNTixXQUFXTSxXQUFXTCxXQUFXLElBQ2pDTSxrQkFBa0JQLFNBQVNLLEtBQUssQ0FBQyxJQUFJLENBQUNMLFFBQVEsR0FDOUNRLFVBQVVELGlCQUFrQixHQUFHO2dCQUVyQyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsSUFBSSxFQUFFQyxJQUFJO2dCQUN6QixJQUFNQyw2QkFBNkIsSUFBSSxDQUFDWixRQUFRLENBQUNTLGdCQUFnQixDQUFDQyxNQUFNQyxPQUNsRUUsbUJBQW1CRCw0QkFBNEIsR0FBRztnQkFFeEQsT0FBT0M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxhQUFhZCxRQUFRO2dCQUMxQixJQUFNTSxhQUFhLElBN0JGUCxXQTZCaUJDO2dCQUVsQyxPQUFPTTtZQUNUOzs7V0FoQ21CUCJ9