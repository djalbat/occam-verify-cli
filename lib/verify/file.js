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
var _topLevelDeclarations = /*#__PURE__*/ _interopRequireDefault(require("../verify/topLevelDeclarations"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyFile(filePath, releaseContext) {
    var fileVerified;
    releaseContext.debug("Verifying the '".concat(filePath, "' file..."));
    var fileContext = _file.default.fromReleaseContextAndFilePath(releaseContext, filePath), context = fileContext, topLevelDeclarationsVerified = (0, _topLevelDeclarations.default)(fileContext, context);
    fileVerified = topLevelDeclarationsVerified; ///
    if (topLevelDeclarationsVerified) {
        releaseContext.addFileContext(fileContext);
        releaseContext.info("Verified the '".concat(filePath, "' file."));
    }
    return fileVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEZpbGVDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2ZpbGVcIjtcbmltcG9ydCB2ZXJpZnlUb3BMZXZlbERlY2xhcmF0aW9ucyBmcm9tIFwiLi4vdmVyaWZ5L3RvcExldmVsRGVjbGFyYXRpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeUZpbGUoZmlsZVBhdGgsIHJlbGVhc2VDb250ZXh0KSB7XG4gIGxldCBmaWxlVmVyaWZpZWQ7XG5cbiAgcmVsZWFzZUNvbnRleHQuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7ZmlsZVBhdGh9JyBmaWxlLi4uYCk7XG5cbiAgY29uc3QgZmlsZUNvbnRleHQgPSBGaWxlQ29udGV4dC5mcm9tUmVsZWFzZUNvbnRleHRBbmRGaWxlUGF0aChyZWxlYXNlQ29udGV4dCwgZmlsZVBhdGgpLFxuICAgICAgICBjb250ZXh0ID0gZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgdG9wTGV2ZWxEZWNsYXJhdGlvbnNWZXJpZmllZCA9IHZlcmlmeVRvcExldmVsRGVjbGFyYXRpb25zKGZpbGVDb250ZXh0LCBjb250ZXh0KTtcblxuICBmaWxlVmVyaWZpZWQgPSB0b3BMZXZlbERlY2xhcmF0aW9uc1ZlcmlmaWVkOyAgLy8vXG5cbiAgaWYgKHRvcExldmVsRGVjbGFyYXRpb25zVmVyaWZpZWQpIHtcbiAgICByZWxlYXNlQ29udGV4dC5hZGRGaWxlQ29udGV4dChmaWxlQ29udGV4dCk7XG5cbiAgICByZWxlYXNlQ29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7ZmlsZVBhdGh9JyBmaWxlLmApO1xuICB9XG5cbiAgcmV0dXJuIGZpbGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlGaWxlIiwiZmlsZVBhdGgiLCJyZWxlYXNlQ29udGV4dCIsImZpbGVWZXJpZmllZCIsImRlYnVnIiwiZmlsZUNvbnRleHQiLCJGaWxlQ29udGV4dCIsImZyb21SZWxlYXNlQ29udGV4dEFuZEZpbGVQYXRoIiwiY29udGV4dCIsInRvcExldmVsRGVjbGFyYXRpb25zVmVyaWZpZWQiLCJ2ZXJpZnlUb3BMZXZlbERlY2xhcmF0aW9ucyIsImFkZEZpbGVDb250ZXh0IiwiaW5mbyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBS0E7OztlQUF3QkE7Ozt5REFIQTt5RUFDZTs7Ozs7O0FBRXhCLFNBQVNBLFdBQVdDLFFBQVEsRUFBRUMsY0FBYyxFQUFFO0lBQzNELElBQUlDO0lBRUpELGVBQWVFLEtBQUssQ0FBQyxBQUFDLGtCQUEwQixPQUFUSCxVQUFTO0lBRWhELElBQU1JLGNBQWNDLGFBQVcsQ0FBQ0MsNkJBQTZCLENBQUNMLGdCQUFnQkQsV0FDeEVPLFVBQVVILGFBQ1ZJLCtCQUErQkMsSUFBQUEsNkJBQTBCLEVBQUNMLGFBQWFHO0lBRTdFTCxlQUFlTSw4QkFBK0IsR0FBRztJQUVqRCxJQUFJQSw4QkFBOEI7UUFDaENQLGVBQWVTLGNBQWMsQ0FBQ047UUFFOUJILGVBQWVVLElBQUksQ0FBQyxBQUFDLGlCQUF5QixPQUFUWCxVQUFTO0lBQ2hELENBQUM7SUFFRCxPQUFPRTtBQUNUIn0=