"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SubDerivation;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _array = require("./utilities/array");
var _query = require("./utilities/query");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var proofStepNodesQuery = (0, _query.nodesQuery)("/subDerivation/proofStep|lastProofStep");
var SubDerivation = /*#__PURE__*/ function() {
    function SubDerivation(proofSteps) {
        _class_call_check(this, SubDerivation);
        this.proofSteps = proofSteps;
    }
    _create_class(SubDerivation, [
        {
            key: "getProofSteps",
            value: function getProofSteps() {
                return this.proofSteps;
            }
        },
        {
            key: "getLastProofStep",
            value: function getLastProofStep() {
                var lastProofStep = (0, _array.last)(this.proofSteps);
                return lastProofStep;
            }
        },
        {
            key: "verify",
            value: function verify(substitutions, localContext) {
                var verified;
                verified = this.proofSteps.every(function(proofStep) {
                    var proofStepVerified = proofStep.verify(substitutions, localContext);
                    if (proofStepVerified) {
                        return true;
                    }
                });
                return verified;
            }
        }
    ], [
        {
            key: "fromSubDerivationNode",
            value: function fromSubDerivationNode(subDerivationNode, fileContext) {
                var ProofStep = _shim.default.ProofStep, proofStepNodes = proofStepNodesQuery(subDerivationNode), proofSteps = proofStepNodes.map(function(proofStepNode) {
                    var proofStep = ProofStep.fromProofStepNode(proofStepNode, fileContext);
                    return proofStep;
                }), subDerivation = new SubDerivation(proofSteps);
                return subDerivation;
            }
        }
    ]);
    return SubDerivation;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdWJEZXJpdmF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi9zaGltXCI7XG5cbmltcG9ydCB7IGxhc3QgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVzUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgcHJvb2ZTdGVwTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3ViRGVyaXZhdGlvbi9wcm9vZlN0ZXB8bGFzdFByb29mU3RlcFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ViRGVyaXZhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHByb29mU3RlcHMpIHtcbiAgICB0aGlzLnByb29mU3RlcHMgPSBwcm9vZlN0ZXBzO1xuICB9XG5cbiAgZ2V0UHJvb2ZTdGVwcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9vZlN0ZXBzO1xuICB9XG5cbiAgZ2V0TGFzdFByb29mU3RlcCgpIHtcbiAgICBjb25zdCBsYXN0UHJvb2ZTdGVwID0gbGFzdCh0aGlzLnByb29mU3RlcHMpO1xuXG4gICAgcmV0dXJuIGxhc3RQcm9vZlN0ZXA7XG4gIH1cblxuICB2ZXJpZnkoc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgdmVyaWZpZWQgPSB0aGlzLnByb29mU3RlcHMuZXZlcnkoKHByb29mU3RlcCkgPT4geyAvLy9cbiAgICAgIGNvbnN0IHByb29mU3RlcFZlcmlmaWVkID0gcHJvb2ZTdGVwLnZlcmlmeShzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAocHJvb2ZTdGVwVmVyaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1YkRlcml2YXRpb25Ob2RlKHN1YkRlcml2YXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgUHJvb2ZTdGVwIH0gPSBzaGltLFxuICAgICAgICAgIHByb29mU3RlcE5vZGVzID0gcHJvb2ZTdGVwTm9kZXNRdWVyeShzdWJEZXJpdmF0aW9uTm9kZSksXG4gICAgICAgICAgcHJvb2ZTdGVwcyA9IHByb29mU3RlcE5vZGVzLm1hcCgocHJvb2ZTdGVwTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvb2ZTdGVwID0gUHJvb2ZTdGVwLmZyb21Qcm9vZlN0ZXBOb2RlKHByb29mU3RlcE5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHByb29mU3RlcDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzdWJEZXJpdmF0aW9uID0gbmV3IFN1YkRlcml2YXRpb24ocHJvb2ZTdGVwcyk7XG5cbiAgICByZXR1cm4gc3ViRGVyaXZhdGlvbjtcblxuICB9XG59Il0sIm5hbWVzIjpbIlN1YkRlcml2YXRpb24iLCJwcm9vZlN0ZXBOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInByb29mU3RlcHMiLCJnZXRQcm9vZlN0ZXBzIiwiZ2V0TGFzdFByb29mU3RlcCIsImxhc3RQcm9vZlN0ZXAiLCJsYXN0IiwidmVyaWZ5Iiwic3Vic3RpdHV0aW9ucyIsImxvY2FsQ29udGV4dCIsInZlcmlmaWVkIiwiZXZlcnkiLCJwcm9vZlN0ZXAiLCJwcm9vZlN0ZXBWZXJpZmllZCIsImZyb21TdWJEZXJpdmF0aW9uTm9kZSIsInN1YkRlcml2YXRpb25Ob2RlIiwiZmlsZUNvbnRleHQiLCJQcm9vZlN0ZXAiLCJzaGltIiwicHJvb2ZTdGVwTm9kZXMiLCJtYXAiLCJwcm9vZlN0ZXBOb2RlIiwiZnJvbVByb29mU3RlcE5vZGUiLCJzdWJEZXJpdmF0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OzsyREFQSjtxQkFFSTtxQkFDTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQixJQUFNQyxzQkFBc0JDLElBQUFBLGlCQUFVLEVBQUM7QUFFeEIsSUFBQSxBQUFNRiw4QkFBTjthQUFNQSxjQUNQRyxVQUFVO2dDQURISDtRQUVqQixJQUFJLENBQUNHLFVBQVUsR0FBR0E7O2tCQUZESDs7WUFLbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsVUFBVTtZQUN4Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxnQkFBZ0JDLElBQUFBLFdBQUksRUFBQyxJQUFJLENBQUNKLFVBQVU7Z0JBRTFDLE9BQU9HO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsYUFBYSxFQUFFQyxZQUFZO2dCQUNoQyxJQUFJQztnQkFFSkEsV0FBVyxJQUFJLENBQUNSLFVBQVUsQ0FBQ1MsS0FBSyxDQUFDLFNBQUNDO29CQUNoQyxJQUFNQyxvQkFBb0JELFVBQVVMLE1BQU0sQ0FBQ0MsZUFBZUM7b0JBRTFELElBQUlJLG1CQUFtQjt3QkFDckIsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPSDtZQUNUOzs7O1lBRU9JLEtBQUFBO21CQUFQLFNBQU9BLHNCQUFzQkMsaUJBQWlCLEVBQUVDLFdBQVc7Z0JBQ3pELElBQU0sQUFBRUMsWUFBY0MsYUFBSSxDQUFsQkQsV0FDRkUsaUJBQWlCbkIsb0JBQW9CZSxvQkFDckNiLGFBQWFpQixlQUFlQyxHQUFHLENBQUMsU0FBQ0M7b0JBQy9CLElBQU1ULFlBQVlLLFVBQVVLLGlCQUFpQixDQUFDRCxlQUFlTDtvQkFFN0QsT0FBT0o7Z0JBQ1QsSUFDQVcsZ0JBQWdCLElBckNMeEIsY0FxQ3VCRztnQkFFeEMsT0FBT3FCO1lBRVQ7OztXQXpDbUJ4QiJ9