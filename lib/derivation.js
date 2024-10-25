"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _necessary = require("necessary");
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
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
var last = _necessary.arrayUtilities.last;
var proofStepNodesQuery = (0, _query.nodesQuery)("/derivation/proofStep|lastProofStep");
var Derivation = /*#__PURE__*/ function() {
    function Derivation(proofSteps) {
        _class_call_check(this, Derivation);
        this.proofSteps = proofSteps;
    }
    _create_class(Derivation, [
        {
            key: "getProofSteps",
            value: function getProofSteps() {
                return this.proofSteps;
            }
        },
        {
            key: "getLastProofStep",
            value: function getLastProofStep() {
                var lastProofStep = last(this.proofSteps);
                return lastProofStep;
            }
        },
        {
            key: "verify",
            value: function verify(substitutions, context) {
                var verified;
                verified = this.proofSteps.every(function(proofStep) {
                    var proofStepVerified = proofStep.verify(substitutions, context);
                    if (proofStepVerified) {
                        return true;
                    }
                });
                return verified;
            }
        }
    ], [
        {
            key: "fromDerivationNode",
            value: function fromDerivationNode(derivationNode, fileContext) {
                var ProofStep = _shim.default.ProofStep, proofStepNodes = proofStepNodesQuery(derivationNode), proofSteps = proofStepNodes.map(function(proofStepNode) {
                    var proofStep = ProofStep.fromProofStepNode(proofStepNode, fileContext);
                    return proofStep;
                }), derivation = new Derivation(proofSteps);
                return derivation;
            }
        }
    ]);
    return Derivation;
}();
Object.assign(_shim.default, {
    Derivation: Derivation
});
var _default = Derivation;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZXJpdmF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IHByb29mU3RlcE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2Rlcml2YXRpb24vcHJvb2ZTdGVwfGxhc3RQcm9vZlN0ZXBcIik7XG5cbmNsYXNzIERlcml2YXRpb24ge1xuICBjb25zdHJ1Y3Rvcihwcm9vZlN0ZXBzKSB7XG4gICAgdGhpcy5wcm9vZlN0ZXBzID0gcHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldFByb29mU3RlcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldExhc3RQcm9vZlN0ZXAoKSB7XG4gICAgY29uc3QgbGFzdFByb29mU3RlcCA9IGxhc3QodGhpcy5wcm9vZlN0ZXBzKTtcblxuICAgIHJldHVybiBsYXN0UHJvb2ZTdGVwO1xuICB9XG5cbiAgdmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICB2ZXJpZmllZCA9IHRoaXMucHJvb2ZTdGVwcy5ldmVyeSgocHJvb2ZTdGVwKSA9PiB7IC8vL1xuICAgICAgY29uc3QgcHJvb2ZTdGVwVmVyaWZpZWQgPSBwcm9vZlN0ZXAudmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJvb2ZTdGVwVmVyaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbURlcml2YXRpb25Ob2RlKGRlcml2YXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgUHJvb2ZTdGVwIH0gPSBzaGltLFxuICAgICAgICAgIHByb29mU3RlcE5vZGVzID0gcHJvb2ZTdGVwTm9kZXNRdWVyeShkZXJpdmF0aW9uTm9kZSksXG4gICAgICAgICAgcHJvb2ZTdGVwcyA9IHByb29mU3RlcE5vZGVzLm1hcCgocHJvb2ZTdGVwTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvb2ZTdGVwID0gUHJvb2ZTdGVwLmZyb21Qcm9vZlN0ZXBOb2RlKHByb29mU3RlcE5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHByb29mU3RlcDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBkZXJpdmF0aW9uID0gbmV3IERlcml2YXRpb24ocHJvb2ZTdGVwcyk7XG5cbiAgICByZXR1cm4gZGVyaXZhdGlvbjtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgRGVyaXZhdGlvblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IERlcml2YXRpb247XG4iXSwibmFtZXMiOlsibGFzdCIsImFycmF5VXRpbGl0aWVzIiwicHJvb2ZTdGVwTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJEZXJpdmF0aW9uIiwicHJvb2ZTdGVwcyIsImdldFByb29mU3RlcHMiLCJnZXRMYXN0UHJvb2ZTdGVwIiwibGFzdFByb29mU3RlcCIsInZlcmlmeSIsInN1YnN0aXR1dGlvbnMiLCJjb250ZXh0IiwidmVyaWZpZWQiLCJldmVyeSIsInByb29mU3RlcCIsInByb29mU3RlcFZlcmlmaWVkIiwiZnJvbURlcml2YXRpb25Ob2RlIiwiZGVyaXZhdGlvbk5vZGUiLCJmaWxlQ29udGV4dCIsIlByb29mU3RlcCIsInNoaW0iLCJwcm9vZlN0ZXBOb2RlcyIsIm1hcCIsInByb29mU3RlcE5vZGUiLCJmcm9tUHJvb2ZTdGVwTm9kZSIsImRlcml2YXRpb24iLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTJEQTs7O2VBQUE7Ozt5QkF6RCtCOzJEQUVkO3FCQUVVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNCLElBQU0sQUFBRUEsT0FBU0MseUJBQWMsQ0FBdkJEO0FBRVIsSUFBTUUsc0JBQXNCQyxJQUFBQSxpQkFBVSxFQUFDO0FBRXZDLElBQUEsQUFBTUMsMkJBQU47YUFBTUEsV0FDUUMsVUFBVTtnQ0FEbEJEO1FBRUYsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOztrQkFGaEJEOztZQUtKRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFVBQVU7WUFDeEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZ0JBQWdCUixLQUFLLElBQUksQ0FBQ0ssVUFBVTtnQkFFMUMsT0FBT0c7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxhQUFhLEVBQUVDLE9BQU87Z0JBQzNCLElBQUlDO2dCQUVKQSxXQUFXLElBQUksQ0FBQ1AsVUFBVSxDQUFDUSxLQUFLLENBQUMsU0FBQ0M7b0JBQ2hDLElBQU1DLG9CQUFvQkQsVUFBVUwsTUFBTSxDQUFDQyxlQUFlQztvQkFFMUQsSUFBSUksbUJBQW1CO3dCQUNyQixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9IO1lBQ1Q7Ozs7WUFFT0ksS0FBQUE7bUJBQVAsU0FBT0EsbUJBQW1CQyxjQUFjLEVBQUVDLFdBQVc7Z0JBQ25ELElBQU0sQUFBRUMsWUFBY0MsYUFBSSxDQUFsQkQsV0FDRkUsaUJBQWlCbkIsb0JBQW9CZSxpQkFDckNaLGFBQWFnQixlQUFlQyxHQUFHLENBQUMsU0FBQ0M7b0JBQy9CLElBQU1ULFlBQVlLLFVBQVVLLGlCQUFpQixDQUFDRCxlQUFlTDtvQkFFN0QsT0FBT0o7Z0JBQ1QsSUFDQVcsYUFBYSxJQXJDakJyQixXQXFDZ0NDO2dCQUVsQyxPQUFPb0I7WUFDVDs7O1dBeENJckI7O0FBMkNOc0IsT0FBT0MsTUFBTSxDQUFDUCxhQUFJLEVBQUU7SUFDbEJoQixZQUFBQTtBQUNGO0lBRUEsV0FBZUEifQ==