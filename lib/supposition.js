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
var unqualifiedStatementNodeQuery = (0, _query.nodeQuery)("/supposition/unqualifiedStatement");
var Supposition = /*#__PURE__*/ function() {
    function Supposition(fileContext, unqualifiedStatement) {
        _class_call_check(this, Supposition);
        this.fileContext = fileContext;
        this.unqualifiedStatement = unqualifiedStatement;
    }
    _create_class(Supposition, [
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
                var supposition = this, suppositionString = supposition.getString();
                specificContext.trace("Resolving the '".concat(suppositionString, "' supposition independently..."));
                var unqualifiedStatementResolvedIndependently = this.unqualifiedStatement.resolveIndependently(substitutions, generalContext, specificContext);
                resolvedIndependently = unqualifiedStatementResolvedIndependently; ///
                if (resolvedIndependently) {
                    specificContext.trace("...resolved the '".concat(suppositionString, "' supposition independently."));
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
                var supposition = this, suppositionString = supposition.getString(), statementString = statement.getString();
                specificContext.trace("Unifying the '".concat(statementString, "' statement with the '").concat(suppositionString, "' supposition..."));
                statementUnified = this.unqualifiedStatement.unifyStatement(statement, substitutions, generalContext, specificContext);
                if (statementUnified) {
                    specificContext.debug("...unified the '".concat(statementString, "' statement with the '").concat(suppositionString, "' supposition."));
                }
                return statementUnified;
            }
        },
        {
            key: "unifySubproof",
            value: function unifySubproof(subproof, substitutions, generalContext, specificContext) {
                var subproofUnified = false;
                var supposition = this, subproofString = subproof.getString(), suppositionStatement = supposition.getStatement(), suppositionStatementString = suppositionStatement.getString();
                var statement = this.unqualifiedStatement.getStatement(), statementNode = statement.getNode();
                specificContext.trace("Unifying the '".concat(subproofString, "' subproof with the supposition's '").concat(suppositionStatementString, "' statement..."));
                var context = specificContext, subproofAssertion = _subproof.default.fromStatementNode(statementNode, context);
                if (subproofAssertion !== null) {
                    subproofUnified = subproofAssertion.unifySubproof(subproof, substitutions, generalContext, specificContext);
                }
                if (subproofUnified) {
                    specificContext.debug("...unified the '".concat(subproofString, "' subproof with the supposition's '").concat(suppositionStatementString, "' statement."));
                }
                return subproofUnified;
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                var verified = false;
                var suppositionString = this.getString(); ///
                context.trace("Verifying the '".concat(suppositionString, "' supposition..."));
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
                    context.debug("...verified the '".concat(suppositionString, "' supposition."));
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
                var unqualifiedStatement = (0, _json.unqualifiedStatementFromJSON)(json, fileContext), supposition = new Supposition(fileContext, unqualifiedStatement);
                return supposition;
            }
        },
        {
            key: "fromSuppositionNode",
            value: function fromSuppositionNode(suppositionNode, fileContext) {
                var UnqualifiedStatement = _shim.default.UnqualifiedStatement, unqualifiedStatementNode = unqualifiedStatementNodeQuery(suppositionNode), unqualifiedStatement = UnqualifiedStatement.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext), supposition = new Supposition(fileContext, unqualifiedStatement);
                return supposition;
            }
        }
    ]);
    return Supposition;
}();
Object.assign(_shim.default, {
    Supposition: Supposition
});
var _default = Supposition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdXBwb3NpdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgU3VicHJvb2ZBc3NlcnRpb24gZnJvbSBcIi4vYXNzZXJ0aW9uL3N1YnByb29mXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgYXNzaWduQXNzaWdubWVudHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXNzaWdubWVudHNcIjtcbmltcG9ydCB7IHVucXVhbGlmaWVkU3RhdGVtZW50RnJvbUpTT04sIHVucXVhbGlmaWVkU3RhdGVtZW50VG9VbnF1YWxpZmllZFN0YXRlbWVudEpTT04gfSBmcm9tIFwiLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdXBwb3NpdGlvbi91bnF1YWxpZmllZFN0YXRlbWVudFwiKTtcblxuY2xhc3MgU3VwcG9zaXRpb24ge1xuICBjb25zdHJ1Y3RvcihmaWxlQ29udGV4dCwgdW5xdWFsaWZpZWRTdGF0ZW1lbnQpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudCA9IHVucXVhbGlmaWVkU3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXRVbnF1YWxpZmllZFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHsgcmV0dXJuIHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7IH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7IHJldHVybiB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0YXRlbWVudCgpOyB9XG5cbiAgcmVzb2x2ZUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCByZXNvbHZlZEluZGVwZW5kZW50bHk7XG5cbiAgICBjb25zdCBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KHRoaXMuZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gbG9jYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbiA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9uU3RyaW5nID0gc3VwcG9zaXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFJlc29sdmluZyB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiBpbmRlcGVuZGVudGx5Li4uYCk7XG5cbiAgICBjb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudFJlc29sdmVkSW5kZXBlbmRlbnRseSA9IHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQucmVzb2x2ZUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICByZXNvbHZlZEluZGVwZW5kZW50bHkgPSB1bnF1YWxpZmllZFN0YXRlbWVudFJlc29sdmVkSW5kZXBlbmRlbnRseTsgIC8vL1xuXG4gICAgaWYgKHJlc29sdmVkSW5kZXBlbmRlbnRseSkge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGAuLi5yZXNvbHZlZCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXNvbHZlZEluZGVwZW5kZW50bHk7XG4gIH1cblxuICB1bmlmeVByb29mU3RlcChwcm9vZlN0ZXAsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZTdGVwVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dCh0aGlzLmZpbGVDb250ZXh0KSxcbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGxvY2FsQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29uc3Qgc3VicHJvb2YgPSBwcm9vZlN0ZXAuZ2V0U3VicHJvb2YoKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBwcm9vZlN0ZXAuZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBzdWJzdGl0dXRpb25zLnNuYXBzaG90KCk7XG5cbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVkID0gZmFsc2UsXG4gICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChzdWJwcm9vZiAhPT0gbnVsbCkge1xuICAgICAgc3VicHJvb2ZVbmlmaWVkID0gdGhpcy51bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZVbmlmaWVkIHx8IHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQodGhpcy5maWxlQ29udGV4dCksXG4gICAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGxvY2FsQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICAgIHN1YnN0aXR1dGlvbnMucmVzb2x2ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgcHJvb2ZTdGVwVW5pZmllZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJvb2ZTdGVwVW5pZmllZCA/XG4gICAgICBzdWJzdGl0dXRpb25zLmNvbnRpbnVlKCkgOlxuICAgICAgICBzdWJzdGl0dXRpb25zLnJvbGxiYWNrKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByb29mU3RlcFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gdGhpcywgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25TdHJpbmcgPSBzdXBwb3NpdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZlVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gdGhpcywgLy8vXG4gICAgICAgICAgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvblN0YXRlbWVudCA9IHN1cHBvc2l0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uU3RhdGVtZW50U3RyaW5nID0gc3VwcG9zaXRpb25TdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSBzdXBwb3NpdGlvbidzICcke3N1cHBvc2l0aW9uU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBTdWJwcm9vZkFzc2VydGlvbi5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgc3VicHJvb2ZVbmlmaWVkID0gc3VicHJvb2ZBc3NlcnRpb24udW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mVW5pZmllZCkge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlIHN1cHBvc2l0aW9uJ3MgJyR7c3VwcG9zaXRpb25TdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgIGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGFzc2lnbm1lbnRzQXNzaWduZWQgPSBhc3NpZ25Bc3NpZ25tZW50cyhhc3NpZ25tZW50cywgY29udGV4dCk7XG5cbiAgICAgIGlmIChhc3NpZ25tZW50c0Fzc2lnbmVkKSB7XG4gICAgICAgIGNvbnN0IHsgUHJvb2ZTdGVwIH0gPSBzaGltLFxuICAgICAgICAgICAgICBwcm9vZlN0ZXAgPSBQcm9vZlN0ZXAuZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50KHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQpO1xuXG4gICAgICAgIGNvbnRleHQuYWRkUHJvb2ZTdGVwKHByb29mU3RlcCk7XG5cbiAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50SlNPTiA9IHVucXVhbGlmaWVkU3RhdGVtZW50VG9VbnF1YWxpZmllZFN0YXRlbWVudEpTT04odGhpcy51bnF1YWxpZmllZFN0YXRlbWVudCksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSB1bnF1YWxpZmllZFN0YXRlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudCA9IHVucXVhbGlmaWVkU3RhdGVtZW50RnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uID0gbmV3IFN1cHBvc2l0aW9uKGZpbGVDb250ZXh0LCB1bnF1YWxpZmllZFN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBVbnF1YWxpZmllZFN0YXRlbWVudCB9ID0gc2hpbSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeShzdXBwb3NpdGlvbk5vZGUpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50ID0gVW5xdWFsaWZpZWRTdGF0ZW1lbnQuZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbiA9IG5ldyBTdXBwb3NpdGlvbihmaWxlQ29udGV4dCwgdW5xdWFsaWZpZWRTdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uXG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIFN1cHBvc2l0aW9uXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgU3VwcG9zaXRpb247XG4iXSwibmFtZXMiOlsidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJTdXBwb3NpdGlvbiIsImZpbGVDb250ZXh0IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJnZXRGaWxlQ29udGV4dCIsImdldFVucXVhbGlmaWVkU3RhdGVtZW50IiwiZ2V0U3RyaW5nIiwiZ2V0U3RhdGVtZW50IiwicmVzb2x2ZUluZGVwZW5kZW50bHkiLCJzdWJzdGl0dXRpb25zIiwiY29udGV4dCIsInJlc29sdmVkSW5kZXBlbmRlbnRseSIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblN0cmluZyIsInRyYWNlIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRSZXNvbHZlZEluZGVwZW5kZW50bHkiLCJ1bmlmeVByb29mU3RlcCIsInByb29mU3RlcCIsInByb29mU3RlcFVuaWZpZWQiLCJzdWJwcm9vZiIsImdldFN1YnByb29mIiwic3RhdGVtZW50Iiwic25hcHNob3QiLCJzdWJwcm9vZlVuaWZpZWQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwidW5pZnlTdWJwcm9vZiIsInVuaWZ5U3RhdGVtZW50IiwicmVzb2x2ZSIsImNvbnRpbnVlIiwicm9sbGJhY2siLCJzdGF0ZW1lbnRTdHJpbmciLCJkZWJ1ZyIsInN1YnByb29mU3RyaW5nIiwic3VwcG9zaXRpb25TdGF0ZW1lbnQiLCJzdXBwb3NpdGlvblN0YXRlbWVudFN0cmluZyIsInN0YXRlbWVudE5vZGUiLCJnZXROb2RlIiwic3VicHJvb2ZBc3NlcnRpb24iLCJTdWJwcm9vZkFzc2VydGlvbiIsImZyb21TdGF0ZW1lbnROb2RlIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJzdGF0ZWQiLCJhc3NpZ25tZW50cyIsInVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQiLCJhc3NpZ25tZW50c0Fzc2lnbmVkIiwiYXNzaWduQXNzaWdubWVudHMiLCJQcm9vZlN0ZXAiLCJzaGltIiwiZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50IiwiYWRkUHJvb2ZTdGVwIiwidG9KU09OIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRKU09OIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRUb1VucXVhbGlmaWVkU3RhdGVtZW50SlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInVucXVhbGlmaWVkU3RhdGVtZW50RnJvbUpTT04iLCJmcm9tU3VwcG9zaXRpb25Ob2RlIiwic3VwcG9zaXRpb25Ob2RlIiwiVW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJmcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF3TUE7OztlQUFBOzs7MkRBdE1pQjs0REFDUTsrREFDSztxQkFFSjsyQkFD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