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
        fileContext.error(typeNode, "The type '".concat(typeName, "' is already present."));
    } else {
        var type;
        var superTypeName = (0, _query.typeNameFromTypeNode)(superTypeNode);
        if (superTypeName === null) {
            type = _type.default.fromTypeName(typeName);
        } else {
            var superType = fileContext.findTypeByTypeName(superTypeName);
            if (superType === null) {
                fileContext.error(typeNode, "The super-type '".concat(superTypeName, "' is missing."));
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
        fileContext.info(typeNode, "Verified the '".concat(typeString, "' type."));
    }
    return typeVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4uL3R5cGVcIjtcblxuaW1wb3J0IHsgdHlwZU5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVR5cGUodHlwZU5vZGUsIHN1cGVyVHlwZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCB0eXBlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgdHlwZVN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlTm9kZSksXG4gICAgICAgIHR5cGVQcmVzZW50ID0gZmlsZUNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gIGlmICh0eXBlUHJlc2VudCkge1xuICAgIGZpbGVDb250ZXh0LmVycm9yKHR5cGVOb2RlLCBgVGhlIHR5cGUgJyR7dHlwZU5hbWV9JyBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gIH0gZWxzZSB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBjb25zdCBzdXBlclR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUoc3VwZXJUeXBlTm9kZSk7XG5cbiAgICBpZiAoc3VwZXJUeXBlTmFtZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZSA9IFR5cGUuZnJvbVR5cGVOYW1lKHR5cGVOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlID0gZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHN1cGVyVHlwZU5hbWUpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlID09PSBudWxsKSB7XG4gICAgICAgIGZpbGVDb250ZXh0LmVycm9yKHR5cGVOb2RlLCBgVGhlIHN1cGVyLXR5cGUgJyR7c3VwZXJUeXBlTmFtZX0nIGlzIG1pc3NpbmcuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlID0gVHlwZS5mcm9tVHlwZU5hbWVBbmRTdXBlclR5cGUodHlwZU5hbWUsIHN1cGVyVHlwZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgIGZpbGVDb250ZXh0LmFkZFR5cGUodHlwZSk7XG5cbiAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVWZXJpZmllZCkge1xuICAgIGZpbGVDb250ZXh0LmluZm8odHlwZU5vZGUsIGBWZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCk7XG4gIH1cblxuICByZXR1cm4gdHlwZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVR5cGUiLCJ0eXBlTm9kZSIsInN1cGVyVHlwZU5vZGUiLCJmaWxlQ29udGV4dCIsInR5cGVWZXJpZmllZCIsInR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJ0eXBlU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsImVycm9yIiwidHlwZSIsInN1cGVyVHlwZU5hbWUiLCJUeXBlIiwiZnJvbVR5cGVOYW1lIiwic3VwZXJUeXBlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwiZnJvbVR5cGVOYW1lQW5kU3VwZXJUeXBlIiwiYWRkVHlwZSIsImluZm8iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBd0JBOzs7eURBSlA7cUJBRW9COzs7Ozs7QUFFdEIsU0FBU0EsV0FBV0MsUUFBUSxFQUFFQyxhQUFhLEVBQUVDLFdBQVcsRUFBRTtJQUN2RSxJQUFJQyxlQUFlLEtBQUs7SUFFeEIsSUFBTUMsV0FBV0MsSUFBQUEsMkJBQW9CLEVBQUNMLFdBQ2hDTSxhQUFhSixZQUFZSyxZQUFZLENBQUNQLFdBQ3RDUSxjQUFjTixZQUFZTyx1QkFBdUIsQ0FBQ0w7SUFFeEQsSUFBSUksYUFBYTtRQUNmTixZQUFZUSxLQUFLLENBQUNWLFVBQVUsQUFBQyxhQUFxQixPQUFUSSxVQUFTO0lBQ3BELE9BQU87UUFDTCxJQUFJTztRQUVKLElBQU1DLGdCQUFnQlAsSUFBQUEsMkJBQW9CLEVBQUNKO1FBRTNDLElBQUlXLGtCQUFrQixJQUFJLEVBQUU7WUFDMUJELE9BQU9FLGFBQUksQ0FBQ0MsWUFBWSxDQUFDVjtRQUMzQixPQUFPO1lBQ0wsSUFBTVcsWUFBWWIsWUFBWWMsa0JBQWtCLENBQUNKO1lBRWpELElBQUlHLGNBQWMsSUFBSSxFQUFFO2dCQUN0QmIsWUFBWVEsS0FBSyxDQUFDVixVQUFVLEFBQUMsbUJBQWdDLE9BQWRZLGVBQWM7WUFDL0QsT0FBTztnQkFDTEQsT0FBT0UsYUFBSSxDQUFDSSx3QkFBd0IsQ0FBQ2IsVUFBVVc7WUFDakQsQ0FBQztRQUNILENBQUM7UUFFRCxJQUFJSixTQUFTLElBQUksRUFBRTtZQUNqQlQsWUFBWWdCLE9BQU8sQ0FBQ1A7WUFFcEJSLGVBQWUsSUFBSTtRQUNyQixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQUlBLGNBQWM7UUFDaEJELFlBQVlpQixJQUFJLENBQUNuQixVQUFVLEFBQUMsaUJBQTJCLE9BQVhNLFlBQVc7SUFDekQsQ0FBQztJQUVELE9BQU9IO0FBQ1QifQ==