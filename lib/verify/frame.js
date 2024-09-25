"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
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
Object.assign(_shim.default, {
    verifyFrame: verifyFrame
});
var _default = verifyFrame;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZnJhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5pbXBvcnQgRnJhbWUgZnJvbSBcIi4uL2ZyYW1lXCI7XG5pbXBvcnQgZnJhbWVNZXRhVHlwZSBmcm9tIFwiLi4vbWV0YVR5cGUvZnJhbWVcIjtcbmltcG9ydCB2ZXJpZnlEZWNsYXJhdGlvbiBmcm9tIFwiLi4vdmVyaWZ5L2RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgdmVyaWZ5TWV0YXZhcmlhYmxlR2l2ZW5NZXRhVHlwZSBmcm9tIFwiLi9tZXRhdmFyaWFibGVHaXZlbk1ldGFUeXBlXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbmFtZVwiO1xuXG5jb25zdCBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWUvbWV0YXZhcmlhYmxlXCIpLFxuICAgICAgZGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9mcmFtZS9kZWNsYXJhdGlvblwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2ZyYW1lL21ldGF2YXJpYWJsZVwiKTtcblxuY29uc3QgdmVyaWZ5RnJhbWVGdW5jdGlvbnMgPSBbXG4gIHZlcmlmeURlcml2ZWRGcmFtZSxcbiAgdmVyaWZ5U3RhdGVkRnJhbWVcbl07XG5cbmZ1bmN0aW9uIHZlcmlmeUZyYW1lKGZyYW1lTm9kZSwgZnJhbWVzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgZnJhbWVWZXJpZmllZDtcblxuICBjb25zdCBmcmFtZVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoZnJhbWVOb2RlKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmAsIGZyYW1lTm9kZSk7XG5cbiAgZnJhbWVWZXJpZmllZCA9IHZlcmlmeUZyYW1lRnVuY3Rpb25zLnNvbWUoKHZlcmlmeUZyYW1lRnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCBmcmFtZVZlcmlmaWVkID0gdmVyaWZ5RnJhbWVGdW5jdGlvbihmcmFtZU5vZGUsIGZyYW1lcywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKGZyYW1lVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGZyYW1lVmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmAsIGZyYW1lTm9kZSk7XG4gIH1cblxuICByZXR1cm4gZnJhbWVWZXJpZmllZDtcbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIHZlcmlmeUZyYW1lXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdmVyaWZ5RnJhbWU7XG5cbmZ1bmN0aW9uIHZlcmlmeURlcml2ZWRGcmFtZShmcmFtZU5vZGUsIGZyYW1lcywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGRlcml2ZWRGcmFtZVZlcmlmaWVkO1xuXG4gIGlmICghc3RhdGVkKSB7XG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGZyYW1lTm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lLi4uYCwgZnJhbWVOb2RlKTtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9ucyA9IFtdLFxuICAgICAgICAgIGRlY2xhcmF0aW9uTm9kZXMgPSBkZWNsYXJhdGlvbk5vZGVzUXVlcnkoZnJhbWVOb2RlKSxcbiAgICAgICAgICBkZWNsYXJhdGlvbnNWZXJpZmllZCA9IGRlY2xhcmF0aW9uTm9kZXMuZXZlcnkoKGRlY2xhcmF0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVjbGFyYXRpb25WZXJpZmllZCA9IHZlcmlmeURlY2xhcmF0aW9uKGRlY2xhcmF0aW9uTm9kZSwgZGVjbGFyYXRpb25zLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChkZWNsYXJhdGlvblZlcmlmaWVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKGRlY2xhcmF0aW9uc1ZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlcyA9IG1ldGF2YXJpYWJsZU5vZGVzUXVlcnkoZnJhbWVOb2RlKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZXNWZXJpZmllZCA9IG1ldGF2YXJpYWJsZU5vZGVzLmV2ZXJ5KChtZXRhdmFyaWFibGVOb2RlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gdmVyaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZU5vZGUsIGRlY2xhcmF0aW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVzVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgZnJhbWUgPSBGcmFtZS5mcm9tRGVjbGFyYXRpb25zKGRlY2xhcmF0aW9ucyk7XG5cbiAgICAgICAgZnJhbWVzLnB1c2goZnJhbWUpO1xuXG4gICAgICAgIGRlcml2ZWRGcmFtZVZlcmlmaWVkID0gdHJ1ZTsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRlcml2ZWRGcmFtZVZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGRlcml2ZWQgZnJhbWUuYCwgZnJhbWVOb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVyaXZlZEZyYW1lVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlZEZyYW1lKGZyYW1lTm9kZSwgZnJhbWVzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVkRnJhbWVWZXJpZmllZDtcblxuICBpZiAoc3RhdGVkKSB7XG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGZyYW1lTm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUuLi5gLCBmcmFtZU5vZGUpO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25Ob2RlcyA9IGRlY2xhcmF0aW9uTm9kZXNRdWVyeShmcmFtZU5vZGUpLFxuICAgICAgICAgIGRlY2xhcmF0aW9uTm9kZXNMZW5ndGggPSBkZWNsYXJhdGlvbk5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChkZWNsYXJhdGlvbk5vZGVzTGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KGZyYW1lTm9kZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG1ldGFUeXBlID0gZnJhbWVNZXRhVHlwZSwgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IHZlcmlmeU1ldGF2YXJpYWJsZUdpdmVuTWV0YVR5cGUobWV0YXZhcmlhYmxlTm9kZSwgbWV0YVR5cGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVkR2l2ZW5NZXRhVHlwZSkge1xuICAgICAgICAgIGNvbnN0IGZyYW1lID0gRnJhbWUuZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICBmcmFtZXMucHVzaChmcmFtZSk7XG5cbiAgICAgICAgICBzdGF0ZWRGcmFtZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYWxDb250ZXh0LnRyYWNlKGBUaGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUgY2Fubm90IGhhdmUgbW9yZSB0aGFuIG9uZSBtZXRhdmFyaWFibGUuYCwgZnJhbWVOb2RlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYWxDb250ZXh0LnRyYWNlKGBUaGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUgY2Fubm90IGhhdmUgZGVjbGFyYXRpb25zLmAsIGZyYW1lTm9kZSk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlZEZyYW1lVmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lLmAsIGZyYW1lTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlZEZyYW1lVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGVOb2RlLCBkZWNsYXJhdGlvbnMsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gLCBtZXRhdmFyaWFibGVOb2RlKTtcblxuICBjb25zdCBtZXRhVHlwZSA9IGZyYW1lTWV0YVR5cGUsIC8vL1xuICAgICAgICBtZXRhdmFyaWFibGVWZXJpZmllZEdpdmVuTWV0YVR5cGUgPSB2ZXJpZnlNZXRhdmFyaWFibGVHaXZlbk1ldGFUeXBlKG1ldGF2YXJpYWJsZU5vZGUsIG1ldGFUeXBlLCBsb2NhbENvbnRleHQpO1xuXG4gIGlmIChtZXRhdmFyaWFibGVWZXJpZmllZEdpdmVuTWV0YVR5cGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGp1ZGdlbWVudCA9IGxvY2FsQ29udGV4dC5maW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKGp1ZGdlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGVjbGFyYXRpb24gPSBqdWRnZW1lbnQuZ2V0RGVjbGFyYXRpb24oKTtcblxuICAgICAgZGVjbGFyYXRpb25zLnB1c2goZGVjbGFyYXRpb24pO1xuXG4gICAgICBtZXRhdmFyaWFibGVWZXJpZmllZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2FsQ29udGV4dC50cmFjZShgVGhlcmUgaXMgbm8ganVkZ2VtZW50IGZvciB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmAsIG1ldGF2YXJpYWJsZU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChtZXRhdmFyaWFibGVWZXJpZmllZCkge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gLCBtZXRhdmFyaWFibGVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGVWZXJpZmllZDtcbn0iXSwibmFtZXMiOlsibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVzUXVlcnkiLCJ2ZXJpZnlGcmFtZUZ1bmN0aW9ucyIsInZlcmlmeURlcml2ZWRGcmFtZSIsInZlcmlmeVN0YXRlZEZyYW1lIiwidmVyaWZ5RnJhbWUiLCJmcmFtZU5vZGUiLCJmcmFtZXMiLCJzdGF0ZWQiLCJsb2NhbENvbnRleHQiLCJmcmFtZVZlcmlmaWVkIiwiZnJhbWVTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInNvbWUiLCJ2ZXJpZnlGcmFtZUZ1bmN0aW9uIiwiZGVidWciLCJPYmplY3QiLCJhc3NpZ24iLCJzaGltIiwiZGVyaXZlZEZyYW1lVmVyaWZpZWQiLCJkZWNsYXJhdGlvbnMiLCJkZWNsYXJhdGlvbk5vZGVzIiwiZGVjbGFyYXRpb25zVmVyaWZpZWQiLCJldmVyeSIsImRlY2xhcmF0aW9uTm9kZSIsImRlY2xhcmF0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlEZWNsYXJhdGlvbiIsIm1ldGF2YXJpYWJsZU5vZGVzIiwibWV0YXZhcmlhYmxlc1ZlcmlmaWVkIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZVZlcmlmaWVkIiwidmVyaWZ5TWV0YXZhcmlhYmxlIiwiZnJhbWUiLCJGcmFtZSIsImZyb21EZWNsYXJhdGlvbnMiLCJwdXNoIiwic3RhdGVkRnJhbWVWZXJpZmllZCIsImRlY2xhcmF0aW9uTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJtZXRhVHlwZSIsImZyYW1lTWV0YVR5cGUiLCJtZXRhdmFyaWFibGVWZXJpZmllZEdpdmVuTWV0YVR5cGUiLCJ2ZXJpZnlNZXRhdmFyaWFibGVHaXZlbk1ldGFUeXBlIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJtZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIiwianVkZ2VtZW50IiwiZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImRlY2xhcmF0aW9uIiwiZ2V0RGVjbGFyYXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQThDQTs7O2VBQUE7OzsyREE1Q2lCOzREQUNDOzZEQUNRO2tFQUNJO2dGQUNjO3FCQUVOO29CQUNlOzs7Ozs7QUFFckQsSUFBTUEsd0JBQXdCQyxJQUFBQSxnQkFBUyxFQUFDLHdCQUNsQ0Msd0JBQXdCQyxJQUFBQSxpQkFBVSxFQUFDLHVCQUNuQ0MseUJBQXlCRCxJQUFBQSxpQkFBVSxFQUFDO0FBRTFDLElBQU1FLHVCQUF1QjtJQUMzQkM7SUFDQUM7Q0FDRDtBQUVELFNBQVNDLFlBQVlDLFNBQVMsRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLFlBQVk7SUFDMUQsSUFBSUM7SUFFSixJQUFNQyxjQUFjRixhQUFhRyxZQUFZLENBQUNOO0lBRTlDRyxhQUFhSSxLQUFLLENBQUMsQUFBQyxrQkFBNkIsT0FBWkYsYUFBWSxlQUFhTDtJQUU5REksZ0JBQWdCUixxQkFBcUJZLElBQUksQ0FBQyxTQUFDQztRQUN6QyxJQUFNTCxnQkFBZ0JLLG9CQUFvQlQsV0FBV0MsUUFBUUMsUUFBUUM7UUFFckUsSUFBSUMsZUFBZTtZQUNqQixPQUFPO1FBQ1Q7SUFDRjtJQUVBLElBQUlBLGVBQWU7UUFDakJELGFBQWFPLEtBQUssQ0FBQyxBQUFDLG9CQUErQixPQUFaTCxhQUFZLGFBQVdMO0lBQ2hFO0lBRUEsT0FBT0k7QUFDVDtBQUVBTyxPQUFPQyxNQUFNLENBQUNDLGFBQUksRUFBRTtJQUNsQmQsYUFBQUE7QUFDRjtJQUVBLFdBQWVBO0FBRWYsU0FBU0YsbUJBQW1CRyxTQUFTLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxZQUFZO0lBQ2pFLElBQUlXO0lBRUosSUFBSSxDQUFDWixRQUFRO1FBQ1gsSUFBTUcsY0FBY0YsYUFBYUcsWUFBWSxDQUFDTjtRQUU5Q0csYUFBYUksS0FBSyxDQUFDLEFBQUMsa0JBQTZCLE9BQVpGLGFBQVksdUJBQXFC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