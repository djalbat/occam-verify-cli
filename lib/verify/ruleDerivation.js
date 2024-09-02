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
function verifyRuleDerivation(ruleDerivationNode, localContext) {
    var ruleDerivationVerified;
    var ruleProofStepNodes = ruleProofStepNodesQuery(ruleDerivationNode);
    ruleDerivationVerified = ruleProofStepNodes.every(function(ruleProofStepNode) {
        var ruleProofStepVerified = (0, _ruleProofStep.default)(ruleProofStepNode, localContext);
        if (ruleProofStepVerified) {
            return true;
        }
    });
    return ruleDerivationVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcnVsZURlcml2YXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlSdWxlUHJvb2ZTdGVwIGZyb20gXCIuLi92ZXJpZnkvcnVsZVByb29mU3RlcFwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBydWxlUHJvb2ZTdGVwTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcnVsZURlcml2YXRpb24vcnVsZVByb29mU3RlcHxsYXN0UnVsZVByb29mU3RlcFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5UnVsZURlcml2YXRpb24ocnVsZURlcml2YXRpb25Ob2RlLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHJ1bGVEZXJpdmF0aW9uVmVyaWZpZWQ7XG5cbiAgY29uc3QgcnVsZVByb29mU3RlcE5vZGVzID0gcnVsZVByb29mU3RlcE5vZGVzUXVlcnkocnVsZURlcml2YXRpb25Ob2RlKTtcblxuICBydWxlRGVyaXZhdGlvblZlcmlmaWVkID0gcnVsZVByb29mU3RlcE5vZGVzLmV2ZXJ5KChydWxlUHJvb2ZTdGVwTm9kZSkgPT4ge1xuICAgIGNvbnN0IHJ1bGVQcm9vZlN0ZXBWZXJpZmllZCA9IHZlcmlmeVJ1bGVQcm9vZlN0ZXAocnVsZVByb29mU3RlcE5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAocnVsZVByb29mU3RlcFZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBydWxlRGVyaXZhdGlvblZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVJ1bGVEZXJpdmF0aW9uIiwicnVsZVByb29mU3RlcE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicnVsZURlcml2YXRpb25Ob2RlIiwibG9jYWxDb250ZXh0IiwicnVsZURlcml2YXRpb25WZXJpZmllZCIsInJ1bGVQcm9vZlN0ZXBOb2RlcyIsImV2ZXJ5IiwicnVsZVByb29mU3RlcE5vZGUiLCJydWxlUHJvb2ZTdGVwVmVyaWZpZWQiLCJ2ZXJpZnlSdWxlUHJvb2ZTdGVwIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQXdCQTs7O29FQU5RO3FCQUVMOzs7Ozs7QUFFM0IsSUFBTUMsMEJBQTBCQyxJQUFBQSxpQkFBVSxFQUFDO0FBRTVCLFNBQVNGLHFCQUFxQkcsa0JBQWtCLEVBQUVDLFlBQVk7SUFDM0UsSUFBSUM7SUFFSixJQUFNQyxxQkFBcUJMLHdCQUF3QkU7SUFFbkRFLHlCQUF5QkMsbUJBQW1CQyxLQUFLLENBQUMsU0FBQ0M7UUFDakQsSUFBTUMsd0JBQXdCQyxJQUFBQSxzQkFBbUIsRUFBQ0YsbUJBQW1CSjtRQUVyRSxJQUFJSyx1QkFBdUI7WUFDekIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPSjtBQUNUIn0=