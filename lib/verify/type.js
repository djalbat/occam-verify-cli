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
var _string = require("../utilities/string");
var _query = require("../utilities/query");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyType(typeNode, superTypeNode, fileContext) {
    var typeVerified = false;
    fileContext.begin(typeNode);
    var typeString = (0, _string.nodeAsString)(typeNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4uL3R5cGVcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IHR5cGVOYW1lRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlUeXBlKHR5cGVOb2RlLCBzdXBlclR5cGVOb2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgdHlwZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgZmlsZUNvbnRleHQuYmVnaW4odHlwZU5vZGUpO1xuXG4gIGNvbnN0IHR5cGVTdHJpbmcgPSBub2RlQXNTdHJpbmcodHlwZU5vZGUpO1xuXG4gIGZpbGVDb250ZXh0LmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLi4uYCk7XG5cbiAgY29uc3QgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgIHR5cGVQcmVzZW50ID0gZmlsZUNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gIGlmICh0eXBlUHJlc2VudCkge1xuICAgIGZpbGVDb250ZXh0LmVycm9yKGBUaGUgdHlwZSAnJHt0eXBlTmFtZX0nIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGNvbnN0IHN1cGVyVHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZShzdXBlclR5cGVOb2RlKTtcblxuICAgIGlmIChzdXBlclR5cGVOYW1lID09PSBudWxsKSB7XG4gICAgICB0eXBlID0gVHlwZS5mcm9tVHlwZU5hbWUodHlwZU5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdXBlclR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUoc3VwZXJUeXBlTmFtZSk7XG5cbiAgICAgIGlmIChzdXBlclR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgZmlsZUNvbnRleHQuZXJyb3IoYFRoZSBzdXBlci10eXBlICcke3N1cGVyVHlwZU5hbWV9JyBpcyBtaXNzaW5nLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZSA9IFR5cGUuZnJvbVR5cGVOYW1lQW5kU3VwZXJUeXBlKHR5cGVOYW1lLCBzdXBlclR5cGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICBmaWxlQ29udGV4dC5hZGRUeXBlKHR5cGUpO1xuXG4gICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICBmaWxlQ29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCk7XG4gIH1cblxuICB0eXBlVmVyaWZpZWQgP1xuICAgIGZpbGVDb250ZXh0LmNvbXBsZXRlKHR5cGVOb2RlKTpcbiAgICAgIGZpbGVDb250ZXh0LmhhbHQodHlwZU5vZGUpO1xuXG4gIHJldHVybiB0eXBlVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VHlwZSIsInR5cGVOb2RlIiwic3VwZXJUeXBlTm9kZSIsImZpbGVDb250ZXh0IiwidHlwZVZlcmlmaWVkIiwiYmVnaW4iLCJ0eXBlU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiZGVidWciLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsImVycm9yIiwidHlwZSIsInN1cGVyVHlwZU5hbWUiLCJUeXBlIiwiZnJvbVR5cGVOYW1lIiwic3VwZXJUeXBlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwiZnJvbVR5cGVOYW1lQW5kU3VwZXJUeXBlIiwiYWRkVHlwZSIsImluZm8iLCJjb21wbGV0ZSIsImhhbHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBd0JBOzs7eURBTFA7c0JBRVk7cUJBQ1E7Ozs7OztBQUV0QixTQUFTQSxXQUFXQyxRQUFRLEVBQUVDLGFBQWEsRUFBRUMsV0FBVyxFQUFFO0lBQ3ZFLElBQUlDLGVBQWUsS0FBSztJQUV4QkQsWUFBWUUsS0FBSyxDQUFDSjtJQUVsQixJQUFNSyxhQUFhQyxJQUFBQSxvQkFBWSxFQUFDTjtJQUVoQ0UsWUFBWUssS0FBSyxDQUFDLEFBQUMsa0JBQTRCLE9BQVhGLFlBQVc7SUFFL0MsSUFBTUcsV0FBV0MsSUFBQUEsMkJBQW9CLEVBQUNULFdBQ2hDVSxjQUFjUixZQUFZUyx1QkFBdUIsQ0FBQ0g7SUFFeEQsSUFBSUUsYUFBYTtRQUNmUixZQUFZVSxLQUFLLENBQUMsQUFBQyxhQUFxQixPQUFUSixVQUFTO0lBQzFDLE9BQU87UUFDTCxJQUFJSztRQUVKLElBQU1DLGdCQUFnQkwsSUFBQUEsMkJBQW9CLEVBQUNSO1FBRTNDLElBQUlhLGtCQUFrQixJQUFJLEVBQUU7WUFDMUJELE9BQU9FLGFBQUksQ0FBQ0MsWUFBWSxDQUFDUjtRQUMzQixPQUFPO1lBQ0wsSUFBTVMsWUFBWWYsWUFBWWdCLGtCQUFrQixDQUFDSjtZQUVqRCxJQUFJRyxjQUFjLElBQUksRUFBRTtnQkFDdEJmLFlBQVlVLEtBQUssQ0FBQyxBQUFDLG1CQUFnQyxPQUFkRSxlQUFjO1lBQ3JELE9BQU87Z0JBQ0xELE9BQU9FLGFBQUksQ0FBQ0ksd0JBQXdCLENBQUNYLFVBQVVTO1lBQ2pELENBQUM7UUFDSCxDQUFDO1FBRUQsSUFBSUosU0FBUyxJQUFJLEVBQUU7WUFDakJYLFlBQVlrQixPQUFPLENBQUNQO1lBRXBCVixlQUFlLElBQUk7UUFDckIsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFJQSxjQUFjO1FBQ2hCRCxZQUFZbUIsSUFBSSxDQUFDLEFBQUMsaUJBQTJCLE9BQVhoQixZQUFXO0lBQy9DLENBQUM7SUFFREYsZUFDRUQsWUFBWW9CLFFBQVEsQ0FBQ3RCLFlBQ25CRSxZQUFZcUIsSUFBSSxDQUFDdkIsU0FBUztJQUU5QixPQUFPRztBQUNUIn0=