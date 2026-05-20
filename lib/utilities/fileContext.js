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
    if (false) {
    ///
    } else if (filePathFurtleFilePath) {
        FileContext = _occamfurtle.FurtleFileContext; ///
    } else if (filePathNominalFilePath) {
        FileContext = _occamnominal.NominalFileContext; ///
    }
    return FileContext;
}
const _default = {
    FileContextFromFilePath
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZmlsZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpbGVQYXRoVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLW1vZGVsXCI7XG5pbXBvcnQgeyBGdXJ0bGVGaWxlQ29udGV4dCB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcbmltcG9ydCB7IE5vbWluYWxGaWxlQ29udGV4dCB9IGZyb20gXCJvY2NhbS1ub21pbmFsXCI7XG5cbmNvbnN0IHsgaXNGaWxlUGF0aEZ1cnRsZUZpbGVQYXRoLCBpc0ZpbGVQYXRoTm9taW5hbEZpbGVQYXRoIH0gPSBmaWxlUGF0aFV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIEZpbGVDb250ZXh0RnJvbUZpbGVQYXRoKGZpbGVQYXRoKSB7XG4gIGxldCBGaWxlQ29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgZmlsZVBhdGhGdXJ0bGVGaWxlUGF0aCA9IGlzRmlsZVBhdGhGdXJ0bGVGaWxlUGF0aChmaWxlUGF0aCksXG4gICAgICAgIGZpbGVQYXRoTm9taW5hbEZpbGVQYXRoID0gaXNGaWxlUGF0aE5vbWluYWxGaWxlUGF0aChmaWxlUGF0aCk7XG5cbiAgaWYgKGZhbHNlKSB7XG4gICAgLy8vXG4gIH0gZWxzZSBpZiAoZmlsZVBhdGhGdXJ0bGVGaWxlUGF0aCkge1xuICAgIEZpbGVDb250ZXh0ID0gRnVydGxlRmlsZUNvbnRleHQ7ICAvLy9cbiAgfSBlbHNlIGlmIChmaWxlUGF0aE5vbWluYWxGaWxlUGF0aCkge1xuICAgIEZpbGVDb250ZXh0ID0gTm9taW5hbEZpbGVDb250ZXh0OyAvLy9cbiAgfVxuXG4gIHJldHVybiBGaWxlQ29udGV4dDtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBGaWxlQ29udGV4dEZyb21GaWxlUGF0aFxufTtcbiJdLCJuYW1lcyI6WyJGaWxlQ29udGV4dEZyb21GaWxlUGF0aCIsImlzRmlsZVBhdGhGdXJ0bGVGaWxlUGF0aCIsImlzRmlsZVBhdGhOb21pbmFsRmlsZVBhdGgiLCJmaWxlUGF0aFV0aWxpdGllcyIsImZpbGVQYXRoIiwiRmlsZUNvbnRleHQiLCJmaWxlUGF0aEZ1cnRsZUZpbGVQYXRoIiwiZmlsZVBhdGhOb21pbmFsRmlsZVBhdGgiLCJGdXJ0bGVGaWxlQ29udGV4dCIsIk5vbWluYWxGaWxlQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBUWdCQTtlQUFBQTs7UUFpQmhCO2VBQUE7Ozs0QkF2QmtDOzZCQUNBOzhCQUNDO0FBRW5DLE1BQU0sRUFBRUMsd0JBQXdCLEVBQUVDLHlCQUF5QixFQUFFLEdBQUdDLDZCQUFpQjtBQUUxRSxTQUFTSCx3QkFBd0JJLFFBQVE7SUFDOUMsSUFBSUMsY0FBYztJQUVsQixNQUFNQyx5QkFBeUJMLHlCQUF5QkcsV0FDbERHLDBCQUEwQkwsMEJBQTBCRTtJQUUxRCxJQUFJLE9BQU87SUFDVCxHQUFHO0lBQ0wsT0FBTyxJQUFJRSx3QkFBd0I7UUFDakNELGNBQWNHLDhCQUFpQixFQUFHLEdBQUc7SUFDdkMsT0FBTyxJQUFJRCx5QkFBeUI7UUFDbENGLGNBQWNJLGdDQUFrQixFQUFFLEdBQUc7SUFDdkM7SUFFQSxPQUFPSjtBQUNUO01BRUEsV0FBZTtJQUNiTDtBQUNGIn0=