"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyType;
    }
});
var _type = /*#__PURE__*/ _interop_require_default(require("../type"));
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyType(typeNode, superTypeNode, fileContext) {
    var typeVerified = false;
    var typeString = fileContext.nodeAsString(typeNode);
    fileContext.trace("Verifying the '".concat(typeString, "' type."));
    var typeName = (0, _query.typeNameFromTypeNode)(typeNode), typePresent = fileContext.isTypePresentByTypeName(typeName);
    if (typePresent) {
        fileContext.debug("The type '".concat(typeName, "' is already present."), typeNode);
    } else {
        var type;
        var superTypeName = (0, _query.typeNameFromTypeNode)(superTypeNode);
        if (superTypeName === null) {
            type = _type.default.fromTypeName(typeName);
        } else {
            var superType = fileContext.findTypeByTypeName(superTypeName);
            if (superType === null) {
                fileContext.debug("The super-type '".concat(superTypeName, "' is not present."), typeNode);
            } else {
                type = _type.default.fromTypeNameAndSuperType(typeName, superType);
            }
        }
        if (type !== null) {
            fileContext.addType(type);
            typeVerified = true;
        }
    }
    if (typeVerified) {
        fileContext.debug("...verified the '".concat(typeString, "' type."), typeNode);
    }
    return typeVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4uL3R5cGVcIjtcblxuaW1wb3J0IHsgdHlwZU5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVR5cGUodHlwZU5vZGUsIHN1cGVyVHlwZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCB0eXBlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB0eXBlU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVOb2RlKTtcblxuICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcblxuICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgdHlwZVByZXNlbnQgPSBmaWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSB0eXBlICcke3R5cGVOYW1lfScgaXMgYWxyZWFkeSBwcmVzZW50LmAsIHR5cGVOb2RlKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGNvbnN0IHN1cGVyVHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZShzdXBlclR5cGVOb2RlKTtcblxuICAgIGlmIChzdXBlclR5cGVOYW1lID09PSBudWxsKSB7XG4gICAgICB0eXBlID0gVHlwZS5mcm9tVHlwZU5hbWUodHlwZU5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdXBlclR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUoc3VwZXJUeXBlTmFtZSk7XG5cbiAgICAgIGlmIChzdXBlclR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSBzdXBlci10eXBlICcke3N1cGVyVHlwZU5hbWV9JyBpcyBub3QgcHJlc2VudC5gLCB0eXBlTm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlID0gVHlwZS5mcm9tVHlwZU5hbWVBbmRTdXBlclR5cGUodHlwZU5hbWUsIHN1cGVyVHlwZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgIGZpbGVDb250ZXh0LmFkZFR5cGUodHlwZSk7XG5cbiAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVWZXJpZmllZCkge1xuICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCwgdHlwZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUeXBlIiwidHlwZU5vZGUiLCJzdXBlclR5cGVOb2RlIiwiZmlsZUNvbnRleHQiLCJ0eXBlVmVyaWZpZWQiLCJ0eXBlU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsImRlYnVnIiwidHlwZSIsInN1cGVyVHlwZU5hbWUiLCJUeXBlIiwiZnJvbVR5cGVOYW1lIiwic3VwZXJUeXBlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwiZnJvbVR5cGVOYW1lQW5kU3VwZXJUeXBlIiwiYWRkVHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUF3QkE7OzsyREFKUDtxQkFFb0I7Ozs7OztBQUV0QixTQUFTQSxXQUFXQyxRQUFRLEVBQUVDLGFBQWEsRUFBRUMsV0FBVztJQUNyRSxJQUFJQyxlQUFlO0lBRW5CLElBQU1DLGFBQWFGLFlBQVlHLFlBQVksQ0FBQ0w7SUFFNUNFLFlBQVlJLEtBQUssQ0FBQyxBQUFDLGtCQUE0QixPQUFYRixZQUFXO0lBRS9DLElBQU1HLFdBQVdDLElBQUFBLDJCQUFvQixFQUFDUixXQUNoQ1MsY0FBY1AsWUFBWVEsdUJBQXVCLENBQUNIO0lBRXhELElBQUlFLGFBQWE7UUFDZlAsWUFBWVMsS0FBSyxDQUFDLEFBQUMsYUFBcUIsT0FBVEosVUFBUywwQkFBd0JQO0lBQ2xFLE9BQU87UUFDTCxJQUFJWTtRQUVKLElBQU1DLGdCQUFnQkwsSUFBQUEsMkJBQW9CLEVBQUNQO1FBRTNDLElBQUlZLGtCQUFrQixNQUFNO1lBQzFCRCxPQUFPRSxhQUFJLENBQUNDLFlBQVksQ0FBQ1I7UUFDM0IsT0FBTztZQUNMLElBQU1TLFlBQVlkLFlBQVllLGtCQUFrQixDQUFDSjtZQUVqRCxJQUFJRyxjQUFjLE1BQU07Z0JBQ3RCZCxZQUFZUyxLQUFLLENBQUMsQUFBQyxtQkFBZ0MsT0FBZEUsZUFBYyxzQkFBb0JiO1lBQ3pFLE9BQU87Z0JBQ0xZLE9BQU9FLGFBQUksQ0FBQ0ksd0JBQXdCLENBQUNYLFVBQVVTO1lBQ2pEO1FBQ0Y7UUFFQSxJQUFJSixTQUFTLE1BQU07WUFDakJWLFlBQVlpQixPQUFPLENBQUNQO1lBRXBCVCxlQUFlO1FBQ2pCO0lBQ0Y7SUFFQSxJQUFJQSxjQUFjO1FBQ2hCRCxZQUFZUyxLQUFLLENBQUMsQUFBQyxvQkFBOEIsT0FBWFAsWUFBVyxZQUFVSjtJQUM3RDtJQUVBLE9BQU9HO0FBQ1QifQ==