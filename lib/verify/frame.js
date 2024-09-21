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
var _metavariableGivenMetaType = /*#__PURE__*/ _interop_require_default(require("../verify/metavariableGivenMetaType"));
var _query = require("../utilities/query");
var _array = require("../utilities/array");
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
        var declarationNodes = declarationNodesQuery(frameNode), declarationNodesLength = declarationNodes.length;
        if (declarationNodesLength === 1) {
            var metavariableNodes = metavariableNodesQuery(frameNode), metavariableNodesLength = metavariableNodes.length;
            if (metavariableNodesLength === 0) {
                var firstDeclarationNode = (0, _array.first)(declarationNodes), declarationNode = firstDeclarationNode, declarations = [], declarationVerified = (0, _declaration.default)(declarationNode, declarations, stated, localContext);
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
        var declarations = [], declarationNodes = declarationNodesQuery(frameNode), declarationsVerified = declarationNodes.every(function(declarationNode) {
            var declarationVerified = (0, _declaration.default)(declarationNode, declarations, stated, localContext);
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
                statedFrameVerified = true;
            }
        }
        if (statedFrameVerified) {
            localContext.debug("...verified the '".concat(frameString, "' stated frame."), frameNode);
        }
    }
    return statedFrameVerified;
}
function verifyMetavariable(metavariableNode, declarations, localContext) {
    var metavariableVerified = false;
    var metaType = _frame1.default, metavariableVerifiedGivenMetaType = (0, _metavariableGivenMetaType.default)(metavariableNode, metaType, localContext);
    if (metavariableVerifiedGivenMetaType) {
        var judgement = localContext.findJudgementByMetavariableNode(metavariableNode);
        if (judgement !== null) {
            var judgementDeclarations = judgement.getDeclarations();
            (0, _array.push)(declarations, judgementDeclarations);
            metavariableVerified = true;
        } else {
            var metavariableString = localContext.nodeAsString(metavariableNode);
            localContext.debug("There is no judgement for the '".concat(metavariableString, "' metavariable."), metavariableNode);
        }
    }
    return metavariableVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZnJhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBGcmFtZSBmcm9tIFwiLi4vZnJhbWVcIjtcbmltcG9ydCBmcmFtZU1ldGFUeXBlIGZyb20gXCIuLi9tZXRhVHlwZS9mcmFtZVwiO1xuaW1wb3J0IHZlcmlmeURlY2xhcmF0aW9uIGZyb20gXCIuLi92ZXJpZnkvZGVjbGFyYXRpb25cIjtcbmltcG9ydCB2ZXJpZnlNZXRhdmFyaWFibGVHaXZlbk1ldGFUeXBlIGZyb20gXCIuLi92ZXJpZnkvbWV0YXZhcmlhYmxlR2l2ZW5NZXRhVHlwZVwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZmlyc3QsIHB1c2ggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IGRlY2xhcmF0aW9uTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvZnJhbWUvZGVjbGFyYXRpb25cIiksXG4gICAgICBtZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9mcmFtZS9tZXRhdmFyaWFibGVcIik7XG5cbmNvbnN0IHZlcmlmeUZyYW1lRnVuY3Rpb25zID0gW1xuICB2ZXJpZnlEZXJpdmVkRnJhbWUsXG4gIHZlcmlmeVN0YXRlZEZyYW1lXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlGcmFtZShmcmFtZU5vZGUsIGZyYW1lcywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGZyYW1lVmVyaWZpZWQ7XG5cbiAgY29uc3QgZnJhbWVTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGZyYW1lTm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gLCBmcmFtZU5vZGUpO1xuXG4gIGZyYW1lVmVyaWZpZWQgPSB2ZXJpZnlGcmFtZUZ1bmN0aW9ucy5zb21lKCh2ZXJpZnlGcmFtZUZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgZnJhbWVWZXJpZmllZCA9IHZlcmlmeUZyYW1lRnVuY3Rpb24oZnJhbWVOb2RlLCBmcmFtZXMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChmcmFtZVZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChmcmFtZVZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gLCBmcmFtZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGZyYW1lVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeURlcml2ZWRGcmFtZShmcmFtZU5vZGUsIGZyYW1lcywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGRlcml2ZWRGcmFtZVZlcmlmaWVkO1xuXG4gIGlmICghc3RhdGVkKSB7XG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGZyYW1lTm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lLi4uYCwgZnJhbWVOb2RlKTtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uTm9kZXMgPSBkZWNsYXJhdGlvbk5vZGVzUXVlcnkoZnJhbWVOb2RlKSxcbiAgICAgICAgICBkZWNsYXJhdGlvbk5vZGVzTGVuZ3RoID0gZGVjbGFyYXRpb25Ob2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoZGVjbGFyYXRpb25Ob2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZXMgPSBtZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5KGZyYW1lTm9kZSksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2Rlc0xlbmd0aCA9IG1ldGF2YXJpYWJsZU5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVzTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0RGVjbGFyYXRpb25Ob2RlID0gZmlyc3QoZGVjbGFyYXRpb25Ob2RlcyksXG4gICAgICAgICAgICAgIGRlY2xhcmF0aW9uTm9kZSA9IGZpcnN0RGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgZGVjbGFyYXRpb25zID0gW10sXG4gICAgICAgICAgICAgIGRlY2xhcmF0aW9uVmVyaWZpZWQgPSB2ZXJpZnlEZWNsYXJhdGlvbihkZWNsYXJhdGlvbk5vZGUsIGRlY2xhcmF0aW9ucywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIGlmIChkZWNsYXJhdGlvblZlcmlmaWVkKSB7XG4gICAgICAgICAgY29uc3QgZnJhbWUgPSBGcmFtZS5mcm9tRGVjbGFyYXRpb25zKGRlY2xhcmF0aW9ucyk7XG5cbiAgICAgICAgICBmcmFtZXMucHVzaChmcmFtZSk7XG5cbiAgICAgICAgICBkZXJpdmVkRnJhbWVWZXJpZmllZCA9IHRydWU7IC8vL1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZSAnJHtmcmFtZVN0cmluZ30nIGRlcml2ZWQgZnJhbWUgbXVzdCBubyBzcHJlYWQgbWV0YXZhcmlhYmxlcy5gLCBmcmFtZU5vZGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZSAnJHtmcmFtZVN0cmluZ30nIGRlcml2ZWQgZnJhbWUgbXVzdCBoYXZlIG9uZSBhbmQgb25seSBvbmUgZGVjbGFyYXRpb24uYCwgZnJhbWVOb2RlKTtcbiAgICB9XG5cbiAgICBpZiAoZGVyaXZlZEZyYW1lVmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZGVyaXZlZCBmcmFtZS5gLCBmcmFtZU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZXJpdmVkRnJhbWVWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVkRnJhbWUoZnJhbWVOb2RlLCBmcmFtZXMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZWRGcmFtZVZlcmlmaWVkO1xuXG4gIGlmIChzdGF0ZWQpIHtcbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoZnJhbWVOb2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZS4uLmAsIGZyYW1lTm9kZSk7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvbnMgPSBbXSxcbiAgICAgICAgICBkZWNsYXJhdGlvbk5vZGVzID0gZGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5KGZyYW1lTm9kZSksXG4gICAgICAgICAgZGVjbGFyYXRpb25zVmVyaWZpZWQgPSBkZWNsYXJhdGlvbk5vZGVzLmV2ZXJ5KChkZWNsYXJhdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlY2xhcmF0aW9uVmVyaWZpZWQgPSB2ZXJpZnlEZWNsYXJhdGlvbihkZWNsYXJhdGlvbk5vZGUsIGRlY2xhcmF0aW9ucywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gZGVjbGFyYXRpb25WZXJpZmllZDtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmIChkZWNsYXJhdGlvbnNWZXJpZmllZCkge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZXMgPSBtZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5KGZyYW1lTm9kZSksXG4gICAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGVzVmVyaWZpZWQgPSBtZXRhdmFyaWFibGVOb2Rlcy5ldmVyeSgobWV0YXZhcmlhYmxlTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVWZXJpZmllZCA9IHZlcmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGVOb2RlLCBkZWNsYXJhdGlvbnMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVkO1xuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVzVmVyaWZpZWQpIHtcbiAgICAgICAgICAgICAgY29uc3QgZnJhbWUgPSBGcmFtZS5mcm9tRGVjbGFyYXRpb25zKGRlY2xhcmF0aW9ucyk7XG5cbiAgICAgICAgICAgICAgZnJhbWVzLnB1c2goZnJhbWUpO1xuXG4gICAgICAgICAgICAgIHN0YXRlZEZyYW1lVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgIGlmIChzdGF0ZWRGcmFtZVZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZS5gLCBmcmFtZU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZWRGcmFtZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgZGVjbGFyYXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgbWV0YVR5cGUgPSBmcmFtZU1ldGFUeXBlLCAvLy9cbiAgICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gdmVyaWZ5TWV0YXZhcmlhYmxlR2l2ZW5NZXRhVHlwZShtZXRhdmFyaWFibGVOb2RlLCBtZXRhVHlwZSwgbG9jYWxDb250ZXh0KTtcblxuICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZWRHaXZlbk1ldGFUeXBlKSB7XG4gICAgY29uc3QganVkZ2VtZW50ID0gbG9jYWxDb250ZXh0LmZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAoanVkZ2VtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBqdWRnZW1lbnREZWNsYXJhdGlvbnMgPSBqdWRnZW1lbnQuZ2V0RGVjbGFyYXRpb25zKCk7XG5cbiAgICAgIHB1c2goZGVjbGFyYXRpb25zLCBqdWRnZW1lbnREZWNsYXJhdGlvbnMpO1xuXG4gICAgICBtZXRhdmFyaWFibGVWZXJpZmllZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVGhlcmUgaXMgbm8ganVkZ2VtZW50IGZvciB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmAsIG1ldGF2YXJpYWJsZU5vZGUpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVkO1xufSJdLCJuYW1lcyI6WyJ2ZXJpZnlGcmFtZSIsImRlY2xhcmF0aW9uTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJtZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5IiwidmVyaWZ5RnJhbWVGdW5jdGlvbnMiLCJ2ZXJpZnlEZXJpdmVkRnJhbWUiLCJ2ZXJpZnlTdGF0ZWRGcmFtZSIsImZyYW1lTm9kZSIsImZyYW1lcyIsInN0YXRlZCIsImxvY2FsQ29udGV4dCIsImZyYW1lVmVyaWZpZWQiLCJmcmFtZVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwic29tZSIsInZlcmlmeUZyYW1lRnVuY3Rpb24iLCJkZWJ1ZyIsImRlcml2ZWRGcmFtZVZlcmlmaWVkIiwiZGVjbGFyYXRpb25Ob2RlcyIsImRlY2xhcmF0aW9uTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJtZXRhdmFyaWFibGVOb2RlcyIsIm1ldGF2YXJpYWJsZU5vZGVzTGVuZ3RoIiwiZmlyc3REZWNsYXJhdGlvbk5vZGUiLCJmaXJzdCIsImRlY2xhcmF0aW9uTm9kZSIsImRlY2xhcmF0aW9ucyIsImRlY2xhcmF0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlEZWNsYXJhdGlvbiIsImZyYW1lIiwiRnJhbWUiLCJmcm9tRGVjbGFyYXRpb25zIiwicHVzaCIsInN0YXRlZEZyYW1lVmVyaWZpZWQiLCJkZWNsYXJhdGlvbnNWZXJpZmllZCIsImV2ZXJ5IiwibWV0YXZhcmlhYmxlc1ZlcmlmaWVkIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZVZlcmlmaWVkIiwidmVyaWZ5TWV0YXZhcmlhYmxlIiwibWV0YVR5cGUiLCJmcmFtZU1ldGFUeXBlIiwibWV0YXZhcmlhYmxlVmVyaWZpZWRHaXZlbk1ldGFUeXBlIiwidmVyaWZ5TWV0YXZhcmlhYmxlR2l2ZW5NZXRhVHlwZSIsImp1ZGdlbWVudCIsImZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJqdWRnZW1lbnREZWNsYXJhdGlvbnMiLCJnZXREZWNsYXJhdGlvbnMiLCJtZXRhdmFyaWFibGVTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWtCQTs7O2VBQXdCQTs7OzREQWhCTjs2REFDUTtrRUFDSTtnRkFDYztxQkFFakI7cUJBQ0M7Ozs7OztBQUU1QixJQUFNQyx3QkFBd0JDLElBQUFBLGlCQUFVLEVBQUMsdUJBQ25DQyx5QkFBeUJELElBQUFBLGlCQUFVLEVBQUM7QUFFMUMsSUFBTUUsdUJBQXVCO0lBQzNCQztJQUNBQztDQUNEO0FBRWMsU0FBU04sWUFBWU8sU0FBUyxFQUFFQyxNQUFNLEVBQUVDLE1BQU0sRUFBRUMsWUFBWTtJQUN6RSxJQUFJQztJQUVKLElBQU1DLGNBQWNGLGFBQWFHLFlBQVksQ0FBQ047SUFFOUNHLGFBQWFJLEtBQUssQ0FBQyxBQUFDLGtCQUE2QixPQUFaRixhQUFZLGVBQWFMO0lBRTlESSxnQkFBZ0JQ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