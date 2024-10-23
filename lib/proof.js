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
            value: function verify(substitutions, conclusion, localContext) {
                var verified = false;
                localContext = _local.default.fromLocalContext(localContext); ///
                var derivationVerified = this.derivation.verify(substitutions, localContext);
                if (derivationVerified) {
                    var lastProofStep = localContext.getLastProofStep();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBkZXJpdmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Byb29mL2Rlcml2YXRpb25cIik7XG5cbmNsYXNzIFByb29mIHtcbiAgY29uc3RydWN0b3IoZGVyaXZhdGlvbikge1xuICAgIHRoaXMuZGVyaXZhdGlvbiA9IGRlcml2YXRpb247XG4gIH1cblxuICBnZXREZXJpdmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlcml2YXRpb247XG4gIH1cblxuICBnZXRMYXN0UHJvb2ZTdGVwKCkgeyByZXR1cm4gdGhpcy5kZXJpdmF0aW9uLmdldExhc3RQcm9vZlN0ZXAoKTsgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICBjb25zdCBsYXN0UHJvb2ZTdGVwID0gdGhpcy5nZXRMYXN0UHJvb2ZTdGVwKCksXG4gICAgICAgICAgbGFzdFByb29mU3RlcFN0YXRlbWVudCA9IGxhc3RQcm9vZlN0ZXAuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gbGFzdFByb29mU3RlcFN0YXRlbWVudDsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgdmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGNvbmNsdXNpb24sIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21Mb2NhbENvbnRleHQobG9jYWxDb250ZXh0KTsgLy8vXG5cbiAgICBjb25zdCBkZXJpdmF0aW9uVmVyaWZpZWQgPSB0aGlzLmRlcml2YXRpb24udmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoZGVyaXZhdGlvblZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBsYXN0UHJvb2ZTdGVwID0gbG9jYWxDb250ZXh0LmdldExhc3RQcm9vZlN0ZXAoKTtcblxuICAgICAgaWYgKGxhc3RQcm9vZlN0ZXAgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgICAgY29uY2x1c2lvblN0YXRlbWVudCA9IGNvbmNsdXNpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICAgIGNvbmNsdXNpb25TdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50ID0gY29uY2x1c2lvblN0YXRlbWVudC5pc0VxdWFsVG8oc3RhdGVtZW50KTtcblxuICAgICAgICBpZiAoY29uY2x1c2lvblN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQpIHtcbiAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHByb29mID0gbnVsbDtcblxuICAgIGlmIChwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgRGVyaXZhdGlvbiB9ID0gc2hpbSxcbiAgICAgICAgICAgIGRlcml2YXRpb25Ob2RlID0gZGVyaXZhdGlvbk5vZGVRdWVyeShwcm9vZk5vZGUpLFxuICAgICAgICAgICAgZGVyaXZhdGlvbiA9IERlcml2YXRpb24uZnJvbURlcml2YXRpb25Ob2RlKGRlcml2YXRpb25Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHByb29mID0gbmV3IFByb29mKGRlcml2YXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9vZjtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgUHJvb2Zcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9vZjtcbiJdLCJuYW1lcyI6WyJkZXJpdmF0aW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiUHJvb2YiLCJkZXJpdmF0aW9uIiwiZ2V0RGVyaXZhdGlvbiIsImdldExhc3RQcm9vZlN0ZXAiLCJnZXRTdGF0ZW1lbnQiLCJsYXN0UHJvb2ZTdGVwIiwibGFzdFByb29mU3RlcFN0YXRlbWVudCIsInN0YXRlbWVudCIsInZlcmlmeSIsInN1YnN0aXR1dGlvbnMiLCJjb25jbHVzaW9uIiwibG9jYWxDb250ZXh0IiwidmVyaWZpZWQiLCJMb2NhbENvbnRleHQiLCJmcm9tTG9jYWxDb250ZXh0IiwiZGVyaXZhdGlvblZlcmlmaWVkIiwiY29uY2x1c2lvblN0YXRlbWVudCIsImNvbmNsdXNpb25TdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50IiwiaXNFcXVhbFRvIiwiZnJvbVByb29mTm9kZSIsInByb29mTm9kZSIsImZpbGVDb250ZXh0IiwicHJvb2YiLCJEZXJpdmF0aW9uIiwic2hpbSIsImRlcml2YXRpb25Ob2RlIiwiZnJvbURlcml2YXRpb25Ob2RlIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF1RUE7OztlQUFBOzs7MkRBckVpQjs0REFDUTtxQkFFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQSxzQkFBc0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFdEMsSUFBQSxBQUFNQyxzQkFBTjthQUFNQSxNQUNRQyxVQUFVO2dDQURsQkQ7UUFFRixJQUFJLENBQUNDLFVBQVUsR0FBR0E7O2tCQUZoQkQ7O1lBS0pFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsVUFBVTtZQUN4Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBcUIsT0FBTyxJQUFJLENBQUNGLFVBQVUsQ0FBQ0UsZ0JBQWdCO1lBQUk7OztZQUVoRUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGdCQUFnQixJQUFJLENBQUNGLGdCQUFnQixJQUNyQ0cseUJBQXlCRCxjQUFjRCxZQUFZLElBQ25ERyxZQUFZRCx3QkFBd0IsR0FBRztnQkFFN0MsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxhQUFhLEVBQUVDLFVBQVUsRUFBRUMsWUFBWTtnQkFDNUMsSUFBSUMsV0FBVztnQkFFZkQsZUFBZUUsY0FBWSxDQUFDQyxnQkFBZ0IsQ0FBQ0gsZUFBZSxHQUFHO2dCQUUvRCxJQUFNSSxxQkFBcUIsSUFBSSxDQUFDZCxVQUFVLENBQUNPLE1BQU0sQ0FBQ0MsZUFBZUU7Z0JBRWpFLElBQUlJLG9CQUFvQjtvQkFDdEIsSUFBTVYsZ0JBQWdCTSxhQUFhUixnQkFBZ0I7b0JBRW5ELElBQUlFLGtCQUFrQixNQUFNO3dCQUMxQixJQUFNRSxZQUFZLElBQUksQ0FBQ0gsWUFBWSxJQUM3Qlksc0JBQXNCTixXQUFXTixZQUFZLElBQzdDYSxzQ0FBc0NELG9CQUFvQkUsU0FBUyxDQUFDWDt3QkFFMUUsSUFBSVUscUNBQXFDOzRCQUN2Q0wsV0FBVzt3QkFDYjtvQkFDRjtnQkFDRjtnQkFFQSxPQUFPQTtZQUNUOzs7O1lBRU9PLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNDLFNBQVMsRUFBRUMsV0FBVztnQkFDekMsSUFBSUMsUUFBUTtnQkFFWixJQUFJRixjQUFjLE1BQU07b0JBQ3RCLElBQU0sQUFBRUcsYUFBZUMsYUFBSSxDQUFuQkQsWUFDRkUsaUJBQWlCM0Isb0JBQW9Cc0IsWUFDckNuQixhQUFhc0IsV0FBV0csa0JBQWtCLENBQUNELGdCQUFnQko7b0JBRWpFQyxRQUFRLElBbkRSdEIsTUFtRGtCQztnQkFDcEI7Z0JBRUEsT0FBT3FCO1lBQ1Q7OztXQXZESXRCOztBQTBETjJCLE9BQU9DLE1BQU0sQ0FBQ0osYUFBSSxFQUFFO0lBQ2xCeEIsT0FBQUE7QUFDRjtJQUVBLFdBQWVBIn0=