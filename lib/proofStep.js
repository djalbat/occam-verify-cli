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
var _necessary = require("necessary");
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("./unifier/metaLevel"));
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
var match = _necessary.arrayUtilities.match;
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
            value: function unifyStatement(statement, localContext) {
                var statementUnified = false;
                if (this.qualifiedStatement !== null || this.unqualifiedStatement !== null !== null) {
                    var statementString = statement.getString();
                    localContext.trace("Unifying the '".concat(statementString, "' statement..."));
                    var Substitutions = _shim.default.Substitutions, localContextA = localContext, localContextB = localContext, substitutions = Substitutions.fromNothing();
                    if (this.qualifiedStatement !== null) {
                        statementUnified = this.qualifiedStatement.unifyStatement(statement, substitutions, localContextA, localContextB);
                    }
                    if (this.unqualifiedStatement !== null) {
                        statementUnified = this.unqualifiedStatement.unifyStatement(statement, substitutions, localContextA, localContextB);
                    }
                    var substitutionsLength = substitutions.getLength();
                    if (substitutionsLength > 0) {
                        statementUnified = false;
                    }
                    if (statementUnified) {
                        localContext.debug("...unified the '".concat(statementString, "' statement."));
                    }
                }
                return statementUnified;
            }
        },
        {
            key: "unifySubproofAssertion",
            value: function unifySubproofAssertion(subproofAssertion, localContext) {
                var subproofAssertionUnified = false;
                if (this.subproof !== null) {
                    var subproofString = this.subproof.getString(), subproofAssertionString = subproofAssertion.getString();
                    localContext.trace("Unifying the '".concat(subproofAssertionString, "' subproof assertion with the '").concat(subproofString, "' subproof..."));
                    var Substitutions = _shim.default.Substitutions, substitutions = Substitutions.fromNothing(), subproofStatements = this.subproof.getStatements(), subproofAssertionStatements = subproofAssertion.getStatements();
                    subproofAssertionUnified = match(subproofAssertionStatements, subproofStatements, function(subproofAssertionStatement, subproofStatement) {
                        var subproofAssertionStatementNode = subproofAssertionStatement.getNode(), subproofStatementNode = subproofStatement.getNode(), nodeA = subproofAssertionStatementNode, nodeB = subproofStatementNode, localContextA = localContext, localContextB = localContext, unifiedAtMetaLevel = _metaLevel.default.unify(nodeA, nodeB, substitutions, localContextA, localContextB);
                        if (unifiedAtMetaLevel) {
                            return true;
                        }
                    });
                    if (subproofAssertionUnified) {
                        var substitutionsLength = substitutions.getLength();
                        if (substitutionsLength > 0) {
                            subproofAssertionUnified = false;
                        }
                    }
                    if (subproofAssertionUnified) {
                        localContext.trace("...unified the '".concat(subproofAssertionString, "' subproof assertion with the '").concat(subproofString, "' subproof."));
                    }
                }
                return subproofAssertionUnified;
            }
        },
        {
            key: "verify",
            value: function verify(substitutions, localContext) {
                var verified = false;
                var stated = false;
                var assignments = [];
                var subproofVerified = false, qualifiedStatementVerified = false, unqualifiedStatementVerified = false;
                if (this.subproof !== null) {
                    subproofVerified = this.subproof.verify(substitutions, localContext);
                }
                if (this.qualifiedStatement !== null) {
                    stated = true;
                    qualifiedStatementVerified = this.qualifiedStatement.verify(substitutions, assignments, stated, localContext);
                }
                if (this.unqualifiedStatement !== null) {
                    stated = false;
                    unqualifiedStatementVerified = this.unqualifiedStatement.verify(assignments, stated, localContext);
                }
                if (subproofVerified || qualifiedStatementVerified || unqualifiedStatementVerified) {
                    var assignmentsAssigned = (0, _assignments.assignAssignments)(assignments, localContext);
                    if (assignmentsAssigned) {
                        verified = true;
                    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9vZlN0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi9zaGltXCI7XG5pbXBvcnQgbWV0YUxldmVsVW5pZmllciBmcm9tIFwiLi91bmlmaWVyL21ldGFMZXZlbFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGFzc2lnbkFzc2lnbm1lbnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2Fzc2lnbm1lbnRzXCI7XG5cbmNvbnN0IHsgbWF0Y2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBzdWJwcm9vZk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9vZlN0ZXB8bGFzdFByb29mU3RlcC9zdWJwcm9vZlwiKSxcbiAgICAgIHF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9vZlN0ZXB8bGFzdFByb29mU3RlcC9xdWFsaWZpZWRTdGF0ZW1lbnRcIiksXG4gICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9vZlN0ZXB8bGFzdFByb29mU3RlcC91bnF1YWxpZmllZFN0YXRlbWVudFwiKTtcblxuY2xhc3MgUHJvb2ZTdGVwIHtcbiAgY29uc3RydWN0b3Ioc3VicHJvb2YsIHF1YWxpZmllZFN0YXRlbWVudCwgdW5xdWFsaWZpZWRTdGF0ZW1lbnQpIHtcbiAgICB0aGlzLnN1YnByb29mID0gc3VicHJvb2Y7XG4gICAgdGhpcy5xdWFsaWZpZWRTdGF0ZW1lbnQgPSBxdWFsaWZpZWRTdGF0ZW1lbnQ7XG4gICAgdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudCA9IHVucXVhbGlmaWVkU3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3VicHJvb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VicHJvb2Y7XG4gIH1cblxuICBnZXRRdWFsaWZpZWRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucXVhbGlmaWVkU3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0VW5xdWFsaWZpZWRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5xdWFsaWZpZWRTdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudCA9IHRoaXMucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0YXRlbWVudCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnQgPSB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0YXRlbWVudCgpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBpZiAoKHRoaXMucXVhbGlmaWVkU3RhdGVtZW50ICE9PSBudWxsKSB8fCAodGhpcy51bnF1YWxpZmllZFN0YXRlbWVudCAhPT0gbnVsbCAhPT0gbnVsbCkpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgbG9jYWxDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICAgIGNvbnN0IHsgU3Vic3RpdHV0aW9ucyB9ID0gc2hpbSxcbiAgICAgICAgICAgIGxvY2FsQ29udGV4dEEgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgbG9jYWxDb250ZXh0QiA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpO1xuXG4gICAgICBpZiAodGhpcy5xdWFsaWZpZWRTdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMucXVhbGlmaWVkU3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNMZW5ndGggPSBzdWJzdGl0dXRpb25zLmdldExlbmd0aCgpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uc0xlbmd0aCA+IDApIHtcbiAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZBc3NlcnRpb24sIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZkFzc2VydGlvblVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZlN0cmluZyA9IHRoaXMuc3VicHJvb2YuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0cmluZyA9IHN1YnByb29mQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgICBsb2NhbENvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbiB3aXRoIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mLi4uYCk7XG5cbiAgICAgIGNvbnN0IHsgU3Vic3RpdHV0aW9ucyB9ID0gc2hpbSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgICBzdWJwcm9vZlN0YXRlbWVudHMgPSB0aGlzLnN1YnByb29mLmdldFN0YXRlbWVudHMoKSxcbiAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50cyA9IHN1YnByb29mQXNzZXJ0aW9uLmdldFN0YXRlbWVudHMoKTtcblxuICAgICAgc3VicHJvb2ZBc3NlcnRpb25VbmlmaWVkID0gbWF0Y2goc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnRzLCBzdWJwcm9vZlN0YXRlbWVudHMsIChzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudCwgc3VicHJvb2ZTdGF0ZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2RlID0gc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgICBzdWJwcm9vZlN0YXRlbWVudE5vZGUgPSBzdWJwcm9vZlN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgICAgIG5vZGVBID0gc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICAgIG5vZGVCID0gc3VicHJvb2ZTdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICAgIGxvY2FsQ29udGV4dEEgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgICBsb2NhbENvbnRleHRCID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgdW5pZmllZEF0TWV0YUxldmVsID0gbWV0YUxldmVsVW5pZmllci51bmlmeShub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgICAgIGlmICh1bmlmaWVkQXRNZXRhTGV2ZWwpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChzdWJwcm9vZkFzc2VydGlvblVuaWZpZWQpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc0xlbmd0aCA9IHN1YnN0aXR1dGlvbnMuZ2V0TGVuZ3RoKCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbnNMZW5ndGggPiAwKSB7XG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25VbmlmaWVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uVW5pZmllZCkge1xuICAgICAgICBsb2NhbENvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uIHdpdGggdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2YuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uVW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeShzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGxldCBzdGF0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGFzc2lnbm1lbnRzID0gW107XG5cbiAgICBsZXQgc3VicHJvb2ZWZXJpZmllZCA9IGZhbHNlLFxuICAgICAgICBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IGZhbHNlLFxuICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5zdWJwcm9vZiAhPT0gbnVsbCkge1xuICAgICAgc3VicHJvb2ZWZXJpZmllZCA9IHRoaXMuc3VicHJvb2YudmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucXVhbGlmaWVkU3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZWQgPSB0cnVlO1xuXG4gICAgICBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHRoaXMucXVhbGlmaWVkU3RhdGVtZW50LnZlcmlmeShzdWJzdGl0dXRpb25zLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZWQgPSBmYWxzZTtcblxuICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mVmVyaWZpZWQgfHwgcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgfHwgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgY29uc3QgYXNzaWdubWVudHNBc3NpZ25lZCA9IGFzc2lnbkFzc2lnbm1lbnRzKGFzc2lnbm1lbnRzLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAoYXNzaWdubWVudHNBc3NpZ25lZCkge1xuICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBwcm9vZlN0ZXAgPSB0aGlzOyAvLy9cblxuICAgICAgbG9jYWxDb250ZXh0LmFkZFByb29mU3RlcChwcm9vZlN0ZXApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvb2ZTdGVwTm9kZShwcm9vZlN0ZXBOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgU3VicHJvb2YsIFF1YWxpZmllZFN0YXRlbWVudCwgVW5xdWFsaWZpZWRTdGF0ZW1lbnQgfSA9IHNoaW0sXG4gICAgICAgICAgc3VicHJvb2ZOb2RlID0gc3VicHJvb2ZOb2RlUXVlcnkocHJvb2ZTdGVwTm9kZSksXG4gICAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IHF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeShwcm9vZlN0ZXBOb2RlKSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeShwcm9vZlN0ZXBOb2RlKSxcbiAgICAgICAgICBzdWJwcm9vZiA9IFN1YnByb29mLmZyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50ID0gUXVhbGlmaWVkU3RhdGVtZW50LmZyb21RdWFsaWZpZWRTdGF0ZW1lbnROb2RlKHF1YWxpZmllZFN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudCA9IFVucXVhbGlmaWVkU3RhdGVtZW50LmZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJvb2ZTdGVwID0gbmV3IFByb29mU3RlcChzdWJwcm9vZiwgcXVhbGlmaWVkU3RhdGVtZW50LCB1bnF1YWxpZmllZFN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwO1xuICB9XG5cbiAgc3RhdGljIGZyb21VbnF1YWxpZmllZFN0YXRlbWVudCh1bnF1YWxpZmllZFN0YXRlbWVudCkge1xuICAgIGNvbnN0IHN1YnByb29mID0gbnVsbCxcbiAgICAgICAgICBxdWFsaWZpZWRTdGF0ZW1lbnQgPSBudWxsLFxuICAgICAgICAgIHByb29mU3RlcCA9IG5ldyBQcm9vZlN0ZXAoc3VicHJvb2YsIHF1YWxpZmllZFN0YXRlbWVudCwgdW5xdWFsaWZpZWRTdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIHByb29mU3RlcDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgUHJvb2ZTdGVwXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvb2ZTdGVwOyJdLCJuYW1lcyI6WyJtYXRjaCIsImFycmF5VXRpbGl0aWVzIiwic3VicHJvb2ZOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJxdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSIsIlByb29mU3RlcCIsInN1YnByb29mIiwicXVhbGlmaWVkU3RhdGVtZW50IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJnZXRTdWJwcm9vZiIsImdldFF1YWxpZmllZFN0YXRlbWVudCIsImdldFVucXVhbGlmaWVkU3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50Iiwic3RhdGVtZW50IiwidW5pZnlTdGF0ZW1lbnQiLCJsb2NhbENvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwic3RhdGVtZW50U3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJTdWJzdGl0dXRpb25zIiwic2hpbSIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwic3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwic3Vic3RpdHV0aW9uc0xlbmd0aCIsImdldExlbmd0aCIsImRlYnVnIiwidW5pZnlTdWJwcm9vZkFzc2VydGlvbiIsInN1YnByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZBc3NlcnRpb25VbmlmaWVkIiwic3VicHJvb2ZTdHJpbmciLCJzdWJwcm9vZkFzc2VydGlvblN0cmluZyIsInN1YnByb29mU3RhdGVtZW50cyIsImdldFN0YXRlbWVudHMiLCJzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudHMiLCJzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudCIsInN1YnByb29mU3RhdGVtZW50Iiwic3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2RlIiwiZ2V0Tm9kZSIsInN1YnByb29mU3RhdGVtZW50Tm9kZSIsIm5vZGVBIiwibm9kZUIiLCJ1bmlmaWVkQXRNZXRhTGV2ZWwiLCJtZXRhTGV2ZWxVbmlmaWVyIiwidW5pZnkiLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsInN0YXRlZCIsImFzc2lnbm1lbnRzIiwic3VicHJvb2ZWZXJpZmllZCIsInF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCIsImFzc2lnbm1lbnRzQXNzaWduZWQiLCJhc3NpZ25Bc3NpZ25tZW50cyIsInByb29mU3RlcCIsImFkZFByb29mU3RlcCIsImZyb21Qcm9vZlN0ZXBOb2RlIiwicHJvb2ZTdGVwTm9kZSIsImZpbGVDb250ZXh0IiwiU3VicHJvb2YiLCJRdWFsaWZpZWRTdGF0ZW1lbnQiLCJVbnF1YWxpZmllZFN0YXRlbWVudCIsInN1YnByb29mTm9kZSIsInF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJmcm9tU3VicHJvb2ZOb2RlIiwiZnJvbVF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJmcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50IiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzTUE7OztlQUFBOzs7eUJBcE0rQjsyREFFZDtnRUFDWTtxQkFFSDsyQkFDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztB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