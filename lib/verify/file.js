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
var _file = /*#__PURE__*/ _interop_require_default(require("../context/file"));
var _topLevel = /*#__PURE__*/ _interop_require_default(require("../verify/declaration/topLevel"));
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var errorNodesQuery = (0, _query.nodesQuery)("/document/error"), topLevelDeclarationNodesQuery = (0, _query.nodesQuery)("/document/topLevelDeclaration");
function verifyFile(filePath, releaseContext) {
    var fileVerified = false;
    releaseContext.debug("Verifying the '".concat(filePath, "' file..."));
    var fileContext = _file.default.fromFilePathAndReleaseContext(filePath, releaseContext), node = fileContext.getNode();
    if (node === null) {
        fileVerified = true;
    } else {
        var errorNodes = errorNodesQuery(node), errorNodesLength = errorNodes.length;
        if (errorNodesLength > 0) {
            releaseContext.warning("The '".concat(filePath, "' file cannot be verified because it contains errors."));
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
    }
    if (fileVerified) {
        releaseContext.info("...verified the '".concat(filePath, "' file."));
    }
    return fileVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEZpbGVDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2ZpbGVcIjtcbmltcG9ydCB2ZXJpZnlUb3BMZXZlbERlY2xhcmF0aW9uIGZyb20gXCIuLi92ZXJpZnkvZGVjbGFyYXRpb24vdG9wTGV2ZWxcIjtcblxuaW1wb3J0IHsgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgZXJyb3JOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9kb2N1bWVudC9lcnJvclwiKSxcbiAgICAgIHRvcExldmVsRGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9kb2N1bWVudC90b3BMZXZlbERlY2xhcmF0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlGaWxlKGZpbGVQYXRoLCByZWxlYXNlQ29udGV4dCkge1xuICBsZXQgZmlsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgcmVsZWFzZUNvbnRleHQuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7ZmlsZVBhdGh9JyBmaWxlLi4uYCk7XG5cbiAgY29uc3QgZmlsZUNvbnRleHQgPSBGaWxlQ29udGV4dC5mcm9tRmlsZVBhdGhBbmRSZWxlYXNlQ29udGV4dChmaWxlUGF0aCwgcmVsZWFzZUNvbnRleHQpLFxuICAgICAgICBub2RlID0gZmlsZUNvbnRleHQuZ2V0Tm9kZSgpO1xuXG4gIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgZmlsZVZlcmlmaWVkID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBlcnJvck5vZGVzID0gZXJyb3JOb2Rlc1F1ZXJ5KG5vZGUpLFxuICAgICAgICAgIGVycm9yTm9kZXNMZW5ndGggPSBlcnJvck5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChlcnJvck5vZGVzTGVuZ3RoID4gMCkge1xuICAgICAgcmVsZWFzZUNvbnRleHQud2FybmluZyhgVGhlICcke2ZpbGVQYXRofScgZmlsZSBjYW5ub3QgYmUgdmVyaWZpZWQgYmVjYXVzZSBpdCBjb250YWlucyBlcnJvcnMuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvcExldmVsRGVjbGFyYXRpb25Ob2RlcyA9IHRvcExldmVsRGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5KG5vZGUpLFxuICAgICAgICAgICAgdG9wTGV2ZWxEZWNsYXJhdGlvbnNWZXJpZmllZCA9IHRvcExldmVsRGVjbGFyYXRpb25Ob2Rlcy5ldmVyeSgodG9wTGV2ZWxEZWNsYXJhdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdG9wTGV2ZWxEZWNsYXJhdGlvblZlcmlmaWVkID0gdmVyaWZ5VG9wTGV2ZWxEZWNsYXJhdGlvbih0b3BMZXZlbERlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmICh0b3BMZXZlbERlY2xhcmF0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmICh0b3BMZXZlbERlY2xhcmF0aW9uc1ZlcmlmaWVkKSB7XG4gICAgICAgIHJlbGVhc2VDb250ZXh0LmFkZEZpbGVDb250ZXh0KGZpbGVDb250ZXh0KTtcblxuICAgICAgICBmaWxlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChmaWxlVmVyaWZpZWQpIHtcbiAgICByZWxlYXNlQ29udGV4dC5pbmZvKGAuLi52ZXJpZmllZCB0aGUgJyR7ZmlsZVBhdGh9JyBmaWxlLmApO1xuICB9XG5cbiAgcmV0dXJuIGZpbGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlGaWxlIiwiZXJyb3JOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInRvcExldmVsRGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5IiwiZmlsZVBhdGgiLCJyZWxlYXNlQ29udGV4dCIsImZpbGVWZXJpZmllZCIsImRlYnVnIiwiZmlsZUNvbnRleHQiLCJGaWxlQ29udGV4dCIsImZyb21GaWxlUGF0aEFuZFJlbGVhc2VDb250ZXh0Iiwibm9kZSIsImdldE5vZGUiLCJlcnJvck5vZGVzIiwiZXJyb3JOb2Rlc0xlbmd0aCIsImxlbmd0aCIsIndhcm5pbmciLCJ0b3BMZXZlbERlY2xhcmF0aW9uTm9kZXMiLCJ0b3BMZXZlbERlY2xhcmF0aW9uc1ZlcmlmaWVkIiwiZXZlcnkiLCJ0b3BMZXZlbERlY2xhcmF0aW9uTm9kZSIsInRvcExldmVsRGVjbGFyYXRpb25WZXJpZmllZCIsInZlcmlmeVRvcExldmVsRGVjbGFyYXRpb24iLCJhZGRGaWxlQ29udGV4dCIsImluZm8iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUF3QkE7OzsyREFSQTsrREFDYztxQkFFWDs7Ozs7O0FBRTNCLElBQU1DLGtCQUFrQkMsSUFBQUEsaUJBQVUsRUFBQyxvQkFDN0JDLGdDQUFnQ0QsSUFBQUEsaUJBQVUsRUFBQztBQUVsQyxTQUFTRixXQUFXSSxRQUFRLEVBQUVDLGNBQWM7SUFDekQsSUFBSUMsZUFBZTtJQUVuQkQsZUFBZUUsS0FBSyxDQUFDLEFBQUMsa0JBQTBCLE9BQVRILFVBQVM7SUFFaEQsSUFBTUksY0FBY0MsYUFBVyxDQUFDQyw2QkFBNkIsQ0FBQ04sVUFBVUMsaUJBQ2xFTSxPQUFPSCxZQUFZSSxPQUFPO0lBRWhDLElBQUlELFNBQVMsTUFBTTtRQUNqQkwsZUFBZTtJQUNqQixPQUFPO1FBQ0wsSUFBTU8sYUFBYVosZ0JBQWdCVSxPQUM3QkcsbUJBQW1CRCxXQUFXRSxNQUFNO1FBRTFDLElBQUlELG1CQUFtQixHQUFHO1lBQ3hCVCxlQUFlVyxPQUFPLENBQUMsQUFBQyxRQUFnQixPQUFUWixVQUFTO1FBQzFDLE9BQU87WUFDTCxJQUFNYSwyQkFBMkJkLDhCQUE4QlEsT0FDekRPLCtCQUErQkQseUJBQXlCRSxLQUFLLENBQUMsU0FBQ0M7Z0JBQzdELElBQU1DLDhCQUE4QkMsSUFBQUEsaUJBQXlCLEVBQUNGLHlCQUF5Qlo7Z0JBRXZGLElBQUlhLDZCQUE2QjtvQkFDL0IsT0FBTztnQkFDVDtZQUNGO1lBRU4sSUFBSUgsOEJBQThCO2dCQUNoQ2IsZUFBZWtCLGNBQWMsQ0FBQ2Y7Z0JBRTlCRixlQUFlO1lBQ2pCO1FBQ0Y7SUFDRjtJQUVBLElBQUlBLGNBQWM7UUFDaEJELGVBQWVtQixJQUFJLENBQUMsQUFBQyxvQkFBNEIsT0FBVHBCLFVBQVM7SUFDbkQ7SUFFQSxPQUFPRTtBQUNUIn0=