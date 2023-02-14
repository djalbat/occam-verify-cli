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
                    ruleProofVerified = (0, _ruleProof.default)(ruleProofNode, conclusion, assignments, metaProofContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCB2ZXJpZnlMYWJlbHMgZnJvbSBcIi4uL3ZlcmlmeS9sYWJlbHNcIjtcbmltcG9ydCB2ZXJpZnlQcmVtaXNlIGZyb20gXCIuLi92ZXJpZnkvcHJlbWlzZVwiO1xuaW1wb3J0IHZlcmlmeVJ1bGVQcm9vZiBmcm9tIFwiLi4vdmVyaWZ5L3J1bGVQcm9vZlwiO1xuaW1wb3J0IE1ldGFwcm9vZkNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbWV0YXByb29mXCI7XG5pbXBvcnQgdmVyaWZ5Q29uY2x1c2lvbiBmcm9tIFwiLi4vdmVyaWZ5L2NvbmNsdXNpb25cIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGxhYmVsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcnVsZS9sYWJlbFwiKSxcbiAgICAgIHByZW1pc2VzTm9kZVF1ZXJ5ID0gbm9kZXNRdWVyeShcIi9ydWxlL3ByZW1pc2VcIiksXG4gICAgICBydWxlUHJvb2ZOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcnVsZS9ydWxlUHJvb2YhXCIpLFxuICAgICAgY29uY2x1c2lvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ydWxlL2NvbmNsdXNpb24hXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlSdWxlKHJ1bGVOb2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgcnVsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgbGFiZWxOb2RlcyA9IGxhYmVsTm9kZXNRdWVyeShydWxlTm9kZSksXG4gICAgICAgIGxhYmVsc1N0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVzQXNTdHJpbmcobGFiZWxOb2RlcyksXG4gICAgICAgIG1ldGFQcm9vZkNvbnRleHQgPSBNZXRhcHJvb2ZDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCk7XG5cbiAgZmlsZUNvbnRleHQuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7bGFiZWxzU3RyaW5nfScgcnVsZS4uLmAsIHJ1bGVOb2RlKTtcblxuICBjb25zdCBsYWJlbHMgPSBbXSxcbiAgICAgICAgbGFiZWxzVmVyaWZpZWQgPSB2ZXJpZnlMYWJlbHMobGFiZWxOb2RlcywgbGFiZWxzLCBmaWxlQ29udGV4dCk7XG5cbiAgaWYgKGxhYmVsc1ZlcmlmaWVkKSB7XG4gICAgY29uc3QgcHJlbWlzZXMgPSBbXSxcbiAgICAgICAgICBwcmVtaXNlTm9kZXMgPSBwcmVtaXNlc05vZGVRdWVyeShydWxlTm9kZSksXG4gICAgICAgICAgcHJlbWlzZXNWZXJpZmllZCA9IHByZW1pc2VOb2Rlcy5ldmVyeSgocHJlbWlzZU5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByZW1pc2VWZXJpZmllZCA9IHZlcmlmeVByZW1pc2UocHJlbWlzZU5vZGUsIHByZW1pc2VzLCBtZXRhUHJvb2ZDb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHByZW1pc2VWZXJpZmllZCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmIChwcmVtaXNlc1ZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBjb25jbHVzaW9ucyA9IFtdLFxuICAgICAgICAgICAgY29uY2x1c2lvbk5vZGUgPSBjb25jbHVzaW9uTm9kZVF1ZXJ5KHJ1bGVOb2RlKSxcbiAgICAgICAgICAgIGNvbmNsdXNpb25WZXJpZmllZCA9IHZlcmlmeUNvbmNsdXNpb24oY29uY2x1c2lvbk5vZGUsIGNvbmNsdXNpb25zLCBtZXRhUHJvb2ZDb250ZXh0KTtcblxuICAgICAgaWYgKGNvbmNsdXNpb25WZXJpZmllZCkge1xuICAgICAgICBjb25zdCBydWxlUHJvb2ZOb2RlID0gcnVsZVByb29mTm9kZVF1ZXJ5KHJ1bGVOb2RlKSxcbiAgICAgICAgICAgICAgZmlyc3RDb25jbHVzaW9uID0gZmlyc3QoY29uY2x1c2lvbnMpLFxuICAgICAgICAgICAgICBjb25jbHVzaW9uID0gZmlyc3RDb25jbHVzaW9uOyAvLy9cblxuICAgICAgICBsZXQgcnVsZVByb29mVmVyaWZpZWQgPSB0cnVlOyAvLy9cblxuICAgICAgICBpZiAocnVsZVByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJ1bGVQcm9vZlZlcmlmaWVkID0gdmVyaWZ5UnVsZVByb29mKHJ1bGVQcm9vZk5vZGUsIGNvbmNsdXNpb24sIGFzc2lnbm1lbnRzLCBtZXRhUHJvb2ZDb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChydWxlUHJvb2ZWZXJpZmllZCkge1xuICAgICAgICAgIGNvbnN0IHJ1bGUgPSBSdWxlLmZyb21MYWJlbHNQcmVtaXNlc0NvbmNsdXNpb25BbmRGaWxlQ29udGV4dChsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICBmaWxlQ29udGV4dC5hZGRSdWxlKHJ1bGUpO1xuXG4gICAgICAgICAgcnVsZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChydWxlVmVyaWZpZWQpIHtcbiAgICBmaWxlQ29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7bGFiZWxzU3RyaW5nfScgcnVsZS5gLCBydWxlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gcnVsZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVJ1bGUiLCJsYWJlbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicHJlbWlzZXNOb2RlUXVlcnkiLCJydWxlUHJvb2ZOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJjb25jbHVzaW9uTm9kZVF1ZXJ5IiwicnVsZU5vZGUiLCJmaWxlQ29udGV4dCIsInJ1bGVWZXJpZmllZCIsImxhYmVsTm9kZXMiLCJsYWJlbHNTdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwibWV0YVByb29mQ29udGV4dCIsIk1ldGFwcm9vZkNvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJkZWJ1ZyIsImxhYmVscyIsImxhYmVsc1ZlcmlmaWVkIiwidmVyaWZ5TGFiZWxzIiwicHJlbWlzZXMiLCJwcmVtaXNlTm9kZXMiLCJwcmVtaXNlc1ZlcmlmaWVkIiwiZXZlcnkiLCJwcmVtaXNlTm9kZSIsInByZW1pc2VWZXJpZmllZCIsInZlcmlmeVByZW1pc2UiLCJjb25jbHVzaW9ucyIsImNvbmNsdXNpb25Ob2RlIiwiY29uY2x1c2lvblZlcmlmaWVkIiwidmVyaWZ5Q29uY2x1c2lvbiIsInJ1bGVQcm9vZk5vZGUiLCJmaXJzdENvbmNsdXNpb24iLCJmaXJzdCIsImNvbmNsdXNpb24iLCJydWxlUHJvb2ZWZXJpZmllZCIsInZlcmlmeVJ1bGVQcm9vZiIsImFzc2lnbm1lbnRzIiwicnVsZSIsIlJ1bGUiLCJmcm9tTGFiZWxzUHJlbWlzZXNDb25jbHVzaW9uQW5kRmlsZUNvbnRleHQiLCJhZGRSdWxlIiwiaW5mbyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUJBOzs7ZUFBd0JBOzs7eURBZlA7MkRBQ1E7NERBQ0M7OERBQ0U7OERBQ0M7K0RBQ0E7cUJBRVA7cUJBQ2dCOzs7Ozs7QUFFdEMsSUFBTUMsa0JBQWtCQyxJQUFBQSxpQkFBVSxFQUFDLGdCQUM3QkMsb0JBQW9CRCxJQUFBQSxpQkFBVSxFQUFDLGtCQUMvQkUscUJBQXFCQyxJQUFBQSxnQkFBUyxFQUFDLHFCQUMvQkMsc0JBQXNCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRXZCLFNBQVNMLFdBQVdPLFFBQVEsRUFBRUMsV0FBVyxFQUFFO0lBQ3hELElBQUlDLGVBQWUsS0FBSztJQUV4QixJQUFNQyxhQUFhVCxnQkFBZ0JNLFdBQzdCSSxlQUFlSCxZQUFZSSxhQUFhLENBQUNGLGFBQ3pDRyxtQkFBbUJDLGtCQUFnQixDQUFDQyxlQUFlLENBQUNQO0lBRTFEQSxZQUFZUSxLQUFLLENBQUMsQUFBQyxrQkFBOEIsT0FBYkwsY0FBYSxjQUFZSjtJQUU3RCxJQUFNVSxTQUFTLEVBQUUsRUFDWEMsaUJBQWlCQyxJQUFBQSxlQUFZLEVBQUNULFlBQVlPLFFBQVFUO0lBRXhELElBQUlVLGdCQUFnQjtRQUNsQixJQUFNRSxXQUFXLEVBQUUsRUFDYkMsZUFBZWxCLGtCQUFrQkksV0FDakNlLG1CQUFtQkQsYUFBYUUsS0FBSyxDQUFDLFNBQUNDLGFBQWdCO1lBQ3JELElBQU1DLGtCQUFrQkMsSUFBQUEsZ0JBQWEsRUFBQ0YsYUFBYUosVUFBVVA7WUFFN0QsSUFBSVksaUJBQWlCO2dCQUNuQixPQUFPLElBQUk7WUFDYixDQUFDO1FBQ0g7UUFFTixJQUFJSCxrQkFBa0I7WUFDcEIsSUFBTUssY0FBYyxFQUFFLEVBQ2hCQyxpQkFBaUJ0QixvQkFBb0JDLFdBQ3JDc0IscUJBQXFCQyxJQUFBQSxtQkFBZ0IsRUFBQ0YsZ0JBQWdCRCxhQUFhZDtZQUV6RSxJQUFJZ0Isb0JBQW9CO2dCQUN0QixJQUFNRSxnQkFBZ0IzQixtQkFBbUJHLFdBQ25DeUIsa0JBQWtCQyxJQUFBQSxZQUFLLEVBQUNOLGNBQ3hCTyxhQUFhRixpQkFBaUIsR0FBRztnQkFFdkMsSUFBSUcsb0JBQW9CLElBQUksRUFBRSxHQUFHO2dCQUVqQyxJQUFJSixrQkFBa0IsSUFBSSxFQUFFO29CQUMxQkksb0JBQW9CQyxJQUFBQSxrQkFBZSxFQUFDTCxlQUFlRyxZQUFZRyxhQUFheEI7Z0JBQzlFLENBQUM7Z0JBRUQsSUFBSXNCLG1CQUFtQjtvQkFDckIsSUFBTUcsT0FBT0MsYUFBSSxDQUFDQywwQ0FBMEMsQ0FBQ3ZCLFFBQVFHLFVBQVVjLFlBQVkxQjtvQkFFM0ZBLFlBQVlpQyxPQUFPLENBQUNIO29CQUVwQjdCLGVBQWUsSUFBSTtnQkFDckIsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQUlBLGNBQWM7UUFDaEJELFlBQVlrQyxJQUFJLENBQUMsQUFBQyxpQkFBNkIsT0FBYi9CLGNBQWEsWUFBVUo7SUFDM0QsQ0FBQztJQUVELE9BQU9FO0FBQ1QifQ==