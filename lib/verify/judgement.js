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
var frameNodeQuery = (0, _query.nodeQuery)("/judgement/frame!"), metavariableNodeQuery = (0, _query.nodeQuery)("/judgement/statement/metavariable!");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvanVkZ2VtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSnVkZ2VtZW50IGZyb20gXCIuLi9qdWRnZW1lbnRcIjtcbmltcG9ydCB2ZXJpZnlGcmFtZSBmcm9tIFwiLi4vdmVyaWZ5L2ZyYW1lXCI7XG5pbXBvcnQgZnJhbWVNZXRhVHlwZSBmcm9tIFwiLi4vbWV0YVR5cGUvZnJhbWVcIjtcbmltcG9ydCBKdWRnZW1lbnRBc3NpZ25tZW50IGZyb20gXCIuLi9hc3NpZ25tZW50L2p1ZGdlbWVudFwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgZnJhbWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvanVkZ2VtZW50L2ZyYW1lIVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9qdWRnZW1lbnQvc3RhdGVtZW50L21ldGF2YXJpYWJsZSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeUp1ZGdlbWVudChqdWRnZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBqdWRnZW1lbnRWZXJpZmllZDtcblxuICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGp1ZGdlbWVudE5vZGUpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQuLi5gLCBqdWRnZW1lbnROb2RlKTtcblxuICBjb25zdCB2ZXJpZnlKdWRnZW1lbnRGdW5jdGlvbnMgPSBbXG4gICAgdmVyaWZ5RGVyaXZlZEp1ZGdlbWVudCxcbiAgICB2ZXJpZnlTdGF0ZWRKdWRnZW1lbnRcbiAgXTtcblxuICBqdWRnZW1lbnRWZXJpZmllZCA9IHZlcmlmeUp1ZGdlbWVudEZ1bmN0aW9ucy5zb21lKCh2ZXJpZnlKdWRnZW1lbnRGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IGp1ZGdlbWVudFZlcmlmaWVkID0gdmVyaWZ5SnVkZ2VtZW50RnVuY3Rpb24oanVkZ2VtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoanVkZ2VtZW50VmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGp1ZGdlbWVudFZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50LmAsIGp1ZGdlbWVudE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGp1ZGdlbWVudFZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlEZXJpdmVkSnVkZ2VtZW50KGp1ZGdlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGRlcml2ZWRKdWRnZW1lbnRWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmIChkZXJpdmVkKSB7XG4gICAgY29uc3QganVkZ2VtZW50U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhqdWRnZW1lbnROb2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBkZXJpdmVkIGp1ZGdlbWVudC4uLmAsIGp1ZGdlbWVudE5vZGUpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShqdWRnZW1lbnROb2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVWZXJpZmllZCA9IHZlcmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBqdWRnZW1lbnQgPSBsb2NhbENvbnRleHQuZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKGp1ZGdlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBmcmFtZXMgPSBbXSxcbiAgICAgICAgICAgICAgZnJhbWVOb2RlID0gZnJhbWVOb2RlUXVlcnkoanVkZ2VtZW50Tm9kZSksXG4gICAgICAgICAgICAgIGZyYW1lVmVyaWZpZWQgPSB2ZXJpZnlGcmFtZShmcmFtZU5vZGUsIGZyYW1lcywgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKGZyYW1lVmVyaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCBmaXJzdEZyYW1lID0gZmlyc3QoZnJhbWVzKSxcbiAgICAgICAgICAgICAgICBmcmFtZSA9IGZpcnN0RnJhbWUsIC8vL1xuICAgICAgICAgICAgICAgIGZyYW1lU2luZ3VsYXIgPSBmcmFtZS5pc1Npbmd1bGFyKCk7XG5cbiAgICAgICAgICBpZiAoZnJhbWVTaW5ndWxhcikge1xuICAgICAgICAgICAgY29uc3QgZGVjbGFyYXRpb24gPSBmcmFtZS5nZXREZWNsYXJhdGlvbigpLFxuICAgICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGRlY2xhcmF0aW9uLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICAgICAgICAgIG1ldGFMZW1tYSA9IGxvY2FsQ29udGV4dC5maW5kTWV0YUxlbW1hQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgICAgICAgbWV0YXRoZW9yZW0gPSBsb2NhbENvbnRleHQuZmluZE1ldGF0aGVvcmVtQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW0gPSAobWV0YUxlbW1hIHx8IG1ldGF0aGVvcmVtKTsgIC8vL1xuXG4gICAgICAgICAgICBpZiAobWV0YUxlbW1hTWV0YXRoZW9yZW0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgZGVjbGFyYXRpb25NYXRjaGVzTWV0YUxlbW1hTWV0YXRoZW9yZW0gPSBkZWNsYXJhdGlvbi5tYXRjaE1ldGFMZW1tYU9yTWV0YVRoZW9yZW0obWV0YUxlbW1hTWV0YXRoZW9yZW0pLFxuICAgICAgICAgICAgICAgICAgICBqdWRnZW1lbnRNYXRjaGVzTWV0YUxlbW1hTWV0YXRoZW9yZW0gPSBqdWRnZW1lbnQubWF0Y2hNZXRhTGVtbWFPck1ldGFUaGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtKTtcblxuICAgICAgICAgICAgICBkZXJpdmVkSnVkZ2VtZW50VmVyaWZpZWQgPSAoZGVjbGFyYXRpb25NYXRjaGVzTWV0YUxlbW1hTWV0YXRoZW9yZW0gJiYganVkZ2VtZW50TWF0Y2hlc01ldGFMZW1tYU1ldGF0aGVvcmVtKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGBUaGVyZSBhcmUgbm8gbWV0YS1sZW1tYXMgb3IgbWV0YXRoZW9yZW1zIGNvcnJlc3BvbmRpbmcgdG8gdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gLCBqdWRnZW1lbnROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZnJhbWVTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGZyYW1lTm9kZSk7XG5cbiAgICAgICAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVGhlICcke2ZyYW1lU3RyaW5nfScgaXMgbm90IHNpbmd1bGFyLmAsIGp1ZGdlbWVudE5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZXJlIGlzIG5vIGp1ZGdlbWVudCBwcmVzZW50IGZvciB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmAsIGp1ZGdlbWVudE5vZGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkZXJpdmVkSnVkZ2VtZW50VmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGRlcml2ZWQganVkZ2VtZW50LmAsIGp1ZGdlbWVudE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZXJpdmVkSnVkZ2VtZW50VmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlZEp1ZGdlbWVudChqdWRnZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZWRKdWRnZW1lbnRWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmICghZGVyaXZlZCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoanVkZ2VtZW50Tm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgc3RhdGVkIGp1ZGdlbWVudC4uLmAsIGp1ZGdlbWVudE5vZGUpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShqdWRnZW1lbnROb2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVWZXJpZmllZCA9IHZlcmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBmcmFtZXMgPSBbXSxcbiAgICAgICAgICAgIGZyYW1lTm9kZSA9IGZyYW1lTm9kZVF1ZXJ5KGp1ZGdlbWVudE5vZGUpLFxuICAgICAgICAgICAgZnJhbWVWZXJpZmllZCA9IHZlcmlmeUZyYW1lKGZyYW1lTm9kZSwgZnJhbWVzLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKGZyYW1lVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgZmlyc3RGcmFtZSA9IGZpcnN0KGZyYW1lcyksXG4gICAgICAgICAgICAgIGZyYW1lID0gZmlyc3RGcmFtZSwgLy8vXG4gICAgICAgICAgICAgIGp1ZGdlbWVudCA9IEp1ZGdlbWVudC5mcm9tSnVkZ2VtZW50Tm9kZUZyYW1lQW5kTWV0YXZhcmlhYmxlTm9kZShqdWRnZW1lbnROb2RlLCBmcmFtZSwgbWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICAgIGp1ZGdlbWVudEFzc2lnbm1lbnQgPSBKdWRnZW1lbnRBc3NpZ25tZW50LmZyb21KdWRnZW1lbnQoanVkZ2VtZW50KSxcbiAgICAgICAgICAgICAgYXNzaWdubWVudCA9IGp1ZGdlbWVudEFzc2lnbm1lbnQ7XG5cbiAgICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcblxuICAgICAgICBzdGF0ZWRKdWRnZW1lbnRWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlZEp1ZGdlbWVudFZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBzdGF0ZWQganVkZ2VtZW50LmAsIGp1ZGdlbWVudE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZWRKdWRnZW1lbnRWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gLCBtZXRhdmFyaWFibGVOb2RlKTtcblxuICBjb25zdCBtZXRhdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YVR5cGUgPSBtZXRhdmFyaWFibGUuZ2V0TWV0YVR5cGUoKTtcblxuICAgIGlmIChtZXRhVHlwZSA9PT0gZnJhbWVNZXRhVHlwZSkge1xuICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmcmFtZU1ldGFUeXBlTmFtZSA9IGZyYW1lTWV0YVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgbWV0YVR5cGVTdHJpbmcgPSBtZXRhVHlwZS5hc1N0cmluZygpO1xuXG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyBtZXRhLXR5cGUgaXMgJyR7bWV0YVR5cGVTdHJpbmd9JyB3aGVuIGl0IHNob3VsZCBiZSAnJHtmcmFtZU1ldGFUeXBlTmFtZX0nLmAsIG1ldGF2YXJpYWJsZU5vZGUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgaXMgbm90IHByZXNlbnQnLmAsIG1ldGF2YXJpYWJsZU5vZGUpO1xuICB9XG5cbiAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmAsIG1ldGF2YXJpYWJsZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeUp1ZGdlbWVudCIsImZyYW1lTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwianVkZ2VtZW50Tm9kZSIsImFzc2lnbm1lbnRzIiwiZGVyaXZlZCIsImxvY2FsQ29udGV4dCIsImp1ZGdlbWVudFZlcmlmaWVkIiwianVkZ2VtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJ2ZXJpZnlKdWRnZW1lbnRGdW5jdGlvbnMiLCJ2ZXJpZnlEZXJpdmVkSnVkZ2VtZW50IiwidmVyaWZ5U3RhdGVkSnVkZ2VtZW50Iiwic29tZSIsInZlcmlmeUp1ZGdlbWVudEZ1bmN0aW9uIiwiZGVidWciLCJkZXJpdmVkSnVkZ2VtZW50VmVyaWZpZWQiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlVmVyaWZpZWQiLCJ2ZXJpZnlNZXRhdmFyaWFibGUiLCJqdWRnZW1lbnQiLCJmaW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGVOb2RlIiwiZnJhbWVzIiwiZnJhbWVOb2RlIiwiZnJhbWVWZXJpZmllZCIsInZlcmlmeUZyYW1lIiwiZmlyc3RGcmFtZSIsImZpcnN0IiwiZnJhbWUiLCJmcmFtZVNpbmd1bGFyIiwiaXNTaW5ndWxhciIsImRlY2xhcmF0aW9uIiwiZ2V0RGVjbGFyYXRpb24iLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwibWV0YUxlbW1hIiwiZmluZE1ldGFMZW1tYUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF0aGVvcmVtIiwiZmluZE1ldGF0aGVvcmVtQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJkZWNsYXJhdGlvbk1hdGNoZXNNZXRhTGVtbWFNZXRhdGhlb3JlbSIsIm1hdGNoTWV0YUxlbW1hT3JNZXRhVGhlb3JlbSIsImp1ZGdlbWVudE1hdGNoZXNNZXRhTGVtbWFNZXRhdGhlb3JlbSIsIm1ldGF2YXJpYWJsZVN0cmluZyIsImZyYW1lU3RyaW5nIiwic3RhdGVkSnVkZ2VtZW50VmVyaWZpZWQiLCJKdWRnZW1lbnQiLCJmcm9tSnVkZ2VtZW50Tm9kZUZyYW1lQW5kTWV0YXZhcmlhYmxlTm9kZSIsImp1ZGdlbWVudEFzc2lnbm1lbnQiLCJKdWRnZW1lbnRBc3NpZ25tZW50IiwiZnJvbUp1ZGdlbWVudCIsImFzc2lnbm1lbnQiLCJwdXNoIiwibWV0YXZhcmlhYmxlIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGFUeXBlIiwiZ2V0TWV0YVR5cGUiLCJmcmFtZU1ldGFUeXBlIiwiZnJhbWVNZXRhVHlwZU5hbWUiLCJnZXROYW1lIiwibWV0YVR5cGVTdHJpbmciLCJhc1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUF3QkE7OztnRUFYRjs0REFDRTs2REFDRTtpRUFDTTtxQkFFVjtxQkFDSTs7Ozs7O0FBRTFCLElBQU1DLGlCQUFpQkMsSUFBQUEsZ0JBQVMsRUFBQyxzQkFDM0JDLHdCQUF3QkQsSUFBQUEsZ0JBQVMsRUFBQztBQUV6QixTQUFTRixnQkFBZ0JJLGFBQWEsRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLFlBQVk7SUFDdkYsSUFBSUM7SUFFSixJQUFNQyxrQkFBa0JGLGFBQWFHLFlBQVksQ0FBQ047SUFFbERHLGFBQWFJLEtBQUssQ0FBQyxBQUFDLGtCQUFpQyxPQUFoQkYsaUJBQWdCLG1CQUFpQkw7SUFFdEUsSUFBTVEsMkJBQTJCO1FB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