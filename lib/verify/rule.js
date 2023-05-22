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
var _premise = /*#__PURE__*/ _interop_require_default(require("../verify/premise"));
var _ruleProof = /*#__PURE__*/ _interop_require_default(require("../verify/ruleProof"));
var _metaproof = /*#__PURE__*/ _interop_require_default(require("../context/metaproof"));
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
    var labelNodes = labelNodesQuery(ruleNode), labelsString = fileContext.nodesAsString(labelNodes), metaProofContext = _metaproof.default.fromFileContext(fileContext);
    fileContext.debug("Verifying the '".concat(labelsString, "' rule..."), ruleNode);
    var labels = [], labelsVerified = (0, _labels.default)(labelNodes, labels, fileContext);
    if (labelsVerified) {
        var premises = [], premiseNodes = premisesNodeQuery(ruleNode), premisesVerified = premiseNodes.every(function(premiseNode) {
            var premiseVerified = (0, _premise.default)(premiseNode, premises, metaProofContext);
            if (premiseVerified) {
                return true;
            }
        });
        if (premisesVerified) {
            var conclusions = [], conclusionNode = conclusionNodeQuery(ruleNode), conclusionVerified = (0, _conclusion.default)(conclusionNode, conclusions, metaProofContext);
            if (conclusionVerified) {
                var ruleProofNode = ruleProofNodeQuery(ruleNode), firstConclusion = (0, _array.first)(conclusions), conclusion = firstConclusion; ///
                var ruleProofVerified = true; ///
                if (ruleProofNode !== null) {
                    ruleProofVerified = (0, _ruleProof.default)(ruleProofNode, conclusion, metaProofContext);
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
        fileContext.info("Verified the '".concat(labelsString, "' rule."), ruleNode);
    }
    return ruleVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCB2ZXJpZnlMYWJlbHMgZnJvbSBcIi4uL3ZlcmlmeS9sYWJlbHNcIjtcbmltcG9ydCB2ZXJpZnlQcmVtaXNlIGZyb20gXCIuLi92ZXJpZnkvcHJlbWlzZVwiO1xuaW1wb3J0IHZlcmlmeVJ1bGVQcm9vZiBmcm9tIFwiLi4vdmVyaWZ5L3J1bGVQcm9vZlwiO1xuaW1wb3J0IE1ldGFwcm9vZkNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbWV0YXByb29mXCI7XG5pbXBvcnQgdmVyaWZ5Q29uY2x1c2lvbiBmcm9tIFwiLi4vdmVyaWZ5L2NvbmNsdXNpb25cIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGxhYmVsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcnVsZS9sYWJlbFwiKSxcbiAgICAgIHByZW1pc2VzTm9kZVF1ZXJ5ID0gbm9kZXNRdWVyeShcIi9ydWxlL3ByZW1pc2VcIiksXG4gICAgICBydWxlUHJvb2ZOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcnVsZS9ydWxlUHJvb2YhXCIpLFxuICAgICAgY29uY2x1c2lvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ydWxlL2NvbmNsdXNpb24hXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlSdWxlKHJ1bGVOb2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgcnVsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgbGFiZWxOb2RlcyA9IGxhYmVsTm9kZXNRdWVyeShydWxlTm9kZSksXG4gICAgICAgIGxhYmVsc1N0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVzQXNTdHJpbmcobGFiZWxOb2RlcyksXG4gICAgICAgIG1ldGFQcm9vZkNvbnRleHQgPSBNZXRhcHJvb2ZDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCk7XG5cbiAgZmlsZUNvbnRleHQuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7bGFiZWxzU3RyaW5nfScgcnVsZS4uLmAsIHJ1bGVOb2RlKTtcblxuICBjb25zdCBsYWJlbHMgPSBbXSxcbiAgICAgICAgbGFiZWxzVmVyaWZpZWQgPSB2ZXJpZnlMYWJlbHMobGFiZWxOb2RlcywgbGFiZWxzLCBmaWxlQ29udGV4dCk7XG5cbiAgaWYgKGxhYmVsc1ZlcmlmaWVkKSB7XG4gICAgY29uc3QgcHJlbWlzZXMgPSBbXSxcbiAgICAgICAgICBwcmVtaXNlTm9kZXMgPSBwcmVtaXNlc05vZGVRdWVyeShydWxlTm9kZSksXG4gICAgICAgICAgcHJlbWlzZXNWZXJpZmllZCA9IHByZW1pc2VOb2Rlcy5ldmVyeSgocHJlbWlzZU5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByZW1pc2VWZXJpZmllZCA9IHZlcmlmeVByZW1pc2UocHJlbWlzZU5vZGUsIHByZW1pc2VzLCBtZXRhUHJvb2ZDb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHByZW1pc2VWZXJpZmllZCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmIChwcmVtaXNlc1ZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBjb25jbHVzaW9ucyA9IFtdLFxuICAgICAgICAgICAgY29uY2x1c2lvbk5vZGUgPSBjb25jbHVzaW9uTm9kZVF1ZXJ5KHJ1bGVOb2RlKSxcbiAgICAgICAgICAgIGNvbmNsdXNpb25WZXJpZmllZCA9IHZlcmlmeUNvbmNsdXNpb24oY29uY2x1c2lvbk5vZGUsIGNvbmNsdXNpb25zLCBtZXRhUHJvb2ZDb250ZXh0KTtcblxuICAgICAgaWYgKGNvbmNsdXNpb25WZXJpZmllZCkge1xuICAgICAgICBjb25zdCBydWxlUHJvb2ZOb2RlID0gcnVsZVByb29mTm9kZVF1ZXJ5KHJ1bGVOb2RlKSxcbiAgICAgICAgICAgICAgZmlyc3RDb25jbHVzaW9uID0gZmlyc3QoY29uY2x1c2lvbnMpLFxuICAgICAgICAgICAgICBjb25jbHVzaW9uID0gZmlyc3RDb25jbHVzaW9uOyAvLy9cblxuICAgICAgICBsZXQgcnVsZVByb29mVmVyaWZpZWQgPSB0cnVlOyAvLy9cblxuICAgICAgICBpZiAocnVsZVByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJ1bGVQcm9vZlZlcmlmaWVkID0gdmVyaWZ5UnVsZVByb29mKHJ1bGVQcm9vZk5vZGUsIGNvbmNsdXNpb24sIG1ldGFQcm9vZkNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJ1bGVQcm9vZlZlcmlmaWVkKSB7XG4gICAgICAgICAgY29uc3QgcnVsZSA9IFJ1bGUuZnJvbUxhYmVsc1ByZW1pc2VzQ29uY2x1c2lvbkFuZEZpbGVDb250ZXh0KGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgIGZpbGVDb250ZXh0LmFkZFJ1bGUocnVsZSk7XG5cbiAgICAgICAgICBydWxlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHJ1bGVWZXJpZmllZCkge1xuICAgIGZpbGVDb250ZXh0LmluZm8oYFZlcmlmaWVkIHRoZSAnJHtsYWJlbHNTdHJpbmd9JyBydWxlLmAsIHJ1bGVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBydWxlVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5UnVsZSIsImxhYmVsTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJwcmVtaXNlc05vZGVRdWVyeSIsInJ1bGVQcm9vZk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImNvbmNsdXNpb25Ob2RlUXVlcnkiLCJydWxlTm9kZSIsImZpbGVDb250ZXh0IiwicnVsZVZlcmlmaWVkIiwibGFiZWxOb2RlcyIsImxhYmVsc1N0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJtZXRhUHJvb2ZDb250ZXh0IiwiTWV0YXByb29mQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsImRlYnVnIiwibGFiZWxzIiwibGFiZWxzVmVyaWZpZWQiLCJ2ZXJpZnlMYWJlbHMiLCJwcmVtaXNlcyIsInByZW1pc2VOb2RlcyIsInByZW1pc2VzVmVyaWZpZWQiLCJldmVyeSIsInByZW1pc2VOb2RlIiwicHJlbWlzZVZlcmlmaWVkIiwidmVyaWZ5UHJlbWlzZSIsImNvbmNsdXNpb25zIiwiY29uY2x1c2lvbk5vZGUiLCJjb25jbHVzaW9uVmVyaWZpZWQiLCJ2ZXJpZnlDb25jbHVzaW9uIiwicnVsZVByb29mTm9kZSIsImZpcnN0Q29uY2x1c2lvbiIsImZpcnN0IiwiY29uY2x1c2lvbiIsInJ1bGVQcm9vZlZlcmlmaWVkIiwidmVyaWZ5UnVsZVByb29mIiwicnVsZSIsIlJ1bGUiLCJmcm9tTGFiZWxzUHJlbWlzZXNDb25jbHVzaW9uQW5kRmlsZUNvbnRleHQiLCJhZGRSdWxlIiwiaW5mbyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUJBOzs7ZUFBd0JBOzs7MkRBZlA7NkRBQ1E7OERBQ0M7Z0VBQ0U7Z0VBQ0M7aUVBQ0E7cUJBRVA7cUJBQ2dCOzs7Ozs7QUFFdEMsSUFBTUMsa0JBQWtCQyxJQUFBQSxtQkFBVyxnQkFDN0JDLG9CQUFvQkQsSUFBQUEsbUJBQVcsa0JBQy9CRSxxQkFBcUJDLElBQUFBLGtCQUFVLHFCQUMvQkMsc0JBQXNCRCxJQUFBQSxrQkFBVTtBQUV2QixTQUFTTCxXQUFXTyxRQUFRLEVBQUVDLFdBQVc7SUFDdEQsSUFBSUMsZUFBZTtJQUVuQixJQUFNQyxhQUFhVCxnQkFBZ0JNLFdBQzdCSSxlQUFlSCxZQUFZSSxjQUFjRixhQUN6Q0csbUJBQW1CQyxtQkFBaUJDLGdCQUFnQlA7SUFFMURBLFlBQVlRLE1BQU0sQUFBQyxrQkFBOEIsT0FBYkwsY0FBYSxjQUFZSjtJQUU3RCxJQUFNVSxTQUFTLEVBQUUsRUFDWEMsaUJBQWlCQyxJQUFBQSxpQkFBYVQsWUFBWU8sUUFBUVQ7SUFFeEQsSUFBSVUsZ0JBQWdCO1FBQ2xCLElBQU1FLFdBQVcsRUFBRSxFQUNiQyxlQUFlbEIsa0JBQWtCSSxXQUNqQ2UsbUJBQW1CRCxhQUFhRSxNQUFNLFNBQUNDO1lBQ3JDLElBQU1DLGtCQUFrQkMsSUFBQUEsa0JBQWNGLGFBQWFKLFVBQVVQO1lBRTdELElBQUlZLGlCQUFpQjtnQkFDbkIsT0FBTztZQUNUO1FBQ0Y7UUFFTixJQUFJSCxrQkFBa0I7WUFDcEIsSUFBTUssY0FBYyxFQUFFLEVBQ2hCQyxpQkFBaUJ0QixvQkFBb0JDLFdBQ3JDc0IscUJBQXFCQyxJQUFBQSxxQkFBaUJGLGdCQUFnQkQsYUFBYWQ7WUFFekUsSUFBSWdCLG9CQUFvQjtnQkFDdEIsSUFBTUUsZ0JBQWdCM0IsbUJBQW1CRyxXQUNuQ3lCLGtCQUFrQkMsSUFBQUEsY0FBTU4sY0FDeEJPLGFBQWFGLGlCQUFpQixHQUFHO2dCQUV2QyxJQUFJRyxvQkFBb0IsTUFBTSxHQUFHO2dCQUVqQyxJQUFJSixrQkFBa0IsTUFBTTtvQkFDMUJJLG9CQUFvQkMsSUFBQUEsb0JBQWdCTCxlQUFlRyxZQUFZckI7Z0JBQ2pFO2dCQUVBLElBQUlzQixtQkFBbUI7b0JBQ3JCLElBQU1FLE9BQU9DLGNBQUtDLDJDQUEyQ3RCLFFBQVFHLFVBQVVjLFlBQVkxQjtvQkFFM0ZBLFlBQVlnQyxRQUFRSDtvQkFFcEI1QixlQUFlO2dCQUNqQjtZQUNGO1FBQ0Y7SUFDRjtJQUVBLElBQUlBLGNBQWM7UUFDaEJELFlBQVlpQyxLQUFLLEFBQUMsaUJBQTZCLE9BQWI5QixjQUFhLFlBQVVKO0lBQzNEO0lBRUEsT0FBT0U7QUFDVCJ9