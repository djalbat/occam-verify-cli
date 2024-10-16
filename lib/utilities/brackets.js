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
    stripBracketsFromStatementNode: function() {
        return stripBracketsFromStatementNode;
    },
    stripBracketsFromTermNode: function() {
        return stripBracketsFromTermNode;
    }
});
var _query = require("../utilities/query");
var _bracketed = require("../constructor/bracketed");
var _bracketed1 = require("../combinator/bracketed");
var _constants = require("../constants");
var bracketedTermChildNodeQuery = (0, _query.nodeQuery)("/term/argument/term!"), bracketedStatementChildNodeQuery = (0, _query.nodeQuery)("/statement/metaArgument/statement!");
function stripBracketsFromTermNode(termNode) {
    var bracketedTermChildNode = bracketedTermChildNodeFromTermNode(termNode);
    if (bracketedTermChildNode !== null) {
        termNode = bracketedTermChildNode; ///
    }
    return termNode;
}
function stripBracketsFromStatementNode(statementNode) {
    var bracketedStatementChildNode = bracketedStatementChildNodeFromStatementNode(statementNode);
    if (bracketedStatementChildNode !== null) {
        statementNode = bracketedStatementChildNode; ///
    }
    return statementNode;
}
function bracketedTermChildNodeFromTermNode(termNode) {
    var bracketedTermChildNode = null;
    var depth = _constants.BRACKETED_TERM_DEPTH, termNodeMatchBracketedTermNode = termNode.match(_bracketed.bracketedTermNode, depth);
    if (termNodeMatchBracketedTermNode) {
        bracketedTermChildNode = bracketedTermChildNodeQuery(termNode);
    }
    return bracketedTermChildNode;
}
function bracketedStatementChildNodeFromStatementNode(statementNode) {
    var bracketedStatementChildNode = null;
    var depth = _constants.BRACKETED_STATEMENT_DEPTH, statementNodeMatchBracketedStatementNode = statementNode.match(_bracketed1.bracketedStatementNode, depth);
    if (statementNodeMatchBracketedStatementNode) {
        bracketedStatementChildNode = bracketedStatementChildNodeQuery(statementNode);
    }
    return bracketedStatementChildNode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYnJhY2tldHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGJyYWNrZXRlZFRlcm1Ob2RlIH0gZnJvbSBcIi4uL2NvbnN0cnVjdG9yL2JyYWNrZXRlZFwiO1xuaW1wb3J0IHsgYnJhY2tldGVkU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi9jb21iaW5hdG9yL2JyYWNrZXRlZFwiO1xuaW1wb3J0IHsgQlJBQ0tFVEVEX1RFUk1fREVQVEgsIEJSQUNLRVRFRF9TVEFURU1FTlRfREVQVEggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IGJyYWNrZXRlZFRlcm1DaGlsZE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL2FyZ3VtZW50L3Rlcm0hXCIpLFxuICAgICAgYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L21ldGFBcmd1bWVudC9zdGF0ZW1lbnQhXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RyaXBCcmFja2V0c0Zyb21UZXJtTm9kZSh0ZXJtTm9kZSkge1xuICBjb25zdCBicmFja2V0ZWRUZXJtQ2hpbGROb2RlID0gYnJhY2tldGVkVGVybUNoaWxkTm9kZUZyb21UZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgaWYgKGJyYWNrZXRlZFRlcm1DaGlsZE5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJtTm9kZSA9IGJyYWNrZXRlZFRlcm1DaGlsZE5vZGU7ICAvLy9cbiAgfVxuXG4gIHJldHVybiB0ZXJtTm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gIGNvbnN0IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZSA9IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gIGlmIChicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnROb2RlID0gYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlOyAgLy8vXG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50Tm9kZTtcbn1cblxuZnVuY3Rpb24gYnJhY2tldGVkVGVybUNoaWxkTm9kZUZyb21UZXJtTm9kZSh0ZXJtTm9kZSkge1xuICBsZXQgYnJhY2tldGVkVGVybUNoaWxkTm9kZSA9IG51bGw7XG5cbiAgY29uc3QgZGVwdGggPSBCUkFDS0VURURfVEVSTV9ERVBUSCxcbiAgICAgICAgdGVybU5vZGVNYXRjaEJyYWNrZXRlZFRlcm1Ob2RlID0gdGVybU5vZGUubWF0Y2goYnJhY2tldGVkVGVybU5vZGUsIGRlcHRoKTtcblxuICBpZiAodGVybU5vZGVNYXRjaEJyYWNrZXRlZFRlcm1Ob2RlKSB7XG4gICAgYnJhY2tldGVkVGVybUNoaWxkTm9kZSA9IGJyYWNrZXRlZFRlcm1DaGlsZE5vZGVRdWVyeSh0ZXJtTm9kZSk7XG4gIH1cblxuICByZXR1cm4gYnJhY2tldGVkVGVybUNoaWxkTm9kZTtcbn1cblxuZnVuY3Rpb24gYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICBsZXQgYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlID0gbnVsbDtcblxuICBjb25zdCBkZXB0aCA9IEJSQUNLRVRFRF9TVEFURU1FTlRfREVQVEgsXG4gICAgICAgIHN0YXRlbWVudE5vZGVNYXRjaEJyYWNrZXRlZFN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlLm1hdGNoKGJyYWNrZXRlZFN0YXRlbWVudE5vZGUsIGRlcHRoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZU1hdGNoQnJhY2tldGVkU3RhdGVtZW50Tm9kZSkge1xuICAgIGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZSA9IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZTtcbn1cbiJdLCJuYW1lcyI6WyJzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudE5vZGUiLCJzdHJpcEJyYWNrZXRzRnJvbVRlcm1Ob2RlIiwiYnJhY2tldGVkVGVybUNoaWxkTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlUXVlcnkiLCJ0ZXJtTm9kZSIsImJyYWNrZXRlZFRlcm1DaGlsZE5vZGUiLCJicmFja2V0ZWRUZXJtQ2hpbGROb2RlRnJvbVRlcm1Ob2RlIiwic3RhdGVtZW50Tm9kZSIsImJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZSIsImJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZUZyb21TdGF0ZW1lbnROb2RlIiwiZGVwdGgiLCJCUkFDS0VURURfVEVSTV9ERVBUSCIsInRlcm1Ob2RlTWF0Y2hCcmFja2V0ZWRUZXJtTm9kZSIsIm1hdGNoIiwiYnJhY2tldGVkVGVybU5vZGUiLCJCUkFDS0VURURfU1RBVEVNRU5UX0RFUFRIIiwic3RhdGVtZW50Tm9kZU1hdGNoQnJhY2tldGVkU3RhdGVtZW50Tm9kZSIsImJyYWNrZXRlZFN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQW9CZ0JBLDhCQUE4QjtlQUE5QkE7O0lBVkFDLHlCQUF5QjtlQUF6QkE7OztxQkFSVTt5QkFDUTswQkFDSzt5QkFDeUI7QUFFaEUsSUFBTUMsOEJBQThCQyxJQUFBQSxnQkFBUyxFQUFDLHlCQUN4Q0MsbUNBQW1DRCxJQUFBQSxnQkFBUyxFQUFDO0FBRTVDLFNBQVNGLDBCQUEwQkksUUFBUTtJQUNoRCxJQUFNQyx5QkFBeUJDLG1DQUFtQ0Y7SUFFbEUsSUFBSUMsMkJBQTJCLE1BQU07UUFDbkNELFdBQVdDLHdCQUF5QixHQUFHO0lBQ3pDO0lBRUEsT0FBT0Q7QUFDVDtBQUVPLFNBQVNMLCtCQUErQlEsYUFBYTtJQUMxRCxJQUFNQyw4QkFBOEJDLDZDQUE2Q0Y7SUFFakYsSUFBSUMsZ0NBQWdDLE1BQU07UUFDeENELGdCQUFnQkMsNkJBQThCLEdBQUc7SUFDbkQ7SUFFQSxPQUFPRDtBQUNUO0FBRUEsU0FBU0QsbUNBQW1DRixRQUFRO0lBQ2xELElBQUlDLHlCQUF5QjtJQUU3QixJQUFNSyxRQUFRQywrQkFBb0IsRUFDNUJDLGlDQUFpQ1IsU0FBU1MsS0FBSyxDQUFDQyw0QkFBaUIsRUFBRUo7SUFFekUsSUFBSUUsZ0NBQWdDO1FBQ2xDUCx5QkFBeUJKLDRCQUE0Qkc7SUFDdkQ7SUFFQSxPQUFPQztBQUNUO0FBRUEsU0FBU0ksNkNBQTZDRixhQUFhO0lBQ2pFLElBQUlDLDhCQUE4QjtJQUVsQyxJQUFNRSxRQUFRSyxvQ0FBeUIsRUFDakNDLDJDQUEyQ1QsY0FBY00sS0FBSyxDQUFDSSxrQ0FBc0IsRUFBRVA7SUFFN0YsSUFBSU0sMENBQTBDO1FBQzVDUiw4QkFBOEJMLGlDQUFpQ0k7SUFDakU7SUFFQSxPQUFPQztBQUNUIn0=