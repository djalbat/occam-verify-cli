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
function verifyStandaloneType(typeNode, fileContext, verifyAhead) {
    var standaloneTypeVerified = false;
    var typeString = fileContext.nodeAsString(typeNode);
    fileContext.trace("Verifying the '".concat(typeString, "' standalone type..."), typeNode);
    var typeName = (0, _query.typeNameFromTypeNode)(typeNode), typePresent = fileContext.isTypePresentByTypeName(typeName);
    if (!typePresent) {
        fileContext.debug("The type '".concat(typeName, "' is not present."), typeNode);
    } else {
        var verifiedAhead = verifyAhead();
        standaloneTypeVerified = verifiedAhead; ///
    }
    if (standaloneTypeVerified) {
        fileContext.debug("...verified the '".concat(typeString, "' standalone type."), typeNode);
    }
    return standaloneTypeVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4uL3R5cGVcIjtcblxuaW1wb3J0IHsgdHlwZU5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVR5cGUodHlwZU5vZGUsIHN1cGVyVHlwZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCB0eXBlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB0eXBlU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVOb2RlKTtcblxuICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmAsIHR5cGVOb2RlKTtcblxuICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgdHlwZVByZXNlbnQgPSBmaWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSB0eXBlICcke3R5cGVOYW1lfScgaXMgYWxyZWFkeSBwcmVzZW50LmAsIHR5cGVOb2RlKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGNvbnN0IHN1cGVyVHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZShzdXBlclR5cGVOb2RlKTtcblxuICAgIGlmIChzdXBlclR5cGVOYW1lID09PSBudWxsKSB7XG4gICAgICB0eXBlID0gVHlwZS5mcm9tVHlwZU5hbWUodHlwZU5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdXBlclR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUoc3VwZXJUeXBlTmFtZSk7XG5cbiAgICAgIGlmIChzdXBlclR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSBzdXBlci10eXBlICcke3N1cGVyVHlwZU5hbWV9JyBpcyBub3QgcHJlc2VudC5gLCB0eXBlTm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlID0gVHlwZS5mcm9tVHlwZU5hbWVBbmRTdXBlclR5cGUodHlwZU5hbWUsIHN1cGVyVHlwZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgIGZpbGVDb250ZXh0LmFkZFR5cGUodHlwZSk7XG5cbiAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVWZXJpZmllZCkge1xuICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCwgdHlwZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVN0YW5kYWxvbmVUeXBlKHR5cGVOb2RlLCBmaWxlQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHN0YW5kYWxvbmVUeXBlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB0eXBlU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVOb2RlKTtcblxuICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgc3RhbmRhbG9uZSB0eXBlLi4uYCwgdHlwZU5vZGUpO1xuXG4gIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICB0eXBlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSB0eXBlICcke3R5cGVOYW1lfScgaXMgbm90IHByZXNlbnQuYCwgdHlwZU5vZGUpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgc3RhbmRhbG9uZVR5cGVWZXJpZmllZCA9IHZlcmlmaWVkQWhlYWQ7ICAvLy9cblxuICB9XG5cbiAgaWYgKHN0YW5kYWxvbmVUeXBlVmVyaWZpZWQpIHtcbiAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVTdHJpbmd9JyBzdGFuZGFsb25lIHR5cGUuYCwgdHlwZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YW5kYWxvbmVUeXBlVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VHlwZSIsInZlcmlmeVN0YW5kYWxvbmVUeXBlIiwidHlwZU5vZGUiLCJzdXBlclR5cGVOb2RlIiwiZmlsZUNvbnRleHQiLCJ0eXBlVmVyaWZpZWQiLCJ0eXBlU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsImRlYnVnIiwidHlwZSIsInN1cGVyVHlwZU5hbWUiLCJUeXBlIiwiZnJvbVR5cGVOYW1lIiwic3VwZXJUeXBlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwiZnJvbVR5cGVOYW1lQW5kU3VwZXJUeXBlIiwiYWRkVHlwZSIsInZlcmlmeUFoZWFkIiwic3RhbmRhbG9uZVR5cGVWZXJpZmllZCIsInZlcmlmaWVkQWhlYWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQU1BLE9BeUNDO2VBekN1QkE7O0lBMkNSQyxvQkFBb0I7ZUFBcEJBOzs7MkRBL0NDO3FCQUVvQjs7Ozs7O0FBRXRCLFNBQVNELFdBQVdFLFFBQVEsRUFBRUMsYUFBYSxFQUFFQyxXQUFXO0lBQ3JFLElBQUlDLGVBQWU7SUFFbkIsSUFBTUMsYUFBYUYsWUFBWUcsWUFBWSxDQUFDTDtJQUU1Q0UsWUFBWUksS0FBSyxDQUFDLEFBQUMsa0JBQTRCLE9BQVhGLFlBQVcsY0FBWUo7SUFFM0QsSUFBTU8sV0FBV0MsSUFBQUEsMkJBQW9CLEVBQUNSLFdBQ2hDUyxjQUFjUCxZQUFZUSx1QkFBdUIsQ0FBQ0g7SUFFeEQsSUFBSUUsYUFBYTtRQUNmUCxZQUFZUyxLQUFLLENBQUMsQUFBQyxhQUFxQixPQUFUSixVQUFTLDBCQUF3QlA7SUFDbEUsT0FBTztRQUNMLElBQUlZO1FBRUosSUFBTUMsZ0JBQWdCTCxJQUFBQSwyQkFBb0IsRUFBQ1A7UUFFM0MsSUFBSVksa0JBQWtCLE1BQU07WUFDMUJELE9BQU9FLGFBQUksQ0FBQ0MsWUFBWSxDQUFDUjtRQUMzQixPQUFPO1lBQ0wsSUFBTVMsWUFBWWQsWUFBWWUsa0JBQWtCLENBQUNKO1lBRWpELElBQUlHLGNBQWMsTUFBTTtnQkFDdEJkLFlBQVlTLEtBQUssQ0FBQyxBQUFDLG1CQUFnQyxPQUFkRSxlQUFjLHNCQUFvQmI7WUFDekUsT0FBTztnQkFDTFksT0FBT0UsYUFBSSxDQUFDSSx3QkFBd0IsQ0FBQ1gsVUFBVVM7WUFDakQ7UUFDRjtRQUVBLElBQUlKLFNBQVMsTUFBTTtZQUNqQlYsWUFBWWlCLE9BQU8sQ0FBQ1A7WUFFcEJULGVBQWU7UUFDakI7SUFDRjtJQUVBLElBQUlBLGNBQWM7UUFDaEJELFlBQVlTLEtBQUssQ0FBQyxBQUFDLG9CQUE4QixPQUFYUCxZQUFXLFlBQVVKO0lBQzdEO0lBRUEsT0FBT0c7QUFDVDtBQUVPLFNBQVNKLHFCQUFxQkMsUUFBUSxFQUFFRSxXQUFXLEVBQUVrQixXQUFXO0lBQ3JFLElBQUlDLHlCQUF5QjtJQUU3QixJQUFNakIsYUFBYUYsWUFBWUcsWUFBWSxDQUFDTDtJQUU1Q0UsWUFBWUksS0FBSyxDQUFDLEFBQUMsa0JBQTRCLE9BQVhGLFlBQVcseUJBQXVCSjtJQUV0RSxJQUFNTyxXQUFXQyxJQUFBQSwyQkFBb0IsRUFBQ1IsV0FDaENTLGNBQWNQLFlBQVlRLHVCQUF1QixDQUFDSDtJQUV4RCxJQUFJLENBQUNFLGFBQWE7UUFDaEJQLFlBQVlTLEtBQUssQ0FBQyxBQUFDLGFBQXFCLE9BQVRKLFVBQVMsc0JBQW9CUDtJQUM5RCxPQUFPO1FBQ0wsSUFBTXNCLGdCQUFnQkY7UUFFdEJDLHlCQUF5QkMsZUFBZ0IsR0FBRztJQUU5QztJQUVBLElBQUlELHdCQUF3QjtRQUMxQm5CLFlBQVlTLEtBQUssQ0FBQyxBQUFDLG9CQUE4QixPQUFYUCxZQUFXLHVCQUFxQko7SUFDeEU7SUFFQSxPQUFPcUI7QUFDVCJ9