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
var labelNodesQuery = (0, _query.nodesQuery)("/rule/labels/label"), premisesNodeQuery = (0, _query.nodesQuery)("/rule/premise"), ruleProofNodeQuery = (0, _query.nodeQuery)("/rule/ruleProof!"), conclusionNodeQuery = (0, _query.nodeQuery)("/rule/conclusion!");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCB2ZXJpZnlMYWJlbHMgZnJvbSBcIi4uL3ZlcmlmeS9sYWJlbHNcIjtcbmltcG9ydCB2ZXJpZnlQcmVtaXNlcyBmcm9tIFwiLi4vdmVyaWZ5L3ByZW1pc2VzXCI7XG5pbXBvcnQgdmVyaWZ5UnVsZVByb29mIGZyb20gXCIuLi92ZXJpZnkvcnVsZVByb29mXCI7XG5pbXBvcnQgTG9jYWxNZXRhQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbE1ldGFcIjtcbmltcG9ydCB2ZXJpZnlDb25jbHVzaW9uIGZyb20gXCIuLi92ZXJpZnkvY29uY2x1c2lvblwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgbGFiZWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9ydWxlL2xhYmVscy9sYWJlbFwiKSxcbiAgICAgIHByZW1pc2VzTm9kZVF1ZXJ5ID0gbm9kZXNRdWVyeShcIi9ydWxlL3ByZW1pc2VcIiksXG4gICAgICBydWxlUHJvb2ZOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcnVsZS9ydWxlUHJvb2YhXCIpLFxuICAgICAgY29uY2x1c2lvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ydWxlL2NvbmNsdXNpb24hXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlSdWxlKHJ1bGVOb2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgcnVsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgbGFiZWxOb2RlcyA9IGxhYmVsTm9kZXNRdWVyeShydWxlTm9kZSksXG4gICAgICAgIGxhYmVsc1N0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVzQXNTdHJpbmcobGFiZWxOb2RlcyksXG4gICAgICAgIGxvY2FsTWV0YUNvbnRleHQgPSBMb2NhbE1ldGFDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCk7XG5cbiAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bGFiZWxzU3RyaW5nfScgcnVsZS4uLmAsIHJ1bGVOb2RlKTtcblxuICBjb25zdCBsYWJlbHMgPSBbXSxcbiAgICAgICAgbGFiZWxzVmVyaWZpZWQgPSB2ZXJpZnlMYWJlbHMobGFiZWxOb2RlcywgbGFiZWxzLCBmaWxlQ29udGV4dCk7XG5cbiAgaWYgKGxhYmVsc1ZlcmlmaWVkKSB7XG4gICAgY29uc3QgcHJlbWlzZXMgPSBbXSxcbiAgICAgICAgICBwcmVtaXNlTm9kZXMgPSBwcmVtaXNlc05vZGVRdWVyeShydWxlTm9kZSksXG4gICAgICAgICAgcHJlbWlzZXNWZXJpZmllZCA9IHZlcmlmeVByZW1pc2VzKHByZW1pc2VOb2RlcywgcHJlbWlzZXMsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgaWYgKHByZW1pc2VzVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGNvbmNsdXNpb25zID0gW10sXG4gICAgICAgICAgICBjb25jbHVzaW9uTm9kZSA9IGNvbmNsdXNpb25Ob2RlUXVlcnkocnVsZU5vZGUpLFxuICAgICAgICAgICAgY29uY2x1c2lvblZlcmlmaWVkID0gdmVyaWZ5Q29uY2x1c2lvbihjb25jbHVzaW9uTm9kZSwgY29uY2x1c2lvbnMsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgICBpZiAoY29uY2x1c2lvblZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHJ1bGVQcm9vZk5vZGUgPSBydWxlUHJvb2ZOb2RlUXVlcnkocnVsZU5vZGUpLFxuICAgICAgICAgICAgICBmaXJzdENvbmNsdXNpb24gPSBmaXJzdChjb25jbHVzaW9ucyksXG4gICAgICAgICAgICAgIGNvbmNsdXNpb24gPSBmaXJzdENvbmNsdXNpb247IC8vL1xuXG4gICAgICAgIGxldCBydWxlUHJvb2ZWZXJpZmllZCA9IHRydWU7IC8vL1xuXG4gICAgICAgIGlmIChydWxlUHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgcnVsZVByb29mVmVyaWZpZWQgPSB2ZXJpZnlSdWxlUHJvb2YocnVsZVByb29mTm9kZSwgY29uY2x1c2lvbiwgbG9jYWxNZXRhQ29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocnVsZVByb29mVmVyaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCBydWxlID0gUnVsZS5mcm9tTGFiZWxzUHJlbWlzZXNDb25jbHVzaW9uQW5kRmlsZUNvbnRleHQobGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgZmlsZUNvbnRleHQuYWRkUnVsZShydWxlKTtcblxuICAgICAgICAgIHJ1bGVWZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAocnVsZVZlcmlmaWVkKSB7XG4gICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtsYWJlbHNTdHJpbmd9JyBydWxlLmAsIHJ1bGVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBydWxlVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5UnVsZSIsImxhYmVsTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJwcmVtaXNlc05vZGVRdWVyeSIsInJ1bGVQcm9vZk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImNvbmNsdXNpb25Ob2RlUXVlcnkiLCJydWxlTm9kZSIsImZpbGVDb250ZXh0IiwicnVsZVZlcmlmaWVkIiwibGFiZWxOb2RlcyIsImxhYmVsc1N0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJsb2NhbE1ldGFDb250ZXh0IiwiTG9jYWxNZXRhQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsInRyYWNlIiwibGFiZWxzIiwibGFiZWxzVmVyaWZpZWQiLCJ2ZXJpZnlMYWJlbHMiLCJwcmVtaXNlcyIsInByZW1pc2VOb2RlcyIsInByZW1pc2VzVmVyaWZpZWQiLCJ2ZXJpZnlQcmVtaXNlcyIsImNvbmNsdXNpb25zIiwiY29uY2x1c2lvbk5vZGUiLCJjb25jbHVzaW9uVmVyaWZpZWQiLCJ2ZXJpZnlDb25jbHVzaW9uIiwicnVsZVByb29mTm9kZSIsImZpcnN0Q29uY2x1c2lvbiIsImZpcnN0IiwiY29uY2x1c2lvbiIsInJ1bGVQcm9vZlZlcmlmaWVkIiwidmVyaWZ5UnVsZVByb29mIiwicnVsZSIsIlJ1bGUiLCJmcm9tTGFiZWxzUHJlbWlzZXNDb25jbHVzaW9uQW5kRmlsZUNvbnRleHQiLCJhZGRSdWxlIiwiZGVidWciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWlCQTs7O2VBQXdCQTs7OzJEQWZQOzZEQUNROytEQUNFO2dFQUNDO2dFQUNDO2lFQUNBO3FCQUVQO3FCQUNnQjs7Ozs7O0FBRXRDLElBQU1DLGtCQUFrQkMsSUFBQUEsaUJBQVUsRUFBQyx1QkFDN0JDLG9CQUFvQkQsSUFBQUEsaUJBQVUsRUFBQyxrQkFDL0JFLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQyxxQkFDL0JDLHNCQUFzQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUV2QixTQUFTTCxXQUFXTyxRQUFRLEVBQUVDLFdBQVc7SUFDdEQsSUFBSUMsZUFBZTtJQUVuQixJQUFNQyxhQUFhVCxnQkFBZ0JNLFdBQzdCSSxlQUFlSCxZQUFZSSxhQUFhLENBQUNGLGFBQ3pDRyxtQkFBbUJDLGtCQUFnQixDQUFDQyxlQUFlLENBQUNQO0lBRTFEQSxZQUFZUSxLQUFLLENBQUMsQUFBQyxrQkFBOEIsT0FBYkwsY0FBYSxjQUFZSjtJQUU3RCxJQUFNVSxTQUFTLEVBQUUsRUFDWEMsaUJBQWlCQyxJQUFBQSxlQUFZLEVBQUNULFlBQVlPLFFBQVFUO0lBRXhELElBQUlVLGdCQUFnQjtRQUNsQixJQUFNRSxXQUFXLEVBQUUsRUFDYkMsZUFBZWxCLGtCQUFrQkksV0FDakNlLG1CQUFtQkMsSUFBQUEsaUJBQWMsRUFBQ0YsY0FBY0QsVUFBVVA7UUFFaEUsSUFBSVMsa0JBQWtCO1lBQ3BCLElBQU1FLGNBQWMsRUFBRSxFQUNoQkMsaUJBQWlCbkIsb0JBQW9CQyxXQUNyQ21CLHFCQUFxQkMsSUFBQUEsbUJBQWdCLEVBQUNGLGdCQUFnQkQsYUFBYVg7WUFFekUsSUFBSWEsb0JBQW9CO2dCQUN0QixJQUFNRSxnQkFBZ0J4QixtQkFBbUJHLFdBQ25Dc0Isa0JBQWtCQyxJQUFBQSxZQUFLLEVBQUNOLGNBQ3hCTyxhQUFhRixpQkFBaUIsR0FBRztnQkFFdkMsSUFBSUcsb0JBQW9CLE1BQU0sR0FBRztnQkFFakMsSUFBSUosa0JBQWtCLE1BQU07b0JBQzFCSSxvQkFBb0JDLElBQUFBLGtCQUFlLEVBQUNMLGVBQWVHLFlBQVlsQjtnQkFDakU7Z0JBRUEsSUFBSW1CLG1CQUFtQjtvQkFDckIsSUFBTUUsT0FBT0MsYUFBSSxDQUFDQywwQ0FBMEMsQ0FBQ25CLFFBQVFHLFVBQVVXLFlBQVl2QjtvQkFFM0ZBLFlBQVk2QixPQUFPLENBQUNIO29CQUVwQnpCLGVBQWU7Z0JBQ2pCO1lBQ0Y7UUFDRjtJQUNGO0lBRUEsSUFBSUEsY0FBYztRQUNoQkQsWUFBWThCLEtBQUssQ0FBQyxBQUFDLG9CQUFnQyxPQUFiM0IsY0FBYSxZQUFVSjtJQUMvRDtJQUVBLE9BQU9FO0FBQ1QifQ==