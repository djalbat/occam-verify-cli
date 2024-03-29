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
    bracketedStatementChildNodeFromStatementNode: function() {
        return bracketedStatementChildNodeFromStatementNode;
    },
    matchStatementModuloBrackets: function() {
        return matchStatementModuloBrackets;
    }
});
var _bracketed = /*#__PURE__*/ _interop_require_default(require("../node/statement/bracketed"));
var _query = require("../utilities/query");
var _constants = require("../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var bracketedStatementChildNodeQuery = (0, _query.nodeQuery)("/statement/metaArgument!/statement!");
function matchStatementModuloBrackets(statementNodeA, statementNodeB) {
    var statementMatchesModuloBrackets = false;
    if (!statementMatchesModuloBrackets) {
        var statementNodeMatches = statementNodeA.match(statementNodeB);
        statementMatchesModuloBrackets = statementNodeMatches; ///
    }
    if (!statementMatchesModuloBrackets) {
        var bracketedStatementChildNodeA = bracketedStatementChildNodeFromStatementNode(statementNodeA);
        if (bracketedStatementChildNodeA !== null) {
            var bracketedStatementChildNodeAMatchStatementNodeB = bracketedStatementChildNodeA.match(statementNodeB);
            statementMatchesModuloBrackets = bracketedStatementChildNodeAMatchStatementNodeB; ///
        }
    }
    if (!statementMatchesModuloBrackets) {
        var bracketedStatementChildNodeB = bracketedStatementChildNodeFromStatementNode(statementNodeB);
        if (bracketedStatementChildNodeB !== null) {
            var statementNodeAMatchBracketedStatementChildNodeB = statementNodeA.match(bracketedStatementChildNodeB);
            statementMatchesModuloBrackets = statementNodeAMatchBracketedStatementChildNodeB; ///
        }
    }
    return statementMatchesModuloBrackets;
}
function bracketedStatementChildNodeFromStatementNode(statementNode) {
    var bracketedStatementChildNode = null;
    var depth = _constants.BRACKETED_STATEMENT_DEPTH, statementNodeMatchBracketedStatementNode = statementNode.match(_bracketed.default, depth);
    if (statementNodeMatchBracketedStatementNode) {
        bracketedStatementChildNode = bracketedStatementChildNodeQuery(statementNode);
    }
    return bracketedStatementChildNode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcHJvb2YuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBicmFja2V0ZWRTdGF0ZW1lbnROb2RlIGZyb20gXCIuLi9ub2RlL3N0YXRlbWVudC9icmFja2V0ZWRcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgQlJBQ0tFVEVEX1NUQVRFTUVOVF9ERVBUSCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlUXVlcnkgPSBub2RlUXVlcnkoJy9zdGF0ZW1lbnQvbWV0YUFyZ3VtZW50IS9zdGF0ZW1lbnQhJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaFN0YXRlbWVudE1vZHVsb0JyYWNrZXRzKHN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQikge1xuICBsZXQgc3RhdGVtZW50TWF0Y2hlc01vZHVsb0JyYWNrZXRzID0gZmFsc2U7XG5cbiAgaWYgKCFzdGF0ZW1lbnRNYXRjaGVzTW9kdWxvQnJhY2tldHMpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHN0YXRlbWVudE5vZGVBLm1hdGNoKHN0YXRlbWVudE5vZGVCKTtcblxuICAgIHN0YXRlbWVudE1hdGNoZXNNb2R1bG9CcmFja2V0cyA9IHN0YXRlbWVudE5vZGVNYXRjaGVzOyAgLy8vXG4gIH1cblxuICBpZiAoIXN0YXRlbWVudE1hdGNoZXNNb2R1bG9CcmFja2V0cykge1xuICAgIGNvbnN0IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZUEgPSBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGVGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlQSk7XG5cbiAgICBpZiAoYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlQSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlQU1hdGNoU3RhdGVtZW50Tm9kZUIgPSBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGVBLm1hdGNoKHN0YXRlbWVudE5vZGVCKTtcblxuICAgICAgc3RhdGVtZW50TWF0Y2hlc01vZHVsb0JyYWNrZXRzID0gYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlQU1hdGNoU3RhdGVtZW50Tm9kZUI7IC8vL1xuICAgIH1cbiAgfVxuXG4gIGlmICghc3RhdGVtZW50TWF0Y2hlc01vZHVsb0JyYWNrZXRzKSB7XG4gICAgY29uc3QgYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlQiA9IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGVCKTtcblxuICAgIGlmIChicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGVCICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlQU1hdGNoQnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlQiA9IHN0YXRlbWVudE5vZGVBLm1hdGNoKGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZUIpO1xuXG4gICAgICBzdGF0ZW1lbnRNYXRjaGVzTW9kdWxvQnJhY2tldHMgPSBzdGF0ZW1lbnROb2RlQU1hdGNoQnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlQjsgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudE1hdGNoZXNNb2R1bG9CcmFja2V0cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgbGV0IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZSA9IG51bGw7XG5cbiAgY29uc3QgZGVwdGggPSBCUkFDS0VURURfU1RBVEVNRU5UX0RFUFRILFxuICAgICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hCcmFja2V0ZWRTdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZS5tYXRjaChicmFja2V0ZWRTdGF0ZW1lbnROb2RlLCBkZXB0aCk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGVNYXRjaEJyYWNrZXRlZFN0YXRlbWVudE5vZGUpIHtcbiAgICBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUgPSBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGU7XG59XG4iXSwibmFtZXMiOlsiYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlRnJvbVN0YXRlbWVudE5vZGUiLCJtYXRjaFN0YXRlbWVudE1vZHVsb0JyYWNrZXRzIiwiYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlQSIsInN0YXRlbWVudE5vZGVCIiwic3RhdGVtZW50TWF0Y2hlc01vZHVsb0JyYWNrZXRzIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaCIsImJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZUEiLCJicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGVBTWF0Y2hTdGF0ZW1lbnROb2RlQiIsImJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZUIiLCJzdGF0ZW1lbnROb2RlQU1hdGNoQnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlQiIsInN0YXRlbWVudE5vZGUiLCJicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUiLCJkZXB0aCIsIkJSQUNLRVRFRF9TVEFURU1FTlRfREVQVEgiLCJzdGF0ZW1lbnROb2RlTWF0Y2hCcmFja2V0ZWRTdGF0ZW1lbnROb2RlIiwiYnJhY2tldGVkU3RhdGVtZW50Tm9kZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBeUNnQkEsNENBQTRDO2VBQTVDQTs7SUFoQ0FDLDRCQUE0QjtlQUE1QkE7OztnRUFQbUI7cUJBRVQ7eUJBQ2dCOzs7Ozs7QUFFMUMsSUFBTUMsbUNBQW1DQyxJQUFBQSxnQkFBUyxFQUFDO0FBRTVDLFNBQVNGLDZCQUE2QkcsY0FBYyxFQUFFQyxjQUFjO0lBQ3pFLElBQUlDLGlDQUFpQztJQUVyQyxJQUFJLENBQUNBLGdDQUFnQztRQUNuQyxJQUFNQyx1QkFBdUJILGVBQWVJLEtBQUssQ0FBQ0g7UUFFbERDLGlDQUFpQ0Msc0JBQXVCLEdBQUc7SUFDN0Q7SUFFQSxJQUFJLENBQUNELGdDQUFnQztRQUNuQyxJQUFNRywrQkFBK0JULDZDQUE2Q0k7UUFFbEYsSUFBSUssaUNBQWlDLE1BQU07WUFDekMsSUFBTUMsa0RBQWtERCw2QkFBNkJELEtBQUssQ0FBQ0g7WUFFM0ZDLGlDQUFpQ0ksaURBQWlELEdBQUc7UUFDdkY7SUFDRjtJQUVBLElBQUksQ0FBQ0osZ0NBQWdDO1FBQ25DLElBQU1LLCtCQUErQlgsNkNBQTZDSztRQUVsRixJQUFJTSxpQ0FBaUMsTUFBTTtZQUN6QyxJQUFNQyxrREFBa0RSLGVBQWVJLEtBQUssQ0FBQ0c7WUFFN0VMLGlDQUFpQ00saURBQWlELEdBQUc7UUFDdkY7SUFDRjtJQUVBLE9BQU9OO0FBQ1Q7QUFFTyxTQUFTTiw2Q0FBNkNhLGFBQWE7SUFDeEUsSUFBSUMsOEJBQThCO0lBRWxDLElBQU1DLFFBQVFDLG9DQUF5QixFQUNqQ0MsMkNBQTJDSixjQUFjTCxLQUFLLENBQUNVLGtCQUFzQixFQUFFSDtJQUU3RixJQUFJRSwwQ0FBMEM7UUFDNUNILDhCQUE4QlosaUNBQWlDVztJQUNqRTtJQUVBLE9BQU9DO0FBQ1QifQ==