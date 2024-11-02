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
var subproofNodeQuery = (0, _query.nodeQuery)("/proofStep/subproof"), statementNodeQuery = (0, _query.nodeQuery)("/proofStep|lastProofStep/statement"), referenceNodeQuery = (0, _query.nodeQuery)("/proofStep|lastProofStep/reference");
var ProofStep = /*#__PURE__*/ function() {
    function ProofStep(subproof, statement, reference) {
        _class_call_check(this, ProofStep);
        this.subproof = subproof;
        this.statement = statement;
        this.reference = reference;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9vZlN0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBhc3NpZ25Bc3NpZ25tZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9hc3NpZ25tZW50c1wiO1xuXG5jb25zdCBzdWJwcm9vZk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9vZlN0ZXAvc3VicHJvb2ZcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvb2ZTdGVwfGxhc3RQcm9vZlN0ZXAvc3RhdGVtZW50XCIpLFxuICAgICAgcmVmZXJlbmNlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Byb29mU3RlcHxsYXN0UHJvb2ZTdGVwL3JlZmVyZW5jZVwiKTtcblxuY2xhc3MgUHJvb2ZTdGVwIHtcbiAgY29uc3RydWN0b3Ioc3VicHJvb2YsIHN0YXRlbWVudCwgcmVmZXJlbmNlKSB7XG4gICAgdGhpcy5zdWJwcm9vZiA9IHN1YnByb29mO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0U3VicHJvb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VicHJvb2Y7XG4gIH1cblxuICBnZXRRdWFsaWZpZWRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucXVhbGlmaWVkU3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0VW5xdWFsaWZpZWRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5xdWFsaWZpZWRTdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudCA9IHRoaXMucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0YXRlbWVudCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnQgPSB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0YXRlbWVudCgpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZCA9IGZhbHNlO1xuXG4gICAgaWYgKCh0aGlzLnF1YWxpZmllZFN0YXRlbWVudCAhPT0gbnVsbCkgfHwgKHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQgIT09IG51bGwpKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgICAgY29uc3QgeyBTdWJzdGl0dXRpb25zIH0gPSBzaGltLFxuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKTtcblxuICAgICAgaWYgKHRoaXMucXVhbGlmaWVkU3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLnF1YWxpZmllZFN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy51bnF1YWxpZmllZFN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25zTGVuZ3RoID0gc3Vic3RpdHV0aW9ucy5nZXRMZW5ndGgoKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbnNMZW5ndGggPiAwKSB7XG4gICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZkFzc2VydGlvbihzdWJwcm9vZkFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZkFzc2VydGlvblVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvblN0cmluZyA9IHN1YnByb29mQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uLi5gKTtcblxuICAgICAgY29uc3QgeyBTdWJzdGl0dXRpb25zIH0gPSBzaGltLFxuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKTtcblxuICAgICAgc3VicHJvb2ZBc3NlcnRpb25VbmlmaWVkID0gdGhpcy5zdWJwcm9vZi51bmlmeVN1YnByb29mQXNzZXJ0aW9uKHN1YnByb29mQXNzZXJ0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uVW5pZmllZCkge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zTGVuZ3RoID0gc3Vic3RpdHV0aW9ucy5nZXRMZW5ndGgoKTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uc0xlbmd0aCA+IDApIHtcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblVuaWZpZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb25VbmlmaWVkKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZkFzc2VydGlvblVuaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnkoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgbGV0IHN0YXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXNzaWdubWVudHMgPSBbXTtcblxuICAgIGxldCBzdWJwcm9vZlZlcmlmaWVkID0gZmFsc2UsXG4gICAgICAgIHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gZmFsc2UsXG4gICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICBzdWJwcm9vZlZlcmlmaWVkID0gdGhpcy5zdWJwcm9vZi52ZXJpZnkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucXVhbGlmaWVkU3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZWQgPSB0cnVlO1xuXG4gICAgICBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHRoaXMucXVhbGlmaWVkU3RhdGVtZW50LnZlcmlmeShzdWJzdGl0dXRpb25zLCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy51bnF1YWxpZmllZFN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVkID0gZmFsc2U7XG5cbiAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZWZXJpZmllZCB8fCBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCB8fCB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBhc3NpZ25tZW50c0Fzc2lnbmVkID0gYXNzaWduQXNzaWdubWVudHMoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoYXNzaWdubWVudHNBc3NpZ25lZCkge1xuICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBwcm9vZlN0ZXAgPSB0aGlzOyAvLy9cblxuICAgICAgY29udGV4dC5hZGRQcm9vZlN0ZXAocHJvb2ZTdGVwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb29mU3RlcE5vZGUocHJvb2ZTdGVwTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IFN1YnByb29mLCBRdWFsaWZpZWRTdGF0ZW1lbnQsIFVucXVhbGlmaWVkU3RhdGVtZW50IH0gPSBzaGltLFxuICAgICAgICAgIHN1YnByb29mTm9kZSA9IHN1YnByb29mTm9kZVF1ZXJ5KHByb29mU3RlcE5vZGUpLFxuICAgICAgICAgIHF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSBxdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkocHJvb2ZTdGVwTm9kZSksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkocHJvb2ZTdGVwTm9kZSksXG4gICAgICAgICAgc3VicHJvb2YgPSBTdWJwcm9vZi5mcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHF1YWxpZmllZFN0YXRlbWVudCA9IFF1YWxpZmllZFN0YXRlbWVudC5mcm9tUXVhbGlmaWVkU3RhdGVtZW50Tm9kZShxdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSBVbnF1YWxpZmllZFN0YXRlbWVudC5mcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHByb29mU3RlcCA9IG5ldyBQcm9vZlN0ZXAoc3VicHJvb2YsIHF1YWxpZmllZFN0YXRlbWVudCwgdW5xdWFsaWZpZWRTdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIHByb29mU3RlcDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnQodW5xdWFsaWZpZWRTdGF0ZW1lbnQpIHtcbiAgICBjb25zdCBzdWJwcm9vZiA9IG51bGwsXG4gICAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50ID0gbnVsbCxcbiAgICAgICAgICBwcm9vZlN0ZXAgPSBuZXcgUHJvb2ZTdGVwKHN1YnByb29mLCBxdWFsaWZpZWRTdGF0ZW1lbnQsIHVucXVhbGlmaWVkU3RhdGVtZW50KTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXA7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIFByb29mU3RlcFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFByb29mU3RlcDsiXSwibmFtZXMiOlsic3VicHJvb2ZOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJyZWZlcmVuY2VOb2RlUXVlcnkiLCJQcm9vZlN0ZXAiLCJzdWJwcm9vZiIsInN0YXRlbWVudCIsInJlZmVyZW5jZSIsImdldFN1YnByb29mIiwiZ2V0UXVhbGlmaWVkU3RhdGVtZW50IiwicXVhbGlmaWVkU3RhdGVtZW50IiwiZ2V0VW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJ1bnF1YWxpZmllZFN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsInVuaWZ5U3RhdGVtZW50IiwiY29udGV4dCIsInN0YXRlbWVudFVuaWZpZWQiLCJzdGF0ZW1lbnRTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsIlN1YnN0aXR1dGlvbnMiLCJzaGltIiwic3BlY2lmaWNDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJzdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJzdWJzdGl0dXRpb25zTGVuZ3RoIiwiZ2V0TGVuZ3RoIiwiZGVidWciLCJ1bmlmeVN1YnByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZkFzc2VydGlvblVuaWZpZWQiLCJzdWJwcm9vZkFzc2VydGlvblN0cmluZyIsInZlcmlmeSIsInZlcmlmaWVkIiwic3RhdGVkIiwiYXNzaWdubWVudHMiLCJzdWJwcm9vZlZlcmlmaWVkIiwicXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkIiwiYXNzaWdubWVudHNBc3NpZ25lZCIsImFzc2lnbkFzc2lnbm1lbnRzIiwicHJvb2ZTdGVwIiwiYWRkUHJvb2ZTdGVwIiwiZnJvbVByb29mU3RlcE5vZGUiLCJwcm9vZlN0ZXBOb2RlIiwiZmlsZUNvbnRleHQiLCJTdWJwcm9vZiIsIlF1YWxpZmllZFN0YXRlbWVudCIsIlVucXVhbGlmaWVkU3RhdGVtZW50Iiwic3VicHJvb2ZOb2RlIiwicXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsInF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5IiwiZnJvbVN1YnByb29mTm9kZSIsImZyb21RdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsImZyb21VbnF1YWxpZmllZFN0YXRlbWVudCIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBb0xBOzs7ZUFBQTs7OzJEQWxMaUI7cUJBRVM7MkJBQ1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEMsSUFBTUEsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLHdCQUM5QkMscUJBQXFCRCxJQUFBQSxnQkFBUyxFQUFDLHVDQUMvQkUscUJBQXFCRixJQUFBQSxnQkFBUyxFQUFDO0FBRXJDLElBQUEsQUFBTUcsMEJBQU47YUFBTUEsVUFDUUMsUUFBUSxFQUFFQyxTQUFTLEVBQUVDLFNBQVM7Z0NBRHRDSDtRQUVGLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBOztrQkFKZkg7O1lBT0pJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsUUFBUTtZQUN0Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0Msa0JBQWtCO1lBQ2hDOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFD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