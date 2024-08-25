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
var _frame = /*#__PURE__*/ _interop_require_default(require("../verify/frame"));
var _frame1 = /*#__PURE__*/ _interop_require_default(require("../metaType/frame"));
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
    // const judgementString = localMetaContext.nodeAsString(judgementNode);
    //
    // localMetaContext.trace(`Verifying the '${judgementString}' derived judgement...`, judgementNode);
    //
    // const metavariableNode = metavariableNodeQuery(judgementNode),
    //       metavariable = localMetaContext.findMetavariableByMetavariableNode(metavariableNode, localMetaContext);
    //
    // if (metavariable !== null) {
    //   const metaType = metavariable.getMetaType();
    //
    //   if (metaType === frameMetaType) {
    //     const frameNode = frameNodeQuery(judgementNode);
    //
    //     if (frameNode !== null) {
    //       const frameVerified = verifyFrame(frameNode, derived, localMetaContext);
    //
    //       derivedJudgementVerified = frameVerified;  ///
    //     } else {
    //       localMetaContext.debug(`The right hand side of the '${judgementString}' judgement must be a frame.`, judgementNode);
    //     }
    //   } else {
    //     const frameMetaTypeName = frameMetaType.getName(),
    //       metavariableString = localMetaContext.nodeAsString(metavariableNode),
    //       metaTypeString = metaType.asString();
    //
    //     localMetaContext.debug(`The '${metavariableString}' metavariable's meta-type is '${metaTypeString}' when it should be '${frameMetaTypeName}'.`, judgementNode);
    //   }
    // }
    //
    // if (derivedJudgementVerified) {
    //   localMetaContext.debug(`...verified the '${judgementString}' derived judgement.`, judgementNode);
    // }
    }
    return derivedJudgementVerified;
}
function verifyStatedJudgement(judgementNode, assignments, derived, localMetaContext) {
    var statedJudgementVerified = false;
    if (!derived) {
        var judgementString = localMetaContext.nodeAsString(judgementNode);
        localMetaContext.trace("Verifying the '".concat(judgementString, "' stated judgement..."), judgementNode);
        var metavariableNode = metavariableNodeQuery(judgementNode), metavariable = localMetaContext.findMetavariableByMetavariableNode(metavariableNode, localMetaContext);
        if (metavariable !== null) {
            var metaType = metavariable.getMetaType();
            if (metaType === _frame1.default) {
                var frameNode = frameNodeQuery(judgementNode);
                if (frameNode !== null) {
                    var frameVerified = (0, _frame.default)(frameNode, derived, localMetaContext);
                    statedJudgementVerified = frameVerified; ///
                } else {
                    localMetaContext.debug("The right hand side of the '".concat(judgementString, "' judgement must be a frame."), judgementNode);
                }
            } else {
                var frameMetaTypeName = _frame1.default.getName(), metavariableString = localMetaContext.nodeAsString(metavariableNode), metaTypeString = metaType.asString();
                localMetaContext.debug("The '".concat(metavariableString, "' metavariable's meta-type is '").concat(metaTypeString, "' when it should be '").concat(frameMetaTypeName, "'."), judgementNode);
            }
        }
        if (statedJudgementVerified) {
            localMetaContext.debug("...verified the '".concat(judgementString, "' stated judgement."), judgementNode);
        }
    }
    return statedJudgementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvanVkZ2VtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5RnJhbWUgZnJvbSBcIi4uL3ZlcmlmeS9mcmFtZVwiO1xuaW1wb3J0IGZyYW1lTWV0YVR5cGUgZnJvbSBcIi4uL21ldGFUeXBlL2ZyYW1lXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgZnJhbWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvanVkZ2VtZW50L2ZyYW1lIVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9qdWRnZW1lbnQvbWV0YXZhcmlhYmxlIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5SnVkZ2VtZW50KGp1ZGdlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gIGxldCBqdWRnZW1lbnRWZXJpZmllZDtcblxuICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSBsb2NhbE1ldGFDb250ZXh0Lm5vZGVBc1N0cmluZyhqdWRnZW1lbnROb2RlKTtcblxuICBsb2NhbE1ldGFDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudC4uLmAsIGp1ZGdlbWVudE5vZGUpO1xuXG4gIGNvbnN0IHZlcmlmeUp1ZGdlbWVudEZ1bmN0aW9ucyA9IFtcbiAgICB2ZXJpZnlEZXJpdmVkSnVkZ2VtZW50LFxuICAgIHZlcmlmeVN0YXRlZEp1ZGdlbWVudFxuICBdO1xuXG4gIGp1ZGdlbWVudFZlcmlmaWVkID0gdmVyaWZ5SnVkZ2VtZW50RnVuY3Rpb25zLnNvbWUoKHZlcmlmeUp1ZGdlbWVudEZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QganVkZ2VtZW50VmVyaWZpZWQgPSB2ZXJpZnlKdWRnZW1lbnRGdW5jdGlvbihqdWRnZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICBpZiAoanVkZ2VtZW50VmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGp1ZGdlbWVudFZlcmlmaWVkKSB7XG4gICAgbG9jYWxNZXRhQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudC5gLCBqdWRnZW1lbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiBqdWRnZW1lbnRWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5RGVyaXZlZEp1ZGdlbWVudChqdWRnZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxNZXRhQ29udGV4dCkge1xuICBsZXQgZGVyaXZlZEp1ZGdlbWVudFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKGRlcml2ZWQpIHtcbiAgICAvLyBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSBsb2NhbE1ldGFDb250ZXh0Lm5vZGVBc1N0cmluZyhqdWRnZW1lbnROb2RlKTtcbiAgICAvL1xuICAgIC8vIGxvY2FsTWV0YUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgZGVyaXZlZCBqdWRnZW1lbnQuLi5gLCBqdWRnZW1lbnROb2RlKTtcbiAgICAvL1xuICAgIC8vIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoanVkZ2VtZW50Tm9kZSksXG4gICAgLy8gICAgICAgbWV0YXZhcmlhYmxlID0gbG9jYWxNZXRhQ29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsTWV0YUNvbnRleHQpO1xuICAgIC8vXG4gICAgLy8gaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgIC8vICAgY29uc3QgbWV0YVR5cGUgPSBtZXRhdmFyaWFibGUuZ2V0TWV0YVR5cGUoKTtcbiAgICAvL1xuICAgIC8vICAgaWYgKG1ldGFUeXBlID09PSBmcmFtZU1ldGFUeXBlKSB7XG4gICAgLy8gICAgIGNvbnN0IGZyYW1lTm9kZSA9IGZyYW1lTm9kZVF1ZXJ5KGp1ZGdlbWVudE5vZGUpO1xuICAgIC8vXG4gICAgLy8gICAgIGlmIChmcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICAvLyAgICAgICBjb25zdCBmcmFtZVZlcmlmaWVkID0gdmVyaWZ5RnJhbWUoZnJhbWVOb2RlLCBkZXJpdmVkLCBsb2NhbE1ldGFDb250ZXh0KTtcbiAgICAvL1xuICAgIC8vICAgICAgIGRlcml2ZWRKdWRnZW1lbnRWZXJpZmllZCA9IGZyYW1lVmVyaWZpZWQ7ICAvLy9cbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICBsb2NhbE1ldGFDb250ZXh0LmRlYnVnKGBUaGUgcmlnaHQgaGFuZCBzaWRlIG9mIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQgbXVzdCBiZSBhIGZyYW1lLmAsIGp1ZGdlbWVudE5vZGUpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9IGVsc2Uge1xuICAgIC8vICAgICBjb25zdCBmcmFtZU1ldGFUeXBlTmFtZSA9IGZyYW1lTWV0YVR5cGUuZ2V0TmFtZSgpLFxuICAgIC8vICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IGxvY2FsTWV0YUNvbnRleHQubm9kZUFzU3RyaW5nKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgIC8vICAgICAgIG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuYXNTdHJpbmcoKTtcbiAgICAvL1xuICAgIC8vICAgICBsb2NhbE1ldGFDb250ZXh0LmRlYnVnKGBUaGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgbWV0YS10eXBlIGlzICcke21ldGFUeXBlU3RyaW5nfScgd2hlbiBpdCBzaG91bGQgYmUgJyR7ZnJhbWVNZXRhVHlwZU5hbWV9Jy5gLCBqdWRnZW1lbnROb2RlKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyBpZiAoZGVyaXZlZEp1ZGdlbWVudFZlcmlmaWVkKSB7XG4gICAgLy8gICBsb2NhbE1ldGFDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgZGVyaXZlZCBqdWRnZW1lbnQuYCwganVkZ2VtZW50Tm9kZSk7XG4gICAgLy8gfVxuICB9XG5cbiAgcmV0dXJuIGRlcml2ZWRKdWRnZW1lbnRWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVkSnVkZ2VtZW50KGp1ZGdlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gIGxldCBzdGF0ZWRKdWRnZW1lbnRWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmICghZGVyaXZlZCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IGxvY2FsTWV0YUNvbnRleHQubm9kZUFzU3RyaW5nKGp1ZGdlbWVudE5vZGUpO1xuXG4gICAgbG9jYWxNZXRhQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBzdGF0ZWQganVkZ2VtZW50Li4uYCwganVkZ2VtZW50Tm9kZSk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KGp1ZGdlbWVudE5vZGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IGxvY2FsTWV0YUNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFUeXBlID0gbWV0YXZhcmlhYmxlLmdldE1ldGFUeXBlKCk7XG5cbiAgICAgIGlmIChtZXRhVHlwZSA9PT0gZnJhbWVNZXRhVHlwZSkge1xuICAgICAgICBjb25zdCBmcmFtZU5vZGUgPSBmcmFtZU5vZGVRdWVyeShqdWRnZW1lbnROb2RlKTtcblxuICAgICAgICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgZnJhbWVWZXJpZmllZCA9IHZlcmlmeUZyYW1lKGZyYW1lTm9kZSwgZGVyaXZlZCwgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICAgICAgICBzdGF0ZWRKdWRnZW1lbnRWZXJpZmllZCA9IGZyYW1lVmVyaWZpZWQ7ICAvLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsb2NhbE1ldGFDb250ZXh0LmRlYnVnKGBUaGUgcmlnaHQgaGFuZCBzaWRlIG9mIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQgbXVzdCBiZSBhIGZyYW1lLmAsIGp1ZGdlbWVudE5vZGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmcmFtZU1ldGFUeXBlTmFtZSA9IGZyYW1lTWV0YVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBsb2NhbE1ldGFDb250ZXh0Lm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgICAgbWV0YVR5cGVTdHJpbmcgPSBtZXRhVHlwZS5hc1N0cmluZygpO1xuXG4gICAgICAgIGxvY2FsTWV0YUNvbnRleHQuZGVidWcoYFRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyBtZXRhLXR5cGUgaXMgJyR7bWV0YVR5cGVTdHJpbmd9JyB3aGVuIGl0IHNob3VsZCBiZSAnJHtmcmFtZU1ldGFUeXBlTmFtZX0nLmAsIGp1ZGdlbWVudE5vZGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGF0ZWRKdWRnZW1lbnRWZXJpZmllZCkge1xuICAgICAgbG9jYWxNZXRhQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIHN0YXRlZCBqdWRnZW1lbnQuYCwganVkZ2VtZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlZEp1ZGdlbWVudFZlcmlmaWVkO1xufSJdLCJuYW1lcyI6WyJ2ZXJpZnlKdWRnZW1lbnQiLCJmcmFtZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsImp1ZGdlbWVudE5vZGUiLCJhc3NpZ25tZW50cyIsImRlcml2ZWQiLCJsb2NhbE1ldGFDb250ZXh0IiwianVkZ2VtZW50VmVyaWZpZWQiLCJqdWRnZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInZlcmlmeUp1ZGdlbWVudEZ1bmN0aW9ucyIsInZlcmlmeURlcml2ZWRKdWRnZW1lbnQiLCJ2ZXJpZnlTdGF0ZWRKdWRnZW1lbnQiLCJzb21lIiwidmVyaWZ5SnVkZ2VtZW50RnVuY3Rpb24iLCJkZWJ1ZyIsImRlcml2ZWRKdWRnZW1lbnRWZXJpZmllZCIsInN0YXRlZEp1ZGdlbWVudFZlcmlmaWVkIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhVHlwZSIsImdldE1ldGFUeXBlIiwiZnJhbWVNZXRhVHlwZSIsImZyYW1lTm9kZSIsImZyYW1lVmVyaWZpZWQiLCJ2ZXJpZnlGcmFtZSIsImZyYW1lTWV0YVR5cGVOYW1lIiwiZ2V0TmFtZSIsIm1ldGF2YXJpYWJsZVN0cmluZyIsIm1ldGFUeXBlU3RyaW5nIiwiYXNTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBd0JBOzs7NERBUkE7NkRBQ0U7cUJBRUE7Ozs7OztBQUUxQixJQUFNQyxpQkFBaUJDLElBQUFBLGdCQUFTLEVBQUMsc0JBQzNCQyx3QkFBd0JELElBQUFBLGdCQUFTLEVBQUM7QUFFekIsU0FBU0YsZ0JBQWdCSSxhQUFhLEVBQUVDLFdBQVcsRUFBRUMsT0FBTyxFQUFFQyxnQkFBZ0I7SUFDM0YsSUFBSUM7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