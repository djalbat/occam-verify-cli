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
var _substitutions = /*#__PURE__*/ _interop_require_default(require("../substitutions"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var proofNodeQuery = (0, _query.nodeQuery)("/rule/proof!"), labelNodesQuery = (0, _query.nodesQuery)("/rule/label"), premisesNodeQuery = (0, _query.nodesQuery)("/rule/premise"), conclusionNodeQuery = (0, _query.nodeQuery)("/rule/conclusion!");
function verifyRule(ruleNode, fileContext) {
    var ruleVerified = false;
    var labelNodes = labelNodesQuery(ruleNode), labelsString = fileContext.nodesAsString(labelNodes);
    fileContext.trace("Verifying the '".concat(labelsString, "' rule..."), ruleNode);
    var labels = [], labelsVerified = (0, _labels.default)(labelNodes, labels, fileContext);
    if (labelsVerified) {
        var localContext = _local.default.fromFileContext(fileContext), premises = [], premiseNodes = premisesNodeQuery(ruleNode), premisesVerified = (0, _premises.default)(premiseNodes, premises, localContext);
        if (premisesVerified) {
            var conclusions = [], conclusionNode = conclusionNodeQuery(ruleNode), conclusionVerified = (0, _conclusion.default)(conclusionNode, conclusions, localContext);
            if (conclusionVerified) {
                var proofVerified = true; ///
                var firstConclusion = (0, _array.first)(conclusions), proofNode = proofNodeQuery(ruleNode), conclusion = firstConclusion; ///
                if (proofNode !== null) {
                    var substitutions = _substitutions.default.fromNothing(), statementNode = conclusion.getStatementNode();
                    proofVerified = (0, _proof.default)(proofNode, statementNode, substitutions, localContext);
                }
                if (proofVerified) {
                    var rule = _rule.default.fromRuleNodeLabelsPremisesAndConclusion(ruleNode, labels, premises, conclusion);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCB2ZXJpZnlQcm9vZiBmcm9tIFwiLi4vdmVyaWZ5L3Byb29mXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgdmVyaWZ5TGFiZWxzIGZyb20gXCIuLi92ZXJpZnkvbGFiZWxzXCI7XG5pbXBvcnQgdmVyaWZ5UHJlbWlzZXMgZnJvbSBcIi4uL3ZlcmlmeS9wcmVtaXNlc1wiO1xuaW1wb3J0IHZlcmlmeUNvbmNsdXNpb24gZnJvbSBcIi4uL3ZlcmlmeS9jb25jbHVzaW9uXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4uL3N1YnN0aXR1dGlvbnNcIjtcblxuY29uc3QgcHJvb2ZOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcnVsZS9wcm9vZiFcIiksXG4gICAgICBsYWJlbE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3J1bGUvbGFiZWxcIiksXG4gICAgICBwcmVtaXNlc05vZGVRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcnVsZS9wcmVtaXNlXCIpLFxuICAgICAgY29uY2x1c2lvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ydWxlL2NvbmNsdXNpb24hXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlSdWxlKHJ1bGVOb2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgcnVsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgbGFiZWxOb2RlcyA9IGxhYmVsTm9kZXNRdWVyeShydWxlTm9kZSksXG4gICAgICAgIGxhYmVsc1N0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVzQXNTdHJpbmcobGFiZWxOb2Rlcyk7XG5cbiAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bGFiZWxzU3RyaW5nfScgcnVsZS4uLmAsIHJ1bGVOb2RlKTtcblxuICBjb25zdCBsYWJlbHMgPSBbXSxcbiAgICAgICAgbGFiZWxzVmVyaWZpZWQgPSB2ZXJpZnlMYWJlbHMobGFiZWxOb2RlcywgbGFiZWxzLCBmaWxlQ29udGV4dCk7XG5cbiAgaWYgKGxhYmVsc1ZlcmlmaWVkKSB7XG4gICAgY29uc3QgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJlbWlzZXMgPSBbXSxcbiAgICAgICAgICBwcmVtaXNlTm9kZXMgPSBwcmVtaXNlc05vZGVRdWVyeShydWxlTm9kZSksXG4gICAgICAgICAgcHJlbWlzZXNWZXJpZmllZCA9IHZlcmlmeVByZW1pc2VzKHByZW1pc2VOb2RlcywgcHJlbWlzZXMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAocHJlbWlzZXNWZXJpZmllZCkge1xuICAgICAgY29uc3QgY29uY2x1c2lvbnMgPSBbXSxcbiAgICAgICAgICAgIGNvbmNsdXNpb25Ob2RlID0gY29uY2x1c2lvbk5vZGVRdWVyeShydWxlTm9kZSksXG4gICAgICAgICAgICBjb25jbHVzaW9uVmVyaWZpZWQgPSB2ZXJpZnlDb25jbHVzaW9uKGNvbmNsdXNpb25Ob2RlLCBjb25jbHVzaW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKGNvbmNsdXNpb25WZXJpZmllZCkge1xuICAgICAgICBsZXQgcHJvb2ZWZXJpZmllZCA9IHRydWU7IC8vL1xuXG4gICAgICAgIGNvbnN0IGZpcnN0Q29uY2x1c2lvbiA9IGZpcnN0KGNvbmNsdXNpb25zKSxcbiAgICAgICAgICAgICAgcHJvb2ZOb2RlID0gcHJvb2ZOb2RlUXVlcnkocnVsZU5vZGUpLFxuICAgICAgICAgICAgICBjb25jbHVzaW9uID0gZmlyc3RDb25jbHVzaW9uOyAvLy9cblxuICAgICAgICBpZiAocHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gY29uY2x1c2lvbi5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgICAgICAgICBwcm9vZlZlcmlmaWVkID0gdmVyaWZ5UHJvb2YocHJvb2ZOb2RlLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb29mVmVyaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCBydWxlID0gUnVsZS5mcm9tUnVsZU5vZGVMYWJlbHNQcmVtaXNlc0FuZENvbmNsdXNpb24ocnVsZU5vZGUsIGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pO1xuXG4gICAgICAgICAgZmlsZUNvbnRleHQuYWRkUnVsZShydWxlKTtcblxuICAgICAgICAgIHJ1bGVWZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAocnVsZVZlcmlmaWVkKSB7XG4gICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtsYWJlbHNTdHJpbmd9JyBydWxlLmAsIHJ1bGVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBydWxlVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5UnVsZSIsInByb29mTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibGFiZWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInByZW1pc2VzTm9kZVF1ZXJ5IiwiY29uY2x1c2lvbk5vZGVRdWVyeSIsInJ1bGVOb2RlIiwiZmlsZUNvbnRleHQiLCJydWxlVmVyaWZpZWQiLCJsYWJlbE5vZGVzIiwibGFiZWxzU3RyaW5nIiwibm9kZXNBc1N0cmluZyIsInRyYWNlIiwibGFiZWxzIiwibGFiZWxzVmVyaWZpZWQiLCJ2ZXJpZnlMYWJlbHMiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJwcmVtaXNlcyIsInByZW1pc2VOb2RlcyIsInByZW1pc2VzVmVyaWZpZWQiLCJ2ZXJpZnlQcmVtaXNlcyIsImNvbmNsdXNpb25zIiwiY29uY2x1c2lvbk5vZGUiLCJjb25jbHVzaW9uVmVyaWZpZWQiLCJ2ZXJpZnlDb25jbHVzaW9uIiwicHJvb2ZWZXJpZmllZCIsImZpcnN0Q29uY2x1c2lvbiIsImZpcnN0IiwicHJvb2ZOb2RlIiwiY29uY2x1c2lvbiIsInN1YnN0aXR1dGlvbnMiLCJTdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJzdGF0ZW1lbnROb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsInZlcmlmeVByb29mIiwicnVsZSIsIlJ1bGUiLCJmcm9tUnVsZU5vZGVMYWJlbHNQcmVtaXNlc0FuZENvbmNsdXNpb24iLCJhZGRSdWxlIiwiZGVidWciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWtCQTs7O2VBQXdCQTs7OzJEQWhCUDs0REFDTzs0REFDQzs2REFDQTsrREFDRTtpRUFDRTtxQkFFUDtxQkFDZ0I7b0VBQ1o7Ozs7OztBQUUxQixJQUFNQyxpQkFBaUJDLElBQUFBLGdCQUFTLEVBQUMsaUJBQzNCQyxrQkFBa0JDLElBQUFBLGlCQUFVLEVBQUMsZ0JBQzdCQyxvQkFBb0JELElBQUFBLGlCQUFVLEVBQUMsa0JBQy9CRSxzQkFBc0JKLElBQUFBLGdCQUFTLEVBQUM7QUFFdkIsU0FBU0YsV0FBV08sUUFBUSxFQUFFQyxXQUFXO0lBQ3RELElBQUlDLGVBQWU7SUFFbkIsSUFBTUMsYUFBYVAsZ0JBQWdCSSxXQUM3QkksZUFBZUgsWUFBWUksYUFBYSxDQUFDRjtJQUUvQ0YsWUFBWUssS0FBSyxDQUFDLEFBQUMsa0JBQThCLE9BQWJGLGNBQWEsY0FBWUo7SUFFN0QsSUFBTU8sU0FBUyxFQUFFLEVBQ1hDLGlCQUFpQkMsSUFBQUEsZUFBWSxFQUFDTixZQUFZSSxRQUFRTjtJQUV4RCxJQUFJTyxnQkFBZ0I7UUFDbEIsSUFBTUUsZUFBZUMsY0FBWSxDQUFDQyxlQUFlLENBQUNYLGNBQzVDWSxXQUFXLEVBQUUsRUFDYkMsZUFBZWhCLGtCQUFrQkUsV0FDakNlLG1CQUFtQkMsSUFBQUEsaUJBQWMsRUFBQ0YsY0FBY0QsVUFBVUg7UUFFaEUsSUFBSUssa0JBQWtCO1lBQ3BCLElBQU1FLGNBQWMsRUFBRSxFQUNoQkMsaUJBQWlCbkIsb0JBQW9CQyxXQUNyQ21CLHFCQUFxQkMsSUFBQUEsbUJBQWdCLEVBQUNGLGdCQUFnQkQsYUFBYVA7WUFFekUsSUFBSVMsb0JBQW9CO2dCQUN0QixJQUFJRSxnQkFBZ0IsTUFBTSxHQUFHO2dCQUU3QixJQUFNQyxrQkFBa0JDLElBQUFBLFlBQUssRUFBQ04sY0FDeEJPLFlBQVk5QixlQUFlTSxXQUMzQnlCLGFBQWFILGlCQUFpQixHQUFHO2dCQUV2QyxJQUFJRSxjQUFjLE1BQU07b0JBQ3RCLElBQU1FLGdCQUFnQkMsc0JBQWEsQ0FBQ0MsV0FBVyxJQUN6Q0MsZ0JBQWdCSixXQUFXSyxnQkFBZ0I7b0JBRWpEVCxnQkFBZ0JVLElBQUFBLGNBQVcsRUFBQ1AsV0FBV0ssZUFBZUgsZUFBZWhCO2dCQUN2RTtnQkFFQSxJQUFJVyxlQUFlO29CQUNqQixJQUFNVyxPQUFPQyxhQUFJLENBQUNDLHVDQUF1QyxDQUFDbEMsVUFBVU8sUUFBUU0sVUFBVVk7b0JBRXRGeEIsWUFBWWtDLE9BQU8sQ0FBQ0g7b0JBRXBCOUIsZUFBZTtnQkFDakI7WUFDRjtRQUNGO0lBQ0Y7SUFFQSxJQUFJQSxjQUFjO1FBQ2hCRCxZQUFZbUMsS0FBSyxDQUFDLEFBQUMsb0JBQWdDLE9BQWJoQyxjQUFhLFlBQVVKO0lBQy9EO0lBRUEsT0FBT0U7QUFDVCJ9