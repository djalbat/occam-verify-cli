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
var _premise = /*#__PURE__*/ _interopRequireDefault(require("../verify/premise"));
var _ruleProof = /*#__PURE__*/ _interopRequireDefault(require("../verify/ruleProof"));
var _metaproof = /*#__PURE__*/ _interopRequireDefault(require("../context/metaproof"));
var _conclusion = /*#__PURE__*/ _interopRequireDefault(require("../verify/conclusion"));
var _array = require("../utilities/array");
var _query = require("../utilities/query");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var labelNodesQuery = (0, _query.nodesQuery)("/rule/label"), premisesNodeQuery = (0, _query.nodesQuery)("/rule/premise"), ruleProofNodeQuery = (0, _query.nodeQuery)("/rule/ruleProof!"), conclusionNodeQuery = (0, _query.nodeQuery)("/rule/conclusion!");
function verifyRule(ruleNode, fileContext) {
    var ruleVerified = false;
    var labelNodes = labelNodesQuery(ruleNode), labelsString = fileContext.nodesAsString(labelNodes), metaProofContext = _metaproof.default.fromFileContext(fileContext);
    fileContext.debug(ruleNode, "Verifying the '".concat(labelsString, "' rule..."));
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
                    var rule = _rule.default.fromLabelsPremisesAndConclusion(labels, premises, conclusion);
                    fileContext.addRule(rule);
                    ruleVerified = true;
                }
            }
        }
    }
    if (ruleVerified) {
        fileContext.info(ruleNode, "Verified the '".concat(labelsString, "' rule."));
    }
    return ruleVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCB2ZXJpZnlMYWJlbHMgZnJvbSBcIi4uL3ZlcmlmeS9sYWJlbHNcIjtcbmltcG9ydCB2ZXJpZnlQcmVtaXNlIGZyb20gXCIuLi92ZXJpZnkvcHJlbWlzZVwiO1xuaW1wb3J0IHZlcmlmeVJ1bGVQcm9vZiBmcm9tIFwiLi4vdmVyaWZ5L3J1bGVQcm9vZlwiO1xuaW1wb3J0IE1ldGFwcm9vZkNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbWV0YXByb29mXCI7XG5pbXBvcnQgdmVyaWZ5Q29uY2x1c2lvbiBmcm9tIFwiLi4vdmVyaWZ5L2NvbmNsdXNpb25cIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGxhYmVsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcnVsZS9sYWJlbFwiKSxcbiAgICAgIHByZW1pc2VzTm9kZVF1ZXJ5ID0gbm9kZXNRdWVyeShcIi9ydWxlL3ByZW1pc2VcIiksXG4gICAgICBydWxlUHJvb2ZOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcnVsZS9ydWxlUHJvb2YhXCIpLFxuICAgICAgY29uY2x1c2lvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ydWxlL2NvbmNsdXNpb24hXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlSdWxlKHJ1bGVOb2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgcnVsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgbGFiZWxOb2RlcyA9IGxhYmVsTm9kZXNRdWVyeShydWxlTm9kZSksXG4gICAgICAgIGxhYmVsc1N0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVzQXNTdHJpbmcobGFiZWxOb2RlcyksXG4gICAgICAgIG1ldGFQcm9vZkNvbnRleHQgPSBNZXRhcHJvb2ZDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCk7XG5cbiAgZmlsZUNvbnRleHQuZGVidWcocnVsZU5vZGUsIGBWZXJpZnlpbmcgdGhlICcke2xhYmVsc1N0cmluZ30nIHJ1bGUuLi5gKTtcblxuICBjb25zdCBsYWJlbHMgPSBbXSxcbiAgICAgICAgbGFiZWxzVmVyaWZpZWQgPSB2ZXJpZnlMYWJlbHMobGFiZWxOb2RlcywgbGFiZWxzLCBmaWxlQ29udGV4dCk7XG5cbiAgaWYgKGxhYmVsc1ZlcmlmaWVkKSB7XG4gICAgY29uc3QgcHJlbWlzZXMgPSBbXSxcbiAgICAgICAgICBwcmVtaXNlTm9kZXMgPSBwcmVtaXNlc05vZGVRdWVyeShydWxlTm9kZSksXG4gICAgICAgICAgcHJlbWlzZXNWZXJpZmllZCA9IHByZW1pc2VOb2Rlcy5ldmVyeSgocHJlbWlzZU5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByZW1pc2VWZXJpZmllZCA9IHZlcmlmeVByZW1pc2UocHJlbWlzZU5vZGUsIHByZW1pc2VzLCBtZXRhUHJvb2ZDb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHByZW1pc2VWZXJpZmllZCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmIChwcmVtaXNlc1ZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBjb25jbHVzaW9ucyA9IFtdLFxuICAgICAgICAgICAgY29uY2x1c2lvbk5vZGUgPSBjb25jbHVzaW9uTm9kZVF1ZXJ5KHJ1bGVOb2RlKSxcbiAgICAgICAgICAgIGNvbmNsdXNpb25WZXJpZmllZCA9IHZlcmlmeUNvbmNsdXNpb24oY29uY2x1c2lvbk5vZGUsIGNvbmNsdXNpb25zLCBtZXRhUHJvb2ZDb250ZXh0KTtcblxuICAgICAgaWYgKGNvbmNsdXNpb25WZXJpZmllZCkge1xuICAgICAgICBjb25zdCBydWxlUHJvb2ZOb2RlID0gcnVsZVByb29mTm9kZVF1ZXJ5KHJ1bGVOb2RlKSxcbiAgICAgICAgICAgICAgZmlyc3RDb25jbHVzaW9uID0gZmlyc3QoY29uY2x1c2lvbnMpLFxuICAgICAgICAgICAgICBjb25jbHVzaW9uID0gZmlyc3RDb25jbHVzaW9uOyAvLy9cblxuICAgICAgICBsZXQgcnVsZVByb29mVmVyaWZpZWQgPSB0cnVlOyAvLy9cblxuICAgICAgICBpZiAocnVsZVByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJ1bGVQcm9vZlZlcmlmaWVkID0gdmVyaWZ5UnVsZVByb29mKHJ1bGVQcm9vZk5vZGUsIGNvbmNsdXNpb24sIG1ldGFQcm9vZkNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJ1bGVQcm9vZlZlcmlmaWVkKSB7XG4gICAgICAgICAgY29uc3QgcnVsZSA9IFJ1bGUuZnJvbUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbihsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKTtcblxuICAgICAgICAgIGZpbGVDb250ZXh0LmFkZFJ1bGUocnVsZSk7XG5cbiAgICAgICAgICBydWxlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHJ1bGVWZXJpZmllZCkge1xuICAgIGZpbGVDb250ZXh0LmluZm8ocnVsZU5vZGUsIGBWZXJpZmllZCB0aGUgJyR7bGFiZWxzU3RyaW5nfScgcnVsZS5gKTtcbiAgfVxuXG4gIHJldHVybiBydWxlVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5UnVsZSIsImxhYmVsTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJwcmVtaXNlc05vZGVRdWVyeSIsInJ1bGVQcm9vZk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImNvbmNsdXNpb25Ob2RlUXVlcnkiLCJydWxlTm9kZSIsImZpbGVDb250ZXh0IiwicnVsZVZlcmlmaWVkIiwibGFiZWxOb2RlcyIsImxhYmVsc1N0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJtZXRhUHJvb2ZDb250ZXh0IiwiTWV0YXByb29mQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsImRlYnVnIiwibGFiZWxzIiwibGFiZWxzVmVyaWZpZWQiLCJ2ZXJpZnlMYWJlbHMiLCJwcmVtaXNlcyIsInByZW1pc2VOb2RlcyIsInByZW1pc2VzVmVyaWZpZWQiLCJldmVyeSIsInByZW1pc2VOb2RlIiwicHJlbWlzZVZlcmlmaWVkIiwidmVyaWZ5UHJlbWlzZSIsImNvbmNsdXNpb25zIiwiY29uY2x1c2lvbk5vZGUiLCJjb25jbHVzaW9uVmVyaWZpZWQiLCJ2ZXJpZnlDb25jbHVzaW9uIiwicnVsZVByb29mTm9kZSIsImZpcnN0Q29uY2x1c2lvbiIsImZpcnN0IiwiY29uY2x1c2lvbiIsInJ1bGVQcm9vZlZlcmlmaWVkIiwidmVyaWZ5UnVsZVByb29mIiwicnVsZSIsIlJ1bGUiLCJmcm9tTGFiZWxzUHJlbWlzZXNBbmRDb25jbHVzaW9uIiwiYWRkUnVsZSIsImluZm8iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWlCQTs7O2VBQXdCQTs7O3lEQWZQOzJEQUNROzREQUNDOzhEQUNFOzhEQUNDOytEQUNBO3FCQUVQO3FCQUNnQjs7Ozs7O0FBRXRDLElBQU1DLGtCQUFrQkMsSUFBQUEsaUJBQVUsRUFBQyxnQkFDN0JDLG9CQUFvQkQsSUFBQUEsaUJBQVUsRUFBQyxrQkFDL0JFLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQyxxQkFDL0JDLHNCQUFzQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUV2QixTQUFTTCxXQUFXTyxRQUFRLEVBQUVDLFdBQVcsRUFBRTtJQUN4RCxJQUFJQyxlQUFlLEtBQUs7SUFFeEIsSUFBTUMsYUFBYVQsZ0JBQWdCTSxXQUM3QkksZUFBZUgsWUFBWUksYUFBYSxDQUFDRixhQUN6Q0csbUJBQW1CQyxrQkFBZ0IsQ0FBQ0MsZUFBZSxDQUFDUDtJQUUxREEsWUFBWVEsS0FBSyxDQUFDVCxVQUFVLEFBQUMsa0JBQThCLE9BQWJJLGNBQWE7SUFFM0QsSUFBTU0sU0FBUyxFQUFFLEVBQ1hDLGlCQUFpQkMsSUFBQUEsZUFBWSxFQUFDVCxZQUFZTyxRQUFRVDtJQUV4RCxJQUFJVSxnQkFBZ0I7UUFDbEIsSUFBTUUsV0FBVyxFQUFFLEVBQ2JDLGVBQWVsQixrQkFBa0JJLFdBQ2pDZSxtQkFBbUJELGFBQWFFLEtBQUssQ0FBQyxTQUFDQyxhQUFnQjtZQUNyRCxJQUFNQyxrQkFBa0JDLElBQUFBLGdCQUFhLEVBQUNGLGFBQWFKLFVBQVVQO1lBRTdELElBQUlZLGlCQUFpQjtnQkFDbkIsT0FBTyxJQUFJO1lBQ2IsQ0FBQztRQUNIO1FBRU4sSUFBSUgsa0JBQWtCO1lBQ3BCLElBQU1LLGNBQWMsRUFBRSxFQUNoQkMsaUJBQWlCdEIsb0JBQW9CQyxXQUNyQ3NCLHFCQUFxQkMsSUFBQUEsbUJBQWdCLEVBQUNGLGdCQUFnQkQsYUFBYWQ7WUFFekUsSUFBSWdCLG9CQUFvQjtnQkFDdEIsSUFBTUUsZ0JBQWdCM0IsbUJBQW1CRyxXQUNuQ3lCLGtCQUFrQkMsSUFBQUEsWUFBSyxFQUFDTixjQUN4Qk8sYUFBYUYsaUJBQWlCLEdBQUc7Z0JBRXZDLElBQUlHLG9CQUFvQixJQUFJLEVBQUUsR0FBRztnQkFFakMsSUFBSUosa0JBQWtCLElBQUksRUFBRTtvQkFDMUJJLG9CQUFvQkMsSUFBQUEsa0JBQWUsRUFBQ0wsZUFBZUcsWUFBWXJCO2dCQUNqRSxDQUFDO2dCQUVELElBQUlzQixtQkFBbUI7b0JBQ3JCLElBQU1FLE9BQU9DLGFBQUksQ0FBQ0MsK0JBQStCLENBQUN0QixRQUFRRyxVQUFVYztvQkFFcEUxQixZQUFZZ0MsT0FBTyxDQUFDSDtvQkFFcEI1QixlQUFlLElBQUk7Z0JBQ3JCLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFJQSxjQUFjO1FBQ2hCRCxZQUFZaUMsSUFBSSxDQUFDbEMsVUFBVSxBQUFDLGlCQUE2QixPQUFiSSxjQUFhO0lBQzNELENBQUM7SUFFRCxPQUFPRjtBQUNUIn0=