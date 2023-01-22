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
var _type = /*#__PURE__*/ _interopRequireDefault(require("../type"));
var _query = require("../utilities/query");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyType(typeNode, superTypeNode, fileContext) {
    var typeVerified = false;
    fileContext.begin(typeNode);
    var typeString = fileContext.nodeAsString(typeNode);
    fileContext.debug("Verifying the '".concat(typeString, "' type..."));
    var typeName = (0, _query.typeNameFromTypeNode)(typeNode), typePresent = fileContext.isTypePresentByTypeName(typeName);
    if (typePresent) {
        fileContext.error("The type '".concat(typeName, "' is already present."));
    } else {
        var type;
        var superTypeName = (0, _query.typeNameFromTypeNode)(superTypeNode);
        if (superTypeName === null) {
            type = _type.default.fromTypeName(typeName);
        } else {
            var superType = fileContext.findTypeByTypeName(superTypeName);
            if (superType === null) {
                fileContext.error("The super-type '".concat(superTypeName, "' is missing."));
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
        fileContext.info("Verified the '".concat(typeString, "' type."));
    }
    typeVerified ? fileContext.complete(typeNode) : fileContext.halt(typeNode);
    return typeVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4uL3R5cGVcIjtcblxuaW1wb3J0IHsgdHlwZU5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVR5cGUodHlwZU5vZGUsIHN1cGVyVHlwZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCB0eXBlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBmaWxlQ29udGV4dC5iZWdpbih0eXBlTm9kZSk7XG5cbiAgY29uc3QgdHlwZVN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlTm9kZSk7XG5cbiAgZmlsZUNvbnRleHQuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gKTtcblxuICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgdHlwZVByZXNlbnQgPSBmaWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgZmlsZUNvbnRleHQuZXJyb3IoYFRoZSB0eXBlICcke3R5cGVOYW1lfScgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICB9IGVsc2Uge1xuICAgIGxldCB0eXBlO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHN1cGVyVHlwZU5vZGUpO1xuXG4gICAgaWYgKHN1cGVyVHlwZU5hbWUgPT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBUeXBlLmZyb21UeXBlTmFtZSh0eXBlTmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShzdXBlclR5cGVOYW1lKTtcblxuICAgICAgaWYgKHN1cGVyVHlwZSA9PT0gbnVsbCkge1xuICAgICAgICBmaWxlQ29udGV4dC5lcnJvcihgVGhlIHN1cGVyLXR5cGUgJyR7c3VwZXJUeXBlTmFtZX0nIGlzIG1pc3NpbmcuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlID0gVHlwZS5mcm9tVHlwZU5hbWVBbmRTdXBlclR5cGUodHlwZU5hbWUsIHN1cGVyVHlwZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgIGZpbGVDb250ZXh0LmFkZFR5cGUodHlwZSk7XG5cbiAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVWZXJpZmllZCkge1xuICAgIGZpbGVDb250ZXh0LmluZm8oYFZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgfVxuXG4gIHR5cGVWZXJpZmllZCA/XG4gICAgZmlsZUNvbnRleHQuY29tcGxldGUodHlwZU5vZGUpOlxuICAgICAgZmlsZUNvbnRleHQuaGFsdCh0eXBlTm9kZSk7XG5cbiAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUeXBlIiwidHlwZU5vZGUiLCJzdXBlclR5cGVOb2RlIiwiZmlsZUNvbnRleHQiLCJ0eXBlVmVyaWZpZWQiLCJiZWdpbiIsInR5cGVTdHJpbmciLCJub2RlQXNTdHJpbmciLCJkZWJ1ZyIsInR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwiZXJyb3IiLCJ0eXBlIiwic3VwZXJUeXBlTmFtZSIsIlR5cGUiLCJmcm9tVHlwZU5hbWUiLCJzdXBlclR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJmcm9tVHlwZU5hbWVBbmRTdXBlclR5cGUiLCJhZGRUeXBlIiwiaW5mbyIsImNvbXBsZXRlIiwiaGFsdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUF3QkE7Ozt5REFKUDtxQkFFb0I7Ozs7OztBQUV0QixTQUFTQSxXQUFXQyxRQUFRLEVBQUVDLGFBQWEsRUFBRUMsV0FBVyxFQUFFO0lBQ3ZFLElBQUlDLGVBQWUsS0FBSztJQUV4QkQsWUFBWUUsS0FBSyxDQUFDSjtJQUVsQixJQUFNSyxhQUFhSCxZQUFZSSxZQUFZLENBQUNOO0lBRTVDRSxZQUFZSyxLQUFLLENBQUMsQUFBQyxrQkFBNEIsT0FBWEYsWUFBVztJQUUvQyxJQUFNRyxXQUFXQyxJQUFBQSwyQkFBb0IsRUFBQ1QsV0FDaENVLGNBQWNSLFlBQVlTLHVCQUF1QixDQUFDSDtJQUV4RCxJQUFJRSxhQUFhO1FBQ2ZSLFlBQVlVLEtBQUssQ0FBQyxBQUFDLGFBQXFCLE9BQVRKLFVBQVM7SUFDMUMsT0FBTztRQUNMLElBQUlLO1FBRUosSUFBTUMsZ0JBQWdCTCxJQUFBQSwyQkFBb0IsRUFBQ1I7UUFFM0MsSUFBSWEsa0JBQWtCLElBQUksRUFBRTtZQUMxQkQsT0FBT0UsYUFBSSxDQUFDQyxZQUFZLENBQUNSO1FBQzNCLE9BQU87WUFDTCxJQUFNUyxZQUFZZixZQUFZZ0Isa0JBQWtCLENBQUNKO1lBRWpELElBQUlHLGNBQWMsSUFBSSxFQUFFO2dCQUN0QmYsWUFBWVUsS0FBSyxDQUFDLEFBQUMsbUJBQWdDLE9BQWRFLGVBQWM7WUFDckQsT0FBTztnQkFDTEQsT0FBT0UsYUFBSSxDQUFDSSx3QkFBd0IsQ0FBQ1gsVUFBVVM7WUFDakQsQ0FBQztRQUNILENBQUM7UUFFRCxJQUFJSixTQUFTLElBQUksRUFBRTtZQUNqQlgsWUFBWWtCLE9BQU8sQ0FBQ1A7WUFFcEJWLGVBQWUsSUFBSTtRQUNyQixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQUlBLGNBQWM7UUFDaEJELFlBQVltQixJQUFJLENBQUMsQUFBQyxpQkFBMkIsT0FBWGhCLFlBQVc7SUFDL0MsQ0FBQztJQUVERixlQUNFRCxZQUFZb0IsUUFBUSxDQUFDdEIsWUFDbkJFLFlBQVlxQixJQUFJLENBQUN2QixTQUFTO0lBRTlCLE9BQU9HO0FBQ1QifQ==