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
        derivedFrameVerified = false; ///
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
        var declarations = [], declarationNodes = declarationNodesQuery(frameNode), metavariableNodes = metavariableNodesQuery(frameNode), declarationsVerified = declarationNodes.every(function(declarationNode) {
            var declarationVerified = (0, _declaration.default)(declarationNode, declarations, stated, localContext);
            return declarationVerified;
        }), metavariablesVerified = metavariableNodes.every(function(metavariableNode) {
            var metavariableVerified = verifyMetavariable(metavariableNode, declarations, localContext);
            return metavariableVerified;
        });
        if (declarationsVerified && metavariablesVerified) {
            var frame = _frame.default.fromDeclarations(declarations);
            frames.push(frame);
            statedFrameVerified = true;
        }
        if (statedFrameVerified) {
            localContext.debug("...verified the '".concat(frameString, "' stated frame."), frameNode);
        }
    }
    return statedFrameVerified;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZnJhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBGcmFtZSBmcm9tIFwiLi4vZnJhbWVcIjtcbmltcG9ydCBmcmFtZU1ldGFUeXBlIGZyb20gXCIuLi9tZXRhVHlwZS9mcmFtZVwiO1xuaW1wb3J0IHZlcmlmeURlY2xhcmF0aW9uIGZyb20gXCIuLi92ZXJpZnkvZGVjbGFyYXRpb25cIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGRlY2xhcmF0aW9uTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvZnJhbWUvZGVjbGFyYXRpb25cIiksXG4gICAgICBtZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9mcmFtZS9tZXRhdmFyaWFibGVcIik7XG5cbmNvbnN0IHZlcmlmeUZyYW1lRnVuY3Rpb25zID0gW1xuICB2ZXJpZnlEZXJpdmVkRnJhbWUsXG4gIHZlcmlmeVN0YXRlZEZyYW1lXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlGcmFtZShmcmFtZU5vZGUsIGZyYW1lcywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGZyYW1lVmVyaWZpZWQ7XG5cbiAgY29uc3QgZnJhbWVTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGZyYW1lTm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gLCBmcmFtZU5vZGUpO1xuXG4gIGZyYW1lVmVyaWZpZWQgPSB2ZXJpZnlGcmFtZUZ1bmN0aW9ucy5zb21lKCh2ZXJpZnlGcmFtZUZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgZnJhbWVWZXJpZmllZCA9IHZlcmlmeUZyYW1lRnVuY3Rpb24oZnJhbWVOb2RlLCBmcmFtZXMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChmcmFtZVZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChmcmFtZVZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gLCBmcmFtZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGZyYW1lVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeURlcml2ZWRGcmFtZShmcmFtZU5vZGUsIGZyYW1lcywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGRlcml2ZWRGcmFtZVZlcmlmaWVkO1xuXG4gIGlmICghc3RhdGVkKSB7XG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGZyYW1lTm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lLi4uYCwgZnJhbWVOb2RlKTtcblxuICAgIGRlcml2ZWRGcmFtZVZlcmlmaWVkID0gZmFsc2U7IC8vL1xuXG4gICAgaWYgKGRlcml2ZWRGcmFtZVZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGRlcml2ZWQgZnJhbWUuYCwgZnJhbWVOb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVyaXZlZEZyYW1lVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlZEZyYW1lKGZyYW1lTm9kZSwgZnJhbWVzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVkRnJhbWVWZXJpZmllZDtcblxuICBpZiAoc3RhdGVkKSB7XG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGZyYW1lTm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUuLi5gLCBmcmFtZU5vZGUpO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25zID0gW10sXG4gICAgICAgICAgZGVjbGFyYXRpb25Ob2RlcyA9IGRlY2xhcmF0aW9uTm9kZXNRdWVyeShmcmFtZU5vZGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVzID0gbWV0YXZhcmlhYmxlTm9kZXNRdWVyeShmcmFtZU5vZGUpLFxuICAgICAgICAgIGRlY2xhcmF0aW9uc1ZlcmlmaWVkID0gZGVjbGFyYXRpb25Ob2Rlcy5ldmVyeSgoZGVjbGFyYXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWNsYXJhdGlvblZlcmlmaWVkID0gdmVyaWZ5RGVjbGFyYXRpb24oZGVjbGFyYXRpb25Ob2RlLCBkZWNsYXJhdGlvbnMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uVmVyaWZpZWQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlc1ZlcmlmaWVkID0gbWV0YXZhcmlhYmxlTm9kZXMuZXZlcnkoKG1ldGF2YXJpYWJsZU5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gdmVyaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZU5vZGUsIGRlY2xhcmF0aW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVkO1xuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKGRlY2xhcmF0aW9uc1ZlcmlmaWVkICYmIG1ldGF2YXJpYWJsZXNWZXJpZmllZCkge1xuICAgICAgY29uc3QgZnJhbWUgPSBGcmFtZS5mcm9tRGVjbGFyYXRpb25zKGRlY2xhcmF0aW9ucyk7XG5cbiAgICAgIGZyYW1lcy5wdXNoKGZyYW1lKTtcblxuICAgICAgc3RhdGVkRnJhbWVWZXJpZmllZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlZEZyYW1lVmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lLmAsIGZyYW1lTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlZEZyYW1lVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGVOb2RlLCBkZWNsYXJhdGlvbnMsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gLCBtZXRhdmFyaWFibGVOb2RlKTtcblxuICBjb25zdCBtZXRhdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YVR5cGUgPSBtZXRhdmFyaWFibGUuZ2V0TWV0YVR5cGUoKTtcblxuICAgIGlmIChtZXRhVHlwZSA9PT0gZnJhbWVNZXRhVHlwZSkge1xuICAgICAgY29uc3QganVkZ2VtZW50ID0gbG9jYWxDb250ZXh0LmZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChqdWRnZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QganVkZ2VtZW50RGVjbGFyYXRpb25zID0ganVkZ2VtZW50LmdldERlY2xhcmF0aW9ucygpO1xuXG4gICAgICAgIHB1c2goZGVjbGFyYXRpb25zLCBqdWRnZW1lbnREZWNsYXJhdGlvbnMpO1xuXG4gICAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVGhlcmUgaXMgbm8ganVkZ2VtZW50IGZvciB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmAsIG1ldGF2YXJpYWJsZU5vZGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmcmFtZU1ldGFUeXBlTmFtZSA9IGZyYW1lTWV0YVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgbWV0YVR5cGVTdHJpbmcgPSBtZXRhVHlwZS5hc1N0cmluZygpO1xuXG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyBtZXRhLXR5cGUgaXMgJyR7bWV0YVR5cGVTdHJpbmd9JyB3aGVuIGl0IHNob3VsZCBiZSAnJHtmcmFtZU1ldGFUeXBlTmFtZX0nLmAsIG1ldGF2YXJpYWJsZU5vZGUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgaXMgbm90IHByZXNlbnQnLmAsIG1ldGF2YXJpYWJsZU5vZGUpO1xuICB9XG5cbiAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmAsIG1ldGF2YXJpYWJsZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVkO1xufSJdLCJuYW1lcyI6WyJ2ZXJpZnlGcmFtZSIsImRlY2xhcmF0aW9uTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJtZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5IiwidmVyaWZ5RnJhbWVGdW5jdGlvbnMiLCJ2ZXJpZnlEZXJpdmVkRnJhbWUiLCJ2ZXJpZnlTdGF0ZWRGcmFtZSIsImZyYW1lTm9kZSIsImZyYW1lcyIsInN0YXRlZCIsImxvY2FsQ29udGV4dCIsImZyYW1lVmVyaWZpZWQiLCJmcmFtZVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwic29tZSIsInZlcmlmeUZyYW1lRnVuY3Rpb24iLCJkZWJ1ZyIsImRlcml2ZWRGcmFtZVZlcmlmaWVkIiwic3RhdGVkRnJhbWVWZXJpZmllZCIsImRlY2xhcmF0aW9ucyIsImRlY2xhcmF0aW9uTm9kZXMiLCJtZXRhdmFyaWFibGVOb2RlcyIsImRlY2xhcmF0aW9uc1ZlcmlmaWVkIiwiZXZlcnkiLCJkZWNsYXJhdGlvbk5vZGUiLCJkZWNsYXJhdGlvblZlcmlmaWVkIiwidmVyaWZ5RGVjbGFyYXRpb24iLCJtZXRhdmFyaWFibGVzVmVyaWZpZWQiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlVmVyaWZpZWQiLCJ2ZXJpZnlNZXRhdmFyaWFibGUiLCJmcmFtZSIsIkZyYW1lIiwiZnJvbURlY2xhcmF0aW9ucyIsInB1c2giLCJtZXRhdmFyaWFibGVTdHJpbmciLCJtZXRhdmFyaWFibGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YVR5cGUiLCJnZXRNZXRhVHlwZSIsImZyYW1lTWV0YVR5cGUiLCJqdWRnZW1lbnQiLCJmaW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGVOb2RlIiwianVkZ2VtZW50RGVjbGFyYXRpb25zIiwiZ2V0RGVjbGFyYXRpb25zIiwiZnJhbWVNZXRhVHlwZU5hbWUiLCJnZXROYW1lIiwibWV0YVR5cGVTdHJpbmciLCJhc1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUJBOzs7ZUFBd0JBOzs7NERBZk47NkRBQ1E7a0VB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