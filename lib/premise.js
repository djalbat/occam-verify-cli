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
            key: "resolveIndependently",
            value: function resolveIndependently(substitutions, localContext) {
                var resolvedIndependently;
                var premiseString = this.getString();
                var localContextB = localContext; ///
                localContext = _local.default.fromFileContext(this.fileContext);
                var localContextA = localContext; ///
                localContextB.trace("Resolving the '".concat(premiseString, "' premise independently..."));
                var unqualifiedStatementResolvedIndependently = this.unqualifiedStatement.resolveIndependently(substitutions, localContextA, localContextB);
                resolvedIndependently = unqualifiedStatementResolvedIndependently; ///
                if (resolvedIndependently) {
                    localContextB.trace("...resolved the '".concat(premiseString, "' premise independently."));
                }
                return resolvedIndependently;
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
                    var localContextB = localContext; ///
                    localContext = _local.default.fromFileContext(this.fileContext);
                    var localContextA = localContext; ///
                    substitutions.resolve(localContextA, localContextB);
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
                var UnqualifiedStatement = _shim.default.UnqualifiedStatement, unqualifiedStatementNode = unqualifiedStatementNodeQuery(suppositionNode), unqualifiedStatement = UnqualifiedStatement.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext), premise = new Premise(fileContext, unqualifiedStatement);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmVtaXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi9zaGltXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBTdWJwcm9vZkFzc2VydGlvbiBmcm9tIFwiLi9hc3NlcnRpb24vc3VicHJvb2ZcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBhc3NpZ25Bc3NpZ25tZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9hc3NpZ25tZW50c1wiO1xuaW1wb3J0IHsgdW5xdWFsaWZpZWRTdGF0ZW1lbnRGcm9tSlNPTiwgdW5xdWFsaWZpZWRTdGF0ZW1lbnRUb1VucXVhbGlmaWVkU3RhdGVtZW50SlNPTiB9IGZyb20gXCIuL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ByZW1pc2UvdW5xdWFsaWZpZWRTdGF0ZW1lbnRcIik7XG5cbmNsYXNzIFByZW1pc2Uge1xuICBjb25zdHJ1Y3RvcihmaWxlQ29udGV4dCwgdW5xdWFsaWZpZWRTdGF0ZW1lbnQpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudCA9IHVucXVhbGlmaWVkU3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXRVbnF1YWxpZmllZFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHsgcmV0dXJuIHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7IH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7IHJldHVybiB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0YXRlbWVudCgpOyB9XG5cbiAgcmVzb2x2ZUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHJlc29sdmVkSW5kZXBlbmRlbnRseTtcblxuICAgIGNvbnN0IHByZW1pc2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29uc3QgbG9jYWxDb250ZXh0QiA9IGxvY2FsQ29udGV4dDsgLy8vXG5cbiAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KHRoaXMuZmlsZUNvbnRleHQpO1xuXG4gICAgY29uc3QgbG9jYWxDb250ZXh0QSA9IGxvY2FsQ29udGV4dDsgLy8vXG5cbiAgICBsb2NhbENvbnRleHRCLnRyYWNlKGBSZXNvbHZpbmcgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlIGluZGVwZW5kZW50bHkuLi5gKTtcblxuICAgIGNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50UmVzb2x2ZWRJbmRlcGVuZGVudGx5ID0gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudC5yZXNvbHZlSW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgIHJlc29sdmVkSW5kZXBlbmRlbnRseSA9IHVucXVhbGlmaWVkU3RhdGVtZW50UmVzb2x2ZWRJbmRlcGVuZGVudGx5OyAgLy8vXG5cbiAgICBpZiAocmVzb2x2ZWRJbmRlcGVuZGVudGx5KSB7XG4gICAgICBsb2NhbENvbnRleHRCLnRyYWNlKGAuLi5yZXNvbHZlZCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UgaW5kZXBlbmRlbnRseS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzb2x2ZWRJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgdW5pZnlQcm9vZlN0ZXAocHJvb2ZTdGVwLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZTdGVwVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VicHJvb2YgPSBwcm9vZlN0ZXAuZ2V0U3VicHJvb2YoKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBwcm9vZlN0ZXAuZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBzdWJzdGl0dXRpb25zLnNuYXBzaG90KCk7XG5cbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVkID0gZmFsc2UsXG4gICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChzdWJwcm9vZiAhPT0gbnVsbCkge1xuICAgICAgc3VicHJvb2ZVbmlmaWVkID0gdGhpcy51bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mVW5pZmllZCB8fCBzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICBjb25zdCBsb2NhbENvbnRleHRCID0gbG9jYWxDb250ZXh0OyAvLy9cblxuICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dCh0aGlzLmZpbGVDb250ZXh0KTtcblxuICAgICAgY29uc3QgbG9jYWxDb250ZXh0QSA9IGxvY2FsQ29udGV4dDsgLy8vXG5cbiAgICAgIHN1YnN0aXR1dGlvbnMucmVzb2x2ZShsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgcHJvb2ZTdGVwVW5pZmllZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJvb2ZTdGVwVW5pZmllZCA/XG4gICAgICBzdWJzdGl0dXRpb25zLmNvbnRpbnVlKCkgOlxuICAgICAgICBzdWJzdGl0dXRpb25zLnJvbGxiYWNrKGxvY2FsQ29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQ7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcHJlbWlzZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb25zdCBsb2NhbENvbnRleHRCID0gbG9jYWxDb250ZXh0OyAvLy9cblxuICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQodGhpcy5maWxlQ29udGV4dCk7XG5cbiAgICBjb25zdCBsb2NhbENvbnRleHRBID0gbG9jYWxDb250ZXh0OyAvLy9cblxuICAgIGxvY2FsQ29udGV4dEIudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuLi5gKTtcblxuICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0Qi5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJlbWlzZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcHJlbWlzZVN0YXRlbWVudCA9IHByZW1pc2UuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgcHJlbWlzZVN0YXRlbWVudFN0cmluZyA9IHByZW1pc2VTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlIHByZW1pc2UncyAnJHtwcmVtaXNlU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudFRva2VucyA9IHN0YXRlbWVudC5nZXRUb2tlbnMoKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGhpcy5maWxlQ29udGV4dCwgLy8vXG4gICAgICAgICAgdG9rZW5zID0gc3RhdGVtZW50VG9rZW5zOyAvLy9cblxuICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tQ29udGV4dEFuZFRva2Vucyhjb250ZXh0LCB0b2tlbnMpOyAgLy8vXG5cbiAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvbiA9IFN1YnByb29mQXNzZXJ0aW9uLmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIHN1YnByb29mVW5pZmllZCA9IHN1YnByb29mQXNzZXJ0aW9uLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIHRoaXMuZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mVW5pZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlIHByZW1pc2UncyAnJHtwcmVtaXNlU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnkobG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcmVtaXNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmICh1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBhc3NpZ25tZW50c0Fzc2lnbmVkID0gYXNzaWduQXNzaWdubWVudHMoYXNzaWdubWVudHMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChhc3NpZ25tZW50c0Fzc2lnbmVkKSB7XG4gICAgICAgIGNvbnN0IHsgUHJvb2ZTdGVwIH0gPSBzaGltLFxuICAgICAgICAgICAgICBwcm9vZlN0ZXAgPSBQcm9vZlN0ZXAuZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50KHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQpO1xuXG4gICAgICAgIGxvY2FsQ29udGV4dC5hZGRQcm9vZlN0ZXAocHJvb2ZTdGVwKTtcblxuICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnRKU09OID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRUb1VucXVhbGlmaWVkU3RhdGVtZW50SlNPTih0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50KSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudCA9IHVucXVhbGlmaWVkU3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50ID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJlbWlzZSA9IG5ldyBQcmVtaXNlKGZpbGVDb250ZXh0LCB1bnF1YWxpZmllZFN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJlbWlzZU5vZGUoc3VwcG9zaXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgVW5xdWFsaWZpZWRTdGF0ZW1lbnQgfSA9IHNoaW0sXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkoc3VwcG9zaXRpb25Ob2RlKSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudCA9IFVucXVhbGlmaWVkU3RhdGVtZW50LmZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJlbWlzZSA9IG5ldyBQcmVtaXNlKGZpbGVDb250ZXh0LCB1bnF1YWxpZmllZFN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZVxuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBQcmVtaXNlXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgUHJlbWlzZTtcbiJdLCJuYW1lcyI6WyJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIlByZW1pc2UiLCJmaWxlQ29udGV4dCIsInVucXVhbGlmaWVkU3RhdGVtZW50IiwiZ2V0RmlsZUNvbnRleHQiLCJnZXRVbnF1YWxpZmllZFN0YXRlbWVudCIsImdldFN0cmluZyIsImdldFN0YXRlbWVudCIsInJlc29sdmVJbmRlcGVuZGVudGx5Iiwic3Vic3RpdHV0aW9ucyIsImxvY2FsQ29udGV4dCIsInJlc29sdmVkSW5kZXBlbmRlbnRseSIsInByZW1pc2VTdHJpbmciLCJsb2NhbENvbnRleHRCIiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwibG9jYWxDb250ZXh0QSIsInRyYWNlIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRSZXNvbHZlZEluZGVwZW5kZW50bHkiLCJ1bmlmeVByb29mU3RlcCIsInByb29mU3RlcCIsInByb29mU3RlcFVuaWZpZWQiLCJzdWJwcm9vZiIsImdldFN1YnByb29mIiwic3RhdGVtZW50Iiwic25hcHNob3QiLCJzdWJwcm9vZlVuaWZpZWQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwidW5pZnlTdWJwcm9vZiIsInVuaWZ5U3RhdGVtZW50IiwicmVzb2x2ZSIsImNvbnRpbnVlIiwicm9sbGJhY2siLCJzdGF0ZW1lbnRTdHJpbmciLCJkZWJ1ZyIsInByZW1pc2UiLCJzdWJwcm9vZlN0cmluZyIsInByZW1pc2VTdGF0ZW1lbnQiLCJwcmVtaXNlU3RhdGVtZW50U3RyaW5nIiwic3RhdGVtZW50Tm9kZSIsImdldE5vZGUiLCJzdGF0ZW1lbnRUb2tlbnMiLCJnZXRUb2tlbnMiLCJjb250ZXh0IiwidG9rZW5zIiwiZnJvbUNvbnRleHRBbmRUb2tlbnMiLCJzdWJwcm9vZkFzc2VydGlvbiIsIlN1YnByb29mQXNzZXJ0aW9uIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsInN0YXRlZCIsImFzc2lnbm1lbnRzIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCIsImFzc2lnbm1lbnRzQXNzaWduZWQiLCJhc3NpZ25Bc3NpZ25tZW50cyIsIlByb29mU3RlcCIsInNoaW0iLCJmcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJhZGRQcm9vZlN0ZXAiLCJ0b0pTT04iLCJ1bnF1YWxpZmllZFN0YXRlbWVudEpTT04iLCJ1bnF1YWxpZmllZFN0YXRlbWVudFRvVW5xdWFsaWZpZWRTdGF0ZW1lbnRKU09OIiwianNvbiIsImZyb21KU09OIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRGcm9tSlNPTiIsImZyb21QcmVtaXNlTm9kZSIsInN1cHBvc2l0aW9uTm9kZSIsIlVucXVhbGlmaWVkU3RhdGVtZW50IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZ05BOzs7ZUFBQTs7OzJEQTlNaUI7NERBQ1E7K0RBQ0s7cUJBRUo7MkJBQ1E7b0JBQzJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdGLElBQU1BLGdDQUFnQ0MsSUFBQUEsZ0JBQVMsRUFBQztBQUVo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