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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0ZW1lbnQvdW5xdWFsaWZpZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyB0cmltIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHN0YXRlbWVudEZyb21KU09OLCBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyByZXZlcnNlIH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3Qgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3VucXVhbGlmaWVkU3RhdGVtZW50L3N0YXRlbWVudFwiKTtcblxuY2xhc3MgVW5xdWFsaWZpZWRTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHN0YXRlbWVudCkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3VucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nfScgdW5xdWFsaWZpZWQgc3RhdGVtZW50Li4uYCk7XG5cbiAgICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy5zdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVkV2l0aFByb29mU3RlcHMgPSB0aGlzLnVuaWZ5U3RhdGVtZW50V2l0aFByb29mU3RlcHModGhpcy5zdGF0ZW1lbnQsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZWRXaXRoUHJvb2ZTdGVwcykge1xuICAgICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyB1bnF1YWxpZmllZCBzdGF0ZW1lbnQuYCk7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGBDYW5ub3QgdmVyaWZ5IHRoZSAnJHt1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ30nIHVucXVhbGlmaWVkIHN0YXRlbWVudCBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0Qi50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHt1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ30nIHVucXVhbGlmaWVkIHN0YXRlbWVudC4uLmApO1xuXG4gICAgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMuc3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0Qi5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3VucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nfScgdW5xdWFsaWZpZWQgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnRXaXRoUHJvb2ZTdGVwcyhzdGF0ZW1lbnQsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkV2l0aFByb29mU3RlcHM7XG5cbiAgICBsZXQgcHJvb2ZTdGVwcyA9IGxvY2FsQ29udGV4dC5nZXRQcm9vZlN0ZXBzKCk7XG5cbiAgICBwcm9vZlN0ZXBzID0gcmV2ZXJzZShwcm9vZlN0ZXBzKTsgLy8vXG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVkV2l0aFByb29mU3RlcHMgPSBwcm9vZlN0ZXBzLnNvbWUoKHByb29mU3RlcCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllZCA9IHByb29mU3RlcC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWRXaXRoUHJvb2ZTdGVwcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OKHRoaXMuc3RhdGVtZW50KSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRKU09OLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBzdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSBuZXcgVW5xdWFsaWZpZWRTdGF0ZW1lbnQoc3RyaW5nLCBzdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIHVucXVhbGlmaWVkU3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCB1bnF1YWxpZmllZFN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBpZiAodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBsZXQgc3RyaW5nO1xuXG4gICAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gc2hpbSxcbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlOyAgLy8vXG5cbiAgICAgIHN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKTtcblxuICAgICAgc3RyaW5nID0gdHJpbShzdHJpbmcpOyAgLy8vXG5cbiAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50ID0gbmV3IFVucXVhbGlmaWVkU3RhdGVtZW50KHN0cmluZywgc3RhdGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5xdWFsaWZpZWRTdGF0ZW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIFVucXVhbGlmaWVkU3RhdGVtZW50XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgVW5xdWFsaWZpZWRTdGF0ZW1lbnQ7XG4iXSwibmFtZXMiOlsicmV2ZXJzZSIsImFycmF5VXRpbGl0aWVzIiwic3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiVW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJzdHJpbmciLCJzdGF0ZW1lbnQiLCJnZXRTdHJpbmciLCJnZXRTdGF0ZW1lbnQiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImxvY2FsQ29udGV4dCIsInZlcmlmaWVkIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmciLCJ0cmFjZSIsInN0YXRlbWVudFZlcmlmaWVkIiwic3RhdGVtZW50VW5pZmllZFdpdGhQcm9vZlN0ZXBzIiwidW5pZnlTdGF0ZW1lbnRXaXRoUHJvb2ZTdGVwcyIsImRlYnVnIiwidW5pZnlTdGF0ZW1lbnQiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJzdGF0ZW1lbnRVbmlmaWVkIiwic3RhdGVtZW50U3RyaW5nIiwicHJvb2ZTdGVwcyIsImdldFByb29mU3RlcHMiLCJzb21lIiwicHJvb2ZTdGVwIiwidG9KU09OIiwic3RhdGVtZW50SlNPTiIsInN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImZpbGVDb250ZXh0Iiwic3RhdGVtZW50RnJvbUpTT04iLCJ1bnF1YWxpZmllZFN0YXRlbWVudCIsImZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJTdGF0ZW1lbnQiLCJzaGltIiwic3RhdGVtZW50Tm9kZSIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsImZyb21TdGF0ZW1lbnROb2RlIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsInRyaW0iLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQThJQTs7O2VBQUE7Ozt5QkE1SStCOzJEQUVkOzREQUNRO3NCQUVKO3FCQUNLO29CQUNrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RCxJQUFNLEFBQUVBLFVBQVlDLHlCQUFjLENBQTFCRDtBQUVSLElBQU1FLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQztBQUVyQyxJQUFBLEFBQU1DLHFDQUFOO2FBQU1BLHFCQUNRQyxNQUFNLEVBQUVDLFNBQVM7Z0NBRHpCRjtRQUVGLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7a0JBSGZGOztZQU1KRyxLQUFBQTttQkFBQUEsU0FBQUE7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