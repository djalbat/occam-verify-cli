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
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
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
            key: "getLastProofStep",
            value: function getLastProofStep() {
                return this.derivation.getLastProofStep();
            }
        },
        {
            key: "getStatement",
            value: function getStatement() {
                var lastProofStep = this.getLastProofStep(), lastProofStepStatement = lastProofStep.getStatement(), statement = lastProofStepStatement; ///
                return statement;
            }
        },
        {
            key: "verify",
            value: function verify(substitutions, conclusion, context) {
                var verified = false;
                var localContext = _local.default.fromContext(context); ///
                context = localContext; ///
                var derivationVerified = this.derivation.verify(substitutions, context);
                if (derivationVerified) {
                    var lastProofStep = context.getLastProofStep();
                    if (lastProofStep !== null) {
                        var statement = this.getStatement(), conclusionStatement = conclusion.getStatement(), conclusionStatementEqualToStatement = conclusionStatement.isEqualTo(statement);
                        if (conclusionStatementEqualToStatement) {
                            verified = true;
                        }
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
                    var Derivation = _shim.default.Derivation, derivationNode = derivationNodeQuery(proofNode), derivation = Derivation.fromDerivationNode(derivationNode, fileContext);
                    proof = new Proof(derivation);
                }
                return proof;
            }
        }
    ]);
    return Proof;
}();
Object.assign(_shim.default, {
    Proof: Proof
});
var _default = Proof;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBkZXJpdmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Byb29mL2Rlcml2YXRpb25cIik7XG5cbmNsYXNzIFByb29mIHtcbiAgY29uc3RydWN0b3IoZGVyaXZhdGlvbikge1xuICAgIHRoaXMuZGVyaXZhdGlvbiA9IGRlcml2YXRpb247XG4gIH1cblxuICBnZXREZXJpdmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlcml2YXRpb247XG4gIH1cblxuICBnZXRMYXN0UHJvb2ZTdGVwKCkgeyByZXR1cm4gdGhpcy5kZXJpdmF0aW9uLmdldExhc3RQcm9vZlN0ZXAoKTsgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICBjb25zdCBsYXN0UHJvb2ZTdGVwID0gdGhpcy5nZXRMYXN0UHJvb2ZTdGVwKCksXG4gICAgICAgICAgbGFzdFByb29mU3RlcFN0YXRlbWVudCA9IGxhc3RQcm9vZlN0ZXAuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gbGFzdFByb29mU3RlcFN0YXRlbWVudDsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgdmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGNvbmNsdXNpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tQ29udGV4dChjb250ZXh0KTsgLy8vXG5cbiAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IGRlcml2YXRpb25WZXJpZmllZCA9IHRoaXMuZGVyaXZhdGlvbi52ZXJpZnkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICBpZiAoZGVyaXZhdGlvblZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBsYXN0UHJvb2ZTdGVwID0gY29udGV4dC5nZXRMYXN0UHJvb2ZTdGVwKCk7XG5cbiAgICAgIGlmIChsYXN0UHJvb2ZTdGVwICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICAgIGNvbmNsdXNpb25TdGF0ZW1lbnQgPSBjb25jbHVzaW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgICAgICBjb25jbHVzaW9uU3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCA9IGNvbmNsdXNpb25TdGF0ZW1lbnQuaXNFcXVhbFRvKHN0YXRlbWVudCk7XG5cbiAgICAgICAgaWYgKGNvbmNsdXNpb25TdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50KSB7XG4gICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBwcm9vZiA9IG51bGw7XG5cbiAgICBpZiAocHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IERlcml2YXRpb24gfSA9IHNoaW0sXG4gICAgICAgICAgICBkZXJpdmF0aW9uTm9kZSA9IGRlcml2YXRpb25Ob2RlUXVlcnkocHJvb2ZOb2RlKSxcbiAgICAgICAgICAgIGRlcml2YXRpb24gPSBEZXJpdmF0aW9uLmZyb21EZXJpdmF0aW9uTm9kZShkZXJpdmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICBwcm9vZiA9IG5ldyBQcm9vZihkZXJpdmF0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvb2Y7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIFByb29mXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvb2Y7XG4iXSwibmFtZXMiOlsiZGVyaXZhdGlvbk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIlByb29mIiwiZGVyaXZhdGlvbiIsImdldERlcml2YXRpb24iLCJnZXRMYXN0UHJvb2ZTdGVwIiwiZ2V0U3RhdGVtZW50IiwibGFzdFByb29mU3RlcCIsImxhc3RQcm9vZlN0ZXBTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJ2ZXJpZnkiLCJzdWJzdGl0dXRpb25zIiwiY29uY2x1c2lvbiIsImNvbnRleHQiLCJ2ZXJpZmllZCIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21Db250ZXh0IiwiZGVyaXZhdGlvblZlcmlmaWVkIiwiY29uY2x1c2lvblN0YXRlbWVudCIsImNvbmNsdXNpb25TdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50IiwiaXNFcXVhbFRvIiwiZnJvbVByb29mTm9kZSIsInByb29mTm9kZSIsImZpbGVDb250ZXh0IiwicHJvb2YiLCJEZXJpdmF0aW9uIiwic2hpbSIsImRlcml2YXRpb25Ob2RlIiwiZnJvbURlcml2YXRpb25Ob2RlIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF5RUE7OztlQUFBOzs7MkRBdkVpQjs0REFDUTtxQkFFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQSxzQkFBc0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFdEMsSUFBQSxBQUFNQyxzQkFBTjthQUFNQSxNQUNRQyxVQUFVO2dDQURsQkQ7UUFFRixJQUFJLENBQUNDLFVBQVUsR0FBR0E7O2tCQUZoQkQ7O1lBS0pFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsVUFBVTtZQUN4Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBcUIsT0FBTyxJQUFJLENBQUNGLFVBQVUsQ0FBQ0UsZ0JBQWdCO1lBQUk7OztZQUVoRUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGdCQUFnQixJQUFJLENBQUNGLGdCQUFnQixJQUNyQ0cseUJBQXlCRCxjQUFjRCxZQUFZLElBQ25ERyxZQUFZRCx3QkFBd0IsR0FBRztnQkFFN0MsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxhQUFhLEVBQUVDLFVBQVUsRUFBRUMsT0FBTztnQkFDdkMsSUFBSUMsV0FBVztnQkFFZixJQUFNQyxlQUFlQyxjQUFZLENBQUNDLFdBQVcsQ0FBQ0osVUFBVSxHQUFHO2dCQUUzREEsVUFBVUUsY0FBYyxHQUFHO2dCQUUzQixJQUFNRyxxQkFBcUIsSUFBSSxDQUFDZixVQUFVLENBQUNPLE1BQU0sQ0FBQ0MsZUFBZUU7Z0JBRWpFLElBQUlLLG9CQUFvQjtvQkFDdEIsSUFBTVgsZ0JBQWdCTSxRQUFRUixnQkFBZ0I7b0JBRTlDLElBQUlFLGtCQUFrQixNQUFNO3dCQUMxQixJQUFNRSxZQUFZLElBQUksQ0FBQ0gsWUFBWSxJQUM3QmEsc0JBQXNCUCxXQUFXTixZQUFZLElBQzdDYyxzQ0FBc0NELG9CQUFvQkUsU0FBUyxDQUFDWjt3QkFFMUUsSUFBSVcscUNBQXFDOzRCQUN2Q04sV0FBVzt3QkFDYjtvQkFDRjtnQkFDRjtnQkFFQSxPQUFPQTtZQUNUOzs7O1lBRU9RLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNDLFNBQVMsRUFBRUMsV0FBVztnQkFDekMsSUFBSUMsUUFBUTtnQkFFWixJQUFJRixjQUFjLE1BQU07b0JBQ3RCLElBQU0sQUFBRUcsYUFBZUMsYUFBSSxDQUFuQkQsWUFDRkUsaUJBQWlCNUIsb0JBQW9CdUIsWUFDckNwQixhQUFhdUIsV0FBV0csa0JBQWtCLENBQUNELGdCQUFnQko7b0JBRWpFQyxRQUFRLElBckRSdkIsTUFxRGtCQztnQkFDcEI7Z0JBRUEsT0FBT3NCO1lBQ1Q7OztXQXpESXZCOztBQTRETjRCLE9BQU9DLE1BQU0sQ0FBQ0osYUFBSSxFQUFFO0lBQ2xCekIsT0FBQUE7QUFDRjtJQUVBLFdBQWVBIn0=