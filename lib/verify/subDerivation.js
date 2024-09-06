"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifySubDerivation;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var proofStepNodesQuery = (0, _query.nodesQuery)("/subDerivation/proofStep|lastProofStep");
function verifySubDerivation(subDerivationNode, substitutions, localContext) {
    var subDerivationVerified;
    var proofStepNodes = proofStepNodesQuery(subDerivationNode);
    subDerivationVerified = proofStepNodes.every(function(proofStepNode) {
        var verifyProofStep = _shim.default.verifyProofStep, proofStepVerified = verifyProofStep(proofStepNode, substitutions, localContext);
        if (proofStepVerified) {
            return true;
        }
    });
    return subDerivationVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3ViRGVyaXZhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcblxuaW1wb3J0IHsgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgcHJvb2ZTdGVwTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3ViRGVyaXZhdGlvbi9wcm9vZlN0ZXB8bGFzdFByb29mU3RlcFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5U3ViRGVyaXZhdGlvbihzdWJEZXJpdmF0aW9uTm9kZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdWJEZXJpdmF0aW9uVmVyaWZpZWQ7XG5cbiAgY29uc3QgcHJvb2ZTdGVwTm9kZXMgPSBwcm9vZlN0ZXBOb2Rlc1F1ZXJ5KHN1YkRlcml2YXRpb25Ob2RlKTtcblxuICBzdWJEZXJpdmF0aW9uVmVyaWZpZWQgPSBwcm9vZlN0ZXBOb2Rlcy5ldmVyeSgocHJvb2ZTdGVwTm9kZSkgPT4ge1xuICAgIGNvbnN0IHsgdmVyaWZ5UHJvb2ZTdGVwIH0gPSBzaGltLFxuICAgICAgICAgIHByb29mU3RlcFZlcmlmaWVkID0gdmVyaWZ5UHJvb2ZTdGVwKHByb29mU3RlcE5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAocHJvb2ZTdGVwVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHN1YkRlcml2YXRpb25WZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlTdWJEZXJpdmF0aW9uIiwicHJvb2ZTdGVwTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJzdWJEZXJpdmF0aW9uTm9kZSIsInN1YnN0aXR1dGlvbnMiLCJsb2NhbENvbnRleHQiLCJzdWJEZXJpdmF0aW9uVmVyaWZpZWQiLCJwcm9vZlN0ZXBOb2RlcyIsImV2ZXJ5IiwicHJvb2ZTdGVwTm9kZSIsInZlcmlmeVByb29mU3RlcCIsInNoaW0iLCJwcm9vZlN0ZXBWZXJpZmllZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUF3QkE7OzsyREFOUDtxQkFFVTs7Ozs7O0FBRTNCLElBQU1DLHNCQUFzQkMsSUFBQUEsaUJBQVUsRUFBQztBQUV4QixTQUFTRixvQkFBb0JHLGlCQUFpQixFQUFFQyxhQUFhLEVBQUVDLFlBQVk7SUFDeEYsSUFBSUM7SUFFSixJQUFNQyxpQkFBaUJOLG9CQUFvQkU7SUFFM0NHLHdCQUF3QkMsZUFBZUMsS0FBSyxDQUFDLFNBQUNDO1FBQzVDLElBQU0sQUFBRUMsa0JBQW9CQyxhQUFJLENBQXhCRCxpQkFDRkUsb0JBQW9CRixnQkFBZ0JELGVBQWVMLGVBQWVDO1FBRXhFLElBQUlPLG1CQUFtQjtZQUNyQixPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU9OO0FBQ1QifQ==