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
var _file = /*#__PURE__*/ _interop_require_default(require("../context/file"));
var _topLevel = /*#__PURE__*/ _interop_require_default(require("../verifier/topLevel"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyFile(filePath, releaseContext) {
    var fileVerified = false;
    releaseContext.debug("Verifying the '".concat(filePath, "' file..."));
    var fileContext = _file.default.fromFilePathAndReleaseContext(filePath, releaseContext), node = fileContext.getNode();
    if (node !== null) {
        var verified = _topLevel.default.verify(node, fileContext);
        if (verified) {
            releaseContext.addFileContext(fileContext);
            fileVerified = true;
        }
    }
    if (fileVerified) {
        releaseContext.info("...verified the '".concat(filePath, "' file."));
    }
    return fileVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEZpbGVDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2ZpbGVcIjtcbmltcG9ydCB0b3BMZXZlbFZlcmlmaWVyIGZyb20gXCIuLi92ZXJpZmllci90b3BMZXZlbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlGaWxlKGZpbGVQYXRoLCByZWxlYXNlQ29udGV4dCkge1xuICBsZXQgZmlsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgcmVsZWFzZUNvbnRleHQuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7ZmlsZVBhdGh9JyBmaWxlLi4uYCk7XG5cbiAgY29uc3QgZmlsZUNvbnRleHQgPSBGaWxlQ29udGV4dC5mcm9tRmlsZVBhdGhBbmRSZWxlYXNlQ29udGV4dChmaWxlUGF0aCwgcmVsZWFzZUNvbnRleHQpLFxuICAgICAgICBub2RlID0gZmlsZUNvbnRleHQuZ2V0Tm9kZSgpO1xuXG4gIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdmVyaWZpZWQgPSB0b3BMZXZlbFZlcmlmaWVyLnZlcmlmeShub2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIHJlbGVhc2VDb250ZXh0LmFkZEZpbGVDb250ZXh0KGZpbGVDb250ZXh0KTtcblxuICAgICAgZmlsZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoZmlsZVZlcmlmaWVkKSB7XG4gICAgcmVsZWFzZUNvbnRleHQuaW5mbyhgLi4udmVyaWZpZWQgdGhlICcke2ZpbGVQYXRofScgZmlsZS5gKTtcbiAgfVxuXG4gIHJldHVybiBmaWxlVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5RmlsZSIsImZpbGVQYXRoIiwicmVsZWFzZUNvbnRleHQiLCJmaWxlVmVyaWZpZWQiLCJkZWJ1ZyIsImZpbGVDb250ZXh0IiwiRmlsZUNvbnRleHQiLCJmcm9tRmlsZVBhdGhBbmRSZWxlYXNlQ29udGV4dCIsIm5vZGUiLCJnZXROb2RlIiwidmVyaWZpZWQiLCJ0b3BMZXZlbFZlcmlmaWVyIiwidmVyaWZ5IiwiYWRkRmlsZUNvbnRleHQiLCJpbmZvIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFLQTs7O2VBQXdCQTs7OzJEQUhBOytEQUNLOzs7Ozs7QUFFZCxTQUFTQSxXQUFXQyxRQUFRLEVBQUVDLGNBQWM7SUFDekQsSUFBSUMsZUFBZTtJQUVuQkQsZUFBZUUsS0FBSyxDQUFDLEFBQUMsa0JBQTBCLE9BQVRILFVBQVM7SUFFaEQsSUFBTUksY0FBY0MsYUFBVyxDQUFDQyw2QkFBNkIsQ0FBQ04sVUFBVUMsaUJBQ2xFTSxPQUFPSCxZQUFZSSxPQUFPO0lBRWhDLElBQUlELFNBQVMsTUFBTTtRQUNqQixJQUFNRSxXQUFXQyxpQkFBZ0IsQ0FBQ0MsTUFBTSxDQUFDSixNQUFNSDtRQUUvQyxJQUFJSyxVQUFVO1lBQ1pSLGVBQWVXLGNBQWMsQ0FBQ1I7WUFFOUJGLGVBQWU7UUFDakI7SUFDRjtJQUVBLElBQUlBLGNBQWM7UUFDaEJELGVBQWVZLElBQUksQ0FBQyxBQUFDLG9CQUE0QixPQUFUYixVQUFTO0lBQ25EO0lBRUEsT0FBT0U7QUFDVCJ9