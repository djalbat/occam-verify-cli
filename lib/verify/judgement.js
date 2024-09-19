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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvanVkZ2VtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSnVkZ2VtZW50IGZyb20gXCIuLi9qdWRnZW1lbnRcIjtcbmltcG9ydCB2ZXJpZnlGcmFtZSBmcm9tIFwiLi4vdmVyaWZ5L2ZyYW1lXCI7XG5pbXBvcnQgZnJhbWVNZXRhVHlwZSBmcm9tIFwiLi4vbWV0YVR5cGUvZnJhbWVcIjtcbmltcG9ydCBKdWRnZW1lbnRBc3NpZ25tZW50IGZyb20gXCIuLi9hc3NpZ25tZW50L2p1ZGdlbWVudFwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgZnJhbWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvanVkZ2VtZW50L2ZyYW1lIVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9qdWRnZW1lbnQvc3RhdGVtZW50L21ldGF2YXJpYWJsZSFcIik7XG5cbmNvbnN0IHZlcmlmeUp1ZGdlbWVudEZ1bmN0aW9ucyA9IFtcbiAgdmVyaWZ5RGVyaXZlZEp1ZGdlbWVudCxcbiAgdmVyaWZ5U3RhdGVkSnVkZ2VtZW50XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlKdWRnZW1lbnQoanVkZ2VtZW50Tm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBqdWRnZW1lbnRWZXJpZmllZDtcblxuICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGp1ZGdlbWVudE5vZGUpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQuLi5gLCBqdWRnZW1lbnROb2RlKTtcblxuICBqdWRnZW1lbnRWZXJpZmllZCA9IHZlcmlmeUp1ZGdlbWVudEZ1bmN0aW9ucy5zb21lKCh2ZXJpZnlKdWRnZW1lbnRGdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IGp1ZGdlbWVudFZlcmlmaWVkID0gdmVyaWZ5SnVkZ2VtZW50RnVuY3Rpb24oanVkZ2VtZW50Tm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChqdWRnZW1lbnRWZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBpZiAoanVkZ2VtZW50VmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQuYCwganVkZ2VtZW50Tm9kZSk7XG4gIH1cblxuICByZXR1cm4ganVkZ2VtZW50VmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeURlcml2ZWRKdWRnZW1lbnQoanVkZ2VtZW50Tm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBkZXJpdmVkSnVkZ2VtZW50VmVyaWZpZWQgPSBmYWxzZTtcblxuICBpZiAoIXN0YXRlZCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoanVkZ2VtZW50Tm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgZGVyaXZlZCBqdWRnZW1lbnQuLi5gLCBqdWRnZW1lbnROb2RlKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoanVkZ2VtZW50Tm9kZSk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGp1ZGdlbWVudCA9IGxvY2FsQ29udGV4dC5maW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgIGlmIChqdWRnZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBmcmFtZXMgPSBbXSxcbiAgICAgICAgICAgICAgICBmcmFtZU5vZGUgPSBmcmFtZU5vZGVRdWVyeShqdWRnZW1lbnROb2RlKSxcbiAgICAgICAgICAgICAgICBmcmFtZVZlcmlmaWVkID0gdmVyaWZ5RnJhbWUoZnJhbWVOb2RlLCBmcmFtZXMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgIGlmIChmcmFtZVZlcmlmaWVkKSB7XG4gICAgICAgICAgICBjb25zdCBmaXJzdEZyYW1lID0gZmlyc3QoZnJhbWVzKSxcbiAgICAgICAgICAgICAgICAgIGZyYW1lID0gZmlyc3RGcmFtZSwgLy8vXG4gICAgICAgICAgICAgICAgICBmcmFtZVNpbmd1bGFyID0gZnJhbWUuaXNTaW5ndWxhcigpO1xuXG4gICAgICAgICAgICBpZiAoZnJhbWVTaW5ndWxhcikge1xuICAgICAgICAgICAgICBjb25zdCBkZWNsYXJhdGlvbiA9IGZyYW1lLmdldERlY2xhcmF0aW9uKCksXG4gICAgICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBkZWNsYXJhdGlvbi5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgICAgICAgICAgIG1ldGFMZW1tYSA9IGxvY2FsQ29udGV4dC5maW5kTWV0YUxlbW1hQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgICAgICAgICBtZXRhdGhlb3JlbSA9IGxvY2FsQ29udGV4dC5maW5kTWV0YXRoZW9yZW1CeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtID0gKG1ldGFMZW1tYSB8fCBtZXRhdGhlb3JlbSk7ICAvLy9cblxuICAgICAgICAgICAgICBpZiAobWV0YUxlbW1hTWV0YXRoZW9yZW0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWRXaXRoRGVjbGFyYXRpb24gPSBkZWNsYXJhdGlvbi51bmlmeU1ldGFMZW1tYU9yTWV0YVRoZW9yZW0obWV0YUxlbW1hTWV0YXRoZW9yZW0pLFxuICAgICAgICAgICAgICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZFdpdGhKdWRnZW1lbnQgPSBqdWRnZW1lbnQudW5pZnlNZXRhTGVtbWFPck1ldGFUaGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtKTtcblxuICAgICAgICAgICAgICAgIGRlcml2ZWRKdWRnZW1lbnRWZXJpZmllZCA9IChtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWRXaXRoRGVjbGFyYXRpb24gJiYgbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkV2l0aEp1ZGdlbWVudCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVGhlcmUgYXJlIG5vIG1ldGEtbGVtbWFzIG9yIG1ldGF0aGVvcmVtcyBjb3JyZXNwb25kaW5nIHRvIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCwganVkZ2VtZW50Tm9kZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhmcmFtZU5vZGUpO1xuXG4gICAgICAgICAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVGhlICcke2ZyYW1lU3RyaW5nfScgaXMgbm90IHNpbmd1bGFyLmAsIGp1ZGdlbWVudE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGBUaGVyZSBpcyBubyBqdWRnZW1lbnQgcHJlc2VudCBmb3IgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gLCBqdWRnZW1lbnROb2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkZXJpdmVkSnVkZ2VtZW50VmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGRlcml2ZWQganVkZ2VtZW50LmAsIGp1ZGdlbWVudE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZXJpdmVkSnVkZ2VtZW50VmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlZEp1ZGdlbWVudChqdWRnZW1lbnROb2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlZEp1ZGdlbWVudFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKHN0YXRlZCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoanVkZ2VtZW50Tm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgc3RhdGVkIGp1ZGdlbWVudC4uLmAsIGp1ZGdlbWVudE5vZGUpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShqdWRnZW1lbnROb2RlKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVWZXJpZmllZCA9IHZlcmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgZnJhbWVzID0gW10sXG4gICAgICAgICAgICAgIGZyYW1lTm9kZSA9IGZyYW1lTm9kZVF1ZXJ5KGp1ZGdlbWVudE5vZGUpLFxuICAgICAgICAgICAgICBmcmFtZVZlcmlmaWVkID0gdmVyaWZ5RnJhbWUoZnJhbWVOb2RlLCBmcmFtZXMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICBpZiAoZnJhbWVWZXJpZmllZCkge1xuICAgICAgICAgIGlmIChhc3NpZ25tZW50cyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgZmlyc3RGcmFtZSA9IGZpcnN0KGZyYW1lcyksXG4gICAgICAgICAgICAgICAgICBmcmFtZSA9IGZpcnN0RnJhbWUsIC8vL1xuICAgICAgICAgICAgICAgICAganVkZ2VtZW50ID0gSnVkZ2VtZW50LmZyb21KdWRnZW1lbnROb2RlRnJhbWVBbmRNZXRhdmFyaWFibGVOb2RlKGp1ZGdlbWVudE5vZGUsIGZyYW1lLCBtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgICAgICAgIGp1ZGdlbWVudEFzc2lnbm1lbnQgPSBKdWRnZW1lbnRBc3NpZ25tZW50LmZyb21KdWRnZW1lbnQoanVkZ2VtZW50KSxcbiAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnQgPSBqdWRnZW1lbnRBc3NpZ25tZW50O1xuXG4gICAgICAgICAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHN0YXRlZEp1ZGdlbWVudFZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGF0ZWRKdWRnZW1lbnRWZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgc3RhdGVkIGp1ZGdlbWVudC5gLCBqdWRnZW1lbnROb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVkSnVkZ2VtZW50VmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG1ldGFUeXBlID0gbWV0YXZhcmlhYmxlLmdldE1ldGFUeXBlKCk7XG5cbiAgICBpZiAobWV0YVR5cGUgPT09IGZyYW1lTWV0YVR5cGUpIHtcbiAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZnJhbWVNZXRhVHlwZU5hbWUgPSBmcmFtZU1ldGFUeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuYXNTdHJpbmcoKTtcblxuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGBUaGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgbWV0YS10eXBlIGlzICcke21ldGFUeXBlU3RyaW5nfScgd2hlbiBpdCBzaG91bGQgYmUgJyR7ZnJhbWVNZXRhVHlwZU5hbWV9Jy5gLCBtZXRhdmFyaWFibGVOb2RlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGBUaGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGlzIG5vdCBwcmVzZW50Jy5gLCBtZXRhdmFyaWFibGVOb2RlKTtcbiAgfVxuXG4gIGlmIChtZXRhdmFyaWFibGVWZXJpZmllZCkge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gLCBtZXRhdmFyaWFibGVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlKdWRnZW1lbnQiLCJmcmFtZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsInZlcmlmeUp1ZGdlbWVudEZ1bmN0aW9ucyIsInZlcmlmeURlcml2ZWRKdWRnZW1lbnQiLCJ2ZXJpZnlTdGF0ZWRKdWRnZW1lbnQiLCJqdWRnZW1lbnROb2RlIiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJsb2NhbENvbnRleHQiLCJqdWRnZW1lbnRWZXJpZmllZCIsImp1ZGdlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwic29tZSIsInZlcmlmeUp1ZGdlbWVudEZ1bmN0aW9uIiwiZGVidWciLCJkZXJpdmVkSnVkZ2VtZW50VmVyaWZpZWQiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlVmVyaWZpZWQiLCJ2ZXJpZnlNZXRhdmFyaWFibGUiLCJqdWRnZW1lbnQiLCJmaW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGVOb2RlIiwiZnJhbWVzIiwiZnJhbWVOb2RlIiwiZnJhbWVWZXJpZmllZCIsInZlcmlmeUZyYW1lIiwiZmlyc3RGcmFtZSIsImZpcnN0IiwiZnJhbWUiLCJmcmFtZVNpbmd1bGFyIiwiaXNTaW5ndWxhciIsImRlY2xhcmF0aW9uIiwiZ2V0RGVjbGFyYXRpb24iLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwibWV0YUxlbW1hIiwiZmluZE1ldGFMZW1tYUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF0aGVvcmVtIiwiZmluZE1ldGF0aGVvcmVtQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWRXaXRoRGVjbGFyYXRpb24iLCJ1bmlmeU1ldGFMZW1tYU9yTWV0YVRoZW9yZW0iLCJtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWRXaXRoSnVkZ2VtZW50IiwibWV0YXZhcmlhYmxlU3RyaW5nIiwiZnJhbWVTdHJpbmciLCJzdGF0ZWRKdWRnZW1lbnRWZXJpZmllZCIsIkp1ZGdlbWVudCIsImZyb21KdWRnZW1lbnROb2RlRnJhbWVBbmRNZXRhdmFyaWFibGVOb2RlIiwianVkZ2VtZW50QXNzaWdubWVudCIsIkp1ZGdlbWVudEFzc2lnbm1lbnQiLCJmcm9tSnVkZ2VtZW50IiwiYXNzaWdubWVudCIsInB1c2giLCJtZXRhdmFyaWFibGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YVR5cGUiLCJnZXRNZXRhVHlwZSIsImZyYW1lTWV0YVR5cGUiLCJmcmFtZU1ldGFUeXBlTmFtZSIsImdldE5hbWUiLCJtZXRhVHlwZVN0cmluZyIsImFzU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFrQkE7OztlQUF3QkE7OztnRUFoQkY7NERBQ0U7NkRBQ0U7aUVBQ007cUJBRVY7cUJBQ0k7Ozs7OztBQUUxQixJQUFNQyxp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