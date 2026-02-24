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
    var FileContext = null;
    var filePathFurtleFilePath = isFilePathFurtleFilePath(filePath), filePathNominalFilePath = isFilePathNominalFilePath(filePath);
    if (filePathFurtleFilePath) {
        FileContext = _occamfurtle.FurtleFileContext; ///
    }
    if (filePathNominalFilePath) {
        FileContext = _nominal.default; ///
    }
    return FileContext;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZmlsZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpbGVQYXRoVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLW1vZGVsXCI7XG5pbXBvcnQgeyBGdXJ0bGVGaWxlQ29udGV4dCB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuaW1wb3J0IE5vbWluYWxGaWxlQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9maWxlL25vbWluYWxcIjtcblxuY29uc3QgeyBpc0ZpbGVQYXRoRnVydGxlRmlsZVBhdGgsIGlzRmlsZVBhdGhOb21pbmFsRmlsZVBhdGggfSA9IGZpbGVQYXRoVXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gRmlsZUNvbnRleHRGcm9tRmlsZVBhdGgoZmlsZVBhdGgpIHtcbiAgbGV0IEZpbGVDb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBmaWxlUGF0aEZ1cnRsZUZpbGVQYXRoID0gaXNGaWxlUGF0aEZ1cnRsZUZpbGVQYXRoKGZpbGVQYXRoKSxcbiAgICAgICAgZmlsZVBhdGhOb21pbmFsRmlsZVBhdGggPSBpc0ZpbGVQYXRoTm9taW5hbEZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICBpZiAoZmlsZVBhdGhGdXJ0bGVGaWxlUGF0aCkge1xuICAgIEZpbGVDb250ZXh0ID0gRnVydGxlRmlsZUNvbnRleHQ7ICAvLy9cbiAgfVxuXG4gIGlmIChmaWxlUGF0aE5vbWluYWxGaWxlUGF0aCkge1xuICAgIEZpbGVDb250ZXh0ID0gTm9taW5hbEZpbGVDb250ZXh0OyAvLy9cbiAgfVxuXG4gIHJldHVybiBGaWxlQ29udGV4dDtcbn1cbiJdLCJuYW1lcyI6WyJGaWxlQ29udGV4dEZyb21GaWxlUGF0aCIsImlzRmlsZVBhdGhGdXJ0bGVGaWxlUGF0aCIsImZpbGVQYXRoVXRpbGl0aWVzIiwiaXNGaWxlUGF0aE5vbWluYWxGaWxlUGF0aCIsImZpbGVQYXRoIiwiRmlsZUNvbnRleHQiLCJmaWxlUGF0aEZ1cnRsZUZpbGVQYXRoIiwiZmlsZVBhdGhOb21pbmFsRmlsZVBhdGgiLCJGdXJ0bGVGaWxlQ29udGV4dCIsIk5vbWluYWxGaWxlQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU2dCQTs7O2VBQUFBOzs7MEJBUGtCOzJCQUNBOzhEQUVIOzs7Ozs7QUFFL0IsSUFBUUMsMkJBQXdEQyw2QkFBaUIsQ0FBekVELDBCQUEwQkUsNEJBQThCRCw2QkFBaUIsQ0FBL0NDO0FBRTNCLFNBQVNILHdCQUF3QkksUUFBUTtJQUM5QyxJQUFJQyxjQUFjO0lBRWxCLElBQU1DLHlCQUF5QkwseUJBQXlCRyxXQUNsREcsMEJBQTBCSiwwQkFBMEJDO0lBRTFELElBQUlFLHdCQUF3QjtRQUMxQkQsY0FBY0csOEJBQWlCLEVBQUcsR0FBRztJQUN2QztJQUVBLElBQUlELHlCQUF5QjtRQUMzQkYsY0FBY0ksZ0JBQWtCLEVBQUUsR0FBRztJQUN2QztJQUVBLE9BQU9KO0FBQ1QifQ==