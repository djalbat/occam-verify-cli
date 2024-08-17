"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyGivenType;
    }
});
var _name = require("../utilities/name");
function verifyGivenType(typeNode, types, localContext, verifyAhead) {
    var givenTypeVerified = false;
    var typeString = localContext.nodeAsString(typeNode);
    localContext.trace("Verifying the given '".concat(typeString, "' type..."), typeNode);
    var typeName = (0, _name.typeNameFromTypeNode)(typeNode), type = localContext.findTypeByTypeName(typeName);
    if (type !== null) {
        var verifiedAhead;
        types.push(type);
        verifiedAhead = verifyAhead();
        if (!verifiedAhead) {
            types.pop();
        }
        givenTypeVerified = verifiedAhead; ///
    }
    if (givenTypeVerified) {
        localContext.debug("...verified the given '".concat(typeString, "' type."), typeNode);
    }
    return givenTypeVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZ2l2ZW5UeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB0eXBlTmFtZUZyb21UeXBlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbmFtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlHaXZlblR5cGUodHlwZU5vZGUsIHR5cGVzLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBnaXZlblR5cGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGVTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVOb2RlKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgZ2l2ZW4gJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gLCB0eXBlTm9kZSk7XG5cbiAgY29uc3QgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgIHR5cGUgPSBsb2NhbENvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgdHlwZXMucHVzaCh0eXBlKVxuXG4gICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICBpZiAoIXZlcmlmaWVkQWhlYWQpIHtcbiAgICAgIHR5cGVzLnBvcCgpO1xuICAgIH1cblxuICAgIGdpdmVuVHlwZVZlcmlmaWVkID0gdmVyaWZpZWRBaGVhZDsgLy8vXG4gIH1cblxuICBpZiAoZ2l2ZW5UeXBlVmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSBnaXZlbiAnJHt0eXBlU3RyaW5nfScgdHlwZS5gLCB0eXBlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gZ2l2ZW5UeXBlVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5R2l2ZW5UeXBlIiwidHlwZU5vZGUiLCJ0eXBlcyIsImxvY2FsQ29udGV4dCIsInZlcmlmeUFoZWFkIiwiZ2l2ZW5UeXBlVmVyaWZpZWQiLCJ0eXBlU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwidHlwZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInZlcmlmaWVkQWhlYWQiLCJwdXNoIiwicG9wIiwiZGVidWciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBd0JBOzs7b0JBRmE7QUFFdEIsU0FBU0EsZ0JBQWdCQyxRQUFRLEVBQUVDLEtBQUssRUFBRUMsWUFBWSxFQUFFQyxXQUFXO0lBQ2hGLElBQUlDLG9CQUFvQjtJQUV4QixJQUFNQyxhQUFhSCxhQUFhSSxZQUFZLENBQUNOO0lBRTdDRSxhQUFhSyxLQUFLLENBQUMsQUFBQyx3QkFBa0MsT0FBWEYsWUFBVyxjQUFZTDtJQUVsRSxJQUFNUSxXQUFXQyxJQUFBQSwwQkFBb0IsRUFBQ1QsV0FDaENVLE9BQU9SLGFBQWFTLGtCQUFrQixDQUFDSDtJQUU3QyxJQUFJRSxTQUFTLE1BQU07UUFDakIsSUFBSUU7UUFFSlgsTUFBTVksSUFBSSxDQUFDSDtRQUVYRSxnQkFBZ0JUO1FBRWhCLElBQUksQ0FBQ1MsZUFBZTtZQUNsQlgsTUFBTWEsR0FBRztRQUNYO1FBRUFWLG9CQUFvQlEsZUFBZSxHQUFHO0lBQ3hDO0lBRUEsSUFBSVIsbUJBQW1CO1FBQ3JCRixhQUFhYSxLQUFLLENBQUMsQUFBQywwQkFBb0MsT0FBWFYsWUFBVyxZQUFVTDtJQUNwRTtJQUVBLE9BQU9JO0FBQ1QifQ==