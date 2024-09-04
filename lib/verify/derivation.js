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
function verifyDerivation(derivationNode, substitutions, localContext) {
    var derivationVerified;
    var proofStepNodes = proofStepNodesQuery(derivationNode);
    derivationVerified = proofStepNodes.every(function(proofStepNode) {
        var proofStepVerified = (0, _proofStep.default)(proofStepNode, substitutions, localContext);
        if (proofStepVerified) {
            return true;
        }
    });
    return derivationVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZGVyaXZhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeVByb29mU3RlcCBmcm9tIFwiLi4vdmVyaWZ5L3Byb29mU3RlcFwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBwcm9vZlN0ZXBOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9kZXJpdmF0aW9uL3Byb29mU3RlcHxsYXN0UHJvb2ZTdGVwXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlEZXJpdmF0aW9uKGRlcml2YXRpb25Ob2RlLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGRlcml2YXRpb25WZXJpZmllZDtcblxuICBjb25zdCBwcm9vZlN0ZXBOb2RlcyA9IHByb29mU3RlcE5vZGVzUXVlcnkoZGVyaXZhdGlvbk5vZGUpO1xuXG4gIGRlcml2YXRpb25WZXJpZmllZCA9IHByb29mU3RlcE5vZGVzLmV2ZXJ5KChwcm9vZlN0ZXBOb2RlKSA9PiB7XG4gICAgY29uc3QgcHJvb2ZTdGVwVmVyaWZpZWQgPSB2ZXJpZnlQcm9vZlN0ZXAocHJvb2ZTdGVwTm9kZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChwcm9vZlN0ZXBWZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGVyaXZhdGlvblZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeURlcml2YXRpb24iLCJwcm9vZlN0ZXBOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImRlcml2YXRpb25Ob2RlIiwic3Vic3RpdHV0aW9ucyIsImxvY2FsQ29udGV4dCIsImRlcml2YXRpb25WZXJpZmllZCIsInByb29mU3RlcE5vZGVzIiwiZXZlcnkiLCJwcm9vZlN0ZXBOb2RlIiwicHJvb2ZTdGVwVmVyaWZpZWQiLCJ2ZXJpZnlQcm9vZlN0ZXAiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBd0JBOzs7Z0VBTkk7cUJBRUQ7Ozs7OztBQUUzQixJQUFNQyxzQkFBc0JDLElBQUFBLGlCQUFVLEVBQUM7QUFFeEIsU0FBU0YsaUJBQWlCRyxjQUFjLEVBQUVDLGFBQWEsRUFBRUMsWUFBWTtJQUNsRixJQUFJQztJQUVKLElBQU1DLGlCQUFpQk4sb0JBQW9CRTtJQUUzQ0cscUJBQXFCQyxlQUFlQyxLQUFLLENBQUMsU0FBQ0M7UUFDekMsSUFBTUMsb0JBQW9CQyxJQUFBQSxrQkFBZSxFQUFDRixlQUFlTCxlQUFlQztRQUV4RSxJQUFJSyxtQkFBbUI7WUFDckIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPSjtBQUNUIn0=