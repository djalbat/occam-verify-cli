"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyConjecture;
    }
});
var _conjecture = /*#__PURE__*/ _interop_require_default(require("../conjecture"));
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
var proofNodeQuery = (0, _query.nodeQuery)("/conjecture/proof!"), labelNodesQuery = (0, _query.nodesQuery)("/conjecture//reference/label"), consequentNodeQuery = (0, _query.nodeQuery)("/conjecture/consequent!"), suppositionsNodeQuery = (0, _query.nodesQuery)("/conjecture/supposition");
function verifyConjecture(conjectureNode, fileContext) {
    var conjectureVerified = false;
    var labelNodes = labelNodesQuery(conjectureNode), labelsString = fileContext.nodesAsString(labelNodes), localContext = _local.default.fromFileContext(fileContext);
    fileContext.trace("Verifying the '".concat(labelsString, "' conjecture..."), conjectureNode);
    var labels = [], labelsVerified = (0, _labels.default)(labelNodes, labels, fileContext);
    if (labelsVerified) {
        var suppositions = [], suppositionNodes = suppositionsNodeQuery(conjectureNode), suppositionsVerified = (0, _suppositions.default)(suppositionNodes, suppositions, localContext);
        if (suppositionsVerified) {
            var consequents = [], consequentNode = consequentNodeQuery(conjectureNode), consequentVerified = (0, _consequent.default)(consequentNode, consequents, localContext);
            if (consequentVerified) {
                var proofNode = proofNodeQuery(conjectureNode), firstConsequent = (0, _array.first)(consequents), consequent = firstConsequent; ///
                if (proofNode !== null) {
                    (0, _proof.default)(proofNode, consequent, localContext);
                }
                var conjecture = _conjecture.default.fromLabelsSuppositionsConsequentAndLocalContext(labels, suppositions, consequent, localContext);
                fileContext.addConjecture(conjecture);
                conjectureVerified = true;
            }
        }
    }
    if (conjectureVerified) {
        fileContext.debug("...verified the '".concat(labelsString, "' conjecture."), conjectureNode);
    }
    return conjectureVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvY29uamVjdHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbmplY3R1cmUgZnJvbSBcIi4uL2NvbmplY3R1cmVcIjtcbmltcG9ydCB2ZXJpZnlQcm9vZiBmcm9tIFwiLi4vdmVyaWZ5L3Byb29mXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgdmVyaWZ5TGFiZWxzIGZyb20gXCIuLi92ZXJpZnkvbGFiZWxzXCI7XG5pbXBvcnQgdmVyaWZ5Q29uc2VxdWVudCBmcm9tIFwiLi4vdmVyaWZ5L2NvbnNlcXVlbnRcIjtcbmltcG9ydCB2ZXJpZnlTdXBwb3NpdGlvbnMgZnJvbSBcIi4uL3ZlcmlmeS9zdXBwb3NpdGlvbnNcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHByb29mTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbmplY3R1cmUvcHJvb2YhXCIpLFxuICAgICAgbGFiZWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9jb25qZWN0dXJlLy9yZWZlcmVuY2UvbGFiZWxcIiksXG4gICAgICBjb25zZXF1ZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbmplY3R1cmUvY29uc2VxdWVudCFcIiksXG4gICAgICBzdXBwb3NpdGlvbnNOb2RlUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2NvbmplY3R1cmUvc3VwcG9zaXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeUNvbmplY3R1cmUoY29uamVjdHVyZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCBjb25qZWN0dXJlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBsYWJlbE5vZGVzID0gbGFiZWxOb2Rlc1F1ZXJ5KGNvbmplY3R1cmVOb2RlKSxcbiAgICAgICAgbGFiZWxzU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZXNBc1N0cmluZyhsYWJlbE5vZGVzKSxcbiAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCk7XG5cbiAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bGFiZWxzU3RyaW5nfScgY29uamVjdHVyZS4uLmAsIGNvbmplY3R1cmVOb2RlKTtcblxuICBjb25zdCBsYWJlbHMgPSBbXSxcbiAgICAgICAgbGFiZWxzVmVyaWZpZWQgPSB2ZXJpZnlMYWJlbHMobGFiZWxOb2RlcywgbGFiZWxzLCBmaWxlQ29udGV4dCk7XG5cbiAgaWYgKGxhYmVsc1ZlcmlmaWVkKSB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25zID0gW10sXG4gICAgICAgICAgc3VwcG9zaXRpb25Ob2RlcyA9IHN1cHBvc2l0aW9uc05vZGVRdWVyeShjb25qZWN0dXJlTm9kZSksXG4gICAgICAgICAgc3VwcG9zaXRpb25zVmVyaWZpZWQgPSB2ZXJpZnlTdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25Ob2Rlcywgc3VwcG9zaXRpb25zLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBjb25zZXF1ZW50cyA9IFtdLFxuICAgICAgICAgICAgY29uc2VxdWVudE5vZGUgPSBjb25zZXF1ZW50Tm9kZVF1ZXJ5KGNvbmplY3R1cmVOb2RlKSxcbiAgICAgICAgICAgIGNvbnNlcXVlbnRWZXJpZmllZCA9IHZlcmlmeUNvbnNlcXVlbnQoY29uc2VxdWVudE5vZGUsIGNvbnNlcXVlbnRzLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAoY29uc2VxdWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHByb29mTm9kZSA9IHByb29mTm9kZVF1ZXJ5KGNvbmplY3R1cmVOb2RlKSxcbiAgICAgICAgICAgICAgZmlyc3RDb25zZXF1ZW50ID0gZmlyc3QoY29uc2VxdWVudHMpLFxuICAgICAgICAgICAgICBjb25zZXF1ZW50ID0gZmlyc3RDb25zZXF1ZW50OyAvLy9cblxuICAgICAgICBpZiAocHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgdmVyaWZ5UHJvb2YocHJvb2ZOb2RlLCBjb25zZXF1ZW50LCBsb2NhbENvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29uamVjdHVyZSA9IENvbmplY3R1cmUuZnJvbUxhYmVsc1N1cHBvc2l0aW9uc0NvbnNlcXVlbnRBbmRMb2NhbENvbnRleHQobGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgZmlsZUNvbnRleHQuYWRkQ29uamVjdHVyZShjb25qZWN0dXJlKTtcblxuICAgICAgICBjb25qZWN0dXJlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChjb25qZWN0dXJlVmVyaWZpZWQpIHtcbiAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2xhYmVsc1N0cmluZ30nIGNvbmplY3R1cmUuYCwgY29uamVjdHVyZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGNvbmplY3R1cmVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlDb25qZWN0dXJlIiwicHJvb2ZOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJsYWJlbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiY29uc2VxdWVudE5vZGVRdWVyeSIsInN1cHBvc2l0aW9uc05vZGVRdWVyeSIsImNvbmplY3R1cmVOb2RlIiwiZmlsZUNvbnRleHQiLCJjb25qZWN0dXJlVmVyaWZpZWQiLCJsYWJlbE5vZGVzIiwibGFiZWxzU3RyaW5nIiwibm9kZXNBc1N0cmluZyIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsInRyYWNlIiwibGFiZWxzIiwibGFiZWxzVmVyaWZpZWQiLCJ2ZXJpZnlMYWJlbHMiLCJzdXBwb3NpdGlvbnMiLCJzdXBwb3NpdGlvbk5vZGVzIiwic3VwcG9zaXRpb25zVmVyaWZpZWQiLCJ2ZXJpZnlTdXBwb3NpdGlvbnMiLCJjb25zZXF1ZW50cyIsImNvbnNlcXVlbnROb2RlIiwiY29uc2VxdWVudFZlcmlmaWVkIiwidmVyaWZ5Q29uc2VxdWVudCIsInByb29mTm9kZSIsImZpcnN0Q29uc2VxdWVudCIsImZpcnN0IiwiY29uc2VxdWVudCIsInZlcmlmeVByb29mIiwiY29uamVjdHVyZSIsIkNvbmplY3R1cmUiLCJmcm9tTGFiZWxzU3VwcG9zaXRpb25zQ29uc2VxdWVudEFuZExvY2FsQ29udGV4dCIsImFkZENvbmplY3R1cmUiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUJBOzs7ZUFBd0JBOzs7aUVBZkQ7NERBQ0M7NERBQ0M7NkRBQ0E7aUVBQ0k7bUVBQ0U7cUJBRVQ7cUJBQ2dCOzs7Ozs7QUFFdEMsSUFBTUMsaUJBQWlCQyxJQUFBQSxnQkFBUyxFQUFDLHVCQUMzQkMsa0JBQWtCQyxJQUFBQSxpQkFBVSxFQUFDLGlDQUM3QkMsc0JBQXNCSCxJQUFBQSxnQkFBUyxFQUFDLDRCQUNoQ0ksd0JBQXdCRixJQUFBQSxpQkFBVSxFQUFDO0FBRTFCLFNBQVNKLGlCQUFpQk8sY0FBYyxFQUFFQyxXQUFXO0lBQ2xFLElBQUlDLHFCQUFxQjtJQUV6QixJQUFNQyxhQUFhUCxnQkFBZ0JJLGlCQUM3QkksZUFBZUgsWUFBWUksYUFBYSxDQUFDRixhQUN6Q0csZUFBZUMsY0FBWSxDQUFDQyxlQUFlLENBQUNQO0lBRWxEQSxZQUFZUSxLQUFLLENBQUMsQUFBQyxrQkFBOEIsT0FBYkwsY0FBYSxvQkFBa0JKO0lBRW5FLElBQU1VLFNBQVMsRUFBRSxFQUNYQyxpQkFBaUJDLElBQUFBLGVBQVksRUFBQ1QsWUFBWU8sUUFBUVQ7SUFFeEQsSUFBSVUsZ0JBQWdCO1FBQ2xCLElBQU1FLGVBQWUsRUFBRSxFQUNqQkMsbUJBQW1CZixzQkFBc0JDLGlCQUN6Q2UsdUJBQXVCQyxJQUFBQSxxQkFBa0IsRUFBQ0Ysa0JBQWtCRCxjQUFjUDtRQUVoRixJQUFJUyxzQkFBc0I7WUFDeEIsSUFBTUUsY0FBYyxFQUFFLEVBQ2hCQyxpQkFBaUJwQixvQkFBb0JFLGlCQUNyQ21CLHFCQUFxQkMsSUFBQUEsbUJBQWdCLEVBQUNGLGdCQUFnQkQsYUFBYVg7WUFFekUsSUFBSWEsb0JBQW9CO2dCQUN0QixJQUFNRSxZQUFZM0IsZUFBZU0saUJBQzNCc0Isa0JBQWtCQyxJQUFBQSxZQUFLLEVBQUNOLGNBQ3hCTyxhQUFhRixpQkFBaUIsR0FBRztnQkFFdkMsSUFBSUQsY0FBYyxNQUFNO29CQUN0QkksSUFBQUEsY0FBVyxFQUFDSixXQUFXRyxZQUFZbEI7Z0JBQ3JDO2dCQUVBLElBQU1vQixhQUFhQyxtQkFBVSxDQUFDQywrQ0FBK0MsQ0FBQ2xCLFFBQVFHLGNBQWNXLFlBQVlsQjtnQkFFaEhMLFlBQVk0QixhQUFhLENBQUNIO2dCQUUxQnhCLHFCQUFxQjtZQUN2QjtRQUNGO0lBQ0Y7SUFFQSxJQUFJQSxvQkFBb0I7UUFDdEJELFlBQVk2QixLQUFLLENBQUMsQUFBQyxvQkFBZ0MsT0FBYjFCLGNBQWEsa0JBQWdCSjtJQUNyRTtJQUVBLE9BQU9FO0FBQ1QifQ==