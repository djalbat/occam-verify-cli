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
var _necessary = require("necessary");
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _string = require("../utilities/string");
var _query = require("../utilities/query");
var _json = require("../utilities/json");
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
var reverse = _necessary.arrayUtilities.reverse;
var statementNodeQuery = (0, _query.nodeQuery)("/unqualifiedStatement/statement");
var UnqualifiedStatement = /*#__PURE__*/ function() {
    function UnqualifiedStatement(string, statement) {
        _class_call_check(this, UnqualifiedStatement);
        this.string = string;
        this.statement = statement;
    }
    _create_class(UnqualifiedStatement, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getStatement",
            value: function getStatement() {
                return this.statement;
            }
        },
        {
            key: "matchStatementNode",
            value: function matchStatementNode(statementNode) {
                return this.statement.matchStatementNode(statementNode);
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, generalContext, specificContext) {
                var statementUnified;
                var statementString = statement.getString(), unqualifiedStatement = this, unqualifiedStatementString = unqualifiedStatement.getString(); ///
                specificContext.trace("Unifying the '".concat(statementString, "' statement with the '").concat(unqualifiedStatementString, "' unqualified statement..."));
                statementUnified = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);
                if (statementUnified) {
                    specificContext.debug("...unified the '".concat(statementString, "' statement with the '").concat(unqualifiedStatementString, "' unqualified statement."));
                }
                return statementUnified;
            }
        },
        {
            key: "unifyIndependently",
            value: function unifyIndependently(substitutions, generalContext, specificContext) {
                var unifiedIndependently;
                var unqualifiedStatement = this, unqualifiedStatementString = unqualifiedStatement.getString(); ///
                specificContext.trace("Resolving the '".concat(unqualifiedStatementString, "' unqualified statement independently..."));
                var statementResolvedIndependently = this.statement.unifyIndependently(substitutions, generalContext, specificContext);
                unifiedIndependently = statementResolvedIndependently; ///
                if (unifiedIndependently) {
                    specificContext.debug("...resolved the '".concat(unqualifiedStatementString, "' unqualified statement independently."));
                }
                return unifiedIndependently;
            }
        },
        {
            key: "unifyStatementWithProofSteps",
            value: function unifyStatementWithProofSteps(statement, assignments, stated, context) {
                var statementUnifiedWithProofSteps;
                var proofSteps = context.getProofSteps();
                proofSteps = reverse(proofSteps); ///
                statementUnifiedWithProofSteps = proofSteps.some(function(proofStep) {
                    var statementUnified = proofStep.unifyStatement(statement, context);
                    if (statementUnified) {
                        return true;
                    }
                });
                return statementUnifiedWithProofSteps;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, context) {
                var verified;
                var unqualifiedStatement = this, unqualifiedStatementString = unqualifiedStatement.getString(); ///
                if (this.statement !== null) {
                    context.trace("Verifying the '".concat(unqualifiedStatementString, "' unqualified statement..."));
                    var statementVerified = this.statement.verify(assignments, stated, context);
                    if (statementVerified) {
                        verified = true;
                    } else {
                        var statementUnifiedWithProofSteps = this.unifyStatementWithProofSteps(this.statement, assignments, stated, context);
                        if (statementUnifiedWithProofSteps) {
                            verified = true;
                        }
                    }
                    if (verified) {
                        context.debug("...verified the '".concat(unqualifiedStatementString, "' unqualified statement."));
                    }
                } else {
                    context.debug("Cannot verify the '".concat(unqualifiedStatementString, "' unqualified statement because it is nonsense."));
                }
                return verified;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var statementJSON = (0, _json.statementToStatementJSON)(this.statement), statement = statementJSON, string = this.string, json = {
                    string: string,
                    statement: statement
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var string = json.string, statement = (0, _json.statementFromJSON)(json, fileContext), unqualifiedStatement = new UnqualifiedStatement(string, statement);
                return unqualifiedStatement;
            }
        },
        {
            key: "fromUnqualifiedStatementNode",
            value: function fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext) {
                var unqualifiedStatement = null;
                if (unqualifiedStatementNode !== null) {
                    var string;
                    var Statement = _shim.default.Statement, statementNode = statementNodeQuery(unqualifiedStatementNode), localContext = _local.default.fromFileContext(fileContext), context = localContext, statement = Statement.fromStatementNode(statementNode, context), node = unqualifiedStatementNode; ///
                    string = fileContext.nodeAsString(node);
                    string = (0, _string.trim)(string); ///
                    unqualifiedStatement = new UnqualifiedStatement(string, statement);
                }
                return unqualifiedStatement;
            }
        }
    ]);
    return UnqualifiedStatement;
}();
Object.assign(_shim.default, {
    UnqualifiedStatement: UnqualifiedStatement
});
var _default = UnqualifiedStatement;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0ZW1lbnQvdW5xdWFsaWZpZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyB0cmltIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHN0YXRlbWVudEZyb21KU09OLCBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyByZXZlcnNlIH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3Qgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3VucXVhbGlmaWVkU3RhdGVtZW50L3N0YXRlbWVudFwiKTtcblxuY2xhc3MgVW5xdWFsaWZpZWRTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHN0YXRlbWVudCkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkgeyByZXR1cm4gdGhpcy5zdGF0ZW1lbnQubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpOyB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQ7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcgPSB1bnF1YWxpZmllZFN0YXRlbWVudC5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3VucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nfScgdW5xdWFsaWZpZWQgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdGhpcy5zdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHt1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ30nIHVucXVhbGlmaWVkIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZWRJbmRlcGVuZGVudGx5O1xuXG4gICAgY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcgPSB1bnF1YWxpZmllZFN0YXRlbWVudC5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBSZXNvbHZpbmcgdGhlICcke3VucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nfScgdW5xdWFsaWZpZWQgc3RhdGVtZW50IGluZGVwZW5kZW50bHkuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFJlc29sdmVkSW5kZXBlbmRlbnRseSA9IHRoaXMuc3RhdGVtZW50LnVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHVuaWZpZWRJbmRlcGVuZGVudGx5ID0gc3RhdGVtZW50UmVzb2x2ZWRJbmRlcGVuZGVudGx5OyAgLy8vXG5cbiAgICBpZiAodW5pZmllZEluZGVwZW5kZW50bHkpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4ucmVzb2x2ZWQgdGhlICcke3VucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nfScgdW5xdWFsaWZpZWQgc3RhdGVtZW50IGluZGVwZW5kZW50bHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZWRJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnRXaXRoUHJvb2ZTdGVwcyhzdGF0ZW1lbnQsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZFdpdGhQcm9vZlN0ZXBzO1xuXG4gICAgbGV0IHByb29mU3RlcHMgPSBjb250ZXh0LmdldFByb29mU3RlcHMoKTtcblxuICAgIHByb29mU3RlcHMgPSByZXZlcnNlKHByb29mU3RlcHMpOyAvLy9cblxuICAgIHN0YXRlbWVudFVuaWZpZWRXaXRoUHJvb2ZTdGVwcyA9IHByb29mU3RlcHMuc29tZSgocHJvb2ZTdGVwKSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVkID0gcHJvb2ZTdGVwLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWRXaXRoUHJvb2ZTdGVwcztcbiAgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcgPSB1bnF1YWxpZmllZFN0YXRlbWVudC5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3VucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nfScgdW5xdWFsaWZpZWQgc3RhdGVtZW50Li4uYCk7XG5cbiAgICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy5zdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllZFdpdGhQcm9vZlN0ZXBzID0gdGhpcy51bmlmeVN0YXRlbWVudFdpdGhQcm9vZlN0ZXBzKHRoaXMuc3RhdGVtZW50LCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VW5pZmllZFdpdGhQcm9vZlN0ZXBzKSB7XG4gICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyB1bnF1YWxpZmllZCBzdGF0ZW1lbnQuYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYENhbm5vdCB2ZXJpZnkgdGhlICcke3VucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nfScgdW5xdWFsaWZpZWQgc3RhdGVtZW50IGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04odGhpcy5zdGF0ZW1lbnQpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLnN0cmluZywgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIHN0YXRlbWVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudCA9IG5ldyBVbnF1YWxpZmllZFN0YXRlbWVudChzdHJpbmcsIHN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gdW5xdWFsaWZpZWRTdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHVucXVhbGlmaWVkU3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGlmICh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGxldCBzdHJpbmc7XG5cbiAgICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBzaGltLFxuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGU7ICAvLy9cblxuICAgICAgc3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpO1xuXG4gICAgICBzdHJpbmcgPSB0cmltKHN0cmluZyk7ICAvLy9cblxuICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSBuZXcgVW5xdWFsaWZpZWRTdGF0ZW1lbnQoc3RyaW5nLCBzdGF0ZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiB1bnF1YWxpZmllZFN0YXRlbWVudDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgVW5xdWFsaWZpZWRTdGF0ZW1lbnRcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBVbnF1YWxpZmllZFN0YXRlbWVudDtcbiJdLCJuYW1lcyI6WyJyZXZlcnNlIiwiYXJyYXlVdGlsaXRpZXMiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJVbnF1YWxpZmllZFN0YXRlbWVudCIsInN0cmluZyIsInN0YXRlbWVudCIsImdldFN0cmluZyIsImdldFN0YXRlbWVudCIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJ1bmlmeVN0YXRlbWVudCIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZWQiLCJzdGF0ZW1lbnRTdHJpbmciLCJ1bnF1YWxpZmllZFN0YXRlbWVudCIsInVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nIiwidHJhY2UiLCJkZWJ1ZyIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInVuaWZpZWRJbmRlcGVuZGVudGx5Iiwic3RhdGVtZW50UmVzb2x2ZWRJbmRlcGVuZGVudGx5IiwidW5pZnlTdGF0ZW1lbnRXaXRoUHJvb2ZTdGVwcyIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwiY29udGV4dCIsInN0YXRlbWVudFVuaWZpZWRXaXRoUHJvb2ZTdGVwcyIsInByb29mU3RlcHMiLCJnZXRQcm9vZlN0ZXBzIiwic29tZSIsInByb29mU3RlcCIsInZlcmlmeSIsInZlcmlmaWVkIiwic3RhdGVtZW50VmVyaWZpZWQiLCJ0b0pTT04iLCJzdGF0ZW1lbnRKU09OIiwic3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIiwianNvbiIsImZyb21KU09OIiwiZmlsZUNvbnRleHQiLCJzdGF0ZW1lbnRGcm9tSlNPTiIsImZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJTdGF0ZW1lbnQiLCJzaGltIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiZnJvbVN0YXRlbWVudE5vZGUiLCJub2RlIiwibm9kZUFzU3RyaW5nIiwidHJpbSIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBcUtBOzs7ZUFBQTs7O3lCQW5LK0I7MkRBRWQ7NERBQ1E7c0JBRUo7cUJBQ0s7b0JBQ2tDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVELElBQU0sQUFBRUEsVUFBWUMseUJBQWMsQ0FBMUJEO0FBRVIs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