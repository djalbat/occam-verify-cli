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
var _judgement1 = /*#__PURE__*/ _interop_require_default(require("../assignment/judgement"));
var _array = require("../utilities/array");
var _query = require("../utilities/query");
var _declaration = /*#__PURE__*/ _interop_require_default(require("./declaration"));
var _name = require("../utilities/name");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var frameNodeQuery = (0, _query.nodeQuery)("/judgement/frame"), declarationNodeQuery = (0, _query.nodeQuery)("/judgement/declaration");
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
        var frames = [], frameNode = frameNodeQuery(judgementNode), frameVerified = (0, _frame.default)(frameNode, frames, stated, localContext);
        if (frameVerified) {
        // const firstFrame = first(frames),
        //       frame = firstFrame, ///
        //       declaration = frame.getDeclaration(),
        //       metavariableNode = declaration.getMetavariableNode(),
        //       metatheorem = localContext.findMetatheoremByMetavariableNode(metavariableNode),
        //       metaLemma = localContext.findMetaLemmaByMetavariableNode(metavariableNode),
        //       metaLemmaMetatheorem = (metaLemma || metatheorem);  ///
        //
        // if (metaLemmaMetatheorem !== null) {
        //   const metaLemmaMetatheoremUnifiedWithJudgement = judgement.unifyMetaLemmaOrMetatheorem(metaLemmaMetatheorem),
        //         metaLemmaMetatheoremUnifiedWithDeclaration = declaration.unifyMetaLemmaOrMetatheorem(metaLemmaMetatheorem);
        //
        //   derivedJudgementVerified = (metaLemmaMetatheoremUnifiedWithJudgement && metaLemmaMetatheoremUnifiedWithDeclaration);
        // }
        } else {
        // const metavariableString = localContext.nodeAsString(metavariableNode);
        //
        // localContext.debug(`There is no judgement for the '${metavariableString}' metavariable.`, metavariableNode)
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
        var frames = [], frameNode = frameNodeQuery(judgementNode), frameVerified = (0, _frame.default)(frameNode, frames, stated, localContext);
        if (frameVerified) {
            var firstFrame = (0, _array.first)(frames), frame = firstFrame, metavariable = frame.getMetavariable(), metavariableNode = metavariable.getNode(), metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), judgementPresent = localContext.isJudgementPresentByMetavariableName(metavariableName);
            if (!judgementPresent) {
                var declarations = [], declarationNode = declarationNodeQuery(judgementNode), declarationVerified = (0, _declaration.default)(declarationNode, declarations, stated, localContext);
                if (declarationVerified) {
                    if (assignments !== null) {
                        var firstDeclaration = (0, _array.first)(declarations), declaration = firstDeclaration, judgement = _judgement.default.fromJudgementNodeFrameAndDeclaration(judgementNode, frame, declaration), judgementAssignment = _judgement1.default.fromJudgement(judgement), assignment = judgementAssignment;
                        assignments.push(assignment);
                    }
                    statedJudgementVerified = true;
                }
            } else {
                localContext.trace("There is already a judgement for the '".concat(metavariableName, "' metavariable."), judgementNode);
            }
        }
        if (statedJudgementVerified) {
            localContext.debug("...verified the '".concat(judgementString, "' stated judgement."), judgementNode);
        }
    }
    return statedJudgementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvanVkZ2VtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSnVkZ2VtZW50IGZyb20gXCIuLi9qdWRnZW1lbnRcIjtcbmltcG9ydCB2ZXJpZnlGcmFtZSBmcm9tIFwiLi4vdmVyaWZ5L2ZyYW1lXCI7XG5pbXBvcnQgSnVkZ2VtZW50QXNzaWdubWVudCBmcm9tIFwiLi4vYXNzaWdubWVudC9qdWRnZW1lbnRcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgdmVyaWZ5RGVjbGFyYXRpb24gZnJvbSBcIi4vZGVjbGFyYXRpb25cIjtcbmltcG9ydCB7bWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25hbWVcIjtcblxuY29uc3QgZnJhbWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvanVkZ2VtZW50L2ZyYW1lXCIpLFxuICAgICAgZGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvanVkZ2VtZW50L2RlY2xhcmF0aW9uXCIpO1xuXG5jb25zdCB2ZXJpZnlKdWRnZW1lbnRGdW5jdGlvbnMgPSBbXG4gIHZlcmlmeURlcml2ZWRKdWRnZW1lbnQsXG4gIHZlcmlmeVN0YXRlZEp1ZGdlbWVudFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5SnVkZ2VtZW50KGp1ZGdlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQganVkZ2VtZW50VmVyaWZpZWQ7XG5cbiAgY29uc3QganVkZ2VtZW50U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhqdWRnZW1lbnROb2RlKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50Li4uYCwganVkZ2VtZW50Tm9kZSk7XG5cbiAganVkZ2VtZW50VmVyaWZpZWQgPSB2ZXJpZnlKdWRnZW1lbnRGdW5jdGlvbnMuc29tZSgodmVyaWZ5SnVkZ2VtZW50RnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCBqdWRnZW1lbnRWZXJpZmllZCA9IHZlcmlmeUp1ZGdlbWVudEZ1bmN0aW9uKGp1ZGdlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoanVkZ2VtZW50VmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGp1ZGdlbWVudFZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50LmAsIGp1ZGdlbWVudE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGp1ZGdlbWVudFZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlEZXJpdmVkSnVkZ2VtZW50KGp1ZGdlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgZGVyaXZlZEp1ZGdlbWVudFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKCFzdGF0ZWQpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGp1ZGdlbWVudE5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGRlcml2ZWQganVkZ2VtZW50Li4uYCwganVkZ2VtZW50Tm9kZSk7XG5cbiAgICBjb25zdCBmcmFtZXMgPSBbXSxcbiAgICAgICAgICBmcmFtZU5vZGUgPSBmcmFtZU5vZGVRdWVyeShqdWRnZW1lbnROb2RlKSxcbiAgICAgICAgICBmcmFtZVZlcmlmaWVkID0gdmVyaWZ5RnJhbWUoZnJhbWVOb2RlLCBmcmFtZXMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChmcmFtZVZlcmlmaWVkKSB7XG4gICAgICAvLyBjb25zdCBmaXJzdEZyYW1lID0gZmlyc3QoZnJhbWVzKSxcbiAgICAgIC8vICAgICAgIGZyYW1lID0gZmlyc3RGcmFtZSwgLy8vXG4gICAgICAvLyAgICAgICBkZWNsYXJhdGlvbiA9IGZyYW1lLmdldERlY2xhcmF0aW9uKCksXG4gICAgICAvLyAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gZGVjbGFyYXRpb24uZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgLy8gICAgICAgbWV0YXRoZW9yZW0gPSBsb2NhbENvbnRleHQuZmluZE1ldGF0aGVvcmVtQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgLy8gICAgICAgbWV0YUxlbW1hID0gbG9jYWxDb250ZXh0LmZpbmRNZXRhTGVtbWFCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAvLyAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbSA9IChtZXRhTGVtbWEgfHwgbWV0YXRoZW9yZW0pOyAgLy8vXG4gICAgICAvL1xuICAgICAgLy8gaWYgKG1ldGFMZW1tYU1ldGF0aGVvcmVtICE9PSBudWxsKSB7XG4gICAgICAvLyAgIGNvbnN0IG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZFdpdGhKdWRnZW1lbnQgPSBqdWRnZW1lbnQudW5pZnlNZXRhTGVtbWFPck1ldGF0aGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtKSxcbiAgICAgIC8vICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkV2l0aERlY2xhcmF0aW9uID0gZGVjbGFyYXRpb24udW5pZnlNZXRhTGVtbWFPck1ldGF0aGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtKTtcbiAgICAgIC8vXG4gICAgICAvLyAgIGRlcml2ZWRKdWRnZW1lbnRWZXJpZmllZCA9IChtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWRXaXRoSnVkZ2VtZW50ICYmIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZFdpdGhEZWNsYXJhdGlvbik7XG4gICAgICAvLyB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSk7XG4gICAgICAvL1xuICAgICAgLy8gbG9jYWxDb250ZXh0LmRlYnVnKGBUaGVyZSBpcyBubyBqdWRnZW1lbnQgZm9yIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCwgbWV0YXZhcmlhYmxlTm9kZSlcbiAgICB9XG5cbiAgICBpZiAoZGVyaXZlZEp1ZGdlbWVudFZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBkZXJpdmVkIGp1ZGdlbWVudC5gLCBqdWRnZW1lbnROb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVyaXZlZEp1ZGdlbWVudFZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZWRKdWRnZW1lbnQoanVkZ2VtZW50Tm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZWRKdWRnZW1lbnRWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmIChzdGF0ZWQpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGp1ZGdlbWVudE5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIHN0YXRlZCBqdWRnZW1lbnQuLi5gLCBqdWRnZW1lbnROb2RlKTtcblxuICAgIGNvbnN0IGZyYW1lcyA9IFtdLFxuICAgICAgICAgIGZyYW1lTm9kZSA9IGZyYW1lTm9kZVF1ZXJ5KGp1ZGdlbWVudE5vZGUpLFxuICAgICAgICAgIGZyYW1lVmVyaWZpZWQgPSB2ZXJpZnlGcmFtZShmcmFtZU5vZGUsIGZyYW1lcywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKGZyYW1lVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGZpcnN0RnJhbWUgPSBmaXJzdChmcmFtZXMpLFxuICAgICAgICAgICAgZnJhbWUgPSBmaXJzdEZyYW1lLCAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IGZyYW1lLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAganVkZ2VtZW50UHJlc2VudCA9IGxvY2FsQ29udGV4dC5pc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmICghanVkZ2VtZW50UHJlc2VudCkge1xuICAgICAgICBjb25zdCBkZWNsYXJhdGlvbnMgPSBbXSxcbiAgICAgICAgICAgICAgZGVjbGFyYXRpb25Ob2RlID0gZGVjbGFyYXRpb25Ob2RlUXVlcnkoanVkZ2VtZW50Tm9kZSksXG4gICAgICAgICAgICAgIGRlY2xhcmF0aW9uVmVyaWZpZWQgPSB2ZXJpZnlEZWNsYXJhdGlvbihkZWNsYXJhdGlvbk5vZGUsIGRlY2xhcmF0aW9ucywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIGlmIChkZWNsYXJhdGlvblZlcmlmaWVkKSB7XG4gICAgICAgICAgaWYgKGFzc2lnbm1lbnRzICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBmaXJzdERlY2xhcmF0aW9uID0gZmlyc3QoZGVjbGFyYXRpb25zKSxcbiAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uID0gZmlyc3REZWNsYXJhdGlvbiwgLy8vXG4gICAgICAgICAgICAgICAgICBqdWRnZW1lbnQgPSBKdWRnZW1lbnQuZnJvbUp1ZGdlbWVudE5vZGVGcmFtZUFuZERlY2xhcmF0aW9uKGp1ZGdlbWVudE5vZGUsIGZyYW1lLCBkZWNsYXJhdGlvbiksXG4gICAgICAgICAgICAgICAgICBqdWRnZW1lbnRBc3NpZ25tZW50ID0gSnVkZ2VtZW50QXNzaWdubWVudC5mcm9tSnVkZ2VtZW50KGp1ZGdlbWVudCksXG4gICAgICAgICAgICAgICAgICBhc3NpZ25tZW50ID0ganVkZ2VtZW50QXNzaWdubWVudDtcblxuICAgICAgICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzdGF0ZWRKdWRnZW1lbnRWZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2FsQ29udGV4dC50cmFjZShgVGhlcmUgaXMgYWxyZWFkeSBhIGp1ZGdlbWVudCBmb3IgdGhlICcke21ldGF2YXJpYWJsZU5hbWV9JyBtZXRhdmFyaWFibGUuYCwganVkZ2VtZW50Tm9kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlZEp1ZGdlbWVudFZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBzdGF0ZWQganVkZ2VtZW50LmAsIGp1ZGdlbWVudE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZWRKdWRnZW1lbnRWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlKdWRnZW1lbnQiLCJmcmFtZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwidmVyaWZ5SnVkZ2VtZW50RnVuY3Rpb25zIiwidmVyaWZ5RGVyaXZlZEp1ZGdlbWVudCIsInZlcmlmeVN0YXRlZEp1ZGdlbWVudCIsImp1ZGdlbWVudE5vZGUiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImxvY2FsQ29udGV4dCIsImp1ZGdlbWVudFZlcmlmaWVkIiwianVkZ2VtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJzb21lIiwidmVyaWZ5SnVkZ2VtZW50RnVuY3Rpb24iLCJkZWJ1ZyIsImRlcml2ZWRKdWRnZW1lbnRWZXJpZmllZCIsImZyYW1lcyIsImZyYW1lTm9kZSIsImZyYW1lVmVyaWZpZWQiLCJ2ZXJpZnlGcmFtZSIsInN0YXRlZEp1ZGdlbWVudFZlcmlmaWVkIiwiZmlyc3RGcmFtZSIsImZpcnN0IiwiZnJhbWUiLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0Tm9kZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJqdWRnZW1lbnRQcmVzZW50IiwiaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwiZGVjbGFyYXRpb25zIiwiZGVjbGFyYXRpb25Ob2RlIiwiZGVjbGFyYXRpb25WZXJpZmllZCIsInZlcmlmeURlY2xhcmF0aW9uIiwiZmlyc3REZWNsYXJhdGlvbiIsImRlY2xhcmF0aW9uIiwianVkZ2VtZW50IiwiSnVkZ2VtZW50IiwiZnJvbUp1ZGdlbWVudE5vZGVGcmFtZUFuZERlY2xhcmF0aW9uIiwianVkZ2VtZW50QXNzaWdubWVudCIsIkp1ZGdlbWVudEFzc2lnbm1lbnQiLCJmcm9tSnVkZ2VtZW50IiwiYXNzaWdubWVudCIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW1CQTs7O2VBQXdCQTs7O2dFQWpCRjs0REFDRTtpRUFDUTtxQkFFVjtxQkFDSTtrRUFDSTtvQkFDcUI7Ozs7OztBQUVuRCxJQUFNQyxpQkFBaUJDLElBQUFBLGdCQUFTLEVBQUMscUJBQzNCQyx1QkFBdUJELElBQUFB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