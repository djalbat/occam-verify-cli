"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Premise;
    }
});
var _proofStep = /*#__PURE__*/ _interop_require_default(require("./proofStep"));
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("./unifier/metaLevel"));
var _subproof = /*#__PURE__*/ _interop_require_default(require("./assertion/subproof"));
var _unqualified = /*#__PURE__*/ _interop_require_default(require("./statement/unqualified"));
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
var unqualifiedStatementNodeQuery = (0, _query.nodeQuery)("/premise/unqualifiedStatement");
var Premise = /*#__PURE__*/ function() {
    function Premise(fileContext, unqualifiedStatement) {
        _class_call_check(this, Premise);
        this.fileContext = fileContext;
        this.unqualifiedStatement = unqualifiedStatement;
    }
    _create_class(Premise, [
        {
            key: "getFileContext",
            value: function getFileContext() {
                return this.fileContext;
            }
        },
        {
            key: "getUnqualifiedStatement",
            value: function getUnqualifiedStatement() {
                return this.unqualifiedStatement;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.unqualifiedStatement.getString();
            }
        },
        {
            key: "getStatement",
            value: function getStatement() {
                return this.unqualifiedStatement.getStatement();
            }
        },
        {
            key: "unifyProofStep",
            value: function unifyProofStep(proofStep, substitutions, localContext) {
                var proofStepUnified = false;
                var subproof = proofStep.getSubproof(), statement = proofStep.getStatement();
                substitutions.snapshot();
                if (false) {
                ///
                } else if (subproof !== null) {
                    proofStepUnified = this.unifySubproof(subproof, substitutions, localContext);
                } else if (statement !== null) {
                    proofStepUnified = this.unifyStatement(statement, substitutions, localContext);
                }
                proofStepUnified ? substitutions.continue() : substitutions.rollback(localContext);
                return proofStepUnified;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, localContext) {
                var statementUnified;
                var premise = this, statementString = statement.getString(), premiseStatement = premise.getStatement(), premiseStatementString = premiseStatement.getString();
                localContext.trace("Unifying the '".concat(statementString, "' statement with the premise's '").concat(premiseStatementString, "' statement..."));
                var statementNode = statement.getNode(), premiseStatementNode = premiseStatement.getNode(), nodeA = premiseStatementNode, nodeB = statementNode, fileContextA = this.fileContext, localContextA = _local.default.fromFileContext(fileContextA), localContextB = localContext, unified = _metaLevel.default.unify(nodeA, nodeB, substitutions, localContextA, localContextB);
                statementUnified = unified; ///
                if (statementUnified) {
                    localContext.debug("...unified the '".concat(statementString, "' statement with the premise's '").concat(premiseStatementString, "' statement."));
                }
                return statementUnified;
            }
        },
        {
            key: "unifySubproof",
            value: function unifySubproof(subproof, substitutions, localContext) {
                var subproofUnified = false;
                var premise = this, subproofString = subproof.getString(), premiseStatement = premise.getStatement(), premiseStatementString = premiseStatement.getString();
                localContext.trace("Unifying the '".concat(subproofString, "' subproof with the premise's '").concat(premiseStatementString, "' statement..."));
                var statement = this.unqualifiedStatement.getStatement(), statementNode = statement.getNode(), subproofAssertion = _subproof.default.fromStatementNode(statementNode, this.fileContext);
                if (subproofAssertion !== null) {
                    subproofUnified = subproofAssertion.unifySubproof(subproof, substitutions, localContext);
                }
                if (subproofUnified) {
                    localContext.debug("...unified the '".concat(subproofString, "' subproof with the premise's '").concat(premiseStatementString, "' statement."));
                }
                return subproofUnified;
            }
        },
        {
            key: "verify",
            value: function verify(localContext) {
                var verified = false;
                var premiseString = this.getString(); ///
                if (this.unqualifiedStatement !== null) {
                    localContext.trace("Verifying the '".concat(premiseString, "' premise..."));
                    var stated = true, assignments = [], unqualifiedStatementVerified = this.unqualifiedStatement.verify(assignments, stated, localContext);
                    if (unqualifiedStatementVerified) {
                        var assignmentsAssigned = (0, _assignments.assignAssignments)(assignments, localContext);
                        if (assignmentsAssigned) {
                            var proofStep = _proofStep.default.fromUnqualifiedStatement(this.unqualifiedStatement);
                            localContext.addProofStep(proofStep);
                            verified = true;
                        }
                    }
                    if (verified) {
                        localContext.debug("...verified the '".concat(premiseString, "' premise."));
                    }
                } else {
                    localContext.debug("The '".concat(premiseString, "' premise cannot be verified because it is nonsense."));
                }
                return verified;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var unqualifiedStatementString = this.unqualifiedStatement.getString(), unqualifiedStatement = unqualifiedStatementString, json = {
                    unqualifiedStatement: unqualifiedStatement
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var premise = null;
                return premise;
            }
        },
        {
            key: "fromPremiseNode",
            value: function fromPremiseNode(premiseNode, fileContext) {
                var unqualifiedStatementNode = unqualifiedStatementNodeQuery(premiseNode), unqualifiedStatement = _unqualified.default.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext), premise = new Premise(fileContext, unqualifiedStatement);
                return premise;
            }
        }
    ]);
    return Premise;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmVtaXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUHJvb2ZTdGVwIGZyb20gXCIuL3Byb29mU3RlcFwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgbWV0YUxldmVsVW5pZmllciBmcm9tIFwiLi91bmlmaWVyL21ldGFMZXZlbFwiO1xuaW1wb3J0IFN1YnByb29mQXNzZXJ0aW9uIGZyb20gXCIuL2Fzc2VydGlvbi9zdWJwcm9vZlwiO1xuaW1wb3J0IFVucXVhbGlmaWVkU3RhdGVtZW50IGZyb20gXCIuL3N0YXRlbWVudC91bnF1YWxpZmllZFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGFzc2lnbkFzc2lnbm1lbnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2Fzc2lnbm1lbnRzXCI7XG5cbmNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ByZW1pc2UvdW5xdWFsaWZpZWRTdGF0ZW1lbnRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZW1pc2Uge1xuICBjb25zdHJ1Y3RvcihmaWxlQ29udGV4dCwgdW5xdWFsaWZpZWRTdGF0ZW1lbnQpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudCA9IHVucXVhbGlmaWVkU3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXRVbnF1YWxpZmllZFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHsgcmV0dXJuIHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7IH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7IHJldHVybiB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0YXRlbWVudCgpOyB9XG5cbiAgdW5pZnlQcm9vZlN0ZXAocHJvb2ZTdGVwLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZTdGVwVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VicHJvb2YgPSBwcm9vZlN0ZXAuZ2V0U3VicHJvb2YoKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBwcm9vZlN0ZXAuZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBzdWJzdGl0dXRpb25zLnNuYXBzaG90KCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoc3VicHJvb2YgIT09IG51bGwpIHtcbiAgICAgIHByb29mU3RlcFVuaWZpZWQgPSB0aGlzLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCk7XG4gICAgfSBlbHNlIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHByb29mU3RlcFVuaWZpZWQgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcbiAgICB9XG5cbiAgICBwcm9vZlN0ZXBVbmlmaWVkID9cbiAgICAgIHN1YnN0aXR1dGlvbnMuY29udGludWUoKSA6XG4gICAgICAgIHN1YnN0aXR1dGlvbnMucm9sbGJhY2sobG9jYWxDb250ZXh0KTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXBVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IHByZW1pc2UgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcHJlbWlzZVN0YXRlbWVudCA9IHByZW1pc2UuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgcHJlbWlzZVN0YXRlbWVudFN0cmluZyA9IHByZW1pc2VTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgcHJlbWlzZSdzICcke3ByZW1pc2VTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHByZW1pc2VTdGF0ZW1lbnROb2RlID0gcHJlbWlzZVN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgbm9kZUEgPSBwcmVtaXNlU3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIG5vZGVCID0gc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIGZpbGVDb250ZXh0QSA9IHRoaXMuZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICBsb2NhbENvbnRleHRBID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dEEpLFxuICAgICAgICAgIGxvY2FsQ29udGV4dEIgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgIHVuaWZpZWQgPSBtZXRhTGV2ZWxVbmlmaWVyLnVuaWZ5KG5vZGVBLCBub2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdW5pZmllZDsgLy8vXG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgcHJlbWlzZSdzICcke3ByZW1pc2VTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcmVtaXNlID0gdGhpcywgLy8vXG4gICAgICAgICAgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwcmVtaXNlU3RhdGVtZW50ID0gcHJlbWlzZS5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBwcmVtaXNlU3RhdGVtZW50U3RyaW5nID0gcHJlbWlzZVN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgcHJlbWlzZSdzICcke3ByZW1pc2VTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBTdWJwcm9vZkFzc2VydGlvbi5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCB0aGlzLmZpbGVDb250ZXh0KTtcblxuICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgc3VicHJvb2ZVbmlmaWVkID0gc3VicHJvb2ZBc3NlcnRpb24udW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZVbmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgcHJlbWlzZSdzICcke3ByZW1pc2VTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeShsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByZW1pc2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGlmICh0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuLi5gKTtcblxuICAgICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgYXNzaWdubWVudHNBc3NpZ25lZCA9IGFzc2lnbkFzc2lnbm1lbnRzKGFzc2lnbm1lbnRzLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIGlmIChhc3NpZ25tZW50c0Fzc2lnbmVkKSB7XG4gICAgICAgICAgY29uc3QgcHJvb2ZTdGVwID0gUHJvb2ZTdGVwLmZyb21VbnF1YWxpZmllZFN0YXRlbWVudCh0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50KTtcblxuICAgICAgICAgIGxvY2FsQ29udGV4dC5hZGRQcm9vZlN0ZXAocHJvb2ZTdGVwKTtcblxuICAgICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlIGNhbm5vdCBiZSB2ZXJpZmllZCBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyA9IHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSB1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZywgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBwcmVtaXNlID0gbnVsbDtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeShwcmVtaXNlTm9kZSksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSBVbnF1YWxpZmllZFN0YXRlbWVudC5mcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHByZW1pc2UgPSBuZXcgUHJlbWlzZShmaWxlQ29udGV4dCwgdW5xdWFsaWZpZWRTdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIHByZW1pc2VcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlByZW1pc2UiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImZpbGVDb250ZXh0IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJnZXRGaWxlQ29udGV4dCIsImdldFVucXVhbGlmaWVkU3RhdGVtZW50IiwiZ2V0U3RyaW5nIiwiZ2V0U3RhdGVtZW50IiwidW5pZnlQcm9vZlN0ZXAiLCJwcm9vZlN0ZXAiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0IiwicHJvb2ZTdGVwVW5pZmllZCIsInN1YnByb29mIiwiZ2V0U3VicHJvb2YiLCJzdGF0ZW1lbnQiLCJzbmFwc2hvdCIsInVuaWZ5U3VicHJvb2YiLCJ1bmlmeVN0YXRlbWVudCIsImNvbnRpbnVlIiwicm9sbGJhY2siLCJzdGF0ZW1lbnRVbmlmaWVkIiwicHJlbWlzZSIsInN0YXRlbWVudFN0cmluZyIsInByZW1pc2VTdGF0ZW1lbnQiLCJwcmVtaXNlU3RhdGVtZW50U3RyaW5nIiwidHJhY2UiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0Tm9kZSIsInByZW1pc2VTdGF0ZW1lbnROb2RlIiwibm9kZUEiLCJub2RlQiIsImZpbGVDb250ZXh0QSIsImxvY2FsQ29udGV4dEEiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJsb2NhbENvbnRleHRCIiwidW5pZmllZCIsIm1ldGFMZXZlbFVuaWZpZXIiLCJ1bmlmeSIsImRlYnVnIiwic3VicHJvb2ZVbmlmaWVkIiwic3VicHJvb2ZTdHJpbmciLCJzdWJwcm9vZkFzc2VydGlvbiIsIlN1YnByb29mQXNzZXJ0aW9uIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsInByZW1pc2VTdHJpbmciLCJzdGF0ZWQiLCJhc3NpZ25tZW50cyIsInVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQiLCJhc3NpZ25tZW50c0Fzc2lnbmVkIiwiYXNzaWduQXNzaWdubWVudHMiLCJQcm9vZlN0ZXAiLCJmcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJhZGRQcm9vZlN0ZXAiLCJ0b0pTT04iLCJ1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyIsImpzb24iLCJmcm9tSlNPTiIsImZyb21QcmVtaXNlTm9kZSIsInByZW1pc2VOb2RlIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiVW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJmcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWFxQkE7OztnRUFYQzs0REFDRztnRUFDSTsrREFDQztrRUFDRztxQkFFUDsyQkFDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxJQUFNQyxnQ0FBZ0NDLElBQUFBLGdCQUFTLEVBQUM7QUFFakMsSUFBQSxBQUFNRix3QkFBTjthQUFNQSxRQUNQRyxXQUFXLEVBQUVDLG9CQUFvQjtnQ0FEMUJKO1FBRWpCLElBQUksQ0FBQ0csV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLG9CQUFvQixHQUFHQTs7a0JBSFhKOztZQU1uQkssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixXQUFXO1lBQ3pCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixvQkFBb0I7WUFDbEM7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWMsT0FBTyxJQUFJLENBQUNILG9CQUFvQixDQUFDRyxTQUFTO1lBQUk7OztZQUU1REMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFpQixPQUFPLElBQUksQ0FBQ0osb0JBQW9CLENBQUNJLFlBQVk7WUFBSTs7O1lBRWxFQyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUMsU0FB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