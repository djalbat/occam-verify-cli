"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyError;
    }
});
function verifyError(errorNode, fileContext) {
    var errorVerified = false;
    var errorString = fileContext.nodeAsString(errorNode);
    fileContext.debug("The '".concat(errorString, "' error cannot be verified."), errorNode);
    return errorVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZXJyb3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeUVycm9yKGVycm9yTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IGVycm9yVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBlcnJvclN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhlcnJvck5vZGUpXG5cbiAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHtlcnJvclN0cmluZ30nIGVycm9yIGNhbm5vdCBiZSB2ZXJpZmllZC5gLCBlcnJvck5vZGUpO1xuXG4gIHJldHVybiBlcnJvclZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeUVycm9yIiwiZXJyb3JOb2RlIiwiZmlsZUNvbnRleHQiLCJlcnJvclZlcmlmaWVkIiwiZXJyb3JTdHJpbmciLCJub2RlQXNTdHJpbmciLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBRUE7OztlQUF3QkE7OztBQUFULFNBQVNBLFlBQVlDLFNBQVMsRUFBRUMsV0FBVztJQUN4RCxJQUFJQyxnQkFBZ0I7SUFFcEIsSUFBTUMsY0FBY0YsWUFBWUcsWUFBWSxDQUFDSjtJQUU3Q0MsWUFBWUksS0FBSyxDQUFDLEFBQUMsUUFBbUIsT0FBWkYsYUFBWSxnQ0FBOEJIO0lBRXBFLE9BQU9FO0FBQ1QifQ==