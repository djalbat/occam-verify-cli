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
            var frames = [], frameNode = frameNodeQuery(judgementNode), frameVerified = (0, _frame.default)(frameNode, frames, derived, localMetaContext);
            if (frameVerified) {
                var firstFrame = (0, _array.first)(frames), frame = firstFrame, judgement = _judgement.default.fromJudgementNodeFrameAndMetavariableNode(judgementNode, frame, metavariableNode), judgementAssignment = _judgement1.default.fromJudgement(judgement), assignment = judgementAssignment;
                assignments.push(assignment);
                statedJudgementVerified = true;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvanVkZ2VtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSnVkZ2VtZW50IGZyb20gXCIuLi9qdWRnZW1lbnRcIjtcbmltcG9ydCB2ZXJpZnlGcmFtZSBmcm9tIFwiLi4vdmVyaWZ5L2ZyYW1lXCI7XG5pbXBvcnQgZnJhbWVNZXRhVHlwZSBmcm9tIFwiLi4vbWV0YVR5cGUvZnJhbWVcIjtcbmltcG9ydCBKdWRnZW1lbnRBc3NpZ25tZW50IGZyb20gXCIuLi9hc3NpZ25tZW50L2p1ZGdlbWVudFwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgZnJhbWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvanVkZ2VtZW50L2ZyYW1lIVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9qdWRnZW1lbnQvbWV0YXZhcmlhYmxlIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5SnVkZ2VtZW50KGp1ZGdlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gIGxldCBqdWRnZW1lbnRWZXJpZmllZDtcblxuICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSBsb2NhbE1ldGFDb250ZXh0Lm5vZGVBc1N0cmluZyhqdWRnZW1lbnROb2RlKTtcblxuICBsb2NhbE1ldGFDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudC4uLmAsIGp1ZGdlbWVudE5vZGUpO1xuXG4gIGNvbnN0IHZlcmlmeUp1ZGdlbWVudEZ1bmN0aW9ucyA9IFtcbiAgICB2ZXJpZnlEZXJpdmVkSnVkZ2VtZW50LFxuICAgIHZlcmlmeVN0YXRlZEp1ZGdlbWVudFxuICBdO1xuXG4gIGp1ZGdlbWVudFZlcmlmaWVkID0gdmVyaWZ5SnVkZ2VtZW50RnVuY3Rpb25zLnNvbWUoKHZlcmlmeUp1ZGdlbWVudEZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QganVkZ2VtZW50VmVyaWZpZWQgPSB2ZXJpZnlKdWRnZW1lbnRGdW5jdGlvbihqdWRnZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICBpZiAoanVkZ2VtZW50VmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGp1ZGdlbWVudFZlcmlmaWVkKSB7XG4gICAgbG9jYWxNZXRhQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudC5gLCBqdWRnZW1lbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiBqdWRnZW1lbnRWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5RGVyaXZlZEp1ZGdlbWVudChqdWRnZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxNZXRhQ29udGV4dCkge1xuICBsZXQgZGVyaXZlZEp1ZGdlbWVudFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKGRlcml2ZWQpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSBsb2NhbE1ldGFDb250ZXh0Lm5vZGVBc1N0cmluZyhqdWRnZW1lbnROb2RlKTtcblxuICAgIGxvY2FsTWV0YUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgZGVyaXZlZCBqdWRnZW1lbnQuLi5gLCBqdWRnZW1lbnROb2RlKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoanVkZ2VtZW50Tm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGp1ZGdlbWVudCA9IGxvY2FsTWV0YUNvbnRleHQuZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKGp1ZGdlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBmcmFtZXMgPSBbXSxcbiAgICAgICAgICAgICAgZnJhbWVOb2RlID0gZnJhbWVOb2RlUXVlcnkoanVkZ2VtZW50Tm9kZSksXG4gICAgICAgICAgICAgIGZyYW1lVmVyaWZpZWQgPSB2ZXJpZnlGcmFtZShmcmFtZU5vZGUsIGZyYW1lcywgZGVyaXZlZCwgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKGZyYW1lVmVyaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCBmaXJzdEZyYW1lID0gZmlyc3QoZnJhbWVzKSxcbiAgICAgICAgICAgICAgICBmcmFtZSA9IGZpcnN0RnJhbWUsIC8vL1xuICAgICAgICAgICAgICAgIGZyYW1lU2luZ3VsYXIgPSBmcmFtZS5pc1Npbmd1bGFyKCk7XG5cbiAgICAgICAgICBpZiAoZnJhbWVTaW5ndWxhcikge1xuICAgICAgICAgICAgY29uc3QgZGVjbGFyYXRpb24gPSBmcmFtZS5nZXREZWNsYXJhdGlvbigpLFxuICAgICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGRlY2xhcmF0aW9uLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICAgICAgICAgIG1ldGFMZW1tYSA9IGxvY2FsTWV0YUNvbnRleHQuZmluZE1ldGFMZW1tYUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgICAgICAgIG1ldGF0aGVvcmVtID0gbG9jYWxNZXRhQ29udGV4dC5maW5kTWV0YXRoZW9yZW1CeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbSA9IChtZXRhTGVtbWEgfHwgbWV0YXRoZW9yZW0pOyAgLy8vXG5cbiAgICAgICAgICAgIGlmIChtZXRhTGVtbWFNZXRhdGhlb3JlbSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCBqdWRnZW1lbnRNYXRjaGVzTWV0YUxlbW1hTWV0YXRoZW9yZW0gPSBqdWRnZW1lbnQubWF0Y2hNZXRhTGVtbWFPck1ldGFUaGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtKSxcbiAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25NYXRjaGVzTWV0YUxlbW1hTWV0YXRoZW9yZW0gPSBkZWNsYXJhdGlvbi5tYXRjaE1ldGFMZW1tYU9yTWV0YVRoZW9yZW0obWV0YUxlbW1hTWV0YXRoZW9yZW0pO1xuXG4gICAgICAgICAgICAgIGRlcml2ZWRKdWRnZW1lbnRWZXJpZmllZCA9IChqdWRnZW1lbnRNYXRjaGVzTWV0YUxlbW1hTWV0YXRoZW9yZW0gJiYgZGVjbGFyYXRpb25NYXRjaGVzTWV0YUxlbW1hTWV0YXRoZW9yZW0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gbG9jYWxNZXRhQ29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgICAgbG9jYWxNZXRhQ29udGV4dC5kZWJ1ZyhgVGhlcmUgYXJlIG5vIG1ldGEtbGVtbWFzIG9yIG1ldGF0aGVvcmVtcyBjb3JyZXNwb25kaW5nIHRvIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCwganVkZ2VtZW50Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gbG9jYWxNZXRhQ29udGV4dC5ub2RlQXNTdHJpbmcoZnJhbWVOb2RlKTtcblxuICAgICAgICAgICAgbG9jYWxNZXRhQ29udGV4dC5kZWJ1ZyhgVGhlICcke2ZyYW1lU3RyaW5nfScgaXMgbm90IHNpbmd1bGFyLmAsIGp1ZGdlbWVudE5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gbG9jYWxNZXRhQ29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgbG9jYWxNZXRhQ29udGV4dC5kZWJ1ZyhgVGhlcmUgaXMgbm8ganVkZ2VtZW50IHByZXNlbnQgZm9yIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCwganVkZ2VtZW50Tm9kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRlcml2ZWRKdWRnZW1lbnRWZXJpZmllZCkge1xuICAgICAgbG9jYWxNZXRhQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGRlcml2ZWQganVkZ2VtZW50LmAsIGp1ZGdlbWVudE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZXJpdmVkSnVkZ2VtZW50VmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlZEp1ZGdlbWVudChqdWRnZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxNZXRhQ29udGV4dCkge1xuICBsZXQgc3RhdGVkSnVkZ2VtZW50VmVyaWZpZWQgPSBmYWxzZTtcblxuICBpZiAoIWRlcml2ZWQpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSBsb2NhbE1ldGFDb250ZXh0Lm5vZGVBc1N0cmluZyhqdWRnZW1lbnROb2RlKTtcblxuICAgIGxvY2FsTWV0YUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgc3RhdGVkIGp1ZGdlbWVudC4uLmAsIGp1ZGdlbWVudE5vZGUpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShqdWRnZW1lbnROb2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVWZXJpZmllZCA9IHZlcmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVWZXJpZmllZCkge1xuICAgICAgY29uc3QgZnJhbWVzID0gW10sXG4gICAgICAgICAgICBmcmFtZU5vZGUgPSBmcmFtZU5vZGVRdWVyeShqdWRnZW1lbnROb2RlKSxcbiAgICAgICAgICAgIGZyYW1lVmVyaWZpZWQgPSB2ZXJpZnlGcmFtZShmcmFtZU5vZGUsIGZyYW1lcywgZGVyaXZlZCwgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICAgIGlmIChmcmFtZVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0RnJhbWUgPSBmaXJzdChmcmFtZXMpLFxuICAgICAgICAgICAgICBmcmFtZSA9IGZpcnN0RnJhbWUsIC8vL1xuICAgICAgICAgICAgICBqdWRnZW1lbnQgPSBKdWRnZW1lbnQuZnJvbUp1ZGdlbWVudE5vZGVGcmFtZUFuZE1ldGF2YXJpYWJsZU5vZGUoanVkZ2VtZW50Tm9kZSwgZnJhbWUsIG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgICBqdWRnZW1lbnRBc3NpZ25tZW50ID0gSnVkZ2VtZW50QXNzaWdubWVudC5mcm9tSnVkZ2VtZW50KGp1ZGdlbWVudCksXG4gICAgICAgICAgICAgIGFzc2lnbm1lbnQgPSBqdWRnZW1lbnRBc3NpZ25tZW50O1xuXG4gICAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG5cbiAgICAgICAgc3RhdGVkSnVkZ2VtZW50VmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGF0ZWRKdWRnZW1lbnRWZXJpZmllZCkge1xuICAgICAgbG9jYWxNZXRhQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIHN0YXRlZCBqdWRnZW1lbnQuYCwganVkZ2VtZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlZEp1ZGdlbWVudFZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxNZXRhQ29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSBsb2NhbE1ldGFDb250ZXh0Lm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlKTtcblxuICBsb2NhbE1ldGFDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmAsIG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGxvY2FsTWV0YUNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YVR5cGUgPSBtZXRhdmFyaWFibGUuZ2V0TWV0YVR5cGUoKTtcblxuICAgIGlmIChtZXRhVHlwZSA9PT0gZnJhbWVNZXRhVHlwZSkge1xuICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmcmFtZU1ldGFUeXBlTmFtZSA9IGZyYW1lTWV0YVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgbWV0YVR5cGVTdHJpbmcgPSBtZXRhVHlwZS5hc1N0cmluZygpO1xuXG4gICAgICBsb2NhbE1ldGFDb250ZXh0LmRlYnVnKGBUaGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgbWV0YS10eXBlIGlzICcke21ldGFUeXBlU3RyaW5nfScgd2hlbiBpdCBzaG91bGQgYmUgJyR7ZnJhbWVNZXRhVHlwZU5hbWV9Jy5gLCBtZXRhdmFyaWFibGVOb2RlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbG9jYWxNZXRhQ29udGV4dC5kZWJ1ZyhgVGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBpcyBub3QgcHJlc2VudCcuYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG4gIH1cblxuICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICBsb2NhbE1ldGFDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmAsIG1ldGF2YXJpYWJsZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeUp1ZGdlbWVudCIsImZyYW1lTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwianVkZ2VtZW50Tm9kZSIsImFzc2lnbm1lbnRzIiwiZGVyaXZlZCIsImxvY2FsTWV0YUNvbnRleHQiLCJqdWRnZW1lbnRWZXJpZmllZCIsImp1ZGdlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwidmVyaWZ5SnVkZ2VtZW50RnVuY3Rpb25zIiwidmVyaWZ5RGVyaXZlZEp1ZGdlbWVudCIsInZlcmlmeVN0YXRlZEp1ZGdlbWVudCIsInNvbWUiLCJ2ZXJpZnlKdWRnZW1lbnRGdW5jdGlvbiIsImRlYnVnIiwiZGVyaXZlZEp1ZGdlbWVudFZlcmlmaWVkIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZVZlcmlmaWVkIiwidmVyaWZ5TWV0YXZhcmlhYmxlIiwianVkZ2VtZW50IiwiZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTm9kZSIsImZyYW1lcyIsImZyYW1lTm9kZSIsImZyYW1lVmVyaWZpZWQiLCJ2ZXJpZnlGcmFtZSIsImZpcnN0RnJhbWUiLCJmaXJzdCIsImZyYW1lIiwiZnJhbWVTaW5ndWxhciIsImlzU2luZ3VsYXIiLCJkZWNsYXJhdGlvbiIsImdldERlY2xhcmF0aW9uIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGFMZW1tYSIsImZpbmRNZXRhTGVtbWFCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdGhlb3JlbSIsImZpbmRNZXRhdGhlb3JlbUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtIiwianVkZ2VtZW50TWF0Y2hlc01ldGFMZW1tYU1ldGF0aGVvcmVtIiwibWF0Y2hNZXRhTGVtbWFPck1ldGFUaGVvcmVtIiwiZGVjbGFyYXRpb25NYXRjaGVzTWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJtZXRhdmFyaWFibGVTdHJpbmciLCJmcmFtZVN0cmluZyIsInN0YXRlZEp1ZGdlbWVudFZlcmlmaWVkIiwiSnVkZ2VtZW50IiwiZnJvbUp1ZGdlbWVudE5vZGVGcmFtZUFuZE1ldGF2YXJpYWJsZU5vZGUiLCJqdWRnZW1lbnRBc3NpZ25tZW50IiwiSnVkZ2VtZW50QXNzaWdubWVudCIsImZyb21KdWRnZW1lbnQiLCJhc3NpZ25tZW50IiwicHVzaCIsIm1ldGF2YXJpYWJsZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhVHlwZSIsImdldE1ldGFUeXBlIiwiZnJhbWVNZXRhVHlwZSIsImZyYW1lTWV0YVR5cGVOYW1lIiwiZ2V0TmFtZSIsIm1ldGFUeXBlU3RyaW5nIiwiYXNTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBd0JBOzs7Z0VBWEY7NERBQ0U7NkRBQ0U7aUVBQ007cUJBRVY7cUJBQ0k7Ozs7OztBQUUxQixJQUFNQyxpQkFBaUJDLElBQUFBLGdCQUFTLEVBQUMsc0JBQzNCQyx3QkFBd0JELElBQUFBLGdCQUFTLEVBQUM7QUFFekIsU0FBU0YsZ0JBQWdCSSxhQUFhLEVBQUVDLFdBQVcsRUFBRUMsT0FBTyxFQUFFQyxnQkFBZ0I7SUFDM0Ys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