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
var _proof1 = /*#__PURE__*/ _interop_require_default(require("../context/proof"));
var _labels = /*#__PURE__*/ _interop_require_default(require("../verify/labels"));
var _consequent = /*#__PURE__*/ _interop_require_default(require("./consequent"));
var _supposition = /*#__PURE__*/ _interop_require_default(require("./supposition"));
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
    var labelNodes = labelNodesQuery(theoremNode), labelsString = fileContext.nodesAsString(labelNodes), proofContext = _proof1.default.fromFileContext(fileContext);
    fileContext.debug("Verifying the '".concat(labelsString, "' theorem..."), theoremNode);
    var labels = [], labelsVerified = (0, _labels.default)(labelNodes, labels, fileContext);
    if (labelsVerified) {
        var suppositions = [], suppositionNodes = suppositionsNodeQuery(theoremNode), suppositionsVerified = suppositionNodes.every(function(suppositionNode) {
            var suppositionVerified = (0, _supposition.default)(suppositionNode, suppositions, proofContext);
            if (suppositionVerified) {
                return true;
            }
        });
        if (suppositionsVerified) {
            var consequents = [], consequentNode = consequentNodeQuery(theoremNode), consequentVerified = (0, _consequent.default)(consequentNode, consequents, proofContext);
            if (consequentVerified) {
                var proofNode = proofNodeQuery(theoremNode), firstConsequent = (0, _array.first)(consequents), consequent = firstConsequent, proofVerified = (0, _proof.default)(proofNode, consequent, proofContext);
                if (proofVerified) {
                    var theorem = _theorem.default.fromLabelsSuppositionsConsequentAndProofContext(labels, suppositions, consequent, proofContext);
                    fileContext.addTheorem(theorem);
                    theoremVerified = true;
                }
            }
        }
    }
    if (theoremVerified) {
        fileContext.info("Verified the '".concat(labelsString, "' theorem."), theoremNode);
    }
    return theoremVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGhlb3JlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRoZW9yZW0gZnJvbSBcIi4uL3RoZW9yZW1cIjtcbmltcG9ydCB2ZXJpZnlQcm9vZiBmcm9tIFwiLi4vdmVyaWZ5L3Byb29mXCI7XG5pbXBvcnQgUHJvb2ZDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3Byb29mXCI7XG5pbXBvcnQgdmVyaWZ5TGFiZWxzIGZyb20gXCIuLi92ZXJpZnkvbGFiZWxzXCI7XG5pbXBvcnQgdmVyaWZ5Q29uc2VxdWVudCBmcm9tIFwiLi9jb25zZXF1ZW50XCI7XG5pbXBvcnQgdmVyaWZ5U3VwcG9zaXRpb24gZnJvbSBcIi4vc3VwcG9zaXRpb25cIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHByb29mTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3RoZW9yZW0vcHJvb2YhXCIpLFxuICAgICAgbGFiZWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi90aGVvcmVtL2xhYmVsXCIpLFxuICAgICAgY29uc2VxdWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90aGVvcmVtL2NvbnNlcXVlbnQhXCIpLFxuICAgICAgc3VwcG9zaXRpb25zTm9kZVF1ZXJ5ID0gbm9kZXNRdWVyeShcIi90aGVvcmVtL3N1cHBvc2l0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlUaGVvcmVtKHRoZW9yZW1Ob2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgdGhlb3JlbVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgbGFiZWxOb2RlcyA9IGxhYmVsTm9kZXNRdWVyeSh0aGVvcmVtTm9kZSksXG4gICAgICAgIGxhYmVsc1N0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVzQXNTdHJpbmcobGFiZWxOb2RlcyksXG4gICAgICAgIHByb29mQ29udGV4dCA9IFByb29mQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpO1xuXG4gIGZpbGVDb250ZXh0LmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke2xhYmVsc1N0cmluZ30nIHRoZW9yZW0uLi5gLCB0aGVvcmVtTm9kZSk7XG5cbiAgY29uc3QgbGFiZWxzID0gW10sXG4gICAgICAgIGxhYmVsc1ZlcmlmaWVkID0gdmVyaWZ5TGFiZWxzKGxhYmVsTm9kZXMsIGxhYmVscywgZmlsZUNvbnRleHQpO1xuXG4gIGlmIChsYWJlbHNWZXJpZmllZCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9ucyA9IFtdLFxuICAgICAgICAgIHN1cHBvc2l0aW9uTm9kZXMgPSBzdXBwb3NpdGlvbnNOb2RlUXVlcnkodGhlb3JlbU5vZGUpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc1ZlcmlmaWVkID0gc3VwcG9zaXRpb25Ob2Rlcy5ldmVyeSgoc3VwcG9zaXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVkID0gdmVyaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb25Ob2RlLCBzdXBwb3NpdGlvbnMsIHByb29mQ29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBjb25zZXF1ZW50cyA9IFtdLFxuICAgICAgICAgICAgY29uc2VxdWVudE5vZGUgPSBjb25zZXF1ZW50Tm9kZVF1ZXJ5KHRoZW9yZW1Ob2RlKSxcbiAgICAgICAgICAgIGNvbnNlcXVlbnRWZXJpZmllZCA9IHZlcmlmeUNvbnNlcXVlbnQoY29uc2VxdWVudE5vZGUsIGNvbnNlcXVlbnRzLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICBpZiAoY29uc2VxdWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHByb29mTm9kZSA9IHByb29mTm9kZVF1ZXJ5KHRoZW9yZW1Ob2RlKSxcbiAgICAgICAgICAgICAgZmlyc3RDb25zZXF1ZW50ID0gZmlyc3QoY29uc2VxdWVudHMpLFxuICAgICAgICAgICAgICBjb25zZXF1ZW50ID0gZmlyc3RDb25zZXF1ZW50LCAvLy9cbiAgICAgICAgICAgICAgcHJvb2ZWZXJpZmllZCA9IHZlcmlmeVByb29mKHByb29mTm9kZSwgY29uc2VxdWVudCwgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgICBpZiAocHJvb2ZWZXJpZmllZCkge1xuICAgICAgICAgIGNvbnN0IHRoZW9yZW0gPSBUaGVvcmVtLmZyb21MYWJlbHNTdXBwb3NpdGlvbnNDb25zZXF1ZW50QW5kUHJvb2ZDb250ZXh0KGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICAgICAgZmlsZUNvbnRleHQuYWRkVGhlb3JlbSh0aGVvcmVtKTtcblxuICAgICAgICAgIHRoZW9yZW1WZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAodGhlb3JlbVZlcmlmaWVkKSB7XG4gICAgZmlsZUNvbnRleHQuaW5mbyhgVmVyaWZpZWQgdGhlICcke2xhYmVsc1N0cmluZ30nIHRoZW9yZW0uYCwgdGhlb3JlbU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHRoZW9yZW1WZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUaGVvcmVtIiwicHJvb2ZOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJsYWJlbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiY29uc2VxdWVudE5vZGVRdWVyeSIsInN1cHBvc2l0aW9uc05vZGVRdWVyeSIsInRoZW9yZW1Ob2RlIiwiZmlsZUNvbnRleHQiLCJ0aGVvcmVtVmVyaWZpZWQiLCJsYWJlbE5vZGVzIiwibGFiZWxzU3RyaW5nIiwibm9kZXNBc1N0cmluZyIsInByb29mQ29udGV4dCIsIlByb29mQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsImRlYnVnIiwibGFiZWxzIiwibGFiZWxzVmVyaWZpZWQiLCJ2ZXJpZnlMYWJlbHMiLCJzdXBwb3NpdGlvbnMiLCJzdXBwb3NpdGlvbk5vZGVzIiwic3VwcG9zaXRpb25zVmVyaWZpZWQiLCJldmVyeSIsInN1cHBvc2l0aW9uTm9kZSIsInN1cHBvc2l0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlTdXBwb3NpdGlvbiIsImNvbnNlcXVlbnRzIiwiY29uc2VxdWVudE5vZGUiLCJjb25zZXF1ZW50VmVyaWZpZWQiLCJ2ZXJpZnlDb25zZXF1ZW50IiwicHJvb2ZOb2RlIiwiZmlyc3RDb25zZXF1ZW50IiwiZmlyc3QiLCJjb25zZXF1ZW50IiwicHJvb2ZWZXJpZmllZCIsInZlcmlmeVByb29mIiwidGhlb3JlbSIsIlRoZW9yZW0iLCJmcm9tTGFiZWxzU3VwcG9zaXRpb25zQ29uc2VxdWVudEFuZFByb29mQ29udGV4dCIsImFkZFRoZW9yZW0iLCJpbmZvIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpQkE7OztlQUF3QkE7Ozs4REFmSjs0REFDSTs2REFDQzs2REFDQTtpRUFDSTtrRUFDQztxQkFFUjtxQkFDZ0I7Ozs7OztBQUV0QyxJQUFNQyxpQkFBaUJDLElBQUFBLGtCQUFVLG9CQUMzQkMsa0JBQWtCQyxJQUFBQSxtQkFBVyxtQkFDN0JDLHNCQUFzQkgsSUFBQUEsa0JBQVUseUJBQ2hDSSx3QkFBd0JGLElBQUFBLG1CQUFXO0FBRTFCLFNBQVNKLGNBQWNPLFdBQVcsRUFBRUMsV0FBVztJQUM1RCxJQUFJQyxrQkFBa0I7SUFFdEIsSUFBTUMsYUFBYVAsZ0JBQWdCSSxjQUM3QkksZUFBZUgsWUFBWUksY0FBY0YsYUFDekNHLGVBQWVDLGdCQUFhQyxnQkFBZ0JQO0lBRWxEQSxZQUFZUSxNQUFNLEFBQUMsa0JBQThCLE9BQWJMLGNBQWEsaUJBQWVKO0lBRWhFLElBQU1VLFNBQVMsRUFBRSxFQUNYQyxpQkFBaUJDLElBQUFBLGlCQUFhVCxZQUFZTyxRQUFRVDtJQUV4RCxJQUFJVSxnQkFBZ0I7UUFDbEIsSUFBTUUsZUFBZSxFQUFFLEVBQ2pCQyxtQkFBbUJmLHNCQUFzQkMsY0FDekNlLHVCQUF1QkQsaUJBQWlCRSxNQUFNLFNBQUNDO1lBQzdDLElBQU1DLHNCQUFzQkMsSUFBQUEsc0JBQWtCRixpQkFBaUJKLGNBQWNQO1lBRTdFLElBQUlZLHFCQUFxQjtnQkFDdkIsT0FBTztZQUNUO1FBQ0Y7UUFFTixJQUFJSCxzQkFBc0I7WUFDeEIsSUFBTUssY0FBYyxFQUFFLEVBQ2hCQyxpQkFBaUJ2QixvQkFBb0JFLGNBQ3JDc0IscUJBQXFCQyxJQUFBQSxxQkFBaUJGLGdCQUFnQkQsYUFBYWQ7WUFFekUsSUFBSWdCLG9CQUFvQjtnQkFDdEIsSUFBTUUsWUFBWTlCLGVBQWVNLGNBQzNCeUIsa0JBQWtCQyxJQUFBQSxjQUFNTixjQUN4Qk8sYUFBYUYsaUJBQ2JHLGdCQUFnQkMsSUFBQUEsZ0JBQVlMLFdBQVdHLFlBQVlyQjtnQkFFekQsSUFBSXNCLGVBQWU7b0JBQ2pCLElBQU1FLFVBQVVDLGlCQUFRQyxnREFBZ0R0QixRQUFRRyxjQUFjYyxZQUFZckI7b0JBRTFHTCxZQUFZZ0MsV0FBV0g7b0JBRXZCNUIsa0JBQWtCO2dCQUNwQjtZQUNGO1FBQ0Y7SUFDRjtJQUVBLElBQUlBLGlCQUFpQjtRQUNuQkQsWUFBWWlDLEtBQUssQUFBQyxpQkFBNkIsT0FBYjlCLGNBQWEsZUFBYUo7SUFDOUQ7SUFFQSxPQUFPRTtBQUNUIn0=