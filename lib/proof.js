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
                    var derivationNode = derivationNodeQuery(proofNode), derivation = _derivation.default.fromDerivationNode(derivationNode, fileContext);
                    proof = new Proof(derivation);
                }
                return proof;
            }
        }
    ]);
    return Proof;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERlcml2YXRpb24gZnJvbSBcIi4vZGVyaXZhdGlvblwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBkZXJpdmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Byb29mL2Rlcml2YXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb29mIHtcbiAgY29uc3RydWN0b3IoZGVyaXZhdGlvbikge1xuICAgIHRoaXMuZGVyaXZhdGlvbiA9IGRlcml2YXRpb247XG4gIH1cblxuICBnZXREZXJpdmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlcml2YXRpb247XG4gIH1cblxuICBnZXRMYXN0UHJvb2ZTdGVwKCkgeyByZXR1cm4gdGhpcy5kZXJpdmF0aW9uLmdldExhc3RQcm9vZlN0ZXAoKTsgfVxuXG4gIHZlcmlmeShzdWJzdGl0dXRpb25zLCBjb25jbHVzaW9uLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tTG9jYWxDb250ZXh0KGxvY2FsQ29udGV4dCk7IC8vL1xuXG4gICAgY29uc3QgZGVyaXZhdGlvblZlcmlmaWVkID0gdGhpcy5kZXJpdmF0aW9uLnZlcmlmeShzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKGRlcml2YXRpb25WZXJpZmllZCkge1xuICAgICAgY29uc3QgbGFzdFByb29mU3RlcCA9IGxvY2FsQ29udGV4dC5nZXRMYXN0UHJvb2ZTdGVwKCk7XG5cbiAgICAgIGlmIChsYXN0UHJvb2ZTdGVwICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGxhc3RQcm9vZlN0ZXAgPSB0aGlzLmdldExhc3RQcm9vZlN0ZXAoKSxcbiAgICAgICAgICAgICAgY29uY2x1c2lvblN0YXRlbWVudCA9IGNvbmNsdXNpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICAgIGxhc3RQcm9vZlN0ZXBTdGF0ZW1lbnQgPSBsYXN0UHJvb2ZTdGVwLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgICAgICBjb25jbHVzaW9uU3RhdGVtZW50RXF1YWxUb0xhc3RQcm9vZlN0ZXBTdGF0ZW1lbnQgPSBjb25jbHVzaW9uU3RhdGVtZW50LmlzRXF1YWxUbyhsYXN0UHJvb2ZTdGVwU3RhdGVtZW50KTtcblxuICAgICAgICBpZiAoY29uY2x1c2lvblN0YXRlbWVudEVxdWFsVG9MYXN0UHJvb2ZTdGVwU3RhdGVtZW50KSB7XG4gICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBwcm9vZiA9IG51bGw7XG5cbiAgICBpZiAocHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkZXJpdmF0aW9uTm9kZSA9IGRlcml2YXRpb25Ob2RlUXVlcnkocHJvb2ZOb2RlKSxcbiAgICAgICAgICAgIGRlcml2YXRpb24gPSBEZXJpdmF0aW9uLmZyb21EZXJpdmF0aW9uTm9kZShkZXJpdmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICBwcm9vZiA9IG5ldyBQcm9vZihkZXJpdmF0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvb2Y7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQcm9vZiIsImRlcml2YXRpb25Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkZXJpdmF0aW9uIiwiZ2V0RGVyaXZhdGlvbiIsImdldExhc3RQcm9vZlN0ZXAiLCJ2ZXJpZnkiLCJzdWJzdGl0dXRpb25zIiwiY29uY2x1c2lvbiIsImxvY2FsQ29udGV4dCIsInZlcmlmaWVkIiwiTG9jYWxDb250ZXh0IiwiZnJvbUxvY2FsQ29udGV4dCIsImRlcml2YXRpb25WZXJpZmllZCIsImxhc3RQcm9vZlN0ZXAiLCJjb25jbHVzaW9uU3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50IiwibGFzdFByb29mU3RlcFN0YXRlbWVudCIsImNvbmNsdXNpb25TdGF0ZW1lbnRFcXVhbFRvTGFzdFByb29mU3RlcFN0YXRlbWVudCIsImlzRXF1YWxUbyIsImZyb21Qcm9vZk5vZGUiLCJwcm9vZk5vZGUiLCJmaWxlQ29udGV4dCIsInByb29mIiwiZGVyaXZhdGlvbk5vZGUiLCJEZXJpdmF0aW9uIiwiZnJvbURlcml2YXRpb25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OztpRUFQRTs0REFDRTtxQkFFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQyxzQkFBc0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFdkIsSUFBQSxBQUFNRixzQkFBTjthQUFNQSxNQUNQRyxVQUFVO2dDQURISDtRQUVqQixJQUFJLENBQUNHLFVBQVUsR0FBR0E7O2tCQUZESDs7WUFLbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsVUFBVTtZQUN4Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBcUIsT0FBTyxJQUFJLENBQUNGLFVBQVUsQ0FBQ0UsZ0JBQWdCO1lBQUk7OztZQUVoRUMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLGFBQWEsRUFBRUMsVUFBVSxFQUFFQyxZQUFZO2dCQUM1QyxJQUFJQyxXQUFXO2dCQUVmRCxlQUFlRSxjQUFZLENBQUNDLGdCQUFnQixDQUFDSCxlQUFlLEdBQUc7Z0JBRS9ELElBQU1JLHFCQUFxQixJQUFJLENBQUNWLFVBQVUsQ0FBQ0csTUFBTSxDQUFDQyxlQUFlRTtnQkFFakUsSUFBSUksb0JBQW9CO29CQUN0QixJQUFNQyxnQkFBZ0JMLGFBQWFKLGdCQUFnQjtvQkFFbkQsSUFBSVMsa0JBQWtCLE1BQU07d0JBQzFCLElBQU1BLGlCQUFnQixJQUFJLENBQUNULGdCQUFnQixJQUNyQ1Usc0JBQXNCUCxXQUFXUSxZQUFZLElBQzdDQyx5QkFBeUJILGVBQWNFLFlBQVksSUFDbkRFLG1EQUFtREgsb0JBQW9CSSxTQUFTLENBQUNGO3dCQUV2RixJQUFJQyxrREFBa0Q7NEJBQ3BEUixXQUFXO3dCQUNiO29CQUNGO2dCQUNGO2dCQUVBLE9BQU9BO1lBQ1Q7Ozs7WUFFT1UsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0MsU0FBUyxFQUFFQyxXQUFXO2dCQUN6QyxJQUFJQyxRQUFRO2dCQUVaLElBQUlGLGNBQWMsTUFBTTtvQkFDdEIsSUFBTUcsaUJBQWlCdkIsb0JBQW9Cb0IsWUFDckNsQixhQUFhc0IsbUJBQVUsQ0FBQ0Msa0JBQWtCLENBQUNGLGdCQUFnQkY7b0JBRWpFQyxRQUFRLElBM0NPdkIsTUEyQ0dHO2dCQUNwQjtnQkFFQSxPQUFPb0I7WUFDVDs7O1dBL0NtQnZCIn0=