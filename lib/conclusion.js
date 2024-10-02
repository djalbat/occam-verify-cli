"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Conclusion;
    }
});
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("./unifier/metaLevel"));
var _unqualified = /*#__PURE__*/ _interop_require_default(require("./statement/unqualified"));
var _string = require("./utilities/string");
var _query = require("./utilities/query");
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
var unqualifiedStatementNodeQuery = (0, _query.nodeQuery)("/conclusion/unqualifiedStatement");
var Conclusion = /*#__PURE__*/ function() {
    function Conclusion(fileContext, unqualifiedStatement) {
        _class_call_check(this, Conclusion);
        this.fileContext = fileContext;
        this.unqualifiedStatement = unqualifiedStatement;
    }
    _create_class(Conclusion, [
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
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, localContext) {
                var statementUnified;
                var conclusion = this, statementString = statement.getString(), conclusionStatement = conclusion.getStatement(), conclusionStatementString = conclusionStatement.getString();
                localContext.trace("Unifying the '".concat(statementString, "' statement with the conclusion's '").concat(conclusionStatementString, "' statement..."));
                var statementNode = statement.getNode(), conclusionStatementNode = conclusionStatement.getNode(), nodeA = conclusionStatementNode, nodeB = statementNode, fileContextA = this.fileContext, localContextA = _local.default.fromFileContext(fileContextA), localContextB = localContext, unified = _metaLevel.default.unify(nodeA, nodeB, substitutions, localContextA, localContextB);
                statementUnified = unified; ///
                if (statementUnified) {
                    localContext.debug("...unified the '".concat(statementString, "' statement with the conclusion's '").concat(conclusionStatementString, "' statement."));
                }
                return statementUnified;
            }
        },
        {
            key: "verify",
            value: function verify(localContext) {
                var verified = false, conclusionString = this.getString(); ///
                conclusionString = (0, _string.trim)(conclusionString); ///
                localContext.trace("Verifying the '".concat(conclusionString, "' conclusion..."));
                var stated = true, assignments = [], unqualifiedStatementVerified = this.unqualifiedStatement.verify(assignments, stated, localContext);
                if (unqualifiedStatementVerified) {
                    verified = true;
                }
                if (verified) {
                    localContext.debug("...verified the '".concat(conclusionString, "' conclusion."));
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
                var conclusion = null;
                debugger;
                return conclusion;
            }
        },
        {
            key: "fromConclusionNode",
            value: function fromConclusionNode(conclusionNode, fileContext) {
                var unqualifiedStatementNode = unqualifiedStatementNodeQuery(conclusionNode), unqualifiedStatement = _unqualified.default.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext), conclusion = new Conclusion(fileContext, unqualifiedStatement);
                return conclusion;
            }
        }
    ]);
    return Conclusion;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25jbHVzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBtZXRhTGV2ZWxVbmlmaWVyIGZyb20gXCIuL3VuaWZpZXIvbWV0YUxldmVsXCI7XG5pbXBvcnQgVW5xdWFsaWZpZWRTdGF0ZW1lbnQgZnJvbSBcIi4vc3RhdGVtZW50L3VucXVhbGlmaWVkXCI7XG5cbmltcG9ydCB7IHRyaW0gfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uY2x1c2lvbi91bnF1YWxpZmllZFN0YXRlbWVudFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uY2x1c2lvbiB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCB1bnF1YWxpZmllZFN0YXRlbWVudCkge1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgICB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50ID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldFVucXVhbGlmaWVkU3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkgeyByZXR1cm4gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudC5nZXRTdHJpbmcoKTsgfVxuXG4gIGdldFN0YXRlbWVudCgpIHsgcmV0dXJuIHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQuZ2V0U3RhdGVtZW50KCk7IH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkO1xuXG4gICAgY29uc3QgY29uY2x1c2lvbiA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBjb25jbHVzaW9uU3RhdGVtZW50ID0gY29uY2x1c2lvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBjb25jbHVzaW9uU3RhdGVtZW50U3RyaW5nID0gY29uY2x1c2lvblN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSBjb25jbHVzaW9uJ3MgJyR7Y29uY2x1c2lvblN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgY29uY2x1c2lvblN0YXRlbWVudE5vZGUgPSBjb25jbHVzaW9uU3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBub2RlQSA9IGNvbmNsdXNpb25TdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgbm9kZUIgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgZmlsZUNvbnRleHRBID0gdGhpcy5maWxlQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGxvY2FsQ29udGV4dEEgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0QSksXG4gICAgICAgICAgbG9jYWxDb250ZXh0QiA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgdW5pZmllZCA9IG1ldGFMZXZlbFVuaWZpZXIudW5pZnkobm9kZUEsIG5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgIHN0YXRlbWVudFVuaWZpZWQgPSB1bmlmaWVkOyAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSBjb25jbHVzaW9uJ3MgJyR7Y29uY2x1c2lvblN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeShsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZSxcbiAgICAgICAgY29uY2x1c2lvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbmNsdXNpb25TdHJpbmcgPSB0cmltKGNvbmNsdXNpb25TdHJpbmcpOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29uY2x1c2lvblN0cmluZ30nIGNvbmNsdXNpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmICh1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb25jbHVzaW9uU3RyaW5nfScgY29uY2x1c2lvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50ID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcsICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgY29uY2x1c2lvbiA9IG51bGw7XG5cbiAgICBkZWJ1Z2dlclxuXG4gICAgcmV0dXJuIGNvbmNsdXNpb247XG4gIH1cbiAgc3RhdGljIGZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeShjb25jbHVzaW9uTm9kZSksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSBVbnF1YWxpZmllZFN0YXRlbWVudC5mcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGNvbmNsdXNpb24gPSBuZXcgQ29uY2x1c2lvbihmaWxlQ29udGV4dCwgdW5xdWFsaWZpZWRTdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIGNvbmNsdXNpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb25jbHVzaW9uIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJmaWxlQ29udGV4dCIsInVucXVhbGlmaWVkU3RhdGVtZW50IiwiZ2V0RmlsZUNvbnRleHQiLCJnZXRVbnF1YWxpZmllZFN0YXRlbWVudCIsImdldFN0cmluZyIsImdldFN0YXRlbWVudCIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3Vic3RpdHV0aW9ucyIsImxvY2FsQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZWQiLCJjb25jbHVzaW9uIiwic3RhdGVtZW50U3RyaW5nIiwiY29uY2x1c2lvblN0YXRlbWVudCIsImNvbmNsdXNpb25TdGF0ZW1lbnRTdHJpbmciLCJ0cmFjZSIsInN0YXRlbWVudE5vZGUiLCJnZXROb2RlIiwiY29uY2x1c2lvblN0YXRlbWVudE5vZGUiLCJub2RlQSIsIm5vZGVCIiwiZmlsZUNvbnRleHRBIiwibG9jYWxDb250ZXh0QSIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsImxvY2FsQ29udGV4dEIiLCJ1bmlmaWVkIiwibWV0YUxldmVsVW5pZmllciIsInVuaWZ5IiwiZGVidWciLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsImNvbmNsdXNpb25TdHJpbmciLCJ0cmltIiwic3RhdGVkIiwiYXNzaWdubWVudHMiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkIiwidG9KU09OIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmciLCJqc29uIiwiZnJvbUpTT04iLCJmcm9tQ29uY2x1c2lvbk5vZGUiLCJjb25jbHVzaW9uTm9kZSIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsIlVucXVhbGlmaWVkU3RhdGVtZW50IiwiZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7NERBVEk7Z0VBQ0k7a0VBQ0k7c0JBRVo7cUJBQ0s7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUMsZ0NBQWdDQyxJQUFBQSxnQkFBUyxFQUFDO0FBRWpDLElBQUEsQUFBTUYsMkJBQU47YUFBTUEsV0FDUEcsV0FBVyxFQUFFQyxvQkFBb0I7Z0NBRDFCSjtRQUVqQixJQUFJLENBQUNHLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxvQkFBb0Is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