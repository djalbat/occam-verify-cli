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
var _metavariableGivenMetaType = /*#__PURE__*/ _interop_require_default(require("./metavariableGivenMetaType"));
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
        var declarations = [], declarationNodes = declarationNodesQuery(frameNode), declarationsVerified = declarationNodes.every(function(declarationNode) {
            var declarationVerified = (0, _declaration.default)(declarationNode, declarations, stated, localContext);
            if (declarationVerified) {
                return true;
            }
        });
        if (declarationsVerified) {
            var metavariableNodes = metavariableNodesQuery(frameNode), metavariablesVerified = metavariableNodes.every(function(metavariableNode) {
                var metavariableVerified = verifyMetavariable(metavariableNode, declarations, localContext);
                if (metavariableVerified) {
                    return true;
                }
            });
            if (metavariablesVerified) {
                var frame = _frame.default.fromDeclarations(declarations);
                frames.push(frame);
                derivedFrameVerified = true; ///
            }
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
        var declarationNodes = declarationNodesQuery(frameNode), declarationNodesLength = declarationNodes.length;
        if (declarationNodesLength === 0) {
            var metavariableNodes = metavariableNodesQuery(frameNode), metavariableNodesLength = metavariableNodes.length;
            if (metavariableNodesLength === 1) {
                var firstMetavariableNode = (0, _array.first)(metavariableNodes), metavariableNode = firstMetavariableNode, metaType = _frame1.default, metavariables = [], metavariableVerifiedGivenMetaType = (0, _metavariableGivenMetaType.default)(metavariableNode, metaType, metavariables, localContext);
                if (metavariableVerifiedGivenMetaType) {
                    var firstMetavariable = (0, _array.first)(metavariables), metavariable = firstMetavariable, frame = _frame.default.fromMetavariable(metavariable);
                    frames.push(frame);
                    statedFrameVerified = true;
                }
            } else {
                localContext.trace("The '".concat(frameString, "' stated frame cannot have more than one metavariable."), frameNode);
            }
        } else {
            localContext.trace("The '".concat(frameString, "' stated frame cannot have declarations."), frameNode);
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
    var metaType = _frame1.default, metavariables = [], metavariableVerifiedGivenMetaType = (0, _metavariableGivenMetaType.default)(metavariableNode, metaType, metavariables, localContext);
    if (metavariableVerifiedGivenMetaType) {
        var firstMetavariable = (0, _array.first)(metavariables), metavariable = firstMetavariable, metavariableName = metavariable.getName(), judgement = localContext.findJudgementByMetavariableName(metavariableName);
        if (judgement !== null) {
            var declaration = judgement.getDeclaration();
            declarations.push(declaration);
            metavariableVerified = true;
        } else {
            localContext.trace("There is no judgement for the '".concat(metavariableString, "' metavariable."), metavariableNode);
        }
    }
    if (metavariableVerified) {
        localContext.debug("...verified the '".concat(metavariableString, "' metavariable."), metavariableNode);
    }
    return metavariableVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZnJhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBGcmFtZSBmcm9tIFwiLi4vZnJhbWVcIjtcbmltcG9ydCBmcmFtZU1ldGFUeXBlIGZyb20gXCIuLi9tZXRhVHlwZS9mcmFtZVwiO1xuaW1wb3J0IHZlcmlmeURlY2xhcmF0aW9uIGZyb20gXCIuLi92ZXJpZnkvZGVjbGFyYXRpb25cIjtcbmltcG9ydCB2ZXJpZnlNZXRhdmFyaWFibGVHaXZlbk1ldGFUeXBlIGZyb20gXCIuL21ldGF2YXJpYWJsZUdpdmVuTWV0YVR5cGVcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBkZWNsYXJhdGlvbk5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2ZyYW1lL2RlY2xhcmF0aW9uXCIpLFxuICAgICAgbWV0YXZhcmlhYmxlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvZnJhbWUvbWV0YXZhcmlhYmxlXCIpO1xuXG5jb25zdCB2ZXJpZnlGcmFtZUZ1bmN0aW9ucyA9IFtcbiAgdmVyaWZ5RGVyaXZlZEZyYW1lLFxuICB2ZXJpZnlTdGF0ZWRGcmFtZVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5RnJhbWUoZnJhbWVOb2RlLCBmcmFtZXMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBmcmFtZVZlcmlmaWVkO1xuXG4gIGNvbnN0IGZyYW1lU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhmcmFtZU5vZGUpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCwgZnJhbWVOb2RlKTtcblxuICBmcmFtZVZlcmlmaWVkID0gdmVyaWZ5RnJhbWVGdW5jdGlvbnMuc29tZSgodmVyaWZ5RnJhbWVGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IGZyYW1lVmVyaWZpZWQgPSB2ZXJpZnlGcmFtZUZ1bmN0aW9uKGZyYW1lTm9kZSwgZnJhbWVzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoZnJhbWVWZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBpZiAoZnJhbWVWZXJpZmllZCkge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCwgZnJhbWVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlEZXJpdmVkRnJhbWUoZnJhbWVOb2RlLCBmcmFtZXMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBkZXJpdmVkRnJhbWVWZXJpZmllZDtcblxuICBpZiAoIXN0YXRlZCkge1xuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhmcmFtZU5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZGVyaXZlZCBmcmFtZS4uLmAsIGZyYW1lTm9kZSk7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvbnMgPSBbXSxcbiAgICAgICAgICBkZWNsYXJhdGlvbk5vZGVzID0gZGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5KGZyYW1lTm9kZSksXG4gICAgICAgICAgZGVjbGFyYXRpb25zVmVyaWZpZWQgPSBkZWNsYXJhdGlvbk5vZGVzLmV2ZXJ5KChkZWNsYXJhdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlY2xhcmF0aW9uVmVyaWZpZWQgPSB2ZXJpZnlEZWNsYXJhdGlvbihkZWNsYXJhdGlvbk5vZGUsIGRlY2xhcmF0aW9ucywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAoZGVjbGFyYXRpb25WZXJpZmllZCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmIChkZWNsYXJhdGlvbnNWZXJpZmllZCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZXMgPSBtZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5KGZyYW1lTm9kZSksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVzVmVyaWZpZWQgPSBtZXRhdmFyaWFibGVOb2Rlcy5ldmVyeSgobWV0YXZhcmlhYmxlTm9kZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVWZXJpZmllZCA9IHZlcmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGVOb2RlLCBkZWNsYXJhdGlvbnMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlc1ZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGZyYW1lID0gRnJhbWUuZnJvbURlY2xhcmF0aW9ucyhkZWNsYXJhdGlvbnMpO1xuXG4gICAgICAgIGZyYW1lcy5wdXNoKGZyYW1lKTtcblxuICAgICAgICBkZXJpdmVkRnJhbWVWZXJpZmllZCA9IHRydWU7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkZXJpdmVkRnJhbWVWZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lLmAsIGZyYW1lTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRlcml2ZWRGcmFtZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZWRGcmFtZShmcmFtZU5vZGUsIGZyYW1lcywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlZEZyYW1lVmVyaWZpZWQ7XG5cbiAgaWYgKHN0YXRlZCkge1xuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhmcmFtZU5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lLi4uYCwgZnJhbWVOb2RlKTtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uTm9kZXMgPSBkZWNsYXJhdGlvbk5vZGVzUXVlcnkoZnJhbWVOb2RlKSxcbiAgICAgICAgICBkZWNsYXJhdGlvbk5vZGVzTGVuZ3RoID0gZGVjbGFyYXRpb25Ob2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoZGVjbGFyYXRpb25Ob2Rlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZXMgPSBtZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5KGZyYW1lTm9kZSksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2Rlc0xlbmd0aCA9IG1ldGF2YXJpYWJsZU5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0TWV0YXZhcmlhYmxlTm9kZSA9IGZpcnN0KG1ldGF2YXJpYWJsZU5vZGVzKSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGZpcnN0TWV0YXZhcmlhYmxlTm9kZSxcbiAgICAgICAgICAgICAgbWV0YVR5cGUgPSBmcmFtZU1ldGFUeXBlLCAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVWZXJpZmllZEdpdmVuTWV0YVR5cGUgPSB2ZXJpZnlNZXRhdmFyaWFibGVHaXZlbk1ldGFUeXBlKG1ldGF2YXJpYWJsZU5vZGUsIG1ldGFUeXBlLCBtZXRhdmFyaWFibGVzLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIGlmIChtZXRhdmFyaWFibGVWZXJpZmllZEdpdmVuTWV0YVR5cGUpIHtcbiAgICAgICAgICBjb25zdCBmaXJzdE1ldGF2YXJpYWJsZSA9IGZpcnN0KG1ldGF2YXJpYWJsZXMpLFxuICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IGZpcnN0TWV0YXZhcmlhYmxlLFxuXG4gICAgICAgICAgZnJhbWUgPSBGcmFtZS5mcm9tTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgICAgICBmcmFtZXMucHVzaChmcmFtZSk7XG5cbiAgICAgICAgICBzdGF0ZWRGcmFtZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYWxDb250ZXh0LnRyYWNlKGBUaGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUgY2Fubm90IGhhdmUgbW9yZSB0aGFuIG9uZSBtZXRhdmFyaWFibGUuYCwgZnJhbWVOb2RlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYWxDb250ZXh0LnRyYWNlKGBUaGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUgY2Fubm90IGhhdmUgZGVjbGFyYXRpb25zLmAsIGZyYW1lTm9kZSk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlZEZyYW1lVmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lLmAsIGZyYW1lTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlZEZyYW1lVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGVOb2RlLCBkZWNsYXJhdGlvbnMsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gLCBtZXRhdmFyaWFibGVOb2RlKTtcblxuICBjb25zdCBtZXRhVHlwZSA9IGZyYW1lTWV0YVR5cGUsIC8vL1xuICAgICAgICBtZXRhdmFyaWFibGVzID0gW10sXG4gICAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IHZlcmlmeU1ldGF2YXJpYWJsZUdpdmVuTWV0YVR5cGUobWV0YXZhcmlhYmxlTm9kZSwgbWV0YVR5cGUsIG1ldGF2YXJpYWJsZXMsIGxvY2FsQ29udGV4dCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVkR2l2ZW5NZXRhVHlwZSkge1xuICAgIGNvbnN0IGZpcnN0TWV0YXZhcmlhYmxlID0gZmlyc3QobWV0YXZhcmlhYmxlcyksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gZmlyc3RNZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGp1ZGdlbWVudCA9IGxvY2FsQ29udGV4dC5maW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKGp1ZGdlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGVjbGFyYXRpb24gPSBqdWRnZW1lbnQuZ2V0RGVjbGFyYXRpb24oKTtcblxuICAgICAgZGVjbGFyYXRpb25zLnB1c2goZGVjbGFyYXRpb24pO1xuXG4gICAgICBtZXRhdmFyaWFibGVWZXJpZmllZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2FsQ29udGV4dC50cmFjZShgVGhlcmUgaXMgbm8ganVkZ2VtZW50IGZvciB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmAsIG1ldGF2YXJpYWJsZU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChtZXRhdmFyaWFibGVWZXJpZmllZCkge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gLCBtZXRhdmFyaWFibGVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGVWZXJpZmllZDtcbn0iXSwibmFtZXMiOlsidmVyaWZ5RnJhbWUiLCJkZWNsYXJhdGlvbk5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZXNRdWVyeSIsInZlcmlmeUZyYW1lRnVuY3Rpb25zIiwidmVyaWZ5RGVyaXZlZEZyYW1lIiwidmVyaWZ5U3RhdGVkRnJhbWUiLCJmcmFtZU5vZGUiLCJmcmFtZXMiLCJzdGF0ZWQiLCJsb2NhbENvbnRleHQiLCJmcmFtZVZlcmlmaWVkIiwiZnJhbWVTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInNvbWUiLCJ2ZXJpZnlGcmFtZUZ1bmN0aW9uIiwiZGVidWciLCJkZXJpdmVkRnJhbWVWZXJpZmllZCIsImRlY2xhcmF0aW9ucyIsImRlY2xhcmF0aW9uTm9kZXMiLCJkZWNsYXJhdGlvbnNWZXJpZmllZCIsImV2ZXJ5IiwiZGVjbGFyYXRpb25Ob2RlIiwiZGVjbGFyYXRpb25WZXJpZmllZCIsInZlcmlmeURlY2xhcmF0aW9uIiwibWV0YXZhcmlhYmxlTm9kZXMiLCJtZXRhdmFyaWFibGVzVmVyaWZpZWQiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlVmVyaWZpZWQiLCJ2ZXJpZnlNZXRhdmFyaWFibGUiLCJmcmFtZSIsIkZyYW1lIiwiZnJvbURlY2xhcmF0aW9ucyIsInB1c2giLCJzdGF0ZWRGcmFtZVZlcmlmaWVkIiwiZGVjbGFyYXRpb25Ob2Rlc0xlbmd0aCIsImxlbmd0aCIsIm1ldGF2YXJpYWJsZU5vZGVzTGVuZ3RoIiwiZmlyc3RNZXRhdmFyaWFibGVOb2RlIiwiZmlyc3QiLCJtZXRhVHlwZSIsImZyYW1lTWV0YVR5cGUiLCJtZXRhdmFyaWFibGVzIiwibWV0YXZhcmlhYmxlVmVyaWZpZWRHaXZlbk1ldGFUeXBlIiwidmVyaWZ5TWV0YXZhcmlhYmxlR2l2ZW5NZXRhVHlwZSIsImZpcnN0TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwiZnJvbU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVN0cmluZyIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXROYW1lIiwianVkZ2VtZW50IiwiZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImRlY2xhcmF0aW9uIiwiZ2V0RGVjbGFyYXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWtCQTs7O2VBQXdCQTs7OzREQWhCTjs2REFDUTtrRUFDSTtnRkFDYztxQkFFdEI7cUJBQ0s7Ozs7OztBQUUzQixJQUFNQyx3QkFBd0JDLElBQUFBLGlCQUFVLEVBQUMsdUJBQ25DQyx5QkFBeUJELElBQUFBLGlCQUFVLEVBQUM7QUFFMUMsSUFBTUUsdUJBQXVCO0lBQzNCQztJQUNBQztDQUNEO0FBRWMsU0FBU04sWUFBWU8sU0FBUyxFQUFFQyxNQUFNLEVBQUVDLE1BQU0sRUFBRUMsWUFBWTtJQUN6RSxJQUFJQztJQUVKLElBQU1DLGNBQWNGLGFBQWFHLFlBQVksQ0FBQ047SUFFOUNHLGFBQWFJLEtBQUssQ0FBQyxBQUFDLGtCQUE2QixPQUFaRixhQUFZLGVBQWFMO0lBRTlESSxnQkFBZ0JQLHFCQUFxQlcsSUFBSSxDQUFDLFNBQUNDO1FBQ3pDLElBQU1MLGdCQUFnQkssb0JBQW9CVCxXQUFXQyxRQUFRQyxRQUFRQztRQUVyRSxJQUFJQyxlQUFlO1lBQ2pCLE9BQU87UUFDVDtJQUNGO0lBRUEsSUFBSUEsZUFBZTtRQUNqQkQsYUFBYU8sS0FBSyxDQUFDLEFBQUMsb0JBQStCLE9BQVpMLGFBQVksYUFBV0w7SUFDaEU7SUFFQSxPQUFPSTtBQUNUO0FBRUEsU0FBU04sbUJBQW1CRSxTQUFTLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxZQUFZO0lBQ2pFLElBQUlRO0lBRUosSUFBSSxDQUFDVCxRQUFRO1FBQ1gsSUFBTUcsY0FBY0YsYUFBYUcsWUFBWSxDQUFDTjtRQUU5Q0csYUFBYUksS0FBSyxDQUFDLEFBQUMsa0JBQTZCLE9BQVpGLGFBQVksdUJBQXFCTDtRQUV0RSxJQUFNWSxlQUFlLEVBQUUsRUFDakJDLG1CQUFtQm5CLHNCQUFzQk0sWUFDekNjLHVCQUF1QkQsaUJBQWlCRSxLQUFLLENBQUMsU0FBQ0M7WUFDN0MsSUFBTUMsc0JBQXNCQyxJQUFBQSxvQkFBaUIsRUFBQ0YsaUJBQWlCSixjQUFjVixRQUFRQztZQUVyRixJQUFJYyxxQkFBcUI7Z0JBQ3ZCLE9BQU87WUFDVDtRQUNGO1FBRU4sSUFBSUgsc0JBQXNCO1lBQ3hCLElBQU1LLG9CQUFvQnZCLHVCQUF1QkksWUFDM0NvQix3QkFBd0JELGtCQUFrQkosS0FBSyxDQUFDLFNBQUNNO2dCQUMvQyxJQUFNQyx1QkFBdUJDLG1CQUFtQkYsa0JBQWtCVCxjQUFjVDtnQkFFaEYsSUFBSW1CLHNCQUFzQjtvQkFDeEIsT0FBTztnQkFDVDtZQUNGO1lBRU4sSUFBSUYsdUJBQXVCO2dCQUN6QixJQUFNSSxRQUFRQyxjQUFLLENBQUNDLGdCQUFnQixDQUFDZDtnQkFFckNYLE9BQU8wQixJQUFJLENBQUNIO2dCQUVaYix1QkFBdUIsTUFBTSxHQUFHO1lBQ2xDO1FBQ0Y7UUFFQSxJQUFJQSxzQkFBc0I7WUFDeEJSLGFBQWFPLEtBQUssQ0FBQyxBQUFDLG9CQUErQixPQUFaTCxhQUFZLHFCQUFtQkw7UUFDeEU7SUFDRjtJQUVBLE9BQU9XO0FBQ1Q7QUFFQSxTQUFTWixrQkFBa0JDLFNBQVMsRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLFlBQVk7SUFDaEUsSUFBSXlCO0lBRUosSUFBSTFCLFFBQVE7UUFDVixJQUFNRyxjQUFjRixhQUFhRyxZQUFZLENBQUNOO1FBRTlDRyxhQUFhSSxLQUFLLENBQUMsQUFBQyxrQkFBNkIsT0FBWkYsYUFBWSxzQkFBb0JMO1FBRXJFLElBQU1hLG1CQUFtQm5CLHNCQUFzQk0sWUFDekM2Qix5QkFBeUJoQixpQkFBaUJpQixNQUFNO1FBRXRELElBQUlELDJCQUEyQixHQUFHO1lBQ2hDLElBQU1WLG9CQUFvQnZCLHVCQUF1QkksWUFDM0MrQiwwQkFBMEJaLGtCQUFrQlcsTUFBTTtZQUV4RCxJQUFJQyw0QkFBNEIsR0FBRztnQkFDakMsSUFBTUMsd0JBQXdCQyxJQUFBQSxZQUFLLEVBQUNkLG9CQUM5QkUsbUJBQW1CVyx1QkFDbkJFLFdBQVdDLGVBQWEsRUFDeEJDLGdCQUFnQixFQUFFLEVBQ2xCQyxvQ0FBb0NDLElBQUFBLGtDQUErQixFQUFDakIsa0JBQWtCYSxVQUFVRSxlQUFlakM7Z0JBRXJILElBQUlrQyxtQ0FBbUM7b0JBQ3JDLElBQU1FLG9CQUFvQk4sSUFBQUEsWUFBSyxFQUFDRyxnQkFDMUJJLGVBQWVELG1CQUVyQmYsUUFBUUMsY0FBSyxDQUFDZ0IsZ0JBQWdCLENBQUNEO29CQUUvQnZDLE9BQU8wQixJQUFJLENBQUNIO29CQUVaSSxzQkFBc0I7Z0JBQ3hCO1lBQ0YsT0FBTztnQkFDTHpCLGFBQWFJLEtBQUssQ0FBQyxBQUFDLFFBQW1CLE9BQVpGLGFBQVksMkRBQXlETDtZQUNsRztRQUNGLE9BQU87WUFDTEcsYUFBYUksS0FBSyxDQUFDLEFBQUMsUUFBbUIsT0FBWkYsYUFBWSw2Q0FBMkNMO1FBQ3BGO1FBRUEsSUFBSTRCLHFCQUFxQjtZQUN2QnpCLGFBQWFPLEtBQUssQ0FBQyxBQUFDLG9CQUErQixPQUFaTCxhQUFZLG9CQUFrQkw7UUFDdkU7SUFDRjtJQUVBLE9BQU80QjtBQUNUO0FBRUEsU0FBU0wsbUJBQW1CRixnQkFBZ0IsRUFBRVQsWUFBWSxFQUFFVCxZQUFZO0lBQ3RFLElBQUltQix1QkFBdUI7SUFFM0IsSUFBTW9CLHFCQUFxQnZDLGFBQWFHLFlBQVksQ0FBQ2U7SUFFckRsQixhQUFhSSxLQUFLLENBQUMsQUFBQyxrQkFBb0MsT0FBbkJtQyxvQkFBbUIsc0JBQW9CckI7SUFFNUUsSUFBTWEsV0FBV0MsZUFBYSxFQUN4QkMsZ0JBQWdCLEVBQUUsRUFDbEJDLG9DQUFvQ0MsSUFBQUEsa0NBQStCLEVBQUNqQixrQkFBa0JhLFVBQVVFLGVBQWVqQztJQUVySCxJQUFJa0MsbUNBQW1DO1FBQ3JDLElBQU1FLG9CQUFvQk4sSUFBQUEsWUFBSyxFQUFDRyxnQkFDMUJJLGVBQWVELG1CQUNmSSxtQkFBbUJILGFBQWFJLE9BQU8sSUFDdkNDLFlBQVkxQyxhQUFhMkMsK0JBQStCLENBQUNIO1FBRS9ELElBQUlFLGNBQWMsTUFBTTtZQUN0QixJQUFNRSxjQUFjRixVQUFVRyxjQUFjO1lBRTVDcEMsYUFBYWUsSUFBSSxDQUFDb0I7WUFFbEJ6Qix1QkFBdUI7UUFDekIsT0FBTztZQUNMbkIsYUFBYUksS0FBSyxDQUFDLEFBQUMsa0NBQW9ELE9BQW5CbUMsb0JBQW1CLG9CQUFrQnJCO1FBQzVGO0lBQ0Y7SUFFQSxJQUFJQyxzQkFBc0I7UUFDeEJuQixhQUFhTyxLQUFLLENBQUMsQUFBQyxvQkFBc0MsT0FBbkJnQyxvQkFBbUIsb0JBQWtCckI7SUFDOUU7SUFFQSxPQUFPQztBQUNUIn0=