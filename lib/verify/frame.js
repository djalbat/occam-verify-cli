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
Object.assign(_shim.default, {
    verifyFrame: verifyFrame
});
var _default = verifyFrame;
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
                var metaType = _frame1.default, metavariableVerifiedGivenMetaType = (0, _metavariableGivenMetaType.default)(metavariableNode, metaType, localContext);
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
    var metaType = _frame1.default, metavariableVerifiedGivenMetaType = (0, _metavariableGivenMetaType.default)(metavariableNode, metaType, localContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZnJhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5pbXBvcnQgRnJhbWUgZnJvbSBcIi4uL2ZyYW1lXCI7XG5pbXBvcnQgZnJhbWVNZXRhVHlwZSBmcm9tIFwiLi4vbWV0YVR5cGUvZnJhbWVcIjtcbmltcG9ydCB2ZXJpZnlEZWNsYXJhdGlvbiBmcm9tIFwiLi4vdmVyaWZ5L2RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgdmVyaWZ5TWV0YXZhcmlhYmxlR2l2ZW5NZXRhVHlwZSBmcm9tIFwiLi9tZXRhdmFyaWFibGVHaXZlbk1ldGFUeXBlXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbmFtZVwiO1xuXG5jb25zdCBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWUvbWV0YXZhcmlhYmxlXCIpLFxuICAgICAgZGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9mcmFtZS9kZWNsYXJhdGlvblwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2ZyYW1lL21ldGF2YXJpYWJsZVwiKTtcblxuY29uc3QgdmVyaWZ5RnJhbWVGdW5jdGlvbnMgPSBbXG4gIHZlcmlmeURlcml2ZWRGcmFtZSxcbiAgdmVyaWZ5U3RhdGVkRnJhbWVcbl07XG5cbmZ1bmN0aW9uIHZlcmlmeUZyYW1lKGZyYW1lTm9kZSwgZnJhbWVzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgZnJhbWVWZXJpZmllZDtcblxuICBjb25zdCBmcmFtZVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoZnJhbWVOb2RlKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gIGZyYW1lVmVyaWZpZWQgPSB2ZXJpZnlGcmFtZUZ1bmN0aW9ucy5zb21lKCh2ZXJpZnlGcmFtZUZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgZnJhbWVWZXJpZmllZCA9IHZlcmlmeUZyYW1lRnVuY3Rpb24oZnJhbWVOb2RlLCBmcmFtZXMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChmcmFtZVZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChmcmFtZVZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZVZlcmlmaWVkO1xufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgdmVyaWZ5RnJhbWVcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB2ZXJpZnlGcmFtZTtcblxuZnVuY3Rpb24gdmVyaWZ5RGVyaXZlZEZyYW1lKGZyYW1lTm9kZSwgZnJhbWVzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgZGVyaXZlZEZyYW1lVmVyaWZpZWQ7XG5cbiAgaWYgKCFzdGF0ZWQpIHtcbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoZnJhbWVOb2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGRlcml2ZWQgZnJhbWUuLi5gKTtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9ucyA9IFtdLFxuICAgICAgICAgIGRlY2xhcmF0aW9uTm9kZXMgPSBkZWNsYXJhdGlvbk5vZGVzUXVlcnkoZnJhbWVOb2RlKSxcbiAgICAgICAgICBkZWNsYXJhdGlvbnNWZXJpZmllZCA9IGRlY2xhcmF0aW9uTm9kZXMuZXZlcnkoKGRlY2xhcmF0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVjbGFyYXRpb25WZXJpZmllZCA9IHZlcmlmeURlY2xhcmF0aW9uKGRlY2xhcmF0aW9uTm9kZSwgZGVjbGFyYXRpb25zLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChkZWNsYXJhdGlvblZlcmlmaWVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKGRlY2xhcmF0aW9uc1ZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlcyA9IG1ldGF2YXJpYWJsZU5vZGVzUXVlcnkoZnJhbWVOb2RlKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZXNWZXJpZmllZCA9IG1ldGF2YXJpYWJsZU5vZGVzLmV2ZXJ5KChtZXRhdmFyaWFibGVOb2RlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gdmVyaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZU5vZGUsIGRlY2xhcmF0aW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVzVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgZnJhbWUgPSBGcmFtZS5mcm9tRGVjbGFyYXRpb25zKGRlY2xhcmF0aW9ucyk7XG5cbiAgICAgICAgZnJhbWVzLnB1c2goZnJhbWUpO1xuXG4gICAgICAgIGRlcml2ZWRGcmFtZVZlcmlmaWVkID0gdHJ1ZTsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRlcml2ZWRGcmFtZVZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGRlcml2ZWQgZnJhbWUuYCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRlcml2ZWRGcmFtZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZWRGcmFtZShmcmFtZU5vZGUsIGZyYW1lcywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlZEZyYW1lVmVyaWZpZWQ7XG5cbiAgaWYgKHN0YXRlZCkge1xuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhmcmFtZU5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvbk5vZGVzID0gZGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5KGZyYW1lTm9kZSksXG4gICAgICAgICAgZGVjbGFyYXRpb25Ob2Rlc0xlbmd0aCA9IGRlY2xhcmF0aW9uTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGRlY2xhcmF0aW9uTm9kZXNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoZnJhbWVOb2RlKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgbWV0YVR5cGUgPSBmcmFtZU1ldGFUeXBlLCAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gdmVyaWZ5TWV0YXZhcmlhYmxlR2l2ZW5NZXRhVHlwZShtZXRhdmFyaWFibGVOb2RlLCBtZXRhVHlwZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZWRHaXZlbk1ldGFUeXBlKSB7XG4gICAgICAgICAgY29uc3QgZnJhbWUgPSBGcmFtZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgIGZyYW1lcy5wdXNoKGZyYW1lKTtcblxuICAgICAgICAgIHN0YXRlZEZyYW1lVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhbENvbnRleHQudHJhY2UoYFRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZSBjYW5ub3QgaGF2ZSBtb3JlIHRoYW4gb25lIG1ldGF2YXJpYWJsZS5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYWxDb250ZXh0LnRyYWNlKGBUaGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUgY2Fubm90IGhhdmUgZGVjbGFyYXRpb25zLmApO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZWRGcmFtZVZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZS5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVkRnJhbWVWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZU5vZGUsIGRlY2xhcmF0aW9ucywgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBtZXRhdmFyaWFibGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gIGNvbnN0IG1ldGFUeXBlID0gZnJhbWVNZXRhVHlwZSwgLy8vXG4gICAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IHZlcmlmeU1ldGF2YXJpYWJsZUdpdmVuTWV0YVR5cGUobWV0YXZhcmlhYmxlTm9kZSwgbWV0YVR5cGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVkR2l2ZW5NZXRhVHlwZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAganVkZ2VtZW50ID0gbG9jYWxDb250ZXh0LmZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICBpZiAoanVkZ2VtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkZWNsYXJhdGlvbiA9IGp1ZGdlbWVudC5nZXREZWNsYXJhdGlvbigpO1xuXG4gICAgICBkZWNsYXJhdGlvbnMucHVzaChkZWNsYXJhdGlvbik7XG5cbiAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYWxDb250ZXh0LnRyYWNlKGBUaGVyZSBpcyBubyBqdWRnZW1lbnQgZm9yIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVkO1xufSJdLCJuYW1lcyI6WyJtZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkZWNsYXJhdGlvbk5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZXNRdWVyeSIsInZlcmlmeUZyYW1lRnVuY3Rpb25zIiwidmVyaWZ5RGVyaXZlZEZyYW1lIiwidmVyaWZ5U3RhdGVkRnJhbWUiLCJ2ZXJpZnlGcmFtZSIsImZyYW1lTm9kZSIsImZyYW1lcyIsInN0YXRlZCIsImxvY2FsQ29udGV4dCIsImZyYW1lVmVyaWZpZWQiLCJmcmFtZVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwic29tZSIsInZlcmlmeUZyYW1lRnVuY3Rpb24iLCJkZWJ1ZyIsIk9iamVjdCIsImFzc2lnbiIsInNoaW0iLCJkZXJpdmVkRnJhbWVWZXJpZmllZCIsImRlY2xhcmF0aW9ucyIsImRlY2xhcmF0aW9uTm9kZXMiLCJkZWNsYXJhdGlvbnNWZXJpZmllZCIsImV2ZXJ5IiwiZGVjbGFyYXRpb25Ob2RlIiwiZGVjbGFyYXRpb25WZXJpZmllZCIsInZlcmlmeURlY2xhcmF0aW9uIiwibWV0YXZhcmlhYmxlTm9kZXMiLCJtZXRhdmFyaWFibGVzVmVyaWZpZWQiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlVmVyaWZpZWQiLCJ2ZXJpZnlNZXRhdmFyaWFibGUiLCJmcmFtZSIsIkZyYW1lIiwiZnJvbURlY2xhcmF0aW9ucyIsInB1c2giLCJzdGF0ZWRGcmFtZVZlcmlmaWVkIiwiZGVjbGFyYXRpb25Ob2Rlc0xlbmd0aCIsImxlbmd0aCIsIm1ldGFUeXBlIiwiZnJhbWVNZXRhVHlwZSIsIm1ldGF2YXJpYWJsZVZlcmlmaWVkR2l2ZW5NZXRhVHlwZSIsInZlcmlmeU1ldGF2YXJpYWJsZUdpdmVuTWV0YVR5cGUiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZVN0cmluZyIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJqdWRnZW1lbnQiLCJmaW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGVOYW1lIiwiZGVjbGFyYXRpb24iLCJnZXREZWNsYXJhdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBOENBOzs7ZUFBQTs7OzJEQTVDaUI7NERBQ0M7NkRBQ1E7a0VBQ0k7Z0ZBQ2M7cUJB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