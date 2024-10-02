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
var _occamentities = require("occam-entities");
var _array = require("../utilities/array");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var isFilePathNominalFilePath = _occamentities.filePathUtilities.isFilePathNominalFilePath;
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
        var filePathNominalFilePath = isFilePathNominalFilePath(filePath);
        if (filePathNominalFilePath) {
            return true;
        }
    });
    for(;;){
        var _ret = _loop();
        if (_ret === "break") break;
    }
    return filesVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZmlsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlGaWxlIGZyb20gXCIuLi92ZXJpZnkvZmlsZVwiO1xuXG5pbXBvcnQgeyBmaWxlUGF0aFV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1lbnRpdGllc1wiO1xuXG5pbXBvcnQgeyBmaWx0ZXIsIGxlZnREaWZmZXJlbmNlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jb25zdCB7IGlzRmlsZVBhdGhOb21pbmFsRmlsZVBhdGggfSA9IGZpbGVQYXRoVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlGaWxlcyhyZWxlYXNlQ29udGV4dCkge1xuICBsZXQgZmlsZXNWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGZpbGVQYXRocyA9IHJlbGVhc2VDb250ZXh0LmdldEZpbGVQYXRocygpO1xuXG4gIGZpbHRlcihmaWxlUGF0aHMsIChmaWxlUGF0aCkgPT4ge1xuICAgIGNvbnN0IGZpbGVQYXRoTm9taW5hbEZpbGVQYXRoID0gaXNGaWxlUGF0aE5vbWluYWxGaWxlUGF0aChmaWxlUGF0aCk7XG5cbiAgICBpZiAoZmlsZVBhdGhOb21pbmFsRmlsZVBhdGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgZm9yICg7Oykge1xuICAgIGNvbnN0IGZpbGVQYXRoc0xlbmd0aCA9IGZpbGVQYXRocy5sZW5ndGg7XG5cbiAgICBpZiAoZmlsZVBhdGhzTGVuZ3RoID09PSAwKSB7XG4gICAgICBmaWxlc1ZlcmlmaWVkID0gdHJ1ZTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY29uc3QgdmVyaWZpZWRGaWxlUGF0aHMgPSBbXTtcblxuICAgIGZpbGVQYXRocy5mb3JFYWNoKChmaWxlUGF0aCkgPT4ge1xuICAgICAgY29uc3QgZmlsZVZlcmlmaWVkID0gdmVyaWZ5RmlsZShmaWxlUGF0aCwgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICBpZiAoZmlsZVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHZlcmlmaWVkRmlsZVBhdGggPSBmaWxlUGF0aDsgIC8vL1xuXG4gICAgICAgIHZlcmlmaWVkRmlsZVBhdGhzLnB1c2godmVyaWZpZWRGaWxlUGF0aCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCB2ZXJpZmllZEZpbGVQYXRoc0xlbmd0aCA9IHZlcmlmaWVkRmlsZVBhdGhzLmxlbmd0aCxcbiAgICAgICAgICBmaWxlVmVyaWZpZWQgPSAodmVyaWZpZWRGaWxlUGF0aHNMZW5ndGggPiAwKTtcblxuICAgIGlmICghZmlsZVZlcmlmaWVkKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBsZWZ0RGlmZmVyZW5jZShmaWxlUGF0aHMsIHZlcmlmaWVkRmlsZVBhdGhzKTtcbiAgfVxuXG4gIHJldHVybiBmaWxlc1ZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeUZpbGVzIiwiaXNGaWxlUGF0aE5vbWluYWxGaWxlUGF0aCIsImZpbGVQYXRoVXRpbGl0aWVzIiwicmVsZWFzZUNvbnRleHQiLCJmaWxlUGF0aHNMZW5ndGgiLCJmaWxlUGF0aHMiLCJsZW5ndGgiLCJmaWxlc1ZlcmlmaWVkIiwidmVyaWZpZWRGaWxlUGF0aHMiLCJmb3JFYWNoIiwiZmlsZVBhdGgiLCJmaWxlVmVyaWZpZWQiLCJ2ZXJpZnlGaWxlIiwidmVyaWZpZWRGaWxlUGF0aCIsInB1c2giLCJ2ZXJpZmllZEZpbGVQYXRoc0xlbmd0aCIsImxlZnREaWZmZXJlbmNlIiwiZ2V0RmlsZVBhdGhzIiwiZmlsdGVyIiwiZmlsZVBhdGhOb21pbmFsRmlsZVBhdGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBd0JBOzs7MkRBUkQ7NkJBRVc7cUJBRUs7Ozs7OztBQUV2QyxJQUFNLEFBQUVDLDRCQUE4QkMsZ0NBQWlCLENBQS9DRDtBQUVPLFNBQVNELFlBQVlHLGNBQWM7O1FBYzlDLElBQU1DLGtCQUFrQkMsVUFBVUMsTUFBTTtRQUV4QyxJQUFJRixvQkFBb0IsR0FBRztZQUN6QkcsZ0JBQWdCO1lBRWhCLE9BQUE7UUFDRjtRQUVBLElBQU1DLG9CQUFvQixFQUFFO1FBRTVCSCxVQUFVSSxPQUFPLENBQUMsU0FBQ0M7WUFDakIsSUFBTUMsZUFBZUMsSUFBQUEsYUFBVSxFQUFDRixVQUFVUDtZQUUxQyxJQUFJUSxjQUFjO2dCQUNoQixJQUFNRSxtQkFBbUJILFVBQVcsR0FBRztnQkFFdkNGLGtCQUFrQk0sSUFBSSxDQUFDRDtZQUN6QjtRQUNGO1FBRUEsSUFBTUUsMEJBQTBCUCxrQkFBa0JGLE1BQU0sRUFDbERLLGVBQWdCSSwwQkFBMEI7UUFFaEQsSUFBSSxDQUFDSixjQUFjO1lBQ2pCLE9BQUE7UUFDRjtRQUVBSyxJQUFBQSxxQkFBYyxFQUFDWCxXQUFXRztJQUM1QjtJQXpDQSxJQUFJRCxnQkFBZ0I7SUFFcEIsSUFBTUYsWUFBWUYsZUFBZWMsWUFBWTtJQUU3Q0MsSUFBQUEsYUFBTSxFQUFDYixXQUFXLFNBQUNLO1FBQ2pCLElBQU1TLDBCQUEwQmxCLDBCQUEwQlM7UUFFMUQsSUFBSVMseUJBQXlCO1lBQzNCLE9BQU87UUFDVDtJQUNGO0lBRUE7Ozs7SUErQkEsT0FBT1o7QUFDVCJ9