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
var labelNodesQuery = (0, _query.nodesQuery)("/rule//labels/label"), premisesNodeQuery = (0, _query.nodesQuery)("/rule/premise"), ruleProofNodeQuery = (0, _query.nodeQuery)("/rule/ruleProof!"), conclusionNodeQuery = (0, _query.nodeQuery)("/rule/conclusion!");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCB2ZXJpZnlMYWJlbHMgZnJvbSBcIi4uL3ZlcmlmeS9sYWJlbHNcIjtcbmltcG9ydCB2ZXJpZnlQcmVtaXNlcyBmcm9tIFwiLi4vdmVyaWZ5L3ByZW1pc2VzXCI7XG5pbXBvcnQgdmVyaWZ5UnVsZVByb29mIGZyb20gXCIuLi92ZXJpZnkvcnVsZVByb29mXCI7XG5pbXBvcnQgTG9jYWxNZXRhQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbE1ldGFcIjtcbmltcG9ydCB2ZXJpZnlDb25jbHVzaW9uIGZyb20gXCIuLi92ZXJpZnkvY29uY2x1c2lvblwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgbGFiZWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9ydWxlLy9sYWJlbHMvbGFiZWxcIiksXG4gICAgICBwcmVtaXNlc05vZGVRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcnVsZS9wcmVtaXNlXCIpLFxuICAgICAgcnVsZVByb29mTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3J1bGUvcnVsZVByb29mIVwiKSxcbiAgICAgIGNvbmNsdXNpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcnVsZS9jb25jbHVzaW9uIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5UnVsZShydWxlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHJ1bGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGxhYmVsTm9kZXMgPSBsYWJlbE5vZGVzUXVlcnkocnVsZU5vZGUpLFxuICAgICAgICBsYWJlbHNTdHJpbmcgPSBmaWxlQ29udGV4dC5ub2Rlc0FzU3RyaW5nKGxhYmVsTm9kZXMpLFxuICAgICAgICBsb2NhbE1ldGFDb250ZXh0ID0gTG9jYWxNZXRhQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpO1xuXG4gIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2xhYmVsc1N0cmluZ30nIHJ1bGUuLi5gLCBydWxlTm9kZSk7XG5cbiAgY29uc3QgbGFiZWxzID0gW10sXG4gICAgICAgIGxhYmVsc1ZlcmlmaWVkID0gdmVyaWZ5TGFiZWxzKGxhYmVsTm9kZXMsIGxhYmVscywgZmlsZUNvbnRleHQpO1xuXG4gIGlmIChsYWJlbHNWZXJpZmllZCkge1xuICAgIGNvbnN0IHByZW1pc2VzID0gW10sXG4gICAgICAgICAgcHJlbWlzZU5vZGVzID0gcHJlbWlzZXNOb2RlUXVlcnkocnVsZU5vZGUpLFxuICAgICAgICAgIHByZW1pc2VzVmVyaWZpZWQgPSB2ZXJpZnlQcmVtaXNlcyhwcmVtaXNlTm9kZXMsIHByZW1pc2VzLCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgIGlmIChwcmVtaXNlc1ZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBjb25jbHVzaW9ucyA9IFtdLFxuICAgICAgICAgICAgY29uY2x1c2lvbk5vZGUgPSBjb25jbHVzaW9uTm9kZVF1ZXJ5KHJ1bGVOb2RlKSxcbiAgICAgICAgICAgIGNvbmNsdXNpb25WZXJpZmllZCA9IHZlcmlmeUNvbmNsdXNpb24oY29uY2x1c2lvbk5vZGUsIGNvbmNsdXNpb25zLCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgICAgaWYgKGNvbmNsdXNpb25WZXJpZmllZCkge1xuICAgICAgICBjb25zdCBydWxlUHJvb2ZOb2RlID0gcnVsZVByb29mTm9kZVF1ZXJ5KHJ1bGVOb2RlKSxcbiAgICAgICAgICAgICAgZmlyc3RDb25jbHVzaW9uID0gZmlyc3QoY29uY2x1c2lvbnMpLFxuICAgICAgICAgICAgICBjb25jbHVzaW9uID0gZmlyc3RDb25jbHVzaW9uOyAvLy9cblxuICAgICAgICBsZXQgcnVsZVByb29mVmVyaWZpZWQgPSB0cnVlOyAvLy9cblxuICAgICAgICBpZiAocnVsZVByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJ1bGVQcm9vZlZlcmlmaWVkID0gdmVyaWZ5UnVsZVByb29mKHJ1bGVQcm9vZk5vZGUsIGNvbmNsdXNpb24sIGxvY2FsTWV0YUNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJ1bGVQcm9vZlZlcmlmaWVkKSB7XG4gICAgICAgICAgY29uc3QgcnVsZSA9IFJ1bGUuZnJvbUxhYmVsc1ByZW1pc2VzQ29uY2x1c2lvbkFuZEZpbGVDb250ZXh0KGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgIGZpbGVDb250ZXh0LmFkZFJ1bGUocnVsZSk7XG5cbiAgICAgICAgICBydWxlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHJ1bGVWZXJpZmllZCkge1xuICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bGFiZWxzU3RyaW5nfScgcnVsZS5gLCBydWxlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gcnVsZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVJ1bGUiLCJsYWJlbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicHJlbWlzZXNOb2RlUXVlcnkiLCJydWxlUHJvb2ZOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJjb25jbHVzaW9uTm9kZVF1ZXJ5IiwicnVsZU5vZGUiLCJmaWxlQ29udGV4dCIsInJ1bGVWZXJpZmllZCIsImxhYmVsTm9kZXMiLCJsYWJlbHNTdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwibG9jYWxNZXRhQ29udGV4dCIsIkxvY2FsTWV0YUNvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJ0cmFjZSIsImxhYmVscyIsImxhYmVsc1ZlcmlmaWVkIiwidmVyaWZ5TGFiZWxzIiwicHJlbWlzZXMiLCJwcmVtaXNlTm9kZXMiLCJwcmVtaXNlc1ZlcmlmaWVkIiwidmVyaWZ5UHJlbWlzZXMiLCJjb25jbHVzaW9ucyIsImNvbmNsdXNpb25Ob2RlIiwiY29uY2x1c2lvblZlcmlmaWVkIiwidmVyaWZ5Q29uY2x1c2lvbiIsInJ1bGVQcm9vZk5vZGUiLCJmaXJzdENvbmNsdXNpb24iLCJmaXJzdCIsImNvbmNsdXNpb24iLCJydWxlUHJvb2ZWZXJpZmllZCIsInZlcmlmeVJ1bGVQcm9vZiIsInJ1bGUiLCJSdWxlIiwiZnJvbUxhYmVsc1ByZW1pc2VzQ29uY2x1c2lvbkFuZEZpbGVDb250ZXh0IiwiYWRkUnVsZSIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpQkE7OztlQUF3QkE7OzsyREFmUDs2REFDUTsrREFDRTtnRUFDQztnRUFDQztpRUFDQTtxQkFFUDtxQkFDZ0I7Ozs7OztBQUV0QyxJQUFNQyxrQkFBa0JDLElBQUFBLGlCQUFVLEVBQUMsd0JBQzdCQyxvQkFBb0JELElBQUFBLGlCQUFVLEVBQUMsa0JBQy9CRSxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUMscUJBQy9CQyxzQkFBc0JELElBQUFBLGdCQUFTLEVBQUM7QUFFdkIsU0FBU0wsV0FBV08sUUFBUSxFQUFFQyxXQUFXO0lBQ3RELElBQUlDLGVBQWU7SUFFbkIsSUFBTUMsYUFBYVQsZ0JBQWdCTSxXQUM3QkksZUFBZUgsWUFBWUksYUFBYSxDQUFDRixhQUN6Q0csbUJBQW1CQyxrQkFBZ0IsQ0FBQ0MsZUFBZSxDQUFDUDtJQUUxREEsWUFBWVEsS0FBSyxDQUFDLEFBQUMsa0JBQThCLE9BQWJMLGNBQWEsY0FBWUo7SUFFN0QsSUFBTVUsU0FBUyxFQUFFLEVBQ1hDLGlCQUFpQkMsSUFBQUEsZUFBWSxFQUFDVCxZQUFZTyxRQUFRVDtJQUV4RCxJQUFJVSxnQkFBZ0I7UUFDbEIsSUFBTUUsV0FBVyxFQUFFLEVBQ2JDLGVBQWVsQixrQkFBa0JJLFdBQ2pDZSxtQkFBbUJDLElBQUFBLGlCQUFjLEVBQUNGLGNBQWNELFVBQVVQO1FBRWhFLElBQUlTLGtCQUFrQjtZQUNwQixJQUFNRSxjQUFjLEVBQUUsRUFDaEJDLGlCQUFpQm5CLG9CQUFvQkMsV0FDckNtQixxQkFBcUJDLElBQUFBLG1CQUFnQixFQUFDRixnQkFBZ0JELGFBQWFYO1lBRXpFLElBQUlhLG9CQUFvQjtnQkFDdEIsSUFBTUUsZ0JBQWdCeEIsbUJBQW1CRyxXQUNuQ3NCLGtCQUFrQkMsSUFBQUEsWUFBSyxFQUFDTixjQUN4Qk8sYUFBYUYsaUJBQWlCLEdBQUc7Z0JBRXZDLElBQUlHLG9CQUFvQixNQUFNLEdBQUc7Z0JBRWpDLElBQUlKLGtCQUFrQixNQUFNO29CQUMxQkksb0JBQW9CQyxJQUFBQSxrQkFBZSxFQUFDTCxlQUFlRyxZQUFZbEI7Z0JBQ2pFO2dCQUVBLElBQUltQixtQkFBbUI7b0JBQ3JCLElBQU1FLE9BQU9DLGFBQUksQ0FBQ0MsMENBQTBDLENBQUNuQixRQUFRRyxVQUFVVyxZQUFZdkI7b0JBRTNGQSxZQUFZNkIsT0FBTyxDQUFDSDtvQkFFcEJ6QixlQUFlO2dCQUNqQjtZQUNGO1FBQ0Y7SUFDRjtJQUVBLElBQUlBLGNBQWM7UUFDaEJELFlBQVk4QixLQUFLLENBQUMsQUFBQyxvQkFBZ0MsT0FBYjNCLGNBQWEsWUFBVUo7SUFDL0Q7SUFFQSxPQUFPRTtBQUNUIn0=