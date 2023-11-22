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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEZpbGVDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2ZpbGVcIjtcbmltcG9ydCB2ZXJpZnlUb3BMZXZlbERlY2xhcmF0aW9uIGZyb20gXCIuL2RlY2xhcmF0aW9uL3RvcExldmVsXCI7XG5cbmltcG9ydCB7IG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGVycm9yTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvZG9jdW1lbnQvZXJyb3JcIiksXG4gICAgICB0b3BMZXZlbERlY2xhcmF0aW9uTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvZG9jdW1lbnQvdG9wTGV2ZWxEZWNsYXJhdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5RmlsZShmaWxlUGF0aCwgcmVsZWFzZUNvbnRleHQpIHtcbiAgbGV0IGZpbGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIHJlbGVhc2VDb250ZXh0LmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke2ZpbGVQYXRofScgZmlsZS4uLmApO1xuXG4gIGNvbnN0IGZpbGVDb250ZXh0ID0gRmlsZUNvbnRleHQuZnJvbUZpbGVQYXRoQW5kUmVsZWFzZUNvbnRleHQoZmlsZVBhdGgsIHJlbGVhc2VDb250ZXh0KSxcbiAgICAgICAgbm9kZSA9IGZpbGVDb250ZXh0LmdldE5vZGUoKTtcblxuICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgIGZpbGVWZXJpZmllZCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZXJyb3JOb2RlcyA9IGVycm9yTm9kZXNRdWVyeShub2RlKSxcbiAgICAgICAgICBlcnJvck5vZGVzTGVuZ3RoID0gZXJyb3JOb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoZXJyb3JOb2Rlc0xlbmd0aCA+IDApIHtcbiAgICAgIHJlbGVhc2VDb250ZXh0Lndhcm5pbmcoYFRoZSAnJHtmaWxlUGF0aH0nIGZpbGUgY2Fubm90IGJlIHZlcmlmaWVkIGJlY2F1c2UgaXQgY29udGFpbnMgZXJyb3JzLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b3BMZXZlbERlY2xhcmF0aW9uTm9kZXMgPSB0b3BMZXZlbERlY2xhcmF0aW9uTm9kZXNRdWVyeShub2RlKSxcbiAgICAgICAgICAgIHRvcExldmVsRGVjbGFyYXRpb25zVmVyaWZpZWQgPSB0b3BMZXZlbERlY2xhcmF0aW9uTm9kZXMuZXZlcnkoKHRvcExldmVsRGVjbGFyYXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHRvcExldmVsRGVjbGFyYXRpb25WZXJpZmllZCA9IHZlcmlmeVRvcExldmVsRGVjbGFyYXRpb24odG9wTGV2ZWxEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAodG9wTGV2ZWxEZWNsYXJhdGlvblZlcmlmaWVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAodG9wTGV2ZWxEZWNsYXJhdGlvbnNWZXJpZmllZCkge1xuICAgICAgICByZWxlYXNlQ29udGV4dC5hZGRGaWxlQ29udGV4dChmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgZmlsZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoZmlsZVZlcmlmaWVkKSB7XG4gICAgcmVsZWFzZUNvbnRleHQuaW5mbyhgLi4udmVyaWZpZWQgdGhlICcke2ZpbGVQYXRofScgZmlsZS5gKTtcbiAgfVxuXG4gIHJldHVybiBmaWxlVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5RmlsZSIsImVycm9yTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJ0b3BMZXZlbERlY2xhcmF0aW9uTm9kZXNRdWVyeSIsImZpbGVQYXRoIiwicmVsZWFzZUNvbnRleHQiLCJmaWxlVmVyaWZpZWQiLCJkZWJ1ZyIsImZpbGVDb250ZXh0IiwiRmlsZUNvbnRleHQiLCJmcm9tRmlsZVBhdGhBbmRSZWxlYXNlQ29udGV4dCIsIm5vZGUiLCJnZXROb2RlIiwiZXJyb3JOb2RlcyIsImVycm9yTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJ3YXJuaW5nIiwidG9wTGV2ZWxEZWNsYXJhdGlvbk5vZGVzIiwidG9wTGV2ZWxEZWNsYXJhdGlvbnNWZXJpZmllZCIsImV2ZXJ5IiwidG9wTGV2ZWxEZWNsYXJhdGlvbk5vZGUiLCJ0b3BMZXZlbERlY2xhcmF0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlUb3BMZXZlbERlY2xhcmF0aW9uIiwiYWRkRmlsZUNvbnRleHQiLCJpbmZvIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQXdCQTs7OzJEQVJBOytEQUNjO3FCQUVYOzs7Ozs7QUFFM0IsSUFBTUMsa0JBQWtCQyxJQUFBQSxpQkFBVSxFQUFDLG9CQUM3QkMsZ0NBQWdDRCxJQUFBQSxpQkFBVSxFQUFDO0FBRWxDLFNBQVNGLFdBQVdJLFFBQVEsRUFBRUMsY0FBYztJQUN6RCxJQUFJQyxlQUFlO0lBRW5CRCxlQUFlRSxLQUFLLENBQUMsQUFBQyxrQkFBMEIsT0FBVEgsVUFBUztJQUVoRCxJQUFNSSxjQUFjQyxhQUFXLENBQUNDLDZCQUE2QixDQUFDTixVQUFVQyxpQkFDbEVNLE9BQU9ILFlBQVlJLE9BQU87SUFFaEMsSUFBSUQsU0FBUyxNQUFNO1FBQ2pCTCxlQUFlO0lBQ2pCLE9BQU87UUFDTCxJQUFNTyxhQUFhWixnQkFBZ0JVLE9BQzdCRyxtQkFBbUJELFdBQVdFLE1BQU07UUFFMUMsSUFBSUQsbUJBQW1CLEdBQUc7WUFDeEJULGVBQWVXLE9BQU8sQ0FBQyxBQUFDLFFBQWdCLE9BQVRaLFVBQVM7UUFDMUMsT0FBTztZQUNMLElBQU1hLDJCQUEyQmQsOEJBQThCUSxPQUN6RE8sK0JBQStCRCx5QkFBeUJFLEtBQUssQ0FBQyxTQUFDQztnQkFDN0QsSUFBTUMsOEJBQThCQyxJQUFBQSxpQkFBeUIsRUFBQ0YseUJBQXlCWjtnQkFFdkYsSUFBSWEsNkJBQTZCO29CQUMvQixPQUFPO2dCQUNUO1lBQ0Y7WUFFTixJQUFJSCw4QkFBOEI7Z0JBQ2hDYixlQUFla0IsY0FBYyxDQUFDZjtnQkFFOUJGLGVBQWU7WUFDakI7UUFDRjtJQUNGO0lBRUEsSUFBSUEsY0FBYztRQUNoQkQsZUFBZW1CLElBQUksQ0FBQyxBQUFDLG9CQUE0QixPQUFUcEIsVUFBUztJQUNuRDtJQUVBLE9BQU9FO0FBQ1QifQ==