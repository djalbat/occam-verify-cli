"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyQualifiedStatement;
    }
});
var _query = require("../../utilities/query");
var referenceNodeQuery = (0, _query.nodeQuery)("/qualifiedStatement/qualification!/reference!"), statementNodeQuery = (0, _query.nodeQuery)("/qualifiedStatement/statement!");
function verifyQualifiedStatement(qualifiedStatementNode, assignments, derived, localContext) {
    var qualifiedStatementVerified = false;
    var statementNode = statementNodeQuery(qualifiedStatementNode);
    if (statementNode !== null) {
        var statementString = localContext.nodeAsString(statementNode), statementLocalContext = localContext; ///
        localContext.trace("Verifying the '".concat(statementString, "' qualified statement..."), qualifiedStatementNode);
        var referenceNode = referenceNodeQuery(qualifiedStatementNode), referenceName = (0, _query.referenceNameFromReferenceNode)(referenceNode);
        if (!qualifiedStatementVerified) {
            var rule = localContext.findRuleByReferenceName(referenceName);
            if (rule !== null) {
                var ruleMatchesStatement = rule.matchStatement(statementNode, statementLocalContext);
                qualifiedStatementVerified = ruleMatchesStatement; ///
            }
        }
        if (!qualifiedStatementVerified) {
            var axiom = localContext.findAxiomByReferenceName(referenceName);
            if (axiom !== null) {
                var axiomMatchesStatement = axiom.matchStatement(statementNode, statementLocalContext);
                qualifiedStatementVerified = axiomMatchesStatement; ///
            }
        }
        if (!qualifiedStatementVerified) {
            var lemma = localContext.findLemmaByReferenceName(referenceName);
            if (lemma !== null) {
                var lemmaMatchesStatement = lemma.matchStatement(statementNode, statementLocalContext);
                qualifiedStatementVerified = lemmaMatchesStatement; ///
            }
        }
        if (!qualifiedStatementVerified) {
            var theorem = localContext.findTheoremByReferenceName(referenceName);
            if (theorem !== null) {
                var theoremMatchesStatement = theorem.matchStatement(statementNode, statementLocalContext);
                qualifiedStatementVerified = theoremMatchesStatement; ///
            }
        }
        if (!qualifiedStatementVerified) {
            var conjecture = localContext.findConjectureByReferenceName(referenceName);
            if (conjecture !== null) {
                var conjectureMatchesStatement = conjecture.matchStatement(statementNode, statementLocalContext);
                qualifiedStatementVerified = conjectureMatchesStatement; ///
            }
        }
        if (qualifiedStatementVerified) {
            localContext.debug("...verified the '".concat(statementString, "' qualified statement."), qualifiedStatementNode);
        }
    }
    return qualifiedStatementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50L3F1YWxpZmllZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5LCByZWZlcmVuY2VOYW1lRnJvbVJlZmVyZW5jZU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHJlZmVyZW5jZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9xdWFsaWZpZWRTdGF0ZW1lbnQvcXVhbGlmaWNhdGlvbiEvcmVmZXJlbmNlIVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9xdWFsaWZpZWRTdGF0ZW1lbnQvc3RhdGVtZW50IVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5UXVhbGlmaWVkU3RhdGVtZW50KHF1YWxpZmllZFN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeShxdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgc3RhdGVtZW50TG9jYWxDb250ZXh0ID0gbG9jYWxDb250ZXh0OyAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBxdWFsaWZpZWQgc3RhdGVtZW50Li4uYCwgcXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb25zdCByZWZlcmVuY2VOb2RlID0gcmVmZXJlbmNlTm9kZVF1ZXJ5KHF1YWxpZmllZFN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHJlZmVyZW5jZU5hbWUgPSByZWZlcmVuY2VOYW1lRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSk7XG5cbiAgICBpZiAoIXF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBydWxlID0gbG9jYWxDb250ZXh0LmZpbmRSdWxlQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpO1xuXG4gICAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBydWxlTWF0Y2hlc1N0YXRlbWVudCA9IHJ1bGUubWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgc3RhdGVtZW50TG9jYWxDb250ZXh0KTtcblxuICAgICAgICBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHJ1bGVNYXRjaGVzU3RhdGVtZW50OyAgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgY29uc3QgYXhpb20gPSBsb2NhbENvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpO1xuXG4gICAgICBpZiAoYXhpb20gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgYXhpb21NYXRjaGVzU3RhdGVtZW50ID0gYXhpb20ubWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgc3RhdGVtZW50TG9jYWxDb250ZXh0KTtcblxuICAgICAgICBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IGF4aW9tTWF0Y2hlc1N0YXRlbWVudDsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgY29uc3QgbGVtbWEgPSBsb2NhbENvbnRleHQuZmluZExlbW1hQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpO1xuXG4gICAgICBpZiAobGVtbWEgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgbGVtbWFNYXRjaGVzU3RhdGVtZW50ID0gbGVtbWEubWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgc3RhdGVtZW50TG9jYWxDb250ZXh0KTtcblxuICAgICAgICBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IGxlbW1hTWF0Y2hlc1N0YXRlbWVudDsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgY29uc3QgdGhlb3JlbSA9IGxvY2FsQ29udGV4dC5maW5kVGhlb3JlbUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKTtcblxuICAgICAgaWYgKHRoZW9yZW0gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdGhlb3JlbU1hdGNoZXNTdGF0ZW1lbnQgPSB0aGVvcmVtLm1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIHN0YXRlbWVudExvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSB0aGVvcmVtTWF0Y2hlc1N0YXRlbWVudDsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgY29uc3QgY29uamVjdHVyZSA9IGxvY2FsQ29udGV4dC5maW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKTtcblxuICAgICAgaWYgKGNvbmplY3R1cmUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgY29uamVjdHVyZU1hdGNoZXNTdGF0ZW1lbnQgPSBjb25qZWN0dXJlLm1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIHN0YXRlbWVudExvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSBjb25qZWN0dXJlTWF0Y2hlc1N0YXRlbWVudDsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBxdWFsaWZpZWQgc3RhdGVtZW50LmAsIHF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlRdWFsaWZpZWRTdGF0ZW1lbnQiLCJyZWZlcmVuY2VOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJxdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiYXNzaWdubWVudHMiLCJkZXJpdmVkIiwibG9jYWxDb250ZXh0IiwicXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwic3RhdGVtZW50TG9jYWxDb250ZXh0IiwidHJhY2UiLCJyZWZlcmVuY2VOb2RlIiwicmVmZXJlbmNlTmFtZSIsInJlZmVyZW5jZU5hbWVGcm9tUmVmZXJlbmNlTm9kZSIsInJ1bGUiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlTmFtZSIsInJ1bGVNYXRjaGVzU3RhdGVtZW50IiwibWF0Y2hTdGF0ZW1lbnQiLCJheGlvbSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlTmFtZSIsImF4aW9tTWF0Y2hlc1N0YXRlbWVudCIsImxlbW1hIiwiZmluZExlbW1hQnlSZWZlcmVuY2VOYW1lIiwibGVtbWFNYXRjaGVzU3RhdGVtZW50IiwidGhlb3JlbSIsImZpbmRUaGVvcmVtQnlSZWZlcmVuY2VOYW1lIiwidGhlb3JlbU1hdGNoZXNTdGF0ZW1lbnQiLCJjb25qZWN0dXJlIiwiZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZU5hbWUiLCJjb25qZWN0dXJlTWF0Y2hlc1N0YXRlbWVudCIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQXdCQTs7O3FCQUxrQztBQUUxRCxJQUFNQyxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUMsa0RBQy9CQyxxQkFBcUJELElBQUFBLGdCQUFTLEVBQUM7QUFFdEIsU0FBU0YseUJBQXlCSSxzQkFBc0IsRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLFlBQVk7SUFDekcsSUFBSUMsNkJBQTZCO0lBRWpDLElBQU1DLGdCQUFnQk4sbUJBQW1CQztJQUV6QyxJQUFJSyxrQkFBa0IsTUFBTTtRQUMxQixJQUFNQyxrQkFBa0JILGFBQWFJLFlBQVksQ0FBQ0YsZ0JBQzVDRyx3QkFBd0JMLGNBQWMsR0FBRztRQUUvQ0EsYUFBYU0sS0FBSyxDQUFDLEFBQUMsa0JBQWlDLE9BQWhCSCxpQkFBZ0IsNkJBQTJCTjtRQUVoRixJQUFNVSxnQkFBZ0JiLG1CQUFtQkcseUJBQ25DVyxnQkFBZ0JDLElBQUFBLHFDQUE4QixFQUFDRjtRQUVyRCxJQUFJLENBQUNOLDRCQUE0QjtZQUMvQixJQUFNUyxPQUFPVixhQUFhVyx1QkFBdUIsQ0FBQ0g7WUFFbEQsSUFBSUUsU0FBUyxNQUFNO2dCQUNqQixJQUFNRSx1QkFBdUJGLEtBQUtHLGNBQWMsQ0FBQ1gsZUFBZUc7Z0JBRWhFSiw2QkFBNkJXLHNCQUF1QixHQUFHO1lBQ3pEO1FBQ0Y7UUFFQSxJQUFJLENBQUNYLDRCQUE0QjtZQUMvQixJQUFNYSxRQUFRZCxhQUFhZSx3QkFBd0IsQ0FBQ1A7WUFFcEQsSUFBSU0sVUFBVSxNQUFNO2dCQUNsQixJQUFNRSx3QkFBd0JGLE1BQU1ELGNBQWMsQ0FBQ1gsZUFBZUc7Z0JBRWxFSiw2QkFBNkJlLHVCQUF1QixHQUFHO1lBQ3pEO1FBQ0Y7UUFFQSxJQUFJLENBQUNmLDRCQUE0QjtZQUMvQixJQUFNZ0IsUUFBUWpCLGFBQWFrQix3QkFBd0IsQ0FBQ1Y7WUFFcEQsSUFBSVMsVUFBVSxNQUFNO2dCQUNsQixJQUFNRSx3QkFBd0JGLE1BQU1KLGNBQWMsQ0FBQ1gsZUFBZUc7Z0JBRWxFSiw2QkFBNkJrQix1QkFBdUIsR0FBRztZQUN6RDtRQUNGO1FBRUEsSUFBSSxDQUFDbEIsNEJBQTRCO1lBQy9CLElBQU1tQixVQUFVcEIsYUFBYXFCLDBCQUEwQixDQUFDYjtZQUV4RCxJQUFJWSxZQUFZLE1BQU07Z0JBQ3BCLElBQU1FLDBCQUEwQkYsUUFBUVAsY0FBYyxDQUFDWCxlQUFlRztnQkFFdEVKLDZCQUE2QnFCLHlCQUF5QixHQUFHO1lBQzNEO1FBQ0Y7UUFFQSxJQUFJLENBQUNyQiw0QkFBNEI7WUFDL0IsSUFBTXNCLGFBQWF2QixhQUFhd0IsNkJBQTZCLENBQUNoQjtZQUU5RCxJQUFJZSxlQUFlLE1BQU07Z0JBQ3ZCLElBQU1FLDZCQUE2QkYsV0FBV1YsY0FBYyxDQUFDWCxlQUFlRztnQkFFNUVKLDZCQUE2QndCLDRCQUE0QixHQUFHO1lBQzlEO1FBQ0Y7UUFFQSxJQUFJeEIsNEJBQTRCO1lBQzlCRCxhQUFhMEIsS0FBSyxDQUFDLEFBQUMsb0JBQW1DLE9BQWhCdkIsaUJBQWdCLDJCQUF5Qk47UUFDbEY7SUFDRjtJQUVBLE9BQU9JO0FBQ1QifQ==