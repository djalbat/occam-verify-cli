"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyJudgement;
    }
});
var _judgement = /*#__PURE__*/ _interop_require_default(require("../judgement"));
var _frame = /*#__PURE__*/ _interop_require_default(require("../verify/frame"));
var _frame1 = /*#__PURE__*/ _interop_require_default(require("../metaType/frame"));
var _array = require("../utilities/array");
var _query = require("../utilities/query");
var _judgement1 = /*#__PURE__*/ _interop_require_default(require("../assignment/judgement"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var frameNodeQuery = (0, _query.nodeQuery)("/judgement/frame!"), metavariableNodeQuery = (0, _query.nodeQuery)("/judgement/metavariable!");
function verifyJudgement(judgementNode, assignments, derived, localMetaContext) {
    var judgementVerified;
    var judgementString = localMetaContext.nodeAsString(judgementNode);
    localMetaContext.trace("Verifying the '".concat(judgementString, "' judgement..."), judgementNode);
    var verifyJudgementFunctions = [
        verifyDerivedJudgement,
        verifyStatedJudgement
    ];
    judgementVerified = verifyJudgementFunctions.some(function(verifyJudgementFunction) {
        var judgementVerified = verifyJudgementFunction(judgementNode, assignments, derived, localMetaContext);
        if (judgementVerified) {
            return true;
        }
    });
    if (judgementVerified) {
        localMetaContext.debug("...verified the '".concat(judgementString, "' judgement."), judgementNode);
    }
    return judgementVerified;
}
function verifyDerivedJudgement(judgementNode, assignments, derived, localMetaContext) {
    var derivedJudgementVerified = false;
    if (derived) {
    // const judgementString = localMetaContext.nodeAsString(judgementNode);
    //
    // localMetaContext.trace(`Verifying the '${judgementString}' derived judgement...`, judgementNode);
    //
    // const metavariableNode = metavariableNodeQuery(judgementNode),
    //       metavariable = localMetaContext.findMetavariableByMetavariableNode(metavariableNode, localMetaContext);
    //
    // if (metavariable !== null) {
    //   const metaType = metavariable.getMetaType();
    //
    //   if (metaType === frameMetaType) {
    //     const frameNode = frameNodeQuery(judgementNode);
    //
    //     if (frameNode !== null) {
    //       const frameVerified = verifyFrame(frameNode, derived, localMetaContext);
    //
    //       derivedJudgementVerified = frameVerified;  ///
    //     } else {
    //       localMetaContext.debug(`The right hand side of the '${judgementString}' judgement must be a frame.`, judgementNode);
    //     }
    //   } else {
    //     const frameMetaTypeName = frameMetaType.getName(),
    //       metavariableString = localMetaContext.nodeAsString(metavariableNode),
    //       metaTypeString = metaType.asString();
    //
    //     localMetaContext.debug(`The '${metavariableString}' metavariable's meta-type is '${metaTypeString}' when it should be '${frameMetaTypeName}'.`, judgementNode);
    //   }
    // }
    //
    // if (derivedJudgementVerified) {
    //   localMetaContext.debug(`...verified the '${judgementString}' derived judgement.`, judgementNode);
    // }
    }
    return derivedJudgementVerified;
}
function verifyStatedJudgement(judgementNode, assignments, derived, localMetaContext) {
    var statedJudgementVerified = false;
    if (!derived) {
        var judgementString = localMetaContext.nodeAsString(judgementNode);
        localMetaContext.trace("Verifying the '".concat(judgementString, "' stated judgement..."), judgementNode);
        var metavariables = [], metavariableNode = metavariableNodeQuery(judgementNode), metavariableVerified = verifyMetavariable(metavariableNode, metavariables, localMetaContext);
        if (metavariableVerified) {
            var firstMetavariable = (0, _array.first)(metavariables), metavariable = firstMetavariable, judgementPresent = localMetaContext.isJudgementPresentByMetavariable(metavariable);
            if (!judgementPresent) {
                var frameNode = frameNodeQuery(judgementNode), frames = [], frameVerified = (0, _frame.default)(frameNode, frames, derived, localMetaContext);
                if (frameVerified) {
                    var firstFrame = (0, _array.first)(frames), frame = firstFrame, judgement = _judgement.default.fromJudgementNodeFrameAndMetavariable(judgementNode, frame, metavariable), judgementAssignment = _judgement1.default.fromJudgement(judgement), assignment = judgementAssignment;
                    assignments.push(assignment);
                    statedJudgementVerified = true;
                }
            } else {
                var metavariableString = localMetaContext.nodeAsString(metavariable);
                localMetaContext.debug("There is already a judgement present for the '".concat(metavariableString, "' metavariable."), judgementNode);
            }
        }
        if (statedJudgementVerified) {
            localMetaContext.debug("...verified the '".concat(judgementString, "' stated judgement."), judgementNode);
        }
    }
    return statedJudgementVerified;
}
function verifyMetavariable(metavariableNode, metavariables, localMetaContext) {
    var metavariableVerified = false;
    var metavariableString = localMetaContext.nodeAsString(metavariableNode);
    localMetaContext.trace("Verifying the '".concat(metavariableString, "' metavariable..."), metavariableNode);
    var metavariable = localMetaContext.findMetavariableByMetavariableNode(metavariableNode, localMetaContext);
    if (metavariable !== null) {
        var metaType = metavariable.getMetaType();
        if (metaType === _frame1.default) {
            metavariables.push(metavariable);
            metavariableVerified = true;
        } else {
            var frameMetaTypeName = _frame1.default.getName(), metaTypeString = metaType.asString();
            localMetaContext.debug("The '".concat(metavariableString, "' metavariable's meta-type is '").concat(metaTypeString, "' when it should be '").concat(frameMetaTypeName, "'."), metavariableNode);
        }
    } else {
        localMetaContext.debug("The '".concat(metavariableString, "' metavariable is not present'."), metavariableNode);
    }
    if (metavariableVerified) {
        localMetaContext.debug("...verified the '".concat(metavariableString, "' metavariable."), metavariableNode);
    }
    return metavariableVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvanVkZ2VtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSnVkZ2VtZW50IGZyb20gXCIuLi9qdWRnZW1lbnRcIjtcbmltcG9ydCB2ZXJpZnlGcmFtZSBmcm9tIFwiLi4vdmVyaWZ5L2ZyYW1lXCI7XG5pbXBvcnQgZnJhbWVNZXRhVHlwZSBmcm9tIFwiLi4vbWV0YVR5cGUvZnJhbWVcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgSnVkZ2VtZW50QXNzaWdubWVudCBmcm9tIFwiLi4vYXNzaWdubWVudC9qdWRnZW1lbnRcIjtcblxuY29uc3QgZnJhbWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvanVkZ2VtZW50L2ZyYW1lIVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9qdWRnZW1lbnQvbWV0YXZhcmlhYmxlIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5SnVkZ2VtZW50KGp1ZGdlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gIGxldCBqdWRnZW1lbnRWZXJpZmllZDtcblxuICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSBsb2NhbE1ldGFDb250ZXh0Lm5vZGVBc1N0cmluZyhqdWRnZW1lbnROb2RlKTtcblxuICBsb2NhbE1ldGFDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudC4uLmAsIGp1ZGdlbWVudE5vZGUpO1xuXG4gIGNvbnN0IHZlcmlmeUp1ZGdlbWVudEZ1bmN0aW9ucyA9IFtcbiAgICB2ZXJpZnlEZXJpdmVkSnVkZ2VtZW50LFxuICAgIHZlcmlmeVN0YXRlZEp1ZGdlbWVudFxuICBdO1xuXG4gIGp1ZGdlbWVudFZlcmlmaWVkID0gdmVyaWZ5SnVkZ2VtZW50RnVuY3Rpb25zLnNvbWUoKHZlcmlmeUp1ZGdlbWVudEZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QganVkZ2VtZW50VmVyaWZpZWQgPSB2ZXJpZnlKdWRnZW1lbnRGdW5jdGlvbihqdWRnZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICBpZiAoanVkZ2VtZW50VmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGp1ZGdlbWVudFZlcmlmaWVkKSB7XG4gICAgbG9jYWxNZXRhQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudC5gLCBqdWRnZW1lbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiBqdWRnZW1lbnRWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5RGVyaXZlZEp1ZGdlbWVudChqdWRnZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxNZXRhQ29udGV4dCkge1xuICBsZXQgZGVyaXZlZEp1ZGdlbWVudFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKGRlcml2ZWQpIHtcbiAgICAvLyBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSBsb2NhbE1ldGFDb250ZXh0Lm5vZGVBc1N0cmluZyhqdWRnZW1lbnROb2RlKTtcbiAgICAvL1xuICAgIC8vIGxvY2FsTWV0YUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgZGVyaXZlZCBqdWRnZW1lbnQuLi5gLCBqdWRnZW1lbnROb2RlKTtcbiAgICAvL1xuICAgIC8vIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoanVkZ2VtZW50Tm9kZSksXG4gICAgLy8gICAgICAgbWV0YXZhcmlhYmxlID0gbG9jYWxNZXRhQ29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsTWV0YUNvbnRleHQpO1xuICAgIC8vXG4gICAgLy8gaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgIC8vICAgY29uc3QgbWV0YVR5cGUgPSBtZXRhdmFyaWFibGUuZ2V0TWV0YVR5cGUoKTtcbiAgICAvL1xuICAgIC8vICAgaWYgKG1ldGFUeXBlID09PSBmcmFtZU1ldGFUeXBlKSB7XG4gICAgLy8gICAgIGNvbnN0IGZyYW1lTm9kZSA9IGZyYW1lTm9kZVF1ZXJ5KGp1ZGdlbWVudE5vZGUpO1xuICAgIC8vXG4gICAgLy8gICAgIGlmIChmcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICAvLyAgICAgICBjb25zdCBmcmFtZVZlcmlmaWVkID0gdmVyaWZ5RnJhbWUoZnJhbWVOb2RlLCBkZXJpdmVkLCBsb2NhbE1ldGFDb250ZXh0KTtcbiAgICAvL1xuICAgIC8vICAgICAgIGRlcml2ZWRKdWRnZW1lbnRWZXJpZmllZCA9IGZyYW1lVmVyaWZpZWQ7ICAvLy9cbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICBsb2NhbE1ldGFDb250ZXh0LmRlYnVnKGBUaGUgcmlnaHQgaGFuZCBzaWRlIG9mIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQgbXVzdCBiZSBhIGZyYW1lLmAsIGp1ZGdlbWVudE5vZGUpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9IGVsc2Uge1xuICAgIC8vICAgICBjb25zdCBmcmFtZU1ldGFUeXBlTmFtZSA9IGZyYW1lTWV0YVR5cGUuZ2V0TmFtZSgpLFxuICAgIC8vICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IGxvY2FsTWV0YUNvbnRleHQubm9kZUFzU3RyaW5nKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgIC8vICAgICAgIG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuYXNTdHJpbmcoKTtcbiAgICAvL1xuICAgIC8vICAgICBsb2NhbE1ldGFDb250ZXh0LmRlYnVnKGBUaGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgbWV0YS10eXBlIGlzICcke21ldGFUeXBlU3RyaW5nfScgd2hlbiBpdCBzaG91bGQgYmUgJyR7ZnJhbWVNZXRhVHlwZU5hbWV9Jy5gLCBqdWRnZW1lbnROb2RlKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyBpZiAoZGVyaXZlZEp1ZGdlbWVudFZlcmlmaWVkKSB7XG4gICAgLy8gICBsb2NhbE1ldGFDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgZGVyaXZlZCBqdWRnZW1lbnQuYCwganVkZ2VtZW50Tm9kZSk7XG4gICAgLy8gfVxuICB9XG5cbiAgcmV0dXJuIGRlcml2ZWRKdWRnZW1lbnRWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVkSnVkZ2VtZW50KGp1ZGdlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gIGxldCBzdGF0ZWRKdWRnZW1lbnRWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmICghZGVyaXZlZCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IGxvY2FsTWV0YUNvbnRleHQubm9kZUFzU3RyaW5nKGp1ZGdlbWVudE5vZGUpO1xuXG4gICAgbG9jYWxNZXRhQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBzdGF0ZWQganVkZ2VtZW50Li4uYCwganVkZ2VtZW50Tm9kZSk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShqdWRnZW1lbnROb2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVWZXJpZmllZCA9IHZlcmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGVOb2RlLCBtZXRhdmFyaWFibGVzLCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVWZXJpZmllZCkge1xuICAgICAgY29uc3QgZmlyc3RNZXRhdmFyaWFibGUgPSBmaXJzdChtZXRhdmFyaWFibGVzKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IGZpcnN0TWV0YXZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgIGp1ZGdlbWVudFByZXNlbnQgPSBsb2NhbE1ldGFDb250ZXh0LmlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIGlmICghanVkZ2VtZW50UHJlc2VudCkge1xuICAgICAgICBjb25zdCBmcmFtZU5vZGUgPSBmcmFtZU5vZGVRdWVyeShqdWRnZW1lbnROb2RlKSxcbiAgICAgICAgICAgICAgZnJhbWVzID0gW10sXG4gICAgICAgICAgICAgIGZyYW1lVmVyaWZpZWQgPSB2ZXJpZnlGcmFtZShmcmFtZU5vZGUsIGZyYW1lcywgZGVyaXZlZCwgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKGZyYW1lVmVyaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCBmaXJzdEZyYW1lID0gZmlyc3QoZnJhbWVzKSxcbiAgICAgICAgICAgICAgICBmcmFtZSA9IGZpcnN0RnJhbWUsIC8vL1xuICAgICAgICAgICAgICAgIGp1ZGdlbWVudCA9IEp1ZGdlbWVudC5mcm9tSnVkZ2VtZW50Tm9kZUZyYW1lQW5kTWV0YXZhcmlhYmxlKGp1ZGdlbWVudE5vZGUsIGZyYW1lLCBtZXRhdmFyaWFibGUpLFxuICAgICAgICAgICAgICAgIGp1ZGdlbWVudEFzc2lnbm1lbnQgPSBKdWRnZW1lbnRBc3NpZ25tZW50LmZyb21KdWRnZW1lbnQoanVkZ2VtZW50KSxcbiAgICAgICAgICAgICAgICBhc3NpZ25tZW50ID0ganVkZ2VtZW50QXNzaWdubWVudDtcblxuICAgICAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG5cbiAgICAgICAgICBzdGF0ZWRKdWRnZW1lbnRWZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IGxvY2FsTWV0YUNvbnRleHQubm9kZUFzU3RyaW5nKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgICAgbG9jYWxNZXRhQ29udGV4dC5kZWJ1ZyhgVGhlcmUgaXMgYWxyZWFkeSBhIGp1ZGdlbWVudCBwcmVzZW50IGZvciB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmAsIGp1ZGdlbWVudE5vZGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGF0ZWRKdWRnZW1lbnRWZXJpZmllZCkge1xuICAgICAgbG9jYWxNZXRhQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIHN0YXRlZCBqdWRnZW1lbnQuYCwganVkZ2VtZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlZEp1ZGdlbWVudFZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgbWV0YXZhcmlhYmxlcywgbG9jYWxNZXRhQ29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSBsb2NhbE1ldGFDb250ZXh0Lm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlKTtcblxuICBsb2NhbE1ldGFDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmAsIG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGxvY2FsTWV0YUNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YVR5cGUgPSBtZXRhdmFyaWFibGUuZ2V0TWV0YVR5cGUoKTtcblxuICAgIGlmIChtZXRhVHlwZSA9PT0gZnJhbWVNZXRhVHlwZSkge1xuICAgICAgbWV0YXZhcmlhYmxlcy5wdXNoKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZnJhbWVNZXRhVHlwZU5hbWUgPSBmcmFtZU1ldGFUeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuYXNTdHJpbmcoKTtcblxuICAgICAgbG9jYWxNZXRhQ29udGV4dC5kZWJ1ZyhgVGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSdzIG1ldGEtdHlwZSBpcyAnJHttZXRhVHlwZVN0cmluZ30nIHdoZW4gaXQgc2hvdWxkIGJlICcke2ZyYW1lTWV0YVR5cGVOYW1lfScuYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxvY2FsTWV0YUNvbnRleHQuZGVidWcoYFRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgaXMgbm90IHByZXNlbnQnLmAsIG1ldGF2YXJpYWJsZU5vZGUpO1xuICB9XG5cbiAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgbG9jYWxNZXRhQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gLCBtZXRhdmFyaWFibGVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlKdWRnZW1lbnQiLCJmcmFtZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsImp1ZGdlbWVudE5vZGUiLCJhc3NpZ25tZW50cyIsImRlcml2ZWQiLCJsb2NhbE1ldGFDb250ZXh0IiwianVkZ2VtZW50VmVyaWZpZWQiLCJqdWRnZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInZlcmlmeUp1ZGdlbWVudEZ1bmN0aW9ucyIsInZlcmlmeURlcml2ZWRKdWRnZW1lbnQiLCJ2ZXJpZnlTdGF0ZWRKdWRnZW1lbnQiLCJzb21lIiwidmVyaWZ5SnVkZ2VtZW50RnVuY3Rpb24iLCJkZWJ1ZyIsImRlcml2ZWRKdWRnZW1lbnRWZXJpZmllZCIsInN0YXRlZEp1ZGdlbWVudFZlcmlmaWVkIiwibWV0YXZhcmlhYmxlcyIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVWZXJpZmllZCIsInZlcmlmeU1ldGF2YXJpYWJsZSIsImZpcnN0TWV0YXZhcmlhYmxlIiwiZmlyc3QiLCJtZXRhdmFyaWFibGUiLCJqdWRnZW1lbnRQcmVzZW50IiwiaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGUiLCJmcmFtZU5vZGUiLCJmcmFtZXMiLCJmcmFtZVZlcmlmaWVkIiwidmVyaWZ5RnJhbWUiLCJmaXJzdEZyYW1lIiwiZnJhbWUiLCJqdWRnZW1lbnQiLCJKdWRnZW1lbnQiLCJmcm9tSnVkZ2VtZW50Tm9kZUZyYW1lQW5kTWV0YXZhcmlhYmxlIiwianVkZ2VtZW50QXNzaWdubWVudCIsIkp1ZGdlbWVudEFzc2lnbm1lbnQiLCJmcm9tSnVkZ2VtZW50IiwiYXNzaWdubWVudCIsInB1c2giLCJtZXRhdmFyaWFibGVTdHJpbmciLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YVR5cGUiLCJnZXRNZXRhVHlwZSIsImZyYW1lTWV0YVR5cGUiLCJmcmFtZU1ldGFUeXBlTmFtZSIsImdldE5hbWUiLCJtZXRhVHlwZVN0cmluZyIsImFzU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQXdCQTs7O2dFQVhGOzRE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