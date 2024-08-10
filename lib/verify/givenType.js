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
var _query = require("../utilities/query");
function verifyGivenType(typeNode, types, localContext, verifyAhead) {
    var givenTypeVerified = false;
    var typeString = localContext.nodeAsString(typeNode);
    localContext.trace("Verifying the given '".concat(typeString, "' type..."), typeNode);
    var typeName = (0, _query.typeNameFromTypeNode)(typeNode), type = localContext.findTypeByTypeName(typeName);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZ2l2ZW5UeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB0eXBlTmFtZUZyb21UeXBlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5R2l2ZW5UeXBlKHR5cGVOb2RlLCB0eXBlcywgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgZ2l2ZW5UeXBlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB0eXBlU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlTm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlIGdpdmVuICcke3R5cGVTdHJpbmd9JyB0eXBlLi4uYCwgdHlwZU5vZGUpO1xuXG4gIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICB0eXBlID0gbG9jYWxDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgIHR5cGVzLnB1c2godHlwZSlcblxuICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgaWYgKCF2ZXJpZmllZEFoZWFkKSB7XG4gICAgICB0eXBlcy5wb3AoKTtcbiAgICB9XG5cbiAgICBnaXZlblR5cGVWZXJpZmllZCA9IHZlcmlmaWVkQWhlYWQ7IC8vL1xuICB9XG5cbiAgaWYgKGdpdmVuVHlwZVZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgZ2l2ZW4gJyR7dHlwZVN0cmluZ30nIHR5cGUuYCwgdHlwZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGdpdmVuVHlwZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeUdpdmVuVHlwZSIsInR5cGVOb2RlIiwidHlwZXMiLCJsb2NhbENvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsImdpdmVuVHlwZVZlcmlmaWVkIiwidHlwZVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwidHlwZU5hbWUiLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSIsInR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ2ZXJpZmllZEFoZWFkIiwicHVzaCIsInBvcCIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXdCQTs7O3FCQUZhO0FBRXRCLFNBQVNBLGdCQUFnQkMsUUFBUSxFQUFFQyxLQUFLLEVBQUVDLFlBQVksRUFBRUMsV0FBVztJQUNoRixJQUFJQyxvQkFBb0I7SUFFeEIsSUFBTUMsYUFBYUgsYUFBYUksWUFBWSxDQUFDTjtJQUU3Q0UsYUFBYUssS0FBSyxDQUFDLEFBQUMsd0JBQWtDLE9BQVhGLFlBQVcsY0FBWUw7SUFFbEUsSUFBTVEsV0FBV0MsSUFBQUEsMkJBQW9CLEVBQUNULFdBQ2hDVSxPQUFPUixhQUFhUyxrQkFBa0IsQ0FBQ0g7SUFFN0MsSUFBSUUsU0FBUyxNQUFNO1FBQ2pCLElBQUlFO1FBRUpYLE1BQU1ZLElBQUksQ0FBQ0g7UUFFWEUsZ0JBQWdCVDtRQUVoQixJQUFJLENBQUNTLGVBQWU7WUFDbEJYLE1BQU1hLEdBQUc7UUFDWDtRQUVBVixvQkFBb0JRLGVBQWUsR0FBRztJQUN4QztJQUVBLElBQUlSLG1CQUFtQjtRQUNyQkYsYUFBYWEsS0FBSyxDQUFDLEFBQUMsMEJBQW9DLE9BQVhWLFlBQVcsWUFBVUw7SUFDcEU7SUFFQSxPQUFPSTtBQUNUIn0=