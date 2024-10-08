"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Supposition;
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
var unqualifiedStatementNodeQuery = (0, _query.nodeQuery)("/supposition/unqualifiedStatement");
var Supposition = /*#__PURE__*/ function() {
    function Supposition(fileContext, subproofAssertion, unqualifiedStatement) {
        _class_call_check(this, Supposition);
        this.fileContext = fileContext;
        this.subproofAssertion = subproofAssertion;
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
                var supposition = this, statementString = statement.getString(), suppositionStatement = supposition.getStatement(), suppositionStatementString = suppositionStatement.getString();
                localContext.trace("Unifying the '".concat(statementString, "' statement with the supposition's '").concat(suppositionStatementString, "' statement..."));
                var statementNode = statement.getNode(), suppositionStatementNode = suppositionStatement.getNode(), nodeA = suppositionStatementNode, nodeB = statementNode, fileContextA = this.fileContext, localContextA = _local.default.fromFileContext(fileContextA), localContextB = localContext, unified = _metaLevel.default.unify(nodeA, nodeB, substitutions, localContextA, localContextB);
                statementUnified = unified; ///
                if (statementUnified) {
                    localContext.debug("...unified the '".concat(statementString, "' statement with the supposition's '").concat(suppositionStatementString, "' statement."));
                }
                return statementUnified;
            }
        },
        {
            key: "unifySubproof",
            value: function unifySubproof(subproof, substitutions, localContext) {
                var subproofUnified = false;
                var supposition = this, subproofString = subproof.getString(), suppositionStatement = supposition.getStatement(), suppositionStatementString = suppositionStatement.getString();
                localContext.trace("Unifying the '".concat(subproofString, "' subproof with the supposition's '").concat(suppositionStatementString, "' statement..."));
                if (this.subproofAssertion !== null) {
                    subproofUnified = this.subproofAssertion.unifySubproof(subproof, substitutions, localContext);
                }
                if (subproofUnified) {
                    localContext.debug("...unified the '".concat(subproofString, "' subproof with the supposition's '").concat(suppositionStatementString, "' statement."));
                }
                return subproofUnified;
            }
        },
        {
            key: "verify",
            value: function verify(localContext) {
                var verified = false;
                var suppositionString = this.getString(); ///
                if (this.unqualifiedStatement !== null) {
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
                } else {
                    localContext.debug("The '".concat(suppositionString, "' supposition cannot be verified because it is nonsense."));
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
                var supposition = new Supposition(fileContext, subproofAssertion, unqualifiedStatement);
                return supposition;
            }
        },
        {
            key: "fromSuppositionNode",
            value: function fromSuppositionNode(suppositionNode, fileContext) {
                var unqualifiedStatementNode = unqualifiedStatementNodeQuery(suppositionNode), unqualifiedStatement = _unqualified.default.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext), subproofAssertion = _subproof.default.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext), supposition = new Supposition(fileContext, subproofAssertion, unqualifiedStatement);
                return supposition;
            }
        }
    ]);
    return Supposition;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdXBwb3NpdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgbWV0YUxldmVsVW5pZmllciBmcm9tIFwiLi91bmlmaWVyL21ldGFMZXZlbFwiO1xuaW1wb3J0IFN1YnByb29mQXNzZXJ0aW9uIGZyb20gXCIuL2Fzc2VydGlvbi9zdWJwcm9vZlwiO1xuaW1wb3J0IFVucXVhbGlmaWVkU3RhdGVtZW50IGZyb20gXCIuL3N0YXRlbWVudC91bnF1YWxpZmllZFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGFzc2lnbkFzc2lnbm1lbnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2Fzc2lnbm1lbnRzXCI7XG5cbmNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1cHBvc2l0aW9uL3VucXVhbGlmaWVkU3RhdGVtZW50XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdXBwb3NpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdWJwcm9vZkFzc2VydGlvbiwgdW5xdWFsaWZpZWRTdGF0ZW1lbnQpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy5zdWJwcm9vZkFzc2VydGlvbiA9IHN1YnByb29mQXNzZXJ0aW9uO1xuICAgIHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSB1bnF1YWxpZmllZFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0U3VicHJvb2ZBc3NlcnRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VicHJvb2ZBc3NlcnRpb247XG4gIH1cblxuICBnZXRVbnF1YWxpZmllZFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHsgcmV0dXJuIHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7IH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7IHJldHVybiB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0YXRlbWVudCgpOyB9XG5cbiAgdW5pZnlQcm9vZlN0ZXAocHJvb2ZTdGVwLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZTdGVwVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VicHJvb2YgPSBwcm9vZlN0ZXAuZ2V0U3VicHJvb2YoKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBwcm9vZlN0ZXAuZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBzdWJzdGl0dXRpb25zLnNuYXBzaG90KCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoc3VicHJvb2YgIT09IG51bGwpIHtcbiAgICAgIHByb29mU3RlcFVuaWZpZWQgPSB0aGlzLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCk7XG4gICAgfSBlbHNlIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHByb29mU3RlcFVuaWZpZWQgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcbiAgICB9XG5cbiAgICBwcm9vZlN0ZXBVbmlmaWVkID9cbiAgICAgIHN1YnN0aXR1dGlvbnMuY29udGludWUoKSA6XG4gICAgICAgIHN1YnN0aXR1dGlvbnMucm9sbGJhY2sobG9jYWxDb250ZXh0KTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXBVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gdGhpcywgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uU3RhdGVtZW50ID0gc3VwcG9zaXRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3VwcG9zaXRpb25TdGF0ZW1lbnRTdHJpbmcgPSBzdXBwb3NpdGlvblN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSBzdXBwb3NpdGlvbidzICcke3N1cHBvc2l0aW9uU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvblN0YXRlbWVudE5vZGUgPSBzdXBwb3NpdGlvblN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgbm9kZUEgPSBzdXBwb3NpdGlvblN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBub2RlQiA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBmaWxlQ29udGV4dEEgPSB0aGlzLmZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgICAgbG9jYWxDb250ZXh0QSA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHRBKSxcbiAgICAgICAgICBsb2NhbENvbnRleHRCID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICB1bmlmaWVkID0gbWV0YUxldmVsVW5pZmllci51bmlmeShub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgc3RhdGVtZW50VW5pZmllZCA9IHVuaWZpZWQ7IC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlIHN1cHBvc2l0aW9uJ3MgJyR7c3VwcG9zaXRpb25TdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbiA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3VwcG9zaXRpb25TdGF0ZW1lbnQgPSBzdXBwb3NpdGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvblN0YXRlbWVudFN0cmluZyA9IHN1cHBvc2l0aW9uU3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSBzdXBwb3NpdGlvbidzICcke3N1cHBvc2l0aW9uU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBpZiAodGhpcy5zdWJwcm9vZkFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgc3VicHJvb2ZVbmlmaWVkID0gdGhpcy5zdWJwcm9vZkFzc2VydGlvbi51bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpO1xuICAgIH1cblxuICAgIGlmIChzdWJwcm9vZlVuaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSBzdXBwb3NpdGlvbidzICcke3N1cHBvc2l0aW9uU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnkobG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgaWYgKHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLi4uYCk7XG5cbiAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmICh1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGFzc2lnbm1lbnRzQXNzaWduZWQgPSBhc3NpZ25Bc3NpZ25tZW50cyhhc3NpZ25tZW50cywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICBpZiAoYXNzaWdubWVudHNBc3NpZ25lZCkge1xuICAgICAgICAgIGNvbnN0IHsgUHJvb2ZTdGVwIH0gPSBzaGltLFxuICAgICAgICAgICAgICAgIHByb29mU3RlcCA9IFByb29mU3RlcC5mcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnQodGhpcy51bnF1YWxpZmllZFN0YXRlbWVudCk7XG5cbiAgICAgICAgICBsb2NhbENvbnRleHQuYWRkUHJvb2ZTdGVwKHByb29mU3RlcCk7XG5cbiAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gY2Fubm90IGJlIHZlcmlmaWVkIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50SlNPTiA9IHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQudG9KU09OKCksXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25KU09OID0gKHRoaXMuc3VicHJvb2ZBc3NlcnRpb24gIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1YnByb29mQXNzZXJ0aW9uLnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSB1bnF1YWxpZmllZFN0YXRlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbiA9IHN1YnByb29mQXNzZXJ0aW9uSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudCxcbiAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHsgc3VicHJvb2ZBc3NlcnRpb24sIHVucXVhbGlmaWVkU3RhdGVtZW50IH0gPSBqc29uO1xuXG4gICAganNvbiA9IHVucXVhbGlmaWVkU3RhdGVtZW50OyAgLy8vXG5cbiAgICB1bnF1YWxpZmllZFN0YXRlbWVudCA9IFVucXVhbGlmaWVkU3RhdGVtZW50LmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIGpzb24gPSBzdWJwcm9vZkFzc2VydGlvbjsgLy8vXG5cbiAgICBzdWJwcm9vZkFzc2VydGlvbiA9IChqc29uICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFN1YnByb29mQXNzZXJ0aW9uLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gbmV3IFN1cHBvc2l0aW9uKGZpbGVDb250ZXh0LCBzdWJwcm9vZkFzc2VydGlvbiwgdW5xdWFsaWZpZWRTdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5KHN1cHBvc2l0aW9uTm9kZSksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSBVbnF1YWxpZmllZFN0YXRlbWVudC5mcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gU3VicHJvb2ZBc3NlcnRpb24uZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbiA9IG5ldyBTdXBwb3NpdGlvbihmaWxlQ29udGV4dCwgc3VicHJvb2ZBc3NlcnRpb24sIHVucXVhbGlmaWVkU3RhdGVtZW50KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvblxuICB9XG59XG4iXSwibmFtZXMiOlsiU3VwcG9zaXRpb24iLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImZpbGVDb250ZXh0Iiwic3VicHJvb2ZBc3NlcnRpb24iLCJ1bnF1YWxpZmllZFN0YXRlbWVudCIsImdldEZpbGVDb250ZXh0IiwiZ2V0U3VicHJvb2ZBc3NlcnRpb24iLCJnZXRVbnF1YWxpZmllZFN0YXRlbWVudCIsImdldFN0cmluZyIsImdldFN0YXRlbWVudCIsInVuaWZ5UHJvb2ZTdGVwIiwicHJvb2ZTdGVwIiwic3Vic3RpdHV0aW9ucyIsImxvY2FsQ29udGV4dCIsInByb29mU3RlcFVuaWZpZWQiLCJzdWJwcm9vZiIsImdldFN1YnByb29mIiwic3RhdGVtZW50Iiwic25hcHNob3QiLCJ1bmlmeVN1YnByb29mIiwidW5pZnlTdGF0ZW1lbnQiLCJjb250aW51ZSIsInJvbGxiYWNrIiwic3RhdGVtZW50VW5pZmllZCIsInN1cHBvc2l0aW9uIiwic3RhdGVtZW50U3RyaW5nIiwic3VwcG9zaXRpb25TdGF0ZW1lbnQiLCJzdXBwb3NpdGlvblN0YXRlbWVudFN0cmluZyIsInRyYWNlIiwic3RhdGVtZW50Tm9kZSIsImdldE5vZGUiLCJzdXBwb3NpdGlvblN0YXRlbWVudE5vZGUiLCJub2RlQSIsIm5vZGVCIiwiZmlsZUNvbnRleHRBIiwibG9jYWxDb250ZXh0QSIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsImxvY2FsQ29udGV4dEIiLCJ1bmlmaWVkIiwibWV0YUxldmVsVW5pZmllciIsInVuaWZ5IiwiZGVidWciLCJzdWJwcm9vZlVuaWZpZWQiLCJzdWJwcm9vZlN0cmluZyIsInZlcmlmeSIsInZlcmlmaWVkIiwic3VwcG9zaXRpb25TdHJpbmciLCJzdGF0ZWQiLCJhc3NpZ25tZW50cyIsInVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQiLCJhc3NpZ25tZW50c0Fzc2lnbmVkIiwiYXNzaWduQXNzaWdubWVudHMiLCJQcm9vZlN0ZXAiLCJzaGltIiwiZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50IiwiYWRkUHJvb2ZTdGVwIiwidG9KU09OIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRKU09OIiwic3VicHJvb2ZBc3NlcnRpb25KU09OIiwianNvbiIsImZyb21KU09OIiwiVW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJTdWJwcm9vZkFzc2VydGlvbiIsImZyb21TdXBwb3NpdGlvbk5vZGUiLCJzdXBwb3NpdGlvbk5vZGUiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJmcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWFxQkE7OzsyREFYSjs0REFDUTtnRUFDSTsrREFDQztrRUFDRztxQkFFUDsyQkFDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxJQUFNQyxnQ0FBZ0NDLElBQUFBLGdCQUFTLEVBQUM7QUFFakMsSUFBQSxBQUFNRiw0QkFBTjthQUFNQSxZQUNQRyxXQUFXLEVBQUVDLGlCQUFpQixFQUFFQyxvQkFBb0I7Z0NBRDdDTDtRQUVqQixJQUFJLENBQUNHLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxpQkFBaUIsR0FBR0E7UUFDekIsSUFBSSxDQUFDQyxvQkFBb0IsR0FBR0E7O2tCQUpYTDs7WUFPbkJNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsV0FBVztZQUN6Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsaUJBQWlCO1lBQy9COzs7WUFF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