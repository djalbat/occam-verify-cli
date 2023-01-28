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
    var statementNode = statementNodeQuery(qualifiedStatementNode);
    if (statementNode !== null) {
        var statementString = proofContext.nodeAsString(statementNode);
        proofContext.debug("Verifying the '".concat(statementString, "' qualified statement..."), qualifiedStatementNode);
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
    return qualifiedStatementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50L3F1YWxpZmllZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeVN0YXRlbWVudCBmcm9tIFwiLi4vLi4vdmVyaWZ5L3N0YXRlbWVudFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnksIHJlZmVyZW5jZU5hbWVGcm9tUmVmZXJlbmNlTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgcmVmZXJlbmNlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3F1YWxpZmllZFN0YXRlbWVudC9xdWFsaWZpY2F0aW9uIS9yZWZlcmVuY2UhXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3F1YWxpZmllZFN0YXRlbWVudC9zdGF0ZW1lbnQhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlRdWFsaWZpZWRTdGF0ZW1lbnQocXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgYXNzZXJ0aW9ucywgZGVyaXZlZCwgcHJvb2ZDb250ZXh0KSB7XG4gIGxldCBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkocXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBwcm9vZkNvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcHJvb2ZDb250ZXh0LmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHF1YWxpZmllZCBzdGF0ZW1lbnQuLi5gLCBxdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZU5vZGUgPSByZWZlcmVuY2VOb2RlUXVlcnkocXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAocmVmZXJlbmNlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IHByb29mQ29udGV4dCxcbiAgICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGFzc2VydGlvbnMsIGRlcml2ZWQsIGNvbnRleHQpO1xuXG4gICAgICBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHN0YXRlbWVudFZlcmlmaWVkOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVmZXJlbmNlTmFtZSA9IHJlZmVyZW5jZU5hbWVGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKTtcblxuICAgICAgaWYgKCFxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBydWxlID0gcHJvb2ZDb250ZXh0LmZpbmRSdWxlQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpO1xuXG4gICAgICAgIGlmIChydWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgcnVsZU1hdGNoZXNTdGF0ZW1lbnQgPSBydWxlLm1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIHByb29mQ29udGV4dCk7XG5cbiAgICAgICAgICBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHJ1bGVNYXRjaGVzU3RhdGVtZW50OyAgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBheGlvbSA9IHByb29mQ29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSk7XG5cbiAgICAgICAgaWYgKGF4aW9tICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgYXhpb21NYXRjaGVzU3RhdGVtZW50ID0gYXhpb20ubWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgICAgIHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gYXhpb21NYXRjaGVzU3RhdGVtZW50OyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIXF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGxlbW1hID0gcHJvb2ZDb250ZXh0LmZpbmRMZW1tYUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKTtcblxuICAgICAgICBpZiAobGVtbWEgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBsZW1tYU1hdGNoZXNTdGF0ZW1lbnQgPSBsZW1tYS5tYXRjaFN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSBsZW1tYU1hdGNoZXNTdGF0ZW1lbnQ7IC8vL1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgdGhlb3JlbSA9IHByb29mQ29udGV4dC5maW5kVGhlb3JlbUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKTtcblxuICAgICAgICBpZiAodGhlb3JlbSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHRoZW9yZW1NYXRjaGVzU3RhdGVtZW50ID0gdGhlb3JlbS5tYXRjaFN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSB0aGVvcmVtTWF0Y2hlc1N0YXRlbWVudDsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBjb25qZWN0dXJlID0gcHJvb2ZDb250ZXh0LmZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpO1xuXG4gICAgICAgIGlmIChjb25qZWN0dXJlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgY29uamVjdHVyZU1hdGNoZXNTdGF0ZW1lbnQgPSBjb25qZWN0dXJlLm1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIHByb29mQ29udGV4dCk7XG5cbiAgICAgICAgICBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IGNvbmplY3R1cmVNYXRjaGVzU3RhdGVtZW50OyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlRdWFsaWZpZWRTdGF0ZW1lbnQiLCJyZWZlcmVuY2VOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJxdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiYXNzZXJ0aW9ucyIsImRlcml2ZWQiLCJwcm9vZkNvbnRleHQiLCJxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJkZWJ1ZyIsInJlZmVyZW5jZU5vZGUiLCJjb250ZXh0Iiwic3RhdGVtZW50VmVyaWZpZWQiLCJ2ZXJpZnlTdGF0ZW1lbnQiLCJyZWZlcmVuY2VOYW1lIiwicmVmZXJlbmNlTmFtZUZyb21SZWZlcmVuY2VOb2RlIiwicnVsZSIsImZpbmRSdWxlQnlSZWZlcmVuY2VOYW1lIiwicnVsZU1hdGNoZXNTdGF0ZW1lbnQiLCJtYXRjaFN0YXRlbWVudCIsImF4aW9tIiwiZmluZEF4aW9tQnlSZWZlcmVuY2VOYW1lIiwiYXhpb21NYXRjaGVzU3RhdGVtZW50IiwibGVtbWEiLCJmaW5kTGVtbWFCeVJlZmVyZW5jZU5hbWUiLCJsZW1tYU1hdGNoZXNTdGF0ZW1lbnQiLCJ0aGVvcmVtIiwiZmluZFRoZW9yZW1CeVJlZmVyZW5jZU5hbWUiLCJ0aGVvcmVtTWF0Y2hlc1N0YXRlbWVudCIsImNvbmplY3R1cmUiLCJmaW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlTmFtZSIsImNvbmplY3R1cmVNYXRjaGVzU3RhdGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQXdCQTs7OzhEQVBJO3FCQUU4Qjs7Ozs7O0FBRTFELElBQU1DLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQyxrREFDL0JDLHFCQUFxQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUV0QixTQUFTRix5QkFBeUJJLHNCQUFzQixFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxFQUFFO0lBQzFHLElBQUlDLDZCQUE2QixLQUFLO0lBRXRDLElBQU1DLGdCQUFnQk4sbUJBQW1CQztJQUV6QyxJQUFJSyxrQkFBa0IsSUFBSSxFQUFFO1FBQzFCLElBQU1DLGtCQUFrQkgsYUFBYUksWUFBWSxDQUFDRjtRQUVsREYsYUFBYUssS0FBSyxDQUFDLEFBQUMsa0JBQWlDLE9BQWhCRixpQkFBZ0IsNkJBQTJCTjtRQUVoRixJQUFNUyxnQkFBZ0JaLG1CQUFtQkc7UUFFekMsSUFBSVMsa0JBQWtCLElBQUksRUFBRTtZQUMxQixJQUFNQyxVQUFVUCxjQUNWUSxvQkFBb0JDLElBQUFBLGtCQUFlLEVBQUNQLGVBQWVKLFlBQVlDLFNBQVNRO1lBRTlFTiw2QkFBNkJPLG1CQUFtQixHQUFHO1FBQ3JELE9BQU87WUFDTCxJQUFNRSxnQkFBZ0JDLElBQUFBLHFDQUE4QixFQUFDTDtZQUVyRCxJQUFJLENBQUNMLDRCQUE0QjtnQkFDL0IsSUFBTVcsT0FBT1osYUFBYWEsdUJBQXVCLENBQUNIO2dCQUVsRCxJQUFJRSxTQUFTLElBQUksRUFBRTtvQkFDakIsSUFBTUUsdUJBQXVCRixLQUFLRyxjQUFjLENBQUNiLGVBQWVGO29CQUVoRUMsNkJBQTZCYSxzQkFBdUIsR0FBRztnQkFDekQsQ0FBQztZQUNILENBQUM7WUFFRCxJQUFJLENBQUNiLDRCQUE0QjtnQkFDL0IsSUFBTWUsUUFBUWhCLGFBQWFpQix3QkFBd0IsQ0FBQ1A7Z0JBRXBELElBQUlNLFVBQVUsSUFBSSxFQUFFO29CQUNsQixJQUFNRSx3QkFBd0JGLE1BQU1ELGNBQWMsQ0FBQ2IsZUFBZUY7b0JBRWxFQyw2QkFBNkJpQix1QkFBdUIsR0FBRztnQkFDekQsQ0FBQztZQUNILENBQUM7WUFFRCxJQUFJLENBQUNqQiw0QkFBNEI7Z0JBQy9CLElBQU1rQixRQUFRbkIsYUFBYW9CLHdCQUF3QixDQUFDVjtnQkFFcEQsSUFBSVMsVUFBVSxJQUFJLEVBQUU7b0JBQ2xCLElBQU1FLHdCQUF3QkYsTUFBTUosY0FBYyxDQUFDYixlQUFlRjtvQkFFbEVDLDZCQUE2Qm9CLHVCQUF1QixHQUFHO2dCQUN6RCxDQUFDO1lBQ0gsQ0FBQztZQUVELElBQUksQ0FBQ3BCLDRCQUE0QjtnQkFDL0IsSUFBTXFCLFVBQVV0QixhQUFhdUIsMEJBQTBCLENBQUNiO2dCQUV4RCxJQUFJWSxZQUFZLElBQUksRUFBRTtvQkFDcEIsSUFBTUUsMEJBQTBCRixRQUFRUCxjQUFjLENBQUNiLGVBQWVGO29CQUV0RUMsNkJBQTZCdUIseUJBQXlCLEdBQUc7Z0JBQzNELENBQUM7WUFDSCxDQUFDO1lBRUQsSUFBSSxDQUFDdkIsNEJBQTRCO2dCQUMvQixJQUFNd0IsYUFBYXpCLGFBQWEwQiw2QkFBNkIsQ0FBQ2hCO2dCQUU5RCxJQUFJZSxlQUFlLElBQUksRUFBRTtvQkFDdkIsSUFBTUUsNkJBQTZCRixXQUFXVixjQUFjLENBQUNiLGVBQWVGO29CQUU1RUMsNkJBQTZCMEIsNEJBQTRCLEdBQUc7Z0JBQzlELENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxPQUFPMUI7QUFDVCJ9