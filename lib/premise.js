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
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
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
    function Premise(fileContext, subproofAssertion, unqualifiedStatement) {
        _class_call_check(this, Premise);
        this.fileContext = fileContext;
        this.subproofAssertion = subproofAssertion;
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
            key: "getSubproofAssertion",
            value: function getSubproofAssertion() {
                return this.subproofAssertion;
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
                if (this.subproofAssertion !== null) {
                    subproofUnified = this.subproofAssertion.unifySubproof(subproof, substitutions, localContext);
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
                            var ProofStep = _shim.default.ProofStep, proofStep = ProofStep.fromUnqualifiedStatement(this.unqualifiedStatement);
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
                var unqualifiedStatementJSON = this.unqualifiedStatement.toJSON(), subproofAssertionJSON = this.subproofAssertion !== null ? this.subproofAssertion.toJSON() : null, unqualifiedStatement = unqualifiedStatementJSON, subproofAssertion = subproofAssertionJSON, json = {
                    unqualifiedStatement: unqualifiedStatement,
                    subproofAssertion: subproofAssertion
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var subproofAssertion = json.subproofAssertion, unqualifiedStatement = json.unqualifiedStatement;
                json = unqualifiedStatement; ///
                unqualifiedStatement = _unqualified.default.fromJSON(json, fileContext);
                json = subproofAssertion; ///
                subproofAssertion = json !== null ? _subproof.default.fromJSON(json, fileContext) : null;
                var premise = new Premise(fileContext, subproofAssertion, unqualifiedStatement);
                return premise;
            }
        },
        {
            key: "fromSuppositionNode",
            value: function fromSuppositionNode(suppositionNode, fileContext) {
                var unqualifiedStatementNode = unqualifiedStatementNodeQuery(suppositionNode), unqualifiedStatement = _unqualified.default.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext), subproofAssertion = _subproof.default.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext), premise = new Premise(fileContext, subproofAssertion, unqualifiedStatement);
                return premise;
            }
        }
    ]);
    return Premise;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmVtaXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi9zaGltXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBtZXRhTGV2ZWxVbmlmaWVyIGZyb20gXCIuL3VuaWZpZXIvbWV0YUxldmVsXCI7XG5pbXBvcnQgU3VicHJvb2ZBc3NlcnRpb24gZnJvbSBcIi4vYXNzZXJ0aW9uL3N1YnByb29mXCI7XG5pbXBvcnQgVW5xdWFsaWZpZWRTdGF0ZW1lbnQgZnJvbSBcIi4vc3RhdGVtZW50L3VucXVhbGlmaWVkXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgYXNzaWduQXNzaWdubWVudHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXNzaWdubWVudHNcIjtcblxuY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJlbWlzZS91bnF1YWxpZmllZFN0YXRlbWVudFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbWlzZSB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdWJwcm9vZkFzc2VydGlvbiwgdW5xdWFsaWZpZWRTdGF0ZW1lbnQpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy5zdWJwcm9vZkFzc2VydGlvbiA9IHN1YnByb29mQXNzZXJ0aW9uO1xuICAgIHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSB1bnF1YWxpZmllZFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0U3VicHJvb2ZBc3NlcnRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VicHJvb2ZBc3NlcnRpb247XG4gIH1cblxuICBnZXRVbnF1YWxpZmllZFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHsgcmV0dXJuIHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7IH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7IHJldHVybiB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0YXRlbWVudCgpOyB9XG5cbiAgdW5pZnlQcm9vZlN0ZXAocHJvb2ZTdGVwLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZTdGVwVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VicHJvb2YgPSBwcm9vZlN0ZXAuZ2V0U3VicHJvb2YoKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBwcm9vZlN0ZXAuZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBzdWJzdGl0dXRpb25zLnNuYXBzaG90KCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoc3VicHJvb2YgIT09IG51bGwpIHtcbiAgICAgIHByb29mU3RlcFVuaWZpZWQgPSB0aGlzLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCk7XG4gICAgfSBlbHNlIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHByb29mU3RlcFVuaWZpZWQgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcbiAgICB9XG5cbiAgICBwcm9vZlN0ZXBVbmlmaWVkID9cbiAgICAgIHN1YnN0aXR1dGlvbnMuY29udGludWUoKSA6XG4gICAgICAgIHN1YnN0aXR1dGlvbnMucm9sbGJhY2sobG9jYWxDb250ZXh0KTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXBVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IHByZW1pc2UgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcHJlbWlzZVN0YXRlbWVudCA9IHByZW1pc2UuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgcHJlbWlzZVN0YXRlbWVudFN0cmluZyA9IHByZW1pc2VTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgcHJlbWlzZSdzICcke3ByZW1pc2VTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHByZW1pc2VTdGF0ZW1lbnROb2RlID0gcHJlbWlzZVN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgbm9kZUEgPSBwcmVtaXNlU3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIG5vZGVCID0gc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIGZpbGVDb250ZXh0QSA9IHRoaXMuZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICBsb2NhbENvbnRleHRBID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dEEpLFxuICAgICAgICAgIGxvY2FsQ29udGV4dEIgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgIHVuaWZpZWQgPSBtZXRhTGV2ZWxVbmlmaWVyLnVuaWZ5KG5vZGVBLCBub2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdW5pZmllZDsgLy8vXG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgcHJlbWlzZSdzICcke3ByZW1pc2VTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcmVtaXNlID0gdGhpcywgLy8vXG4gICAgICAgICAgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwcmVtaXNlU3RhdGVtZW50ID0gcHJlbWlzZS5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBwcmVtaXNlU3RhdGVtZW50U3RyaW5nID0gcHJlbWlzZVN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgcHJlbWlzZSdzICcke3ByZW1pc2VTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGlmICh0aGlzLnN1YnByb29mQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBzdWJwcm9vZlVuaWZpZWQgPSB0aGlzLnN1YnByb29mQXNzZXJ0aW9uLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mVW5pZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlIHByZW1pc2UncyAnJHtwcmVtaXNlU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnkobG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcmVtaXNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBpZiAodGhpcy51bnF1YWxpZmllZFN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLi4uYCk7XG5cbiAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmICh1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGFzc2lnbm1lbnRzQXNzaWduZWQgPSBhc3NpZ25Bc3NpZ25tZW50cyhhc3NpZ25tZW50cywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICBpZiAoYXNzaWdubWVudHNBc3NpZ25lZCkge1xuICAgICAgICAgIGNvbnN0IHsgUHJvb2ZTdGVwIH0gPSBzaGltLFxuICAgICAgICAgICAgICAgIHByb29mU3RlcCA9IFByb29mU3RlcC5mcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnQodGhpcy51bnF1YWxpZmllZFN0YXRlbWVudCk7XG5cbiAgICAgICAgICBsb2NhbENvbnRleHQuYWRkUHJvb2ZTdGVwKHByb29mU3RlcCk7XG5cbiAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZSBjYW5ub3QgYmUgdmVyaWZpZWQgYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnRKU09OID0gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudC50b0pTT04oKSxcbiAgICAgIHN1YnByb29mQXNzZXJ0aW9uSlNPTiA9ICh0aGlzLnN1YnByb29mQXNzZXJ0aW9uICE9PSBudWxsKSA/XG4gICAgICAgIHRoaXMuc3VicHJvb2ZBc3NlcnRpb24udG9KU09OKCkgOlxuICAgICAgICBudWxsLFxuICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSB1bnF1YWxpZmllZFN0YXRlbWVudEpTT04sICAvLy9cbiAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gc3VicHJvb2ZBc3NlcnRpb25KU09OLCAgLy8vXG4gICAgICBqc29uID0ge1xuICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudCxcbiAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25cbiAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCB7IHN1YnByb29mQXNzZXJ0aW9uLCB1bnF1YWxpZmllZFN0YXRlbWVudCB9ID0ganNvbjtcblxuICAgIGpzb24gPSB1bnF1YWxpZmllZFN0YXRlbWVudDsgIC8vL1xuXG4gICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSBVbnF1YWxpZmllZFN0YXRlbWVudC5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICBqc29uID0gc3VicHJvb2ZBc3NlcnRpb247IC8vL1xuXG4gICAgc3VicHJvb2ZBc3NlcnRpb24gPSAoanNvbiAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJwcm9vZkFzc2VydGlvbi5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgICBjb25zdCBwcmVtaXNlID0gbmV3IFByZW1pc2UoZmlsZUNvbnRleHQsIHN1YnByb29mQXNzZXJ0aW9uLCB1bnF1YWxpZmllZFN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeShzdXBwb3NpdGlvbk5vZGUpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50ID0gVW5xdWFsaWZpZWRTdGF0ZW1lbnQuZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbiA9IFN1YnByb29mQXNzZXJ0aW9uLmZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJlbWlzZSA9IG5ldyBQcmVtaXNlKGZpbGVDb250ZXh0LCBzdWJwcm9vZkFzc2VydGlvbiwgdW5xdWFsaWZpZWRTdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIHByZW1pc2VcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlByZW1pc2UiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImZpbGVDb250ZXh0Iiwic3VicHJvb2ZBc3NlcnRpb24iLCJ1bnF1YWxpZmllZFN0YXRlbWVudCIsImdldEZpbGVDb250ZXh0IiwiZ2V0U3VicHJvb2ZBc3NlcnRpb24iLCJnZXRVbnF1YWxpZmllZFN0YXRlbWVudCIsImdldFN0cmluZyIsImdldFN0YXRlbWVudCIsInVuaWZ5UHJvb2ZTdGVwIiwicHJvb2ZTdGVwIiwic3Vic3RpdHV0aW9ucyIsImxvY2FsQ29udGV4dCIsInByb29mU3RlcFVuaWZpZWQiLCJzdWJwcm9vZiIsImdldFN1YnByb29mIiwic3RhdGVtZW50Iiwic25hcHNob3QiLCJ1bmlmeVN1YnByb29mIiwidW5pZnlTdGF0ZW1lbnQiLCJjb250aW51ZSIsInJvbGxiYWNrIiwic3RhdGVtZW50VW5pZmllZCIsInByZW1pc2UiLCJzdGF0ZW1lbnRTdHJpbmciLCJwcmVtaXNlU3RhdGVtZW50IiwicHJlbWlzZVN0YXRlbWVudFN0cmluZyIsInRyYWNlIiwic3RhdGVtZW50Tm9kZSIsImdldE5vZGUiLCJwcmVtaXNlU3RhdGVtZW50Tm9kZSIsIm5vZGVBIiwibm9kZUIiLCJmaWxlQ29udGV4dEEiLCJsb2NhbENvbnRleHRBIiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwibG9jYWxDb250ZXh0QiIsInVuaWZpZWQiLCJtZXRhTGV2ZWxVbmlmaWVyIiwidW5pZnkiLCJkZWJ1ZyIsInN1YnByb29mVW5pZmllZCIsInN1YnByb29mU3RyaW5nIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJwcmVtaXNlU3RyaW5nIiwic3RhdGVkIiwiYXNzaWdubWVudHMiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkIiwiYXNzaWdubWVudHNBc3NpZ25lZCIsImFzc2lnbkFzc2lnbm1lbnRzIiwiUHJvb2ZTdGVwIiwic2hpbSIsImZyb21VbnF1YWxpZmllZFN0YXRlbWVudCIsImFkZFByb29mU3RlcCIsInRvSlNPTiIsInVucXVhbGlmaWVkU3RhdGVtZW50SlNPTiIsInN1YnByb29mQXNzZXJ0aW9uSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsIlVucXVhbGlmaWVkU3RhdGVtZW50IiwiU3VicHJvb2ZBc3NlcnRpb24iLCJmcm9tU3VwcG9zaXRpb25Ob2RlIiwic3VwcG9zaXRpb25Ob2RlIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFhcUJBOzs7MkRBWEo7NERBQ1E7Z0VBQ0k7K0RBQ0M7a0VBQ0c7cUJBRVA7MkJBQ1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEMsSUFBTUMsZ0NBQWdDQyxJQUFBQSxnQkFBUyxFQUFDO0FBRWpDLElBQUEsQUFBTUYsd0JBQU47YUFBTUEsUUFDUEcsV0FBVyxFQUFFQyxpQkFBaUIsRUFBRUMsb0JBQW9CO2dDQUQ3Q0w7UUFFakIsSUFBSSxDQUFDRyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUdBO1FBQ3pCLElBQUksQ0FBQ0Msb0JBQW9CLEdBQUdBOztrQkFKWEw7O1lBT25CTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFdBQVc7WUFDekI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILGlCQUFpQjtZQUMvQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsb0JBQW9CO1lBQ2xDOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFjLE9BQU8sSUFBSSxDQUFDSixvQkFBb0IsQ0FBQ0ksU0FBUztZQUFJOzs7WUFFNURDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBaUIsT0FBTyxJQUFJLENBQUNMLG9CQUFvQixDQUFDSyxZQUFZO1lBQUk7OztZQUVsRUMsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVDLFNBQVMsRUFBRUMsYUFBYSxFQUFFQyxZ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