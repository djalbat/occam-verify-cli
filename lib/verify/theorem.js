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
var proofNodeQuery = (0, _query.nodeQuery)("/theorem/proof!"), labelNodesQuery = (0, _query.nodesQuery)("/theorem//labels/label"), consequentNodeQuery = (0, _query.nodeQuery)("/theorem/consequent!"), suppositionsNodeQuery = (0, _query.nodesQuery)("/theorem/supposition");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGhlb3JlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRoZW9yZW0gZnJvbSBcIi4uL3RoZW9yZW1cIjtcbmltcG9ydCB2ZXJpZnlQcm9vZiBmcm9tIFwiLi4vdmVyaWZ5L3Byb29mXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgdmVyaWZ5TGFiZWxzIGZyb20gXCIuLi92ZXJpZnkvbGFiZWxzXCI7XG5pbXBvcnQgdmVyaWZ5Q29uc2VxdWVudCBmcm9tIFwiLi4vdmVyaWZ5L2NvbnNlcXVlbnRcIjtcbmltcG9ydCB2ZXJpZnlTdXBwb3NpdGlvbnMgZnJvbSBcIi4uL3ZlcmlmeS9zdXBwb3NpdGlvbnNcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHByb29mTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3RoZW9yZW0vcHJvb2YhXCIpLFxuICAgICAgbGFiZWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi90aGVvcmVtLy9sYWJlbHMvbGFiZWxcIiksXG4gICAgICBjb25zZXF1ZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3RoZW9yZW0vY29uc2VxdWVudCFcIiksXG4gICAgICBzdXBwb3NpdGlvbnNOb2RlUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3RoZW9yZW0vc3VwcG9zaXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVRoZW9yZW0odGhlb3JlbU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCB0aGVvcmVtVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBsYWJlbE5vZGVzID0gbGFiZWxOb2Rlc1F1ZXJ5KHRoZW9yZW1Ob2RlKSxcbiAgICAgICAgbGFiZWxzU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZXNBc1N0cmluZyhsYWJlbE5vZGVzKSxcbiAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCk7XG5cbiAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bGFiZWxzU3RyaW5nfScgdGhlb3JlbS4uLmAsIHRoZW9yZW1Ob2RlKTtcblxuICBjb25zdCBsYWJlbHMgPSBbXSxcbiAgICAgICAgbGFiZWxzVmVyaWZpZWQgPSB2ZXJpZnlMYWJlbHMobGFiZWxOb2RlcywgbGFiZWxzLCBmaWxlQ29udGV4dCk7XG5cbiAgaWYgKGxhYmVsc1ZlcmlmaWVkKSB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25zID0gW10sXG4gICAgICAgICAgc3VwcG9zaXRpb25Ob2RlcyA9IHN1cHBvc2l0aW9uc05vZGVRdWVyeSh0aGVvcmVtTm9kZSksXG4gICAgICAgICAgc3VwcG9zaXRpb25zVmVyaWZpZWQgPSB2ZXJpZnlTdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25Ob2Rlcywgc3VwcG9zaXRpb25zLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBjb25zZXF1ZW50cyA9IFtdLFxuICAgICAgICAgICAgY29uc2VxdWVudE5vZGUgPSBjb25zZXF1ZW50Tm9kZVF1ZXJ5KHRoZW9yZW1Ob2RlKSxcbiAgICAgICAgICAgIGNvbnNlcXVlbnRWZXJpZmllZCA9IHZlcmlmeUNvbnNlcXVlbnQoY29uc2VxdWVudE5vZGUsIGNvbnNlcXVlbnRzLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAoY29uc2VxdWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHByb29mTm9kZSA9IHByb29mTm9kZVF1ZXJ5KHRoZW9yZW1Ob2RlKSxcbiAgICAgICAgICAgICAgZmlyc3RDb25zZXF1ZW50ID0gZmlyc3QoY29uc2VxdWVudHMpLFxuICAgICAgICAgICAgICBjb25zZXF1ZW50ID0gZmlyc3RDb25zZXF1ZW50LCAvLy9cbiAgICAgICAgICAgICAgcHJvb2ZWZXJpZmllZCA9IHZlcmlmeVByb29mKHByb29mTm9kZSwgY29uc2VxdWVudCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICBpZiAocHJvb2ZWZXJpZmllZCkge1xuICAgICAgICAgIGNvbnN0IHRoZW9yZW0gPSBUaGVvcmVtLmZyb21MYWJlbHNTdXBwb3NpdGlvbnNDb25zZXF1ZW50QW5kTG9jYWxDb250ZXh0KGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgZmlsZUNvbnRleHQuYWRkVGhlb3JlbSh0aGVvcmVtKTtcblxuICAgICAgICAgIHRoZW9yZW1WZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAodGhlb3JlbVZlcmlmaWVkKSB7XG4gICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtsYWJlbHNTdHJpbmd9JyB0aGVvcmVtLmAsIHRoZW9yZW1Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiB0aGVvcmVtVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VGhlb3JlbSIsInByb29mTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibGFiZWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImNvbnNlcXVlbnROb2RlUXVlcnkiLCJzdXBwb3NpdGlvbnNOb2RlUXVlcnkiLCJ0aGVvcmVtTm9kZSIsImZpbGVDb250ZXh0IiwidGhlb3JlbVZlcmlmaWVkIiwibGFiZWxOb2RlcyIsImxhYmVsc1N0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJ0cmFjZSIsImxhYmVscyIsImxhYmVsc1ZlcmlmaWVkIiwidmVyaWZ5TGFiZWxzIiwic3VwcG9zaXRpb25zIiwic3VwcG9zaXRpb25Ob2RlcyIsInN1cHBvc2l0aW9uc1ZlcmlmaWVkIiwidmVyaWZ5U3VwcG9zaXRpb25zIiwiY29uc2VxdWVudHMiLCJjb25zZXF1ZW50Tm9kZSIsImNvbnNlcXVlbnRWZXJpZmllZCIsInZlcmlmeUNvbnNlcXVlbnQiLCJwcm9vZk5vZGUiLCJmaXJzdENvbnNlcXVlbnQiLCJmaXJzdCIsImNvbnNlcXVlbnQiLCJwcm9vZlZlcmlmaWVkIiwidmVyaWZ5UHJvb2YiLCJ0aGVvcmVtIiwiVGhlb3JlbSIsImZyb21MYWJlbHNTdXBwb3NpdGlvbnNDb25zZXF1ZW50QW5kTG9jYWxDb250ZXh0IiwiYWRkVGhlb3JlbSIsImRlYnVnIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpQkE7OztlQUF3QkE7Ozs4REFmSjs0REFDSTs0REFDQzs2REFDQTtpRUFDSTttRUFDRTtxQkFFVDtxQkFDZ0I7Ozs7OztBQUV0QyxJQUFNQyxpQkFBaUJDLElBQUFBLGdCQUFTLEVBQUMsb0JBQzNCQyxrQkFBa0JDLElBQUFBLGlCQUFVLEVBQUMsMkJBQzdCQyxzQkFBc0JILElBQUFBLGdCQUFTLEVBQUMseUJBQ2hDSSx3QkFBd0JGLElBQUFBLGlCQUFVLEVBQUM7QUFFMUIsU0FBU0osY0FBY08sV0FBVyxFQUFFQyxXQUFXO0lBQzVELElBQUlDLGtCQUFrQjtJQUV0QixJQUFNQyxhQUFhUCxnQkFBZ0JJLGNBQzdCSSxlQUFlSCxZQUFZSSxhQUFhLENBQUNGLGFBQ3pDRyxlQUFlQyxjQUFZLENBQUNDLGVBQWUsQ0FBQ1A7SUFFbERBLFlBQVlRLEtBQUssQ0FBQyxBQUFDLGtCQUE4QixPQUFiTCxjQUFhLGlCQUFlSjtJQUVoRSxJQUFNVSxTQUFTLEVBQUUsRUFDWEMsaUJBQWlCQyxJQUFBQSxlQUFZLEVBQUNULFlBQVlPLFFBQVFUO0lBRXhELElBQUlVLGdCQUFnQjtRQUNsQixJQUFNRSxlQUFlLEVBQUUsRUFDakJDLG1CQUFtQmYsc0JBQXNCQyxjQUN6Q2UsdUJBQXVCQyxJQUFBQSxxQkFBa0IsRUFBQ0Ysa0JBQWtCRCxjQUFjUDtRQUVoRixJQUFJUyxzQkFBc0I7WUFDeEIsSUFBTUUsY0FBYyxFQUFFLEVBQ2hCQyxpQkFBaUJwQixvQkFBb0JFLGNBQ3JDbUIscUJBQXFCQyxJQUFBQSxtQkFBZ0IsRUFBQ0YsZ0JBQWdCRCxhQUFhWDtZQUV6RSxJQUFJYSxvQkFBb0I7Z0JBQ3RCLElBQU1FLFlBQVkzQixlQUFlTSxjQUMzQnNCLGtCQUFrQkMsSUFBQUEsWUFBSyxFQUFDTixjQUN4Qk8sYUFBYUYsaUJBQ2JHLGdCQUFnQkMsSUFBQUEsY0FBVyxFQUFDTCxXQUFXRyxZQUFZbEI7Z0JBRXpELElBQUltQixlQUFlO29CQUNqQixJQUFNRSxVQUFVQyxnQkFBTyxDQUFDQywrQ0FBK0MsQ0FBQ25CLFFBQVFHLGNBQWNXLFlBQVlsQjtvQkFFMUdMLFlBQVk2QixVQUFVLENBQUNIO29CQUV2QnpCLGtCQUFrQjtnQkFDcEI7WUFDRjtRQUNGO0lBQ0Y7SUFFQSxJQUFJQSxpQkFBaUI7UUFDbkJELFlBQVk4QixLQUFLLENBQUMsQUFBQyxvQkFBZ0MsT0FBYjNCLGNBQWEsZUFBYUo7SUFDbEU7SUFFQSxPQUFPRTtBQUNUIn0=