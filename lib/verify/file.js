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
var _file = /*#__PURE__*/ _interopRequireDefault(require("../context/file"));
var _topLevel = /*#__PURE__*/ _interopRequireDefault(require("./declaration/topLevel"));
var _query = require("../utilities/query");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var errorNodesQuery = (0, _query.nodesQuery)("/document/error"), topLevelDeclarationNodesQuery = (0, _query.nodesQuery)("/document/topLevelDeclaration");
function verifyFile(filePath, releaseContext) {
    var fileVerified = false;
    releaseContext.debug("Verifying the '".concat(filePath, "' file..."));
    var fileContext = _file.default.fromReleaseContextAndFilePath(releaseContext, filePath), node = fileContext.getNode(), errorNodes = errorNodesQuery(node), errorNodesLength = errorNodes.length;
    if (errorNodesLength > 0) {
        releaseContext.error("The '".concat(filePath, "' file cannot be verified because it contains errors."));
    } else {
        var topLevelDeclarationNodes = topLevelDeclarationNodesQuery(node), topLevelDeclarationsVerified = topLevelDeclarationNodes.every(function(topLevelDeclarationNode) {
            var topLevelDeclarationVerified = (0, _topLevel.default)(topLevelDeclarationNode, fileContext);
            if (topLevelDeclarationVerified) {
                return true;
            }
        });
        if (topLevelDeclarationsVerified) {
            releaseContext.addFileContext(fileContext);
            fileVerified = true;
        }
    }
    if (fileVerified) {
        releaseContext.info("Verified the '".concat(filePath, "' file."));
    }
    return fileVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEZpbGVDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2ZpbGVcIjtcbmltcG9ydCB2ZXJpZnlUb3BMZXZlbERlY2xhcmF0aW9uIGZyb20gXCIuL2RlY2xhcmF0aW9uL3RvcExldmVsXCI7XG5cbmltcG9ydCB7IG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGVycm9yTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvZG9jdW1lbnQvZXJyb3JcIiksXG4gICAgICB0b3BMZXZlbERlY2xhcmF0aW9uTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvZG9jdW1lbnQvdG9wTGV2ZWxEZWNsYXJhdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5RmlsZShmaWxlUGF0aCwgcmVsZWFzZUNvbnRleHQpIHtcbiAgbGV0IGZpbGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIHJlbGVhc2VDb250ZXh0LmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke2ZpbGVQYXRofScgZmlsZS4uLmApO1xuXG4gIGNvbnN0IGZpbGVDb250ZXh0ID0gRmlsZUNvbnRleHQuZnJvbVJlbGVhc2VDb250ZXh0QW5kRmlsZVBhdGgocmVsZWFzZUNvbnRleHQsIGZpbGVQYXRoKSxcbiAgICAgICAgbm9kZSA9IGZpbGVDb250ZXh0LmdldE5vZGUoKSxcbiAgICAgICAgZXJyb3JOb2RlcyA9IGVycm9yTm9kZXNRdWVyeShub2RlKSxcbiAgICAgICAgZXJyb3JOb2Rlc0xlbmd0aCA9IGVycm9yTm9kZXMubGVuZ3RoO1xuXG4gIGlmIChlcnJvck5vZGVzTGVuZ3RoID4gMCkge1xuICAgIHJlbGVhc2VDb250ZXh0LmVycm9yKGBUaGUgJyR7ZmlsZVBhdGh9JyBmaWxlIGNhbm5vdCBiZSB2ZXJpZmllZCBiZWNhdXNlIGl0IGNvbnRhaW5zIGVycm9ycy5gKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0b3BMZXZlbERlY2xhcmF0aW9uTm9kZXMgPSB0b3BMZXZlbERlY2xhcmF0aW9uTm9kZXNRdWVyeShub2RlKSxcbiAgICAgICAgICB0b3BMZXZlbERlY2xhcmF0aW9uc1ZlcmlmaWVkID0gdG9wTGV2ZWxEZWNsYXJhdGlvbk5vZGVzLmV2ZXJ5KCh0b3BMZXZlbERlY2xhcmF0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdG9wTGV2ZWxEZWNsYXJhdGlvblZlcmlmaWVkID0gdmVyaWZ5VG9wTGV2ZWxEZWNsYXJhdGlvbih0b3BMZXZlbERlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAodG9wTGV2ZWxEZWNsYXJhdGlvblZlcmlmaWVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKHRvcExldmVsRGVjbGFyYXRpb25zVmVyaWZpZWQpIHtcbiAgICAgIHJlbGVhc2VDb250ZXh0LmFkZEZpbGVDb250ZXh0KGZpbGVDb250ZXh0KTtcblxuICAgICAgZmlsZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoZmlsZVZlcmlmaWVkKSB7XG4gICAgcmVsZWFzZUNvbnRleHQuaW5mbyhgVmVyaWZpZWQgdGhlICcke2ZpbGVQYXRofScgZmlsZS5gKTtcbiAgfVxuXG4gIHJldHVybiBmaWxlVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5RmlsZSIsImVycm9yTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJ0b3BMZXZlbERlY2xhcmF0aW9uTm9kZXNRdWVyeSIsImZpbGVQYXRoIiwicmVsZWFzZUNvbnRleHQiLCJmaWxlVmVyaWZpZWQiLCJkZWJ1ZyIsImZpbGVDb250ZXh0IiwiRmlsZUNvbnRleHQiLCJmcm9tUmVsZWFzZUNvbnRleHRBbmRGaWxlUGF0aCIsIm5vZGUiLCJnZXROb2RlIiwiZXJyb3JOb2RlcyIsImVycm9yTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJlcnJvciIsInRvcExldmVsRGVjbGFyYXRpb25Ob2RlcyIsInRvcExldmVsRGVjbGFyYXRpb25zVmVyaWZpZWQiLCJldmVyeSIsInRvcExldmVsRGVjbGFyYXRpb25Ob2RlIiwidG9wTGV2ZWxEZWNsYXJhdGlvblZlcmlmaWVkIiwidmVyaWZ5VG9wTGV2ZWxEZWNsYXJhdGlvbiIsImFkZEZpbGVDb250ZXh0IiwiaW5mbyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUF3QkE7Ozt5REFSQTs2REFDYztxQkFFWDs7Ozs7O0FBRTNCLElBQU1DLGtCQUFrQkMsSUFBQUEsaUJBQVUsRUFBQyxvQkFDN0JDLGdDQUFnQ0QsSUFBQUEsaUJBQVUsRUFBQztBQUVsQyxTQUFTRixXQUFXSSxRQUFRLEVBQUVDLGNBQWMsRUFBRTtJQUMzRCxJQUFJQyxlQUFlLEtBQUs7SUFFeEJELGVBQWVFLEtBQUssQ0FBQyxBQUFDLGtCQUEwQixPQUFUSCxVQUFTO0lBRWhELElBQU1JLGNBQWNDLGFBQVcsQ0FBQ0MsNkJBQTZCLENBQUNMLGdCQUFnQkQsV0FDeEVPLE9BQU9ILFlBQVlJLE9BQU8sSUFDMUJDLGFBQWFaLGdCQUFnQlUsT0FDN0JHLG1CQUFtQkQsV0FBV0UsTUFBTTtJQUUxQyxJQUFJRCxtQkFBbUIsR0FBRztRQUN4QlQsZUFBZVcsS0FBSyxDQUFDLEFBQUMsUUFBZ0IsT0FBVFosVUFBUztJQUN4QyxPQUFPO1FBQ0wsSUFBTWEsMkJBQTJCZCw4QkFBOEJRLE9BQ3pETywrQkFBK0JELHlCQUF5QkUsS0FBSyxDQUFDLFNBQUNDLHlCQUE0QjtZQUN6RixJQUFNQyw4QkFBOEJDLElBQUFBLGlCQUF5QixFQUFDRix5QkFBeUJaO1lBRXZGLElBQUlhLDZCQUE2QjtnQkFDL0IsT0FBTyxJQUFJO1lBQ2IsQ0FBQztRQUNIO1FBRU4sSUFBSUgsOEJBQThCO1lBQ2hDYixlQUFla0IsY0FBYyxDQUFDZjtZQUU5QkYsZUFBZSxJQUFJO1FBQ3JCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBSUEsY0FBYztRQUNoQkQsZUFBZW1CLElBQUksQ0FBQyxBQUFDLGlCQUF5QixPQUFUcEIsVUFBUztJQUNoRCxDQUFDO0lBRUQsT0FBT0U7QUFDVCJ9