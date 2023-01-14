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
var _antecedent = /*#__PURE__*/ _interopRequireDefault(require("../verify/antecedent"));
var _consequent = /*#__PURE__*/ _interopRequireDefault(require("../verify/consequent"));
var _array = require("../utilities/array");
var _string = require("../utilities/string");
var _query = require("../utilities/query");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var labelNodesQuery = (0, _query.nodesQuery)("/axiom/label"), consequentNodeQuery = (0, _query.nodeQuery)("/axiom/consequent!"), antecedentsNodeQuery = (0, _query.nodesQuery)("/axiom/antecedent");
function verifyAxiom(axiomNode, fileContext) {
    var axiomVerified = false;
    fileContext.begin(axiomNode);
    var labelNodes = labelNodesQuery(axiomNode), labelsString = (0, _string.nodesAsString)(labelNodes), proofContext = _proof.default.fromFileContext(fileContext);
    fileContext.debug("Verifying the '".concat(labelsString, "' axiom..."));
    var labels = [], labelsVerified = (0, _labels.default)(labelNodes, labels, fileContext);
    if (labelsVerified) {
        var antecedents = [], antecedentNodes = antecedentsNodeQuery(axiomNode), antecedentsVerified = antecedentNodes.every(function(antecedentNode) {
            var antecedentVerified = (0, _antecedent.default)(antecedentNode, antecedents, proofContext);
            if (antecedentVerified) {
                return true;
            }
        });
        if (antecedentsVerified) {
            var consequents = [], consequentNode = consequentNodeQuery(axiomNode), consequentVerified = (0, _consequent.default)(consequentNode, consequents, proofContext);
            if (consequentVerified) {
                var firstConsequent = (0, _array.first)(consequents), consequent = firstConsequent, axiom = _axiom.default.fromLabelsAntecedentsAndConsequent(labels, antecedents, consequent);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvYXhpb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBeGlvbSBmcm9tIFwiLi4vYXhpb21cIjtcbmltcG9ydCBQcm9vZkNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvcHJvb2ZcIjtcbmltcG9ydCB2ZXJpZnlMYWJlbHMgZnJvbSBcIi4uL3ZlcmlmeS9sYWJlbHNcIjtcbmltcG9ydCB2ZXJpZnlBbnRlY2VkZW50IGZyb20gXCIuLi92ZXJpZnkvYW50ZWNlZGVudFwiO1xuaW1wb3J0IHZlcmlmeUNvbnNlcXVlbnQgZnJvbSBcIi4uL3ZlcmlmeS9jb25zZXF1ZW50XCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZXNBc1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGxhYmVsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvYXhpb20vbGFiZWxcIiksXG4gICAgICBjb25zZXF1ZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2F4aW9tL2NvbnNlcXVlbnQhXCIpLFxuICAgICAgYW50ZWNlZGVudHNOb2RlUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2F4aW9tL2FudGVjZWRlbnRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeUF4aW9tKGF4aW9tTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IGF4aW9tVmVyaWZpZWQgPSBmYWxzZTtcblxuICBmaWxlQ29udGV4dC5iZWdpbihheGlvbU5vZGUpO1xuXG4gIGNvbnN0IGxhYmVsTm9kZXMgPSBsYWJlbE5vZGVzUXVlcnkoYXhpb21Ob2RlKSxcbiAgICAgICAgbGFiZWxzU3RyaW5nID0gbm9kZXNBc1N0cmluZyhsYWJlbE5vZGVzKSxcbiAgICAgICAgcHJvb2ZDb250ZXh0ID0gUHJvb2ZDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCk7XG5cbiAgZmlsZUNvbnRleHQuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7bGFiZWxzU3RyaW5nfScgYXhpb20uLi5gKTtcblxuICBjb25zdCBsYWJlbHMgPSBbXSxcbiAgICAgICAgbGFiZWxzVmVyaWZpZWQgPSB2ZXJpZnlMYWJlbHMobGFiZWxOb2RlcywgbGFiZWxzLCBmaWxlQ29udGV4dCk7XG5cbiAgaWYgKGxhYmVsc1ZlcmlmaWVkKSB7XG4gICAgY29uc3QgYW50ZWNlZGVudHMgPSBbXSxcbiAgICAgICAgICBhbnRlY2VkZW50Tm9kZXMgPSBhbnRlY2VkZW50c05vZGVRdWVyeShheGlvbU5vZGUpLFxuICAgICAgICAgIGFudGVjZWRlbnRzVmVyaWZpZWQgPSBhbnRlY2VkZW50Tm9kZXMuZXZlcnkoKGFudGVjZWRlbnROb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhbnRlY2VkZW50VmVyaWZpZWQgPSB2ZXJpZnlBbnRlY2VkZW50KGFudGVjZWRlbnROb2RlLCBhbnRlY2VkZW50cywgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKGFudGVjZWRlbnRWZXJpZmllZCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmIChhbnRlY2VkZW50c1ZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBjb25zZXF1ZW50cyA9IFtdLFxuICAgICAgICAgICAgY29uc2VxdWVudE5vZGUgPSBjb25zZXF1ZW50Tm9kZVF1ZXJ5KGF4aW9tTm9kZSksXG4gICAgICAgICAgICBjb25zZXF1ZW50VmVyaWZpZWQgPSB2ZXJpZnlDb25zZXF1ZW50KGNvbnNlcXVlbnROb2RlLCBjb25zZXF1ZW50cywgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgaWYgKGNvbnNlcXVlbnRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBmaXJzdENvbnNlcXVlbnQgPSBmaXJzdChjb25zZXF1ZW50cyksXG4gICAgICAgICAgICAgIGNvbnNlcXVlbnQgPSBmaXJzdENvbnNlcXVlbnQsIC8vL1xuICAgICAgICAgICAgICBheGlvbSA9IEF4aW9tLmZyb21MYWJlbHNBbnRlY2VkZW50c0FuZENvbnNlcXVlbnQobGFiZWxzLCBhbnRlY2VkZW50cywgY29uc2VxdWVudCk7XG5cbiAgICAgICAgZmlsZUNvbnRleHQuYWRkQXhpb20oYXhpb20pO1xuXG4gICAgICAgIGF4aW9tVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChheGlvbVZlcmlmaWVkKSB7XG4gICAgZmlsZUNvbnRleHQuaW5mbyhgVmVyaWZpZWQgdGhlICcke2xhYmVsc1N0cmluZ30nIGF4aW9tLmApO1xuICB9XG5cbiAgYXhpb21WZXJpZmllZCA/XG4gICAgZmlsZUNvbnRleHQuY29tcGxldGUoYXhpb21Ob2RlKSA6XG4gICAgICBmaWxlQ29udGV4dC5jb21wbGV0ZShheGlvbU5vZGUpO1xuXG4gIHJldHVybiBheGlvbVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeUF4aW9tIiwibGFiZWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImNvbnNlcXVlbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJhbnRlY2VkZW50c05vZGVRdWVyeSIsImF4aW9tTm9kZSIsImZpbGVDb250ZXh0IiwiYXhpb21WZXJpZmllZCIsImJlZ2luIiwibGFiZWxOb2RlcyIsImxhYmVsc1N0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJwcm9vZkNvbnRleHQiLCJQcm9vZkNvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJkZWJ1ZyIsImxhYmVscyIsImxhYmVsc1ZlcmlmaWVkIiwidmVyaWZ5TGFiZWxzIiwiYW50ZWNlZGVudHMiLCJhbnRlY2VkZW50Tm9kZXMiLCJhbnRlY2VkZW50c1ZlcmlmaWVkIiwiZXZlcnkiLCJhbnRlY2VkZW50Tm9kZSIsImFudGVjZWRlbnRWZXJpZmllZCIsInZlcmlmeUFudGVjZWRlbnQiLCJjb25zZXF1ZW50cyIsImNvbnNlcXVlbnROb2RlIiwiY29uc2VxdWVudFZlcmlmaWVkIiwidmVyaWZ5Q29uc2VxdWVudCIsImZpcnN0Q29uc2VxdWVudCIsImZpcnN0IiwiY29uc2VxdWVudCIsImF4aW9tIiwiQXhpb20iLCJmcm9tTGFiZWxzQW50ZWNlZGVudHNBbmRDb25zZXF1ZW50IiwiYWRkQXhpb20iLCJpbmZvIiwiY29tcGxldGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWdCQTs7O2VBQXdCQTs7OzBEQWROOzBEQUNPOzJEQUNBOytEQUNJOytEQUNBO3FCQUVQO3NCQUNRO3FCQUNROzs7Ozs7QUFFdEMsSUFBTUMsa0JBQWtCQyxJQUFBQSxpQkFBVSxFQUFDLGlCQUM3QkMsc0JBQXNCQyxJQUFBQSxnQkFBUyxFQUFDLHVCQUNoQ0MsdUJBQXVCSCxJQUFBQSxpQkFBVSxFQUFDO0FBRXpCLFNBQVNGLFlBQVlNLFNBQVMsRUFBRUMsV0FBVyxFQUFFO0lBQzFELElBQUlDLGdCQUFnQixLQUFLO0lBRXpCRCxZQUFZRSxLQUFLLENBQUNIO0lBRWxCLElBQU1JLGFBQWFULGdCQUFnQkssWUFDN0JLLGVBQWVDLElBQUFBLHFCQUFhLEVBQUNGLGFBQzdCRyxlQUFlQyxjQUFZLENBQUNDLGVBQWUsQ0FBQ1I7SUFFbERBLFlBQVlTLEtBQUssQ0FBQyxBQUFDLGtCQUE4QixPQUFiTCxjQUFhO0lBRWpELElBQU1NLFNBQVMsRUFBRSxFQUNYQyxpQkFBaUJDLElBQUFBLGVBQVksRUFBQ1QsWUFBWU8sUUFBUVY7SUFFeEQsSUFBSVcsZ0JBQWdCO1FBQ2xCLElBQU1FLGNBQWMsRUFBRSxFQUNoQkMsa0JBQWtCaEIscUJBQXFCQyxZQUN2Q2dCLHNCQUFzQkQsZ0JBQWdCRSxLQUFLLENBQUMsU0FBQ0MsZ0JBQW1CO1lBQzlELElBQU1DLHFCQUFxQkMsSUFBQUEsbUJBQWdCLEVBQUNGLGdCQUFnQkosYUFBYVA7WUFFekUsSUFBSVksb0JBQW9CO2dCQUN0QixPQUFPLElBQUk7WUFDYixDQUFDO1FBQ0g7UUFFTixJQUFJSCxxQkFBcUI7WUFDdkIsSUFBTUssY0FBYyxFQUFFLEVBQ2hCQyxpQkFBaUJ6QixvQkFBb0JHLFlBQ3JDdUIscUJBQXFCQyxJQUFBQSxtQkFBZ0IsRUFBQ0YsZ0JBQWdCRCxhQUFhZDtZQUV6RSxJQUFJZ0Isb0JBQW9CO2dCQUN0QixJQUFNRSxrQkFBa0JDLElBQUFBLFlBQUssRUFBQ0wsY0FDeEJNLGFBQWFGLGlCQUNiRyxRQUFRQyxjQUFLLENBQUNDLGtDQUFrQyxDQUFDbkIsUUFBUUcsYUFBYWE7Z0JBRTVFMUIsWUFBWThCLFFBQVEsQ0FBQ0g7Z0JBRXJCMUIsZ0JBQWdCLElBQUk7WUFDdEIsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBSUEsZUFBZTtRQUNqQkQsWUFBWStCLElBQUksQ0FBQyxBQUFDLGlCQUE2QixPQUFiM0IsY0FBYTtJQUNqRCxDQUFDO0lBRURILGdCQUNFRCxZQUFZZ0MsUUFBUSxDQUFDakMsYUFDbkJDLFlBQVlnQyxRQUFRLENBQUNqQyxVQUFVO0lBRW5DLE9BQU9FO0FBQ1QifQ==