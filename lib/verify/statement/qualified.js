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
        proofContext.debug("Verifying the '".concat(statementString, "' qualified statement..."), qualifiedStatementNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50L3F1YWxpZmllZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5LCByZWZlcmVuY2VOYW1lRnJvbVJlZmVyZW5jZU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHJlZmVyZW5jZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9xdWFsaWZpZWRTdGF0ZW1lbnQvcXVhbGlmaWNhdGlvbiEvcmVmZXJlbmNlIVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9xdWFsaWZpZWRTdGF0ZW1lbnQvc3RhdGVtZW50IVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5UXVhbGlmaWVkU3RhdGVtZW50KHF1YWxpZmllZFN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBwcm9vZkNvbnRleHQpIHtcbiAgbGV0IHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeShxdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHByb29mQ29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgc3RhdGVtZW50UHJvb2ZDb250ZXh0ID0gcHJvb2ZDb250ZXh0OyAvLy9cblxuICAgIHByb29mQ29udGV4dC5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBxdWFsaWZpZWQgc3RhdGVtZW50Li4uYCwgcXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb25zdCByZWZlcmVuY2VOb2RlID0gcmVmZXJlbmNlTm9kZVF1ZXJ5KHF1YWxpZmllZFN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHJlZmVyZW5jZU5hbWUgPSByZWZlcmVuY2VOYW1lRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSk7XG5cbiAgICBpZiAoIXF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBydWxlID0gcHJvb2ZDb250ZXh0LmZpbmRSdWxlQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpO1xuXG4gICAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBydWxlTWF0Y2hlc1N0YXRlbWVudCA9IHJ1bGUubWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgc3RhdGVtZW50UHJvb2ZDb250ZXh0KTtcblxuICAgICAgICBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHJ1bGVNYXRjaGVzU3RhdGVtZW50OyAgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgY29uc3QgYXhpb20gPSBwcm9vZkNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpO1xuXG4gICAgICBpZiAoYXhpb20gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgYXhpb21NYXRjaGVzU3RhdGVtZW50ID0gYXhpb20ubWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgc3RhdGVtZW50UHJvb2ZDb250ZXh0KTtcblxuICAgICAgICBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IGF4aW9tTWF0Y2hlc1N0YXRlbWVudDsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgY29uc3QgbGVtbWEgPSBwcm9vZkNvbnRleHQuZmluZExlbW1hQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpO1xuXG4gICAgICBpZiAobGVtbWEgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgbGVtbWFNYXRjaGVzU3RhdGVtZW50ID0gbGVtbWEubWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgc3RhdGVtZW50UHJvb2ZDb250ZXh0KTtcblxuICAgICAgICBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IGxlbW1hTWF0Y2hlc1N0YXRlbWVudDsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgY29uc3QgdGhlb3JlbSA9IHByb29mQ29udGV4dC5maW5kVGhlb3JlbUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKTtcblxuICAgICAgaWYgKHRoZW9yZW0gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdGhlb3JlbU1hdGNoZXNTdGF0ZW1lbnQgPSB0aGVvcmVtLm1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIHN0YXRlbWVudFByb29mQ29udGV4dCk7XG5cbiAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSB0aGVvcmVtTWF0Y2hlc1N0YXRlbWVudDsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgY29uc3QgY29uamVjdHVyZSA9IHByb29mQ29udGV4dC5maW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKTtcblxuICAgICAgaWYgKGNvbmplY3R1cmUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgY29uamVjdHVyZU1hdGNoZXNTdGF0ZW1lbnQgPSBjb25qZWN0dXJlLm1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIHN0YXRlbWVudFByb29mQ29udGV4dCk7XG5cbiAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSBjb25qZWN0dXJlTWF0Y2hlc1N0YXRlbWVudDsgLy8vXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gcHJvb2ZDb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICAgIHByb29mQ29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgcXVhbGlmaWVkIHN0YXRlbWVudC5gLCBxdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlRdWFsaWZpZWRTdGF0ZW1lbnQiLCJyZWZlcmVuY2VOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJxdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiYXNzaWdubWVudHMiLCJkZXJpdmVkIiwicHJvb2ZDb250ZXh0IiwicXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwic3RhdGVtZW50UHJvb2ZDb250ZXh0IiwiZGVidWciLCJyZWZlcmVuY2VOb2RlIiwicmVmZXJlbmNlTmFtZSIsInJlZmVyZW5jZU5hbWVGcm9tUmVmZXJlbmNlTm9kZSIsInJ1bGUiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlTmFtZSIsInJ1bGVNYXRjaGVzU3RhdGVtZW50IiwibWF0Y2hTdGF0ZW1lbnQiLCJheGlvbSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlTmFtZSIsImF4aW9tTWF0Y2hlc1N0YXRlbWVudCIsImxlbW1hIiwiZmluZExlbW1hQnlSZWZlcmVuY2VOYW1lIiwibGVtbWFNYXRjaGVzU3RhdGVtZW50IiwidGhlb3JlbSIsImZpbmRUaGVvcmVtQnlSZWZlcmVuY2VOYW1lIiwidGhlb3JlbU1hdGNoZXNTdGF0ZW1lbnQiLCJjb25qZWN0dXJlIiwiZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZU5hbWUiLCJj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