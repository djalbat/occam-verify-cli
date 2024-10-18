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
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
var _subproof = /*#__PURE__*/ _interop_require_default(require("./assertion/subproof"));
var _unqualified = /*#__PURE__*/ _interop_require_default(require("./statement/unqualified"));
var _query = require("./utilities/query");
var _assignments = require("./utilities/assignments");
var _json = require("./utilities/json");
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
            key: "unifySubproof",
            value: function unifySubproof(subproof, substitutions, localContext) {
                var subproofUnified = false;
                var premise = this, subproofString = subproof.getString(), premiseStatement = premise.getStatement(), premiseStatementString = premiseStatement.getString();
                localContext.trace("Unifying the '".concat(subproofString, "' subproof with the premise's '").concat(premiseStatementString, "' statement..."));
                var statement = this.unqualifiedStatement.getStatement(), statementNode = statement.getNode(), statementTokens = statement.getTokens(), context = this.fileContext, tokens = statementTokens; ///
                localContext = _local.default.fromContextAndTokens(context, tokens); ///
                var subproofAssertion = _subproof.default.fromStatementNode(statementNode, localContext);
                if (subproofAssertion !== null) {
                    subproofUnified = subproofAssertion.unifySubproof(subproof, substitutions, this.fileContext, localContext);
                }
                if (subproofUnified) {
                    localContext.debug("...unified the '".concat(subproofString, "' subproof with the premise's '").concat(premiseStatementString, "' statement."));
                }
                return subproofUnified;
            }
        },
        {
            key: "unifyProofStep",
            value: function unifyProofStep(proofStep, substitutions, localContext) {
                var proofStepUnified = false;
                var subproof = proofStep.getSubproof(), statement = proofStep.getStatement();
                substitutions.snapshot();
                var subproofUnified = false, statementUnified = false;
                if (false) {
                ///
                } else if (subproof !== null) {
                    subproofUnified = this.unifySubproof(subproof, substitutions, localContext);
                } else if (statement !== null) {
                    statementUnified = this.unifyStatement(statement, substitutions, localContext);
                }
                if (subproofUnified || statementUnified) {
                    proofStepUnified = true;
                }
                proofStepUnified ? substitutions.continue() : substitutions.rollback(localContext);
                return proofStepUnified;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, localContext) {
                var statementUnified;
                var statementString = statement.getString(), premiseString = this.getString();
                var localContextB = localContext; ///
                localContext = _local.default.fromFileContext(this.fileContext);
                var localContextA = localContext; ///
                localContextB.trace("Unifying the '".concat(statementString, "' statement with the '").concat(premiseString, "' premise..."));
                statementUnified = this.unqualifiedStatement.unifyStatement(statement, substitutions, localContextA, localContextB);
                if (statementUnified) {
                    localContextB.debug("...unified the '".concat(statementString, "' statement with the '").concat(premiseString, "' premise."));
                }
                return statementUnified;
            }
        },
        {
            key: "verify",
            value: function verify(localContext) {
                var verified = false;
                var premiseString = this.getString(); ///
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
                return verified;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var unqualifiedStatementJSON = (0, _json.unqualifiedStatementToUnqualifiedStatementJSON)(this.unqualifiedStatement), unqualifiedStatement = unqualifiedStatementJSON, json = {
                    unqualifiedStatement: unqualifiedStatement
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var unqualifiedStatement = (0, _json.unqualifiedStatementFromJSON)(json, fileContext), premise = new Premise(fileContext, unqualifiedStatement);
                return premise;
            }
        },
        {
            key: "fromPremiseNode",
            value: function fromPremiseNode(suppositionNode, fileContext) {
                var unqualifiedStatementNode = unqualifiedStatementNodeQuery(suppositionNode), unqualifiedStatement = _unqualified.default.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext), premise = new Premise(fileContext, unqualifiedStatement);
                return premise;
            }
        }
    ]);
    return Premise;
}();
Object.assign(_shim.default, {
    Premise: Premise
});
var _default = Premise;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmVtaXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi9zaGltXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBTdWJwcm9vZkFzc2VydGlvbiBmcm9tIFwiLi9hc3NlcnRpb24vc3VicHJvb2ZcIjtcbmltcG9ydCBVbnF1YWxpZmllZFN0YXRlbWVudCBmcm9tIFwiLi9zdGF0ZW1lbnQvdW5xdWFsaWZpZWRcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBhc3NpZ25Bc3NpZ25tZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9hc3NpZ25tZW50c1wiO1xuaW1wb3J0IHsgdW5xdWFsaWZpZWRTdGF0ZW1lbnRGcm9tSlNPTiwgdW5xdWFsaWZpZWRTdGF0ZW1lbnRUb1VucXVhbGlmaWVkU3RhdGVtZW50SlNPTiB9IGZyb20gXCIuL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ByZW1pc2UvdW5xdWFsaWZpZWRTdGF0ZW1lbnRcIik7XG5cbmNsYXNzIFByZW1pc2Uge1xuICBjb25zdHJ1Y3RvcihmaWxlQ29udGV4dCwgdW5xdWFsaWZpZWRTdGF0ZW1lbnQpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudCA9IHVucXVhbGlmaWVkU3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXRVbnF1YWxpZmllZFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHsgcmV0dXJuIHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7IH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7IHJldHVybiB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0YXRlbWVudCgpOyB9XG5cbiAgdW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJlbWlzZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcHJlbWlzZVN0YXRlbWVudCA9IHByZW1pc2UuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgcHJlbWlzZVN0YXRlbWVudFN0cmluZyA9IHByZW1pc2VTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlIHByZW1pc2UncyAnJHtwcmVtaXNlU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudFRva2VucyA9IHN0YXRlbWVudC5nZXRUb2tlbnMoKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGhpcy5maWxlQ29udGV4dCwgLy8vXG4gICAgICAgICAgdG9rZW5zID0gc3RhdGVtZW50VG9rZW5zOyAvLy9cblxuICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tQ29udGV4dEFuZFRva2Vucyhjb250ZXh0LCB0b2tlbnMpOyAgLy8vXG5cbiAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvbiA9IFN1YnByb29mQXNzZXJ0aW9uLmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIHN1YnByb29mVW5pZmllZCA9IHN1YnByb29mQXNzZXJ0aW9uLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIHRoaXMuZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mVW5pZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlIHByZW1pc2UncyAnJHtwcmVtaXNlU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVByb29mU3RlcChwcm9vZlN0ZXAsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBwcm9vZlN0ZXBVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdWJwcm9vZiA9IHByb29mU3RlcC5nZXRTdWJwcm9vZigpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHByb29mU3RlcC5nZXRTdGF0ZW1lbnQoKTtcblxuICAgIHN1YnN0aXR1dGlvbnMuc25hcHNob3QoKTtcblxuICAgIGxldCBzdWJwcm9vZlVuaWZpZWQgPSBmYWxzZSxcbiAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IGZhbHNlO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICBzdWJwcm9vZlVuaWZpZWQgPSB0aGlzLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCk7XG4gICAgfSBlbHNlIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZVbmlmaWVkIHx8IHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIHByb29mU3RlcFVuaWZpZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHByb29mU3RlcFVuaWZpZWQgP1xuICAgICAgc3Vic3RpdHV0aW9ucy5jb250aW51ZSgpIDpcbiAgICAgICAgc3Vic3RpdHV0aW9ucy5yb2xsYmFjayhsb2NhbENvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByb29mU3RlcFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHByZW1pc2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29uc3QgbG9jYWxDb250ZXh0QiA9IGxvY2FsQ29udGV4dDsgLy8vXG5cbiAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KHRoaXMuZmlsZUNvbnRleHQpO1xuXG4gICAgY29uc3QgbG9jYWxDb250ZXh0QSA9IGxvY2FsQ29udGV4dDsgLy8vXG5cbiAgICBsb2NhbENvbnRleHRCLnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLi4uYCk7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dEIuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeShsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByZW1pc2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGFzc2lnbm1lbnRzQXNzaWduZWQgPSBhc3NpZ25Bc3NpZ25tZW50cyhhc3NpZ25tZW50cywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKGFzc2lnbm1lbnRzQXNzaWduZWQpIHtcbiAgICAgICAgY29uc3QgeyBQcm9vZlN0ZXAgfSA9IHNoaW0sXG4gICAgICAgICAgICAgIHByb29mU3RlcCA9IFByb29mU3RlcC5mcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnQodGhpcy51bnF1YWxpZmllZFN0YXRlbWVudCk7XG5cbiAgICAgICAgbG9jYWxDb250ZXh0LmFkZFByb29mU3RlcChwcm9vZlN0ZXApO1xuXG4gICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudEpTT04gPSB1bnF1YWxpZmllZFN0YXRlbWVudFRvVW5xdWFsaWZpZWRTdGF0ZW1lbnRKU09OKHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50ID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSB1bnF1YWxpZmllZFN0YXRlbWVudEZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBwcmVtaXNlID0gbmV3IFByZW1pc2UoZmlsZUNvbnRleHQsIHVucXVhbGlmaWVkU3RhdGVtZW50KTtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21QcmVtaXNlTm9kZShzdXBwb3NpdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkoc3VwcG9zaXRpb25Ob2RlKSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudCA9IFVucXVhbGlmaWVkU3RhdGVtZW50LmZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJlbWlzZSA9IG5ldyBQcmVtaXNlKGZpbGVDb250ZXh0LCB1bnF1YWxpZmllZFN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZVxuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBQcmVtaXNlXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgUHJlbWlzZTtcbiJdLCJuYW1lcyI6WyJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIlByZW1pc2UiLCJmaWxlQ29udGV4dCIsInVucXVhbGlmaWVkU3RhdGVtZW50IiwiZ2V0RmlsZUNvbnRleHQiLCJnZXRVbnF1YWxpZmllZFN0YXRlbWVudCIsImdldFN0cmluZyIsImdldFN0YXRlbWVudCIsInVuaWZ5U3VicHJvb2YiLCJzdWJwcm9vZiIsInN1YnN0aXR1dGlvbnMiLCJsb2NhbENvbnRleHQiLCJzdWJwcm9vZlVuaWZpZWQiLCJwcmVtaXNlIiwic3VicHJvb2ZTdHJpbmciLCJwcmVtaXNlU3RhdGVtZW50IiwicHJlbWlzZVN0YXRlbWVudFN0cmluZyIsInRyYWNlIiwic3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsImdldE5vZGUiLCJzdGF0ZW1lbnRUb2tlbnMiLCJnZXRUb2tlbnMiLCJjb250ZXh0IiwidG9rZW5zIiwiTG9jYWxDb250ZXh0IiwiZnJvbUNvbnRleHRBbmRUb2tlbnMiLCJzdWJwcm9vZkFzc2VydGlvbiIsIlN1YnByb29mQXNzZXJ0aW9uIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJkZWJ1ZyIsInVuaWZ5UHJvb2ZTdGVwIiwicHJvb2ZTdGVwIiwicHJvb2ZTdGVwVW5pZmllZCIsImdldFN1YnByb29mIiwic25hcHNob3QiLCJzdGF0ZW1lbnRVbmlmaWVkIiwidW5pZnlTdGF0ZW1lbnQiLCJjb250aW51ZSIsInJvbGxiYWNrIiwic3RhdGVtZW50U3RyaW5nIiwicHJlbWlzZVN0cmluZyIsImxvY2FsQ29udGV4dEIiLCJmcm9tRmlsZUNvbnRleHQiLCJsb2NhbENvbnRleHRBIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJzdGF0ZWQiLCJhc3NpZ25tZW50cyIsInVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQiLCJhc3NpZ25tZW50c0Fzc2lnbmVkIiwiYXNzaWduQXNzaWdubWVudHMiLCJQcm9vZlN0ZXAiLCJzaGltIiwiZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50IiwiYWRkUHJvb2ZTdGVwIiwidG9KU09OIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRKU09OIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRUb1VucXVhbGlmaWVkU3RhdGVtZW50SlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInVucXVhbGlmaWVkU3RhdGVtZW50RnJvbUpTT04iLCJmcm9tUHJlbWlzZU5vZGUiLCJzdXBwb3NpdGlvbk5vZGUiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJVbnF1YWxpZmllZFN0YXRlbWVudCIsImZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWdMQTs7O2VBQUE7OzsyREE5S2lCOzREQUNROytEQUNLO2tFQUNHO3FCQUVQOzJCQUNRO29CQUMyRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3RixJQUFNQSxnQ0FBZ0NDLElBQUFBLGdCQUFTLEVBQUM7QUFFaEQsSUFBQSxBQUFNQyx3QkFBTjthQUFNQSxRQUNRQyxXQUFXLEVBQUVDLG9CQUFvQjtnQ0FEekNGO1FBRUYsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0Msb0JBQW9CLEdBQUdBOztrQkFIMUJGOztZQU1KRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFdBQVc7WUFDekI7OztZQUVBRyxLQUFBQTttQkFB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