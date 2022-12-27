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
var topLevelDeclarationNodesQuery = (0, _query.nodesQuery)("/document/topLevelDeclaration");
function verifyFile(filePath, releaseContext) {
    var fileVerified = false;
    releaseContext.debug("Verifying the '".concat(filePath, "' file..."));
    var fileContext = _file.default.fromReleaseContextAndFilePath(releaseContext, filePath), node = fileContext.getNode(), topLevelDeclarationNodes = topLevelDeclarationNodesQuery(node), topLevelDeclarationsVerified = topLevelDeclarationNodes.every(function(topLevelDeclarationNode) {
        var topLevelDeclarationVerified = (0, _topLevel.default)(topLevelDeclarationNode, fileContext);
        if (topLevelDeclarationVerified) {
            return true;
        }
    });
    if (topLevelDeclarationsVerified) {
        releaseContext.addFileContext(fileContext);
        fileVerified = true;
    }
    if (fileVerified) {
        releaseContext.info("Verified the '".concat(filePath, "' file."));
    }
    return fileVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEZpbGVDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2ZpbGVcIjtcbmltcG9ydCB2ZXJpZnlUb3BMZXZlbERlY2xhcmF0aW9uIGZyb20gXCIuL2RlY2xhcmF0aW9uL3RvcExldmVsXCI7XG5cbmltcG9ydCB7IG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHRvcExldmVsRGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9kb2N1bWVudC90b3BMZXZlbERlY2xhcmF0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlGaWxlKGZpbGVQYXRoLCByZWxlYXNlQ29udGV4dCkge1xuICBsZXQgZmlsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgcmVsZWFzZUNvbnRleHQuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7ZmlsZVBhdGh9JyBmaWxlLi4uYCk7XG5cbiAgY29uc3QgZmlsZUNvbnRleHQgPSBGaWxlQ29udGV4dC5mcm9tUmVsZWFzZUNvbnRleHRBbmRGaWxlUGF0aChyZWxlYXNlQ29udGV4dCwgZmlsZVBhdGgpLFxuICAgICAgICBub2RlID0gZmlsZUNvbnRleHQuZ2V0Tm9kZSgpLFxuICAgICAgICB0b3BMZXZlbERlY2xhcmF0aW9uTm9kZXMgPSB0b3BMZXZlbERlY2xhcmF0aW9uTm9kZXNRdWVyeShub2RlKSxcbiAgICAgICAgdG9wTGV2ZWxEZWNsYXJhdGlvbnNWZXJpZmllZCA9IHRvcExldmVsRGVjbGFyYXRpb25Ob2Rlcy5ldmVyeSgodG9wTGV2ZWxEZWNsYXJhdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCB0b3BMZXZlbERlY2xhcmF0aW9uVmVyaWZpZWQgPSB2ZXJpZnlUb3BMZXZlbERlY2xhcmF0aW9uKHRvcExldmVsRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICBpZiAodG9wTGV2ZWxEZWNsYXJhdGlvblZlcmlmaWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gIGlmICh0b3BMZXZlbERlY2xhcmF0aW9uc1ZlcmlmaWVkKSB7XG4gICAgcmVsZWFzZUNvbnRleHQuYWRkRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpO1xuXG4gICAgZmlsZVZlcmlmaWVkID0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChmaWxlVmVyaWZpZWQpIHtcbiAgICByZWxlYXNlQ29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7ZmlsZVBhdGh9JyBmaWxlLmApO1xuICB9XG5cbiAgcmV0dXJuIGZpbGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlGaWxlIiwidG9wTGV2ZWxEZWNsYXJhdGlvbk5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiZmlsZVBhdGgiLCJyZWxlYXNlQ29udGV4dCIsImZpbGVWZXJpZmllZCIsImRlYnVnIiwiZmlsZUNvbnRleHQiLCJGaWxlQ29udGV4dCIsImZyb21SZWxlYXNlQ29udGV4dEFuZEZpbGVQYXRoIiwibm9kZSIsImdldE5vZGUiLCJ0b3BMZXZlbERlY2xhcmF0aW9uTm9kZXMiLCJ0b3BMZXZlbERlY2xhcmF0aW9uc1ZlcmlmaWVkIiwiZXZlcnkiLCJ0b3BMZXZlbERlY2xhcmF0aW9uTm9kZSIsInRvcExldmVsRGVjbGFyYXRpb25WZXJpZmllZCIsInZlcmlmeVRvcExldmVsRGVjbGFyYXRpb24iLCJhZGRGaWxlQ29udGV4dCIsImluZm8iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBd0JBOzs7eURBUEE7NkRBQ2M7cUJBRVg7Ozs7OztBQUUzQixJQUFNQyxnQ0FBZ0NDLElBQUFBLGlCQUFVLEVBQUM7QUFFbEMsU0FBU0YsV0FBV0csUUFBUSxFQUFFQyxjQUFjLEVBQUU7SUFDM0QsSUFBSUMsZUFBZSxLQUFLO0lBRXhCRCxlQUFlRSxLQUFLLENBQUMsQUFBQyxrQkFBMEIsT0FBVEgsVUFBUztJQUVoRCxJQUFNSSxjQUFjQyxhQUFXLENBQUNDLDZCQUE2QixDQUFDTCxnQkFBZ0JELFdBQ3hFTyxPQUFPSCxZQUFZSSxPQUFPLElBQzFCQywyQkFBMkJYLDhCQUE4QlMsT0FDekRHLCtCQUErQkQseUJBQXlCRSxLQUFLLENBQUMsU0FBQ0MseUJBQTRCO1FBQ3pGLElBQU1DLDhCQUE4QkMsSUFBQUEsaUJBQXlCLEVBQUNGLHlCQUF5QlI7UUFFdkYsSUFBSVMsNkJBQTZCO1lBQy9CLE9BQU8sSUFBSTtRQUNiLENBQUM7SUFDSDtJQUVOLElBQUlILDhCQUE4QjtRQUNoQ1QsZUFBZWMsY0FBYyxDQUFDWDtRQUU5QkYsZUFBZSxJQUFJO0lBQ3JCLENBQUM7SUFFRCxJQUFJQSxjQUFjO1FBQ2hCRCxlQUFlZSxJQUFJLENBQUMsQUFBQyxpQkFBeUIsT0FBVGhCLFVBQVM7SUFDaEQsQ0FBQztJQUVELE9BQU9FO0FBQ1QifQ==