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
function verifyQualifiedStatement(qualifiedStatementNode, assignments, derived, proofContext) {
    var qualifiedStatementVerified = false;
    var statementNode = statementNodeQuery(qualifiedStatementNode);
    if (statementNode !== null) {
        var statementString = proofContext.nodeAsString(statementNode);
        proofContext.debug("Verifying the '".concat(statementString, "' qualified statement..."), qualifiedStatementNode);
        var referenceNode = referenceNodeQuery(qualifiedStatementNode);
        if (referenceNode === null) {
            var context = proofContext, statementVerified = (0, _statement.default)(statementNode, assignments, derived, context);
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
    if (qualifiedStatementVerified) {
        var statementString1 = proofContext.nodeAsString(statementNode);
        proofContext.info("Verified the '".concat(statementString1, "' qualified statement."), qualifiedStatementNode);
    }
    return qualifiedStatementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50L3F1YWxpZmllZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeVN0YXRlbWVudCBmcm9tIFwiLi4vLi4vdmVyaWZ5L3N0YXRlbWVudFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnksIHJlZmVyZW5jZU5hbWVGcm9tUmVmZXJlbmNlTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgcmVmZXJlbmNlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3F1YWxpZmllZFN0YXRlbWVudC9xdWFsaWZpY2F0aW9uIS9yZWZlcmVuY2UhXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3F1YWxpZmllZFN0YXRlbWVudC9zdGF0ZW1lbnQhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlRdWFsaWZpZWRTdGF0ZW1lbnQocXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIHByb29mQ29udGV4dCkge1xuICBsZXQgcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KHF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gcHJvb2ZDb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICAgIHByb29mQ29udGV4dC5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBxdWFsaWZpZWQgc3RhdGVtZW50Li4uYCwgcXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb25zdCByZWZlcmVuY2VOb2RlID0gcmVmZXJlbmNlTm9kZVF1ZXJ5KHF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKHJlZmVyZW5jZU5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBwcm9vZkNvbnRleHQsXG4gICAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCk7XG5cbiAgICAgIHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gc3RhdGVtZW50VmVyaWZpZWQ7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZWZlcmVuY2VOYW1lID0gcmVmZXJlbmNlTmFtZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUpO1xuXG4gICAgICBpZiAoIXF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHJ1bGUgPSBwcm9vZkNvbnRleHQuZmluZFJ1bGVCeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSk7XG5cbiAgICAgICAgaWYgKHJ1bGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBydWxlTWF0Y2hlc1N0YXRlbWVudCA9IHJ1bGUubWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgICAgIHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gcnVsZU1hdGNoZXNTdGF0ZW1lbnQ7ICAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIXF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGF4aW9tID0gcHJvb2ZDb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKTtcblxuICAgICAgICBpZiAoYXhpb20gIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBheGlvbU1hdGNoZXNTdGF0ZW1lbnQgPSBheGlvbS5tYXRjaFN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSBheGlvbU1hdGNoZXNTdGF0ZW1lbnQ7IC8vL1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgbGVtbWEgPSBwcm9vZkNvbnRleHQuZmluZExlbW1hQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpO1xuXG4gICAgICAgIGlmIChsZW1tYSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGxlbW1hTWF0Y2hlc1N0YXRlbWVudCA9IGxlbW1hLm1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIHByb29mQ29udGV4dCk7XG5cbiAgICAgICAgICBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IGxlbW1hTWF0Y2hlc1N0YXRlbWVudDsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCB0aGVvcmVtID0gcHJvb2ZDb250ZXh0LmZpbmRUaGVvcmVtQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpO1xuXG4gICAgICAgIGlmICh0aGVvcmVtICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgdGhlb3JlbU1hdGNoZXNTdGF0ZW1lbnQgPSB0aGVvcmVtLm1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIHByb29mQ29udGV4dCk7XG5cbiAgICAgICAgICBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHRoZW9yZW1NYXRjaGVzU3RhdGVtZW50OyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIXF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGNvbmplY3R1cmUgPSBwcm9vZkNvbnRleHQuZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSk7XG5cbiAgICAgICAgaWYgKGNvbmplY3R1cmUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBjb25qZWN0dXJlTWF0Y2hlc1N0YXRlbWVudCA9IGNvbmplY3R1cmUubWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgICAgIHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gY29uamVjdHVyZU1hdGNoZXNTdGF0ZW1lbnQ7IC8vL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gcHJvb2ZDb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICAgIHByb29mQ29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgcXVhbGlmaWVkIHN0YXRlbWVudC5gLCBxdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlRdWFsaWZpZWRTdGF0ZW1lbnQiLCJyZWZlcmVuY2VOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJxdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiYXNzaWdubWVudHMiLCJkZXJpdmVkIiwicHJvb2ZDb250ZXh0IiwicXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiZGVidWciLCJyZWZlcmVuY2VOb2RlIiwiY29udGV4dCIsInN0YXRlbWVudFZlcmlmaWVkIiwidmVyaWZ5U3RhdGVtZW50IiwicmVmZXJlbmNlTmFtZSIsInJlZmVyZW5jZU5hbWVGcm9tUmVmZXJlbmNlTm9kZSIsInJ1bGUiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlTmFtZSIsInJ1bGVNYXRjaGVzU3RhdGVtZW50IiwibWF0Y2hTdGF0ZW1lbnQiLCJheGlvbSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlTmFtZSIsImF4aW9tTWF0Y2hlc1N0YXRlbWVudCIsImxlbW1hIiwiZmluZExlbW1hQnlSZWZlcmVuY2VOYW1lIiwibGVtbWFNYXRjaGVzU3RhdGVtZW50IiwidGhlb3JlbSIsImZpbmRUaGVvcmVtQnlSZWZlcmVuY2VOYW1lIiwidGhlb3JlbU1hdGNoZXNTdGF0ZW1lbnQiLCJjb25qZWN0dXJlIiwiZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZU5hbWUiLCJjb25qZWN0dXJlTWF0Y2hlc1N0YXRlbWVudCIsImluZm8iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBd0JBOzs7OERBUEk7cUJBRThCOzs7Ozs7QUFFMUQsSUFBTUMscUJBQXFCQyxJQUFBQSxnQkFBUyxFQUFDLGtEQUMvQkMscUJBQXFCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRXRCLFNBQVNGLHlCQUF5Qkksc0JBQXNCLEVBQUVDLFdBQVcsRUFBRUMsT0FBTyxFQUFFQyxZQUFZLEVBQUU7SUFDM0csSUFBSUMsNkJBQTZCLEtBQUs7SUFFdEMsSUFBTUMsZ0JBQWdCTixtQkFBbUJDO0lBRXpDLElBQUlLLGtCQUFrQixJQUFJLEVBQUU7UUFDMUIsSUFBTUMsa0JBQWtCSCxhQUFhSSxZQUFZLENBQUNGO1FBRWxERixhQUFhSyxLQUFLLENBQUMsQUFBQyxrQkFBaUMsT0FBaEJGLGlCQUFnQiw2QkFBMkJOO1FBRWhGLElBQU1TLGdCQUFnQlosbUJBQW1CRztRQUV6QyxJQUFJUyxrQkFBa0IsSUFBSSxFQUFFO1lBQzFCLElBQU1DLFVBQVVQLGNBQ1ZRLG9CQUFvQkMsSUFBQUEsa0JBQWUsRUFBQ1AsZUFBZUosYUFBYUMsU0FBU1E7WUFFL0VOLDZCQUE2Qk8sbUJBQW1CLEdBQUc7UUFDckQsT0FBTztZQUNMLElBQU1FLGdCQUFnQkMsSUFBQUEscUNBQThCLEVBQUNMO1lBRXJELElBQUksQ0FBQ0wsNEJBQTRCO2dCQUMvQixJQUFNVyxPQUFPWixhQUFhYSx1QkFBdUIsQ0FBQ0g7Z0JBRWxELElBQUlFLFNBQVMsSUFBSSxFQUFFO29CQUNqQixJQUFNRSx1QkFBdUJGLEtBQUtHLGNBQWMsQ0FBQ2IsZUFBZUY7b0JBRWhFQyw2QkFBNkJhLHNCQUF1QixHQUFHO2dCQUN6RCxDQUFDO1lBQ0gsQ0FBQztZQUVELElBQUksQ0FBQ2IsNEJBQTRCO2dCQUMvQixJQUFNZSxRQUFRaEIsYUFBYWlCLHdCQUF3QixDQUFDUDtnQkFFcEQsSUFBSU0sVUFBVSxJQUFJLEVBQUU7b0JBQ2xCLElBQU1FLHdCQUF3QkYsTUFBTUQsY0FBYyxDQUFDYixlQUFlRjtvQkFFbEVDLDZCQUE2QmlCLHVCQUF1QixHQUFHO2dCQUN6RCxDQUFDO1lBQ0gsQ0FBQztZQUVELElBQUksQ0FBQ2pCLDRCQUE0QjtnQkFDL0IsSUFBTWtCLFFBQVFuQixhQUFhb0Isd0JBQXdCLENBQUNWO2dCQUVwRCxJQUFJUyxVQUFVLElBQUksRUFBRTtvQkFDbEIsSUFBTUUsd0JBQXdCRixNQUFNSixjQUFjLENBQUNiLGVBQWVGO29CQUVsRUMsNkJBQTZCb0IsdUJBQXVCLEdBQUc7Z0JBQ3pELENBQUM7WUFDSCxDQUFDO1lBRUQsSUFBSSxDQUFDcEIsNEJBQTRCO2dCQUMvQixJQUFNcUIsVUFBVXRCLGFBQWF1QiwwQkFBMEIsQ0FBQ2I7Z0JBRXhELElBQUlZLFlBQVksSUFBSSxFQUFFO29CQUNwQixJQUFNRSwwQkFBMEJGLFFBQVFQLGNBQWMsQ0FBQ2IsZUFBZUY7b0JBRXRFQyw2QkFBNkJ1Qix5QkFBeUIsR0FBRztnQkFDM0QsQ0FBQztZQUNILENBQUM7WUFFRCxJQUFJLENBQUN2Qiw0QkFBNEI7Z0JBQy9CLElBQU13QixhQUFhekIsYUFBYTBCLDZCQUE2QixDQUFDaEI7Z0JBRTlELElBQUllLGVBQWUsSUFBSSxFQUFFO29CQUN2QixJQUFNRSw2QkFBNkJGLFdBQVdWLGNBQWMsQ0FBQ2IsZUFBZUY7b0JBRTVFQyw2QkFBNkIwQiw0QkFBNEIsR0FBRztnQkFDOUQsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQUkxQiw0QkFBNEI7UUFDOUIsSUFBTUUsbUJBQWtCSCxhQUFhSSxZQUFZLENBQUNGO1FBRWxERixhQUFhNEIsSUFBSSxDQUFDLEFBQUMsaUJBQWdDLE9BQWhCekIsa0JBQWdCLDJCQUF5Qk47SUFDOUUsQ0FBQztJQUVELE9BQU9JO0FBQ1QifQ==