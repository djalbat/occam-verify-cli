"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    bracketedStatementNode: function() {
        return bracketedStatementNode;
    },
    default: function() {
        return BracketedCombinator;
    }
});
var _dom = /*#__PURE__*/ _interop_require_default(require("../dom"));
var _combinator = /*#__PURE__*/ _interop_require_default(require("../context/bracketed/combinator"));
var _unification = require("../utilities/unification");
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
var combinatorBracketedContext = _combinator.default.fromNothing();
var bracketedStatementNode = combinatorBracketedContext.getBracketedStatementNode(); ///
var BracketedCombinator = /*#__PURE__*/ function() {
    function BracketedCombinator(statement) {
        _class_call_check(this, BracketedCombinator);
        this.statement = statement;
    }
    _create_class(BracketedCombinator, [
        {
            key: "getStatement",
            value: function getStatement() {
                return this.statement;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, assignments, stated, context) {
                var statementUnified;
                var statementString = statement.getString();
                context.trace("Unifying the '".concat(statementString, "' statement with the bracketed combinator..."));
                var bracketedCombinator = this, combinator = bracketedCombinator, statementUnifiedWithCombinator = (0, _unification.unifyStatementWithCombinator)(statement, combinator, assignments, stated, context);
                statementUnified = statementUnifiedWithCombinator;
                if (statementUnified) {
                    context.debug("...unified the '".concat(statementString, "' statement with the bracketed combinator."));
                }
                return statementUnified;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var Statement = _dom.default.Statement, statementNode = bracketedStatementNode, context = combinatorBracketedContext, statement = Statement.fromStatementNode(statementNode, context), bracketedCombinator = new BracketedCombinator(statement);
                return bracketedCombinator;
            }
        }
    ]);
    return BracketedCombinator;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21iaW5hdG9yL2JyYWNrZXRlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgQ29tYmluYXRvckJyYWNrZXRlZENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvYnJhY2tldGVkL2NvbWJpbmF0b3JcIjtcblxuaW1wb3J0IHsgdW5pZnlTdGF0ZW1lbnRXaXRoQ29tYmluYXRvciB9IGZyb20gXCIuLi91dGlsaXRpZXMvdW5pZmljYXRpb25cIjtcblxuY29uc3QgY29tYmluYXRvckJyYWNrZXRlZENvbnRleHQgPSBDb21iaW5hdG9yQnJhY2tldGVkQ29udGV4dC5mcm9tTm90aGluZygpO1xuXG5leHBvcnQgY29uc3QgYnJhY2tldGVkU3RhdGVtZW50Tm9kZSA9IGNvbWJpbmF0b3JCcmFja2V0ZWRDb250ZXh0LmdldEJyYWNrZXRlZFN0YXRlbWVudE5vZGUoKTsgIC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmFja2V0ZWRDb21iaW5hdG9yIHtcbiAgY29uc3RydWN0b3Ioc3RhdGVtZW50KSB7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQ7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlIGJyYWNrZXRlZCBjb21iaW5hdG9yLi4uYCk7XG5cbiAgICBjb25zdCBicmFja2V0ZWRDb21iaW5hdG9yID0gdGhpcywgLy8vXG4gICAgICAgICAgY29tYmluYXRvciA9IGJyYWNrZXRlZENvbWJpbmF0b3IsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWRXaXRoQ29tYmluYXRvciA9IHVuaWZ5U3RhdGVtZW50V2l0aENvbWJpbmF0b3Ioc3RhdGVtZW50LCBjb21iaW5hdG9yLCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFVuaWZpZWQgPSBzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbWJpbmF0b3I7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlIGJyYWNrZXRlZCBjb21iaW5hdG9yLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBkb20sXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IGJyYWNrZXRlZFN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIGNvbnRleHQgPSBjb21iaW5hdG9yQnJhY2tldGVkQ29udGV4dCwgLy8vXG4gICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGJyYWNrZXRlZENvbWJpbmF0b3IgPSBuZXcgQnJhY2tldGVkQ29tYmluYXRvcihzdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIGJyYWNrZXRlZENvbWJpbmF0b3I7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJicmFja2V0ZWRTdGF0ZW1lbnROb2RlIiwiQnJhY2tldGVkQ29tYmluYXRvciIsImNvbWJpbmF0b3JCcmFja2V0ZWRDb250ZXh0IiwiQ29tYmluYXRvckJyYWNrZXRlZENvbnRleHQiLCJmcm9tTm90aGluZyIsImdldEJyYWNrZXRlZFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJ1bmlmeVN0YXRlbWVudCIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwiY29udGV4dCIsInN0YXRlbWVudFVuaWZpZWQiLCJzdGF0ZW1lbnRTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImJyYWNrZXRlZENvbWJpbmF0b3IiLCJjb21iaW5hdG9yIiwic3RhdGVtZW50VW5pZmllZFdpdGhDb21iaW5hdG9yIiwidW5pZnlTdGF0ZW1lbnRXaXRoQ29tYmluYXRvciIsImRlYnVnIiwiU3RhdGVtZW50IiwiZG9tIiwic3RhdGVtZW50Tm9kZSIsImZyb21TdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFTYUEsc0JBQXNCO2VBQXRCQTs7O2VBRVFDOzs7MERBVEw7aUVBQ3VCOzJCQUVNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLElBQU1DLDZCQUE2QkMsbUJBQTBCLENBQUNDLFdBQVc7QUFFbEUsSUFBTUoseUJBQXlCRSwyQkFBMkJHLHlCQUF5QixJQUFLLEdBQUc7QUFFbkYsSUFBQSxBQUFNSixvQ0FBTjthQUFNQSxvQkFDUEssU0FBUztnQ0FERkw7UUFFakIsSUFBSSxDQUFDSyxTQUFTLEdBQUdBOztrQkFGQUw7O1lBS25CTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFNBQVM7WUFDdkI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUYsU0FBUyxFQUFFRyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsT0FBTztnQkFDcEQsSUFBSUM7Z0JBRUosSUFBTUMsa0JBQWtCUCxVQUFVUSxTQUFTO2dCQUUzQ0gsUUFBUUksS0FBSyxDQUFDLEFBQUMsaUJBQWdDLE9BQWhCRixpQkFBZ0I7Z0JBRS9DLElBQU1HLHNCQUFzQixJQUFJLEVBQzFCQyxhQUFhRCxxQkFDYkUsaUNBQWlDQyxJQUFBQSx5Q0FBNEIsRUFBQ2IsV0FBV1csWUFBWVIsYUFBYUMsUUFBUUM7Z0JBRWhIQyxtQkFBbUJNO2dCQUVuQixJQUFJTixrQkFBa0I7b0JBQ3BCRCxRQUFRUyxLQUFLLENBQUMsQUFBQyxtQkFBa0MsT0FBaEJQLGlCQUFnQjtnQkFDbkQ7Z0JBRUEsT0FBT0Q7WUFDVDs7OztZQUVPUixLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNLEFBQUVpQixZQUFjQyxZQUFHLENBQWpCRCxXQUNGRSxnQkFBZ0J2Qix3QkFDaEJXLFVBQVVULDRCQUNWSSxZQUFZZSxVQUFVRyxpQkFBaUIsQ0FBQ0QsZUFBZVosVUFDdkRLLHNCQUFzQixJQWxDWGYsb0JBa0NtQ0s7Z0JBRXBELE9BQU9VO1lBQ1Q7OztXQXJDbUJmIn0=