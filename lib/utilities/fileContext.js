"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get FileContextFromFilePath () {
        return FileContextFromFilePath;
    },
    get default () {
        return _default;
    }
});
const _occammodel = require("occam-model");
const _occamfurtle = require("occam-furtle");
const _occamnominal = require("occam-nominal");
const { isFilePathFurtleFilePath, isFilePathNominalFilePath } = _occammodel.filePathUtilities;
function FileContextFromFilePath(filePath) {
    let FileContext = null;
    const filePathFurtleFilePath = isFilePathFurtleFilePath(filePath), filePathNominalFilePath = isFilePathNominalFilePath(filePath);
    if (filePathFurtleFilePath) {
        FileContext = _occamfurtle.FurtleFileContext; ///
    }
    if (filePathNominalFilePath) {
        FileContext = _occamnominal.NominalFileContext; ///
    }
    return FileContext;
}
const _default = {
    FileContextFromFilePath
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZmlsZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpbGVQYXRoVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLW1vZGVsXCI7XG5pbXBvcnQgeyBGdXJ0bGVGaWxlQ29udGV4dCB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcbmltcG9ydCB7IE5vbWluYWxGaWxlQ29udGV4dCB9IGZyb20gXCJvY2NhbS1ub21pbmFsXCI7XG5cbmNvbnN0IHsgaXNGaWxlUGF0aEZ1cnRsZUZpbGVQYXRoLCBpc0ZpbGVQYXRoTm9taW5hbEZpbGVQYXRoIH0gPSBmaWxlUGF0aFV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIEZpbGVDb250ZXh0RnJvbUZpbGVQYXRoKGZpbGVQYXRoKSB7XG4gIGxldCBGaWxlQ29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgZmlsZVBhdGhGdXJ0bGVGaWxlUGF0aCA9IGlzRmlsZVBhdGhGdXJ0bGVGaWxlUGF0aChmaWxlUGF0aCksXG4gICAgICAgIGZpbGVQYXRoTm9taW5hbEZpbGVQYXRoID0gaXNGaWxlUGF0aE5vbWluYWxGaWxlUGF0aChmaWxlUGF0aCk7XG5cbiAgaWYgKGZpbGVQYXRoRnVydGxlRmlsZVBhdGgpIHtcbiAgICBGaWxlQ29udGV4dCA9IEZ1cnRsZUZpbGVDb250ZXh0OyAgLy8vXG4gIH1cblxuICBpZiAoZmlsZVBhdGhOb21pbmFsRmlsZVBhdGgpIHtcbiAgICBGaWxlQ29udGV4dCA9IE5vbWluYWxGaWxlQ29udGV4dDsgLy8vXG4gIH1cblxuICByZXR1cm4gRmlsZUNvbnRleHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgRmlsZUNvbnRleHRGcm9tRmlsZVBhdGhcbn07XG4iXSwibmFtZXMiOlsiRmlsZUNvbnRleHRGcm9tRmlsZVBhdGgiLCJpc0ZpbGVQYXRoRnVydGxlRmlsZVBhdGgiLCJpc0ZpbGVQYXRoTm9taW5hbEZpbGVQYXRoIiwiZmlsZVBhdGhVdGlsaXRpZXMiLCJmaWxlUGF0aCIsIkZpbGVDb250ZXh0IiwiZmlsZVBhdGhGdXJ0bGVGaWxlUGF0aCIsImZpbGVQYXRoTm9taW5hbEZpbGVQYXRoIiwiRnVydGxlRmlsZUNvbnRleHQiLCJOb21pbmFsRmlsZUNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQVFnQkE7ZUFBQUE7O1FBaUJoQjtlQUFBOzs7NEJBdkJrQzs2QkFDQTs4QkFDQztBQUVuQyxNQUFNLEVBQUVDLHdCQUF3QixFQUFFQyx5QkFBeUIsRUFBRSxHQUFHQyw2QkFBaUI7QUFFMUUsU0FBU0gsd0JBQXdCSSxRQUFRO0lBQzlDLElBQUlDLGNBQWM7SUFFbEIsTUFBTUMseUJBQXlCTCx5QkFBeUJHLFdBQ2xERywwQkFBMEJMLDBCQUEwQkU7SUFFMUQsSUFBSUUsd0JBQXdCO1FBQzFCRCxjQUFjRyw4QkFBaUIsRUFBRyxHQUFHO0lBQ3ZDO0lBRUEsSUFBSUQseUJBQXlCO1FBQzNCRixjQUFjSSxnQ0FBa0IsRUFBRSxHQUFHO0lBQ3ZDO0lBRUEsT0FBT0o7QUFDVDtNQUVBLFdBQWU7SUFDYkw7QUFDRiJ9