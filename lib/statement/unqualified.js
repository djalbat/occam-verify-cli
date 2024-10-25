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
            value: function verify(assignments, stated, context) {
                var verified;
                var unqualifiedStatementString = this.getString(); ///
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
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, generalContext, specificContext) {
                var statementUnified;
                var statementString = statement.getString(), unqualifiedStatementString = this.getString(); ///
                specificContext.trace("Unifying the '".concat(statementString, "' statement with the '").concat(unqualifiedStatementString, "' unqualified statement..."));
                statementUnified = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);
                if (statementUnified) {
                    specificContext.debug("...unified the '".concat(statementString, "' statement with the '").concat(unqualifiedStatementString, "' unqualified statement."));
                }
                return statementUnified;
            }
        },
        {
            key: "resolveIndependently",
            value: function resolveIndependently(substitutions, generalContext, specificContext) {
                var resolveIndependently;
                var unqualifiedStatementString = this.getString(); ///
                specificContext.trace("Resolving the '".concat(unqualifiedStatementString, "' unqualified statement independently..."));
                var statementResolvedIndependently = this.statement.resolveIndependently(substitutions, generalContext, specificContext);
                resolveIndependently = statementResolvedIndependently; ///
                if (resolveIndependently) {
                    specificContext.debug("...resolved the '".concat(unqualifiedStatementString, "' unqualified statement independently."));
                }
                return resolveIndependently;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0ZW1lbnQvdW5xdWFsaWZpZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyB0cmltIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHN0YXRlbWVudEZyb21KU09OLCBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyByZXZlcnNlIH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3Qgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3VucXVhbGlmaWVkU3RhdGVtZW50L3N0YXRlbWVudFwiKTtcblxuY2xhc3MgVW5xdWFsaWZpZWRTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHN0YXRlbWVudCkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyB1bnF1YWxpZmllZCBzdGF0ZW1lbnQuLi5gKTtcblxuICAgICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWQgPSB0aGlzLnN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVkV2l0aFByb29mU3RlcHMgPSB0aGlzLnVuaWZ5U3RhdGVtZW50V2l0aFByb29mU3RlcHModGhpcy5zdGF0ZW1lbnQsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkV2l0aFByb29mU3RlcHMpIHtcbiAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ30nIHVucXVhbGlmaWVkIHN0YXRlbWVudC5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgQ2Fubm90IHZlcmlmeSB0aGUgJyR7dW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyB1bnF1YWxpZmllZCBzdGF0ZW1lbnQgYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHt1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ30nIHVucXVhbGlmaWVkIHN0YXRlbWVudC4uLmApO1xuXG4gICAgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMuc3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7dW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyB1bnF1YWxpZmllZCBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICByZXNvbHZlSW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlc29sdmVJbmRlcGVuZGVudGx5O1xuXG4gICAgY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFJlc29sdmluZyB0aGUgJyR7dW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyB1bnF1YWxpZmllZCBzdGF0ZW1lbnQgaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50UmVzb2x2ZWRJbmRlcGVuZGVudGx5ID0gdGhpcy5zdGF0ZW1lbnQucmVzb2x2ZUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICByZXNvbHZlSW5kZXBlbmRlbnRseSA9IHN0YXRlbWVudFJlc29sdmVkSW5kZXBlbmRlbnRseTsgIC8vL1xuXG4gICAgaWYgKHJlc29sdmVJbmRlcGVuZGVudGx5KSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnJlc29sdmVkIHRoZSAnJHt1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ30nIHVucXVhbGlmaWVkIHN0YXRlbWVudCBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXNvbHZlSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50V2l0aFByb29mU3RlcHMoc3RhdGVtZW50LCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWRXaXRoUHJvb2ZTdGVwcztcblxuICAgIGxldCBwcm9vZlN0ZXBzID0gY29udGV4dC5nZXRQcm9vZlN0ZXBzKCk7XG5cbiAgICBwcm9vZlN0ZXBzID0gcmV2ZXJzZShwcm9vZlN0ZXBzKTsgLy8vXG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVkV2l0aFByb29mU3RlcHMgPSBwcm9vZlN0ZXBzLnNvbWUoKHByb29mU3RlcCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllZCA9IHByb29mU3RlcC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkV2l0aFByb29mU3RlcHM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTih0aGlzLnN0YXRlbWVudCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgc3RhdGVtZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50ID0gbmV3IFVucXVhbGlmaWVkU3RhdGVtZW50KHN0cmluZywgc3RhdGVtZW50KTtcblxuICAgIHJldHVybiB1bnF1YWxpZmllZFN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSBudWxsO1xuXG4gICAgaWYgKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgbGV0IHN0cmluZztcblxuICAgICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IHNoaW0sXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZTsgIC8vL1xuXG4gICAgICBzdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSk7XG5cbiAgICAgIHN0cmluZyA9IHRyaW0oc3RyaW5nKTsgIC8vL1xuXG4gICAgICB1bnF1YWxpZmllZFN0YXRlbWVudCA9IG5ldyBVbnF1YWxpZmllZFN0YXRlbWVudChzdHJpbmcsIHN0YXRlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVucXVhbGlmaWVkU3RhdGVtZW50O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBVbnF1YWxpZmllZFN0YXRlbWVudFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFVucXVhbGlmaWVkU3RhdGVtZW50O1xuIl0sIm5hbWVzIjpbInJldmVyc2UiLCJhcnJheVV0aWxpdGllcyIsInN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIlVucXVhbGlmaWVkU3RhdGVtZW50Iiwic3RyaW5nIiwic3RhdGVtZW50IiwiZ2V0U3RyaW5nIiwiZ2V0U3RhdGVtZW50IiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJjb250ZXh0IiwidmVyaWZpZWQiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyIsInRyYWNlIiwic3RhdGVtZW50VmVyaWZpZWQiLCJzdGF0ZW1lbnRVbmlmaWVkV2l0aFByb29mU3RlcHMiLCJ1bmlmeVN0YXRlbWVudFdpdGhQcm9vZlN0ZXBzIiwiZGVidWciLCJ1bmlmeVN0YXRlbWVudCIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZWQiLCJzdGF0ZW1lbnRTdHJpbmciLCJyZXNvbHZlSW5kZXBlbmRlbnRseSIsInN0YXRlbWVudFJlc29sdmVkSW5kZXBlbmRlbnRseSIsInByb29mU3RlcHMiLCJnZXRQcm9vZlN0ZXBzIiwic29tZSIsInByb29mU3RlcCIsInRvSlNPTiIsInN0YXRlbWVudEpTT04iLCJzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJmaWxlQ29udGV4dCIsInN0YXRlbWVudEZyb21KU09OIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJmcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiU3RhdGVtZW50Iiwic2hpbSIsInN0YXRlbWVudE5vZGUiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJmcm9tU3RhdGVtZW50Tm9kZSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJ0cmltIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnS0E7OztlQUFBOzs7eUJBOUorQjsyREFFZDs0REFDUTtzQkFFSjtxQkFDSztvQkFDa0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUQsSUFBTSxBQUFFQSxVQUFZQyx5QkFBYyxDQUExQkQ7QUFFUixJQUFNRSxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUM7QUFFckMsSUFBQSxBQUFNQyxxQ0FBTjthQUFNQSxxQkFDUUMsTUFBTSxFQUFFQyxTQUFTO2dDQUR6QkY7UUFFRixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFNBQVMsR0FBR0E7O2tCQUhmRjs7WUFNSkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixTQUFTO1lBQ3ZCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxPQUFPO2dCQUNqQyxJQUFJQztnQkFFSixJQUFNQyw2QkFBNkIsSUFBSSxDQUFDUCxTQUFTLElBQUksR0FBRztnQkFFeEQsSUFBSSxJQUFJLENBQUNELFNBQVMsS0FBSyxNQUFNO29CQUMzQk0sUUFBUUcsS0FBSyxDQUFDLEFBQUMsa0JBQTRDLE9BQTNCRCw0QkFBMkI7b0JBRTNELElBQU1FLG9CQUFvQixJQUFJLENBQUNWLFNBQVMsQ0FBQ0csTUFBTSxDQUFDQyxhQUFhQyxRQUFRQztvQkFFckUsSUFBSUksbUJBQW1CO3dCQUNyQkgsV0FBVztvQkFDYixPQUFPO3dCQUNMLElBQU1JLGlDQUFpQyxJQUFJLENBQUNDLDRCQUE0QixDQUFDLElBQUksQ0FBQ1osU0FBUyxFQUFFSSxhQUFhQyxRQUFRQzt3QkFFOUcsSUFBSUssZ0NBQWdDOzRCQUNsQ0osV0FBVzt3QkFDYjtvQkFDRjtvQkFFQSxJQUFJQSxVQUFVO3dCQUNaRCxRQUFRTyxLQUFLLENBQUMsQUFBQyxvQkFBOEMsT0FBM0JMLDRCQUEyQjtvQkFDL0Q7Z0JBQ0YsT0FBTztvQkFDTEYsUUFBUU8sS0FBSyxDQUFDLEFBQUMsc0JBQWdELE9BQTNCTCw0QkFBMkI7Z0JBQ2pFO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZWQsU0FBUyxFQUFFZSxhQUFhLEVBQUVDLGNBQWMsRUFBRUMsZUFBZTtnQkFDdEUsSUFBSUM7Z0JBRUosSUFBTUMsa0JBQWtCbkIsVUFBVUMsU0FBUyxJQUNyQ08sNkJBQTZCLElBQUksQ0FBQ1AsU0FBUyxJQUFLLEdBQUc7Z0JBRXpEZ0IsZ0JBQWdCUixLQUFLLENBQUMsQUFBQyxpQkFBd0RELE9BQXhDVyxpQkFBZ0IsMEJBQW1ELE9BQTNCWCw0QkFBMkI7Z0JBRTFHVSxtQkFBbUIsSUFBSSxDQUFDbEIsU0FBUyxDQUFDYyxjQUFjLENBQUNkLFdBQVdlLGVBQWVDLGdCQUFnQkM7Z0JBRTNGLElBQUlDLGtCQUFrQjtvQkFDcEJELGdCQUFnQkosS0FBSyxDQUFDLEFBQUMsbUJBQTBETCxPQUF4Q1csaUJBQWdCLDBCQUFtRCxPQUEzQlgsNEJBQTJCO2dCQUM5RztnQkFFQSxPQUFPVTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLHFCQUFxQkwsYUFBYSxFQUFFQyxjQUFjLEVBQUVDLGVBQWU7Z0JBQ2pFLElBQUlHO2dCQUVKLElBQU1aLDZCQUE2QixJQUFJLENBQUNQLFNBQVMsSUFBSyxHQUFHO2dCQUV6RGdCLGdCQUFnQlIsS0FBSyxDQUFDLEFBQUMsa0JBQTRDLE9BQTNCRCw0QkFBMkI7Z0JBRW5FLElBQU1hLGlDQUFpQyxJQUFJLENBQUNyQixTQUFTLENBQUNvQixvQkFBb0IsQ0FBQ0wsZUFBZUMsZ0JBQWdCQztnQkFFMUdHLHVCQUF1QkMsZ0NBQWlDLEdBQUc7Z0JBRTNELElBQUlELHNCQUFzQjtvQkFDeEJILGdCQUFnQkosS0FBSyxDQUFDLEFBQUMsb0JBQThDLE9BQTNCTCw0QkFBMkI7Z0JBQ3ZFO2dCQUVBLE9BQU9ZO1lBQ1Q7OztZQUVBUixLQUFBQTttQkFBQUEsU0FBQUEsNkJBQTZCWixTQUFTLEVBQUVJLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxPQUFPO2dCQUNsRSxJQUFJSztnQkFFSixJQUFJVyxhQUFhaEIsUUFBUWlCLGFBQWE7Z0JBRXRDRCxhQUFhNUIsUUFBUTRCLGFBQWEsR0FBRztnQkFFckNYLGlDQUFpQ1csV0FBV0UsSUFBSSxDQUFDLFNBQUNDO29CQUNoRCxJQUFNUCxtQkFBbUJPLFVBQVVYLGNBQWMsQ0FBQ2QsV0FBV007b0JBRTdELElBQUlZLGtCQUFrQjt3QkFDcEIsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPUDtZQUNUOzs7WUFFQWUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGdCQUFnQkMsSUFBQUEsOEJBQXdCLEVBQUMsSUFBSSxDQUFDNUIsU0FBUyxHQUN2REEsWUFBWTJCLGVBQ1o1QixTQUFTLElBQUksQ0FBQ0EsTUFBTSxFQUNwQjhCLE9BQU87b0JBQ0w5QixRQUFBQTtvQkFDQUMsV0FBQUE7Z0JBQ0Y7Z0JBRU4sT0FBTzZCO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFRSxXQUFXO2dCQUMvQixJQUFNLEFBQUVoQyxTQUFXOEIsS0FBWDlCLFFBQ0ZDLFlBQVlnQyxJQUFBQSx1QkFBaUIsRUFBQ0gsTUFBTUUsY0FDcENFLHVCQUF1QixJQWhIM0JuQyxxQkFnSG9EQyxRQUFRQztnQkFFOUQsT0FBT2lDO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSw2QkFBNkJDLHdCQUF3QixFQUFFSixXQUFXO2dCQUN2RSxJQUFJRSx1QkFBdUI7Z0JBRTNCLElBQUlFLDZCQUE2QixNQUFNO29CQUNyQyxJQUFJcEM7b0JBRUosSUFBTSxBQUFFcUMsWUFBY0MsYUFBSSxDQUFsQkQsV0FDRkUsZ0JBQWdCMUMsbUJBQW1CdUMsMkJBQ25DSSxlQUFlQyxjQUFZLENBQUNDLGVBQWUsQ0FBQ1YsY0FDNUN6QixVQUFVaUMsY0FDVnZDLFlBQVlvQyxVQUFVTSxpQkFBaUIsQ0FBQ0osZUFBZWhDLFVBQ3ZEcUMsT0FBT1IsMEJBQTJCLEdBQUc7b0JBRTNDcEMsU0FBU2dDLFlBQVlhLFlBQVksQ0FBQ0Q7b0JBRWxDNUMsU0FBUzhDLElBQUFBLFlBQUksRUFBQzlDLFNBQVUsR0FBRztvQkFFM0JrQyx1QkFBdUIsSUF0SXZCbkMscUJBc0lnREMsUUFBUUM7Z0JBQzFEO2dCQUVBLE9BQU9pQztZQUNUOzs7V0ExSUluQzs7QUE2SU5nRCxPQUFPQyxNQUFNLENBQUNWLGFBQUksRUFBRTtJQUNsQnZDLHNCQUFBQTtBQUNGO0lBRUEsV0FBZUEifQ==