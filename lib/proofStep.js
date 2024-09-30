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
    function ProofStep(subproof, statement) {
        _class_call_check(this, ProofStep);
        this.subproof = subproof;
        this.statement = statement;
    }
    _create_class(ProofStep, [
        {
            key: "getSubproof",
            value: function getSubproof() {
                return this.subproof;
            }
        },
        {
            key: "getStatement",
            value: function getStatement() {
                return this.statement;
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
                    var qualifiedStatementVerified = this.qualifiedStatment.verify(substitutions, localContext);
                    verified = qualifiedStatementVerified; ///
                } else if (this.unqualifiedStatement !== null) {
                    var unqualifiedStatementVerified = this.unqualifiedStatement.verify(localContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9vZlN0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCBTdWJwcm9vZiBmcm9tIFwiLi9zdWJwcm9vZlwiO1xuaW1wb3J0IFF1YWxpZmllZFN0YXRlbWVudCBmcm9tIFwiLi9zdGF0ZW1lbnQvcXVhbGlmaWVkXCI7XG5pbXBvcnQgVW5xdWFsaWZpZWRTdGF0ZW1lbnQgZnJvbSBcIi4vc3RhdGVtZW50L3VucXVhbGlmaWVkXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBzdWJwcm9vZk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9vZlN0ZXB8bGFzdFByb29mU3RlcC9zdWJwcm9vZlwiKSxcbiAgICAgIHF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9vZlN0ZXB8bGFzdFByb29mU3RlcC9xdWFsaWZpZWRTdGF0ZW1lbnRcIiksXG4gICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9vZlN0ZXB8bGFzdFByb29mU3RlcC91bnF1YWxpZmllZFN0YXRlbWVudFwiKTtcblxuY2xhc3MgUHJvb2ZTdGVwIHtcbiAgY29uc3RydWN0b3Ioc3VicHJvb2YsIHN0YXRlbWVudCkge1xuICAgIHRoaXMuc3VicHJvb2YgPSBzdWJwcm9vZjtcbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN1YnByb29mKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnByb29mO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIC8vIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudEIsIGVxdWl2YWxlbmNlcywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAvLyAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkID0gZmFsc2U7XG4gIC8vXG4gIC8vICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gIC8vICAgICBjb25zdCBzdGF0ZW1lbnRBID0gdGhpcy5zdGF0ZW1lbnQsICAvLy9cbiAgLy8gICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWRXaXRoU3RhdGVtZW50ID0gdW5pZnlTdGF0ZW1lbnRXaXRoU3RhdGVtZW50R2l2ZW5FcXVpdmFsZW5jZXMoc3RhdGVtZW50QSwgc3RhdGVtZW50QiwgZXF1aXZhbGVuY2VzLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcbiAgLy9cbiAgLy8gICAgIHN0YXRlbWVudFVuaWZpZWQgPSBzdGF0ZW1lbnRVbmlmaWVkV2l0aFN0YXRlbWVudDsgIC8vL1xuICAvLyAgIH1cbiAgLy9cbiAgLy8gICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgLy8gfVxuXG4gIHZlcmlmeShzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLnN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZlZlcmlmaWVkID0gdGhpcy5zdWJwcm9vZi52ZXJpZnkoc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgdmVyaWZpZWQgPSBzdWJwcm9vZlZlcmlmaWVkOyAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLnF1YWxpZmllZFN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSB0aGlzLnF1YWxpZmllZFN0YXRtZW50LnZlcmlmeShzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICB2ZXJpZmllZCA9IHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkOyAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudC52ZXJpZnkobG9jYWxDb250ZXh0KTtcblxuICAgICAgdmVyaWZpZWQgPSB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBwcm9vZlN0ZXAgPSB0aGlzOyAvLy9cblxuICAgICAgbG9jYWxDb250ZXh0LmFkZFByb29mU3RlcChwcm9vZlN0ZXApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvb2ZTdGVwTm9kZShwcm9vZlN0ZXBOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHN1YnByb29mTm9kZSA9IHN1YnByb29mTm9kZVF1ZXJ5KHByb29mU3RlcE5vZGUpLFxuICAgICAgICAgIHF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSBxdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkocHJvb2ZTdGVwTm9kZSksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkocHJvb2ZTdGVwTm9kZSksXG4gICAgICAgICAgc3VicHJvb2YgPSBTdWJwcm9vZi5mcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHF1YWxpZmllZFN0YXRlbWVudCA9IFF1YWxpZmllZFN0YXRlbWVudC5mcm9tUXVhbGlmaWVkU3RhdGVtZW50Tm9kZShxdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSBVbnF1YWxpZmllZFN0YXRlbWVudC5mcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHByb29mU3RlcCA9IG5ldyBQcm9vZlN0ZXAoc3VicHJvb2YsIHF1YWxpZmllZFN0YXRlbWVudCwgdW5xdWFsaWZpZWRTdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIHByb29mU3RlcDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnQodW5xdWFsaWZpZWRTdGF0ZW1lbnQpIHtcbiAgICBjb25zdCBzdWJwcm9vZiA9IG51bGwsXG4gICAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50ID0gbnVsbCxcbiAgICAgICAgICBwcm9vZlN0ZXAgPSBuZXcgUHJvb2ZTdGVwKHN1YnByb29mLCBxdWFsaWZpZWRTdGF0ZW1lbnQsIHVucXVhbGlmaWVkU3RhdGVtZW50KTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXA7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIFByb29mU3RlcFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFByb29mU3RlcDsiXSwibmFtZXMiOlsic3VicHJvb2ZOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJxdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSIsIlByb29mU3RlcCIsInN1YnByb29mIiwic3RhdGVtZW50IiwiZ2V0U3VicHJvb2YiLCJnZXRTdGF0ZW1lbnQiLCJ2ZXJpZnkiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0IiwidmVyaWZpZWQiLCJzdWJwcm9vZlZlcmlmaWVkIiwicXVhbGlmaWVkU3RhdGVtZW50IiwicXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQiLCJxdWFsaWZpZWRTdGF0bWVudCIsInVucXVhbGlmaWVkU3RhdGVtZW50IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCIsInByb29mU3RlcCIsImFkZFByb29mU3RlcCIsImZyb21Qcm9vZlN0ZXBOb2RlIiwicHJvb2ZTdGVwTm9kZSIsImZpbGVDb250ZXh0Iiwic3VicHJvb2ZOb2RlIiwicXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsIlN1YnByb29mIiwiZnJvbVN1YnByb29mTm9kZSIsIlF1YWxpZmllZFN0YXRlbWVudCIsImZyb21RdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiVW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJmcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwic2hpbSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNkZBOzs7ZUFBQTs7OzJEQTNGaUI7K0RBQ0k7Z0VBQ1U7a0VBQ0U7cUJBRVA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUEsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLHNDQUM5QkMsOEJBQThCRCxJQUFBQSxnQkFBUyxFQUFDLGdEQUN4Q0UsZ0NBQWdDRixJQUFBQSxnQkFBUyxFQUFDO0FBRWhELElBQUEsQUFBTUcsMEJBQU47YUFBTUEsVUFDUUMsUUFBUSxFQUFFQyxTQUFTO2dDQUQzQkY7UUFFRixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBOztrQkFIZkY7O1lBTUpHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsUUFBUTtZQUN0Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsU0FBUztZQUN2Qjs7O1lBRUEsMkVBQTJFO1lBQzNFLGtDQUFrQztZQUNsQyxFQUFFO1lBQ0YsbUNBQW1DO1lBQ25DLDhDQUE4QztZQUM5Qyw4SkFBOEo7WUFDOUosRUFBRTtZQUNGLDZEQUE2RDtZQUM3RCxNQUFNO1lBQ04sRUFBRTtZQUNGLDZCQUE2QjtZQUM3QixJQUFJO1lBRUpHLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxhQUFhLEVBQUVDLFlBQVk7Z0JBQ2hDLElBQUlDLFdBQVc7Z0JBRWYsSUFBSSxPQUFPO2dCQUNULEdBQUc7Z0JBQ0wsT0FBTyxJQUFJLElBQUksQ0FBQ1AsUUFBUSxLQUFLLE1BQU07b0JBQ2pDLElBQU1RLG1CQUFtQixJQUFJLENBQUNSLFFBQVEsQ0FBQ0ksTUFBTSxDQUFDQyxlQUFlQztvQkFFN0RDLFdBQVdDLGtCQUFtQixHQUFHO2dCQUNuQyxPQUFPLElBQUksSUFBSSxDQUFDQyxrQkFBa0IsS0FBSyxNQUFNO29CQUMzQyxJQUFNQyw2QkFBNkIsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQ1AsTUFBTSxDQUFDQyxlQUFlQztvQkFFaEZDLFdBQVdHLDRCQUE2QixHQUFHO2dCQUM3QyxPQUFPLElBQUksSUFBSSxDQUFDRSxvQkFBb0IsS0FBSyxNQUFNO29CQUM3QyxJQUFNQywrQkFBK0IsSUFBSSxDQUFDRCxvQkFBb0IsQ0FBQ1IsTUFBTSxDQUFDRTtvQkFFdEVDLFdBQVdNLDhCQUErQixHQUFHO2dCQUMvQztnQkFFQSxJQUFJTixVQUFVO29CQUNaLElBQU1PLFlBQVksSUFBSSxFQUFFLEdBQUc7b0JBRTNCUixhQUFhUyxZQUFZLENBQUNEO2dCQUM1QjtnQkFFQSxPQUFPUDtZQUNUOzs7O1lBRU9TLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsYUFBYSxFQUFFQyxXQUFXO2dCQUNqRCxJQUFNQyxlQUFleEIsa0JBQWtCc0IsZ0JBQ2pDRyx5QkFBeUJ2Qiw0QkFBNEJvQixnQkFDckRJLDJCQUEyQnZCLDhCQUE4Qm1CLGdCQUN6RGpCLFdBQVdzQixpQkFBUSxDQUFDQyxnQkFBZ0IsQ0FBQ0osY0FBY0QsY0FDbkRULHFCQUFxQmUsa0JBQWtCLENBQUNDLDBCQUEwQixDQUFDTCx3QkFBd0JGLGNBQzNGTix1QkFBdUJjLG9CQUFvQixDQUFDQyw0QkFBNEIsQ0FBQ04sMEJBQTBCSCxjQUNuR0osWUFBWSxJQTlEaEJmLFVBOEQ4QkMsVUFBVVMsb0JBQW9CRztnQkFFOUQsT0FBT0U7WUFDVDs7O1lBRU9jLEtBQUFBO21CQUFQLFNBQU9BLHlCQUF5QmhCLG9CQUFvQjtnQkFDbEQsSUFBTVosV0FBVyxNQUNYUyxxQkFBcUIsTUFDckJLLFlBQVksSUF0RWhCZixVQXNFOEJDLFVBQVVTLG9CQUFvQkc7Z0JBRTlELE9BQU9FO1lBQ1Q7OztXQXpFSWY7O0FBNEVOOEIsT0FBT0MsTUFBTSxDQUFDQyxhQUFJLEVBQUU7SUFDbEJoQyxXQUFBQTtBQUNGO0lBRUEsV0FBZUEifQ==