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
var _metavariableGivenMetaType = /*#__PURE__*/ _interop_require_default(require("./metavariableGivenMetaType"));
var _metaType = require("../metaType");
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
    localContext.trace("Verifying the '".concat(frameString, "' frame..."));
    frameVerified = verifyFrameFunctions.some(function(verifyFrameFunction) {
        var frameVerified = verifyFrameFunction(frameNode, frames, stated, localContext);
        if (frameVerified) {
            return true;
        }
    });
    if (frameVerified) {
        localContext.debug("...verified the '".concat(frameString, "' frame."));
    }
    return frameVerified;
}
function verifyDerivedFrame(frameNode, frames, stated, localContext) {
    var derivedFrameVerified;
    if (!stated) {
        var frameString = localContext.nodeAsString(frameNode);
        localContext.trace("Verifying the '".concat(frameString, "' derived frame..."));
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
            localContext.debug("...verified the '".concat(frameString, "' derived frame."));
        }
    }
    return derivedFrameVerified;
}
function verifyStatedFrame(frameNode, frames, stated, localContext) {
    var statedFrameVerified;
    if (stated) {
        var frameString = localContext.nodeAsString(frameNode);
        localContext.trace("Verifying the '".concat(frameString, "' stated frame..."));
        var declarationNodes = declarationNodesQuery(frameNode), declarationNodesLength = declarationNodes.length;
        if (declarationNodesLength === 0) {
            var metavariableNode = metavariableNodeQuery(frameNode);
            if (metavariableNode !== null) {
                var metaType = _metaType.frameMetaType, metavariableVerifiedGivenMetaType = (0, _metavariableGivenMetaType.default)(metavariableNode, metaType, localContext);
                if (metavariableVerifiedGivenMetaType) {
                    var frame = _frame.default.fromMetavariableNode(metavariableNode);
                    frames.push(frame);
                    statedFrameVerified = true;
                }
            } else {
                localContext.trace("The '".concat(frameString, "' stated frame cannot have more than one metavariable."));
            }
        } else {
            localContext.trace("The '".concat(frameString, "' stated frame cannot have declarations."));
        }
        if (statedFrameVerified) {
            localContext.debug("...verified the '".concat(frameString, "' stated frame."));
        }
    }
    return statedFrameVerified;
}
function verifyMetavariable(metavariableNode, declarations, localContext) {
    var metavariableVerified = false;
    var metavariableString = localContext.nodeAsString(metavariableNode);
    localContext.trace("Verifying the '".concat(metavariableString, "' metavariable..."));
    var metaType = _metaType.frameMetaType, metavariableVerifiedGivenMetaType = (0, _metavariableGivenMetaType.default)(metavariableNode, metaType, localContext);
    if (metavariableVerifiedGivenMetaType) {
        var metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), judgement = localContext.findJudgementByMetavariableName(metavariableName);
        if (judgement !== null) {
            var declaration = judgement.getDeclaration();
            declarations.push(declaration);
            metavariableVerified = true;
        } else {
            localContext.trace("There is no judgement for the '".concat(metavariableString, "' metavariable."));
        }
    }
    if (metavariableVerified) {
        localContext.debug("...verified the '".concat(metavariableString, "' metavariable."));
    }
    return metavariableVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZnJhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBGcmFtZSBmcm9tIFwiLi4vZnJhbWVcIjtcbmltcG9ydCB2ZXJpZnlEZWNsYXJhdGlvbiBmcm9tIFwiLi4vdmVyaWZ5L2RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgdmVyaWZ5TWV0YXZhcmlhYmxlR2l2ZW5NZXRhVHlwZSBmcm9tIFwiLi9tZXRhdmFyaWFibGVHaXZlbk1ldGFUeXBlXCI7XG5cbmltcG9ydCB7IGZyYW1lTWV0YVR5cGUgfSBmcm9tIFwiLi4vbWV0YVR5cGVcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbmFtZVwiO1xuXG5jb25zdCBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWUvbWV0YXZhcmlhYmxlXCIpLFxuICAgICAgZGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9mcmFtZS9kZWNsYXJhdGlvblwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2ZyYW1lL21ldGF2YXJpYWJsZVwiKTtcblxuY29uc3QgdmVyaWZ5RnJhbWVGdW5jdGlvbnMgPSBbXG4gIHZlcmlmeURlcml2ZWRGcmFtZSxcbiAgdmVyaWZ5U3RhdGVkRnJhbWVcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeUZyYW1lKGZyYW1lTm9kZSwgZnJhbWVzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgZnJhbWVWZXJpZmllZDtcblxuICBjb25zdCBmcmFtZVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoZnJhbWVOb2RlKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gIGZyYW1lVmVyaWZpZWQgPSB2ZXJpZnlGcmFtZUZ1bmN0aW9ucy5zb21lKCh2ZXJpZnlGcmFtZUZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgZnJhbWVWZXJpZmllZCA9IHZlcmlmeUZyYW1lRnVuY3Rpb24oZnJhbWVOb2RlLCBmcmFtZXMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChmcmFtZVZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChmcmFtZVZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlEZXJpdmVkRnJhbWUoZnJhbWVOb2RlLCBmcmFtZXMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBkZXJpdmVkRnJhbWVWZXJpZmllZDtcblxuICBpZiAoIXN0YXRlZCkge1xuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhmcmFtZU5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZGVyaXZlZCBmcmFtZS4uLmApO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25zID0gW10sXG4gICAgICAgICAgZGVjbGFyYXRpb25Ob2RlcyA9IGRlY2xhcmF0aW9uTm9kZXNRdWVyeShmcmFtZU5vZGUpLFxuICAgICAgICAgIGRlY2xhcmF0aW9uc1ZlcmlmaWVkID0gZGVjbGFyYXRpb25Ob2Rlcy5ldmVyeSgoZGVjbGFyYXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWNsYXJhdGlvblZlcmlmaWVkID0gdmVyaWZ5RGVjbGFyYXRpb24oZGVjbGFyYXRpb25Ob2RlLCBkZWNsYXJhdGlvbnMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKGRlY2xhcmF0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoZGVjbGFyYXRpb25zVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVzID0gbWV0YXZhcmlhYmxlTm9kZXNRdWVyeShmcmFtZU5vZGUpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlc1ZlcmlmaWVkID0gbWV0YXZhcmlhYmxlTm9kZXMuZXZlcnkoKG1ldGF2YXJpYWJsZU5vZGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgZGVjbGFyYXRpb25zLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVWZXJpZmllZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZXNWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBmcmFtZSA9IEZyYW1lLmZyb21EZWNsYXJhdGlvbnMoZGVjbGFyYXRpb25zKTtcblxuICAgICAgICBmcmFtZXMucHVzaChmcmFtZSk7XG5cbiAgICAgICAgZGVyaXZlZEZyYW1lVmVyaWZpZWQgPSB0cnVlOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGVyaXZlZEZyYW1lVmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZGVyaXZlZCBmcmFtZS5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVyaXZlZEZyYW1lVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlZEZyYW1lKGZyYW1lTm9kZSwgZnJhbWVzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVkRnJhbWVWZXJpZmllZDtcblxuICBpZiAoc3RhdGVkKSB7XG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGZyYW1lTm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUuLi5gKTtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uTm9kZXMgPSBkZWNsYXJhdGlvbk5vZGVzUXVlcnkoZnJhbWVOb2RlKSxcbiAgICAgICAgICBkZWNsYXJhdGlvbk5vZGVzTGVuZ3RoID0gZGVjbGFyYXRpb25Ob2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoZGVjbGFyYXRpb25Ob2Rlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShmcmFtZU5vZGUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBtZXRhVHlwZSA9IGZyYW1lTWV0YVR5cGUsIC8vL1xuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVWZXJpZmllZEdpdmVuTWV0YVR5cGUgPSB2ZXJpZnlNZXRhdmFyaWFibGVHaXZlbk1ldGFUeXBlKG1ldGF2YXJpYWJsZU5vZGUsIG1ldGFUeXBlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIGlmIChtZXRhdmFyaWFibGVWZXJpZmllZEdpdmVuTWV0YVR5cGUpIHtcbiAgICAgICAgICBjb25zdCBmcmFtZSA9IEZyYW1lLmZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgZnJhbWVzLnB1c2goZnJhbWUpO1xuXG4gICAgICAgICAgc3RhdGVkRnJhbWVWZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2FsQ29udGV4dC50cmFjZShgVGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lIGNhbm5vdCBoYXZlIG1vcmUgdGhhbiBvbmUgbWV0YXZhcmlhYmxlLmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhbENvbnRleHQudHJhY2UoYFRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZSBjYW5ub3QgaGF2ZSBkZWNsYXJhdGlvbnMuYCk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlZEZyYW1lVmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lLmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZWRGcmFtZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgZGVjbGFyYXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgY29uc3QgbWV0YVR5cGUgPSBmcmFtZU1ldGFUeXBlLCAvLy9cbiAgICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gdmVyaWZ5TWV0YXZhcmlhYmxlR2l2ZW5NZXRhVHlwZShtZXRhdmFyaWFibGVOb2RlLCBtZXRhVHlwZSwgbG9jYWxDb250ZXh0KTtcblxuICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZWRHaXZlbk1ldGFUeXBlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBqdWRnZW1lbnQgPSBsb2NhbENvbnRleHQuZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGlmIChqdWRnZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRlY2xhcmF0aW9uID0ganVkZ2VtZW50LmdldERlY2xhcmF0aW9uKCk7XG5cbiAgICAgIGRlY2xhcmF0aW9ucy5wdXNoKGRlY2xhcmF0aW9uKTtcblxuICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhbENvbnRleHQudHJhY2UoYFRoZXJlIGlzIG5vIGp1ZGdlbWVudCBmb3IgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG4gIH1cblxuICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlVmVyaWZpZWQ7XG59Il0sIm5hbWVzIjpbInZlcmlmeUZyYW1lIiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVzUXVlcnkiLCJ2ZXJpZnlGcmFtZUZ1bmN0aW9ucyIsInZlcmlmeURlcml2ZWRGcmFtZSIsInZlcmlmeVN0YXRlZEZyYW1lIiwiZnJhbWVOb2RlIiwiZnJhbWVzIiwic3RhdGVkIiwibG9jYWxDb250ZXh0IiwiZnJhbWVWZXJpZmllZCIsImZyYW1lU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJzb21lIiwidmVyaWZ5RnJhbWVGdW5jdGlvbiIsImRlYnVnIiwiZGVyaXZlZEZyYW1lVmVyaWZpZWQiLCJkZWNsYXJhdGlvbnMiLCJkZWNsYXJhdGlvbk5vZGVzIiwiZGVjbGFyYXRpb25zVmVyaWZpZWQiLCJldmVyeSIsImRlY2xhcmF0aW9uTm9kZSIsImRlY2xhcmF0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlEZWNsYXJhdGlvbiIsIm1ldGF2YXJpYWJsZU5vZGVzIiwibWV0YXZhcmlhYmxlc1ZlcmlmaWVkIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZVZlcmlmaWVkIiwidmVyaWZ5TWV0YXZhcmlhYmxlIiwiZnJhbWUiLCJGcmFtZSIsImZyb21EZWNsYXJhdGlvbnMiLCJwdXNoIiwic3RhdGVkRnJhbWVWZXJpZmllZCIsImRlY2xhcmF0aW9uTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJtZXRhVHlwZSIsImZyYW1lTWV0YVR5cGUiLCJtZXRhdmFyaWFibGVWZXJpZmllZEdpdmVuTWV0YVR5cGUiLCJ2ZXJpZnlNZXRhdmFyaWFibGVHaXZlbk1ldGFUeXBlIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJtZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIiwianVkZ2VtZW50IiwiZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImRlY2xhcmF0aW9uIiwiZ2V0RGVjbGFyYXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW1CQTs7O2VBQXdCQTs7OzREQWpCTjtrRUFDWTtnRkFDYzt3QkFFZDtxQkFDUTtvQkFDZTs7Ozs7O0FBRXJELElBQU1DLHdCQUF3QkMsSUFBQUEsZ0JBQVMsRUFBQyx3QkFDbENDLHdCQUF3QkMsSUFBQUEsaUJBQVUsRUFBQyx1QkFDbkNDLHlCQUF5QkQsSUFBQUEsaUJBQVUsRUFBQztBQUUxQyxJ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