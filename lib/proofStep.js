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
var _subproof = /*#__PURE__*/ _interop_require_default(require("./subproof"));
var _qualified = /*#__PURE__*/ _interop_require_default(require("./statement/qualified"));
var _unqualified = /*#__PURE__*/ _interop_require_default(require("./statement/unqualified"));
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
var subproofNodeQuery = (0, _query.nodeQuery)("/proofStep|lastProofStep/subproof"), qualifiedStatementNodeQuery = (0, _query.nodeQuery)("/proofStep|lastProofStep/qualifiedStatement"), unqualifiedStatementNodeQuery = (0, _query.nodeQuery)("/proofStep|lastProofStep/unqualifiedStatement");
var ProofStep = /*#__PURE__*/ function() {
    function ProofStep(subproof, qualifiedStatement, unqualifiedStatement) {
        _class_call_check(this, ProofStep);
        this.subproof = subproof;
        this.qualifiedStatement = qualifiedStatement;
        this.unqualifiedStatement = unqualifiedStatement;
    }
    _create_class(ProofStep, [
        {
            key: "getSubproof",
            value: function getSubproof() {
                return this.subproof;
            }
        },
        {
            key: "getQualifiedStatement",
            value: function getQualifiedStatement() {
                return this.qualifiedStatement;
            }
        },
        {
            key: "getUnqualifiedStatement",
            value: function getUnqualifiedStatement() {
                return this.unqualifiedStatement;
            }
        },
        {
            key: "getStatement",
            value: function getStatement() {
                var statement = null;
                if (this.qualifiedStatement !== null) {
                    statement = this.qualifiedStatement.getStatement();
                }
                if (this.unqualifiedStatement !== null) {
                    statement = this.unqualifiedStatement.getStatement();
                }
                return statement;
            }
        },
        {
            // unifyStatement(statementB, equivalences, localContextA, localContextB) {
            //   let statementUnified = false;
            //
            //   if (this.statement !== null) {
            //     const statementA = this.statement,  ///
            //           statementUnifiedWithStatement = unifyStatementWithStatementGivenEquivalences(statementA, statementB, equivalences, localContextA, localContextB);
            //
            //     statementUnified = statementUnifiedWithStatement;  ///
            //   }
            //
            //   return statementUnified;
            // }
            key: "verify",
            value: function verify(substitutions, localContext) {
                var verified = false;
                if (false) {
                ///
                } else if (this.subproof !== null) {
                    var subproofVerified = this.subproof.verify(substitutions, localContext);
                    verified = subproofVerified; ///
                } else if (this.qualifiedStatement !== null) {
                    var qualifiedStatementVerified = this.qualifiedStatement.verify(substitutions, localContext);
                    verified = qualifiedStatementVerified; ///
                } else if (this.unqualifiedStatement !== null) {
                    var stated = true, assignments = [], unqualifiedStatementVerified = this.unqualifiedStatement.verify(assignments, stated, localContext);
                    verified = unqualifiedStatementVerified; ///
                }
                if (verified) {
                    var proofStep = this; ///
                    localContext.addProofStep(proofStep);
                }
                return verified;
            }
        }
    ], [
        {
            key: "fromProofStepNode",
            value: function fromProofStepNode(proofStepNode, fileContext) {
                var subproofNode = subproofNodeQuery(proofStepNode), qualifiedStatementNode = qualifiedStatementNodeQuery(proofStepNode), unqualifiedStatementNode = unqualifiedStatementNodeQuery(proofStepNode);
                var subproof = null, qualifiedStatement = null, unqualifiedStatement = null;
                if (false) {
                ///
                } else if (subproofNode !== null) {
                    subproof = _subproof.default.fromSubproofNode(subproofNode, fileContext);
                } else if (qualifiedStatementNode !== null) {
                    qualifiedStatement = _qualified.default.fromQualifiedStatementNode(qualifiedStatementNode, fileContext);
                } else if (unqualifiedStatementNode !== null) {
                    unqualifiedStatement = _unqualified.default.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext);
                }
                var proofStep = new ProofStep(subproof, qualifiedStatement, unqualifiedStatement);
                return proofStep;
            }
        },
        {
            key: "fromUnqualifiedStatement",
            value: function fromUnqualifiedStatement(unqualifiedStatement) {
                var subproof = null, qualifiedStatement = null, proofStep = new ProofStep(subproof, qualifiedStatement, unqualifiedStatement);
                return proofStep;
            }
        }
    ]);
    return ProofStep;
}();
Object.assign(_shim.default, {
    ProofStep: ProofStep
});
var _default = ProofStep;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9vZlN0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCBTdWJwcm9vZiBmcm9tIFwiLi9zdWJwcm9vZlwiO1xuaW1wb3J0IFF1YWxpZmllZFN0YXRlbWVudCBmcm9tIFwiLi9zdGF0ZW1lbnQvcXVhbGlmaWVkXCI7XG5pbXBvcnQgVW5xdWFsaWZpZWRTdGF0ZW1lbnQgZnJvbSBcIi4vc3RhdGVtZW50L3VucXVhbGlmaWVkXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBzdWJwcm9vZk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9vZlN0ZXB8bGFzdFByb29mU3RlcC9zdWJwcm9vZlwiKSxcbiAgICAgIHF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9vZlN0ZXB8bGFzdFByb29mU3RlcC9xdWFsaWZpZWRTdGF0ZW1lbnRcIiksXG4gICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9vZlN0ZXB8bGFzdFByb29mU3RlcC91bnF1YWxpZmllZFN0YXRlbWVudFwiKTtcblxuY2xhc3MgUHJvb2ZTdGVwIHtcbiAgY29uc3RydWN0b3Ioc3VicHJvb2YsIHF1YWxpZmllZFN0YXRlbWVudCwgdW5xdWFsaWZpZWRTdGF0ZW1lbnQpIHtcbiAgICB0aGlzLnN1YnByb29mID0gc3VicHJvb2Y7XG4gICAgdGhpcy5xdWFsaWZpZWRTdGF0ZW1lbnQgPSBxdWFsaWZpZWRTdGF0ZW1lbnQ7XG4gICAgdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudCA9IHVucXVhbGlmaWVkU3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3VicHJvb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VicHJvb2Y7XG4gIH1cblxuICBnZXRRdWFsaWZpZWRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucXVhbGlmaWVkU3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0VW5xdWFsaWZpZWRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5xdWFsaWZpZWRTdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudCA9IHRoaXMucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0YXRlbWVudCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnQgPSB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0YXRlbWVudCgpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICAvLyB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnRCLCBlcXVpdmFsZW5jZXMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgLy8gICBsZXQgc3RhdGVtZW50VW5pZmllZCA9IGZhbHNlO1xuICAvL1xuICAvLyAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAvLyAgICAgY29uc3Qgc3RhdGVtZW50QSA9IHRoaXMuc3RhdGVtZW50LCAgLy8vXG4gIC8vICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkV2l0aFN0YXRlbWVudCA9IHVuaWZ5U3RhdGVtZW50V2l0aFN0YXRlbWVudEdpdmVuRXF1aXZhbGVuY2VzKHN0YXRlbWVudEEsIHN0YXRlbWVudEIsIGVxdWl2YWxlbmNlcywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG4gIC8vXG4gIC8vICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gc3RhdGVtZW50VW5pZmllZFdpdGhTdGF0ZW1lbnQ7ICAvLy9cbiAgLy8gICB9XG4gIC8vXG4gIC8vICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIC8vIH1cblxuICB2ZXJpZnkoc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdWJwcm9vZiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3VicHJvb2ZWZXJpZmllZCA9IHRoaXMuc3VicHJvb2YudmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIHZlcmlmaWVkID0gc3VicHJvb2ZWZXJpZmllZDsgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5xdWFsaWZpZWRTdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy5xdWFsaWZpZWRTdGF0ZW1lbnQudmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIHZlcmlmaWVkID0gcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQ7ICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIHZlcmlmaWVkID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZDsgIC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29uc3QgcHJvb2ZTdGVwID0gdGhpczsgLy8vXG5cbiAgICAgIGxvY2FsQ29udGV4dC5hZGRQcm9vZlN0ZXAocHJvb2ZTdGVwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb29mU3RlcE5vZGUocHJvb2ZTdGVwTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBzdWJwcm9vZk5vZGUgPSBzdWJwcm9vZk5vZGVRdWVyeShwcm9vZlN0ZXBOb2RlKSxcbiAgICAgICAgICBxdWFsaWZpZWRTdGF0ZW1lbnROb2RlID0gcXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5KHByb29mU3RlcE5vZGUpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5KHByb29mU3RlcE5vZGUpO1xuXG4gICAgbGV0IHN1YnByb29mID0gbnVsbCxcbiAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50ID0gbnVsbCxcbiAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSBudWxsO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHN1YnByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgICAgc3VicHJvb2YgPSBTdWJwcm9vZi5mcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgZmlsZUNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAocXVhbGlmaWVkU3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgcXVhbGlmaWVkU3RhdGVtZW50ID0gUXVhbGlmaWVkU3RhdGVtZW50LmZyb21RdWFsaWZpZWRTdGF0ZW1lbnROb2RlKHF1YWxpZmllZFN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSBVbnF1YWxpZmllZFN0YXRlbWVudC5mcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgZmlsZUNvbnRleHQpO1xuICAgIH1cblxuICAgIGNvbnN0IHByb29mU3RlcCA9IG5ldyBQcm9vZlN0ZXAoc3VicHJvb2YsIHF1YWxpZmllZFN0YXRlbWVudCwgdW5xdWFsaWZpZWRTdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIHByb29mU3RlcDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnQodW5xdWFsaWZpZWRTdGF0ZW1lbnQpIHtcbiAgICBjb25zdCBzdWJwcm9vZiA9IG51bGwsXG4gICAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50ID0gbnVsbCxcbiAgICAgICAgICBwcm9vZlN0ZXAgPSBuZXcgUHJvb2ZTdGVwKHN1YnByb29mLCBxdWFsaWZpZWRTdGF0ZW1lbnQsIHVucXVhbGlmaWVkU3RhdGVtZW50KTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXA7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIFByb29mU3RlcFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFByb29mU3RlcDsiXSwibmFtZXMiOlsic3VicHJvb2ZOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJxdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSIsIlByb29mU3RlcCIsInN1YnByb29mIiwicXVhbGlmaWVkU3RhdGVtZW50IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJnZXRTdWJwcm9vZiIsImdldFF1YWxpZmllZFN0YXRlbWVudCIsImdldFVucXVhbGlmaWVkU3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50Iiwic3RhdGVtZW50IiwidmVyaWZ5Iiwic3Vic3RpdHV0aW9ucyIsImxvY2FsQ29udGV4dCIsInZlcmlmaWVkIiwic3VicHJvb2ZWZXJpZmllZCIsInF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkIiwic3RhdGVkIiwiYXNzaWdubWVudHMiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkIiwicHJvb2ZTdGVwIiwiYWRkUHJvb2ZTdGVwIiwiZnJvbVByb29mU3RlcE5vZGUiLCJwcm9vZlN0ZXBOb2RlIiwiZmlsZUNvbnRleHQiLCJzdWJwcm9vZk5vZGUiLCJxdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiU3VicHJvb2YiLCJmcm9tU3VicHJvb2ZOb2RlIiwiUXVhbGlmaWVkU3RhdGVtZW50IiwiZnJvbVF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJVbnF1YWxpZmllZFN0YXRlbWVudCIsImZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJmcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJzaGltIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE4SEE7OztlQUFBOzs7MkRBNUhpQjsrREFDSTtnRUFDVTtrRUFDRTtxQkFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQSxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMsc0NBQzlCQyw4QkFBOEJELElBQUFBLGdCQUFTLEVBQUMsZ0RBQ3hDRSxnQ0FBZ0NGLElBQUFBLGdCQUFTLEVBQUM7QUFFaEQsSUFBQSxBQUFNRywwQkFBTjthQUFNQSxVQUNRQyxRQUFRLEVBQUVDLGtCQUFrQixFQUFFQyxvQkFBb0I7Z0NBRDFESDtRQUVGLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLGtCQUFrQixHQUFHQTtRQUMxQixJQUFJLENBQUNDLG9CQUFvQixHQUFHQTs7a0JBSjFCSDs7WUFPSkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxrQkFBa0I7WUFDaEM7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILG9CQUFvQjtZQUNsQzs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFD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