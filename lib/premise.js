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
                var localContext = _local.default.fromFileContext(this.fileContext), generalContext = localContext, specificContext = context; ///
                var subproof = proofStep.getSubproof(), statement = proofStep.getStatement();
                substitutions.snapshot();
                var subproofUnified = false, statementUnified = false;
                if (false) {
                ///
                } else if (subproof !== null) {
                    subproofUnified = this.unifySubproof(subproof, substitutions, generalContext, specificContext);
                } else if (statement !== null) {
                    statementUnified = this.unifyStatement(statement, substitutions, generalContext, specificContext);
                }
                if (subproofUnified || statementUnified) {
                    var localContext1 = _local.default.fromFileContext(this.fileContext), generalContext1 = localContext1, specificContext1 = context; ///
                    substitutions.resolve(generalContext1, specificContext1);
                    proofStepUnified = true;
                }
                proofStepUnified ? substitutions.continue() : substitutions.rollback(context);
                return proofStepUnified;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, generalContext, specificContext) {
                var statementUnified;
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
            value: function unifySubproof(subproof, substitutions, generalContext, specificContext) {
                var subproofUnified = false;
                var premise = this, subproofString = subproof.getString(), premiseStatement = premise.getStatement(), premiseStatementString = premiseStatement.getString();
                var statement = this.unqualifiedStatement.getStatement(), statementNode = statement.getNode();
                specificContext.trace("Unifying the '".concat(subproofString, "' subproof with the premise's '").concat(premiseStatementString, "' statement..."));
                var context = specificContext, subproofAssertion = _subproof.default.fromStatementNode(statementNode, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmVtaXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi9zaGltXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBTdWJwcm9vZkFzc2VydGlvbiBmcm9tIFwiLi9hc3NlcnRpb24vc3VicHJvb2ZcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBhc3NpZ25Bc3NpZ25tZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9hc3NpZ25tZW50c1wiO1xuaW1wb3J0IHsgdW5xdWFsaWZpZWRTdGF0ZW1lbnRGcm9tSlNPTiwgdW5xdWFsaWZpZWRTdGF0ZW1lbnRUb1VucXVhbGlmaWVkU3RhdGVtZW50SlNPTiB9IGZyb20gXCIuL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgbG9jYWwgZnJvbSBcIi4vY29udGV4dC9sb2NhbFwiO1xuXG5jb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcmVtaXNlL3VucXVhbGlmaWVkU3RhdGVtZW50XCIpO1xuXG5jbGFzcyBQcmVtaXNlIHtcbiAgY29uc3RydWN0b3IoZmlsZUNvbnRleHQsIHVucXVhbGlmaWVkU3RhdGVtZW50KSB7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICAgIHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSB1bnF1YWxpZmllZFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0VW5xdWFsaWZpZWRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7IHJldHVybiB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0cmluZygpOyB9XG5cbiAgZ2V0U3RhdGVtZW50KCkgeyByZXR1cm4gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudC5nZXRTdGF0ZW1lbnQoKTsgfVxuXG4gIHJlc29sdmVJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgcmVzb2x2ZWRJbmRlcGVuZGVudGx5O1xuXG4gICAgY29uc3QgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dCh0aGlzLmZpbGVDb250ZXh0KSxcbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGxvY2FsQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29uc3QgcHJlbWlzZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHByZW1pc2VTdHJpbmcgPSBwcmVtaXNlLmdldFN0cmluZygpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBSZXNvbHZpbmcgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlIGluZGVwZW5kZW50bHkuLi5gKTtcblxuICAgIGNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50UmVzb2x2ZWRJbmRlcGVuZGVudGx5ID0gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudC5yZXNvbHZlSW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHJlc29sdmVkSW5kZXBlbmRlbnRseSA9IHVucXVhbGlmaWVkU3RhdGVtZW50UmVzb2x2ZWRJbmRlcGVuZGVudGx5OyAgLy8vXG5cbiAgICBpZiAocmVzb2x2ZWRJbmRlcGVuZGVudGx5KSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYC4uLnJlc29sdmVkIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZSBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXNvbHZlZEluZGVwZW5kZW50bHk7XG4gIH1cblxuICB1bmlmeVByb29mU3RlcChwcm9vZlN0ZXAsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZTdGVwVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dCh0aGlzLmZpbGVDb250ZXh0KSxcbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGxvY2FsQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29uc3Qgc3VicHJvb2YgPSBwcm9vZlN0ZXAuZ2V0U3VicHJvb2YoKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBwcm9vZlN0ZXAuZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBzdWJzdGl0dXRpb25zLnNuYXBzaG90KCk7XG5cbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVkID0gZmFsc2UsXG4gICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChzdWJwcm9vZiAhPT0gbnVsbCkge1xuICAgICAgc3VicHJvb2ZVbmlmaWVkID0gdGhpcy51bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZVbmlmaWVkIHx8IHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQodGhpcy5maWxlQ29udGV4dCksXG4gICAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGxvY2FsQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICAgIHN1YnN0aXR1dGlvbnMucmVzb2x2ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgcHJvb2ZTdGVwVW5pZmllZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJvb2ZTdGVwVW5pZmllZCA/XG4gICAgICBzdWJzdGl0dXRpb25zLmNvbnRpbnVlKCkgOlxuICAgICAgICBzdWJzdGl0dXRpb25zLnJvbGxiYWNrKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByb29mU3RlcFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IHByZW1pc2UgPSB0aGlzLCAvLy9cbiAgICAgICAgICBwcmVtaXNlU3RyaW5nID0gcHJlbWlzZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuLi5gKTtcblxuICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJlbWlzZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcHJlbWlzZVN0YXRlbWVudCA9IHByZW1pc2UuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgcHJlbWlzZVN0YXRlbWVudFN0cmluZyA9IHByZW1pc2VTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSBwcmVtaXNlJ3MgJyR7cHJlbWlzZVN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gU3VicHJvb2ZBc3NlcnRpb24uZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIHN1YnByb29mVW5pZmllZCA9IHN1YnByb29mQXNzZXJ0aW9uLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgIH1cblxuICAgIGlmIChzdWJwcm9vZlVuaWZpZWQpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSBwcmVtaXNlJ3MgJyR7cHJlbWlzZVN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZVbmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByZW1pc2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAodW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgY29uc3QgYXNzaWdubWVudHNBc3NpZ25lZCA9IGFzc2lnbkFzc2lnbm1lbnRzKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGFzc2lnbm1lbnRzQXNzaWduZWQpIHtcbiAgICAgICAgY29uc3QgeyBQcm9vZlN0ZXAgfSA9IHNoaW0sXG4gICAgICAgICAgICAgIHByb29mU3RlcCA9IFByb29mU3RlcC5mcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnQodGhpcy51bnF1YWxpZmllZFN0YXRlbWVudCk7XG5cbiAgICAgICAgY29udGV4dC5hZGRQcm9vZlN0ZXAocHJvb2ZTdGVwKTtcblxuICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50SlNPTiA9IHVucXVhbGlmaWVkU3RhdGVtZW50VG9VbnF1YWxpZmllZFN0YXRlbWVudEpTT04odGhpcy51bnF1YWxpZmllZFN0YXRlbWVudCksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSB1bnF1YWxpZmllZFN0YXRlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudCA9IHVucXVhbGlmaWVkU3RhdGVtZW50RnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHByZW1pc2UgPSBuZXcgUHJlbWlzZShmaWxlQ29udGV4dCwgdW5xdWFsaWZpZWRTdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIHByZW1pc2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByZW1pc2VOb2RlKHN1cHBvc2l0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IFVucXVhbGlmaWVkU3RhdGVtZW50IH0gPSBzaGltLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5KHN1cHBvc2l0aW9uTm9kZSksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSBVbnF1YWxpZmllZFN0YXRlbWVudC5mcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHByZW1pc2UgPSBuZXcgUHJlbWlzZShmaWxlQ29udGV4dCwgdW5xdWFsaWZpZWRTdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIHByZW1pc2VcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgUHJlbWlzZVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFByZW1pc2U7XG4iXSwibmFtZXMiOlsidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJQcmVtaXNlIiwiZmlsZUNvbnRleHQiLCJ1bnF1YWxpZmllZFN0YXRlbWVudCIsImdldEZpbGVDb250ZXh0IiwiZ2V0VW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJnZXRTdHJpbmciLCJnZXRTdGF0ZW1lbnQiLCJyZXNvbHZlSW5kZXBlbmRlbnRseSIsInN1YnN0aXR1dGlvbnMiLCJjb250ZXh0IiwicmVzb2x2ZWRJbmRlcGVuZGVudGx5IiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJwcmVtaXNlIiwicHJlbWlzZVN0cmluZyIsInRyYWNlIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRSZXNvbHZlZEluZGVwZW5kZW50bHkiLCJ1bmlmeVByb29mU3RlcCIsInByb29mU3RlcCIsInByb29mU3RlcFVuaWZpZWQiLCJzdWJwcm9vZiIsImdldFN1YnByb29mIiwic3RhdGVtZW50Iiwic25hcHNob3QiLCJzdWJwcm9vZlVuaWZpZWQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwidW5pZnlTdWJwcm9vZiIsInVuaWZ5U3RhdGVtZW50IiwicmVzb2x2ZSIsImNvbnRpbnVlIiwicm9sbGJhY2siLCJzdGF0ZW1lbnRTdHJpbmciLCJkZWJ1ZyIsInN1YnByb29mU3RyaW5nIiwicHJlbWlzZVN0YXRlbWVudCIsInByZW1pc2VTdGF0ZW1lbnRTdHJpbmciLCJzdGF0ZW1lbnROb2RlIiwiZ2V0Tm9kZSIsInN1YnByb29mQXNzZXJ0aW9uIiwiU3VicHJvb2ZBc3NlcnRpb24iLCJmcm9tU3RhdGVtZW50Tm9kZSIsInZlcmlmeSIsInZlcmlmaWVkIiwic3RhdGVkIiwiYXNzaWdubWVudHMiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkIiwiYXNzaWdubWVudHNBc3NpZ25lZCIsImFzc2lnbkFzc2lnbm1lbnRzIiwiUHJvb2ZTdGVwIiwic2hpbSIsImZyb21VbnF1YWxpZmllZFN0YXRlbWVudCIsImFkZFByb29mU3RlcCIsInRvSlNPTiIsInVucXVhbGlmaWVkU3RhdGVtZW50SlNPTiIsInVucXVhbGlmaWVkU3RhdGVtZW50VG9VbnF1YWxpZmllZFN0YXRlbWVudEpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJ1bnF1YWxpZmllZFN0YXRlbWVudEZyb21KU09OIiwiZnJvbVByZW1pc2VOb2RlIiwic3VwcG9zaXRpb25Ob2RlIiwiVW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJmcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF5TUE7OztlQUFBOzs7MkRBdk1pQjs0REFDUTsrREFDSztxQkFFSjsyQkFDUTtvQkFDMkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHN0YsSUFBTUEsZ0NBQWdDQyxJQUFBQSxnQkFBUyxFQUFDO0FBRWhELElBQUEsQUFBTUMsd0JBQU47YUFBTUEsUUFDUUMsV0FBVyxFQUFFQyxvQkFBb0I7Z0NBRHpDRjtRQUVGLElBQUksQ0FB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