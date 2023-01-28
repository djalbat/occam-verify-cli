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
    var typeName = (0, _query.typeNameFromTypeNode)(typeNode), typeString = fileContext.nodeAsString(typeNode), typePresent = fileContext.isTypePresentByTypeName(typeName);
    if (typePresent) {
        fileContext.error("The type '".concat(typeName, "' is already present."), typeNode);
    } else {
        var type;
        var superTypeName = (0, _query.typeNameFromTypeNode)(superTypeNode);
        if (superTypeName === null) {
            type = _type.default.fromTypeName(typeName);
        } else {
            var superType = fileContext.findTypeByTypeName(superTypeName);
            if (superType === null) {
                fileContext.error("The super-type '".concat(superTypeName, "' is missing."), typeNode);
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
        fileContext.info("Verified the '".concat(typeString, "' type."), typeNode);
    }
    return typeVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4uL3R5cGVcIjtcblxuaW1wb3J0IHsgdHlwZU5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVR5cGUodHlwZU5vZGUsIHN1cGVyVHlwZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCB0eXBlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgdHlwZVN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlTm9kZSksXG4gICAgICAgIHR5cGVQcmVzZW50ID0gZmlsZUNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gIGlmICh0eXBlUHJlc2VudCkge1xuICAgIGZpbGVDb250ZXh0LmVycm9yKGBUaGUgdHlwZSAnJHt0eXBlTmFtZX0nIGlzIGFscmVhZHkgcHJlc2VudC5gLCB0eXBlTm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBjb25zdCBzdXBlclR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUoc3VwZXJUeXBlTm9kZSk7XG5cbiAgICBpZiAoc3VwZXJUeXBlTmFtZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZSA9IFR5cGUuZnJvbVR5cGVOYW1lKHR5cGVOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlID0gZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHN1cGVyVHlwZU5hbWUpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlID09PSBudWxsKSB7XG4gICAgICAgIGZpbGVDb250ZXh0LmVycm9yKGBUaGUgc3VwZXItdHlwZSAnJHtzdXBlclR5cGVOYW1lfScgaXMgbWlzc2luZy5gLCB0eXBlTm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlID0gVHlwZS5mcm9tVHlwZU5hbWVBbmRTdXBlclR5cGUodHlwZU5hbWUsIHN1cGVyVHlwZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgIGZpbGVDb250ZXh0LmFkZFR5cGUodHlwZSk7XG5cbiAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVWZXJpZmllZCkge1xuICAgIGZpbGVDb250ZXh0LmluZm8oYFZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gLCB0eXBlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdHlwZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVR5cGUiLCJ0eXBlTm9kZSIsInN1cGVyVHlwZU5vZGUiLCJmaWxlQ29udGV4dCIsInR5cGVWZXJpZmllZCIsInR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJ0eXBlU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsImVycm9yIiwidHlwZSIsInN1cGVyVHlwZU5hbWUiLCJUeXBlIiwiZnJvbVR5cGVOYW1lIiwic3VwZXJUeXBlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwiZnJvbVR5cGVOYW1lQW5kU3VwZXJUeXBlIiwiYWRkVHlwZSIsImluZm8iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBd0JBOzs7eURBSlA7cUJBRW9COzs7Ozs7QUFFdEIsU0FBU0EsV0FBV0MsUUFBUSxFQUFFQyxhQUFhLEVBQUVDLFdBQVcsRUFBRTtJQUN2RSxJQUFJQyxlQUFlLEtBQUs7SUFFeEIsSUFBTUMsV0FBV0MsSUFBQUEsMkJBQW9CLEVBQUNMLFdBQ2hDTSxhQUFhSixZQUFZSyxZQUFZLENBQUNQLFdBQ3RDUSxjQUFjTixZQUFZTyx1QkFBdUIsQ0FBQ0w7SUFFeEQsSUFBSUksYUFBYTtRQUNmTixZQUFZUSxLQUFLLENBQUMsQUFBQyxhQUFxQixPQUFUTixVQUFTLDBCQUF3Qko7SUFDbEUsT0FBTztRQUNMLElBQUlXO1FBRUosSUFBTUMsZ0JBQWdCUCxJQUFBQSwyQkFBb0IsRUFBQ0o7UUFFM0MsSUFBSVcsa0JBQWtCLElBQUksRUFBRTtZQUMxQkQsT0FBT0UsYUFBSSxDQUFDQyxZQUFZLENBQUNWO1FBQzNCLE9BQU87WUFDTCxJQUFNVyxZQUFZYixZQUFZYyxrQkFBa0IsQ0FBQ0o7WUFFakQsSUFBSUcsY0FBYyxJQUFJLEVBQUU7Z0JBQ3RCYixZQUFZUSxLQUFLLENBQUMsQUFBQyxtQkFBZ0MsT0FBZEUsZUFBYyxrQkFBZ0JaO1lBQ3JFLE9BQU87Z0JBQ0xXLE9BQU9FLGFBQUksQ0FBQ0ksd0JBQXdCLENBQUNiLFVBQVVXO1lBQ2pELENBQUM7UUFDSCxDQUFDO1FBRUQsSUFBSUosU0FBUyxJQUFJLEVBQUU7WUFDakJULFlBQVlnQixPQUFPLENBQUNQO1lBRXBCUixlQUFlLElBQUk7UUFDckIsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFJQSxjQUFjO1FBQ2hCRCxZQUFZaUIsSUFBSSxDQUFDLEFBQUMsaUJBQTJCLE9BQVhiLFlBQVcsWUFBVU47SUFDekQsQ0FBQztJQUVELE9BQU9HO0FBQ1QifQ==