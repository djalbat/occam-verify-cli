"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyTypeDeclaration;
    }
});
var _type = /*#__PURE__*/ _interop_require_default(require("../../type"));
var _query = require("../../utilities/query");
var _constants = require("../../constants");
var _name = require("../../utilities/name");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var firstTypeNodeQuery = (0, _query.nodeQuery)("/typeDeclaration/type[0]"), secondTypeNodeQuery = (0, _query.nodeQuery)("/typeDeclaration/type[1]");
function verifyTypeDeclaration(typeDeclarationNode, fileContext) {
    var typeDeclarationVerified;
    var firstTypeNode = firstTypeNodeQuery(typeDeclarationNode), secondTypeNode = secondTypeNodeQuery(typeDeclarationNode), typeNode = firstTypeNode, superTypeNode = secondTypeNode, typeString = fileContext.nodeAsString(typeNode), superTypeString = superTypeNode === null ? _constants.EMPTY_STRING : fileContext.nodeAsString(superTypeNode);
    superTypeString === _constants.EMPTY_STRING ? fileContext.trace("Verifying the '".concat(typeString, "' type declaration..."), typeDeclarationNode) : fileContext.trace("Verifying the '".concat(typeString, ":").concat(superTypeString, "' type declaration..."), typeDeclarationNode);
    var typeVerified = verifyType(typeNode, superTypeNode, fileContext);
    typeDeclarationVerified = typeVerified; ///
    if (typeDeclarationVerified) {
        superTypeString === _constants.EMPTY_STRING ? fileContext.trace("...verified the '".concat(typeString, "' type declaration."), typeDeclarationNode) : fileContext.trace("...verified the '".concat(typeString, ":").concat(superTypeString, "' type declaration."), typeDeclarationNode);
    }
    return typeDeclarationVerified;
}
function verifyType(typeNode, superTypeNode, fileContext) {
    var typeVerified = false;
    var typeString = fileContext.nodeAsString(typeNode);
    fileContext.trace("Verifying the '".concat(typeString, "' type..."), typeNode);
    var typePresent = fileContext.isTypePresentByTypeNode(typeNode);
    if (typePresent) {
        var typeString1 = fileContext.nodeAsString(typeNode);
        fileContext.debug("The type '".concat(typeString1, "' is already present."), typeNode);
    } else {
        var type;
        var typeName = (0, _name.typeNameFromTypeNode)(typeNode);
        if (superTypeNode === null) {
            type = _type.default.fromTypeName(typeName);
        } else {
            var superType = fileContext.findTypeByTypeNode(superTypeNode);
            if (superType === null) {
                var superTypeString = fileContext.nodeAsString(superTypeNode);
                fileContext.debug("The super-type '".concat(superTypeString, "' is not present."), typeNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvZGVjbGFyYXRpb24vdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4uLy4uL3R5cGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgdHlwZU5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL25hbWVcIjtcblxuY29uc3QgZmlyc3RUeXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVEZWNsYXJhdGlvbi90eXBlWzBdXCIpLFxuICAgICAgc2Vjb25kVHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlRGVjbGFyYXRpb24vdHlwZVsxXVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VHlwZURlY2xhcmF0aW9uKHR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCB0eXBlRGVjbGFyYXRpb25WZXJpZmllZDtcblxuICBjb25zdCBmaXJzdFR5cGVOb2RlID0gZmlyc3RUeXBlTm9kZVF1ZXJ5KHR5cGVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICBzZWNvbmRUeXBlTm9kZSA9IHNlY29uZFR5cGVOb2RlUXVlcnkodHlwZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIHR5cGVOb2RlID0gZmlyc3RUeXBlTm9kZSwgLy8vXG4gICAgICAgIHN1cGVyVHlwZU5vZGUgPSBzZWNvbmRUeXBlTm9kZSwgLy8vXG4gICAgICAgIHR5cGVTdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcodHlwZU5vZGUpLFxuICAgICAgICBzdXBlclR5cGVTdHJpbmcgPSAoc3VwZXJUeXBlTm9kZSA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcoc3VwZXJUeXBlTm9kZSk7XG5cbiAgKHN1cGVyVHlwZVN0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSA/XG4gICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgZGVjbGFyYXRpb24uLi5gLCB0eXBlRGVjbGFyYXRpb25Ob2RlKSA6XG4gICAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfToke3N1cGVyVHlwZVN0cmluZ30nIHR5cGUgZGVjbGFyYXRpb24uLi5gLCB0eXBlRGVjbGFyYXRpb25Ob2RlKTtcblxuICBjb25zdCB0eXBlVmVyaWZpZWQgPSB2ZXJpZnlUeXBlKHR5cGVOb2RlLCBzdXBlclR5cGVOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgdHlwZURlY2xhcmF0aW9uVmVyaWZpZWQgPSB0eXBlVmVyaWZpZWQ7IC8vL1xuXG4gIGlmICh0eXBlRGVjbGFyYXRpb25WZXJpZmllZCkge1xuICAgIChzdXBlclR5cGVTdHJpbmcgPT09IEVNUFRZX1NUUklORykgP1xuICAgICAgZmlsZUNvbnRleHQudHJhY2UoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBkZWNsYXJhdGlvbi5gLCB0eXBlRGVjbGFyYXRpb25Ob2RlKSA6XG4gICAgICAgIGZpbGVDb250ZXh0LnRyYWNlKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ306JHtzdXBlclR5cGVTdHJpbmd9JyB0eXBlIGRlY2xhcmF0aW9uLmAsIHR5cGVEZWNsYXJhdGlvbk5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVEZWNsYXJhdGlvblZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlUeXBlKHR5cGVOb2RlLCBzdXBlclR5cGVOb2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgdHlwZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgdHlwZVN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlTm9kZSk7XG5cbiAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gLCB0eXBlTm9kZSk7XG5cbiAgY29uc3QgdHlwZVByZXNlbnQgPSBmaWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTm9kZSh0eXBlTm9kZSk7XG5cbiAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgY29uc3QgdHlwZVN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlTm9kZSk7XG5cbiAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlIHR5cGUgJyR7dHlwZVN0cmluZ30nIGlzIGFscmVhZHkgcHJlc2VudC5gLCB0eXBlTm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKTtcblxuICAgIGlmIChzdXBlclR5cGVOb2RlID09PSBudWxsKSB7XG4gICAgICB0eXBlID0gVHlwZS5mcm9tVHlwZU5hbWUodHlwZU5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdXBlclR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5vZGUoc3VwZXJUeXBlTm9kZSk7XG5cbiAgICAgIGlmIChzdXBlclR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKHN1cGVyVHlwZU5vZGUpO1xuXG4gICAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGBUaGUgc3VwZXItdHlwZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBpcyBub3QgcHJlc2VudC5gLCB0eXBlTm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlID0gVHlwZS5mcm9tVHlwZU5hbWVBbmRTdXBlclR5cGUodHlwZU5hbWUsIHN1cGVyVHlwZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgIGZpbGVDb250ZXh0LmFkZFR5cGUodHlwZSk7XG5cbiAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVWZXJpZmllZCkge1xuICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCwgdHlwZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUeXBlRGVjbGFyYXRpb24iLCJmaXJzdFR5cGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzZWNvbmRUeXBlTm9kZVF1ZXJ5IiwidHlwZURlY2xhcmF0aW9uTm9kZSIsImZpbGVDb250ZXh0IiwidHlwZURlY2xhcmF0aW9uVmVyaWZpZWQiLCJmaXJzdFR5cGVOb2RlIiwic2Vjb25kVHlwZU5vZGUiLCJ0eXBlTm9kZSIsInN1cGVyVHlwZU5vZGUiLCJ0eXBlU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwic3VwZXJUeXBlU3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwidHJhY2UiLCJ0eXBlVmVyaWZpZWQiLCJ2ZXJpZnlUeXBlIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTm9kZSIsImRlYnVnIiwidHlwZSIsInR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJUeXBlIiwiZnJvbVR5cGVOYW1lIiwic3VwZXJUeXBlIiwiZmluZFR5cGVCeVR5cGVOb2RlIiwiZnJvbVR5cGVOYW1lQW5kU3VwZXJUeXBlIiwiYWRkVHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUF3QkE7OzsyREFUUDtxQkFFUzt5QkFDRztvQkFDUTs7Ozs7O0FBRXJDLElBQU1DLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQyw2QkFDL0JDLHNCQUFzQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUV2QixTQUFTRixzQkFBc0JJLG1CQUFtQixFQUFFQyxXQUFXO0lBQzVFLElBQUlDO0lBRUosSUFBTUMsZ0JBQWdCTixtQkFBbUJHLHNCQUNuQ0ksaUJBQWlCTCxvQkFBb0JDLHNCQUNyQ0ssV0FBV0YsZUFDWEcsZ0JBQWdCRixnQkFDaEJHLGFBQWFOLFlBQVlPLFlBQVksQ0FBQ0gsV0FDdENJLGtCQUFrQixBQUFDSCxrQkFBa0IsT0FDakJJLHVCQUFZLEdBQ1ZULFlBQVlPLFlBQVksQ0FBQ0Y7SUFFcERHLG9CQUFvQkMsdUJBQVksR0FDL0JULFlBQVlVLEtBQUssQ0FBQyxBQUFDLGtCQUE0QixPQUFYSixZQUFXLDBCQUF3QlAsdUJBQ3JFQyxZQUFZVSxLQUFLLENBQUMsQUFBQyxrQkFBK0JGLE9BQWRGLFlBQVcsS0FBbUIsT0FBaEJFLGlCQUFnQiwwQkFBd0JUO0lBRTlGLElBQU1ZLGVBQWVDLFdBQVdSLFVBQVVDLGVBQWVMO0lBRXpEQywwQkFBMEJVLGNBQWMsR0FBRztJQUUzQyxJQUFJVix5QkFBeUI7UUFDMUJPLG9CQUFvQkMsdUJBQVksR0FDL0JULFlBQVlVLEtBQUssQ0FBQyxBQUFDLG9CQUE4QixPQUFYSixZQUFXLHdCQUFzQlAsdUJBQ3JFQyxZQUFZVSxLQUFLLENBQUMsQUFBQyxvQkFBaUNGLE9BQWRGLFlBQVcsS0FBbUIsT0FBaEJFLGlCQUFnQix3QkFBc0JUO0lBQ2hHO0lBRUEsT0FBT0U7QUFDVDtBQUVBLFNBQVNXLFdBQVdSLFFBQVEsRUFBRUMsYUFBYSxFQUFFTCxXQUFXO0lBQ3RELElBQUlXLGVBQWU7SUFFbkIsSUFBTUwsYUFBYU4sWUFBWU8sWUFBWSxDQUFDSDtJQUU1Q0osWUFBWVUsS0FBSyxDQUFDLEFBQUMsa0JBQTRCLE9BQVhKLFlBQVcsY0FBWUY7SUFFM0QsSUFBTVMsY0FBY2IsWUFBWWMsdUJBQXVCLENBQUNWO0lBRXhELElBQUlTLGFBQWE7UUFDZixJQUFNUCxjQUFhTixZQUFZTyxZQUFZLENBQUNIO1FBRTVDSixZQUFZZSxLQUFLLENBQUMsQUFBQyxhQUF1QixPQUFYVCxhQUFXLDBCQUF3QkY7SUFDcEUsT0FBTztRQUNMLElBQUlZO1FBRUosSUFBTUMsV0FBV0MsSUFBQUEsMEJBQW9CLEVBQUNkO1FBRXRDLElBQUlDLGtCQUFrQixNQUFNO1lBQzFCVyxPQUFPRyxhQUFJLENBQUNDLFlBQVksQ0FBQ0g7UUFDM0IsT0FBTztZQUNMLElBQU1JLFlBQVlyQixZQUFZc0Isa0JBQWtCLENBQUNqQjtZQUVqRCxJQUFJZ0IsY0FBYyxNQUFNO2dCQUN0QixJQUFNYixrQkFBa0JSLFlBQVlPLFlBQVksQ0FBQ0Y7Z0JBRWpETCxZQUFZZSxLQUFLLENBQUMsQUFBQyxtQkFBa0MsT0FBaEJQLGlCQUFnQixzQkFBb0JKO1lBQzNFLE9BQU87Z0JBQ0xZLE9BQU9HLGFBQUksQ0FBQ0ksd0JBQXdCLENBQUNOLFVBQVVJO1lBQ2pEO1FBQ0Y7UUFFQSxJQUFJTCxTQUFTLE1BQU07WUFDakJoQixZQUFZd0IsT0FBTyxDQUFDUjtZQUVwQkwsZUFBZTtRQUNqQjtJQUNGO0lBRUEsSUFBSUEsY0FBYztRQUNoQlgsWUFBWWUsS0FBSyxDQUFDLEFBQUMsb0JBQThCLE9BQVhULFlBQVcsWUFBVUY7SUFDN0Q7SUFFQSxPQUFPTztBQUNUIn0=