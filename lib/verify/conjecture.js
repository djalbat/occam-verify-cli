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
var proofNodeQuery = (0, _query.nodeQuery)("/conjecture/proof!"), labelNodesQuery = (0, _query.nodesQuery)("/conjecture/label"), consequentNodeQuery = (0, _query.nodeQuery)("/conjecture/consequent!"), suppositionsNodeQuery = (0, _query.nodesQuery)("/conjecture/supposition");
function verifyConjecture(conjectureNode, fileContext) {
    var conjectureVerified = false;
    var labelNodes = labelNodesQuery(conjectureNode), labelsString = fileContext.nodesAsString(labelNodes), proofContext = _proof1.default.fromFileContext(fileContext);
    fileContext.debug("Verifying the '".concat(labelsString, "' conjecture..."), conjectureNode);
    var labels = [], labelsVerified = (0, _labels.default)(labelNodes, labels, fileContext);
    if (labelsVerified) {
        var suppositions = [], suppositionNodes = suppositionsNodeQuery(conjectureNode), suppositionsVerified = suppositionNodes.every(function(suppositionNode) {
            var suppositionVerified = (0, _supposition.default)(suppositionNode, suppositions, proofContext);
            if (suppositionVerified) {
                return true;
            }
        });
        if (suppositionsVerified) {
            var consequents = [], consequentNode = consequentNodeQuery(conjectureNode), consequentVerified = (0, _consequent.default)(consequentNode, consequents, proofContext);
            if (consequentVerified) {
                var proofNode = proofNodeQuery(conjectureNode), firstConsequent = (0, _array.first)(consequents), consequent = firstConsequent; ///
                (0, _proof.default)(proofNode, consequent, proofContext);
                var conjecture = _conjecture.default.fromLabelsSuppositionsConsequentAndProofContext(labels, suppositions, consequent, proofContext);
                fileContext.addConjecture(conjecture);
                conjectureVerified = true;
            }
        }
    }
    if (conjectureVerified) {
        fileContext.info("Verified the '".concat(labelsString, "' conjecture."), conjectureNode);
    }
    return conjectureVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvY29uamVjdHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbmplY3R1cmUgZnJvbSBcIi4uL2NvbmplY3R1cmVcIjtcbmltcG9ydCB2ZXJpZnlQcm9vZiBmcm9tIFwiLi4vdmVyaWZ5L3Byb29mXCI7XG5pbXBvcnQgUHJvb2ZDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3Byb29mXCI7XG5pbXBvcnQgdmVyaWZ5TGFiZWxzIGZyb20gXCIuLi92ZXJpZnkvbGFiZWxzXCI7XG5pbXBvcnQgdmVyaWZ5Q29uc2VxdWVudCBmcm9tIFwiLi9jb25zZXF1ZW50XCI7XG5pbXBvcnQgdmVyaWZ5U3VwcG9zaXRpb24gZnJvbSBcIi4vc3VwcG9zaXRpb25cIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHByb29mTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbmplY3R1cmUvcHJvb2YhXCIpLFxuICAgICAgbGFiZWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9jb25qZWN0dXJlL2xhYmVsXCIpLFxuICAgICAgY29uc2VxdWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25qZWN0dXJlL2NvbnNlcXVlbnQhXCIpLFxuICAgICAgc3VwcG9zaXRpb25zTm9kZVF1ZXJ5ID0gbm9kZXNRdWVyeShcIi9jb25qZWN0dXJlL3N1cHBvc2l0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlDb25qZWN0dXJlKGNvbmplY3R1cmVOb2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgY29uamVjdHVyZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgbGFiZWxOb2RlcyA9IGxhYmVsTm9kZXNRdWVyeShjb25qZWN0dXJlTm9kZSksXG4gICAgICAgIGxhYmVsc1N0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVzQXNTdHJpbmcobGFiZWxOb2RlcyksXG4gICAgICAgIHByb29mQ29udGV4dCA9IFByb29mQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpO1xuXG4gIGZpbGVDb250ZXh0LmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke2xhYmVsc1N0cmluZ30nIGNvbmplY3R1cmUuLi5gLCBjb25qZWN0dXJlTm9kZSk7XG5cbiAgY29uc3QgbGFiZWxzID0gW10sXG4gICAgICAgIGxhYmVsc1ZlcmlmaWVkID0gdmVyaWZ5TGFiZWxzKGxhYmVsTm9kZXMsIGxhYmVscywgZmlsZUNvbnRleHQpO1xuXG4gIGlmIChsYWJlbHNWZXJpZmllZCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9ucyA9IFtdLFxuICAgICAgICAgIHN1cHBvc2l0aW9uTm9kZXMgPSBzdXBwb3NpdGlvbnNOb2RlUXVlcnkoY29uamVjdHVyZU5vZGUpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc1ZlcmlmaWVkID0gc3VwcG9zaXRpb25Ob2Rlcy5ldmVyeSgoc3VwcG9zaXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVkID0gdmVyaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb25Ob2RlLCBzdXBwb3NpdGlvbnMsIHByb29mQ29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBjb25zZXF1ZW50cyA9IFtdLFxuICAgICAgICAgICAgY29uc2VxdWVudE5vZGUgPSBjb25zZXF1ZW50Tm9kZVF1ZXJ5KGNvbmplY3R1cmVOb2RlKSxcbiAgICAgICAgICAgIGNvbnNlcXVlbnRWZXJpZmllZCA9IHZlcmlmeUNvbnNlcXVlbnQoY29uc2VxdWVudE5vZGUsIGNvbnNlcXVlbnRzLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICBpZiAoY29uc2VxdWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHByb29mTm9kZSA9IHByb29mTm9kZVF1ZXJ5KGNvbmplY3R1cmVOb2RlKSxcbiAgICAgICAgICAgICAgZmlyc3RDb25zZXF1ZW50ID0gZmlyc3QoY29uc2VxdWVudHMpLFxuICAgICAgICAgICAgICBjb25zZXF1ZW50ID0gZmlyc3RDb25zZXF1ZW50OyAvLy9cblxuICAgICAgICB2ZXJpZnlQcm9vZihwcm9vZk5vZGUsIGNvbnNlcXVlbnQsIHByb29mQ29udGV4dCk7XG5cbiAgICAgICAgY29uc3QgY29uamVjdHVyZSA9IENvbmplY3R1cmUuZnJvbUxhYmVsc1N1cHBvc2l0aW9uc0NvbnNlcXVlbnRBbmRQcm9vZkNvbnRleHQobGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIHByb29mQ29udGV4dCk7XG5cbiAgICAgICAgZmlsZUNvbnRleHQuYWRkQ29uamVjdHVyZShjb25qZWN0dXJlKTtcblxuICAgICAgICBjb25qZWN0dXJlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChjb25qZWN0dXJlVmVyaWZpZWQpIHtcbiAgICBmaWxlQ29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7bGFiZWxzU3RyaW5nfScgY29uamVjdHVyZS5gLCBjb25qZWN0dXJlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gY29uamVjdHVyZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeUNvbmplY3R1cmUiLCJwcm9vZk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImxhYmVsTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJjb25zZXF1ZW50Tm9kZVF1ZXJ5Iiwic3VwcG9zaXRpb25zTm9kZVF1ZXJ5IiwiY29uamVjdHVyZU5vZGUiLCJmaWxlQ29udGV4dCIsImNvbmplY3R1cmVWZXJpZmllZCIsImxhYmVsTm9kZXMiLCJsYWJlbHNTdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwicHJvb2ZDb250ZXh0IiwiUHJvb2ZDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiZGVidWciLCJsYWJlbHMiLCJsYWJlbHNWZXJpZmllZCIsInZlcmlmeUxhYmVscyIsInN1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9uTm9kZXMiLCJzdXBwb3NpdGlvbnNWZXJpZmllZCIsImV2ZXJ5Iiwic3VwcG9zaXRpb25Ob2RlIiwic3VwcG9zaXRpb25WZXJpZmllZCIsInZlcmlmeVN1cHBvc2l0aW9uIiwiY29uc2VxdWVudHMiLCJjb25zZXF1ZW50Tm9kZSIsImNvbnNlcXVlbnRWZXJpZmllZCIsInZlcmlmeUNvbnNlcXVlbnQiLCJwcm9vZk5vZGUiLCJmaXJzdENvbnNlcXVlbnQiLCJmaXJzdCIsImNvbnNlcXVlbnQiLCJ2ZXJpZnlQcm9vZiIsImNvbmplY3R1cmUiLCJDb25qZWN0dXJlIiwiZnJvbUxhYmVsc1N1cHBvc2l0aW9uc0NvbnNlcXVlbnRBbmRQcm9vZkNvbnRleHQiLCJhZGRDb25qZWN0dXJlIiwiaW5mbyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUJBOzs7ZUFBd0JBOzs7aUVBZkQ7NERBQ0M7NkRBQ0M7NkRBQ0E7aUVBQ0k7a0VBQ0M7cUJBRVI7cUJBQ2dCOzs7Ozs7QUFFdEMsSUFBTUMsaUJBQWlCQyxJQUFBQSxrQkFBVSx1QkFDM0JDLGtCQUFrQkMsSUFBQUEsbUJBQVcsc0JBQzdCQyxzQkFBc0JILElBQUFBLGtCQUFVLDRCQUNoQ0ksd0JBQXdCRixJQUFBQSxtQkFBVztBQUUxQixTQUFTSixpQkFBaUJPLGNBQWMsRUFBRUMsV0FBVztJQUNsRSxJQUFJQyxxQkFBcUI7SUFFekIsSUFBTUMsYUFBYVAsZ0JBQWdCSSxpQkFDN0JJLGVBQWVILFlBQVlJLGNBQWNGLGFBQ3pDRyxlQUFlQyxnQkFBYUMsZ0JBQWdCUDtJQUVsREEsWUFBWVEsTUFBTSxBQUFDLGtCQUE4QixPQUFiTCxjQUFhLG9CQUFrQko7SUFFbkUsSUFBTVUsU0FBUyxFQUFFLEVBQ1hDLGlCQUFpQkMsSUFBQUEsaUJBQWFULFlBQVlPLFFBQVFUO0lBRXhELElBQUlVLGdCQUFnQjtRQUNsQixJQUFNRSxlQUFlLEVBQUUsRUFDakJDLG1CQUFtQmYsc0JBQXNCQyxpQkFDekNlLHVCQUF1QkQsaUJBQWlCRSxNQUFNLFNBQUNDO1lBQzdDLElBQU1DLHNCQUFzQkMsSUFBQUEsc0JBQWtCRixpQkFBaUJKLGNBQWNQO1lBRTdFLElBQUlZLHFCQUFxQjtnQkFDdkIsT0FBTztZQUNUO1FBQ0Y7UUFFTixJQUFJSCxzQkFBc0I7WUFDeEIsSUFBTUssY0FBYyxFQUFFLEVBQ2hCQyxpQkFBaUJ2QixvQkFBb0JFLGlCQUNyQ3NCLHFCQUFxQkMsSUFBQUEscUJBQWlCRixnQkFBZ0JELGFBQWFkO1lBRXpFLElBQUlnQixvQkFBb0I7Z0JBQ3RCLElBQU1FLFlBQVk5QixlQUFlTSxpQkFDM0J5QixrQkFBa0JDLElBQUFBLGNBQU1OLGNBQ3hCTyxhQUFhRixpQkFBaUIsR0FBRztnQkFFdkNHLElBQUFBLGdCQUFZSixXQUFXRyxZQUFZckI7Z0JBRW5DLElBQU11QixhQUFhQyxvQkFBV0MsZ0RBQWdEckIsUUFBUUcsY0FBY2MsWUFBWXJCO2dCQUVoSEwsWUFBWStCLGNBQWNIO2dCQUUxQjNCLHFCQUFxQjtZQUN2QjtRQUNGO0lBQ0Y7SUFFQSxJQUFJQSxvQkFBb0I7UUFDdEJELFlBQVlnQyxLQUFLLEFBQUMsaUJBQTZCLE9BQWI3QixjQUFhLGtCQUFnQko7SUFDakU7SUFFQSxPQUFPRTtBQUNUIn0=