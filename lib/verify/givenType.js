"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyGivenType;
    }
});
function verifyGivenType(typeNode, types, localContext, verifyAhead) {
    var givenTypeVerified = false;
    var typeString = localContext.nodeAsString(typeNode);
    localContext.trace("Verifying the given '".concat(typeString, "' type..."), typeNode);
    var type = localContext.findTypeByTypeNode(typeNode);
    if (type !== null) {
        var verifiedAhead;
        types.push(type);
        verifiedAhead = verifyAhead();
        if (!verifiedAhead) {
            types.pop();
        }
        givenTypeVerified = verifiedAhead; ///
    }
    if (givenTypeVerified) {
        localContext.debug("...verified the given '".concat(typeString, "' type."), typeNode);
    }
    return givenTypeVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZ2l2ZW5UeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlHaXZlblR5cGUodHlwZU5vZGUsIHR5cGVzLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBnaXZlblR5cGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGVTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVOb2RlKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgZ2l2ZW4gJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gLCB0eXBlTm9kZSk7XG5cbiAgY29uc3QgdHlwZSA9IGxvY2FsQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5vZGUodHlwZU5vZGUpO1xuXG4gIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICB0eXBlcy5wdXNoKHR5cGUpXG5cbiAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgIGlmICghdmVyaWZpZWRBaGVhZCkge1xuICAgICAgdHlwZXMucG9wKCk7XG4gICAgfVxuXG4gICAgZ2l2ZW5UeXBlVmVyaWZpZWQgPSB2ZXJpZmllZEFoZWFkOyAvLy9cbiAgfVxuXG4gIGlmIChnaXZlblR5cGVWZXJpZmllZCkge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlIGdpdmVuICcke3R5cGVTdHJpbmd9JyB0eXBlLmAsIHR5cGVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBnaXZlblR5cGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlHaXZlblR5cGUiLCJ0eXBlTm9kZSIsInR5cGVzIiwibG9jYWxDb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJnaXZlblR5cGVWZXJpZmllZCIsInR5cGVTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5vZGUiLCJ2ZXJpZmllZEFoZWFkIiwicHVzaCIsInBvcCIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFFQTs7O2VBQXdCQTs7O0FBQVQsU0FBU0EsZ0JBQWdCQyxRQUFRLEVBQUVDLEtBQUssRUFBRUMsWUFBWSxFQUFFQyxXQUFXO0lBQ2hGLElBQUlDLG9CQUFvQjtJQUV4QixJQUFNQyxhQUFhSCxhQUFhSSxZQUFZLENBQUNOO0lBRTdDRSxhQUFhSyxLQUFLLENBQUMsQUFBQyx3QkFBa0MsT0FBWEYsWUFBVyxjQUFZTDtJQUVsRSxJQUFNUSxPQUFPTixhQUFhTyxrQkFBa0IsQ0FBQ1Q7SUFFN0MsSUFBSVEsU0FBUyxNQUFNO1FBQ2pCLElBQUlFO1FBRUpULE1BQU1VLElBQUksQ0FBQ0g7UUFFWEUsZ0JBQWdCUDtRQUVoQixJQUFJLENBQUNPLGVBQWU7WUFDbEJULE1BQU1XLEdBQUc7UUFDWDtRQUVBUixvQkFBb0JNLGVBQWUsR0FBRztJQUN4QztJQUVBLElBQUlOLG1CQUFtQjtRQUNyQkYsYUFBYVcsS0FBSyxDQUFDLEFBQUMsMEJBQW9DLE9BQVhSLFlBQVcsWUFBVUw7SUFDcEU7SUFFQSxPQUFPSTtBQUNUIn0=