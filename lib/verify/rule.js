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
var _metaproof = /*#__PURE__*/ _interop_require_default(require("../verify/metaproof"));
var _conclusion = /*#__PURE__*/ _interop_require_default(require("../verify/conclusion"));
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("../context/local/metaLevel"));
var _array = require("../utilities/array");
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var labelNodesQuery = (0, _query.nodesQuery)("/rule/label"), premisesNodeQuery = (0, _query.nodesQuery)("/rule/premise"), metaproofNodeQuery = (0, _query.nodeQuery)("/rule/metaproof!"), conclusionNodeQuery = (0, _query.nodeQuery)("/rule/conclusion!");
function verifyRule(ruleNode, fileContext) {
    var ruleVerified = false;
    var labelNodes = labelNodesQuery(ruleNode), labelsString = fileContext.nodesAsString(labelNodes);
    fileContext.trace("Verifying the '".concat(labelsString, "' rule..."), ruleNode);
    var labels = [], labelsVerified = (0, _labels.default)(labelNodes, labels, fileContext);
    if (labelsVerified) {
        var metaLevelLocalContext = _metaLevel.default.fromFileContext(fileContext), premises = [], localContext = metaLevelLocalContext, premiseNodes = premisesNodeQuery(ruleNode), premisesVerified = (0, _premises.default)(premiseNodes, premises, localContext);
        if (premisesVerified) {
            var conclusions = [], conclusionNode = conclusionNodeQuery(ruleNode), conclusionVerified = (0, _conclusion.default)(conclusionNode, conclusions, localContext);
            if (conclusionVerified) {
                var metaproofVerified = true; ///
                var firstConclusion = (0, _array.first)(conclusions), metaproofNode = metaproofNodeQuery(ruleNode), conclusion = firstConclusion; ///
                if (metaproofNode !== null) {
                    var substitutions = [], metastatementNode = conclusion.getMetastatementNode();
                    metaproofVerified = (0, _metaproof.default)(metaproofNode, metastatementNode, substitutions, localContext);
                }
                if (metaproofVerified) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCB2ZXJpZnlMYWJlbHMgZnJvbSBcIi4uL3ZlcmlmeS9sYWJlbHNcIjtcbmltcG9ydCB2ZXJpZnlQcmVtaXNlcyBmcm9tIFwiLi4vdmVyaWZ5L3ByZW1pc2VzXCI7XG5pbXBvcnQgdmVyaWZ5TWV0YXByb29mIGZyb20gXCIuLi92ZXJpZnkvbWV0YXByb29mXCI7XG5pbXBvcnQgdmVyaWZ5Q29uY2x1c2lvbiBmcm9tIFwiLi4vdmVyaWZ5L2NvbmNsdXNpb25cIjtcbmltcG9ydCBNZXRhTGV2ZWxMb2NhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWwvbWV0YUxldmVsXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBsYWJlbE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3J1bGUvbGFiZWxcIiksXG4gICAgICBwcmVtaXNlc05vZGVRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcnVsZS9wcmVtaXNlXCIpLFxuICAgICAgbWV0YXByb29mTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3J1bGUvbWV0YXByb29mIVwiKSxcbiAgICAgIGNvbmNsdXNpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcnVsZS9jb25jbHVzaW9uIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5UnVsZShydWxlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHJ1bGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGxhYmVsTm9kZXMgPSBsYWJlbE5vZGVzUXVlcnkocnVsZU5vZGUpLFxuICAgICAgICBsYWJlbHNTdHJpbmcgPSBmaWxlQ29udGV4dC5ub2Rlc0FzU3RyaW5nKGxhYmVsTm9kZXMpO1xuXG4gIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2xhYmVsc1N0cmluZ30nIHJ1bGUuLi5gLCBydWxlTm9kZSk7XG5cbiAgY29uc3QgbGFiZWxzID0gW10sXG4gICAgICAgIGxhYmVsc1ZlcmlmaWVkID0gdmVyaWZ5TGFiZWxzKGxhYmVsTm9kZXMsIGxhYmVscywgZmlsZUNvbnRleHQpO1xuXG4gIGlmIChsYWJlbHNWZXJpZmllZCkge1xuICAgIGNvbnN0IG1ldGFMZXZlbExvY2FsQ29udGV4dCA9IE1ldGFMZXZlbExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHByZW1pc2VzID0gW10sXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gbWV0YUxldmVsTG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICBwcmVtaXNlTm9kZXMgPSBwcmVtaXNlc05vZGVRdWVyeShydWxlTm9kZSksXG4gICAgICAgICAgcHJlbWlzZXNWZXJpZmllZCA9IHZlcmlmeVByZW1pc2VzKHByZW1pc2VOb2RlcywgcHJlbWlzZXMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAocHJlbWlzZXNWZXJpZmllZCkge1xuICAgICAgY29uc3QgY29uY2x1c2lvbnMgPSBbXSxcbiAgICAgICAgICAgIGNvbmNsdXNpb25Ob2RlID0gY29uY2x1c2lvbk5vZGVRdWVyeShydWxlTm9kZSksXG4gICAgICAgICAgICBjb25jbHVzaW9uVmVyaWZpZWQgPSB2ZXJpZnlDb25jbHVzaW9uKGNvbmNsdXNpb25Ob2RlLCBjb25jbHVzaW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKGNvbmNsdXNpb25WZXJpZmllZCkge1xuICAgICAgICBsZXQgbWV0YXByb29mVmVyaWZpZWQgPSB0cnVlOyAvLy9cblxuICAgICAgICBjb25zdCBmaXJzdENvbmNsdXNpb24gPSBmaXJzdChjb25jbHVzaW9ucyksXG4gICAgICAgICAgICAgIG1ldGFwcm9vZk5vZGUgPSBtZXRhcHJvb2ZOb2RlUXVlcnkocnVsZU5vZGUpLFxuICAgICAgICAgICAgICBjb25jbHVzaW9uID0gZmlyc3RDb25jbHVzaW9uOyAvLy9cblxuICAgICAgICBpZiAobWV0YXByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZSA9IGNvbmNsdXNpb24uZ2V0TWV0YXN0YXRlbWVudE5vZGUoKTtcblxuICAgICAgICAgIG1ldGFwcm9vZlZlcmlmaWVkID0gdmVyaWZ5TWV0YXByb29mKG1ldGFwcm9vZk5vZGUsIG1ldGFzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1ldGFwcm9vZlZlcmlmaWVkKSB7XG4gICAgICAgICAgY29uc3QgcnVsZSA9IFJ1bGUuZnJvbUxhYmVsc1ByZW1pc2VzQ29uY2x1c2lvbkFuZEZpbGVDb250ZXh0KGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgIGZpbGVDb250ZXh0LmFkZFJ1bGUocnVsZSk7XG5cbiAgICAgICAgICBydWxlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHJ1bGVWZXJpZmllZCkge1xuICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bGFiZWxzU3RyaW5nfScgcnVsZS5gLCBydWxlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gcnVsZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVJ1bGUiLCJsYWJlbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicHJlbWlzZXNOb2RlUXVlcnkiLCJtZXRhcHJvb2ZOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJjb25jbHVzaW9uTm9kZVF1ZXJ5IiwicnVsZU5vZGUiLCJmaWxlQ29udGV4dCIsInJ1bGVWZXJpZmllZCIsImxhYmVsTm9kZXMiLCJsYWJlbHNTdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwidHJhY2UiLCJsYWJlbHMiLCJsYWJlbHNWZXJpZmllZCIsInZlcmlmeUxhYmVscyIsIm1ldGFMZXZlbExvY2FsQ29udGV4dCIsIk1ldGFMZXZlbExvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsInByZW1pc2VzIiwibG9jYWxDb250ZXh0IiwicHJlbWlzZU5vZGVzIiwicHJlbWlzZXNWZXJpZmllZCIsInZlcmlmeVByZW1pc2VzIiwiY29uY2x1c2lvbnMiLCJjb25jbHVzaW9uTm9kZSIsImNvbmNsdXNpb25WZXJpZmllZCIsInZlcmlmeUNvbmNsdXNpb24iLCJtZXRhcHJvb2ZWZXJpZmllZCIsImZpcnN0Q29uY2x1c2lvbiIsImZpcnN0IiwibWV0YXByb29mTm9kZSIsImNvbmNsdXNpb24iLCJzdWJzdGl0dXRpb25zIiwibWV0YXN0YXRlbWVudE5vZGUiLCJnZXRNZXRhc3RhdGVtZW50Tm9kZSIsInZlcmlmeU1ldGFwcm9vZiIsInJ1bGUiLCJSdWxlIiwiZnJvbUxhYmVsc1ByZW1pc2VzQ29uY2x1c2lvbkFuZEZpbGVDb250ZXh0IiwiYWRkUnVsZSIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpQkE7OztlQUF3QkE7OzsyREFmUDs2REFDUTsrREFDRTtnRUFDQztpRUFDQztnRUFDSztxQkFFWjtxQkFDZ0I7Ozs7OztBQUV0QyxJQUFNQyxrQkFBa0JDLElBQUFBLGlCQUFVLEVBQUMsZ0JBQzdCQyxvQkFBb0JELElBQUFBLGlCQUFVLEVBQUMsa0JBQy9CRSxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUMscUJBQy9CQyxzQkFBc0JELElBQUFBLGdCQUFTLEVBQUM7QUFFdkIsU0FBU0wsV0FBV08sUUFBUSxFQUFFQyxXQUFXO0lBQ3RELElBQUlDLGVBQWU7SUFFbkIsSUFBTUMsYUFBYVQsZ0JBQWdCTSxXQUM3QkksZUFBZUgsWUFBWUksYUFBYSxDQUFDRjtJQUUvQ0YsWUFBWUssS0FBSyxDQUFDLEFBQUMsa0JBQThCLE9BQWJGLGNBQWEsY0FBWUo7SUFFN0QsSUFBTU8sU0FBUyxFQUFFLEVBQ1hDLGlCQUFpQkMsSUFBQUEsZUFBWSxFQUFDTixZQUFZSSxRQUFRTjtJQUV4RCxJQUFJTyxnQkFBZ0I7UUFDbEIsSUFBTUUsd0JBQXdCQyxrQkFBcUIsQ0FBQ0MsZUFBZSxDQUFDWCxjQUM5RFksV0FBVyxFQUFFLEVBQ2JDLGVBQWVKLHVCQUNmSyxlQUFlbkIsa0JBQWtCSSxXQUNqQ2dCLG1CQUFtQkMsSUFBQUEsaUJBQWMsRUFBQ0YsY0FBY0YsVUFBVUM7UUFFaEUsSUFBSUUsa0JBQWtCO1lBQ3BCLElBQU1FLGNBQWMsRUFBRSxFQUNoQkMsaUJBQWlCcEIsb0JBQW9CQyxXQUNyQ29CLHFCQUFxQkMsSUFBQUEsbUJBQWdCLEVBQUNGLGdCQUFnQkQsYUFBYUo7WUFFekUsSUFBSU0sb0JBQW9CO2dCQUN0QixJQUFJRSxvQkFBb0IsTUFBTSxHQUFHO2dCQUVqQyxJQUFNQyxrQkFBa0JDLElBQUFBLFlBQUssRUFBQ04sY0FDeEJPLGdCQUFnQjVCLG1CQUFtQkcsV0FDbkMwQixhQUFhSCxpQkFBaUIsR0FBRztnQkFFdkMsSUFBSUUsa0JBQWtCLE1BQU07b0JBQzFCLElBQU1FLGdCQUFnQixFQUFFLEVBQ2xCQyxvQkFBb0JGLFdBQVdHLG9CQUFvQjtvQkFFekRQLG9CQUFvQlEsSUFBQUEsa0JBQWUsRUFBQ0wsZUFBZUcsbUJBQW1CRCxlQUFlYjtnQkFDdkY7Z0JBRUEsSUFBSVEsbUJBQW1CO29CQUNyQixJQUFNUyxPQUFPQyxhQUFJLENBQUNDLDBDQUEwQyxDQUFDMUIsUUFBUU0sVUFBVWEsWUFBWXpCO29CQUUzRkEsWUFBWWlDLE9BQU8sQ0FBQ0g7b0JBRXBCN0IsZUFBZTtnQkFDakI7WUFDRjtRQUNGO0lBQ0Y7SUFFQSxJQUFJQSxjQUFjO1FBQ2hCRCxZQUFZa0MsS0FBSyxDQUFDLEFBQUMsb0JBQWdDLE9BQWIvQixjQUFhLFlBQVVKO0lBQy9EO0lBRUEsT0FBT0U7QUFDVCJ9