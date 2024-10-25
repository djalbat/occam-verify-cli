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
            value: function resolveIndependently(substitutions, context) {
                var resolvedIndependently;
                var localContext = _local.default.fromFileContext(this.fileContext), generalContext = localContext, specificContext = context; ///
                var premise = this, premiseString = premise.getString();
                specificContext.trace("Resolving the '".concat(premiseString, "' premise independently..."));
                var unqualifiedStatementResolvedIndependently = this.unqualifiedStatement.resolveIndependently(substitutions, generalContext, specificContext);
                resolvedIndependently = unqualifiedStatementResolvedIndependently; ///
                if (resolvedIndependently) {
                    specificContext.trace("...resolved the '".concat(premiseString, "' premise independently."));
                }
                return resolvedIndependently;
            }
        },
        {
            key: "unifyProofStep",
            value: function unifyProofStep(proofStep, substitutions, context) {
                var proofStepUnified = false;
                var subproof = proofStep.getSubproof(), statement = proofStep.getStatement();
                substitutions.snapshot();
                var subproofUnified = false, statementUnified = false;
                if (false) {
                ///
                } else if (subproof !== null) {
                    subproofUnified = this.unifySubproof(subproof, substitutions, context);
                } else if (statement !== null) {
                    statementUnified = this.unifyStatement(statement, substitutions, context);
                }
                if (subproofUnified || statementUnified) {
                    var localContext = _local.default.fromFileContext(this.fileContext), generalContext = localContext, specificContext = context; ///
                    substitutions.resolve(generalContext, specificContext);
                    proofStepUnified = true;
                }
                proofStepUnified ? substitutions.continue() : substitutions.rollback(context);
                return proofStepUnified;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, context) {
                var statementUnified;
                var localContext = _local.default.fromFileContext(this.fileContext), generalContext = localContext, specificContext = context; ///
                var premise = this, premiseString = premise.getString(), statementString = statement.getString();
                specificContext.trace("Unifying the '".concat(statementString, "' statement with the '").concat(premiseString, "' premise..."));
                statementUnified = this.unqualifiedStatement.unifyStatement(statement, substitutions, generalContext, specificContext);
                if (statementUnified) {
                    specificContext.debug("...unified the '".concat(statementString, "' statement with the '").concat(premiseString, "' premise."));
                }
                return statementUnified;
            }
        },
        {
            key: "unifySubproof",
            value: function unifySubproof(subproof, substitutions, context) {
                var subproofUnified = false;
                var premise = this, subproofString = subproof.getString(), premiseStatement = premise.getStatement(), premiseStatementString = premiseStatement.getString();
                var statement = this.unqualifiedStatement.getStatement(), statementNode = statement.getNode(), statementTokens = statement.getTokens(), specificContext = context; ///
                context = this.fileContext; ///
                var tokens = statementTokens, localContext = _local.default.fromContextAndTokens(context, tokens), generalContext = localContext; ///
                specificContext.trace("Unifying the '".concat(subproofString, "' subproof with the premise's '").concat(premiseStatementString, "' statement..."));
                var subproofAssertion = _subproof.default.fromStatementNode(statementNode, context);
                if (subproofAssertion !== null) {
                    subproofUnified = subproofAssertion.unifySubproof(subproof, substitutions, generalContext, specificContext);
                }
                if (subproofUnified) {
                    specificContext.debug("...unified the '".concat(subproofString, "' subproof with the premise's '").concat(premiseStatementString, "' statement."));
                }
                return subproofUnified;
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                var verified = false;
                var premiseString = this.getString(); ///
                context.trace("Verifying the '".concat(premiseString, "' premise..."));
                var stated = true, assignments = [], unqualifiedStatementVerified = this.unqualifiedStatement.verify(assignments, stated, context);
                if (unqualifiedStatementVerified) {
                    var assignmentsAssigned = (0, _assignments.assignAssignments)(assignments, context);
                    if (assignmentsAssigned) {
                        var ProofStep = _shim.default.ProofStep, proofStep = ProofStep.fromUnqualifiedStatement(this.unqualifiedStatement);
                        context.addProofStep(proofStep);
                        verified = true;
                    }
                }
                if (verified) {
                    context.debug("...verified the '".concat(premiseString, "' premise."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmVtaXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi9zaGltXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBTdWJwcm9vZkFzc2VydGlvbiBmcm9tIFwiLi9hc3NlcnRpb24vc3VicHJvb2ZcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBhc3NpZ25Bc3NpZ25tZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9hc3NpZ25tZW50c1wiO1xuaW1wb3J0IHsgdW5xdWFsaWZpZWRTdGF0ZW1lbnRGcm9tSlNPTiwgdW5xdWFsaWZpZWRTdGF0ZW1lbnRUb1VucXVhbGlmaWVkU3RhdGVtZW50SlNPTiB9IGZyb20gXCIuL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ByZW1pc2UvdW5xdWFsaWZpZWRTdGF0ZW1lbnRcIik7XG5cbmNsYXNzIFByZW1pc2Uge1xuICBjb25zdHJ1Y3RvcihmaWxlQ29udGV4dCwgdW5xdWFsaWZpZWRTdGF0ZW1lbnQpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudCA9IHVucXVhbGlmaWVkU3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXRVbnF1YWxpZmllZFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHsgcmV0dXJuIHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7IH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7IHJldHVybiB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0YXRlbWVudCgpOyB9XG5cbiAgcmVzb2x2ZUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCByZXNvbHZlZEluZGVwZW5kZW50bHk7XG5cbiAgICBjb25zdCBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KHRoaXMuZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gbG9jYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBwcmVtaXNlID0gdGhpcywgLy8vXG4gICAgICAgICAgcHJlbWlzZVN0cmluZyA9IHByZW1pc2UuZ2V0U3RyaW5nKCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFJlc29sdmluZyB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UgaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnRSZXNvbHZlZEluZGVwZW5kZW50bHkgPSB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LnJlc29sdmVJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgcmVzb2x2ZWRJbmRlcGVuZGVudGx5ID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRSZXNvbHZlZEluZGVwZW5kZW50bHk7ICAvLy9cblxuICAgIGlmIChyZXNvbHZlZEluZGVwZW5kZW50bHkpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgLi4ucmVzb2x2ZWQgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlIGluZGVwZW5kZW50bHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc29sdmVkSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHVuaWZ5UHJvb2ZTdGVwKHByb29mU3RlcCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBwcm9vZlN0ZXBVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdWJwcm9vZiA9IHByb29mU3RlcC5nZXRTdWJwcm9vZigpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHByb29mU3RlcC5nZXRTdGF0ZW1lbnQoKTtcblxuICAgIHN1YnN0aXR1dGlvbnMuc25hcHNob3QoKTtcblxuICAgIGxldCBzdWJwcm9vZlVuaWZpZWQgPSBmYWxzZSxcbiAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IGZhbHNlO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICBzdWJwcm9vZlVuaWZpZWQgPSB0aGlzLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmIChzdWJwcm9vZlVuaWZpZWQgfHwgc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgY29uc3QgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dCh0aGlzLmZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gbG9jYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgICAgc3Vic3RpdHV0aW9ucy5yZXNvbHZlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBwcm9vZlN0ZXBVbmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcm9vZlN0ZXBVbmlmaWVkID9cbiAgICAgIHN1YnN0aXR1dGlvbnMuY29udGludWUoKSA6XG4gICAgICAgIHN1YnN0aXR1dGlvbnMucm9sbGJhY2soY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkO1xuXG4gICAgY29uc3QgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dCh0aGlzLmZpbGVDb250ZXh0KSxcbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGxvY2FsQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29uc3QgcHJlbWlzZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHByZW1pc2VTdHJpbmcgPSBwcmVtaXNlLmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS4uLmApO1xuXG4gICAgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcmVtaXNlID0gdGhpcywgLy8vXG4gICAgICAgICAgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwcmVtaXNlU3RhdGVtZW50ID0gcHJlbWlzZS5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBwcmVtaXNlU3RhdGVtZW50U3RyaW5nID0gcHJlbWlzZVN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50VG9rZW5zID0gc3RhdGVtZW50LmdldFRva2VucygpLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmZpbGVDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IHRva2VucyA9IHN0YXRlbWVudFRva2VucywgLy8vXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21Db250ZXh0QW5kVG9rZW5zKGNvbnRleHQsIHRva2VucyksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBsb2NhbENvbnRleHQ7IC8vL1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSBwcmVtaXNlJ3MgJyR7cHJlbWlzZVN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb24gPSBTdWJwcm9vZkFzc2VydGlvbi5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgc3VicHJvb2ZVbmlmaWVkID0gc3VicHJvb2ZBc3NlcnRpb24udW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mVW5pZmllZCkge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlIHByZW1pc2UncyAnJHtwcmVtaXNlU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJlbWlzZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmICh1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBhc3NpZ25tZW50c0Fzc2lnbmVkID0gYXNzaWduQXNzaWdubWVudHMoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoYXNzaWdubWVudHNBc3NpZ25lZCkge1xuICAgICAgICBjb25zdCB7IFByb29mU3RlcCB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgcHJvb2ZTdGVwID0gUHJvb2ZTdGVwLmZyb21VbnF1YWxpZmllZFN0YXRlbWVudCh0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50KTtcblxuICAgICAgICBjb250ZXh0LmFkZFByb29mU3RlcChwcm9vZlN0ZXApO1xuXG4gICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnRKU09OID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRUb1VucXVhbGlmaWVkU3RhdGVtZW50SlNPTih0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50KSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudCA9IHVucXVhbGlmaWVkU3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50ID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJlbWlzZSA9IG5ldyBQcmVtaXNlKGZpbGVDb250ZXh0LCB1bnF1YWxpZmllZFN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJlbWlzZU5vZGUoc3VwcG9zaXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgVW5xdWFsaWZpZWRTdGF0ZW1lbnQgfSA9IHNoaW0sXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkoc3VwcG9zaXRpb25Ob2RlKSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudCA9IFVucXVhbGlmaWVkU3RhdGVtZW50LmZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJlbWlzZSA9IG5ldyBQcmVtaXNlKGZpbGVDb250ZXh0LCB1bnF1YWxpZmllZFN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZVxuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBQcmVtaXNlXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgUHJlbWlzZTtcbiJdLCJuYW1lcyI6WyJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIlByZW1pc2UiLCJmaWxlQ29udGV4dCIsInVucXVhbGlmaWVkU3RhdGVtZW50IiwiZ2V0RmlsZUNvbnRleHQiLCJnZXRVbnF1YWxpZmllZFN0YXRlbWVudCIsImdldFN0cmluZyIsImdldFN0YXRlbWVudCIsInJlc29sdmVJbmRlcGVuZGVudGx5Iiwic3Vic3RpdHV0aW9ucyIsImNvbnRleHQiLCJyZXNvbHZlZEluZGVwZW5kZW50bHkiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInByZW1pc2UiLCJwcmVtaXNlU3RyaW5nIiwidHJhY2UiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFJlc29sdmVkSW5kZXBlbmRlbnRseSIsInVuaWZ5UHJvb2ZTdGVwIiwicHJvb2ZTdGVwIiwicHJvb2ZTdGVwVW5pZmllZCIsInN1YnByb29mIiwiZ2V0U3VicHJvb2YiLCJzdGF0ZW1lbnQiLCJzbmFwc2hvdCIsInN1YnByb29mVW5pZmllZCIsInN0YXRlbWVudFVuaWZpZWQiLCJ1bmlmeVN1YnByb29mIiwidW5pZnlTdGF0ZW1lbnQiLCJyZXNvbHZlIiwiY29udGludWUiLCJyb2xsYmFjayIsInN0YXRlbWVudFN0cmluZyIsImRlYnVnIiwic3VicHJvb2ZTdHJpbmciLCJwcmVtaXNlU3RhdGVtZW50IiwicHJlbWlzZVN0YXRlbWVudFN0cmluZyIsInN0YXRlbWVudE5vZGUiLCJnZXROb2RlIiwic3RhdGVtZW50VG9rZW5zIiwiZ2V0VG9rZW5zIiwidG9rZW5zIiwiZnJvbUNvbnRleHRBbmRUb2tlbnMiLCJzdWJwcm9vZkFzc2VydGlvbiIsIlN1YnByb29mQXNzZXJ0aW9uIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsInN0YXRlZCIsImFzc2lnbm1lbnRzIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCIsImFzc2lnbm1lbnRzQXNzaWduZWQiLCJhc3NpZ25Bc3NpZ25tZW50cyIsIlByb29mU3RlcCIsInNoaW0iLCJmcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJhZGRQcm9vZlN0ZXAiLCJ0b0pTT04iLCJ1bnF1YWxpZmllZFN0YXRlbWVudEpTT04iLCJ1bnF1YWxpZmllZFN0YXRlbWVudFRvVW5xdWFsaWZpZWRTdGF0ZW1lbnRKU09OIiwianNvbiIsImZyb21KU09OIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRGcm9tSlNPTiIsImZyb21QcmVtaXNlTm9kZSIsInN1cHBvc2l0aW9uTm9kZSIsIlVucXVhbGlmaWVkU3RhdGVtZW50IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBK01B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