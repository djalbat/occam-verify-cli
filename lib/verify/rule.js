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
var _rule = /*#__PURE__*/ _interopRequireDefault(require("../rule"));
var _labels = /*#__PURE__*/ _interopRequireDefault(require("../verify/labels"));
var _metaproof = /*#__PURE__*/ _interopRequireDefault(require("../verify/metaproof"));
var _metaproof1 = /*#__PURE__*/ _interopRequireDefault(require("../context/metaproof"));
var _conditinalInference = /*#__PURE__*/ _interopRequireDefault(require("../verify/conditinalInference"));
var _unconditionalInference = /*#__PURE__*/ _interopRequireDefault(require("../verify/unconditionalInference"));
var _array = require("../utilities/array");
var _string = require("../utilities/string");
var _query = require("../utilities/query");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var labelNodesQuery = (0, _query.nodesQuery)("/rule/label"), metaproofNodeQuery = (0, _query.nodeQuery)("/rule/metaproof!"), conditionalInferenceNodeQuery = (0, _query.nodeQuery)("/rule/conditionalInference!"), unconditionalInferenceNodeQuery = (0, _query.nodeQuery)("/rule/unconditionalInference!");
function verifyRule(ruleNode, context) {
    var ruleVerified = false;
    var labelNodes = labelNodesQuery(ruleNode), labelsString = (0, _string.nodesAsString)(labelNodes);
    var metaproofContext = _metaproof1.default.fromContext(context);
    context = metaproofContext; ///
    context.debug("Verifying the '".concat(labelsString, "' rule..."));
    var labels = [], labelsVerified = (0, _labels.default)(labelNodes, labels, context);
    if (labelsVerified) {
        var premises = [], conclusions = [], conditionalInferenceNode = conditionalInferenceNodeQuery(ruleNode), unconditionalInferenceNode = unconditionalInferenceNodeQuery(ruleNode);
        var conditionalInferenceVerified = false, unconditionalInferenceVerified = false;
        if (conditionalInferenceNode !== null) {
            conditionalInferenceVerified = (0, _conditinalInference.default)(conditionalInferenceNode, premises, conclusions, context);
        }
        if (unconditionalInferenceNode !== null) {
            unconditionalInferenceVerified = (0, _unconditionalInference.default)(unconditionalInferenceNode, premises, conclusions, context);
        }
        if (conditionalInferenceVerified || unconditionalInferenceVerified) {
            var metaproofNode = metaproofNodeQuery(ruleNode), firstConclusion = (0, _array.first)(conclusions), conclusion = firstConclusion; ///
            var metaproofVerified = true;
            if (metaproofNode !== null) {
                metaproofVerified = (0, _metaproof.default)(metaproofNode, conclusion, context);
            }
            if (metaproofVerified) {
                var rule = _rule.default.fromPremisesConclusionAndLabels(premises, conclusion, labels);
                context.addRule(rule);
                ruleVerified = true;
            }
        }
        if (ruleVerified) {
            context.info("Verified the '".concat(labelsString, "' rule."));
        }
    }
    return ruleVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCB2ZXJpZnlMYWJlbHMgZnJvbSBcIi4uL3ZlcmlmeS9sYWJlbHNcIjtcbmltcG9ydCB2ZXJpZnlNZXRhcHJvb2YgZnJvbSBcIi4uL3ZlcmlmeS9tZXRhcHJvb2ZcIjtcbmltcG9ydCBNZXRhcHJvb2ZDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L21ldGFwcm9vZlwiO1xuaW1wb3J0IHZlcmlmeUNvbmRpdGlvbmFsSW5mZXJlbmNlIGZyb20gXCIuLi92ZXJpZnkvY29uZGl0aW5hbEluZmVyZW5jZVwiO1xuaW1wb3J0IHZlcmlmeVVuY29uZGl0aW9uYWxJbmZlcmVuY2UgZnJvbSBcIi4uL3ZlcmlmeS91bmNvbmRpdGlvbmFsSW5mZXJlbmNlXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZXNBc1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGxhYmVsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcnVsZS9sYWJlbFwiKSxcbiAgICAgIG1ldGFwcm9vZk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ydWxlL21ldGFwcm9vZiFcIiksXG4gICAgICBjb25kaXRpb25hbEluZmVyZW5jZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ydWxlL2NvbmRpdGlvbmFsSW5mZXJlbmNlIVwiKSxcbiAgICAgIHVuY29uZGl0aW9uYWxJbmZlcmVuY2VOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcnVsZS91bmNvbmRpdGlvbmFsSW5mZXJlbmNlIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5UnVsZShydWxlTm9kZSwgY29udGV4dCkge1xuICBsZXQgcnVsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgbGFiZWxOb2RlcyA9IGxhYmVsTm9kZXNRdWVyeShydWxlTm9kZSksXG4gICAgICAgIGxhYmVsc1N0cmluZyA9IG5vZGVzQXNTdHJpbmcobGFiZWxOb2Rlcyk7XG5cbiAgY29uc3QgbWV0YXByb29mQ29udGV4dCA9IE1ldGFwcm9vZkNvbnRleHQuZnJvbUNvbnRleHQoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG1ldGFwcm9vZkNvbnRleHQ7IC8vL1xuXG4gIGNvbnRleHQuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7bGFiZWxzU3RyaW5nfScgcnVsZS4uLmApO1xuXG4gIGNvbnN0IGxhYmVscyA9IFtdLFxuICAgICAgICBsYWJlbHNWZXJpZmllZCA9IHZlcmlmeUxhYmVscyhsYWJlbE5vZGVzLCBsYWJlbHMsIGNvbnRleHQpO1xuXG4gIGlmIChsYWJlbHNWZXJpZmllZCkge1xuICAgIGNvbnN0IHByZW1pc2VzID0gW10sXG4gICAgICAgICAgY29uY2x1c2lvbnMgPSBbXSxcbiAgICAgICAgICBjb25kaXRpb25hbEluZmVyZW5jZU5vZGUgPSBjb25kaXRpb25hbEluZmVyZW5jZU5vZGVRdWVyeShydWxlTm9kZSksXG4gICAgICAgICAgdW5jb25kaXRpb25hbEluZmVyZW5jZU5vZGUgPSB1bmNvbmRpdGlvbmFsSW5mZXJlbmNlTm9kZVF1ZXJ5KHJ1bGVOb2RlKTtcblxuICAgIGxldCBjb25kaXRpb25hbEluZmVyZW5jZVZlcmlmaWVkID0gZmFsc2UsXG4gICAgICAgIHVuY29uZGl0aW9uYWxJbmZlcmVuY2VWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgaWYgKGNvbmRpdGlvbmFsSW5mZXJlbmNlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uZGl0aW9uYWxJbmZlcmVuY2VWZXJpZmllZCA9IHZlcmlmeUNvbmRpdGlvbmFsSW5mZXJlbmNlKGNvbmRpdGlvbmFsSW5mZXJlbmNlTm9kZSwgcHJlbWlzZXMsIGNvbmNsdXNpb25zLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAodW5jb25kaXRpb25hbEluZmVyZW5jZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIHVuY29uZGl0aW9uYWxJbmZlcmVuY2VWZXJpZmllZCA9IHZlcmlmeVVuY29uZGl0aW9uYWxJbmZlcmVuY2UodW5jb25kaXRpb25hbEluZmVyZW5jZU5vZGUsIHByZW1pc2VzLCBjb25jbHVzaW9ucywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmRpdGlvbmFsSW5mZXJlbmNlVmVyaWZpZWQgfHwgdW5jb25kaXRpb25hbEluZmVyZW5jZVZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBtZXRhcHJvb2ZOb2RlID0gbWV0YXByb29mTm9kZVF1ZXJ5KHJ1bGVOb2RlKSxcbiAgICAgICAgICAgIGZpcnN0Q29uY2x1c2lvbiA9IGZpcnN0KGNvbmNsdXNpb25zKSxcbiAgICAgICAgICAgIGNvbmNsdXNpb24gPSBmaXJzdENvbmNsdXNpb247IC8vL1xuXG4gICAgICBsZXQgbWV0YXByb29mVmVyaWZpZWQgPSB0cnVlO1xuXG4gICAgICBpZiAobWV0YXByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBtZXRhcHJvb2ZWZXJpZmllZCA9IHZlcmlmeU1ldGFwcm9vZihtZXRhcHJvb2ZOb2RlLCBjb25jbHVzaW9uLCBjb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1ldGFwcm9vZlZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHJ1bGUgPSBSdWxlLmZyb21QcmVtaXNlc0NvbmNsdXNpb25BbmRMYWJlbHMocHJlbWlzZXMsIGNvbmNsdXNpb24sIGxhYmVscyk7XG5cbiAgICAgICAgY29udGV4dC5hZGRSdWxlKHJ1bGUpO1xuXG4gICAgICAgIHJ1bGVWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJ1bGVWZXJpZmllZCkge1xuICAgICAgY29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7bGFiZWxzU3RyaW5nfScgcnVsZS5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcnVsZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVJ1bGUiLCJsYWJlbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwibWV0YXByb29mTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiY29uZGl0aW9uYWxJbmZlcmVuY2VOb2RlUXVlcnkiLCJ1bmNvbmRpdGlvbmFsSW5mZXJlbmNlTm9kZVF1ZXJ5IiwicnVsZU5vZGUiLCJjb250ZXh0IiwicnVsZVZlcmlmaWVkIiwibGFiZWxOb2RlcyIsImxhYmVsc1N0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJtZXRhcHJvb2ZDb250ZXh0IiwiTWV0YXByb29mQ29udGV4dCIsImZyb21Db250ZXh0IiwiZGVidWciLCJsYWJlbHMiLCJsYWJlbHNWZXJpZmllZCIsInZlcmlmeUxhYmVscyIsInByZW1pc2VzIiwiY29uY2x1c2lvbnMiLCJjb25kaXRpb25hbEluZmVyZW5jZU5vZGUiLCJ1bmNvbmRpdGlvbmFsSW5mZXJlbmNlTm9kZSIsImNvbmRpdGlvbmFsSW5mZXJlbmNlVmVyaWZpZWQiLCJ1bmNvbmRpdGlvbmFsSW5mZXJlbmNlVmVyaWZpZWQiLCJ2ZXJpZnlDb25kaXRpb25hbEluZmVyZW5jZSIsInZlcmlmeVVuY29uZGl0aW9uYWxJbmZlcmVuY2UiLCJtZXRhcHJvb2ZOb2RlIiwiZmlyc3RDb25jbHVzaW9uIiwiZmlyc3QiLCJjb25jbHVzaW9uIiwibWV0YXByb29mVmVyaWZpZWQiLCJ2ZXJpZnlNZXRhcHJvb2YiLCJydWxlIiwiUnVsZSIsImZyb21QcmVtaXNlc0NvbmNsdXNpb25BbmRMYWJlbHMiLCJhZGRSdWxlIiwiaW5mbyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0JBOzs7ZUFBd0JBOzs7eURBaEJQOzJEQUNROzhEQUNHOytEQUNDO3dFQUNVOzJFQUNFO3FCQUVuQjtzQkFDUTtxQkFDUTs7Ozs7O0FBRXRDLElBQU1DLGtCQUFrQkMsSUFBQUEsaUJBQVUsRUFBQyxnQkFDN0JDLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQyxxQkFDL0JDLGdDQUFnQ0QsSUFBQUEsZ0JBQVMsRUFBQyxnQ0FDMUNFLGtDQUFrQ0YsSUFBQUEsZ0JBQVMsRUFBQztBQUVuQyxTQUFTSixXQUFXTyxRQUFRLEVBQUVDLE9BQU8sRUFBRTtJQUNwRCxJQUFJQyxlQUFlLEtBQUs7SUFFeEIsSUFBTUMsYUFBYVQsZ0JBQWdCTSxXQUM3QkksZUFBZUMsSUFBQUEscUJBQWEsRUFBQ0Y7SUFFbkMsSUFBTUcsbUJBQW1CQyxtQkFBZ0IsQ0FBQ0MsV0FBVyxDQUFDUDtJQUV0REEsVUFBVUssa0JBQWtCLEdBQUc7SUFFL0JMLFFBQVFRLEtBQUssQ0FBQyxBQUFDLGtCQUE4QixPQUFiTCxjQUFhO0lBRTdDLElBQU1NLFNBQVMsRUFBRSxFQUNYQyxpQkFBaUJDLElBQUFBLGVBQVksRUFBQ1QsWUFBWU8sUUFBUVQ7SUFFeEQsSUFBSVUsZ0JBQWdCO1FBQ2xCLElBQU1FLFdBQVcsRUFBRSxFQUNiQyxjQUFjLEVBQUUsRUFDaEJDLDJCQUEyQmpCLDhCQUE4QkUsV0FDekRnQiw2QkFBNkJqQixnQ0FBZ0NDO1FBRW5FLElBQUlpQiwrQkFBK0IsS0FBSyxFQUNwQ0MsaUNBQWlDLEtBQUs7UUFFMUMsSUFBSUgsNkJBQTZCLElBQUksRUFBRTtZQUNyQ0UsK0JBQStCRSxJQUFBQSw0QkFBMEIsRUFBQ0osMEJBQTBCRixVQUFVQyxhQUFhYjtRQUM3RyxDQUFDO1FBRUQsSUFBSWUsK0JBQStCLElBQUksRUFBRTtZQUN2Q0UsaUNBQWlDRSxJQUFBQSwrQkFBNEIsRUFBQ0osNEJBQTRCSCxVQUFVQyxhQUFhYjtRQUNuSCxDQUFDO1FBRUQsSUFBSWdCLGdDQUFnQ0MsZ0NBQWdDO1lBQ2xFLElBQU1HLGdCQUFnQnpCLG1CQUFtQkksV0FDbkNzQixrQkFBa0JDLElBQUFBLFlBQUssRUFBQ1QsY0FDeEJVLGFBQWFGLGlCQUFpQixHQUFHO1lBRXZDLElBQUlHLG9CQUFvQixJQUFJO1lBRTVCLElBQUlKLGtCQUFrQixJQUFJLEVBQUU7Z0JBQzFCSSxvQkFBb0JDLElBQUFBLGtCQUFlLEVBQUNMLGVBQWVHLFlBQVl2QjtZQUNqRSxDQUFDO1lBRUQsSUFBSXdCLG1CQUFtQjtnQkFDckIsSUFBTUUsT0FBT0MsYUFBSSxDQUFDQywrQkFBK0IsQ0FBQ2hCLFVBQVVXLFlBQVlkO2dCQUV4RVQsUUFBUTZCLE9BQU8sQ0FBQ0g7Z0JBRWhCekIsZUFBZSxJQUFJO1lBQ3JCLENBQUM7UUFDSCxDQUFDO1FBRUQsSUFBSUEsY0FBYztZQUNoQkQsUUFBUThCLElBQUksQ0FBQyxBQUFDLGlCQUE2QixPQUFiM0IsY0FBYTtRQUM3QyxDQUFDO0lBQ0gsQ0FBQztJQUVELE9BQU9GO0FBQ1QifQ==