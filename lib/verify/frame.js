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
            localContext.debug("This is no judgement for the '".concat(metavariableString, "' metavariable."), metavariableNode);
        }
    }
    return metavariableVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZnJhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBGcmFtZSBmcm9tIFwiLi4vZnJhbWVcIjtcbmltcG9ydCBmcmFtZU1ldGFUeXBlIGZyb20gXCIuLi9tZXRhVHlwZS9mcmFtZVwiO1xuaW1wb3J0IHZlcmlmeURlY2xhcmF0aW9uIGZyb20gXCIuLi92ZXJpZnkvZGVjbGFyYXRpb25cIjtcbmltcG9ydCB2ZXJpZnlNZXRhdmFyaWFibGVHaXZlbk1ldGFUeXBlIGZyb20gXCIuLi92ZXJpZnkvbWV0YXZhcmlhYmxlR2l2ZW5NZXRhVHlwZVwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZmlyc3QsIHB1c2ggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IGRlY2xhcmF0aW9uTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvZnJhbWUvZGVjbGFyYXRpb25cIiksXG4gICAgICBtZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9mcmFtZS9tZXRhdmFyaWFibGVcIik7XG5cbmNvbnN0IHZlcmlmeUZyYW1lRnVuY3Rpb25zID0gW1xuICB2ZXJpZnlEZXJpdmVkRnJhbWUsXG4gIHZlcmlmeVN0YXRlZEZyYW1lXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlGcmFtZShmcmFtZU5vZGUsIGZyYW1lcywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGZyYW1lVmVyaWZpZWQ7XG5cbiAgY29uc3QgZnJhbWVTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGZyYW1lTm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gLCBmcmFtZU5vZGUpO1xuXG4gIGZyYW1lVmVyaWZpZWQgPSB2ZXJpZnlGcmFtZUZ1bmN0aW9ucy5zb21lKCh2ZXJpZnlGcmFtZUZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgZnJhbWVWZXJpZmllZCA9IHZlcmlmeUZyYW1lRnVuY3Rpb24oZnJhbWVOb2RlLCBmcmFtZXMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChmcmFtZVZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChmcmFtZVZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gLCBmcmFtZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGZyYW1lVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeURlcml2ZWRGcmFtZShmcmFtZU5vZGUsIGZyYW1lcywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGRlcml2ZWRGcmFtZVZlcmlmaWVkO1xuXG4gIGlmICghc3RhdGVkKSB7XG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGZyYW1lTm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lLi4uYCwgZnJhbWVOb2RlKTtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uTm9kZXMgPSBkZWNsYXJhdGlvbk5vZGVzUXVlcnkoZnJhbWVOb2RlKSxcbiAgICAgICAgICBkZWNsYXJhdGlvbk5vZGVzTGVuZ3RoID0gZGVjbGFyYXRpb25Ob2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoZGVjbGFyYXRpb25Ob2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZXMgPSBtZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5KGZyYW1lTm9kZSksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2Rlc0xlbmd0aCA9IG1ldGF2YXJpYWJsZU5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVzTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0RGVjbGFyYXRpb25Ob2RlID0gZmlyc3QoZGVjbGFyYXRpb25Ob2RlcyksXG4gICAgICAgICAgICAgIGRlY2xhcmF0aW9uTm9kZSA9IGZpcnN0RGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgZGVjbGFyYXRpb25zID0gW10sXG4gICAgICAgICAgICAgIGRlY2xhcmF0aW9uVmVyaWZpZWQgPSB2ZXJpZnlEZWNsYXJhdGlvbihkZWNsYXJhdGlvbk5vZGUsIGRlY2xhcmF0aW9ucywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIGlmIChkZWNsYXJhdGlvblZlcmlmaWVkKSB7XG4gICAgICAgICAgY29uc3QgZnJhbWUgPSBGcmFtZS5mcm9tRGVjbGFyYXRpb25zKGRlY2xhcmF0aW9ucyk7XG5cbiAgICAgICAgICBmcmFtZXMucHVzaChmcmFtZSk7XG5cbiAgICAgICAgICBkZXJpdmVkRnJhbWVWZXJpZmllZCA9IHRydWU7IC8vL1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZSAnJHtmcmFtZVN0cmluZ30nIGRlcml2ZWQgZnJhbWUgbXVzdCBubyBzcHJlYWQgbWV0YXZhcmlhYmxlcy5gLCBmcmFtZU5vZGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZSAnJHtmcmFtZVN0cmluZ30nIGRlcml2ZWQgZnJhbWUgbXVzdCBoYXZlIG9uZSBhbmQgb25seSBvbmUgZGVjbGFyYXRpb24uYCwgZnJhbWVOb2RlKTtcbiAgICB9XG5cbiAgICBpZiAoZGVyaXZlZEZyYW1lVmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZGVyaXZlZCBmcmFtZS5gLCBmcmFtZU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZXJpdmVkRnJhbWVWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVkRnJhbWUoZnJhbWVOb2RlLCBmcmFtZXMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZWRGcmFtZVZlcmlmaWVkO1xuXG4gIGlmIChzdGF0ZWQpIHtcbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoZnJhbWVOb2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZS4uLmAsIGZyYW1lTm9kZSk7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvbnMgPSBbXSxcbiAgICAgICAgICBkZWNsYXJhdGlvbk5vZGVzID0gZGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5KGZyYW1lTm9kZSksXG4gICAgICAgICAgZGVjbGFyYXRpb25zVmVyaWZpZWQgPSBkZWNsYXJhdGlvbk5vZGVzLmV2ZXJ5KChkZWNsYXJhdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlY2xhcmF0aW9uVmVyaWZpZWQgPSB2ZXJpZnlEZWNsYXJhdGlvbihkZWNsYXJhdGlvbk5vZGUsIGRlY2xhcmF0aW9ucywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gZGVjbGFyYXRpb25WZXJpZmllZDtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmIChkZWNsYXJhdGlvbnNWZXJpZmllZCkge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZXMgPSBtZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5KGZyYW1lTm9kZSksXG4gICAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGVzVmVyaWZpZWQgPSBtZXRhdmFyaWFibGVOb2Rlcy5ldmVyeSgobWV0YXZhcmlhYmxlTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVWZXJpZmllZCA9IHZlcmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGVOb2RlLCBkZWNsYXJhdGlvbnMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVkO1xuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVzVmVyaWZpZWQpIHtcbiAgICAgICAgICAgICAgY29uc3QgZnJhbWUgPSBGcmFtZS5mcm9tRGVjbGFyYXRpb25zKGRlY2xhcmF0aW9ucyk7XG5cbiAgICAgICAgICAgICAgZnJhbWVzLnB1c2goZnJhbWUpO1xuXG4gICAgICAgICAgICAgIHN0YXRlZEZyYW1lVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgIGlmIChzdGF0ZWRGcmFtZVZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZS5gLCBmcmFtZU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZWRGcmFtZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgZGVjbGFyYXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgbWV0YVR5cGUgPSBmcmFtZU1ldGFUeXBlLCAvLy9cbiAgICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gdmVyaWZ5TWV0YXZhcmlhYmxlR2l2ZW5NZXRhVHlwZShtZXRhdmFyaWFibGVOb2RlLCBtZXRhVHlwZSwgbG9jYWxDb250ZXh0KTtcblxuICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZWRHaXZlbk1ldGFUeXBlKSB7XG4gICAgY29uc3QganVkZ2VtZW50ID0gbG9jYWxDb250ZXh0LmZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAoanVkZ2VtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBqdWRnZW1lbnREZWNsYXJhdGlvbnMgPSBqdWRnZW1lbnQuZ2V0RGVjbGFyYXRpb25zKCk7XG5cbiAgICAgIHB1c2goZGVjbGFyYXRpb25zLCBqdWRnZW1lbnREZWNsYXJhdGlvbnMpO1xuXG4gICAgICBtZXRhdmFyaWFibGVWZXJpZmllZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVGhpcyBpcyBubyBqdWRnZW1lbnQgZm9yIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCwgbWV0YXZhcmlhYmxlTm9kZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlVmVyaWZpZWQ7XG59Il0sIm5hbWVzIjpbInZlcmlmeUZyYW1lIiwiZGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVzUXVlcnkiLCJ2ZXJpZnlGcmFtZUZ1bmN0aW9ucyIsInZlcmlmeURlcml2ZWRGcmFtZSIsInZlcmlmeVN0YXRlZEZyYW1lIiwiZnJhbWVOb2RlIiwiZnJhbWVzIiwic3RhdGVkIiwibG9jYWxDb250ZXh0IiwiZnJhbWVWZXJpZmllZCIsImZyYW1lU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJzb21lIiwidmVyaWZ5RnJhbWVGdW5jdGlvbiIsImRlYnVnIiwiZGVyaXZlZEZyYW1lVmVyaWZpZWQiLCJkZWNsYXJhdGlvbk5vZGVzIiwiZGVjbGFyYXRpb25Ob2Rlc0xlbmd0aCIsImxlbmd0aCIsIm1ldGF2YXJpYWJsZU5vZGVzIiwibWV0YXZhcmlhYmxlTm9kZXNMZW5ndGgiLCJmaXJzdERlY2xhcmF0aW9uTm9kZSIsImZpcnN0IiwiZGVjbGFyYXRpb25Ob2RlIiwiZGVjbGFyYXRpb25zIiwiZGVjbGFyYXRpb25WZXJpZmllZCIsInZlcmlmeURlY2xhcmF0aW9uIiwiZnJhbWUiLCJGcmFtZSIsImZyb21EZWNsYXJhdGlvbnMiLCJwdXNoIiwic3RhdGVkRnJhbWVWZXJpZmllZCIsImRlY2xhcmF0aW9uc1ZlcmlmaWVkIiwiZXZlcnkiLCJtZXRhdmFyaWFibGVzVmVyaWZpZWQiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlVmVyaWZpZWQiLCJ2ZXJpZnlNZXRhdmFyaWFibGUiLCJtZXRhVHlwZSIsImZyYW1lTWV0YVR5cGUiLCJtZXRhdmFyaWFibGVWZXJpZmllZEdpdmVuTWV0YVR5cGUiLCJ2ZXJpZnlNZXRhdmFyaWFibGVHaXZlbk1ldGFUeXBlIiwianVkZ2VtZW50IiwiZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTm9kZSIsImp1ZGdlbWVudERlY2xhcmF0aW9ucyIsImdldERlY2xhcmF0aW9ucyIsIm1ldGF2YXJpYWJsZVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0JBOzs7ZUFBd0JBOzs7NERBaEJOOzZEQUNRO2tFQUNJO2dGQUNjO3FCQUVqQjtxQkFDQzs7Ozs7O0FBRTVCLElBQU1DLHdCQUF3QkMsSUFBQUEsaUJBQVUsRUFBQyx1QkFDbkNDLHlCQUF5QkQsSUFBQUEsaUJBQVUsRUFBQztBQUUxQyxJQUFNRSx1QkFBdUI7SUFDM0JDO0lBQ0FDO0NBQ0Q7QUFFYyxTQUFTTixZQUFZTyxTQUFTLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxZQUFZO0lBQ3pFLElBQUlDO0lBRUosSUFBTUMsY0FBY0YsYUFBYUcsWUFBWSxDQUFDTjtJQUU5Q0csYUFBYUksS0FBSyxDQUFDLEFBQUMsa0JBQTZCLE9BQVpGLGFBQVksZUFBYUw7SUFFOURJLGdCQUFnQlAs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