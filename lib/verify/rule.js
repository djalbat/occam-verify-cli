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
var labelNodesQuery = (0, _query.nodesQuery)("/rule/label"), premisesNodeQuery = (0, _query.nodesQuery)("/rule/premise"), ruleProofNodeQuery = (0, _query.nodeQuery)("/rule/ruleProof!"), conclusionNodeQuery = (0, _query.nodeQuery)("/rule/conclusion!");
function verifyRule(ruleNode, fileContext) {
    var ruleVerified = false;
    var labelNodes = labelNodesQuery(ruleNode), labelsString = fileContext.nodesAsString(labelNodes), localMetaContext = _localMeta.default.fromFileContext(fileContext);
    fileContext.trace("Verifying the '".concat(labelsString, "' rule..."), ruleNode);
    var labels = [], labelsVerified = (0, _labels.default)(labelNodes, labels, fileContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCB2ZXJpZnlMYWJlbHMgZnJvbSBcIi4uL3ZlcmlmeS9sYWJlbHNcIjtcbmltcG9ydCB2ZXJpZnlQcmVtaXNlcyBmcm9tIFwiLi4vdmVyaWZ5L3ByZW1pc2VzXCI7XG5pbXBvcnQgdmVyaWZ5UnVsZVByb29mIGZyb20gXCIuLi92ZXJpZnkvcnVsZVByb29mXCI7XG5pbXBvcnQgTG9jYWxNZXRhQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbE1ldGFcIjtcbmltcG9ydCB2ZXJpZnlDb25jbHVzaW9uIGZyb20gXCIuLi92ZXJpZnkvY29uY2x1c2lvblwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgbGFiZWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9ydWxlL2xhYmVsXCIpLFxuICAgICAgcHJlbWlzZXNOb2RlUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3J1bGUvcHJlbWlzZVwiKSxcbiAgICAgIHJ1bGVQcm9vZk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ydWxlL3J1bGVQcm9vZiFcIiksXG4gICAgICBjb25jbHVzaW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3J1bGUvY29uY2x1c2lvbiFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVJ1bGUocnVsZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCBydWxlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBsYWJlbE5vZGVzID0gbGFiZWxOb2Rlc1F1ZXJ5KHJ1bGVOb2RlKSxcbiAgICAgICAgbGFiZWxzU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZXNBc1N0cmluZyhsYWJlbE5vZGVzKSxcbiAgICAgICAgbG9jYWxNZXRhQ29udGV4dCA9IExvY2FsTWV0YUNvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KTtcblxuICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtsYWJlbHNTdHJpbmd9JyBydWxlLi4uYCwgcnVsZU5vZGUpO1xuXG4gIGNvbnN0IGxhYmVscyA9IFtdLFxuICAgICAgICBsYWJlbHNWZXJpZmllZCA9IHZlcmlmeUxhYmVscyhsYWJlbE5vZGVzLCBsYWJlbHMsIGZpbGVDb250ZXh0KTtcblxuICBpZiAobGFiZWxzVmVyaWZpZWQpIHtcbiAgICBjb25zdCBwcmVtaXNlcyA9IFtdLFxuICAgICAgICAgIHByZW1pc2VOb2RlcyA9IHByZW1pc2VzTm9kZVF1ZXJ5KHJ1bGVOb2RlKSxcbiAgICAgICAgICBwcmVtaXNlc1ZlcmlmaWVkID0gdmVyaWZ5UHJlbWlzZXMocHJlbWlzZU5vZGVzLCBwcmVtaXNlcywgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICBpZiAocHJlbWlzZXNWZXJpZmllZCkge1xuICAgICAgY29uc3QgY29uY2x1c2lvbnMgPSBbXSxcbiAgICAgICAgICAgIGNvbmNsdXNpb25Ob2RlID0gY29uY2x1c2lvbk5vZGVRdWVyeShydWxlTm9kZSksXG4gICAgICAgICAgICBjb25jbHVzaW9uVmVyaWZpZWQgPSB2ZXJpZnlDb25jbHVzaW9uKGNvbmNsdXNpb25Ob2RlLCBjb25jbHVzaW9ucywgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICAgIGlmIChjb25jbHVzaW9uVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgcnVsZVByb29mTm9kZSA9IHJ1bGVQcm9vZk5vZGVRdWVyeShydWxlTm9kZSksXG4gICAgICAgICAgICAgIGZpcnN0Q29uY2x1c2lvbiA9IGZpcnN0KGNvbmNsdXNpb25zKSxcbiAgICAgICAgICAgICAgY29uY2x1c2lvbiA9IGZpcnN0Q29uY2x1c2lvbjsgLy8vXG5cbiAgICAgICAgbGV0IHJ1bGVQcm9vZlZlcmlmaWVkID0gdHJ1ZTsgLy8vXG5cbiAgICAgICAgaWYgKHJ1bGVQcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICBydWxlUHJvb2ZWZXJpZmllZCA9IHZlcmlmeVJ1bGVQcm9vZihydWxlUHJvb2ZOb2RlLCBjb25jbHVzaW9uLCBsb2NhbE1ldGFDb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChydWxlUHJvb2ZWZXJpZmllZCkge1xuICAgICAgICAgIGNvbnN0IHJ1bGUgPSBSdWxlLmZyb21MYWJlbHNQcmVtaXNlc0NvbmNsdXNpb25BbmRGaWxlQ29udGV4dChsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICBmaWxlQ29udGV4dC5hZGRSdWxlKHJ1bGUpO1xuXG4gICAgICAgICAgcnVsZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChydWxlVmVyaWZpZWQpIHtcbiAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2xhYmVsc1N0cmluZ30nIHJ1bGUuYCwgcnVsZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHJ1bGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlSdWxlIiwibGFiZWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInByZW1pc2VzTm9kZVF1ZXJ5IiwicnVsZVByb29mTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiY29uY2x1c2lvbk5vZGVRdWVyeSIsInJ1bGVOb2RlIiwiZmlsZUNvbnRleHQiLCJydWxlVmVyaWZpZWQiLCJsYWJlbE5vZGVzIiwibGFiZWxzU3RyaW5nIiwibm9kZXNBc1N0cmluZyIsImxvY2FsTWV0YUNvbnRleHQiLCJMb2NhbE1ldGFDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwidHJhY2UiLCJsYWJlbHMiLCJsYWJlbHNWZXJpZmllZCIsInZlcmlmeUxhYmVscyIsInByZW1pc2VzIiwicHJlbWlzZU5vZGVzIiwicHJlbWlzZXNWZXJpZmllZCIsInZlcmlmeVByZW1pc2VzIiwiY29uY2x1c2lvbnMiLCJjb25jbHVzaW9uTm9kZSIsImNvbmNsdXNpb25WZXJpZmllZCIsInZlcmlmeUNvbmNsdXNpb24iLCJydWxlUHJvb2ZOb2RlIiwiZmlyc3RDb25jbHVzaW9uIiwiZmlyc3QiLCJjb25jbHVzaW9uIiwicnVsZVByb29mVmVyaWZpZWQiLCJ2ZXJpZnlSdWxlUHJvb2YiLCJydWxlIiwiUnVsZSIsImZyb21MYWJlbHNQcmVtaXNlc0NvbmNsdXNpb25BbmRGaWxlQ29udGV4dCIsImFkZFJ1bGUiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUJBOzs7ZUFBd0JBOzs7MkRBZlA7NkRBQ1E7K0RBQ0U7Z0VBQ0M7Z0VBQ0M7aUVBQ0E7cUJBRVA7cUJBQ2dCOzs7Ozs7QUFFdEMsSUFBTUMsa0JBQWtCQyxJQUFBQSxpQkFBVSxFQUFDLGdCQUM3QkMsb0JBQW9CRCxJQUFBQSxpQkFBVSxFQUFDLGtCQUMvQkUscUJBQXFCQyxJQUFBQSxnQkFBUyxFQUFDLHFCQUMvQkMsc0JBQXNCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRXZCLFNBQVNMLFdBQVdPLFFBQVEsRUFBRUMsV0FBVztJQUN0RCxJQUFJQyxlQUFlO0lBRW5CLElBQU1DLGFBQWFULGdCQUFnQk0sV0FDN0JJLGVBQWVILFlBQVlJLGFBQWEsQ0FBQ0YsYUFDekNHLG1CQUFtQkMsa0JBQWdCLENBQUNDLGVBQWUsQ0FBQ1A7SUFFMURBLFlBQVlRLEtBQUssQ0FBQyxBQUFDLGtCQUE4QixPQUFiTCxjQUFhLGNBQVlKO0lBRTdELElBQU1VLFNBQVMsRUFBRSxFQUNYQyxpQkFBaUJDLElBQUFBLGVBQVksRUFBQ1QsWUFBWU8sUUFBUVQ7SUFFeEQsSUFBSVUsZ0JBQWdCO1FBQ2xCLElBQU1FLFdBQVcsRUFBRSxFQUNiQyxlQUFlbEIsa0JBQWtCSSxXQUNqQ2UsbUJBQW1CQyxJQUFBQSxpQkFBYyxFQUFDRixjQUFjRCxVQUFVUDtRQUVoRSxJQUFJUyxrQkFBa0I7WUFDcEIsSUFBTUUsY0FBYyxFQUFFLEVBQ2hCQyxpQkFBaUJuQixvQkFBb0JDLFdBQ3JDbUIscUJBQXFCQyxJQUFBQSxtQkFBZ0IsRUFBQ0YsZ0JBQWdCRCxhQUFhWDtZQUV6RSxJQUFJYSxvQkFBb0I7Z0JBQ3RCLElBQU1FLGdCQUFnQnhCLG1CQUFtQkcsV0FDbkNzQixrQkFBa0JDLElBQUFBLFlBQUssRUFBQ04sY0FDeEJPLGFBQWFGLGlCQUFpQixHQUFHO2dCQUV2QyxJQUFJRyxvQkFBb0IsTUFBTSxHQUFHO2dCQUVqQyxJQUFJSixrQkFBa0IsTUFBTTtvQkFDMUJJLG9CQUFvQkMsSUFBQUEsa0JBQWUsRUFBQ0wsZUFBZUcsWUFBWWxCO2dCQUNqRTtnQkFFQSxJQUFJbUIsbUJBQW1CO29CQUNyQixJQUFNRSxPQUFPQyxhQUFJLENBQUNDLDBDQUEwQyxDQUFDbkIsUUFBUUcsVUFBVVcsWUFBWXZCO29CQUUzRkEsWUFBWTZCLE9BQU8sQ0FBQ0g7b0JBRXBCekIsZUFBZTtnQkFDakI7WUFDRjtRQUNGO0lBQ0Y7SUFFQSxJQUFJQSxjQUFjO1FBQ2hCRCxZQUFZOEIsS0FBSyxDQUFDLEFBQUMsb0JBQWdDLE9BQWIzQixjQUFhLFlBQVVKO0lBQy9EO0lBRUEsT0FBT0U7QUFDVCJ9