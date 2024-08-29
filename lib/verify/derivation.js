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
function verifyDerivation(ruleDerivationNode, localMetaContext) {
    var ruleDerivationVerified;
    var proofStepNodes = proofStepNodesQuery(ruleDerivationNode);
    ruleDerivationVerified = proofStepNodes.every(function(proofStepNode) {
        var proofStepVerified = (0, _proofStep.default)(proofStepNode, localMetaContext);
        if (proofStepVerified) {
            return true;
        }
    });
    return ruleDerivationVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZGVyaXZhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeVByb29mU3RlcCBmcm9tIFwiLi4vdmVyaWZ5L3Byb29mU3RlcFwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBwcm9vZlN0ZXBOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9kZXJpdmF0aW9uL3Byb29mU3RlcHxsYXN0UHJvb2ZTdGVwXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlEZXJpdmF0aW9uKHJ1bGVEZXJpdmF0aW9uTm9kZSwgbG9jYWxNZXRhQ29udGV4dCkge1xuICBsZXQgcnVsZURlcml2YXRpb25WZXJpZmllZDtcblxuICBjb25zdCBwcm9vZlN0ZXBOb2RlcyA9IHByb29mU3RlcE5vZGVzUXVlcnkocnVsZURlcml2YXRpb25Ob2RlKTtcblxuICBydWxlRGVyaXZhdGlvblZlcmlmaWVkID0gcHJvb2ZTdGVwTm9kZXMuZXZlcnkoKHByb29mU3RlcE5vZGUpID0+IHtcbiAgICBjb25zdCBwcm9vZlN0ZXBWZXJpZmllZCA9IHZlcmlmeVByb29mU3RlcChwcm9vZlN0ZXBOb2RlLCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgIGlmIChwcm9vZlN0ZXBWZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcnVsZURlcml2YXRpb25WZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlEZXJpdmF0aW9uIiwicHJvb2ZTdGVwTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJydWxlRGVyaXZhdGlvbk5vZGUiLCJsb2NhbE1ldGFDb250ZXh0IiwicnVsZURlcml2YXRpb25WZXJpZmllZCIsInByb29mU3RlcE5vZGVzIiwiZXZlcnkiLCJwcm9vZlN0ZXBOb2RlIiwicHJvb2ZTdGVwVmVyaWZpZWQiLCJ2ZXJpZnlQcm9vZlN0ZXAiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBd0JBOzs7Z0VBTkk7cUJBRUQ7Ozs7OztBQUUzQixJQUFNQyxzQkFBc0JDLElBQUFBLGlCQUFVLEVBQUM7QUFFeEIsU0FBU0YsaUJBQWlCRyxrQkFBa0IsRUFBRUMsZ0JBQWdCO0lBQzNFLElBQUlDO0lBRUosSUFBTUMsaUJBQWlCTCxvQkFBb0JFO0lBRTNDRSx5QkFBeUJDLGVBQWVDLEtBQUssQ0FBQyxTQUFDQztRQUM3QyxJQUFNQyxvQkFBb0JDLElBQUFBLGtCQUFlLEVBQUNGLGVBQWVKO1FBRXpELElBQUlLLG1CQUFtQjtZQUNyQixPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU9KO0FBQ1QifQ==