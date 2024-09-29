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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZmlsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlGaWxlIGZyb20gXCIuLi92ZXJpZnkvZmlsZVwiO1xuXG5pbXBvcnQgeyBmaWxlUGF0aFV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1lbnRpdGllc1wiO1xuXG5pbXBvcnQgeyBmaWx0ZXIsIGxlZnREaWZmZXJlbmNlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jb25zdCB7IGlzRmlsZVBhdGhOb21pbmFsRmlsZVBhdGggfSA9IGZpbGVQYXRoVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlGaWxlcyhyZWxlYXNlQ29udGV4dCkge1xuICBsZXQgZmlsZXNWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGZpbGVQYXRocyA9IHJlbGVhc2VDb250ZXh0LmdldEZpbGVQYXRocygpO1xuXG4gIGZpbHRlcihmaWxlUGF0aHMsIChmaWxlUGF0aCkgPT4ge1xuICAgIGNvbnN0IGZpbGVQYXRoTm9taW5hbEZpbGVQYXRoID0gaXNGaWxlUGF0aE5vbWluYWxGaWxlUGF0aChmaWxlUGF0aCk7XG5cbiAgICBpZiAoZmlsZVBhdGhOb21pbmFsRmlsZVBhdGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSlcblxuICBmb3IgKDs7KSB7XG4gICAgY29uc3QgZmlsZVBhdGhzTGVuZ3RoID0gZmlsZVBhdGhzLmxlbmd0aDtcblxuICAgIGlmIChmaWxlUGF0aHNMZW5ndGggPT09IDApIHtcbiAgICAgIGZpbGVzVmVyaWZpZWQgPSB0cnVlO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCB2ZXJpZmllZEZpbGVQYXRocyA9IFtdO1xuXG4gICAgZmlsZVBhdGhzLmZvckVhY2goKGZpbGVQYXRoKSA9PiB7XG4gICAgICBjb25zdCBmaWxlVmVyaWZpZWQgPSB2ZXJpZnlGaWxlKGZpbGVQYXRoLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgIGlmIChmaWxlVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgdmVyaWZpZWRGaWxlUGF0aCA9IGZpbGVQYXRoOyAgLy8vXG5cbiAgICAgICAgdmVyaWZpZWRGaWxlUGF0aHMucHVzaCh2ZXJpZmllZEZpbGVQYXRoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHZlcmlmaWVkRmlsZVBhdGhzTGVuZ3RoID0gdmVyaWZpZWRGaWxlUGF0aHMubGVuZ3RoLFxuICAgICAgICAgIGZpbGVWZXJpZmllZCA9ICh2ZXJpZmllZEZpbGVQYXRoc0xlbmd0aCA+IDApO1xuXG4gICAgaWYgKCFmaWxlVmVyaWZpZWQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGxlZnREaWZmZXJlbmNlKGZpbGVQYXRocywgdmVyaWZpZWRGaWxlUGF0aHMpO1xuICB9XG5cbiAgcmV0dXJuIGZpbGVzVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5RmlsZXMiLCJpc0ZpbGVQYXRoTm9taW5hbEZpbGVQYXRoIiwiZmlsZVBhdGhVdGlsaXRpZXMiLCJyZWxlYXNlQ29udGV4dCIsImZpbGVQYXRoc0xlbmd0aCIsImZpbGVQYXRocyIsImxlbmd0aCIsImZpbGVzVmVyaWZpZWQiLCJ2ZXJpZmllZEZpbGVQYXRocyIsImZvckVhY2giLCJmaWxlUGF0aCIsImZpbGVWZXJpZmllZCIsInZlcmlmeUZpbGUiLCJ2ZXJpZmllZEZpbGVQYXRoIiwicHVzaCIsInZlcmlmaWVkRmlsZVBhdGhzTGVuZ3RoIiwibGVmdERpZmZlcmVuY2UiLCJnZXRGaWxlUGF0aHMiLCJmaWx0ZXIiLCJmaWxlUGF0aE5vbWluYWxGaWxlUGF0aCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUF3QkE7OzsyREFSRDs2QkFFVztxQkFFSzs7Ozs7O0FBRXZDLElBQU0sQUFBRUMsNEJBQThCQyxnQ0FBaUIsQ0FBL0NEO0FBRU8sU0FBU0QsWUFBWUcsY0FBYzs7UUFjOUMsSUFBTUMsa0JBQWtCQyxVQUFVQyxNQUFNO1FBRXhDLElBQUlGLG9CQUFvQixHQUFHO1lBQ3pCRyxnQkFBZ0I7WUFFaEIsT0FBQTtRQUNGO1FBRUEsSUFBTUMsb0JBQW9CLEVBQUU7UUFFNUJILFVBQVVJLE9BQU8sQ0FBQyxTQUFDQztZQUNqQixJQUFNQyxlQUFlQyxJQUFBQSxhQUFVLEVBQUNGLFVBQVVQO1lBRTFDLElBQUlRLGNBQWM7Z0JBQ2hCLElBQU1FLG1CQUFtQkgsVUFBVyxHQUFHO2dCQUV2Q0Ysa0JBQWtCTSxJQUFJLENBQUNEO1lBQ3pCO1FBQ0Y7UUFFQSxJQUFNRSwwQkFBMEJQLGtCQUFrQkYsTUFBTSxFQUNsREssZUFBZ0JJLDBCQUEwQjtRQUVoRCxJQUFJLENBQUNKLGNBQWM7WUFDakIsT0FBQTtRQUNGO1FBRUFLLElBQUFBLHFCQUFjLEVBQUNYLFdBQVdHO0lBQzVCO0lBekNBLElBQUlELGdCQUFnQjtJQUVwQixJQUFNRixZQUFZRixlQUFlYyxZQUFZO0lBRTdDQyxJQUFBQSxhQUFNLEVBQUNiLFdBQVcsU0FBQ0s7UUFDakIsSUFBTVMsMEJBQTBCbEIsMEJBQTBCUztRQUUxRCxJQUFJUyx5QkFBeUI7WUFDM0IsT0FBTztRQUNUO0lBQ0Y7SUFFQTs7OztJQStCQSxPQUFPWjtBQUNUIn0=