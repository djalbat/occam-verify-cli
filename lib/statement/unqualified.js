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
var _statement = /*#__PURE__*/ _interop_require_default(require("../statement"));
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
                var verified = false;
                var unqualifiedStatementString = this.string;
                if (this.statement !== null) {
                    localContext.trace("Verifying the '".concat(unqualifiedStatementString, "' unqualified statement..."));
                    var statementVerified = this.statement.verify(assignments, stated, localContext);
                    verified = statementVerified;
                    if (verified) {
                        localContext.debug("...verified the '".concat(unqualifiedStatementString, "' unqualified statement."));
                    }
                } else {
                    localContext.debug("The '".concat(unqualifiedStatementString, "' unqualified statement cannot be verified because it is nonsense."));
                }
                return verified;
            }
        }
    ], [
        {
            key: "fromUnqualifiedStatementNode",
            value: function fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext) {
                var statementNode = statementNodeQuery(unqualifiedStatementNode), localContext = _local.default.fromFileContext(fileContext), statement = statementNode !== null ? _statement.default.fromStatementNode(statementNode, localContext) : null, node = unqualifiedStatementNode, string = (0, _string.trim)(fileContext.nodeAsString(node)), unqualifiedStatement = new UnqualifiedStatement(string, statement);
                return unqualifiedStatement;
            }
        }
    ]);
    return UnqualifiedStatement;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0ZW1lbnQvdW5xdWFsaWZpZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdGF0ZW1lbnQgZnJvbSBcIi4uL3N0YXRlbWVudFwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyB0cmltIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3Qgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3VucXVhbGlmaWVkU3RhdGVtZW50L3N0YXRlbWVudFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5xdWFsaWZpZWRTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHN0YXRlbWVudCkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyB1bnF1YWxpZmllZCBzdGF0ZW1lbnQuLi5gKTtcblxuICAgICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWQgPSB0aGlzLnN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgdmVyaWZpZWQgPSBzdGF0ZW1lbnRWZXJpZmllZDtcblxuICAgICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3VucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nfScgdW5xdWFsaWZpZWQgc3RhdGVtZW50LmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZSAnJHt1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ30nIHVucXVhbGlmaWVkIHN0YXRlbWVudCBjYW5ub3QgYmUgdmVyaWZpZWQgYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgbm9kZSA9IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHRyaW0oZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpKSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudCA9IG5ldyBVbnF1YWxpZmllZFN0YXRlbWVudChzdHJpbmcsIHN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gdW5xdWFsaWZpZWRTdGF0ZW1lbnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJVbnF1YWxpZmllZFN0YXRlbWVudCIsInN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN0cmluZyIsInN0YXRlbWVudCIsImdldFN0cmluZyIsImdldFN0YXRlbWVudCIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwibG9jYWxDb250ZXh0IiwidmVyaWZpZWQiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyIsInRyYWNlIiwic3RhdGVtZW50VmVyaWZpZWQiLCJkZWJ1ZyIsImZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJmaWxlQ29udGV4dCIsInN0YXRlbWVudE5vZGUiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJTdGF0ZW1lbnQiLCJmcm9tU3RhdGVtZW50Tm9kZSIsIm5vZGUiLCJ0cmltIiwibm9kZUFzU3RyaW5nIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O2dFQVJDOzREQUNHO3NCQUVKO3FCQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1DLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQztBQUV0QixJQUFBLEFBQU1GLHFDQUFOO2FBQU1BLHFCQUNQRyxNQUFNLEVBQUVDLFNBQVM7Z0NBRFZKO1FBRWpCLElBQUksQ0FBQ0csTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7a0JBSEFKOztZQU1uQkssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixTQUFTO1lBQ3ZCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxZQUFZO2dCQUN0QyxJQUFJQyxXQUFXO2dCQUVmLElBQU1DLDZCQUE2QixJQUFJLENBQUNULE1BQU07Z0JBRTlDLElBQUksSUFBSSxDQUFDQyxTQUFTLEtBQUssTUFBTTtvQkFDM0JNLGFBQWFHLEtBQUssQ0FBQyxBQUFDLGtCQUE0QyxPQUEzQkQsNEJBQTJCO29CQUVoRSxJQUFNRSxvQkFBb0IsSUFBSSxDQUFDVixTQUFTLENBQUNHLE1BQU0sQ0FBQ0MsYUFBYUMsUUFBUUM7b0JBRXJFQyxXQUFXRztvQkFFWCxJQUFJSCxVQUFVO3dCQUNaRCxhQUFhSyxLQUFLLENBQUMsQUFBQyxvQkFBOEMsT0FBM0JILDRCQUEyQjtvQkFDcEU7Z0JBQ0YsT0FBTztvQkFDTEYsYUFBYUssS0FBSyxDQUFDLEFBQUMsUUFBa0MsT0FBM0JILDRCQUEyQjtnQkFDeEQ7Z0JBRUEsT0FBT0Q7WUFDVDs7OztZQUVPSyxLQUFBQTttQkFBUCxTQUFPQSw2QkFBNkJDLHdCQUF3QixFQUFFQyxXQUFXO2dCQUN2RSxJQUFNQyxnQkFBZ0JsQixtQkFBbUJnQiwyQkFDbkNQLGVBQWVVLGNBQVksQ0FBQ0MsZUFBZSxDQUFDSCxjQUM1Q2QsWUFBWSxBQUFDZSxrQkFBa0IsT0FDakJHLGtCQUFTLENBQUNDLGlCQUFpQixDQUFDSixlQUFlVCxnQkFDekMsTUFDaEJjLE9BQU9QLDBCQUNQZCxTQUFTc0IsSUFBQUEsWUFBSSxFQUFDUCxZQUFZUSxZQUFZLENBQUNGLFFBQ3ZDRyx1QkFBdUIsSUE1Q1ozQixxQkE0Q3FDRyxRQUFRQztnQkFFOUQsT0FBT3VCO1lBQ1Q7OztXQS9DbUIzQiJ9