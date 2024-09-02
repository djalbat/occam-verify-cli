"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyDerivation;
    }
});
var _proofStep = /*#__PURE__*/ _interop_require_default(require("../verify/proofStep"));
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var proofStepNodesQuery = (0, _query.nodesQuery)("/derivation/proofStep|lastProofStep");
function verifyDerivation(ruleDerivationNode, localContext) {
    var ruleDerivationVerified;
    var proofStepNodes = proofStepNodesQuery(ruleDerivationNode);
    ruleDerivationVerified = proofStepNodes.every(function(proofStepNode) {
        var proofStepVerified = (0, _proofStep.default)(proofStepNode, localContext);
        if (proofStepVerified) {
            return true;
        }
    });
    return ruleDerivationVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZGVyaXZhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeVByb29mU3RlcCBmcm9tIFwiLi4vdmVyaWZ5L3Byb29mU3RlcFwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBwcm9vZlN0ZXBOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9kZXJpdmF0aW9uL3Byb29mU3RlcHxsYXN0UHJvb2ZTdGVwXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlEZXJpdmF0aW9uKHJ1bGVEZXJpdmF0aW9uTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBydWxlRGVyaXZhdGlvblZlcmlmaWVkO1xuXG4gIGNvbnN0IHByb29mU3RlcE5vZGVzID0gcHJvb2ZTdGVwTm9kZXNRdWVyeShydWxlRGVyaXZhdGlvbk5vZGUpO1xuXG4gIHJ1bGVEZXJpdmF0aW9uVmVyaWZpZWQgPSBwcm9vZlN0ZXBOb2Rlcy5ldmVyeSgocHJvb2ZTdGVwTm9kZSkgPT4ge1xuICAgIGNvbnN0IHByb29mU3RlcFZlcmlmaWVkID0gdmVyaWZ5UHJvb2ZTdGVwKHByb29mU3RlcE5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAocHJvb2ZTdGVwVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJ1bGVEZXJpdmF0aW9uVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5RGVyaXZhdGlvbiIsInByb29mU3RlcE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicnVsZURlcml2YXRpb25Ob2RlIiwibG9jYWxDb250ZXh0IiwicnVsZURlcml2YXRpb25WZXJpZmllZCIsInByb29mU3RlcE5vZGVzIiwiZXZlcnkiLCJwcm9vZlN0ZXBOb2RlIiwicHJvb2ZTdGVwVmVyaWZpZWQiLCJ2ZXJpZnlQcm9vZlN0ZXAiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBd0JBOzs7Z0VBTkk7cUJBRUQ7Ozs7OztBQUUzQixJQUFNQyxzQkFBc0JDLElBQUFBLGlCQUFVLEVBQUM7QUFFeEIsU0FBU0YsaUJBQWlCRyxrQkFBa0IsRUFBRUMsWUFBWTtJQUN2RSxJQUFJQztJQUVKLElBQU1DLGlCQUFpQkwsb0JBQW9CRTtJQUUzQ0UseUJBQXlCQyxlQUFlQyxLQUFLLENBQUMsU0FBQ0M7UUFDN0MsSUFBTUMsb0JBQW9CQyxJQUFBQSxrQkFBZSxFQUFDRixlQUFlSjtRQUV6RCxJQUFJSyxtQkFBbUI7WUFDckIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPSjtBQUNUIn0=