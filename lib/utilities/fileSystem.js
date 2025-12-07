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
    get default () {
        return _default;
    },
    get releaseContextFromDependency () {
        return releaseContextFromDependency;
    }
});
var _occamfilesystem = require("occam-file-system");
var _necessary = require("necessary");
var _releaseContext = require("../utilities/releaseContext");
var loadProject = _occamfilesystem.fileSystemUtilities.loadProject, concatenatePaths = _necessary.pathUtilities.concatenatePaths, readFile = _necessary.fileSystemUtilities.readFile, isEntryFile = _necessary.fileSystemUtilities.isEntryFile, checkEntryExists = _necessary.fileSystemUtilities.checkEntryExists;
function releaseContextFromDependency(dependency, context, callback) {
    var projectsDirectoryPath = process.cwd(), dependencyName = dependency.getName(), entryPath = concatenatePaths(projectsDirectoryPath, dependencyName), entryExists = checkEntryExists(entryPath);
    if (!entryExists) {
        var _$error = null, releaseContext = null;
        callback(_$error, releaseContext);
        return;
    }
    var releaseContext1 = null;
    try {
        var entryFile = isEntryFile(entryPath);
        if (entryFile) {
            var filePath = entryPath, content = readFile(filePath), jsonString = content, json = JSON.parse(jsonString);
            releaseContext1 = (0, _releaseContext.releaseContextFromJSON)(json, context);
        } else {
            var projectName = dependencyName, project = loadProject(projectName, projectsDirectoryPath);
            if (project !== null) {
                releaseContext1 = (0, _releaseContext.releaseContextFromProject)(project, context);
            }
        }
    } catch (error) {
        callback(error, releaseContext1);
        return;
    }
    var _$error1 = null;
    callback(_$error1, releaseContext1);
}
var _default = {
    releaseContextFromDependency: releaseContextFromDependency
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZmlsZVN5c3RlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlsZVN5c3RlbVV0aWxpdGllcyBhcyBvY2NhbUZpbGVTeXN0ZW1VdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tZmlsZS1zeXN0ZW1cIjtcbmltcG9ydCB7IHBhdGhVdGlsaXRpZXMsIGZpbGVTeXN0ZW1VdGlsaXRpZXMgYXMgbmVjZXNzYXJ5RmlsZVN5c3RlbVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgcmVsZWFzZUNvbnRleHRGcm9tSlNPTiwgcmVsZWFzZUNvbnRleHRGcm9tUHJvamVjdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHRcIjtcblxuY29uc3QgeyBsb2FkUHJvamVjdCB9ID0gb2NjYW1GaWxlU3lzdGVtVXRpbGl0aWVzLFxuICAgICAgeyBjb25jYXRlbmF0ZVBhdGhzIH0gPSBwYXRoVXRpbGl0aWVzLFxuICAgICAgeyByZWFkRmlsZSwgaXNFbnRyeUZpbGUsIGNoZWNrRW50cnlFeGlzdHMgfSA9IG5lY2Vzc2FyeUZpbGVTeXN0ZW1VdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5KGRlcGVuZGVuY3ksIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHByb2plY3RzRGlyZWN0b3J5UGF0aCA9IHByb2Nlc3MuY3dkKCksIC8vL1xuICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICBlbnRyeVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZGVwZW5kZW5jeU5hbWUpLFxuICAgICAgICBlbnRyeUV4aXN0cyA9IGNoZWNrRW50cnlFeGlzdHMoZW50cnlQYXRoKTtcblxuICBpZiAoIWVudHJ5RXhpc3RzKSB7XG4gICAgY29uc3QgZXJyb3IgPSBudWxsLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gbnVsbDtcblxuICAgIGNhbGxiYWNrKGVycm9yLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgcmVsZWFzZUNvbnRleHQgPSBudWxsO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgZW50cnlGaWxlID0gaXNFbnRyeUZpbGUoZW50cnlQYXRoKTtcblxuICAgIGlmIChlbnRyeUZpbGUpIHtcbiAgICAgIGNvbnN0IGZpbGVQYXRoID0gZW50cnlQYXRoLCAvLy9cbiAgICAgICAgICAgIGNvbnRlbnQgPSByZWFkRmlsZShmaWxlUGF0aCksXG4gICAgICAgICAgICBqc29uU3RyaW5nID0gY29udGVudCwgLy8vXG4gICAgICAgICAgICBqc29uID0gSlNPTi5wYXJzZShqc29uU3RyaW5nKTtcblxuICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dEZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgcHJvamVjdCA9IGxvYWRQcm9qZWN0KHByb2plY3ROYW1lLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gICAgICBpZiAocHJvamVjdCAhPT0gbnVsbCkge1xuICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0RnJvbVByb2plY3QocHJvamVjdCwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNhbGxiYWNrKGVycm9yLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBlcnJvciA9IG51bGw7XG5cbiAgY2FsbGJhY2soZXJyb3IsIHJlbGVhc2VDb250ZXh0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICByZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5XG59O1xuIl0sIm5hbWVzIjpbInJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3kiLCJsb2FkUHJvamVjdCIsIm9jY2FtRmlsZVN5c3RlbVV0aWxpdGllcyIsImNvbmNhdGVuYXRlUGF0aHMiLCJwYXRoVXRpbGl0aWVzIiwicmVhZEZpbGUiLCJuZWNlc3NhcnlGaWxlU3lzdGVtVXRpbGl0aWVzIiwiaXNFbnRyeUZpbGUiLCJjaGVja0VudHJ5RXhpc3RzIiwiZGVwZW5kZW5jeSIsImNvbnRleHQiLCJjYWxsYmFjayIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsInByb2Nlc3MiLCJjd2QiLCJkZXBlbmRlbmN5TmFtZSIsImdldE5hbWUiLCJlbnRyeVBhdGgiLCJlbnRyeUV4aXN0cyIsImVycm9yIiwicmVsZWFzZUNvbnRleHQiLCJlbnRyeUZpbGUiLCJmaWxlUGF0aCIsImNvbnRlbnQiLCJqc29uU3RyaW5nIiwianNvbiIsIkpTT04iLCJwYXJzZSIsInJlbGVhc2VDb250ZXh0RnJvbUpTT04iLCJwcm9qZWN0TmFtZSIsInByb2plY3QiLCJyZWxlYXNlQ29udGV4dEZyb21Qcm9qZWN0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUF5REE7ZUFBQTs7UUE5Q2dCQTtlQUFBQTs7OytCQVRnRDt5QkFDbUI7OEJBRWpCO0FBRWxFLElBQU0sQUFBRUMsY0FBZ0JDLG9DQUF3QixDQUF4Q0QsYUFDRixBQUFFRSxtQkFBcUJDLHdCQUFhLENBQWxDRCxrQkFDQUUsV0FBNENDLDhCQUE0QixDQUF4RUQsVUFBVUUsY0FBa0NELDhCQUE0QixDQUE5REMsYUFBYUMsbUJBQXFCRiw4QkFBNEIsQ0FBakRFO0FBRXhCLFNBQVNSLDZCQUE2QlMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFFBQVE7SUFDeEUsSUFBTUMsd0JBQXdCQyxRQUFRQyxHQUFHLElBQ25DQyxpQkFBaUJOLFdBQVdPLE9BQU8sSUFDbkNDLFlBQVlkLGlCQUFpQlMsdUJBQXVCRyxpQkFDcERHLGNBQWNWLGlCQUFpQlM7SUFFckMsSUFBSSxDQUFDQyxhQUFhO1FBQ2hCLElBQU1DLFVBQVEsTUFDUkMsaUJBQWlCO1FBRXZCVCxTQUFTUSxTQUFPQztRQUVoQjtJQUNGO0lBRUEsSUFBSUEsa0JBQWlCO0lBRXJCLElBQUk7UUFDRixJQUFNQyxZQUFZZCxZQUFZVTtRQUU5QixJQUFJSSxXQUFXO1lBQ2IsSUFBTUMsV0FBV0wsV0FDWE0sVUFBVWxCLFNBQVNpQixXQUNuQkUsYUFBYUQsU0FDYkUsT0FBT0MsS0FBS0MsS0FBSyxDQUFDSDtZQUV4Qkosa0JBQWlCUSxJQUFBQSxzQ0FBc0IsRUFBQ0gsTUFBTWY7UUFDaEQsT0FBTztZQUNMLElBQU1tQixjQUFjZCxnQkFDbEJlLFVBQVU3QixZQUFZNEIsYUFBYWpCO1lBRXJDLElBQUlrQixZQUFZLE1BQU07Z0JBQ3BCVixrQkFBaUJXLElBQUFBLHlDQUF5QixFQUFDRCxTQUFTcEI7WUFDdEQ7UUFDRjtJQUNGLEVBQUUsT0FBT1MsT0FBTztRQUNkUixTQUFTUSxPQUFPQztRQUVoQjtJQUNGO0lBRUEsSUFBTUQsV0FBUTtJQUVkUixTQUFTUSxVQUFPQztBQUNsQjtJQUVBLFdBQWU7SUFDYnBCLDhCQUFBQTtBQUNGIn0=