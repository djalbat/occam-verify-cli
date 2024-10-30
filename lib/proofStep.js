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
var _query = require("./utilities/query");
var _assignments = require("./utilities/assignments");
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
            key: "unifyStatement",
            value: function unifyStatement(statement, context) {
                var statementUnified = false;
                if (this.qualifiedStatement !== null || this.unqualifiedStatement !== null) {
                    var statementString = statement.getString();
                    context.trace("Unifying the '".concat(statementString, "' statement..."));
                    var Substitutions = _shim.default.Substitutions, specificContext = context, generalContext = context, substitutions = Substitutions.fromNothing();
                    if (this.qualifiedStatement !== null) {
                        statementUnified = this.qualifiedStatement.unifyStatement(statement, substitutions, generalContext, specificContext);
                    }
                    if (this.unqualifiedStatement !== null) {
                        statementUnified = this.unqualifiedStatement.unifyStatement(statement, substitutions, generalContext, specificContext);
                    }
                    var substitutionsLength = substitutions.getLength();
                    if (substitutionsLength > 0) {
                        statementUnified = false;
                    }
                    if (statementUnified) {
                        context.debug("...unified the '".concat(statementString, "' statement."));
                    }
                }
                return statementUnified;
            }
        },
        {
            key: "unifySubproofAssertion",
            value: function unifySubproofAssertion(subproofAssertion, context) {
                var subproofAssertionUnified = false;
                if (this.subproof !== null) {
                    var subproofAssertionString = subproofAssertion.getString();
                    context.trace("Unifying the '".concat(subproofAssertionString, "' subproof assertion..."));
                    var Substitutions = _shim.default.Substitutions, specificContext = context, generalContext = context, substitutions = Substitutions.fromNothing();
                    subproofAssertionUnified = this.subproof.unifySubproofAssertion(subproofAssertion, substitutions, generalContext, specificContext);
                    if (subproofAssertionUnified) {
                        var substitutionsLength = substitutions.getLength();
                        if (substitutionsLength > 0) {
                            subproofAssertionUnified = false;
                        }
                    }
                    if (subproofAssertionUnified) {
                        context.debug("...unified the '".concat(subproofAssertionString, "' subproof assertion."));
                    }
                }
                return subproofAssertionUnified;
            }
        },
        {
            key: "verify",
            value: function verify(substitutions, context) {
                var verified = false;
                var stated = false;
                var assignments = [];
                var subproofVerified = false, qualifiedStatementVerified = false, unqualifiedStatementVerified = false;
                if (this.subproof !== null) {
                    subproofVerified = this.subproof.verify(substitutions, context);
                }
                if (this.qualifiedStatement !== null) {
                    stated = true;
                    qualifiedStatementVerified = this.qualifiedStatement.verify(substitutions, assignments, stated, context);
                }
                if (this.unqualifiedStatement !== null) {
                    stated = false;
                    unqualifiedStatementVerified = this.unqualifiedStatement.verify(assignments, stated, context);
                }
                if (subproofVerified || qualifiedStatementVerified || unqualifiedStatementVerified) {
                    var assignmentsAssigned = (0, _assignments.assignAssignments)(assignments, context);
                    if (assignmentsAssigned) {
                        verified = true;
                    }
                }
                if (verified) {
                    var proofStep = this; ///
                    context.addProofStep(proofStep);
                }
                return verified;
            }
        }
    ], [
        {
            key: "fromProofStepNode",
            value: function fromProofStepNode(proofStepNode, fileContext) {
                var Subproof = _shim.default.Subproof, QualifiedStatement = _shim.default.QualifiedStatement, UnqualifiedStatement = _shim.default.UnqualifiedStatement, subproofNode = subproofNodeQuery(proofStepNode), qualifiedStatementNode = qualifiedStatementNodeQuery(proofStepNode), unqualifiedStatementNode = unqualifiedStatementNodeQuery(proofStepNode), subproof = Subproof.fromSubproofNode(subproofNode, fileContext), qualifiedStatement = QualifiedStatement.fromQualifiedStatementNode(qualifiedStatementNode, fileContext), unqualifiedStatement = UnqualifiedStatement.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext), proofStep = new ProofStep(subproof, qualifiedStatement, unqualifiedStatement);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9vZlN0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBhc3NpZ25Bc3NpZ25tZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9hc3NpZ25tZW50c1wiO1xuXG5jb25zdCBzdWJwcm9vZk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9vZlN0ZXB8bGFzdFByb29mU3RlcC9zdWJwcm9vZlwiKSxcbiAgICAgIHF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9vZlN0ZXB8bGFzdFByb29mU3RlcC9xdWFsaWZpZWRTdGF0ZW1lbnRcIiksXG4gICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9vZlN0ZXB8bGFzdFByb29mU3RlcC91bnF1YWxpZmllZFN0YXRlbWVudFwiKTtcblxuY2xhc3MgUHJvb2ZTdGVwIHtcbiAgY29uc3RydWN0b3Ioc3VicHJvb2YsIHF1YWxpZmllZFN0YXRlbWVudCwgdW5xdWFsaWZpZWRTdGF0ZW1lbnQpIHtcbiAgICB0aGlzLnN1YnByb29mID0gc3VicHJvb2Y7XG4gICAgdGhpcy5xdWFsaWZpZWRTdGF0ZW1lbnQgPSBxdWFsaWZpZWRTdGF0ZW1lbnQ7XG4gICAgdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudCA9IHVucXVhbGlmaWVkU3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3VicHJvb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VicHJvb2Y7XG4gIH1cblxuICBnZXRRdWFsaWZpZWRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucXVhbGlmaWVkU3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0VW5xdWFsaWZpZWRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5xdWFsaWZpZWRTdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudCA9IHRoaXMucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0YXRlbWVudCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnQgPSB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0YXRlbWVudCgpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZCA9IGZhbHNlO1xuXG4gICAgaWYgKCh0aGlzLnF1YWxpZmllZFN0YXRlbWVudCAhPT0gbnVsbCkgfHwgKHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQgIT09IG51bGwpKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgICAgY29uc3QgeyBTdWJzdGl0dXRpb25zIH0gPSBzaGltLFxuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKTtcblxuICAgICAgaWYgKHRoaXMucXVhbGlmaWVkU3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLnF1YWxpZmllZFN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy51bnF1YWxpZmllZFN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25zTGVuZ3RoID0gc3Vic3RpdHV0aW9ucy5nZXRMZW5ndGgoKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbnNMZW5ndGggPiAwKSB7XG4gICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZkFzc2VydGlvbihzdWJwcm9vZkFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZkFzc2VydGlvblVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvblN0cmluZyA9IHN1YnByb29mQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uLi5gKTtcblxuICAgICAgY29uc3QgeyBTdWJzdGl0dXRpb25zIH0gPSBzaGltLFxuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKTtcblxuICAgICAgc3VicHJvb2ZBc3NlcnRpb25VbmlmaWVkID0gdGhpcy5zdWJwcm9vZi51bmlmeVN1YnByb29mQXNzZXJ0aW9uKHN1YnByb29mQXNzZXJ0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uVW5pZmllZCkge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zTGVuZ3RoID0gc3Vic3RpdHV0aW9ucy5nZXRMZW5ndGgoKTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uc0xlbmd0aCA+IDApIHtcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblVuaWZpZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb25VbmlmaWVkKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZkFzc2VydGlvblVuaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnkoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgbGV0IHN0YXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXNzaWdubWVudHMgPSBbXTtcblxuICAgIGxldCBzdWJwcm9vZlZlcmlmaWVkID0gZmFsc2UsXG4gICAgICAgIHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gZmFsc2UsXG4gICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICBzdWJwcm9vZlZlcmlmaWVkID0gdGhpcy5zdWJwcm9vZi52ZXJpZnkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucXVhbGlmaWVkU3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZWQgPSB0cnVlO1xuXG4gICAgICBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHRoaXMucXVhbGlmaWVkU3RhdGVtZW50LnZlcmlmeShzdWJzdGl0dXRpb25zLCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy51bnF1YWxpZmllZFN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVkID0gZmFsc2U7XG5cbiAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZWZXJpZmllZCB8fCBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCB8fCB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBhc3NpZ25tZW50c0Fzc2lnbmVkID0gYXNzaWduQXNzaWdubWVudHMoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoYXNzaWdubWVudHNBc3NpZ25lZCkge1xuICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBwcm9vZlN0ZXAgPSB0aGlzOyAvLy9cblxuICAgICAgY29udGV4dC5hZGRQcm9vZlN0ZXAocHJvb2ZTdGVwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb29mU3RlcE5vZGUocHJvb2ZTdGVwTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IFN1YnByb29mLCBRdWFsaWZpZWRTdGF0ZW1lbnQsIFVucXVhbGlmaWVkU3RhdGVtZW50IH0gPSBzaGltLFxuICAgICAgICAgIHN1YnByb29mTm9kZSA9IHN1YnByb29mTm9kZVF1ZXJ5KHByb29mU3RlcE5vZGUpLFxuICAgICAgICAgIHF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSBxdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkocHJvb2ZTdGVwTm9kZSksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkocHJvb2ZTdGVwTm9kZSksXG4gICAgICAgICAgc3VicHJvb2YgPSBTdWJwcm9vZi5mcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHF1YWxpZmllZFN0YXRlbWVudCA9IFF1YWxpZmllZFN0YXRlbWVudC5mcm9tUXVhbGlmaWVkU3RhdGVtZW50Tm9kZShxdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSBVbnF1YWxpZmllZFN0YXRlbWVudC5mcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHByb29mU3RlcCA9IG5ldyBQcm9vZlN0ZXAoc3VicHJvb2YsIHF1YWxpZmllZFN0YXRlbWVudCwgdW5xdWFsaWZpZWRTdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIHByb29mU3RlcDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnQodW5xdWFsaWZpZWRTdGF0ZW1lbnQpIHtcbiAgICBjb25zdCBzdWJwcm9vZiA9IG51bGwsXG4gICAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50ID0gbnVsbCxcbiAgICAgICAgICBwcm9vZlN0ZXAgPSBuZXcgUHJvb2ZTdGVwKHN1YnByb29mLCBxdWFsaWZpZWRTdGF0ZW1lbnQsIHVucXVhbGlmaWVkU3RhdGVtZW50KTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXA7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIFByb29mU3RlcFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFByb29mU3RlcDsiXSwibmFtZXMiOlsic3VicHJvb2ZOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJxdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSIsIlByb29mU3RlcCIsInN1YnByb29mIiwicXVhbGlmaWVkU3RhdGVtZW50IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJnZXRTdWJwcm9vZiIsImdldFF1YWxpZmllZFN0YXRlbWVudCIsImdldFVucXVhbGlmaWVkU3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50Iiwic3RhdGVtZW50IiwidW5pZnlTdGF0ZW1lbnQiLCJjb250ZXh0Iiwic3RhdGVtZW50VW5pZmllZCIsInN0YXRlbWVudFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiU3Vic3RpdHV0aW9ucyIsInNoaW0iLCJzcGVjaWZpY0NvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsInN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsInN1YnN0aXR1dGlvbnNMZW5ndGgiLCJnZXRMZW5ndGgiLCJkZWJ1ZyIsInVuaWZ5U3VicHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZkFzc2VydGlvbiIsInN1YnByb29mQXNzZXJ0aW9uVW5pZmllZCIsInN1YnByb29mQXNzZXJ0aW9uU3RyaW5nIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJzdGF0ZWQiLCJhc3NpZ25tZW50cyIsInN1YnByb29mVmVyaWZpZWQiLCJxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCIsInVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQiLCJhc3NpZ25tZW50c0Fzc2lnbmVkIiwiYXNzaWduQXNzaWdubWVudHMiLCJwcm9vZlN0ZXAiLCJhZGRQcm9vZlN0ZXAiLCJmcm9tUHJvb2ZTdGVwTm9kZSIsInByb29mU3RlcE5vZGUiLCJmaWxlQ29udGV4dCIsIlN1YnByb29mIiwiUXVhbGlmaWVkU3RhdGVtZW50IiwiVW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJzdWJwcm9vZk5vZGUiLCJxdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiZnJvbVN1YnByb29mTm9kZSIsImZyb21RdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsImZyb21VbnF1YWxpZmllZFN0YXRlbWVudCIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBb0xBOzs7ZUFBQTs7OzJEQWxMaUI7cUJBRVM7MkJBQ1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEMsSUFBTUEsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLHNDQUM5QkMsOEJBQThCRCxJQUFBQSxnQkFBUyxFQUFDLGdEQUN4Q0UsZ0NBQWdDRixJQUFBQSxnQkFBUyxFQUFDO0FBRWhELElBQUEsQUFBTUcsMEJBQU47YUFBTUEsVUFDUUMsUUFBUSxFQUFFQyxrQkFBa0IsRUFBRUMsb0JBQW9CO2dDQUQxREg7UUFFRixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxrQkFBa0IsR0FBR0E7UUFDMUIsSUFBSSxDQUFDQyxvQkFBb0IsR0FBR0E7O2tCQUoxQkg7O1lBT0pJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsUUFBUTtZQUN0Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElB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