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
var _query = require("../utilities/query");
var _name = require("../utilities/name");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var metavariableNodeQuery = (0, _query.nodeQuery)("/frame/metavariable"), declarationNodesQuery = (0, _query.nodesQuery)("/frame/declaration"), metavariableNodesQuery = (0, _query.nodesQuery)("/frame/metavariable");
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
            var metavariableNode = metavariableNodeQuery(frameNode);
            if (metavariableNode !== null) {
                var metaType = _frame1.default, metavariableVerifiedGivenMetaType = (0, _metavariableGivenMetaType.default)(metavariableNode, metaType, localContext);
                if (metavariableVerifiedGivenMetaType) {
                    var frame = _frame.default.fromMetavariableNode(metavariableNode);
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
    var metaType = _frame1.default, metavariableVerifiedGivenMetaType = (0, _metavariableGivenMetaType.default)(metavariableNode, metaType, localContext);
    if (metavariableVerifiedGivenMetaType) {
        var metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), judgement = localContext.findJudgementByMetavariableName(metavariableName);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZnJhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBGcmFtZSBmcm9tIFwiLi4vZnJhbWVcIjtcbmltcG9ydCBmcmFtZU1ldGFUeXBlIGZyb20gXCIuLi9tZXRhVHlwZS9mcmFtZVwiO1xuaW1wb3J0IHZlcmlmeURlY2xhcmF0aW9uIGZyb20gXCIuLi92ZXJpZnkvZGVjbGFyYXRpb25cIjtcbmltcG9ydCB2ZXJpZnlNZXRhdmFyaWFibGVHaXZlbk1ldGFUeXBlIGZyb20gXCIuL21ldGF2YXJpYWJsZUdpdmVuTWV0YVR5cGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9uYW1lXCI7XG5cbmNvbnN0IG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9mcmFtZS9tZXRhdmFyaWFibGVcIiksXG4gICAgICBkZWNsYXJhdGlvbk5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2ZyYW1lL2RlY2xhcmF0aW9uXCIpLFxuICAgICAgbWV0YXZhcmlhYmxlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvZnJhbWUvbWV0YXZhcmlhYmxlXCIpO1xuXG5jb25zdCB2ZXJpZnlGcmFtZUZ1bmN0aW9ucyA9IFtcbiAgdmVyaWZ5RGVyaXZlZEZyYW1lLFxuICB2ZXJpZnlTdGF0ZWRGcmFtZVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5RnJhbWUoZnJhbWVOb2RlLCBmcmFtZXMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBmcmFtZVZlcmlmaWVkO1xuXG4gIGNvbnN0IGZyYW1lU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhmcmFtZU5vZGUpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCwgZnJhbWVOb2RlKTtcblxuICBmcmFtZVZlcmlmaWVkID0gdmVyaWZ5RnJhbWVGdW5jdGlvbnMuc29tZSgodmVyaWZ5RnJhbWVGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IGZyYW1lVmVyaWZpZWQgPSB2ZXJpZnlGcmFtZUZ1bmN0aW9uKGZyYW1lTm9kZSwgZnJhbWVzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoZnJhbWVWZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBpZiAoZnJhbWVWZXJpZmllZCkge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCwgZnJhbWVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlEZXJpdmVkRnJhbWUoZnJhbWVOb2RlLCBmcmFtZXMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBkZXJpdmVkRnJhbWVWZXJpZmllZDtcblxuICBpZiAoIXN0YXRlZCkge1xuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhmcmFtZU5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZGVyaXZlZCBmcmFtZS4uLmAsIGZyYW1lTm9kZSk7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvbnMgPSBbXSxcbiAgICAgICAgICBkZWNsYXJhdGlvbk5vZGVzID0gZGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5KGZyYW1lTm9kZSksXG4gICAgICAgICAgZGVjbGFyYXRpb25zVmVyaWZpZWQgPSBkZWNsYXJhdGlvbk5vZGVzLmV2ZXJ5KChkZWNsYXJhdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlY2xhcmF0aW9uVmVyaWZpZWQgPSB2ZXJpZnlEZWNsYXJhdGlvbihkZWNsYXJhdGlvbk5vZGUsIGRlY2xhcmF0aW9ucywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAoZGVjbGFyYXRpb25WZXJpZmllZCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmIChkZWNsYXJhdGlvbnNWZXJpZmllZCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZXMgPSBtZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5KGZyYW1lTm9kZSksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVzVmVyaWZpZWQgPSBtZXRhdmFyaWFibGVOb2Rlcy5ldmVyeSgobWV0YXZhcmlhYmxlTm9kZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVWZXJpZmllZCA9IHZlcmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGVOb2RlLCBkZWNsYXJhdGlvbnMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlc1ZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGZyYW1lID0gRnJhbWUuZnJvbURlY2xhcmF0aW9ucyhkZWNsYXJhdGlvbnMpO1xuXG4gICAgICAgIGZyYW1lcy5wdXNoKGZyYW1lKTtcblxuICAgICAgICBkZXJpdmVkRnJhbWVWZXJpZmllZCA9IHRydWU7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkZXJpdmVkRnJhbWVWZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lLmAsIGZyYW1lTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRlcml2ZWRGcmFtZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZWRGcmFtZShmcmFtZU5vZGUsIGZyYW1lcywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlZEZyYW1lVmVyaWZpZWQ7XG5cbiAgaWYgKHN0YXRlZCkge1xuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhmcmFtZU5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lLi4uYCwgZnJhbWVOb2RlKTtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uTm9kZXMgPSBkZWNsYXJhdGlvbk5vZGVzUXVlcnkoZnJhbWVOb2RlKSxcbiAgICAgICAgICBkZWNsYXJhdGlvbk5vZGVzTGVuZ3RoID0gZGVjbGFyYXRpb25Ob2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoZGVjbGFyYXRpb25Ob2Rlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShmcmFtZU5vZGUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBtZXRhVHlwZSA9IGZyYW1lTWV0YVR5cGUsIC8vL1xuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVWZXJpZmllZEdpdmVuTWV0YVR5cGUgPSB2ZXJpZnlNZXRhdmFyaWFibGVHaXZlbk1ldGFUeXBlKG1ldGF2YXJpYWJsZU5vZGUsIG1ldGFUeXBlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIGlmIChtZXRhdmFyaWFibGVWZXJpZmllZEdpdmVuTWV0YVR5cGUpIHtcbiAgICAgICAgICBjb25zdCBmcmFtZSA9IEZyYW1lLmZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgZnJhbWVzLnB1c2goZnJhbWUpO1xuXG4gICAgICAgICAgc3RhdGVkRnJhbWVWZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2FsQ29udGV4dC50cmFjZShgVGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lIGNhbm5vdCBoYXZlIG1vcmUgdGhhbiBvbmUgbWV0YXZhcmlhYmxlLmAsIGZyYW1lTm9kZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2FsQ29udGV4dC50cmFjZShgVGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lIGNhbm5vdCBoYXZlIGRlY2xhcmF0aW9ucy5gLCBmcmFtZU5vZGUpO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZWRGcmFtZVZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZS5gLCBmcmFtZU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZWRGcmFtZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgZGVjbGFyYXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgY29uc3QgbWV0YVR5cGUgPSBmcmFtZU1ldGFUeXBlLCAvLy9cbiAgICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gdmVyaWZ5TWV0YXZhcmlhYmxlR2l2ZW5NZXRhVHlwZShtZXRhdmFyaWFibGVOb2RlLCBtZXRhVHlwZSwgbG9jYWxDb250ZXh0KTtcblxuICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZWRHaXZlbk1ldGFUeXBlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBqdWRnZW1lbnQgPSBsb2NhbENvbnRleHQuZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGlmIChqdWRnZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRlY2xhcmF0aW9uID0ganVkZ2VtZW50LmdldERlY2xhcmF0aW9uKCk7XG5cbiAgICAgIGRlY2xhcmF0aW9ucy5wdXNoKGRlY2xhcmF0aW9uKTtcblxuICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhbENvbnRleHQudHJhY2UoYFRoZXJlIGlzIG5vIGp1ZGdlbWVudCBmb3IgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gLCBtZXRhdmFyaWFibGVOb2RlKTtcbiAgICB9XG4gIH1cblxuICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlVmVyaWZpZWQ7XG59Il0sIm5hbWVzIjpbInZlcmlmeUZyYW1lIiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVzUXVlcnkiLCJ2ZXJpZnlGcmFtZUZ1bmN0aW9ucyIsInZlcmlmeURlcml2ZWRGcmFtZSIsInZlcmlmeVN0YXRlZEZyYW1lIiwiZnJhbWVOb2RlIiwiZnJhbWVzIiwic3RhdGVkIiwibG9jYWxDb250ZXh0IiwiZnJhbWVWZXJpZmllZCIsImZyYW1lU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJzb21lIiwidmVyaWZ5RnJhbWVGdW5jdGlvbiIsImRlYnVnIiwiZGVyaXZlZEZyYW1lVmVyaWZpZWQiLCJkZWNsYXJhdGlvbnMiLCJkZWNsYXJhdGlvbk5vZGVzIiwiZGVjbGFyYXRpb25zVmVyaWZpZWQiLCJldmVyeSIsImRlY2xhcmF0aW9uTm9kZSIsImRlY2xhcmF0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlEZWNsYXJhdGlvbiIsIm1ldGF2YXJpYWJsZU5vZGVzIiwibWV0YXZhcmlhYmxlc1ZlcmlmaWVkIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZVZlcmlmaWVkIiwidmVyaWZ5TWV0YXZhcmlhYmxlIiwiZnJhbWUiLCJGcmFtZSIsImZyb21EZWNsYXJhdGlvbnMiLCJwdXNoIiwic3RhdGVkRnJhbWVWZXJpZmllZCIsImRlY2xhcmF0aW9uTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJtZXRhVHlwZSIsImZyYW1lTWV0YVR5cGUiLCJtZXRhdmFyaWFibGVWZXJpZmllZEdpdmVuTWV0YVR5cGUiLCJ2ZXJpZnlNZXRhdmFyaWFibGVHaXZlbk1ldGFUeXBlIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJtZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIiwianVkZ2VtZW50IiwiZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImRlY2xhcmF0aW9uIiwiZ2V0RGVjbGFyYXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW1CQTs7O2VBQXdCQTs7OzREQWpCTjs2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