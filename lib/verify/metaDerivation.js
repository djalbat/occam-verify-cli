"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyMetaDerivation;
    }
});
var _metaProofStep = /*#__PURE__*/ _interop_require_default(require("../verify/metaProofStep"));
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var metaProofStepNodesQuery = (0, _query.nodesQuery)("/metaDerivation/metaProofStep|lastMetaProofStep");
function verifyMetaDerivation(metaDerivationNode, substitutions, localMetaContext) {
    var metaDerivationVerified;
    var metaProofStepNodes = metaProofStepNodesQuery(metaDerivationNode);
    metaDerivationVerified = metaProofStepNodes.every(function(metaProofStepNode) {
        var metaProofStepVerified = (0, _metaProofStep.default)(metaProofStepNode, substitutions, localMetaContext);
        if (metaProofStepVerified) {
            return true;
        }
    });
    return metaDerivationVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbWV0YURlcml2YXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlNZXRhUHJvb2ZTdGVwIGZyb20gXCIuLi92ZXJpZnkvbWV0YVByb29mU3RlcFwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBtZXRhUHJvb2ZTdGVwTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvbWV0YURlcml2YXRpb24vbWV0YVByb29mU3RlcHxsYXN0TWV0YVByb29mU3RlcFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5TWV0YURlcml2YXRpb24obWV0YURlcml2YXRpb25Ob2RlLCBzdWJzdGl0dXRpb25zLCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gIGxldCBtZXRhRGVyaXZhdGlvblZlcmlmaWVkO1xuXG4gIGNvbnN0IG1ldGFQcm9vZlN0ZXBOb2RlcyA9IG1ldGFQcm9vZlN0ZXBOb2Rlc1F1ZXJ5KG1ldGFEZXJpdmF0aW9uTm9kZSk7XG5cbiAgbWV0YURlcml2YXRpb25WZXJpZmllZCA9IG1ldGFQcm9vZlN0ZXBOb2Rlcy5ldmVyeSgobWV0YVByb29mU3RlcE5vZGUpID0+IHtcbiAgICBjb25zdCBtZXRhUHJvb2ZTdGVwVmVyaWZpZWQgPSB2ZXJpZnlNZXRhUHJvb2ZTdGVwKG1ldGFQcm9vZlN0ZXBOb2RlLCBzdWJzdGl0dXRpb25zLCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgIGlmIChtZXRhUHJvb2ZTdGVwVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGFEZXJpdmF0aW9uVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5TWV0YURlcml2YXRpb24iLCJtZXRhUHJvb2ZTdGVwTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJtZXRhRGVyaXZhdGlvbk5vZGUiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxNZXRhQ29udGV4dCIsIm1ldGFEZXJpdmF0aW9uVmVyaWZpZWQiLCJtZXRhUHJvb2ZTdGVwTm9kZXMiLCJldmVyeSIsIm1ldGFQcm9vZlN0ZXBOb2RlIiwibWV0YVByb29mU3RlcFZlcmlmaWVkIiwidmVyaWZ5TWV0YVByb29mU3RlcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUF3QkE7OztvRUFOUTtxQkFFTDs7Ozs7O0FBRTNCLElBQU1DLDBCQUEwQkMsSUFBQUEsaUJBQVUsRUFBQztBQUU1QixTQUFTRixxQkFBcUJHLGtCQUFrQixFQUFFQyxhQUFhLEVBQUVDLGdCQUFnQjtJQUM5RixJQUFJQztJQUVKLElBQU1DLHFCQUFxQk4sd0JBQXdCRTtJQUVuREcseUJBQXlCQyxtQkFBbUJDLEtBQUssQ0FBQyxTQUFDQztRQUNqRCxJQUFNQyx3QkFBd0JDLElBQUFBLHNCQUFtQixFQUFDRixtQkFBbUJMLGVBQWVDO1FBRXBGLElBQUlLLHVCQUF1QjtZQUN6QixPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU9KO0FBQ1QifQ==