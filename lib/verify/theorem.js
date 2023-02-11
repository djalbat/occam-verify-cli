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
var _theorem = /*#__PURE__*/ _interopRequireDefault(require("../theorem"));
var _proof = /*#__PURE__*/ _interopRequireDefault(require("../verify/proof"));
var _proof1 = /*#__PURE__*/ _interopRequireDefault(require("../context/proof"));
var _labels = /*#__PURE__*/ _interopRequireDefault(require("../verify/labels"));
var _supposition = /*#__PURE__*/ _interopRequireDefault(require("./supposition"));
var _consequence = /*#__PURE__*/ _interopRequireDefault(require("./consequence"));
var _array = require("../utilities/array");
var _query = require("../utilities/query");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var proofNodeQuery = (0, _query.nodeQuery)("/theorem/proof!"), labelNodesQuery = (0, _query.nodesQuery)("/theorem/label"), consequenceNodeQuery = (0, _query.nodeQuery)("/theorem/consequence!"), suppositionsNodeQuery = (0, _query.nodesQuery)("/theorem/supposition");
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
            var consequences = [], consequenceNode = consequenceNodeQuery(theoremNode), consequenceVerified = (0, _consequence.default)(consequenceNode, consequences, proofContext);
            if (consequenceVerified) {
                var proofNode = proofNodeQuery(theoremNode), firstConsequence = (0, _array.first)(consequences), consequence = firstConsequence, proofVerified = (0, _proof.default)(proofNode, consequence, proofContext);
                if (proofVerified) {
                    var theorem = _theorem.default.fromLabelsSuppositionsConsequenceAndProofContext(labels, suppositions, consequence, proofContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGhlb3JlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRoZW9yZW0gZnJvbSBcIi4uL3RoZW9yZW1cIjtcbmltcG9ydCB2ZXJpZnlQcm9vZiBmcm9tIFwiLi4vdmVyaWZ5L3Byb29mXCI7XG5pbXBvcnQgUHJvb2ZDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3Byb29mXCI7XG5pbXBvcnQgdmVyaWZ5TGFiZWxzIGZyb20gXCIuLi92ZXJpZnkvbGFiZWxzXCI7XG5pbXBvcnQgdmVyaWZ5U3VwcG9zaXRpb24gZnJvbSBcIi4vc3VwcG9zaXRpb25cIjtcbmltcG9ydCB2ZXJpZnlDb25zZXF1ZW5jZSBmcm9tIFwiLi9jb25zZXF1ZW5jZVwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCBwcm9vZiBmcm9tIFwiLi4vY29udGV4dC9wcm9vZlwiO1xuXG5jb25zdCBwcm9vZk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90aGVvcmVtL3Byb29mIVwiKSxcbiAgICAgIGxhYmVsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvdGhlb3JlbS9sYWJlbFwiKSxcbiAgICAgIGNvbnNlcXVlbmNlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3RoZW9yZW0vY29uc2VxdWVuY2UhXCIpLFxuICAgICAgc3VwcG9zaXRpb25zTm9kZVF1ZXJ5ID0gbm9kZXNRdWVyeShcIi90aGVvcmVtL3N1cHBvc2l0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlUaGVvcmVtKHRoZW9yZW1Ob2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgdGhlb3JlbVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgbGFiZWxOb2RlcyA9IGxhYmVsTm9kZXNRdWVyeSh0aGVvcmVtTm9kZSksXG4gICAgICAgIGxhYmVsc1N0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVzQXNTdHJpbmcobGFiZWxOb2RlcyksXG4gICAgICAgIHByb29mQ29udGV4dCA9IFByb29mQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpO1xuXG4gIGZpbGVDb250ZXh0LmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke2xhYmVsc1N0cmluZ30nIHRoZW9yZW0uLi5gLCB0aGVvcmVtTm9kZSk7XG5cbiAgY29uc3QgbGFiZWxzID0gW10sXG4gICAgICAgIGxhYmVsc1ZlcmlmaWVkID0gdmVyaWZ5TGFiZWxzKGxhYmVsTm9kZXMsIGxhYmVscywgZmlsZUNvbnRleHQpO1xuXG4gIGlmIChsYWJlbHNWZXJpZmllZCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9ucyA9IFtdLFxuICAgICAgICAgIHN1cHBvc2l0aW9uTm9kZXMgPSBzdXBwb3NpdGlvbnNOb2RlUXVlcnkodGhlb3JlbU5vZGUpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc1ZlcmlmaWVkID0gc3VwcG9zaXRpb25Ob2Rlcy5ldmVyeSgoc3VwcG9zaXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVkID0gdmVyaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb25Ob2RlLCBzdXBwb3NpdGlvbnMsIHByb29mQ29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBjb25zZXF1ZW5jZXMgPSBbXSxcbiAgICAgICAgICAgIGNvbnNlcXVlbmNlTm9kZSA9IGNvbnNlcXVlbmNlTm9kZVF1ZXJ5KHRoZW9yZW1Ob2RlKSxcbiAgICAgICAgICAgIGNvbnNlcXVlbmNlVmVyaWZpZWQgPSB2ZXJpZnlDb25zZXF1ZW5jZShjb25zZXF1ZW5jZU5vZGUsIGNvbnNlcXVlbmNlcywgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgaWYgKGNvbnNlcXVlbmNlVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgcHJvb2ZOb2RlID0gcHJvb2ZOb2RlUXVlcnkodGhlb3JlbU5vZGUpLFxuICAgICAgICAgICAgICBmaXJzdENvbnNlcXVlbmNlID0gZmlyc3QoY29uc2VxdWVuY2VzKSxcbiAgICAgICAgICAgICAgY29uc2VxdWVuY2UgPSBmaXJzdENvbnNlcXVlbmNlLCAvLy9cbiAgICAgICAgICAgICAgcHJvb2ZWZXJpZmllZCA9IHZlcmlmeVByb29mKHByb29mTm9kZSwgY29uc2VxdWVuY2UsIHByb29mQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHByb29mVmVyaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCB0aGVvcmVtID0gVGhlb3JlbS5mcm9tTGFiZWxzU3VwcG9zaXRpb25zQ29uc2VxdWVuY2VBbmRQcm9vZkNvbnRleHQobGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbmNlLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICAgICAgZmlsZUNvbnRleHQuYWRkVGhlb3JlbSh0aGVvcmVtKTtcblxuICAgICAgICAgIHRoZW9yZW1WZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAodGhlb3JlbVZlcmlmaWVkKSB7XG4gICAgZmlsZUNvbnRleHQuaW5mbyhgVmVyaWZpZWQgdGhlICcke2xhYmVsc1N0cmluZ30nIHRoZW9yZW0uYCwgdGhlb3JlbU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHRoZW9yZW1WZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUaGVvcmVtIiwicHJvb2ZOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJsYWJlbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiY29uc2VxdWVuY2VOb2RlUXVlcnkiLCJzdXBwb3NpdGlvbnNOb2RlUXVlcnkiLCJ0aGVvcmVtTm9kZSIsImZpbGVDb250ZXh0IiwidGhlb3JlbVZlcmlmaWVkIiwibGFiZWxOb2RlcyIsImxhYmVsc1N0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJwcm9vZkNvbnRleHQiLCJQcm9vZkNvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJkZWJ1ZyIsImxhYmVscyIsImxhYmVsc1ZlcmlmaWVkIiwidmVyaWZ5TGFiZWxzIiwic3VwcG9zaXRpb25zIiwic3VwcG9zaXRpb25Ob2RlcyIsInN1cHBvc2l0aW9uc1ZlcmlmaWVkIiwiZXZlcnkiLCJzdXBwb3NpdGlvbk5vZGUiLCJzdXBwb3NpdGlvblZlcmlmaWVkIiwidmVyaWZ5U3VwcG9zaXRpb24iLCJjb25zZXF1ZW5jZXMiLCJjb25zZXF1ZW5jZU5vZGUiLCJjb25zZXF1ZW5jZVZlcmlmaWVkIiwidmVyaWZ5Q29uc2VxdWVuY2UiLCJwcm9vZk5vZGUiLCJmaXJzdENvbnNlcXVlbmNlIiwiZmlyc3QiLCJjb25zZXF1ZW5jZSIsInByb29mVmVyaWZpZWQiLCJ2ZXJpZnlQcm9vZiIsInRoZW9yZW0iLCJUaGVvcmVtIiwiZnJvbUxhYmVsc1N1cHBvc2l0aW9uc0NvbnNlcXVlbmNlQW5kUHJvb2ZDb250ZXh0IiwiYWRkVGhlb3JlbSIsImluZm8iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWtCQTs7O2VBQXdCQTs7OzREQWhCSjswREFDSTsyREFDQzsyREFDQTtnRUFDSztnRUFDQTtxQkFFUjtxQkFDZ0I7Ozs7OztBQUd0QyxJQUFNQyxpQkFBaUJDLElBQUFBLGdCQUFTLEVBQUMsb0JBQzNCQyxrQkFBa0JDLElBQUFBLGlCQUFVLEVBQUMsbUJBQzdCQyx1QkFBdUJILElBQUFBLGdCQUFTLEVBQUMsMEJBQ2pDSSx3QkFBd0JGLElBQUFBLGlCQUFVLEVBQUM7QUFFMUIsU0FBU0osY0FBY08sV0FBVyxFQUFFQyxXQUFXLEVBQUU7SUFDOUQsSUFBSUMsa0JBQWtCLEtBQUs7SUFFM0IsSUFBTUMsYUFBYVAsZ0JBQWdCSSxjQUM3QkksZUFBZUgsWUFBWUksYUFBYSxDQUFDRixhQUN6Q0csZUFBZUMsZUFBWSxDQUFDQyxlQUFlLENBQUNQO0lBRWxEQSxZQUFZUSxLQUFLLENBQUMsQUFBQyxrQkFBOEIsT0FBYkwsY0FBYSxpQkFBZUo7SUFFaEUsSUFBTVUsU0FBUyxFQUFFLEVBQ1hDLGlCQUFpQkMsSUFBQUEsZUFBWSxFQUFDVCxZQUFZTyxRQUFRVDtJQUV4RCxJQUFJVSxnQkFBZ0I7UUFDbEIsSUFBTUUsZUFBZSxFQUFFLEVBQ2pCQyxtQkFBbUJmLHNCQUFzQkMsY0FDekNlLHVCQUF1QkQsaUJBQWlCRSxLQUFLLENBQUMsU0FBQ0MsaUJBQW9CO1lBQ2pFLElBQU1DLHNCQUFzQkMsSUFBQUEsb0JBQWlCLEVBQUNGLGlCQUFpQkosY0FBY1A7WUFFN0UsSUFBSVkscUJBQXFCO2dCQUN2QixPQUFPLElBQUk7WUFDYixDQUFDO1FBQ0g7UUFFTixJQUFJSCxzQkFBc0I7WUFDeEIsSUFBTUssZUFBZSxFQUFFLEVBQ2pCQyxrQkFBa0J2QixxQkFBcUJFLGNBQ3ZDc0Isc0JBQXNCQyxJQUFBQSxvQkFBaUIsRUFBQ0YsaUJBQWlCRCxjQUFjZDtZQUU3RSxJQUFJZ0IscUJBQXFCO2dCQUN2QixJQUFNRSxZQUFZOUIsZUFBZU0sY0FDM0J5QixtQkFBbUJDLElBQUFBLFlBQUssRUFBQ04sZUFDekJPLGNBQWNGLGtCQUNkRyxnQkFBZ0JDLElBQUFBLGNBQVcsRUFBQ0wsV0FBV0csYUFBYXJCO2dCQUUxRCxJQUFJc0IsZUFBZTtvQkFDakIsSUFBTUUsVUFBVUMsZ0JBQU8sQ0FBQ0MsZ0RBQWdELENBQUN0QixRQUFRRyxjQUFjYyxhQUFhckI7b0JBRTVHTCxZQUFZZ0MsVUFBVSxDQUFDSDtvQkFFdkI1QixrQkFBa0IsSUFBSTtnQkFDeEIsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQUlBLGlCQUFpQjtRQUNuQkQsWUFBWWlDLElBQUksQ0FBQyxBQUFDLGlCQUE2QixPQUFiOUIsY0FBYSxlQUFhSjtJQUM5RCxDQUFDO0lBRUQsT0FBT0U7QUFDVCJ9