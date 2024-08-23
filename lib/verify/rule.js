"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyRule;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../rule"));
var _labels = /*#__PURE__*/ _interop_require_default(require("../verify/labels"));
var _premises = /*#__PURE__*/ _interop_require_default(require("../verify/premises"));
var _ruleProof = /*#__PURE__*/ _interop_require_default(require("../verify/ruleProof"));
var _localMeta = /*#__PURE__*/ _interop_require_default(require("../context/localMeta"));
var _conclusion = /*#__PURE__*/ _interop_require_default(require("../verify/conclusion"));
var _array = require("../utilities/array");
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var labelsNodeQuery = (0, _query.nodeQuery)("/rule/labels!"), premisesNodeQuery = (0, _query.nodesQuery)("/rule/premise"), ruleProofNodeQuery = (0, _query.nodeQuery)("/rule/ruleProof!"), conclusionNodeQuery = (0, _query.nodeQuery)("/rule/conclusion!");
function verifyRule(ruleNode, fileContext) {
    var ruleVerified = false;
    var labelsNode = labelsNodeQuery(ruleNode), labelsString = fileContext.nodeAsString(labelsNode), localMetaContext = _localMeta.default.fromFileContext(fileContext);
    fileContext.trace("Verifying the '".concat(labelsString, "' rule..."), ruleNode);
    var labels = [], labelsVerified = (0, _labels.default)(labelsNode, labels, fileContext);
    if (labelsVerified) {
        var premises = [], premiseNodes = premisesNodeQuery(ruleNode), premisesVerified = (0, _premises.default)(premiseNodes, premises, localMetaContext);
        if (premisesVerified) {
            var conclusions = [], conclusionNode = conclusionNodeQuery(ruleNode), conclusionVerified = (0, _conclusion.default)(conclusionNode, conclusions, localMetaContext);
            if (conclusionVerified) {
                var ruleProofNode = ruleProofNodeQuery(ruleNode), firstConclusion = (0, _array.first)(conclusions), conclusion = firstConclusion; ///
                var ruleProofVerified = true; ///
                if (ruleProofNode !== null) {
                    ruleProofVerified = (0, _ruleProof.default)(ruleProofNode, conclusion, localMetaContext);
                }
                if (ruleProofVerified) {
                    var rule = _rule.default.fromLabelsPremisesConclusionAndFileContext(labels, premises, conclusion, fileContext);
                    fileContext.addRule(rule);
                    ruleVerified = true;
                }
            }
        }
    }
    if (ruleVerified) {
        fileContext.debug("...verified the '".concat(labelsString, "' rule."), ruleNode);
    }
    return ruleVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCB2ZXJpZnlMYWJlbHMgZnJvbSBcIi4uL3ZlcmlmeS9sYWJlbHNcIjtcbmltcG9ydCB2ZXJpZnlQcmVtaXNlcyBmcm9tIFwiLi4vdmVyaWZ5L3ByZW1pc2VzXCI7XG5pbXBvcnQgdmVyaWZ5UnVsZVByb29mIGZyb20gXCIuLi92ZXJpZnkvcnVsZVByb29mXCI7XG5pbXBvcnQgTG9jYWxNZXRhQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbE1ldGFcIjtcbmltcG9ydCB2ZXJpZnlDb25jbHVzaW9uIGZyb20gXCIuLi92ZXJpZnkvY29uY2x1c2lvblwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgbGFiZWxzTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3J1bGUvbGFiZWxzIVwiKSxcbiAgICAgIHByZW1pc2VzTm9kZVF1ZXJ5ID0gbm9kZXNRdWVyeShcIi9ydWxlL3ByZW1pc2VcIiksXG4gICAgICBydWxlUHJvb2ZOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcnVsZS9ydWxlUHJvb2YhXCIpLFxuICAgICAgY29uY2x1c2lvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ydWxlL2NvbmNsdXNpb24hXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlSdWxlKHJ1bGVOb2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgcnVsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgbGFiZWxzTm9kZSA9IGxhYmVsc05vZGVRdWVyeShydWxlTm9kZSksXG4gICAgICAgIGxhYmVsc1N0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhsYWJlbHNOb2RlKSxcbiAgICAgICAgbG9jYWxNZXRhQ29udGV4dCA9IExvY2FsTWV0YUNvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KTtcblxuICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtsYWJlbHNTdHJpbmd9JyBydWxlLi4uYCwgcnVsZU5vZGUpO1xuXG4gIGNvbnN0IGxhYmVscyA9IFtdLFxuICAgICAgICBsYWJlbHNWZXJpZmllZCA9IHZlcmlmeUxhYmVscyhsYWJlbHNOb2RlLCBsYWJlbHMsIGZpbGVDb250ZXh0KTtcblxuICBpZiAobGFiZWxzVmVyaWZpZWQpIHtcbiAgICBjb25zdCBwcmVtaXNlcyA9IFtdLFxuICAgICAgICAgIHByZW1pc2VOb2RlcyA9IHByZW1pc2VzTm9kZVF1ZXJ5KHJ1bGVOb2RlKSxcbiAgICAgICAgICBwcmVtaXNlc1ZlcmlmaWVkID0gdmVyaWZ5UHJlbWlzZXMocHJlbWlzZU5vZGVzLCBwcmVtaXNlcywgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICBpZiAocHJlbWlzZXNWZXJpZmllZCkge1xuICAgICAgY29uc3QgY29uY2x1c2lvbnMgPSBbXSxcbiAgICAgICAgICAgIGNvbmNsdXNpb25Ob2RlID0gY29uY2x1c2lvbk5vZGVRdWVyeShydWxlTm9kZSksXG4gICAgICAgICAgICBjb25jbHVzaW9uVmVyaWZpZWQgPSB2ZXJpZnlDb25jbHVzaW9uKGNvbmNsdXNpb25Ob2RlLCBjb25jbHVzaW9ucywgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICAgIGlmIChjb25jbHVzaW9uVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgcnVsZVByb29mTm9kZSA9IHJ1bGVQcm9vZk5vZGVRdWVyeShydWxlTm9kZSksXG4gICAgICAgICAgICAgIGZpcnN0Q29uY2x1c2lvbiA9IGZpcnN0KGNvbmNsdXNpb25zKSxcbiAgICAgICAgICAgICAgY29uY2x1c2lvbiA9IGZpcnN0Q29uY2x1c2lvbjsgLy8vXG5cbiAgICAgICAgbGV0IHJ1bGVQcm9vZlZlcmlmaWVkID0gdHJ1ZTsgLy8vXG5cbiAgICAgICAgaWYgKHJ1bGVQcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICBydWxlUHJvb2ZWZXJpZmllZCA9IHZlcmlmeVJ1bGVQcm9vZihydWxlUHJvb2ZOb2RlLCBjb25jbHVzaW9uLCBsb2NhbE1ldGFDb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChydWxlUHJvb2ZWZXJpZmllZCkge1xuICAgICAgICAgIGNvbnN0IHJ1bGUgPSBSdWxlLmZyb21MYWJlbHNQcmVtaXNlc0NvbmNsdXNpb25BbmRGaWxlQ29udGV4dChsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICBmaWxlQ29udGV4dC5hZGRSdWxlKHJ1bGUpO1xuXG4gICAgICAgICAgcnVsZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChydWxlVmVyaWZpZWQpIHtcbiAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2xhYmVsc1N0cmluZ30nIHJ1bGUuYCwgcnVsZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHJ1bGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlSdWxlIiwibGFiZWxzTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicHJlbWlzZXNOb2RlUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicnVsZVByb29mTm9kZVF1ZXJ5IiwiY29uY2x1c2lvbk5vZGVRdWVyeSIsInJ1bGVOb2RlIiwiZmlsZUNvbnRleHQiLCJydWxlVmVyaWZpZWQiLCJsYWJlbHNOb2RlIiwibGFiZWxzU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwibG9jYWxNZXRhQ29udGV4dCIsIkxvY2FsTWV0YUNvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJ0cmFjZSIsImxhYmVscyIsImxhYmVsc1ZlcmlmaWVkIiwidmVyaWZ5TGFiZWxzIiwicHJlbWlzZXMiLCJwcmVtaXNlTm9kZXMiLCJwcmVtaXNlc1ZlcmlmaWVkIiwidmVyaWZ5UHJlbWlzZXMiLCJjb25jbHVzaW9ucyIsImNvbmNsdXNpb25Ob2RlIiwiY29uY2x1c2lvblZlcmlmaWVkIiwidmVyaWZ5Q29uY2x1c2lvbiIsInJ1bGVQcm9vZk5vZGUiLCJmaXJzdENvbmNsdXNpb24iLCJmaXJzdCIsImNvbmNsdXNpb24iLCJydWxlUHJvb2ZWZXJpZmllZCIsInZlcmlmeVJ1bGVQcm9vZiIsInJ1bGUiLCJSdWxlIiwiZnJvbUxhYmVsc1ByZW1pc2VzQ29uY2x1c2lvbkFuZEZpbGVDb250ZXh0IiwiYWRkUnVsZSIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpQkE7OztlQUF3QkE7OzsyREFmUDs2REFDUTsrREFDRTtnRUFDQztnRUFDQztpRUFDQTtxQkFFUDtxQkFDZ0I7Ozs7OztBQUV0QyxJQUFNQyxrQkFBa0JDLElBQUFBLGdCQUFTLEVBQUMsa0JBQzVCQyxvQkFBb0JDLElBQUFBLGlCQUFVLEVBQUMsa0JBQy9CQyxxQkFBcUJILElBQUFBLGdCQUFTLEVBQUMscUJBQy9CSSxzQkFBc0JKLElBQUFBLGdCQUFTLEVBQUM7QUFFdkIsU0FBU0YsV0FBV08sUUFBUSxFQUFFQyxXQUFXO0lBQ3RELElBQUlDLGVBQWU7SUFFbkIsSUFBTUMsYUFBYVQsZ0JBQWdCTSxXQUM3QkksZUFBZUgsWUFBWUksWUFBWSxDQUFDRixhQUN4Q0csbUJBQW1CQyxrQkFBZ0IsQ0FBQ0MsZUFBZSxDQUFDUDtJQUUxREEsWUFBWVEsS0FBSyxDQUFDLEFBQUMsa0JBQThCLE9BQWJMLGNBQWEsY0FBWUo7SUFFN0QsSUFBTVUsU0FBUyxFQUFFLEVBQ1hDLGlCQUFpQkMsSUFBQUEsZUFBWSxFQUFDVCxZQUFZTyxRQUFRVDtJQUV4RCxJQUFJVSxnQkFBZ0I7UUFDbEIsSUFBTUUsV0FBVyxFQUFFLEVBQ2JDLGVBQWVsQixrQkFBa0JJLFdBQ2pDZSxtQkFBbUJDLElBQUFBLGlCQUFjLEVBQUNGLGNBQWNELFVBQVVQO1FBRWhFLElBQUlTLGtCQUFrQjtZQUNwQixJQUFNRSxjQUFjLEVBQUUsRUFDaEJDLGlCQUFpQm5CLG9CQUFvQkMsV0FDckNtQixxQkFBcUJDLElBQUFBLG1CQUFnQixFQUFDRixnQkFBZ0JELGFBQWFYO1lBRXpFLElBQUlhLG9CQUFvQjtnQkFDdEIsSUFBTUUsZ0JBQWdCdkIsbUJBQW1CRSxXQUNuQ3NCLGtCQUFrQkMsSUFBQUEsWUFBSyxFQUFDTixjQUN4Qk8sYUFBYUYsaUJBQWlCLEdBQUc7Z0JBRXZDLElBQUlHLG9CQUFvQixNQUFNLEdBQUc7Z0JBRWpDLElBQUlKLGtCQUFrQixNQUFNO29CQUMxQkksb0JBQW9CQyxJQUFBQSxrQkFBZSxFQUFDTCxlQUFlRyxZQUFZbEI7Z0JBQ2pFO2dCQUVBLElBQUltQixtQkFBbUI7b0JBQ3JCLElBQU1FLE9BQU9DLGFBQUksQ0FBQ0MsMENBQTBDLENBQUNuQixRQUFRRyxVQUFVVyxZQUFZdkI7b0JBRTNGQSxZQUFZNkIsT0FBTyxDQUFDSDtvQkFFcEJ6QixlQUFlO2dCQUNqQjtZQUNGO1FBQ0Y7SUFDRjtJQUVBLElBQUlBLGNBQWM7UUFDaEJELFlBQVk4QixLQUFLLENBQUMsQUFBQyxvQkFBZ0MsT0FBYjNCLGNBQWEsWUFBVUo7SUFDL0Q7SUFFQSxPQUFPRTtBQUNUIn0=