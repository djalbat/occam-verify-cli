"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyFile;
    }
});
var _necessary = require("necessary");
var _file = /*#__PURE__*/ _interopRequireDefault(require("../context/file"));
var _package = /*#__PURE__*/ _interopRequireDefault(require("../context/package"));
var _topLevel = /*#__PURE__*/ _interopRequireDefault(require("../verify/declaration/topLevel"));
var _query = require("../utilities/query");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var log = _necessary.loggingUtilities.log;
var topLevelDeclarationNodesQuery = (0, _query.nodesQuery)("/document/topLevelDeclaration");
function verifyFile(filePath) {
    var packageContext = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _package.default.fromNothing();
    var fileVerified = false;
    log.debug("Verifying the '".concat(filePath, "' file..."));
    var fileContext = _file.default.fromPackageContextAndFilePath(packageContext, filePath), context = fileContext, node = fileContext.getNode(), topLevelDeclarationNodes = topLevelDeclarationNodesQuery(node), topLevelDeclarationsVerified = topLevelDeclarationNodes.every(function(topLevelDeclarationNode) {
        var topLevelDeclarationVerified = (0, _topLevel.default)(topLevelDeclarationNode, context);
        if (topLevelDeclarationVerified) {
            return true;
        }
    });
    if (topLevelDeclarationsVerified) {
        packageContext.addFileContext(fileContext);
        fileVerified = true;
        log.info("Verified the '".concat(filePath, "' file."));
    }
    return fileVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbG9nZ2luZ1V0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEZpbGVDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2ZpbGVcIjtcbmltcG9ydCBQYWNrYWdlQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9wYWNrYWdlXCI7XG5pbXBvcnQgdmVyaWZ5VG9wTGV2ZWxEZWNsYXJhdGlvbiBmcm9tIFwiLi4vdmVyaWZ5L2RlY2xhcmF0aW9uL3RvcExldmVsXCI7XG5cbmltcG9ydCB7IG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHsgbG9nIH0gPSBsb2dnaW5nVXRpbGl0aWVzO1xuXG5jb25zdCB0b3BMZXZlbERlY2xhcmF0aW9uTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvZG9jdW1lbnQvdG9wTGV2ZWxEZWNsYXJhdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5RmlsZShmaWxlUGF0aCwgcGFja2FnZUNvbnRleHQgPSBQYWNrYWdlQ29udGV4dC5mcm9tTm90aGluZygpKSB7XG4gIGxldCBmaWxlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBsb2cuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7ZmlsZVBhdGh9JyBmaWxlLi4uYCk7XG5cbiAgY29uc3QgZmlsZUNvbnRleHQgPSBGaWxlQ29udGV4dC5mcm9tUGFja2FnZUNvbnRleHRBbmRGaWxlUGF0aChwYWNrYWdlQ29udGV4dCwgZmlsZVBhdGgpLFxuICAgICAgICBjb250ZXh0ID0gZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgbm9kZSA9IGZpbGVDb250ZXh0LmdldE5vZGUoKSxcbiAgICAgICAgdG9wTGV2ZWxEZWNsYXJhdGlvbk5vZGVzID0gdG9wTGV2ZWxEZWNsYXJhdGlvbk5vZGVzUXVlcnkobm9kZSksXG4gICAgICAgIHRvcExldmVsRGVjbGFyYXRpb25zVmVyaWZpZWQgPSB0b3BMZXZlbERlY2xhcmF0aW9uTm9kZXMuZXZlcnkoKHRvcExldmVsRGVjbGFyYXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdG9wTGV2ZWxEZWNsYXJhdGlvblZlcmlmaWVkID0gdmVyaWZ5VG9wTGV2ZWxEZWNsYXJhdGlvbih0b3BMZXZlbERlY2xhcmF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAodG9wTGV2ZWxEZWNsYXJhdGlvblZlcmlmaWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgaWYgKHRvcExldmVsRGVjbGFyYXRpb25zVmVyaWZpZWQpIHtcbiAgICBwYWNrYWdlQ29udGV4dC5hZGRGaWxlQ29udGV4dChmaWxlQ29udGV4dCk7XG5cbiAgICBmaWxlVmVyaWZpZWQgPSB0cnVlO1xuXG4gICAgbG9nLmluZm8oYFZlcmlmaWVkIHRoZSAnJHtmaWxlUGF0aH0nIGZpbGUuYCk7XG4gIH1cblxuICByZXR1cm4gZmlsZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeUZpbGUiLCJsb2ciLCJsb2dnaW5nVXRpbGl0aWVzIiwidG9wTGV2ZWxEZWNsYXJhdGlvbk5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiZmlsZVBhdGgiLCJwYWNrYWdlQ29udGV4dCIsIlBhY2thZ2VDb250ZXh0IiwiZnJvbU5vdGhpbmciLCJmaWxlVmVyaWZpZWQiLCJkZWJ1ZyIsImZpbGVDb250ZXh0IiwiRmlsZUNvbnRleHQiLCJmcm9tUGFja2FnZUNvbnRleHRBbmRGaWxlUGF0aCIsImNvbnRleHQiLCJub2RlIiwiZ2V0Tm9kZSIsInRvcExldmVsRGVjbGFyYXRpb25Ob2RlcyIsInRvcExldmVsRGVjbGFyYXRpb25zVmVyaWZpZWQiLCJldmVyeSIsInRvcExldmVsRGVjbGFyYXRpb25Ob2RlIiwidG9wTGV2ZWxEZWNsYXJhdGlvblZlcmlmaWVkIiwidmVyaWZ5VG9wTGV2ZWxEZWNsYXJhdGlvbiIsImFkZEZpbGVDb250ZXh0IiwiaW5mbyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUF3QkE7Ozt5QkFaUzt5REFFVDs0REFDRzs2REFDVztxQkFFWDs7Ozs7O0FBRTNCLElBQU0sQUFBRUMsTUFBUUMsMkJBQWdCLENBQXhCRDtBQUVSLElBQU1FLGdDQUFnQ0MsSUFBQUEsaUJBQVUsRUFBQztBQUVsQyxTQUFTSixXQUFXSyxRQUFRLEVBQWlEO1FBQS9DQyxpQkFBQUEsaUVBQWlCQyxnQkFBYyxDQUFDQyxXQUFXLEVBQUU7SUFDeEYsSUFBSUMsZUFBZSxLQUFLO0lBRXhCUixJQUFJUyxLQUFLLENBQUMsQUFBQyxrQkFBMEIsT0FBVEwsVUFBUztJQUVyQyxJQUFNTSxjQUFjQyxhQUFXLENBQUNDLDZCQUE2QixDQUFDUCxnQkFBZ0JELFdBQ3hFUyxVQUFVSCxhQUNWSSxPQUFPSixZQUFZSyxPQUFPLElBQzFCQywyQkFBMkJkLDhCQUE4QlksT0FDekRHLCtCQUErQkQseUJBQXlCRSxLQUFLLENBQUMsU0FBQ0MseUJBQTRCO1FBQ3pGLElBQU1DLDhCQUE4QkMsSUFBQUEsaUJBQXlCLEVBQUNGLHlCQUF5Qk47UUFFdkYsSUFBSU8sNkJBQTZCO1lBQy9CLE9BQU8sSUFBSTtRQUNiLENBQUM7SUFDSDtJQUVOLElBQUlILDhCQUE4QjtRQUNoQ1osZUFBZWlCLGNBQWMsQ0FBQ1o7UUFFOUJGLGVBQWUsSUFBSTtRQUVuQlIsSUFBSXVCLElBQUksQ0FBQyxBQUFDLGlCQUF5QixPQUFUbkIsVUFBUztJQUNyQyxDQUFDO0lBRUQsT0FBT0k7QUFDVCJ9