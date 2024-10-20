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
            key: "verify",
            value: function verify(substitutions, conclusion, localContext) {
                var verified = false;
                localContext = _local.default.fromLocalContext(localContext); ///
                var derivationVerified = this.derivation.verify(substitutions, localContext);
                if (derivationVerified) {
                    var lastProofStep = localContext.getLastProofStep();
                    if (lastProofStep !== null) {
                        var lastProofStep1 = this.getLastProofStep(), conclusionStatement = conclusion.getStatement(), lastProofStepStatement = lastProofStep1.getStatement(), conclusionStatementEqualToLastProofStepStatement = conclusionStatement.isEqualTo(lastProofStepStatement);
                        if (conclusionStatementEqualToLastProofStepStatement) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBkZXJpdmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Byb29mL2Rlcml2YXRpb25cIik7XG5cbmNsYXNzIFByb29mIHtcbiAgY29uc3RydWN0b3IoZGVyaXZhdGlvbikge1xuICAgIHRoaXMuZGVyaXZhdGlvbiA9IGRlcml2YXRpb247XG4gIH1cblxuICBnZXREZXJpdmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlcml2YXRpb247XG4gIH1cblxuICBnZXRMYXN0UHJvb2ZTdGVwKCkgeyByZXR1cm4gdGhpcy5kZXJpdmF0aW9uLmdldExhc3RQcm9vZlN0ZXAoKTsgfVxuXG4gIHZlcmlmeShzdWJzdGl0dXRpb25zLCBjb25jbHVzaW9uLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tTG9jYWxDb250ZXh0KGxvY2FsQ29udGV4dCk7IC8vL1xuXG4gICAgY29uc3QgZGVyaXZhdGlvblZlcmlmaWVkID0gdGhpcy5kZXJpdmF0aW9uLnZlcmlmeShzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKGRlcml2YXRpb25WZXJpZmllZCkge1xuICAgICAgY29uc3QgbGFzdFByb29mU3RlcCA9IGxvY2FsQ29udGV4dC5nZXRMYXN0UHJvb2ZTdGVwKCk7XG5cbiAgICAgIGlmIChsYXN0UHJvb2ZTdGVwICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGxhc3RQcm9vZlN0ZXAgPSB0aGlzLmdldExhc3RQcm9vZlN0ZXAoKSxcbiAgICAgICAgICAgICAgY29uY2x1c2lvblN0YXRlbWVudCA9IGNvbmNsdXNpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICAgIGxhc3RQcm9vZlN0ZXBTdGF0ZW1lbnQgPSBsYXN0UHJvb2ZTdGVwLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgICAgICBjb25jbHVzaW9uU3RhdGVtZW50RXF1YWxUb0xhc3RQcm9vZlN0ZXBTdGF0ZW1lbnQgPSBjb25jbHVzaW9uU3RhdGVtZW50LmlzRXF1YWxUbyhsYXN0UHJvb2ZTdGVwU3RhdGVtZW50KTtcblxuICAgICAgICBpZiAoY29uY2x1c2lvblN0YXRlbWVudEVxdWFsVG9MYXN0UHJvb2ZTdGVwU3RhdGVtZW50KSB7XG4gICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBwcm9vZiA9IG51bGw7XG5cbiAgICBpZiAocHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IERlcml2YXRpb24gfSA9IHNoaW0sXG4gICAgICAgICAgICBkZXJpdmF0aW9uTm9kZSA9IGRlcml2YXRpb25Ob2RlUXVlcnkocHJvb2ZOb2RlKSxcbiAgICAgICAgICAgIGRlcml2YXRpb24gPSBEZXJpdmF0aW9uLmZyb21EZXJpdmF0aW9uTm9kZShkZXJpdmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICBwcm9vZiA9IG5ldyBQcm9vZihkZXJpdmF0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvb2Y7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIFByb29mXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvb2Y7XG4iXSwibmFtZXMiOlsiZGVyaXZhdGlvbk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIlByb29mIiwiZGVyaXZhdGlvbiIsImdldERlcml2YXRpb24iLCJnZXRMYXN0UHJvb2ZTdGVwIiwidmVyaWZ5Iiwic3Vic3RpdHV0aW9ucyIsImNvbmNsdXNpb24iLCJsb2NhbENvbnRleHQiLCJ2ZXJpZmllZCIsIkxvY2FsQ29udGV4dCIsImZyb21Mb2NhbENvbnRleHQiLCJkZXJpdmF0aW9uVmVyaWZpZWQiLCJsYXN0UHJvb2ZTdGVwIiwiY29uY2x1c2lvblN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsImxhc3RQcm9vZlN0ZXBTdGF0ZW1lbnQiLCJjb25jbHVzaW9uU3RhdGVtZW50RXF1YWxUb0xhc3RQcm9vZlN0ZXBTdGF0ZW1lbnQiLCJpc0VxdWFsVG8iLCJmcm9tUHJvb2ZOb2RlIiwicHJvb2ZOb2RlIiwiZmlsZUNvbnRleHQiLCJwcm9vZiIsIkRlcml2YXRpb24iLCJzaGltIiwiZGVyaXZhdGlvbk5vZGUiLCJmcm9tRGVyaXZhdGlvbk5vZGUiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWdFQTs7O2VBQUE7OzsyREE5RGlCOzREQUNRO3FCQUVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1BLHNCQUFzQkMsSUFBQUEsZ0JBQVMsRUFBQztBQUV0QyxJQUFBLEFBQU1DLHNCQUFOO2FBQU1BLE1BQ1FDLFVBQVU7Z0NBRGxCRDtRQUVGLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7a0JBRmhCRDs7WUFLSkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxVQUFVO1lBQ3hCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFxQixPQUFPLElBQUksQ0FBQ0YsVUFBVSxDQUFDRSxnQkFBZ0I7WUFBSTs7O1lBRWhFQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsYUFBYSxFQUFFQyxVQUFVLEVBQUVDLFlBQVk7Z0JBQzVDLElBQUlDLFdBQVc7Z0JBRWZELGVBQWVFLGNBQVksQ0FBQ0MsZ0JBQWdCLENBQUNILGVBQWUsR0FBRztnQkFFL0QsSUFBTUkscUJBQXFCLElBQUksQ0FBQ1YsVUFBVSxDQUFDRyxNQUFNLENBQUNDLGVBQWVFO2dCQUVqRSxJQUFJSSxvQkFBb0I7b0JBQ3RCLElBQU1DLGdCQUFnQkwsYUFBYUosZ0JBQWdCO29CQUVuRCxJQUFJUyxrQkFBa0IsTUFBTTt3QkFDMUIsSUFBTUEsaUJBQWdCLElBQUksQ0FBQ1QsZ0JBQWdCLElBQ3JDVSxzQkFBc0JQLFdBQVdRLFlBQVksSUFDN0NDLHlCQUF5QkgsZUFBY0UsWUFBWSxJQUNuREUsbURBQW1ESCxvQkFBb0JJLFNBQVMsQ0FBQ0Y7d0JBRXZGLElBQUlDLGtEQUFrRDs0QkFDcERSLFdBQVc7d0JBQ2I7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsT0FBT0E7WUFDVDs7OztZQUVPVSxLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTLEVBQUVDLFdBQVc7Z0JBQ3pDLElBQUlDLFFBQVE7Z0JBRVosSUFBSUYsY0FBYyxNQUFNO29CQUN0QixJQUFNLEFBQUVHLGFBQWVDLGFBQUksQ0FBbkJELFlBQ0ZFLGlCQUFpQjFCLG9CQUFvQnFCLFlBQ3JDbEIsYUFBYXFCLFdBQVdHLGtCQUFrQixDQUFDRCxnQkFBZ0JKO29CQUVqRUMsUUFBUSxJQTVDUnJCLE1BNENrQkM7Z0JBQ3BCO2dCQUVBLE9BQU9vQjtZQUNUOzs7V0FoRElyQjs7QUFtRE4wQixPQUFPQyxNQUFNLENBQUNKLGFBQUksRUFBRTtJQUNsQnZCLE9BQUFBO0FBQ0Y7SUFFQSxXQUFlQSJ9