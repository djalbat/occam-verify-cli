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
                    var stated = false, assignments = [], unqualifiedStatementVerified = this.unqualifiedStatement.verify(assignments, stated, localContext);
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
                var subproofNode = subproofNodeQuery(proofStepNode), qualifiedStatementNode = qualifiedStatementNodeQuery(proofStepNode), unqualifiedStatementNode = unqualifiedStatementNodeQuery(proofStepNode), subproof = _subproof.default.fromSubproofNode(subproofNode, fileContext), qualifiedStatement = _qualified.default.fromQualifiedStatementNode(qualifiedStatementNode, fileContext), unqualifiedStatement = _unqualified.default.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext), proofStep = new ProofStep(subproof, qualifiedStatement, unqualifiedStatement);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9vZlN0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCBTdWJwcm9vZiBmcm9tIFwiLi9zdWJwcm9vZlwiO1xuaW1wb3J0IFF1YWxpZmllZFN0YXRlbWVudCBmcm9tIFwiLi9zdGF0ZW1lbnQvcXVhbGlmaWVkXCI7XG5pbXBvcnQgVW5xdWFsaWZpZWRTdGF0ZW1lbnQgZnJvbSBcIi4vc3RhdGVtZW50L3VucXVhbGlmaWVkXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBzdWJwcm9vZk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9vZlN0ZXB8bGFzdFByb29mU3RlcC9zdWJwcm9vZlwiKSxcbiAgICAgIHF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9vZlN0ZXB8bGFzdFByb29mU3RlcC9xdWFsaWZpZWRTdGF0ZW1lbnRcIiksXG4gICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9vZlN0ZXB8bGFzdFByb29mU3RlcC91bnF1YWxpZmllZFN0YXRlbWVudFwiKTtcblxuY2xhc3MgUHJvb2ZTdGVwIHtcbiAgY29uc3RydWN0b3Ioc3VicHJvb2YsIHF1YWxpZmllZFN0YXRlbWVudCwgdW5xdWFsaWZpZWRTdGF0ZW1lbnQpIHtcbiAgICB0aGlzLnN1YnByb29mID0gc3VicHJvb2Y7XG4gICAgdGhpcy5xdWFsaWZpZWRTdGF0ZW1lbnQgPSBxdWFsaWZpZWRTdGF0ZW1lbnQ7XG4gICAgdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudCA9IHVucXVhbGlmaWVkU3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3VicHJvb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VicHJvb2Y7XG4gIH1cblxuICBnZXRRdWFsaWZpZWRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucXVhbGlmaWVkU3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0VW5xdWFsaWZpZWRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5xdWFsaWZpZWRTdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudCA9IHRoaXMucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0YXRlbWVudCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnQgPSB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0YXRlbWVudCgpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICAvLyB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnRCLCBlcXVpdmFsZW5jZXMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgLy8gICBsZXQgc3RhdGVtZW50VW5pZmllZCA9IGZhbHNlO1xuICAvL1xuICAvLyAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAvLyAgICAgY29uc3Qgc3RhdGVtZW50QSA9IHRoaXMuc3RhdGVtZW50LCAgLy8vXG4gIC8vICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkV2l0aFN0YXRlbWVudCA9IHVuaWZ5U3RhdGVtZW50V2l0aFN0YXRlbWVudEdpdmVuRXF1aXZhbGVuY2VzKHN0YXRlbWVudEEsIHN0YXRlbWVudEIsIGVxdWl2YWxlbmNlcywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG4gIC8vXG4gIC8vICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gc3RhdGVtZW50VW5pZmllZFdpdGhTdGF0ZW1lbnQ7ICAvLy9cbiAgLy8gICB9XG4gIC8vXG4gIC8vICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIC8vIH1cblxuICB2ZXJpZnkoc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdWJwcm9vZiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3VicHJvb2ZWZXJpZmllZCA9IHRoaXMuc3VicHJvb2YudmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIHZlcmlmaWVkID0gc3VicHJvb2ZWZXJpZmllZDsgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5xdWFsaWZpZWRTdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy5xdWFsaWZpZWRTdGF0ZW1lbnQudmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIHZlcmlmaWVkID0gcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQ7ICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICB2ZXJpZmllZCA9IHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQ7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHByb29mU3RlcCA9IHRoaXM7IC8vL1xuXG4gICAgICBsb2NhbENvbnRleHQuYWRkUHJvb2ZTdGVwKHByb29mU3RlcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9vZlN0ZXBOb2RlKHByb29mU3RlcE5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3Qgc3VicHJvb2ZOb2RlID0gc3VicHJvb2ZOb2RlUXVlcnkocHJvb2ZTdGVwTm9kZSksXG4gICAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IHF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeShwcm9vZlN0ZXBOb2RlKSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeShwcm9vZlN0ZXBOb2RlKSxcbiAgICAgICAgICBzdWJwcm9vZiA9IFN1YnByb29mLmZyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50ID0gUXVhbGlmaWVkU3RhdGVtZW50LmZyb21RdWFsaWZpZWRTdGF0ZW1lbnROb2RlKHF1YWxpZmllZFN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudCA9IFVucXVhbGlmaWVkU3RhdGVtZW50LmZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJvb2ZTdGVwID0gbmV3IFByb29mU3RlcChzdWJwcm9vZiwgcXVhbGlmaWVkU3RhdGVtZW50LCB1bnF1YWxpZmllZFN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwO1xuICB9XG5cbiAgc3RhdGljIGZyb21VbnF1YWxpZmllZFN0YXRlbWVudCh1bnF1YWxpZmllZFN0YXRlbWVudCkge1xuICAgIGNvbnN0IHN1YnByb29mID0gbnVsbCxcbiAgICAgICAgICBxdWFsaWZpZWRTdGF0ZW1lbnQgPSBudWxsLFxuICAgICAgICAgIHByb29mU3RlcCA9IG5ldyBQcm9vZlN0ZXAoc3VicHJvb2YsIHF1YWxpZmllZFN0YXRlbWVudCwgdW5xdWFsaWZpZWRTdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIHByb29mU3RlcDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgUHJvb2ZTdGVwXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvb2ZTdGVwOyJdLCJuYW1lcyI6WyJzdWJwcm9vZk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5IiwiUHJvb2ZTdGVwIiwic3VicHJvb2YiLCJxdWFsaWZpZWRTdGF0ZW1lbnQiLCJ1bnF1YWxpZmllZFN0YXRlbWVudCIsImdldFN1YnByb29mIiwiZ2V0UXVhbGlmaWVkU3RhdGVtZW50IiwiZ2V0VW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJ2ZXJpZnkiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0IiwidmVyaWZpZWQiLCJzdWJwcm9vZlZlcmlmaWVkIiwicXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQiLCJzdGF0ZWQiLCJhc3NpZ25tZW50cyIsInVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQiLCJwcm9vZlN0ZXAiLCJhZGRQcm9vZlN0ZXAiLCJmcm9tUHJvb2ZTdGVwTm9kZSIsInByb29mU3RlcE5vZGUiLCJmaWxlQ29udGV4dCIsInN1YnByb29mTm9kZSIsInF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJTdWJwcm9vZiIsImZyb21TdWJwcm9vZk5vZGUiLCJRdWFsaWZpZWRTdGF0ZW1lbnQiLCJmcm9tUXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsIlVucXVhbGlmaWVkU3RhdGVtZW50IiwiZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsImZyb21VbnF1YWxpZmllZFN0YXRlbWVudCIsIk9iamVjdCIsImFzc2lnbiIsInNoaW0iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWtIQTs7O2VBQUE7OzsyREFoSGlCOytEQUNJO2dFQUNVO2tFQUNFO3FCQUVQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1BLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQyxzQ0FDOUJDLDhCQUE4QkQsSUFBQUEsZ0JBQVMsRUFBQyxnREFDeENFLGdDQUFnQ0YsSUFBQUEsZ0JBQVMsRUFBQztBQUVoRCxJQUFBLEFBQU1HLDBCQUFOO2FBQU1BLFVBQ1FDLFFBQVEsRUFBRUMsa0JBQWtCLEVBQUVDLG9CQUFvQjtnQ0FEMURIO1FBRUYsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0Msa0JBQWtCLEdBQUdBO1FBQzFCLElBQUksQ0FBQ0Msb0JBQW9CLEdBQUdBOztrQkFKMUJIOztZQU9KSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILGtCQUFrQjtZQUNoQzs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsb0JBQW9CO1lBQ2xDOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLFlBQVk7Z0JBRWhCLElBQUksSUFBSSxDQUFDTixrQkFBa0IsS0FBSyxNQUFNO29CQUNwQ00sWUFBWSxJQUFJLENBQUNOLGtCQUFrQixDQUFDSyxZQUFZO2dCQUNsRDtnQkFFQSxJQUFJLElBQUksQ0FBQ0osb0JBQW9CLEtBQUssTUFBTTtvQkFDdENLLFlBQVksSUFBSSxDQUFDTCxvQkFBb0IsQ0FBQ0ksWUFBWTtnQkFDcEQ7Z0JBRUEsT0FBT0M7WUFDVDs7O1lBRUEsMkVBQTJFO1lBQzNFLGtDQUFrQztZQUNsQyxFQUFFO1lBQ0YsbUNBQW1DO1lBQ25DLDhDQUE4QztZQUM5Qyw4SkFBOEo7WUFDOUosRUFBRTtZQUNGLDZEQUE2RDtZQUM3RCxNQUFNO1lBQ04sRUFBRTtZQUNGLDZCQUE2QjtZQUM3QixJQUFJO1lBRUpDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxhQUFhLEVBQUVDLFlBQVk7Z0JBQ2hDLElBQUlDLFdBQVc7Z0JBRWYsSUFBSSxPQUFPO2dCQUNULEdBQUc7Z0JBQ0wsT0FBTyxJQUFJLElBQUksQ0FBQ1gsUUFBUSxLQUFLLE1BQU07b0JBQ2pDLElBQU1ZLG1CQUFtQixJQUFJLENBQUNaLFFBQVEsQ0FBQ1EsTUFBTSxDQUFDQyxlQUFlQztvQkFFN0RDLFdBQVdDLGtCQUFtQixHQUFHO2dCQUNuQyxPQUFPLElBQUksSUFBSSxDQUFDWCxrQkFBa0IsS0FBSyxNQUFNO29CQUMzQyxJQUFNWSw2QkFBNkIsSUFBSSxDQUFDWixrQkFBa0IsQ0FBQ08sTUFBTSxDQUFDQyxlQUFlQztvQkFFakZDLFdBQVdFLDRCQUE2QixHQUFHO2dCQUM3QyxPQUFPLElBQUksSUFBSSxDQUFDWCxvQkFBb0IsS0FBSyxNQUFNO29CQUM3QyxJQUFNWSxTQUFTLE9BQ1RDLGNBQWMsRUFBRSxFQUNoQkMsK0JBQStCLElBQUksQ0FBQ2Qsb0JBQW9CLENBQUNNLE1BQU0sQ0FBQ08sYUFBYUQsUUFBUUo7b0JBRTNGQyxXQUFXSyw4QkFBK0IsR0FBRztnQkFDL0M7Z0JBRUEsSUFBSUwsVUFBVTtvQkFDWixJQUFNTSxZQUFZLElBQUksRUFBRSxHQUFHO29CQUUzQlAsYUFBYVEsWUFBWSxDQUFDRDtnQkFDNUI7Z0JBRUEsT0FBT047WUFDVDs7OztZQUVPUSxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLGFBQWEsRUFBRUMsV0FBVztnQkFDakQsSUFBTUMsZUFBZTNCLGtCQUFrQnlCLGdCQUNqQ0cseUJBQXlCMUIsNEJBQTRCdUIsZ0JBQ3JESSwyQkFBMkIxQiw4QkFBOEJzQixnQkFDekRwQixXQUFXeUIsaUJBQVEsQ0FBQ0MsZ0JBQWdCLENBQUNKLGNBQWNELGNBQ25EcEIscUJBQXFCMEIsa0JBQWtCLENBQUNDLDBCQUEwQixDQUFDTCx3QkFBd0JGLGNBQzNGbkIsdUJBQXVCMkIsb0JBQW9CLENBQUNDLDRCQUE0QixDQUFDTiwwQkFBMEJILGNBQ25HSixZQUFZLElBbkZoQmxCLFVBbUY4QkMsVUFBVUMsb0JBQW9CQztnQkFFOUQsT0FBT2U7WUFDVDs7O1lBRU9jLEtBQUFBO21CQUFQLFNBQU9BLHlCQUF5QjdCLG9CQUFvQjtnQkFDbEQsSUFBTUYsV0FBVyxNQUNYQyxxQkFBcUIsTUFDckJnQixZQUFZLElBM0ZoQmxCLFVBMkY4QkMsVUFBVUMsb0JBQW9CQztnQkFFOUQsT0FBT2U7WUFDVDs7O1dBOUZJbEI7O0FBaUdOaUMsT0FBT0MsTUFBTSxDQUFDQyxhQUFJLEVBQUU7SUFDbEJuQyxXQUFBQTtBQUNGO0lBRUEsV0FBZUEifQ==