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
    function UnqualifiedStatement(statement) {
        _class_call_check(this, UnqualifiedStatement);
        this.statement = statement;
    }
    _create_class(UnqualifiedStatement, [
        {
            key: "getStatement",
            value: function getStatement() {
                return this.statement;
            }
        },
        {
            key: "getStatementNode",
            value: function getStatementNode() {
                var statementNode = this.statement.getNode();
                return statementNode;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.statement.getString();
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, localContext) {
                var verified;
                var unqualifiedStatementString = this.getString(); ///
                localContext.trace("Verifying the '".concat(unqualifiedStatementString, "' unqualified statement..."));
                var statementVerified = this.statement.verify(assignments, stated, localContext);
                verified = statementVerified; ///
                if (verified) {
                    localContext.debug("...verified the '".concat(unqualifiedStatementString, "' unqualified statement."));
                }
                return verified;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var statementJSON = this.statement.toJSON(), statement = statementJSON, json = {
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
                var unqualifiedStatement = new UnqualifiedStatement(statement);
                return unqualifiedStatement;
            }
        },
        {
            key: "fromUnqualifiedStatementNode",
            value: function fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext) {
                var unqualifiedStatement = null;
                if (unqualifiedStatementNode !== null) {
                    var Statement = _shim.default.Statement, statementNode = statementNodeQuery(unqualifiedStatementNode), localContext = _local.default.fromFileContext(fileContext), statement = Statement.fromStatementNode(statementNode, localContext);
                    unqualifiedStatement = new UnqualifiedStatement(statement);
                }
                return unqualifiedStatement;
            }
        }
    ]);
    return UnqualifiedStatement;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0ZW1lbnQvdW5xdWFsaWZpZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3Qgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3VucXVhbGlmaWVkU3RhdGVtZW50L3N0YXRlbWVudFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5xdWFsaWZpZWRTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzdGF0ZW1lbnQpIHtcbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLnN0YXRlbWVudC5nZXROb2RlKCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHsgcmV0dXJuIHRoaXMuc3RhdGVtZW50LmdldFN0cmluZygpOyB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyB1bnF1YWxpZmllZCBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy5zdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICB2ZXJpZmllZCA9IHN0YXRlbWVudFZlcmlmaWVkOyAvLy9cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyB1bnF1YWxpZmllZCBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudEpTT04gPSB0aGlzLnN0YXRlbWVudC50b0pTT04oKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0YXRlbWVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBzaGltO1xuXG4gICAgbGV0IHsgc3RhdGVtZW50IH0gPSBqc29uO1xuXG4gICAganNvbiA9IHN0YXRlbWVudDsgLy8vXG5cbiAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSBuZXcgVW5xdWFsaWZpZWRTdGF0ZW1lbnQoc3RhdGVtZW50KTtcblxuICAgIHJldHVybiB1bnF1YWxpZmllZFN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSBudWxsO1xuXG4gICAgaWYgKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IHNoaW0sXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICB1bnF1YWxpZmllZFN0YXRlbWVudCA9IG5ldyBVbnF1YWxpZmllZFN0YXRlbWVudChzdGF0ZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiB1bnF1YWxpZmllZFN0YXRlbWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlVucXVhbGlmaWVkU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJnZXROb2RlIiwiZ2V0U3RyaW5nIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJsb2NhbENvbnRleHQiLCJ2ZXJpZmllZCIsInVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nIiwidHJhY2UiLCJzdGF0ZW1lbnRWZXJpZmllZCIsImRlYnVnIiwidG9KU09OIiwic3RhdGVtZW50SlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImZpbGVDb250ZXh0IiwiU3RhdGVtZW50Iiwic2hpbSIsInVucXVhbGlmaWVkU3RhdGVtZW50IiwiZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsImZyb21TdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OzsyREFQSjs0REFDUTtxQkFFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQyxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUM7QUFFdEIsSUFBQSxBQUFNRixxQ0FBTjthQUFNQSxxQkFDUEcsU0FBUztnQ0FERkg7UUFFakIsSUFBSSxDQUFDRyxTQUFTLEdBQUdBOztrQkFGQUg7O1lBS25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFNBQVM7WUFDdkI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZ0JBQWdCLElBQUksQ0FBQ0gsU0FBUyxDQUFDSSxPQUFPO2dCQUU1QyxPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFjLE9BQU8sSUFBSSxDQUFDTCxTQUFTLENBQUNLLFNBQVM7WUFBSTs7O1lBRWpEQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLFlBQVk7Z0JBQ3RDLElBQUlDO2dCQUVKLElBQU1DLDZCQUE2QixJQUFJLENBQUNOLFNBQVMsSUFBSSxHQUFHO2dCQUV4REksYUFBYUcsS0FBSyxDQUFDLEFBQUMsa0JBQTRDLE9BQTNCRCw0QkFBMkI7Z0JBRWhFLElBQU1FLG9CQUFvQixJQUFJLENBQUNiLFNBQVMsQ0FBQ00sTUFBTSxDQUFDQyxhQUFhQyxRQUFRQztnQkFFckVDLFdBQVdHLG1CQUFtQixHQUFHO2dCQUVqQyxJQUFJSCxVQUFVO29CQUNaRCxhQUFhSyxLQUFLLENBQUMsQUFBQyxvQkFBOEMsT0FBM0JILDRCQUEyQjtnQkFDcEU7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxnQkFBZ0IsSUFBSSxDQUFDaEIsU0FBUyxDQUFDZSxNQUFNLElBQ3JDZixZQUFZZ0IsZUFDWkMsT0FBTztvQkFDTGpCLFdBQUFBO2dCQUNGO2dCQUVOLE9BQU9pQjtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUksRUFBRUUsV0FBVztnQkFDL0IsSUFBTSxBQUFFQyxZQUFjQyxhQUFJLENBQWxCRDtnQkFFUixJQUFJLEFBQUVwQixZQUFjaUIsS0FBZGpCO2dCQUVOaUIsT0FBT2pCLFdBQVcsR0FBRztnQkFFckJBLFlBQVlvQixVQUFVRixRQUFRLENBQUNELE1BQU1FO2dCQUVyQyxJQUFNRyx1QkFBdUIsSUF0RFp6QixxQkFzRHFDRztnQkFFdEQsT0FBT3NCO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSw2QkFBNkJDLHdCQUF3QixFQUFFTCxXQUFXO2dCQUN2RSxJQUFJRyx1QkFBdUI7Z0JBRTNCLElBQUlFLDZCQUE2QixNQUFNO29CQUNyQyxJQUFNLEFBQUVKLFlBQWNDLGFBQUksQ0FBbEJELFdBQ0ZqQixnQkFBZ0JMLG1CQUFtQjBCLDJCQUNuQ2YsZUFBZWdCLGNBQVksQ0FBQ0MsZUFBZSxDQUFDUCxjQUM1Q25CLFlBQVlvQixVQUFVTyxpQkFBaUIsQ0FBQ3hCLGVBQWVNO29CQUU3RGEsdUJBQXVCLElBcEVSekIscUJBb0VpQ0c7Z0JBQ2xEO2dCQUVBLE9BQU9zQjtZQUNUOzs7V0F4RW1CekIifQ==