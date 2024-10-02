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
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("./unifier/metaLevel"));
var _unqualified = /*#__PURE__*/ _interop_require_default(require("./statement/unqualified"));
var _query = require("./utilities/query");
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
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
                var verified = false;
                var conclusionString = this.getString(); ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25jbHVzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgbWV0YUxldmVsVW5pZmllciBmcm9tIFwiLi91bmlmaWVyL21ldGFMZXZlbFwiO1xuaW1wb3J0IFVucXVhbGlmaWVkU3RhdGVtZW50IGZyb20gXCIuL3N0YXRlbWVudC91bnF1YWxpZmllZFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4vY29udGV4dC9sb2NhbFwiO1xuXG5jb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25jbHVzaW9uL3VucXVhbGlmaWVkU3RhdGVtZW50XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25jbHVzaW9uIHtcbiAgY29uc3RydWN0b3IoZmlsZUNvbnRleHQsIHVucXVhbGlmaWVkU3RhdGVtZW50KSB7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICAgIHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSB1bnF1YWxpZmllZFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0VW5xdWFsaWZpZWRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7IHJldHVybiB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0cmluZygpOyB9XG5cbiAgZ2V0U3RhdGVtZW50KCkgeyByZXR1cm4gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudC5nZXRTdGF0ZW1lbnQoKTsgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQ7XG5cbiAgICBjb25zdCBjb25jbHVzaW9uID0gdGhpcywgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIGNvbmNsdXNpb25TdGF0ZW1lbnQgPSBjb25jbHVzaW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIGNvbmNsdXNpb25TdGF0ZW1lbnRTdHJpbmcgPSBjb25jbHVzaW9uU3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlIGNvbmNsdXNpb24ncyAnJHtjb25jbHVzaW9uU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBjb25jbHVzaW9uU3RhdGVtZW50Tm9kZSA9IGNvbmNsdXNpb25TdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG5vZGVBID0gY29uY2x1c2lvblN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBub2RlQiA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBmaWxlQ29udGV4dEEgPSB0aGlzLmZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgICAgbG9jYWxDb250ZXh0QSA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHRBKSxcbiAgICAgICAgICBsb2NhbENvbnRleHRCID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICB1bmlmaWVkID0gbWV0YUxldmVsVW5pZmllci51bmlmeShub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgc3RhdGVtZW50VW5pZmllZCA9IHVuaWZpZWQ7IC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlIGNvbmNsdXNpb24ncyAnJHtjb25jbHVzaW9uU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5KGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29uY2x1c2lvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb25jbHVzaW9uU3RyaW5nfScgY29uY2x1c2lvbi4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbmNsdXNpb25TdHJpbmd9JyBjb25jbHVzaW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyA9IHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSB1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZywgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBjb25jbHVzaW9uID0gbnVsbDtcblxuICAgIGRlYnVnZ2VyXG5cbiAgICByZXR1cm4gY29uY2x1c2lvbjtcbiAgfVxuICBzdGF0aWMgZnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5KGNvbmNsdXNpb25Ob2RlKSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudCA9IFVucXVhbGlmaWVkU3RhdGVtZW50LmZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgY29uY2x1c2lvbiA9IG5ldyBDb25jbHVzaW9uKGZpbGVDb250ZXh0LCB1bnF1YWxpZmllZFN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gY29uY2x1c2lvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbmNsdXNpb24iLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImZpbGVDb250ZXh0IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJnZXRGaWxlQ29udGV4dCIsImdldFVucXVhbGlmaWVkU3RhdGVtZW50IiwiZ2V0U3RyaW5nIiwiZ2V0U3RhdGVtZW50IiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0Iiwic3RhdGVtZW50VW5pZmllZCIsImNvbmNsdXNpb24iLCJzdGF0ZW1lbnRTdHJpbmciLCJjb25jbHVzaW9uU3RhdGVtZW50IiwiY29uY2x1c2lvblN0YXRlbWVudFN0cmluZyIsInRyYWNlIiwic3RhdGVtZW50Tm9kZSIsImdldE5vZGUiLCJjb25jbHVzaW9uU3RhdGVtZW50Tm9kZSIsIm5vZGVBIiwibm9kZUIiLCJmaWxlQ29udGV4dEEiLCJsb2NhbENvbnRleHRBIiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwibG9jYWxDb250ZXh0QiIsInVuaWZpZWQiLCJtZXRhTGV2ZWxVbmlmaWVyIiwidW5pZnkiLCJkZWJ1ZyIsInZlcmlmeSIsInZlcmlmaWVkIiwiY29uY2x1c2lvblN0cmluZyIsInN0YXRlZCIsImFzc2lnbm1lbnRzIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCIsInRvSlNPTiIsInVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nIiwianNvbiIsImZyb21KU09OIiwiZnJvbUNvbmNsdXNpb25Ob2RlIiwiY29uY2x1c2lvbk5vZGUiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJVbnF1YWxpZmllZFN0YXRlbWVudCIsImZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O2dFQVJRO2tFQUNJO3FCQUVQOzREQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLElBQU1DLGdDQUFnQ0MsSUFBQUEsZ0JBQVMsRUFBQztBQUVqQyxJQUFBLEFBQU1GLDJCQUFOO2FBQU1BLFdBQ1BHLFdBQVcsRUFBRUMsb0JBQW9CO2dDQUQxQko7UUFFakIsSUFBSSxDQUFDRyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0Msb0JBQW9CLEdBQUdBOztrQkFIWEo7O1lBTW5CSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFdBQVc7WUFDekI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FB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