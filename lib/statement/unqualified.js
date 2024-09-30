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
                    var statementUnified = this.statement.unify(assignments, stated, localContext);
                    if (statementUnified) {
                        verified = true;
                    } else {
                        var statementVerified = this.statement.verify(assignments, stated, localContext);
                        if (statementVerified) {
                            verified = true;
                        }
                    }
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
                var statementNode = statementNodeQuery(unqualifiedStatementNode), statement = statementNode !== null ? _statement.default.fromStatementNode(statementNode, fileContext) : null, node = unqualifiedStatementNode, string = (0, _string.trim)(fileContext.nodeAsString(node)), unqualifiedStatement = new UnqualifiedStatement(string, statement);
                return unqualifiedStatement;
            }
        }
    ]);
    return UnqualifiedStatement;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0ZW1lbnQvdW5xdWFsaWZpZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdGF0ZW1lbnQgZnJvbSBcIi4uL3N0YXRlbWVudFwiO1xuXG5pbXBvcnQgeyB0cmltIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3Qgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3VucXVhbGlmaWVkU3RhdGVtZW50L3N0YXRlbWVudFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5xdWFsaWZpZWRTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHN0YXRlbWVudCkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyB1bnF1YWxpZmllZCBzdGF0ZW1lbnQuLi5gKTtcblxuICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMuc3RhdGVtZW50LnVuaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy5zdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ30nIHVucXVhbGlmaWVkIHN0YXRlbWVudC5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGBUaGUgJyR7dW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyB1bnF1YWxpZmllZCBzdGF0ZW1lbnQgY2Fubm90IGJlIHZlcmlmaWVkIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgbm9kZSA9IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHRyaW0oZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpKSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudCA9IG5ldyBVbnF1YWxpZmllZFN0YXRlbWVudChzdHJpbmcsIHN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gdW5xdWFsaWZpZWRTdGF0ZW1lbnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJVbnF1YWxpZmllZFN0YXRlbWVudCIsInN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN0cmluZyIsInN0YXRlbWVudCIsImdldFN0cmluZyIsImdldFN0YXRlbWVudCIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwibG9jYWxDb250ZXh0IiwidmVyaWZpZWQiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyIsInRyYWNlIiwic3RhdGVtZW50VW5pZmllZCIsInVuaWZ5Iiwic3RhdGVtZW50VmVyaWZpZWQiLCJkZWJ1ZyIsImZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJmaWxlQ29udGV4dCIsInN0YXRlbWVudE5vZGUiLCJTdGF0ZW1lbnQiLCJmcm9tU3RhdGVtZW50Tm9kZSIsIm5vZGUiLCJ0cmltIiwibm9kZUFzU3RyaW5nIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7O2dFQVBDO3NCQUVEO3FCQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1DLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQztBQUV0QixJQUFBLEFBQU1GLHFDQUFOO2FBQU1BLHFCQUNQRyxNQUFNLEVBQUVDLFNBQVM7Z0NBRFZKO1FBRWpCLElBQUksQ0FBQ0csTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7a0JBSEFKOztZQU1uQkssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixTQUFTO1lBQ3ZCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxZQUFZO2dCQUN0QyxJQUFJQyxXQUFXO2dCQUVmLElBQU1DLDZCQUE2QixJQUFJLENBQUNULE1BQU07Z0JBRTlDLElBQUksSUFBSSxDQUFDQyxTQUFTLEtBQUssTUFBTTtvQkFDM0JNLGFBQWFHLEtBQUssQ0FBQyxBQUFDLGtCQUE0QyxPQUEzQkQsNEJBQTJCO29CQUVoRSxJQUFNRSxtQkFBbUIsSUFBSSxDQUFDVixTQUFTLENBQUNXLEtBQUssQ0FBQ1AsYUFBYUMsUUFBUUM7b0JBRW5FLElBQUlJLGtCQUFrQjt3QkFDcEJILFdBQVc7b0JBQ2IsT0FBTzt3QkFDTCxJQUFNSyxvQkFBb0IsSUFBSSxDQUFDWixTQUFTLENBQUNHLE1BQU0sQ0FBQ0MsYUFBYUMsUUFBUUM7d0JBRXJFLElBQUlNLG1CQUFtQjs0QkFDckJMLFdBQVc7d0JBQ2I7b0JBQ0Y7b0JBRUEsSUFBSUEsVUFBVTt3QkFDWkQsYUFBYU8sS0FBSyxDQUFDLEFBQUMsb0JBQThDLE9BQTNCTCw0QkFBMkI7b0JBQ3BFO2dCQUNGLE9BQU87b0JBQ0xGLGFBQWFPLEtBQUssQ0FBQyxBQUFDLFFBQWtDLE9BQTNCTCw0QkFBMkI7Z0JBQ3hEO2dCQUVBLE9BQU9EO1lBQ1Q7Ozs7WUFFT08sS0FBQUE7bUJBQVAsU0FBT0EsNkJBQTZCQyx3QkFBd0IsRUFBRUMsV0FBVztnQkFDdkUsSUFBTUMsZ0JBQWdCcEIsbUJBQW1Ca0IsMkJBQ25DZixZQUFZLEFBQUNpQixrQkFBa0IsT0FDakJDLGtCQUFTLENBQUNDLGlCQUFpQixDQUFDRixlQUFlRCxlQUN6QyxNQUNoQkksT0FBT0wsMEJBQ1BoQixTQUFTc0IsSUFBQUEsWUFBSSxFQUFDTCxZQUFZTSxZQUFZLENBQUNGLFFBQ3ZDRyx1QkFBdUIsSUFuRFozQixxQkFtRHFDRyxRQUFRQztnQkFFOUQsT0FBT3VCO1lBQ1Q7OztXQXREbUIzQiJ9