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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCB2ZXJpZnlMYWJlbHMgZnJvbSBcIi4uL3ZlcmlmeS9sYWJlbHNcIjtcbmltcG9ydCB2ZXJpZnlQcmVtaXNlIGZyb20gXCIuLi92ZXJpZnkvcHJlbWlzZVwiO1xuaW1wb3J0IHZlcmlmeVJ1bGVQcm9vZiBmcm9tIFwiLi4vdmVyaWZ5L3J1bGVQcm9vZlwiO1xuaW1wb3J0IE1ldGFwcm9vZkNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbWV0YXByb29mXCI7XG5pbXBvcnQgdmVyaWZ5Q29uY2x1c2lvbiBmcm9tIFwiLi4vdmVyaWZ5L2NvbmNsdXNpb25cIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGxhYmVsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcnVsZS9sYWJlbHMvbGFiZWxcIiksXG4gICAgICBwcmVtaXNlc05vZGVRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcnVsZS9wcmVtaXNlXCIpLFxuICAgICAgcnVsZVByb29mTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3J1bGUvcnVsZVByb29mIVwiKSxcbiAgICAgIGNvbmNsdXNpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcnVsZS9jb25jbHVzaW9uIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5UnVsZShydWxlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHJ1bGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGxhYmVsTm9kZXMgPSBsYWJlbE5vZGVzUXVlcnkocnVsZU5vZGUpLFxuICAgICAgICBsYWJlbHNTdHJpbmcgPSBmaWxlQ29udGV4dC5ub2Rlc0FzU3RyaW5nKGxhYmVsTm9kZXMpLFxuICAgICAgICBtZXRhUHJvb2ZDb250ZXh0ID0gTWV0YXByb29mQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpO1xuXG4gIGZpbGVDb250ZXh0LmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke2xhYmVsc1N0cmluZ30nIHJ1bGUuLi5gLCBydWxlTm9kZSk7XG5cbiAgY29uc3QgbGFiZWxzID0gW10sXG4gICAgICAgIGxhYmVsc1ZlcmlmaWVkID0gdmVyaWZ5TGFiZWxzKGxhYmVsTm9kZXMsIGxhYmVscywgZmlsZUNvbnRleHQpO1xuXG4gIGlmIChsYWJlbHNWZXJpZmllZCkge1xuICAgIGNvbnN0IHByZW1pc2VzID0gW10sXG4gICAgICAgICAgcHJlbWlzZU5vZGVzID0gcHJlbWlzZXNOb2RlUXVlcnkocnVsZU5vZGUpLFxuICAgICAgICAgIHByZW1pc2VzVmVyaWZpZWQgPSBwcmVtaXNlTm9kZXMuZXZlcnkoKHByZW1pc2VOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcmVtaXNlVmVyaWZpZWQgPSB2ZXJpZnlQcmVtaXNlKHByZW1pc2VOb2RlLCBwcmVtaXNlcywgbWV0YVByb29mQ29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChwcmVtaXNlVmVyaWZpZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAocHJlbWlzZXNWZXJpZmllZCkge1xuICAgICAgY29uc3QgY29uY2x1c2lvbnMgPSBbXSxcbiAgICAgICAgICAgIGNvbmNsdXNpb25Ob2RlID0gY29uY2x1c2lvbk5vZGVRdWVyeShydWxlTm9kZSksXG4gICAgICAgICAgICBjb25jbHVzaW9uVmVyaWZpZWQgPSB2ZXJpZnlDb25jbHVzaW9uKGNvbmNsdXNpb25Ob2RlLCBjb25jbHVzaW9ucywgbWV0YVByb29mQ29udGV4dCk7XG5cbiAgICAgIGlmIChjb25jbHVzaW9uVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgcnVsZVByb29mTm9kZSA9IHJ1bGVQcm9vZk5vZGVRdWVyeShydWxlTm9kZSksXG4gICAgICAgICAgICAgIGZpcnN0Q29uY2x1c2lvbiA9IGZpcnN0KGNvbmNsdXNpb25zKSxcbiAgICAgICAgICAgICAgY29uY2x1c2lvbiA9IGZpcnN0Q29uY2x1c2lvbjsgLy8vXG5cbiAgICAgICAgbGV0IHJ1bGVQcm9vZlZlcmlmaWVkID0gdHJ1ZTsgLy8vXG5cbiAgICAgICAgaWYgKHJ1bGVQcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICBydWxlUHJvb2ZWZXJpZmllZCA9IHZlcmlmeVJ1bGVQcm9vZihydWxlUHJvb2ZOb2RlLCBjb25jbHVzaW9uLCBtZXRhUHJvb2ZDb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChydWxlUHJvb2ZWZXJpZmllZCkge1xuICAgICAgICAgIGNvbnN0IHJ1bGUgPSBSdWxlLmZyb21MYWJlbHNQcmVtaXNlc0NvbmNsdXNpb25BbmRGaWxlQ29udGV4dChsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICBmaWxlQ29udGV4dC5hZGRSdWxlKHJ1bGUpO1xuXG4gICAgICAgICAgcnVsZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChydWxlVmVyaWZpZWQpIHtcbiAgICBmaWxlQ29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7bGFiZWxzU3RyaW5nfScgcnVsZS5gLCBydWxlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gcnVsZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVJ1bGUiLCJsYWJlbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicHJlbWlzZXNOb2RlUXVlcnkiLCJydWxlUHJvb2ZOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJjb25jbHVzaW9uTm9kZVF1ZXJ5IiwicnVsZU5vZGUiLCJmaWxlQ29udGV4dCIsInJ1bGVWZXJpZmllZCIsImxhYmVsTm9kZXMiLCJsYWJlbHNTdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwibWV0YVByb29mQ29udGV4dCIsIk1ldGFwcm9vZkNvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJkZWJ1ZyIsImxhYmVscyIsImxhYmVsc1ZlcmlmaWVkIiwidmVyaWZ5TGFiZWxzIiwicHJlbWlzZXMiLCJwcmVtaXNlTm9kZXMiLCJwcmVtaXNlc1ZlcmlmaWVkIiwiZXZlcnkiLCJwcmVtaXNlTm9kZSIsInByZW1pc2VWZXJpZmllZCIsInZlcmlmeVByZW1pc2UiLCJjb25jbHVzaW9ucyIsImNvbmNsdXNpb25Ob2RlIiwiY29uY2x1c2lvblZlcmlmaWVkIiwidmVyaWZ5Q29uY2x1c2lvbiIsInJ1bGVQcm9vZk5vZGUiLCJmaXJzdENvbmNsdXNpb24iLCJmaXJzdCIsImNvbmNsdXNpb24iLCJydWxlUHJvb2ZWZXJpZmllZCIsInZlcmlmeVJ1bGVQcm9vZiIsInJ1bGUiLCJSdWxlIiwiZnJvbUxhYmVsc1ByZW1pc2VzQ29uY2x1c2lvbkFuZEZpbGVDb250ZXh0IiwiYWRkUnVsZSIsImluZm8iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWlCQTs7O2VBQXdCQTs7OzJEQWZQOzZEQUNROzhEQUNDO2dFQUNFO2dFQUNDO2lFQUNBO3FCQUVQO3FCQUNnQjs7Ozs7O0FBRXRDLElBQU1DLGtCQUFrQkMsSUFBQUEsbUJBQVcsdUJBQzdCQyxvQkFBb0JELElBQUFBLG1CQUFXLGtCQUMvQkUscUJBQXFCQyxJQUFBQSxrQkFBVSxxQkFDL0JDLHNCQUFzQkQsSUFBQUEsa0JBQVU7QUFFdkIsU0FBU0wsV0FBV08sUUFBUSxFQUFFQyxXQUFXO0lBQ3RELElBQUlDLGVBQWU7SUFFbkIsSUFBTUMsYUFBYVQsZ0JBQWdCTSxXQUM3QkksZUFBZUgsWUFBWUksY0FBY0YsYUFDekNHLG1CQUFtQkMsbUJBQWlCQyxnQkFBZ0JQO0lBRTFEQSxZQUFZUSxNQUFNLEFBQUMsa0JBQThCLE9BQWJMLGNBQWEsY0FBWUo7SUFFN0QsSUFBTVUsU0FBUyxFQUFFLEVBQ1hDLGlCQUFpQkMsSUFBQUEsaUJBQWFULFlBQVlPLFFBQVFUO0lBRXhELElBQUlVLGdCQUFnQjtRQUNsQixJQUFNRSxXQUFXLEVBQUUsRUFDYkMsZUFBZWxCLGtCQUFrQkksV0FDakNlLG1CQUFtQkQsYUFBYUUsTUFBTSxTQUFDQztZQUNyQyxJQUFNQyxrQkFBa0JDLElBQUFBLGtCQUFjRixhQUFhSixVQUFVUDtZQUU3RCxJQUFJWSxpQkFBaUI7Z0JBQ25CLE9BQU87WUFDVDtRQUNGO1FBRU4sSUFBSUgsa0JBQWtCO1lBQ3BCLElBQU1LLGNBQWMsRUFBRSxFQUNoQkMsaUJBQWlCdEIsb0JBQW9CQyxXQUNyQ3NCLHFCQUFxQkMsSUFBQUEscUJBQWlCRixnQkFBZ0JELGFBQWFkO1lBRXpFLElBQUlnQixvQkFBb0I7Z0JBQ3RCLElBQU1FLGdCQUFnQjNCLG1CQUFtQkcsV0FDbkN5QixrQkFBa0JDLElBQUFBLGNBQU1OLGNBQ3hCTyxhQUFhRixpQkFBaUIsR0FBRztnQkFFdkMsSUFBSUcsb0JBQW9CLE1BQU0sR0FBRztnQkFFakMsSUFBSUosa0JBQWtCLE1BQU07b0JBQzFCSSxvQkFBb0JDLElBQUFBLG9CQUFnQkwsZUFBZUcsWUFBWXJCO2dCQUNqRTtnQkFFQSxJQUFJc0IsbUJBQW1CO29CQUNyQixJQUFNRSxPQUFPQyxjQUFLQywyQ0FBMkN0QixRQUFRRyxVQUFVYyxZQUFZMUI7b0JBRTNGQSxZQUFZZ0MsUUFBUUg7b0JBRXBCNUIsZUFBZTtnQkFDakI7WUFDRjtRQUNGO0lBQ0Y7SUFFQSxJQUFJQSxjQUFjO1FBQ2hCRCxZQUFZaUMsS0FBSyxBQUFDLGlCQUE2QixPQUFiOUIsY0FBYSxZQUFVSjtJQUMzRDtJQUVBLE9BQU9FO0FBQ1QifQ==