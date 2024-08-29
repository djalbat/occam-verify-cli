"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyRuleDerivation;
    }
});
var _ruleProofStep = /*#__PURE__*/ _interop_require_default(require("../verify/ruleProofStep"));
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var ruleProofStepNodesQuery = (0, _query.nodesQuery)("/ruleDerivation/ruleProofStep|lastRuleProofStep");
function verifyRuleDerivation(ruleDerivationNode, localMetaContext) {
    var ruleDerivationVerified;
    var ruleProofStepNodes = ruleProofStepNodesQuery(ruleDerivationNode);
    ruleDerivationVerified = ruleProofStepNodes.every(function(ruleProofStepNode) {
        var ruleProofStepVerified = (0, _ruleProofStep.default)(ruleProofStepNode, localMetaContext);
        if (ruleProofStepVerified) {
            return true;
        }
    });
    return ruleDerivationVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcnVsZURlcml2YXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlSdWxlUHJvb2ZTdGVwIGZyb20gXCIuLi92ZXJpZnkvcnVsZVByb29mU3RlcFwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBydWxlUHJvb2ZTdGVwTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcnVsZURlcml2YXRpb24vcnVsZVByb29mU3RlcHxsYXN0UnVsZVByb29mU3RlcFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5UnVsZURlcml2YXRpb24ocnVsZURlcml2YXRpb25Ob2RlLCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gIGxldCBydWxlRGVyaXZhdGlvblZlcmlmaWVkO1xuXG4gIGNvbnN0IHJ1bGVQcm9vZlN0ZXBOb2RlcyA9IHJ1bGVQcm9vZlN0ZXBOb2Rlc1F1ZXJ5KHJ1bGVEZXJpdmF0aW9uTm9kZSk7XG5cbiAgcnVsZURlcml2YXRpb25WZXJpZmllZCA9IHJ1bGVQcm9vZlN0ZXBOb2Rlcy5ldmVyeSgocnVsZVByb29mU3RlcE5vZGUpID0+IHtcbiAgICBjb25zdCBydWxlUHJvb2ZTdGVwVmVyaWZpZWQgPSB2ZXJpZnlSdWxlUHJvb2ZTdGVwKHJ1bGVQcm9vZlN0ZXBOb2RlLCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgIGlmIChydWxlUHJvb2ZTdGVwVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJ1bGVEZXJpdmF0aW9uVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5UnVsZURlcml2YXRpb24iLCJydWxlUHJvb2ZTdGVwTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJydWxlRGVyaXZhdGlvbk5vZGUiLCJsb2NhbE1ldGFDb250ZXh0IiwicnVsZURlcml2YXRpb25WZXJpZmllZCIsInJ1bGVQcm9vZlN0ZXBOb2RlcyIsImV2ZXJ5IiwicnVsZVByb29mU3RlcE5vZGUiLCJydWxlUHJvb2ZTdGVwVmVyaWZpZWQiLCJ2ZXJpZnlSdWxlUHJvb2ZTdGVwIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQXdCQTs7O29FQU5RO3FCQUVMOzs7Ozs7QUFFM0IsSUFBTUMsMEJBQTBCQyxJQUFBQSxpQkFBVSxFQUFDO0FBRTVCLFNBQVNGLHFCQUFxQkcsa0JBQWtCLEVBQUVDLGdCQUFnQjtJQUMvRSxJQUFJQztJQUVKLElBQU1DLHFCQUFxQkwsd0JBQXdCRTtJQUVuREUseUJBQXlCQyxtQkFBbUJDLEtBQUssQ0FBQyxTQUFDQztRQUNqRCxJQUFNQyx3QkFBd0JDLElBQUFBLHNCQUFtQixFQUFDRixtQkFBbUJKO1FBRXJFLElBQUlLLHVCQUF1QjtZQUN6QixPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU9KO0FBQ1QifQ==