"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return verifyType;
    },
    verifyStandaloneType: function() {
        return verifyStandaloneType;
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
    fileContext.trace("Verifying the '".concat(typeString, "' type..."), typeNode);
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
function verifyStandaloneType(typeNode, context, verifyAhead) {
    var standaloneTypeVerified = false;
    var typeString = context.nodeAsString(typeNode);
    context.trace("Verifying the '".concat(typeString, "' standalone type..."), typeNode);
    var typeName = (0, _query.typeNameFromTypeNode)(typeNode), typePresent = context.isTypePresentByTypeName(typeName);
    if (!typePresent) {
        context.debug("The type '".concat(typeName, "' is not present."), typeNode);
    } else {
        var verifiedAhead = verifyAhead();
        standaloneTypeVerified = verifiedAhead; ///
    }
    if (standaloneTypeVerified) {
        context.debug("...verified the '".concat(typeString, "' standalone type."), typeNode);
    }
    return standaloneTypeVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4uL3R5cGVcIjtcblxuaW1wb3J0IHsgdHlwZU5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVR5cGUodHlwZU5vZGUsIHN1cGVyVHlwZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCB0eXBlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB0eXBlU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVOb2RlKTtcblxuICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmAsIHR5cGVOb2RlKTtcblxuICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgdHlwZVByZXNlbnQgPSBmaWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSB0eXBlICcke3R5cGVOYW1lfScgaXMgYWxyZWFkeSBwcmVzZW50LmAsIHR5cGVOb2RlKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGNvbnN0IHN1cGVyVHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZShzdXBlclR5cGVOb2RlKTtcblxuICAgIGlmIChzdXBlclR5cGVOYW1lID09PSBudWxsKSB7XG4gICAgICB0eXBlID0gVHlwZS5mcm9tVHlwZU5hbWUodHlwZU5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdXBlclR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUoc3VwZXJUeXBlTmFtZSk7XG5cbiAgICAgIGlmIChzdXBlclR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSBzdXBlci10eXBlICcke3N1cGVyVHlwZU5hbWV9JyBpcyBub3QgcHJlc2VudC5gLCB0eXBlTm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlID0gVHlwZS5mcm9tVHlwZU5hbWVBbmRTdXBlclR5cGUodHlwZU5hbWUsIHN1cGVyVHlwZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgIGZpbGVDb250ZXh0LmFkZFR5cGUodHlwZSk7XG5cbiAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVWZXJpZmllZCkge1xuICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCwgdHlwZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVN0YW5kYWxvbmVUeXBlKHR5cGVOb2RlLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgc3RhbmRhbG9uZVR5cGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGVTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlTm9kZSk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgc3RhbmRhbG9uZSB0eXBlLi4uYCwgdHlwZU5vZGUpO1xuXG4gIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gIGlmICghdHlwZVByZXNlbnQpIHtcbiAgICBjb250ZXh0LmRlYnVnKGBUaGUgdHlwZSAnJHt0eXBlTmFtZX0nIGlzIG5vdCBwcmVzZW50LmAsIHR5cGVOb2RlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgIHN0YW5kYWxvbmVUeXBlVmVyaWZpZWQgPSB2ZXJpZmllZEFoZWFkOyAgLy8vXG4gIH1cblxuICBpZiAoc3RhbmRhbG9uZVR5cGVWZXJpZmllZCkge1xuICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgc3RhbmRhbG9uZSB0eXBlLmAsIHR5cGVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBzdGFuZGFsb25lVHlwZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVR5cGUiLCJ2ZXJpZnlTdGFuZGFsb25lVHlwZSIsInR5cGVOb2RlIiwic3VwZXJUeXBlTm9kZSIsImZpbGVDb250ZXh0IiwidHlwZVZlcmlmaWVkIiwidHlwZVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwidHlwZU5hbWUiLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJkZWJ1ZyIsInR5cGUiLCJzdXBlclR5cGVOYW1lIiwiVHlwZSIsImZyb21UeXBlTmFtZSIsInN1cGVyVHlwZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsImZyb21UeXBlTmFtZUFuZFN1cGVyVHlwZSIsImFkZFR5cGUiLCJjb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJzdGFuZGFsb25lVHlwZVZlcmlmaWVkIiwidmVyaWZpZWRBaGVhZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBTUEsT0F5Q0M7ZUF6Q3VCQTs7SUEyQ1JDLG9CQUFvQjtlQUFwQkE7OzsyREEvQ0M7cUJBRW9COzs7Ozs7QUFFdEIsU0FBU0QsV0FBV0UsUUFBUSxFQUFFQyxhQUFhLEVBQUVDLFdBQVc7SUFDckUsSUFBSUMsZUFBZTtJQUVuQixJQUFNQyxhQUFhRixZQUFZRyxZQUFZLENBQUNMO0lBRTVDRSxZQUFZSSxLQUFLLENBQUMsQUFBQyxrQkFBNEIsT0FBWEYsWUFBVyxjQUFZSjtJQUUzRCxJQUFNTyxXQUFXQyxJQUFBQSwyQkFBb0IsRUFBQ1IsV0FDaENTLGNBQWNQLFlBQVlRLHVCQUF1QixDQUFDSDtJQUV4RCxJQUFJRSxhQUFhO1FBQ2ZQLFlBQVlTLEtBQUssQ0FBQyxBQUFDLGFBQXFCLE9BQVRKLFVBQVMsMEJBQXdCUDtJQUNsRSxPQUFPO1FBQ0wsSUFBSVk7UUFFSixJQUFNQyxnQkFBZ0JMLElBQUFBLDJCQUFvQixFQUFDUDtRQUUzQyxJQUFJWSxrQkFBa0IsTUFBTTtZQUMxQkQsT0FBT0UsYUFBSSxDQUFDQyxZQUFZLENBQUNSO1FBQzNCLE9BQU87WUFDTCxJQUFNUyxZQUFZZCxZQUFZZSxrQkFBa0IsQ0FBQ0o7WUFFakQsSUFBSUcsY0FBYyxNQUFNO2dCQUN0QmQsWUFBWVMsS0FBSyxDQUFDLEFBQUMsbUJBQWdDLE9BQWRFLGVBQWMsc0JBQW9CYjtZQUN6RSxPQUFPO2dCQUNMWSxPQUFPRSxhQUFJLENBQUNJLHdCQUF3QixDQUFDWCxVQUFVUztZQUNqRDtRQUNGO1FBRUEsSUFBSUosU0FBUyxNQUFNO1lBQ2pCVixZQUFZaUIsT0FBTyxDQUFDUDtZQUVwQlQsZUFBZTtRQUNqQjtJQUNGO0lBRUEsSUFBSUEsY0FBYztRQUNoQkQsWUFBWVMsS0FBSyxDQUFDLEFBQUMsb0JBQThCLE9BQVhQLFlBQVcsWUFBVUo7SUFDN0Q7SUFFQSxPQUFPRztBQUNUO0FBRU8sU0FBU0oscUJBQXFCQyxRQUFRLEVBQUVvQixPQUFPLEVBQUVDLFdBQVc7SUFDakUsSUFBSUMseUJBQXlCO0lBRTdCLElBQU1sQixhQUFhZ0IsUUFBUWYsWUFBWSxDQUFDTDtJQUV4Q29CLFFBQVFkLEtBQUssQ0FBQyxBQUFDLGtCQUE0QixPQUFYRixZQUFXLHlCQUF1Qko7SUFFbEUsSUFBTU8sV0FBV0MsSUFBQUEsMkJBQW9CLEVBQUNSLFdBQ2hDUyxjQUFjVyxRQUFRVix1QkFBdUIsQ0FBQ0g7SUFFcEQsSUFBSSxDQUFDRSxhQUFhO1FBQ2hCVyxRQUFRVCxLQUFLLENBQUMsQUFBQyxhQUFxQixPQUFUSixVQUFTLHNCQUFvQlA7SUFDMUQsT0FBTztRQUNMLElBQU11QixnQkFBZ0JGO1FBRXRCQyx5QkFBeUJDLGVBQWdCLEdBQUc7SUFDOUM7SUFFQSxJQUFJRCx3QkFBd0I7UUFDMUJGLFFBQVFULEtBQUssQ0FBQyxBQUFDLG9CQUE4QixPQUFYUCxZQUFXLHVCQUFxQko7SUFDcEU7SUFFQSxPQUFPc0I7QUFDVCJ9