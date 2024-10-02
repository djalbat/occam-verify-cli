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
var _proofStep = /*#__PURE__*/ _interop_require_default(require("./proofStep"));
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("./unifier/metaLevel"));
var _subproof = /*#__PURE__*/ _interop_require_default(require("./assertion/subproof"));
var _unqualified = /*#__PURE__*/ _interop_require_default(require("./statement/unqualified"));
var _string = require("./utilities/string");
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
                var statement = this.unqualifiedStatement.getStatement(), statementNode = statement.getNode(), subproofAssertion = _subproof.default.fromStatementNode(statementNode, this.fileContext);
                if (subproofAssertion !== null) {
                    subproofUnified = subproofAssertion.unifySubproof(subproof, substitutions, localContext);
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
                var verified = false, premiseString = this.getString(); ///
                premiseString = (0, _string.trim)(premiseString); ///
                if (this.unqualifiedStatement !== null) {
                    localContext.trace("Verifying the '".concat(premiseString, "' premise..."));
                    var stated = true, assignments = [], unqualifiedStatementVerified = this.unqualifiedStatement.verify(assignments, stated, localContext);
                    if (unqualifiedStatementVerified) {
                        var assignmentsAssigned = (0, _assignments.assignAssignments)(assignments, localContext);
                        if (assignmentsAssigned) {
                            var proofStep = _proofStep.default.fromUnqualifiedStatement(this.unqualifiedStatement);
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
                var unqualifiedStatementString = this.unqualifiedStatement.getString(), unqualifiedStatement = unqualifiedStatementString, json = {
                    unqualifiedStatement: unqualifiedStatement
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var premise = null;
                return premise;
            }
        },
        {
            key: "fromPremiseNode",
            value: function fromPremiseNode(premiseNode, fileContext) {
                var unqualifiedStatementNode = unqualifiedStatementNodeQuery(premiseNode), unqualifiedStatement = _unqualified.default.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext), premise = new Premise(fileContext, unqualifiedStatement);
                return premise;
            }
        }
    ]);
    return Premise;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmVtaXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUHJvb2ZTdGVwIGZyb20gXCIuL3Byb29mU3RlcFwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgbWV0YUxldmVsVW5pZmllciBmcm9tIFwiLi91bmlmaWVyL21ldGFMZXZlbFwiO1xuaW1wb3J0IFN1YnByb29mQXNzZXJ0aW9uIGZyb20gXCIuL2Fzc2VydGlvbi9zdWJwcm9vZlwiO1xuaW1wb3J0IFVucXVhbGlmaWVkU3RhdGVtZW50IGZyb20gXCIuL3N0YXRlbWVudC91bnF1YWxpZmllZFwiO1xuXG5pbXBvcnQgeyB0cmltIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBhc3NpZ25Bc3NpZ25tZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9hc3NpZ25tZW50c1wiO1xuXG5jb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcmVtaXNlL3VucXVhbGlmaWVkU3RhdGVtZW50XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVtaXNlIHtcbiAgY29uc3RydWN0b3IoZmlsZUNvbnRleHQsIHVucXVhbGlmaWVkU3RhdGVtZW50KSB7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICAgIHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSB1bnF1YWxpZmllZFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0VW5xdWFsaWZpZWRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7IHJldHVybiB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0cmluZygpOyB9XG5cbiAgZ2V0U3RhdGVtZW50KCkgeyByZXR1cm4gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudC5nZXRTdGF0ZW1lbnQoKTsgfVxuXG4gIHVuaWZ5UHJvb2ZTdGVwKHByb29mU3RlcCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHByb29mU3RlcFVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1YnByb29mID0gcHJvb2ZTdGVwLmdldFN1YnByb29mKCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gcHJvb2ZTdGVwLmdldFN0YXRlbWVudCgpO1xuXG4gICAgc3Vic3RpdHV0aW9ucy5zbmFwc2hvdCgpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICBwcm9vZlN0ZXBVbmlmaWVkID0gdGhpcy51bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBwcm9vZlN0ZXBVbmlmaWVkID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCk7XG4gICAgfVxuXG4gICAgcHJvb2ZTdGVwVW5pZmllZCA/XG4gICAgICBzdWJzdGl0dXRpb25zLmNvbnRpbnVlKCkgOlxuICAgICAgICBzdWJzdGl0dXRpb25zLnJvbGxiYWNrKGxvY2FsQ29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQ7XG5cbiAgICBjb25zdCBwcmVtaXNlID0gdGhpcywgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHByZW1pc2VTdGF0ZW1lbnQgPSBwcmVtaXNlLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHByZW1pc2VTdGF0ZW1lbnRTdHJpbmcgPSBwcmVtaXNlU3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlIHByZW1pc2UncyAnJHtwcmVtaXNlU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBwcmVtaXNlU3RhdGVtZW50Tm9kZSA9IHByZW1pc2VTdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG5vZGVBID0gcHJlbWlzZVN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBub2RlQiA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBmaWxlQ29udGV4dEEgPSB0aGlzLmZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgICAgbG9jYWxDb250ZXh0QSA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHRBKSxcbiAgICAgICAgICBsb2NhbENvbnRleHRCID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICB1bmlmaWVkID0gbWV0YUxldmVsVW5pZmllci51bmlmeShub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgc3RhdGVtZW50VW5pZmllZCA9IHVuaWZpZWQ7IC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlIHByZW1pc2UncyAnJHtwcmVtaXNlU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJlbWlzZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcHJlbWlzZVN0YXRlbWVudCA9IHByZW1pc2UuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgcHJlbWlzZVN0YXRlbWVudFN0cmluZyA9IHByZW1pc2VTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlIHByZW1pc2UncyAnJHtwcmVtaXNlU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gU3VicHJvb2ZBc3NlcnRpb24uZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgdGhpcy5maWxlQ29udGV4dCk7XG5cbiAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIHN1YnByb29mVW5pZmllZCA9IHN1YnByb29mQXNzZXJ0aW9uLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mVW5pZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlIHByZW1pc2UncyAnJHtwcmVtaXNlU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnkobG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2UsXG4gICAgICAgIHByZW1pc2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIHByZW1pc2VTdHJpbmcgPSB0cmltKHByZW1pc2VTdHJpbmcpOyAgLy8vXG5cbiAgICBpZiAodGhpcy51bnF1YWxpZmllZFN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLi4uYCk7XG5cbiAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmICh1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGFzc2lnbm1lbnRzQXNzaWduZWQgPSBhc3NpZ25Bc3NpZ25tZW50cyhhc3NpZ25tZW50cywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICBpZiAoYXNzaWdubWVudHNBc3NpZ25lZCkge1xuICAgICAgICAgIGNvbnN0IHByb29mU3RlcCA9IFByb29mU3RlcC5mcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnQodGhpcy51bnF1YWxpZmllZFN0YXRlbWVudCk7XG5cbiAgICAgICAgICBsb2NhbENvbnRleHQuYWRkUHJvb2ZTdGVwKHByb29mU3RlcCk7XG5cbiAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZSBjYW5ub3QgYmUgdmVyaWZpZWQgYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50ID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcsICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgcHJlbWlzZSA9IG51bGw7XG5cbiAgICByZXR1cm4gcHJlbWlzZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkocHJlbWlzZU5vZGUpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50ID0gVW5xdWFsaWZpZWRTdGF0ZW1lbnQuZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBwcmVtaXNlID0gbmV3IFByZW1pc2UoZmlsZUNvbnRleHQsIHVucXVhbGlmaWVkU3RhdGVtZW50KTtcblxuICAgIHJldHVybiBwcmVtaXNlXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQcmVtaXNlIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJmaWxlQ29udGV4dCIsInVucXVhbGlmaWVkU3RhdGVtZW50IiwiZ2V0RmlsZUNvbnRleHQiLCJnZXRVbnF1YWxpZmllZFN0YXRlbWVudCIsImdldFN0cmluZyIsImdldFN0YXRlbWVudCIsInVuaWZ5UHJvb2ZTdGVwIiwicHJvb2ZTdGVwIiwic3Vic3RpdHV0aW9ucyIsImxvY2FsQ29udGV4dCIsInByb29mU3RlcFVuaWZpZWQiLCJzdWJwcm9vZiIsImdldFN1YnByb29mIiwic3RhdGVtZW50Iiwic25hcHNob3QiLCJ1bmlmeVN1YnByb29mIiwidW5pZnlTdGF0ZW1lbnQiLCJjb250aW51ZSIsInJvbGxiYWNrIiwic3RhdGVtZW50VW5pZmllZCIsInByZW1pc2UiLCJzdGF0ZW1lbnRTdHJpbmciLCJwcmVtaXNlU3RhdGVtZW50IiwicHJlbWlzZVN0YXRlbWVudFN0cmluZyIsInRyYWNlIiwic3RhdGVtZW50Tm9kZSIsImdldE5vZGUiLCJwcmVtaXNlU3RhdGVtZW50Tm9kZSIsIm5vZGVBIiwibm9kZUIiLCJmaWxlQ29udGV4dEEiLCJsb2NhbENvbnRleHRBIiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwibG9jYWxDb250ZXh0QiIsInVuaWZpZWQiLCJtZXRhTGV2ZWxVbmlmaWVyIiwidW5pZnkiLCJkZWJ1ZyIsInN1YnByb29mVW5pZmllZCIsInN1YnByb29mU3RyaW5nIiwic3VicHJvb2ZBc3NlcnRpb24iLCJTdWJwcm9vZkFzc2VydGlvbiIsImZyb21TdGF0ZW1lbnROb2RlIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJwcmVtaXNlU3RyaW5nIiwidHJpbSIsInN0YXRlZCIsImFzc2lnbm1lbnRzIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCIsImFzc2lnbm1lbnRzQXNzaWduZWQiLCJhc3NpZ25Bc3NpZ25tZW50cyIsIlByb29mU3RlcCIsImZyb21VbnF1YWxpZmllZFN0YXRlbWVudCIsImFkZFByb29mU3RlcCIsInRvSlNPTiIsInVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nIiwianNvbiIsImZyb21KU09OIiwiZnJvbVByZW1pc2VOb2RlIiwicHJlbWlzZU5vZGUiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJVbnF1YWxpZmllZFN0YXRlbWVudCIsImZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBY3FCQTs7O2dFQVpDOzREQUNHO2dFQUNJOytEQUNDO2tFQUNHO3NCQUVaO3FCQUNLOzJCQUNROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxDLElBQU1DLGdDQUFnQ0MsSUFBQUEsZ0JBQVMsRUFBQztBQUVqQyxJQUFBLEFBQU1GLHdCQUFOO2FBQU1BLFFBQ1BHLFdBQVcsRUFBRUMsb0JBQW9CO2dDQUQxQko7UUFFakIsSUFBSSxDQUFDRyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0Msb0JBQW9CLEdBQUdBOztrQkFIWEo7O1lBTW5CSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFdBQVc7WUFDekI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLG9CQUFvQjtZQUNsQzs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBYyxPQUFPLElBQUksQ0FBQ0gsb0JBQW9CLENBQUNHLFNBQVM7WUFBSTs7O1lBRTVEQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWlCLE9BQU8sSUFBSSxDQUFDSixvQkFBb0IsQ0FBQ0ksWUFBWTtZQUFJOzs7WUFFbEVDLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlQyxTQUFTLEVBQUVDLGFBQWEsRUFBRUMsWUFBWTtnQkFDbkQsSUFBSUMsbUJBQW1CO2dCQUV2QixJQUFNQyxXQUFXSixVQUFVSyxXQUFXLElBQ2hDQyxZQUFZTixVQUFVRixZQUFZO2dCQUV4Q0csY0FBY00sUUFBUTtnQkFFdEIsSUFBSSxPQUFPO2dCQUNULEdBQUc7Z0JBQ0wsT0FBTyxJQUFJSCxhQUFhLE1BQU07b0JBQzVCRCxtQkFBbUIsSUFBSSxDQUFDSyxhQUFhLENBQUNKLFVBQVVILGVBQWVDO2dCQUNqRSxPQUFPLElBQUlJLGNBQWMsTUFBTTtvQkFDN0JILG1CQUFtQixJQUFJLENBQUNNLGNBQWMsQ0FBQ0gsV0FBV0wsZUFBZUM7Z0JBQ25FO2dCQUVBQyxtQkFDRUYsY0FBY1MsUUFBUSxLQUNwQlQsY0FBY1UsUUFBUSxDQUFDVDtnQkFFM0IsT0FBT0M7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlSCxTQUFTLEVBQUVMLGFBQWEsRUFBRUMsWUFBWTtnQkFDbkQsSUFBSVU7Z0JBRUosSUFBTUMsVUFBVSxJQUFJLEVBQ2RDLGtCQUFrQlIsVUFBVVQsU0FBUyxJQUNyQ2tCLG1CQUFtQkYsUUFBUWYsWUFBWSxJQUN2Q2tCLHlCQUF5QkQsaUJBQWlCbEIsU0FBUztnQkFFekRLLGFBQWFlLEtBQUssQ0FBQyxBQUFDLGlCQUFrRUQsT0FBbERGLGlCQUFnQixvQ0FBeUQsT0FBdkJFLHdCQUF1QjtnQkFFN0csSUFBTUUsZ0JBQWdCWixVQUFVYSxPQUFPLElBQ2pDQyx1QkFBdUJMLGlCQUFpQkksT0FBTyxJQUMvQ0UsUUFBUUQsc0JBQ1JFLFFBQVFKLGVBQ1JLLGVBQWUsSUFBSSxDQUFDOUIsV0FBVyxFQUMvQitCLGdCQUFnQkMsY0FBWSxDQUFDQyxlQUFlLENBQUNILGVBQzdDSSxnQkFBZ0J6QixjQUNoQjBCLFVBQVVDLGtCQUFnQixDQUFDQyxLQUFLLENBQUNULE9BQU9DLE9BQU9yQixlQUFldUIsZUFBZUc7Z0JBRW5GZixtQkFBbUJnQixTQUFTLEdBQUc7Z0JBRS9CLElBQUloQixrQkFBa0I7b0JBQ3BCVixhQUFhNkIsS0FBSyxDQUFDLEFBQUMsbUJBQW9FZixPQUFsREYsaUJBQWdCLG9DQUF5RCxPQUF2QkUsd0JBQXVCO2dCQUNqSDtnQkFFQSxPQUFPSjtZQUNUOzs7WUFFQUosS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNKLFFBQVEsRUFBRUgsYUFBYSxFQUFFQyxZQUFZO2dCQUNqRCxJQUFJOEIsa0JBQWtCO2dCQUV0QixJQUFNbkIsVUFBVSxJQUFJLEVBQ2RvQixpQkFBaUI3QixTQUFTUCxTQUFTLElBQ25Da0IsbUJBQW1CRixRQUFRZixZQUFZLElBQ3ZDa0IseUJBQXlCRCxpQkFBaUJsQixTQUFTO2dCQUV6REssYUFBYWUsS0FBSyxDQUFDLEFBQUMsaUJBQWdFRCxPQUFoRGlCLGdCQUFlLG1DQUF3RCxPQUF2QmpCLHdCQUF1QjtnQkFFM0csSUFBTVYsWUFBWSxJQUFJLENBQUNaLG9CQUFvQixDQUFDSSxZQUFZLElBQ2xEb0IsZ0JBQWdCWixVQUFVYSxPQUFPLElBQ2pDZSxvQkFBb0JDLGlCQUFpQixDQUFDQyxpQkFBaUIsQ0FBQ2xCLGVBQWUsSUFBSSxDQUFDekIsV0FBVztnQkFFN0YsSUFBSXlDLHNCQUFzQixNQUFNO29CQUM5QkYsa0JBQWtCRSxrQkFBa0IxQixhQUFhLENBQUNKLFVBQVVILGVBQWVDO2dCQUM3RTtnQkFFQSxJQUFJOEIsaUJBQWlCO29CQUNuQjlCLGFBQWE2QixLQUFLLENBQUMsQUFBQyxtQkFBa0VmLE9BQWhEaUIsZ0JBQWUsbUNBQXdELE9BQXZCakIsd0JBQXVCO2dCQUMvRztnQkFFQSxPQUFPZ0I7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPbkMsWUFBWTtnQkFDakIsSUFBSW9DLFdBQVcsT0FDWEMsZ0JBQWdCLElBQUksQ0FBQzFDLFNBQVMsSUFBSSxHQUFHO2dCQUV6QzBDLGdCQUFnQkMsSUFBQUEsWUFBSSxFQUFDRCxnQkFBaUIsR0FBRztnQkFFekMsSUFBSSxJQUFJLENBQUM3QyxvQkFBb0IsS0FBSyxNQUFNO29CQUN0Q1EsYUFBYWUsS0FBSyxDQUFDLEFBQUMsa0JBQStCLE9BQWRzQixlQUFjO29CQUVuRCxJQUFNRSxTQUFTLE1BQ1RDLGNBQWMsRUFBRSxFQUNoQkMsK0JBQStCLElBQUksQ0FBQ2pELG9CQUFvQixDQUFDMkMsTUFBTSxDQUFDSyxhQUFhRCxRQUFRdkM7b0JBRTNGLElBQUl5Qyw4QkFBOEI7d0JBQ2hDLElBQU1DLHNCQUFzQkMsSUFBQUEsOEJBQWlCLEVBQUNILGFBQWF4Qzt3QkFFM0QsSUFBSTBDLHFCQUFxQjs0QkFDdkIsSUFBTTVDLFlBQVk4QyxrQkFBUyxDQUFDQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUNyRCxvQkFBb0I7NEJBRTlFUSxhQUFhOEMsWUFBWSxDQUFDaEQ7NEJBRTFCc0MsV0FBVzt3QkFDYjtvQkFDRjtvQkFFQSxJQUFJQSxVQUFVO3dCQUNacEMsYUFBYTZCLEtBQUssQ0FBQyxBQUFDLG9CQUFpQyxPQUFkUSxlQUFjO29CQUN2RDtnQkFDRixPQUFPO29CQUNMckMsYUFBYTZCLEtBQUssQ0FBQyxBQUFDLFFBQXFCLE9BQWRRLGVBQWM7Z0JBQzNDO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBVyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsNkJBQTZCLElBQUksQ0FBQ3hELG9CQUFvQixDQUFDRyxTQUFTLElBQ2hFSCx1QkFBdUJ3RCw0QkFDdkJDLE9BQU87b0JBQ0x6RCxzQkFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT3lEO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFMUQsV0FBVztnQkFDL0IsSUFBSW9CLFVBQVU7Z0JBRWQsT0FBT0E7WUFDVDs7O1lBRU93QyxLQUFBQTttQkFBUCxTQUFPQSxnQkFBZ0JDLFdBQVcsRUFBRTdELFdBQVc7Z0JBQzdDLElBQU04RCwyQkFBMkJoRSw4QkFBOEIrRCxjQUN6RDVELHVCQUF1QjhELG9CQUFvQixDQUFDQyw0QkFBNEIsQ0FBQ0YsMEJBQTBCOUQsY0FDbkdvQixVQUFVLElBcEpDdkIsUUFvSldHLGFBQWFDO2dCQUV6QyxPQUFPbUI7WUFDVDs7O1dBdkptQnZCIn0=