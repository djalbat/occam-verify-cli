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
                if (false) {
                ///
                } else if (this.subproof !== null) {
                    subproofVerified = this.subproof.verify(substitutions, localContext);
                } else if (this.qualifiedStatement !== null) {
                    stated = true;
                    qualifiedStatementVerified = this.qualifiedStatement.verify(substitutions, assignments, stated, localContext);
                } else if (this.unqualifiedStatement !== null) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9vZlN0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi9zaGltXCI7XG5pbXBvcnQgbWV0YUxldmVsVW5pZmllciBmcm9tIFwiLi91bmlmaWVyL21ldGFMZXZlbFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGFzc2lnbkFzc2lnbm1lbnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2Fzc2lnbm1lbnRzXCI7XG5cbmNvbnN0IHsgbWF0Y2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBzdWJwcm9vZk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9vZlN0ZXB8bGFzdFByb29mU3RlcC9zdWJwcm9vZlwiKSxcbiAgICAgIHF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9vZlN0ZXB8bGFzdFByb29mU3RlcC9xdWFsaWZpZWRTdGF0ZW1lbnRcIiksXG4gICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9vZlN0ZXB8bGFzdFByb29mU3RlcC91bnF1YWxpZmllZFN0YXRlbWVudFwiKTtcblxuY2xhc3MgUHJvb2ZTdGVwIHtcbiAgY29uc3RydWN0b3Ioc3VicHJvb2YsIHF1YWxpZmllZFN0YXRlbWVudCwgdW5xdWFsaWZpZWRTdGF0ZW1lbnQpIHtcbiAgICB0aGlzLnN1YnByb29mID0gc3VicHJvb2Y7XG4gICAgdGhpcy5xdWFsaWZpZWRTdGF0ZW1lbnQgPSBxdWFsaWZpZWRTdGF0ZW1lbnQ7XG4gICAgdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudCA9IHVucXVhbGlmaWVkU3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3VicHJvb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VicHJvb2Y7XG4gIH1cblxuICBnZXRRdWFsaWZpZWRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucXVhbGlmaWVkU3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0VW5xdWFsaWZpZWRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5xdWFsaWZpZWRTdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudCA9IHRoaXMucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0YXRlbWVudCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnQgPSB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0YXRlbWVudCgpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBpZiAoKHRoaXMucXVhbGlmaWVkU3RhdGVtZW50ICE9PSBudWxsKSB8fCAodGhpcy51bnF1YWxpZmllZFN0YXRlbWVudCAhPT0gbnVsbCAhPT0gbnVsbCkpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgbG9jYWxDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICAgIGNvbnN0IHsgU3Vic3RpdHV0aW9ucyB9ID0gc2hpbSxcbiAgICAgICAgICAgIGxvY2FsQ29udGV4dEEgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgbG9jYWxDb250ZXh0QiA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpO1xuXG4gICAgICBpZiAodGhpcy5xdWFsaWZpZWRTdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMucXVhbGlmaWVkU3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNMZW5ndGggPSBzdWJzdGl0dXRpb25zLmdldExlbmd0aCgpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uc0xlbmd0aCA+IDApIHtcbiAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZBc3NlcnRpb24sIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZkFzc2VydGlvblVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZlN0cmluZyA9IHRoaXMuc3VicHJvb2YuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0cmluZyA9IHN1YnByb29mQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgICBsb2NhbENvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbiB3aXRoIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mLi4uYCk7XG5cbiAgICAgIGNvbnN0IHsgU3Vic3RpdHV0aW9ucyB9ID0gc2hpbSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgICBzdWJwcm9vZlN0YXRlbWVudHMgPSB0aGlzLnN1YnByb29mLmdldFN0YXRlbWVudHMoKSxcbiAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50cyA9IHN1YnByb29mQXNzZXJ0aW9uLmdldFN0YXRlbWVudHMoKTtcblxuICAgICAgc3VicHJvb2ZBc3NlcnRpb25VbmlmaWVkID0gbWF0Y2goc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnRzLCBzdWJwcm9vZlN0YXRlbWVudHMsIChzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudCwgc3VicHJvb2ZTdGF0ZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2RlID0gc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgICBzdWJwcm9vZlN0YXRlbWVudE5vZGUgPSBzdWJwcm9vZlN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgICAgIG5vZGVBID0gc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICAgIG5vZGVCID0gc3VicHJvb2ZTdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICAgIGxvY2FsQ29udGV4dEEgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgICBsb2NhbENvbnRleHRCID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgdW5pZmllZEF0TWV0YUxldmVsID0gbWV0YUxldmVsVW5pZmllci51bmlmeShub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgICAgIGlmICh1bmlmaWVkQXRNZXRhTGV2ZWwpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChzdWJwcm9vZkFzc2VydGlvblVuaWZpZWQpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc0xlbmd0aCA9IHN1YnN0aXR1dGlvbnMuZ2V0TGVuZ3RoKCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbnNMZW5ndGggPiAwKSB7XG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25VbmlmaWVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uVW5pZmllZCkge1xuICAgICAgICBsb2NhbENvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uIHdpdGggdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2YuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uVW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeShzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGxldCBzdGF0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGFzc2lnbm1lbnRzID0gW107XG5cbiAgICBsZXQgc3VicHJvb2ZWZXJpZmllZCA9IGZhbHNlLFxuICAgICAgICBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IGZhbHNlLFxuICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdWJwcm9vZiAhPT0gbnVsbCkge1xuICAgICAgc3VicHJvb2ZWZXJpZmllZCA9IHRoaXMuc3VicHJvb2YudmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnF1YWxpZmllZFN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVkID0gdHJ1ZTtcblxuICAgICAgcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSB0aGlzLnF1YWxpZmllZFN0YXRlbWVudC52ZXJpZnkoc3Vic3RpdHV0aW9ucywgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlZCA9IGZhbHNlO1xuXG4gICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZWZXJpZmllZCB8fCBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCB8fCB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBhc3NpZ25tZW50c0Fzc2lnbmVkID0gYXNzaWduQXNzaWdubWVudHMoYXNzaWdubWVudHMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChhc3NpZ25tZW50c0Fzc2lnbmVkKSB7XG4gICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHByb29mU3RlcCA9IHRoaXM7IC8vL1xuXG4gICAgICBsb2NhbENvbnRleHQuYWRkUHJvb2ZTdGVwKHByb29mU3RlcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9vZlN0ZXBOb2RlKHByb29mU3RlcE5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBTdWJwcm9vZiwgUXVhbGlmaWVkU3RhdGVtZW50LCBVbnF1YWxpZmllZFN0YXRlbWVudCB9ID0gc2hpbSxcbiAgICAgICAgICBzdWJwcm9vZk5vZGUgPSBzdWJwcm9vZk5vZGVRdWVyeShwcm9vZlN0ZXBOb2RlKSxcbiAgICAgICAgICBxdWFsaWZpZWRTdGF0ZW1lbnROb2RlID0gcXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5KHByb29mU3RlcE5vZGUpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5KHByb29mU3RlcE5vZGUpLFxuICAgICAgICAgIHN1YnByb29mID0gU3VicHJvb2YuZnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBxdWFsaWZpZWRTdGF0ZW1lbnQgPSBRdWFsaWZpZWRTdGF0ZW1lbnQuZnJvbVF1YWxpZmllZFN0YXRlbWVudE5vZGUocXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50ID0gVW5xdWFsaWZpZWRTdGF0ZW1lbnQuZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBwcm9vZlN0ZXAgPSBuZXcgUHJvb2ZTdGVwKHN1YnByb29mLCBxdWFsaWZpZWRTdGF0ZW1lbnQsIHVucXVhbGlmaWVkU3RhdGVtZW50KTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXA7XG4gIH1cblxuICBzdGF0aWMgZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50KHVucXVhbGlmaWVkU3RhdGVtZW50KSB7XG4gICAgY29uc3Qgc3VicHJvb2YgPSBudWxsLFxuICAgICAgICAgIHF1YWxpZmllZFN0YXRlbWVudCA9IG51bGwsXG4gICAgICAgICAgcHJvb2ZTdGVwID0gbmV3IFByb29mU3RlcChzdWJwcm9vZiwgcXVhbGlmaWVkU3RhdGVtZW50LCB1bnF1YWxpZmllZFN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBQcm9vZlN0ZXBcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9vZlN0ZXA7Il0sIm5hbWVzIjpbIm1hdGNoIiwiYXJyYXlVdGlsaXRpZXMiLCJzdWJwcm9vZk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5IiwiUHJvb2ZTdGVwIiwic3VicHJvb2YiLCJxdWFsaWZpZWRTdGF0ZW1lbnQiLCJ1bnF1YWxpZmllZFN0YXRlbWVudCIsImdldFN1YnByb29mIiwiZ2V0UXVhbGlmaWVkU3RhdGVtZW50IiwiZ2V0VW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJ1bmlmeVN0YXRlbWVudCIsImxvY2FsQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZWQiLCJzdGF0ZW1lbnRTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsIlN1YnN0aXR1dGlvbnMiLCJzaGltIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJzdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJzdWJzdGl0dXRpb25zTGVuZ3RoIiwiZ2V0TGVuZ3RoIiwiZGVidWciLCJ1bmlmeVN1YnByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZkFzc2VydGlvblVuaWZpZWQiLCJzdWJwcm9vZlN0cmluZyIsInN1YnByb29mQXNzZXJ0aW9uU3RyaW5nIiwic3VicHJvb2ZTdGF0ZW1lbnRzIiwiZ2V0U3RhdGVtZW50cyIsInN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50cyIsInN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Iiwic3VicHJvb2ZTdGF0ZW1lbnQiLCJzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGUiLCJnZXROb2RlIiwic3VicHJvb2ZTdGF0ZW1lbnROb2RlIiwibm9kZUEiLCJub2RlQiIsInVuaWZpZWRBdE1ldGFMZXZlbCIsIm1ldGFMZXZlbFVuaWZpZXIiLCJ1bmlmeSIsInZlcmlmeSIsInZlcmlmaWVkIiwic3RhdGVkIiwiYXNzaWdubWVudHMiLCJzdWJwcm9vZlZlcmlmaWVkIiwicXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkIiwiYXNzaWdubWVudHNBc3NpZ25lZCIsImFzc2lnbkFzc2lnbm1lbnRzIiwicHJvb2ZTdGVwIiwiYWRkUHJvb2ZTdGVwIiwiZnJvbVByb29mU3RlcE5vZGUiLCJwcm9vZlN0ZXBOb2RlIiwiZmlsZUNvbnRleHQiLCJTdWJwcm9vZiIsIlF1YWxpZmllZFN0YXRlbWVudCIsIlVucXVhbGlmaWVkU3RhdGVtZW50Iiwic3VicHJvb2ZOb2RlIiwicXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsImZyb21TdWJwcm9vZk5vZGUiLCJmcm9tUXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsImZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJmcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW9NQTs7O2VBQUE7Ozt5QkFsTStCOzJEQUVkO2dFQUNZO3FCQUVI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