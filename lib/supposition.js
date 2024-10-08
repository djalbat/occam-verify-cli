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
            key: "unifySubproof",
            value: function unifySubproof(subproof, substitutions, localContext) {
                var subproofUnified = false;
                var supposition = this, subproofString = subproof.getString(), suppositionStatement = supposition.getStatement(), suppositionStatementString = suppositionStatement.getString();
                localContext.trace("Unifying the '".concat(subproofString, "' subproof with the supposition's '").concat(suppositionStatementString, "' statement..."));
                var statement = this.unqualifiedStatement.getStatement(), subproofAssertion = _subproof.default.fromStatement(statement, this.fileContext);
                if (subproofAssertion !== null) {
                    subproofUnified = subproofAssertion.unifySubproof(subproof, substitutions, this.fileContext, localContext);
                }
                if (subproofUnified) {
                    localContext.debug("...unified the '".concat(subproofString, "' subproof with the supposition's '").concat(suppositionStatementString, "' statement."));
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
                var supposition = new Supposition(fileContext, unqualifiedStatement);
                return supposition;
            }
        },
        {
            key: "fromSuppositionNode",
            value: function fromSuppositionNode(suppositionNode, fileContext) {
                var unqualifiedStatementNode = unqualifiedStatementNodeQuery(suppositionNode), unqualifiedStatement = _unqualified.default.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext), supposition = new Supposition(fileContext, unqualifiedStatement);
                return supposition;
            }
        }
    ]);
    return Supposition;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdXBwb3NpdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgbWV0YUxldmVsVW5pZmllciBmcm9tIFwiLi91bmlmaWVyL21ldGFMZXZlbFwiO1xuaW1wb3J0IFN1YnByb29mQXNzZXJ0aW9uIGZyb20gXCIuL2Fzc2VydGlvbi9zdWJwcm9vZlwiO1xuaW1wb3J0IFVucXVhbGlmaWVkU3RhdGVtZW50IGZyb20gXCIuL3N0YXRlbWVudC91bnF1YWxpZmllZFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGFzc2lnbkFzc2lnbm1lbnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2Fzc2lnbm1lbnRzXCI7XG5cbmNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1cHBvc2l0aW9uL3VucXVhbGlmaWVkU3RhdGVtZW50XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdXBwb3NpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCB1bnF1YWxpZmllZFN0YXRlbWVudCkge1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgICB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50ID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldFVucXVhbGlmaWVkU3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkgeyByZXR1cm4gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudC5nZXRTdHJpbmcoKTsgfVxuXG4gIGdldFN0YXRlbWVudCgpIHsgcmV0dXJuIHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQuZ2V0U3RhdGVtZW50KCk7IH1cblxuICB2ZXJpZnkobG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgaWYgKHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLi4uYCk7XG5cbiAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmICh1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGFzc2lnbm1lbnRzQXNzaWduZWQgPSBhc3NpZ25Bc3NpZ25tZW50cyhhc3NpZ25tZW50cywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICBpZiAoYXNzaWdubWVudHNBc3NpZ25lZCkge1xuICAgICAgICAgIGNvbnN0IHsgUHJvb2ZTdGVwIH0gPSBzaGltLFxuICAgICAgICAgICAgICAgIHByb29mU3RlcCA9IFByb29mU3RlcC5mcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnQodGhpcy51bnF1YWxpZmllZFN0YXRlbWVudCk7XG5cbiAgICAgICAgICBsb2NhbENvbnRleHQuYWRkUHJvb2ZTdGVwKHByb29mU3RlcCk7XG5cbiAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gY2Fubm90IGJlIHZlcmlmaWVkIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb24gPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mLmdldFN0cmluZygpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uU3RhdGVtZW50ID0gc3VwcG9zaXRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3VwcG9zaXRpb25TdGF0ZW1lbnRTdHJpbmcgPSBzdXBwb3NpdGlvblN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgc3VwcG9zaXRpb24ncyAnJHtzdXBwb3NpdGlvblN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudC5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbiA9IFN1YnByb29mQXNzZXJ0aW9uLmZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCB0aGlzLmZpbGVDb250ZXh0KTtcblxuICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgc3VicHJvb2ZVbmlmaWVkID0gc3VicHJvb2ZBc3NlcnRpb24udW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgdGhpcy5maWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZVbmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgc3VwcG9zaXRpb24ncyAnJHtzdXBwb3NpdGlvblN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlQcm9vZlN0ZXAocHJvb2ZTdGVwLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZTdGVwVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VicHJvb2YgPSBwcm9vZlN0ZXAuZ2V0U3VicHJvb2YoKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBwcm9vZlN0ZXAuZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBzdWJzdGl0dXRpb25zLnNuYXBzaG90KCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoc3VicHJvb2YgIT09IG51bGwpIHtcbiAgICAgIHByb29mU3RlcFVuaWZpZWQgPSB0aGlzLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCk7XG4gICAgfSBlbHNlIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHByb29mU3RlcFVuaWZpZWQgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcbiAgICB9XG5cbiAgICBwcm9vZlN0ZXBVbmlmaWVkID9cbiAgICAgIHN1YnN0aXR1dGlvbnMuY29udGludWUoKSA6XG4gICAgICAgIHN1YnN0aXR1dGlvbnMucm9sbGJhY2sobG9jYWxDb250ZXh0KTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXBVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gdGhpcywgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uU3RhdGVtZW50ID0gc3VwcG9zaXRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3VwcG9zaXRpb25TdGF0ZW1lbnRTdHJpbmcgPSBzdXBwb3NpdGlvblN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSBzdXBwb3NpdGlvbidzICcke3N1cHBvc2l0aW9uU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvblN0YXRlbWVudE5vZGUgPSBzdXBwb3NpdGlvblN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgbm9kZUEgPSBzdXBwb3NpdGlvblN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBub2RlQiA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBmaWxlQ29udGV4dEEgPSB0aGlzLmZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgICAgbG9jYWxDb250ZXh0QSA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHRBKSxcbiAgICAgICAgICBsb2NhbENvbnRleHRCID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICB1bmlmaWVkID0gbWV0YUxldmVsVW5pZmllci51bmlmeShub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgc3RhdGVtZW50VW5pZmllZCA9IHVuaWZpZWQ7IC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlIHN1cHBvc2l0aW9uJ3MgJyR7c3VwcG9zaXRpb25TdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnRKU09OID0gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudC50b0pTT04oKSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudCA9IHVucXVhbGlmaWVkU3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCB7IHVucXVhbGlmaWVkU3RhdGVtZW50IH0gPSBqc29uO1xuXG4gICAganNvbiA9IHVucXVhbGlmaWVkU3RhdGVtZW50OyAgLy8vXG5cbiAgICB1bnF1YWxpZmllZFN0YXRlbWVudCA9IFVucXVhbGlmaWVkU3RhdGVtZW50LmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gbmV3IFN1cHBvc2l0aW9uKGZpbGVDb250ZXh0LCB1bnF1YWxpZmllZFN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkoc3VwcG9zaXRpb25Ob2RlKSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudCA9IFVucXVhbGlmaWVkU3RhdGVtZW50LmZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3VwcG9zaXRpb24gPSBuZXcgU3VwcG9zaXRpb24oZmlsZUNvbnRleHQsIHVucXVhbGlmaWVkU3RhdGVtZW50KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvblxuICB9XG59XG4iXSwibmFtZXMiOlsiU3VwcG9zaXRpb24iLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImZpbGVDb250ZXh0IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJnZXRGaWxlQ29udGV4dCIsImdldFVucXVhbGlmaWVkU3RhdGVtZW50IiwiZ2V0U3RyaW5nIiwiZ2V0U3RhdGVtZW50IiwidmVyaWZ5IiwibG9jYWxDb250ZXh0IiwidmVyaWZpZWQiLCJzdXBwb3NpdGlvblN0cmluZyIsInRyYWNlIiwic3RhdGVkIiwiYXNzaWdubWVudHMiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkIiwiYXNzaWdubWVudHNBc3NpZ25lZCIsImFzc2lnbkFzc2lnbm1lbnRzIiwiUHJvb2ZTdGVwIiwic2hpbSIsInByb29mU3RlcCIsImZyb21VbnF1YWxpZmllZFN0YXRlbWVudCIsImFkZFByb29mU3RlcCIsImRlYnVnIiwidW5pZnlTdWJwcm9vZiIsInN1YnByb29mIiwic3Vic3RpdHV0aW9ucyIsInN1YnByb29mVW5pZmllZCIsInN1cHBvc2l0aW9uIiwic3VicHJvb2ZTdHJpbmciLCJzdXBwb3NpdGlvblN0YXRlbWVudCIsInN1cHBvc2l0aW9uU3RhdGVtZW50U3RyaW5nIiwic3RhdGVtZW50Iiwic3VicHJvb2ZBc3NlcnRpb24iLCJTdWJwcm9vZkFzc2VydGlvbiIsImZyb21TdGF0ZW1lbnQiLCJ1bmlmeVByb29mU3RlcCIsInByb29mU3RlcFVuaWZpZWQiLCJnZXRTdWJwcm9vZiIsInNuYXBzaG90IiwidW5pZnlTdGF0ZW1lbnQiLCJjb250aW51ZSIsInJvbGxiYWNrIiwic3RhdGVtZW50VW5pZmllZCIsInN0YXRlbWVudFN0cmluZyIsInN0YXRlbWVudE5vZGUiLCJnZXROb2RlIiwic3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlIiwibm9kZUEiLCJub2RlQiIsImZpbGVDb250ZXh0QSIsImxvY2FsQ29udGV4dEEiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJsb2NhbENvbnRleHRCIiwidW5pZmllZCIsIm1ldGFMZXZlbFVuaWZpZXIiLCJ1bmlmeSIsInRvSlNPTiIsInVucXVhbGlmaWVkU3RhdGVtZW50SlNPTiIsImpzb24iLCJmcm9tSlNPTiIsIlVucXVhbGlmaWVkU3RhdGVtZW50IiwiZnJvbVN1cHBvc2l0aW9uTm9kZSIsInN1cHBvc2l0aW9uTm9kZSIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsImZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBYXFCQTs7OzJEQVhKOzREQUNRO2dFQUNJOytEQUNDO2tFQUNHO3FCQUVQOzJCQUNROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxDLElBQU1DLGdDQUFnQ0MsSUFBQUEsZ0JBQVMsRUFBQztBQUVqQyxJQUFBLEFBQU1GLDRCQUFOO2FBQU1BLFlBQ1BHLFdBQVcsRUFBRUMs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