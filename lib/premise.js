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
                var statement = this.unqualifiedStatement.getStatement(), subproofAssertion = _subproof.default.fromStatement(statement, this.fileContext);
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
                var unqualifiedStatementJSON = this.unqualifiedStatement.toJSON(), unqualifiedStatement = unqualifiedStatementJSON, json = {
                    unqualifiedStatement: unqualifiedStatement
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var unqualifiedStatement = json.unqualifiedStatement;
                json = unqualifiedStatement; ///
                unqualifiedStatement = _unqualified.default.fromJSON(json, fileContext);
                var premise = new Premise(fileContext, unqualifiedStatement);
                return premise;
            }
        },
        {
            key: "fromSuppositionNode",
            value: function fromSuppositionNode(suppositionNode, fileContext) {
                var unqualifiedStatementNode = unqualifiedStatementNodeQuery(suppositionNode), unqualifiedStatement = _unqualified.default.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext), premise = new Premise(fileContext, unqualifiedStatement);
                return premise;
            }
        }
    ]);
    return Premise;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmVtaXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi9zaGltXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBtZXRhTGV2ZWxVbmlmaWVyIGZyb20gXCIuL3VuaWZpZXIvbWV0YUxldmVsXCI7XG5pbXBvcnQgU3VicHJvb2ZBc3NlcnRpb24gZnJvbSBcIi4vYXNzZXJ0aW9uL3N1YnByb29mXCI7XG5pbXBvcnQgVW5xdWFsaWZpZWRTdGF0ZW1lbnQgZnJvbSBcIi4vc3RhdGVtZW50L3VucXVhbGlmaWVkXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgYXNzaWduQXNzaWdubWVudHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXNzaWdubWVudHNcIjtcblxuY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJlbWlzZS91bnF1YWxpZmllZFN0YXRlbWVudFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbWlzZSB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCB1bnF1YWxpZmllZFN0YXRlbWVudCkge1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgICB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50ID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldFVucXVhbGlmaWVkU3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkgeyByZXR1cm4gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudC5nZXRTdHJpbmcoKTsgfVxuXG4gIGdldFN0YXRlbWVudCgpIHsgcmV0dXJuIHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQuZ2V0U3RhdGVtZW50KCk7IH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcmVtaXNlID0gdGhpcywgLy8vXG4gICAgICAgICAgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwcmVtaXNlU3RhdGVtZW50ID0gcHJlbWlzZS5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBwcmVtaXNlU3RhdGVtZW50U3RyaW5nID0gcHJlbWlzZVN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgcHJlbWlzZSdzICcke3ByZW1pc2VTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBTdWJwcm9vZkFzc2VydGlvbi5mcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgdGhpcy5maWxlQ29udGV4dCk7XG5cbiAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIHN1YnByb29mVW5pZmllZCA9IHN1YnByb29mQXNzZXJ0aW9uLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIHRoaXMuZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mVW5pZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlIHByZW1pc2UncyAnJHtwcmVtaXNlU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVByb29mU3RlcChwcm9vZlN0ZXAsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBwcm9vZlN0ZXBVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdWJwcm9vZiA9IHByb29mU3RlcC5nZXRTdWJwcm9vZigpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHByb29mU3RlcC5nZXRTdGF0ZW1lbnQoKTtcblxuICAgIHN1YnN0aXR1dGlvbnMuc25hcHNob3QoKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChzdWJwcm9vZiAhPT0gbnVsbCkge1xuICAgICAgcHJvb2ZTdGVwVW5pZmllZCA9IHRoaXMudW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgcHJvb2ZTdGVwVW5pZmllZCA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpO1xuICAgIH1cblxuICAgIHByb29mU3RlcFVuaWZpZWQgP1xuICAgICAgc3Vic3RpdHV0aW9ucy5jb250aW51ZSgpIDpcbiAgICAgICAgc3Vic3RpdHV0aW9ucy5yb2xsYmFjayhsb2NhbENvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByb29mU3RlcFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkO1xuXG4gICAgY29uc3QgcHJlbWlzZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwcmVtaXNlU3RhdGVtZW50ID0gcHJlbWlzZS5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBwcmVtaXNlU3RhdGVtZW50U3RyaW5nID0gcHJlbWlzZVN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSBwcmVtaXNlJ3MgJyR7cHJlbWlzZVN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgcHJlbWlzZVN0YXRlbWVudE5vZGUgPSBwcmVtaXNlU3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBub2RlQSA9IHByZW1pc2VTdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgbm9kZUIgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgZmlsZUNvbnRleHRBID0gdGhpcy5maWxlQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGxvY2FsQ29udGV4dEEgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0QSksXG4gICAgICAgICAgbG9jYWxDb250ZXh0QiA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgdW5pZmllZCA9IG1ldGFMZXZlbFVuaWZpZXIudW5pZnkobm9kZUEsIG5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgIHN0YXRlbWVudFVuaWZpZWQgPSB1bmlmaWVkOyAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSBwcmVtaXNlJ3MgJyR7cHJlbWlzZVN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeShsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByZW1pc2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGlmICh0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuLi5gKTtcblxuICAgICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgYXNzaWdubWVudHNBc3NpZ25lZCA9IGFzc2lnbkFzc2lnbm1lbnRzKGFzc2lnbm1lbnRzLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIGlmIChhc3NpZ25tZW50c0Fzc2lnbmVkKSB7XG4gICAgICAgICAgY29uc3QgeyBQcm9vZlN0ZXAgfSA9IHNoaW0sXG4gICAgICAgICAgICAgICAgcHJvb2ZTdGVwID0gUHJvb2ZTdGVwLmZyb21VbnF1YWxpZmllZFN0YXRlbWVudCh0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50KTtcblxuICAgICAgICAgIGxvY2FsQ29udGV4dC5hZGRQcm9vZlN0ZXAocHJvb2ZTdGVwKTtcblxuICAgICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlIGNhbm5vdCBiZSB2ZXJpZmllZCBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudEpTT04gPSB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LnRvSlNPTigpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50ID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHsgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgfSA9IGpzb247XG5cbiAgICBqc29uID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnQ7ICAvLy9cblxuICAgIHVucXVhbGlmaWVkU3RhdGVtZW50ID0gVW5xdWFsaWZpZWRTdGF0ZW1lbnQuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgY29uc3QgcHJlbWlzZSA9IG5ldyBQcmVtaXNlKGZpbGVDb250ZXh0LCB1bnF1YWxpZmllZFN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeShzdXBwb3NpdGlvbk5vZGUpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50ID0gVW5xdWFsaWZpZWRTdGF0ZW1lbnQuZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBwcmVtaXNlID0gbmV3IFByZW1pc2UoZmlsZUNvbnRleHQsIHVucXVhbGlmaWVkU3RhdGVtZW50KTtcblxuICAgIHJldHVybiBwcmVtaXNlXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQcmVtaXNlIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJmaWxlQ29udGV4dCIsInVucXVhbGlmaWVkU3RhdGVtZW50IiwiZ2V0RmlsZUNvbnRleHQiLCJnZXRVbnF1YWxpZmllZFN0YXRlbWVudCIsImdldFN0cmluZyIsImdldFN0YXRlbWVudCIsInVuaWZ5U3VicHJvb2YiLCJzdWJwcm9vZiIsInN1YnN0aXR1dGlvbnMiLCJsb2NhbENvbnRleHQiLCJzdWJwcm9vZlVuaWZpZWQiLCJwcmVtaXNlIiwic3VicHJvb2ZTdHJpbmciLCJwcmVtaXNlU3RhdGVtZW50IiwicHJlbWlzZVN0YXRlbWVudFN0cmluZyIsInRyYWNlIiwic3RhdGVtZW50Iiwic3VicHJvb2ZBc3NlcnRpb24iLCJTdWJwcm9vZkFzc2VydGlvbiIsImZyb21TdGF0ZW1lbnQiLCJkZWJ1ZyIsInVuaWZ5UHJvb2ZTdGVwIiwicHJvb2ZTdGVwIiwicHJvb2ZTdGVwVW5pZmllZCIsImdldFN1YnByb29mIiwic25hcHNob3QiLCJ1bmlmeVN0YXRlbWVudCIsImNvbnRpbnVlIiwicm9sbGJhY2siLCJzdGF0ZW1lbnRVbmlmaWVkIiwic3RhdGVtZW50U3RyaW5nIiwic3RhdGVtZW50Tm9kZSIsImdldE5vZGUiLCJwcmVtaXNlU3RhdGVtZW50Tm9kZSIsIm5vZGVBIiwibm9kZUIiLCJmaWxlQ29udGV4dEEiLCJsb2NhbENvbnRleHRBIiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwibG9jYWxDb250ZXh0QiIsInVuaWZpZWQiLCJtZXRhTGV2ZWxVbmlmaWVyIiwidW5pZnkiLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsInByZW1pc2VTdHJpbmciLCJzdGF0ZWQiLCJhc3NpZ25tZW50cyIsInVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQiLCJhc3NpZ25tZW50c0Fzc2lnbmVkIiwiYXNzaWduQXNzaWdubWVudHMiLCJQcm9vZlN0ZXAiLCJzaGltIiwiZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50IiwiYWRkUHJvb2ZTdGVwIiwidG9KU09OIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRKU09OIiwianNvbiIsImZyb21KU09OIiwiVW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJmcm9tU3VwcG9zaXRpb25Ob2RlIiwic3VwcG9zaXRpb25Ob2RlIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFhcUJBOzs7MkRBWEo7NERBQ1E7Z0VBQ0k7K0RBQ0M7a0VBQ0c7cUJBRVA7MkJBQ1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEMsSUFBTUMsZ0NBQWdDQyxJQUFBQSxnQkFBUyxFQUFDO0FBRWpDLElBQUEsQUFBTUYsd0JBQU47YUFBTUEsUUFDUEcsV0FBVyxFQUFFQyxvQkFBb0I7Z0NBRDFCSjtRQUVqQixJQUFJLENBQUNHLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxvQkFBb0IsR0FBR0E7O2tCQUhYSjs7WUFNbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsV0FBVztZQUN6Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFD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