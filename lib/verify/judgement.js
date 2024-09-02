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
var _judgement1 = /*#__PURE__*/ _interop_require_default(require("../assignment/judgement"));
var _array = require("../utilities/array");
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var frameNodeQuery = (0, _query.nodeQuery)("/judgement/frame!"), metavariableNodeQuery = (0, _query.nodeQuery)("/judgement/metavariable!");
function verifyJudgement(judgementNode, assignments, derived, localContext) {
    var judgementVerified;
    var judgementString = localContext.nodeAsString(judgementNode);
    localContext.trace("Verifying the '".concat(judgementString, "' judgement..."), judgementNode);
    var verifyJudgementFunctions = [
        verifyDerivedJudgement,
        verifyStatedJudgement
    ];
    judgementVerified = verifyJudgementFunctions.some(function(verifyJudgementFunction) {
        var judgementVerified = verifyJudgementFunction(judgementNode, assignments, derived, localContext);
        if (judgementVerified) {
            return true;
        }
    });
    if (judgementVerified) {
        localContext.debug("...verified the '".concat(judgementString, "' judgement."), judgementNode);
    }
    return judgementVerified;
}
function verifyDerivedJudgement(judgementNode, assignments, derived, localContext) {
    var derivedJudgementVerified = false;
    if (derived) {
        var judgementString = localContext.nodeAsString(judgementNode);
        localContext.trace("Verifying the '".concat(judgementString, "' derived judgement..."), judgementNode);
        var metavariableNode = metavariableNodeQuery(judgementNode), metavariableVerified = verifyMetavariable(metavariableNode, localContext);
        if (metavariableVerified) {
            var judgement = localContext.findJudgementByMetavariableNode(metavariableNode);
            if (judgement !== null) {
                var frames = [], frameNode = frameNodeQuery(judgementNode), frameVerified = (0, _frame.default)(frameNode, frames, assignments, derived, localContext);
                if (frameVerified) {
                    var firstFrame = (0, _array.first)(frames), frame = firstFrame, frameSingular = frame.isSingular();
                    if (frameSingular) {
                        var declaration = frame.getDeclaration(), metavariableNode1 = declaration.getMetavariableNode(), metaLemma = localContext.findMetaLemmaByMetavariableNode(metavariableNode1), metatheorem = localContext.findMetatheoremByMetavariableNode(metavariableNode1), metaLemmaMetatheorem = metaLemma || metatheorem; ///
                        if (metaLemmaMetatheorem !== null) {
                            var declarationMatchesMetaLemmaMetatheorem = declaration.matchMetaLemmaOrMetaTheorem(metaLemmaMetatheorem), judgementMatchesMetaLemmaMetatheorem = judgement.matchMetaLemmaOrMetaTheorem(metaLemmaMetatheorem);
                            derivedJudgementVerified = declarationMatchesMetaLemmaMetatheorem && judgementMatchesMetaLemmaMetatheorem;
                        } else {
                            var metavariableString = localContext.nodeAsString(metavariableNode1);
                            localContext.debug("There are no meta-lemmas or metatheorems corresponding to the '".concat(metavariableString, "' metavariable."), judgementNode);
                        }
                    } else {
                        var frameString = localContext.nodeAsString(frameNode);
                        localContext.debug("The '".concat(frameString, "' is not singular."), judgementNode);
                    }
                }
            } else {
                var metavariableString1 = localContext.nodeAsString(metavariableNode);
                localContext.debug("There is no judgement present for the '".concat(metavariableString1, "' metavariable."), judgementNode);
            }
        }
        if (derivedJudgementVerified) {
            localContext.debug("...verified the '".concat(judgementString, "' derived judgement."), judgementNode);
        }
    }
    return derivedJudgementVerified;
}
function verifyStatedJudgement(judgementNode, assignments, derived, localContext) {
    var statedJudgementVerified = false;
    if (!derived) {
        var judgementString = localContext.nodeAsString(judgementNode);
        localContext.trace("Verifying the '".concat(judgementString, "' stated judgement..."), judgementNode);
        var metavariableNode = metavariableNodeQuery(judgementNode), metavariableVerified = verifyMetavariable(metavariableNode, localContext);
        if (metavariableVerified) {
            var frames = [], frameNode = frameNodeQuery(judgementNode), frameVerified = (0, _frame.default)(frameNode, frames, assignments, derived, localContext);
            if (frameVerified) {
                var firstFrame = (0, _array.first)(frames), frame = firstFrame, judgement = _judgement.default.fromJudgementNodeFrameAndMetavariableNode(judgementNode, frame, metavariableNode), judgementAssignment = _judgement1.default.fromJudgement(judgement), assignment = judgementAssignment;
                assignments.push(assignment);
                statedJudgementVerified = true;
            }
        }
        if (statedJudgementVerified) {
            localContext.debug("...verified the '".concat(judgementString, "' stated judgement."), judgementNode);
        }
    }
    return statedJudgementVerified;
}
function verifyMetavariable(metavariableNode, localContext) {
    var metavariableVerified = false;
    var metavariableString = localContext.nodeAsString(metavariableNode);
    localContext.trace("Verifying the '".concat(metavariableString, "' metavariable..."), metavariableNode);
    var metavariable = localContext.findMetavariableByMetavariableNode(metavariableNode, localContext);
    if (metavariable !== null) {
        var metaType = metavariable.getMetaType();
        if (metaType === _frame1.default) {
            metavariableVerified = true;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvanVkZ2VtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSnVkZ2VtZW50IGZyb20gXCIuLi9qdWRnZW1lbnRcIjtcbmltcG9ydCB2ZXJpZnlGcmFtZSBmcm9tIFwiLi4vdmVyaWZ5L2ZyYW1lXCI7XG5pbXBvcnQgZnJhbWVNZXRhVHlwZSBmcm9tIFwiLi4vbWV0YVR5cGUvZnJhbWVcIjtcbmltcG9ydCBKdWRnZW1lbnRBc3NpZ25tZW50IGZyb20gXCIuLi9hc3NpZ25tZW50L2p1ZGdlbWVudFwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgZnJhbWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvanVkZ2VtZW50L2ZyYW1lIVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9qdWRnZW1lbnQvbWV0YXZhcmlhYmxlIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5SnVkZ2VtZW50KGp1ZGdlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGp1ZGdlbWVudFZlcmlmaWVkO1xuXG4gIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoanVkZ2VtZW50Tm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudC4uLmAsIGp1ZGdlbWVudE5vZGUpO1xuXG4gIGNvbnN0IHZlcmlmeUp1ZGdlbWVudEZ1bmN0aW9ucyA9IFtcbiAgICB2ZXJpZnlEZXJpdmVkSnVkZ2VtZW50LFxuICAgIHZlcmlmeVN0YXRlZEp1ZGdlbWVudFxuICBdO1xuXG4gIGp1ZGdlbWVudFZlcmlmaWVkID0gdmVyaWZ5SnVkZ2VtZW50RnVuY3Rpb25zLnNvbWUoKHZlcmlmeUp1ZGdlbWVudEZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QganVkZ2VtZW50VmVyaWZpZWQgPSB2ZXJpZnlKdWRnZW1lbnRGdW5jdGlvbihqdWRnZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChqdWRnZW1lbnRWZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBpZiAoanVkZ2VtZW50VmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQuYCwganVkZ2VtZW50Tm9kZSk7XG4gIH1cblxuICByZXR1cm4ganVkZ2VtZW50VmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeURlcml2ZWRKdWRnZW1lbnQoanVkZ2VtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgZGVyaXZlZEp1ZGdlbWVudFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKGRlcml2ZWQpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGp1ZGdlbWVudE5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGRlcml2ZWQganVkZ2VtZW50Li4uYCwganVkZ2VtZW50Tm9kZSk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KGp1ZGdlbWVudE5vZGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gdmVyaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGp1ZGdlbWVudCA9IGxvY2FsQ29udGV4dC5maW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAoanVkZ2VtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGZyYW1lcyA9IFtdLFxuICAgICAgICAgICAgICBmcmFtZU5vZGUgPSBmcmFtZU5vZGVRdWVyeShqdWRnZW1lbnROb2RlKSxcbiAgICAgICAgICAgICAgZnJhbWVWZXJpZmllZCA9IHZlcmlmeUZyYW1lKGZyYW1lTm9kZSwgZnJhbWVzLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICBpZiAoZnJhbWVWZXJpZmllZCkge1xuICAgICAgICAgIGNvbnN0IGZpcnN0RnJhbWUgPSBmaXJzdChmcmFtZXMpLFxuICAgICAgICAgICAgICAgIGZyYW1lID0gZmlyc3RGcmFtZSwgLy8vXG4gICAgICAgICAgICAgICAgZnJhbWVTaW5ndWxhciA9IGZyYW1lLmlzU2luZ3VsYXIoKTtcblxuICAgICAgICAgIGlmIChmcmFtZVNpbmd1bGFyKSB7XG4gICAgICAgICAgICBjb25zdCBkZWNsYXJhdGlvbiA9IGZyYW1lLmdldERlY2xhcmF0aW9uKCksXG4gICAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gZGVjbGFyYXRpb24uZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgICAgICAgICAgbWV0YUxlbW1hID0gbG9jYWxDb250ZXh0LmZpbmRNZXRhTGVtbWFCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICAgICAgICBtZXRhdGhlb3JlbSA9IGxvY2FsQ29udGV4dC5maW5kTWV0YXRoZW9yZW1CeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbSA9IChtZXRhTGVtbWEgfHwgbWV0YXRoZW9yZW0pOyAgLy8vXG5cbiAgICAgICAgICAgIGlmIChtZXRhTGVtbWFNZXRhdGhlb3JlbSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCBkZWNsYXJhdGlvbk1hdGNoZXNNZXRhTGVtbWFNZXRhdGhlb3JlbSA9IGRlY2xhcmF0aW9uLm1hdGNoTWV0YUxlbW1hT3JNZXRhVGhlb3JlbShtZXRhTGVtbWFNZXRhdGhlb3JlbSksXG4gICAgICAgICAgICAgICAgICAgIGp1ZGdlbWVudE1hdGNoZXNNZXRhTGVtbWFNZXRhdGhlb3JlbSA9IGp1ZGdlbWVudC5tYXRjaE1ldGFMZW1tYU9yTWV0YVRoZW9yZW0obWV0YUxlbW1hTWV0YXRoZW9yZW0pO1xuXG4gICAgICAgICAgICAgIGRlcml2ZWRKdWRnZW1lbnRWZXJpZmllZCA9IChkZWNsYXJhdGlvbk1hdGNoZXNNZXRhTGVtbWFNZXRhdGhlb3JlbSAmJiBqdWRnZW1lbnRNYXRjaGVzTWV0YUxlbW1hTWV0YXRoZW9yZW0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZXJlIGFyZSBubyBtZXRhLWxlbW1hcyBvciBtZXRhdGhlb3JlbXMgY29ycmVzcG9uZGluZyB0byB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmAsIGp1ZGdlbWVudE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBmcmFtZVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoZnJhbWVOb2RlKTtcblxuICAgICAgICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGBUaGUgJyR7ZnJhbWVTdHJpbmd9JyBpcyBub3Qgc2luZ3VsYXIuYCwganVkZ2VtZW50Tm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVGhlcmUgaXMgbm8ganVkZ2VtZW50IHByZXNlbnQgZm9yIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCwganVkZ2VtZW50Tm9kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRlcml2ZWRKdWRnZW1lbnRWZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgZGVyaXZlZCBqdWRnZW1lbnQuYCwganVkZ2VtZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRlcml2ZWRKdWRnZW1lbnRWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVkSnVkZ2VtZW50KGp1ZGdlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlZEp1ZGdlbWVudFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKCFkZXJpdmVkKSB7XG4gICAgY29uc3QganVkZ2VtZW50U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhqdWRnZW1lbnROb2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBzdGF0ZWQganVkZ2VtZW50Li4uYCwganVkZ2VtZW50Tm9kZSk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KGp1ZGdlbWVudE5vZGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gdmVyaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGZyYW1lcyA9IFtdLFxuICAgICAgICAgICAgZnJhbWVOb2RlID0gZnJhbWVOb2RlUXVlcnkoanVkZ2VtZW50Tm9kZSksXG4gICAgICAgICAgICBmcmFtZVZlcmlmaWVkID0gdmVyaWZ5RnJhbWUoZnJhbWVOb2RlLCBmcmFtZXMsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAoZnJhbWVWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBmaXJzdEZyYW1lID0gZmlyc3QoZnJhbWVzKSxcbiAgICAgICAgICAgICAgZnJhbWUgPSBmaXJzdEZyYW1lLCAvLy9cbiAgICAgICAgICAgICAganVkZ2VtZW50ID0gSnVkZ2VtZW50LmZyb21KdWRnZW1lbnROb2RlRnJhbWVBbmRNZXRhdmFyaWFibGVOb2RlKGp1ZGdlbWVudE5vZGUsIGZyYW1lLCBtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgICAganVkZ2VtZW50QXNzaWdubWVudCA9IEp1ZGdlbWVudEFzc2lnbm1lbnQuZnJvbUp1ZGdlbWVudChqdWRnZW1lbnQpLFxuICAgICAgICAgICAgICBhc3NpZ25tZW50ID0ganVkZ2VtZW50QXNzaWdubWVudDtcblxuICAgICAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuXG4gICAgICAgIHN0YXRlZEp1ZGdlbWVudFZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVkSnVkZ2VtZW50VmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIHN0YXRlZCBqdWRnZW1lbnQuYCwganVkZ2VtZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlZEp1ZGdlbWVudFZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBtZXRhdmFyaWFibGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmAsIG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGxvY2FsQ29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG1ldGFUeXBlID0gbWV0YXZhcmlhYmxlLmdldE1ldGFUeXBlKCk7XG5cbiAgICBpZiAobWV0YVR5cGUgPT09IGZyYW1lTWV0YVR5cGUpIHtcbiAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZnJhbWVNZXRhVHlwZU5hbWUgPSBmcmFtZU1ldGFUeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuYXNTdHJpbmcoKTtcblxuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGBUaGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgbWV0YS10eXBlIGlzICcke21ldGFUeXBlU3RyaW5nfScgd2hlbiBpdCBzaG91bGQgYmUgJyR7ZnJhbWVNZXRhVHlwZU5hbWV9Jy5gLCBtZXRhdmFyaWFibGVOb2RlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGBUaGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGlzIG5vdCBwcmVzZW50Jy5gLCBtZXRhdmFyaWFibGVOb2RlKTtcbiAgfVxuXG4gIGlmIChtZXRhdmFyaWFibGVWZXJpZmllZCkge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gLCBtZXRhdmFyaWFibGVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlKdWRnZW1lbnQiLCJmcmFtZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsImp1ZGdlbWVudE5vZGUiLCJhc3NpZ25tZW50cyIsImRlcml2ZWQiLCJsb2NhbENvbnRleHQiLCJqdWRnZW1lbnRWZXJpZmllZCIsImp1ZGdlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwidmVyaWZ5SnVkZ2VtZW50RnVuY3Rpb25zIiwidmVyaWZ5RGVyaXZlZEp1ZGdlbWVudCIsInZlcmlmeVN0YXRlZEp1ZGdlbWVudCIsInNvbWUiLCJ2ZXJpZnlKdWRnZW1lbnRGdW5jdGlvbiIsImRlYnVnIiwiZGVyaXZlZEp1ZGdlbWVudFZlcmlmaWVkIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZVZlcmlmaWVkIiwidmVyaWZ5TWV0YXZhcmlhYmxlIiwianVkZ2VtZW50IiwiZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTm9kZSIsImZyYW1lcyIsImZyYW1lTm9kZSIsImZyYW1lVmVyaWZpZWQiLCJ2ZXJpZnlGcmFtZSIsImZpcnN0RnJhbWUiLCJmaXJzdCIsImZyYW1lIiwiZnJhbWVTaW5ndWxhciIsImlzU2luZ3VsYXIiLCJkZWNsYXJhdGlvbiIsImdldERlY2xhcmF0aW9uIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGFMZW1tYSIsImZpbmRNZXRhTGVtbWFCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdGhlb3JlbSIsImZpbmRNZXRhdGhlb3JlbUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtIiwiZGVjbGFyYXRpb25NYXRjaGVzTWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJtYXRjaE1ldGFMZW1tYU9yTWV0YVRoZW9yZW0iLCJqdWRnZW1lbnRNYXRjaGVzTWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJtZXRhdmFyaWFibGVTdHJpbmciLCJmcmFtZVN0cmluZyIsInN0YXRlZEp1ZGdlbWVudFZlcmlmaWVkIiwiSnVkZ2VtZW50IiwiZnJvbUp1ZGdlbWVudE5vZGVGcmFtZUFuZE1ldGF2YXJpYWJsZU5vZGUiLCJqdWRnZW1lbnRBc3NpZ25tZW50IiwiSnVkZ2VtZW50QXNzaWdubWVudCIsImZyb21KdWRnZW1lbnQiLCJhc3NpZ25tZW50IiwicHVzaCIsIm1ldGF2YXJpYWJsZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhVHlwZSIsImdldE1ldGFUeXBlIiwiZnJhbWVNZXRhVHlwZSIsImZyYW1lTWV0YVR5cGVOYW1lIiwiZ2V0TmFtZSIsIm1ldGFUeXBlU3RyaW5nIiwiYXNTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBd0JBOzs7Z0VBWEY7NERBQ0U7NkRBQ0U7aUVBQ007cUJBRVY7cUJBQ0k7Ozs7OztBQUUxQixJQUFNQyxpQkFBaUJDLElBQUFBLGdCQUFTLEVBQUMsc0JBQzNCQyx3QkFBd0JELElBQUFBLGdCQUFTLEVBQUM7QUFFekIsU0FBU0YsZ0JBQWdCSSxhQUFhLEVBQUVDLFdBQVcsRUFBRUMsT0FBTyxFQUFFQyxZQUFZO0lBQ3ZGLElBQUlDO0lBRUosSUFBTUMsa0JBQWtCRixhQUFhRyxZQUFZLENBQUNOO0lBRWxERyxhQUFhSSxLQUFLLENBQUMsQUFBQyxrQkFBaUMsT0FBaEJGLGlCQUFnQixtQkFBaUJMO0lBRXRFLElBQU1RLDJCQUEy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