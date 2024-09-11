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
                var equalityAdded = localContext.addEquality(this.equality), equalityNode = this.equality.getNode(), equalityString = localContext.nodeAsString(equalityNode), equalityAssigned = equalityAdded; ///
                equalityAssigned ? localContext.trace("Assigned the '".concat(equalityString, "' equality."), equalityNode) : localContext.debug("Unable to assign the '".concat(equalityString, "' equality."), equalityNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NpZ25tZW50L2VxdWFsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcXVhbGl0eUFzc2lnbm1lbnQge1xuICBjb25zdHJ1Y3RvcihlcXVhbGl0eSkge1xuICAgIHRoaXMuZXF1YWxpdHkgPSBlcXVhbGl0eTtcbiAgfVxuXG4gIGdldEVxdWFsaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmVxdWFsaXR5O1xuICB9XG5cbiAgYXNzaWduKGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IGVxdWFsaXR5QWRkZWQgPSBsb2NhbENvbnRleHQuYWRkRXF1YWxpdHkodGhpcy5lcXVhbGl0eSksXG4gICAgICAgICAgZXF1YWxpdHlOb2RlID0gdGhpcy5lcXVhbGl0eS5nZXROb2RlKCksXG4gICAgICAgICAgZXF1YWxpdHlTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgZXF1YWxpdHlBc3NpZ25lZCA9IGVxdWFsaXR5QWRkZWQ7IC8vL1xuXG4gICAgZXF1YWxpdHlBc3NpZ25lZCA/XG4gICAgICBsb2NhbENvbnRleHQudHJhY2UoYEFzc2lnbmVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5LmAsIGVxdWFsaXR5Tm9kZSkgOlxuICAgICAgICBsb2NhbENvbnRleHQuZGVidWcoYFVuYWJsZSB0byBhc3NpZ24gdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkuYCwgZXF1YWxpdHlOb2RlKTtcblxuICAgIHJldHVybiBlcXVhbGl0eUFzc2lnbmVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21FcXVhbGl0eShlcXVhbGl0eSkge1xuICAgIGNvbnN0IGVxdWFsaXR5QXNzaWdubWVudCA9IG5ldyBFcXVhbGl0eUFzc2lnbm1lbnQoZXF1YWxpdHkpO1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5QXNzaWdubWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkVxdWFsaXR5QXNzaWdubWVudCIsImVxdWFsaXR5IiwiZ2V0RXF1YWxpdHkiLCJhc3NpZ24iLCJsb2NhbENvbnRleHQiLCJlcXVhbGl0eUFkZGVkIiwiYWRkRXF1YWxpdHkiLCJlcXVhbGl0eU5vZGUiLCJnZXROb2RlIiwiZXF1YWxpdHlTdHJpbmciLCJub2RlQXNTdHJpbmciLCJlcXVhbGl0eUFzc2lnbmVkIiwidHJhY2UiLCJkZWJ1ZyIsImZyb21FcXVhbGl0eSIsImVxdWFsaXR5QXNzaWdubWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSxtQ0FBTjthQUFNQSxtQkFDUEMsUUFBUTtnQ0FEREQ7UUFFakIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBOztrQkFGQ0Q7O1lBS25CRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFFBQVE7WUFDdEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsWUFBWTtnQkFDakIsSUFBTUMsZ0JBQWdCRCxhQUFhRSxXQUFXLENBQUMsSUFBSSxDQUFDTCxRQUFRLEdBQ3RETSxlQUFlLElBQUksQ0FBQ04sUUFBUSxDQUFDTyxPQUFPLElBQ3BDQyxpQkFBaUJMLGFBQWFNLFlBQVksQ0FBQ0gsZUFDM0NJLG1CQUFtQk4sZUFBZSxHQUFHO2dCQUUzQ00sbUJBQ0VQLGFBQWFRLEtBQUssQ0FBQyxBQUFDLGlCQUErQixPQUFmSCxnQkFBZSxnQkFBY0YsZ0JBQy9ESCxhQUFhUyxLQUFLLENBQUMsQUFBQyx5QkFBdUMsT0FBZkosZ0JBQWUsZ0JBQWNGO2dCQUU3RSxPQUFPSTtZQUNUOzs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BLGFBQWFiLFFBQVE7Z0JBQzFCLElBQU1jLHFCQUFxQixJQXZCVmYsbUJBdUJpQ0M7Z0JBRWxELE9BQU9jO1lBQ1Q7OztXQTFCbUJmIn0=