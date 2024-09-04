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
var _proof = /*#__PURE__*/ _interop_require_default(require("../verify/proof"));
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _labels = /*#__PURE__*/ _interop_require_default(require("../verify/labels"));
var _premises = /*#__PURE__*/ _interop_require_default(require("../verify/premises"));
var _conclusion = /*#__PURE__*/ _interop_require_default(require("../verify/conclusion"));
var _array = require("../utilities/array");
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var labelNodesQuery = (0, _query.nodesQuery)("/rule/label"), premisesNodeQuery = (0, _query.nodesQuery)("/rule/premise"), proofNodeQuery = (0, _query.nodeQuery)("/rule/proof!"), conclusionNodeQuery = (0, _query.nodeQuery)("/rule/conclusion!");
function verifyRule(ruleNode, fileContext) {
    var ruleVerified = false;
    var labelNodes = labelNodesQuery(ruleNode), labelsString = fileContext.nodesAsString(labelNodes);
    fileContext.trace("Verifying the '".concat(labelsString, "' rule..."), ruleNode);
    var labels = [], labelsVerified = (0, _labels.default)(labelNodes, labels, fileContext);
    if (labelsVerified) {
        var premises = [], localContext = _local.default.fromFileContext(fileContext), premiseNodes = premisesNodeQuery(ruleNode), premisesVerified = (0, _premises.default)(premiseNodes, premises, localContext);
        if (premisesVerified) {
            var conclusions = [], conclusionNode = conclusionNodeQuery(ruleNode), conclusionVerified = (0, _conclusion.default)(conclusionNode, conclusions, localContext);
            if (conclusionVerified) {
                var proofVerified = true; ///
                var firstConclusion = (0, _array.first)(conclusions), proofNode = proofNodeQuery(ruleNode), conclusion = firstConclusion; ///
                if (proofNode !== null) {
                    var substitutions = [], statementNode = conclusion.getStatementNode();
                    proofVerified = (0, _proof.default)(proofNode, statementNode, substitutions, localContext);
                }
                if (proofVerified) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCB2ZXJpZnlQcm9vZiBmcm9tIFwiLi4vdmVyaWZ5L3Byb29mXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgdmVyaWZ5TGFiZWxzIGZyb20gXCIuLi92ZXJpZnkvbGFiZWxzXCI7XG5pbXBvcnQgdmVyaWZ5UHJlbWlzZXMgZnJvbSBcIi4uL3ZlcmlmeS9wcmVtaXNlc1wiO1xuaW1wb3J0IHZlcmlmeUNvbmNsdXNpb24gZnJvbSBcIi4uL3ZlcmlmeS9jb25jbHVzaW9uXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBsYWJlbE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3J1bGUvbGFiZWxcIiksXG4gICAgICBwcmVtaXNlc05vZGVRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcnVsZS9wcmVtaXNlXCIpLFxuICAgICAgcHJvb2ZOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcnVsZS9wcm9vZiFcIiksXG4gICAgICBjb25jbHVzaW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3J1bGUvY29uY2x1c2lvbiFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVJ1bGUocnVsZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCBydWxlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBsYWJlbE5vZGVzID0gbGFiZWxOb2Rlc1F1ZXJ5KHJ1bGVOb2RlKSxcbiAgICAgICAgbGFiZWxzU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZXNBc1N0cmluZyhsYWJlbE5vZGVzKTtcblxuICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtsYWJlbHNTdHJpbmd9JyBydWxlLi4uYCwgcnVsZU5vZGUpO1xuXG4gIGNvbnN0IGxhYmVscyA9IFtdLFxuICAgICAgICBsYWJlbHNWZXJpZmllZCA9IHZlcmlmeUxhYmVscyhsYWJlbE5vZGVzLCBsYWJlbHMsIGZpbGVDb250ZXh0KTtcblxuICBpZiAobGFiZWxzVmVyaWZpZWQpIHtcbiAgICBjb25zdCBwcmVtaXNlcyA9IFtdLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHByZW1pc2VOb2RlcyA9IHByZW1pc2VzTm9kZVF1ZXJ5KHJ1bGVOb2RlKSxcbiAgICAgICAgICBwcmVtaXNlc1ZlcmlmaWVkID0gdmVyaWZ5UHJlbWlzZXMocHJlbWlzZU5vZGVzLCBwcmVtaXNlcywgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChwcmVtaXNlc1ZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBjb25jbHVzaW9ucyA9IFtdLFxuICAgICAgICAgICAgY29uY2x1c2lvbk5vZGUgPSBjb25jbHVzaW9uTm9kZVF1ZXJ5KHJ1bGVOb2RlKSxcbiAgICAgICAgICAgIGNvbmNsdXNpb25WZXJpZmllZCA9IHZlcmlmeUNvbmNsdXNpb24oY29uY2x1c2lvbk5vZGUsIGNvbmNsdXNpb25zLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAoY29uY2x1c2lvblZlcmlmaWVkKSB7XG4gICAgICAgIGxldCBwcm9vZlZlcmlmaWVkID0gdHJ1ZTsgLy8vXG5cbiAgICAgICAgY29uc3QgZmlyc3RDb25jbHVzaW9uID0gZmlyc3QoY29uY2x1c2lvbnMpLFxuICAgICAgICAgICAgICBwcm9vZk5vZGUgPSBwcm9vZk5vZGVRdWVyeShydWxlTm9kZSksXG4gICAgICAgICAgICAgIGNvbmNsdXNpb24gPSBmaXJzdENvbmNsdXNpb247IC8vL1xuXG4gICAgICAgIGlmIChwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IGNvbmNsdXNpb24uZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gICAgICAgICAgcHJvb2ZWZXJpZmllZCA9IHZlcmlmeVByb29mKHByb29mTm9kZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9vZlZlcmlmaWVkKSB7XG4gICAgICAgICAgY29uc3QgcnVsZSA9IFJ1bGUuZnJvbUxhYmVsc1ByZW1pc2VzQ29uY2x1c2lvbkFuZEZpbGVDb250ZXh0KGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgIGZpbGVDb250ZXh0LmFkZFJ1bGUocnVsZSk7XG5cbiAgICAgICAgICBydWxlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHJ1bGVWZXJpZmllZCkge1xuICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bGFiZWxzU3RyaW5nfScgcnVsZS5gLCBydWxlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gcnVsZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVJ1bGUiLCJsYWJlbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicHJlbWlzZXNOb2RlUXVlcnkiLCJwcm9vZk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImNvbmNsdXNpb25Ob2RlUXVlcnkiLCJydWxlTm9kZSIsImZpbGVDb250ZXh0IiwicnVsZVZlcmlmaWVkIiwibGFiZWxOb2RlcyIsImxhYmVsc1N0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJ0cmFjZSIsImxhYmVscyIsImxhYmVsc1ZlcmlmaWVkIiwidmVyaWZ5TGFiZWxzIiwicHJlbWlzZXMiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJwcmVtaXNlTm9kZXMiLCJwcmVtaXNlc1ZlcmlmaWVkIiwidmVyaWZ5UHJlbWlzZXMiLCJjb25jbHVzaW9ucyIsImNvbmNsdXNpb25Ob2RlIiwiY29uY2x1c2lvblZlcmlmaWVkIiwidmVyaWZ5Q29uY2x1c2lvbiIsInByb29mVmVyaWZpZWQiLCJmaXJzdENvbmNsdXNpb24iLCJmaXJzdCIsInByb29mTm9kZSIsImNvbmNsdXNpb24iLCJzdWJzdGl0dXRpb25zIiwic3RhdGVtZW50Tm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJ2ZXJpZnlQcm9vZiIsInJ1bGUiLCJSdWxlIiwiZnJvbUxhYmVsc1ByZW1pc2VzQ29uY2x1c2lvbkFuZEZpbGVDb250ZXh0IiwiYWRkUnVsZSIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpQkE7OztlQUF3QkE7OzsyREFmUDs0REFDTzs0REFDQzs2REFDQTsrREFDRTtpRUFDRTtxQkFFUDtxQkFDZ0I7Ozs7OztBQUV0QyxJQUFNQyxrQkFBa0JDLElBQUFBLGlCQUFVLEVBQUMsZ0JBQzdCQyxvQkFBb0JELElBQUFBLGlCQUFVLEVBQUMsa0JBQy9CRSxpQkFBaUJDLElBQUFBLGdCQUFTLEVBQUMsaUJBQzNCQyxzQkFBc0JELElBQUFBLGdCQUFTLEVBQUM7QUFFdkIsU0FBU0wsV0FBV08sUUFBUSxFQUFFQyxXQUFXO0lBQ3RELElBQUlDLGVBQWU7SUFFbkIsSUFBTUMsYUFBYVQsZ0JBQWdCTSxXQUM3QkksZUFBZUgsWUFBWUksYUFBYSxDQUFDRjtJQUUvQ0YsWUFBWUssS0FBSyxDQUFDLEFBQUMsa0JBQThCLE9BQWJGLGNBQWEsY0FBWUo7SUFFN0QsSUFBTU8sU0FBUyxFQUFFLEVBQ1hDLGlCQUFpQkMsSUFBQUEsZUFBWSxFQUFDTixZQUFZSSxRQUFRTjtJQUV4RCxJQUFJTyxnQkFBZ0I7UUFDbEIsSUFBTUUsV0FBVyxFQUFFLEVBQ2JDLGVBQWVDLGNBQVksQ0FBQ0MsZUFBZSxDQUFDWixjQUM1Q2EsZUFBZWxCLGtCQUFrQkksV0FDakNlLG1CQUFtQkMsSUFBQUEsaUJBQWMsRUFBQ0YsY0FBY0osVUFBVUM7UUFFaEUsSUFBSUksa0JBQWtCO1lBQ3BCLElBQU1FLGNBQWMsRUFBRSxFQUNoQkMsaUJBQWlCbkIsb0JBQW9CQyxXQUNyQ21CLHFCQUFxQkMsSUFBQUEsbUJBQWdCLEVBQUNGLGdCQUFnQkQsYUFBYU47WUFFekUsSUFBSVEsb0JBQW9CO2dCQUN0QixJQUFJRSxnQkFBZ0IsTUFBTSxHQUFHO2dCQUU3QixJQUFNQyxrQkFBa0JDLElBQUFBLFlBQUssRUFBQ04sY0FDeEJPLFlBQVkzQixlQUFlRyxXQUMzQnlCLGFBQWFILGlCQUFpQixHQUFHO2dCQUV2QyxJQUFJRSxjQUFjLE1BQU07b0JBQ3RCLElBQU1FLGdCQUFnQixFQUFFLEVBQ2xCQyxnQkFBZ0JGLFdBQVdHLGdCQUFnQjtvQkFFakRQLGdCQUFnQlEsSUFBQUEsY0FBVyxFQUFDTCxXQUFXRyxlQUFlRCxlQUFlZjtnQkFDdkU7Z0JBRUEsSUFBSVUsZUFBZTtvQkFDakIsSUFBTVMsT0FBT0MsYUFBSSxDQUFDQywwQ0FBMEMsQ0FBQ3pCLFFBQVFHLFVBQVVlLFlBQVl4QjtvQkFFM0ZBLFlBQVlnQyxPQUFPLENBQUNIO29CQUVwQjVCLGVBQWU7Z0JBQ2pCO1lBQ0Y7UUFDRjtJQUNGO0lBRUEsSUFBSUEsY0FBYztRQUNoQkQsWUFBWWlDLEtBQUssQ0FBQyxBQUFDLG9CQUFnQyxPQUFiOUIsY0FBYSxZQUFVSjtJQUMvRDtJQUVBLE9BQU9FO0FBQ1QifQ==