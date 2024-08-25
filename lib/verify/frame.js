"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyFrame;
    }
});
var _declaration = /*#__PURE__*/ _interop_require_default(require("../verify/declaration"));
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var declarationNodesQuery = (0, _query.nodesQuery)("/frame/declaration");
function verifyFrame(frameNode, derived, localMetaContext) {
    var frameVerified;
    var frameString = localMetaContext.nodeAsString(frameNode);
    localMetaContext.trace("Verifying the '".concat(frameString, "' frame..."), frameNode);
    var declarationNodes = declarationNodesQuery(frameNode), declarationsVerified = declarationNodes.every(function(declarationNode) {
        var declarationVerified = (0, _declaration.default)(declarationNode, derived, localMetaContext);
        return declarationVerified;
    });
    frameVerified = declarationsVerified; ///
    if (frameVerified) {
        localMetaContext.debug("...verified the '".concat(frameString, "' frame."), frameNode);
    }
    return frameVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZnJhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlEZWNsYXJhdGlvbiBmcm9tIFwiLi4vdmVyaWZ5L2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGRlY2xhcmF0aW9uTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvZnJhbWUvZGVjbGFyYXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeUZyYW1lKGZyYW1lTm9kZSwgZGVyaXZlZCwgbG9jYWxNZXRhQ29udGV4dCkge1xuICBsZXQgZnJhbWVWZXJpZmllZDtcblxuICBjb25zdCBmcmFtZVN0cmluZyA9IGxvY2FsTWV0YUNvbnRleHQubm9kZUFzU3RyaW5nKGZyYW1lTm9kZSk7XG5cbiAgbG9jYWxNZXRhQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCwgZnJhbWVOb2RlKTtcblxuICBjb25zdCBkZWNsYXJhdGlvbk5vZGVzID0gZGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5KGZyYW1lTm9kZSksXG4gICAgICAgIGRlY2xhcmF0aW9uc1ZlcmlmaWVkID0gZGVjbGFyYXRpb25Ob2Rlcy5ldmVyeSgoZGVjbGFyYXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGVjbGFyYXRpb25WZXJpZmllZCA9IHZlcmlmeURlY2xhcmF0aW9uKGRlY2xhcmF0aW9uTm9kZSwgZGVyaXZlZCwgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gZGVjbGFyYXRpb25WZXJpZmllZDtcbiAgICAgICAgfSk7XG5cbiAgZnJhbWVWZXJpZmllZCA9IGRlY2xhcmF0aW9uc1ZlcmlmaWVkOyAvLy9cblxuICBpZiAoZnJhbWVWZXJpZmllZCkge1xuICAgIGxvY2FsTWV0YUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmAsIGZyYW1lTm9kZSk7XG4gIH1cblxuICByZXR1cm4gZnJhbWVWZXJpZmllZDtcbn0iXSwibmFtZXMiOlsidmVyaWZ5RnJhbWUiLCJkZWNsYXJhdGlvbk5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiZnJhbWVOb2RlIiwiZGVyaXZlZCIsImxvY2FsTWV0YUNvbnRleHQiLCJmcmFtZVZlcmlmaWVkIiwiZnJhbWVTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsImRlY2xhcmF0aW9uTm9kZXMiLCJkZWNsYXJhdGlvbnNWZXJpZmllZCIsImV2ZXJ5IiwiZGVjbGFyYXRpb25Ob2RlIiwiZGVjbGFyYXRpb25WZXJpZmllZCIsInZlcmlmeURlY2xhcmF0aW9uIiwiZGVidWciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBd0JBOzs7a0VBTk07cUJBRUg7Ozs7OztBQUUzQixJQUFNQyx3QkFBd0JDLElBQUFBLGlCQUFVLEVBQUM7QUFFMUIsU0FBU0YsWUFBWUcsU0FBUyxFQUFFQyxPQUFPLEVBQUVDLGdCQUFnQjtJQUN0RSxJQUFJQztJQUVKLElBQU1DLGNBQWNGLGlCQUFpQkcsWUFBWSxDQUFDTDtJQUVsREUsaUJBQWlCSSxLQUFLLENBQUMsQUFBQyxrQkFBNkIsT0FBWkYsYUFBWSxlQUFhSjtJQUVsRSxJQUFNTyxtQkFBbUJULHNCQUFzQkUsWUFDekNRLHVCQUF1QkQsaUJBQWlCRSxLQUFLLENBQUMsU0FBQ0M7UUFDN0MsSUFBTUMsc0JBQXNCQyxJQUFBQSxvQkFBaUIsRUFBQ0YsaUJBQWlCVCxTQUFTQztRQUV4RSxPQUFPUztJQUNUO0lBRU5SLGdCQUFnQkssc0JBQXNCLEdBQUc7SUFFekMsSUFBSUwsZUFBZTtRQUNqQkQsaUJBQWlCVyxLQUFLLENBQUMsQUFBQyxvQkFBK0IsT0FBWlQsYUFBWSxhQUFXSjtJQUNwRTtJQUVBLE9BQU9HO0FBQ1QifQ==