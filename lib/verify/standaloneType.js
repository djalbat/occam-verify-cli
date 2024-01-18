"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyStandaloneType;
    }
});
var _query = require("../utilities/query");
function verifyStandaloneType(typeNode, types, context, verifyAhead) {
    var standaloneTypeVerified = false;
    var typeString = context.nodeAsString(typeNode);
    context.trace("Verifying the standalone '".concat(typeString, "' type..."), typeNode);
    var typeName = (0, _query.typeNameFromTypeNode)(typeNode), type = context.findTypeByTypeName(typeName);
    if (type !== null) {
        var verifiedAhead;
        types.push(type);
        verifiedAhead = verifyAhead();
        if (!verifiedAhead) {
            types.pop();
        }
        standaloneTypeVerified = verifiedAhead; ///
    }
    if (standaloneTypeVerified) {
        context.debug("...verified the standalone '".concat(typeString, "' type."), typeNode);
    }
    return standaloneTypeVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhbmRhbG9uZVR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHR5cGVOYW1lRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlTdGFuZGFsb25lVHlwZSh0eXBlTm9kZSwgdHlwZXMsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBzdGFuZGFsb25lVHlwZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgdHlwZVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVOb2RlKTtcblxuICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlIHN0YW5kYWxvbmUgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gLCB0eXBlTm9kZSk7XG5cbiAgY29uc3QgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgIHR5cGVzLnB1c2godHlwZSlcblxuICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgaWYgKCF2ZXJpZmllZEFoZWFkKSB7XG4gICAgICB0eXBlcy5wb3AoKTtcbiAgICB9XG5cbiAgICBzdGFuZGFsb25lVHlwZVZlcmlmaWVkID0gdmVyaWZpZWRBaGVhZDsgLy8vXG4gIH1cblxuICBpZiAoc3RhbmRhbG9uZVR5cGVWZXJpZmllZCkge1xuICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSBzdGFuZGFsb25lICcke3R5cGVTdHJpbmd9JyB0eXBlLmAsIHR5cGVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBzdGFuZGFsb25lVHlwZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVN0YW5kYWxvbmVUeXBlIiwidHlwZU5vZGUiLCJ0eXBlcyIsImNvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsInN0YW5kYWxvbmVUeXBlVmVyaWZpZWQiLCJ0eXBlU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwidHlwZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInZlcmlmaWVkQWhlYWQiLCJwdXNoIiwicG9wIiwiZGVidWciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBd0JBOzs7cUJBRmE7QUFFdEIsU0FBU0EscUJBQXFCQyxRQUFRLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxXQUFXO0lBQ2hGLElBQUlDLHlCQUF5QjtJQUU3QixJQUFNQyxhQUFhSCxRQUFRSSxZQUFZLENBQUNOO0lBRXhDRSxRQUFRSyxLQUFLLENBQUMsQUFBQyw2QkFBdUMsT0FBWEYsWUFBVyxjQUFZTDtJQUVsRSxJQUFNUSxXQUFXQyxJQUFBQSwyQkFBb0IsRUFBQ1QsV0FDaENVLE9BQU9SLFFBQVFTLGtCQUFrQixDQUFDSDtJQUV4QyxJQUFJRSxTQUFTLE1BQU07UUFDakIsSUFBSUU7UUFFSlgsTUFBTVksSUFBSSxDQUFDSDtRQUVYRSxnQkFBZ0JUO1FBRWhCLElBQUksQ0FBQ1MsZUFBZTtZQUNsQlgsTUFBTWEsR0FBRztRQUNYO1FBRUFWLHlCQUF5QlEsZUFBZSxHQUFHO0lBQzdDO0lBRUEsSUFBSVIsd0JBQXdCO1FBQzFCRixRQUFRYSxLQUFLLENBQUMsQUFBQywrQkFBeUMsT0FBWFYsWUFBVyxZQUFVTDtJQUNwRTtJQUVBLE9BQU9JO0FBQ1QifQ==