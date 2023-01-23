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
        var statementMatches = false;
        var referenceNode = referenceNodeQuery(qualifiedStatementNode);
        if (referenceNode === null) {
            statementMatches = true; ///
        } else {
            var referenceName = (0, _query.referenceNameFromReferenceNode)(referenceNode);
            if (!statementMatches) {
                var rule = proofContext.findRuleByReferenceName(referenceName), ruleMatchesStatement = rule.matchStatement(statementNode, proofContext);
                statementMatches = ruleMatchesStatement; ///
            }
            if (!statementMatches) {
                var axiom = proofContext.findAxiomByReferenceName(referenceName), axiomMatchesStatement = axiom.matchStatement(statementNode, proofContext);
                statementMatches = axiomMatchesStatement; ///
            }
            if (!statementMatches) {
                var lemma = proofContext.findLemmaByReferenceName(referenceName), lemmaMatchesStatement = lemma.matchStatement(statementNode, proofContext);
                statementMatches = lemmaMatchesStatement; ///
            }
            if (!statementMatches) {
                var theorem = proofContext.findTheoremByReferenceName(referenceName), theoremMatchesStatement = theorem.matchStatement(statementNode, proofContext);
                statementMatches = theoremMatchesStatement; ///
            }
            if (!statementMatches) {
                var conjecture = proofContext.findConjectureByReferenceName(referenceName), conjectureMatchesStatement = conjecture.matchStatement(statementNode, proofContext);
                statementMatches = conjectureMatchesStatement; ///
            }
        }
        if (statementMatches) {
            var context = proofContext, statementVerified = (0, _statement.default)(statementNode, assertions, derived, context);
            qualifiedStatementVerified = statementVerified; ///
        }
    }
    qualifiedStatementVerified ? proofContext.complete(qualifiedStatementNode) : proofContext.halt(qualifiedStatementNode);
    return qualifiedStatementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50L3F1YWxpZmllZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeVN0YXRlbWVudCBmcm9tIFwiLi4vLi4vdmVyaWZ5L3N0YXRlbWVudFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnksIHJlZmVyZW5jZU5hbWVGcm9tUmVmZXJlbmNlTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgcmVmZXJlbmNlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3F1YWxpZmllZFN0YXRlbWVudC9xdWFsaWZpY2F0aW9uIS9yZWZlcmVuY2UhXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3F1YWxpZmllZFN0YXRlbWVudC9zdGF0ZW1lbnQhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlRdWFsaWZpZWRTdGF0ZW1lbnQocXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgYXNzZXJ0aW9ucywgZGVyaXZlZCwgcHJvb2ZDb250ZXh0KSB7XG4gIGxldCBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IGZhbHNlO1xuXG4gIHByb29mQ29udGV4dC5iZWdpbihxdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KHF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gcHJvb2ZDb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICAgIHByb29mQ29udGV4dC5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBxdWFsaWZpZWQgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBsZXQgc3RhdGVtZW50TWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlTm9kZSA9IHJlZmVyZW5jZU5vZGVRdWVyeShxdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChyZWZlcmVuY2VOb2RlID09PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnRNYXRjaGVzID0gdHJ1ZTsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZWZlcmVuY2VOYW1lID0gcmVmZXJlbmNlTmFtZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUpO1xuXG4gICAgICBpZiAoIXN0YXRlbWVudE1hdGNoZXMpIHtcbiAgICAgICAgY29uc3QgcnVsZSA9IHByb29mQ29udGV4dC5maW5kUnVsZUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKSxcbiAgICAgICAgICAgICAgcnVsZU1hdGNoZXNTdGF0ZW1lbnQgPSBydWxlLm1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIHByb29mQ29udGV4dCk7XG5cbiAgICAgICAgc3RhdGVtZW50TWF0Y2hlcyA9IHJ1bGVNYXRjaGVzU3RhdGVtZW50OyAgLy8vXG4gICAgICB9XG5cbiAgICAgIGlmICghc3RhdGVtZW50TWF0Y2hlcykge1xuICAgICAgICBjb25zdCBheGlvbSA9IHByb29mQ29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSksXG4gICAgICAgICAgICAgIGF4aW9tTWF0Y2hlc1N0YXRlbWVudCA9IGF4aW9tLm1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIHByb29mQ29udGV4dCk7XG5cbiAgICAgICAgc3RhdGVtZW50TWF0Y2hlcyA9IGF4aW9tTWF0Y2hlc1N0YXRlbWVudDsgLy8vXG4gICAgICB9XG5cbiAgICAgIGlmICghc3RhdGVtZW50TWF0Y2hlcykge1xuICAgICAgICBjb25zdCBsZW1tYSA9IHByb29mQ29udGV4dC5maW5kTGVtbWFCeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSksXG4gICAgICAgICAgICAgIGxlbW1hTWF0Y2hlc1N0YXRlbWVudCA9IGxlbW1hLm1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIHByb29mQ29udGV4dCk7XG5cbiAgICAgICAgc3RhdGVtZW50TWF0Y2hlcyA9IGxlbW1hTWF0Y2hlc1N0YXRlbWVudDsgLy8vXG4gICAgICB9XG5cbiAgICAgIGlmICghc3RhdGVtZW50TWF0Y2hlcykge1xuICAgICAgICBjb25zdCB0aGVvcmVtID0gcHJvb2ZDb250ZXh0LmZpbmRUaGVvcmVtQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpLFxuICAgICAgICAgICAgICB0aGVvcmVtTWF0Y2hlc1N0YXRlbWVudCA9IHRoZW9yZW0ubWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgICBzdGF0ZW1lbnRNYXRjaGVzID0gdGhlb3JlbU1hdGNoZXNTdGF0ZW1lbnQ7IC8vL1xuICAgICAgfVxuXG4gICAgICBpZiAoIXN0YXRlbWVudE1hdGNoZXMpIHtcbiAgICAgICAgY29uc3QgY29uamVjdHVyZSA9IHByb29mQ29udGV4dC5maW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKSxcbiAgICAgICAgICAgICAgY29uamVjdHVyZU1hdGNoZXNTdGF0ZW1lbnQgPSBjb25qZWN0dXJlLm1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIHByb29mQ29udGV4dCk7XG5cbiAgICAgICAgc3RhdGVtZW50TWF0Y2hlcyA9IGNvbmplY3R1cmVNYXRjaGVzU3RhdGVtZW50OyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50TWF0Y2hlcykge1xuICAgICAgY29uc3QgY29udGV4dCA9IHByb29mQ29udGV4dCxcbiAgICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGFzc2VydGlvbnMsIGRlcml2ZWQsIGNvbnRleHQpO1xuXG4gICAgICBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHN0YXRlbWVudFZlcmlmaWVkOyAvLy9cbiAgICB9XG4gIH1cblxuICBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA/XG4gICAgcHJvb2ZDb250ZXh0LmNvbXBsZXRlKHF1YWxpZmllZFN0YXRlbWVudE5vZGUpIDpcbiAgICAgIHByb29mQ29udGV4dC5oYWx0KHF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuXG4gIHJldHVybiBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlRdWFsaWZpZWRTdGF0ZW1lbnQiLCJyZWZlcmVuY2VOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJxdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiYXNzZXJ0aW9ucyIsImRlcml2ZWQiLCJwcm9vZkNvbnRleHQiLCJxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCIsImJlZ2luIiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsImRlYnVnIiwic3RhdGVtZW50TWF0Y2hlcyIsInJlZmVyZW5jZU5vZGUiLCJyZWZlcmVuY2VOYW1lIiwicmVmZXJlbmNlTmFtZUZyb21SZWZlcmVuY2VOb2RlIiwicnVsZSIsImZpbmRSdWxlQnlSZWZlcmVuY2VOYW1lIiwicnVsZU1hdGNoZXNTdGF0ZW1lbnQiLCJtYXRjaFN0YXRlbWVudCIsImF4aW9tIiwiZmluZEF4aW9tQnlSZWZlcmVuY2VOYW1lIiwiYXhpb21NYXRjaGVzU3RhdGVtZW50IiwibGVtbWEiLCJmaW5kTGVtbWFCeVJlZmVyZW5jZU5hbWUiLCJsZW1tYU1hdGNoZXNTdGF0ZW1lbnQiLCJ0aGVvcmVtIiwiZmluZFRoZW9yZW1CeVJlZmVyZW5jZU5hbWUiLCJ0aGVvcmVtTWF0Y2hlc1N0YXRlbWVudCIsImNvbmplY3R1cmUiLCJmaW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlTmFtZSIsImNvbmplY3R1cmVNYXRjaGVzU3RhdGVtZW50IiwiY29udGV4dCIsInN0YXRlbWVudFZlcmlmaWVkIiwidmVyaWZ5U3RhdGVtZW50IiwiY29tcGxldGUiLCJoYWx0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQXdCQTs7OzhEQVBJO3FCQUU4Qjs7Ozs7O0FBRTFELElBQU1DLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQyxrREFDL0JDLHFCQUFxQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUV0QixTQUFTRix5QkFBeUJJLHNCQUFzQixFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxFQUFFO0lBQzFHLElBQUlDLDZCQUE2QixLQUFLO0lBRXRDRCxhQUFhRSxLQUFLLENBQUNMO0lBRW5CLElBQU1NLGdCQUFnQlAsbUJBQW1CQztJQUV6QyxJQUFJTSxrQkFBa0IsSUFBSSxFQUFFO1FBQzFCLElBQU1DLGtCQUFrQkosYUFBYUssWUFBWSxDQUFDRjtRQUVsREgsYUFBYU0sS0FBSyxDQUFDLEFBQUMsa0JBQWlDLE9BQWhCRixpQkFBZ0I7UUFFckQsSUFBSUcsbUJBQW1CLEtBQUs7UUFFNUIsSUFBTUMsZ0JBQWdCZCxtQkFBbUJHO1FBRXpDLElBQUlXLGtCQUFrQixJQUFJLEVBQUU7WUFDMUJELG1CQUFtQixJQUFJLEVBQUcsR0FBRztRQUMvQixPQUFPO1lBQ0wsSUFBTUUsZ0JBQWdCQyxJQUFBQSxxQ0FBOEIsRUFBQ0Y7WUFFckQsSUFBSSxDQUFDRCxrQkFBa0I7Z0JBQ3JCLElBQU1JLE9BQU9YLGFBQWFZLHVCQUF1QixDQUFDSCxnQkFDNUNJLHVCQUF1QkYsS0FBS0csY0FBYyxDQUFDWCxlQUFlSDtnQkFFaEVPLG1CQUFtQk0sc0JBQXVCLEdBQUc7WUFDL0MsQ0FBQztZQUVELElBQUksQ0FBQ04sa0JBQWtCO2dCQUNyQixJQUFNUSxRQUFRZixhQUFhZ0Isd0JBQXdCLENBQUNQLGdCQUM5Q1Esd0JBQXdCRixNQUFNRCxjQUFjLENBQUNYLGVBQWVIO2dCQUVsRU8sbUJBQW1CVSx1QkFBdUIsR0FBRztZQUMvQyxDQUFDO1lBRUQsSUFBSSxDQUFDVixrQkFBa0I7Z0JBQ3JCLElBQU1XLFFBQVFsQixhQUFhbUIsd0JBQXdCLENBQUNWLGdCQUM5Q1csd0JBQXdCRixNQUFNSixjQUFjLENBQUNYLGVBQWVIO2dCQUVsRU8sbUJBQW1CYSx1QkFBdUIsR0FBRztZQUMvQyxDQUFDO1lBRUQsSUFBSSxDQUFDYixrQkFBa0I7Z0JBQ3JCLElBQU1jLFVBQVVyQixhQUFhc0IsMEJBQTBCLENBQUNiLGdCQUNsRGMsMEJBQTBCRixRQUFRUCxjQUFjLENBQUNYLGVBQWVIO2dCQUV0RU8sbUJBQW1CZ0IseUJBQXlCLEdBQUc7WUFDakQsQ0FBQztZQUVELElBQUksQ0FBQ2hCLGtCQUFrQjtnQkFDckIsSUFBTWlCLGFBQWF4QixhQUFheUIsNkJBQTZCLENBQUNoQixnQkFDeERpQiw2QkFBNkJGLFdBQVdWLGNBQWMsQ0FBQ1gsZUFBZUg7Z0JBRTVFTyxtQkFBbUJtQiw0QkFBNEIsR0FBRztZQUNwRCxDQUFDO1FBQ0gsQ0FBQztRQUVELElBQUluQixrQkFBa0I7WUFDcEIsSUFBTW9CLFVBQVUzQixjQUNWNEIsb0JBQW9CQyxJQUFBQSxrQkFBZSxFQUFDMUIsZUFBZUwsWUFBWUMsU0FBUzRCO1lBRTlFMUIsNkJBQTZCMkIsbUJBQW1CLEdBQUc7UUFDckQsQ0FBQztJQUNILENBQUM7SUFFRDNCLDZCQUNFRCxhQUFhOEIsUUFBUSxDQUFDakMsMEJBQ3BCRyxhQUFhK0IsSUFBSSxDQUFDbEMsdUJBQXVCO0lBRTdDLE9BQU9JO0FBQ1QifQ==