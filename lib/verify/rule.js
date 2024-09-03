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
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _labels = /*#__PURE__*/ _interop_require_default(require("../verify/labels"));
var _premises = /*#__PURE__*/ _interop_require_default(require("../verify/premises"));
var _metaproof = /*#__PURE__*/ _interop_require_default(require("../verify/metaproof"));
var _conclusion = /*#__PURE__*/ _interop_require_default(require("../verify/conclusion"));
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
        var premises = [], localContext = _local.default.fromFileContext(fileContext), premiseNodes = premisesNodeQuery(ruleNode), premisesVerified = (0, _premises.default)(premiseNodes, premises, localContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCB2ZXJpZnlMYWJlbHMgZnJvbSBcIi4uL3ZlcmlmeS9sYWJlbHNcIjtcbmltcG9ydCB2ZXJpZnlQcmVtaXNlcyBmcm9tIFwiLi4vdmVyaWZ5L3ByZW1pc2VzXCI7XG5pbXBvcnQgdmVyaWZ5TWV0YXByb29mIGZyb20gXCIuLi92ZXJpZnkvbWV0YXByb29mXCI7XG5pbXBvcnQgdmVyaWZ5Q29uY2x1c2lvbiBmcm9tIFwiLi4vdmVyaWZ5L2NvbmNsdXNpb25cIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGxhYmVsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcnVsZS9sYWJlbFwiKSxcbiAgICAgIHByZW1pc2VzTm9kZVF1ZXJ5ID0gbm9kZXNRdWVyeShcIi9ydWxlL3ByZW1pc2VcIiksXG4gICAgICBtZXRhcHJvb2ZOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcnVsZS9tZXRhcHJvb2YhXCIpLFxuICAgICAgY29uY2x1c2lvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ydWxlL2NvbmNsdXNpb24hXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlSdWxlKHJ1bGVOb2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgcnVsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgbGFiZWxOb2RlcyA9IGxhYmVsTm9kZXNRdWVyeShydWxlTm9kZSksXG4gICAgICAgIGxhYmVsc1N0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVzQXNTdHJpbmcobGFiZWxOb2Rlcyk7XG5cbiAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bGFiZWxzU3RyaW5nfScgcnVsZS4uLmAsIHJ1bGVOb2RlKTtcblxuICBjb25zdCBsYWJlbHMgPSBbXSxcbiAgICAgICAgbGFiZWxzVmVyaWZpZWQgPSB2ZXJpZnlMYWJlbHMobGFiZWxOb2RlcywgbGFiZWxzLCBmaWxlQ29udGV4dCk7XG5cbiAgaWYgKGxhYmVsc1ZlcmlmaWVkKSB7XG4gICAgY29uc3QgcHJlbWlzZXMgPSBbXSxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBwcmVtaXNlTm9kZXMgPSBwcmVtaXNlc05vZGVRdWVyeShydWxlTm9kZSksXG4gICAgICAgICAgcHJlbWlzZXNWZXJpZmllZCA9IHZlcmlmeVByZW1pc2VzKHByZW1pc2VOb2RlcywgcHJlbWlzZXMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAocHJlbWlzZXNWZXJpZmllZCkge1xuICAgICAgY29uc3QgY29uY2x1c2lvbnMgPSBbXSxcbiAgICAgICAgICAgIGNvbmNsdXNpb25Ob2RlID0gY29uY2x1c2lvbk5vZGVRdWVyeShydWxlTm9kZSksXG4gICAgICAgICAgICBjb25jbHVzaW9uVmVyaWZpZWQgPSB2ZXJpZnlDb25jbHVzaW9uKGNvbmNsdXNpb25Ob2RlLCBjb25jbHVzaW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKGNvbmNsdXNpb25WZXJpZmllZCkge1xuICAgICAgICBsZXQgbWV0YXByb29mVmVyaWZpZWQgPSB0cnVlOyAvLy9cblxuICAgICAgICBjb25zdCBmaXJzdENvbmNsdXNpb24gPSBmaXJzdChjb25jbHVzaW9ucyksXG4gICAgICAgICAgICAgIG1ldGFwcm9vZk5vZGUgPSBtZXRhcHJvb2ZOb2RlUXVlcnkocnVsZU5vZGUpLFxuICAgICAgICAgICAgICBjb25jbHVzaW9uID0gZmlyc3RDb25jbHVzaW9uOyAvLy9cblxuICAgICAgICBpZiAobWV0YXByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZSA9IGNvbmNsdXNpb24uZ2V0TWV0YXN0YXRlbWVudE5vZGUoKTtcblxuICAgICAgICAgIG1ldGFwcm9vZlZlcmlmaWVkID0gdmVyaWZ5TWV0YXByb29mKG1ldGFwcm9vZk5vZGUsIG1ldGFzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1ldGFwcm9vZlZlcmlmaWVkKSB7XG4gICAgICAgICAgY29uc3QgcnVsZSA9IFJ1bGUuZnJvbUxhYmVsc1ByZW1pc2VzQ29uY2x1c2lvbkFuZEZpbGVDb250ZXh0KGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgIGZpbGVDb250ZXh0LmFkZFJ1bGUocnVsZSk7XG5cbiAgICAgICAgICBydWxlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHJ1bGVWZXJpZmllZCkge1xuICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bGFiZWxzU3RyaW5nfScgcnVsZS5gLCBydWxlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gcnVsZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVJ1bGUiLCJsYWJlbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicHJlbWlzZXNOb2RlUXVlcnkiLCJtZXRhcHJvb2ZOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJjb25jbHVzaW9uTm9kZVF1ZXJ5IiwicnVsZU5vZGUiLCJmaWxlQ29udGV4dCIsInJ1bGVWZXJpZmllZCIsImxhYmVsTm9kZXMiLCJsYWJlbHNTdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwidHJhY2UiLCJsYWJlbHMiLCJsYWJlbHNWZXJpZmllZCIsInZlcmlmeUxhYmVscyIsInByZW1pc2VzIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwicHJlbWlzZU5vZGVzIiwicHJlbWlzZXNWZXJpZmllZCIsInZlcmlmeVByZW1pc2VzIiwiY29uY2x1c2lvbnMiLCJjb25jbHVzaW9uTm9kZSIsImNvbmNsdXNpb25WZXJpZmllZCIsInZlcmlmeUNvbmNsdXNpb24iLCJtZXRhcHJvb2ZWZXJpZmllZCIsImZpcnN0Q29uY2x1c2lvbiIsImZpcnN0IiwibWV0YXByb29mTm9kZSIsImNvbmNsdXNpb24iLCJzdWJzdGl0dXRpb25zIiwibWV0YXN0YXRlbWVudE5vZGUiLCJnZXRNZXRhc3RhdGVtZW50Tm9kZSIsInZlcmlmeU1ldGFwcm9vZiIsInJ1bGUiLCJSdWxlIiwiZnJvbUxhYmVsc1ByZW1pc2VzQ29uY2x1c2lvbkFuZEZpbGVDb250ZXh0IiwiYWRkUnVsZSIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpQkE7OztlQUF3QkE7OzsyREFmUDs0REFDUTs2REFDQTsrREFDRTtnRUFDQztpRUFDQztxQkFFUDtxQkFDZ0I7Ozs7OztBQUV0QyxJQUFNQyxrQkFBa0JDLElBQUFBLGlCQUFVLEVBQUMsZ0JBQzdCQyxvQkFBb0JELElBQUFBLGlCQUFVLEVBQUMsa0JBQy9CRSxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUMscUJBQy9CQyxzQkFBc0JELElBQUFBLGdCQUFTLEVBQUM7QUFFdkIsU0FBU0wsV0FBV08sUUFBUSxFQUFFQyxXQUFXO0lBQ3RELElBQUlDLGVBQWU7SUFFbkIsSUFBTUMsYUFBYVQsZ0JBQWdCTSxXQUM3QkksZUFBZUgsWUFBWUksYUFBYSxDQUFDRjtJQUUvQ0YsWUFBWUssS0FBSyxDQUFDLEFBQUMsa0JBQThCLE9BQWJGLGNBQWEsY0FBWUo7SUFFN0QsSUFBTU8sU0FBUyxFQUFFLEVBQ1hDLGlCQUFpQkMsSUFBQUEsZUFBWSxFQUFDTixZQUFZSSxRQUFRTjtJQUV4RCxJQUFJTyxnQkFBZ0I7UUFDbEIsSUFBTUUsV0FBVyxFQUFFLEVBQ2JDLGVBQWVDLGNBQVksQ0FBQ0MsZUFBZSxDQUFDWixjQUM1Q2EsZUFBZWxCLGtCQUFrQkksV0FDakNlLG1CQUFtQkMsSUFBQUEsaUJBQWMsRUFBQ0YsY0FBY0osVUFBVUM7UUFFaEUsSUFBSUksa0JBQWtCO1lBQ3BCLElBQU1FLGNBQWMsRUFBRSxFQUNoQkMsaUJBQWlCbkIsb0JBQW9CQyxXQUNyQ21CLHFCQUFxQkMsSUFBQUEsbUJBQWdCLEVBQUNGLGdCQUFnQkQsYUFBYU47WUFFekUsSUFBSVEsb0JBQW9CO2dCQUN0QixJQUFJRSxvQkFBb0IsTUFBTSxHQUFHO2dCQUVqQyxJQUFNQyxrQkFBa0JDLElBQUFBLFlBQUssRUFBQ04sY0FDeEJPLGdCQUFnQjNCLG1CQUFtQkcsV0FDbkN5QixhQUFhSCxpQkFBaUIsR0FBRztnQkFFdkMsSUFBSUUsa0JBQWtCLE1BQU07b0JBQzFCLElBQU1FLGdCQUFnQixFQUFFLEVBQ2xCQyxvQkFBb0JGLFdBQVdHLG9CQUFvQjtvQkFFekRQLG9CQUFvQlEsSUFBQUEsa0JBQWUsRUFBQ0wsZUFBZUcsbUJBQW1CRCxlQUFlZjtnQkFDdkY7Z0JBRUEsSUFBSVUsbUJBQW1CO29CQUNyQixJQUFNUyxPQUFPQyxhQUFJLENBQUNDLDBDQUEwQyxDQUFDekIsUUFBUUcsVUFBVWUsWUFBWXhCO29CQUUzRkEsWUFBWWdDLE9BQU8sQ0FBQ0g7b0JBRXBCNUIsZUFBZTtnQkFDakI7WUFDRjtRQUNGO0lBQ0Y7SUFFQSxJQUFJQSxjQUFjO1FBQ2hCRCxZQUFZaUMsS0FBSyxDQUFDLEFBQUMsb0JBQWdDLE9BQWI5QixjQUFhLFlBQVVKO0lBQy9EO0lBRUEsT0FBT0U7QUFDVCJ9