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
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("../verifier/metaLevel"));
var _judgement1 = /*#__PURE__*/ _interop_require_default(require("../assignment/judgement"));
var _array = require("../utilities/array");
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var frameNodeQuery = (0, _query.nodeQuery)("/judgement/frame!"), metavariableNodeQuery = (0, _query.nodeQuery)("/judgement/metavariable!");
var verifyJudgementFunctions = [
    verifyDerivedJudgement,
    verifyStatedJudgement
];
function verifyJudgement(judgementNode, assignments, derived, localContext) {
    var judgementVerified = false;
    var judgementString = localContext.nodeAsString(judgementNode);
    localContext.trace("Verifying the '".concat(judgementString, "' judgement..."), judgementNode);
    var verified = _metaLevel.default.verify(judgementNode, assignments, derived, localContext);
    if (verified) {
        judgementVerified = verifyJudgementFunctions.some(function(verifyJudgementFunction) {
            var judgementVerified = verifyJudgementFunction(judgementNode, assignments, derived, localContext);
            if (judgementVerified) {
                return true;
            }
        });
    }
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
                            var metaLemmaMetatheoremUnifiedWithDeclaration = declaration.unifyMetaLemmaOrMetaTheorem(metaLemmaMetatheorem), metaLemmaMetatheoremUnifiedWithJudgement = judgement.unifyMetaLemmaOrMetaTheorem(metaLemmaMetatheorem);
                            derivedJudgementVerified = metaLemmaMetatheoremUnifiedWithDeclaration && metaLemmaMetatheoremUnifiedWithJudgement;
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
    var metavariable = localContext.findMetavariableByMetavariableNode(metavariableNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvanVkZ2VtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSnVkZ2VtZW50IGZyb20gXCIuLi9qdWRnZW1lbnRcIjtcbmltcG9ydCB2ZXJpZnlGcmFtZSBmcm9tIFwiLi4vdmVyaWZ5L2ZyYW1lXCI7XG5pbXBvcnQgZnJhbWVNZXRhVHlwZSBmcm9tIFwiLi4vbWV0YVR5cGUvZnJhbWVcIjtcbmltcG9ydCBtZXRhTGV2ZWxWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXIvbWV0YUxldmVsXCI7XG5pbXBvcnQgSnVkZ2VtZW50QXNzaWdubWVudCBmcm9tIFwiLi4vYXNzaWdubWVudC9qdWRnZW1lbnRcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2p1ZGdlbWVudC9mcmFtZSFcIiksXG4gICAgICBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvanVkZ2VtZW50L21ldGF2YXJpYWJsZSFcIik7XG5cbmNvbnN0IHZlcmlmeUp1ZGdlbWVudEZ1bmN0aW9ucyA9IFtcbiAgdmVyaWZ5RGVyaXZlZEp1ZGdlbWVudCxcbiAgdmVyaWZ5U3RhdGVkSnVkZ2VtZW50XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlKdWRnZW1lbnQoanVkZ2VtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQganVkZ2VtZW50VmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGp1ZGdlbWVudE5vZGUpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQuLi5gLCBqdWRnZW1lbnROb2RlKTtcblxuICBjb25zdCB2ZXJpZmllZCA9IG1ldGFMZXZlbFZlcmlmaWVyLnZlcmlmeShqdWRnZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KTtcblxuICBpZiAodmVyaWZpZWQpIHtcbiAgICBqdWRnZW1lbnRWZXJpZmllZCA9IHZlcmlmeUp1ZGdlbWVudEZ1bmN0aW9ucy5zb21lKCh2ZXJpZnlKdWRnZW1lbnRGdW5jdGlvbikgPT4ge1xuICAgICAgY29uc3QganVkZ2VtZW50VmVyaWZpZWQgPSB2ZXJpZnlKdWRnZW1lbnRGdW5jdGlvbihqdWRnZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKGp1ZGdlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKGp1ZGdlbWVudFZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50LmAsIGp1ZGdlbWVudE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGp1ZGdlbWVudFZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlEZXJpdmVkSnVkZ2VtZW50KGp1ZGdlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGRlcml2ZWRKdWRnZW1lbnRWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmIChkZXJpdmVkKSB7XG4gICAgY29uc3QganVkZ2VtZW50U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhqdWRnZW1lbnROb2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBkZXJpdmVkIGp1ZGdlbWVudC4uLmAsIGp1ZGdlbWVudE5vZGUpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShqdWRnZW1lbnROb2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVWZXJpZmllZCA9IHZlcmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBqdWRnZW1lbnQgPSBsb2NhbENvbnRleHQuZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKGp1ZGdlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBmcmFtZXMgPSBbXSxcbiAgICAgICAgICAgICAgZnJhbWVOb2RlID0gZnJhbWVOb2RlUXVlcnkoanVkZ2VtZW50Tm9kZSksXG4gICAgICAgICAgICAgIGZyYW1lVmVyaWZpZWQgPSB2ZXJpZnlGcmFtZShmcmFtZU5vZGUsIGZyYW1lcywgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKGZyYW1lVmVyaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCBmaXJzdEZyYW1lID0gZmlyc3QoZnJhbWVzKSxcbiAgICAgICAgICAgICAgICBmcmFtZSA9IGZpcnN0RnJhbWUsIC8vL1xuICAgICAgICAgICAgICAgIGZyYW1lU2luZ3VsYXIgPSBmcmFtZS5pc1Npbmd1bGFyKCk7XG5cbiAgICAgICAgICBpZiAoZnJhbWVTaW5ndWxhcikge1xuICAgICAgICAgICAgY29uc3QgZGVjbGFyYXRpb24gPSBmcmFtZS5nZXREZWNsYXJhdGlvbigpLFxuICAgICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGRlY2xhcmF0aW9uLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICAgICAgICAgIG1ldGFMZW1tYSA9IGxvY2FsQ29udGV4dC5maW5kTWV0YUxlbW1hQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgICAgICAgbWV0YXRoZW9yZW0gPSBsb2NhbENvbnRleHQuZmluZE1ldGF0aGVvcmVtQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW0gPSAobWV0YUxlbW1hIHx8IG1ldGF0aGVvcmVtKTsgIC8vL1xuXG4gICAgICAgICAgICBpZiAobWV0YUxlbW1hTWV0YXRoZW9yZW0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkV2l0aERlY2xhcmF0aW9uID0gZGVjbGFyYXRpb24udW5pZnlNZXRhTGVtbWFPck1ldGFUaGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtKSxcbiAgICAgICAgICAgICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkV2l0aEp1ZGdlbWVudCA9IGp1ZGdlbWVudC51bmlmeU1ldGFMZW1tYU9yTWV0YVRoZW9yZW0obWV0YUxlbW1hTWV0YXRoZW9yZW0pO1xuXG4gICAgICAgICAgICAgIGRlcml2ZWRKdWRnZW1lbnRWZXJpZmllZCA9IChtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWRXaXRoRGVjbGFyYXRpb24gJiYgbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkV2l0aEp1ZGdlbWVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVGhlcmUgYXJlIG5vIG1ldGEtbGVtbWFzIG9yIG1ldGF0aGVvcmVtcyBjb3JyZXNwb25kaW5nIHRvIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCwganVkZ2VtZW50Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhmcmFtZU5vZGUpO1xuXG4gICAgICAgICAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZSAnJHtmcmFtZVN0cmluZ30nIGlzIG5vdCBzaW5ndWxhci5gLCBqdWRnZW1lbnROb2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGBUaGVyZSBpcyBubyBqdWRnZW1lbnQgcHJlc2VudCBmb3IgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gLCBqdWRnZW1lbnROb2RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGVyaXZlZEp1ZGdlbWVudFZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBkZXJpdmVkIGp1ZGdlbWVudC5gLCBqdWRnZW1lbnROb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVyaXZlZEp1ZGdlbWVudFZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZWRKdWRnZW1lbnQoanVkZ2VtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVkSnVkZ2VtZW50VmVyaWZpZWQgPSBmYWxzZTtcblxuICBpZiAoIWRlcml2ZWQpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGp1ZGdlbWVudE5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIHN0YXRlZCBqdWRnZW1lbnQuLi5gLCBqdWRnZW1lbnROb2RlKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoanVkZ2VtZW50Tm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVWZXJpZmllZCkge1xuICAgICAgY29uc3QgZnJhbWVzID0gW10sXG4gICAgICAgICAgICBmcmFtZU5vZGUgPSBmcmFtZU5vZGVRdWVyeShqdWRnZW1lbnROb2RlKSxcbiAgICAgICAgICAgIGZyYW1lVmVyaWZpZWQgPSB2ZXJpZnlGcmFtZShmcmFtZU5vZGUsIGZyYW1lcywgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChmcmFtZVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0RnJhbWUgPSBmaXJzdChmcmFtZXMpLFxuICAgICAgICAgICAgICBmcmFtZSA9IGZpcnN0RnJhbWUsIC8vL1xuICAgICAgICAgICAgICBqdWRnZW1lbnQgPSBKdWRnZW1lbnQuZnJvbUp1ZGdlbWVudE5vZGVGcmFtZUFuZE1ldGF2YXJpYWJsZU5vZGUoanVkZ2VtZW50Tm9kZSwgZnJhbWUsIG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgICBqdWRnZW1lbnRBc3NpZ25tZW50ID0gSnVkZ2VtZW50QXNzaWdubWVudC5mcm9tSnVkZ2VtZW50KGp1ZGdlbWVudCksXG4gICAgICAgICAgICAgIGFzc2lnbm1lbnQgPSBqdWRnZW1lbnRBc3NpZ25tZW50O1xuXG4gICAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG5cbiAgICAgICAgc3RhdGVkSnVkZ2VtZW50VmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGF0ZWRKdWRnZW1lbnRWZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgc3RhdGVkIGp1ZGdlbWVudC5gLCBqdWRnZW1lbnROb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVkSnVkZ2VtZW50VmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG1ldGFUeXBlID0gbWV0YXZhcmlhYmxlLmdldE1ldGFUeXBlKCk7XG5cbiAgICBpZiAobWV0YVR5cGUgPT09IGZyYW1lTWV0YVR5cGUpIHtcbiAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZnJhbWVNZXRhVHlwZU5hbWUgPSBmcmFtZU1ldGFUeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuYXNTdHJpbmcoKTtcblxuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGBUaGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgbWV0YS10eXBlIGlzICcke21ldGFUeXBlU3RyaW5nfScgd2hlbiBpdCBzaG91bGQgYmUgJyR7ZnJhbWVNZXRhVHlwZU5hbWV9Jy5gLCBtZXRhdmFyaWFibGVOb2RlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGBUaGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGlzIG5vdCBwcmVzZW50Jy5gLCBtZXRhdmFyaWFibGVOb2RlKTtcbiAgfVxuXG4gIGlmIChtZXRhdmFyaWFibGVWZXJpZmllZCkge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gLCBtZXRhdmFyaWFibGVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlKdWRnZW1lbnQiLCJmcmFtZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsInZlcmlmeUp1ZGdlbWVudEZ1bmN0aW9ucyIsInZlcmlmeURlcml2ZWRKdWRnZW1lbnQiLCJ2ZXJpZnlTdGF0ZWRKdWRnZW1lbnQiLCJqdWRnZW1lbnROb2RlIiwiYXNzaWdubWVudHMiLCJkZXJpdmVkIiwibG9jYWxDb250ZXh0IiwianVkZ2VtZW50VmVyaWZpZWQiLCJqdWRnZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInZlcmlmaWVkIiwibWV0YUxldmVsVmVyaWZpZXIiLCJ2ZXJpZnkiLCJzb21lIiwidmVyaWZ5SnVkZ2VtZW50RnVuY3Rpb24iLCJkZWJ1ZyIsImRlcml2ZWRKdWRnZW1lbnRWZXJpZmllZCIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVWZXJpZmllZCIsInZlcmlmeU1ldGF2YXJpYWJsZSIsImp1ZGdlbWVudCIsImZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJmcmFtZXMiLCJmcmFtZU5vZGUiLCJmcmFtZVZlcmlmaWVkIiwidmVyaWZ5RnJhbWUiLCJmaXJzdEZyYW1lIiwiZmlyc3QiLCJmcmFtZSIsImZyYW1lU2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwiZGVjbGFyYXRpb24iLCJnZXREZWNsYXJhdGlvbiIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhTGVtbWEiLCJmaW5kTWV0YUxlbW1hQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXRoZW9yZW0iLCJmaW5kTWV0YXRoZW9yZW1CeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhTGVtbWFNZXRhdGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZFdpdGhEZWNsYXJhdGlvbiIsInVuaWZ5TWV0YUxlbW1hT3JNZXRhVGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZFdpdGhKdWRnZW1lbnQiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJmcmFtZVN0cmluZyIsInN0YXRlZEp1ZGdlbWVudFZlcmlmaWVkIiwiSnVkZ2VtZW50IiwiZnJvbUp1ZGdlbWVudE5vZGVGcmFtZUFuZE1ldGF2YXJpYWJsZU5vZGUiLCJqdWRnZW1lbnRBc3NpZ25tZW50IiwiSnVkZ2VtZW50QXNzaWdubWVudCIsImZyb21KdWRnZW1lbnQiLCJhc3NpZ25tZW50IiwicHVzaCIsIm1ldGF2YXJpYWJsZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhVHlwZSIsImdldE1ldGFUeXBlIiwiZnJhbWVNZXRhVHlwZSIsImZyYW1lTWV0YVR5cGVOYW1lIiwiZ2V0TmFtZSIsIm1ldGFUeXBlU3RyaW5nIiwiYXNTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW1CQTs7O2VBQXdCQTs7O2dFQWpCRjs0REFDRTs2REFDRTtnRUFDSTtpRUFDRTtxQkFFVjtxQkFDSTs7Ozs7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