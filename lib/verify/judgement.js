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
var _judgement = /*#__PURE__*/ _interop_require_default(require("../assignment/judgement"));
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
        debugger;
        if (statedJudgementVerified) {
            localMetaContext.debug("...verified the '".concat(judgementString, "' stated judgement."), judgementNode);
        }
    }
    return statedJudgementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvanVkZ2VtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5RnJhbWUgZnJvbSBcIi4uL3ZlcmlmeS9mcmFtZVwiO1xuaW1wb3J0IGZyYW1lTWV0YVR5cGUgZnJvbSBcIi4uL21ldGFUeXBlL2ZyYW1lXCI7XG5pbXBvcnQgSnVkZ2VtZW50QXNzaWdubWVudCBmcm9tIFwiLi4vYXNzaWdubWVudC9qdWRnZW1lbnRcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBmcmFtZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9qdWRnZW1lbnQvZnJhbWUhXCIpLFxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2p1ZGdlbWVudC9tZXRhdmFyaWFibGUhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlKdWRnZW1lbnQoanVkZ2VtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsTWV0YUNvbnRleHQpIHtcbiAgbGV0IGp1ZGdlbWVudFZlcmlmaWVkO1xuXG4gIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IGxvY2FsTWV0YUNvbnRleHQubm9kZUFzU3RyaW5nKGp1ZGdlbWVudE5vZGUpO1xuXG4gIGxvY2FsTWV0YUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50Li4uYCwganVkZ2VtZW50Tm9kZSk7XG5cbiAgY29uc3QgdmVyaWZ5SnVkZ2VtZW50RnVuY3Rpb25zID0gW1xuICAgIHZlcmlmeURlcml2ZWRKdWRnZW1lbnQsXG4gICAgdmVyaWZ5U3RhdGVkSnVkZ2VtZW50XG4gIF07XG5cbiAganVkZ2VtZW50VmVyaWZpZWQgPSB2ZXJpZnlKdWRnZW1lbnRGdW5jdGlvbnMuc29tZSgodmVyaWZ5SnVkZ2VtZW50RnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCBqdWRnZW1lbnRWZXJpZmllZCA9IHZlcmlmeUp1ZGdlbWVudEZ1bmN0aW9uKGp1ZGdlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgIGlmIChqdWRnZW1lbnRWZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBpZiAoanVkZ2VtZW50VmVyaWZpZWQpIHtcbiAgICBsb2NhbE1ldGFDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50LmAsIGp1ZGdlbWVudE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGp1ZGdlbWVudFZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlEZXJpdmVkSnVkZ2VtZW50KGp1ZGdlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gIGxldCBkZXJpdmVkSnVkZ2VtZW50VmVyaWZpZWQgPSBmYWxzZTtcblxuICBpZiAoZGVyaXZlZCkge1xuICAgIC8vIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IGxvY2FsTWV0YUNvbnRleHQubm9kZUFzU3RyaW5nKGp1ZGdlbWVudE5vZGUpO1xuICAgIC8vXG4gICAgLy8gbG9jYWxNZXRhQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBkZXJpdmVkIGp1ZGdlbWVudC4uLmAsIGp1ZGdlbWVudE5vZGUpO1xuICAgIC8vXG4gICAgLy8gY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShqdWRnZW1lbnROb2RlKSxcbiAgICAvLyAgICAgICBtZXRhdmFyaWFibGUgPSBsb2NhbE1ldGFDb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxNZXRhQ29udGV4dCk7XG4gICAgLy9cbiAgICAvLyBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgLy8gICBjb25zdCBtZXRhVHlwZSA9IG1ldGF2YXJpYWJsZS5nZXRNZXRhVHlwZSgpO1xuICAgIC8vXG4gICAgLy8gICBpZiAobWV0YVR5cGUgPT09IGZyYW1lTWV0YVR5cGUpIHtcbiAgICAvLyAgICAgY29uc3QgZnJhbWVOb2RlID0gZnJhbWVOb2RlUXVlcnkoanVkZ2VtZW50Tm9kZSk7XG4gICAgLy9cbiAgICAvLyAgICAgaWYgKGZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgIC8vICAgICAgIGNvbnN0IGZyYW1lVmVyaWZpZWQgPSB2ZXJpZnlGcmFtZShmcmFtZU5vZGUsIGRlcml2ZWQsIGxvY2FsTWV0YUNvbnRleHQpO1xuICAgIC8vXG4gICAgLy8gICAgICAgZGVyaXZlZEp1ZGdlbWVudFZlcmlmaWVkID0gZnJhbWVWZXJpZmllZDsgIC8vL1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgIGxvY2FsTWV0YUNvbnRleHQuZGVidWcoYFRoZSByaWdodCBoYW5kIHNpZGUgb2YgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCBtdXN0IGJlIGEgZnJhbWUuYCwganVkZ2VtZW50Tm9kZSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgLy8gICAgIGNvbnN0IGZyYW1lTWV0YVR5cGVOYW1lID0gZnJhbWVNZXRhVHlwZS5nZXROYW1lKCksXG4gICAgLy8gICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbG9jYWxNZXRhQ29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgLy8gICAgICAgbWV0YVR5cGVTdHJpbmcgPSBtZXRhVHlwZS5hc1N0cmluZygpO1xuICAgIC8vXG4gICAgLy8gICAgIGxvY2FsTWV0YUNvbnRleHQuZGVidWcoYFRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyBtZXRhLXR5cGUgaXMgJyR7bWV0YVR5cGVTdHJpbmd9JyB3aGVuIGl0IHNob3VsZCBiZSAnJHtmcmFtZU1ldGFUeXBlTmFtZX0nLmAsIGp1ZGdlbWVudE5vZGUpO1xuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIGlmIChkZXJpdmVkSnVkZ2VtZW50VmVyaWZpZWQpIHtcbiAgICAvLyAgIGxvY2FsTWV0YUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBkZXJpdmVkIGp1ZGdlbWVudC5gLCBqdWRnZW1lbnROb2RlKTtcbiAgICAvLyB9XG4gIH1cblxuICByZXR1cm4gZGVyaXZlZEp1ZGdlbWVudFZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZWRKdWRnZW1lbnQoanVkZ2VtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsTWV0YUNvbnRleHQpIHtcbiAgbGV0IHN0YXRlZEp1ZGdlbWVudFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKCFkZXJpdmVkKSB7XG4gICAgY29uc3QganVkZ2VtZW50U3RyaW5nID0gbG9jYWxNZXRhQ29udGV4dC5ub2RlQXNTdHJpbmcoanVkZ2VtZW50Tm9kZSk7XG5cbiAgICBsb2NhbE1ldGFDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIHN0YXRlZCBqdWRnZW1lbnQuLi5gLCBqdWRnZW1lbnROb2RlKTtcblxuICAgIGRlYnVnZ2VyXG5cbiAgICBpZiAoc3RhdGVkSnVkZ2VtZW50VmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsTWV0YUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBzdGF0ZWQganVkZ2VtZW50LmAsIGp1ZGdlbWVudE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZWRKdWRnZW1lbnRWZXJpZmllZDtcbn0iXSwibmFtZXMiOlsidmVyaWZ5SnVkZ2VtZW50IiwiZnJhbWVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJtZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJqdWRnZW1lbnROb2RlIiwiYXNzaWdubWVudHMiLCJkZXJpdmVkIiwibG9jYWxNZXRhQ29udGV4dCIsImp1ZGdlbWVudFZlcmlmaWVkIiwianVkZ2VtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJ2ZXJpZnlKdWRnZW1lbnRGdW5jdGlvbnMiLCJ2ZXJpZnlEZXJpdmVkSnVkZ2VtZW50IiwidmVyaWZ5U3RhdGVkSnVkZ2VtZW50Iiwic29tZSIsInZlcmlmeUp1ZGdlbWVudEZ1bmN0aW9uIiwiZGVidWciLCJkZXJpdmVkSnVkZ2VtZW50VmVyaWZpZWQiLCJzdGF0ZWRKdWRnZW1lbnRWZXJpZmllZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUF3QkE7Ozs0REFUQTs2REFDRTtnRUFDTTtxQkFFTjs7Ozs7O0FBRTFCLElBQU1DLGlCQUFpQkMsSUFBQUEsZ0JBQVMsRUFBQyxzQkFDM0JDLHdCQUF3QkQsSUFBQUEsZ0JBQVMsRUFBQztBQUV6QixTQUFTRixnQkFBZ0JJLGFBQWEsRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLGdCQUFnQjtJQUMzRixJQUFJQztJQUVKLElBQU1DLGtCQUFrQkYsaUJBQWlCRyxZQUFZLENBQUNOO0lBRXRERyxpQkFBaUJJLEtBQUssQ0FBQyxBQUFDLGtCQUFpQyxPQUFoQkYsaUJBQWdCLG1CQUFpQkw7SUFFMUUsSUFBTVEsMkJBQTJCO1FBQy9CQztRQUNBQztLQUNEO0lBRUROLG9CQUFvQkkseUJBQXlCRyxJQUFJLENBQUMsU0FBQ0M7UUFDakQsSUFBTVIsb0JBQW9CUSx3QkFBd0JaLGVBQWVDLGFBQWFDLFNBQVNDO1FBRXZGLElBQUlDLG1CQUFtQjtZQUNyQixPQUFPO1FBQ1Q7SUFDRjtJQUVBLElBQUlBLG1CQUFtQjtRQUNyQkQsaUJBQWlCVSxLQUFLLENBQUMsQUFBQyxvQkFBbUMsT0FBaEJSLGlCQUFnQixpQkFBZUw7SUFDNUU7SUFFQSxPQUFPSTtBQUNUO0FBRUEsU0FBU0ssdUJBQXVCVCxhQUFhLEVBQUVDLFdBQVcsRUFBRUMsT0FBTyxFQUFFQyxnQkFBZ0I7SUFDbkYsSUFBSVcsMkJBQTJCO0lBRS9CLElBQUlaLFNBQVM7SUFDWCx3RUFBd0U7SUFDeEUsRUFBRTtJQUNGLG9HQUFvRztJQUNwRyxFQUFFO0lBQ0YsaUVBQWlFO0lBQ2pFLGdIQUFnSDtJQUNoSCxFQUFFO0lBQ0YsK0JBQStCO0lBQy9CLGlEQUFpRDtJQUNqRCxFQUFFO0lBQ0Ysc0NBQXNDO0lBQ3RDLHVEQUF1RDtJQUN2RCxFQUFFO0lBQ0YsZ0NBQWdDO0lBQ2hDLGlGQUFpRjtJQUNqRixFQUFFO0lBQ0YsdURBQXVEO0lBQ3ZELGVBQWU7SUFDZiw2SEFBNkg7SUFDN0gsUUFBUTtJQUNSLGFBQWE7SUFDYix5REFBeUQ7SUFDekQsOEVBQThFO0lBQzlFLDhDQUE4QztJQUM5QyxFQUFFO0lBQ0Ysc0tBQXNLO0lBQ3RLLE1BQU07SUFDTixJQUFJO0lBQ0osRUFBRTtJQUNGLGtDQUFrQztJQUNsQyxzR0FBc0c7SUFDdEcsSUFBSTtJQUNOO0lBRUEsT0FBT1k7QUFDVDtBQUVBLFNBQVNKLHNCQUFzQlYsYUFBYSxFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsZ0JBQWdCO0lBQ2xGLElBQUlZLDBCQUEwQjtJQUU5QixJQUFJLENBQUNiLFNBQVM7UUFDWixJQUFNRyxrQkFBa0JGLGlCQUFpQkcsWUFBWSxDQUFDTjtRQUV0REcsaUJBQWlCSSxLQUFLLENBQUMsQUFBQyxrQkFBaUMsT0FBaEJGLGlCQUFnQiwwQkFBd0JMO1FBRWpGLFFBQVE7UUFFUixJQUFJZSx5QkFBeUI7WUFDM0JaLGlCQUFpQlUsS0FBSyxDQUFDLEFBQUMsb0JBQW1DLE9BQWhCUixpQkFBZ0Isd0JBQXNCTDtRQUNuRjtJQUNGO0lBRUEsT0FBT2U7QUFDVCJ9