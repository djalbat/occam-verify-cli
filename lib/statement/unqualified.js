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
                    verified = statementVerified; ///
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
            value: function unifyStatement(statement, substitutions, fileContext, localContext) {
                var statementUnified;
                var statementString = statement.getString(), unqualifiedStatementString = this.getString(); ///
                localContext.trace("Unifying the '".concat(statementString, "' statement with the '").concat(unqualifiedStatementString, "' unqualified statement..."));
                var localContextB = localContext;
                localContext = _local.default.fromFileContext(fileContext);
                var localContextA = localContext; ///
                statementUnified = this.statement.unifyStatement(statement, substitutions, localContextA, localContextB);
                if (statementUnified) {
                    localContext.debug("...unified the '".concat(statementString, "' statement with the '").concat(unqualifiedStatementString, "' unqualified statement."));
                }
                return statementUnified;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0ZW1lbnQvdW5xdWFsaWZpZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5cbmltcG9ydCB7IHRyaW0gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdW5xdWFsaWZpZWRTdGF0ZW1lbnQvc3RhdGVtZW50XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbnF1YWxpZmllZFN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgc3RhdGVtZW50KSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyB1bnF1YWxpZmllZCBzdGF0ZW1lbnQuLi5gKTtcblxuICAgICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWQgPSB0aGlzLnN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgdmVyaWZpZWQgPSBzdGF0ZW1lbnRWZXJpZmllZDsgLy8vXG5cbiAgICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ30nIHVucXVhbGlmaWVkIHN0YXRlbWVudC5gKTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYENhbm5vdCB2ZXJpZnkgdGhlICcke3VucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nfScgdW5xdWFsaWZpZWQgc3RhdGVtZW50IGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQ7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7dW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyB1bnF1YWxpZmllZCBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IGxvY2FsQ29udGV4dEIgPSBsb2NhbENvbnRleHQ7XG5cbiAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KTtcblxuICAgIGNvbnN0IGxvY2FsQ29udGV4dEEgPSBsb2NhbENvbnRleHQ7IC8vL1xuXG4gICAgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMuc3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7dW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyB1bnF1YWxpZmllZCBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50SlNPTiA9IHRoaXMuc3RhdGVtZW50LnRvSlNPTigpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLnN0cmluZywgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIHN0YXRlbWVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBzaGltO1xuXG4gICAgbGV0IHsgc3RhdGVtZW50IH0gPSBqc29uO1xuXG4gICAganNvbiA9IHN0YXRlbWVudDsgLy8vXG5cbiAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSBuZXcgVW5xdWFsaWZpZWRTdGF0ZW1lbnQoc3RyaW5nLCBzdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIHVucXVhbGlmaWVkU3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCB1bnF1YWxpZmllZFN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBpZiAodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBsZXQgc3RyaW5nO1xuXG4gICAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gc2hpbSxcbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlOyAgLy8vXG5cbiAgICAgIHN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKTtcblxuICAgICAgc3RyaW5nID0gdHJpbShzdHJpbmcpOyAgLy8vXG5cbiAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50ID0gbmV3IFVucXVhbGlmaWVkU3RhdGVtZW50KHN0cmluZywgc3RhdGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5xdWFsaWZpZWRTdGF0ZW1lbnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJVbnF1YWxpZmllZFN0YXRlbWVudCIsInN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN0cmluZyIsInN0YXRlbWVudCIsImdldFN0cmluZyIsImdldFN0YXRlbWVudCIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwibG9jYWxDb250ZXh0IiwidmVyaWZpZWQiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyIsInRyYWNlIiwic3RhdGVtZW50VmVyaWZpZWQiLCJkZWJ1ZyIsInVuaWZ5U3RhdGVtZW50Iiwic3Vic3RpdHV0aW9ucyIsImZpbGVDb250ZXh0Iiwic3RhdGVtZW50VW5pZmllZCIsInN0YXRlbWVudFN0cmluZyIsImxvY2FsQ29udGV4dEIiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJsb2NhbENvbnRleHRBIiwidG9KU09OIiwic3RhdGVtZW50SlNPTiIsImpzb24iLCJmcm9tSlNPTiIsIlN0YXRlbWVudCIsInNoaW0iLCJ1bnF1YWxpZmllZFN0YXRlbWVudCIsImZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJub2RlIiwibm9kZUFzU3RyaW5nIiwidHJpbSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7MkRBUko7NERBQ1E7c0JBRUo7cUJBQ0s7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUMscUJBQXFCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXRCLElBQUEsQUFBTUYscUNBQU47YUFBTUEscUJBQ1BHLE1BQU0sRUFBRUMsU0FBUztnQ0FEVko7UUFFakIsSUFBSSxDQUFDRyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxTQUFTLEdBQUdBOztrQkFIQUo7O1lBTW5CSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFNBQVM7WUFDdkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsV0FBVyxFQUFFQyxNQUFNLEVBQUVD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