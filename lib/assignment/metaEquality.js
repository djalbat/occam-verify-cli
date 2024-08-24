"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MetaEqualityAssignment;
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
var MetaEqualityAssignment = /*#__PURE__*/ function() {
    function MetaEqualityAssignment(metaEquality) {
        _class_call_check(this, MetaEqualityAssignment);
        this.metaEquality = metaEquality;
    }
    _create_class(MetaEqualityAssignment, [
        {
            key: "getMetaEquality",
            value: function getMetaEquality() {
                return this.metaEquality;
            }
        },
        {
            key: "assign",
            value: function assign(localMetaContext) {
                var metaEqualityAdded = localMetaContext.addMetaEquality(this.metaEquality), metaEqualityNode = this.metaEquality.getNode(), metaEqualityString = localMetaContext.nodeAsString(metaEqualityNode), metaEqualityAssigned = metaEqualityAdded; ///
                metaEqualityAssigned ? localMetaContext.trace("Assigned the '".concat(metaEqualityString, "' meta-equality."), metaEqualityNode) : localMetaContext.debug("Unable to assign the '".concat(metaEqualityString, "' meta-equality."), metaEqualityNode);
                return metaEqualityAssigned;
            }
        }
    ], [
        {
            key: "fromMetaEquality",
            value: function fromMetaEquality(metaEquality) {
                var metaEqualityAssignment = new MetaEqualityAssignment(metaEquality);
                return metaEqualityAssignment;
            }
        }
    ]);
    return MetaEqualityAssignment;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NpZ25tZW50L21ldGFFcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YUVxdWFsaXR5QXNzaWdubWVudCB7XG4gIGNvbnN0cnVjdG9yKG1ldGFFcXVhbGl0eSkge1xuICAgIHRoaXMubWV0YUVxdWFsaXR5ID0gbWV0YUVxdWFsaXR5O1xuICB9XG5cbiAgZ2V0TWV0YUVxdWFsaXR5KCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFFcXVhbGl0eTtcbiAgfVxuXG4gIGFzc2lnbihsb2NhbE1ldGFDb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YUVxdWFsaXR5QWRkZWQgPSBsb2NhbE1ldGFDb250ZXh0LmFkZE1ldGFFcXVhbGl0eSh0aGlzLm1ldGFFcXVhbGl0eSksXG4gICAgICAgICAgbWV0YUVxdWFsaXR5Tm9kZSA9IHRoaXMubWV0YUVxdWFsaXR5LmdldE5vZGUoKSxcbiAgICAgICAgICBtZXRhRXF1YWxpdHlTdHJpbmcgPSBsb2NhbE1ldGFDb250ZXh0Lm5vZGVBc1N0cmluZyhtZXRhRXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICBtZXRhRXF1YWxpdHlBc3NpZ25lZCA9IG1ldGFFcXVhbGl0eUFkZGVkOyAvLy9cblxuICAgIG1ldGFFcXVhbGl0eUFzc2lnbmVkID9cbiAgICAgIGxvY2FsTWV0YUNvbnRleHQudHJhY2UoYEFzc2lnbmVkIHRoZSAnJHttZXRhRXF1YWxpdHlTdHJpbmd9JyBtZXRhLWVxdWFsaXR5LmAsIG1ldGFFcXVhbGl0eU5vZGUpIDpcbiAgICAgICAgbG9jYWxNZXRhQ29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIGFzc2lnbiB0aGUgJyR7bWV0YUVxdWFsaXR5U3RyaW5nfScgbWV0YS1lcXVhbGl0eS5gLCBtZXRhRXF1YWxpdHlOb2RlKTtcblxuICAgIHJldHVybiBtZXRhRXF1YWxpdHlBc3NpZ25lZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YUVxdWFsaXR5KG1ldGFFcXVhbGl0eSkge1xuICAgIGNvbnN0IG1ldGFFcXVhbGl0eUFzc2lnbm1lbnQgPSBuZXcgTWV0YUVxdWFsaXR5QXNzaWdubWVudChtZXRhRXF1YWxpdHkpO1xuXG4gICAgcmV0dXJuIG1ldGFFcXVhbGl0eUFzc2lnbm1lbnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJNZXRhRXF1YWxpdHlBc3NpZ25tZW50IiwibWV0YUVxdWFsaXR5IiwiZ2V0TWV0YUVxdWFsaXR5IiwiYXNzaWduIiwibG9jYWxNZXRhQ29udGV4dCIsIm1ldGFFcXVhbGl0eUFkZGVkIiwiYWRkTWV0YUVxdWFsaXR5IiwibWV0YUVxdWFsaXR5Tm9kZSIsImdldE5vZGUiLCJtZXRhRXF1YWxpdHlTdHJpbmciLCJub2RlQXNTdHJpbmciLCJtZXRhRXF1YWxpdHlBc3NpZ25lZCIsInRyYWNlIiwiZGVidWciLCJmcm9tTWV0YUVxdWFsaXR5IiwibWV0YUVxdWFsaXR5QXNzaWdubWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSx1Q0FBRCxBQUFMO2FBQU1BLHVCQUNQQyxZQUFZO2dDQURMRDtRQUVqQixJQUFJLENBQUNDLFlBQVksR0FBR0E7O2tCQUZIRDs7WUFLbkJFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsWUFBWTtZQUMxQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxnQkFBZ0I7Z0JBQ3JCLElBQU1DLG9CQUFvQkQsaUJBQWlCRSxlQUFlLENBQUMsSUFBSSxDQUFDTCxZQUFZLEdBQ3RFTSxtQkFBbUIsSUFBSSxDQUFDTixZQUFZLENBQUNPLE9BQU8sSUFDNUNDLHFCQUFxQkwsaUJBQWlCTSxZQUFZLENBQUNILG1CQUNuREksdUJBQXVCTixtQkFBbUIsR0FBRztnQkFFbkRNLHVCQUNFUCxpQkFBaUJRLEtBQUssQ0FBQyxBQUFDLGlCQUFtQyxPQUFuQkgsb0JBQW1CLHFCQUFtQkYsb0JBQzVFSCxpQkFBaUJTLEtBQUssQ0FBQyxBQUFDLHlCQUEyQyxPQUFuQkosb0JBQW1CLHFCQUFtQkY7Z0JBRTFGLE9BQU9JO1lBQ1Q7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EsaUJBQWlCYixZQUFZO2dCQUNsQyxJQUFNYyx5QkFBeUIsSUF2QmRmLHVCQXVCeUNDO2dCQUUxRCxPQUFPYztZQUNUOzs7V0ExQm1CZiJ9