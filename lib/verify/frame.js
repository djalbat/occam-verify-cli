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
function verifyFrame(frameNode, frames, assignments, derived, localMetaContext) {
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
            var frameAssertion = localMetaContext.findFrameAssertionByMetavariableNode(metavariableNode);
            if (frameAssertion !== null) {
                var frameAssertionDeclarations = frameAssertion.getDeclarations();
                (0, _array.push)(declarations, frameAssertionDeclarations);
                metavariableVerified = true;
            } else {
                localMetaContext.debug("There is no frame assertion for the '".concat(metavariableString, "' metavariable."), metavariableNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZnJhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBGcmFtZSBmcm9tIFwiLi4vZnJhbWVcIjtcbmltcG9ydCBmcmFtZU1ldGFUeXBlIGZyb20gXCIuLi9tZXRhVHlwZS9mcmFtZVwiO1xuaW1wb3J0IHZlcmlmeURlY2xhcmF0aW9uIGZyb20gXCIuLi92ZXJpZnkvZGVjbGFyYXRpb25cIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGRlY2xhcmF0aW9uTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvZnJhbWUvZGVjbGFyYXRpb25cIiksXG4gICAgICBtZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9mcmFtZS9tZXRhdmFyaWFibGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeUZyYW1lKGZyYW1lTm9kZSwgZnJhbWVzLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxNZXRhQ29udGV4dCkge1xuICBsZXQgZnJhbWVWZXJpZmllZDtcblxuICBjb25zdCBmcmFtZVN0cmluZyA9IGxvY2FsTWV0YUNvbnRleHQubm9kZUFzU3RyaW5nKGZyYW1lTm9kZSk7XG5cbiAgbG9jYWxNZXRhQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCwgZnJhbWVOb2RlKTtcblxuICBjb25zdCBkZWNsYXJhdGlvbnMgPSBbXSxcbiAgICAgICAgZGVjbGFyYXRpb25Ob2RlcyA9IGRlY2xhcmF0aW9uTm9kZXNRdWVyeShmcmFtZU5vZGUpLFxuICAgICAgICBkZWNsYXJhdGlvbnNWZXJpZmllZCA9IGRlY2xhcmF0aW9uTm9kZXMuZXZlcnkoKGRlY2xhcmF0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRlY2xhcmF0aW9uVmVyaWZpZWQgPSB2ZXJpZnlEZWNsYXJhdGlvbihkZWNsYXJhdGlvbk5vZGUsIGRlY2xhcmF0aW9ucywgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gZGVjbGFyYXRpb25WZXJpZmllZDtcbiAgICAgICAgfSk7XG5cbiAgaWYgKGRlY2xhcmF0aW9uc1ZlcmlmaWVkKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZXMgPSBtZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5KGZyYW1lTm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlc1ZlcmlmaWVkID0gbWV0YXZhcmlhYmxlTm9kZXMuZXZlcnkoKG1ldGF2YXJpYWJsZU5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gdmVyaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZU5vZGUsIGRlY2xhcmF0aW9ucywgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBtZXRhdmFyaWFibGVWZXJpZmllZDtcbiAgICAgICAgICB9KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVzVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGZyYW1lID0gRnJhbWUuZnJvbURlY2xhcmF0aW9ucyhkZWNsYXJhdGlvbnMpO1xuXG4gICAgICBmcmFtZXMucHVzaChmcmFtZSk7XG5cbiAgICAgIGZyYW1lVmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChmcmFtZVZlcmlmaWVkKSB7XG4gICAgbG9jYWxNZXRhQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCwgZnJhbWVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgZGVjbGFyYXRpb25zLCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gIGxldCBtZXRhdmFyaWFibGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IGxvY2FsTWV0YUNvbnRleHQubm9kZUFzU3RyaW5nKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gIGxvY2FsTWV0YUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlID0gbG9jYWxNZXRhQ29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBtZXRhVHlwZSA9IG1ldGF2YXJpYWJsZS5nZXRNZXRhVHlwZSgpO1xuXG4gICAgaWYgKG1ldGFUeXBlID09PSBmcmFtZU1ldGFUeXBlKSB7XG4gICAgICBjb25zdCBmcmFtZUFzc2VydGlvbiA9IGxvY2FsTWV0YUNvbnRleHQuZmluZEZyYW1lQXNzZXJ0aW9uQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAoZnJhbWVBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZnJhbWVBc3NlcnRpb25EZWNsYXJhdGlvbnMgPSBmcmFtZUFzc2VydGlvbi5nZXREZWNsYXJhdGlvbnMoKTtcblxuICAgICAgICBwdXNoKGRlY2xhcmF0aW9ucywgZnJhbWVBc3NlcnRpb25EZWNsYXJhdGlvbnMpO1xuXG4gICAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2FsTWV0YUNvbnRleHQuZGVidWcoYFRoZXJlIGlzIG5vIGZyYW1lIGFzc2VydGlvbiBmb3IgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gLCBtZXRhdmFyaWFibGVOb2RlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZnJhbWVNZXRhVHlwZU5hbWUgPSBmcmFtZU1ldGFUeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuYXNTdHJpbmcoKTtcblxuICAgICAgbG9jYWxNZXRhQ29udGV4dC5kZWJ1ZyhgVGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSdzIG1ldGEtdHlwZSBpcyAnJHttZXRhVHlwZVN0cmluZ30nIHdoZW4gaXQgc2hvdWxkIGJlICcke2ZyYW1lTWV0YVR5cGVOYW1lfScuYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxvY2FsTWV0YUNvbnRleHQuZGVidWcoYFRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgaXMgbm90IHByZXNlbnQnLmAsIG1ldGF2YXJpYWJsZU5vZGUpO1xuICB9XG5cbiAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgbG9jYWxNZXRhQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gLCBtZXRhdmFyaWFibGVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGVWZXJpZmllZDtcbn0iXSwibmFtZXMiOlsidmVyaWZ5RnJhbWUiLCJkZWNsYXJhdGlvbk5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZXNRdWVyeSIsImZyYW1lTm9kZSIsImZyYW1lcyIsImFzc2lnbm1lbnRzIiwiZGVyaXZlZCIsImxvY2FsTWV0YUNvbnRleHQiLCJmcmFtZVZlcmlmaWVkIiwiZnJhbWVTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsImRlY2xhcmF0aW9ucyIsImRlY2xhcmF0aW9uTm9kZXMiLCJkZWNsYXJhdGlvbnNWZXJpZmllZCIsImV2ZXJ5IiwiZGVjbGFyYXRpb25Ob2RlIiwiZGVjbGFyYXRpb25WZXJpZmllZCIsInZlcmlmeURlY2xhcmF0aW9uIiwibWV0YXZhcmlhYmxlTm9kZXMiLCJtZXRhdmFyaWFibGVzVmVyaWZpZWQiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlVmVyaWZpZWQiLCJ2ZXJpZnlNZXRhdmFyaWFibGUiLCJmcmFtZSIsIkZyYW1lIiwiZnJvbURlY2xhcmF0aW9ucyIsInB1c2giLCJkZWJ1ZyIsIm1ldGF2YXJpYWJsZVN0cmluZyIsIm1ldGF2YXJpYWJsZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhVHlwZSIsImdldE1ldGFUeXBlIiwiZnJhbWVNZXRhVHlwZSIsImZyYW1lQXNzZXJ0aW9uIiwiZmluZEZyYW1lQXNzZXJ0aW9uQnlNZXRhdmFyaWFibGVOb2RlIiwiZnJhbWVBc3NlcnRpb25EZWNsYXJhdGlvbnMiLCJnZXREZWNsYXJhdGlvbnMiLCJmcmFtZU1ldGFUeXBlTmFtZSIsImdldE5hbWUiLCJtZXRhVHlwZVN0cmluZyIsImFzU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQXdCQTs7OzREQVZOOzZEQUNRO2tFQUNJO3FCQUVUO3FCQUNNOzs7Ozs7QUFFM0IsSUFBTUMsd0JBQXdCQyxJQUFBQSxpQkFBVSxFQUFDLHVCQUNuQ0MseUJBQXlCRCxJQUFBQSxpQkFBVSxFQUFDO0FBRTNCLFNBQVNGLFlBQVlJLFNBQVMsRUFBRUMsTUFBTSxFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsZ0JBQWdCO0lBQzNGLElBQUlDO0lBRUosSUFBTUMsY0FBY0YsaUJBQWlCRyxZQUFZLENBQUNQO0lBRWxESSxpQkFBaUJJLEtBQUssQ0FBQyxBQUFDLGtCQUE2QixPQUFaRixhQUFZLGVBQWFOO0lBRWxFLElBQU1TLGVBQWUsRUFBRSxFQUNqQkMsbUJBQW1CYixzQkFBc0JHLFlBQ3pDVyx1QkFBdUJELGlCQUFpQkUsS0FBSyxDQUFDLFNBQUNDO1FBQzdDLElBQU1DLHNCQUFzQkMsSUFBQUEsb0JBQWlCLEVBQUNGLGlCQUFpQkosY0FBY0w7UUFFN0UsT0FBT1U7SUFDVDtJQUVOLElBQUlILHNCQUFzQjtRQUN4QixJQUFNSyxvQkFBb0JqQix1QkFBdUJDLFlBQzNDaUIsd0JBQXdCRCxrQkFBa0JKLEtBQUssQ0FBQyxTQUFDTTtZQUMvQyxJQUFNQyx1QkFBdUJDLG1CQUFtQkYsa0JBQWtCVCxjQUFjTDtZQUVoRixPQUFPZTtRQUNUO1FBRU4sSUFBSUYsdUJBQXVCO1lBQ3pCLElBQU1JLFFBQVFDLGNBQUssQ0FBQ0MsZ0JBQWdCLENBQUNkO1lBRXJDUixPQUFPdUIsSUFBSSxDQUFDSDtZQUVaaEIsZ0JBQWdCO1FBQ2xCO0lBQ0Y7SUFFQSxJQUFJQSxlQUFlO1FBQ2pCRCxpQkFBaUJxQixLQUFLLENBQUMsQUFBQyxvQkFBK0IsT0FBWm5CLGFBQVksYUFBV047SUFDcEU7SUFFQSxPQUFPSztBQUNUO0FBRUEsU0FBU2UsbUJBQW1CRixnQkFBZ0IsRUFBRVQsWUFBWSxFQUFFTCxnQkFBZ0I7SUFDMUUsSUFBSWUsdUJBQXVCO0lBRTNCLElBQU1PLHFCQUFxQnRCLGlCQUFpQkcsWUFBWSxDQUFDVztJQUV6RGQsaUJBQWlCSSxLQUFLLENBQUMsQUFBQyxrQkFBb0MsT0FBbkJrQixvQkFBbUIsc0JBQW9CUjtJQUVoRixJQUFNUyxlQUFldkIsaUJBQWlCd0Isa0NBQWtDLENBQUNWLGtCQUFrQmQ7SUFFM0YsSUFBSXVCLGlCQUFpQixNQUFNO1FBQ3pCLElBQU1FLFdBQVdGLGFBQWFHLFdBQVc7UUFFekMsSUFBSUQsYUFBYUUsZUFBYSxFQUFFO1lBQzlCLElBQU1DLGlCQUFpQjVCLGlCQUFpQjZCLG9DQUFvQyxDQUFDZjtZQUU3RSxJQUFJYyxtQkFBbUIsTUFBTTtnQkFDM0IsSUFBTUUsNkJBQTZCRixlQUFlRyxlQUFlO2dCQUVqRVgsSUFBQUEsV0FBSSxFQUFDZixjQUFjeUI7Z0JBRW5CZix1QkFBdUI7WUFDekIsT0FBTztnQkFDTGYsaUJBQWlCcUIsS0FBSyxDQUFDLEFBQUMsd0NBQTBELE9BQW5CQyxvQkFBbUIsb0JBQWtCUjtZQUN0RztRQUNGLE9BQU87WUFDTCxJQUFNa0Isb0JBQW9CTCxlQUFhLENBQUNNLE9BQU8sSUFDekNDLGlCQUFpQlQsU0FBU1UsUUFBUTtZQUV4Q25DLGlCQUFpQnFCLEtBQUssQ0FBQyxBQUFDLFFBQTJEYSxPQUFwRFosb0JBQW1CLG1DQUF1RVUsT0FBdENFLGdCQUFlLHlCQUF5QyxPQUFsQkYsbUJBQWtCLE9BQUtsQjtRQUNsSjtJQUNGLE9BQU87UUFDTGQsaUJBQWlCcUIsS0FBSyxDQUFDLEFBQUMsUUFBMEIsT0FBbkJDLG9CQUFtQixvQ0FBa0NSO0lBQ3RGO0lBRUEsSUFBSUMsc0JBQXNCO1FBQ3hCZixpQkFBaUJxQixLQUFLLENBQUMsQUFBQyxvQkFBc0MsT0FBbkJDLG9CQUFtQixvQkFBa0JSO0lBQ2xGO0lBRUEsT0FBT0M7QUFDVCJ9