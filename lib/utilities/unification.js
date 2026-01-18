"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unifyStatements", {
    enumerable: true,
    get: function() {
        return unifyStatements;
    }
});
var _necessary = require("necessary");
var _elements = /*#__PURE__*/ _interop_require_default(require("../elements"));
var _statement = require("../utilities/statement");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var backwardsSome = _necessary.arrayUtilities.backwardsSome;
function unifyStatementWithRule(statement, reference, satisfiesAssertion, substitutions, context) {
    var statementUnifiesWithRule = false;
    if (reference !== null) {
        var rule = context.findRuleByReference(reference);
        if (rule !== null) {
            var ruleString = rule.getString(), statementString = statement.getString();
            context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(ruleString, "' rule..."));
            var subproofOrProofAssertions = context.getSubproofOrProofAssertions(), statementAndSubproofOrProofAssertionsUnify = rule.unifyStatementAndSubproofOrProofAssertions(statement, subproofOrProofAssertions, context);
            if (statementAndSubproofOrProofAssertionsUnify) {
                statementUnifiesWithRule = true;
            }
            if (statementUnifiesWithRule) {
                context.debug("...unified the '".concat(statementString, "' statement with the '").concat(ruleString, "' rule."));
            }
        }
    }
    return statementUnifiesWithRule;
}
function unifyStatementWithReference(statement, reference, satisfiesAssertion, substitutions, context) {
    var statementUnifiesWithReference = false;
    if (reference !== null) {
        var statementString = statement.getString(), referenceString = reference.getString();
        context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(referenceString, "' reference..."));
        var metavariableValidates = reference.validateMetavariable(context);
        if (metavariableValidates) {
            var StatementSubstitution = _elements.default.StatementSubstitution, metavariable = reference.getMetavariable(), statementSubstitution = StatementSubstitution.fromStatementAndMetavariable(statement, metavariable, context), substitution = statementSubstitution; ///
            substitutions.addSubstitution(substitution, context);
            statementUnifiesWithReference = true;
        }
        if (statementUnifiesWithReference) {
            context.debug("...unified the '".concat(statementString, "' statement with the '").concat(referenceString, "' reference."));
        }
    }
    return statementUnifiesWithReference;
}
function unifyStatementAsSatisfiesAssertion(statement, reference, satisfiesAssertion, substitutions, context) {
    var statementUnifiesAsSatisfiesAssertion = false;
    satisfiesAssertion = (0, _statement.satisfiesAssertionFromStatement)(statement, context);
    if (satisfiesAssertion !== null) {
        var statementString = statement.getString();
        context.trace("Unifying the '".concat(statementString, "' statement as a satisfies assertion..."));
        var stated = true, assignments = null;
        satisfiesAssertion.verifySignature(assignments, stated, context);
        if (reference === null) {
            var subproofOrProofAssertions = context.getSubproofOrProofAssertions();
            statementUnifiesAsSatisfiesAssertion = backwardsSome(subproofOrProofAssertions, function(stepsOrSubproof) {
                var stepOrSubProofUnifiesWIthSatisfiesAssertion = stepsOrSubproof.unifyWithSatisfiesAssertion(satisfiesAssertion, context);
                if (stepOrSubProofUnifiesWIthSatisfiesAssertion) {
                    return true;
                }
            });
        } else {
            var topLevelAssertion = context.findTopLevelAssertionByReference(reference);
            if (topLevelAssertion !== null) {
                reference = satisfiesAssertion.getReference();
                var axiom = context.findAxiomByReference(reference);
                if (axiom !== null) {
                    var satisfiable = axiom.isSatisfiable();
                    if (satisfiable) {
                        var Substitutions = _elements.default.Substitutions, substitutions1 = Substitutions.fromNothing(context), topLevelAssertionUnifies = axiom.unifyTopLevelAssertion(topLevelAssertion, substitutions1, context);
                        if (topLevelAssertionUnifies) {
                            var substitutionsCorrelates = satisfiesAssertion.correlateSubstitutions(substitutions1, context);
                            if (substitutionsCorrelates) {
                                statementUnifiesAsSatisfiesAssertion = true;
                            }
                        }
                    } else {
                        var axiomString = axiom.getString();
                        context.debug("Unable to unify with the '".concat(axiomString, "' because it is not satisfiable."));
                    }
                }
            }
        }
        if (statementUnifiesAsSatisfiesAssertion) {
            context.debug("...unified the '".concat(statementString, "' statement as a satisfies assertion."));
        }
    }
    return statementUnifiesAsSatisfiesAssertion;
}
function unifyStatementWithTopLevelAssertion(statement, reference, satisfiesAssertion, substitutions, context) {
    var statementUnifiesWithTopLevelAssertion = false;
    if (reference !== null) {
        var Substitutions = _elements.default.Substitutions, topLevelAssertion = context.findTopLevelAssertionByReference(reference), generalSubstitutions = substitutions; ///
        if (topLevelAssertion !== null) {
            var statementString = statement.getString(), topLevelAssertionString = reference.getString();
            context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(topLevelAssertionString, "' top level assertion..."));
            var subproofOrProofAssertions = context.getSubproofOrProofAssertions();
            substitutions = Substitutions.fromNothing(context);
            var statementAndSubproofOrProofAssertionsUnify = topLevelAssertion.unifyStatementAndSubproofOrProofAssertions(statement, subproofOrProofAssertions, substitutions, context);
            if (statementAndSubproofOrProofAssertionsUnify) {
                var StatementSubstitution = _elements.default.StatementSubstitution, metavariable = reference.getMetavariable(), statementSubstitution = StatementSubstitution.fromStatementAndMetavariable(statement, metavariable, context), substitution = statementSubstitution; ///
                substitutions = generalSubstitutions; ///
                substitutions.addSubstitution(substitution, context);
                statementUnifiesWithTopLevelAssertion = true;
            }
            if (statementUnifiesWithTopLevelAssertion) {
                context.debug("...unified the '".concat(statementString, "' statement with the '").concat(topLevelAssertionString, "' top level assertion."));
            }
        }
    }
    return statementUnifiesWithTopLevelAssertion;
}
function unifyStatementAEquality(statement, reference, satisfiesAssertion, substitutions, context) {
    var statementUnifiesAEquality = false;
    if (reference === null) {
        var equality = (0, _statement.equalityFromStatement)(statement, context);
        if (equality !== null) {
            var statementString = statement.getString();
            context.trace("Unifying the '".concat(statementString, "' statement as an equality..."));
            var equalityEqual = equality.isEqual(context);
            if (equalityEqual) {
                statementUnifiesAEquality = true;
            }
            if (statementUnifiesAEquality) {
                context.debug("...unified the '".concat(statementString, "' statement as an equality."));
            }
        }
    }
    return statementUnifiesAEquality;
}
function unifyStatementAsJudgement(statement, reference, satisfiesAssertion, substitutions, context) {
    var statementUnifiesAsJudgement = false;
    if (reference === null) {
        var judgement = (0, _statement.judgementFromStatement)(statement, context);
        if (judgement !== null) {
            var statementString = statement.getString();
            context.trace("Unifying the '".concat(statementString, "' statement as a judgement..."));
            statementUnifiesAsJudgement = true;
            if (statementUnifiesAsJudgement) {
                context.debug("...unified the '".concat(statementString, "' statement as a judgement."));
            }
        }
    }
    return statementUnifiesAsJudgement;
}
function unifyStatementAsTypeAssertion(statement, reference, satisfiesAssertion, substitutions, context) {
    var statementUnifiesAsTypeAssertion = false;
    if (reference === null) {
        var typeAssertion = (0, _statement.typeAssertionFromStatement)(statement, context);
        if (typeAssertion !== null) {
            var statementString = statement.getString();
            context.trace("Unifying the '".concat(statementString, "' statement as a type assertion..."));
            statementUnifiesAsTypeAssertion = true;
            context.debug("...unified the '".concat(statementString, "' statement as a type assertion."));
        }
    }
    return statementUnifiesAsTypeAssertion;
}
function unifyStatementAsPropertyAssertion(statement, reference, satisfiesAssertion, substitutions, context) {
    var statementUnifiesAsPropertyAssertion = false;
    if (reference === null) {
        var propertyAssertion = (0, _statement.propertyAssertionFromStatement)(statement, context);
        if (propertyAssertion !== null) {
            var statementString = statement.getString();
            context.trace("Unifying the '".concat(statementString, "' statement as a property assertion..."));
            var term = propertyAssertion.getTerm(), equivalence = context.findEquivalenceByTerm(term);
            if (equivalence !== null) {
                var propertyAssertionMatches = equivalence.someOtherTerm(term, function(term) {
                    var propertyRelation = propertyAssertion.getPropertyRelation(), comparesToTermAndPropertyRelation = context.compareTermAndPropertyRelation(term, propertyRelation);
                    if (comparesToTermAndPropertyRelation) {
                        return true;
                    }
                });
                if (propertyAssertionMatches) {
                    statementUnifiesAsPropertyAssertion = true;
                }
            }
            if (statementUnifiesAsPropertyAssertion) {
                context.debug("...unified the '".concat(statementString, "' statement as a property assertion."));
            }
        }
    }
    return statementUnifiesAsPropertyAssertion;
}
function unifyStatementWithSatisfiesAssertion(statement, reference, satisfiesAssertion, substitutions, context) {
    var statementUnifiesWithSatisfiesAssertion = false;
    if (satisfiesAssertion !== null) {
        var statementString = statement.getString(), satisfiesAssertionString = satisfiesAssertion.getString();
        context.trace("Unifying the '".concat(statementString, "' statememnt with the '").concat(satisfiesAssertionString, "' satisfies assertion..."));
        var subproofOrProofAssertions = context.getSubproofOrProofAssertions(), statementUnifies = satisfiesAssertion.unifyStatementAndSubproofOrProofAssertions(statement, subproofOrProofAssertions, context);
        if (statementUnifies) {
            statementUnifiesWithSatisfiesAssertion = true;
        }
        if (statementUnifiesWithSatisfiesAssertion) {
            context.debug("...unified the '".concat(statementString, "' statememnt with the '").concat(satisfiesAssertionString, "' satisfies assertion."));
        }
    }
    return statementUnifiesWithSatisfiesAssertion;
}
function compareStatementWithSubproofOrProofAssertions(statement, reference, satisfiesAssertion, substitutions, context) {
    var statementEquatesWithStepOrSubproofs = false;
    if (reference === null) {
        var statementString = statement.getString();
        context.trace("Comparing the '".concat(statementString, "' statement with the subproofs or proof asssertions..."));
        var subproofOrProofAssertions = context.getSubproofOrProofAssertions(), statementUnifiesWithSteps = statement.compareSubproofOrProofAssertions(subproofOrProofAssertions, context);
        if (statementUnifiesWithSteps) {
            statementEquatesWithStepOrSubproofs = true;
        }
        if (statementEquatesWithStepOrSubproofs) {
            context.debug("...compared the '".concat(statementString, "' statement with the subproofs or proof asssertions."));
        }
    }
    return statementEquatesWithStepOrSubproofs;
}
var unifyStatements = [
    unifyStatementWithRule,
    unifyStatementWithReference,
    unifyStatementAsSatisfiesAssertion,
    unifyStatementWithTopLevelAssertion,
    unifyStatementAEquality,
    unifyStatementAsJudgement,
    unifyStatementAsTypeAssertion,
    unifyStatementAsPropertyAssertion,
    unifyStatementWithSatisfiesAssertion,
    compareStatementWithSubproofOrProofAssertions
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdW5pZmljYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IGVxdWFsaXR5RnJvbVN0YXRlbWVudCxcbiAgICAgICAgIGp1ZGdlbWVudEZyb21TdGF0ZW1lbnQsXG4gICAgICAgICB0eXBlQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCxcbiAgICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCxcbiAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0YXRlbWVudFwiO1xuXG5jb25zdCB7IGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5mdW5jdGlvbiB1bmlmeVN0YXRlbWVudFdpdGhSdWxlKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFVuaWZpZXNXaXRoUnVsZSA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgIT09IG51bGwpIHtcbiAgICBjb25zdCBydWxlID0gY29udGV4dC5maW5kUnVsZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcnVsZVN0cmluZyA9IHJ1bGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUuLi5gKTtcblxuICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpLFxuICAgICAgICAgICAgc3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5ID0gcnVsZS51bmlmeVN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoc3RhdGVtZW50LCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSkge1xuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aFJ1bGUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllc1dpdGhSdWxlKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZS5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllc1dpdGhSdWxlO1xufVxuXG5mdW5jdGlvbiB1bmlmeVN0YXRlbWVudFdpdGhSZWZlcmVuY2Uoc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VW5pZmllc1dpdGhSZWZlcmVuY2UgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSByZWZlcmVuY2UudmFsaWRhdGVNZXRhdmFyaWFibGUoY29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmFsaWRhdGVzKSB7XG4gICAgICBjb25zdCB7IFN0YXRlbWVudFN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBTdGF0ZW1lbnRTdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb247IC8vL1xuXG4gICAgICBzdWJzdGl0dXRpb25zLmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aFJlZmVyZW5jZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXNXaXRoUmVmZXJlbmNlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzV2l0aFJlZmVyZW5jZTtcbn1cblxuZnVuY3Rpb24gdW5pZnlTdGF0ZW1lbnRBc1NhdGlzZmllc0Fzc2VydGlvbihzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRVbmlmaWVzQXNTYXRpc2ZpZXNBc3NlcnRpb24gPSBmYWxzZTtcblxuICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgaWYgKHNhdGlzZmllc0Fzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgIGFzc2lnbm1lbnRzID0gbnVsbDtcblxuICAgIHNhdGlzZmllc0Fzc2VydGlvbi52ZXJpZnlTaWduYXR1cmUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gY29udGV4dC5nZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCk7XG5cbiAgICAgIHN0YXRlbWVudFVuaWZpZXNBc1NhdGlzZmllc0Fzc2VydGlvbiA9IGJhY2t3YXJkc1NvbWUoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgKHN0ZXBzT3JTdWJwcm9vZikgPT4ge1xuICAgICAgICBjb25zdCBzdGVwT3JTdWJQcm9vZlVuaWZpZXNXSXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gc3RlcHNPclN1YnByb29mLnVuaWZ5V2l0aFNhdGlzZmllc0Fzc2VydGlvbihzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGVwT3JTdWJQcm9vZlVuaWZpZXNXSXRoU2F0aXNmaWVzQXNzZXJ0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b3BMZXZlbEFzc2VydGlvbiA9IGNvbnRleHQuZmluZFRvcExldmVsQXNzZXJ0aW9uQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgICAgaWYgKHRvcExldmVsQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIHJlZmVyZW5jZSA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRSZWZlcmVuY2UoKTtcblxuICAgICAgICBjb25zdCBheGlvbSA9IGNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgICAgICBpZiAoYXhpb20gIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBzYXRpc2ZpYWJsZSA9IGF4aW9tLmlzU2F0aXNmaWFibGUoKTtcblxuICAgICAgICAgIGlmIChzYXRpc2ZpYWJsZSkge1xuICAgICAgICAgICAgY29uc3QgeyBTdWJzdGl0dXRpb25zIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzID0gYXhpb20udW5pZnlUb3BMZXZlbEFzc2VydGlvbih0b3BMZXZlbEFzc2VydGlvbiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmICh0b3BMZXZlbEFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc0NvcnJlbGF0ZXMgPSBzYXRpc2ZpZXNBc3NlcnRpb24uY29ycmVsYXRlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uc0NvcnJlbGF0ZXMpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzQXNTYXRpc2ZpZXNBc3NlcnRpb24gPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGF4aW9tU3RyaW5nID0gYXhpb20uZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB1bmlmeSB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGJlY2F1c2UgaXQgaXMgbm90IHNhdGlzZmlhYmxlLmApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXNBc1NhdGlzZmllc0Fzc2VydGlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgc2F0aXNmaWVzIGFzc2VydGlvbi5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllc0FzU2F0aXNmaWVzQXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB1bmlmeVN0YXRlbWVudFdpdGhUb3BMZXZlbEFzc2VydGlvbihzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRVbmlmaWVzV2l0aFRvcExldmVsQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgU3Vic3RpdHV0aW9ucyB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb24gPSBjb250ZXh0LmZpbmRUb3BMZXZlbEFzc2VydGlvbkJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgZ2VuZXJhbFN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zOyAvLy9cblxuICAgIGlmICh0b3BMZXZlbEFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBjb250ZXh0LmdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoKTtcblxuICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgICAgIGNvbnN0IHN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSA9IHRvcExldmVsQXNzZXJ0aW9uLnVuaWZ5U3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyhzdGF0ZW1lbnQsIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5KSB7XG4gICAgICAgIGNvbnN0IHsgU3RhdGVtZW50U3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBTdGF0ZW1lbnRTdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbnMgPSBnZW5lcmFsU3Vic3RpdHV0aW9uczsgLy8vXG5cbiAgICAgICAgc3Vic3RpdHV0aW9ucy5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aFRvcExldmVsQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXNXaXRoVG9wTGV2ZWxBc3NlcnRpb24pIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllc1dpdGhUb3BMZXZlbEFzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gdW5pZnlTdGF0ZW1lbnRBRXF1YWxpdHkoc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VW5pZmllc0FFcXVhbGl0eSA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICBjb25zdCBlcXVhbGl0eSA9IGVxdWFsaXR5RnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGVxdWFsaXR5ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYW4gZXF1YWxpdHkuLi5gKTtcblxuICAgICAgY29uc3QgZXF1YWxpdHlFcXVhbCA9IGVxdWFsaXR5LmlzRXF1YWwoY29udGV4dCk7XG5cbiAgICAgIGlmIChlcXVhbGl0eUVxdWFsKSB7XG4gICAgICAgIHN0YXRlbWVudFVuaWZpZXNBRXF1YWxpdHkgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllc0FFcXVhbGl0eSkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYW4gZXF1YWxpdHkuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXNBRXF1YWxpdHk7XG59XG5cbmZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50QXNKdWRnZW1lbnQoc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VW5pZmllc0FzSnVkZ2VtZW50ID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudCA9IGp1ZGdlbWVudEZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChqdWRnZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIGp1ZGdlbWVudC4uLmApO1xuXG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzQXNKdWRnZW1lbnQgPSB0cnVlO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllc0FzSnVkZ2VtZW50KSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIGp1ZGdlbWVudC5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllc0FzSnVkZ2VtZW50O1xufVxuXG5mdW5jdGlvbiB1bmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbihzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRVbmlmaWVzQXNUeXBlQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHR5cGVBc3NlcnRpb24gPSB0eXBlQXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHR5cGVBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHR5cGUgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICAgIHN0YXRlbWVudFVuaWZpZXNBc1R5cGVBc3NlcnRpb24gPSB0cnVlO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSB0eXBlIGFzc2VydGlvbi5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllc0FzVHlwZUFzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gdW5pZnlTdGF0ZW1lbnRBc1Byb3BlcnR5QXNzZXJ0aW9uKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFVuaWZpZXNBc1Byb3BlcnR5QXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uID0gcHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAocHJvcGVydHlBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHByb3BlcnR5IGFzc2VydGlvbi4uLmApO1xuXG4gICAgICBjb25zdCB0ZXJtID0gcHJvcGVydHlBc3NlcnRpb24uZ2V0VGVybSgpLFxuICAgICAgICAgICAgZXF1aXZhbGVuY2UgPSBjb250ZXh0LmZpbmRFcXVpdmFsZW5jZUJ5VGVybSh0ZXJtKTtcblxuICAgICAgaWYgKGVxdWl2YWxlbmNlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uTWF0Y2hlcyA9IGVxdWl2YWxlbmNlLnNvbWVPdGhlclRlcm0odGVybSwgKHRlcm0pID0+IHsgIC8vL1xuICAgICAgICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb24gPSBwcm9wZXJ0eUFzc2VydGlvbi5nZXRQcm9wZXJ0eVJlbGF0aW9uKCksXG4gICAgICAgICAgICAgICAgY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uID0gY29udGV4dC5jb21wYXJlVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbik7XG5cbiAgICAgICAgICBpZiAoY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChwcm9wZXJ0eUFzc2VydGlvbk1hdGNoZXMpIHtcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzQXNQcm9wZXJ0eUFzc2VydGlvbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXNBc1Byb3BlcnR5QXNzZXJ0aW9uKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHByb3BlcnR5IGFzc2VydGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllc0FzUHJvcGVydHlBc3NlcnRpb247XG59XG5cbmZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50V2l0aFNhdGlzZmllc0Fzc2VydGlvbihzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRVbmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGlmIChzYXRpc2ZpZXNBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVtbnQgd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSBzYXRpc2ZpZXNBc3NlcnRpb24udW5pZnlTdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKHN0YXRlbWVudCwgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgc3RhdGVtZW50VW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW1udCB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gY29tcGFyZVN0YXRlbWVudFdpdGhTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudEVxdWF0ZXNXaXRoU3RlcE9yU3VicHJvb2ZzID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYENvbXBhcmluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlIHN1YnByb29mcyBvciBwcm9vZiBhc3NzZXJ0aW9ucy4uLmApO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoU3RlcHMgPSBzdGF0ZW1lbnQuY29tcGFyZVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllc1dpdGhTdGVwcykge1xuICAgICAgc3RhdGVtZW50RXF1YXRlc1dpdGhTdGVwT3JTdWJwcm9vZnMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRFcXVhdGVzV2l0aFN0ZXBPclN1YnByb29mcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uY29tcGFyZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSBzdWJwcm9vZnMgb3IgcHJvb2YgYXNzc2VydGlvbnMuYCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudEVxdWF0ZXNXaXRoU3RlcE9yU3VicHJvb2ZzO1xufVxuXG5leHBvcnQgY29uc3QgdW5pZnlTdGF0ZW1lbnRzID0gW1xuICB1bmlmeVN0YXRlbWVudFdpdGhSdWxlLFxuICB1bmlmeVN0YXRlbWVudFdpdGhSZWZlcmVuY2UsXG4gIHVuaWZ5U3RhdGVtZW50QXNTYXRpc2ZpZXNBc3NlcnRpb24sXG4gIHVuaWZ5U3RhdGVtZW50V2l0aFRvcExldmVsQXNzZXJ0aW9uLFxuICB1bmlmeVN0YXRlbWVudEFFcXVhbGl0eSxcbiAgdW5pZnlTdGF0ZW1lbnRBc0p1ZGdlbWVudCxcbiAgdW5pZnlTdGF0ZW1lbnRBc1R5cGVBc3NlcnRpb24sXG4gIHVuaWZ5U3RhdGVtZW50QXNQcm9wZXJ0eUFzc2VydGlvbixcbiAgdW5pZnlTdGF0ZW1lbnRXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uLFxuICBjb21wYXJlU3RhdGVtZW50V2l0aFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNcbl07XG4iXSwibmFtZXMiOlsidW5pZnlTdGF0ZW1lbnRzIiwiYmFja3dhcmRzU29tZSIsImFycmF5VXRpbGl0aWVzIiwidW5pZnlTdGF0ZW1lbnRXaXRoUnVsZSIsInN0YXRlbWVudCIsInJlZmVyZW5jZSIsInNhdGlzZmllc0Fzc2VydGlvbiIsInN1YnN0aXR1dGlvbnMiLCJjb250ZXh0Iiwic3RhdGVtZW50VW5pZmllc1dpdGhSdWxlIiwicnVsZSIsImZpbmRSdWxlQnlSZWZlcmVuY2UiLCJydWxlU3RyaW5nIiwiZ2V0U3RyaW5nIiwic3RhdGVtZW50U3RyaW5nIiwidHJhY2UiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwiZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSIsInVuaWZ5U3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsImRlYnVnIiwidW5pZnlTdGF0ZW1lbnRXaXRoUmVmZXJlbmNlIiwic3RhdGVtZW50VW5pZmllc1dpdGhSZWZlcmVuY2UiLCJyZWZlcmVuY2VTdHJpbmciLCJtZXRhdmFyaWFibGVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZU1ldGF2YXJpYWJsZSIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsImVsZW1lbnRzIiwibWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uIiwiZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSIsInN1YnN0aXR1dGlvbiIsImFkZFN1YnN0aXR1dGlvbiIsInVuaWZ5U3RhdGVtZW50QXNTYXRpc2ZpZXNBc3NlcnRpb24iLCJzdGF0ZW1lbnRVbmlmaWVzQXNTYXRpc2ZpZXNBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RhdGVtZW50Iiwic3RhdGVkIiwiYXNzaWdubWVudHMiLCJ2ZXJpZnlTaWduYXR1cmUiLCJzdGVwc09yU3VicHJvb2YiLCJzdGVwT3JTdWJQcm9vZlVuaWZpZXNXSXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwidW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwidG9wTGV2ZWxBc3NlcnRpb24iLCJmaW5kVG9wTGV2ZWxBc3NlcnRpb25CeVJlZmVyZW5jZSIsImdldFJlZmVyZW5jZSIsImF4aW9tIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJzYXRpc2ZpYWJsZSIsImlzU2F0aXNmaWFibGUiLCJTdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJ0b3BMZXZlbEFzc2VydGlvblVuaWZpZXMiLCJ1bmlmeVRvcExldmVsQXNzZXJ0aW9uIiwic3Vic3RpdHV0aW9uc0NvcnJlbGF0ZXMiLCJjb3JyZWxhdGVTdWJzdGl0dXRpb25zIiwiYXhpb21TdHJpbmciLCJ1bmlmeVN0YXRlbWVudFdpdGhUb3BMZXZlbEFzc2VydGlvbiIsInN0YXRlbWVudFVuaWZpZXNXaXRoVG9wTGV2ZWxBc3NlcnRpb24iLCJnZW5lcmFsU3Vic3RpdHV0aW9ucyIsInRvcExldmVsQXNzZXJ0aW9uU3RyaW5nIiwidW5pZnlTdGF0ZW1lbnRBRXF1YWxpdHkiLCJzdGF0ZW1lbnRVbmlmaWVzQUVxdWFsaXR5IiwiZXF1YWxpdHkiLCJlcXVhbGl0eUZyb21TdGF0ZW1lbnQiLCJlcXVhbGl0eUVxdWFsIiwiaXNFcXVhbCIsInVuaWZ5U3RhdGVtZW50QXNKdWRnZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVzQXNKdWRnZW1lbnQiLCJqdWRnZW1lbnQiLCJqdWRnZW1lbnRGcm9tU3RhdGVtZW50IiwidW5pZnlTdGF0ZW1lbnRBc1R5cGVBc3NlcnRpb24iLCJzdGF0ZW1lbnRVbmlmaWVzQXNUeXBlQXNzZXJ0aW9uIiwidHlwZUFzc2VydGlvbiIsInR5cGVBc3NlcnRpb25Gcm9tU3RhdGVtZW50IiwidW5pZnlTdGF0ZW1lbnRBc1Byb3BlcnR5QXNzZXJ0aW9uIiwic3RhdGVtZW50VW5pZmllc0FzUHJvcGVydHlBc3NlcnRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbiIsInByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsInRlcm0iLCJnZXRUZXJtIiwiZXF1aXZhbGVuY2UiLCJmaW5kRXF1aXZhbGVuY2VCeVRlcm0iLCJwcm9wZXJ0eUFzc2VydGlvbk1hdGNoZXMiLCJzb21lT3RoZXJUZXJtIiwicHJvcGVydHlSZWxhdGlvbiIsImdldFByb3BlcnR5UmVsYXRpb24iLCJjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJjb21wYXJlVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJ1bmlmeVN0YXRlbWVudFdpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJzdGF0ZW1lbnRVbmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiIsInNhdGlzZmllc0Fzc2VydGlvblN0cmluZyIsInN0YXRlbWVudFVuaWZpZXMiLCJjb21wYXJlU3RhdGVtZW50V2l0aFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdGF0ZW1lbnRFcXVhdGVzV2l0aFN0ZXBPclN1YnByb29mcyIsInN0YXRlbWVudFVuaWZpZXNXaXRoU3RlcHMiLCJjb21wYXJlU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNFVhQTs7O2VBQUFBOzs7eUJBMVVrQjsrREFFVjt5QkFNMkI7Ozs7OztBQUVoRCxJQUFNLEFBQUVDLGdCQUFrQkMseUJBQWMsQ0FBaENEO0FBRVIsU0FBU0UsdUJBQXVCQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsa0JBQWtCLEVBQUVDLGFBQWEsRUFBRUMsT0FBTztJQUM5RixJQUFJQywyQkFBMkI7SUFFL0IsSUFBSUosY0FBYyxNQUFNO1FBQ3RCLElBQU1LLE9BQU9GLFFBQVFHLG1CQUFtQixDQUFDTjtRQUV6QyxJQUFJSyxTQUFTLE1BQU07WUFDakIsSUFBTUUsYUFBYUYsS0FBS0csU0FBUyxJQUMzQkMsa0JBQWtCVixVQUFVUyxTQUFTO1lBRTNDTCxRQUFRTyxLQUFLLENBQUMsQUFBQyxpQkFBd0RILE9BQXhDRSxpQkFBZ0IsMEJBQW1DLE9BQVhGLFlBQVc7WUFFbEYsSUFBTUksNEJBQTRCUixRQUFRUyw0QkFBNEIsSUFDaEVDLDZDQUE2Q1IsS0FBS1MsMENBQTBDLENBQUNm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