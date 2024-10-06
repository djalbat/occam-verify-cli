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
                var equalityAdded = localContext.addEquality(this.equality), equalityString = this.equality.getString(), equalityAssigned = equalityAdded; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NpZ25tZW50L2VxdWFsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcXVhbGl0eUFzc2lnbm1lbnQge1xuICBjb25zdHJ1Y3RvcihlcXVhbGl0eSkge1xuICAgIHRoaXMuZXF1YWxpdHkgPSBlcXVhbGl0eTtcbiAgfVxuXG4gIGdldEVxdWFsaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmVxdWFsaXR5O1xuICB9XG5cbiAgYXNzaWduKGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IGVxdWFsaXR5QWRkZWQgPSBsb2NhbENvbnRleHQuYWRkRXF1YWxpdHkodGhpcy5lcXVhbGl0eSksXG4gICAgICAgICAgZXF1YWxpdHlTdHJpbmcgPSB0aGlzLmVxdWFsaXR5LmdldFN0cmluZygpLFxuICAgICAgICAgIGVxdWFsaXR5QXNzaWduZWQgPSBlcXVhbGl0eUFkZGVkOyAvLy9cblxuICAgIGVxdWFsaXR5QXNzaWduZWQgP1xuICAgICAgbG9jYWxDb250ZXh0LnRyYWNlKGBBc3NpZ25lZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eS5gKSA6XG4gICAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIGFzc2lnbiB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eS5gKTtcblxuICAgIHJldHVybiBlcXVhbGl0eUFzc2lnbmVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21FcXVhbGl0eShlcXVhbGl0eSkge1xuICAgIGNvbnN0IGVxdWFsaXR5QXNzaWdubWVudCA9IG5ldyBFcXVhbGl0eUFzc2lnbm1lbnQoZXF1YWxpdHkpO1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5QXNzaWdubWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkVxdWFsaXR5QXNzaWdubWVudCIsImVxdWFsaXR5IiwiZ2V0RXF1YWxpdHkiLCJhc3NpZ24iLCJsb2NhbENvbnRleHQiLCJlcXVhbGl0eUFkZGVkIiwiYWRkRXF1YWxpdHkiLCJlcXVhbGl0eVN0cmluZyIsImdldFN0cmluZyIsImVxdWFsaXR5QXNzaWduZWQiLCJ0cmFjZSIsImRlYnVnIiwiZnJvbUVxdWFsaXR5IiwiZXF1YWxpdHlBc3NpZ25tZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixJQUFBLEFBQU1BLG1DQUFOO2FBQU1BLG1CQUNQQyxRQUFRO2dDQURERDtRQUVqQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7O2tCQUZDRDs7WUFLbkJFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsUUFBUTtZQUN0Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxZQUFZO2dCQUNqQixJQUFNQyxnQkFBZ0JELGFBQWFFLFdBQVcsQ0FBQyxJQUFJLENBQUNMLFFBQVEsR0FDdERNLGlCQUFpQixJQUFJLENBQUNOLFFBQVEsQ0FBQ08sU0FBUyxJQUN4Q0MsbUJBQW1CSixlQUFlLEdBQUc7Z0JBRTNDSSxtQkFDRUwsYUFBYU0sS0FBSyxDQUFDLEFBQUMsaUJBQStCLE9BQWZILGdCQUFlLGtCQUNqREgsYUFBYU8sS0FBSyxDQUFDLEFBQUMseUJBQXVDLE9BQWZKLGdCQUFlO2dCQUUvRCxPQUFPRTtZQUNUOzs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BLGFBQWFYLFFBQVE7Z0JBQzFCLElBQU1ZLHFCQUFxQixJQXRCVmIsbUJBc0JpQ0M7Z0JBRWxELE9BQU9ZO1lBQ1Q7OztXQXpCbUJiIn0=