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
function verifyType(typeNode, superTypeNode, context) {
    var typeVerified = false;
    var typeName = (0, _query.typeNameFromTypeNode)(typeNode), typePresent = context.isTypePresentByTypeName(typeName);
    if (typePresent) {
        context.error("The type '".concat(typeName, "' is already present."), typeNode);
    } else {
        var superTypeName = (0, _query.typeNameFromTypeNode)(superTypeNode);
        if (superTypeName === null) {
            var type = _type.default.fromTypeName(typeName), typeString = type.asString();
            context.addType(type);
            typeVerified = true;
            context.info("Verified the '".concat(typeString, "' type."), typeNode);
        } else {
            var superType = context.findTypeByTypeName(superTypeName);
            if (superType === null) {
                context.error("The super-type '".concat(superTypeName, "' is missing."), typeNode);
            } else {
                var type1 = _type.default.fromTypeNameAndSuperType(typeName, superType), typeString1 = type1.asString();
                context.addType(type1);
                typeVerified = true;
                context.info("Verified the '".concat(typeString1, "' type."), typeNode);
            }
        }
    }
    return typeVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4uL3R5cGVcIjtcblxuaW1wb3J0IHsgdHlwZU5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVR5cGUodHlwZU5vZGUsIHN1cGVyVHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gIGlmICh0eXBlUHJlc2VudCkge1xuICAgIGNvbnRleHQuZXJyb3IoYFRoZSB0eXBlICcke3R5cGVOYW1lfScgaXMgYWxyZWFkeSBwcmVzZW50LmAsIHR5cGVOb2RlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzdXBlclR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUoc3VwZXJUeXBlTm9kZSk7XG5cbiAgICBpZiAoc3VwZXJUeXBlTmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZSA9IFR5cGUuZnJvbVR5cGVOYW1lKHR5cGVOYW1lKSxcbiAgICAgICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlLmFzU3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQuYWRkVHlwZSh0eXBlKTtcblxuICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcblxuICAgICAgY29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCwgdHlwZU5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdXBlclR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShzdXBlclR5cGVOYW1lKTtcblxuICAgICAgaWYgKHN1cGVyVHlwZSA9PT0gbnVsbCkge1xuICAgICAgICBjb250ZXh0LmVycm9yKGBUaGUgc3VwZXItdHlwZSAnJHtzdXBlclR5cGVOYW1lfScgaXMgbWlzc2luZy5gLCB0eXBlTm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0eXBlID0gVHlwZS5mcm9tVHlwZU5hbWVBbmRTdXBlclR5cGUodHlwZU5hbWUsIHN1cGVyVHlwZSksXG4gICAgICAgICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgY29udGV4dC5hZGRUeXBlKHR5cGUpO1xuXG4gICAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG5cbiAgICAgICAgY29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCwgdHlwZU5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0eXBlVmVyaWZpZWQ7XG59XG5cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUeXBlIiwidHlwZU5vZGUiLCJzdXBlclR5cGVOb2RlIiwiY29udGV4dCIsInR5cGVWZXJpZmllZCIsInR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwiZXJyb3IiLCJzdXBlclR5cGVOYW1lIiwidHlwZSIsIlR5cGUiLCJmcm9tVHlwZU5hbWUiLCJ0eXBlU3RyaW5nIiwiYXNTdHJpbmciLCJhZGRUeXBlIiwiaW5mbyIsInN1cGVyVHlwZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsImZyb21UeXBlTmFtZUFuZFN1cGVyVHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUF3QkE7Ozt5REFKUDtxQkFFb0I7Ozs7OztBQUV0QixTQUFTQSxXQUFXQyxRQUFRLEVBQUVDLGFBQWEsRUFBRUMsT0FBTyxFQUFFO0lBQ25FLElBQUlDLGVBQWUsS0FBSztJQUV4QixJQUFNQyxXQUFXQyxJQUFBQSwyQkFBb0IsRUFBQ0wsV0FDaENNLGNBQWNKLFFBQVFLLHVCQUF1QixDQUFDSDtJQUVwRCxJQUFJRSxhQUFhO1FBQ2ZKLFFBQVFNLEtBQUssQ0FBQyxBQUFDLGFBQXFCLE9BQVRKLFVBQVMsMEJBQXdCSjtJQUM5RCxPQUFPO1FBQ0wsSUFBTVMsZ0JBQWdCSixJQUFBQSwyQkFBb0IsRUFBQ0o7UUFFM0MsSUFBSVEsa0JBQWtCLElBQUksRUFBRTtZQUMxQixJQUFNQyxPQUFPQyxhQUFJLENBQUNDLFlBQVksQ0FBQ1IsV0FDekJTLGFBQWFILEtBQUtJLFFBQVE7WUFFaENaLFFBQVFhLE9BQU8sQ0FBQ0w7WUFFaEJQLGVBQWUsSUFBSTtZQUVuQkQsUUFBUWMsSUFBSSxDQUFDLEFBQUMsaUJBQTJCLE9BQVhILFlBQVcsWUFBVWI7UUFDckQsT0FBTztZQUNMLElBQU1pQixZQUFZZixRQUFRZ0Isa0JBQWtCLENBQUNUO1lBRTdDLElBQUlRLGNBQWMsSUFBSSxFQUFFO2dCQUN0QmYsUUFBUU0sS0FBSyxDQUFDLEFBQUMsbUJBQWdDLE9BQWRDLGVBQWMsa0JBQWdCVDtZQUNqRSxPQUFPO2dCQUNMLElBQU1VLFFBQU9DLGFBQUksQ0FBQ1Esd0JBQXdCLENBQUNmLFVBQVVhLFlBQy9DSixjQUFhSCxNQUFLSSxRQUFRO2dCQUVoQ1osUUFBUWEsT0FBTyxDQUFDTDtnQkFFaEJQLGVBQWUsSUFBSTtnQkFFbkJELFFBQVFjLElBQUksQ0FBQyxBQUFDLGlCQUEyQixPQUFYSCxhQUFXLFlBQVViO1lBQ3JELENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELE9BQU9HO0FBQ1QifQ==