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
var _frame = /*#__PURE__*/ _interop_require_default(require("../frame"));
var _frame1 = /*#__PURE__*/ _interop_require_default(require("../metaType/frame"));
var _declaration = /*#__PURE__*/ _interop_require_default(require("../verify/declaration"));
var _array = require("../utilities/array");
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var declarationNodesQuery = (0, _query.nodesQuery)("/frame/declaration"), metavariableNodesQuery = (0, _query.nodesQuery)("/frame/metavariable");
function verifyFrame(frameNode, frames, assignments, derived, localContext) {
    var frameVerified;
    var frameString = localContext.nodeAsString(frameNode);
    localContext.trace("Verifying the '".concat(frameString, "' frame..."), frameNode);
    var declarations = [], declarationNodes = declarationNodesQuery(frameNode), declarationsVerified = declarationNodes.every(function(declarationNode) {
        var declarationVerified = (0, _declaration.default)(declarationNode, declarations, localContext);
        return declarationVerified;
    });
    if (declarationsVerified) {
        var metavariableNodes = metavariableNodesQuery(frameNode), metavariablesVerified = metavariableNodes.every(function(metavariableNode) {
            var metavariableVerified = verifyMetavariable(metavariableNode, declarations, localContext);
            return metavariableVerified;
        });
        if (metavariablesVerified) {
            var frame = _frame.default.fromDeclarations(declarations);
            frames.push(frame);
            frameVerified = true;
        }
    }
    if (frameVerified) {
        localContext.debug("...verified the '".concat(frameString, "' frame."), frameNode);
    }
    return frameVerified;
}
function verifyMetavariable(metavariableNode, declarations, localContext) {
    var metavariableVerified = false;
    var metavariableString = localContext.nodeAsString(metavariableNode);
    localContext.trace("Verifying the '".concat(metavariableString, "' metavariable..."), metavariableNode);
    var metavariable = localContext.findMetavariableByMetavariableNode(metavariableNode);
    if (metavariable !== null) {
        var metaType = metavariable.getMetaType();
        if (metaType === _frame1.default) {
            var judgement = localContext.findJudgementByMetavariableNode(metavariableNode);
            if (judgement !== null) {
                var judgementDeclarations = judgement.getDeclarations();
                (0, _array.push)(declarations, judgementDeclarations);
                metavariableVerified = true;
            } else {
                localContext.debug("There is no judgement for the '".concat(metavariableString, "' metavariable."), metavariableNode);
            }
        } else {
            var frameMetaTypeName = _frame1.default.getName(), metaTypeString = metaType.asString();
            localContext.debug("The '".concat(metavariableString, "' metavariable's meta-type is '").concat(metaTypeString, "' when it should be '").concat(frameMetaTypeName, "'."), metavariableNode);
        }
    } else {
        localContext.debug("The '".concat(metavariableString, "' metavariable is not present'."), metavariableNode);
    }
    if (metavariableVerified) {
        localContext.debug("...verified the '".concat(metavariableString, "' metavariable."), metavariableNode);
    }
    return metavariableVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZnJhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBGcmFtZSBmcm9tIFwiLi4vZnJhbWVcIjtcbmltcG9ydCBmcmFtZU1ldGFUeXBlIGZyb20gXCIuLi9tZXRhVHlwZS9mcmFtZVwiO1xuaW1wb3J0IHZlcmlmeURlY2xhcmF0aW9uIGZyb20gXCIuLi92ZXJpZnkvZGVjbGFyYXRpb25cIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGRlY2xhcmF0aW9uTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvZnJhbWUvZGVjbGFyYXRpb25cIiksXG4gICAgICBtZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9mcmFtZS9tZXRhdmFyaWFibGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeUZyYW1lKGZyYW1lTm9kZSwgZnJhbWVzLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBmcmFtZVZlcmlmaWVkO1xuXG4gIGNvbnN0IGZyYW1lU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhmcmFtZU5vZGUpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCwgZnJhbWVOb2RlKTtcblxuICBjb25zdCBkZWNsYXJhdGlvbnMgPSBbXSxcbiAgICAgICAgZGVjbGFyYXRpb25Ob2RlcyA9IGRlY2xhcmF0aW9uTm9kZXNRdWVyeShmcmFtZU5vZGUpLFxuICAgICAgICBkZWNsYXJhdGlvbnNWZXJpZmllZCA9IGRlY2xhcmF0aW9uTm9kZXMuZXZlcnkoKGRlY2xhcmF0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRlY2xhcmF0aW9uVmVyaWZpZWQgPSB2ZXJpZnlEZWNsYXJhdGlvbihkZWNsYXJhdGlvbk5vZGUsIGRlY2xhcmF0aW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBkZWNsYXJhdGlvblZlcmlmaWVkO1xuICAgICAgICB9KTtcblxuICBpZiAoZGVjbGFyYXRpb25zVmVyaWZpZWQpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlcyA9IG1ldGF2YXJpYWJsZU5vZGVzUXVlcnkoZnJhbWVOb2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzVmVyaWZpZWQgPSBtZXRhdmFyaWFibGVOb2Rlcy5ldmVyeSgobWV0YXZhcmlhYmxlTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgZGVjbGFyYXRpb25zLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gbWV0YXZhcmlhYmxlVmVyaWZpZWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlc1ZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBmcmFtZSA9IEZyYW1lLmZyb21EZWNsYXJhdGlvbnMoZGVjbGFyYXRpb25zKTtcblxuICAgICAgZnJhbWVzLnB1c2goZnJhbWUpO1xuXG4gICAgICBmcmFtZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoZnJhbWVWZXJpZmllZCkge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCwgZnJhbWVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgZGVjbGFyYXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG1ldGFUeXBlID0gbWV0YXZhcmlhYmxlLmdldE1ldGFUeXBlKCk7XG5cbiAgICBpZiAobWV0YVR5cGUgPT09IGZyYW1lTWV0YVR5cGUpIHtcbiAgICAgIGNvbnN0IGp1ZGdlbWVudCA9IGxvY2FsQ29udGV4dC5maW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAoanVkZ2VtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGp1ZGdlbWVudERlY2xhcmF0aW9ucyA9IGp1ZGdlbWVudC5nZXREZWNsYXJhdGlvbnMoKTtcblxuICAgICAgICBwdXNoKGRlY2xhcmF0aW9ucywganVkZ2VtZW50RGVjbGFyYXRpb25zKTtcblxuICAgICAgICBtZXRhdmFyaWFibGVWZXJpZmllZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZXJlIGlzIG5vIGp1ZGdlbWVudCBmb3IgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gLCBtZXRhdmFyaWFibGVOb2RlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZnJhbWVNZXRhVHlwZU5hbWUgPSBmcmFtZU1ldGFUeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuYXNTdHJpbmcoKTtcblxuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGBUaGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgbWV0YS10eXBlIGlzICcke21ldGFUeXBlU3RyaW5nfScgd2hlbiBpdCBzaG91bGQgYmUgJyR7ZnJhbWVNZXRhVHlwZU5hbWV9Jy5gLCBtZXRhdmFyaWFibGVOb2RlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGBUaGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGlzIG5vdCBwcmVzZW50Jy5gLCBtZXRhdmFyaWFibGVOb2RlKTtcbiAgfVxuXG4gIGlmIChtZXRhdmFyaWFibGVWZXJpZmllZCkge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gLCBtZXRhdmFyaWFibGVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGVWZXJpZmllZDtcbn0iXSwibmFtZXMiOlsidmVyaWZ5RnJhbWUiLCJkZWNsYXJhdGlvbk5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZXNRdWVyeSIsImZyYW1lTm9kZSIsImZyYW1lcyIsImFzc2lnbm1lbnRzIiwiZGVyaXZlZCIsImxvY2FsQ29udGV4dCIsImZyYW1lVmVyaWZpZWQiLCJmcmFtZVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwiZGVjbGFyYXRpb25zIiwiZGVjbGFyYXRpb25Ob2RlcyIsImRlY2xhcmF0aW9uc1ZlcmlmaWVkIiwiZXZlcnkiLCJkZWNsYXJhdGlvbk5vZGUiLCJkZWNsYXJhdGlvblZlcmlmaWVkIiwidmVyaWZ5RGVjbGFyYXRpb24iLCJtZXRhdmFyaWFibGVOb2RlcyIsIm1ldGF2YXJpYWJsZXNWZXJpZmllZCIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVWZXJpZmllZCIsInZlcmlmeU1ldGF2YXJpYWJsZSIsImZyYW1lIiwiRnJhbWUiLCJmcm9tRGVjbGFyYXRpb25zIiwicHVzaCIsImRlYnVnIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwibWV0YXZhcmlhYmxlIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGFUeXBlIiwiZ2V0TWV0YVR5cGUiLCJmcmFtZU1ldGFUeXBlIiwianVkZ2VtZW50IiwiZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTm9kZSIsImp1ZGdlbWVudERlY2xhcmF0aW9ucyIsImdldERlY2xhcmF0aW9ucyIsImZyYW1lTWV0YVR5cGVOYW1lIiwiZ2V0TmFtZSIsIm1ldGFUeXBlU3RyaW5nIiwiYXNTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBd0JBOzs7NERBVk47NkRBQ1E7a0VBQ0k7cUJBRVQ7cUJBQ007Ozs7OztBQUUzQixJQUFNQyx3QkFBd0JDLElBQUFBLGlCQUFVLEVBQUMsdUJBQ25DQyx5QkFBeUJELElBQUFBLGlCQUFVLEVBQUM7QUFFM0IsU0FBU0YsWUFBWUksU0FBUyxFQUFFQyxNQUFNLEVBQUVDLFdBQVcsRUFBRUMsT0FBTyxFQUFFQyxZQUFZO0lBQ3ZGLElBQUlDO0lBRUosSUFBTUMsY0FBY0YsYUFBYUcsWUFBWSxDQUFDUDtJQUU5Q0ksYUFBYUksS0FBSyxDQUFDLEFBQUMsa0JBQTZCLE9BQVpGLGFBQVksZUFBYU47SUFFOUQsSUFBTVMsZUFBZSxFQUFFLEVBQ2pCQyxtQkFBbUJiLHNCQUFzQkcsWUFDekNXLHVCQUF1QkQsaUJBQWlCRSxLQUFLLENBQUMsU0FBQ0M7UUFDN0MsSUFBTUMsc0JBQXNCQyxJQUFBQSxvQkFBaUIsRUFBQ0YsaUJBQWlCSixjQUFjTDtRQUU3RSxPQUFPVTtJQUNUO0lBRU4sSUFBSUgsc0JBQXNCO1FBQ3hCLElBQU1LLG9CQUFvQmpCLHVCQUF1QkMsWUFDM0NpQix3QkFBd0JELGtCQUFrQkosS0FBSyxDQUFDLFNBQUNNO1lBQy9DLElBQU1DLHVCQUF1QkMsbUJBQW1CRixrQkFBa0JULGNBQWNMO1lBRWhGLE9BQU9lO1FBQ1Q7UUFFTixJQUFJRix1QkFBdUI7WUFDekIsSUFBTUksUUFBUUMsY0FBSyxDQUFDQyxnQkFBZ0IsQ0FBQ2Q7WUFFckNSLE9BQU91QixJQUFJLENBQUNIO1lBRVpoQixnQkFBZ0I7UUFDbEI7SUFDRjtJQUVBLElBQUlBLGVBQWU7UUFDakJELGFBQWFxQixLQUFLLENBQUMsQUFBQyxvQkFBK0IsT0FBWm5CLGFBQVksYUFBV047SUFDaEU7SUFFQSxPQUFPSztBQUNUO0FBRUEsU0FBU2UsbUJBQW1CRixnQkFBZ0IsRUFBRVQsWUFBWSxFQUFFTCxZQUFZO0lBQ3RFLElBQUllLHVCQUF1QjtJQUUzQixJQUFNTyxxQkFBcUJ0QixhQUFhRyxZQUFZLENBQUNXO0lBRXJEZCxhQUFhSSxLQUFLLENBQUMsQUFBQyxrQkFBb0MsT0FBbkJrQixvQkFBbUIsc0JBQW9CUjtJQUU1RSxJQUFNUyxlQUFldkIsYUFBYXdCLGtDQUFrQyxDQUFDVjtJQUVyRSxJQUFJUyxpQkFBaUIsTUFBTTtRQUN6QixJQUFNRSxXQUFXRixhQUFhRyxXQUFXO1FBRXpDLElBQUlELGFBQWFFLGVBQWEsRUFBRTtZQUM5QixJQUFNQyxZQUFZNUIsYUFBYTZCLCtCQUErQixDQUFDZjtZQUUvRCxJQUFJYyxjQUFjLE1BQU07Z0JBQ3RCLElBQU1FLHdCQUF3QkYsVUFBVUcsZUFBZTtnQkFFdkRYLElBQUFBLFdBQUksRUFBQ2YsY0FBY3lCO2dCQUVuQmYsdUJBQXVCO1lBQ3pCLE9BQU87Z0JBQ0xmLGFBQWFxQixLQUFLLENBQUMsQUFBQyxrQ0FBb0QsT0FBbkJDLG9CQUFtQixvQkFBa0JSO1lBQzVGO1FBQ0YsT0FBTztZQUNMLElBQU1rQixvQkFBb0JMLGVBQWEsQ0FBQ00sT0FBTyxJQUN6Q0MsaUJBQWlCVCxTQUFTVSxRQUFRO1lBRXhDbkMsYUFBYXFCLEtBQUssQ0FBQyxBQUFDLFFBQTJEYSxPQUFwRFosb0JBQW1CLG1DQUF1RVUsT0FBdENFLGdCQUFlLHlCQUF5QyxPQUFsQkYsbUJBQWtCLE9BQUtsQjtRQUM5STtJQUNGLE9BQU87UUFDTGQsYUFBYXFCLEtBQUssQ0FBQyxBQUFDLFFBQTBCLE9BQW5CQyxvQkFBbUIsb0NBQWtDUjtJQUNsRjtJQUVBLElBQUlDLHNCQUFzQjtRQUN4QmYsYUFBYXFCLEtBQUssQ0FBQyxBQUFDLG9CQUFzQyxPQUFuQkMsb0JBQW1CLG9CQUFrQlI7SUFDOUU7SUFFQSxPQUFPQztBQUNUIn0=