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
var _file = /*#__PURE__*/ _interopRequireDefault(require("../verify/file"));
var _array = require("../utilities/array");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
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
    for(;;){
        var _ret = _loop();
        if (_ret === "break") break;
    }
    return filesVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZmlsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlGaWxlIGZyb20gXCIuLi92ZXJpZnkvZmlsZVwiO1xuXG5pbXBvcnQgeyBsZWZ0RGlmZmVyZW5jZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5RmlsZXMocmVsZWFzZUNvbnRleHQpIHtcbiAgbGV0IGZpbGVzVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBmaWxlUGF0aHMgPSByZWxlYXNlQ29udGV4dC5nZXRGaWxlUGF0aHMoKTtcblxuICBmb3IgKDs7KSB7XG4gICAgY29uc3QgZmlsZVBhdGhzTGVuZ3RoID0gZmlsZVBhdGhzLmxlbmd0aDtcblxuICAgIGlmIChmaWxlUGF0aHNMZW5ndGggPT09IDApIHtcbiAgICAgIGZpbGVzVmVyaWZpZWQgPSB0cnVlO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCB2ZXJpZmllZEZpbGVQYXRocyA9IFtdO1xuXG4gICAgZmlsZVBhdGhzLmZvckVhY2goKGZpbGVQYXRoKSA9PiB7XG4gICAgICBjb25zdCBmaWxlVmVyaWZpZWQgPSB2ZXJpZnlGaWxlKGZpbGVQYXRoLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgIGlmIChmaWxlVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgdmVyaWZpZWRGaWxlUGF0aCA9IGZpbGVQYXRoOyAgLy8vXG5cbiAgICAgICAgdmVyaWZpZWRGaWxlUGF0aHMucHVzaCh2ZXJpZmllZEZpbGVQYXRoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHZlcmlmaWVkRmlsZVBhdGhzTGVuZ3RoID0gdmVyaWZpZWRGaWxlUGF0aHMubGVuZ3RoLFxuICAgICAgICAgIGZpbGVWZXJpZmllZCA9ICh2ZXJpZmllZEZpbGVQYXRoc0xlbmd0aCA+IDApO1xuXG4gICAgaWYgKCFmaWxlVmVyaWZpZWQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGxlZnREaWZmZXJlbmNlKGZpbGVQYXRocywgdmVyaWZpZWRGaWxlUGF0aHMpO1xuICB9XG5cbiAgcmV0dXJuIGZpbGVzVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5RmlsZXMiLCJyZWxlYXNlQ29udGV4dCIsImZpbGVQYXRoc0xlbmd0aCIsImZpbGVQYXRocyIsImxlbmd0aCIsImZpbGVzVmVyaWZpZWQiLCJ2ZXJpZmllZEZpbGVQYXRocyIsImZvckVhY2giLCJmaWxlUGF0aCIsImZpbGVWZXJpZmllZCIsInZlcmlmeUZpbGUiLCJ2ZXJpZmllZEZpbGVQYXRoIiwicHVzaCIsInZlcmlmaWVkRmlsZVBhdGhzTGVuZ3RoIiwibGVmdERpZmZlcmVuY2UiLCJnZXRGaWxlUGF0aHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBd0JBOzs7eURBSkQ7cUJBRVE7Ozs7OztBQUVoQixTQUFTQSxZQUFZQyxjQUFjLEVBQUU7MkJBS3pDO1FBQ1AsSUFBTUMsa0JBQWtCQyxVQUFVQyxNQUFNO1FBRXhDLElBQUlGLG9CQUFvQixHQUFHO1lBQ3pCRyxnQkFBZ0IsSUFBSTtZQUVwQixPQUFBO1FBQ0YsQ0FBQztRQUVELElBQU1DLG9CQUFvQixFQUFFO1FBRTVCSCxVQUFVSSxPQUFPLENBQUMsU0FBQ0MsVUFBYTtZQUM5QixJQUFNQyxlQUFlQyxJQUFBQSxhQUFVLEVBQUNGLFVBQVVQO1lBRTFDLElBQUlRLGNBQWM7Z0JBQ2hCLElBQU1FLG1CQUFtQkgsVUFBVyxHQUFHO2dCQUV2Q0Ysa0JBQWtCTSxJQUFJLENBQUNEO1lBQ3pCLENBQUM7UUFDSDtRQUVBLElBQU1FLDBCQUEwQlAsa0JBQWtCRixNQUFNLEVBQ2xESyxlQUFnQkksMEJBQTBCO1FBRWhELElBQUksQ0FBQ0osY0FBYztZQUNqQixPQUFBO1FBQ0YsQ0FBQztRQUVESyxJQUFBQSxxQkFBYyxFQUFDWCxXQUFXRztJQUM1QjtJQWpDQSxJQUFJRCxnQkFBZ0IsS0FBSztJQUV6QixJQUFNRixZQUFZRixlQUFlYyxZQUFZO0lBRTdDOzs7O0lBK0JBLE9BQU9WO0FBQ1QifQ==