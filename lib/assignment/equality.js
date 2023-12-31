"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EqualityAssignment;
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
var EqualityAssignment = /*#__PURE__*/ function() {
    function EqualityAssignment(equality) {
        _class_call_check(this, EqualityAssignment);
        this.equality = equality;
    }
    _create_class(EqualityAssignment, [
        {
            key: "getEquality",
            value: function getEquality() {
                return this.equality;
            }
        },
        {
            key: "assign",
            value: function assign(localContext) {
                localContext.addEquality(this.equality);
            }
        }
    ], [
        {
            key: "fromEquality",
            value: function fromEquality(equality) {
                var assignmentAssignment = new EqualityAssignment(equality);
                return assignmentAssignment;
            }
        }
    ]);
    return EqualityAssignment;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NpZ25tZW50L2VxdWFsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcXVhbGl0eUFzc2lnbm1lbnQge1xuICBjb25zdHJ1Y3RvcihlcXVhbGl0eSkge1xuICAgIHRoaXMuZXF1YWxpdHkgPSBlcXVhbGl0eTtcbiAgfVxuXG4gIGdldEVxdWFsaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmVxdWFsaXR5O1xuICB9XG5cbiAgYXNzaWduKGxvY2FsQ29udGV4dCkge1xuICAgIGxvY2FsQ29udGV4dC5hZGRFcXVhbGl0eSh0aGlzLmVxdWFsaXR5KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRXF1YWxpdHkoZXF1YWxpdHkpIHtcbiAgICBjb25zdCBhc3NpZ25tZW50QXNzaWdubWVudCA9IG5ldyBFcXVhbGl0eUFzc2lnbm1lbnQoZXF1YWxpdHkpO1xuXG4gICAgcmV0dXJuIGFzc2lnbm1lbnRBc3NpZ25tZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRXF1YWxpdHlBc3NpZ25tZW50IiwiZXF1YWxpdHkiLCJnZXRFcXVhbGl0eSIsImFzc2lnbiIsImxvY2FsQ29udGV4dCIsImFkZEVxdWFsaXR5IiwiZnJvbUVxdWFsaXR5IiwiYXNzaWdubWVudEFzc2lnbm1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEsbUNBQUQsQUFBTDthQUFNQSxtQkFDUEMsUUFBUTtnQ0FEREQ7UUFFakIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBOztrQkFGQ0Q7O1lBS25CRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFFBQVE7WUFDdEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsWUFBWTtnQkFDakJBLGFBQWFDLFdBQVcsQ0FBQyxJQUFJLENBQUNKLFFBQVE7WUFDeEM7Ozs7WUFFT0ssS0FBQUE7bUJBQVAsU0FBT0EsYUFBYUwsUUFBUTtnQkFDMUIsSUFBTU0sdUJBQXVCLElBZFpQLG1CQWNtQ0M7Z0JBRXBELE9BQU9NO1lBQ1Q7OztXQWpCbUJQIn0=