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
function verifyType(typeNode, localContext, verifyAhead) {
    var typeVerified = false;
    var typeString = localContext.nodeAsString(typeNode);
    localContext.trace("Verifying the '".concat(typeString, "' type..."), typeNode);
    var typePresent = localContext.isTypePresentByTypeNode(typeNode);
    if (typePresent) {
        var verifiedAhead = verifyAhead();
        typeVerified = verifiedAhead; ///
    }
    if (typeVerified) {
        localContext.debug("...verified the '".concat(typeString, "' type."), typeNode);
    }
    return typeVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VHlwZSh0eXBlTm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdHlwZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgdHlwZVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcodHlwZU5vZGUpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmAsIHR5cGVOb2RlKTtcblxuICBjb25zdCB0eXBlUHJlc2VudCA9IGxvY2FsQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTm9kZSh0eXBlTm9kZSk7XG5cbiAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICB0eXBlVmVyaWZpZWQgPSB2ZXJpZmllZEFoZWFkOyAvLy9cbiAgfVxuXG4gIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gLCB0eXBlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdHlwZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVR5cGUiLCJ0eXBlTm9kZSIsImxvY2FsQ29udGV4dCIsInZlcmlmeUFoZWFkIiwidHlwZVZlcmlmaWVkIiwidHlwZVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTm9kZSIsInZlcmlmaWVkQWhlYWQiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBRUE7OztlQUF3QkE7OztBQUFULFNBQVNBLFdBQVdDLFFBQVEsRUFBRUMsWUFBWSxFQUFFQyxXQUFXO0lBQ3BFLElBQUlDLGVBQWU7SUFFbkIsSUFBTUMsYUFBYUgsYUFBYUksWUFBWSxDQUFDTDtJQUU3Q0MsYUFBYUssS0FBSyxDQUFDLEFBQUMsa0JBQTRCLE9BQVhGLFlBQVcsY0FBWUo7SUFFNUQsSUFBTU8sY0FBY04sYUFBYU8sdUJBQXVCLENBQUNSO0lBRXpELElBQUlPLGFBQWE7UUFDZixJQUFNRSxnQkFBZ0JQO1FBRXRCQyxlQUFlTSxlQUFlLEdBQUc7SUFDbkM7SUFFQSxJQUFJTixjQUFjO1FBQ2hCRixhQUFhUyxLQUFLLENBQUMsQUFBQyxvQkFBOEIsT0FBWE4sWUFBVyxZQUFVSjtJQUM5RDtJQUVBLE9BQU9HO0FBQ1QifQ==