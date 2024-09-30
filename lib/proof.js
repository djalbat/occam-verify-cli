"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Proof;
    }
});
var _derivation = /*#__PURE__*/ _interop_require_default(require("./derivation"));
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
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
var derivationNodeQuery = (0, _query.nodeQuery)("/proof/derivation");
var Proof = /*#__PURE__*/ function() {
    function Proof(derivation) {
        _class_call_check(this, Proof);
        this.derivation = derivation;
    }
    _create_class(Proof, [
        {
            key: "getDerivation",
            value: function getDerivation() {
                return this.derivation;
            }
        },
        {
            key: "verify",
            value: function verify(substitutions, conclusion, localContext) {
                var verified = false;
                localContext = _local.default.fromLocalContext(localContext); ///
                var derivationVerified = this.derivation.verify(substitutions, localContext);
                if (derivationVerified) {
                    var lastProofStep = localContext.getLastProofStep();
                    if (lastProofStep !== null) {
                        var conclusionStatementNode = conclusion.getStatementNode(), conclusionStatementNodeMatches = lastProofStep.matchStatementNode(conclusionStatementNode);
                        verified = conclusionStatementNodeMatches; ///
                    }
                }
                return verified;
            }
        }
    ], [
        {
            key: "fromProofNode",
            value: function fromProofNode(proofNode, fileContext) {
                var proof = null;
                if (proofNode !== null) {
                    var derivationNode = derivationNodeQuery(proofNode), derivation = _derivation.default.fromDerivationNode(derivationNode, fileContext);
                    proof = new Proof(derivation);
                }
                return proof;
            }
        }
    ]);
    return Proof;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERlcml2YXRpb24gZnJvbSBcIi4vZGVyaXZhdGlvblwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBkZXJpdmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Byb29mL2Rlcml2YXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb29mIHtcbiAgY29uc3RydWN0b3IoZGVyaXZhdGlvbikge1xuICAgIHRoaXMuZGVyaXZhdGlvbiA9IGRlcml2YXRpb247XG4gIH1cblxuICBnZXREZXJpdmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlcml2YXRpb247XG4gIH1cblxuICB2ZXJpZnkoc3Vic3RpdHV0aW9ucywgY29uY2x1c2lvbiwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUxvY2FsQ29udGV4dChsb2NhbENvbnRleHQpOyAvLy9cblxuICAgIGNvbnN0IGRlcml2YXRpb25WZXJpZmllZCA9IHRoaXMuZGVyaXZhdGlvbi52ZXJpZnkoc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChkZXJpdmF0aW9uVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGxhc3RQcm9vZlN0ZXAgPSBsb2NhbENvbnRleHQuZ2V0TGFzdFByb29mU3RlcCgpO1xuXG4gICAgICBpZiAobGFzdFByb29mU3RlcCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBjb25jbHVzaW9uU3RhdGVtZW50Tm9kZSA9IGNvbmNsdXNpb24uZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICAgICAgICBjb25jbHVzaW9uU3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBsYXN0UHJvb2ZTdGVwLm1hdGNoU3RhdGVtZW50Tm9kZShjb25jbHVzaW9uU3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgdmVyaWZpZWQgPSBjb25jbHVzaW9uU3RhdGVtZW50Tm9kZU1hdGNoZXM7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHByb29mID0gbnVsbDtcblxuICAgIGlmIChwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRlcml2YXRpb25Ob2RlID0gZGVyaXZhdGlvbk5vZGVRdWVyeShwcm9vZk5vZGUpLFxuICAgICAgICAgICAgZGVyaXZhdGlvbiA9IERlcml2YXRpb24uZnJvbURlcml2YXRpb25Ob2RlKGRlcml2YXRpb25Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHByb29mID0gbmV3IFByb29mKGRlcml2YXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9vZjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlByb29mIiwiZGVyaXZhdGlvbk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRlcml2YXRpb24iLCJnZXREZXJpdmF0aW9uIiwidmVyaWZ5Iiwic3Vic3RpdHV0aW9ucyIsImNvbmNsdXNpb24iLCJsb2NhbENvbnRleHQiLCJ2ZXJpZmllZCIsIkxvY2FsQ29udGV4dCIsImZyb21Mb2NhbENvbnRleHQiLCJkZXJpdmF0aW9uVmVyaWZpZWQiLCJsYXN0UHJvb2ZTdGVwIiwiZ2V0TGFzdFByb29mU3RlcCIsImNvbmNsdXNpb25TdGF0ZW1lbnROb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsImNvbmNsdXNpb25TdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsImZyb21Qcm9vZk5vZGUiLCJwcm9vZk5vZGUiLCJmaWxlQ29udGV4dCIsInByb29mIiwiZGVyaXZhdGlvbk5vZGUiLCJEZXJpdmF0aW9uIiwiZnJvbURlcml2YXRpb25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OztpRUFQRTs0REFDRTtxQkFFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQyxzQkFBc0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFdkIsSUFBQSxBQUFNRixzQkFBTjthQUFNQSxNQUNQRyxVQUFVO2dDQURISDtRQUVqQixJQUFJLENBQUNHLFVBQVUsR0FBR0E7O2tCQUZESDs7WUFLbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsVUFBVTtZQUN4Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxhQUFhLEVBQUVDLFVBQVUsRUFBRUMsWUFBWTtnQkFDNUMsSUFBSUMsV0FBVztnQkFFZkQsZUFBZUUsY0FBWSxDQUFDQyxnQkFBZ0IsQ0FBQ0gsZUFBZSxHQUFHO2dCQUUvRCxJQUFNSSxxQkFBcUIsSUFBSSxDQUFDVCxVQUFVLENBQUNFLE1BQU0sQ0FBQ0MsZUFBZUU7Z0JBRWpFLElBQUlJLG9CQUFvQjtvQkFDdEIsSUFBTUMsZ0JBQWdCTCxhQUFhTSxnQkFBZ0I7b0JBRW5ELElBQUlELGtCQUFrQixNQUFNO3dCQUMxQixJQUFNRSwwQkFBMEJSLFdBQVdTLGdCQUFnQixJQUNyREMsaUNBQWlDSixjQUFjSyxrQkFBa0IsQ0FBQ0g7d0JBRXhFTixXQUFXUSxnQ0FBaUMsR0FBRztvQkFDakQ7Z0JBQ0Y7Z0JBRUEsT0FBT1I7WUFDVDs7OztZQUVPVSxLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTLEVBQUVDLFdBQVc7Z0JBQ3pDLElBQUlDLFFBQVE7Z0JBRVosSUFBSUYsY0FBYyxNQUFNO29CQUN0QixJQUFNRyxpQkFBaUJ0QixvQkFBb0JtQixZQUNyQ2pCLGFBQWFxQixtQkFBVSxDQUFDQyxrQkFBa0IsQ0FBQ0YsZ0JBQWdCRjtvQkFFakVDLFFBQVEsSUFyQ090QixNQXFDR0c7Z0JBQ3BCO2dCQUVBLE9BQU9tQjtZQUNUOzs7V0F6Q21CdEIifQ==