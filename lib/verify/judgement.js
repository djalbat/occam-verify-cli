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
var verifyJudgementFunctions = [
    verifyDerivedJudgement,
    verifyStatedJudgement
];
function verifyJudgement(judgementNode, assignments, stated, localContext) {
    var judgementVerified;
    var judgementString = localContext.nodeAsString(judgementNode);
    localContext.trace("Verifying the '".concat(judgementString, "' judgement..."), judgementNode);
    judgementVerified = verifyJudgementFunctions.some(function(verifyJudgementFunction) {
        var judgementVerified = verifyJudgementFunction(judgementNode, assignments, stated, localContext);
        if (judgementVerified) {
            return true;
        }
    });
    if (judgementVerified) {
        localContext.debug("...verified the '".concat(judgementString, "' judgement."), judgementNode);
    }
    return judgementVerified;
}
function verifyDerivedJudgement(judgementNode, assignments, stated, localContext) {
    var derivedJudgementVerified = false;
    if (!stated) {
        var judgementString = localContext.nodeAsString(judgementNode);
        localContext.trace("Verifying the '".concat(judgementString, "' derived judgement..."), judgementNode);
        var metavariableNode = metavariableNodeQuery(judgementNode);
        if (metavariableNode !== null) {
            var metavariableVerified = verifyMetavariable(metavariableNode, localContext);
            if (metavariableVerified) {
                var judgement = localContext.findJudgementByMetavariableNode(metavariableNode);
                if (judgement !== null) {
                    var frames = [], frameNode = frameNodeQuery(judgementNode), frameVerified = (0, _frame.default)(frameNode, frames, assignments, stated, localContext);
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
        }
        if (derivedJudgementVerified) {
            localContext.debug("...verified the '".concat(judgementString, "' derived judgement."), judgementNode);
        }
    }
    return derivedJudgementVerified;
}
function verifyStatedJudgement(judgementNode, assignments, stated, localContext) {
    var statedJudgementVerified = false;
    if (stated) {
        var judgementString = localContext.nodeAsString(judgementNode);
        localContext.trace("Verifying the '".concat(judgementString, "' stated judgement..."), judgementNode);
        var metavariableNode = metavariableNodeQuery(judgementNode);
        if (metavariableNode !== null) {
            var metavariableVerified = verifyMetavariable(metavariableNode, localContext);
            if (metavariableVerified) {
                var frames = [], frameNode = frameNodeQuery(judgementNode), frameVerified = (0, _frame.default)(frameNode, frames, stated, localContext);
                if (frameVerified) {
                    var firstFrame = (0, _array.first)(frames), frame = firstFrame, judgement = _judgement.default.fromJudgementNodeFrameAndMetavariableNode(judgementNode, frame, metavariableNode), judgementAssignment = _judgement1.default.fromJudgement(judgement), assignment = judgementAssignment;
                    assignments.push(assignment);
                    statedJudgementVerified = true;
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvanVkZ2VtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSnVkZ2VtZW50IGZyb20gXCIuLi9qdWRnZW1lbnRcIjtcbmltcG9ydCB2ZXJpZnlGcmFtZSBmcm9tIFwiLi4vdmVyaWZ5L2ZyYW1lXCI7XG5pbXBvcnQgZnJhbWVNZXRhVHlwZSBmcm9tIFwiLi4vbWV0YVR5cGUvZnJhbWVcIjtcbmltcG9ydCBKdWRnZW1lbnRBc3NpZ25tZW50IGZyb20gXCIuLi9hc3NpZ25tZW50L2p1ZGdlbWVudFwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgZnJhbWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvanVkZ2VtZW50L2ZyYW1lIVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9qdWRnZW1lbnQvc3RhdGVtZW50L21ldGF2YXJpYWJsZSFcIik7XG5cbmNvbnN0IHZlcmlmeUp1ZGdlbWVudEZ1bmN0aW9ucyA9IFtcbiAgdmVyaWZ5RGVyaXZlZEp1ZGdlbWVudCxcbiAgdmVyaWZ5U3RhdGVkSnVkZ2VtZW50XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlKdWRnZW1lbnQoanVkZ2VtZW50Tm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBqdWRnZW1lbnRWZXJpZmllZDtcblxuICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGp1ZGdlbWVudE5vZGUpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQuLi5gLCBqdWRnZW1lbnROb2RlKTtcblxuICBqdWRnZW1lbnRWZXJpZmllZCA9IHZlcmlmeUp1ZGdlbWVudEZ1bmN0aW9ucy5zb21lKCh2ZXJpZnlKdWRnZW1lbnRGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IGp1ZGdlbWVudFZlcmlmaWVkID0gdmVyaWZ5SnVkZ2VtZW50RnVuY3Rpb24oanVkZ2VtZW50Tm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChqdWRnZW1lbnRWZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBpZiAoanVkZ2VtZW50VmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQuYCwganVkZ2VtZW50Tm9kZSk7XG4gIH1cblxuICByZXR1cm4ganVkZ2VtZW50VmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeURlcml2ZWRKdWRnZW1lbnQoanVkZ2VtZW50Tm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBkZXJpdmVkSnVkZ2VtZW50VmVyaWZpZWQgPSBmYWxzZTtcblxuICBpZiAoIXN0YXRlZCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoanVkZ2VtZW50Tm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgZGVyaXZlZCBqdWRnZW1lbnQuLi5gLCBqdWRnZW1lbnROb2RlKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoanVkZ2VtZW50Tm9kZSk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGp1ZGdlbWVudCA9IGxvY2FsQ29udGV4dC5maW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgIGlmIChqdWRnZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBmcmFtZXMgPSBbXSxcbiAgICAgICAgICAgICAgICBmcmFtZU5vZGUgPSBmcmFtZU5vZGVRdWVyeShqdWRnZW1lbnROb2RlKSxcbiAgICAgICAgICAgICAgICBmcmFtZVZlcmlmaWVkID0gdmVyaWZ5RnJhbWUoZnJhbWVOb2RlLCBmcmFtZXMsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoZnJhbWVWZXJpZmllZCkge1xuICAgICAgICAgICAgY29uc3QgZmlyc3RGcmFtZSA9IGZpcnN0KGZyYW1lcyksXG4gICAgICAgICAgICAgICAgICBmcmFtZSA9IGZpcnN0RnJhbWUsIC8vL1xuICAgICAgICAgICAgICAgICAgZnJhbWVTaW5ndWxhciA9IGZyYW1lLmlzU2luZ3VsYXIoKTtcblxuICAgICAgICAgICAgaWYgKGZyYW1lU2luZ3VsYXIpIHtcbiAgICAgICAgICAgICAgY29uc3QgZGVjbGFyYXRpb24gPSBmcmFtZS5nZXREZWNsYXJhdGlvbigpLFxuICAgICAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gZGVjbGFyYXRpb24uZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgICAgICAgICAgICBtZXRhTGVtbWEgPSBsb2NhbENvbnRleHQuZmluZE1ldGFMZW1tYUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgICAgICAgICAgbWV0YXRoZW9yZW0gPSBsb2NhbENvbnRleHQuZmluZE1ldGF0aGVvcmVtQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbSA9IChtZXRhTGVtbWEgfHwgbWV0YXRoZW9yZW0pOyAgLy8vXG5cbiAgICAgICAgICAgICAgaWYgKG1ldGFMZW1tYU1ldGF0aGVvcmVtICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkV2l0aERlY2xhcmF0aW9uID0gZGVjbGFyYXRpb24udW5pZnlNZXRhTGVtbWFPck1ldGFUaGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtKSxcbiAgICAgICAgICAgICAgICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWRXaXRoSnVkZ2VtZW50ID0ganVkZ2VtZW50LnVuaWZ5TWV0YUxlbW1hT3JNZXRhVGhlb3JlbShtZXRhTGVtbWFNZXRhdGhlb3JlbSk7XG5cbiAgICAgICAgICAgICAgICBkZXJpdmVkSnVkZ2VtZW50VmVyaWZpZWQgPSAobWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkV2l0aERlY2xhcmF0aW9uICYmIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZFdpdGhKdWRnZW1lbnQpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgICAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZXJlIGFyZSBubyBtZXRhLWxlbW1hcyBvciBtZXRhdGhlb3JlbXMgY29ycmVzcG9uZGluZyB0byB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmAsIGp1ZGdlbWVudE5vZGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBmcmFtZVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoZnJhbWVOb2RlKTtcblxuICAgICAgICAgICAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZSAnJHtmcmFtZVN0cmluZ30nIGlzIG5vdCBzaW5ndWxhci5gLCBqdWRnZW1lbnROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVGhlcmUgaXMgbm8ganVkZ2VtZW50IHByZXNlbnQgZm9yIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCwganVkZ2VtZW50Tm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGVyaXZlZEp1ZGdlbWVudFZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBkZXJpdmVkIGp1ZGdlbWVudC5gLCBqdWRnZW1lbnROb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVyaXZlZEp1ZGdlbWVudFZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZWRKdWRnZW1lbnQoanVkZ2VtZW50Tm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZWRKdWRnZW1lbnRWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmIChzdGF0ZWQpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGp1ZGdlbWVudE5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIHN0YXRlZCBqdWRnZW1lbnQuLi5gLCBqdWRnZW1lbnROb2RlKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoanVkZ2VtZW50Tm9kZSk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGZyYW1lcyA9IFtdLFxuICAgICAgICAgICAgICBmcmFtZU5vZGUgPSBmcmFtZU5vZGVRdWVyeShqdWRnZW1lbnROb2RlKSxcbiAgICAgICAgICAgICAgZnJhbWVWZXJpZmllZCA9IHZlcmlmeUZyYW1lKGZyYW1lTm9kZSwgZnJhbWVzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKGZyYW1lVmVyaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCBmaXJzdEZyYW1lID0gZmlyc3QoZnJhbWVzKSxcbiAgICAgICAgICAgICAgICBmcmFtZSA9IGZpcnN0RnJhbWUsIC8vL1xuICAgICAgICAgICAgICAgIGp1ZGdlbWVudCA9IEp1ZGdlbWVudC5mcm9tSnVkZ2VtZW50Tm9kZUZyYW1lQW5kTWV0YXZhcmlhYmxlTm9kZShqdWRnZW1lbnROb2RlLCBmcmFtZSwgbWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICAgICAganVkZ2VtZW50QXNzaWdubWVudCA9IEp1ZGdlbWVudEFzc2lnbm1lbnQuZnJvbUp1ZGdlbWVudChqdWRnZW1lbnQpLFxuICAgICAgICAgICAgICAgIGFzc2lnbm1lbnQgPSBqdWRnZW1lbnRBc3NpZ25tZW50O1xuXG4gICAgICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcblxuICAgICAgICAgIHN0YXRlZEp1ZGdlbWVudFZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGF0ZWRKdWRnZW1lbnRWZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgc3RhdGVkIGp1ZGdlbWVudC5gLCBqdWRnZW1lbnROb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVkSnVkZ2VtZW50VmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG1ldGFUeXBlID0gbWV0YXZhcmlhYmxlLmdldE1ldGFUeXBlKCk7XG5cbiAgICBpZiAobWV0YVR5cGUgPT09IGZyYW1lTWV0YVR5cGUpIHtcbiAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZnJhbWVNZXRhVHlwZU5hbWUgPSBmcmFtZU1ldGFUeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuYXNTdHJpbmcoKTtcblxuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGBUaGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgbWV0YS10eXBlIGlzICcke21ldGFUeXBlU3RyaW5nfScgd2hlbiBpdCBzaG91bGQgYmUgJyR7ZnJhbWVNZXRhVHlwZU5hbWV9Jy5gLCBtZXRhdmFyaWFibGVOb2RlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGBUaGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGlzIG5vdCBwcmVzZW50Jy5gLCBtZXRhdmFyaWFibGVOb2RlKTtcbiAgfVxuXG4gIGlmIChtZXRhdmFyaWFibGVWZXJpZmllZCkge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gLCBtZXRhdmFyaWFibGVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlKdWRnZW1lbnQiLCJmcmFtZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsInZlcmlmeUp1ZGdlbWVudEZ1bmN0aW9ucyIsInZlcmlmeURlcml2ZWRKdWRnZW1lbnQiLCJ2ZXJpZnlTdGF0ZWRKdWRnZW1lbnQiLCJqdWRnZW1lbnROb2RlIiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJsb2NhbENvbnRleHQiLCJqdWRnZW1lbnRWZXJpZmllZCIsImp1ZGdlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwic29tZSIsInZlcmlmeUp1ZGdlbWVudEZ1bmN0aW9uIiwiZGVidWciLCJkZXJpdmVkSnVkZ2VtZW50VmVyaWZpZWQiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlVmVyaWZpZWQiLCJ2ZXJpZnlNZXRhdmFyaWFibGUiLCJqdWRnZW1lbnQiLCJmaW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGVOb2RlIiwiZnJhbWVzIiwiZnJhbWVOb2RlIiwiZnJhbWVWZXJpZmllZCIsInZlcmlmeUZyYW1lIiwiZmlyc3RGcmFtZSIsImZpcnN0IiwiZnJhbWUiLCJmcmFtZVNpbmd1bGFyIiwiaXNTaW5ndWxhciIsImRlY2xhcmF0aW9uIiwiZ2V0RGVjbGFyYXRpb24iLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwibWV0YUxlbW1hIiwiZmluZE1ldGFMZW1tYUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF0aGVvcmVtIiwiZmluZE1ldGF0aGVvcmVtQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWRXaXRoRGVjbGFyYXRpb24iLCJ1bmlmeU1ldGFMZW1tYU9yTWV0YVRoZW9yZW0iLCJtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWRXaXRoSnVkZ2VtZW50IiwibWV0YXZhcmlhYmxlU3RyaW5nIiwiZnJhbWVTdHJpbmciLCJzdGF0ZWRKdWRnZW1lbnRWZXJpZmllZCIsIkp1ZGdlbWVudCIsImZyb21KdWRnZW1lbnROb2RlRnJhbWVBbmRNZXRhdmFyaWFibGVOb2RlIiwianVkZ2VtZW50QXNzaWdubWVudCIsIkp1ZGdlbWVudEFzc2lnbm1lbnQiLCJmcm9tSnVkZ2VtZW50IiwiYXNzaWdubWVudCIsInB1c2giLCJtZXRhdmFyaWFibGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YVR5cGUiLCJnZXRNZXRhVHlwZSIsImZyYW1lTWV0YVR5cGUiLCJmcmFtZU1ldGFUeXBlTmFtZSIsImdldE5hbWUiLCJtZXRhVHlwZVN0cmluZyIsImFzU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFrQkE7OztlQUF3QkE7OztnRUFoQkY7NERBQ0U7NkRBQ0U7aUVBQ007cUJBRVY7cUJBQ0k7Ozs7OztBQUUxQixJQUFNQyxpQkFBaUJDLElBQUFBLGdCQUFTLEVBQUMsc0JBQzNCQyx3QkFBd0JELElBQUFBLGdCQUFT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