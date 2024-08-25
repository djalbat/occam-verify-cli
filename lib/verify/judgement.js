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
        var judgementString = localMetaContext.nodeAsString(judgementNode);
        localMetaContext.trace("Verifying the '".concat(judgementString, "' derived judgement..."), judgementNode);
        var metavariableNode = metavariableNodeQuery(judgementNode), metavariableVerified = verifyMetavariable(metavariableNode, localMetaContext);
        if (metavariableVerified) {
            var judgement = localMetaContext.findJudgementByMetavariableNode(metavariableNode);
            if (judgement !== null) {
                var frames = [], frameNode = frameNodeQuery(judgementNode), frameVerified = (0, _frame.default)(frameNode, frames, derived, localMetaContext);
                if (frameVerified) {
                    var firstFrame = (0, _array.first)(frames), frame = firstFrame, frameSingular = frame.isSingular();
                    if (frameSingular) {
                        var declaration = frame.getDeclaration(), metavariableNode1 = declaration.getMetavariableNode(), metaLemma = localMetaContext.findMetaLemmaByMetavariableNode(metavariableNode1), metatheorem = localMetaContext.findMetatheoremByMetavariableNode(metavariableNode1), metaLemmaMetatheorem = metaLemma || metatheorem; ///
                        if (metaLemmaMetatheorem !== null) {
                            var judgementMatchesMetaLemmaMetatheorem = judgement.matchMetaLemmaOrMetaTheorem(metaLemmaMetatheorem), declarationMatchesMetaLemmaMetatheorem = declaration.matchMetaLemmaOrMetaTheorem(metaLemmaMetatheorem);
                            derivedJudgementVerified = judgementMatchesMetaLemmaMetatheorem && declarationMatchesMetaLemmaMetatheorem;
                        } else {
                            var metavariableString = localMetaContext.nodeAsString(metavariableNode1);
                            localMetaContext.debug("There are no meta-lemmas or metatheorems corresponding to the '".concat(metavariableString, "' metavariable."), judgementNode);
                        }
                    } else {
                        var frameString = localMetaContext.nodeAsString(frameNode);
                        localMetaContext.debug("The '".concat(frameString, "' is not singular."), judgementNode);
                    }
                }
            } else {
                var metavariableString1 = localMetaContext.nodeAsString(metavariableNode);
                localMetaContext.debug("There is no judgement present for the '".concat(metavariableString1, "' metavariable."), judgementNode);
            }
        }
        if (derivedJudgementVerified) {
            localMetaContext.debug("...verified the '".concat(judgementString, "' derived judgement."), judgementNode);
        }
    }
    return derivedJudgementVerified;
}
function verifyStatedJudgement(judgementNode, assignments, derived, localMetaContext) {
    var statedJudgementVerified = false;
    if (!derived) {
        var judgementString = localMetaContext.nodeAsString(judgementNode);
        localMetaContext.trace("Verifying the '".concat(judgementString, "' stated judgement..."), judgementNode);
        var metavariableNode = metavariableNodeQuery(judgementNode), metavariableVerified = verifyMetavariable(metavariableNode, localMetaContext);
        if (metavariableVerified) {
            var judgementPresent = localMetaContext.isJudgementPresentByMetavariableNode(metavariableNode);
            if (!judgementPresent) {
                var frames = [], frameNode = frameNodeQuery(judgementNode), frameVerified = (0, _frame.default)(frameNode, frames, derived, localMetaContext);
                if (frameVerified) {
                    var firstFrame = (0, _array.first)(frames), frame = firstFrame, judgement = _judgement.default.fromJudgementNodeFrameAndMetavariableNode(judgementNode, frame, metavariableNode), judgementAssignment = _judgement1.default.fromJudgement(judgement), assignment = judgementAssignment;
                    assignments.push(assignment);
                    statedJudgementVerified = true;
                }
            } else {
                var metavariableString = localMetaContext.nodeAsString(metavariableNode);
                localMetaContext.debug("There is already a judgement present for the '".concat(metavariableString, "' metavariable."), judgementNode);
            }
        }
        if (statedJudgementVerified) {
            localMetaContext.debug("...verified the '".concat(judgementString, "' stated judgement."), judgementNode);
        }
    }
    return statedJudgementVerified;
}
function verifyMetavariable(metavariableNode, localMetaContext) {
    var metavariableVerified = false;
    var metavariableString = localMetaContext.nodeAsString(metavariableNode);
    localMetaContext.trace("Verifying the '".concat(metavariableString, "' metavariable..."), metavariableNode);
    var metavariable = localMetaContext.findMetavariableByMetavariableNode(metavariableNode, localMetaContext);
    if (metavariable !== null) {
        var metaType = metavariable.getMetaType();
        if (metaType === _frame1.default) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvanVkZ2VtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSnVkZ2VtZW50IGZyb20gXCIuLi9qdWRnZW1lbnRcIjtcbmltcG9ydCB2ZXJpZnlGcmFtZSBmcm9tIFwiLi4vdmVyaWZ5L2ZyYW1lXCI7XG5pbXBvcnQgZnJhbWVNZXRhVHlwZSBmcm9tIFwiLi4vbWV0YVR5cGUvZnJhbWVcIjtcbmltcG9ydCBKdWRnZW1lbnRBc3NpZ25tZW50IGZyb20gXCIuLi9hc3NpZ25tZW50L2p1ZGdlbWVudFwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgZnJhbWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvanVkZ2VtZW50L2ZyYW1lIVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9qdWRnZW1lbnQvbWV0YXZhcmlhYmxlIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5SnVkZ2VtZW50KGp1ZGdlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gIGxldCBqdWRnZW1lbnRWZXJpZmllZDtcblxuICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSBsb2NhbE1ldGFDb250ZXh0Lm5vZGVBc1N0cmluZyhqdWRnZW1lbnROb2RlKTtcblxuICBsb2NhbE1ldGFDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudC4uLmAsIGp1ZGdlbWVudE5vZGUpO1xuXG4gIGNvbnN0IHZlcmlmeUp1ZGdlbWVudEZ1bmN0aW9ucyA9IFtcbiAgICB2ZXJpZnlEZXJpdmVkSnVkZ2VtZW50LFxuICAgIHZlcmlmeVN0YXRlZEp1ZGdlbWVudFxuICBdO1xuXG4gIGp1ZGdlbWVudFZlcmlmaWVkID0gdmVyaWZ5SnVkZ2VtZW50RnVuY3Rpb25zLnNvbWUoKHZlcmlmeUp1ZGdlbWVudEZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QganVkZ2VtZW50VmVyaWZpZWQgPSB2ZXJpZnlKdWRnZW1lbnRGdW5jdGlvbihqdWRnZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICBpZiAoanVkZ2VtZW50VmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGp1ZGdlbWVudFZlcmlmaWVkKSB7XG4gICAgbG9jYWxNZXRhQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudC5gLCBqdWRnZW1lbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiBqdWRnZW1lbnRWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5RGVyaXZlZEp1ZGdlbWVudChqdWRnZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxNZXRhQ29udGV4dCkge1xuICBsZXQgZGVyaXZlZEp1ZGdlbWVudFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKGRlcml2ZWQpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSBsb2NhbE1ldGFDb250ZXh0Lm5vZGVBc1N0cmluZyhqdWRnZW1lbnROb2RlKTtcblxuICAgIGxvY2FsTWV0YUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgZGVyaXZlZCBqdWRnZW1lbnQuLi5gLCBqdWRnZW1lbnROb2RlKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoanVkZ2VtZW50Tm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGp1ZGdlbWVudCA9IGxvY2FsTWV0YUNvbnRleHQuZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKGp1ZGdlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBmcmFtZXMgPSBbXSxcbiAgICAgICAgICAgICAgZnJhbWVOb2RlID0gZnJhbWVOb2RlUXVlcnkoanVkZ2VtZW50Tm9kZSksXG4gICAgICAgICAgICAgIGZyYW1lVmVyaWZpZWQgPSB2ZXJpZnlGcmFtZShmcmFtZU5vZGUsIGZyYW1lcywgZGVyaXZlZCwgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKGZyYW1lVmVyaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCBmaXJzdEZyYW1lID0gZmlyc3QoZnJhbWVzKSxcbiAgICAgICAgICAgICAgICBmcmFtZSA9IGZpcnN0RnJhbWUsIC8vL1xuICAgICAgICAgICAgICAgIGZyYW1lU2luZ3VsYXIgPSBmcmFtZS5pc1Npbmd1bGFyKCk7XG5cbiAgICAgICAgICBpZiAoZnJhbWVTaW5ndWxhcikge1xuICAgICAgICAgICAgY29uc3QgZGVjbGFyYXRpb24gPSBmcmFtZS5nZXREZWNsYXJhdGlvbigpLFxuICAgICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGRlY2xhcmF0aW9uLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICAgICAgICAgIG1ldGFMZW1tYSA9IGxvY2FsTWV0YUNvbnRleHQuZmluZE1ldGFMZW1tYUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgICAgICAgIG1ldGF0aGVvcmVtID0gbG9jYWxNZXRhQ29udGV4dC5maW5kTWV0YXRoZW9yZW1CeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbSA9IChtZXRhTGVtbWEgfHwgbWV0YXRoZW9yZW0pOyAgLy8vXG5cbiAgICAgICAgICAgIGlmIChtZXRhTGVtbWFNZXRhdGhlb3JlbSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCBqdWRnZW1lbnRNYXRjaGVzTWV0YUxlbW1hTWV0YXRoZW9yZW0gPSBqdWRnZW1lbnQubWF0Y2hNZXRhTGVtbWFPck1ldGFUaGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtKSxcbiAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25NYXRjaGVzTWV0YUxlbW1hTWV0YXRoZW9yZW0gPSBkZWNsYXJhdGlvbi5tYXRjaE1ldGFMZW1tYU9yTWV0YVRoZW9yZW0obWV0YUxlbW1hTWV0YXRoZW9yZW0pO1xuXG4gICAgICAgICAgICAgIGRlcml2ZWRKdWRnZW1lbnRWZXJpZmllZCA9IChqdWRnZW1lbnRNYXRjaGVzTWV0YUxlbW1hTWV0YXRoZW9yZW0gJiYgZGVjbGFyYXRpb25NYXRjaGVzTWV0YUxlbW1hTWV0YXRoZW9yZW0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gbG9jYWxNZXRhQ29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgICAgbG9jYWxNZXRhQ29udGV4dC5kZWJ1ZyhgVGhlcmUgYXJlIG5vIG1ldGEtbGVtbWFzIG9yIG1ldGF0aGVvcmVtcyBjb3JyZXNwb25kaW5nIHRvIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCwganVkZ2VtZW50Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gbG9jYWxNZXRhQ29udGV4dC5ub2RlQXNTdHJpbmcoZnJhbWVOb2RlKTtcblxuICAgICAgICAgICAgbG9jYWxNZXRhQ29udGV4dC5kZWJ1ZyhgVGhlICcke2ZyYW1lU3RyaW5nfScgaXMgbm90IHNpbmd1bGFyLmAsIGp1ZGdlbWVudE5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gbG9jYWxNZXRhQ29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgbG9jYWxNZXRhQ29udGV4dC5kZWJ1ZyhgVGhlcmUgaXMgbm8ganVkZ2VtZW50IHByZXNlbnQgZm9yIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCwganVkZ2VtZW50Tm9kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRlcml2ZWRKdWRnZW1lbnRWZXJpZmllZCkge1xuICAgICAgbG9jYWxNZXRhQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGRlcml2ZWQganVkZ2VtZW50LmAsIGp1ZGdlbWVudE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZXJpdmVkSnVkZ2VtZW50VmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlZEp1ZGdlbWVudChqdWRnZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxNZXRhQ29udGV4dCkge1xuICBsZXQgc3RhdGVkSnVkZ2VtZW50VmVyaWZpZWQgPSBmYWxzZTtcblxuICBpZiAoIWRlcml2ZWQpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSBsb2NhbE1ldGFDb250ZXh0Lm5vZGVBc1N0cmluZyhqdWRnZW1lbnROb2RlKTtcblxuICAgIGxvY2FsTWV0YUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgc3RhdGVkIGp1ZGdlbWVudC4uLmAsIGp1ZGdlbWVudE5vZGUpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShqdWRnZW1lbnROb2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVWZXJpZmllZCA9IHZlcmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVWZXJpZmllZCkge1xuICAgICAgY29uc3QganVkZ2VtZW50UHJlc2VudCA9IGxvY2FsTWV0YUNvbnRleHQuaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAoIWp1ZGdlbWVudFByZXNlbnQpIHtcbiAgICAgICAgY29uc3QgZnJhbWVzID0gW10sXG4gICAgICAgICAgICAgIGZyYW1lTm9kZSA9IGZyYW1lTm9kZVF1ZXJ5KGp1ZGdlbWVudE5vZGUpLFxuICAgICAgICAgICAgICBmcmFtZVZlcmlmaWVkID0gdmVyaWZ5RnJhbWUoZnJhbWVOb2RlLCBmcmFtZXMsIGRlcml2ZWQsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgICAgIGlmIChmcmFtZVZlcmlmaWVkKSB7XG4gICAgICAgICAgY29uc3QgZmlyc3RGcmFtZSA9IGZpcnN0KGZyYW1lcyksXG4gICAgICAgICAgICAgICAgZnJhbWUgPSBmaXJzdEZyYW1lLCAvLy9cbiAgICAgICAgICAgICAgICBqdWRnZW1lbnQgPSBKdWRnZW1lbnQuZnJvbUp1ZGdlbWVudE5vZGVGcmFtZUFuZE1ldGF2YXJpYWJsZU5vZGUoanVkZ2VtZW50Tm9kZSwgZnJhbWUsIG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgICAgIGp1ZGdlbWVudEFzc2lnbm1lbnQgPSBKdWRnZW1lbnRBc3NpZ25tZW50LmZyb21KdWRnZW1lbnQoanVkZ2VtZW50KSxcbiAgICAgICAgICAgICAgICBhc3NpZ25tZW50ID0ganVkZ2VtZW50QXNzaWdubWVudDtcblxuICAgICAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG5cbiAgICAgICAgICBzdGF0ZWRKdWRnZW1lbnRWZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IGxvY2FsTWV0YUNvbnRleHQubm9kZUFzU3RyaW5nKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgIGxvY2FsTWV0YUNvbnRleHQuZGVidWcoYFRoZXJlIGlzIGFscmVhZHkgYSBqdWRnZW1lbnQgcHJlc2VudCBmb3IgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gLCBqdWRnZW1lbnROb2RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVkSnVkZ2VtZW50VmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsTWV0YUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBzdGF0ZWQganVkZ2VtZW50LmAsIGp1ZGdlbWVudE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZWRKdWRnZW1lbnRWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsTWV0YUNvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gbG9jYWxNZXRhQ29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgbG9jYWxNZXRhQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gLCBtZXRhdmFyaWFibGVOb2RlKTtcblxuICBjb25zdCBtZXRhdmFyaWFibGUgPSBsb2NhbE1ldGFDb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG1ldGFUeXBlID0gbWV0YXZhcmlhYmxlLmdldE1ldGFUeXBlKCk7XG5cbiAgICBpZiAobWV0YVR5cGUgPT09IGZyYW1lTWV0YVR5cGUpIHtcbiAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZnJhbWVNZXRhVHlwZU5hbWUgPSBmcmFtZU1ldGFUeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuYXNTdHJpbmcoKTtcblxuICAgICAgbG9jYWxNZXRhQ29udGV4dC5kZWJ1ZyhgVGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSdzIG1ldGEtdHlwZSBpcyAnJHttZXRhVHlwZVN0cmluZ30nIHdoZW4gaXQgc2hvdWxkIGJlICcke2ZyYW1lTWV0YVR5cGVOYW1lfScuYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxvY2FsTWV0YUNvbnRleHQuZGVidWcoYFRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgaXMgbm90IHByZXNlbnQnLmAsIG1ldGF2YXJpYWJsZU5vZGUpO1xuICB9XG5cbiAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgbG9jYWxNZXRhQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gLCBtZXRhdmFyaWFibGVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlKdWRnZW1lbnQiLCJmcmFtZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsImp1ZGdlbWVudE5vZGUiLCJhc3NpZ25tZW50cyIsImRlcml2ZWQiLCJsb2NhbE1ldGFDb250ZXh0IiwianVkZ2VtZW50VmVyaWZpZWQiLCJqdWRnZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInZlcmlmeUp1ZGdlbWVudEZ1bmN0aW9ucyIsInZlcmlmeURlcml2ZWRKdWRnZW1lbnQiLCJ2ZXJpZnlTdGF0ZWRKdWRnZW1lbnQiLCJzb21lIiwidmVyaWZ5SnVkZ2VtZW50RnVuY3Rpb24iLCJkZWJ1ZyIsImRlcml2ZWRKdWRnZW1lbnRWZXJpZmllZCIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVWZXJpZmllZCIsInZlcmlmeU1ldGF2YXJpYWJsZSIsImp1ZGdlbWVudCIsImZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJmcmFtZXMiLCJmcmFtZU5vZGUiLCJmcmFtZVZlcmlmaWVkIiwidmVyaWZ5RnJhbWUiLCJmaXJzdEZyYW1lIiwiZmlyc3QiLCJmcmFtZSIsImZyYW1lU2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwiZGVjbGFyYXRpb24iLCJnZXREZWNsYXJhdGlvbiIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhTGVtbWEiLCJmaW5kTWV0YUxlbW1hQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXRoZW9yZW0iLCJmaW5kTWV0YXRoZW9yZW1CeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhTGVtbWFNZXRhdGhlb3JlbSIsImp1ZGdlbWVudE1hdGNoZXNNZXRhTGVtbWFNZXRhdGhlb3JlbSIsIm1hdGNoTWV0YUxlbW1hT3JNZXRhVGhlb3JlbSIsImRlY2xhcmF0aW9uTWF0Y2hlc01ldGFMZW1tYU1ldGF0aGVvcmVtIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwiZnJhbWVTdHJpbmciLCJzdGF0ZWRKdWRnZW1lbnRWZXJpZmllZCIsImp1ZGdlbWVudFByZXNlbnQiLCJpc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJKdWRnZW1lbnQiLCJmcm9tSnVkZ2VtZW50Tm9kZUZyYW1lQW5kTWV0YXZhcmlhYmxlTm9kZSIsImp1ZGdlbWVudEFzc2lnbm1lbnQiLCJKdWRnZW1lbnRBc3NpZ25tZW50IiwiZnJvbUp1ZGdlbWVudCIsImFzc2lnbm1lbnQiLCJwdXNoIiwibWV0YXZhcmlhYmxlIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGFUeXBlIiwiZ2V0TWV0YVR5cGUiLCJmcmFtZU1ldGFUeXBlIiwiZnJhbWVNZXRhVHlwZU5hbWUiLCJnZXROYW1lIiwibWV0YVR5cGVTdHJpbmciLCJhc1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUF3QkE7OztnRUFYRjs0REFDRTs2REFDRTtpRUFDTTtxQkFFVjtxQkFDSTs7Ozs7O0FBRTFCLElBQU1DLGlCQUFpQkMsSUFBQUEsZ0JBQVMsRUFBQyxzQkFDM0JDLHdCQUF3QkQsSUFBQUEsZ0JBQVMsRUFBQztBQUV6QixTQUFTRixnQkFBZ0JJLGFBQWEsRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLGdCQUFnQjtJQUMzRixJQUFJQztJQUVKLElBQU1DLGtCQUFrQkYsaUJBQWlCRyxZQUFZLENBQUNOO0lBRXRERyxpQkFBaUJJLEtBQUssQ0FBQyxBQUFDLGtCQUFpQyxPQUFoQkYsaUJBQWdCLG1CQUFpQkw7SUFFMUUsSUFBTVEsMkJBQTJCO1FBQy9CQztRQUNBQztLQUNEO0lBRUROLG9CQUFvQkkseUJBQXlCRyxJQUFJLENBQUMsU0FBQ0M7UUFDakQsSUFBTVIsb0JBQW9CUSx3QkFBd0JaLGVBQWVDLGFBQWFDLFNBQVNDO1FBRXZGLElBQUlDLG1CQUFtQjtZQUNyQixPQUFPO1FBQ1Q7SUFDRjtJQUVBLElBQUlBLG1CQUFtQjtRQUNyQkQsaUJBQWlCVSxLQUFLLENBQUMsQUFBQyxvQkFBbUMsT0FBaEJSLGlCQUFnQixpQkFBZUw7SUFDNUU7SUFFQSxPQUFPSTtBQUNUO0FBRUEsU0FBU0ssdUJBQXVCVCxhQUFhLEVBQUVDLFdBQVcsRUFBRUMsT0FBTyxFQUFFQyxnQkFBZ0I7SUFDbkYsSUFBSVcs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