"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyTheorem;
    }
});
var _theorem = /*#__PURE__*/ _interop_require_default(require("../theorem"));
var _proof = /*#__PURE__*/ _interop_require_default(require("../verify/proof"));
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _labels = /*#__PURE__*/ _interop_require_default(require("../verify/labels"));
var _consequent = /*#__PURE__*/ _interop_require_default(require("../verify/consequent"));
var _suppositions = /*#__PURE__*/ _interop_require_default(require("../verify/suppositions"));
var _array = require("../utilities/array");
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var proofNodeQuery = (0, _query.nodeQuery)("/theorem/proof!"), labelNodesQuery = (0, _query.nodesQuery)("/theorem/label"), consequentNodeQuery = (0, _query.nodeQuery)("/theorem/consequent!"), suppositionsNodeQuery = (0, _query.nodesQuery)("/theorem/supposition");
function verifyTheorem(theoremNode, fileContext) {
    var theoremVerified = false;
    var labelNodes = labelNodesQuery(theoremNode), labelsString = fileContext.nodesAsString(labelNodes), localContext = _local.default.fromFileContext(fileContext);
    fileContext.trace("Verifying the '".concat(labelsString, "' theorem..."), theoremNode);
    var labels = [], labelsVerified = (0, _labels.default)(labelNodes, labels, fileContext);
    if (labelsVerified) {
        var suppositions = [], suppositionNodes = suppositionsNodeQuery(theoremNode), suppositionsVerified = (0, _suppositions.default)(suppositionNodes, suppositions, localContext);
        if (suppositionsVerified) {
            var consequents = [], consequentNode = consequentNodeQuery(theoremNode), consequentVerified = (0, _consequent.default)(consequentNode, consequents, localContext);
            if (consequentVerified) {
                var proofNode = proofNodeQuery(theoremNode), firstConsequent = (0, _array.first)(consequents), consequent = firstConsequent, proofVerified = (0, _proof.default)(proofNode, consequent, localContext);
                if (proofVerified) {
                    var theorem = _theorem.default.fromLabelsSuppositionsConsequentAndLocalContext(labels, suppositions, consequent, localContext);
                    fileContext.addTheorem(theorem);
                    theoremVerified = true;
                }
            }
        }
    }
    if (theoremVerified) {
        fileContext.debug("...verified the '".concat(labelsString, "' theorem."), theoremNode);
    }
    return theoremVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGhlb3JlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRoZW9yZW0gZnJvbSBcIi4uL3RoZW9yZW1cIjtcbmltcG9ydCB2ZXJpZnlQcm9vZiBmcm9tIFwiLi4vdmVyaWZ5L3Byb29mXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgdmVyaWZ5TGFiZWxzIGZyb20gXCIuLi92ZXJpZnkvbGFiZWxzXCI7XG5pbXBvcnQgdmVyaWZ5Q29uc2VxdWVudCBmcm9tIFwiLi4vdmVyaWZ5L2NvbnNlcXVlbnRcIjtcbmltcG9ydCB2ZXJpZnlTdXBwb3NpdGlvbnMgZnJvbSBcIi4uL3ZlcmlmeS9zdXBwb3NpdGlvbnNcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHByb29mTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3RoZW9yZW0vcHJvb2YhXCIpLFxuICAgICAgbGFiZWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi90aGVvcmVtL2xhYmVsXCIpLFxuICAgICAgY29uc2VxdWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90aGVvcmVtL2NvbnNlcXVlbnQhXCIpLFxuICAgICAgc3VwcG9zaXRpb25zTm9kZVF1ZXJ5ID0gbm9kZXNRdWVyeShcIi90aGVvcmVtL3N1cHBvc2l0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlUaGVvcmVtKHRoZW9yZW1Ob2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgdGhlb3JlbVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgbGFiZWxOb2RlcyA9IGxhYmVsTm9kZXNRdWVyeSh0aGVvcmVtTm9kZSksXG4gICAgICAgIGxhYmVsc1N0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVzQXNTdHJpbmcobGFiZWxOb2RlcyksXG4gICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpO1xuXG4gIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2xhYmVsc1N0cmluZ30nIHRoZW9yZW0uLi5gLCB0aGVvcmVtTm9kZSk7XG5cbiAgY29uc3QgbGFiZWxzID0gW10sXG4gICAgICAgIGxhYmVsc1ZlcmlmaWVkID0gdmVyaWZ5TGFiZWxzKGxhYmVsTm9kZXMsIGxhYmVscywgZmlsZUNvbnRleHQpO1xuXG4gIGlmIChsYWJlbHNWZXJpZmllZCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9ucyA9IFtdLFxuICAgICAgICAgIHN1cHBvc2l0aW9uTm9kZXMgPSBzdXBwb3NpdGlvbnNOb2RlUXVlcnkodGhlb3JlbU5vZGUpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc1ZlcmlmaWVkID0gdmVyaWZ5U3VwcG9zaXRpb25zKHN1cHBvc2l0aW9uTm9kZXMsIHN1cHBvc2l0aW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZmllZCkge1xuICAgICAgY29uc3QgY29uc2VxdWVudHMgPSBbXSxcbiAgICAgICAgICAgIGNvbnNlcXVlbnROb2RlID0gY29uc2VxdWVudE5vZGVRdWVyeSh0aGVvcmVtTm9kZSksXG4gICAgICAgICAgICBjb25zZXF1ZW50VmVyaWZpZWQgPSB2ZXJpZnlDb25zZXF1ZW50KGNvbnNlcXVlbnROb2RlLCBjb25zZXF1ZW50cywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKGNvbnNlcXVlbnRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBwcm9vZk5vZGUgPSBwcm9vZk5vZGVRdWVyeSh0aGVvcmVtTm9kZSksXG4gICAgICAgICAgICAgIGZpcnN0Q29uc2VxdWVudCA9IGZpcnN0KGNvbnNlcXVlbnRzKSxcbiAgICAgICAgICAgICAgY29uc2VxdWVudCA9IGZpcnN0Q29uc2VxdWVudCwgLy8vXG4gICAgICAgICAgICAgIHByb29mVmVyaWZpZWQgPSB2ZXJpZnlQcm9vZihwcm9vZk5vZGUsIGNvbnNlcXVlbnQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHByb29mVmVyaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCB0aGVvcmVtID0gVGhlb3JlbS5mcm9tTGFiZWxzU3VwcG9zaXRpb25zQ29uc2VxdWVudEFuZExvY2FsQ29udGV4dChsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVudCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgIGZpbGVDb250ZXh0LmFkZFRoZW9yZW0odGhlb3JlbSk7XG5cbiAgICAgICAgICB0aGVvcmVtVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHRoZW9yZW1WZXJpZmllZCkge1xuICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bGFiZWxzU3RyaW5nfScgdGhlb3JlbS5gLCB0aGVvcmVtTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdGhlb3JlbVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVRoZW9yZW0iLCJwcm9vZk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImxhYmVsTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJjb25zZXF1ZW50Tm9kZVF1ZXJ5Iiwic3VwcG9zaXRpb25zTm9kZVF1ZXJ5IiwidGhlb3JlbU5vZGUiLCJmaWxlQ29udGV4dCIsInRoZW9yZW1WZXJpZmllZCIsImxhYmVsTm9kZXMiLCJsYWJlbHNTdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwidHJhY2UiLCJsYWJlbHMiLCJsYWJlbHNWZXJpZmllZCIsInZlcmlmeUxhYmVscyIsInN1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9uTm9kZXMiLCJzdXBwb3NpdGlvbnNWZXJpZmllZCIsInZlcmlmeVN1cHBvc2l0aW9ucyIsImNvbnNlcXVlbnRzIiwiY29uc2VxdWVudE5vZGUiLCJjb25zZXF1ZW50VmVyaWZpZWQiLCJ2ZXJpZnlDb25zZXF1ZW50IiwicHJvb2ZOb2RlIiwiZmlyc3RDb25zZXF1ZW50IiwiZmlyc3QiLCJjb25zZXF1ZW50IiwicHJvb2ZWZXJpZmllZCIsInZlcmlmeVByb29mIiwidGhlb3JlbSIsIlRoZW9yZW0iLCJmcm9tTGFiZWxzU3VwcG9zaXRpb25zQ29uc2VxdWVudEFuZExvY2FsQ29udGV4dCIsImFkZFRoZW9yZW0iLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUJBOzs7ZUFBd0JBOzs7OERBZko7NERBQ0k7NERBQ0M7NkRBQ0E7aUVBQ0k7bUVBQ0U7cUJBRVQ7cUJBQ2dCOzs7Ozs7QUFFdEMsSUFBTUMsaUJBQWlCQyxJQUFBQSxnQkFBUyxFQUFDLG9CQUMzQkMsa0JBQWtCQyxJQUFBQSxpQkFBVSxFQUFDLG1CQUM3QkMsc0JBQXNCSCxJQUFBQSxnQkFBUyxFQUFDLHlCQUNoQ0ksd0JBQXdCRixJQUFBQSxpQkFBVSxFQUFDO0FBRTFCLFNBQVNKLGNBQWNPLFdBQVcsRUFBRUMsV0FBVztJQUM1RCxJQUFJQyxrQkFBa0I7SUFFdEIsSUFBTUMsYUFBYVAsZ0JBQWdCSSxjQUM3QkksZUFBZUgsWUFBWUksYUFBYSxDQUFDRixhQUN6Q0csZUFBZUMsY0FBWSxDQUFDQyxlQUFlLENBQUNQO0lBRWxEQSxZQUFZUSxLQUFLLENBQUMsQUFBQyxrQkFBOEIsT0FBYkwsY0FBYSxpQkFBZUo7SUFFaEUsSUFBTVUsU0FBUyxFQUFFLEVBQ1hDLGlCQUFpQkMsSUFBQUEsZUFBWSxFQUFDVCxZQUFZTyxRQUFRVDtJQUV4RCxJQUFJVSxnQkFBZ0I7UUFDbEIsSUFBTUUsZUFBZSxFQUFFLEVBQ2pCQyxtQkFBbUJmLHNCQUFzQkMsY0FDekNlLHVCQUF1QkMsSUFBQUEscUJBQWtCLEVBQUNGLGtCQUFrQkQsY0FBY1A7UUFFaEYsSUFBSVMsc0JBQXNCO1lBQ3hCLElBQU1FLGNBQWMsRUFBRSxFQUNoQkMsaUJBQWlCcEIsb0JBQW9CRSxjQUNyQ21CLHFCQUFxQkMsSUFBQUEsbUJBQWdCLEVBQUNGLGdCQUFnQkQsYUFBYVg7WUFFekUsSUFBSWEsb0JBQW9CO2dCQUN0QixJQUFNRSxZQUFZM0IsZUFBZU0sY0FDM0JzQixrQkFBa0JDLElBQUFBLFlBQUssRUFBQ04sY0FDeEJPLGFBQWFGLGlCQUNiRyxnQkFBZ0JDLElBQUFBLGNBQVcsRUFBQ0wsV0FBV0csWUFBWWxCO2dCQUV6RCxJQUFJbUIsZUFBZTtvQkFDakIsSUFBTUUsVUFBVUMsZ0JBQU8sQ0FBQ0MsK0NBQStDLENBQUNuQixRQUFRRyxjQUFjVyxZQUFZbEI7b0JBRTFHTCxZQUFZNkIsVUFBVSxDQUFDSDtvQkFFdkJ6QixrQkFBa0I7Z0JBQ3BCO1lBQ0Y7UUFDRjtJQUNGO0lBRUEsSUFBSUEsaUJBQWlCO1FBQ25CRCxZQUFZOEIsS0FBSyxDQUFDLEFBQUMsb0JBQWdDLE9BQWIzQixjQUFhLGVBQWFKO0lBQ2xFO0lBRUEsT0FBT0U7QUFDVCJ9