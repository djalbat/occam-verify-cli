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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEZpbGVDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2ZpbGVcIjtcbmltcG9ydCB2ZXJpZnlUb3BMZXZlbERlY2xhcmF0aW9uIGZyb20gXCIuL2RlY2xhcmF0aW9uL3RvcExldmVsXCI7XG5cbmltcG9ydCB7IG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGVycm9yTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvZG9jdW1lbnQvZXJyb3JcIiksXG4gICAgICB0b3BMZXZlbERlY2xhcmF0aW9uTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvZG9jdW1lbnQvdG9wTGV2ZWxEZWNsYXJhdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5RmlsZShmaWxlUGF0aCwgcmVsZWFzZUNvbnRleHQpIHtcbiAgbGV0IGZpbGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIHJlbGVhc2VDb250ZXh0LmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke2ZpbGVQYXRofScgZmlsZS4uLmApO1xuXG4gIGNvbnN0IGZpbGVDb250ZXh0ID0gRmlsZUNvbnRleHQuZnJvbUZpbGVQYXRoQW5kUmVsZWFzZUNvbnRleHQoZmlsZVBhdGgsIHJlbGVhc2VDb250ZXh0KSxcbiAgICAgICAgbm9kZSA9IGZpbGVDb250ZXh0LmdldE5vZGUoKTtcblxuICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgIGZpbGVWZXJpZmllZCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZXJyb3JOb2RlcyA9IGVycm9yTm9kZXNRdWVyeShub2RlKSxcbiAgICAgICAgICBlcnJvck5vZGVzTGVuZ3RoID0gZXJyb3JOb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoZXJyb3JOb2Rlc0xlbmd0aCA+IDApIHtcbiAgICAgIHJlbGVhc2VDb250ZXh0LmVycm9yKGBUaGUgJyR7ZmlsZVBhdGh9JyBmaWxlIGNhbm5vdCBiZSB2ZXJpZmllZCBiZWNhdXNlIGl0IGNvbnRhaW5zIGVycm9ycy5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdG9wTGV2ZWxEZWNsYXJhdGlvbk5vZGVzID0gdG9wTGV2ZWxEZWNsYXJhdGlvbk5vZGVzUXVlcnkobm9kZSksXG4gICAgICAgICAgICB0b3BMZXZlbERlY2xhcmF0aW9uc1ZlcmlmaWVkID0gdG9wTGV2ZWxEZWNsYXJhdGlvbk5vZGVzLmV2ZXJ5KCh0b3BMZXZlbERlY2xhcmF0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB0b3BMZXZlbERlY2xhcmF0aW9uVmVyaWZpZWQgPSB2ZXJpZnlUb3BMZXZlbERlY2xhcmF0aW9uKHRvcExldmVsRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKHRvcExldmVsRGVjbGFyYXRpb25WZXJpZmllZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKHRvcExldmVsRGVjbGFyYXRpb25zVmVyaWZpZWQpIHtcbiAgICAgICAgcmVsZWFzZUNvbnRleHQuYWRkRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpO1xuXG4gICAgICAgIGZpbGVWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGZpbGVWZXJpZmllZCkge1xuICAgIHJlbGVhc2VDb250ZXh0LmluZm8oYFZlcmlmaWVkIHRoZSAnJHtmaWxlUGF0aH0nIGZpbGUuYCk7XG4gIH1cblxuICByZXR1cm4gZmlsZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeUZpbGUiLCJlcnJvck5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwidG9wTGV2ZWxEZWNsYXJhdGlvbk5vZGVzUXVlcnkiLCJmaWxlUGF0aCIsInJlbGVhc2VDb250ZXh0IiwiZmlsZVZlcmlmaWVkIiwiZGVidWciLCJmaWxlQ29udGV4dCIsIkZpbGVDb250ZXh0IiwiZnJvbUZpbGVQYXRoQW5kUmVsZWFzZUNvbnRleHQiLCJub2RlIiwiZ2V0Tm9kZSIsImVycm9yTm9kZXMiLCJlcnJvck5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiZXJyb3IiLCJ0b3BMZXZlbERlY2xhcmF0aW9uTm9kZXMiLCJ0b3BMZXZlbERlY2xhcmF0aW9uc1ZlcmlmaWVkIiwiZXZlcnkiLCJ0b3BMZXZlbERlY2xhcmF0aW9uTm9kZSIsInRvcExldmVsRGVjbGFyYXRpb25WZXJpZmllZCIsInZlcmlmeVRvcExldmVsRGVjbGFyYXRpb24iLCJhZGRGaWxlQ29udGV4dCIsImluZm8iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBd0JBOzs7MkRBUkE7K0RBQ2M7cUJBRVg7Ozs7OztBQUUzQixJQUFNQyxrQkFBa0JDLElBQUFBLGlCQUFVLEVBQUMsb0JBQzdCQyxnQ0FBZ0NELElBQUFBLGlCQUFVLEVBQUM7QUFFbEMsU0FBU0YsV0FBV0ksUUFBUSxFQUFFQyxjQUFjO0lBQ3pELElBQUlDLGVBQWU7SUFFbkJELGVBQWVFLEtBQUssQ0FBQyxBQUFDLGtCQUEwQixPQUFUSCxVQUFTO0lBRWhELElBQU1JLGNBQWNDLGFBQVcsQ0FBQ0MsNkJBQTZCLENBQUNOLFVBQVVDLGlCQUNsRU0sT0FBT0gsWUFBWUksT0FBTztJQUVoQyxJQUFJRCxTQUFTLE1BQU07UUFDakJMLGVBQWU7SUFDakIsT0FBTztRQUNMLElBQU1PLGFBQWFaLGdCQUFnQlUsT0FDN0JHLG1CQUFtQkQsV0FBV0UsTUFBTTtRQUUxQyxJQUFJRCxtQkFBbUIsR0FBRztZQUN4QlQsZUFBZVcsS0FBSyxDQUFDLEFBQUMsUUFBZ0IsT0FBVFosVUFBUztRQUN4QyxPQUFPO1lBQ0wsSUFBTWEsMkJBQTJCZCw4QkFBOEJRLE9BQ3pETywrQkFBK0JELHlCQUF5QkUsS0FBSyxDQUFDLFNBQUNDO2dCQUM3RCxJQUFNQyw4QkFBOEJDLElBQUFBLGlCQUF5QixFQUFDRix5QkFBeUJaO2dCQUV2RixJQUFJYSw2QkFBNkI7b0JBQy9CLE9BQU87Z0JBQ1Q7WUFDRjtZQUVOLElBQUlILDhCQUE4QjtnQkFDaENiLGVBQWVrQixjQUFjLENBQUNmO2dCQUU5QkYsZUFBZTtZQUNqQjtRQUNGO0lBQ0Y7SUFFQSxJQUFJQSxjQUFjO1FBQ2hCRCxlQUFlbUIsSUFBSSxDQUFDLEFBQUMsaUJBQXlCLE9BQVRwQixVQUFTO0lBQ2hEO0lBRUEsT0FBT0U7QUFDVCJ9