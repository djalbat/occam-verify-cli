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
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
                var equalityAdded = localContext.addEquality(this.equality, localContext), equalityString = this.equality.getString(), equalityAssigned = equalityAdded; ///
                equalityAssigned ? localContext.trace("Assigned the '".concat(equalityString, "' equality.")) : localContext.debug("Unable to assign the '".concat(equalityString, "' equality."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NpZ25tZW50L2VxdWFsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgbG9jYWwgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXF1YWxpdHlBc3NpZ25tZW50IHtcbiAgY29uc3RydWN0b3IoZXF1YWxpdHkpIHtcbiAgICB0aGlzLmVxdWFsaXR5ID0gZXF1YWxpdHk7XG4gIH1cblxuICBnZXRFcXVhbGl0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5lcXVhbGl0eTtcbiAgfVxuXG4gIGFzc2lnbihsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBlcXVhbGl0eUFkZGVkID0gbG9jYWxDb250ZXh0LmFkZEVxdWFsaXR5KHRoaXMuZXF1YWxpdHksIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgZXF1YWxpdHlTdHJpbmcgPSB0aGlzLmVxdWFsaXR5LmdldFN0cmluZygpLFxuICAgICAgICAgIGVxdWFsaXR5QXNzaWduZWQgPSBlcXVhbGl0eUFkZGVkOyAvLy9cblxuICAgIGVxdWFsaXR5QXNzaWduZWQgP1xuICAgICAgbG9jYWxDb250ZXh0LnRyYWNlKGBBc3NpZ25lZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eS5gKSA6XG4gICAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIGFzc2lnbiB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eS5gKTtcblxuICAgIHJldHVybiBlcXVhbGl0eUFzc2lnbmVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21FcXVhbGl0eShlcXVhbGl0eSkge1xuICAgIGNvbnN0IGVxdWFsaXR5QXNzaWdubWVudCA9IG5ldyBFcXVhbGl0eUFzc2lnbm1lbnQoZXF1YWxpdHkpO1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5QXNzaWdubWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkVxdWFsaXR5QXNzaWdubWVudCIsImVxdWFsaXR5IiwiZ2V0RXF1YWxpdHkiLCJhc3NpZ24iLCJsb2NhbENvbnRleHQiLCJlcXVhbGl0eUFkZGVkIiwiYWRkRXF1YWxpdHkiLCJlcXVhbGl0eVN0cmluZyIsImdldFN0cmluZyIsImVxdWFsaXR5QXNzaWduZWQiLCJ0cmFjZSIsImRlYnVnIiwiZnJvbUVxdWFsaXR5IiwiZXF1YWxpdHlBc3NpZ25tZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozs0REFGSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVILElBQUEsQUFBTUEsbUNBQU47YUFBTUEsbUJBQ1BDLFFBQVE7Z0NBREREO1FBRWpCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTs7a0JBRkNEOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxRQUFRO1lBQ3RCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLFlBQVk7Z0JBQ2pCLElBQU1DLGdCQUFnQkQsYUFBYUUsV0FBVyxDQUFDLElBQUksQ0FBQ0wsUUFBUSxFQUFFRyxlQUN4REcsaUJBQWlCLElBQUksQ0FBQ04sUUFBUSxDQUFDTyxTQUFTLElBQ3hDQyxtQkFBbUJKLGVBQWUsR0FBRztnQkFFM0NJLG1CQUNFTCxhQUFhTSxLQUFLLENBQUMsQUFBQyxpQkFBK0IsT0FBZkgsZ0JBQWUsa0JBQ2pESCxhQUFhTyxLQUFLLENBQUMsQUFBQyx5QkFBdUMsT0FBZkosZ0JBQWU7Z0JBRS9ELE9BQU9FO1lBQ1Q7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EsYUFBYVgsUUFBUTtnQkFDMUIsSUFBTVkscUJBQXFCLElBdEJWYixtQkFzQmlDQztnQkFFbEQsT0FBT1k7WUFDVDs7O1dBekJtQmIifQ==