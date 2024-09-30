"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Derivation;
    }
});
var _proofStep = /*#__PURE__*/ _interop_require_default(require("./proofStep"));
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
                var proofStepNodes = proofStepNodesQuery(derivationNode), proofSteps = proofStepNodes.map(function(proofStepNode) {
                    var proofStep = _proofStep.default.fromProofStepNode(proofStepNode, fileContext);
                    return proofStep;
                }), derivation = new Derivation(proofSteps);
                return derivation;
            }
        }
    ]);
    return Derivation;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZXJpdmF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUHJvb2ZTdGVwIGZyb20gXCIuL3Byb29mU3RlcFwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHByb29mU3RlcE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2Rlcml2YXRpb24vcHJvb2ZTdGVwfGxhc3RQcm9vZlN0ZXBcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlcml2YXRpb24ge1xuICBjb25zdHJ1Y3Rvcihwcm9vZlN0ZXBzKSB7XG4gICAgdGhpcy5wcm9vZlN0ZXBzID0gcHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldFByb29mU3RlcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvb2ZTdGVwcztcbiAgfVxuXG4gIHZlcmlmeShzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICB2ZXJpZmllZCA9IHRoaXMucHJvb2ZTdGVwcy5ldmVyeSgocHJvb2ZTdGVwKSA9PiB7IC8vL1xuICAgICAgY29uc3QgcHJvb2ZTdGVwVmVyaWZpZWQgPSBwcm9vZlN0ZXAudmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9vZlN0ZXBWZXJpZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVyaXZhdGlvbk5vZGUoZGVyaXZhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgcHJvb2ZTdGVwTm9kZXMgPSBwcm9vZlN0ZXBOb2Rlc1F1ZXJ5KGRlcml2YXRpb25Ob2RlKSxcbiAgICAgICAgICBwcm9vZlN0ZXBzID0gcHJvb2ZTdGVwTm9kZXMubWFwKChwcm9vZlN0ZXBOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9vZlN0ZXAgPSBQcm9vZlN0ZXAuZnJvbVByb29mU3RlcE5vZGUocHJvb2ZTdGVwTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gcHJvb2ZTdGVwO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGRlcml2YXRpb24gPSBuZXcgRGVyaXZhdGlvbihwcm9vZlN0ZXBzKTtcblxuICAgIHJldHVybiBkZXJpdmF0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRGVyaXZhdGlvbiIsInByb29mU3RlcE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicHJvb2ZTdGVwcyIsImdldFByb29mU3RlcHMiLCJ2ZXJpZnkiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0IiwidmVyaWZpZWQiLCJldmVyeSIsInByb29mU3RlcCIsInByb29mU3RlcFZlcmlmaWVkIiwiZnJvbURlcml2YXRpb25Ob2RlIiwiZGVyaXZhdGlvbk5vZGUiLCJmaWxlQ29udGV4dCIsInByb29mU3RlcE5vZGVzIiwibWFwIiwicHJvb2ZTdGVwTm9kZSIsIlByb29mU3RlcCIsImZyb21Qcm9vZlN0ZXBOb2RlIiwiZGVyaXZhdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7Z0VBTkM7cUJBRUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0IsSUFBTUMsc0JBQXNCQyxJQUFBQSxpQkFBVSxFQUFDO0FBRXhCLElBQUEsQUFBTUYsMkJBQU47YUFBTUEsV0FDUEcsVUFBVTtnQ0FESEg7UUFFakIsSUFBSSxDQUFDRyxVQUFVLEdBQUdBOztrQkFGREg7O1lBS25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFVBQVU7WUFDeEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsYUFBYSxFQUFFQyxZQUFZO2dCQUNoQyxJQUFJQztnQkFFSkEsV0FBVyxJQUFJLENBQUNMLFVBQVUsQ0FBQ00sS0FBSyxDQUFDLFNBQUNDO29CQUNoQyxJQUFNQyxvQkFBb0JELFVBQVVMLE1BQU0sQ0FBQ0MsZUFBZUM7b0JBRTFELElBQUlJLG1CQUFtQjt3QkFDckIsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPSDtZQUNUOzs7O1lBRU9JLEtBQUFBO21CQUFQLFNBQU9BLG1CQUFtQkMsY0FBYyxFQUFFQyxXQUFXO2dCQUNuRCxJQUFNQyxpQkFBaUJkLG9CQUFvQlksaUJBQ3JDVixhQUFhWSxlQUFlQyxHQUFHLENBQUMsU0FBQ0M7b0JBQy9CLElBQU1QLFlBQVlRLGtCQUFTLENBQUNDLGlCQUFpQixDQUFDRixlQUFlSDtvQkFFN0QsT0FBT0o7Z0JBQ1QsSUFDQVUsYUFBYSxJQTlCRnBCLFdBOEJpQkc7Z0JBRWxDLE9BQU9pQjtZQUNUOzs7V0FqQ21CcEIifQ==