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
                var statementNode = statementNodeQuery(unqualifiedStatementNode), localContext = _local.default.fromFileContext(fileContext), statement = statementNode !== null ? _statement.default.fromStatementNode(statementNode, localContext) : null, node = unqualifiedStatementNode, string = (0, _string.trim)(fileContext.nodeAsString(node)), unqualifiedStatement = new UnqualifiedStatement(string, statement);
                return unqualifiedStatement;
            }
        }
    ]);
    return UnqualifiedStatement;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0ZW1lbnQvdW5xdWFsaWZpZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdGF0ZW1lbnQgZnJvbSBcIi4uL3N0YXRlbWVudFwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyB0cmltIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3Qgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3VucXVhbGlmaWVkU3RhdGVtZW50L3N0YXRlbWVudFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5xdWFsaWZpZWRTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHN0YXRlbWVudCkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyB1bnF1YWxpZmllZCBzdGF0ZW1lbnQuLi5gKTtcblxuICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMuc3RhdGVtZW50LnVuaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy5zdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ30nIHVucXVhbGlmaWVkIHN0YXRlbWVudC5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGBUaGUgJyR7dW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyB1bnF1YWxpZmllZCBzdGF0ZW1lbnQgY2Fubm90IGJlIHZlcmlmaWVkIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgIG5vZGUgPSB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSB0cmltKGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSBuZXcgVW5xdWFsaWZpZWRTdGF0ZW1lbnQoc3RyaW5nLCBzdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIHVucXVhbGlmaWVkU3RhdGVtZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiVW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdHJpbmciLCJzdGF0ZW1lbnQiLCJnZXRTdHJpbmciLCJnZXRTdGF0ZW1lbnQiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImxvY2FsQ29udGV4dCIsInZlcmlmaWVkIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmciLCJ0cmFjZSIsInN0YXRlbWVudFVuaWZpZWQiLCJ1bmlmeSIsInN0YXRlbWVudFZlcmlmaWVkIiwiZGVidWciLCJmcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiZmlsZUNvbnRleHQiLCJzdGF0ZW1lbnROb2RlIiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiU3RhdGVtZW50IiwiZnJvbVN0YXRlbWVudE5vZGUiLCJub2RlIiwidHJpbSIsIm5vZGVBc1N0cmluZyIsInVucXVhbGlmaWVkU3RhdGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7OztnRUFSQzs0REFDRztzQkFFSjtxQkFDSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQyxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUM7QUFFdEIsSUFBQSxBQUFNRixxQ0FBTjthQUFNQSxxQkFDUEcsTUFBTSxFQUFFQyxTQUFTO2dDQURWSjtRQUVqQixJQUFJLENBQUNHLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFNBQVMsR0FBR0E7O2tCQUhBSjs7WUFNbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsU0FBUztZQUN2Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsWUFBWTtnQkFDdEMsSUFBSUMsV0FBVztnQkFFZixJQUFNQyw2QkFBNkIsSUFBSSxDQUFDVCxNQUFNO2dCQUU5QyxJQUFJLElBQUksQ0FBQ0MsU0FBUyxLQUFLLE1BQU07b0JBQzNCTSxhQUFhRyxLQUFLLENBQUMsQUFBQyxrQkFBNEMsT0FBM0JELDRCQUEyQjtvQkFFaEUsSUFBTUUsbUJBQW1CLElBQUksQ0FBQ1YsU0FBUyxDQUFDVyxLQUFLLENBQUNQLGFBQWFDLFFBQVFDO29CQUVuRSxJQUFJSSxrQkFBa0I7d0JBQ3BCSCxXQUFXO29CQUNiLE9BQU87d0JBQ0wsSUFBTUssb0JBQW9CLElBQUksQ0FBQ1osU0FBUyxDQUFDRyxNQUFNLENBQUNDLGFBQWFDLFFBQVFDO3dCQUVyRSxJQUFJTSxtQkFBbUI7NEJBQ3JCTCxXQUFXO3dCQUNiO29CQUNGO29CQUVBLElBQUlBLFVBQVU7d0JBQ1pELGFBQWFPLEtBQUssQ0FBQyxBQUFDLG9CQUE4QyxPQUEzQkwsNEJBQTJCO29CQUNwRTtnQkFDRixPQUFPO29CQUNMRixhQUFhTyxLQUFLLENBQUMsQUFBQyxRQUFrQyxPQUEzQkwsNEJBQTJCO2dCQUN4RDtnQkFFQSxPQUFPRDtZQUNUOzs7O1lBRU9PLEtBQUFBO21CQUFQLFNBQU9BLDZCQUE2QkMsd0JBQXdCLEVBQUVDLFdBQVc7Z0JBQ3ZFLElBQU1DLGdCQUFnQnBCLG1CQUFtQmtCLDJCQUNuQ1QsZUFBZVksY0FBWSxDQUFDQyxlQUFlLENBQUNILGNBQzVDaEIsWUFBWSxBQUFDaUIsa0JBQWtCLE9BQ2pCRyxrQkFBUyxDQUFDQyxpQkFBaUIsQ0FBQ0osZUFBZVgsZ0JBQ3pDLE1BQ2hCZ0IsT0FBT1AsMEJBQ1BoQixTQUFTd0IsSUFBQUEsWUFBSSxFQUFDUCxZQUFZUSxZQUFZLENBQUNGLFFBQ3ZDRyx1QkFBdUIsSUFwRFo3QixxQkFvRHFDRyxRQUFRQztnQkFFOUQsT0FBT3lCO1lBQ1Q7OztXQXZEbUI3QiJ9