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
var _statement = /*#__PURE__*/ _interopRequireDefault(require("../../verify/statement"));
var _query = require("../../utilities/query");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var referenceNodeQuery = (0, _query.nodeQuery)("/qualifiedStatement/qualification!/reference!"), statementNodeQuery = (0, _query.nodeQuery)("/qualifiedStatement/statement!");
function verifyQualifiedStatement(qualifiedStatementNode, assertions, derived, proofContext) {
    var qualifiedStatementVerified = false;
    proofContext.begin(qualifiedStatementNode);
    var statementNode = statementNodeQuery(qualifiedStatementNode);
    if (statementNode !== null) {
        var statementString = proofContext.nodeAsString(statementNode);
        proofContext.debug("Verifying the '".concat(statementString, "' qualified statement..."));
        var referenceNode = referenceNodeQuery(qualifiedStatementNode);
        if (referenceNode === null) {
            var context = proofContext, statementVerified = (0, _statement.default)(statementNode, assertions, derived, context);
            qualifiedStatementVerified = statementVerified; ///
        } else {
            var referenceName = (0, _query.referenceNameFromReferenceNode)(referenceNode);
            if (!qualifiedStatementVerified) {
                var rule = proofContext.findRuleByReferenceName(referenceName);
                if (rule !== null) {
                    var ruleMatchesStatement = rule.matchStatement(statementNode, proofContext);
                    qualifiedStatementVerified = ruleMatchesStatement; ///
                }
            }
            if (!qualifiedStatementVerified) {
                var axiom = proofContext.findAxiomByReferenceName(referenceName);
                if (axiom !== null) {
                    var axiomMatchesStatement = axiom.matchStatement(statementNode, proofContext);
                    qualifiedStatementVerified = axiomMatchesStatement; ///
                }
            }
            if (!qualifiedStatementVerified) {
                var lemma = proofContext.findLemmaByReferenceName(referenceName);
                if (lemma !== null) {
                    var lemmaMatchesStatement = lemma.matchStatement(statementNode, proofContext);
                    qualifiedStatementVerified = lemmaMatchesStatement; ///
                }
            }
            if (!qualifiedStatementVerified) {
                var theorem = proofContext.findTheoremByReferenceName(referenceName);
                if (theorem !== null) {
                    var theoremMatchesStatement = theorem.matchStatement(statementNode, proofContext);
                    qualifiedStatementVerified = theoremMatchesStatement; ///
                }
            }
            if (!qualifiedStatementVerified) {
                var conjecture = proofContext.findConjectureByReferenceName(referenceName);
                if (conjecture !== null) {
                    var conjectureMatchesStatement = conjecture.matchStatement(statementNode, proofContext);
                    qualifiedStatementVerified = conjectureMatchesStatement; ///
                }
            }
        }
    }
    qualifiedStatementVerified ? proofContext.complete(qualifiedStatementNode) : proofContext.halt(qualifiedStatementNode);
    return qualifiedStatementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50L3F1YWxpZmllZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeVN0YXRlbWVudCBmcm9tIFwiLi4vLi4vdmVyaWZ5L3N0YXRlbWVudFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnksIHJlZmVyZW5jZU5hbWVGcm9tUmVmZXJlbmNlTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgcmVmZXJlbmNlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3F1YWxpZmllZFN0YXRlbWVudC9xdWFsaWZpY2F0aW9uIS9yZWZlcmVuY2UhXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3F1YWxpZmllZFN0YXRlbWVudC9zdGF0ZW1lbnQhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlRdWFsaWZpZWRTdGF0ZW1lbnQocXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgYXNzZXJ0aW9ucywgZGVyaXZlZCwgcHJvb2ZDb250ZXh0KSB7XG4gIGxldCBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IGZhbHNlO1xuXG4gIHByb29mQ29udGV4dC5iZWdpbihxdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KHF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gcHJvb2ZDb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICAgIHByb29mQ29udGV4dC5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBxdWFsaWZpZWQgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCByZWZlcmVuY2VOb2RlID0gcmVmZXJlbmNlTm9kZVF1ZXJ5KHF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKHJlZmVyZW5jZU5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBwcm9vZkNvbnRleHQsXG4gICAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBhc3NlcnRpb25zLCBkZXJpdmVkLCBjb250ZXh0KTtcblxuICAgICAgcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSBzdGF0ZW1lbnRWZXJpZmllZDsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZU5hbWUgPSByZWZlcmVuY2VOYW1lRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSk7XG5cbiAgICAgIGlmICghcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgcnVsZSA9IHByb29mQ29udGV4dC5maW5kUnVsZUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKTtcblxuICAgICAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHJ1bGVNYXRjaGVzU3RhdGVtZW50ID0gcnVsZS5tYXRjaFN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSBydWxlTWF0Y2hlc1N0YXRlbWVudDsgIC8vL1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgYXhpb20gPSBwcm9vZkNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpO1xuXG4gICAgICAgIGlmIChheGlvbSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGF4aW9tTWF0Y2hlc1N0YXRlbWVudCA9IGF4aW9tLm1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIHByb29mQ29udGV4dCk7XG5cbiAgICAgICAgICBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IGF4aW9tTWF0Y2hlc1N0YXRlbWVudDsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBsZW1tYSA9IHByb29mQ29udGV4dC5maW5kTGVtbWFCeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSk7XG5cbiAgICAgICAgaWYgKGxlbW1hICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgbGVtbWFNYXRjaGVzU3RhdGVtZW50ID0gbGVtbWEubWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgICAgIHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gbGVtbWFNYXRjaGVzU3RhdGVtZW50OyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIXF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHRoZW9yZW0gPSBwcm9vZkNvbnRleHQuZmluZFRoZW9yZW1CeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSk7XG5cbiAgICAgICAgaWYgKHRoZW9yZW0gIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCB0aGVvcmVtTWF0Y2hlc1N0YXRlbWVudCA9IHRoZW9yZW0ubWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgICAgIHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gdGhlb3JlbU1hdGNoZXNTdGF0ZW1lbnQ7IC8vL1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgY29uamVjdHVyZSA9IHByb29mQ29udGV4dC5maW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKTtcblxuICAgICAgICBpZiAoY29uamVjdHVyZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGNvbmplY3R1cmVNYXRjaGVzU3RhdGVtZW50ID0gY29uamVjdHVyZS5tYXRjaFN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSBjb25qZWN0dXJlTWF0Y2hlc1N0YXRlbWVudDsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA/XG4gICAgcHJvb2ZDb250ZXh0LmNvbXBsZXRlKHF1YWxpZmllZFN0YXRlbWVudE5vZGUpIDpcbiAgICAgIHByb29mQ29udGV4dC5oYWx0KHF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuXG4gIHJldHVybiBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlRdWFsaWZpZWRTdGF0ZW1lbnQiLCJyZWZlcmVuY2VOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJxdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiYXNzZXJ0aW9ucyIsImRlcml2ZWQiLCJwcm9vZkNvbnRleHQiLCJxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCIsImJlZ2luIiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsImRlYnVnIiwicmVmZXJlbmNlTm9kZSIsImNvbnRleHQiLCJzdGF0ZW1lbnRWZXJpZmllZCIsInZlcmlmeVN0YXRlbWVudCIsInJlZmVyZW5jZU5hbWUiLCJyZWZlcmVuY2VOYW1lRnJvbVJlZmVyZW5jZU5vZGUiLCJydWxlIiwiZmluZFJ1bGVCeVJlZmVyZW5jZU5hbWUiLCJydWxlTWF0Y2hlc1N0YXRlbWVudCIsIm1hdGNoU3RhdGVtZW50IiwiYXhpb20iLCJmaW5kQXhpb21CeVJlZmVyZW5jZU5hbWUiLCJheGlvbU1hdGNoZXNTdGF0ZW1lbnQiLCJsZW1tYSIsImZpbmRMZW1tYUJ5UmVmZXJlbmNlTmFtZSIsImxlbW1hTWF0Y2hlc1N0YXRlbWVudCIsInRoZW9yZW0iLCJmaW5kVGhlb3JlbUJ5UmVmZXJlbmNlTmFtZSIsInRoZW9yZW1NYXRjaGVzU3RhdGVtZW50IiwiY29uamVjdHVyZSIsImZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2VOYW1lIiwiY29uamVjdHVyZU1hdGNoZXNTdGF0ZW1lbnQiLCJjb21wbGV0ZSIsImhhbHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBd0JBOzs7OERBUEk7cUJBRThCOzs7Ozs7QUFFMUQsSUFBTUMscUJBQXFCQyxJQUFBQSxnQkFBUyxFQUFDLGtEQUMvQkMscUJBQXFCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRXRCLFNBQVNGLHlCQUF5Qkksc0JBQXNCLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxZQUFZLEVBQUU7SUFDMUcsSUFBSUMsNkJBQTZCLEtBQUs7SUFFdENELGFBQWFFLEtBQUssQ0FBQ0w7SUFFbkIsSUFBTU0sZ0JBQWdCUCxtQkFBbUJDO0lBRXpDLElBQUlNLGtCQUFrQixJQUFJLEVBQUU7UUFDMUIsSUFBTUMsa0JBQWtCSixhQUFhSyxZQUFZLENBQUNGO1FBRWxESCxhQUFhTSxLQUFLLENBQUMsQUFBQyxrQkFBaUMsT0FBaEJGLGlCQUFnQjtRQUVyRCxJQUFNRyxnQkFBZ0JiLG1CQUFtQkc7UUFFekMsSUFBSVUsa0JBQWtCLElBQUksRUFBRTtZQUMxQixJQUFNQyxVQUFVUixjQUNWUyxvQkFBb0JDLElBQUFBLGtCQUFlLEVBQUNQLGVBQWVMLFlBQVlDLFNBQVNTO1lBRTlFUCw2QkFBNkJRLG1CQUFtQixHQUFHO1FBQ3JELE9BQU87WUFDTCxJQUFNRSxnQkFBZ0JDLElBQUFBLHFDQUE4QixFQUFDTDtZQUVyRCxJQUFJLENBQUNOLDRCQUE0QjtnQkFDL0IsSUFBTVksT0FBT2IsYUFBYWMsdUJBQXVCLENBQUNIO2dCQUVsRCxJQUFJRSxTQUFTLElBQUksRUFBRTtvQkFDakIsSUFBTUUsdUJBQXVCRixLQUFLRyxjQUFjLENBQUNiLGVBQWVIO29CQUVoRUMsNkJBQTZCYyxzQkFBdUIsR0FBRztnQkFDekQsQ0FBQztZQUNILENBQUM7WUFFRCxJQUFJLENBQUNkLDRCQUE0QjtnQkFDL0IsSUFBTWdCLFFBQVFqQixhQUFha0Isd0JBQXdCLENBQUNQO2dCQUVwRCxJQUFJTSxVQUFVLElBQUksRUFBRTtvQkFDbEIsSUFBTUUsd0JBQXdCRixNQUFNRCxjQUFjLENBQUNiLGVBQWVIO29CQUVsRUMsNkJBQTZCa0IsdUJBQXVCLEdBQUc7Z0JBQ3pELENBQUM7WUFDSCxDQUFDO1lBRUQsSUFBSSxDQUFDbEIsNEJBQTRCO2dCQUMvQixJQUFNbUIsUUFBUXBCLGFBQWFxQix3QkFBd0IsQ0FBQ1Y7Z0JBRXBELElBQUlTLFVBQVUsSUFBSSxFQUFFO29CQUNsQixJQUFNRSx3QkFBd0JGLE1BQU1KLGNBQWMsQ0FBQ2IsZUFBZUg7b0JBRWxFQyw2QkFBNkJxQix1QkFBdUIsR0FBRztnQkFDekQsQ0FBQztZQUNILENBQUM7WUFFRCxJQUFJLENBQUNyQiw0QkFBNEI7Z0JBQy9CLElBQU1zQixVQUFVdkIsYUFBYXdCLDBCQUEwQixDQUFDYjtnQkFFeEQsSUFBSVksWUFBWSxJQUFJLEVBQUU7b0JBQ3BCLElBQU1FLDBCQUEwQkYsUUFBUVAsY0FBYyxDQUFDYixlQUFlSDtvQkFFdEVDLDZCQUE2QndCLHlCQUF5QixHQUFHO2dCQUMzRCxDQUFDO1lBQ0gsQ0FBQztZQUVELElBQUksQ0FBQ3hCLDRCQUE0QjtnQkFDL0IsSUFBTXlCLGFBQWExQixhQUFhMkIsNkJBQTZCLENBQUNoQjtnQkFFOUQsSUFBSWUsZUFBZSxJQUFJLEVBQUU7b0JBQ3ZCLElBQU1FLDZCQUE2QkYsV0FBV1YsY0FBYyxDQUFDYixlQUFlSDtvQkFFNUVDLDZCQUE2QjJCLDRCQUE0QixHQUFHO2dCQUM5RCxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQzQiw2QkFDRUQsYUFBYTZCLFFBQVEsQ0FBQ2hDLDBCQUNwQkcsYUFBYThCLElBQUksQ0FBQ2pDLHVCQUF1QjtJQUU3QyxPQUFPSTtBQUNUIn0=