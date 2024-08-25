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
function verifyFrame(frameNode, frames, derived, localMetaContext) {
    var frameVerified;
    var frameString = localMetaContext.nodeAsString(frameNode);
    localMetaContext.trace("Verifying the '".concat(frameString, "' frame..."), frameNode);
    var declarations = [], declarationNodes = declarationNodesQuery(frameNode), declarationsVerified = declarationNodes.every(function(declarationNode) {
        var declarationVerified = (0, _declaration.default)(declarationNode, declarations, localMetaContext);
        return declarationVerified;
    });
    if (declarationsVerified) {
        var metavariableNodes = metavariableNodesQuery(frameNode), metavariablesVerified = metavariableNodes.every(function(metavariableNode) {
            var metavariableVerified = verifyMetavariable(metavariableNode, declarations, localMetaContext);
            return metavariableVerified;
        });
        if (metavariablesVerified) {
            var frame = _frame.default.fromDeclarations(declarations);
            frames.push(frame);
            frameVerified = true;
        }
    }
    if (frameVerified) {
        localMetaContext.debug("...verified the '".concat(frameString, "' frame."), frameNode);
    }
    return frameVerified;
}
function verifyMetavariable(metavariableNode, declarations, localMetaContext) {
    var metavariableVerified = false;
    var metavariableString = localMetaContext.nodeAsString(metavariableNode);
    localMetaContext.trace("Verifying the '".concat(metavariableString, "' metavariable..."), metavariableNode);
    var metavariable = localMetaContext.findMetavariableByMetavariableNode(metavariableNode, localMetaContext);
    if (metavariable !== null) {
        var metaType = metavariable.getMetaType();
        if (metaType === _frame1.default) {
            var judgement = localMetaContext.findJudgementByMetavariableNode(metavariableNode);
            if (judgement !== null) {
                var judgementDeclarations = judgement.getDeclarations();
                (0, _array.push)(declarations, judgementDeclarations);
                metavariableVerified = true;
            } else {
                localMetaContext.debug("There is no judgement for the '".concat(metavariableString, "' metavariable."), metavariableNode);
            }
        } else {
            var frameMetaTypeName = _frame1.default.getName(), metaTypeString = metaType.asString();
            localMetaContext.debug("The '".concat(metavariableString, "' metavariable's meta-type is '").concat(metaTypeString, "' when it should be '").concat(frameMetaTypeName, "'."), metavariableNode);
        }
    } else {
        localMetaContext.debug("The '".concat(metavariableString, "' metavariable is not present'."), metavariableNode);
    }
    if (metavariableVerified) {
        localMetaContext.debug("...verified the '".concat(metavariableString, "' metavariable."), metavariableNode);
    }
    return metavariableVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZnJhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBGcmFtZSBmcm9tIFwiLi4vZnJhbWVcIjtcbmltcG9ydCBmcmFtZU1ldGFUeXBlIGZyb20gXCIuLi9tZXRhVHlwZS9mcmFtZVwiO1xuaW1wb3J0IHZlcmlmeURlY2xhcmF0aW9uIGZyb20gXCIuLi92ZXJpZnkvZGVjbGFyYXRpb25cIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGRlY2xhcmF0aW9uTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvZnJhbWUvZGVjbGFyYXRpb25cIiksXG4gICAgICBtZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9mcmFtZS9tZXRhdmFyaWFibGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeUZyYW1lKGZyYW1lTm9kZSwgZnJhbWVzLCBkZXJpdmVkLCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gIGxldCBmcmFtZVZlcmlmaWVkO1xuXG4gIGNvbnN0IGZyYW1lU3RyaW5nID0gbG9jYWxNZXRhQ29udGV4dC5ub2RlQXNTdHJpbmcoZnJhbWVOb2RlKTtcblxuICBsb2NhbE1ldGFDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gLCBmcmFtZU5vZGUpO1xuXG4gIGNvbnN0IGRlY2xhcmF0aW9ucyA9IFtdLFxuICAgICAgICBkZWNsYXJhdGlvbk5vZGVzID0gZGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5KGZyYW1lTm9kZSksXG4gICAgICAgIGRlY2xhcmF0aW9uc1ZlcmlmaWVkID0gZGVjbGFyYXRpb25Ob2Rlcy5ldmVyeSgoZGVjbGFyYXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGVjbGFyYXRpb25WZXJpZmllZCA9IHZlcmlmeURlY2xhcmF0aW9uKGRlY2xhcmF0aW9uTm9kZSwgZGVjbGFyYXRpb25zLCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBkZWNsYXJhdGlvblZlcmlmaWVkO1xuICAgICAgICB9KTtcblxuICBpZiAoZGVjbGFyYXRpb25zVmVyaWZpZWQpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlcyA9IG1ldGF2YXJpYWJsZU5vZGVzUXVlcnkoZnJhbWVOb2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzVmVyaWZpZWQgPSBtZXRhdmFyaWFibGVOb2Rlcy5ldmVyeSgobWV0YXZhcmlhYmxlTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgZGVjbGFyYXRpb25zLCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVkO1xuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZXNWZXJpZmllZCkge1xuICAgICAgY29uc3QgZnJhbWUgPSBGcmFtZS5mcm9tRGVjbGFyYXRpb25zKGRlY2xhcmF0aW9ucyk7XG5cbiAgICAgIGZyYW1lcy5wdXNoKGZyYW1lKTtcblxuICAgICAgZnJhbWVWZXJpZmllZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKGZyYW1lVmVyaWZpZWQpIHtcbiAgICBsb2NhbE1ldGFDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gLCBmcmFtZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGZyYW1lVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGVOb2RlLCBkZWNsYXJhdGlvbnMsIGxvY2FsTWV0YUNvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gbG9jYWxNZXRhQ29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgbG9jYWxNZXRhQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gLCBtZXRhdmFyaWFibGVOb2RlKTtcblxuICBjb25zdCBtZXRhdmFyaWFibGUgPSBsb2NhbE1ldGFDb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG1ldGFUeXBlID0gbWV0YXZhcmlhYmxlLmdldE1ldGFUeXBlKCk7XG5cbiAgICBpZiAobWV0YVR5cGUgPT09IGZyYW1lTWV0YVR5cGUpIHtcbiAgICAgIGNvbnN0IGp1ZGdlbWVudCA9IGxvY2FsTWV0YUNvbnRleHQuZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKGp1ZGdlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBqdWRnZW1lbnREZWNsYXJhdGlvbnMgPSBqdWRnZW1lbnQuZ2V0RGVjbGFyYXRpb25zKCk7XG5cbiAgICAgICAgcHVzaChkZWNsYXJhdGlvbnMsIGp1ZGdlbWVudERlY2xhcmF0aW9ucyk7XG5cbiAgICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYWxNZXRhQ29udGV4dC5kZWJ1ZyhgVGhlcmUgaXMgbm8ganVkZ2VtZW50IGZvciB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmAsIG1ldGF2YXJpYWJsZU5vZGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmcmFtZU1ldGFUeXBlTmFtZSA9IGZyYW1lTWV0YVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgbWV0YVR5cGVTdHJpbmcgPSBtZXRhVHlwZS5hc1N0cmluZygpO1xuXG4gICAgICBsb2NhbE1ldGFDb250ZXh0LmRlYnVnKGBUaGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgbWV0YS10eXBlIGlzICcke21ldGFUeXBlU3RyaW5nfScgd2hlbiBpdCBzaG91bGQgYmUgJyR7ZnJhbWVNZXRhVHlwZU5hbWV9Jy5gLCBtZXRhdmFyaWFibGVOb2RlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbG9jYWxNZXRhQ29udGV4dC5kZWJ1ZyhgVGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBpcyBub3QgcHJlc2VudCcuYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG4gIH1cblxuICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICBsb2NhbE1ldGFDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmAsIG1ldGF2YXJpYWJsZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVkO1xufSJdLCJuYW1lcyI6WyJ2ZXJpZnlGcmFtZSIsImRlY2xhcmF0aW9uTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJtZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5IiwiZnJhbWVOb2RlIiwiZnJhbWVzIiwiZGVyaXZlZCIsImxvY2FsTWV0YUNvbnRleHQiLCJmcmFtZVZlcmlmaWVkIiwiZnJhbWVTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsImRlY2xhcmF0aW9ucyIsImRlY2xhcmF0aW9uTm9kZXMiLCJkZWNsYXJhdGlvbnNWZXJpZmllZCIsImV2ZXJ5IiwiZGVjbGFyYXRpb25Ob2RlIiwiZGVjbGFyYXRpb25WZXJpZmllZCIsInZlcmlmeURlY2xhcmF0aW9uIiwibWV0YXZhcmlhYmxlTm9kZXMiLCJtZXRhdmFyaWFibGVzVmVyaWZpZWQiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlVmVyaWZpZWQiLCJ2ZXJpZnlNZXRhdmFyaWFibGUiLCJmcmFtZSIsIkZyYW1lIiwiZnJvbURlY2xhcmF0aW9ucyIsInB1c2giLCJkZWJ1ZyIsIm1ldGF2YXJpYWJsZVN0cmluZyIsIm1ldGF2YXJpYWJsZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhVHlwZSIsImdldE1ldGFUeXBlIiwiZnJhbWVNZXRhVHlwZSIsImp1ZGdlbWVudCIsImZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJqdWRnZW1lbnREZWNsYXJhdGlvbnMiLCJnZXREZWNsYXJhdGlvbnMiLCJmcmFtZU1ldGFUeXBlTmFtZSIsImdldE5hbWUiLCJtZXRhVHlwZVN0cmluZyIsImFzU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQXdCQTs7OzREQVZOOzZEQUNRO2tFQUNJO3FCQUVUO3FCQUNNOzs7Ozs7QUFFM0IsSUFBTUMsd0JBQXdCQyxJQUFBQSxpQkFBVSxFQUFDLHVCQUNuQ0MseUJBQXlCRCxJQUFBQSxpQkFBVSxFQUFDO0FBRTNCLFNBQVNGLFlBQVlJLFNBQVMsRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLGdCQUFnQjtJQUM5RSxJQUFJQztJQUVKLElBQU1DLGNBQWNGLGlCQUFpQkcsWUFBWSxDQUFDTjtJQUVsREcsaUJBQWlCSSxLQUFLLENBQUMsQUFBQyxrQkFBNkIsT0FBWkYsYUFBWSxlQUFhTDtJQUVsRSxJQUFNUSxlQUFlLEVBQUUsRUFDakJDLG1CQUFtQlosc0JBQXNCRyxZQUN6Q1UsdUJBQXVCRCxpQkFBaUJFLEtBQUssQ0FBQyxTQUFDQztRQUM3QyxJQUFNQyxzQkFBc0JDLElBQUFBLG9CQUFpQixFQUFDRixpQkFBaUJKLGNBQWNMO1FBRTdFLE9BQU9VO0lBQ1Q7SUFFTixJQUFJSCxzQkFBc0I7UUFDeEIsSUFBTUssb0JBQW9CaEIsdUJBQXVCQyxZQUMzQ2dCLHdCQUF3QkQsa0JBQWtCSixLQUFLLENBQUMsU0FBQ007WUFDL0MsSUFBTUMsdUJBQXVCQyxtQkFBbUJGLGtCQUFrQlQsY0FBY0w7WUFFaEYsT0FBT2U7UUFDVDtRQUVOLElBQUlGLHVCQUF1QjtZQUN6QixJQUFNSSxRQUFRQyxjQUFLLENBQUNDLGdCQUFnQixDQUFDZDtZQUVyQ1AsT0FBT3NCLElBQUksQ0FBQ0g7WUFFWmhCLGdCQUFnQjtRQUNsQjtJQUNGO0lBRUEsSUFBSUEsZUFBZTtRQUNqQkQsaUJBQWlCcUIsS0FBSyxDQUFDLEFBQUMsb0JBQStCLE9BQVpuQixhQUFZLGFBQVdMO0lBQ3BFO0lBRUEsT0FBT0k7QUFDVDtBQUVBLFNBQVNlLG1CQUFtQkYsZ0JBQWdCLEVBQUVULFlBQVksRUFBRUwsZ0JBQWdCO0lBQzFFLElBQUllLHVCQUF1QjtJQUUzQixJQUFNTyxxQkFBcUJ0QixpQkFBaUJHLFlBQVksQ0FBQ1c7SUFFekRkLGlCQUFpQkksS0FBSyxDQUFDLEFBQUMsa0JBQW9DLE9BQW5Ca0Isb0JBQW1CLHNCQUFvQlI7SUFFaEYsSUFBTVMsZUFBZXZCLGlCQUFpQndCLGtDQUFrQyxDQUFDVixrQkFBa0JkO0lBRTNGLElBQUl1QixpQkFBaUIsTUFBTTtRQUN6QixJQUFNRSxXQUFXRixhQUFhRyxXQUFXO1FBRXpDLElBQUlELGFBQWFFLGVBQWEsRUFBRTtZQUM5QixJQUFNQyxZQUFZNUIsaUJBQWlCNkIsK0JBQStCLENBQUNmO1lBRW5FLElBQUljLGNBQWMsTUFBTTtnQkFDdEIsSUFBTUUsd0JBQXdCRixVQUFVRyxlQUFlO2dCQUV2RFgsSUFBQUEsV0FBSSxFQUFDZixjQUFjeUI7Z0JBRW5CZix1QkFBdUI7WUFDekIsT0FBTztnQkFDTGYsaUJBQWlCcUIsS0FBSyxDQUFDLEFBQUMsa0NBQW9ELE9BQW5CQyxvQkFBbUIsb0JBQWtCUjtZQUNoRztRQUNGLE9BQU87WUFDTCxJQUFNa0Isb0JBQW9CTCxlQUFhLENBQUNNLE9BQU8sSUFDekNDLGlCQUFpQlQsU0FBU1UsUUFBUTtZQUV4Q25DLGlCQUFpQnFCLEtBQUssQ0FBQyxBQUFDLFFBQTJEYSxPQUFwRFosb0JBQW1CLG1DQUF1RVUsT0FBdENFLGdCQUFlLHlCQUF5QyxPQUFsQkYsbUJBQWtCLE9BQUtsQjtRQUNsSjtJQUNGLE9BQU87UUFDTGQsaUJBQWlCcUIsS0FBSyxDQUFDLEFBQUMsUUFBMEIsT0FBbkJDLG9CQUFtQixvQ0FBa0NSO0lBQ3RGO0lBRUEsSUFBSUMsc0JBQXNCO1FBQ3hCZixpQkFBaUJxQixLQUFLLENBQUMsQUFBQyxvQkFBc0MsT0FBbkJDLG9CQUFtQixvQkFBa0JSO0lBQ2xGO0lBRUEsT0FBT0M7QUFDVCJ9