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
        context.error("The type '".concat(typeName, "' is already present."));
    } else {
        var superTypeName = (0, _query.typeNameFromTypeNode)(superTypeNode);
        if (superTypeName === null) {
            var type = _type.default.fromTypeName(typeName), typeString = type.asString();
            context.addType(type);
            typeVerified = true;
            context.info("Verified the '".concat(typeString, "' type."));
        } else {
            var superType = context.findTypeByTypeName(superTypeName);
            if (superType === null) {
                context.error("The super-type '".concat(superTypeName, "' is missing."));
            } else {
                var type1 = _type.default.fromTypeNameAndSuperType(typeName, superType), typeString1 = type1.asString();
                context.addType(type1);
                typeVerified = true;
                context.info("Verified the '".concat(typeString1, "' type."));
            }
        }
    }
    return typeVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4uL3R5cGVcIjtcblxuaW1wb3J0IHsgdHlwZU5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVR5cGUodHlwZU5vZGUsIHN1cGVyVHlwZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gIGlmICh0eXBlUHJlc2VudCkge1xuICAgIGNvbnRleHQuZXJyb3IoYFRoZSB0eXBlICcke3R5cGVOYW1lfScgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHN1cGVyVHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZShzdXBlclR5cGVOb2RlKTtcblxuICAgIGlmIChzdXBlclR5cGVOYW1lID09PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlID0gVHlwZS5mcm9tVHlwZU5hbWUodHlwZU5hbWUpLFxuICAgICAgICAgICAgdHlwZVN0cmluZyA9IHR5cGUuYXNTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC5hZGRUeXBlKHR5cGUpO1xuXG4gICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuXG4gICAgICBjb250ZXh0LmluZm8oYFZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlID0gY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUoc3VwZXJUeXBlTmFtZSk7XG5cbiAgICAgIGlmIChzdXBlclR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgY29udGV4dC5lcnJvcihgVGhlIHN1cGVyLXR5cGUgJyR7c3VwZXJUeXBlTmFtZX0nIGlzIG1pc3NpbmcuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0eXBlID0gVHlwZS5mcm9tVHlwZU5hbWVBbmRTdXBlclR5cGUodHlwZU5hbWUsIHN1cGVyVHlwZSksXG4gICAgICAgICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgY29udGV4dC5hZGRUeXBlKHR5cGUpO1xuXG4gICAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG5cbiAgICAgICAgY29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbn1cblxuIl0sIm5hbWVzIjpbInZlcmlmeVR5cGUiLCJ0eXBlTm9kZSIsInN1cGVyVHlwZU5vZGUiLCJjb250ZXh0IiwidHlwZVZlcmlmaWVkIiwidHlwZU5hbWUiLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJlcnJvciIsInN1cGVyVHlwZU5hbWUiLCJ0eXBlIiwiVHlwZSIsImZyb21UeXBlTmFtZSIsInR5cGVTdHJpbmciLCJhc1N0cmluZyIsImFkZFR5cGUiLCJpbmZvIiwic3VwZXJUeXBlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwiZnJvbVR5cGVOYW1lQW5kU3VwZXJUeXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXdCQTs7O3lEQUpQO3FCQUVvQjs7Ozs7O0FBRXRCLFNBQVNBLFdBQVdDLFFBQVEsRUFBRUMsYUFBYSxFQUFFQyxPQUFPLEVBQUU7SUFDbkUsSUFBSUMsZUFBZSxLQUFLO0lBRXhCLElBQU1DLFdBQVdDLElBQUFBLDJCQUFvQixFQUFDTCxXQUNoQ00sY0FBY0osUUFBUUssdUJBQXVCLENBQUNIO0lBRXBELElBQUlFLGFBQWE7UUFDZkosUUFBUU0sS0FBSyxDQUFDLEFBQUMsYUFBcUIsT0FBVEosVUFBUztJQUN0QyxPQUFPO1FBQ0wsSUFBTUssZ0JBQWdCSixJQUFBQSwyQkFBb0IsRUFBQ0o7UUFFM0MsSUFBSVEsa0JBQWtCLElBQUksRUFBRTtZQUMxQixJQUFNQyxPQUFPQyxhQUFJLENBQUNDLFlBQVksQ0FBQ1IsV0FDekJTLGFBQWFILEtBQUtJLFFBQVE7WUFFaENaLFFBQVFhLE9BQU8sQ0FBQ0w7WUFFaEJQLGVBQWUsSUFBSTtZQUVuQkQsUUFBUWMsSUFBSSxDQUFDLEFBQUMsaUJBQTJCLE9BQVhILFlBQVc7UUFDM0MsT0FBTztZQUNMLElBQU1JLFlBQVlmLFFBQVFnQixrQkFBa0IsQ0FBQ1Q7WUFFN0MsSUFBSVEsY0FBYyxJQUFJLEVBQUU7Z0JBQ3RCZixRQUFRTSxLQUFLLENBQUMsQUFBQyxtQkFBZ0MsT0FBZEMsZUFBYztZQUNqRCxPQUFPO2dCQUNMLElBQU1DLFFBQU9DLGFBQUksQ0FBQ1Esd0JBQXdCLENBQUNmLFVBQVVhLFlBQy9DSixjQUFhSCxNQUFLSSxRQUFRO2dCQUVoQ1osUUFBUWEsT0FBTyxDQUFDTDtnQkFFaEJQLGVBQWUsSUFBSTtnQkFFbkJELFFBQVFjLElBQUksQ0FBQyxBQUFDLGlCQUEyQixPQUFYSCxhQUFXO1lBQzNDLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELE9BQU9WO0FBQ1QifQ==