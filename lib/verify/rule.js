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
    context.debug("Verifying the '".concat(labelsString, "' rule..."), ruleNode);
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
            context.info("Verified the '".concat(labelsString, "' rule."), ruleNode);
        }
    }
    return ruleVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCB2ZXJpZnlMYWJlbHMgZnJvbSBcIi4uL3ZlcmlmeS9sYWJlbHNcIjtcbmltcG9ydCB2ZXJpZnlNZXRhcHJvb2YgZnJvbSBcIi4uL3ZlcmlmeS9tZXRhcHJvb2ZcIjtcbmltcG9ydCBNZXRhcHJvb2ZDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L21ldGFwcm9vZlwiO1xuaW1wb3J0IHZlcmlmeUNvbmRpdGlvbmFsSW5mZXJlbmNlIGZyb20gXCIuLi92ZXJpZnkvY29uZGl0aW5hbEluZmVyZW5jZVwiO1xuaW1wb3J0IHZlcmlmeVVuY29uZGl0aW9uYWxJbmZlcmVuY2UgZnJvbSBcIi4uL3ZlcmlmeS91bmNvbmRpdGlvbmFsSW5mZXJlbmNlXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZXNBc1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGxhYmVsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcnVsZS9sYWJlbFwiKSxcbiAgICAgIG1ldGFwcm9vZk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ydWxlL21ldGFwcm9vZiFcIiksXG4gICAgICBjb25kaXRpb25hbEluZmVyZW5jZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ydWxlL2NvbmRpdGlvbmFsSW5mZXJlbmNlIVwiKSxcbiAgICAgIHVuY29uZGl0aW9uYWxJbmZlcmVuY2VOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcnVsZS91bmNvbmRpdGlvbmFsSW5mZXJlbmNlIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5UnVsZShydWxlTm9kZSwgY29udGV4dCkge1xuICBsZXQgcnVsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgbGFiZWxOb2RlcyA9IGxhYmVsTm9kZXNRdWVyeShydWxlTm9kZSksXG4gICAgICAgIGxhYmVsc1N0cmluZyA9IG5vZGVzQXNTdHJpbmcobGFiZWxOb2Rlcyk7XG5cbiAgY29uc3QgbWV0YXByb29mQ29udGV4dCA9IE1ldGFwcm9vZkNvbnRleHQuZnJvbUNvbnRleHQoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG1ldGFwcm9vZkNvbnRleHQ7IC8vL1xuXG4gIGNvbnRleHQuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7bGFiZWxzU3RyaW5nfScgcnVsZS4uLmAsIHJ1bGVOb2RlKTtcblxuICBjb25zdCBsYWJlbHMgPSBbXSxcbiAgICAgICAgbGFiZWxzVmVyaWZpZWQgPSB2ZXJpZnlMYWJlbHMobGFiZWxOb2RlcywgbGFiZWxzLCBjb250ZXh0KTtcblxuICBpZiAobGFiZWxzVmVyaWZpZWQpIHtcbiAgICBjb25zdCBwcmVtaXNlcyA9IFtdLFxuICAgICAgICAgIGNvbmNsdXNpb25zID0gW10sXG4gICAgICAgICAgY29uZGl0aW9uYWxJbmZlcmVuY2VOb2RlID0gY29uZGl0aW9uYWxJbmZlcmVuY2VOb2RlUXVlcnkocnVsZU5vZGUpLFxuICAgICAgICAgIHVuY29uZGl0aW9uYWxJbmZlcmVuY2VOb2RlID0gdW5jb25kaXRpb25hbEluZmVyZW5jZU5vZGVRdWVyeShydWxlTm9kZSk7XG5cbiAgICBsZXQgY29uZGl0aW9uYWxJbmZlcmVuY2VWZXJpZmllZCA9IGZhbHNlLFxuICAgICAgICB1bmNvbmRpdGlvbmFsSW5mZXJlbmNlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGlmIChjb25kaXRpb25hbEluZmVyZW5jZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbmRpdGlvbmFsSW5mZXJlbmNlVmVyaWZpZWQgPSB2ZXJpZnlDb25kaXRpb25hbEluZmVyZW5jZShjb25kaXRpb25hbEluZmVyZW5jZU5vZGUsIHByZW1pc2VzLCBjb25jbHVzaW9ucywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHVuY29uZGl0aW9uYWxJbmZlcmVuY2VOb2RlICE9PSBudWxsKSB7XG4gICAgICB1bmNvbmRpdGlvbmFsSW5mZXJlbmNlVmVyaWZpZWQgPSB2ZXJpZnlVbmNvbmRpdGlvbmFsSW5mZXJlbmNlKHVuY29uZGl0aW9uYWxJbmZlcmVuY2VOb2RlLCBwcmVtaXNlcywgY29uY2x1c2lvbnMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmIChjb25kaXRpb25hbEluZmVyZW5jZVZlcmlmaWVkIHx8IHVuY29uZGl0aW9uYWxJbmZlcmVuY2VWZXJpZmllZCkge1xuICAgICAgY29uc3QgbWV0YXByb29mTm9kZSA9IG1ldGFwcm9vZk5vZGVRdWVyeShydWxlTm9kZSksXG4gICAgICAgICAgICBmaXJzdENvbmNsdXNpb24gPSBmaXJzdChjb25jbHVzaW9ucyksXG4gICAgICAgICAgICBjb25jbHVzaW9uID0gZmlyc3RDb25jbHVzaW9uOyAvLy9cblxuICAgICAgbGV0IG1ldGFwcm9vZlZlcmlmaWVkID0gdHJ1ZTtcblxuICAgICAgaWYgKG1ldGFwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgbWV0YXByb29mVmVyaWZpZWQgPSB2ZXJpZnlNZXRhcHJvb2YobWV0YXByb29mTm9kZSwgY29uY2x1c2lvbiwgY29udGV4dCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZXRhcHJvb2ZWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBydWxlID0gUnVsZS5mcm9tUHJlbWlzZXNDb25jbHVzaW9uQW5kTGFiZWxzKHByZW1pc2VzLCBjb25jbHVzaW9uLCBsYWJlbHMpO1xuXG4gICAgICAgIGNvbnRleHQuYWRkUnVsZShydWxlKTtcblxuICAgICAgICBydWxlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChydWxlVmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuaW5mbyhgVmVyaWZpZWQgdGhlICcke2xhYmVsc1N0cmluZ30nIHJ1bGUuYCwgcnVsZU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBydWxlVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5UnVsZSIsImxhYmVsTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJtZXRhcHJvb2ZOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJjb25kaXRpb25hbEluZmVyZW5jZU5vZGVRdWVyeSIsInVuY29uZGl0aW9uYWxJbmZlcmVuY2VOb2RlUXVlcnkiLCJydWxlTm9kZSIsImNvbnRleHQiLCJydWxlVmVyaWZpZWQiLCJsYWJlbE5vZGVzIiwibGFiZWxzU3RyaW5nIiwibm9kZXNBc1N0cmluZyIsIm1ldGFwcm9vZkNvbnRleHQiLCJNZXRhcHJvb2ZDb250ZXh0IiwiZnJvbUNvbnRleHQiLCJkZWJ1ZyIsImxhYmVscyIsImxhYmVsc1ZlcmlmaWVkIiwidmVyaWZ5TGFiZWxzIiwicHJlbWlzZXMiLCJjb25jbHVzaW9ucyIsImNvbmRpdGlvbmFsSW5mZXJlbmNlTm9kZSIsInVuY29uZGl0aW9uYWxJbmZlcmVuY2VOb2RlIiwiY29uZGl0aW9uYWxJbmZlcmVuY2VWZXJpZmllZCIsInVuY29uZGl0aW9uYWxJbmZlcmVuY2VWZXJpZmllZCIsInZlcmlmeUNvbmRpdGlvbmFsSW5mZXJlbmNlIiwidmVyaWZ5VW5jb25kaXRpb25hbEluZmVyZW5jZSIsIm1ldGFwcm9vZk5vZGUiLCJmaXJzdENvbmNsdXNpb24iLCJmaXJzdCIsImNvbmNsdXNpb24iLCJtZXRhcHJvb2ZWZXJpZmllZCIsInZlcmlmeU1ldGFwcm9vZiIsInJ1bGUiLCJSdWxlIiwiZnJvbVByZW1pc2VzQ29uY2x1c2lvbkFuZExhYmVscyIsImFkZFJ1bGUiLCJpbmZvIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFrQkE7OztlQUF3QkE7Ozt5REFoQlA7MkRBQ1E7OERBQ0c7K0RBQ0M7d0VBQ1U7MkVBQ0U7cUJBRW5CO3NCQUNRO3FCQUNROzs7Ozs7QUFFdEMsSUFBTUMsa0JBQWtCQyxJQUFBQSxpQkFBVSxFQUFDLGdCQUM3QkMscUJBQXFCQyxJQUFBQSxnQkFBUyxFQUFDLHFCQUMvQkMsZ0NBQWdDRCxJQUFBQSxnQkFBUyxFQUFDLGdDQUMxQ0Usa0NBQWtDRixJQUFBQSxnQkFBUyxFQUFDO0FBRW5DLFNBQVNKLFdBQVdPLFFBQVEsRUFBRUMsT0FBTyxFQUFFO0lBQ3BELElBQUlDLGVBQWUsS0FBSztJQUV4QixJQUFNQyxhQUFhVCxnQkFBZ0JNLFdBQzdCSSxlQUFlQyxJQUFBQSxxQkFBYSxFQUFDRjtJQUVuQyxJQUFNRyxtQkFBbUJDLG1CQUFnQixDQUFDQyxXQUFXLENBQUNQO0lBRXREQSxVQUFVSyxrQkFBa0IsR0FBRztJQUUvQkwsUUFBUVEsS0FBSyxDQUFDLEFBQUMsa0JBQThCLE9BQWJMLGNBQWEsY0FBWUo7SUFFekQsSUFBTVUsU0FBUyxFQUFFLEVBQ1hDLGlCQUFpQkMsSUFBQUEsZUFBWSxFQUFDVCxZQUFZTyxRQUFRVDtJQUV4RCxJQUFJVSxnQkFBZ0I7UUFDbEIsSUFBTUUsV0FBVyxFQUFFLEVBQ2JDLGNBQWMsRUFBRSxFQUNoQkMsMkJBQTJCakIsOEJBQThCRSxXQUN6RGdCLDZCQUE2QmpCLGdDQUFnQ0M7UUFFbkUsSUFBSWlCLCtCQUErQixLQUFLLEVBQ3BDQyxpQ0FBaUMsS0FBSztRQUUxQyxJQUFJSCw2QkFBNkIsSUFBSSxFQUFFO1lBQ3JDRSwrQkFBK0JFLElBQUFBLDRCQUEwQixFQUFDSiwwQkFBMEJGLFVBQVVDLGFBQWFiO1FBQzdHLENBQUM7UUFFRCxJQUFJZSwrQkFBK0IsSUFBSSxFQUFFO1lBQ3ZDRSxpQ0FBaUNFLElBQUFBLCtCQUE0QixFQUFDSiw0QkFBNEJILFVBQVVDLGFBQWFiO1FBQ25ILENBQUM7UUFFRCxJQUFJZ0IsZ0NBQWdDQyxnQ0FBZ0M7WUFDbEUsSUFBTUcsZ0JBQWdCekIsbUJBQW1CSSxXQUNuQ3NCLGtCQUFrQkMsSUFBQUEsWUFBSyxFQUFDVCxjQUN4QlUsYUFBYUYsaUJBQWlCLEdBQUc7WUFFdkMsSUFBSUcsb0JBQW9CLElBQUk7WUFFNUIsSUFBSUosa0JBQWtCLElBQUksRUFBRTtnQkFDMUJJLG9CQUFvQkMsSUFBQUEsa0JBQWUsRUFBQ0wsZUFBZUcsWUFBWXZCO1lBQ2pFLENBQUM7WUFFRCxJQUFJd0IsbUJBQW1CO2dCQUNyQixJQUFNRSxPQUFPQyxhQUFJLENBQUNDLCtCQUErQixDQUFDaEIsVUFBVVcsWUFBWWQ7Z0JBRXhFVCxRQUFRNkIsT0FBTyxDQUFDSDtnQkFFaEJ6QixlQUFlLElBQUk7WUFDckIsQ0FBQztRQUNILENBQUM7UUFFRCxJQUFJQSxjQUFjO1lBQ2hCRCxRQUFROEIsSUFBSSxDQUFDLEFBQUMsaUJBQTZCLE9BQWIzQixjQUFhLFlBQVVKO1FBQ3ZELENBQUM7SUFDSCxDQUFDO0lBRUQsT0FBT0U7QUFDVCJ9