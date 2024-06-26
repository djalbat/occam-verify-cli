"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyRuleProof;
    }
});
var _localMeta = /*#__PURE__*/ _interop_require_default(require("../context/localMeta"));
var _ruleDerivation = /*#__PURE__*/ _interop_require_default(require("../verify/ruleDerivation"));
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var ruleDerivationNodeQuery = (0, _query.nodeQuery)("/ruleProof/ruleDerivation!");
function verifyRuleProof(ruleProofNode, conclusion, localMetaContext) {
    var ruleProofVerified = false;
    localMetaContext = _localMeta.default.fromLocalMetaContext(localMetaContext); ///
    var ruleDerivationNode = ruleDerivationNodeQuery(ruleProofNode), ruleDerivationVerified = (0, _ruleDerivation.default)(ruleDerivationNode, localMetaContext);
    if (ruleDerivationVerified) {
        var lastMetaproofStep = localMetaContext.getLastMetaproofStep(), metaproofStep = lastMetaproofStep, metastatementNode = metaproofStep.getMetastatementNode(), conclusionMetastatementNode = conclusion.getMetastatementNode(), metastatementNodeMatchConclusionMetastatementNode = metastatementNode.match(conclusionMetastatementNode);
        ruleProofVerified = metastatementNodeMatchConclusionMetastatementNode; ///
    }
    return ruleProofVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcnVsZVByb29mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTG9jYWxNZXRhQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbE1ldGFcIjtcbmltcG9ydCB2ZXJpZnlSdWxlRGVyaXZhdGlvbiBmcm9tIFwiLi4vdmVyaWZ5L3J1bGVEZXJpdmF0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgcnVsZURlcml2YXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcnVsZVByb29mL3J1bGVEZXJpdmF0aW9uIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5UnVsZVByb29mKHJ1bGVQcm9vZk5vZGUsIGNvbmNsdXNpb24sIGxvY2FsTWV0YUNvbnRleHQpIHtcbiAgbGV0IHJ1bGVQcm9vZlZlcmlmaWVkID0gZmFsc2U7XG5cbiAgbG9jYWxNZXRhQ29udGV4dCA9IExvY2FsTWV0YUNvbnRleHQuZnJvbUxvY2FsTWV0YUNvbnRleHQobG9jYWxNZXRhQ29udGV4dCk7IC8vL1xuXG4gIGNvbnN0IHJ1bGVEZXJpdmF0aW9uTm9kZSA9IHJ1bGVEZXJpdmF0aW9uTm9kZVF1ZXJ5KHJ1bGVQcm9vZk5vZGUpLFxuICAgICAgICBydWxlRGVyaXZhdGlvblZlcmlmaWVkID0gdmVyaWZ5UnVsZURlcml2YXRpb24ocnVsZURlcml2YXRpb25Ob2RlLCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICBpZiAocnVsZURlcml2YXRpb25WZXJpZmllZCkge1xuICAgIGNvbnN0IGxhc3RNZXRhcHJvb2ZTdGVwID0gbG9jYWxNZXRhQ29udGV4dC5nZXRMYXN0TWV0YXByb29mU3RlcCgpLFxuICAgICAgICAgIG1ldGFwcm9vZlN0ZXAgPSBsYXN0TWV0YXByb29mU3RlcCwgLy8vXG4gICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhcHJvb2ZTdGVwLmdldE1ldGFzdGF0ZW1lbnROb2RlKCksXG4gICAgICAgICAgY29uY2x1c2lvbk1ldGFzdGF0ZW1lbnROb2RlID0gY29uY2x1c2lvbi5nZXRNZXRhc3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hDb25jbHVzaW9uTWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZS5tYXRjaChjb25jbHVzaW9uTWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgcnVsZVByb29mVmVyaWZpZWQgPSBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoQ29uY2x1c2lvbk1ldGFzdGF0ZW1lbnROb2RlOyAgLy8vXG4gIH1cblxuICByZXR1cm4gcnVsZVByb29mVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5UnVsZVByb29mIiwicnVsZURlcml2YXRpb25Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJydWxlUHJvb2ZOb2RlIiwiY29uY2x1c2lvbiIsImxvY2FsTWV0YUNvbnRleHQiLCJydWxlUHJvb2ZWZXJpZmllZCIsIkxvY2FsTWV0YUNvbnRleHQiLCJmcm9tTG9jYWxNZXRhQ29udGV4dCIsInJ1bGVEZXJpdmF0aW9uTm9kZSIsInJ1bGVEZXJpdmF0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlSdWxlRGVyaXZhdGlvbiIsImxhc3RNZXRhcHJvb2ZTdGVwIiwiZ2V0TGFzdE1ldGFwcm9vZlN0ZXAiLCJtZXRhcHJvb2ZTdGVwIiwibWV0YXN0YXRlbWVudE5vZGUiLCJnZXRNZXRhc3RhdGVtZW50Tm9kZSIsImNvbmNsdXNpb25NZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hDb25jbHVzaW9uTWV0YXN0YXRlbWVudE5vZGUiLCJtYXRjaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUF3QkE7OztnRUFQSztxRUFDSTtxQkFFUDs7Ozs7O0FBRTFCLElBQU1DLDBCQUEwQkMsSUFBQUEsZ0JBQVMsRUFBQztBQUUzQixTQUFTRixnQkFBZ0JHLGFBQWEsRUFBRUMsVUFBVSxFQUFFQyxnQkFBZ0I7SUFDakYsSUFBSUMsb0JBQW9CO0lBRXhCRCxtQkFBbUJFLGtCQUFnQixDQUFDQyxvQkFBb0IsQ0FBQ0gsbUJBQW1CLEdBQUc7SUFFL0UsSUFBTUkscUJBQXFCUix3QkFBd0JFLGdCQUM3Q08seUJBQXlCQyxJQUFBQSx1QkFBb0IsRUFBQ0Ysb0JBQW9CSjtJQUV4RSxJQUFJSyx3QkFBd0I7UUFDMUIsSUFBTUUsb0JBQW9CUCxpQkFBaUJRLG9CQUFvQixJQUN6REMsZ0JBQWdCRixtQkFDaEJHLG9CQUFvQkQsY0FBY0Usb0JBQW9CLElBQ3REQyw4QkFBOEJiLFdBQVdZLG9CQUFvQixJQUM3REUsb0RBQW9ESCxrQkFBa0JJLEtBQUssQ0FBQ0Y7UUFFbEZYLG9CQUFvQlksbURBQW9ELEdBQUc7SUFDN0U7SUFFQSxPQUFPWjtBQUNUIn0=