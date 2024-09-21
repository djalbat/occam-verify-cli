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
var _metavariableGivenMetaType = /*#__PURE__*/ _interop_require_default(require("../verify/metavariableGivenMetaType"));
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
            var metaType = _frame1.default, metavariableVerifiedGivenMetaType = (0, _metavariableGivenMetaType.default)(metavariableNode, metaType, localContext);
            if (metavariableVerifiedGivenMetaType) {
                var judgement = localContext.findJudgementByMetavariableNode(metavariableNode);
                if (judgement !== null) {
                    var frames = [], frameNode = frameNodeQuery(judgementNode), frameVerified = (0, _frame.default)(frameNode, frames, stated, localContext);
                    if (frameVerified) {
                        var firstFrame = (0, _array.first)(frames), frame = firstFrame, declaration = frame.getDeclaration(), metavariableNode1 = declaration.getMetavariableNode(), metatheorem = localContext.findMetatheoremByMetavariableNode(metavariableNode1), metaLemma = localContext.findMetaLemmaByMetavariableNode(metavariableNode1), metaLemmaMetatheorem = metaLemma || metatheorem; ///
                        if (metaLemmaMetatheorem !== null) {
                            var metaLemmaMetatheoremUnifiedWithJudgement = judgement.unifyMetaLemmaOrMetatheorem(metaLemmaMetatheorem), metaLemmaMetatheoremUnifiedWithDeclaration = declaration.unifyMetaLemmaOrMetatheorem(metaLemmaMetatheorem);
                            derivedJudgementVerified = metaLemmaMetatheoremUnifiedWithJudgement && metaLemmaMetatheoremUnifiedWithDeclaration;
                        }
                    }
                } else {
                    var metavariableString = localContext.nodeAsString(metavariableNode);
                    localContext.debug("This is no judgement for the '".concat(metavariableString, "' metavariable."), metavariableNode);
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
            var metaType = _frame1.default, metavariableVerifiedGivenMetaType = (0, _metavariableGivenMetaType.default)(metavariableNode, metaType, localContext);
            if (metavariableVerifiedGivenMetaType) {
                var frames = [], frameNode = frameNodeQuery(judgementNode), frameVerified = (0, _frame.default)(frameNode, frames, stated, localContext);
                if (frameVerified) {
                    if (assignments !== null) {
                        var firstFrame = (0, _array.first)(frames), frame = firstFrame, judgement = _judgement.default.fromJudgementNodeFrameAndMetavariableNode(judgementNode, frame, metavariableNode), judgementAssignment = _judgement1.default.fromJudgement(judgement), assignment = judgementAssignment;
                        assignments.push(assignment);
                    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvanVkZ2VtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSnVkZ2VtZW50IGZyb20gXCIuLi9qdWRnZW1lbnRcIjtcbmltcG9ydCB2ZXJpZnlGcmFtZSBmcm9tIFwiLi4vdmVyaWZ5L2ZyYW1lXCI7XG5pbXBvcnQgZnJhbWVNZXRhVHlwZSBmcm9tIFwiLi4vbWV0YVR5cGUvZnJhbWVcIjtcbmltcG9ydCBKdWRnZW1lbnRBc3NpZ25tZW50IGZyb20gXCIuLi9hc3NpZ25tZW50L2p1ZGdlbWVudFwiO1xuaW1wb3J0IHZlcmlmeU1ldGF2YXJpYWJsZUdpdmVuTWV0YVR5cGUgZnJvbSBcIi4uL3ZlcmlmeS9tZXRhdmFyaWFibGVHaXZlbk1ldGFUeXBlXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBmcmFtZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9qdWRnZW1lbnQvZnJhbWUhXCIpLFxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2p1ZGdlbWVudC9zdGF0ZW1lbnQvbWV0YXZhcmlhYmxlIVwiKTtcblxuY29uc3QgdmVyaWZ5SnVkZ2VtZW50RnVuY3Rpb25zID0gW1xuICB2ZXJpZnlEZXJpdmVkSnVkZ2VtZW50LFxuICB2ZXJpZnlTdGF0ZWRKdWRnZW1lbnRcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeUp1ZGdlbWVudChqdWRnZW1lbnROb2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGp1ZGdlbWVudFZlcmlmaWVkO1xuXG4gIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoanVkZ2VtZW50Tm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudC4uLmAsIGp1ZGdlbWVudE5vZGUpO1xuXG4gIGp1ZGdlbWVudFZlcmlmaWVkID0gdmVyaWZ5SnVkZ2VtZW50RnVuY3Rpb25zLnNvbWUoKHZlcmlmeUp1ZGdlbWVudEZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QganVkZ2VtZW50VmVyaWZpZWQgPSB2ZXJpZnlKdWRnZW1lbnRGdW5jdGlvbihqdWRnZW1lbnROb2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKGp1ZGdlbWVudFZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChqdWRnZW1lbnRWZXJpZmllZCkge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudC5gLCBqdWRnZW1lbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiBqdWRnZW1lbnRWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5RGVyaXZlZEp1ZGdlbWVudChqdWRnZW1lbnROb2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGRlcml2ZWRKdWRnZW1lbnRWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmICghc3RhdGVkKSB7XG4gICAgY29uc3QganVkZ2VtZW50U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhqdWRnZW1lbnROb2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBkZXJpdmVkIGp1ZGdlbWVudC4uLmAsIGp1ZGdlbWVudE5vZGUpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShqdWRnZW1lbnROb2RlKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhVHlwZSA9IGZyYW1lTWV0YVR5cGUsIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gdmVyaWZ5TWV0YXZhcmlhYmxlR2l2ZW5NZXRhVHlwZShtZXRhdmFyaWFibGVOb2RlLCBtZXRhVHlwZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVkR2l2ZW5NZXRhVHlwZSkge1xuICAgICAgICBjb25zdCBqdWRnZW1lbnQgPSBsb2NhbENvbnRleHQuZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICBpZiAoanVkZ2VtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgZnJhbWVzID0gW10sXG4gICAgICAgICAgICAgICAgZnJhbWVOb2RlID0gZnJhbWVOb2RlUXVlcnkoanVkZ2VtZW50Tm9kZSksXG4gICAgICAgICAgICAgICAgZnJhbWVWZXJpZmllZCA9IHZlcmlmeUZyYW1lKGZyYW1lTm9kZSwgZnJhbWVzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoZnJhbWVWZXJpZmllZCkge1xuICAgICAgICAgICAgY29uc3QgZmlyc3RGcmFtZSA9IGZpcnN0KGZyYW1lcyksXG4gICAgICAgICAgICAgICAgICBmcmFtZSA9IGZpcnN0RnJhbWUsIC8vL1xuICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb24gPSBmcmFtZS5nZXREZWNsYXJhdGlvbigpLFxuICAgICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGRlY2xhcmF0aW9uLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICAgICAgICAgIG1ldGF0aGVvcmVtID0gbG9jYWxDb250ZXh0LmZpbmRNZXRhdGhlb3JlbUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgICAgICAgIG1ldGFMZW1tYSA9IGxvY2FsQ29udGV4dC5maW5kTWV0YUxlbW1hQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW0gPSAobWV0YUxlbW1hIHx8IG1ldGF0aGVvcmVtKTsgIC8vL1xuXG4gICAgICAgICAgICBpZiAobWV0YUxlbW1hTWV0YXRoZW9yZW0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkV2l0aEp1ZGdlbWVudCA9IGp1ZGdlbWVudC51bmlmeU1ldGFMZW1tYU9yTWV0YXRoZW9yZW0obWV0YUxlbW1hTWV0YXRoZW9yZW0pLFxuICAgICAgICAgICAgICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWRXaXRoRGVjbGFyYXRpb24gPSBkZWNsYXJhdGlvbi51bmlmeU1ldGFMZW1tYU9yTWV0YXRoZW9yZW0obWV0YUxlbW1hTWV0YXRoZW9yZW0pO1xuXG4gICAgICAgICAgICAgIGRlcml2ZWRKdWRnZW1lbnRWZXJpZmllZCA9IChtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWRXaXRoSnVkZ2VtZW50ICYmIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZFdpdGhEZWNsYXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoaXMgaXMgbm8ganVkZ2VtZW50IGZvciB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmAsIG1ldGF2YXJpYWJsZU5vZGUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGVyaXZlZEp1ZGdlbWVudFZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBkZXJpdmVkIGp1ZGdlbWVudC5gLCBqdWRnZW1lbnROb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVyaXZlZEp1ZGdlbWVudFZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZWRKdWRnZW1lbnQoanVkZ2VtZW50Tm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZWRKdWRnZW1lbnRWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmIChzdGF0ZWQpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGp1ZGdlbWVudE5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIHN0YXRlZCBqdWRnZW1lbnQuLi5gLCBqdWRnZW1lbnROb2RlKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoanVkZ2VtZW50Tm9kZSk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YVR5cGUgPSBmcmFtZU1ldGFUeXBlLCAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IHZlcmlmeU1ldGF2YXJpYWJsZUdpdmVuTWV0YVR5cGUobWV0YXZhcmlhYmxlTm9kZSwgbWV0YVR5cGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVWZXJpZmllZEdpdmVuTWV0YVR5cGUpIHtcbiAgICAgICAgY29uc3QgZnJhbWVzID0gW10sXG4gICAgICAgICAgICAgIGZyYW1lTm9kZSA9IGZyYW1lTm9kZVF1ZXJ5KGp1ZGdlbWVudE5vZGUpLFxuICAgICAgICAgICAgICBmcmFtZVZlcmlmaWVkID0gdmVyaWZ5RnJhbWUoZnJhbWVOb2RlLCBmcmFtZXMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICBpZiAoZnJhbWVWZXJpZmllZCkge1xuICAgICAgICAgIGlmIChhc3NpZ25tZW50cyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgZmlyc3RGcmFtZSA9IGZpcnN0KGZyYW1lcyksXG4gICAgICAgICAgICAgICAgICBmcmFtZSA9IGZpcnN0RnJhbWUsIC8vL1xuICAgICAgICAgICAgICAgICAganVkZ2VtZW50ID0gSnVkZ2VtZW50LmZyb21KdWRnZW1lbnROb2RlRnJhbWVBbmRNZXRhdmFyaWFibGVOb2RlKGp1ZGdlbWVudE5vZGUsIGZyYW1lLCBtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgICAgICAgIGp1ZGdlbWVudEFzc2lnbm1lbnQgPSBKdWRnZW1lbnRBc3NpZ25tZW50LmZyb21KdWRnZW1lbnQoanVkZ2VtZW50KSxcbiAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnQgPSBqdWRnZW1lbnRBc3NpZ25tZW50O1xuXG4gICAgICAgICAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHN0YXRlZEp1ZGdlbWVudFZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGF0ZWRKdWRnZW1lbnRWZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgc3RhdGVkIGp1ZGdlbWVudC5gLCBqdWRnZW1lbnROb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVkSnVkZ2VtZW50VmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5SnVkZ2VtZW50IiwiZnJhbWVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJtZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJ2ZXJpZnlKdWRnZW1lbnRGdW5jdGlvbnMiLCJ2ZXJpZnlEZXJpdmVkSnVkZ2VtZW50IiwidmVyaWZ5U3RhdGVkSnVkZ2VtZW50IiwianVkZ2VtZW50Tm9kZSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwibG9jYWxDb250ZXh0IiwianVkZ2VtZW50VmVyaWZpZWQiLCJqdWRnZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInNvbWUiLCJ2ZXJpZnlKdWRnZW1lbnRGdW5jdGlvbiIsImRlYnVnIiwiZGVyaXZlZEp1ZGdlbWVudFZlcmlmaWVkIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGFUeXBlIiwiZnJhbWVNZXRhVHlwZSIsIm1ldGF2YXJpYWJsZVZlcmlmaWVkR2l2ZW5NZXRhVHlwZSIsInZlcmlmeU1ldGF2YXJpYWJsZUdpdmVuTWV0YVR5cGUiLCJqdWRnZW1lbnQiLCJmaW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGVOb2RlIiwiZnJhbWVzIiwiZnJhbWVOb2RlIiwiZnJhbWVWZXJpZmllZCIsInZlcmlmeUZyYW1lIiwiZmlyc3RGcmFtZSIsImZpcnN0IiwiZnJhbWUiLCJkZWNsYXJhdGlvbiIsImdldERlY2xhcmF0aW9uIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF0aGVvcmVtIiwiZmluZE1ldGF0aGVvcmVtQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YUxlbW1hIiwiZmluZE1ldGFMZW1tYUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtIiwibWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkV2l0aEp1ZGdlbWVudCIsInVuaWZ5TWV0YUxlbW1hT3JNZXRhdGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZFdpdGhEZWNsYXJhdGlvbiIsIm1ldGF2YXJpYWJsZVN0cmluZyIsInN0YXRlZEp1ZGdlbWVudFZlcmlmaWVkIiwiSnVkZ2VtZW50IiwiZnJvbUp1ZGdlbWVudE5vZGVGcmFtZUFuZE1ldGF2YXJpYWJsZU5vZGUiLCJqdWRnZW1lbnRBc3NpZ25tZW50IiwiSnVkZ2VtZW50QXNzaWdubWVudCIsImZyb21KdWRnZW1lbnQiLCJhc3NpZ25tZW50IiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBbUJBOzs7ZUFBd0JBOzs7Z0VBakJGOzREQUNFOzZEQUNFO2lFQUNNO2dGQUNZO3FCQUV0QjtxQkFDSTs7Ozs7O0FBRTFCLElBQU1DLGlCQUFpQkMsSUFBQUEsZ0JBQVMsRUFBQyxzQkFDM0JDLHdCQUF3QkQsSUFBQUEsZ0JBQVMsRUFBQztBQUV4QyxJQUFNRSwyQkFBMkI7SUFDL0JDO0lBQ0FDO0NBQ0Q7QUFFYyxTQUFTTixnQkFBZ0JPLGFBQWEsRUFBRUMsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLFlBQVk7SUFDdEYsSUFBSUM7SUFFSixJQUFNQyxrQkFBa0JGLGFBQWFHLFlBQVksQ0FBQ047SUFFbERHLGFBQWFJLEtBQUssQ0FBQyxBQUFDLGtCQUFpQyxPQUFoQkYsaUJBQWdCLG1CQUFpQkw7SUFFdEVJLG9CQUFvQlAseUJBQXlCVyxJQUFJLENBQUMsU0FBQ0M7UUFDakQsSUFBTUwsb0JBQW9CSyx3QkFBd0JULGVBQWVDLGFBQWFDLFFBQVFDO1FBRXRGLElBQUlDLG1CQUFtQjtZQUNyQixPQUFPO1FBQ1Q7SUFDRjtJQUVBLElBQUlBLG1CQUFtQjtRQUNyQkQsYUFBYU8sS0FBSyxDQUFDLEFBQUMsb0JBQW1DLE9BQWhCTCxpQkFBZ0IsaUJBQWVMO0lBQ3hFO0lBRUEsT0FBT0k7QUFDVDtBQUVBLFNBQVNOLHVCQUF1QkUsYUFBYSxFQUFFQyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsWUFBWTtJQUM5RSxJQUFJUSwyQkFBMkI7SUFFL0IsSUFBSSxDQUFDVCxRQUFRO1FBQ1gsSUFBTUcsa0JBQWtCRixhQUFhRyxZQUFZLENBQUNOO1FBRWxERyxhQUFhSSxLQUFLLENBQUMsQUFBQyxrQkFBaUMsT0FBaEJGLGlCQUFnQiwyQkFBeUJMO1FBRTlFLElBQU1ZLG1C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