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
var _release = /*#__PURE__*/ _interopRequireDefault(require("../context/release"));
var _topLevel = /*#__PURE__*/ _interopRequireDefault(require("../verify/declaration/topLevel"));
var _query = require("../utilities/query");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var topLevelDeclarationNodesQuery = (0, _query.nodesQuery)("/document/topLevelDeclaration");
function verifyFile(filePath) {
    var releaseContext = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _release.default.fromNothing();
    var fileVerified = false;
    releaseContext.debug("Verifying the '".concat(filePath, "' file..."));
    var fileContext = _file.default.fromReleaseContextAndFilePath(releaseContext, filePath), context = fileContext, node = fileContext.getNode(), topLevelDeclarationNodes = topLevelDeclarationNodesQuery(node), topLevelDeclarationsVerified = topLevelDeclarationNodes.every(function(topLevelDeclarationNode) {
        var topLevelDeclarationVerified = (0, _topLevel.default)(topLevelDeclarationNode, context);
        if (topLevelDeclarationVerified) {
            return true;
        }
    });
    if (topLevelDeclarationsVerified) {
        releaseContext.addFileContext(fileContext);
        fileVerified = true;
        releaseContext.info("Verified the '".concat(filePath, "' file."));
    }
    return fileVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEZpbGVDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2ZpbGVcIjtcbmltcG9ydCBSZWxlYXNlQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9yZWxlYXNlXCI7XG5pbXBvcnQgdmVyaWZ5VG9wTGV2ZWxEZWNsYXJhdGlvbiBmcm9tIFwiLi4vdmVyaWZ5L2RlY2xhcmF0aW9uL3RvcExldmVsXCI7XG5cbmltcG9ydCB7IG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHRvcExldmVsRGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9kb2N1bWVudC90b3BMZXZlbERlY2xhcmF0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlGaWxlKGZpbGVQYXRoLCByZWxlYXNlQ29udGV4dCA9IFJlbGVhc2VDb250ZXh0LmZyb21Ob3RoaW5nKCkpIHtcbiAgbGV0IGZpbGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIHJlbGVhc2VDb250ZXh0LmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke2ZpbGVQYXRofScgZmlsZS4uLmApO1xuXG4gIGNvbnN0IGZpbGVDb250ZXh0ID0gRmlsZUNvbnRleHQuZnJvbVJlbGVhc2VDb250ZXh0QW5kRmlsZVBhdGgocmVsZWFzZUNvbnRleHQsIGZpbGVQYXRoKSxcbiAgICAgICAgY29udGV4dCA9IGZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgIG5vZGUgPSBmaWxlQ29udGV4dC5nZXROb2RlKCksXG4gICAgICAgIHRvcExldmVsRGVjbGFyYXRpb25Ob2RlcyA9IHRvcExldmVsRGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5KG5vZGUpLFxuICAgICAgICB0b3BMZXZlbERlY2xhcmF0aW9uc1ZlcmlmaWVkID0gdG9wTGV2ZWxEZWNsYXJhdGlvbk5vZGVzLmV2ZXJ5KCh0b3BMZXZlbERlY2xhcmF0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRvcExldmVsRGVjbGFyYXRpb25WZXJpZmllZCA9IHZlcmlmeVRvcExldmVsRGVjbGFyYXRpb24odG9wTGV2ZWxEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHRvcExldmVsRGVjbGFyYXRpb25WZXJpZmllZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gIGlmICh0b3BMZXZlbERlY2xhcmF0aW9uc1ZlcmlmaWVkKSB7XG4gICAgcmVsZWFzZUNvbnRleHQuYWRkRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpO1xuXG4gICAgZmlsZVZlcmlmaWVkID0gdHJ1ZTtcblxuICAgIHJlbGVhc2VDb250ZXh0LmluZm8oYFZlcmlmaWVkIHRoZSAnJHtmaWxlUGF0aH0nIGZpbGUuYCk7XG4gIH1cblxuICByZXR1cm4gZmlsZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeUZpbGUiLCJ0b3BMZXZlbERlY2xhcmF0aW9uTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJmaWxlUGF0aCIsInJlbGVhc2VDb250ZXh0IiwiUmVsZWFzZUNvbnRleHQiLCJmcm9tTm90aGluZyIsImZpbGVWZXJpZmllZCIsImRlYnVnIiwiZmlsZUNvbnRleHQiLCJGaWxlQ29udGV4dCIsImZyb21SZWxlYXNlQ29udGV4dEFuZEZpbGVQYXRoIiwiY29udGV4dCIsIm5vZGUiLCJnZXROb2RlIiwidG9wTGV2ZWxEZWNsYXJhdGlvbk5vZGVzIiwidG9wTGV2ZWxEZWNsYXJhdGlvbnNWZXJpZmllZCIsImV2ZXJ5IiwidG9wTGV2ZWxEZWNsYXJhdGlvbk5vZGUiLCJ0b3BMZXZlbERlY2xhcmF0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlUb3BMZXZlbERlY2xhcmF0aW9uIiwiYWRkRmlsZUNvbnRleHQiLCJpbmZvIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQXdCQTs7O3lEQVJBOzREQUNHOzZEQUNXO3FCQUVYOzs7Ozs7QUFFM0IsSUFBTUMsZ0NBQWdDQyxJQUFBQSxpQkFBVSxFQUFDO0FBRWxDLFNBQVNGLFdBQVdHLFFBQVEsRUFBaUQ7UUFBL0NDLGlCQUFBQSxpRUFBaUJDLGdCQUFjLENBQUNDLFdBQVcsRUFBRTtJQUN4RixJQUFJQyxlQUFlLEtBQUs7SUFFeEJILGVBQWVJLEtBQUssQ0FBQyxBQUFDLGtCQUEwQixPQUFUTCxVQUFTO0lBRWhELElBQU1NLGNBQWNDLGFBQVcsQ0FBQ0MsNkJBQTZCLENBQUNQLGdCQUFnQkQsV0FDeEVTLFVBQVVILGFBQ1ZJLE9BQU9KLFlBQVlLLE9BQU8sSUFDMUJDLDJCQUEyQmQsOEJBQThCWSxPQUN6REcsK0JBQStCRCx5QkFBeUJFLEtBQUssQ0FBQyxTQUFDQyx5QkFBNEI7UUFDekYsSUFBTUMsOEJBQThCQyxJQUFBQSxpQkFBeUIsRUFBQ0YseUJBQXlCTjtRQUV2RixJQUFJTyw2QkFBNkI7WUFDL0IsT0FBTyxJQUFJO1FBQ2IsQ0FBQztJQUNIO0lBRU4sSUFBSUgsOEJBQThCO1FBQ2hDWixlQUFlaUIsY0FBYyxDQUFDWjtRQUU5QkYsZUFBZSxJQUFJO1FBRW5CSCxlQUFla0IsSUFBSSxDQUFDLEFBQUMsaUJBQXlCLE9BQVRuQixVQUFTO0lBQ2hELENBQUM7SUFFRCxPQUFPSTtBQUNUIn0=