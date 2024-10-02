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
                var verified;
                var unqualifiedStatementString = (0, _string.trim)(this.string); ///
                localContext.trace("Verifying the '".concat(unqualifiedStatementString, "' unqualified statement..."));
                var statementVerified = this.statement.verify(assignments, stated, localContext);
                verified = statementVerified; ///
                if (verified) {
                    localContext.debug("...verified the '".concat(unqualifiedStatementString, "' unqualified statement."));
                }
                return verified;
            }
        }
    ], [
        {
            key: "fromUnqualifiedStatementNode",
            value: function fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext) {
                var unqualifiedStatement = null;
                if (unqualifiedStatementNode !== null) {
                    var statementNode = statementNodeQuery(unqualifiedStatementNode), localContext = _local.default.fromFileContext(fileContext), statement = statementNode !== null ? _statement.default.fromStatementNode(statementNode, localContext) : null, node = unqualifiedStatementNode, string = fileContext.nodeAsString(node);
                    unqualifiedStatement = new UnqualifiedStatement(string, statement);
                }
                return unqualifiedStatement;
            }
        }
    ]);
    return UnqualifiedStatement;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0ZW1lbnQvdW5xdWFsaWZpZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdGF0ZW1lbnQgZnJvbSBcIi4uL3N0YXRlbWVudFwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyB0cmltIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3Qgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3VucXVhbGlmaWVkU3RhdGVtZW50L3N0YXRlbWVudFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5xdWFsaWZpZWRTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHN0YXRlbWVudCkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcgPSB0cmltKHRoaXMuc3RyaW5nKTsgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyB1bnF1YWxpZmllZCBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy5zdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICB2ZXJpZmllZCA9IHN0YXRlbWVudFZlcmlmaWVkOyAvLy9cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyB1bnF1YWxpZmllZCBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCB1bnF1YWxpZmllZFN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBpZiAodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIHN0YXRlbWVudCA9IChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXRlbWVudC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgbm9kZSA9IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpO1xuXG4gICAgICB1bnF1YWxpZmllZFN0YXRlbWVudCA9IG5ldyBVbnF1YWxpZmllZFN0YXRlbWVudChzdHJpbmcsIHN0YXRlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVucXVhbGlmaWVkU3RhdGVtZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiVW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdHJpbmciLCJzdGF0ZW1lbnQiLCJnZXRTdHJpbmciLCJnZXRTdGF0ZW1lbnQiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImxvY2FsQ29udGV4dCIsInZlcmlmaWVkIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmciLCJ0cmltIiwidHJhY2UiLCJzdGF0ZW1lbnRWZXJpZmllZCIsImRlYnVnIiwiZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsImZpbGVDb250ZXh0IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiU3RhdGVtZW50IiwiZnJvbVN0YXRlbWVudE5vZGUiLCJub2RlIiwibm9kZUFzU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7OztnRUFSQzs0REFDRztzQkFFSjtxQkFDSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQyxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUM7QUFFdEIsSUFBQSxBQUFNRixxQ0FBTjthQUFNQSxxQkFDUEcsTUFBTSxFQUFFQyxTQUFTO2dDQURWSjtRQUVqQixJQUFJLENBQUNHLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFNBQVMsR0FBR0E7O2tCQUhBSjs7WUFNbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsU0FBUztZQUN2Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsWUFBWTtnQkFDdEMsSUFBSUM7Z0JBRUosSUFBTUMsNkJBQTZCQyxJQUFBQSxZQUFJLEVBQUMsSUFBSSxDQUFDVixNQUFNLEdBQUcsR0FBRztnQkFFekRPLGFBQWFJLEtBQUssQ0FBQyxBQUFDLGtCQUE0QyxPQUEzQkYsNEJBQTJCO2dCQUVoRSxJQUFNRyxvQkFBb0IsSUFBSSxDQUFDWCxTQUFTLENBQUNHLE1BQU0sQ0FBQ0MsYUFBYUMsUUFBUUM7Z0JBRXJFQyxXQUFXSSxtQkFBbUIsR0FBRztnQkFFakMsSUFBSUosVUFBVTtvQkFDWkQsYUFBYU0sS0FBSyxDQUFDLEFBQUMsb0JBQThDLE9BQTNCSiw0QkFBMkI7Z0JBQ3BFO2dCQUVBLE9BQU9EO1lBQ1Q7Ozs7WUFFT00sS0FBQUE7bUJBQVAsU0FBT0EsNkJBQTZCQyx3QkFBd0IsRUFBRUMsV0FBVztnQkFDdkUsSUFBSUMsdUJBQXVCO2dCQUUzQixJQUFJRiw2QkFBNkIsTUFBTTtvQkFDckMsSUFBTUcsZ0JBQWdCcEIsbUJBQW1CaUIsMkJBQ25DUixlQUFlWSxjQUFZLENBQUNDLGVBQWUsQ0FBQ0osY0FDNUNmLFlBQVksQUFBQ2lCLGtCQUFrQixPQUNqQkcsa0JBQVMsQ0FBQ0MsaUJBQWlCLENBQUNKLGVBQWVYLGdCQUN6QyxNQUNoQmdCLE9BQU9SLDBCQUNQZixTQUFTZ0IsWUFBWVEsWUFBWSxDQUFDRDtvQkFFeENOLHVCQUF1QixJQTVDUnBCLHFCQTRDaUNHLFFBQVFDO2dCQUMxRDtnQkFFQSxPQUFPZ0I7WUFDVDs7O1dBaERtQnBCIn0=