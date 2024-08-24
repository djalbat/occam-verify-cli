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
var _context = /*#__PURE__*/ _interop_require_default(require("../verify/context"));
var _context1 = /*#__PURE__*/ _interop_require_default(require("../metaType/context"));
var _query = require("../utilities/query");
var _metaTypeNames = require("../metaTypeNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var contextNodeQuery = (0, _query.nodeQuery)("/judgement/metastatement/context!"), metavariableNodeQuery = (0, _query.nodeQuery)("/judgement/metavariable!");
function verifyJudgement(judgementNode, derived, localMetaContext) {
    var judgementVerified = false;
    var judgementString = localMetaContext.nodeAsString(judgementNode);
    localMetaContext.trace("Verifying the '".concat(judgementString, "' judgement..."), judgementNode);
    var metavariableNode = metavariableNodeQuery(judgementNode), metavariable = localMetaContext.findMetavariableByMetavariableNode(metavariableNode, localMetaContext);
    if (metavariable !== null) {
        var metaType = metavariable.getMetaType();
        if (metaType === _context1.default) {
            var contextNode = contextNodeQuery(judgementNode);
            if (contextNode !== null) {
                var contextVerified = (0, _context.default)(contextNode, derived, localMetaContext);
                judgementVerified = contextVerified; ///
            } else {
                localMetaContext.debug("The right hand side of the '".concat(judgementString, "' judgement must be a context."), judgementNode);
            }
        } else {
            var metavariableString = localMetaContext.nodeAsString(metavariableNode), metaTypeString = metaType.asString();
            localMetaContext.debug("The '".concat(metavariableString, "' metavariable's meta-type is '").concat(metaTypeString, "' when it should be '").concat(_metaTypeNames.CONTEXT_META_TYPE_NAME, "'."), judgementNode);
        }
    }
    if (judgementVerified) {
        localMetaContext.debug("...verified the '".concat(judgementString, "' judgement."), judgementNode);
    }
    return judgementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvanVkZ2VtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5Q29udGV4dCBmcm9tIFwiLi4vdmVyaWZ5L2NvbnRleHRcIjtcbmltcG9ydCBjb250ZXh0TWV0YVR5cGUgZnJvbSBcIi4uL21ldGFUeXBlL2NvbnRleHRcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgQ09OVEVYVF9NRVRBX1RZUEVfTkFNRSB9IGZyb20gXCIuLi9tZXRhVHlwZU5hbWVzXCI7XG5cbmNvbnN0IGNvbnRleHROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvanVkZ2VtZW50L21ldGFzdGF0ZW1lbnQvY29udGV4dCFcIiksXG4gICAgICBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvanVkZ2VtZW50L21ldGF2YXJpYWJsZSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeUp1ZGdlbWVudChqdWRnZW1lbnROb2RlLCBkZXJpdmVkLCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gIGxldCBqdWRnZW1lbnRWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IGxvY2FsTWV0YUNvbnRleHQubm9kZUFzU3RyaW5nKGp1ZGdlbWVudE5vZGUpO1xuXG4gIGxvY2FsTWV0YUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50Li4uYCwganVkZ2VtZW50Tm9kZSk7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShqdWRnZW1lbnROb2RlKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbG9jYWxNZXRhQ29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBtZXRhVHlwZSA9IG1ldGF2YXJpYWJsZS5nZXRNZXRhVHlwZSgpO1xuXG4gICAgaWYgKG1ldGFUeXBlID09PSBjb250ZXh0TWV0YVR5cGUpIHtcbiAgICAgIGNvbnN0IGNvbnRleHROb2RlID0gY29udGV4dE5vZGVRdWVyeShqdWRnZW1lbnROb2RlKTtcblxuICAgICAgaWYgKGNvbnRleHROb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHRWZXJpZmllZCA9IHZlcmlmeUNvbnRleHQoY29udGV4dE5vZGUsIGRlcml2ZWQsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgICAgIGp1ZGdlbWVudFZlcmlmaWVkID0gY29udGV4dFZlcmlmaWVkOyAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhbE1ldGFDb250ZXh0LmRlYnVnKGBUaGUgcmlnaHQgaGFuZCBzaWRlIG9mIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQgbXVzdCBiZSBhIGNvbnRleHQuYCwganVkZ2VtZW50Tm9kZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IGxvY2FsTWV0YUNvbnRleHQubm9kZUFzU3RyaW5nKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgbWV0YVR5cGVTdHJpbmcgPSBtZXRhVHlwZS5hc1N0cmluZygpO1xuXG4gICAgICBsb2NhbE1ldGFDb250ZXh0LmRlYnVnKGBUaGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgbWV0YS10eXBlIGlzICcke21ldGFUeXBlU3RyaW5nfScgd2hlbiBpdCBzaG91bGQgYmUgJyR7Q09OVEVYVF9NRVRBX1RZUEVfTkFNRX0nLmAsIGp1ZGdlbWVudE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChqdWRnZW1lbnRWZXJpZmllZCkge1xuICAgIGxvY2FsTWV0YUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQuYCwganVkZ2VtZW50Tm9kZSk7XG4gIH1cblxuICByZXR1cm4ganVkZ2VtZW50VmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5SnVkZ2VtZW50IiwiY29udGV4dE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsImp1ZGdlbWVudE5vZGUiLCJkZXJpdmVkIiwibG9jYWxNZXRhQ29udGV4dCIsImp1ZGdlbWVudFZlcmlmaWVkIiwianVkZ2VtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGFUeXBlIiwiZ2V0TWV0YVR5cGUiLCJjb250ZXh0TWV0YVR5cGUiLCJjb250ZXh0Tm9kZSIsImNvbnRleHRWZXJpZmllZCIsInZlcmlmeUNvbnRleHQiLCJkZWJ1ZyIsIm1ldGF2YXJpYWJsZVN0cmluZyIsIm1ldGFUeXBlU3RyaW5nIiwiYXNTdHJpbmciLCJDT05URVhUX01FVEFfVFlQRV9OQU1FIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQXdCQTs7OzhEQVRFOytEQUNFO3FCQUVGOzZCQUNhOzs7Ozs7QUFFdkMsSUFBTUMsbUJBQW1CQyxJQUFBQSxnQkFBUyxFQUFDLHNDQUM3QkMsd0JBQXdCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRXpCLFNBQVNGLGdCQUFnQkksYUFBYSxFQUFFQyxPQUFPLEVBQUVDLGdCQUFnQjtJQUM5RSxJQUFJQyxvQkFBb0I7SUFFeEIsSUFBTUMsa0JBQWtCRixpQkFBaUJHLFlBQVksQ0FBQ0w7SUFFdERFLGlCQUFpQkksS0FBSyxDQUFDLEFBQUMsa0JBQWlDLE9BQWhCRixpQkFBZ0IsbUJBQWlCSjtJQUUxRSxJQUFNTyxtQkFBbUJSLHNCQUFzQkMsZ0JBQ3pDUSxlQUFlTixpQkFBaUJPLGtDQUFrQyxDQUFDRixrQkFBa0JMO0lBRTNGLElBQUlNLGlCQUFpQixNQUFNO1FBQ3pCLElBQU1FLFdBQVdGLGFBQWFHLFdBQVc7UUFFekMsSUFBSUQsYUFBYUUsaUJBQWUsRUFBRTtZQUNoQyxJQUFNQyxjQUFjaEIsaUJBQWlCRztZQUVyQyxJQUFJYSxnQkFBZ0IsTUFBTTtnQkFDeEIsSUFBTUMsa0JBQWtCQyxJQUFBQSxnQkFBYSxFQUFDRixhQUFhWixTQUFTQztnQkFFNURDLG9CQUFvQlcsaUJBQWtCLEdBQUc7WUFDM0MsT0FBTztnQkFDTFosaUJBQWlCYyxLQUFLLENBQUMsQUFBQywrQkFBOEMsT0FBaEJaLGlCQUFnQixtQ0FBaUNKO1lBQ3pHO1FBQ0YsT0FBTztZQUNMLElBQU1pQixxQkFBcUJmLGlCQUFpQkcsWUFBWSxDQUFDRSxtQkFDbkRXLGlCQUFpQlIsU0FBU1MsUUFBUTtZQUV4Q2pCLGlCQUFpQmMsS0FBSyxDQUFDLEFBQUMsUUFBMkRFLE9BQXBERCxvQkFBbUIsbUNBQXVFRyxPQUF0Q0YsZ0JBQWUseUJBQThDLE9BQXZCRSxxQ0FBc0IsRUFBQyxPQUFLcEI7UUFDdko7SUFDRjtJQUVBLElBQUlHLG1CQUFtQjtRQUNyQkQsaUJBQWlCYyxLQUFLLENBQUMsQUFBQyxvQkFBbUMsT0FBaEJaLGlCQUFnQixpQkFBZUo7SUFDNUU7SUFFQSxPQUFPRztBQUNUIn0=