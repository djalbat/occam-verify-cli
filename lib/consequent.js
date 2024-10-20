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
            value: function unifyStatement(statement, substitutions, localContext) {
                var statementUnified;
                var statementString = statement.getString(), consequentString = this.getString();
                var localContextB = localContext; ///
                localContext = _local.default.fromFileContext(this.fileContext);
                var localContextA = localContext; ///
                localContextB.trace("Unifying the '".concat(statementString, "' statement with the '").concat(consequentString, "' consequent..."));
                statementUnified = this.unqualifiedStatement.unifyStatement(statement, substitutions, localContextA, localContextB);
                if (statementUnified) {
                    localContextB.debug("...unified the '".concat(statementString, "' statement with the '").concat(consequentString, "' consequent."));
                }
                return statementUnified;
            }
        },
        {
            key: "verify",
            value: function verify(localContext) {
                var verified = false;
                var consequentString = this.getString(); ///
                localContext.trace("Verifying the '".concat(consequentString, "' consequent..."));
                var stated = true, assignments = [], unqualifiedStatementVerified = this.unqualifiedStatement.verify(assignments, stated, localContext);
                if (unqualifiedStatementVerified) {
                    verified = true;
                }
                if (verified) {
                    localContext.debug("...verified the '".concat(consequentString, "' consequent."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zZXF1ZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi9zaGltXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB1bnF1YWxpZmllZFN0YXRlbWVudEZyb21KU09OLCB1bnF1YWxpZmllZFN0YXRlbWVudFRvVW5xdWFsaWZpZWRTdGF0ZW1lbnRKU09OIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uc2VxdWVudC91bnF1YWxpZmllZFN0YXRlbWVudFwiKTtcblxuY2xhc3MgQ29uc2VxdWVudCB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCB1bnF1YWxpZmllZFN0YXRlbWVudCkge1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgICB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50ID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldFVucXVhbGlmaWVkU3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkgeyByZXR1cm4gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudC5nZXRTdHJpbmcoKTsgfVxuXG4gIGdldFN0YXRlbWVudCgpIHsgcmV0dXJuIHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQuZ2V0U3RhdGVtZW50KCk7IH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIGNvbnNlcXVlbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29uc3QgbG9jYWxDb250ZXh0QiA9IGxvY2FsQ29udGV4dDsgLy8vXG5cbiAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KHRoaXMuZmlsZUNvbnRleHQpO1xuXG4gICAgY29uc3QgbG9jYWxDb250ZXh0QSA9IGxvY2FsQ29udGV4dDsgLy8vXG5cbiAgICBsb2NhbENvbnRleHRCLnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2NvbnNlcXVlbnRTdHJpbmd9JyBjb25zZXF1ZW50Li4uYCk7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dEIuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtjb25zZXF1ZW50U3RyaW5nfScgY29uc2VxdWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeShsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnNlcXVlbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29uc2VxdWVudFN0cmluZ30nIGNvbnNlcXVlbnQuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmICh1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb25zZXF1ZW50U3RyaW5nfScgY29uc2VxdWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnRKU09OID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRUb1VucXVhbGlmaWVkU3RhdGVtZW50SlNPTih0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50KSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudCA9IHVucXVhbGlmaWVkU3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50ID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgY29uc2VxdWVudCA9IG5ldyBDb25zZXF1ZW50KGZpbGVDb250ZXh0LCB1bnF1YWxpZmllZFN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gY29uc2VxdWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29uc2VxdWVudE5vZGUoY29uc2VxdWVudE5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBVbnF1YWxpZmllZFN0YXRlbWVudCB9ID0gc2hpbSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeShjb25zZXF1ZW50Tm9kZSksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSBVbnF1YWxpZmllZFN0YXRlbWVudC5mcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGNvbnNlcXVlbnQgPSBuZXcgQ29uc2VxdWVudChmaWxlQ29udGV4dCwgdW5xdWFsaWZpZWRTdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIGNvbnNlcXVlbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIENvbnNlcXVlbnRcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDb25zZXF1ZW50O1xuIl0sIm5hbWVzIjpbInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiQ29uc2VxdWVudCIsImZpbGVDb250ZXh0IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJnZXRGaWxlQ29udGV4dCIsImdldFVucXVhbGlmaWVkU3RhdGVtZW50IiwiZ2V0U3RyaW5nIiwiZ2V0U3RhdGVtZW50IiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0Iiwic3RhdGVtZW50VW5pZmllZCIsInN0YXRlbWVudFN0cmluZyIsImNvbnNlcXVlbnRTdHJpbmciLCJsb2NhbENvbnRleHRCIiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwibG9jYWxDb250ZXh0QSIsInRyYWNlIiwiZGVidWciLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsInN0YXRlZCIsImFzc2lnbm1lbnRzIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCIsInRvSlNPTiIsInVucXVhbGlmaWVkU3RhdGVtZW50SlNPTiIsInVucXVhbGlmaWVkU3RhdGVtZW50VG9VbnF1YWxpZmllZFN0YXRlbWVudEpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJ1bnF1YWxpZmllZFN0YXRlbWVudEZyb21KU09OIiwiY29uc2VxdWVudCIsImZyb21Db25zZXF1ZW50Tm9kZSIsImNvbnNlcXVlbnROb2RlIiwiVW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJzaGltIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBd0dBOzs7ZUFBQTs7OzJEQXRHaUI7NERBQ1E7cUJBRUM7b0JBQ21FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdGLElBQU1BLGdDQUFnQ0MsSUFBQUEsZ0JBQVMsRUFBQztBQUVoRCxJQUFBLEFBQU1DLDJCQUFOO2FBQU1BLFdBQ1FDLFdBQVcsRUFBRUMsb0JBQW9CO2dDQUR6Q0Y7UUFFRixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxvQkFBb0IsR0FBR0E7O2tCQUgxQkY7O1lBTUpHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsV0FBVztZQUN6Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0Ysb0JBQW9CO1lBQ2xDOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFjLE9BQU8sSUFBSSxDQUFDSCxvQkFBb0IsQ0FBQ0csU0FBUztZQUFJOzs7WUFFNURDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBaUIsT0FBTyxJQUFJLENBQUNKLG9CQUFvQixDQUFDSSxZQUFZO1lBQUk7OztZQUVsRUMsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVDLFNBQVMsRUFBRUMsYUFBYSxFQUFFQyxZQUFZO2dCQUNuRCxJQUFJQztnQkFFSixJQUFNQyxrQkFBa0JKLFVBQVVILFNBQVMsSUFDckNRLG1CQUFtQixJQUFJLENBQUNSLFNBQVM7Z0JBRXZDLElBQU1TLGdCQUFnQkosY0FBYyxHQUFHO2dCQUV2Q0EsZUFBZUssY0FBWSxDQUFDQyxlQUFlLENBQUMsSUFBSSxDQUFDZixXQUFXO2dCQUU1RCxJQUFNZ0IsZ0JBQWdCUCxjQUFjLEdBQUc7Z0JBRXZDSSxjQUFjSSxLQUFLLENBQUMsQUFBQyxpQkFBd0RMLE9BQXhDRCxpQkFBZ0IsMEJBQXlDLE9BQWpCQyxrQkFBaUI7Z0JBRTlGRixtQkFBbUIsSUFBSSxDQUFDVCxvQkFBb0IsQ0FBQ0ssY0FBYyxDQUFDQyxXQUFXQyxlQUFlUSxlQUFlSDtnQkFFckcsSUFBSUgsa0JBQWtCO29CQUNwQkcsY0FBY0ssS0FBSyxDQUFDLEFBQUMsbUJBQTBETixPQUF4Q0QsaUJBQWdCLDBCQUF5QyxPQUFqQkMsa0JBQWlCO2dCQUNsRztnQkFFQSxPQUFPRjtZQUNUOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9WLFlBQVk7Z0JBQ2pCLElBQUlXLFdBQVc7Z0JBRWYsSUFBTVIsbUJBQW1CLElBQUksQ0FBQ1IsU0FBUyxJQUFLLEdBQUc7Z0JBRS9DSyxhQUFhUSxLQUFLLENBQUMsQUFBQyxrQkFBa0MsT0FBakJMLGtCQUFpQjtnQkFFdEQsSUFBTVMsU0FBUyxNQUNUQyxjQUFjLEVBQUUsRUFDaEJDLCtCQUErQixJQUFJLENBQUN0QixvQkFBb0IsQ0FBQ2tCLE1BQU0sQ0FBQ0csYUFBYUQsUUFBUVo7Z0JBRTNGLElBQUljLDhCQUE4QjtvQkFDaENILFdBQVc7Z0JBQ2I7Z0JBRUEsSUFBSUEsVUFBVTtvQkFDWlgsYUFBYVMsS0FBSyxDQUFDLEFBQUMsb0JBQW9DLE9BQWpCTixrQkFBaUI7Z0JBQzFEO2dCQUVBLE9BQU9RO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsMkJBQTJCQyxJQUFBQSxvREFBOEMsRUFBQyxJQUFJLENBQUN6QixvQkFBb0IsR0FDbkdBLHVCQUF1QndCLDBCQUN2QkUsT0FBTztvQkFDTDFCLHNCQUFBQTtnQkFDRjtnQkFFTixPQUFPMEI7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUUzQixXQUFXO2dCQUMvQixJQUFNQyx1QkFBdUI0QixJQUFBQSxrQ0FBNEIsRUFBQ0YsTUFBTTNCLGNBQzFEOEIsYUFBYSxJQTNFakIvQixXQTJFZ0NDLGFBQWFDO2dCQUUvQyxPQUFPNkI7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLG1CQUFtQkMsY0FBYyxFQUFFaEMsV0FBVztnQkFDbkQsSUFBTSxBQUFFaUMsdUJBQXlCQyxhQUFJLENBQTdCRCxzQkFDRkUsMkJBQTJCdEMsOEJBQThCbUMsaUJBQ3pEL0IsdUJBQXVCZ0MscUJBQXFCRyw0QkFBNEIsQ0FBQ0QsMEJBQTBCbkMsY0FDbkc4QixhQUFhLElBcEZqQi9CLFdBb0ZnQ0MsYUFBYUM7Z0JBRS9DLE9BQU82QjtZQUNUOzs7V0F2RkkvQjs7QUEwRk5zQyxPQUFPQyxNQUFNLENBQUNKLGFBQUksRUFBRTtJQUNsQm5DLFlBQUFBO0FBQ0Y7SUFFQSxXQUFlQSJ9