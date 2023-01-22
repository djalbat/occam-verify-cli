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
var _string = require("../utilities/string");
var _query = require("../utilities/query");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var labelNodesQuery = (0, _query.nodesQuery)("/rule/label"), premisesNodeQuery = (0, _query.nodesQuery)("/rule/premise"), ruleProofNodeQuery = (0, _query.nodeQuery)("/rule/ruleProof!"), conclusionNodeQuery = (0, _query.nodeQuery)("/rule/conclusion!");
function verifyRule(ruleNode, fileContext) {
    var ruleVerified = false;
    fileContext.begin(ruleNode);
    var labelNodes = labelNodesQuery(ruleNode), labelsString = fileContext.nodesAsString(labelNodes), metaProofContext = _metaproof.default.fromFileContext(fileContext);
    fileContext.debug("Verifying the '".concat(labelsString, "' rule..."));
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
        fileContext.info("Verified the '".concat(labelsString, "' rule."));
    }
    ruleVerified ? fileContext.complete(ruleNode) : fileContext.complete(ruleNode);
    return ruleVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCB2ZXJpZnlMYWJlbHMgZnJvbSBcIi4uL3ZlcmlmeS9sYWJlbHNcIjtcbmltcG9ydCB2ZXJpZnlQcmVtaXNlIGZyb20gXCIuLi92ZXJpZnkvcHJlbWlzZVwiO1xuaW1wb3J0IHZlcmlmeVJ1bGVQcm9vZiBmcm9tIFwiLi4vdmVyaWZ5L3J1bGVQcm9vZlwiO1xuaW1wb3J0IE1ldGFwcm9vZkNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbWV0YXByb29mXCI7XG5pbXBvcnQgdmVyaWZ5Q29uY2x1c2lvbiBmcm9tIFwiLi4vdmVyaWZ5L2NvbmNsdXNpb25cIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2Rlc0FzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgbGFiZWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9ydWxlL2xhYmVsXCIpLFxuICAgICAgcHJlbWlzZXNOb2RlUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3J1bGUvcHJlbWlzZVwiKSxcbiAgICAgIHJ1bGVQcm9vZk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ydWxlL3J1bGVQcm9vZiFcIiksXG4gICAgICBjb25jbHVzaW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3J1bGUvY29uY2x1c2lvbiFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVJ1bGUocnVsZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCBydWxlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBmaWxlQ29udGV4dC5iZWdpbihydWxlTm9kZSk7XG5cbiAgY29uc3QgbGFiZWxOb2RlcyA9IGxhYmVsTm9kZXNRdWVyeShydWxlTm9kZSksXG4gICAgICAgIGxhYmVsc1N0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVzQXNTdHJpbmcobGFiZWxOb2RlcyksXG4gICAgICAgIG1ldGFQcm9vZkNvbnRleHQgPSBNZXRhcHJvb2ZDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCk7XG5cbiAgZmlsZUNvbnRleHQuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7bGFiZWxzU3RyaW5nfScgcnVsZS4uLmApO1xuXG4gIGNvbnN0IGxhYmVscyA9IFtdLFxuICAgICAgICBsYWJlbHNWZXJpZmllZCA9IHZlcmlmeUxhYmVscyhsYWJlbE5vZGVzLCBsYWJlbHMsIGZpbGVDb250ZXh0KTtcblxuICBpZiAobGFiZWxzVmVyaWZpZWQpIHtcbiAgICBjb25zdCBwcmVtaXNlcyA9IFtdLFxuICAgICAgICAgIHByZW1pc2VOb2RlcyA9IHByZW1pc2VzTm9kZVF1ZXJ5KHJ1bGVOb2RlKSxcbiAgICAgICAgICBwcmVtaXNlc1ZlcmlmaWVkID0gcHJlbWlzZU5vZGVzLmV2ZXJ5KChwcmVtaXNlTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJlbWlzZVZlcmlmaWVkID0gdmVyaWZ5UHJlbWlzZShwcmVtaXNlTm9kZSwgcHJlbWlzZXMsIG1ldGFQcm9vZkNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAocHJlbWlzZVZlcmlmaWVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKHByZW1pc2VzVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGNvbmNsdXNpb25zID0gW10sXG4gICAgICAgICAgICBjb25jbHVzaW9uTm9kZSA9IGNvbmNsdXNpb25Ob2RlUXVlcnkocnVsZU5vZGUpLFxuICAgICAgICAgICAgY29uY2x1c2lvblZlcmlmaWVkID0gdmVyaWZ5Q29uY2x1c2lvbihjb25jbHVzaW9uTm9kZSwgY29uY2x1c2lvbnMsIG1ldGFQcm9vZkNvbnRleHQpO1xuXG4gICAgICBpZiAoY29uY2x1c2lvblZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHJ1bGVQcm9vZk5vZGUgPSBydWxlUHJvb2ZOb2RlUXVlcnkocnVsZU5vZGUpLFxuICAgICAgICAgICAgICBmaXJzdENvbmNsdXNpb24gPSBmaXJzdChjb25jbHVzaW9ucyksXG4gICAgICAgICAgICAgIGNvbmNsdXNpb24gPSBmaXJzdENvbmNsdXNpb247IC8vL1xuXG4gICAgICAgIGxldCBydWxlUHJvb2ZWZXJpZmllZCA9IHRydWU7IC8vL1xuXG4gICAgICAgIGlmIChydWxlUHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgcnVsZVByb29mVmVyaWZpZWQgPSB2ZXJpZnlSdWxlUHJvb2YocnVsZVByb29mTm9kZSwgY29uY2x1c2lvbiwgbWV0YVByb29mQ29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocnVsZVByb29mVmVyaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCBydWxlID0gUnVsZS5mcm9tTGFiZWxzUHJlbWlzZXNBbmRDb25jbHVzaW9uKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pO1xuXG4gICAgICAgICAgZmlsZUNvbnRleHQuYWRkUnVsZShydWxlKTtcblxuICAgICAgICAgIHJ1bGVWZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAocnVsZVZlcmlmaWVkKSB7XG4gICAgZmlsZUNvbnRleHQuaW5mbyhgVmVyaWZpZWQgdGhlICcke2xhYmVsc1N0cmluZ30nIHJ1bGUuYCk7XG4gIH1cblxuICBydWxlVmVyaWZpZWQgP1xuICAgIGZpbGVDb250ZXh0LmNvbXBsZXRlKHJ1bGVOb2RlKSA6XG4gICAgICBmaWxlQ29udGV4dC5jb21wbGV0ZShydWxlTm9kZSk7XG5cbiAgcmV0dXJuIHJ1bGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlSdWxlIiwibGFiZWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInByZW1pc2VzTm9kZVF1ZXJ5IiwicnVsZVByb29mTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiY29uY2x1c2lvbk5vZGVRdWVyeSIsInJ1bGVOb2RlIiwiZmlsZUNvbnRleHQiLCJydWxlVmVyaWZpZWQiLCJiZWdpbiIsImxhYmVsTm9kZXMiLCJsYWJlbHNTdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwibWV0YVByb29mQ29udGV4dCIsIk1ldGFwcm9vZkNvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJkZWJ1ZyIsImxhYmVscyIsImxhYmVsc1ZlcmlmaWVkIiwidmVyaWZ5TGFiZWxzIiwicHJlbWlzZXMiLCJwcmVtaXNlTm9kZXMiLCJwcmVtaXNlc1ZlcmlmaWVkIiwiZXZlcnkiLCJwcmVtaXNlTm9kZSIsInByZW1pc2VWZXJpZmllZCIsInZlcmlmeVByZW1pc2UiLCJjb25jbHVzaW9ucyIsImNvbmNsdXNpb25Ob2RlIiwiY29uY2x1c2lvblZlcmlmaWVkIiwidmVyaWZ5Q29uY2x1c2lvbiIsInJ1bGVQcm9vZk5vZGUiLCJmaXJzdENvbmNsdXNpb24iLCJmaXJzdCIsImNvbmNsdXNpb24iLCJydWxlUHJvb2ZWZXJpZmllZCIsInZlcmlmeVJ1bGVQcm9vZiIsInJ1bGUiLCJSdWxlIiwiZnJvbUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbiIsImFkZFJ1bGUiLCJpbmZvIiwiY29tcGxldGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWtCQTs7O2VBQXdCQTs7O3lEQWhCUDsyREFDUTs0REFDQzs4REFDRTs4REFDQzsrREFDQTtxQkFFUDtzQkFDUTtxQkFDUTs7Ozs7O0FBRXRDLElBQU1DLGtCQUFrQkMsSUFBQUEsaUJBQVUsRUFBQyxnQkFDN0JDLG9CQUFvQkQsSUFBQUEsaUJBQVUsRUFBQyxrQkFDL0JFLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQyxxQkFDL0JDLHNCQUFzQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUV2QixTQUFTTCxXQUFXTyxRQUFRLEVBQUVDLFdBQVcsRUFBRTtJQUN4RCxJQUFJQyxlQUFlLEtBQUs7SUFFeEJELFlBQVlFLEtBQUssQ0FBQ0g7SUFFbEIsSUFBTUksYUFBYVYsZ0JBQWdCTSxXQUM3QkssZUFBZUosWUFBWUssYUFBYSxDQUFDRixhQUN6Q0csbUJBQW1CQyxrQkFBZ0IsQ0FBQ0MsZUFBZSxDQUFDUjtJQUUxREEsWUFBWVMsS0FBSyxDQUFDLEFBQUMsa0JBQThCLE9BQWJMLGNBQWE7SUFFakQsSUFBTU0sU0FBUyxFQUFFLEVBQ1hDLGlCQUFpQkMsSUFBQUEsZUFBWSxFQUFDVCxZQUFZTyxRQUFRVjtJQUV4RCxJQUFJVyxnQkFBZ0I7UUFDbEIsSUFBTUUsV0FBVyxFQUFFLEVBQ2JDLGVBQWVuQixrQkFBa0JJLFdBQ2pDZ0IsbUJBQW1CRCxhQUFhRSxLQUFLLENBQUMsU0FBQ0MsYUFBZ0I7WUFDckQsSUFBTUMsa0JBQWtCQyxJQUFBQSxnQkFBYSxFQUFDRixhQUFhSixVQUFVUDtZQUU3RCxJQUFJWSxpQkFBaUI7Z0JBQ25CLE9BQU8sSUFBSTtZQUNiLENBQUM7UUFDSDtRQUVOLElBQUlILGtCQUFrQjtZQUNwQixJQUFNSyxjQUFjLEVBQUUsRUFDaEJDLGlCQUFpQnZCLG9CQUFvQkMsV0FDckN1QixxQkFBcUJDLElBQUFBLG1CQUFnQixFQUFDRixnQkFBZ0JELGFBQWFkO1lBRXpFLElBQUlnQixvQkFBb0I7Z0JBQ3RCLElBQU1FLGdCQUFnQjVCLG1CQUFtQkcsV0FDbkMwQixrQkFBa0JDLElBQUFBLFlBQUssRUFBQ04sY0FDeEJPLGFBQWFGLGlCQUFpQixHQUFHO2dCQUV2QyxJQUFJRyxvQkFBb0IsSUFBSSxFQUFFLEdBQUc7Z0JBRWpDLElBQUlKLGtCQUFrQixJQUFJLEVBQUU7b0JBQzFCSSxvQkFBb0JDLElBQUFBLGtCQUFlLEVBQUNMLGVBQWVHLFlBQVlyQjtnQkFDakUsQ0FBQztnQkFFRCxJQUFJc0IsbUJBQW1CO29CQUNyQixJQUFNRSxPQUFPQyxhQUFJLENBQUNDLCtCQUErQixDQUFDdEIsUUFBUUcsVUFBVWM7b0JBRXBFM0IsWUFBWWlDLE9BQU8sQ0FBQ0g7b0JBRXBCN0IsZUFBZSxJQUFJO2dCQUNyQixDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBSUEsY0FBYztRQUNoQkQsWUFBWWtDLElBQUksQ0FBQyxBQUFDLGlCQUE2QixPQUFiOUIsY0FBYTtJQUNqRCxDQUFDO0lBRURILGVBQ0VELFlBQVltQyxRQUFRLENBQUNwQyxZQUNuQkMsWUFBWW1DLFFBQVEsQ0FBQ3BDLFNBQVM7SUFFbEMsT0FBT0U7QUFDVCJ9