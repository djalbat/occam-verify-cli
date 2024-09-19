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
                    var frames = [], frameNode = frameNodeQuery(judgementNode), frameVerified = (0, _frame.default)(frameNode, frames, stated, localContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvanVkZ2VtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSnVkZ2VtZW50IGZyb20gXCIuLi9qdWRnZW1lbnRcIjtcbmltcG9ydCB2ZXJpZnlGcmFtZSBmcm9tIFwiLi4vdmVyaWZ5L2ZyYW1lXCI7XG5pbXBvcnQgZnJhbWVNZXRhVHlwZSBmcm9tIFwiLi4vbWV0YVR5cGUvZnJhbWVcIjtcbmltcG9ydCBKdWRnZW1lbnRBc3NpZ25tZW50IGZyb20gXCIuLi9hc3NpZ25tZW50L2p1ZGdlbWVudFwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgZnJhbWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvanVkZ2VtZW50L2ZyYW1lIVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9qdWRnZW1lbnQvc3RhdGVtZW50L21ldGF2YXJpYWJsZSFcIik7XG5cbmNvbnN0IHZlcmlmeUp1ZGdlbWVudEZ1bmN0aW9ucyA9IFtcbiAgdmVyaWZ5RGVyaXZlZEp1ZGdlbWVudCxcbiAgdmVyaWZ5U3RhdGVkSnVkZ2VtZW50XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlKdWRnZW1lbnQoanVkZ2VtZW50Tm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBqdWRnZW1lbnRWZXJpZmllZDtcblxuICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGp1ZGdlbWVudE5vZGUpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQuLi5gLCBqdWRnZW1lbnROb2RlKTtcblxuICBqdWRnZW1lbnRWZXJpZmllZCA9IHZlcmlmeUp1ZGdlbWVudEZ1bmN0aW9ucy5zb21lKCh2ZXJpZnlKdWRnZW1lbnRGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IGp1ZGdlbWVudFZlcmlmaWVkID0gdmVyaWZ5SnVkZ2VtZW50RnVuY3Rpb24oanVkZ2VtZW50Tm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChqdWRnZW1lbnRWZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBpZiAoanVkZ2VtZW50VmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQuYCwganVkZ2VtZW50Tm9kZSk7XG4gIH1cblxuICByZXR1cm4ganVkZ2VtZW50VmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeURlcml2ZWRKdWRnZW1lbnQoanVkZ2VtZW50Tm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBkZXJpdmVkSnVkZ2VtZW50VmVyaWZpZWQgPSBmYWxzZTtcblxuICBpZiAoIXN0YXRlZCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoanVkZ2VtZW50Tm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgZGVyaXZlZCBqdWRnZW1lbnQuLi5gLCBqdWRnZW1lbnROb2RlKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoanVkZ2VtZW50Tm9kZSk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGp1ZGdlbWVudCA9IGxvY2FsQ29udGV4dC5maW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgIGlmIChqdWRnZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBmcmFtZXMgPSBbXSxcbiAgICAgICAgICAgICAgICBmcmFtZU5vZGUgPSBmcmFtZU5vZGVRdWVyeShqdWRnZW1lbnROb2RlKSxcbiAgICAgICAgICAgICAgICBmcmFtZVZlcmlmaWVkID0gdmVyaWZ5RnJhbWUoZnJhbWVOb2RlLCBmcmFtZXMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgIGlmIChmcmFtZVZlcmlmaWVkKSB7XG4gICAgICAgICAgICBjb25zdCBmaXJzdEZyYW1lID0gZmlyc3QoZnJhbWVzKSxcbiAgICAgICAgICAgICAgICAgIGZyYW1lID0gZmlyc3RGcmFtZSwgLy8vXG4gICAgICAgICAgICAgICAgICBmcmFtZVNpbmd1bGFyID0gZnJhbWUuaXNTaW5ndWxhcigpO1xuXG4gICAgICAgICAgICBpZiAoZnJhbWVTaW5ndWxhcikge1xuICAgICAgICAgICAgICBjb25zdCBkZWNsYXJhdGlvbiA9IGZyYW1lLmdldERlY2xhcmF0aW9uKCksXG4gICAgICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBkZWNsYXJhdGlvbi5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgICAgICAgICAgIG1ldGFMZW1tYSA9IGxvY2FsQ29udGV4dC5maW5kTWV0YUxlbW1hQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgICAgICAgICBtZXRhdGhlb3JlbSA9IGxvY2FsQ29udGV4dC5maW5kTWV0YXRoZW9yZW1CeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtID0gKG1ldGFMZW1tYSB8fCBtZXRhdGhlb3JlbSk7ICAvLy9cblxuICAgICAgICAgICAgICBpZiAobWV0YUxlbW1hTWV0YXRoZW9yZW0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWRXaXRoRGVjbGFyYXRpb24gPSBkZWNsYXJhdGlvbi51bmlmeU1ldGFMZW1tYU9yTWV0YVRoZW9yZW0obWV0YUxlbW1hTWV0YXRoZW9yZW0pLFxuICAgICAgICAgICAgICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZFdpdGhKdWRnZW1lbnQgPSBqdWRnZW1lbnQudW5pZnlNZXRhTGVtbWFPck1ldGFUaGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtKTtcblxuICAgICAgICAgICAgICAgIGRlcml2ZWRKdWRnZW1lbnRWZXJpZmllZCA9IChtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWRXaXRoRGVjbGFyYXRpb24gJiYgbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkV2l0aEp1ZGdlbWVudCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVGhlcmUgYXJlIG5vIG1ldGEtbGVtbWFzIG9yIG1ldGF0aGVvcmVtcyBjb3JyZXNwb25kaW5nIHRvIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCwganVkZ2VtZW50Tm9kZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhmcmFtZU5vZGUpO1xuXG4gICAgICAgICAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVGhlICcke2ZyYW1lU3RyaW5nfScgaXMgbm90IHNpbmd1bGFyLmAsIGp1ZGdlbWVudE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGBUaGVyZSBpcyBubyBqdWRnZW1lbnQgcHJlc2VudCBmb3IgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gLCBqdWRnZW1lbnROb2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkZXJpdmVkSnVkZ2VtZW50VmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGRlcml2ZWQganVkZ2VtZW50LmAsIGp1ZGdlbWVudE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZXJpdmVkSnVkZ2VtZW50VmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlZEp1ZGdlbWVudChqdWRnZW1lbnROb2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlZEp1ZGdlbWVudFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKHN0YXRlZCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoanVkZ2VtZW50Tm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgc3RhdGVkIGp1ZGdlbWVudC4uLmAsIGp1ZGdlbWVudE5vZGUpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShqdWRnZW1lbnROb2RlKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVWZXJpZmllZCA9IHZlcmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgZnJhbWVzID0gW10sXG4gICAgICAgICAgICAgIGZyYW1lTm9kZSA9IGZyYW1lTm9kZVF1ZXJ5KGp1ZGdlbWVudE5vZGUpLFxuICAgICAgICAgICAgICBmcmFtZVZlcmlmaWVkID0gdmVyaWZ5RnJhbWUoZnJhbWVOb2RlLCBmcmFtZXMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICBpZiAoZnJhbWVWZXJpZmllZCkge1xuICAgICAgICAgIGNvbnN0IGZpcnN0RnJhbWUgPSBmaXJzdChmcmFtZXMpLFxuICAgICAgICAgICAgICAgIGZyYW1lID0gZmlyc3RGcmFtZSwgLy8vXG4gICAgICAgICAgICAgICAganVkZ2VtZW50ID0gSnVkZ2VtZW50LmZyb21KdWRnZW1lbnROb2RlRnJhbWVBbmRNZXRhdmFyaWFibGVOb2RlKGp1ZGdlbWVudE5vZGUsIGZyYW1lLCBtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgICAgICBqdWRnZW1lbnRBc3NpZ25tZW50ID0gSnVkZ2VtZW50QXNzaWdubWVudC5mcm9tSnVkZ2VtZW50KGp1ZGdlbWVudCksXG4gICAgICAgICAgICAgICAgYXNzaWdubWVudCA9IGp1ZGdlbWVudEFzc2lnbm1lbnQ7XG5cbiAgICAgICAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuXG4gICAgICAgICAgc3RhdGVkSnVkZ2VtZW50VmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlZEp1ZGdlbWVudFZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBzdGF0ZWQganVkZ2VtZW50LmAsIGp1ZGdlbWVudE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZWRKdWRnZW1lbnRWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gLCBtZXRhdmFyaWFibGVOb2RlKTtcblxuICBjb25zdCBtZXRhdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YVR5cGUgPSBtZXRhdmFyaWFibGUuZ2V0TWV0YVR5cGUoKTtcblxuICAgIGlmIChtZXRhVHlwZSA9PT0gZnJhbWVNZXRhVHlwZSkge1xuICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmcmFtZU1ldGFUeXBlTmFtZSA9IGZyYW1lTWV0YVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgbWV0YVR5cGVTdHJpbmcgPSBtZXRhVHlwZS5hc1N0cmluZygpO1xuXG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyBtZXRhLXR5cGUgaXMgJyR7bWV0YVR5cGVTdHJpbmd9JyB3aGVuIGl0IHNob3VsZCBiZSAnJHtmcmFtZU1ldGFUeXBlTmFtZX0nLmAsIG1ldGF2YXJpYWJsZU5vZGUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgaXMgbm90IHByZXNlbnQnLmAsIG1ldGF2YXJpYWJsZU5vZGUpO1xuICB9XG5cbiAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmAsIG1ldGF2YXJpYWJsZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeUp1ZGdlbWVudCIsImZyYW1lTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwidmVyaWZ5SnVkZ2VtZW50RnVuY3Rpb25zIiwidmVyaWZ5RGVyaXZlZEp1ZGdlbWVudCIsInZlcmlmeVN0YXRlZEp1ZGdlbWVudCIsImp1ZGdlbWVudE5vZGUiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImxvY2FsQ29udGV4dCIsImp1ZGdlbWVudFZlcmlmaWVkIiwianVkZ2VtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJzb21lIiwidmVyaWZ5SnVkZ2VtZW50RnVuY3Rpb24iLCJkZWJ1ZyIsImRlcml2ZWRKdWRnZW1lbnRWZXJpZmllZCIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVWZXJpZmllZCIsInZlcmlmeU1ldGF2YXJpYWJsZSIsImp1ZGdlbWVudCIsImZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJmcmFtZXMiLCJmcmFtZU5vZGUiLCJmcmFtZVZlcmlmaWVkIiwidmVyaWZ5RnJhbWUiLCJmaXJzdEZyYW1lIiwiZmlyc3QiLCJmcmFtZSIsImZyYW1lU2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwiZGVjbGFyYXRpb24iLCJnZXREZWNsYXJhdGlvbiIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhTGVtbWEiLCJmaW5kTWV0YUxlbW1hQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXRoZW9yZW0iLCJmaW5kTWV0YXRoZW9yZW1CeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhTGVtbWFNZXRhdGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZFdpdGhEZWNsYXJhdGlvbiIsInVuaWZ5TWV0YUxlbW1hT3JNZXRhVGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZFdpdGhKdWRnZW1lbnQiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJmcmFtZVN0cmluZyIsInN0YXRlZEp1ZGdlbWVudFZlcmlmaWVkIiwiSnVkZ2VtZW50IiwiZnJvbUp1ZGdlbWVudE5vZGVGcmFtZUFuZE1ldGF2YXJpYWJsZU5vZGUiLCJqdWRnZW1lbnRBc3NpZ25tZW50IiwiSnVkZ2VtZW50QXNzaWdubWVudCIsImZyb21KdWRnZW1lbnQiLCJhc3NpZ25tZW50IiwicHVzaCIsIm1ldGF2YXJpYWJsZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhVHlwZSIsImdldE1ldGFUeXBlIiwiZnJhbWVNZXRhVHlwZSIsImZyYW1lTWV0YVR5cGVOYW1lIiwiZ2V0TmFtZSIsIm1ldGFUeXBlU3RyaW5nIiwiYXNTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWtCQTs7O2VBQXdCQTs7O2dFQWhCRjs0REFDRTs2REFDRTtpRUFDTTtxQkFFVjtxQkFDSTs7Ozs7O0FBRTFCLElBQU1DLGlCQUFpQkMsSUFBQUEsZ0JBQVMsRUFBQyxzQkFDM0JDLHdCQUF3QkQsSUFBQUEsZ0JBQVMsRUFBQztBQUV4QyxJ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