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
        debugger;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZnJhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBGcmFtZSBmcm9tIFwiLi4vZnJhbWVcIjtcbmltcG9ydCBmcmFtZU1ldGFUeXBlIGZyb20gXCIuLi9tZXRhVHlwZS9mcmFtZVwiO1xuaW1wb3J0IHZlcmlmeURlY2xhcmF0aW9uIGZyb20gXCIuLi92ZXJpZnkvZGVjbGFyYXRpb25cIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGRlY2xhcmF0aW9uTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvZnJhbWUvZGVjbGFyYXRpb25cIiksXG4gICAgICBtZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9mcmFtZS9tZXRhdmFyaWFibGVcIik7XG5cbmNvbnN0IHZlcmlmeUZyYW1lRnVuY3Rpb25zID0gW1xuICB2ZXJpZnlEZXJpdmVkRnJhbWUsXG4gIHZlcmlmeVN0YXRlZEZyYW1lXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlGcmFtZShmcmFtZU5vZGUsIGZyYW1lcywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGZyYW1lVmVyaWZpZWQ7XG5cbiAgY29uc3QgZnJhbWVTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGZyYW1lTm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gLCBmcmFtZU5vZGUpO1xuXG4gIGZyYW1lVmVyaWZpZWQgPSB2ZXJpZnlGcmFtZUZ1bmN0aW9ucy5zb21lKCh2ZXJpZnlGcmFtZUZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgZnJhbWVWZXJpZmllZCA9IHZlcmlmeUZyYW1lRnVuY3Rpb24oZnJhbWVOb2RlLCBmcmFtZXMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChmcmFtZVZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChmcmFtZVZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gLCBmcmFtZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGZyYW1lVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeURlcml2ZWRGcmFtZShmcmFtZU5vZGUsIGZyYW1lcywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGRlcml2ZWRGcmFtZVZlcmlmaWVkO1xuXG4gIGlmICghc3RhdGVkKSB7XG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGZyYW1lTm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lLi4uYCwgZnJhbWVOb2RlKTtcblxuICAgIGRlYnVnZ2VyXG5cbiAgICBpZiAoZGVyaXZlZEZyYW1lVmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZGVyaXZlZCBmcmFtZS5gLCBmcmFtZU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZXJpdmVkRnJhbWVWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVkRnJhbWUoZnJhbWVOb2RlLCBmcmFtZXMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZWRGcmFtZVZlcmlmaWVkO1xuXG4gIGlmIChzdGF0ZWQpIHtcbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoZnJhbWVOb2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZS4uLmAsIGZyYW1lTm9kZSk7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvbnMgPSBbXSxcbiAgICAgICAgICBkZWNsYXJhdGlvbk5vZGVzID0gZGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5KGZyYW1lTm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZXMgPSBtZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5KGZyYW1lTm9kZSksXG4gICAgICAgICAgZGVjbGFyYXRpb25zVmVyaWZpZWQgPSBkZWNsYXJhdGlvbk5vZGVzLmV2ZXJ5KChkZWNsYXJhdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlY2xhcmF0aW9uVmVyaWZpZWQgPSB2ZXJpZnlEZWNsYXJhdGlvbihkZWNsYXJhdGlvbk5vZGUsIGRlY2xhcmF0aW9ucywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gZGVjbGFyYXRpb25WZXJpZmllZDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzVmVyaWZpZWQgPSBtZXRhdmFyaWFibGVOb2Rlcy5ldmVyeSgobWV0YXZhcmlhYmxlTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgZGVjbGFyYXRpb25zLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gbWV0YXZhcmlhYmxlVmVyaWZpZWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoZGVjbGFyYXRpb25zVmVyaWZpZWQgJiYgbWV0YXZhcmlhYmxlc1ZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBmcmFtZSA9IEZyYW1lLmZyb21EZWNsYXJhdGlvbnMoZGVjbGFyYXRpb25zKTtcblxuICAgICAgZnJhbWVzLnB1c2goZnJhbWUpO1xuXG4gICAgICBzdGF0ZWRGcmFtZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGVkRnJhbWVWZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUuYCwgZnJhbWVOb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVkRnJhbWVWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZU5vZGUsIGRlY2xhcmF0aW9ucywgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBtZXRhdmFyaWFibGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmAsIG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGxvY2FsQ29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBtZXRhVHlwZSA9IG1ldGF2YXJpYWJsZS5nZXRNZXRhVHlwZSgpO1xuXG4gICAgaWYgKG1ldGFUeXBlID09PSBmcmFtZU1ldGFUeXBlKSB7XG4gICAgICBjb25zdCBqdWRnZW1lbnQgPSBsb2NhbENvbnRleHQuZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKGp1ZGdlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBqdWRnZW1lbnREZWNsYXJhdGlvbnMgPSBqdWRnZW1lbnQuZ2V0RGVjbGFyYXRpb25zKCk7XG5cbiAgICAgICAgcHVzaChkZWNsYXJhdGlvbnMsIGp1ZGdlbWVudERlY2xhcmF0aW9ucyk7XG5cbiAgICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGBUaGVyZSBpcyBubyBqdWRnZW1lbnQgZm9yIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZyYW1lTWV0YVR5cGVOYW1lID0gZnJhbWVNZXRhVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmFzU3RyaW5nKCk7XG5cbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSdzIG1ldGEtdHlwZSBpcyAnJHttZXRhVHlwZVN0cmluZ30nIHdoZW4gaXQgc2hvdWxkIGJlICcke2ZyYW1lTWV0YVR5cGVOYW1lfScuYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBpcyBub3QgcHJlc2VudCcuYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG4gIH1cblxuICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlVmVyaWZpZWQ7XG59Il0sIm5hbWVzIjpbInZlcmlmeUZyYW1lIiwiZGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVzUXVlcnkiLCJ2ZXJpZnlGcmFtZUZ1bmN0aW9ucyIsInZlcmlmeURlcml2ZWRGcmFtZSIsInZlcmlmeVN0YXRlZEZyYW1lIiwiZnJhbWVOb2RlIiwiZnJhbWVzIiwic3RhdGVkIiwibG9jYWxDb250ZXh0IiwiZnJhbWVWZXJpZmllZCIsImZyYW1lU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJzb21lIiwidmVyaWZ5RnJhbWVGdW5jdGlvbiIsImRlYnVnIiwiZGVyaXZlZEZyYW1lVmVyaWZpZWQiLCJzdGF0ZWRGcmFtZVZlcmlmaWVkIiwiZGVjbGFyYXRpb25zIiwiZGVjbGFyYXRpb25Ob2RlcyIsIm1ldGF2YXJpYWJsZU5vZGVzIiwiZGVjbGFyYXRpb25zVmVyaWZpZWQiLCJldmVyeSIsImRlY2xhcmF0aW9uTm9kZSIsImRlY2xhcmF0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlEZWNsYXJhdGlvbiIsIm1ldGF2YXJpYWJsZXNWZXJpZmllZCIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVWZXJpZmllZCIsInZlcmlmeU1ldGF2YXJpYWJsZSIsImZyYW1lIiwiRnJhbWUiLCJmcm9tRGVjbGFyYXRpb25zIiwicHVzaCIsIm1ldGF2YXJpYWJsZVN0cmluZyIsIm1ldGF2YXJpYWJsZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhVHlwZSIsImdldE1ldGFUeXBlIiwiZnJhbWVNZXRhVHlwZSIsImp1ZGdlbWVudCIsImZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJqdWRnZW1lbnREZWNsYXJhdGlvbnMiLCJnZXREZWNsYXJhdGlvbnMiLCJmcmFtZU1ldGFUeXBlTmFtZSIsImdldE5hbWUiLCJtZXRhVHlwZVN0cmluZyIsImFzU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpQkE7OztlQUF3QkE7Ozs0REFmTjs2REFDUTtrRUFDSTtxQkFFVDtxQkFDTTs7Ozs7O0FBRTNC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