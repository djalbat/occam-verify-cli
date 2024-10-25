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
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
var _query = require("./utilities/query");
var _json = require("./utilities/json");
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
var unqualifiedStatementNodeQuery = (0, _query.nodeQuery)("/consequent/unqualifiedStatement");
var Consequent = /*#__PURE__*/ function() {
    function Consequent(fileContext, unqualifiedStatement) {
        _class_call_check(this, Consequent);
        this.fileContext = fileContext;
        this.unqualifiedStatement = unqualifiedStatement;
    }
    _create_class(Consequent, [
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
            value: function unifyStatement(statement, substitutions, context) {
                var statementUnified;
                var localContext = _local.default.fromFileContext(this.fileContext), generalContext = localContext, specificContext = context; ///
                var consequent = this, statementString = statement.getString(), consequentString = consequent.getString();
                specificContext.trace("Unifying the '".concat(statementString, "' statement with the '").concat(consequentString, "' consequent..."));
                statementUnified = this.unqualifiedStatement.unifyStatement(statement, substitutions, generalContext, specificContext);
                if (statementUnified) {
                    specificContext.debug("...unified the '".concat(statementString, "' statement with the '").concat(consequentString, "' consequent."));
                }
                return statementUnified;
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                var verified = false;
                var consequentString = this.getString(); ///
                context.trace("Verifying the '".concat(consequentString, "' consequent..."));
                var stated = true, assignments = [], unqualifiedStatementVerified = this.unqualifiedStatement.verify(assignments, stated, context);
                if (unqualifiedStatementVerified) {
                    verified = true;
                }
                if (verified) {
                    context.debug("...verified the '".concat(consequentString, "' consequent."));
                }
                return verified;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var unqualifiedStatementJSON = (0, _json.unqualifiedStatementToUnqualifiedStatementJSON)(this.unqualifiedStatement), unqualifiedStatement = unqualifiedStatementJSON, json = {
                    unqualifiedStatement: unqualifiedStatement
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var unqualifiedStatement = (0, _json.unqualifiedStatementFromJSON)(json, fileContext), consequent = new Consequent(fileContext, unqualifiedStatement);
                return consequent;
            }
        },
        {
            key: "fromConsequentNode",
            value: function fromConsequentNode(consequentNode, fileContext) {
                var UnqualifiedStatement = _shim.default.UnqualifiedStatement, unqualifiedStatementNode = unqualifiedStatementNodeQuery(consequentNode), unqualifiedStatement = UnqualifiedStatement.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext), consequent = new Consequent(fileContext, unqualifiedStatement);
                return consequent;
            }
        }
    ]);
    return Consequent;
}();
Object.assign(_shim.default, {
    Consequent: Consequent
});
var _default = Consequent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zZXF1ZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi9zaGltXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB1bnF1YWxpZmllZFN0YXRlbWVudEZyb21KU09OLCB1bnF1YWxpZmllZFN0YXRlbWVudFRvVW5xdWFsaWZpZWRTdGF0ZW1lbnRKU09OIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uc2VxdWVudC91bnF1YWxpZmllZFN0YXRlbWVudFwiKTtcblxuY2xhc3MgQ29uc2VxdWVudCB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCB1bnF1YWxpZmllZFN0YXRlbWVudCkge1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgICB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50ID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldFVucXVhbGlmaWVkU3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkgeyByZXR1cm4gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudC5nZXRTdHJpbmcoKTsgfVxuXG4gIGdldFN0YXRlbWVudCgpIHsgcmV0dXJuIHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQuZ2V0U3RhdGVtZW50KCk7IH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQodGhpcy5maWxlQ29udGV4dCksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29uc3QgY29uc2VxdWVudCA9IHRoaXMsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgY29uc2VxdWVudFN0cmluZyA9IGNvbnNlcXVlbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Y29uc2VxdWVudFN0cmluZ30nIGNvbnNlcXVlbnQuLi5gKTtcblxuICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Y29uc2VxdWVudFN0cmluZ30nIGNvbnNlcXVlbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29uc2VxdWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29uc2VxdWVudFN0cmluZ30nIGNvbnNlcXVlbnQuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAodW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbnNlcXVlbnRTdHJpbmd9JyBjb25zZXF1ZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudEpTT04gPSB1bnF1YWxpZmllZFN0YXRlbWVudFRvVW5xdWFsaWZpZWRTdGF0ZW1lbnRKU09OKHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50ID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSB1bnF1YWxpZmllZFN0YXRlbWVudEZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBjb25zZXF1ZW50ID0gbmV3IENvbnNlcXVlbnQoZmlsZUNvbnRleHQsIHVucXVhbGlmaWVkU3RhdGVtZW50KTtcblxuICAgIHJldHVybiBjb25zZXF1ZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Db25zZXF1ZW50Tm9kZShjb25zZXF1ZW50Tm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IFVucXVhbGlmaWVkU3RhdGVtZW50IH0gPSBzaGltLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5KGNvbnNlcXVlbnROb2RlKSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudCA9IFVucXVhbGlmaWVkU3RhdGVtZW50LmZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgY29uc2VxdWVudCA9IG5ldyBDb25zZXF1ZW50KGZpbGVDb250ZXh0LCB1bnF1YWxpZmllZFN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gY29uc2VxdWVudDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgQ29uc2VxdWVudFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnNlcXVlbnQ7XG4iXSwibmFtZXMiOlsidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJDb25zZXF1ZW50IiwiZmlsZUNvbnRleHQiLCJ1bnF1YWxpZmllZFN0YXRlbWVudCIsImdldEZpbGVDb250ZXh0IiwiZ2V0VW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJnZXRTdHJpbmciLCJnZXRTdGF0ZW1lbnQiLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudCIsInN1YnN0aXR1dGlvbnMiLCJjb250ZXh0Iiwic3RhdGVtZW50VW5pZmllZCIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwiY29uc2VxdWVudCIsInN0YXRlbWVudFN0cmluZyIsImNvbnNlcXVlbnRTdHJpbmciLCJ0cmFjZSIsImRlYnVnIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJzdGF0ZWQiLCJhc3NpZ25tZW50cyIsInVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQiLCJ0b0pTT04iLCJ1bnF1YWxpZmllZFN0YXRlbWVudEpTT04iLCJ1bnF1YWxpZmllZFN0YXRlbWVudFRvVW5xdWFsaWZpZWRTdGF0ZW1lbnRKU09OIiwianNvbiIsImZyb21KU09OIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRGcm9tSlNPTiIsImZyb21Db25zZXF1ZW50Tm9kZSIsImNvbnNlcXVlbnROb2RlIiwiVW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJzaGltIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBdUdBOzs7ZUFBQTs7OzJEQXJHaUI7NERBQ1E7cUJBRUM7b0JBQ21FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdGLElBQU1BLGdDQUFnQ0MsSUFBQUEsZ0JBQVMsRUFBQztBQUVoRCxJQUFBLEFBQU1DLDJCQUFOO2FBQU1BLFdBQ1FDLFdBQVcsRUFBRUMsb0JBQW9CO2dDQUR6Q0Y7UUFFRixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxvQkFBb0IsR0FBR0E7O2tCQUgxQkY7O1lBTUpHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsV0FBVztZQUN6Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0Ysb0JBQW9CO1lBQ2xDOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFjLE9BQU8sSUFBSSxDQUFDSCxvQkFBb0IsQ0FBQ0csU0FBUztZQUFJOzs7WUFFNURDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFB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