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
var _axiom = /*#__PURE__*/ _interop_require_default(require("../axiom"));
var _proof = /*#__PURE__*/ _interop_require_default(require("../context/proof"));
var _labels = /*#__PURE__*/ _interop_require_default(require("../verify/labels"));
var _supposition = /*#__PURE__*/ _interop_require_default(require("../verify/supposition"));
var _consequence = /*#__PURE__*/ _interop_require_default(require("../verify/consequence"));
var _array = require("../utilities/array");
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var labelNodesQuery = (0, _query.nodesQuery)("/axiom/label"), consequenceNodeQuery = (0, _query.nodeQuery)("/axiom/consequence!"), suppositionsNodeQuery = (0, _query.nodesQuery)("/axiom/supposition");
function verifyAxiom(axiomNode, fileContext) {
    var axiomVerified = false;
    var labelNodes = labelNodesQuery(axiomNode), labelsString = fileContext.nodesAsString(labelNodes), proofContext = _proof.default.fromFileContext(fileContext);
    fileContext.debug("Verifying the '".concat(labelsString, "' axiom..."), axiomNode);
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
                var firstConsequence = (0, _array.first)(consequences), consequence = firstConsequence, axiom = _axiom.default.fromLabelsSuppositionsConsequenceAndProofContext(labels, suppositions, consequence, proofContext);
                fileContext.addAxiom(axiom);
                axiomVerified = true;
            }
        }
    }
    if (axiomVerified) {
        fileContext.info("Verified the '".concat(labelsString, "' axiom."), axiomNode);
    }
    return axiomVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvYXhpb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBeGlvbSBmcm9tIFwiLi4vYXhpb21cIjtcbmltcG9ydCBQcm9vZkNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvcHJvb2ZcIjtcbmltcG9ydCB2ZXJpZnlMYWJlbHMgZnJvbSBcIi4uL3ZlcmlmeS9sYWJlbHNcIjtcbmltcG9ydCB2ZXJpZnlTdXBwb3NpdGlvbiBmcm9tIFwiLi4vdmVyaWZ5L3N1cHBvc2l0aW9uXCI7XG5pbXBvcnQgdmVyaWZ5Q29uc2VxdWVuY2UgZnJvbSBcIi4uL3ZlcmlmeS9jb25zZXF1ZW5jZVwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgbGFiZWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9heGlvbS9sYWJlbFwiKSxcbiAgICAgIGNvbnNlcXVlbmNlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2F4aW9tL2NvbnNlcXVlbmNlIVwiKSxcbiAgICAgIHN1cHBvc2l0aW9uc05vZGVRdWVyeSA9IG5vZGVzUXVlcnkoXCIvYXhpb20vc3VwcG9zaXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeUF4aW9tKGF4aW9tTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IGF4aW9tVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBsYWJlbE5vZGVzID0gbGFiZWxOb2Rlc1F1ZXJ5KGF4aW9tTm9kZSksXG4gICAgICAgIGxhYmVsc1N0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVzQXNTdHJpbmcobGFiZWxOb2RlcyksXG4gICAgICAgIHByb29mQ29udGV4dCA9IFByb29mQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpO1xuXG4gIGZpbGVDb250ZXh0LmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke2xhYmVsc1N0cmluZ30nIGF4aW9tLi4uYCwgYXhpb21Ob2RlKTtcblxuICBjb25zdCBsYWJlbHMgPSBbXSxcbiAgICAgICAgbGFiZWxzVmVyaWZpZWQgPSB2ZXJpZnlMYWJlbHMobGFiZWxOb2RlcywgbGFiZWxzLCBmaWxlQ29udGV4dCk7XG5cbiAgaWYgKGxhYmVsc1ZlcmlmaWVkKSB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25zID0gW10sXG4gICAgICAgICAgc3VwcG9zaXRpb25Ob2RlcyA9IHN1cHBvc2l0aW9uc05vZGVRdWVyeShheGlvbU5vZGUpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc1ZlcmlmaWVkID0gc3VwcG9zaXRpb25Ob2Rlcy5ldmVyeSgoc3VwcG9zaXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVkID0gdmVyaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb25Ob2RlLCBzdXBwb3NpdGlvbnMsIHByb29mQ29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBjb25zZXF1ZW5jZXMgPSBbXSxcbiAgICAgICAgICAgIGNvbnNlcXVlbmNlTm9kZSA9IGNvbnNlcXVlbmNlTm9kZVF1ZXJ5KGF4aW9tTm9kZSksXG4gICAgICAgICAgICBjb25zZXF1ZW5jZVZlcmlmaWVkID0gdmVyaWZ5Q29uc2VxdWVuY2UoY29uc2VxdWVuY2VOb2RlLCBjb25zZXF1ZW5jZXMsIHByb29mQ29udGV4dCk7XG5cbiAgICAgIGlmIChjb25zZXF1ZW5jZVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0Q29uc2VxdWVuY2UgPSBmaXJzdChjb25zZXF1ZW5jZXMpLFxuICAgICAgICAgICAgICBjb25zZXF1ZW5jZSA9IGZpcnN0Q29uc2VxdWVuY2UsIC8vL1xuICAgICAgICAgICAgICBheGlvbSA9IEF4aW9tLmZyb21MYWJlbHNTdXBwb3NpdGlvbnNDb25zZXF1ZW5jZUFuZFByb29mQ29udGV4dChsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVuY2UsIHByb29mQ29udGV4dCk7XG5cbiAgICAgICAgZmlsZUNvbnRleHQuYWRkQXhpb20oYXhpb20pO1xuXG4gICAgICAgIGF4aW9tVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChheGlvbVZlcmlmaWVkKSB7XG4gICAgZmlsZUNvbnRleHQuaW5mbyhgVmVyaWZpZWQgdGhlICcke2xhYmVsc1N0cmluZ30nIGF4aW9tLmAsIGF4aW9tTm9kZSk7XG4gIH1cblxuICByZXR1cm4gYXhpb21WZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlBeGlvbSIsImxhYmVsTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJjb25zZXF1ZW5jZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN1cHBvc2l0aW9uc05vZGVRdWVyeSIsImF4aW9tTm9kZSIsImZpbGVDb250ZXh0IiwiYXhpb21WZXJpZmllZCIsImxhYmVsTm9kZXMiLCJsYWJlbHNTdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwicHJvb2ZDb250ZXh0IiwiUHJvb2ZDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiZGVidWciLCJsYWJlbHMiLCJsYWJlbHNWZXJpZmllZCIsInZlcmlmeUxhYmVscyIsInN1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9uTm9kZXMiLCJzdXBwb3NpdGlvbnNWZXJpZmllZCIsImV2ZXJ5Iiwic3VwcG9zaXRpb25Ob2RlIiwic3VwcG9zaXRpb25WZXJpZmllZCIsInZlcmlmeVN1cHBvc2l0aW9uIiwiY29uc2VxdWVuY2VzIiwiY29uc2VxdWVuY2VOb2RlIiwiY29uc2VxdWVuY2VWZXJpZmllZCIsInZlcmlmeUNvbnNlcXVlbmNlIiwiZmlyc3RDb25zZXF1ZW5jZSIsImZpcnN0IiwiY29uc2VxdWVuY2UiLCJheGlvbSIsIkF4aW9tIiwiZnJvbUxhYmVsc1N1cHBvc2l0aW9uc0NvbnNlcXVlbmNlQW5kUHJvb2ZDb250ZXh0IiwiYWRkQXhpb20iLCJpbmZvIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFlQTs7O2VBQXdCQTs7OzREQWJOOzREQUNPOzZEQUNBO2tFQUNLO2tFQUNBO3FCQUVSO3FCQUNnQjs7Ozs7O0FBRXRDLElBQU1DLGtCQUFrQkMsSUFBQUEsaUJBQVUsRUFBQyxpQkFDN0JDLHVCQUF1QkMsSUFBQUEsZ0JBQVMsRUFBQyx3QkFDakNDLHdCQUF3QkgsSUFBQUEsaUJBQVUsRUFBQztBQUUxQixTQUFTRixZQUFZTSxTQUFTLEVBQUVDLFdBQVcsRUFBRTtJQUMxRCxJQUFJQyxnQkFBZ0IsS0FBSztJQUV6QixJQUFNQyxhQUFhUixnQkFBZ0JLLFlBQzdCSSxlQUFlSCxZQUFZSSxhQUFhLENBQUNGLGFBQ3pDRyxlQUFlQyxjQUFZLENBQUNDLGVBQWUsQ0FBQ1A7SUFFbERBLFlBQVlRLEtBQUssQ0FBQyxBQUFDLGtCQUE4QixPQUFiTCxjQUFhLGVBQWFKO0lBRTlELElBQU1VLFNBQVMsRUFBRSxFQUNYQyxpQkFBaUJDLElBQUFBLGVBQVksRUFBQ1QsWUFBWU8sUUFBUVQ7SUFFeEQsSUFBSVUsZ0JBQWdCO1FBQ2xCLElBQU1FLGVBQWUsRUFBRSxFQUNqQkMsbUJBQW1CZixzQkFBc0JDLFlBQ3pDZSx1QkFBdUJELGlCQUFpQkUsS0FBSyxDQUFDLFNBQUNDLGlCQUFvQjtZQUNqRSxJQUFNQyxzQkFBc0JDLElBQUFBLG9CQUFpQixFQUFDRixpQkFBaUJKLGNBQWNQO1lBRTdFLElBQUlZLHFCQUFxQjtnQkFDdkIsT0FBTyxJQUFJO1lBQ2IsQ0FBQztRQUNIO1FBRU4sSUFBSUgsc0JBQXNCO1lBQ3hCLElBQU1LLGVBQWUsRUFBRSxFQUNqQkMsa0JBQWtCeEIscUJBQXFCRyxZQUN2Q3NCLHNCQUFzQkMsSUFBQUEsb0JBQWlCLEVBQUNGLGlCQUFpQkQsY0FBY2Q7WUFFN0UsSUFBSWdCLHFCQUFxQjtnQkFDdkIsSUFBTUUsbUJBQW1CQyxJQUFBQSxZQUFLLEVBQUNMLGVBQ3pCTSxjQUFjRixrQkFDZEcsUUFBUUMsY0FBSyxDQUFDQyxnREFBZ0QsQ0FBQ25CLFFBQVFHLGNBQWNhLGFBQWFwQjtnQkFFeEdMLFlBQVk2QixRQUFRLENBQUNIO2dCQUVyQnpCLGdCQUFnQixJQUFJO1lBQ3RCLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQUlBLGVBQWU7UUFDakJELFlBQVk4QixJQUFJLENBQUMsQUFBQyxpQkFBNkIsT0FBYjNCLGNBQWEsYUFBV0o7SUFDNUQsQ0FBQztJQUVELE9BQU9FO0FBQ1QifQ==