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
    var metavariable = localContext.findMetavariableByMetavariableNode(metavariableNode, localContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZnJhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBGcmFtZSBmcm9tIFwiLi4vZnJhbWVcIjtcbmltcG9ydCBmcmFtZU1ldGFUeXBlIGZyb20gXCIuLi9tZXRhVHlwZS9mcmFtZVwiO1xuaW1wb3J0IHZlcmlmeURlY2xhcmF0aW9uIGZyb20gXCIuLi92ZXJpZnkvZGVjbGFyYXRpb25cIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGRlY2xhcmF0aW9uTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvZnJhbWUvZGVjbGFyYXRpb25cIiksXG4gICAgICBtZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9mcmFtZS9tZXRhdmFyaWFibGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeUZyYW1lKGZyYW1lTm9kZSwgZnJhbWVzLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBmcmFtZVZlcmlmaWVkO1xuXG4gIGNvbnN0IGZyYW1lU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhmcmFtZU5vZGUpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCwgZnJhbWVOb2RlKTtcblxuICBjb25zdCBkZWNsYXJhdGlvbnMgPSBbXSxcbiAgICAgICAgZGVjbGFyYXRpb25Ob2RlcyA9IGRlY2xhcmF0aW9uTm9kZXNRdWVyeShmcmFtZU5vZGUpLFxuICAgICAgICBkZWNsYXJhdGlvbnNWZXJpZmllZCA9IGRlY2xhcmF0aW9uTm9kZXMuZXZlcnkoKGRlY2xhcmF0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRlY2xhcmF0aW9uVmVyaWZpZWQgPSB2ZXJpZnlEZWNsYXJhdGlvbihkZWNsYXJhdGlvbk5vZGUsIGRlY2xhcmF0aW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBkZWNsYXJhdGlvblZlcmlmaWVkO1xuICAgICAgICB9KTtcblxuICBpZiAoZGVjbGFyYXRpb25zVmVyaWZpZWQpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlcyA9IG1ldGF2YXJpYWJsZU5vZGVzUXVlcnkoZnJhbWVOb2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzVmVyaWZpZWQgPSBtZXRhdmFyaWFibGVOb2Rlcy5ldmVyeSgobWV0YXZhcmlhYmxlTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgZGVjbGFyYXRpb25zLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gbWV0YXZhcmlhYmxlVmVyaWZpZWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlc1ZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBmcmFtZSA9IEZyYW1lLmZyb21EZWNsYXJhdGlvbnMoZGVjbGFyYXRpb25zKTtcblxuICAgICAgZnJhbWVzLnB1c2goZnJhbWUpO1xuXG4gICAgICBmcmFtZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoZnJhbWVWZXJpZmllZCkge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCwgZnJhbWVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgZGVjbGFyYXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YVR5cGUgPSBtZXRhdmFyaWFibGUuZ2V0TWV0YVR5cGUoKTtcblxuICAgIGlmIChtZXRhVHlwZSA9PT0gZnJhbWVNZXRhVHlwZSkge1xuICAgICAgY29uc3QganVkZ2VtZW50ID0gbG9jYWxDb250ZXh0LmZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChqdWRnZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QganVkZ2VtZW50RGVjbGFyYXRpb25zID0ganVkZ2VtZW50LmdldERlY2xhcmF0aW9ucygpO1xuXG4gICAgICAgIHB1c2goZGVjbGFyYXRpb25zLCBqdWRnZW1lbnREZWNsYXJhdGlvbnMpO1xuXG4gICAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVGhlcmUgaXMgbm8ganVkZ2VtZW50IGZvciB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmAsIG1ldGF2YXJpYWJsZU5vZGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmcmFtZU1ldGFUeXBlTmFtZSA9IGZyYW1lTWV0YVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgbWV0YVR5cGVTdHJpbmcgPSBtZXRhVHlwZS5hc1N0cmluZygpO1xuXG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyBtZXRhLXR5cGUgaXMgJyR7bWV0YVR5cGVTdHJpbmd9JyB3aGVuIGl0IHNob3VsZCBiZSAnJHtmcmFtZU1ldGFUeXBlTmFtZX0nLmAsIG1ldGF2YXJpYWJsZU5vZGUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgaXMgbm90IHByZXNlbnQnLmAsIG1ldGF2YXJpYWJsZU5vZGUpO1xuICB9XG5cbiAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmAsIG1ldGF2YXJpYWJsZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVkO1xufSJdLCJuYW1lcyI6WyJ2ZXJpZnlGcmFtZSIsImRlY2xhcmF0aW9uTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJtZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5IiwiZnJhbWVOb2RlIiwiZnJhbWVzIiwiYXNzaWdubWVudHMiLCJkZXJpdmVkIiwibG9jYWxDb250ZXh0IiwiZnJhbWVWZXJpZmllZCIsImZyYW1lU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJkZWNsYXJhdGlvbnMiLCJkZWNsYXJhdGlvbk5vZGVzIiwiZGVjbGFyYXRpb25zVmVyaWZpZWQiLCJldmVyeSIsImRlY2xhcmF0aW9uTm9kZSIsImRlY2xhcmF0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlEZWNsYXJhdGlvbiIsIm1ldGF2YXJpYWJsZU5vZGVzIiwibWV0YXZhcmlhYmxlc1ZlcmlmaWVkIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZVZlcmlmaWVkIiwidmVyaWZ5TWV0YXZhcmlhYmxlIiwiZnJhbWUiLCJGcmFtZSIsImZyb21EZWNsYXJhdGlvbnMiLCJwdXNoIiwiZGVidWciLCJtZXRhdmFyaWFibGVTdHJpbmciLCJtZXRhdmFyaWFibGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YVR5cGUiLCJnZXRNZXRhVHlwZSIsImZyYW1lTWV0YVR5cGUiLCJqdWRnZW1lbnQiLCJmaW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGVOb2RlIiwianVkZ2VtZW50RGVjbGFyYXRpb25zIiwiZ2V0RGVjbGFyYXRpb25zIiwiZnJhbWVNZXRhVHlwZU5hbWUiLCJnZXROYW1lIiwibWV0YVR5cGVTdHJpbmciLCJhc1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUF3QkE7Ozs0REFWTjs2REFDUTtrRUFDSTtxQkFFVDtxQkFDTTs7Ozs7O0FBRTNCLElBQU1DLHdCQUF3QkMsSUFBQUEsaUJBQVUsRUFBQyx1QkFDbkNDLHlCQUF5QkQsSUFBQUEsaUJBQVUsRUFBQztBQUUzQixTQUFTRixZQUFZSSxTQUFTLEVBQUVDLE1BQU0sRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLFlBQVk7SUFDdkYsSUFBSUM7SUFFSixJQUFNQyxjQUFjRixhQUFhRyxZQUFZLENBQUNQO0lBRTlDSSxhQUFhSSxLQUFLLENBQUMsQUFBQyxrQkFBNkIsT0FBWkYsYUFBWSxlQUFhTjtJQUU5RCxJQUFNUyxlQUFlLEVBQUUsRUFDakJDLG1CQUFtQmIsc0JBQXNCRyxZQUN6Q1csdUJBQXVCRCxpQkFBaUJFLEtBQUssQ0FBQyxTQUFDQztRQUM3QyxJQUFNQyxzQkFBc0JDLElBQUFBLG9CQUFpQixFQUFDRixpQkFBaUJKLGNBQWNMO1FBRTdFLE9BQU9VO0lBQ1Q7SUFFTixJQUFJSCxzQkFBc0I7UUFDeEIsSUFBTUssb0JBQW9CakIsdUJBQXVCQyxZQUMzQ2lCLHdCQUF3QkQsa0JBQWtCSixLQUFLLENBQUMsU0FBQ007WUFDL0MsSUFBTUMsdUJBQXVCQyxtQkFBbUJGLGtCQUFrQlQsY0FBY0w7WUFFaEYsT0FBT2U7UUFDVDtRQUVOLElBQUlGLHVCQUF1QjtZQUN6QixJQUFNSSxRQUFRQyxjQUFLLENBQUNDLGdCQUFnQixDQUFDZDtZQUVyQ1IsT0FBT3VCLElBQUksQ0FBQ0g7WUFFWmhCLGdCQUFnQjtRQUNsQjtJQUNGO0lBRUEsSUFBSUEsZUFBZTtRQUNqQkQsYUFBYXFCLEtBQUssQ0FBQyxBQUFDLG9CQUErQixPQUFabkIsYUFBWSxhQUFXTjtJQUNoRTtJQUVBLE9BQU9LO0FBQ1Q7QUFFQSxTQUFTZSxtQkFBbUJGLGdCQUFnQixFQUFFVCxZQUFZLEVBQUVMLFlBQVk7SUFDdEUsSUFBSWUsdUJBQXVCO0lBRTNCLElBQU1PLHFCQUFxQnRCLGFBQWFHLFlBQVksQ0FBQ1c7SUFFckRkLGFBQWFJLEtBQUssQ0FBQyxBQUFDLGtCQUFvQyxPQUFuQmtCLG9CQUFtQixzQkFBb0JSO0lBRTVFLElBQU1TLGVBQWV2QixhQUFhd0Isa0NBQWtDLENBQUNWLGtCQUFrQmQ7SUFFdkYsSUFBSXVCLGlCQUFpQixNQUFNO1FBQ3pCLElBQU1FLFdBQVdGLGFBQWFHLFdBQVc7UUFFekMsSUFBSUQsYUFBYUUsZUFBYSxFQUFFO1lBQzlCLElBQU1DLFlBQVk1QixhQUFhNkIsK0JBQStCLENBQUNmO1lBRS9ELElBQUljLGNBQWMsTUFBTTtnQkFDdEIsSUFBTUUsd0JBQXdCRixVQUFVRyxlQUFlO2dCQUV2RFgsSUFBQUEsV0FBSSxFQUFDZixjQUFjeUI7Z0JBRW5CZix1QkFBdUI7WUFDekIsT0FBTztnQkFDTGYsYUFBYXFCLEtBQUssQ0FBQyxBQUFDLGtDQUFvRCxPQUFuQkMsb0JBQW1CLG9CQUFrQlI7WUFDNUY7UUFDRixPQUFPO1lBQ0wsSUFBTWtCLG9CQUFvQkwsZUFBYSxDQUFDTSxPQUFPLElBQ3pDQyxpQkFBaUJULFNBQVNVLFFBQVE7WUFFeENuQyxhQUFhcUIsS0FBSyxDQUFDLEFBQUMsUUFBMkRhLE9BQXBEWixvQkFBbUIsbUNBQXVFVSxPQUF0Q0UsZ0JBQWUseUJBQXlDLE9BQWxCRixtQkFBa0IsT0FBS2xCO1FBQzlJO0lBQ0YsT0FBTztRQUNMZCxhQUFhcUIsS0FBSyxDQUFDLEFBQUMsUUFBMEIsT0FBbkJDLG9CQUFtQixvQ0FBa0NSO0lBQ2xGO0lBRUEsSUFBSUMsc0JBQXNCO1FBQ3hCZixhQUFhcUIsS0FBSyxDQUFDLEFBQUMsb0JBQXNDLE9BQW5CQyxvQkFBbUIsb0JBQWtCUjtJQUM5RTtJQUVBLE9BQU9DO0FBQ1QifQ==