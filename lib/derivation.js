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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZXJpdmF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IHByb29mU3RlcE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2Rlcml2YXRpb24vcHJvb2ZTdGVwfGxhc3RQcm9vZlN0ZXBcIik7XG5cbmNsYXNzIERlcml2YXRpb24ge1xuICBjb25zdHJ1Y3Rvcihwcm9vZlN0ZXBzKSB7XG4gICAgdGhpcy5wcm9vZlN0ZXBzID0gcHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldFByb29mU3RlcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldExhc3RQcm9vZlN0ZXAoKSB7XG4gICAgY29uc3QgbGFzdFByb29mU3RlcCA9IGxhc3QodGhpcy5wcm9vZlN0ZXBzKTtcblxuICAgIHJldHVybiBsYXN0UHJvb2ZTdGVwO1xuICB9XG5cbiAgdmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIHZlcmlmaWVkID0gdGhpcy5wcm9vZlN0ZXBzLmV2ZXJ5KChwcm9vZlN0ZXApID0+IHsgLy8vXG4gICAgICBjb25zdCBwcm9vZlN0ZXBWZXJpZmllZCA9IHByb29mU3RlcC52ZXJpZnkoc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKHByb29mU3RlcFZlcmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZXJpdmF0aW9uTm9kZShkZXJpdmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IFByb29mU3RlcCB9ID0gc2hpbSxcbiAgICAgICAgICBwcm9vZlN0ZXBOb2RlcyA9IHByb29mU3RlcE5vZGVzUXVlcnkoZGVyaXZhdGlvbk5vZGUpLFxuICAgICAgICAgIHByb29mU3RlcHMgPSBwcm9vZlN0ZXBOb2Rlcy5tYXAoKHByb29mU3RlcE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb29mU3RlcCA9IFByb29mU3RlcC5mcm9tUHJvb2ZTdGVwTm9kZShwcm9vZlN0ZXBOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBwcm9vZlN0ZXA7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZGVyaXZhdGlvbiA9IG5ldyBEZXJpdmF0aW9uKHByb29mU3RlcHMpO1xuXG4gICAgcmV0dXJuIGRlcml2YXRpb247XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIERlcml2YXRpb25cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBEZXJpdmF0aW9uO1xuIl0sIm5hbWVzIjpbImxhc3QiLCJhcnJheVV0aWxpdGllcyIsInByb29mU3RlcE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiRGVyaXZhdGlvbiIsInByb29mU3RlcHMiLCJnZXRQcm9vZlN0ZXBzIiwiZ2V0TGFzdFByb29mU3RlcCIsImxhc3RQcm9vZlN0ZXAiLCJ2ZXJpZnkiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0IiwidmVyaWZpZWQiLCJldmVyeSIsInByb29mU3RlcCIsInByb29mU3RlcFZlcmlmaWVkIiwiZnJvbURlcml2YXRpb25Ob2RlIiwiZGVyaXZhdGlvbk5vZGUiLCJmaWxlQ29udGV4dCIsIlByb29mU3RlcCIsInNoaW0iLCJwcm9vZlN0ZXBOb2RlcyIsIm1hcCIsInByb29mU3RlcE5vZGUiLCJmcm9tUHJvb2ZTdGVwTm9kZSIsImRlcml2YXRpb24iLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTJEQTs7O2VBQUE7Ozt5QkF6RCtCOzJEQUVkO3FCQUVVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNCLElBQU0sQUFBRUEsT0FBU0MseUJBQWMsQ0FBdkJEO0FBRVIsSUFBTUUsc0JBQXNCQyxJQUFBQSxpQkFBVSxFQUFDO0FBRXZDLElBQUEsQUFBTUMsMkJBQU47YUFBTUEsV0FDUUMsVUFBVTtnQ0FEbEJEO1FBRUYsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOztrQkFGaEJEOztZQUtKRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFVBQVU7WUFDeEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZ0JBQWdCUixLQUFLLElBQUksQ0FBQ0ssVUFBVTtnQkFFMUMsT0FBT0c7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxhQUFhLEVBQUVDLFlBQVk7Z0JBQ2hDLElBQUlDO2dCQUVKQSxXQUFXLElBQUksQ0FBQ1AsVUFBVSxDQUFDUSxLQUFLLENBQUMsU0FBQ0M7b0JBQ2hDLElBQU1DLG9CQUFvQkQsVUFBVUwsTUFBTSxDQUFDQyxlQUFlQztvQkFFMUQsSUFBSUksbUJBQW1CO3dCQUNyQixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9IO1lBQ1Q7Ozs7WUFFT0ksS0FBQUE7bUJBQVAsU0FBT0EsbUJBQW1CQyxjQUFjLEVBQUVDLFdBQVc7Z0JBQ25ELElBQU0sQUFBRUMsWUFBY0MsYUFBSSxDQUFsQkQsV0FDRkUsaUJBQWlCbkIsb0JBQW9CZSxpQkFDckNaLGFBQWFnQixlQUFlQyxHQUFHLENBQUMsU0FBQ0M7b0JBQy9CLElBQU1ULFlBQVlLLFVBQVVLLGlCQUFpQixDQUFDRCxlQUFlTDtvQkFFN0QsT0FBT0o7Z0JBQ1QsSUFDQVcsYUFBYSxJQXJDakJyQixXQXFDZ0NDO2dCQUVsQyxPQUFPb0I7WUFDVDs7O1dBeENJckI7O0FBMkNOc0IsT0FBT0MsTUFBTSxDQUFDUCxhQUFJLEVBQUU7SUFDbEJoQixZQUFBQTtBQUNGO0lBRUEsV0FBZUEifQ==