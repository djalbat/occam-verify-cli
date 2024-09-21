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
var _declaration = /*#__PURE__*/ _interop_require_default(require("../verify/declaration"));
var _array = require("../utilities/array");
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var declarationNodeQuery = (0, _query.nodeQuery)("/frame/declaration!"), declarationNodesQuery = (0, _query.nodesQuery)("/frame/declaration"), metavariableNodesQuery = (0, _query.nodesQuery)("/frame/metavariable");
var verifyFrameFunctions = [
    verifyDerivedFrame,
    verifyStatedFrame
];
function verifyFrame(frameNode, frames, stated, localContext) {
    var frameVerified;
    var frameString = localContext.nodeAsString(frameNode);
    localContext.trace("Verifying the '".concat(frameString, "' frame..."), frameNode);
    frameVerified = verifyFrameFunctions.some(function(verifyFrameFunction) {
        var frameVerified = verifyFrameFunction(frameNode, frames, stated, localContext);
        if (frameVerified) {
            return true;
        }
    });
    if (frameVerified) {
        localContext.debug("...verified the '".concat(frameString, "' frame."), frameNode);
    }
    return frameVerified;
}
function verifyDerivedFrame(frameNode, frames, stated, localContext) {
    var derivedFrameVerified;
    if (!stated) {
        var frameString = localContext.nodeAsString(frameNode);
        localContext.trace("Verifying the '".concat(frameString, "' derived frame..."), frameNode);
        var declarationNode = declarationNodeQuery(frameNode);
        if (declarationNode !== null) {}
        var declarationNodesLength = declarationNodes.length;
        if (declarationNodesLength === 1) {
            var metavariableNodes = metavariableNodesQuery(frameNode), metavariableNodesLength = metavariableNodes.length;
            if (metavariableNodesLength === 0) {
                var firstDeclarationNode = (0, _array.first)(declarationNodes), declarationNode1 = firstDeclarationNode, declarations = [], declarationVerified = (0, _declaration.default)(declarationNode1, declarations, stated, localContext);
                if (declarationVerified) {
                    var frame = _frame.default.fromDeclarations(declarations);
                    frames.push(frame);
                    derivedFrameVerified = true; ///
                }
            } else {
                localContext.debug("The '".concat(frameString, "' derived frame must no spread metavariables."), frameNode);
            }
        } else {
            localContext.debug("The '".concat(frameString, "' derived frame must have one and only one declaration."), frameNode);
        }
        if (derivedFrameVerified) {
            localContext.debug("...verified the '".concat(frameString, "' derived frame."), frameNode);
        }
    }
    return derivedFrameVerified;
}
function verifyStatedFrame(frameNode, frames, stated, localContext) {
    var statedFrameVerified;
    if (stated) {
        var frameString = localContext.nodeAsString(frameNode);
        localContext.trace("Verifying the '".concat(frameString, "' stated frame..."), frameNode);
        var declarationNode = declarationNodeQuery(frameNode);
        if (declarationNode !== null) {
            var declarations = [], declarationVerified = (0, _declaration.default)(declarationNode, declarations, stated, localContext);
            if (declarationVerified) {
                var firstDeclaration = (0, _array.first)(declarations), declaration = firstDeclaration, statementNode = declaration.getStatementNode();
                if (statementNode === null) {
                    var frame = _frame.default.fromDeclarations(declarations);
                    frames.push(frame);
                    statedFrameVerified = true;
                } else {
                    localContext.trace("The '".concat(frameString, "' stated frame's declaration cannot contain a statement."), frameNode);
                }
            }
        } else {
            localContext.trace("The '".concat(frameString, "' stated frame has more than one declaration ."), frameNode);
        }
        if (statedFrameVerified) {
            localContext.debug("...verified the '".concat(frameString, "' stated frame."), frameNode);
        }
    }
    return statedFrameVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZnJhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBGcmFtZSBmcm9tIFwiLi4vZnJhbWVcIjtcbmltcG9ydCB2ZXJpZnlEZWNsYXJhdGlvbiBmcm9tIFwiLi4vdmVyaWZ5L2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBkZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9mcmFtZS9kZWNsYXJhdGlvbiFcIiksXG4gICAgICBkZWNsYXJhdGlvbk5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2ZyYW1lL2RlY2xhcmF0aW9uXCIpLFxuICAgICAgbWV0YXZhcmlhYmxlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvZnJhbWUvbWV0YXZhcmlhYmxlXCIpO1xuXG5jb25zdCB2ZXJpZnlGcmFtZUZ1bmN0aW9ucyA9IFtcbiAgdmVyaWZ5RGVyaXZlZEZyYW1lLFxuICB2ZXJpZnlTdGF0ZWRGcmFtZVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5RnJhbWUoZnJhbWVOb2RlLCBmcmFtZXMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBmcmFtZVZlcmlmaWVkO1xuXG4gIGNvbnN0IGZyYW1lU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhmcmFtZU5vZGUpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCwgZnJhbWVOb2RlKTtcblxuICBmcmFtZVZlcmlmaWVkID0gdmVyaWZ5RnJhbWVGdW5jdGlvbnMuc29tZSgodmVyaWZ5RnJhbWVGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IGZyYW1lVmVyaWZpZWQgPSB2ZXJpZnlGcmFtZUZ1bmN0aW9uKGZyYW1lTm9kZSwgZnJhbWVzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoZnJhbWVWZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBpZiAoZnJhbWVWZXJpZmllZCkge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCwgZnJhbWVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlEZXJpdmVkRnJhbWUoZnJhbWVOb2RlLCBmcmFtZXMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBkZXJpdmVkRnJhbWVWZXJpZmllZDtcblxuICBpZiAoIXN0YXRlZCkge1xuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhmcmFtZU5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZGVyaXZlZCBmcmFtZS4uLmAsIGZyYW1lTm9kZSk7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvbk5vZGUgPSBkZWNsYXJhdGlvbk5vZGVRdWVyeShmcmFtZU5vZGUpO1xuXG4gICAgaWYgKGRlY2xhcmF0aW9uTm9kZSAhPT0gbnVsbCkge1xuXG4gICAgfVxuICAgIGNvbnN0IGRlY2xhcmF0aW9uTm9kZXNMZW5ndGggPSBkZWNsYXJhdGlvbk5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChkZWNsYXJhdGlvbk5vZGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlcyA9IG1ldGF2YXJpYWJsZU5vZGVzUXVlcnkoZnJhbWVOb2RlKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVzTGVuZ3RoID0gbWV0YXZhcmlhYmxlTm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZXNMZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc3QgZmlyc3REZWNsYXJhdGlvbk5vZGUgPSBmaXJzdChkZWNsYXJhdGlvbk5vZGVzKSxcbiAgICAgICAgICAgICAgZGVjbGFyYXRpb25Ob2RlID0gZmlyc3REZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICAgICAgICBkZWNsYXJhdGlvbnMgPSBbXSxcbiAgICAgICAgICAgICAgZGVjbGFyYXRpb25WZXJpZmllZCA9IHZlcmlmeURlY2xhcmF0aW9uKGRlY2xhcmF0aW9uTm9kZSwgZGVjbGFyYXRpb25zLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKGRlY2xhcmF0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCBmcmFtZSA9IEZyYW1lLmZyb21EZWNsYXJhdGlvbnMoZGVjbGFyYXRpb25zKTtcblxuICAgICAgICAgIGZyYW1lcy5wdXNoKGZyYW1lKTtcblxuICAgICAgICAgIGRlcml2ZWRGcmFtZVZlcmlmaWVkID0gdHJ1ZTsgLy8vXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVGhlICcke2ZyYW1lU3RyaW5nfScgZGVyaXZlZCBmcmFtZSBtdXN0IG5vIHNwcmVhZCBtZXRhdmFyaWFibGVzLmAsIGZyYW1lTm9kZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVGhlICcke2ZyYW1lU3RyaW5nfScgZGVyaXZlZCBmcmFtZSBtdXN0IGhhdmUgb25lIGFuZCBvbmx5IG9uZSBkZWNsYXJhdGlvbi5gLCBmcmFtZU5vZGUpO1xuICAgIH1cblxuICAgIGlmIChkZXJpdmVkRnJhbWVWZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lLmAsIGZyYW1lTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRlcml2ZWRGcmFtZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZWRGcmFtZShmcmFtZU5vZGUsIGZyYW1lcywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlZEZyYW1lVmVyaWZpZWQ7XG5cbiAgaWYgKHN0YXRlZCkge1xuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhmcmFtZU5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lLi4uYCwgZnJhbWVOb2RlKTtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uTm9kZSA9IGRlY2xhcmF0aW9uTm9kZVF1ZXJ5KGZyYW1lTm9kZSk7XG5cbiAgICBpZiAoZGVjbGFyYXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkZWNsYXJhdGlvbnMgPSBbXSxcbiAgICAgICAgICAgIGRlY2xhcmF0aW9uVmVyaWZpZWQgPSB2ZXJpZnlEZWNsYXJhdGlvbihkZWNsYXJhdGlvbk5vZGUsIGRlY2xhcmF0aW9ucywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAoZGVjbGFyYXRpb25WZXJpZmllZCkge1xuICAgICAgICBjb25zdCBmaXJzdERlY2xhcmF0aW9uID0gZmlyc3QoZGVjbGFyYXRpb25zKSxcbiAgICAgICAgICAgICAgZGVjbGFyYXRpb24gPSBmaXJzdERlY2xhcmF0aW9uLCAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IGRlY2xhcmF0aW9uLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGZyYW1lID0gRnJhbWUuZnJvbURlY2xhcmF0aW9ucyhkZWNsYXJhdGlvbnMpO1xuXG4gICAgICAgICAgZnJhbWVzLnB1c2goZnJhbWUpO1xuXG4gICAgICAgICAgc3RhdGVkRnJhbWVWZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbG9jYWxDb250ZXh0LnRyYWNlKGBUaGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUncyBkZWNsYXJhdGlvbiBjYW5ub3QgY29udGFpbiBhIHN0YXRlbWVudC5gLCBmcmFtZU5vZGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2FsQ29udGV4dC50cmFjZShgVGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lIGhhcyBtb3JlIHRoYW4gb25lIGRlY2xhcmF0aW9uIC5gLCBmcmFtZU5vZGUpO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZWRGcmFtZVZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZS5gLCBmcmFtZU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZWRGcmFtZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeUZyYW1lIiwiZGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkZWNsYXJhdGlvbk5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZXNRdWVyeSIsInZlcmlmeUZyYW1lRnVuY3Rpb25zIiwidmVyaWZ5RGVyaXZlZEZyYW1lIiwidmVyaWZ5U3RhdGVkRnJhbWUiLCJmcmFtZU5vZGUiLCJmcmFtZXMiLCJzdGF0ZWQiLCJsb2NhbENvbnRleHQiLCJmcmFtZVZlcmlmaWVkIiwiZnJhbWVTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInNvbWUiLCJ2ZXJpZnlGcmFtZUZ1bmN0aW9uIiwiZGVidWciLCJkZXJpdmVkRnJhbWVWZXJpZmllZCIsImRlY2xhcmF0aW9uTm9kZSIsImRlY2xhcmF0aW9uTm9kZXNMZW5ndGgiLCJkZWNsYXJhdGlvbk5vZGVzIiwibGVuZ3RoIiwibWV0YXZhcmlhYmxlTm9kZXMiLCJtZXRhdmFyaWFibGVOb2Rlc0xlbmd0aCIsImZpcnN0RGVjbGFyYXRpb25Ob2RlIiwiZmlyc3QiLCJkZWNsYXJhdGlvbnMiLCJkZWNsYXJhdGlvblZlcmlmaWVkIiwidmVyaWZ5RGVjbGFyYXRpb24iLCJmcmFtZSIsIkZyYW1lIiwiZnJvbURlY2xhcmF0aW9ucyIsInB1c2giLCJzdGF0ZWRGcmFtZVZlcmlmaWVkIiwiZmlyc3REZWNsYXJhdGlvbiIsImRlY2xhcmF0aW9uIiwic3RhdGVtZW50Tm9kZSIsImdldFN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWlCQTs7O2VBQXdCQTs7OzREQWZOO2tFQUNZO3FCQUVSO3FCQUNnQjs7Ozs7O0FBRXRDLElBQU1DLHVCQUF1QkMsSUFBQUEsZ0JBQVMsRUFBQyx3QkFDakNDLHdCQUF3QkMsSUFBQUEsaUJBQVUsRUFBQyx1QkFDbkNDLHlCQUF5QkQsSUFBQUEsaUJBQVUsRUFBQztBQUUxQyxJQUFNRSx1QkFBdUI7SUFDM0JDO0lBQ0FDO0NBQ0Q7QUFFYyxTQUFTUixZQUFZUyxTQUFTLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxZQUFZO0lBQ3pFLElBQUlDO0lBRUosSUFBTUMsY0FBY0YsYUFBYUcsWUFBWSxDQUFDTjtJQUU5Q0csYUFBYUksS0FBSyxDQUFDLEFBQUMsa0JBQTZCLE9BQVpGLGFBQVksZUFBYUw7SUFFOURJLGdCQUFnQlAscUJBQXFCVyxJQUFJLENBQUMsU0FBQ0M7UUFDekMsSUFBTUwsZ0JBQWdCSyxvQkFBb0JULFdBQVdDLFFBQVFDLFFBQVFDO1FBRXJFLElBQUlDLGVBQWU7WUFDakIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxJQUFJQSxlQUFlO1FBQ2pCRCxhQUFhTyxLQUFLLENBQUMsQUFBQyxvQkFBK0IsT0FBWkwsYUFBWSxhQUFXTDtJQUNoRTtJQUVBLE9BQU9JO0FBQ1Q7QUFFQSxTQUFTTixtQkFBbUJFLFNBQVMsRUFBRUMs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