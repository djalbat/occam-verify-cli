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
                    localContext.debug("There is no judgement for the '".concat(metavariableString, "' metavariable."), metavariableNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvanVkZ2VtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSnVkZ2VtZW50IGZyb20gXCIuLi9qdWRnZW1lbnRcIjtcbmltcG9ydCB2ZXJpZnlGcmFtZSBmcm9tIFwiLi4vdmVyaWZ5L2ZyYW1lXCI7XG5pbXBvcnQgZGVjbGFyYXRpb25NZXRhVHlwZSBmcm9tIFwiLi4vbWV0YVR5cGUvZnJhbWVcIjtcbmltcG9ydCBKdWRnZW1lbnRBc3NpZ25tZW50IGZyb20gXCIuLi9hc3NpZ25tZW50L2p1ZGdlbWVudFwiO1xuaW1wb3J0IHZlcmlmeU1ldGF2YXJpYWJsZUdpdmVuTWV0YVR5cGUgZnJvbSBcIi4uL3ZlcmlmeS9tZXRhdmFyaWFibGVHaXZlbk1ldGFUeXBlXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBmcmFtZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9qdWRnZW1lbnQvZnJhbWUhXCIpLFxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2p1ZGdlbWVudC9zdGF0ZW1lbnQvbWV0YXZhcmlhYmxlIVwiKTtcblxuY29uc3QgdmVyaWZ5SnVkZ2VtZW50RnVuY3Rpb25zID0gW1xuICB2ZXJpZnlEZXJpdmVkSnVkZ2VtZW50LFxuICB2ZXJpZnlTdGF0ZWRKdWRnZW1lbnRcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeUp1ZGdlbWVudChqdWRnZW1lbnROb2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGp1ZGdlbWVudFZlcmlmaWVkO1xuXG4gIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoanVkZ2VtZW50Tm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudC4uLmAsIGp1ZGdlbWVudE5vZGUpO1xuXG4gIGp1ZGdlbWVudFZlcmlmaWVkID0gdmVyaWZ5SnVkZ2VtZW50RnVuY3Rpb25zLnNvbWUoKHZlcmlmeUp1ZGdlbWVudEZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QganVkZ2VtZW50VmVyaWZpZWQgPSB2ZXJpZnlKdWRnZW1lbnRGdW5jdGlvbihqdWRnZW1lbnROb2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKGp1ZGdlbWVudFZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChqdWRnZW1lbnRWZXJpZmllZCkge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudC5gLCBqdWRnZW1lbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiBqdWRnZW1lbnRWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5RGVyaXZlZEp1ZGdlbWVudChqdWRnZW1lbnROb2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGRlcml2ZWRKdWRnZW1lbnRWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmICghc3RhdGVkKSB7XG4gICAgY29uc3QganVkZ2VtZW50U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhqdWRnZW1lbnROb2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBkZXJpdmVkIGp1ZGdlbWVudC4uLmAsIGp1ZGdlbWVudE5vZGUpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShqdWRnZW1lbnROb2RlKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhVHlwZSA9IGRlY2xhcmF0aW9uTWV0YVR5cGUsIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gdmVyaWZ5TWV0YXZhcmlhYmxlR2l2ZW5NZXRhVHlwZShtZXRhdmFyaWFibGVOb2RlLCBtZXRhVHlwZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVkR2l2ZW5NZXRhVHlwZSkge1xuICAgICAgICBjb25zdCBqdWRnZW1lbnQgPSBsb2NhbENvbnRleHQuZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICBpZiAoanVkZ2VtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgZnJhbWVzID0gW10sXG4gICAgICAgICAgICAgICAgZnJhbWVOb2RlID0gZnJhbWVOb2RlUXVlcnkoanVkZ2VtZW50Tm9kZSksXG4gICAgICAgICAgICAgICAgZnJhbWVWZXJpZmllZCA9IHZlcmlmeUZyYW1lKGZyYW1lTm9kZSwgZnJhbWVzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoZnJhbWVWZXJpZmllZCkge1xuICAgICAgICAgICAgY29uc3QgZmlyc3RGcmFtZSA9IGZpcnN0KGZyYW1lcyksXG4gICAgICAgICAgICAgICAgICBmcmFtZSA9IGZpcnN0RnJhbWUsIC8vL1xuICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb24gPSBmcmFtZS5nZXREZWNsYXJhdGlvbigpLFxuICAgICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGRlY2xhcmF0aW9uLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICAgICAgICAgIG1ldGF0aGVvcmVtID0gbG9jYWxDb250ZXh0LmZpbmRNZXRhdGhlb3JlbUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgICAgICAgIG1ldGFMZW1tYSA9IGxvY2FsQ29udGV4dC5maW5kTWV0YUxlbW1hQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW0gPSAobWV0YUxlbW1hIHx8IG1ldGF0aGVvcmVtKTsgIC8vL1xuXG4gICAgICAgICAgICBpZiAobWV0YUxlbW1hTWV0YXRoZW9yZW0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkV2l0aEp1ZGdlbWVudCA9IGp1ZGdlbWVudC51bmlmeU1ldGFMZW1tYU9yTWV0YXRoZW9yZW0obWV0YUxlbW1hTWV0YXRoZW9yZW0pLFxuICAgICAgICAgICAgICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWRXaXRoRGVjbGFyYXRpb24gPSBkZWNsYXJhdGlvbi51bmlmeU1ldGFMZW1tYU9yTWV0YXRoZW9yZW0obWV0YUxlbW1hTWV0YXRoZW9yZW0pO1xuXG4gICAgICAgICAgICAgIGRlcml2ZWRKdWRnZW1lbnRWZXJpZmllZCA9IChtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWRXaXRoSnVkZ2VtZW50ICYmIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZFdpdGhEZWNsYXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZXJlIGlzIG5vIGp1ZGdlbWVudCBmb3IgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gLCBtZXRhdmFyaWFibGVOb2RlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRlcml2ZWRKdWRnZW1lbnRWZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgZGVyaXZlZCBqdWRnZW1lbnQuYCwganVkZ2VtZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRlcml2ZWRKdWRnZW1lbnRWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVkSnVkZ2VtZW50KGp1ZGdlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVkSnVkZ2VtZW50VmVyaWZpZWQgPSBmYWxzZTtcblxuICBpZiAoc3RhdGVkKSB7XG4gICAgY29uc3QganVkZ2VtZW50U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhqdWRnZW1lbnROb2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBzdGF0ZWQganVkZ2VtZW50Li4uYCwganVkZ2VtZW50Tm9kZSk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KGp1ZGdlbWVudE5vZGUpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFUeXBlID0gZGVjbGFyYXRpb25NZXRhVHlwZSwgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVWZXJpZmllZEdpdmVuTWV0YVR5cGUgPSB2ZXJpZnlNZXRhdmFyaWFibGVHaXZlbk1ldGFUeXBlKG1ldGF2YXJpYWJsZU5vZGUsIG1ldGFUeXBlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZWRHaXZlbk1ldGFUeXBlKSB7XG4gICAgICAgIGNvbnN0IGZyYW1lcyA9IFtdLFxuICAgICAgICAgICAgICBmcmFtZU5vZGUgPSBmcmFtZU5vZGVRdWVyeShqdWRnZW1lbnROb2RlKSxcbiAgICAgICAgICAgICAgZnJhbWVWZXJpZmllZCA9IHZlcmlmeUZyYW1lKGZyYW1lTm9kZSwgZnJhbWVzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKGZyYW1lVmVyaWZpZWQpIHtcbiAgICAgICAgICBpZiAoYXNzaWdubWVudHMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0RnJhbWUgPSBmaXJzdChmcmFtZXMpLFxuICAgICAgICAgICAgICAgICAgZnJhbWUgPSBmaXJzdEZyYW1lLCAvLy9cbiAgICAgICAgICAgICAgICAgIGp1ZGdlbWVudCA9IEp1ZGdlbWVudC5mcm9tSnVkZ2VtZW50Tm9kZUZyYW1lQW5kTWV0YXZhcmlhYmxlTm9kZShqdWRnZW1lbnROb2RlLCBmcmFtZSwgbWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICAgICAgICBqdWRnZW1lbnRBc3NpZ25tZW50ID0gSnVkZ2VtZW50QXNzaWdubWVudC5mcm9tSnVkZ2VtZW50KGp1ZGdlbWVudCksXG4gICAgICAgICAgICAgICAgICBhc3NpZ25tZW50ID0ganVkZ2VtZW50QXNzaWdubWVudDtcblxuICAgICAgICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzdGF0ZWRKdWRnZW1lbnRWZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVkSnVkZ2VtZW50VmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIHN0YXRlZCBqdWRnZW1lbnQuYCwganVkZ2VtZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlZEp1ZGdlbWVudFZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeUp1ZGdlbWVudCIsImZyYW1lTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwidmVyaWZ5SnVkZ2VtZW50RnVuY3Rpb25zIiwidmVyaWZ5RGVyaXZlZEp1ZGdlbWVudCIsInZlcmlmeVN0YXRlZEp1ZGdlbWVudCIsImp1ZGdlbWVudE5vZGUiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImxvY2FsQ29udGV4dCIsImp1ZGdlbWVudFZlcmlmaWVkIiwianVkZ2VtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJzb21lIiwidmVyaWZ5SnVkZ2VtZW50RnVuY3Rpb24iLCJkZWJ1ZyIsImRlcml2ZWRKdWRnZW1lbnRWZXJpZmllZCIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhVHlwZSIsImRlY2xhcmF0aW9uTWV0YVR5cGUiLCJtZXRhdmFyaWFibGVWZXJpZmllZEdpdmVuTWV0YVR5cGUiLCJ2ZXJpZnlNZXRhdmFyaWFibGVHaXZlbk1ldGFUeXBlIiwianVkZ2VtZW50IiwiZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTm9kZSIsImZyYW1lcyIsImZyYW1lTm9kZSIsImZyYW1lVmVyaWZpZWQiLCJ2ZXJpZnlGcmFtZSIsImZpcnN0RnJhbWUiLCJmaXJzdCIsImZyYW1lIiwiZGVjbGFyYXRpb24iLCJnZXREZWNsYXJhdGlvbiIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdGhlb3JlbSIsImZpbmRNZXRhdGhlb3JlbUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGFMZW1tYSIsImZpbmRNZXRhTGVtbWFCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhTGVtbWFNZXRhdGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZFdpdGhKdWRnZW1lbnQiLCJ1bmlmeU1ldGFMZW1tYU9yTWV0YXRoZW9yZW0iLCJtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWRXaXRoRGVjbGFyYXRpb24iLCJtZXRhdmFyaWFibGVTdHJpbmciLCJzdGF0ZWRKdWRnZW1lbnRWZXJpZmllZCIsIkp1ZGdlbWVudCIsImZyb21KdWRnZW1lbnROb2RlRnJhbWVBbmRNZXRhdmFyaWFibGVOb2RlIiwianVkZ2VtZW50QXNzaWdubWVudCIsIkp1ZGdlbWVudEFzc2lnbm1lbnQiLCJmcm9tSnVkZ2VtZW50IiwiYXNzaWdubWVudCIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW1CQTs7O2VBQXdCQTs7O2dFQWpCRjs0REFDRTs2REFDUTtpRUFDQTtnRkFDWTtxQkFFdEI7cUJBQ0k7Ozs7OztBQUUxQixJQUFNQyxpQkFBaUJDLElBQUFBLGdCQUFTLEVBQUMsc0JBQzNCQyx3QkFBd0JELElBQUFBLGdCQUFTLEVBQUM7QUFFeEMsSUFBTUUsMkJBQTJCO0lBQy9CQztJQUNBQztDQUNEO0FBRWMsU0FBU04sZ0JBQWdCTyxhQUFhLEVBQUVDLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxZQUFZO0lBQ3RGLElBQUlDO0lBRUosSUFBTUMsa0JBQWtCRixhQUFhRyxZQUFZLENBQUNOO0lBRWxERyxhQUFhSSxLQUFLLENBQUMsQUFBQyxrQkFBaUMsT0FBaEJGLGlCQUFnQixtQkFBaUJMO0lBRXRFSSxvQkFBb0JQLHlCQUF5QlcsSUFBSSxDQUFDLFNBQUNDO1FBQ2pELElBQU1MLG9CQUFvQkssd0JBQXdCVCxlQUFlQyxhQUFhQyxRQUFRQztRQUV0RixJQUFJQyxtQkFBbUI7WUFDckIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxJQUFJQSxtQkFBbUI7UUFDckJELGFBQWFPLEtBQUssQ0FBQyxBQUFDLG9CQUFtQyxPQUFoQkwsaUJBQWdCLGlCQUFlTDtJQUN4RTtJQUVBLE9BQU9JO0FBQ1Q7QUFFQSxTQUFTTix1QkFBdUJFLGFBQWEsRUFBRUMsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLFlBQVk7SUFDOUUsSUFBSVEsMkJBQTJCO0lBRS9CLElBQUksQ0FBQ1QsUUFBUTtRQUNYLElBQU1HLGtCQUFrQkYsYUFBYUcsWUFBWSxDQUFDTjtRQUVsREcsYUFBYUksS0FBSyxDQUFDLEFBQUMsa0JBQWlDLE9BQWhCRixpQkFB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