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
                var equalityAdded = context.addEquality(this.equality), equalityNode = this.equality.getNode(), equalityString = context.nodeAsString(equalityNode), equalityAssigned = equalityAdded; ///
                equalityAssigned ? context.trace("Assigned the '".concat(equalityString, "' equality."), equalityNode) : context.debug("Unable to assign the '".concat(equalityString, "' equality."), equalityNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NpZ25tZW50L2VxdWFsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcXVhbGl0eUFzc2lnbm1lbnQge1xuICBjb25zdHJ1Y3RvcihlcXVhbGl0eSkge1xuICAgIHRoaXMuZXF1YWxpdHkgPSBlcXVhbGl0eTtcbiAgfVxuXG4gIGdldEVxdWFsaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmVxdWFsaXR5O1xuICB9XG5cbiAgYXNzaWduKGNvbnRleHQpIHtcbiAgICBjb25zdCBlcXVhbGl0eUFkZGVkID0gY29udGV4dC5hZGRFcXVhbGl0eSh0aGlzLmVxdWFsaXR5KSxcbiAgICAgICAgICBlcXVhbGl0eU5vZGUgPSB0aGlzLmVxdWFsaXR5LmdldE5vZGUoKSxcbiAgICAgICAgICBlcXVhbGl0eVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgZXF1YWxpdHlBc3NpZ25lZCA9IGVxdWFsaXR5QWRkZWQ7IC8vL1xuXG4gICAgZXF1YWxpdHlBc3NpZ25lZCA/XG4gICAgICBjb250ZXh0LnRyYWNlKGBBc3NpZ25lZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eS5gLCBlcXVhbGl0eU5vZGUpIDpcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIGFzc2lnbiB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eS5gLCBlcXVhbGl0eU5vZGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5QXNzaWduZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUVxdWFsaXR5KGVxdWFsaXR5KSB7XG4gICAgY29uc3QgZXF1YWxpdHlBc3NpZ25tZW50ID0gbmV3IEVxdWFsaXR5QXNzaWdubWVudChlcXVhbGl0eSk7XG5cbiAgICByZXR1cm4gZXF1YWxpdHlBc3NpZ25tZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRXF1YWxpdHlBc3NpZ25tZW50IiwiZXF1YWxpdHkiLCJnZXRFcXVhbGl0eSIsImFzc2lnbiIsImNvbnRleHQiLCJlcXVhbGl0eUFkZGVkIiwiYWRkRXF1YWxpdHkiLCJlcXVhbGl0eU5vZGUiLCJnZXROb2RlIiwiZXF1YWxpdHlTdHJpbmciLCJub2RlQXNTdHJpbmciLCJlcXVhbGl0eUFzc2lnbmVkIiwidHJhY2UiLCJkZWJ1ZyIsImZyb21FcXVhbGl0eSIsImVxdWFsaXR5QXNzaWdubWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSxtQ0FBRCxBQUFMO2FBQU1BLG1CQUNQQyxRQUFRO2dDQURERDtRQUVqQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7O2tCQUZDRDs7WUFLbkJFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsUUFBUTtZQUN0Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxPQUFPO2dCQUNaLElBQU1DLGdCQUFnQkQsUUFBUUUsV0FBVyxDQUFDLElBQUksQ0FBQ0wsUUFBUSxHQUNqRE0sZUFBZSxJQUFJLENBQUNOLFFBQVEsQ0FBQ08sT0FBTyxJQUNwQ0MsaUJBQWlCTCxRQUFRTSxZQUFZLENBQUNILGVBQ3RDSSxtQkFBbUJOLGVBQWUsR0FBRztnQkFFM0NNLG1CQUNFUCxRQUFRUSxLQUFLLENBQUMsQUFBQyxpQkFBK0IsT0FBZkgsZ0JBQWUsZ0JBQWNGLGdCQUMxREgsUUFBUVMsS0FBSyxDQUFDLEFBQUMseUJBQXVDLE9BQWZKLGdCQUFlLGdCQUFjRjtnQkFFeEUsT0FBT0k7WUFDVDs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxhQUFhYixRQUFRO2dCQUMxQixJQUFNYyxxQkFBcUIsSUF2QlZmLG1CQXVCaUNDO2dCQUVsRCxPQUFPYztZQUNUOzs7V0ExQm1CZiJ9