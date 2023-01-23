"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyAxiom;
    }
});
var _axiom = /*#__PURE__*/ _interopRequireDefault(require("../axiom"));
var _proof = /*#__PURE__*/ _interopRequireDefault(require("../context/proof"));
var _labels = /*#__PURE__*/ _interopRequireDefault(require("../verify/labels"));
var _supposition = /*#__PURE__*/ _interopRequireDefault(require("../verify/supposition"));
var _consequence = /*#__PURE__*/ _interopRequireDefault(require("../verify/consequence"));
var _array = require("../utilities/array");
var _query = require("../utilities/query");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var labelNodesQuery = (0, _query.nodesQuery)("/axiom/label"), consequenceNodeQuery = (0, _query.nodeQuery)("/axiom/consequence!"), suppositionsNodeQuery = (0, _query.nodesQuery)("/axiom/supposition");
function verifyAxiom(axiomNode, fileContext) {
    var axiomVerified = false;
    fileContext.begin(axiomNode);
    var labelNodes = labelNodesQuery(axiomNode), labelsString = fileContext.nodesAsString(labelNodes), proofContext = _proof.default.fromFileContext(fileContext);
    fileContext.debug("Verifying the '".concat(labelsString, "' axiom..."));
    var labels = [], labelsVerified = (0, _labels.default)(labelNodes, labels, fileContext);
    if (labelsVerified) {
        var suppositions = [], suppositionNodes = suppositionsNodeQuery(axiomNode), suppositionsVerified = suppositionNodes.every(function(suppositionNode) {
            var suppositionVerified = (0, _supposition.default)(suppositionNode, suppositions, proofContext);
            if (suppositionVerified) {
                return true;
            }
        });
        if (suppositionsVerified) {
            var consequences = [], consequenceNode = consequenceNodeQuery(axiomNode), consequenceVerified = (0, _consequence.default)(consequenceNode, consequences, proofContext);
            if (consequenceVerified) {
                var firstConsequence = (0, _array.first)(consequences), consequence = firstConsequence, axiom = _axiom.default.fromLabelsSuppositionsAndConsequence(labels, suppositions, consequence);
                fileContext.addAxiom(axiom);
                axiomVerified = true;
            }
        }
    }
    if (axiomVerified) {
        fileContext.info("Verified the '".concat(labelsString, "' axiom."));
    }
    axiomVerified ? fileContext.complete(axiomNode) : fileContext.complete(axiomNode);
    return axiomVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvYXhpb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBeGlvbSBmcm9tIFwiLi4vYXhpb21cIjtcbmltcG9ydCBQcm9vZkNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvcHJvb2ZcIjtcbmltcG9ydCB2ZXJpZnlMYWJlbHMgZnJvbSBcIi4uL3ZlcmlmeS9sYWJlbHNcIjtcbmltcG9ydCB2ZXJpZnlTdXBwb3NpdGlvbiBmcm9tIFwiLi4vdmVyaWZ5L3N1cHBvc2l0aW9uXCI7XG5pbXBvcnQgdmVyaWZ5Q29uc2VxdWVuY2UgZnJvbSBcIi4uL3ZlcmlmeS9jb25zZXF1ZW5jZVwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgbGFiZWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9heGlvbS9sYWJlbFwiKSxcbiAgICAgIGNvbnNlcXVlbmNlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2F4aW9tL2NvbnNlcXVlbmNlIVwiKSxcbiAgICAgIHN1cHBvc2l0aW9uc05vZGVRdWVyeSA9IG5vZGVzUXVlcnkoXCIvYXhpb20vc3VwcG9zaXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeUF4aW9tKGF4aW9tTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IGF4aW9tVmVyaWZpZWQgPSBmYWxzZTtcblxuICBmaWxlQ29udGV4dC5iZWdpbihheGlvbU5vZGUpO1xuXG4gIGNvbnN0IGxhYmVsTm9kZXMgPSBsYWJlbE5vZGVzUXVlcnkoYXhpb21Ob2RlKSxcbiAgICAgICAgbGFiZWxzU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZXNBc1N0cmluZyhsYWJlbE5vZGVzKSxcbiAgICAgICAgcHJvb2ZDb250ZXh0ID0gUHJvb2ZDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCk7XG5cbiAgZmlsZUNvbnRleHQuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7bGFiZWxzU3RyaW5nfScgYXhpb20uLi5gKTtcblxuICBjb25zdCBsYWJlbHMgPSBbXSxcbiAgICAgICAgbGFiZWxzVmVyaWZpZWQgPSB2ZXJpZnlMYWJlbHMobGFiZWxOb2RlcywgbGFiZWxzLCBmaWxlQ29udGV4dCk7XG5cbiAgaWYgKGxhYmVsc1ZlcmlmaWVkKSB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25zID0gW10sXG4gICAgICAgICAgc3VwcG9zaXRpb25Ob2RlcyA9IHN1cHBvc2l0aW9uc05vZGVRdWVyeShheGlvbU5vZGUpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc1ZlcmlmaWVkID0gc3VwcG9zaXRpb25Ob2Rlcy5ldmVyeSgoc3VwcG9zaXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVkID0gdmVyaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb25Ob2RlLCBzdXBwb3NpdGlvbnMsIHByb29mQ29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBjb25zZXF1ZW5jZXMgPSBbXSxcbiAgICAgICAgICAgIGNvbnNlcXVlbmNlTm9kZSA9IGNvbnNlcXVlbmNlTm9kZVF1ZXJ5KGF4aW9tTm9kZSksXG4gICAgICAgICAgICBjb25zZXF1ZW5jZVZlcmlmaWVkID0gdmVyaWZ5Q29uc2VxdWVuY2UoY29uc2VxdWVuY2VOb2RlLCBjb25zZXF1ZW5jZXMsIHByb29mQ29udGV4dCk7XG5cbiAgICAgIGlmIChjb25zZXF1ZW5jZVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0Q29uc2VxdWVuY2UgPSBmaXJzdChjb25zZXF1ZW5jZXMpLFxuICAgICAgICAgICAgICBjb25zZXF1ZW5jZSA9IGZpcnN0Q29uc2VxdWVuY2UsIC8vL1xuICAgICAgICAgICAgICBheGlvbSA9IEF4aW9tLmZyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmRDb25zZXF1ZW5jZShsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVuY2UpO1xuXG4gICAgICAgIGZpbGVDb250ZXh0LmFkZEF4aW9tKGF4aW9tKTtcblxuICAgICAgICBheGlvbVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoYXhpb21WZXJpZmllZCkge1xuICAgIGZpbGVDb250ZXh0LmluZm8oYFZlcmlmaWVkIHRoZSAnJHtsYWJlbHNTdHJpbmd9JyBheGlvbS5gKTtcbiAgfVxuXG4gIGF4aW9tVmVyaWZpZWQgP1xuICAgIGZpbGVDb250ZXh0LmNvbXBsZXRlKGF4aW9tTm9kZSkgOlxuICAgICAgZmlsZUNvbnRleHQuY29tcGxldGUoYXhpb21Ob2RlKTtcblxuICByZXR1cm4gYXhpb21WZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlBeGlvbSIsImxhYmVsTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJjb25zZXF1ZW5jZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN1cHBvc2l0aW9uc05vZGVRdWVyeSIsImF4aW9tTm9kZSIsImZpbGVDb250ZXh0IiwiYXhpb21WZXJpZmllZCIsImJlZ2luIiwibGFiZWxOb2RlcyIsImxhYmVsc1N0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJwcm9vZkNvbnRleHQiLCJQcm9vZkNvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJkZWJ1ZyIsImxhYmVscyIsImxhYmVsc1ZlcmlmaWVkIiwidmVyaWZ5TGFiZWxzIiwic3VwcG9zaXRpb25zIiwic3VwcG9zaXRpb25Ob2RlcyIsInN1cHBvc2l0aW9uc1ZlcmlmaWVkIiwiZXZlcnkiLCJzdXBwb3NpdGlvbk5vZGUiLCJzdXBwb3NpdGlvblZlcmlmaWVkIiwidmVyaWZ5U3VwcG9zaXRpb24iLCJjb25zZXF1ZW5jZXMiLCJjb25zZXF1ZW5jZU5vZGUiLCJjb25zZXF1ZW5jZVZlcmlmaWVkIiwidmVyaWZ5Q29uc2VxdWVuY2UiLCJmaXJzdENvbnNlcXVlbmNlIiwiZmlyc3QiLCJjb25zZXF1ZW5jZSIsImF4aW9tIiwiQXhpb20iLCJmcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kQ29uc2VxdWVuY2UiLCJhZGRBeGlvbSIsImluZm8iLCJjb21wbGV0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZUE7OztlQUF3QkE7OzswREFiTjswREFDTzsyREFDQTtnRUFDSztnRUFDQTtxQkFFUjtxQkFDZ0I7Ozs7OztBQUV0QyxJQUFNQyxrQkFBa0JDLElBQUFBLGlCQUFVLEVBQUMsaUJBQzdCQyx1QkFBdUJDLElBQUFBLGdCQUFTLEVBQUMsd0JBQ2pDQyx3QkFBd0JILElBQUFBLGlCQUFVLEVBQUM7QUFFMUIsU0FBU0YsWUFBWU0sU0FBUyxFQUFFQyxXQUFXLEVBQUU7SUFDMUQsSUFBSUMsZ0JBQWdCLEtBQUs7SUFFekJELFlBQVlFLEtBQUssQ0FBQ0g7SUFFbEIsSUFBTUksYUFBYVQsZ0JBQWdCSyxZQUM3QkssZUFBZUosWUFBWUssYUFBYSxDQUFDRixhQUN6Q0csZUFBZUMsY0FBWSxDQUFDQyxlQUFlLENBQUNSO0lBRWxEQSxZQUFZUyxLQUFLLENBQUMsQUFBQyxrQkFBOEIsT0FBYkwsY0FBYTtJQUVqRCxJQUFNTSxTQUFTLEVBQUUsRUFDWEMsaUJBQWlCQyxJQUFBQSxlQUFZLEVBQUNULFlBQVlPLFFBQVFWO0lBRXhELElBQUlXLGdCQUFnQjtRQUNsQixJQUFNRSxlQUFlLEVBQUUsRUFDakJDLG1CQUFtQmhCLHNCQUFzQkMsWUFDekNnQix1QkFBdUJELGlCQUFpQkUsS0FBSyxDQUFDLFNBQUNDLGlCQUFvQjtZQUNqRSxJQUFNQyxzQkFBc0JDLElBQUFBLG9CQUFpQixFQUFDRixpQkFBaUJKLGNBQWNQO1lBRTdFLElBQUlZLHFCQUFxQjtnQkFDdkIsT0FBTyxJQUFJO1lBQ2IsQ0FBQztRQUNIO1FBRU4sSUFBSUgsc0JBQXNCO1lBQ3hCLElBQU1LLGVBQWUsRUFBRSxFQUNqQkMsa0JBQWtCekIscUJBQXFCRyxZQUN2Q3VCLHNCQUFzQkMsSUFBQUEsb0JBQWlCLEVBQUNGLGlCQUFpQkQsY0FBY2Q7WUFFN0UsSUFBSWdCLHFCQUFxQjtnQkFDdkIsSUFBTUUsbUJBQW1CQyxJQUFBQSxZQUFLLEVBQUNMLGVBQ3pCTSxjQUFjRixrQkFDZEcsUUFBUUMsY0FBSyxDQUFDQyxvQ0FBb0MsQ0FBQ25CLFFBQVFHLGNBQWNhO2dCQUUvRTFCLFlBQVk4QixRQUFRLENBQUNIO2dCQUVyQjFCLGdCQUFnQixJQUFJO1lBQ3RCLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQUlBLGVBQWU7UUFDakJELFlBQVkrQixJQUFJLENBQUMsQUFBQyxpQkFBNkIsT0FBYjNCLGNBQWE7SUFDakQsQ0FBQztJQUVESCxnQkFDRUQsWUFBWWdDLFFBQVEsQ0FBQ2pDLGFBQ25CQyxZQUFZZ0MsUUFBUSxDQUFDakMsVUFBVTtJQUVuQyxPQUFPRTtBQUNUIn0=