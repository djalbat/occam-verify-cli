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
Object.assign(_shim.default, {
    SubDerivation: SubDerivation
});
var _default = SubDerivation;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdWJEZXJpdmF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IHByb29mU3RlcE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3N1YkRlcml2YXRpb24vcHJvb2ZTdGVwfGxhc3RQcm9vZlN0ZXBcIik7XG5cbmNsYXNzIFN1YkRlcml2YXRpb24ge1xuICBjb25zdHJ1Y3Rvcihwcm9vZlN0ZXBzKSB7XG4gICAgdGhpcy5wcm9vZlN0ZXBzID0gcHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldFByb29mU3RlcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldExhc3RQcm9vZlN0ZXAoKSB7XG4gICAgY29uc3QgbGFzdFByb29mU3RlcCA9IGxhc3QodGhpcy5wcm9vZlN0ZXBzKTtcblxuICAgIHJldHVybiBsYXN0UHJvb2ZTdGVwO1xuICB9XG5cbiAgdmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIHZlcmlmaWVkID0gdGhpcy5wcm9vZlN0ZXBzLmV2ZXJ5KChwcm9vZlN0ZXApID0+IHsgLy8vXG4gICAgICBjb25zdCBwcm9vZlN0ZXBWZXJpZmllZCA9IHByb29mU3RlcC52ZXJpZnkoc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKHByb29mU3RlcFZlcmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdWJEZXJpdmF0aW9uTm9kZShzdWJEZXJpdmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IFByb29mU3RlcCB9ID0gc2hpbSxcbiAgICAgICAgICBwcm9vZlN0ZXBOb2RlcyA9IHByb29mU3RlcE5vZGVzUXVlcnkoc3ViRGVyaXZhdGlvbk5vZGUpLFxuICAgICAgICAgIHByb29mU3RlcHMgPSBwcm9vZlN0ZXBOb2Rlcy5tYXAoKHByb29mU3RlcE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb29mU3RlcCA9IFByb29mU3RlcC5mcm9tUHJvb2ZTdGVwTm9kZShwcm9vZlN0ZXBOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBwcm9vZlN0ZXA7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgc3ViRGVyaXZhdGlvbiA9IG5ldyBTdWJEZXJpdmF0aW9uKHByb29mU3RlcHMpO1xuXG4gICAgcmV0dXJuIHN1YkRlcml2YXRpb247XG5cbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgU3ViRGVyaXZhdGlvblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFN1YkRlcml2YXRpb247XG4iXSwibmFtZXMiOlsibGFzdCIsImFycmF5VXRpbGl0aWVzIiwicHJvb2ZTdGVwTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJTdWJEZXJpdmF0aW9uIiwicHJvb2ZTdGVwcyIsImdldFByb29mU3RlcHMiLCJnZXRMYXN0UHJvb2ZTdGVwIiwibGFzdFByb29mU3RlcCIsInZlcmlmeSIsInN1YnN0aXR1dGlvbnMiLCJsb2NhbENvbnRleHQiLCJ2ZXJpZmllZCIsImV2ZXJ5IiwicHJvb2ZTdGVwIiwicHJvb2ZTdGVwVmVyaWZpZWQiLCJmcm9tU3ViRGVyaXZhdGlvbk5vZGUiLCJzdWJEZXJpdmF0aW9uTm9kZSIsImZpbGVDb250ZXh0IiwiUHJvb2ZTdGVwIiwic2hpbSIsInByb29mU3RlcE5vZGVzIiwibWFwIiwicHJvb2ZTdGVwTm9kZSIsImZyb21Qcm9vZlN0ZXBOb2RlIiwic3ViRGVyaXZhdGlvbiIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNERBOzs7ZUFBQTs7O3lCQTFEK0I7MkRBRWQ7cUJBRVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0IsSUFBTSxBQUFFQSxPQUFTQyx5QkFBYyxDQUF2QkQ7QUFFUixJQUFNRSxzQkFBc0JDLElBQUFBLGlCQUFVLEVBQUM7QUFFdkMsSUFBQSxBQUFNQyw4QkFBTjthQUFNQSxjQUNRQyxVQUFVO2dDQURsQkQ7UUFFRixJQUFJLENBQUNDLFVBQVUsR0FBR0E7O2tCQUZoQkQ7O1lBS0pFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsVUFBVTtZQUN4Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxnQkFBZ0JSLEtBQUssSUFBSSxDQUFDSyxVQUFVO2dCQUUxQyxPQUFPRztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLGFBQWEsRUFBRUMsWUFBWTtnQkFDaEMsSUFBSUM7Z0JBRUpBLFdBQVcsSUFBSSxDQUFDUCxVQUFVLENBQUNRLEtBQUssQ0FBQyxTQUFDQztvQkFDaEMsSUFBTUMsb0JBQW9CRCxVQUFVTCxNQUFNLENBQUNDLGVBQWVDO29CQUUxRCxJQUFJSSxtQkFBbUI7d0JBQ3JCLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsT0FBT0g7WUFDVDs7OztZQUVPSSxLQUFBQTttQkFBUCxTQUFPQSxzQkFBc0JDLGlCQUFpQixFQUFFQyxXQUFXO2dCQUN6RCxJQUFNLEFBQUVDLFlBQWNDLGFBQUksQ0FBbEJELFdBQ0ZFLGlCQUFpQm5CLG9CQUFvQmUsb0JBQ3JDWixhQUFhZ0IsZUFBZUMsR0FBRyxDQUFDLFNBQUNDO29CQUMvQixJQUFNVCxZQUFZSyxVQUFVSyxpQkFBaUIsQ0FBQ0QsZUFBZUw7b0JBRTdELE9BQU9KO2dCQUNULElBQ0FXLGdCQUFnQixJQXJDcEJyQixjQXFDc0NDO2dCQUV4QyxPQUFPb0I7WUFFVDs7O1dBekNJckI7O0FBNENOc0IsT0FBT0MsTUFBTSxDQUFDUCxhQUFJLEVBQUU7SUFDbEJoQixlQUFBQTtBQUNGO0lBRUEsV0FBZUEifQ==