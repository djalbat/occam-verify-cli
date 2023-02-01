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
                fileContext.error("The super-type '".concat(superTypeName, "' is not present."), typeNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4uL3R5cGVcIjtcblxuaW1wb3J0IHsgdHlwZU5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVR5cGUodHlwZU5vZGUsIHN1cGVyVHlwZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCB0eXBlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgdHlwZVN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlTm9kZSksXG4gICAgICAgIHR5cGVQcmVzZW50ID0gZmlsZUNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gIGlmICh0eXBlUHJlc2VudCkge1xuICAgIGZpbGVDb250ZXh0LmVycm9yKGBUaGUgdHlwZSAnJHt0eXBlTmFtZX0nIGlzIGFscmVhZHkgcHJlc2VudC5gLCB0eXBlTm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBjb25zdCBzdXBlclR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUoc3VwZXJUeXBlTm9kZSk7XG5cbiAgICBpZiAoc3VwZXJUeXBlTmFtZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZSA9IFR5cGUuZnJvbVR5cGVOYW1lKHR5cGVOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlID0gZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHN1cGVyVHlwZU5hbWUpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlID09PSBudWxsKSB7XG4gICAgICAgIGZpbGVDb250ZXh0LmVycm9yKGBUaGUgc3VwZXItdHlwZSAnJHtzdXBlclR5cGVOYW1lfScgaXMgbm90IHByZXNlbnQuYCwgdHlwZU5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZSA9IFR5cGUuZnJvbVR5cGVOYW1lQW5kU3VwZXJUeXBlKHR5cGVOYW1lLCBzdXBlclR5cGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICBmaWxlQ29udGV4dC5hZGRUeXBlKHR5cGUpO1xuXG4gICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICBmaWxlQ29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCwgdHlwZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUeXBlIiwidHlwZU5vZGUiLCJzdXBlclR5cGVOb2RlIiwiZmlsZUNvbnRleHQiLCJ0eXBlVmVyaWZpZWQiLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwidHlwZVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJlcnJvciIsInR5cGUiLCJzdXBlclR5cGVOYW1lIiwiVHlwZSIsImZyb21UeXBlTmFtZSIsInN1cGVyVHlwZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsImZyb21UeXBlTmFtZUFuZFN1cGVyVHlwZSIsImFkZFR5cGUiLCJpbmZvIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXdCQTs7O3lEQUpQO3FCQUVvQjs7Ozs7O0FBRXRCLFNBQVNBLFdBQVdDLFFBQVEsRUFBRUMsYUFBYSxFQUFFQyxXQUFXLEVBQUU7SUFDdkUsSUFBSUMsZUFBZSxLQUFLO0lBRXhCLElBQU1DLFdBQVdDLElBQUFBLDJCQUFvQixFQUFDTCxXQUNoQ00sYUFBYUosWUFBWUssWUFBWSxDQUFDUCxXQUN0Q1EsY0FBY04sWUFBWU8sdUJBQXVCLENBQUNMO0lBRXhELElBQUlJLGFBQWE7UUFDZk4sWUFBWVEsS0FBSyxDQUFDLEFBQUMsYUFBcUIsT0FBVE4sVUFBUywwQkFBd0JKO0lBQ2xFLE9BQU87UUFDTCxJQUFJVztRQUVKLElBQU1DLGdCQUFnQlAsSUFBQUEsMkJBQW9CLEVBQUNKO1FBRTNDLElBQUlXLGtCQUFrQixJQUFJLEVBQUU7WUFDMUJELE9BQU9FLGFBQUksQ0FBQ0MsWUFBWSxDQUFDVjtRQUMzQixPQUFPO1lBQ0wsSUFBTVcsWUFBWWIsWUFBWWMsa0JBQWtCLENBQUNKO1lBRWpELElBQUlHLGNBQWMsSUFBSSxFQUFFO2dCQUN0QmIsWUFBWVEsS0FBSyxDQUFDLEFBQUMsbUJBQWdDLE9BQWRFLGVBQWMsc0JBQW9CWjtZQUN6RSxPQUFPO2dCQUNMVyxPQUFPRSxhQUFJLENBQUNJLHdCQUF3QixDQUFDYixVQUFVVztZQUNqRCxDQUFDO1FBQ0gsQ0FBQztRQUVELElBQUlKLFNBQVMsSUFBSSxFQUFFO1lBQ2pCVCxZQUFZZ0IsT0FBTyxDQUFDUDtZQUVwQlIsZUFBZSxJQUFJO1FBQ3JCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBSUEsY0FBYztRQUNoQkQsWUFBWWlCLElBQUksQ0FBQyxBQUFDLGlCQUEyQixPQUFYYixZQUFXLFlBQVVOO0lBQ3pELENBQUM7SUFFRCxPQUFPRztBQUNUIn0=