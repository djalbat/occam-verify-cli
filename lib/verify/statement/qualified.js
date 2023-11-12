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
function verifyQualifiedStatement(qualifiedStatementNode, assignments, derived, proofContext) {
    var qualifiedStatementVerified = false;
    var statementNode = statementNodeQuery(qualifiedStatementNode);
    if (statementNode !== null) {
        var statementString = proofContext.nodeAsString(statementNode), statementProofContext = proofContext; ///
        proofContext.debug("Verifying the '".concat(statementString, "' qualified statement."), qualifiedStatementNode);
        var referenceNode = referenceNodeQuery(qualifiedStatementNode), referenceName = (0, _query.referenceNameFromReferenceNode)(referenceNode);
        if (!qualifiedStatementVerified) {
            var rule = proofContext.findRuleByReferenceName(referenceName);
            if (rule !== null) {
                var ruleMatchesStatement = rule.matchStatement(statementNode, statementProofContext);
                qualifiedStatementVerified = ruleMatchesStatement; ///
            }
        }
        if (!qualifiedStatementVerified) {
            var axiom = proofContext.findAxiomByReferenceName(referenceName);
            if (axiom !== null) {
                var axiomMatchesStatement = axiom.matchStatement(statementNode, statementProofContext);
                qualifiedStatementVerified = axiomMatchesStatement; ///
            }
        }
        if (!qualifiedStatementVerified) {
            var lemma = proofContext.findLemmaByReferenceName(referenceName);
            if (lemma !== null) {
                var lemmaMatchesStatement = lemma.matchStatement(statementNode, statementProofContext);
                qualifiedStatementVerified = lemmaMatchesStatement; ///
            }
        }
        if (!qualifiedStatementVerified) {
            var theorem = proofContext.findTheoremByReferenceName(referenceName);
            if (theorem !== null) {
                var theoremMatchesStatement = theorem.matchStatement(statementNode, statementProofContext);
                qualifiedStatementVerified = theoremMatchesStatement; ///
            }
        }
        if (!qualifiedStatementVerified) {
            var conjecture = proofContext.findConjectureByReferenceName(referenceName);
            if (conjecture !== null) {
                var conjectureMatchesStatement = conjecture.matchStatement(statementNode, statementProofContext);
                qualifiedStatementVerified = conjectureMatchesStatement; ///
            }
        }
    }
    if (qualifiedStatementVerified) {
        var statementString1 = proofContext.nodeAsString(statementNode);
        proofContext.info("Verified the '".concat(statementString1, "' qualified statement."), qualifiedStatementNode);
    }
    return qualifiedStatementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50L3F1YWxpZmllZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5LCByZWZlcmVuY2VOYW1lRnJvbVJlZmVyZW5jZU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHJlZmVyZW5jZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9xdWFsaWZpZWRTdGF0ZW1lbnQvcXVhbGlmaWNhdGlvbiEvcmVmZXJlbmNlIVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9xdWFsaWZpZWRTdGF0ZW1lbnQvc3RhdGVtZW50IVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5UXVhbGlmaWVkU3RhdGVtZW50KHF1YWxpZmllZFN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBwcm9vZkNvbnRleHQpIHtcbiAgbGV0IHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeShxdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHByb29mQ29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgc3RhdGVtZW50UHJvb2ZDb250ZXh0ID0gcHJvb2ZDb250ZXh0OyAvLy9cblxuICAgIHByb29mQ29udGV4dC5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBxdWFsaWZpZWQgc3RhdGVtZW50LmAsIHF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlTm9kZSA9IHJlZmVyZW5jZU5vZGVRdWVyeShxdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICByZWZlcmVuY2VOYW1lID0gcmVmZXJlbmNlTmFtZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUpO1xuXG4gICAgaWYgKCFxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgY29uc3QgcnVsZSA9IHByb29mQ29udGV4dC5maW5kUnVsZUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKTtcblxuICAgICAgaWYgKHJ1bGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcnVsZU1hdGNoZXNTdGF0ZW1lbnQgPSBydWxlLm1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIHN0YXRlbWVudFByb29mQ29udGV4dCk7XG5cbiAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSBydWxlTWF0Y2hlc1N0YXRlbWVudDsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGF4aW9tID0gcHJvb2ZDb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKTtcblxuICAgICAgaWYgKGF4aW9tICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGF4aW9tTWF0Y2hlc1N0YXRlbWVudCA9IGF4aW9tLm1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIHN0YXRlbWVudFByb29mQ29udGV4dCk7XG5cbiAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSBheGlvbU1hdGNoZXNTdGF0ZW1lbnQ7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGxlbW1hID0gcHJvb2ZDb250ZXh0LmZpbmRMZW1tYUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKTtcblxuICAgICAgaWYgKGxlbW1hICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGxlbW1hTWF0Y2hlc1N0YXRlbWVudCA9IGxlbW1hLm1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIHN0YXRlbWVudFByb29mQ29udGV4dCk7XG5cbiAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSBsZW1tYU1hdGNoZXNTdGF0ZW1lbnQ7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHRoZW9yZW0gPSBwcm9vZkNvbnRleHQuZmluZFRoZW9yZW1CeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSk7XG5cbiAgICAgIGlmICh0aGVvcmVtICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHRoZW9yZW1NYXRjaGVzU3RhdGVtZW50ID0gdGhlb3JlbS5tYXRjaFN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBzdGF0ZW1lbnRQcm9vZkNvbnRleHQpO1xuXG4gICAgICAgIHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gdGhlb3JlbU1hdGNoZXNTdGF0ZW1lbnQ7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGNvbmplY3R1cmUgPSBwcm9vZkNvbnRleHQuZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSk7XG5cbiAgICAgIGlmIChjb25qZWN0dXJlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGNvbmplY3R1cmVNYXRjaGVzU3RhdGVtZW50ID0gY29uamVjdHVyZS5tYXRjaFN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBzdGF0ZW1lbnRQcm9vZkNvbnRleHQpO1xuXG4gICAgICAgIHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gY29uamVjdHVyZU1hdGNoZXNTdGF0ZW1lbnQ7IC8vL1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHByb29mQ29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBwcm9vZkNvbnRleHQuaW5mbyhgVmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHF1YWxpZmllZCBzdGF0ZW1lbnQuYCwgcXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG4gIH1cblxuICByZXR1cm4gcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5UXVhbGlmaWVkU3RhdGVtZW50IiwicmVmZXJlbmNlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5IiwicXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsImFzc2lnbm1lbnRzIiwiZGVyaXZlZCIsInByb29mQ29udGV4dCIsInF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkIiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsInN0YXRlbWVudFByb29mQ29udGV4dCIsImRlYnVnIiwicmVmZXJlbmNlTm9kZSIsInJlZmVyZW5jZU5hbWUiLCJyZWZlcmVuY2VOYW1lRnJvbVJlZmVyZW5jZU5vZGUiLCJydWxlIiwiZmluZFJ1bGVCeVJlZmVyZW5jZU5hbWUiLCJydWxlTWF0Y2hlc1N0YXRlbWVudCIsIm1hdGNoU3RhdGVtZW50IiwiYXhpb20iLCJmaW5kQXhpb21CeVJlZmVyZW5jZU5hbWUiLCJheGlvbU1hdGNoZXNTdGF0ZW1lbnQiLCJsZW1tYSIsImZpbmRMZW1tYUJ5UmVmZXJlbmNlTmFtZSIsImxlbW1hTWF0Y2hlc1N0YXRlbWVudCIsInRoZW9yZW0iLCJmaW5kVGhlb3JlbUJ5UmVmZXJlbmNlTmFtZSIsInRoZW9yZW1NYXRjaGVzU3RhdGVtZW50IiwiY29uamVjdHVyZSIsImZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2VOYW1lIiwiY29uamVjdHVyZU1hdGNoZXNTdGF0ZW1lbnQiLCJpbmZvIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQXdCQTs7O3FCQUxrQztBQUUxRCxJQUFNQyxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUMsa0RBQy9CQyxxQkFBcUJELElBQUFBLGdCQUFTLEVBQUM7QUFFdEIsU0FBU0YseUJBQXlCSSxzQkFBc0IsRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLFlBQVk7SUFDekcsSUFBSUMsNkJBQTZCO0lBRWpDLElBQU1DLGdCQUFnQk4sbUJBQW1CQztJQUV6QyxJQUFJSyxrQkFBa0IsTUFBTTtRQUMxQixJQUFNQyxrQkFBa0JILGFBQWFJLFlBQVksQ0FBQ0YsZ0JBQzVDRyx3QkFBd0JMLGNBQWMsR0FBRztRQUUvQ0EsYUFBYU0sS0FBSyxDQUFDLEFBQUMsa0JBQWlDLE9BQWhCSCxpQkFBZ0IsMkJBQXlCTjtRQUU5RSxJQUFNVSxnQkFBZ0JiLG1CQUFtQkcseUJBQ25DVyxnQkFBZ0JDLElBQUFBLHFDQUE4QixFQUFDRjtRQUVyRCxJQUFJLENBQUNOLDRCQUE0QjtZQUMvQixJQUFNUyxPQUFPVixhQUFhVyx1QkFBdUIsQ0FBQ0g7WUFFbEQsSUFBSUUsU0FBUyxNQUFNO2dCQUNqQixJQUFNRSx1QkFBdUJGLEtBQUtHLGNBQWMsQ0FBQ1gsZUFBZUc7Z0JBRWhFSiw2QkFBNkJXLHNCQUF1QixHQUFHO1lBQ3pEO1FBQ0Y7UUFFQSxJQUFJLENBQUNYLDRCQUE0QjtZQUMvQixJQUFNYSxRQUFRZCxhQUFhZSx3QkFBd0IsQ0FBQ1A7WUFFcEQsSUFBSU0sVUFBVSxNQUFNO2dCQUNsQixJQUFNRSx3QkFBd0JGLE1BQU1ELGNBQWMsQ0FBQ1gsZUFBZUc7Z0JBRWxFSiw2QkFBNkJlLHVCQUF1QixHQUFHO1lBQ3pEO1FBQ0Y7UUFFQSxJQUFJLENBQUNmLDRCQUE0QjtZQUMvQixJQUFNZ0IsUUFBUWpCLGFBQWFrQix3QkFBd0IsQ0FBQ1Y7WUFFcEQsSUFBSVMsVUFBVSxNQUFNO2dCQUNsQixJQUFNRSx3QkFBd0JGLE1BQU1KLGNBQWMsQ0FBQ1gsZUFBZUc7Z0JBRWxFSiw2QkFBNkJrQix1QkFBdUIsR0FBRztZQUN6RDtRQUNGO1FBRUEsSUFBSSxDQUFDbEIsNEJBQTRCO1lBQy9CLElBQU1tQixVQUFVcEIsYUFBYXFCLDBCQUEwQixDQUFDYjtZQUV4RCxJQUFJWSxZQUFZLE1BQU07Z0JBQ3BCLElBQU1FLDBCQUEwQkYsUUFBUVAsY0FBYyxDQUFDWCxlQUFlRztnQkFFdEVKLDZCQUE2QnFCLHlCQUF5QixHQUFHO1lBQzNEO1FBQ0Y7UUFFQSxJQUFJLENBQUNyQiw0QkFBNEI7WUFDL0IsSUFBTXNCLGFBQWF2QixhQUFhd0IsNkJBQTZCLENBQUNoQjtZQUU5RCxJQUFJZSxlQUFlLE1BQU07Z0JBQ3ZCLElBQU1FLDZCQUE2QkYsV0FBV1YsY0FBYyxDQUFDWCxlQUFlRztnQkFFNUVKLDZCQUE2QndCLDRCQUE0QixHQUFHO1lBQzlEO1FBQ0Y7SUFDRjtJQUVBLElBQUl4Qiw0QkFBNEI7UUFDOUIsSUFBTUUsbUJBQWtCSCxhQUFhSSxZQUFZLENBQUNGO1FBRWxERixhQUFhMEIsSUFBSSxDQUFDLEFBQUMsaUJBQWdDLE9BQWhCdkIsa0JBQWdCLDJCQUF5Qk47SUFDOUU7SUFFQSxPQUFPSTtBQUNUIn0=