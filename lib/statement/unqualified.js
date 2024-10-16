"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return UnqualifiedStatement;
    }
});
var _necessary = require("necessary");
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _string = require("../utilities/string");
var _query = require("../utilities/query");
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
                var statementJSON = this.statement.toJSON(), statement = statementJSON, string = this.string, json = {
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
                var Statement = _shim.default.Statement;
                var statement = json.statement;
                json = statement; ///
                statement = Statement.fromJSON(json, fileContext);
                var string = json.string, unqualifiedStatement = new UnqualifiedStatement(string, statement);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0ZW1lbnQvdW5xdWFsaWZpZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyB0cmltIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgeyByZXZlcnNlIH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3Qgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3VucXVhbGlmaWVkU3RhdGVtZW50L3N0YXRlbWVudFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5xdWFsaWZpZWRTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHN0YXRlbWVudCkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3VucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nfScgdW5xdWFsaWZpZWQgc3RhdGVtZW50Li4uYCk7XG5cbiAgICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy5zdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVkV2l0aFByb29mU3RlcHMgPSB0aGlzLnVuaWZ5U3RhdGVtZW50V2l0aFByb29mU3RlcHModGhpcy5zdGF0ZW1lbnQsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZWRXaXRoUHJvb2ZTdGVwcykge1xuICAgICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyB1bnF1YWxpZmllZCBzdGF0ZW1lbnQuYCk7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGBDYW5ub3QgdmVyaWZ5IHRoZSAnJHt1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ30nIHVucXVhbGlmaWVkIHN0YXRlbWVudCBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0Qi50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHt1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ30nIHVucXVhbGlmaWVkIHN0YXRlbWVudC4uLmApO1xuXG4gICAgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMuc3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0Qi5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3VucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nfScgdW5xdWFsaWZpZWQgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnRXaXRoUHJvb2ZTdGVwcyhzdGF0ZW1lbnQsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkV2l0aFByb29mU3RlcHM7XG5cbiAgICBsZXQgcHJvb2ZTdGVwcyA9IGxvY2FsQ29udGV4dC5nZXRQcm9vZlN0ZXBzKCk7XG5cbiAgICBwcm9vZlN0ZXBzID0gcmV2ZXJzZShwcm9vZlN0ZXBzKTsgLy8vXG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVkV2l0aFByb29mU3RlcHMgPSBwcm9vZlN0ZXBzLnNvbWUoKHByb29mU3RlcCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllZCA9IHByb29mU3RlcC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWRXaXRoUHJvb2ZTdGVwcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRKU09OID0gdGhpcy5zdGF0ZW1lbnQudG9KU09OKCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgc3RhdGVtZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IHNoaW07XG5cbiAgICBsZXQgeyBzdGF0ZW1lbnQgfSA9IGpzb247XG5cbiAgICBqc29uID0gc3RhdGVtZW50OyAvLy9cblxuICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudCA9IG5ldyBVbnF1YWxpZmllZFN0YXRlbWVudChzdHJpbmcsIHN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gdW5xdWFsaWZpZWRTdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHVucXVhbGlmaWVkU3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGlmICh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGxldCBzdHJpbmc7XG5cbiAgICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBzaGltLFxuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGU7ICAvLy9cblxuICAgICAgc3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpO1xuXG4gICAgICBzdHJpbmcgPSB0cmltKHN0cmluZyk7ICAvLy9cblxuICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSBuZXcgVW5xdWFsaWZpZWRTdGF0ZW1lbnQoc3RyaW5nLCBzdGF0ZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiB1bnF1YWxpZmllZFN0YXRlbWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlVucXVhbGlmaWVkU3RhdGVtZW50IiwicmV2ZXJzZSIsImFycmF5VXRpbGl0aWVzIiwic3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3RyaW5nIiwic3RhdGVtZW50IiwiZ2V0U3RyaW5nIiwiZ2V0U3RhdGVtZW50IiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJsb2NhbENvbnRleHQiLCJ2ZXJpZmllZCIsInVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nIiwidHJhY2UiLCJzdGF0ZW1lbnRWZXJpZmllZCIsInN0YXRlbWVudFVuaWZpZWRXaXRoUHJvb2ZTdGVwcyIsInVuaWZ5U3RhdGVtZW50V2l0aFByb29mU3RlcHMiLCJkZWJ1ZyIsInVuaWZ5U3RhdGVtZW50Iiwic3Vic3RpdHV0aW9ucyIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwic3RhdGVtZW50VW5pZmllZCIsInN0YXRlbWVudFN0cmluZyIsInByb29mU3RlcHMiLCJnZXRQcm9vZlN0ZXBzIiwic29tZSIsInByb29mU3RlcCIsInRvSlNPTiIsInN0YXRlbWVudEpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJmaWxlQ29udGV4dCIsIlN0YXRlbWVudCIsInNoaW0iLCJ1bnF1YWxpZmllZFN0YXRlbWVudCIsImZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiZnJvbVN0YXRlbWVudE5vZGUiLCJub2RlIiwibm9kZUFzU3RyaW5nIiwidHJpbSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFjcUJBOzs7eUJBWlU7MkRBRWQ7NERBQ1E7c0JBRUo7cUJBQ0s7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTSxBQUFFQyxVQUFZQyx5QkFBYyxDQUExQkQ7QUFFUixJQUFNRSxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUM7QUFFdEIsSUFBQSxBQUFNSixxQ0FBTjthQUFNQSxxQkFDUEssTUFBTSxFQUFFQyxTQUFTO2dDQURWTjtRQUVqQixJQUFJLENBQUNLLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFNBQVMsR0FBR0E7O2tCQUhBTjs7WUFNbkJPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsU0FBUztZQUN2Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsWUFBWTtnQkFDdEMsSUFB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