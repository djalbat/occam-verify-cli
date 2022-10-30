"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyFile;
    }
});
var _file = /*#__PURE__*/ _interopRequireDefault(require("../context/file"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyFile(filePath) {
    var releaseContext = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this;
    var fileVerified;
    releaseContext.debug("Verifying the '".concat(filePath, "' file..."));
    var fileContext = _file.default.fromReleaseContextAndFilePath(releaseContext, filePath), topLevelDeclarationsVerified = fileContext.verifyTopLevelDeclarations();
    fileVerified = topLevelDeclarationsVerified; ///
    if (topLevelDeclarationsVerified) {
        releaseContext.addFileContext(fileContext);
        releaseContext.info("Verified the '".concat(filePath, "' file."));
    }
    return fileVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEZpbGVDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2ZpbGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5RmlsZShmaWxlUGF0aCwgcmVsZWFzZUNvbnRleHQgPSB0aGlzKSB7XG4gIGxldCBmaWxlVmVyaWZpZWQ7XG5cbiAgcmVsZWFzZUNvbnRleHQuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7ZmlsZVBhdGh9JyBmaWxlLi4uYCk7XG5cbiAgY29uc3QgZmlsZUNvbnRleHQgPSBGaWxlQ29udGV4dC5mcm9tUmVsZWFzZUNvbnRleHRBbmRGaWxlUGF0aChyZWxlYXNlQ29udGV4dCwgZmlsZVBhdGgpLFxuICAgICAgICB0b3BMZXZlbERlY2xhcmF0aW9uc1ZlcmlmaWVkID0gZmlsZUNvbnRleHQudmVyaWZ5VG9wTGV2ZWxEZWNsYXJhdGlvbnMoKVxuXG4gIGZpbGVWZXJpZmllZCA9IHRvcExldmVsRGVjbGFyYXRpb25zVmVyaWZpZWQ7ICAvLy9cblxuICBpZiAodG9wTGV2ZWxEZWNsYXJhdGlvbnNWZXJpZmllZCkge1xuICAgIHJlbGVhc2VDb250ZXh0LmFkZEZpbGVDb250ZXh0KGZpbGVDb250ZXh0KTtcblxuICAgIHJlbGVhc2VDb250ZXh0LmluZm8oYFZlcmlmaWVkIHRoZSAnJHtmaWxlUGF0aH0nIGZpbGUuYCk7XG4gIH1cblxuICByZXR1cm4gZmlsZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeUZpbGUiLCJmaWxlUGF0aCIsInJlbGVhc2VDb250ZXh0IiwiZmlsZVZlcmlmaWVkIiwiZGVidWciLCJmaWxlQ29udGV4dCIsIkZpbGVDb250ZXh0IiwiZnJvbVJlbGVhc2VDb250ZXh0QW5kRmlsZVBhdGgiLCJ0b3BMZXZlbERlY2xhcmF0aW9uc1ZlcmlmaWVkIiwidmVyaWZ5VG9wTGV2ZWxEZWNsYXJhdGlvbnMiLCJhZGRGaWxlQ29udGV4dCIsImluZm8iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBd0JBOzs7eURBRkE7Ozs7OztBQUVULFNBQVNBLFdBQVdDLFFBQVEsRUFBeUI7UUFBdkJDLGlCQUFBQSxpRUFBaUIsSUFBSTtJQUNoRSxJQUFJQztJQUVKRCxlQUFlRSxLQUFLLENBQUMsQUFBQyxrQkFBMEIsT0FBVEgsVUFBUztJQUVoRCxJQUFNSSxjQUFjQyxhQUFXLENBQUNDLDZCQUE2QixDQUFDTCxnQkFBZ0JELFdBQ3hFTywrQkFBK0JILFlBQVlJLDBCQUEwQjtJQUUzRU4sZUFBZUssOEJBQStCLEdBQUc7SUFFakQsSUFBSUEsOEJBQThCO1FBQ2hDTixlQUFlUSxjQUFjLENBQUNMO1FBRTlCSCxlQUFlUyxJQUFJLENBQUMsQUFBQyxpQkFBeUIsT0FBVFYsVUFBUztJQUNoRCxDQUFDO0lBRUQsT0FBT0U7QUFDVCJ9