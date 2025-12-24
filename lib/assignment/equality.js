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
            value: function assign(context) {
                var equalityAdded = context.addEquality(this.equality), equalityString = this.equality.getString(), equalityAssigned = equalityAdded; ///
                equalityAssigned ? context.trace("Assigned the '".concat(equalityString, "' equality.")) : context.debug("Unable to assign the '".concat(equalityString, "' equality."));
                return equalityAssigned;
            }
        }
    ], [
        {
            key: "fromEquality",
            value: function fromEquality(equality) {
                var equalityAssignment = new EqualityAssignment(equality);
                return equalityAssignment;
            }
        }
    ]);
    return EqualityAssignment;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NpZ25tZW50L2VxdWFsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcXVhbGl0eUFzc2lnbm1lbnQge1xuICBjb25zdHJ1Y3RvcihlcXVhbGl0eSkge1xuICAgIHRoaXMuZXF1YWxpdHkgPSBlcXVhbGl0eTtcbiAgfVxuXG4gIGdldEVxdWFsaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmVxdWFsaXR5O1xuICB9XG5cbiAgYXNzaWduKGNvbnRleHQpIHtcbiAgICBjb25zdCBlcXVhbGl0eUFkZGVkID0gY29udGV4dC5hZGRFcXVhbGl0eSh0aGlzLmVxdWFsaXR5KSxcbiAgICAgICAgICBlcXVhbGl0eVN0cmluZyA9IHRoaXMuZXF1YWxpdHkuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZXF1YWxpdHlBc3NpZ25lZCA9IGVxdWFsaXR5QWRkZWQ7IC8vL1xuXG4gICAgZXF1YWxpdHlBc3NpZ25lZCA/XG4gICAgICBjb250ZXh0LnRyYWNlKGBBc3NpZ25lZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eS5gKSA6XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byBhc3NpZ24gdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkuYCk7XG5cbiAgICByZXR1cm4gZXF1YWxpdHlBc3NpZ25lZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRXF1YWxpdHkoZXF1YWxpdHkpIHtcbiAgICBjb25zdCBlcXVhbGl0eUFzc2lnbm1lbnQgPSBuZXcgRXF1YWxpdHlBc3NpZ25tZW50KGVxdWFsaXR5KTtcblxuICAgIHJldHVybiBlcXVhbGl0eUFzc2lnbm1lbnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJFcXVhbGl0eUFzc2lnbm1lbnQiLCJlcXVhbGl0eSIsImdldEVxdWFsaXR5IiwiYXNzaWduIiwiY29udGV4dCIsImVxdWFsaXR5QWRkZWQiLCJhZGRFcXVhbGl0eSIsImVxdWFsaXR5U3RyaW5nIiwiZ2V0U3RyaW5nIiwiZXF1YWxpdHlBc3NpZ25lZCIsInRyYWNlIiwiZGVidWciLCJmcm9tRXF1YWxpdHkiLCJlcXVhbGl0eUFzc2lnbm1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEsbUNBQU47YUFBTUEsbUJBQ1BDLFFBQVE7Z0NBREREO1FBRWpCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTs7a0JBRkNEOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxRQUFRO1lBQ3RCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE9BQU87Z0JBQ1osSUFBTUMsZ0JBQWdCRCxRQUFRRSxXQUFXLENBQUMsSUFBSSxDQUFDTCxRQUFRLEdBQ2pETSxpQkFBaUIsSUFBSSxDQUFDTixRQUFRLENBQUNPLFNBQVMsSUFDeENDLG1CQUFtQkosZUFBZSxHQUFHO2dCQUUzQ0ksbUJBQ0VMLFFBQVFNLEtBQUssQ0FBQyxBQUFDLGlCQUErQixPQUFmSCxnQkFBZSxrQkFDNUNILFFBQVFPLEtBQUssQ0FBQyxBQUFDLHlCQUF1QyxPQUFmSixnQkFBZTtnQkFFMUQsT0FBT0U7WUFDVDs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxhQUFhWCxRQUFRO2dCQUMxQixJQUFNWSxxQkFBcUIsSUF0QlZiLG1CQXNCaUNDO2dCQUVsRCxPQUFPWTtZQUNUOzs7V0F6Qm1CYiJ9