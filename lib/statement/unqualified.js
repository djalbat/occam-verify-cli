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
            key: "verify",
            value: function verify(assignments, stated, localContext) {
                var verified;
                var unqualifiedStatementString = this.getString(); ///
                if (this.statement !== null) {
                    localContext.trace("Verifying the '".concat(unqualifiedStatementString, "' unqualified statement..."));
                    var statementVerified = this.statement.verify(assignments, stated, localContext);
                    if (statementVerified) {
                        verified = true;
                    } else {
                        var statementUnifiedWithProofSteps = this.unifyStatementWithProofSteps(this.statement, assignments, stated, localContext);
                        if (statementUnifiedWithProofSteps) {
                            verified = true;
                        }
                    }
                    if (verified) {
                        localContext.debug("...verified the '".concat(unqualifiedStatementString, "' unqualified statement."));
                    }
                } else {
                    localContext.debug("Cannot verify the '".concat(unqualifiedStatementString, "' unqualified statement because it is nonsense."));
                }
                return verified;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, localContextA, localContextB) {
                var statementUnified;
                var statementString = statement.getString(), unqualifiedStatementString = this.getString(); ///
                localContextB.trace("Unifying the '".concat(statementString, "' statement with the '").concat(unqualifiedStatementString, "' unqualified statement..."));
                statementUnified = this.statement.unifyStatement(statement, substitutions, localContextA, localContextB);
                if (statementUnified) {
                    localContextB.debug("...unified the '".concat(statementString, "' statement with the '").concat(unqualifiedStatementString, "' unqualified statement."));
                }
                return statementUnified;
            }
        },
        {
            key: "resolveIndependently",
            value: function resolveIndependently(substitutions, localContextA, localContextB) {
                var resolveIndependently;
                var unqualifiedStatementString = this.getString(); ///
                localContextB.trace("Resolving the '".concat(unqualifiedStatementString, "' unqualified statement independently..."));
                var statementResolvedIndependently = this.statement.resolveIndependently(substitutions, localContextA, localContextB);
                resolveIndependently = statementResolvedIndependently; ///
                if (resolveIndependently) {
                    localContextB.debug("...resolved the '".concat(unqualifiedStatementString, "' unqualified statement independently."));
                }
                return resolveIndependently;
            }
        },
        {
            key: "unifyStatementWithProofSteps",
            value: function unifyStatementWithProofSteps(statement, assignments, stated, localContext) {
                var statementUnifiedWithProofSteps;
                var proofSteps = localContext.getProofSteps();
                proofSteps = reverse(proofSteps); ///
                statementUnifiedWithProofSteps = proofSteps.some(function(proofStep) {
                    var statementUnified = proofStep.unifyStatement(statement, localContext);
                    if (statementUnified) {
                        return true;
                    }
                });
                return statementUnifiedWithProofSteps;
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
                    var Statement = _shim.default.Statement, statementNode = statementNodeQuery(unqualifiedStatementNode), localContext = _local.default.fromFileContext(fileContext), statement = Statement.fromStatementNode(statementNode, localContext), node = unqualifiedStatementNode; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0ZW1lbnQvdW5xdWFsaWZpZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyB0cmltIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHN0YXRlbWVudEZyb21KU09OLCBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyByZXZlcnNlIH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3Qgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3VucXVhbGlmaWVkU3RhdGVtZW50L3N0YXRlbWVudFwiKTtcblxuY2xhc3MgVW5xdWFsaWZpZWRTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHN0YXRlbWVudCkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3VucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nfScgdW5xdWFsaWZpZWQgc3RhdGVtZW50Li4uYCk7XG5cbiAgICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy5zdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVkV2l0aFByb29mU3RlcHMgPSB0aGlzLnVuaWZ5U3RhdGVtZW50V2l0aFByb29mU3RlcHModGhpcy5zdGF0ZW1lbnQsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZWRXaXRoUHJvb2ZTdGVwcykge1xuICAgICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyB1bnF1YWxpZmllZCBzdGF0ZW1lbnQuYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgQ2Fubm90IHZlcmlmeSB0aGUgJyR7dW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyB1bnF1YWxpZmllZCBzdGF0ZW1lbnQgYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGxvY2FsQ29udGV4dEIudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7dW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyB1bnF1YWxpZmllZCBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLnN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dEIuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHt1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ30nIHVucXVhbGlmaWVkIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHJlc29sdmVJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBsZXQgcmVzb2x2ZUluZGVwZW5kZW50bHk7XG5cbiAgICBjb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGxvY2FsQ29udGV4dEIudHJhY2UoYFJlc29sdmluZyB0aGUgJyR7dW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyB1bnF1YWxpZmllZCBzdGF0ZW1lbnQgaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50UmVzb2x2ZWRJbmRlcGVuZGVudGx5ID0gdGhpcy5zdGF0ZW1lbnQucmVzb2x2ZUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICByZXNvbHZlSW5kZXBlbmRlbnRseSA9IHN0YXRlbWVudFJlc29sdmVkSW5kZXBlbmRlbnRseTsgIC8vL1xuXG4gICAgaWYgKHJlc29sdmVJbmRlcGVuZGVudGx5KSB7XG4gICAgICBsb2NhbENvbnRleHRCLmRlYnVnKGAuLi5yZXNvbHZlZCB0aGUgJyR7dW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyB1bnF1YWxpZmllZCBzdGF0ZW1lbnQgaW5kZXBlbmRlbnRseS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzb2x2ZUluZGVwZW5kZW50bHk7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudFdpdGhQcm9vZlN0ZXBzKHN0YXRlbWVudCwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWRXaXRoUHJvb2ZTdGVwcztcblxuICAgIGxldCBwcm9vZlN0ZXBzID0gbG9jYWxDb250ZXh0LmdldFByb29mU3RlcHMoKTtcblxuICAgIHByb29mU3RlcHMgPSByZXZlcnNlKHByb29mU3RlcHMpOyAvLy9cblxuICAgIHN0YXRlbWVudFVuaWZpZWRXaXRoUHJvb2ZTdGVwcyA9IHByb29mU3RlcHMuc29tZSgocHJvb2ZTdGVwKSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVkID0gcHJvb2ZTdGVwLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZFdpdGhQcm9vZlN0ZXBzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04odGhpcy5zdGF0ZW1lbnQpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLnN0cmluZywgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIHN0YXRlbWVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudCA9IG5ldyBVbnF1YWxpZmllZFN0YXRlbWVudChzdHJpbmcsIHN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gdW5xdWFsaWZpZWRTdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHVucXVhbGlmaWVkU3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGlmICh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGxldCBzdHJpbmc7XG5cbiAgICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBzaGltLFxuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGU7ICAvLy9cblxuICAgICAgc3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpO1xuXG4gICAgICBzdHJpbmcgPSB0cmltKHN0cmluZyk7ICAvLy9cblxuICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSBuZXcgVW5xdWFsaWZpZWRTdGF0ZW1lbnQoc3RyaW5nLCBzdGF0ZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiB1bnF1YWxpZmllZFN0YXRlbWVudDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgVW5xdWFsaWZpZWRTdGF0ZW1lbnRcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBVbnF1YWxpZmllZFN0YXRlbWVudDtcbiJdLCJuYW1lcyI6WyJyZXZlcnNlIiwiYXJyYXlVdGlsaXRpZXMiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJVbnF1YWxpZmllZFN0YXRlbWVudCIsInN0cmluZyIsInN0YXRlbWVudCIsImdldFN0cmluZyIsImdldFN0YXRlbWVudCIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwibG9jYWxDb250ZXh0IiwidmVyaWZpZWQiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyIsInRyYWNlIiwic3RhdGVtZW50VmVyaWZpZWQiLCJzdGF0ZW1lbnRVbmlmaWVkV2l0aFByb29mU3RlcHMiLCJ1bmlmeVN0YXRlbWVudFdpdGhQcm9vZlN0ZXBzIiwiZGVidWciLCJ1bmlmeVN0YXRlbWVudCIsInN1YnN0aXR1dGlvbnMiLCJsb2NhbENvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsInN0YXRlbWVudFVuaWZpZWQiLCJzdGF0ZW1lbnRTdHJpbmciLCJyZXNvbHZlSW5kZXBlbmRlbnRseSIsInN0YXRlbWVudFJlc29sdmVkSW5kZXBlbmRlbnRseSIsInByb29mU3RlcHMiLCJnZXRQcm9vZlN0ZXBzIiwic29tZSIsInByb29mU3RlcCIsInRvSlNPTiIsInN0YXRlbWVudEpTT04iLCJzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJmaWxlQ29udGV4dCIsInN0YXRlbWVudEZyb21KU09OIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJmcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiU3RhdGVtZW50Iiwic2hpbSIsInN0YXRlbWVudE5vZGUiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJmcm9tU3RhdGVtZW50Tm9kZSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJ0cmltIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkErSkE7OztlQUFBOzs7eUJBN0orQjsyREFFZDs0REFDUTtzQkFFSjtxQkFDSztvQkFDa0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUQsSUFBTSxBQUFFQSxVQUFZQyx5QkFBYyxDQUExQkQ7QUFFUixJQUFNRSxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUM7QUFFckMsSUFBQSxBQUFNQyxxQ0FBTjthQUFNQSxxQkFDUUMsTUFBTSxFQUFFQyxTQUFTO2dDQUR6QkY7UUFFRixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFNBQVMsR0FBR0E7O2tCQUhmRjs7WUFNSkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixTQUFTO1lBQ3ZCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxZQUFZO2dCQUN0QyxJQUFJQztn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