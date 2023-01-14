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
var _metaproof = /*#__PURE__*/ _interopRequireDefault(require("../verify/metaproof"));
var _metaproof1 = /*#__PURE__*/ _interopRequireDefault(require("../context/metaproof"));
var _conclusion = /*#__PURE__*/ _interopRequireDefault(require("../verify/conclusion"));
var _array = require("../utilities/array");
var _string = require("../utilities/string");
var _query = require("../utilities/query");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var labelNodesQuery = (0, _query.nodesQuery)("/rule/label"), premisesNodeQuery = (0, _query.nodesQuery)("/rule/premise"), metaproofNodeQuery = (0, _query.nodeQuery)("/rule/metaproof!"), conclusionNodeQuery = (0, _query.nodeQuery)("/rule/conclusion!");
function verifyRule(ruleNode, fileContext) {
    var ruleVerified = false;
    fileContext.begin(ruleNode);
    var labelNodes = labelNodesQuery(ruleNode), labelsString = (0, _string.nodesAsString)(labelNodes), metaproofContext = _metaproof1.default.fromFileContext(fileContext);
    fileContext.debug("Verifying the '".concat(labelsString, "' rule..."));
    var labels = [], labelsVerified = (0, _labels.default)(labelNodes, labels, fileContext);
    if (labelsVerified) {
        var premises = [], premiseNodes = premisesNodeQuery(ruleNode), premisesVerified = premiseNodes.every(function(premiseNode) {
            var premiseVerified = (0, _premise.default)(premiseNode, premises, metaproofContext);
            if (premiseVerified) {
                return true;
            }
        });
        if (premisesVerified) {
            var conclusions = [], conclusionNode = conclusionNodeQuery(ruleNode), conclusionVerified = (0, _conclusion.default)(conclusionNode, conclusions, metaproofContext);
            if (conclusionVerified) {
                var metaproofNode = metaproofNodeQuery(ruleNode), firstConclusion = (0, _array.first)(conclusions), conclusion = firstConclusion; ///
                var metaproofVerified = true; ///
                if (metaproofNode !== null) {
                    metaproofVerified = (0, _metaproof.default)(metaproofNode, conclusion, metaproofContext);
                }
                if (metaproofVerified) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCB2ZXJpZnlMYWJlbHMgZnJvbSBcIi4uL3ZlcmlmeS9sYWJlbHNcIjtcbmltcG9ydCB2ZXJpZnlQcmVtaXNlIGZyb20gXCIuLi92ZXJpZnkvcHJlbWlzZVwiO1xuaW1wb3J0IHZlcmlmeU1ldGFwcm9vZiBmcm9tIFwiLi4vdmVyaWZ5L21ldGFwcm9vZlwiO1xuaW1wb3J0IE1ldGFwcm9vZkNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbWV0YXByb29mXCI7XG5pbXBvcnQgdmVyaWZ5Q29uY2x1c2lvbiBmcm9tIFwiLi4vdmVyaWZ5L2NvbmNsdXNpb25cIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2Rlc0FzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgbGFiZWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9ydWxlL2xhYmVsXCIpLFxuICAgICAgcHJlbWlzZXNOb2RlUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3J1bGUvcHJlbWlzZVwiKSxcbiAgICAgIG1ldGFwcm9vZk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ydWxlL21ldGFwcm9vZiFcIiksXG4gICAgICBjb25jbHVzaW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3J1bGUvY29uY2x1c2lvbiFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVJ1bGUocnVsZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCBydWxlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBmaWxlQ29udGV4dC5iZWdpbihydWxlTm9kZSk7XG5cbiAgY29uc3QgbGFiZWxOb2RlcyA9IGxhYmVsTm9kZXNRdWVyeShydWxlTm9kZSksXG4gICAgICAgIGxhYmVsc1N0cmluZyA9IG5vZGVzQXNTdHJpbmcobGFiZWxOb2RlcyksXG4gICAgICAgIG1ldGFwcm9vZkNvbnRleHQgPSBNZXRhcHJvb2ZDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCk7XG5cbiAgZmlsZUNvbnRleHQuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7bGFiZWxzU3RyaW5nfScgcnVsZS4uLmApO1xuXG4gIGNvbnN0IGxhYmVscyA9IFtdLFxuICAgICAgICBsYWJlbHNWZXJpZmllZCA9IHZlcmlmeUxhYmVscyhsYWJlbE5vZGVzLCBsYWJlbHMsIGZpbGVDb250ZXh0KTtcblxuICBpZiAobGFiZWxzVmVyaWZpZWQpIHtcbiAgICBjb25zdCBwcmVtaXNlcyA9IFtdLFxuICAgICAgICAgIHByZW1pc2VOb2RlcyA9IHByZW1pc2VzTm9kZVF1ZXJ5KHJ1bGVOb2RlKSxcbiAgICAgICAgICBwcmVtaXNlc1ZlcmlmaWVkID0gcHJlbWlzZU5vZGVzLmV2ZXJ5KChwcmVtaXNlTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJlbWlzZVZlcmlmaWVkID0gdmVyaWZ5UHJlbWlzZShwcmVtaXNlTm9kZSwgcHJlbWlzZXMsIG1ldGFwcm9vZkNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAocHJlbWlzZVZlcmlmaWVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKHByZW1pc2VzVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGNvbmNsdXNpb25zID0gW10sXG4gICAgICAgICAgICBjb25jbHVzaW9uTm9kZSA9IGNvbmNsdXNpb25Ob2RlUXVlcnkocnVsZU5vZGUpLFxuICAgICAgICAgICAgY29uY2x1c2lvblZlcmlmaWVkID0gdmVyaWZ5Q29uY2x1c2lvbihjb25jbHVzaW9uTm9kZSwgY29uY2x1c2lvbnMsIG1ldGFwcm9vZkNvbnRleHQpO1xuXG4gICAgICBpZiAoY29uY2x1c2lvblZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IG1ldGFwcm9vZk5vZGUgPSBtZXRhcHJvb2ZOb2RlUXVlcnkocnVsZU5vZGUpLFxuICAgICAgICAgICAgICBmaXJzdENvbmNsdXNpb24gPSBmaXJzdChjb25jbHVzaW9ucyksXG4gICAgICAgICAgICAgIGNvbmNsdXNpb24gPSBmaXJzdENvbmNsdXNpb247IC8vL1xuXG4gICAgICAgIGxldCBtZXRhcHJvb2ZWZXJpZmllZCA9IHRydWU7IC8vL1xuXG4gICAgICAgIGlmIChtZXRhcHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgbWV0YXByb29mVmVyaWZpZWQgPSB2ZXJpZnlNZXRhcHJvb2YobWV0YXByb29mTm9kZSwgY29uY2x1c2lvbiwgbWV0YXByb29mQ29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWV0YXByb29mVmVyaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCBydWxlID0gUnVsZS5mcm9tTGFiZWxzUHJlbWlzZXNBbmRDb25jbHVzaW9uKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pO1xuXG4gICAgICAgICAgZmlsZUNvbnRleHQuYWRkUnVsZShydWxlKTtcblxuICAgICAgICAgIHJ1bGVWZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAocnVsZVZlcmlmaWVkKSB7XG4gICAgZmlsZUNvbnRleHQuaW5mbyhgVmVyaWZpZWQgdGhlICcke2xhYmVsc1N0cmluZ30nIHJ1bGUuYCk7XG4gIH1cblxuICBydWxlVmVyaWZpZWQgP1xuICAgIGZpbGVDb250ZXh0LmNvbXBsZXRlKHJ1bGVOb2RlKSA6XG4gICAgICBmaWxlQ29udGV4dC5jb21wbGV0ZShydWxlTm9kZSk7XG5cbiAgcmV0dXJuIHJ1bGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlSdWxlIiwibGFiZWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInByZW1pc2VzTm9kZVF1ZXJ5IiwibWV0YXByb29mTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiY29uY2x1c2lvbk5vZGVRdWVyeSIsInJ1bGVOb2RlIiwiZmlsZUNvbnRleHQiLCJydWxlVmVyaWZpZWQiLCJiZWdpbiIsImxhYmVsTm9kZXMiLCJsYWJlbHNTdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwibWV0YXByb29mQ29udGV4dCIsIk1ldGFwcm9vZkNvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJkZWJ1ZyIsImxhYmVscyIsImxhYmVsc1ZlcmlmaWVkIiwidmVyaWZ5TGFiZWxzIiwicHJlbWlzZXMiLCJwcmVtaXNlTm9kZXMiLCJwcmVtaXNlc1ZlcmlmaWVkIiwiZXZlcnkiLCJwcmVtaXNlTm9kZSIsInByZW1pc2VWZXJpZmllZCIsInZlcmlmeVByZW1pc2UiLCJjb25jbHVzaW9ucyIsImNvbmNsdXNpb25Ob2RlIiwiY29uY2x1c2lvblZlcmlmaWVkIiwidmVyaWZ5Q29uY2x1c2lvbiIsIm1ldGFwcm9vZk5vZGUiLCJmaXJzdENvbmNsdXNpb24iLCJmaXJzdCIsImNvbmNsdXNpb24iLCJtZXRhcHJvb2ZWZXJpZmllZCIsInZlcmlmeU1ldGFwcm9vZiIsInJ1bGUiLCJSdWxlIiwiZnJvbUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbiIsImFkZFJ1bGUiLCJpbmZvIiwiY29tcGxldGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWtCQTs7O2VBQXdCQTs7O3lEQWhCUDsyREFDUTs0REFDQzs4REFDRTsrREFDQzsrREFDQTtxQkFFUDtzQkFDUTtxQkFDUTs7Ozs7O0FBRXRDLElBQU1DLGtCQUFrQkMsSUFBQUEsaUJBQVUsRUFBQyxnQkFDN0JDLG9CQUFvQkQsSUFBQUEsaUJBQVUsRUFBQyxrQkFDL0JFLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQyxxQkFDL0JDLHNCQUFzQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUV2QixTQUFTTCxXQUFXTyxRQUFRLEVBQUVDLFdBQVcsRUFBRTtJQUN4RCxJQUFJQyxlQUFlLEtBQUs7SUFFeEJELFlBQVlFLEtBQUssQ0FBQ0g7SUFFbEIsSUFBTUksYUFBYVYsZ0JBQWdCTSxXQUM3QkssZUFBZUMsSUFBQUEscUJBQWEsRUFBQ0YsYUFDN0JHLG1CQUFtQkMsbUJBQWdCLENBQUNDLGVBQWUsQ0FBQ1I7SUFFMURBLFlBQVlTLEtBQUssQ0FBQyxBQUFDLGtCQUE4QixPQUFiTCxjQUFhO0lBRWpELElBQU1NLFNBQVMsRUFBRSxFQUNYQyxpQkFBaUJDLElBQUFBLGVBQVksRUFBQ1QsWUFBWU8sUUFBUVY7SUFFeEQsSUFBSVcsZ0JBQWdCO1FBQ2xCLElBQU1FLFdBQVcsRUFBRSxFQUNiQyxlQUFlbkIsa0JBQWtCSSxXQUNqQ2dCLG1CQUFtQkQsYUFBYUUsS0FBSyxDQUFDLFNBQUNDLGFBQWdCO1lBQ3JELElBQU1DLGtCQUFrQkMsSUFBQUEsZ0JBQWEsRUFBQ0YsYUFBYUosVUFBVVA7WUFFN0QsSUFBSVksaUJBQWlCO2dCQUNuQixPQUFPLElBQUk7WUFDYixDQUFDO1FBQ0g7UUFFTixJQUFJSCxrQkFBa0I7WUFDcEIsSUFBTUssY0FBYyxFQUFFLEVBQ2hCQyxpQkFBaUJ2QixvQkFBb0JDLFdBQ3JDdUIscUJBQXFCQyxJQUFBQSxtQkFBZ0IsRUFBQ0YsZ0JBQWdCRCxhQUFhZDtZQUV6RSxJQUFJZ0Isb0JBQW9CO2dCQUN0QixJQUFNRSxnQkFBZ0I1QixtQkFBbUJHLFdBQ25DMEIsa0JBQWtCQyxJQUFBQSxZQUFLLEVBQUNOLGNBQ3hCTyxhQUFhRixpQkFBaUIsR0FBRztnQkFFdkMsSUFBSUcsb0JBQW9CLElBQUksRUFBRSxHQUFHO2dCQUVqQyxJQUFJSixrQkFBa0IsSUFBSSxFQUFFO29CQUMxQkksb0JBQW9CQyxJQUFBQSxrQkFBZSxFQUFDTCxlQUFlRyxZQUFZckI7Z0JBQ2pFLENBQUM7Z0JBRUQsSUFBSXNCLG1CQUFtQjtvQkFDckIsSUFBTUUsT0FBT0MsYUFBSSxDQUFDQywrQkFBK0IsQ0FBQ3RCLFFBQVFHLFVBQVVjO29CQUVwRTNCLFlBQVlpQyxPQUFPLENBQUNIO29CQUVwQjdCLGVBQWUsSUFBSTtnQkFDckIsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQUlBLGNBQWM7UUFDaEJELFlBQVlrQyxJQUFJLENBQUMsQUFBQyxpQkFBNkIsT0FBYjlCLGNBQWE7SUFDakQsQ0FBQztJQUVESCxlQUNFRCxZQUFZbUMsUUFBUSxDQUFDcEMsWUFDbkJDLFlBQVltQyxRQUFRLENBQUNwQyxTQUFTO0lBRWxDLE9BQU9FO0FBQ1QifQ==