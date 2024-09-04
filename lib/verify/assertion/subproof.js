"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifySubproofAssertion;
    }
});
var _query = require("../../utilities/query");
var _metaTypeNames = require("../../metaTypeNames");
var metavariableNodesQuery = (0, _query.nodesQuery)("/subproofAssertion/statement/metavariable!");
function verifySubproofAssertion(subproofAssertionNode, assignments, derived, localContext) {
    var subproofAssertionVerified;
    var subproofAssertionString = localContext.nodeAsString(subproofAssertionNode);
    localContext.trace("Verifying the '".concat(subproofAssertionString, "' subproof assertion..."), subproofAssertionNode);
    var verifySubproofAssertionFunctions = [
        verifyDerivedSubproofAssertion,
        verifyStatedSubproofAssertion
    ];
    subproofAssertionVerified = verifySubproofAssertionFunctions.some(function(verifySubproofAssertionFunction) {
        var subproofAssertionVerified = verifySubproofAssertionFunction(subproofAssertionNode, assignments, derived, localContext);
        if (subproofAssertionVerified) {
            return true;
        }
    });
    if (subproofAssertionVerified) {
        localContext.debug("...verified the '".concat(subproofAssertionString, "' subproof assertion."), subproofAssertionNode);
    }
    return subproofAssertionVerified;
}
function verifyDerivedSubproofAssertion(subproofAssertionNode, assignments, derived, localContext) {
    var derivedSubproofAssertionVerified = false;
    if (derived) {
        var subproofAssertionString = localContext.nodeAsString(subproofAssertionNode);
        if (derivedSubproofAssertionVerified) {
            localContext.debug("The '".concat(subproofAssertionString, "' derived subproof assertion cannot be verified."), subproofAssertionNode);
        }
    }
    return derivedSubproofAssertionVerified;
}
function verifyStatedSubproofAssertion(subproofAssertionNode, assignments, derived, localContext) {
    var statedSubproofAssertionVerified = false;
    if (!derived) {
        var subproofAssertionString = localContext.nodeAsString(subproofAssertionNode);
        localContext.trace("Verifying the '".concat(subproofAssertionString, "' stated subproof assertion..."), subproofAssertionNode);
        var metavariableNodes = metavariableNodesQuery(subproofAssertionNode);
        statedSubproofAssertionVerified = metavariableNodes.every(function(metavariableNode) {
            var metavariable = localContext.findMetavariableByMetavariableNode(metavariableNode);
            if (metavariable !== null) {
                var metaTypeName = metavariable.getMetaTypeName();
                if (metaTypeName === _metaTypeNames.STATEMENT_META_TYPE_NAME) {
                    return true;
                }
            }
        });
        if (statedSubproofAssertionVerified) {
            localContext.debug("...verified the '".concat(subproofAssertionString, "' stated subproof assertion."), subproofAssertionNode);
        }
    }
    return statedSubproofAssertionVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvYXNzZXJ0aW9uL3N1YnByb29mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4uLy4uL21ldGFUeXBlTmFtZXNcIjtcblxuY29uc3QgbWV0YXZhcmlhYmxlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3VicHJvb2ZBc3NlcnRpb24vc3RhdGVtZW50L21ldGF2YXJpYWJsZSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVN1YnByb29mQXNzZXJ0aW9uKHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3VicHJvb2ZBc3NlcnRpb25WZXJpZmllZDtcblxuICBjb25zdCBzdWJwcm9vZkFzc2VydGlvblN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoc3VicHJvb2ZBc3NlcnRpb25Ob2RlKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uLi5gLCBzdWJwcm9vZkFzc2VydGlvbk5vZGUpO1xuXG4gIGNvbnN0IHZlcmlmeVN1YnByb29mQXNzZXJ0aW9uRnVuY3Rpb25zID0gW1xuICAgIHZlcmlmeURlcml2ZWRTdWJwcm9vZkFzc2VydGlvbixcbiAgICB2ZXJpZnlTdGF0ZWRTdWJwcm9vZkFzc2VydGlvblxuICBdO1xuXG4gIHN1YnByb29mQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlTdWJwcm9vZkFzc2VydGlvbkZ1bmN0aW9ucy5zb21lKCh2ZXJpZnlTdWJwcm9vZkFzc2VydGlvbkZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeVN1YnByb29mQXNzZXJ0aW9uRnVuY3Rpb24oc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChzdWJwcm9vZkFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChzdWJwcm9vZkFzc2VydGlvblZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uYCwgc3VicHJvb2ZBc3NlcnRpb25Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiBzdWJwcm9vZkFzc2VydGlvblZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlEZXJpdmVkU3VicHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBkZXJpdmVkU3VicHJvb2ZBc3NlcnRpb25WZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmIChkZXJpdmVkKSB7XG4gICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHN1YnByb29mQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBpZiAoZGVyaXZlZFN1YnByb29mQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBzdWJwcm9vZiBhc3NlcnRpb24gY2Fubm90IGJlIHZlcmlmaWVkLmAsIHN1YnByb29mQXNzZXJ0aW9uTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRlcml2ZWRTdWJwcm9vZkFzc2VydGlvblZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZWRTdWJwcm9vZkFzc2VydGlvbihzdWJwcm9vZkFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlZFN1YnByb29mQXNzZXJ0aW9uVmVyaWZpZWQgPSBmYWxzZTtcblxuICBpZiAoIWRlcml2ZWQpIHtcbiAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvblN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoc3VicHJvb2ZBc3NlcnRpb25Ob2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBzdWJwcm9vZiBhc3NlcnRpb24uLi5gLCBzdWJwcm9vZkFzc2VydGlvbk5vZGUpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZXMgPSBtZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5KHN1YnByb29mQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBzdGF0ZWRTdWJwcm9vZkFzc2VydGlvblZlcmlmaWVkID0gbWV0YXZhcmlhYmxlTm9kZXMuZXZlcnkoKG1ldGF2YXJpYWJsZU5vZGUpID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGxvY2FsQ29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG1ldGF2YXJpYWJsZS5nZXRNZXRhVHlwZU5hbWUoKTtcblxuICAgICAgICBpZiAobWV0YVR5cGVOYW1lID09PSBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHN0YXRlZFN1YnByb29mQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIHN1YnByb29mIGFzc2VydGlvbi5gLCBzdWJwcm9vZkFzc2VydGlvbk5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZWRTdWJwcm9vZkFzc2VydGlvblZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVN1YnByb29mQXNzZXJ0aW9uIiwibWV0YXZhcmlhYmxlTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJhc3NpZ25tZW50cyIsImRlcml2ZWQiLCJsb2NhbENvbnRleHQiLCJzdWJwcm9vZkFzc2VydGlvblZlcmlmaWVkIiwic3VicHJvb2ZBc3NlcnRpb25TdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInZlcmlmeVN1YnByb29mQXNzZXJ0aW9uRnVuY3Rpb25zIiwidmVyaWZ5RGVyaXZlZFN1YnByb29mQXNzZXJ0aW9uIiwidmVyaWZ5U3RhdGVkU3VicHJvb2ZBc3NlcnRpb24iLCJzb21lIiwidmVyaWZ5U3VicHJvb2ZBc3NlcnRpb25GdW5jdGlvbiIsImRlYnVnIiwiZGVyaXZlZFN1YnByb29mQXNzZXJ0aW9uVmVyaWZpZWQiLCJzdGF0ZWRTdWJwcm9vZkFzc2VydGlvblZlcmlmaWVkIiwibWV0YXZhcmlhYmxlTm9kZXMiLCJldmVyeSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YVR5cGVOYW1lIiwiZ2V0TWV0YVR5cGVOYW1lIiwiU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQXdCQTs7O3FCQUxHOzZCQUNjO0FBRXpDLElBQU1DLHlCQUF5QkMsSUFBQUEsaUJBQVUsRUFBQztBQUUzQixTQUFTRix3QkFBd0JHLHFCQUFxQixFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsWUFBWTtJQUN2RyxJQUFJQztJQUVKLElBQU1DLDBCQUEwQkYsYUFBYUcsWUFBWSxDQUFDTjtJQUUxREcsYUFBYUksS0FBSyxDQUFDLEFBQUMsa0JBQXlDLE9BQXhCRix5QkFBd0IsNEJBQTBCTDtJQUV2RixJQUFNUSxtQ0FBbUM7UUFDdkNDO1FBQ0FDO0tBQ0Q7SUFFRE4sNEJBQTRCSSxpQ0FBaUNHLElBQUksQ0FBQyxTQUFDQztRQUNqRSxJQUFNUiw0QkFBNEJRLGdDQUFnQ1osdUJBQXVCQyxhQUFhQyxTQUFTQztRQUUvRyxJQUFJQywyQkFBMkI7WUFDN0IsT0FBTztRQUNUO0lBQ0Y7SUFFQSxJQUFJQSwyQkFBMkI7UUFDN0JELGFBQWFVLEtBQUssQ0FBQyxBQUFDLG9CQUEyQyxPQUF4QlIseUJBQXdCLDBCQUF3Qkw7SUFDekY7SUFFQSxPQUFPSTtBQUNUO0FBRUEsU0FBU0ssK0JBQStCVCxxQkFBcUIsRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLFlBQVk7SUFDL0YsSUFBSVcsbUNBQW1DO0lBRXZDLElBQUlaLFNBQVM7UUFDWCxJQUFNRywwQkFBMEJGLGFBQWFHLFlBQVksQ0FBQ047UUFFMUQsSUFBSWMsa0NBQWtDO1lBQ3BDWCxhQUFhVSxLQUFLLENBQUMsQUFBQyxRQUErQixPQUF4QlIseUJBQXdCLHFEQUFtREw7UUFDeEc7SUFDRjtJQUVBLE9BQU9jO0FBQ1Q7QUFFQSxTQUFTSiw4QkFBOEJWLHFCQUFxQixFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsWUFBWTtJQUM5RixJQUFJWSxrQ0FBa0M7SUFFdEMsSUFBSSxDQUFDYixTQUFTO1FBQ1osSUFBTUcsMEJBQTBCRixhQUFhRyxZQUFZLENBQUNOO1FBRTFERyxhQUFhSSxLQUFLLENBQUMsQUFBQyxrQkFBeUMsT0FBeEJGLHlCQUF3QixtQ0FBaUNMO1FBRTlGLElBQU1nQixvQkFBb0JsQix1QkFBdUJFO1FBRWpEZSxrQ0FBa0NDLGtCQUFrQkMsS0FBSyxDQUFDLFNBQUNDO1lBQ3pELElBQU1DLGVBQWVoQixhQUFhaUIsa0NBQWtDLENBQUNGO1lBRXJFLElBQUlDLGlCQUFpQixNQUFNO2dCQUN6QixJQUFNRSxlQUFlRixhQUFhRyxlQUFlO2dCQUVqRCxJQUFJRCxpQkFBaUJFLHVDQUF3QixFQUFFO29CQUM3QyxPQUFPO2dCQUNUO1lBQ0Y7UUFDRjtRQUVBLElBQUlSLGlDQUFpQztZQUNuQ1osYUFBYVUsS0FBSyxDQUFDLEFBQUMsb0JBQTJDLE9BQXhCUix5QkFBd0IsaUNBQStCTDtRQUNoRztJQUNGO0lBRUEsT0FBT2U7QUFDVCJ9