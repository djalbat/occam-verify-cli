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
    var labelNodes = labelNodesQuery(axiomNode), labelsString = fileContext.nodesAsString(labelNodes), proofContext = _proof.default.fromFileContext(fileContext);
    fileContext.debug(axiomNode, "Verifying the '".concat(labelsString, "' axiom..."));
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
        fileContext.info(axiomNode, "Verified the '".concat(labelsString, "' axiom."));
    }
    return axiomVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvYXhpb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBeGlvbSBmcm9tIFwiLi4vYXhpb21cIjtcbmltcG9ydCBQcm9vZkNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvcHJvb2ZcIjtcbmltcG9ydCB2ZXJpZnlMYWJlbHMgZnJvbSBcIi4uL3ZlcmlmeS9sYWJlbHNcIjtcbmltcG9ydCB2ZXJpZnlTdXBwb3NpdGlvbiBmcm9tIFwiLi4vdmVyaWZ5L3N1cHBvc2l0aW9uXCI7XG5pbXBvcnQgdmVyaWZ5Q29uc2VxdWVuY2UgZnJvbSBcIi4uL3ZlcmlmeS9jb25zZXF1ZW5jZVwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgbGFiZWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9heGlvbS9sYWJlbFwiKSxcbiAgICAgIGNvbnNlcXVlbmNlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2F4aW9tL2NvbnNlcXVlbmNlIVwiKSxcbiAgICAgIHN1cHBvc2l0aW9uc05vZGVRdWVyeSA9IG5vZGVzUXVlcnkoXCIvYXhpb20vc3VwcG9zaXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeUF4aW9tKGF4aW9tTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IGF4aW9tVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBsYWJlbE5vZGVzID0gbGFiZWxOb2Rlc1F1ZXJ5KGF4aW9tTm9kZSksXG4gICAgICAgIGxhYmVsc1N0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVzQXNTdHJpbmcobGFiZWxOb2RlcyksXG4gICAgICAgIHByb29mQ29udGV4dCA9IFByb29mQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpO1xuXG4gIGZpbGVDb250ZXh0LmRlYnVnKGF4aW9tTm9kZSwgYFZlcmlmeWluZyB0aGUgJyR7bGFiZWxzU3RyaW5nfScgYXhpb20uLi5gKTtcblxuICBjb25zdCBsYWJlbHMgPSBbXSxcbiAgICAgICAgbGFiZWxzVmVyaWZpZWQgPSB2ZXJpZnlMYWJlbHMobGFiZWxOb2RlcywgbGFiZWxzLCBmaWxlQ29udGV4dCk7XG5cbiAgaWYgKGxhYmVsc1ZlcmlmaWVkKSB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25zID0gW10sXG4gICAgICAgICAgc3VwcG9zaXRpb25Ob2RlcyA9IHN1cHBvc2l0aW9uc05vZGVRdWVyeShheGlvbU5vZGUpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc1ZlcmlmaWVkID0gc3VwcG9zaXRpb25Ob2Rlcy5ldmVyeSgoc3VwcG9zaXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVkID0gdmVyaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb25Ob2RlLCBzdXBwb3NpdGlvbnMsIHByb29mQ29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBjb25zZXF1ZW5jZXMgPSBbXSxcbiAgICAgICAgICAgIGNvbnNlcXVlbmNlTm9kZSA9IGNvbnNlcXVlbmNlTm9kZVF1ZXJ5KGF4aW9tTm9kZSksXG4gICAgICAgICAgICBjb25zZXF1ZW5jZVZlcmlmaWVkID0gdmVyaWZ5Q29uc2VxdWVuY2UoY29uc2VxdWVuY2VOb2RlLCBjb25zZXF1ZW5jZXMsIHByb29mQ29udGV4dCk7XG5cbiAgICAgIGlmIChjb25zZXF1ZW5jZVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0Q29uc2VxdWVuY2UgPSBmaXJzdChjb25zZXF1ZW5jZXMpLFxuICAgICAgICAgICAgICBjb25zZXF1ZW5jZSA9IGZpcnN0Q29uc2VxdWVuY2UsIC8vL1xuICAgICAgICAgICAgICBheGlvbSA9IEF4aW9tLmZyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmRDb25zZXF1ZW5jZShsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVuY2UpO1xuXG4gICAgICAgIGZpbGVDb250ZXh0LmFkZEF4aW9tKGF4aW9tKTtcblxuICAgICAgICBheGlvbVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoYXhpb21WZXJpZmllZCkge1xuICAgIGZpbGVDb250ZXh0LmluZm8oYXhpb21Ob2RlLCBgVmVyaWZpZWQgdGhlICcke2xhYmVsc1N0cmluZ30nIGF4aW9tLmApO1xuICB9XG5cbiAgcmV0dXJuIGF4aW9tVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5QXhpb20iLCJsYWJlbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiY29uc2VxdWVuY2VOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdXBwb3NpdGlvbnNOb2RlUXVlcnkiLCJheGlvbU5vZGUiLCJmaWxlQ29udGV4dCIsImF4aW9tVmVyaWZpZWQiLCJsYWJlbE5vZGVzIiwibGFiZWxzU3RyaW5nIiwibm9kZXNBc1N0cmluZyIsInByb29mQ29udGV4dCIsIlByb29mQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsImRlYnVnIiwibGFiZWxzIiwibGFiZWxzVmVyaWZpZWQiLCJ2ZXJpZnlMYWJlbHMiLCJzdXBwb3NpdGlvbnMiLCJzdXBwb3NpdGlvbk5vZGVzIiwic3VwcG9zaXRpb25zVmVyaWZpZWQiLCJldmVyeSIsInN1cHBvc2l0aW9uTm9kZSIsInN1cHBvc2l0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlTdXBwb3NpdGlvbiIsImNvbnNlcXVlbmNlcyIsImNvbnNlcXVlbmNlTm9kZSIsImNvbnNlcXVlbmNlVmVyaWZpZWQiLCJ2ZXJpZnlDb25zZXF1ZW5jZSIsImZpcnN0Q29uc2VxdWVuY2UiLCJmaXJzdCIsImNvbnNlcXVlbmNlIiwiYXhpb20iLCJBeGlvbSIsImZyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmRDb25zZXF1ZW5jZSIsImFkZEF4aW9tIiwiaW5mbyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZUE7OztlQUF3QkE7OzswREFiTjswREFDTzsyREFDQTtnRUFDSztnRUFDQTtxQkFFUjtxQkFDZ0I7Ozs7OztBQUV0QyxJQUFNQyxrQkFBa0JDLElBQUFBLGlCQUFVLEVBQUMsaUJBQzdCQyx1QkFBdUJDLElBQUFBLGdCQUFTLEVBQUMsd0JBQ2pDQyx3QkFBd0JILElBQUFBLGlCQUFVLEVBQUM7QUFFMUIsU0FBU0YsWUFBWU0sU0FBUyxFQUFFQyxXQUFXLEVBQUU7SUFDMUQsSUFBSUMsZ0JBQWdCLEtBQUs7SUFFekIsSUFBTUMsYUFBYVIsZ0JBQWdCSyxZQUM3QkksZUFBZUgsWUFBWUksYUFBYSxDQUFDRixhQUN6Q0csZUFBZUMsY0FBWSxDQUFDQyxlQUFlLENBQUNQO0lBRWxEQSxZQUFZUSxLQUFLLENBQUNULFdBQVcsQUFBQyxrQkFBOEIsT0FBYkksY0FBYTtJQUU1RCxJQUFNTSxTQUFTLEVBQUUsRUFDWEMsaUJBQWlCQyxJQUFBQSxlQUFZLEVBQUNULFlBQVlPLFFBQVFUO0lBRXhELElBQUlVLGdCQUFnQjtRQUNsQixJQUFNRSxlQUFlLEVBQUUsRUFDakJDLG1CQUFtQmYsc0JBQXNCQyxZQUN6Q2UsdUJBQXVCRCxpQkFBaUJFLEtBQUssQ0FBQyxTQUFDQyxpQkFBb0I7WUFDakUsSUFBTUMsc0JBQXNCQyxJQUFBQSxvQkFBaUIsRUFBQ0YsaUJBQWlCSixjQUFjUDtZQUU3RSxJQUFJWSxxQkFBcUI7Z0JBQ3ZCLE9BQU8sSUFBSTtZQUNiLENBQUM7UUFDSDtRQUVOLElBQUlILHNCQUFzQjtZQUN4QixJQUFNSyxlQUFlLEVBQUUsRUFDakJDLGtCQUFrQnhCLHFCQUFxQkcsWUFDdkNzQixzQkFBc0JDLElBQUFBLG9CQUFpQixFQUFDRixpQkFBaUJELGNBQWNkO1lBRTdFLElBQUlnQixxQkFBcUI7Z0JBQ3ZCLElBQU1FLG1CQUFtQkMsSUFBQUEsWUFBSyxFQUFDTCxlQUN6Qk0sY0FBY0Ysa0JBQ2RHLFFBQVFDLGNBQUssQ0FBQ0Msb0NBQW9DLENBQUNuQixRQUFRRyxjQUFjYTtnQkFFL0V6QixZQUFZNkIsUUFBUSxDQUFDSDtnQkFFckJ6QixnQkFBZ0IsSUFBSTtZQUN0QixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFJQSxlQUFlO1FBQ2pCRCxZQUFZOEIsSUFBSSxDQUFDL0IsV0FBVyxBQUFDLGlCQUE2QixPQUFiSSxjQUFhO0lBQzVELENBQUM7SUFFRCxPQUFPRjtBQUNUIn0=