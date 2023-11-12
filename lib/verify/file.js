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
var _topLevel = /*#__PURE__*/ _interop_require_default(require("./declaration/topLevel"));
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var errorNodesQuery = (0, _query.nodesQuery)("/document/error"), topLevelDeclarationNodesQuery = (0, _query.nodesQuery)("/document/topLevelDeclaration");
function verifyFile(filePath, releaseContext) {
    var fileVerified = false;
    releaseContext.debug("Verifying the '".concat(filePath, "' file."));
    var fileContext = _file.default.fromFilePathAndReleaseContext(filePath, releaseContext), node = fileContext.getNode();
    if (node === null) {
        fileVerified = true;
    } else {
        var errorNodes = errorNodesQuery(node), errorNodesLength = errorNodes.length;
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
    }
    if (fileVerified) {
        releaseContext.info("Verified the '".concat(filePath, "' file."));
    }
    return fileVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEZpbGVDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2ZpbGVcIjtcbmltcG9ydCB2ZXJpZnlUb3BMZXZlbERlY2xhcmF0aW9uIGZyb20gXCIuL2RlY2xhcmF0aW9uL3RvcExldmVsXCI7XG5cbmltcG9ydCB7IG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGVycm9yTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvZG9jdW1lbnQvZXJyb3JcIiksXG4gICAgICB0b3BMZXZlbERlY2xhcmF0aW9uTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvZG9jdW1lbnQvdG9wTGV2ZWxEZWNsYXJhdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5RmlsZShmaWxlUGF0aCwgcmVsZWFzZUNvbnRleHQpIHtcbiAgbGV0IGZpbGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIHJlbGVhc2VDb250ZXh0LmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke2ZpbGVQYXRofScgZmlsZS5gKTtcblxuICBjb25zdCBmaWxlQ29udGV4dCA9IEZpbGVDb250ZXh0LmZyb21GaWxlUGF0aEFuZFJlbGVhc2VDb250ZXh0KGZpbGVQYXRoLCByZWxlYXNlQ29udGV4dCksXG4gICAgICAgIG5vZGUgPSBmaWxlQ29udGV4dC5nZXROb2RlKCk7XG5cbiAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICBmaWxlVmVyaWZpZWQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGVycm9yTm9kZXMgPSBlcnJvck5vZGVzUXVlcnkobm9kZSksXG4gICAgICAgICAgZXJyb3JOb2Rlc0xlbmd0aCA9IGVycm9yTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGVycm9yTm9kZXNMZW5ndGggPiAwKSB7XG4gICAgICByZWxlYXNlQ29udGV4dC5lcnJvcihgVGhlICcke2ZpbGVQYXRofScgZmlsZSBjYW5ub3QgYmUgdmVyaWZpZWQgYmVjYXVzZSBpdCBjb250YWlucyBlcnJvcnMuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvcExldmVsRGVjbGFyYXRpb25Ob2RlcyA9IHRvcExldmVsRGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5KG5vZGUpLFxuICAgICAgICAgICAgdG9wTGV2ZWxEZWNsYXJhdGlvbnNWZXJpZmllZCA9IHRvcExldmVsRGVjbGFyYXRpb25Ob2Rlcy5ldmVyeSgodG9wTGV2ZWxEZWNsYXJhdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdG9wTGV2ZWxEZWNsYXJhdGlvblZlcmlmaWVkID0gdmVyaWZ5VG9wTGV2ZWxEZWNsYXJhdGlvbih0b3BMZXZlbERlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmICh0b3BMZXZlbERlY2xhcmF0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmICh0b3BMZXZlbERlY2xhcmF0aW9uc1ZlcmlmaWVkKSB7XG4gICAgICAgIHJlbGVhc2VDb250ZXh0LmFkZEZpbGVDb250ZXh0KGZpbGVDb250ZXh0KTtcblxuICAgICAgICBmaWxlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChmaWxlVmVyaWZpZWQpIHtcbiAgICByZWxlYXNlQ29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7ZmlsZVBhdGh9JyBmaWxlLmApO1xuICB9XG5cbiAgcmV0dXJuIGZpbGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlGaWxlIiwiZXJyb3JOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInRvcExldmVsRGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5IiwiZmlsZVBhdGgiLCJyZWxlYXNlQ29udGV4dCIsImZpbGVWZXJpZmllZCIsImRlYnVnIiwiZmlsZUNvbnRleHQiLCJGaWxlQ29udGV4dCIsImZyb21GaWxlUGF0aEFuZFJlbGVhc2VDb250ZXh0Iiwibm9kZSIsImdldE5vZGUiLCJlcnJvck5vZGVzIiwiZXJyb3JOb2Rlc0xlbmd0aCIsImxlbmd0aCIsImVycm9yIiwidG9wTGV2ZWxEZWNsYXJhdGlvbk5vZGVzIiwidG9wTGV2ZWxEZWNsYXJhdGlvbnNWZXJpZmllZCIsImV2ZXJ5IiwidG9wTGV2ZWxEZWNsYXJhdGlvbk5vZGUiLCJ0b3BMZXZlbERlY2xhcmF0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlUb3BMZXZlbERlY2xhcmF0aW9uIiwiYWRkRmlsZUNvbnRleHQiLCJpbmZvIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQXdCQTs7OzJEQVJBOytEQUNjO3FCQUVYOzs7Ozs7QUFFM0IsSUFBTUMsa0JBQWtCQyxJQUFBQSxpQkFBVSxFQUFDLG9CQUM3QkMsZ0NBQWdDRCxJQUFBQSxpQkFBVSxFQUFDO0FBRWxDLFNBQVNGLFdBQVdJLFFBQVEsRUFBRUMsY0FBYztJQUN6RCxJQUFJQyxlQUFlO0lBRW5CRCxlQUFlRSxLQUFLLENBQUMsQUFBQyxrQkFBMEIsT0FBVEgsVUFBUztJQUVoRCxJQUFNSSxjQUFjQyxhQUFXLENBQUNDLDZCQUE2QixDQUFDTixVQUFVQyxpQkFDbEVNLE9BQU9ILFlBQVlJLE9BQU87SUFFaEMsSUFBSUQsU0FBUyxNQUFNO1FBQ2pCTCxlQUFlO0lBQ2pCLE9BQU87UUFDTCxJQUFNTyxhQUFhWixnQkFBZ0JVLE9BQzdCRyxtQkFBbUJELFdBQVdFLE1BQU07UUFFMUMsSUFBSUQsbUJBQW1CLEdBQUc7WUFDeEJULGVBQWVXLEtBQUssQ0FBQyxBQUFDLFFBQWdCLE9BQVRaLFVBQVM7UUFDeEMsT0FBTztZQUNMLElBQU1hLDJCQUEyQmQsOEJBQThCUSxPQUN6RE8sK0JBQStCRCx5QkFBeUJFLEtBQUssQ0FBQyxTQUFDQztnQkFDN0QsSUFBTUMsOEJBQThCQyxJQUFBQSxpQkFBeUIsRUFBQ0YseUJBQXlCWjtnQkFFdkYsSUFBSWEsNkJBQTZCO29CQUMvQixPQUFPO2dCQUNUO1lBQ0Y7WUFFTixJQUFJSCw4QkFBOEI7Z0JBQ2hDYixlQUFla0IsY0FBYyxDQUFDZjtnQkFFOUJGLGVBQWU7WUFDakI7UUFDRjtJQUNGO0lBRUEsSUFBSUEsY0FBYztRQUNoQkQsZUFBZW1CLElBQUksQ0FBQyxBQUFDLGlCQUF5QixPQUFUcEIsVUFBUztJQUNoRDtJQUVBLE9BQU9FO0FBQ1QifQ==