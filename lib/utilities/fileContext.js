"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "FileContextFromFilePath", {
    enumerable: true,
    get: function() {
        return FileContextFromFilePath;
    }
});
var _occammodel = require("occam-model");
var _occamfurtle = require("occam-furtle");
var _nominal = /*#__PURE__*/ _interop_require_default(require("../context/file/nominal"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var isFilePathFurtleFilePath = _occammodel.filePathUtilities.isFilePathFurtleFilePath, isFilePathNominalFilePath = _occammodel.filePathUtilities.isFilePathNominalFilePath;
function FileContextFromFilePath(filePath) {
    var FileContext;
    var filePathFurtleFilePath = isFilePathFurtleFilePath(filePath), filePathNominalFilePath = isFilePathNominalFilePath(filePath);
    if (filePathFurtleFilePath) {
        FileContext = _occamfurtle.FurtleFileContext; ///
    }
    if (filePathNominalFilePath) {
        FileContext = _nominal.default; ///
    }
    return FileContext;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZmlsZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpbGVQYXRoVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLW1vZGVsXCI7XG5pbXBvcnQgeyBGdXJ0bGVGaWxlQ29udGV4dCB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuaW1wb3J0IE5vbWluYWxGaWxlQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9maWxlL25vbWluYWxcIjtcblxuY29uc3QgeyBpc0ZpbGVQYXRoRnVydGxlRmlsZVBhdGgsIGlzRmlsZVBhdGhOb21pbmFsRmlsZVBhdGggfSA9IGZpbGVQYXRoVXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gRmlsZUNvbnRleHRGcm9tRmlsZVBhdGgoZmlsZVBhdGgpIHtcbiAgbGV0IEZpbGVDb250ZXh0O1xuXG4gIGNvbnN0IGZpbGVQYXRoRnVydGxlRmlsZVBhdGggPSBpc0ZpbGVQYXRoRnVydGxlRmlsZVBhdGgoZmlsZVBhdGgpLFxuICAgIGZpbGVQYXRoTm9taW5hbEZpbGVQYXRoID0gaXNGaWxlUGF0aE5vbWluYWxGaWxlUGF0aChmaWxlUGF0aCk7XG5cbiAgaWYgKGZpbGVQYXRoRnVydGxlRmlsZVBhdGgpIHtcbiAgICBGaWxlQ29udGV4dCA9IEZ1cnRsZUZpbGVDb250ZXh0OyAgLy8vXG4gIH1cblxuICBpZiAoZmlsZVBhdGhOb21pbmFsRmlsZVBhdGgpIHtcbiAgICBGaWxlQ29udGV4dCA9IE5vbWluYWxGaWxlQ29udGV4dDsgLy8vXG4gIH1cblxuICByZXR1cm4gRmlsZUNvbnRleHQ7XG59XG4iXSwibmFtZXMiOlsiRmlsZUNvbnRleHRGcm9tRmlsZVBhdGgiLCJpc0ZpbGVQYXRoRnVydGxlRmlsZVBhdGgiLCJmaWxlUGF0aFV0aWxpdGllcyIsImlzRmlsZVBhdGhOb21pbmFsRmlsZVBhdGgiLCJmaWxlUGF0aCIsIkZpbGVDb250ZXh0IiwiZmlsZVBhdGhGdXJ0bGVGaWxlUGF0aCIsImZpbGVQYXRoTm9taW5hbEZpbGVQYXRoIiwiRnVydGxlRmlsZUNvbnRleHQiLCJOb21pbmFsRmlsZUNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNnQkE7OztlQUFBQTs7OzBCQVBrQjsyQkFDQTs4REFFSDs7Ozs7O0FBRS9CLElBQVFDLDJCQUF3REMsNkJBQWlCLENBQXpFRCwwQkFBMEJFLDRCQUE4QkQsNkJBQWlCLENBQS9DQztBQUUzQixTQUFTSCx3QkFBd0JJLFFBQVE7SUFDOUMsSUFBSUM7SUFFSixJQUFNQyx5QkFBeUJMLHlCQUF5QkcsV0FDdERHLDBCQUEwQkosMEJBQTBCQztJQUV0RCxJQUFJRSx3QkFBd0I7UUFDMUJELGNBQWNHLDhCQUFpQixFQUFHLEdBQUc7SUFDdkM7SUFFQSxJQUFJRCx5QkFBeUI7UUFDM0JGLGNBQWNJLGdCQUFrQixFQUFFLEdBQUc7SUFDdkM7SUFFQSxPQUFPSjtBQUNUIn0=