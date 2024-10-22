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
            value: function resolveIndependently(substitutions, localContext) {
                var resolvedIndependently;
                var suppositionString = this.getString();
                var localContextB = localContext; ///
                localContext = _local.default.fromFileContext(this.fileContext);
                var localContextA = localContext; ///
                localContextB.trace("Resolving the '".concat(suppositionString, "' supposition independently..."));
                var unqualifiedStatementResolvedIndependently = this.unqualifiedStatement.resolveIndependently(substitutions, localContextA, localContextB);
                resolvedIndependently = unqualifiedStatementResolvedIndependently; ///
                if (resolvedIndependently) {
                    localContextB.trace("...resolved the '".concat(suppositionString, "' supposition independently."));
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
                var statementString = statement.getString(), suppositionString = this.getString();
                var localContextB = localContext; ///
                localContext = _local.default.fromFileContext(this.fileContext);
                var localContextA = localContext; ///
                localContextB.trace("Unifying the '".concat(statementString, "' statement with the '").concat(suppositionString, "' supposition..."));
                statementUnified = this.unqualifiedStatement.unifyStatement(statement, substitutions, localContextA, localContextB);
                if (statementUnified) {
                    localContextB.debug("...unified the '".concat(statementString, "' statement with the '").concat(suppositionString, "' supposition."));
                }
                return statementUnified;
            }
        },
        {
            key: "unifySubproof",
            value: function unifySubproof(subproof, substitutions, localContext) {
                var subproofUnified = false;
                var supposition = this, subproofString = subproof.getString(), suppositionStatement = supposition.getStatement(), suppositionStatementString = suppositionStatement.getString();
                var localContextB = localContext; ///
                var statement = this.unqualifiedStatement.getStatement(), statementTokens = statement.getTokens(), context = this.fileContext, tokens = statementTokens; ///
                localContext = _local.default.fromContextAndTokens(context, tokens); ///
                var localContextA = localContext; ///
                localContextB.trace("Unifying the '".concat(subproofString, "' subproof with the supposition's '").concat(suppositionStatementString, "' statement..."));
                var statementNode = statement.getNode(), subproofAssertion = _subproof.default.fromStatementNode(statementNode, localContext);
                if (subproofAssertion !== null) {
                    subproofUnified = subproofAssertion.unifySubproof(subproof, substitutions, localContextA, localContextB);
                }
                if (subproofUnified) {
                    localContextB.debug("...unified the '".concat(subproofString, "' subproof with the supposition's '").concat(suppositionStatementString, "' statement."));
                }
                return subproofUnified;
            }
        },
        {
            key: "verify",
            value: function verify(localContext) {
                var verified = false;
                var suppositionString = this.getString(); ///
                localContext.trace("Verifying the '".concat(suppositionString, "' supposition..."));
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
                    localContext.debug("...verified the '".concat(suppositionString, "' supposition."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdXBwb3NpdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgU3VicHJvb2ZBc3NlcnRpb24gZnJvbSBcIi4vYXNzZXJ0aW9uL3N1YnByb29mXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgYXNzaWduQXNzaWdubWVudHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXNzaWdubWVudHNcIjtcbmltcG9ydCB7IHVucXVhbGlmaWVkU3RhdGVtZW50RnJvbUpTT04sIHVucXVhbGlmaWVkU3RhdGVtZW50VG9VbnF1YWxpZmllZFN0YXRlbWVudEpTT04gfSBmcm9tIFwiLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdXBwb3NpdGlvbi91bnF1YWxpZmllZFN0YXRlbWVudFwiKTtcblxuY2xhc3MgU3VwcG9zaXRpb24ge1xuICBjb25zdHJ1Y3RvcihmaWxlQ29udGV4dCwgdW5xdWFsaWZpZWRTdGF0ZW1lbnQpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudCA9IHVucXVhbGlmaWVkU3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXRVbnF1YWxpZmllZFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHsgcmV0dXJuIHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7IH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7IHJldHVybiB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0YXRlbWVudCgpOyB9XG5cbiAgcmVzb2x2ZUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHJlc29sdmVkSW5kZXBlbmRlbnRseTtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnN0IGxvY2FsQ29udGV4dEIgPSBsb2NhbENvbnRleHQ7IC8vL1xuXG4gICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dCh0aGlzLmZpbGVDb250ZXh0KTtcblxuICAgIGNvbnN0IGxvY2FsQ29udGV4dEEgPSBsb2NhbENvbnRleHQ7IC8vL1xuXG4gICAgbG9jYWxDb250ZXh0Qi50cmFjZShgUmVzb2x2aW5nIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIGluZGVwZW5kZW50bHkuLi5gKTtcblxuICAgIGNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50UmVzb2x2ZWRJbmRlcGVuZGVudGx5ID0gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudC5yZXNvbHZlSW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgIHJlc29sdmVkSW5kZXBlbmRlbnRseSA9IHVucXVhbGlmaWVkU3RhdGVtZW50UmVzb2x2ZWRJbmRlcGVuZGVudGx5OyAgLy8vXG5cbiAgICBpZiAocmVzb2x2ZWRJbmRlcGVuZGVudGx5KSB7XG4gICAgICBsb2NhbENvbnRleHRCLnRyYWNlKGAuLi5yZXNvbHZlZCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXNvbHZlZEluZGVwZW5kZW50bHk7XG4gIH1cblxuICB1bmlmeVByb29mU3RlcChwcm9vZlN0ZXAsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBwcm9vZlN0ZXBVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdWJwcm9vZiA9IHByb29mU3RlcC5nZXRTdWJwcm9vZigpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHByb29mU3RlcC5nZXRTdGF0ZW1lbnQoKTtcblxuICAgIHN1YnN0aXR1dGlvbnMuc25hcHNob3QoKTtcblxuICAgIGxldCBzdWJwcm9vZlVuaWZpZWQgPSBmYWxzZSxcbiAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IGZhbHNlO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICBzdWJwcm9vZlVuaWZpZWQgPSB0aGlzLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCk7XG4gICAgfSBlbHNlIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZVbmlmaWVkIHx8IHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIGNvbnN0IGxvY2FsQ29udGV4dEIgPSBsb2NhbENvbnRleHQ7IC8vL1xuXG4gICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KHRoaXMuZmlsZUNvbnRleHQpO1xuXG4gICAgICBjb25zdCBsb2NhbENvbnRleHRBID0gbG9jYWxDb250ZXh0OyAvLy9cblxuICAgICAgc3Vic3RpdHV0aW9ucy5yZXNvbHZlKGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgICBwcm9vZlN0ZXBVbmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcm9vZlN0ZXBVbmlmaWVkID9cbiAgICAgIHN1YnN0aXR1dGlvbnMuY29udGludWUoKSA6XG4gICAgICAgIHN1YnN0aXR1dGlvbnMucm9sbGJhY2sobG9jYWxDb250ZXh0KTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXBVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb25zdCBsb2NhbENvbnRleHRCID0gbG9jYWxDb250ZXh0OyAvLy9cblxuICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQodGhpcy5maWxlQ29udGV4dCk7XG5cbiAgICBjb25zdCBsb2NhbENvbnRleHRBID0gbG9jYWxDb250ZXh0OyAvLy9cblxuICAgIGxvY2FsQ29udGV4dEIudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHRCLmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZlVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gdGhpcywgLy8vXG4gICAgICAgICAgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvblN0YXRlbWVudCA9IHN1cHBvc2l0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uU3RhdGVtZW50U3RyaW5nID0gc3VwcG9zaXRpb25TdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb25zdCBsb2NhbENvbnRleHRCID0gbG9jYWxDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50VG9rZW5zID0gc3RhdGVtZW50LmdldFRva2VucygpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmZpbGVDb250ZXh0LCAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBzdGF0ZW1lbnRUb2tlbnM7IC8vL1xuXG4gICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21Db250ZXh0QW5kVG9rZW5zKGNvbnRleHQsIHRva2Vucyk7ICAvLy9cblxuICAgIGNvbnN0IGxvY2FsQ29udGV4dEEgPSBsb2NhbENvbnRleHQ7IC8vL1xuXG4gICAgbG9jYWxDb250ZXh0Qi50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgc3VwcG9zaXRpb24ncyAnJHtzdXBwb3NpdGlvblN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBTdWJwcm9vZkFzc2VydGlvbi5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBzdWJwcm9vZlVuaWZpZWQgPSBzdWJwcm9vZkFzc2VydGlvbi51bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZVbmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHRCLmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlIHN1cHBvc2l0aW9uJ3MgJyR7c3VwcG9zaXRpb25TdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeShsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGFzc2lnbm1lbnRzQXNzaWduZWQgPSBhc3NpZ25Bc3NpZ25tZW50cyhhc3NpZ25tZW50cywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKGFzc2lnbm1lbnRzQXNzaWduZWQpIHtcbiAgICAgICAgY29uc3QgeyBQcm9vZlN0ZXAgfSA9IHNoaW0sXG4gICAgICAgICAgICAgIHByb29mU3RlcCA9IFByb29mU3RlcC5mcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnQodGhpcy51bnF1YWxpZmllZFN0YXRlbWVudCk7XG5cbiAgICAgICAgbG9jYWxDb250ZXh0LmFkZFByb29mU3RlcChwcm9vZlN0ZXApO1xuXG4gICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50SlNPTiA9IHVucXVhbGlmaWVkU3RhdGVtZW50VG9VbnF1YWxpZmllZFN0YXRlbWVudEpTT04odGhpcy51bnF1YWxpZmllZFN0YXRlbWVudCksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSB1bnF1YWxpZmllZFN0YXRlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudCA9IHVucXVhbGlmaWVkU3RhdGVtZW50RnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uID0gbmV3IFN1cHBvc2l0aW9uKGZpbGVDb250ZXh0LCB1bnF1YWxpZmllZFN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBVbnF1YWxpZmllZFN0YXRlbWVudCB9ID0gc2hpbSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeShzdXBwb3NpdGlvbk5vZGUpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50ID0gVW5xdWFsaWZpZWRTdGF0ZW1lbnQuZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbiA9IG5ldyBTdXBwb3NpdGlvbihmaWxlQ29udGV4dCwgdW5xdWFsaWZpZWRTdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uXG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIFN1cHBvc2l0aW9uXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgU3VwcG9zaXRpb247XG4iXSwibmFtZXMiOlsidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJTdXBwb3NpdGlvbiIsImZpbGVDb250ZXh0IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJnZXRGaWxlQ29udGV4dCIsImdldFVucXVhbGlmaWVkU3RhdGVtZW50IiwiZ2V0U3RyaW5nIiwiZ2V0U3RhdGVtZW50IiwicmVzb2x2ZUluZGVwZW5kZW50bHkiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0IiwicmVzb2x2ZWRJbmRlcGVuZGVudGx5Iiwic3VwcG9zaXRpb25TdHJpbmciLCJsb2NhbENvbnRleHRCIiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwibG9jYWxDb250ZXh0QSIsInRyYWNlIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRSZXNvbHZlZEluZGVwZW5kZW50bHkiLCJ1bmlmeVByb29mU3RlcCIsInByb29mU3RlcCIsInByb29mU3RlcFVuaWZpZWQiLCJzdWJwcm9vZiIsImdldFN1YnByb29mIiwic3RhdGVtZW50Iiwic25hcHNob3QiLCJzdWJwcm9vZlVuaWZpZWQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwidW5pZnlTdWJwcm9vZiIsInVuaWZ5U3RhdGVtZW50IiwicmVzb2x2ZSIsImNvbnRpbnVlIiwicm9sbGJhY2siLCJzdGF0ZW1lbnRTdHJpbmciLCJkZWJ1ZyIsInN1cHBvc2l0aW9uIiwic3VicHJvb2ZTdHJpbmciLCJzdXBwb3NpdGlvblN0YXRlbWVudCIsInN1cHBvc2l0aW9uU3RhdGVtZW50U3RyaW5nIiwic3RhdGVtZW50VG9rZW5zIiwiZ2V0VG9rZW5zIiwiY29udGV4dCIsInRva2VucyIsImZyb21Db250ZXh0QW5kVG9rZW5zIiwic3RhdGVtZW50Tm9kZSIsImdldE5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbiIsIlN1YnByb29mQXNzZXJ0aW9uIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsInN0YXRlZCIsImFzc2lnbm1lbnRzIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCIsImFzc2lnbm1lbnRzQXNzaWduZWQiLCJhc3NpZ25Bc3NpZ25tZW50cyIsIlByb29mU3RlcCIsInNoaW0iLCJmcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJhZGRQcm9vZlN0ZXAiLCJ0b0pTT04iLCJ1bnF1YWxpZmllZFN0YXRlbWVudEpTT04iLCJ1bnF1YWxpZmllZFN0YXRlbWVudFRvVW5xdWFsaWZpZWRTdGF0ZW1lbnRKU09OIiwianNvbiIsImZyb21KU09OIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRGcm9tSlNPTiIsImZyb21TdXBwb3NpdGlvbk5vZGUiLCJzdXBwb3NpdGlvbk5vZGUiLCJVbnF1YWxpZmllZFN0YXRlbWVudCIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsImZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW9OQTs7O2VBQUE7OzsyREFsTmlCOzREQUNROytEQUNLO3FCQUVKOzJCQUNRO29CQUMyRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3RixJQUFNQSxnQ0FBZ0NDLElBQUFBLGdCQUFTLEVBQUM7QUFFaEQsSUFBQSxBQUFNQyw0QkFBTjthQUFNQSxZQUNRQyxXQUFXLEVBQUVDLG9CQUFvQjtnQ0FEekNGO1FBRUYsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0Msb0JBQW9CLEdBQUdBOztrQkFIMUJGOztZQU1KRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFdBQVc7WUFDekI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLG9CQUFvQjtZQUNsQzs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBYyxPQUFPLElBQUksQ0FBQ0gsb0JBQW9CLENBQUNHLFNBQVM7WUFBSTs7O1lBRTVEQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWlCLE9BQU8sSUFBSSxDQUFDSixvQkFBb0IsQ0FBQ0ksWUFBWTtZQUFJOzs7WUFFbEVDLEtBQUFBO21CQUFBQSxTQUFBQSxxQkFBcUJDLGFBQWEsRUFBRUMsWUFBWTtnQkFDOUMsSUFBSUM7Z0JBRUosSUFBTUMsb0JBQW9CLElBQUksQ0FBQ04sU0FBUztnQkFFeEMsSUFBTU8sZ0JBQWdCSCxjQUFjLEdBQUc7Z0JBRXZDQSxlQUFlSSxjQUFZLENBQUNDLGVBQWUsQ0FBQyxJQUFJLENBQUNiLFdBQVc7Z0JBRTVELElBQU1jLGdCQUFnQk4sY0FBYyxHQUFHO2dCQUV2Q0csY0FBY0ksS0FBSyxDQUFDLEFBQUMsa0JBQW1D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