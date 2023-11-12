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
var labelNodesQuery = (0, _query.nodesQuery)("/rule/labels/label"), premisesNodeQuery = (0, _query.nodesQuery)("/rule/premise"), ruleProofNodeQuery = (0, _query.nodeQuery)("/rule/ruleProof!"), conclusionNodeQuery = (0, _query.nodeQuery)("/rule/conclusion!");
function verifyRule(ruleNode, fileContext) {
    var ruleVerified = false;
    var labelNodes = labelNodesQuery(ruleNode), labelsString = fileContext.nodesAsString(labelNodes), metaProofContext = _metaproof.default.fromFileContext(fileContext);
    fileContext.debug("Verifying the '".concat(labelsString, "' rule."), ruleNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCB2ZXJpZnlMYWJlbHMgZnJvbSBcIi4uL3ZlcmlmeS9sYWJlbHNcIjtcbmltcG9ydCB2ZXJpZnlQcmVtaXNlIGZyb20gXCIuLi92ZXJpZnkvcHJlbWlzZVwiO1xuaW1wb3J0IHZlcmlmeVJ1bGVQcm9vZiBmcm9tIFwiLi4vdmVyaWZ5L3J1bGVQcm9vZlwiO1xuaW1wb3J0IE1ldGFwcm9vZkNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbWV0YXByb29mXCI7XG5pbXBvcnQgdmVyaWZ5Q29uY2x1c2lvbiBmcm9tIFwiLi4vdmVyaWZ5L2NvbmNsdXNpb25cIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGxhYmVsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcnVsZS9sYWJlbHMvbGFiZWxcIiksXG4gICAgICBwcmVtaXNlc05vZGVRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcnVsZS9wcmVtaXNlXCIpLFxuICAgICAgcnVsZVByb29mTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3J1bGUvcnVsZVByb29mIVwiKSxcbiAgICAgIGNvbmNsdXNpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcnVsZS9jb25jbHVzaW9uIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5UnVsZShydWxlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHJ1bGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGxhYmVsTm9kZXMgPSBsYWJlbE5vZGVzUXVlcnkocnVsZU5vZGUpLFxuICAgICAgICBsYWJlbHNTdHJpbmcgPSBmaWxlQ29udGV4dC5ub2Rlc0FzU3RyaW5nKGxhYmVsTm9kZXMpLFxuICAgICAgICBtZXRhUHJvb2ZDb250ZXh0ID0gTWV0YXByb29mQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpO1xuXG4gIGZpbGVDb250ZXh0LmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke2xhYmVsc1N0cmluZ30nIHJ1bGUuYCwgcnVsZU5vZGUpO1xuXG4gIGNvbnN0IGxhYmVscyA9IFtdLFxuICAgICAgICBsYWJlbHNWZXJpZmllZCA9IHZlcmlmeUxhYmVscyhsYWJlbE5vZGVzLCBsYWJlbHMsIGZpbGVDb250ZXh0KTtcblxuICBpZiAobGFiZWxzVmVyaWZpZWQpIHtcbiAgICBjb25zdCBwcmVtaXNlcyA9IFtdLFxuICAgICAgICAgIHByZW1pc2VOb2RlcyA9IHByZW1pc2VzTm9kZVF1ZXJ5KHJ1bGVOb2RlKSxcbiAgICAgICAgICBwcmVtaXNlc1ZlcmlmaWVkID0gcHJlbWlzZU5vZGVzLmV2ZXJ5KChwcmVtaXNlTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJlbWlzZVZlcmlmaWVkID0gdmVyaWZ5UHJlbWlzZShwcmVtaXNlTm9kZSwgcHJlbWlzZXMsIG1ldGFQcm9vZkNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAocHJlbWlzZVZlcmlmaWVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKHByZW1pc2VzVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGNvbmNsdXNpb25zID0gW10sXG4gICAgICAgICAgICBjb25jbHVzaW9uTm9kZSA9IGNvbmNsdXNpb25Ob2RlUXVlcnkocnVsZU5vZGUpLFxuICAgICAgICAgICAgY29uY2x1c2lvblZlcmlmaWVkID0gdmVyaWZ5Q29uY2x1c2lvbihjb25jbHVzaW9uTm9kZSwgY29uY2x1c2lvbnMsIG1ldGFQcm9vZkNvbnRleHQpO1xuXG4gICAgICBpZiAoY29uY2x1c2lvblZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHJ1bGVQcm9vZk5vZGUgPSBydWxlUHJvb2ZOb2RlUXVlcnkocnVsZU5vZGUpLFxuICAgICAgICAgICAgICBmaXJzdENvbmNsdXNpb24gPSBmaXJzdChjb25jbHVzaW9ucyksXG4gICAgICAgICAgICAgIGNvbmNsdXNpb24gPSBmaXJzdENvbmNsdXNpb247IC8vL1xuXG4gICAgICAgIGxldCBydWxlUHJvb2ZWZXJpZmllZCA9IHRydWU7IC8vL1xuXG4gICAgICAgIGlmIChydWxlUHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgcnVsZVByb29mVmVyaWZpZWQgPSB2ZXJpZnlSdWxlUHJvb2YocnVsZVByb29mTm9kZSwgY29uY2x1c2lvbiwgbWV0YVByb29mQ29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocnVsZVByb29mVmVyaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCBydWxlID0gUnVsZS5mcm9tTGFiZWxzUHJlbWlzZXNDb25jbHVzaW9uQW5kRmlsZUNvbnRleHQobGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgZmlsZUNvbnRleHQuYWRkUnVsZShydWxlKTtcblxuICAgICAgICAgIHJ1bGVWZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAocnVsZVZlcmlmaWVkKSB7XG4gICAgZmlsZUNvbnRleHQuaW5mbyhgVmVyaWZpZWQgdGhlICcke2xhYmVsc1N0cmluZ30nIHJ1bGUuYCwgcnVsZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHJ1bGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlSdWxlIiwibGFiZWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInByZW1pc2VzTm9kZVF1ZXJ5IiwicnVsZVByb29mTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiY29uY2x1c2lvbk5vZGVRdWVyeSIsInJ1bGVOb2RlIiwiZmlsZUNvbnRleHQiLCJydWxlVmVyaWZpZWQiLCJsYWJlbE5vZGVzIiwibGFiZWxzU3RyaW5nIiwibm9kZXNBc1N0cmluZyIsIm1ldGFQcm9vZkNvbnRleHQiLCJNZXRhcHJvb2ZDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiZGVidWciLCJsYWJlbHMiLCJsYWJlbHNWZXJpZmllZCIsInZlcmlmeUxhYmVscyIsInByZW1pc2VzIiwicHJlbWlzZU5vZGVzIiwicHJlbWlzZXNWZXJpZmllZCIsImV2ZXJ5IiwicHJlbWlzZU5vZGUiLCJwcmVtaXNlVmVyaWZpZWQiLCJ2ZXJpZnlQcmVtaXNlIiwiY29uY2x1c2lvbnMiLCJjb25jbHVzaW9uTm9kZSIsImNvbmNsdXNpb25WZXJpZmllZCIsInZlcmlmeUNvbmNsdXNpb24iLCJydWxlUHJvb2ZOb2RlIiwiZmlyc3RDb25jbHVzaW9uIiwiZmlyc3QiLCJjb25jbHVzaW9uIiwicnVsZVByb29mVmVyaWZpZWQiLCJ2ZXJpZnlSdWxlUHJvb2YiLCJydWxlIiwiUnVsZSIsImZyb21MYWJlbHNQcmVtaXNlc0NvbmNsdXNpb25BbmRGaWxlQ29udGV4dCIsImFkZFJ1bGUiLCJpbmZvIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpQkE7OztlQUF3QkE7OzsyREFmUDs2REFDUTs4REFDQztnRUFDRTtnRUFDQztpRUFDQTtxQkFFUDtxQkFDZ0I7Ozs7OztBQUV0QyxJQUFNQyxrQkFBa0JDLElBQUFBLGlCQUFVLEVBQUMsdUJBQzdCQyxvQkFBb0JELElBQUFBLGlCQUFVLEVBQUMsa0JBQy9CRSxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUMscUJBQy9CQyxzQkFBc0JELElBQUFBLGdCQUFTLEVBQUM7QUFFdkIsU0FBU0wsV0FBV08sUUFBUSxFQUFFQyxXQUFXO0lBQ3RELElBQUlDLGVBQWU7SUFFbkIsSUFBTUMsYUFBYVQsZ0JBQWdCTSxXQUM3QkksZUFBZUgsWUFBWUksYUFBYSxDQUFDRixhQUN6Q0csbUJBQW1CQyxrQkFBZ0IsQ0FBQ0MsZUFBZSxDQUFDUDtJQUUxREEsWUFBWVEsS0FBSyxDQUFDLEFBQUMsa0JBQThCLE9BQWJMLGNBQWEsWUFBVUo7SUFFM0QsSUFBTVUsU0FBUyxFQUFFLEVBQ1hDLGlCQUFpQkMsSUFBQUEsZUFBWSxFQUFDVCxZQUFZTyxRQUFRVDtJQUV4RCxJQUFJVSxnQkFBZ0I7UUFDbEIsSUFBTUUsV0FBVyxFQUFFLEVBQ2JDLGVBQWVsQixrQkFBa0JJLFdBQ2pDZSxtQkFBbUJELGFBQWFFLEtBQUssQ0FBQyxTQUFDQztZQUNyQyxJQUFNQyxrQkFBa0JDLElBQUFBLGdCQUFhLEVBQUNGLGFBQWFKLFVBQVVQO1lBRTdELElBQUlZLGlCQUFpQjtnQkFDbkIsT0FBTztZQUNUO1FBQ0Y7UUFFTixJQUFJSCxrQkFBa0I7WUFDcEIsSUFBTUssY0FBYyxFQUFFLEVBQ2hCQyxpQkFBaUJ0QixvQkFBb0JDLFdBQ3JDc0IscUJBQXFCQyxJQUFBQSxtQkFBZ0IsRUFBQ0YsZ0JBQWdCRCxhQUFhZDtZQUV6RSxJQUFJZ0Isb0JBQW9CO2dCQUN0QixJQUFNRSxnQkFBZ0IzQixtQkFBbUJHLFdBQ25DeUIsa0JBQWtCQyxJQUFBQSxZQUFLLEVBQUNOLGNBQ3hCTyxhQUFhRixpQkFBaUIsR0FBRztnQkFFdkMsSUFBSUcsb0JBQW9CLE1BQU0sR0FBRztnQkFFakMsSUFBSUosa0JBQWtCLE1BQU07b0JBQzFCSSxvQkFBb0JDLElBQUFBLGtCQUFlLEVBQUNMLGVBQWVHLFlBQVlyQjtnQkFDakU7Z0JBRUEsSUFBSXNCLG1CQUFtQjtvQkFDckIsSUFBTUUsT0FBT0MsYUFBSSxDQUFDQywwQ0FBMEMsQ0FBQ3RCLFFBQVFHLFVBQVVjLFlBQVkxQjtvQkFFM0ZBLFlBQVlnQyxPQUFPLENBQUNIO29CQUVwQjVCLGVBQWU7Z0JBQ2pCO1lBQ0Y7UUFDRjtJQUNGO0lBRUEsSUFBSUEsY0FBYztRQUNoQkQsWUFBWWlDLElBQUksQ0FBQyxBQUFDLGlCQUE2QixPQUFiOUIsY0FBYSxZQUFVSjtJQUMzRDtJQUVBLE9BQU9FO0FBQ1QifQ==