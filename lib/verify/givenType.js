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
function verifyGivenType(typeNode, types, context, verifyAhead) {
    var givenTypeVerified = false;
    var typeString = context.nodeAsString(typeNode);
    context.trace("Verifying the given '".concat(typeString, "' type..."), typeNode);
    var typeName = (0, _query.typeNameFromTypeNode)(typeNode), type = context.findTypeByTypeName(typeName);
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
        context.debug("...verified the given '".concat(typeString, "' type."), typeNode);
    }
    return givenTypeVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZ2l2ZW5UeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB0eXBlTmFtZUZyb21UeXBlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5R2l2ZW5UeXBlKHR5cGVOb2RlLCB0eXBlcywgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IGdpdmVuVHlwZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgdHlwZVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVOb2RlKTtcblxuICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlIGdpdmVuICcke3R5cGVTdHJpbmd9JyB0eXBlLi4uYCwgdHlwZU5vZGUpO1xuXG4gIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICB0eXBlcy5wdXNoKHR5cGUpXG5cbiAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgIGlmICghdmVyaWZpZWRBaGVhZCkge1xuICAgICAgdHlwZXMucG9wKCk7XG4gICAgfVxuXG4gICAgZ2l2ZW5UeXBlVmVyaWZpZWQgPSB2ZXJpZmllZEFoZWFkOyAvLy9cbiAgfVxuXG4gIGlmIChnaXZlblR5cGVWZXJpZmllZCkge1xuICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSBnaXZlbiAnJHt0eXBlU3RyaW5nfScgdHlwZS5gLCB0eXBlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gZ2l2ZW5UeXBlVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5R2l2ZW5UeXBlIiwidHlwZU5vZGUiLCJ0eXBlcyIsImNvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsImdpdmVuVHlwZVZlcmlmaWVkIiwidHlwZVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwidHlwZU5hbWUiLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSIsInR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ2ZXJpZmllZEFoZWFkIiwicHVzaCIsInBvcCIsImRlYnVnIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXdCQTs7O3FCQUZhO0FBRXRCLFNBQVNBLGdCQUFnQkMsUUFBUSxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsV0FBVztJQUMzRSxJQUFJQyxvQkFBb0I7SUFFeEIsSUFBTUMsYUFBYUgsUUFBUUksWUFBWSxDQUFDTjtJQUV4Q0UsUUFBUUssS0FBSyxDQUFDLEFBQUMsd0JBQWtDLE9BQVhGLFlBQVcsY0FBWUw7SUFFN0QsSUFBTVEsV0FBV0MsSUFBQUEsMkJBQW9CLEVBQUNULFdBQ2hDVSxPQUFPUixRQUFRUyxrQkFBa0IsQ0FBQ0g7SUFFeEMsSUFBSUUsU0FBUyxNQUFNO1FBQ2pCLElBQUlFO1FBRUpYLE1BQU1ZLElBQUksQ0FBQ0g7UUFFWEUsZ0JBQWdCVDtRQUVoQixJQUFJLENBQUNTLGVBQWU7WUFDbEJYLE1BQU1hLEdBQUc7UUFDWDtRQUVBVixvQkFBb0JRLGVBQWUsR0FBRztJQUN4QztJQUVBLElBQUlSLG1CQUFtQjtRQUNyQkYsUUFBUWEsS0FBSyxDQUFDLEFBQUMsMEJBQW9DLE9BQVhWLFlBQVcsWUFBVUw7SUFDL0Q7SUFFQSxPQUFPSTtBQUNUIn0=