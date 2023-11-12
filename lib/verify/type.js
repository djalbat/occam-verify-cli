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
    fileContext.trace("Verifying the '".concat(typeString, "' type."));
    var typeName = (0, _query.typeNameFromTypeNode)(typeNode), typePresent = fileContext.isTypePresentByTypeName(typeName);
    if (typePresent) {
        fileContext.info("The type '".concat(typeName, "' is already present."), typeNode);
    } else {
        var type;
        var superTypeName = (0, _query.typeNameFromTypeNode)(superTypeNode);
        if (superTypeName === null) {
            type = _type.default.fromTypeName(typeName);
        } else {
            var superType = fileContext.findTypeByTypeName(superTypeName);
            if (superType === null) {
                fileContext.info("The super-type '".concat(superTypeName, "' is not present."), typeNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4uL3R5cGVcIjtcblxuaW1wb3J0IHsgdHlwZU5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVR5cGUodHlwZU5vZGUsIHN1cGVyVHlwZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCB0eXBlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB0eXBlU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVOb2RlKTtcblxuICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcblxuICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgdHlwZVByZXNlbnQgPSBmaWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgZmlsZUNvbnRleHQuaW5mbyhgVGhlIHR5cGUgJyR7dHlwZU5hbWV9JyBpcyBhbHJlYWR5IHByZXNlbnQuYCwgdHlwZU5vZGUpO1xuICB9IGVsc2Uge1xuICAgIGxldCB0eXBlO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHN1cGVyVHlwZU5vZGUpO1xuXG4gICAgaWYgKHN1cGVyVHlwZU5hbWUgPT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBUeXBlLmZyb21UeXBlTmFtZSh0eXBlTmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShzdXBlclR5cGVOYW1lKTtcblxuICAgICAgaWYgKHN1cGVyVHlwZSA9PT0gbnVsbCkge1xuICAgICAgICBmaWxlQ29udGV4dC5pbmZvKGBUaGUgc3VwZXItdHlwZSAnJHtzdXBlclR5cGVOYW1lfScgaXMgbm90IHByZXNlbnQuYCwgdHlwZU5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZSA9IFR5cGUuZnJvbVR5cGVOYW1lQW5kU3VwZXJUeXBlKHR5cGVOYW1lLCBzdXBlclR5cGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICBmaWxlQ29udGV4dC5hZGRUeXBlKHR5cGUpO1xuXG4gICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLmAsIHR5cGVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiB0eXBlVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VHlwZSIsInR5cGVOb2RlIiwic3VwZXJUeXBlTm9kZSIsImZpbGVDb250ZXh0IiwidHlwZVZlcmlmaWVkIiwidHlwZVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwidHlwZU5hbWUiLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJpbmZvIiwidHlwZSIsInN1cGVyVHlwZU5hbWUiLCJUeXBlIiwiZnJvbVR5cGVOYW1lIiwic3VwZXJUeXBlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwiZnJvbVR5cGVOYW1lQW5kU3VwZXJUeXBlIiwiYWRkVHlwZSIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXdCQTs7OzJEQUpQO3FCQUVvQjs7Ozs7O0FBRXRCLFNBQVNBLFdBQVdDLFFBQVEsRUFBRUMsYUFBYSxFQUFFQyxXQUFXO0lBQ3JFLElBQUlDLGVBQWU7SUFFbkIsSUFBTUMsYUFBYUYsWUFBWUcsWUFBWSxDQUFDTDtJQUU1Q0UsWUFBWUksS0FBSyxDQUFDLEFBQUMsa0JBQTRCLE9BQVhGLFlBQVc7SUFFL0MsSUFBTUcsV0FBV0MsSUFBQUEsMkJBQW9CLEVBQUNSLFdBQ2hDUyxjQUFjUCxZQUFZUSx1QkFBdUIsQ0FBQ0g7SUFFeEQsSUFBSUUsYUFBYTtRQUNmUCxZQUFZUyxJQUFJLENBQUMsQUFBQyxhQUFxQixPQUFUSixVQUFTLDBCQUF3QlA7SUFDakUsT0FBTztRQUNMLElBQUlZO1FBRUosSUFBTUMsZ0JBQWdCTCxJQUFBQSwyQkFBb0IsRUFBQ1A7UUFFM0MsSUFBSVksa0JBQWtCLE1BQU07WUFDMUJELE9BQU9FLGFBQUksQ0FBQ0MsWUFBWSxDQUFDUjtRQUMzQixPQUFPO1lBQ0wsSUFBTVMsWUFBWWQsWUFBWWUsa0JBQWtCLENBQUNKO1lBRWpELElBQUlHLGNBQWMsTUFBTTtnQkFDdEJkLFlBQVlTLElBQUksQ0FBQyxBQUFDLG1CQUFnQyxPQUFkRSxlQUFjLHNCQUFvQmI7WUFDeEUsT0FBTztnQkFDTFksT0FBT0UsYUFBSSxDQUFDSSx3QkFBd0IsQ0FBQ1gsVUFBVVM7WUFDakQ7UUFDRjtRQUVBLElBQUlKLFNBQVMsTUFBTTtZQUNqQlYsWUFBWWlCLE9BQU8sQ0FBQ1A7WUFFcEJULGVBQWU7UUFDakI7SUFDRjtJQUVBLElBQUlBLGNBQWM7UUFDaEJELFlBQVlrQixLQUFLLENBQUMsQUFBQyxvQkFBOEIsT0FBWGhCLFlBQVcsWUFBVUo7SUFDN0Q7SUFFQSxPQUFPRztBQUNUIn0=