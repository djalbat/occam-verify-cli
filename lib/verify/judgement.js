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
            var contextMetaTypeName = _context1.default.getName(), metavariableString = localMetaContext.nodeAsString(metavariableNode), metaTypeString = metaType.asString();
            localMetaContext.debug("The '".concat(metavariableString, "' metavariable's meta-type is '").concat(metaTypeString, "' when it should be '").concat(contextMetaTypeName, "'."), judgementNode);
        }
    }
    if (judgementVerified) {
        localMetaContext.debug("...verified the '".concat(judgementString, "' judgement."), judgementNode);
    }
    return judgementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvanVkZ2VtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5Q29udGV4dCBmcm9tIFwiLi4vdmVyaWZ5L2NvbnRleHRcIjtcbmltcG9ydCBjb250ZXh0TWV0YVR5cGUgZnJvbSBcIi4uL21ldGFUeXBlL2NvbnRleHRcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBjb250ZXh0Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2p1ZGdlbWVudC9tZXRhc3RhdGVtZW50L2NvbnRleHQhXCIpLFxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2p1ZGdlbWVudC9tZXRhdmFyaWFibGUhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlKdWRnZW1lbnQoanVkZ2VtZW50Tm9kZSwgZGVyaXZlZCwgbG9jYWxNZXRhQ29udGV4dCkge1xuICBsZXQganVkZ2VtZW50VmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSBsb2NhbE1ldGFDb250ZXh0Lm5vZGVBc1N0cmluZyhqdWRnZW1lbnROb2RlKTtcblxuICBsb2NhbE1ldGFDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudC4uLmAsIGp1ZGdlbWVudE5vZGUpO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoanVkZ2VtZW50Tm9kZSksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IGxvY2FsTWV0YUNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YVR5cGUgPSBtZXRhdmFyaWFibGUuZ2V0TWV0YVR5cGUoKTtcblxuICAgIGlmIChtZXRhVHlwZSA9PT0gY29udGV4dE1ldGFUeXBlKSB7XG4gICAgICBjb25zdCBjb250ZXh0Tm9kZSA9IGNvbnRleHROb2RlUXVlcnkoanVkZ2VtZW50Tm9kZSk7XG5cbiAgICAgIGlmIChjb250ZXh0Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBjb250ZXh0VmVyaWZpZWQgPSB2ZXJpZnlDb250ZXh0KGNvbnRleHROb2RlLCBkZXJpdmVkLCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgICAgICBqdWRnZW1lbnRWZXJpZmllZCA9IGNvbnRleHRWZXJpZmllZDsgIC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYWxNZXRhQ29udGV4dC5kZWJ1ZyhgVGhlIHJpZ2h0IGhhbmQgc2lkZSBvZiB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50IG11c3QgYmUgYSBjb250ZXh0LmAsIGp1ZGdlbWVudE5vZGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb250ZXh0TWV0YVR5cGVOYW1lID0gY29udGV4dE1ldGFUeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IGxvY2FsTWV0YUNvbnRleHQubm9kZUFzU3RyaW5nKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgbWV0YVR5cGVTdHJpbmcgPSBtZXRhVHlwZS5hc1N0cmluZygpO1xuXG4gICAgICBsb2NhbE1ldGFDb250ZXh0LmRlYnVnKGBUaGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgbWV0YS10eXBlIGlzICcke21ldGFUeXBlU3RyaW5nfScgd2hlbiBpdCBzaG91bGQgYmUgJyR7Y29udGV4dE1ldGFUeXBlTmFtZX0nLmAsIGp1ZGdlbWVudE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChqdWRnZW1lbnRWZXJpZmllZCkge1xuICAgIGxvY2FsTWV0YUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQuYCwganVkZ2VtZW50Tm9kZSk7XG4gIH1cblxuICByZXR1cm4ganVkZ2VtZW50VmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5SnVkZ2VtZW50IiwiY29udGV4dE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsImp1ZGdlbWVudE5vZGUiLCJkZXJpdmVkIiwibG9jYWxNZXRhQ29udGV4dCIsImp1ZGdlbWVudFZlcmlmaWVkIiwianVkZ2VtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGFUeXBlIiwiZ2V0TWV0YVR5cGUiLCJjb250ZXh0TWV0YVR5cGUiLCJjb250ZXh0Tm9kZSIsImNvbnRleHRWZXJpZmllZCIsInZlcmlmeUNvbnRleHQiLCJkZWJ1ZyIsImNvbnRleHRNZXRhVHlwZU5hbWUiLCJnZXROYW1lIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwibWV0YVR5cGVTdHJpbmciLCJhc1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUF3QkE7Ozs4REFSRTsrREFDRTtxQkFFRjs7Ozs7O0FBRTFCLElBQU1DLG1CQUFtQkMsSUFBQUEsZ0JBQVMsRUFBQyxzQ0FDN0JDLHdCQUF3QkQsSUFBQUEsZ0JBQVMsRUFBQztBQUV6QixTQUFTRixnQkFBZ0JJLGFBQWEsRUFBRUMsT0FBTyxFQUFFQyxnQkFBZ0I7SUFDOUUsSUFBSUMsb0JBQW9CO0lBRXhCLElBQU1DLGtCQUFrQkYsaUJBQWlCRyxZQUFZLENBQUNMO0lBRXRERSxpQkFBaUJJLEtBQUssQ0FBQyxBQUFDLGtCQUFpQyxPQUFoQkYsaUJBQWdCLG1CQUFpQko7SUFFMUUsSUFBTU8sbUJBQW1CUixzQkFBc0JDLGdCQUN6Q1EsZUFBZU4saUJBQWlCTyxrQ0FBa0MsQ0FBQ0Ysa0JBQWtCTDtJQUUzRixJQUFJTSxpQkFBaUIsTUFBTTtRQUN6QixJQUFNRSxXQUFXRixhQUFhRyxXQUFXO1FBRXpDLElBQUlELGFBQWFFLGlCQUFlLEVBQUU7WUFDaEMsSUFBTUMsY0FBY2hCLGlCQUFpQkc7WUFFckMsSUFBSWEsZ0JBQWdCLE1BQU07Z0JBQ3hCLElBQU1DLGtCQUFrQkMsSUFBQUEsZ0JBQWEsRUFBQ0YsYUFBYVosU0FBU0M7Z0JBRTVEQyxvQkFBb0JXLGlCQUFrQixHQUFHO1lBQzNDLE9BQU87Z0JBQ0xaLGlCQUFpQmMsS0FBSyxDQUFDLEFBQUMsK0JBQThDLE9BQWhCWixpQkFBZ0IsbUNBQWlDSjtZQUN6RztRQUNGLE9BQU87WUFDTCxJQUFNaUIsc0JBQXNCTCxpQkFBZSxDQUFDTSxPQUFPLElBQzdDQyxxQkFBcUJqQixpQkFBaUJHLFlBQVksQ0FBQ0UsbUJBQ25EYSxpQkFBaUJWLFNBQVNXLFFBQVE7WUFFeENuQixpQkFBaUJjLEtBQUssQ0FBQyxBQUFDLFFBQTJESSxPQUFwREQsb0JBQW1CLG1DQUF1RUYsT0FBdENHLGdCQUFlLHlCQUEyQyxPQUFwQkgscUJBQW9CLE9BQUtqQjtRQUNwSjtJQUNGO0lBRUEsSUFBSUcsbUJBQW1CO1FBQ3JCRCxpQkFBaUJjLEtBQUssQ0FBQyxBQUFDLG9CQUFtQyxPQUFoQlosaUJBQWdCLGlCQUFlSjtJQUM1RTtJQUVBLE9BQU9HO0FBQ1QifQ==