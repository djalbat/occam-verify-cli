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
    var type = null;
    var typeName = (0, _query.typeNameFromTypeNode)(typeNode), typePresent = fileContext.isTypePresentByTypeName(typeName);
    if (typePresent) {
        fileContext.error("The type '".concat(typeName, "' is already present."));
    } else {
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
    }
    if (type !== null) {
        fileContext.addType(type);
        typeVerified = true;
    }
    if (typeVerified) {
        var typeString = (0, _string.nodeAsString)(typeNode);
        fileContext.info("Verified the '".concat(typeString, "' type."));
    }
    typeVerified ? fileContext.complete(typeNode) : fileContext.halt(typeNode);
    return typeVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4uL3R5cGVcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IHR5cGVOYW1lRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlUeXBlKHR5cGVOb2RlLCBzdXBlclR5cGVOb2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgdHlwZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgZmlsZUNvbnRleHQuYmVnaW4odHlwZU5vZGUpO1xuXG4gIGxldCB0eXBlID0gbnVsbDtcblxuICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgdHlwZVByZXNlbnQgPSBmaWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgZmlsZUNvbnRleHQuZXJyb3IoYFRoZSB0eXBlICcke3R5cGVOYW1lfScgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHN1cGVyVHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZShzdXBlclR5cGVOb2RlKTtcblxuICAgIGlmIChzdXBlclR5cGVOYW1lID09PSBudWxsKSB7XG4gICAgICB0eXBlID0gVHlwZS5mcm9tVHlwZU5hbWUodHlwZU5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdXBlclR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUoc3VwZXJUeXBlTmFtZSk7XG5cbiAgICAgIGlmIChzdXBlclR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgZmlsZUNvbnRleHQuZXJyb3IoYFRoZSBzdXBlci10eXBlICcke3N1cGVyVHlwZU5hbWV9JyBpcyBtaXNzaW5nLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZSA9IFR5cGUuZnJvbVR5cGVOYW1lQW5kU3VwZXJUeXBlKHR5cGVOYW1lLCBzdXBlclR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgZmlsZUNvbnRleHQuYWRkVHlwZSh0eXBlKTtcblxuICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gIH1cblxuICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgY29uc3QgdHlwZVN0cmluZyA9IG5vZGVBc1N0cmluZyh0eXBlTm9kZSk7XG5cbiAgICBmaWxlQ29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCk7XG4gIH1cblxuICB0eXBlVmVyaWZpZWQgP1xuICAgIGZpbGVDb250ZXh0LmNvbXBsZXRlKHR5cGVOb2RlKTpcbiAgICAgIGZpbGVDb250ZXh0LmhhbHQodHlwZU5vZGUpO1xuXG4gIHJldHVybiB0eXBlVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VHlwZSIsInR5cGVOb2RlIiwic3VwZXJUeXBlTm9kZSIsImZpbGVDb250ZXh0IiwidHlwZVZlcmlmaWVkIiwiYmVnaW4iLCJ0eXBlIiwidHlwZU5hbWUiLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJlcnJvciIsInN1cGVyVHlwZU5hbWUiLCJUeXBlIiwiZnJvbVR5cGVOYW1lIiwic3VwZXJUeXBlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwiZnJvbVR5cGVOYW1lQW5kU3VwZXJUeXBlIiwiYWRkVHlwZSIsInR5cGVTdHJpbmciLCJub2RlQXNTdHJpbmciLCJpbmZvIiwiY29tcGxldGUiLCJoYWx0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQXdCQTs7O3lEQUxQO3NCQUVZO3FCQUNROzs7Ozs7QUFFdEIsU0FBU0EsV0FBV0MsUUFBUSxFQUFFQyxhQUFhLEVBQUVDLFdBQVcsRUFBRTtJQUN2RSxJQUFJQyxlQUFlLEtBQUs7SUFFeEJELFlBQVlFLEtBQUssQ0FBQ0o7SUFFbEIsSUFBSUssT0FBTyxJQUFJO0lBRWYsSUFBTUMsV0FBV0MsSUFBQUEsMkJBQW9CLEVBQUNQLFdBQ2hDUSxjQUFjTixZQUFZTyx1QkFBdUIsQ0FBQ0g7SUFFeEQsSUFBSUUsYUFBYTtRQUNmTixZQUFZUSxLQUFLLENBQUMsQUFBQyxhQUFxQixPQUFUSixVQUFTO0lBQzFDLE9BQU87UUFDTCxJQUFNSyxnQkFBZ0JKLElBQUFBLDJCQUFvQixFQUFDTjtRQUUzQyxJQUFJVSxrQkFBa0IsSUFBSSxFQUFFO1lBQzFCTixPQUFPTyxhQUFJLENBQUNDLFlBQVksQ0FBQ1A7UUFDM0IsT0FBTztZQUNMLElBQU1RLFlBQVlaLFlBQVlhLGtCQUFrQixDQUFDSjtZQUVqRCxJQUFJRyxjQUFjLElBQUksRUFBRTtnQkFDdEJaLFlBQVlRLEtBQUssQ0FBQyxBQUFDLG1CQUFnQyxPQUFkQyxlQUFjO1lBQ3JELE9BQU87Z0JBQ0xOLE9BQU9PLGFBQUksQ0FBQ0ksd0JBQXdCLENBQUNWLFVBQVVRO1lBQ2pELENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQUlULFNBQVMsSUFBSSxFQUFFO1FBQ2pCSCxZQUFZZSxPQUFPLENBQUNaO1FBRXBCRixlQUFlLElBQUk7SUFDckIsQ0FBQztJQUVELElBQUlBLGNBQWM7UUFDaEIsSUFBTWUsYUFBYUMsSUFBQUEsb0JBQVksRUFBQ25CO1FBRWhDRSxZQUFZa0IsSUFBSSxDQUFDLEFBQUMsaUJBQTJCLE9BQVhGLFlBQVc7SUFDL0MsQ0FBQztJQUVEZixlQUNFRCxZQUFZbUIsUUFBUSxDQUFDckIsWUFDbkJFLFlBQVlvQixJQUFJLENBQUN0QixTQUFTO0lBRTlCLE9BQU9HO0FBQ1QifQ==