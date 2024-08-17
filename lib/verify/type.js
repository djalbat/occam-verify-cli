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
var _name = require("../utilities/name");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyType(typeNode, superTypeNode, fileContext) {
    var typeVerified = false;
    var typeString = fileContext.nodeAsString(typeNode);
    fileContext.trace("Verifying the '".concat(typeString, "' type..."), typeNode);
    var typeName = (0, _name.typeNameFromTypeNode)(typeNode), typePresent = fileContext.isTypePresentByTypeName(typeName);
    if (typePresent) {
        fileContext.debug("The type '".concat(typeName, "' is already present."), typeNode);
    } else {
        var type;
        var superTypeName = (0, _name.typeNameFromTypeNode)(superTypeNode);
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
    var typeName = (0, _name.typeNameFromTypeNode)(typeNode), typePresent = fileContext.isTypePresentByTypeName(typeName);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4uL3R5cGVcIjtcblxuaW1wb3J0IHsgdHlwZU5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25hbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VHlwZSh0eXBlTm9kZSwgc3VwZXJUeXBlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHR5cGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGVTdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcodHlwZU5vZGUpO1xuXG4gIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLi4uYCwgdHlwZU5vZGUpO1xuXG4gIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICB0eXBlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlIHR5cGUgJyR7dHlwZU5hbWV9JyBpcyBhbHJlYWR5IHByZXNlbnQuYCwgdHlwZU5vZGUpO1xuICB9IGVsc2Uge1xuICAgIGxldCB0eXBlO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHN1cGVyVHlwZU5vZGUpO1xuXG4gICAgaWYgKHN1cGVyVHlwZU5hbWUgPT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBUeXBlLmZyb21UeXBlTmFtZSh0eXBlTmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShzdXBlclR5cGVOYW1lKTtcblxuICAgICAgaWYgKHN1cGVyVHlwZSA9PT0gbnVsbCkge1xuICAgICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlIHN1cGVyLXR5cGUgJyR7c3VwZXJUeXBlTmFtZX0nIGlzIG5vdCBwcmVzZW50LmAsIHR5cGVOb2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGUgPSBUeXBlLmZyb21UeXBlTmFtZUFuZFN1cGVyVHlwZSh0eXBlTmFtZSwgc3VwZXJUeXBlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgZmlsZUNvbnRleHQuYWRkVHlwZSh0eXBlKTtcblxuICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gLCB0eXBlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdHlwZVZlcmlmaWVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5U3RhbmRhbG9uZVR5cGUodHlwZU5vZGUsIGZpbGVDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgc3RhbmRhbG9uZVR5cGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGVTdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcodHlwZU5vZGUpO1xuXG4gIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVTdHJpbmd9JyBzdGFuZGFsb25lIHR5cGUuLi5gLCB0eXBlTm9kZSk7XG5cbiAgY29uc3QgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgIHR5cGVQcmVzZW50ID0gZmlsZUNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gIGlmICghdHlwZVByZXNlbnQpIHtcbiAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlIHR5cGUgJyR7dHlwZU5hbWV9JyBpcyBub3QgcHJlc2VudC5gLCB0eXBlTm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICBzdGFuZGFsb25lVHlwZVZlcmlmaWVkID0gdmVyaWZpZWRBaGVhZDsgIC8vL1xuICB9XG5cbiAgaWYgKHN0YW5kYWxvbmVUeXBlVmVyaWZpZWQpIHtcbiAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVTdHJpbmd9JyBzdGFuZGFsb25lIHR5cGUuYCwgdHlwZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YW5kYWxvbmVUeXBlVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VHlwZSIsInZlcmlmeVN0YW5kYWxvbmVUeXBlIiwidHlwZU5vZGUiLCJzdXBlclR5cGVOb2RlIiwiZmlsZUNvbnRleHQiLCJ0eXBlVmVyaWZpZWQiLCJ0eXBlU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsImRlYnVnIiwidHlwZSIsInN1cGVyVHlwZU5hbWUiLCJUeXBlIiwiZnJvbVR5cGVOYW1lIiwic3VwZXJUeXBlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwiZnJvbVR5cGVOYW1lQW5kU3VwZXJUeXBlIiwiYWRkVHlwZSIsInZlcmlmeUFoZWFkIiwic3RhbmRhbG9uZVR5cGVWZXJpZmllZCIsInZlcmlmaWVkQWhlYWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQU1BLE9BeUNDO2VBekN1QkE7O0lBMkNSQyxvQkFBb0I7ZUFBcEJBOzs7MkRBL0NDO29CQUVvQjs7Ozs7O0FBRXRCLFNBQVNELFdBQVdFLFFBQVEsRUFBRUMsYUFBYSxFQUFFQyxXQUFXO0lBQ3JFLElBQUlDLGVBQWU7SUFFbkIsSUFBTUMsYUFBYUYsWUFBWUcsWUFBWSxDQUFDTDtJQUU1Q0UsWUFBWUksS0FBSyxDQUFDLEFBQUMsa0JBQTRCLE9BQVhGLFlBQVcsY0FBWUo7SUFFM0QsSUFBTU8sV0FBV0MsSUFBQUEsMEJBQW9CLEVBQUNSLFdBQ2hDUyxjQUFjUCxZQUFZUSx1QkFBdUIsQ0FBQ0g7SUFFeEQsSUFBSUUsYUFBYTtRQUNmUCxZQUFZUyxLQUFLLENBQUMsQUFBQyxhQUFxQixPQUFUSixVQUFTLDBCQUF3QlA7SUFDbEUsT0FBTztRQUNMLElBQUlZO1FBRUosSUFBTUMsZ0JBQWdCTCxJQUFBQSwwQkFBb0IsRUFBQ1A7UUFFM0MsSUFBSVksa0JBQWtCLE1BQU07WUFDMUJELE9BQU9FLGFBQUksQ0FBQ0MsWUFBWSxDQUFDUjtRQUMzQixPQUFPO1lBQ0wsSUFBTVMsWUFBWWQsWUFBWWUsa0JBQWtCLENBQUNKO1lBRWpELElBQUlHLGNBQWMsTUFBTTtnQkFDdEJkLFlBQVlTLEtBQUssQ0FBQyxBQUFDLG1CQUFnQyxPQUFkRSxlQUFjLHNCQUFvQmI7WUFDekUsT0FBTztnQkFDTFksT0FBT0UsYUFBSSxDQUFDSSx3QkFBd0IsQ0FBQ1gsVUFBVVM7WUFDakQ7UUFDRjtRQUVBLElBQUlKLFNBQVMsTUFBTTtZQUNqQlYsWUFBWWlCLE9BQU8sQ0FBQ1A7WUFFcEJULGVBQWU7UUFDakI7SUFDRjtJQUVBLElBQUlBLGNBQWM7UUFDaEJELFlBQVlTLEtBQUssQ0FBQyxBQUFDLG9CQUE4QixPQUFYUCxZQUFXLFlBQVVKO0lBQzdEO0lBRUEsT0FBT0c7QUFDVDtBQUVPLFNBQVNKLHFCQUFxQkMsUUFBUSxFQUFFRSxXQUFXLEVBQUVrQixXQUFXO0lBQ3JFLElBQUlDLHlCQUF5QjtJQUU3QixJQUFNakIsYUFBYUYsWUFBWUcsWUFBWSxDQUFDTDtJQUU1Q0UsWUFBWUksS0FBSyxDQUFDLEFBQUMsa0JBQTRCLE9BQVhGLFlBQVcseUJBQXVCSjtJQUV0RSxJQUFNTyxXQUFXQyxJQUFBQSwwQkFBb0IsRUFBQ1IsV0FDaENTLGNBQWNQLFlBQVlRLHVCQUF1QixDQUFDSDtJQUV4RCxJQUFJLENBQUNFLGFBQWE7UUFDaEJQLFlBQVlTLEtBQUssQ0FBQyxBQUFDLGFBQXFCLE9BQVRKLFVBQVMsc0JBQW9CUDtJQUM5RCxPQUFPO1FBQ0wsSUFBTXNCLGdCQUFnQkY7UUFFdEJDLHlCQUF5QkMsZUFBZ0IsR0FBRztJQUM5QztJQUVBLElBQUlELHdCQUF3QjtRQUMxQm5CLFlBQVlTLEtBQUssQ0FBQyxBQUFDLG9CQUE4QixPQUFYUCxZQUFXLHVCQUFxQko7SUFDeEU7SUFFQSxPQUFPcUI7QUFDVCJ9