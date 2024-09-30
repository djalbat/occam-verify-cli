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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdWJEZXJpdmF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi9zaGltXCI7XG5cbmltcG9ydCB7IG5vZGVzUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgcHJvb2ZTdGVwTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3ViRGVyaXZhdGlvbi9wcm9vZlN0ZXB8bGFzdFByb29mU3RlcFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ViRGVyaXZhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHByb29mU3RlcHMpIHtcbiAgICB0aGlzLnByb29mU3RlcHMgPSBwcm9vZlN0ZXBzO1xuICB9XG5cbiAgZ2V0UHJvb2ZTdGVwcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9vZlN0ZXBzO1xuICB9XG5cbiAgdmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIHZlcmlmaWVkID0gdGhpcy5wcm9vZlN0ZXBzLmV2ZXJ5KChwcm9vZlN0ZXApID0+IHsgLy8vXG4gICAgICBjb25zdCBwcm9vZlN0ZXBWZXJpZmllZCA9IHByb29mU3RlcC52ZXJpZnkoc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKHByb29mU3RlcFZlcmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdWJEZXJpdmF0aW9uTm9kZShzdWJEZXJpdmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IFByb29mU3RlcCB9ID0gc2hpbSxcbiAgICAgICAgICBwcm9vZlN0ZXBOb2RlcyA9IHByb29mU3RlcE5vZGVzUXVlcnkoc3ViRGVyaXZhdGlvbk5vZGUpLFxuICAgICAgICAgIHByb29mU3RlcHMgPSBwcm9vZlN0ZXBOb2Rlcy5tYXAoKHByb29mU3RlcE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb29mU3RlcCA9IFByb29mU3RlcC5mcm9tUHJvb2ZTdGVwTm9kZShwcm9vZlN0ZXBOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBwcm9vZlN0ZXA7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgc3ViRGVyaXZhdGlvbiA9IG5ldyBTdWJEZXJpdmF0aW9uKHByb29mU3RlcHMpO1xuXG4gICAgcmV0dXJuIHN1YkRlcml2YXRpb247XG5cbiAgfVxufSJdLCJuYW1lcyI6WyJTdWJEZXJpdmF0aW9uIiwicHJvb2ZTdGVwTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJwcm9vZlN0ZXBzIiwiZ2V0UHJvb2ZTdGVwcyIsInZlcmlmeSIsInN1YnN0aXR1dGlvbnMiLCJsb2NhbENvbnRleHQiLCJ2ZXJpZmllZCIsImV2ZXJ5IiwicHJvb2ZTdGVwIiwicHJvb2ZTdGVwVmVyaWZpZWQiLCJmcm9tU3ViRGVyaXZhdGlvbk5vZGUiLCJzdWJEZXJpdmF0aW9uTm9kZSIsImZpbGVDb250ZXh0IiwiUHJvb2ZTdGVwIiwic2hpbSIsInByb29mU3RlcE5vZGVzIiwibWFwIiwicHJvb2ZTdGVwTm9kZSIsImZyb21Qcm9vZlN0ZXBOb2RlIiwic3ViRGVyaXZhdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7MkRBTko7cUJBRVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0IsSUFBTUMsc0JBQXNCQyxJQUFBQSxpQkFBVSxFQUFDO0FBRXhCLElBQUEsQUFBTUYsOEJBQU47YUFBTUEsY0FDUEcsVUFBVTtnQ0FESEg7UUFFakIsSUFBSSxDQUFDRyxVQUFVLEdBQUdBOztrQkFGREg7O1lBS25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFVBQVU7WUFDeEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsYUFBYSxFQUFFQyxZQUFZO2dCQUNoQyxJQUFJQztnQkFFSkEsV0FBVyxJQUFJLENBQUNMLFVBQVUsQ0FBQ00sS0FBSyxDQUFDLFNBQUNDO29CQUNoQyxJQUFNQyxvQkFBb0JELFVBQVVMLE1BQU0sQ0FBQ0MsZUFBZUM7b0JBRTFELElBQUlJLG1CQUFtQjt3QkFDckIsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPSDtZQUNUOzs7O1lBRU9JLEtBQUFBO21CQUFQLFNBQU9BLHNCQUFzQkMsaUJBQWlCLEVBQUVDLFdBQVc7Z0JBQ3pELElBQU0sQUFBRUMsWUFBY0MsYUFBSSxDQUFsQkQsV0FDRkUsaUJBQWlCaEIsb0JBQW9CWSxvQkFDckNWLGFBQWFjLGVBQWVDLEdBQUcsQ0FBQyxTQUFDQztvQkFDL0IsSUFBTVQsWUFBWUssVUFBVUssaUJBQWlCLENBQUNELGVBQWVMO29CQUU3RCxPQUFPSjtnQkFDVCxJQUNBVyxnQkFBZ0IsSUEvQkxyQixjQStCdUJHO2dCQUV4QyxPQUFPa0I7WUFFVDs7O1dBbkNtQnJCIn0=