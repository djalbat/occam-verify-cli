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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZmlsZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpbGVQYXRoVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLW1vZGVsXCI7XG5pbXBvcnQgeyBGdXJ0bGVGaWxlQ29udGV4dCB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuaW1wb3J0IE5vbWluYWxGaWxlQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9maWxlL25vbWluYWxcIjtcblxuY29uc3QgeyBpc0ZpbGVQYXRoRnVydGxlRmlsZVBhdGgsIGlzRmlsZVBhdGhOb21pbmFsRmlsZVBhdGggfSA9IGZpbGVQYXRoVXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gRmlsZUNvbnRleHRGcm9tRmlsZVBhdGgoZmlsZVBhdGgpIHtcbiAgbGV0IEZpbGVDb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBmaWxlUGF0aEZ1cnRsZUZpbGVQYXRoID0gaXNGaWxlUGF0aEZ1cnRsZUZpbGVQYXRoKGZpbGVQYXRoKSxcbiAgICBmaWxlUGF0aE5vbWluYWxGaWxlUGF0aCA9IGlzRmlsZVBhdGhOb21pbmFsRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gIGlmIChmaWxlUGF0aEZ1cnRsZUZpbGVQYXRoKSB7XG4gICAgRmlsZUNvbnRleHQgPSBGdXJ0bGVGaWxlQ29udGV4dDsgIC8vL1xuICB9XG5cbiAgaWYgKGZpbGVQYXRoTm9taW5hbEZpbGVQYXRoKSB7XG4gICAgRmlsZUNvbnRleHQgPSBOb21pbmFsRmlsZUNvbnRleHQ7IC8vL1xuICB9XG5cbiAgcmV0dXJuIEZpbGVDb250ZXh0O1xufVxuIl0sIm5hbWVzIjpbIkZpbGVDb250ZXh0RnJvbUZpbGVQYXRoIiwiaXNGaWxlUGF0aEZ1cnRsZUZpbGVQYXRoIiwiZmlsZVBhdGhVdGlsaXRpZXMiLCJpc0ZpbGVQYXRoTm9taW5hbEZpbGVQYXRoIiwiZmlsZVBhdGgiLCJGaWxlQ29udGV4dCIsImZpbGVQYXRoRnVydGxlRmlsZVBhdGgiLCJmaWxlUGF0aE5vbWluYWxGaWxlUGF0aCIsIkZ1cnRsZUZpbGVDb250ZXh0IiwiTm9taW5hbEZpbGVDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTZ0JBOzs7ZUFBQUE7OzswQkFQa0I7MkJBQ0E7OERBRUg7Ozs7OztBQUUvQixJQUFRQywyQkFBd0RDLDZCQUFpQixDQUF6RUQsMEJBQTBCRSw0QkFBOEJELDZCQUFpQixDQUEvQ0M7QUFFM0IsU0FBU0gsd0JBQXdCSSxRQUFRO0lBQzlDLElBQUlDLGNBQWM7SUFFbEIsSUFBTUMseUJBQXlCTCx5QkFBeUJHLFdBQ3RERywwQkFBMEJKLDBCQUEwQkM7SUFFdEQsSUFBSUUsd0JBQXdCO1FBQzFCRCxjQUFjRyw4QkFBaUIsRUFBRyxHQUFHO0lBQ3ZDO0lBRUEsSUFBSUQseUJBQXlCO1FBQzNCRixjQUFjSSxnQkFBa0IsRUFBRSxHQUFHO0lBQ3ZDO0lBRUEsT0FBT0o7QUFDVCJ9