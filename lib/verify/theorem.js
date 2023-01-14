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
var _antecedent = /*#__PURE__*/ _interopRequireDefault(require("./antecedent"));
var _consequent = /*#__PURE__*/ _interopRequireDefault(require("./consequent"));
var _array = require("../utilities/array");
var _string = require("../utilities/string");
var _query = require("../utilities/query");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var proofNodeQuery = (0, _query.nodeQuery)("/theorem/proof!"), labelNodesQuery = (0, _query.nodesQuery)("/theorem/label"), consequentNodeQuery = (0, _query.nodeQuery)("/theorem/consequent!"), antecedentsNodeQuery = (0, _query.nodesQuery)("/theorem/antecedent");
function verifyTheorem(theoremNode, fileContext) {
    var theoremVerified = false;
    fileContext.begin(theoremNode);
    var labelNodes = labelNodesQuery(theoremNode), labelsString = (0, _string.nodesAsString)(labelNodes), proofContext = _proof1.default.fromFileContext(fileContext);
    fileContext.debug("Verifying the '".concat(labelsString, "' theorem..."));
    var labels = [], labelsVerified = (0, _labels.default)(labelNodes, labels, fileContext);
    if (labelsVerified) {
        var antecedents = [], antecedentNodes = antecedentsNodeQuery(theoremNode), antecedentsVerified = antecedentNodes.every(function(antecedentNode) {
            var antecedentVerified = (0, _antecedent.default)(antecedentNode, antecedents, proofContext);
            if (antecedentVerified) {
                return true;
            }
        });
        if (antecedentsVerified) {
            var consequents = [], consequentNode = consequentNodeQuery(theoremNode), consequentVerified = (0, _consequent.default)(consequentNode, consequents, proofContext);
            if (consequentVerified) {
                var proofNode = proofNodeQuery(theoremNode), firstConsequent = (0, _array.first)(consequents), consequent = firstConsequent, proofVerified = (0, _proof.default)(proofNode, consequent, proofContext);
                if (proofVerified) {
                    var theorem = _theorem.default.fromLabelsAntecedentsAndConsequent(labels, antecedents, consequent);
                    fileContext.addTheorem(theorem);
                    theoremVerified = true;
                }
            }
        }
    }
    if (theoremVerified) {
        fileContext.info("Verified the '".concat(labelsString, "' theorem."));
    }
    theoremVerified ? fileContext.complete(theoremNode) : fileContext.complete(theoremNode);
    return theoremVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGhlb3JlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRoZW9yZW0gZnJvbSBcIi4uL3RoZW9yZW1cIjtcbmltcG9ydCB2ZXJpZnlQcm9vZiBmcm9tIFwiLi4vdmVyaWZ5L3Byb29mXCI7XG5pbXBvcnQgUHJvb2ZDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3Byb29mXCI7XG5pbXBvcnQgdmVyaWZ5TGFiZWxzIGZyb20gXCIuLi92ZXJpZnkvbGFiZWxzXCI7XG5pbXBvcnQgdmVyaWZ5QW50ZWNlZGVudCBmcm9tIFwiLi9hbnRlY2VkZW50XCI7XG5pbXBvcnQgdmVyaWZ5Q29uc2VxdWVudCBmcm9tIFwiLi9jb25zZXF1ZW50XCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZXNBc1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHByb29mTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3RoZW9yZW0vcHJvb2YhXCIpLFxuICAgICAgbGFiZWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi90aGVvcmVtL2xhYmVsXCIpLFxuICAgICAgY29uc2VxdWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90aGVvcmVtL2NvbnNlcXVlbnQhXCIpLFxuICAgICAgYW50ZWNlZGVudHNOb2RlUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3RoZW9yZW0vYW50ZWNlZGVudFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VGhlb3JlbSh0aGVvcmVtTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHRoZW9yZW1WZXJpZmllZCA9IGZhbHNlO1xuXG4gIGZpbGVDb250ZXh0LmJlZ2luKHRoZW9yZW1Ob2RlKTtcblxuICBjb25zdCBsYWJlbE5vZGVzID0gbGFiZWxOb2Rlc1F1ZXJ5KHRoZW9yZW1Ob2RlKSxcbiAgICAgICAgbGFiZWxzU3RyaW5nID0gbm9kZXNBc1N0cmluZyhsYWJlbE5vZGVzKSxcbiAgICAgICAgcHJvb2ZDb250ZXh0ID0gUHJvb2ZDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCk7XG5cbiAgZmlsZUNvbnRleHQuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7bGFiZWxzU3RyaW5nfScgdGhlb3JlbS4uLmApO1xuXG4gIGNvbnN0IGxhYmVscyA9IFtdLFxuICAgICAgICBsYWJlbHNWZXJpZmllZCA9IHZlcmlmeUxhYmVscyhsYWJlbE5vZGVzLCBsYWJlbHMsIGZpbGVDb250ZXh0KTtcblxuICBpZiAobGFiZWxzVmVyaWZpZWQpIHtcbiAgICBjb25zdCBhbnRlY2VkZW50cyA9IFtdLFxuICAgICAgICAgIGFudGVjZWRlbnROb2RlcyA9IGFudGVjZWRlbnRzTm9kZVF1ZXJ5KHRoZW9yZW1Ob2RlKSxcbiAgICAgICAgICBhbnRlY2VkZW50c1ZlcmlmaWVkID0gYW50ZWNlZGVudE5vZGVzLmV2ZXJ5KChhbnRlY2VkZW50Tm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYW50ZWNlZGVudFZlcmlmaWVkID0gdmVyaWZ5QW50ZWNlZGVudChhbnRlY2VkZW50Tm9kZSwgYW50ZWNlZGVudHMsIHByb29mQ29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChhbnRlY2VkZW50VmVyaWZpZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoYW50ZWNlZGVudHNWZXJpZmllZCkge1xuICAgICAgY29uc3QgY29uc2VxdWVudHMgPSBbXSxcbiAgICAgICAgICAgIGNvbnNlcXVlbnROb2RlID0gY29uc2VxdWVudE5vZGVRdWVyeSh0aGVvcmVtTm9kZSksXG4gICAgICAgICAgICBjb25zZXF1ZW50VmVyaWZpZWQgPSB2ZXJpZnlDb25zZXF1ZW50KGNvbnNlcXVlbnROb2RlLCBjb25zZXF1ZW50cywgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgaWYgKGNvbnNlcXVlbnRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBwcm9vZk5vZGUgPSBwcm9vZk5vZGVRdWVyeSh0aGVvcmVtTm9kZSksXG4gICAgICAgICAgICAgIGZpcnN0Q29uc2VxdWVudCA9IGZpcnN0KGNvbnNlcXVlbnRzKSxcbiAgICAgICAgICAgICAgY29uc2VxdWVudCA9IGZpcnN0Q29uc2VxdWVudCwgLy8vXG4gICAgICAgICAgICAgIHByb29mVmVyaWZpZWQgPSB2ZXJpZnlQcm9vZihwcm9vZk5vZGUsIGNvbnNlcXVlbnQsIHByb29mQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHByb29mVmVyaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCB0aGVvcmVtID0gVGhlb3JlbS5mcm9tTGFiZWxzQW50ZWNlZGVudHNBbmRDb25zZXF1ZW50KGxhYmVscywgYW50ZWNlZGVudHMsIGNvbnNlcXVlbnQpO1xuXG4gICAgICAgICAgZmlsZUNvbnRleHQuYWRkVGhlb3JlbSh0aGVvcmVtKTtcblxuICAgICAgICAgIHRoZW9yZW1WZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAodGhlb3JlbVZlcmlmaWVkKSB7XG4gICAgZmlsZUNvbnRleHQuaW5mbyhgVmVyaWZpZWQgdGhlICcke2xhYmVsc1N0cmluZ30nIHRoZW9yZW0uYCk7XG4gIH1cblxuICB0aGVvcmVtVmVyaWZpZWQgP1xuICAgIGZpbGVDb250ZXh0LmNvbXBsZXRlKHRoZW9yZW1Ob2RlKSA6XG4gICAgICBmaWxlQ29udGV4dC5jb21wbGV0ZSh0aGVvcmVtTm9kZSk7XG5cbiAgcmV0dXJuIHRoZW9yZW1WZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUaGVvcmVtIiwicHJvb2ZOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJsYWJlbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiY29uc2VxdWVudE5vZGVRdWVyeSIsImFudGVjZWRlbnRzTm9kZVF1ZXJ5IiwidGhlb3JlbU5vZGUiLCJmaWxlQ29udGV4dCIsInRoZW9yZW1WZXJpZmllZCIsImJlZ2luIiwibGFiZWxOb2RlcyIsImxhYmVsc1N0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJwcm9vZkNvbnRleHQiLCJQcm9vZkNvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJkZWJ1ZyIsImxhYmVscyIsImxhYmVsc1ZlcmlmaWVkIiwidmVyaWZ5TGFiZWxzIiwiYW50ZWNlZGVudHMiLCJhbnRlY2VkZW50Tm9kZXMiLCJhbnRlY2VkZW50c1ZlcmlmaWVkIiwiZXZlcnkiLCJhbnRlY2VkZW50Tm9kZSIsImFudGVjZWRlbnRWZXJpZmllZCIsInZlcmlmeUFudGVjZWRlbnQiLCJjb25zZXF1ZW50cyIsImNvbnNlcXVlbnROb2RlIiwiY29uc2VxdWVudFZlcmlmaWVkIiwidmVyaWZ5Q29uc2VxdWVudCIsInByb29mTm9kZSIsImZpcnN0Q29uc2VxdWVudCIsImZpcnN0IiwiY29uc2VxdWVudCIsInByb29mVmVyaWZpZWQiLCJ2ZXJpZnlQcm9vZiIsInRoZW9yZW0iLCJUaGVvcmVtIiwiZnJvbUxhYmVsc0FudGVjZWRlbnRzQW5kQ29uc2VxdWVudCIsImFkZFRoZW9yZW0iLCJpbmZvIiwiY29tcGxldGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWtCQTs7O2VBQXdCQTs7OzREQWhCSjswREFDSTsyREFDQzsyREFDQTsrREFDSTsrREFDQTtxQkFFUDtzQkFDUTtxQkFDUTs7Ozs7O0FBRXRDLElBQU1DLGlCQUFpQkMsSUFBQUEsZ0JBQVMsRUFBQyxvQkFDM0JDLGtCQUFrQkMsSUFBQUEsaUJBQVUsRUFBQyxtQkFDN0JDLHNCQUFzQkgsSUFBQUEsZ0JBQVMsRUFBQyx5QkFDaENJLHVCQUF1QkYsSUFBQUEsaUJBQVUsRUFBQztBQUV6QixTQUFTSixjQUFjTyxXQUFXLEVBQUVDLFdBQVcsRUFBRTtJQUM5RCxJQUFJQyxrQkFBa0IsS0FBSztJQUUzQkQsWUFBWUUsS0FBSyxDQUFDSDtJQUVsQixJQUFNSSxhQUFhUixnQkFBZ0JJLGNBQzdCSyxlQUFlQyxJQUFBQSxxQkFBYSxFQUFDRixhQUM3QkcsZUFBZUMsZUFBWSxDQUFDQyxlQUFlLENBQUNSO0lBRWxEQSxZQUFZUyxLQUFLLENBQUMsQUFBQyxrQkFBOEIsT0FBYkwsY0FBYTtJQUVqRCxJQUFNTSxTQUFTLEVBQUUsRUFDWEMsaUJBQWlCQyxJQUFBQSxlQUFZLEVBQUNULFlBQVlPLFFBQVFWO0lBRXhELElBQUlXLGdCQUFnQjtRQUNsQixJQUFNRSxjQUFjLEVBQUUsRUFDaEJDLGtCQUFrQmhCLHFCQUFxQkMsY0FDdkNnQixzQkFBc0JELGdCQUFnQkUsS0FBSyxDQUFDLFNBQUNDLGdCQUFtQjtZQUM5RCxJQUFNQyxxQkFBcUJDLElBQUFBLG1CQUFnQixFQUFDRixnQkFBZ0JKLGFBQWFQO1lBRXpFLElBQUlZLG9CQUFvQjtnQkFDdEIsT0FBTyxJQUFJO1lBQ2IsQ0FBQztRQUNIO1FBRU4sSUFBSUgscUJBQXFCO1lBQ3ZCLElBQU1LLGNBQWMsRUFBRSxFQUNoQkMsaUJBQWlCeEIsb0JBQW9CRSxjQUNyQ3VCLHFCQUFxQkMsSUFBQUEsbUJBQWdCLEVBQUNGLGdCQUFnQkQsYUFBYWQ7WUFFekUsSUFBSWdCLG9CQUFvQjtnQkFDdEIsSUFBTUUsWUFBWS9CLGVBQWVNLGNBQzNCMEIsa0JBQWtCQyxJQUFBQSxZQUFLLEVBQUNOLGNBQ3hCTyxhQUFhRixpQkFDYkcsZ0JBQWdCQyxJQUFBQSxjQUFXLEVBQUNMLFdBQVdHLFlBQVlyQjtnQkFFekQsSUFBSXNCLGVBQWU7b0JBQ2pCLElBQU1FLFVBQVVDLGdCQUFPLENBQUNDLGtDQUFrQyxDQUFDdEIsUUFBUUcsYUFBYWM7b0JBRWhGM0IsWUFBWWlDLFVBQVUsQ0FBQ0g7b0JBRXZCN0Isa0JBQWtCLElBQUk7Z0JBQ3hCLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFJQSxpQkFBaUI7UUFDbkJELFlBQVlrQyxJQUFJLENBQUMsQUFBQyxpQkFBNkIsT0FBYjlCLGNBQWE7SUFDakQsQ0FBQztJQUVESCxrQkFDRUQsWUFBWW1DLFFBQVEsQ0FBQ3BDLGVBQ25CQyxZQUFZbUMsUUFBUSxDQUFDcEMsWUFBWTtJQUVyQyxPQUFPRTtBQUNUIn0=