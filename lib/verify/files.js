"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyFiles;
    }
});
var _file = /*#__PURE__*/ _interop_require_default(require("../verify/file"));
var _occamfilesystem = require("occam-file-system");
var _array = require("../utilities/array");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var isFilePathFlorenceFilePath = _occamfilesystem.filePathUtilities.isFilePathFlorenceFilePath;
function verifyFiles(releaseContext) {
    var _loop = function() {
        var filePathsLength = filePaths.length;
        if (filePathsLength === 0) {
            filesVerified = true;
            return "break";
        }
        var verifiedFilePaths = [];
        filePaths.forEach(function(filePath) {
            var fileVerified = (0, _file.default)(filePath, releaseContext);
            if (fileVerified) {
                var verifiedFilePath = filePath; ///
                verifiedFilePaths.push(verifiedFilePath);
            }
        });
        var verifiedFilePathsLength = verifiedFilePaths.length, fileVerified = verifiedFilePathsLength > 0;
        if (!fileVerified) {
            return "break";
        }
        (0, _array.leftDifference)(filePaths, verifiedFilePaths);
    };
    var filesVerified = false;
    var filePaths = releaseContext.getFilePaths();
    (0, _array.filter)(filePaths, function(filePath) {
        var filePathFlorenceFilePath = isFilePathFlorenceFilePath(filePath);
        if (filePathFlorenceFilePath) {
            return true;
        }
    });
    for(;;){
        var _ret = _loop();
        if (_ret === "break") break;
    }
    return filesVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZmlsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlGaWxlIGZyb20gXCIuLi92ZXJpZnkvZmlsZVwiO1xuXG5pbXBvcnQgeyBmaWxlUGF0aFV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1maWxlLXN5c3RlbVwiO1xuXG5pbXBvcnQgeyBmaWx0ZXIsIGxlZnREaWZmZXJlbmNlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jb25zdCB7IGlzRmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoIH0gPSBmaWxlUGF0aFV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5RmlsZXMocmVsZWFzZUNvbnRleHQpIHtcbiAgbGV0IGZpbGVzVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBmaWxlUGF0aHMgPSByZWxlYXNlQ29udGV4dC5nZXRGaWxlUGF0aHMoKTtcblxuICBmaWx0ZXIoZmlsZVBhdGhzLCAoZmlsZVBhdGgpID0+IHtcbiAgICBjb25zdCBmaWxlUGF0aEZsb3JlbmNlRmlsZVBhdGggPSBpc0ZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aChmaWxlUGF0aCk7XG5cbiAgICBpZiAoZmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pXG5cbiAgZm9yICg7Oykge1xuICAgIGNvbnN0IGZpbGVQYXRoc0xlbmd0aCA9IGZpbGVQYXRocy5sZW5ndGg7XG5cbiAgICBpZiAoZmlsZVBhdGhzTGVuZ3RoID09PSAwKSB7XG4gICAgICBmaWxlc1ZlcmlmaWVkID0gdHJ1ZTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY29uc3QgdmVyaWZpZWRGaWxlUGF0aHMgPSBbXTtcblxuICAgIGZpbGVQYXRocy5mb3JFYWNoKChmaWxlUGF0aCkgPT4ge1xuICAgICAgY29uc3QgZmlsZVZlcmlmaWVkID0gdmVyaWZ5RmlsZShmaWxlUGF0aCwgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICBpZiAoZmlsZVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHZlcmlmaWVkRmlsZVBhdGggPSBmaWxlUGF0aDsgIC8vL1xuXG4gICAgICAgIHZlcmlmaWVkRmlsZVBhdGhzLnB1c2godmVyaWZpZWRGaWxlUGF0aCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCB2ZXJpZmllZEZpbGVQYXRoc0xlbmd0aCA9IHZlcmlmaWVkRmlsZVBhdGhzLmxlbmd0aCxcbiAgICAgICAgICBmaWxlVmVyaWZpZWQgPSAodmVyaWZpZWRGaWxlUGF0aHNMZW5ndGggPiAwKTtcblxuICAgIGlmICghZmlsZVZlcmlmaWVkKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBsZWZ0RGlmZmVyZW5jZShmaWxlUGF0aHMsIHZlcmlmaWVkRmlsZVBhdGhzKTtcbiAgfVxuXG4gIHJldHVybiBmaWxlc1ZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeUZpbGVzIiwiaXNGaWxlUGF0aEZsb3JlbmNlRmlsZVBhdGgiLCJmaWxlUGF0aFV0aWxpdGllcyIsInJlbGVhc2VDb250ZXh0IiwiZmlsZVBhdGhzTGVuZ3RoIiwiZmlsZVBhdGhzIiwibGVuZ3RoIiwiZmlsZXNWZXJpZmllZCIsInZlcmlmaWVkRmlsZVBhdGhzIiwiZm9yRWFjaCIsImZpbGVQYXRoIiwiZmlsZVZlcmlmaWVkIiwidmVyaWZ5RmlsZSIsInZlcmlmaWVkRmlsZVBhdGgiLCJwdXNoIiwidmVyaWZpZWRGaWxlUGF0aHNMZW5ndGgiLCJsZWZ0RGlmZmVyZW5jZSIsImdldEZpbGVQYXRocyIsImZpbHRlciIsImZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUF3QkE7OzsyREFSRDsrQkFFVztxQkFFSzs7Ozs7O0FBRXZDLElBQU0sQUFBRUMsNkJBQStCQyxtQ0FBL0JEO0FBRU8sU0FBU0QsWUFBWUcsY0FBYzs7UUFjOUMsSUFBTUMsa0JBQWtCQyxVQUFVQztRQUVsQyxJQUFJRixvQkFBb0IsR0FBRztZQUN6QkcsZ0JBQWdCO1lBRWhCLE9BQUE7UUFDRjtRQUVBLElBQU1DLG9CQUFvQixFQUFFO1FBRTVCSCxVQUFVSSxRQUFRLFNBQUNDO1lBQ2pCLElBQU1DLGVBQWVDLElBQUFBLGVBQVdGLFVBQVVQO1lBRTFDLElBQUlRLGNBQWM7Z0JBQ2hCLElBQU1FLG1CQUFtQkgsVUFBVyxHQUFHO2dCQUV2Q0Ysa0JBQWtCTSxLQUFLRDtZQUN6QjtRQUNGO1FBRUEsSUFBTUUsMEJBQTBCUCxrQkFBa0JGLFFBQzVDSyxlQUFnQkksMEJBQTBCO1FBRWhELElBQUksQ0FBQ0osY0FBYztZQUNqQixPQUFBO1FBQ0Y7UUFFQUssSUFBQUEsdUJBQWVYLFdBQVdHO0lBQzVCO0lBekNBLElBQUlELGdCQUFnQjtJQUVwQixJQUFNRixZQUFZRixlQUFlYztJQUVqQ0MsSUFBQUEsZUFBT2IsV0FBVyxTQUFDSztRQUNqQixJQUFNUywyQkFBMkJsQiwyQkFBMkJTO1FBRTVELElBQUlTLDBCQUEwQjtZQUM1QixPQUFPO1FBQ1Q7SUFDRjtJQUVBOzs7O0lBK0JBLE9BQU9aO0FBQ1QifQ==