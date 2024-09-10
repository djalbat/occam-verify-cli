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
function verifyType(typeNode, localContext) {
    var typeVerified;
    var typeString = localContext.nodeAsString(typeNode);
    localContext.trace("Verifying the '".concat(typeString, "' type..."), typeNode);
    var typePresent = localContext.isTypePresentByTypeNode(typeNode);
    typeVerified = typePresent; ///
    if (typeVerified) {
        localContext.debug("...verified the '".concat(typeString, "' type."), typeNode);
    }
    return typeVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VHlwZSh0eXBlTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCB0eXBlVmVyaWZpZWQ7XG5cbiAgY29uc3QgdHlwZVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcodHlwZU5vZGUpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmAsIHR5cGVOb2RlKTtcblxuICBjb25zdCB0eXBlUHJlc2VudCA9IGxvY2FsQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTm9kZSh0eXBlTm9kZSk7XG5cbiAgdHlwZVZlcmlmaWVkID0gdHlwZVByZXNlbnQ7IC8vL1xuXG4gIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gLCB0eXBlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdHlwZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVR5cGUiLCJ0eXBlTm9kZSIsImxvY2FsQ29udGV4dCIsInR5cGVWZXJpZmllZCIsInR5cGVTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5vZGUiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBRUE7OztlQUF3QkE7OztBQUFULFNBQVNBLFdBQVdDLFFBQVEsRUFBRUMsWUFBWTtJQUN2RCxJQUFJQztJQUVKLElBQU1DLGFBQWFGLGFBQWFHLFlBQVksQ0FBQ0o7SUFFN0NDLGFBQWFJLEtBQUssQ0FBQyxBQUFDLGtCQUE0QixPQUFYRixZQUFXLGNBQVlIO0lBRTVELElBQU1NLGNBQWNMLGFBQWFNLHVCQUF1QixDQUFDUDtJQUV6REUsZUFBZUksYUFBYSxHQUFHO0lBRS9CLElBQUlKLGNBQWM7UUFDaEJELGFBQWFPLEtBQUssQ0FBQyxBQUFDLG9CQUE4QixPQUFYTCxZQUFXLFlBQVVIO0lBQzlEO0lBRUEsT0FBT0U7QUFDVCJ9