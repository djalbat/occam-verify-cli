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
            var stepsOrSubproofs = context.getStepsOrSubproofs(), statementAndStepsUnify = rule.unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, context);
            if (statementAndStepsUnify) {
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
            var stepsOrSubproofs = context.getStepsOrSubproofs();
            statementUnifiesAsSatisfiesAssertion = backwardsSome(stepsOrSubproofs, function(stepsOrSubproof) {
                var stepOrSubProofUnifiesWIthSatisfiesAssertion = stepsOrSubproof.unifyWithSatisfiesAssertion(satisfiesAssertion, context);
                if (stepOrSubProofUnifiesWIthSatisfiesAssertion) {
                    return true;
                }
            });
        } else {
            var axiomLemmaTheoremOrConjecture = context.findAxiomLemmaTheoremOrConjectureByReference(reference);
            if (axiomLemmaTheoremOrConjecture !== null) {
                reference = satisfiesAssertion.getReference();
                var axiom = context.findAxiomByReference(reference);
                if (axiom !== null) {
                    var satisfiable = axiom.isSatisfiable();
                    if (satisfiable) {
                        var Substitutions = _elements.default.Substitutions, substitutions1 = Substitutions.fromNothing(), axiomLemmaTheoremOrConjectureUnifies = axiom.unifyAxiomLemmaTheoremOrConjecture(axiomLemmaTheoremOrConjecture, substitutions1, context);
                        if (axiomLemmaTheoremOrConjectureUnifies) {
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
function unifyStatementWithAxiomLemmaTheoremOrConjecture(statement, reference, satisfiesAssertion, substitutions, context) {
    var statementUnifiesWithAxiomLemmaTheoremOrConjecture = false;
    if (reference !== null) {
        var Substitutions = _elements.default.Substitutions, axiomLemmaTheoremOrConjecture = context.findAxiomLemmaTheoremOrConjectureByReference(reference), generalSubstitutions = substitutions; ///
        if (axiomLemmaTheoremOrConjecture !== null) {
            var statementString = statement.getString(), axiomLemmaTheoremOrConjectureString = reference.getString();
            context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(axiomLemmaTheoremOrConjectureString, "' axiom, lemma, theorem or conjecture..."));
            var stepsOrSubproofs = context.getStepsOrSubproofs();
            substitutions = Substitutions.fromNothing();
            var statementAndStepsUnify = axiomLemmaTheoremOrConjecture.unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, substitutions, context);
            if (statementAndStepsUnify) {
                var StatementSubstitution = _elements.default.StatementSubstitution, metavariable = reference.getMetavariable(), statementSubstitution = StatementSubstitution.fromStatementAndMetavariable(statement, metavariable, context), substitution = statementSubstitution; ///
                substitutions = generalSubstitutions; ///
                substitutions.addSubstitution(substitution, context);
                statementUnifiesWithAxiomLemmaTheoremOrConjecture = true;
            }
            if (statementUnifiesWithAxiomLemmaTheoremOrConjecture) {
                context.debug("...unified the '".concat(statementString, "' statement with the '").concat(axiomLemmaTheoremOrConjectureString, "' axiom, lemma, theorem or conjecture."));
            }
        }
    }
    return statementUnifiesWithAxiomLemmaTheoremOrConjecture;
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
        var stepsOrSubproofs = context.getStepsOrSubproofs(), statementUnifies = satisfiesAssertion.unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, context);
        if (statementUnifies) {
            statementUnifiesWithSatisfiesAssertion = true;
        }
        if (statementUnifiesWithSatisfiesAssertion) {
            context.debug("...unified the '".concat(statementString, "' statememnt with the '").concat(satisfiesAssertionString, "' satisfies assertion."));
        }
    }
    return statementUnifiesWithSatisfiesAssertion;
}
function compareStatementWithStepsOrSubproofs(statement, reference, satisfiesAssertion, substitutions, context) {
    var statementEquatesWithStepOrSubproofs = false;
    if (reference === null) {
        var statementString = statement.getString();
        context.trace("Comparing the '".concat(statementString, "' statement with the steps or subproofs..."));
        var stepsOrSubproofs = context.getStepsOrSubproofs(), statementUnifiesWithSteps = statement.compareStepsOrSubproofs(stepsOrSubproofs, context);
        if (statementUnifiesWithSteps) {
            statementEquatesWithStepOrSubproofs = true;
        }
        if (statementEquatesWithStepOrSubproofs) {
            context.debug("...compared the '".concat(statementString, "' statement with the steps or subproofs."));
        }
    }
    return statementEquatesWithStepOrSubproofs;
}
var unifyStatements = [
    unifyStatementWithRule,
    unifyStatementWithReference,
    unifyStatementAsSatisfiesAssertion,
    unifyStatementWithAxiomLemmaTheoremOrConjecture,
    unifyStatementAEquality,
    unifyStatementAsJudgement,
    unifyStatementAsTypeAssertion,
    unifyStatementAsPropertyAssertion,
    unifyStatementWithSatisfiesAssertion,
    compareStatementWithStepsOrSubproofs
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdW5pZmljYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IGVxdWFsaXR5RnJvbVN0YXRlbWVudCxcbiAgICAgICAgIGp1ZGdlbWVudEZyb21TdGF0ZW1lbnQsXG4gICAgICAgICB0eXBlQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCxcbiAgICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCxcbiAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0YXRlbWVudFwiO1xuXG5jb25zdCB7IGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5mdW5jdGlvbiB1bmlmeVN0YXRlbWVudFdpdGhSdWxlKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFVuaWZpZXNXaXRoUnVsZSA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgIT09IG51bGwpIHtcbiAgICBjb25zdCBydWxlID0gY29udGV4dC5maW5kUnVsZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcnVsZVN0cmluZyA9IHJ1bGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUuLi5gKTtcblxuICAgICAgY29uc3Qgc3RlcHNPclN1YnByb29mcyA9IGNvbnRleHQuZ2V0U3RlcHNPclN1YnByb29mcygpLFxuICAgICAgICAgICAgc3RhdGVtZW50QW5kU3RlcHNVbmlmeSA9IHJ1bGUudW5pZnlTdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzKHN0YXRlbWVudCwgc3RlcHNPclN1YnByb29mcywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRBbmRTdGVwc1VuaWZ5KSB7XG4gICAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoUnVsZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aFJ1bGUpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3J1bGVTdHJpbmd9JyBydWxlLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzV2l0aFJ1bGU7XG59XG5cbmZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50V2l0aFJlZmVyZW5jZShzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRVbmlmaWVzV2l0aFJlZmVyZW5jZSA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IHJlZmVyZW5jZS52YWxpZGF0ZU1ldGF2YXJpYWJsZShjb250ZXh0KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnN0IHsgU3RhdGVtZW50U3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IFN0YXRlbWVudFN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgIHN1YnN0aXR1dGlvbnMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoUmVmZXJlbmNlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllc1dpdGhSZWZlcmVuY2UpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXNXaXRoUmVmZXJlbmNlO1xufVxuXG5mdW5jdGlvbiB1bmlmeVN0YXRlbWVudEFzU2F0aXNmaWVzQXNzZXJ0aW9uKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFVuaWZpZXNBc1NhdGlzZmllc0Fzc2VydGlvbiA9IGZhbHNlO1xuXG4gIHNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHNhdGlzZmllcyBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgYXNzaWdubWVudHMgPSBudWxsO1xuXG4gICAgc2F0aXNmaWVzQXNzZXJ0aW9uLnZlcmlmeVNpZ25hdHVyZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0ZXBzT3JTdWJwcm9vZnMgPSBjb250ZXh0LmdldFN0ZXBzT3JTdWJwcm9vZnMoKTtcblxuICAgICAgc3RhdGVtZW50VW5pZmllc0FzU2F0aXNmaWVzQXNzZXJ0aW9uID0gYmFja3dhcmRzU29tZShzdGVwc09yU3VicHJvb2ZzLCAoc3RlcHNPclN1YnByb29mKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0ZXBPclN1YlByb29mVW5pZmllc1dJdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSBzdGVwc09yU3VicHJvb2YudW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uKHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0ZXBPclN1YlByb29mVW5pZmllc1dJdGhTYXRpc2ZpZXNBc3NlcnRpb24pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlID0gY29udGV4dC5maW5kQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICBpZiAoYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUgIT09IG51bGwpIHtcbiAgICAgICAgcmVmZXJlbmNlID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmdldFJlZmVyZW5jZSgpO1xuXG4gICAgICAgIGNvbnN0IGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICAgIGlmIChheGlvbSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHNhdGlzZmlhYmxlID0gYXhpb20uaXNTYXRpc2ZpYWJsZSgpO1xuXG4gICAgICAgICAgaWYgKHNhdGlzZmlhYmxlKSB7XG4gICAgICAgICAgICBjb25zdCB7IFN1YnN0aXR1dGlvbnMgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICAgICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlVW5pZmllcyA9IGF4aW9tLnVuaWZ5QXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUoYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAoYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVVbmlmaWVzKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNDb3JyZWxhdGVzID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvbnNDb3JyZWxhdGVzKSB7XG4gICAgICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllc0FzU2F0aXNmaWVzQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBheGlvbVN0cmluZyA9IGF4aW9tLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gdW5pZnkgd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBiZWNhdXNlIGl0IGlzIG5vdCBzYXRpc2ZpYWJsZS5gKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzQXNTYXRpc2ZpZXNBc3NlcnRpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHNhdGlzZmllcyBhc3NlcnRpb24uYCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXNBc1NhdGlzZmllc0Fzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gdW5pZnlTdGF0ZW1lbnRXaXRoQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUoc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VW5pZmllc1dpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFN1YnN0aXR1dGlvbnMgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlID0gY29udGV4dC5maW5kQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9uczsgLy8vXG5cbiAgICBpZiAoYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2F4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlU3RyaW5nfScgYXhpb20sIGxlbW1hLCB0aGVvcmVtIG9yIGNvbmplY3R1cmUuLi5gKTtcblxuICAgICAgY29uc3Qgc3RlcHNPclN1YnByb29mcyA9IGNvbnRleHQuZ2V0U3RlcHNPclN1YnByb29mcygpO1xuXG4gICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpO1xuXG4gICAgICBjb25zdCBzdGF0ZW1lbnRBbmRTdGVwc1VuaWZ5ID0gYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUudW5pZnlTdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzKHN0YXRlbWVudCwgc3RlcHNPclN1YnByb29mcywgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRBbmRTdGVwc1VuaWZ5KSB7XG4gICAgICAgIGNvbnN0IHsgU3RhdGVtZW50U3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBTdGF0ZW1lbnRTdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbnMgPSBnZW5lcmFsU3Vic3RpdHV0aW9uczsgLy8vXG5cbiAgICAgICAgc3Vic3RpdHV0aW9ucy5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXNXaXRoQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2F4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlU3RyaW5nfScgYXhpb20sIGxlbW1hLCB0aGVvcmVtIG9yIGNvbmplY3R1cmUuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXNXaXRoQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmU7XG59XG5cbmZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50QUVxdWFsaXR5KHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFVuaWZpZXNBRXF1YWxpdHkgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgY29uc3QgZXF1YWxpdHkgPSBlcXVhbGl0eUZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChlcXVhbGl0eSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGFuIGVxdWFsaXR5Li4uYCk7XG5cbiAgICAgIGNvbnN0IGVxdWFsaXR5RXF1YWwgPSBlcXVhbGl0eS5pc0VxdWFsKGNvbnRleHQpO1xuXG4gICAgICBpZiAoZXF1YWxpdHlFcXVhbCkge1xuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzQUVxdWFsaXR5ID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXNBRXF1YWxpdHkpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGFuIGVxdWFsaXR5LmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzQUVxdWFsaXR5O1xufVxuXG5mdW5jdGlvbiB1bmlmeVN0YXRlbWVudEFzSnVkZ2VtZW50KHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFVuaWZpZXNBc0p1ZGdlbWVudCA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICBjb25zdCBqdWRnZW1lbnQgPSBqdWRnZW1lbnRGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoanVkZ2VtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBqdWRnZW1lbnQuLi5gKTtcblxuICAgICAgc3RhdGVtZW50VW5pZmllc0FzSnVkZ2VtZW50ID0gdHJ1ZTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXNBc0p1ZGdlbWVudCkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBqdWRnZW1lbnQuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXNBc0p1ZGdlbWVudDtcbn1cblxuZnVuY3Rpb24gdW5pZnlTdGF0ZW1lbnRBc1R5cGVBc3NlcnRpb24oc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VW5pZmllc0FzVHlwZUFzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uID0gdHlwZUFzc2VydGlvbkZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmICh0eXBlQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSB0eXBlIGFzc2VydGlvbi4uLmApO1xuXG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzQXNUeXBlQXNzZXJ0aW9uID0gdHJ1ZTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgdHlwZSBhc3NlcnRpb24uYCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXNBc1R5cGVBc3NlcnRpb247XG59XG5cbmZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50QXNQcm9wZXJ0eUFzc2VydGlvbihzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRVbmlmaWVzQXNQcm9wZXJ0eUFzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvbiA9IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHByb3BlcnR5QXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBwcm9wZXJ0eSBhc3NlcnRpb24uLi5gKTtcblxuICAgICAgY29uc3QgdGVybSA9IHByb3BlcnR5QXNzZXJ0aW9uLmdldFRlcm0oKSxcbiAgICAgICAgICAgIGVxdWl2YWxlbmNlID0gY29udGV4dC5maW5kRXF1aXZhbGVuY2VCeVRlcm0odGVybSk7XG5cbiAgICAgIGlmIChlcXVpdmFsZW5jZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvbk1hdGNoZXMgPSBlcXVpdmFsZW5jZS5zb21lT3RoZXJUZXJtKHRlcm0sICh0ZXJtKSA9PiB7ICAvLy9cbiAgICAgICAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlBc3NlcnRpb24uZ2V0UHJvcGVydHlSZWxhdGlvbigpLFxuICAgICAgICAgICAgICAgIGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiA9IGNvbnRleHQuY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24pO1xuXG4gICAgICAgICAgaWYgKGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocHJvcGVydHlBc3NlcnRpb25NYXRjaGVzKSB7XG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllc0FzUHJvcGVydHlBc3NlcnRpb24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzQXNQcm9wZXJ0eUFzc2VydGlvbikge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBwcm9wZXJ0eSBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXNBc1Byb3BlcnR5QXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB1bmlmeVN0YXRlbWVudFdpdGhTYXRpc2ZpZXNBc3NlcnRpb24oc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSBmYWxzZTtcblxuICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbW50IHdpdGggdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0ZXBzT3JTdWJwcm9vZnMgPSBjb250ZXh0LmdldFN0ZXBzT3JTdWJwcm9vZnMoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gc2F0aXNmaWVzQXNzZXJ0aW9uLnVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyhzdGF0ZW1lbnQsIHN0ZXBzT3JTdWJwcm9vZnMsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVtbnQgd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb247XG59XG5cbmZ1bmN0aW9uIGNvbXBhcmVTdGF0ZW1lbnRXaXRoU3RlcHNPclN1YnByb29mcyhzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRFcXVhdGVzV2l0aFN0ZXBPclN1YnByb29mcyA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb21wYXJpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSBzdGVwcyBvciBzdWJwcm9vZnMuLi5gKTtcblxuICAgIGNvbnN0IHN0ZXBzT3JTdWJwcm9vZnMgPSBjb250ZXh0LmdldFN0ZXBzT3JTdWJwcm9vZnMoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aFN0ZXBzID0gc3RhdGVtZW50LmNvbXBhcmVTdGVwc09yU3VicHJvb2ZzKHN0ZXBzT3JTdWJwcm9vZnMsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXNXaXRoU3RlcHMpIHtcbiAgICAgIHN0YXRlbWVudEVxdWF0ZXNXaXRoU3RlcE9yU3VicHJvb2ZzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50RXF1YXRlc1dpdGhTdGVwT3JTdWJwcm9vZnMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgc3RlcHMgb3Igc3VicHJvb2ZzLmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRFcXVhdGVzV2l0aFN0ZXBPclN1YnByb29mcztcbn1cblxuZXhwb3J0IGNvbnN0IHVuaWZ5U3RhdGVtZW50cyA9IFtcbiAgdW5pZnlTdGF0ZW1lbnRXaXRoUnVsZSxcbiAgdW5pZnlTdGF0ZW1lbnRXaXRoUmVmZXJlbmNlLFxuICB1bmlmeVN0YXRlbWVudEFzU2F0aXNmaWVzQXNzZXJ0aW9uLFxuICB1bmlmeVN0YXRlbWVudFdpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSxcbiAgdW5pZnlTdGF0ZW1lbnRBRXF1YWxpdHksXG4gIHVuaWZ5U3RhdGVtZW50QXNKdWRnZW1lbnQsXG4gIHVuaWZ5U3RhdGVtZW50QXNUeXBlQXNzZXJ0aW9uLFxuICB1bmlmeVN0YXRlbWVudEFzUHJvcGVydHlBc3NlcnRpb24sXG4gIHVuaWZ5U3RhdGVtZW50V2l0aFNhdGlzZmllc0Fzc2VydGlvbixcbiAgY29tcGFyZVN0YXRlbWVudFdpdGhTdGVwc09yU3VicHJvb2ZzXG5dO1xuIl0sIm5hbWVzIjpbInVuaWZ5U3RhdGVtZW50cyIsImJhY2t3YXJkc1NvbWUiLCJhcnJheVV0aWxpdGllcyIsInVuaWZ5U3RhdGVtZW50V2l0aFJ1bGUiLCJzdGF0ZW1lbnQiLCJyZWZlcmVuY2UiLCJzYXRpc2ZpZXNBc3NlcnRpb24iLCJzdWJzdGl0dXRpb25zIiwiY29udGV4dCIsInN0YXRlbWVudFVuaWZpZXNXaXRoUnVsZSIsInJ1bGUiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlIiwicnVsZVN0cmluZyIsImdldFN0cmluZyIsInN0YXRlbWVudFN0cmluZyIsInRyYWNlIiwic3RlcHNPclN1YnByb29mcyIsImdldFN0ZXBzT3JTdWJwcm9vZnMiLCJzdGF0ZW1lbnRBbmRTdGVwc1VuaWZ5IiwidW5pZnlTdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzIiwiZGVidWciLCJ1bmlmeVN0YXRlbWVudFdpdGhSZWZlcmVuY2UiLCJzdGF0ZW1lbnRVbmlmaWVzV2l0aFJlZmVyZW5jZSIsInJlZmVyZW5jZVN0cmluZyIsIm1ldGF2YXJpYWJsZVZhbGlkYXRlcyIsInZhbGlkYXRlTWV0YXZhcmlhYmxlIiwiU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwiZWxlbWVudHMiLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlIiwic3Vic3RpdHV0aW9uIiwiYWRkU3Vic3RpdHV0aW9uIiwidW5pZnlTdGF0ZW1lbnRBc1NhdGlzZmllc0Fzc2VydGlvbiIsInN0YXRlbWVudFVuaWZpZXNBc1NhdGlzZmllc0Fzc2VydGlvbiIsInNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJzdGF0ZWQiLCJhc3NpZ25tZW50cyIsInZlcmlmeVNpZ25hdHVyZSIsInN0ZXBzT3JTdWJwcm9vZiIsInN0ZXBPclN1YlByb29mVW5pZmllc1dJdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJ1bmlmeVdpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSIsImZpbmRBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZUJ5UmVmZXJlbmNlIiwiZ2V0UmVmZXJlbmNlIiwiYXhpb20iLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsInNhdGlzZmlhYmxlIiwiaXNTYXRpc2ZpYWJsZSIsIlN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsImF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlVW5pZmllcyIsInVuaWZ5QXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUiLCJzdWJzdGl0dXRpb25zQ29ycmVsYXRlcyIsImNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMiLCJheGlvbVN0cmluZyIsInVuaWZ5U3RhdGVtZW50V2l0aEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlIiwic3RhdGVtZW50VW5pZmllc1dpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSIsImdlbmVyYWxTdWJzdGl0dXRpb25zIiwiYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVTdHJpbmciLCJ1bmlmeVN0YXRlbWVudEFFcXVhbGl0eSIsInN0YXRlbWVudFVuaWZpZXNBRXF1YWxpdHkiLCJlcXVhbGl0eSIsImVxdWFsaXR5RnJvbVN0YXRlbWVudCIsImVxdWFsaXR5RXF1YWwiLCJpc0VxdWFsIiwidW5pZnlTdGF0ZW1lbnRBc0p1ZGdlbWVudCIsInN0YXRlbWVudFVuaWZpZXNBc0p1ZGdlbWVudCIsImp1ZGdlbWVudCIsImp1ZGdlbWVudEZyb21TdGF0ZW1lbnQiLCJ1bmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbiIsInN0YXRlbWVudFVuaWZpZXNBc1R5cGVBc3NlcnRpb24iLCJ0eXBlQXNzZXJ0aW9uIiwidHlwZUFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJ1bmlmeVN0YXRlbWVudEFzUHJvcGVydHlBc3NlcnRpb24iLCJzdGF0ZW1lbnRVbmlmaWVzQXNQcm9wZXJ0eUFzc2VydGlvbiIsInByb3BlcnR5QXNzZXJ0aW9uIiwicHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50IiwidGVybSIsImdldFRlcm0iLCJlcXVpdmFsZW5jZSIsImZpbmRFcXVpdmFsZW5jZUJ5VGVybSIsInByb3BlcnR5QXNzZXJ0aW9uTWF0Y2hlcyIsInNvbWVPdGhlclRlcm0iLCJwcm9wZXJ0eVJlbGF0aW9uIiwiZ2V0UHJvcGVydHlSZWxhdGlvbiIsImNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsImNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsInVuaWZ5U3RhdGVtZW50V2l0aFNhdGlzZmllc0Fzc2VydGlvbiIsInN0YXRlbWVudFVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nIiwic3RhdGVtZW50VW5pZmllcyIsImNvbXBhcmVTdGF0ZW1lbnRXaXRoU3RlcHNPclN1YnByb29mcyIsInN0YXRlbWVudEVxdWF0ZXNXaXRoU3RlcE9yU3VicHJvb2ZzIiwic3RhdGVtZW50VW5pZmllc1dpdGhTdGVwcyIsImNvbXBhcmVTdGVwc09yU3VicHJvb2ZzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE0VWFBOzs7ZUFBQUE7Ozt5QkExVWtCOytEQUVWO3lCQU0yQjs7Ozs7O0FBRWhELElBQU0sQUFBRUMsZ0JBQWtCQyx5QkFBYyxDQUFoQ0Q7QUFFUixTQUFTRSx1QkFBdUJDLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxrQkFBa0IsRUFBRUMsYUFBYSxFQUFFQyxPQUFPO0lBQzlGLElBQUlDLDJCQUEyQjtJQUUvQixJQUFJSixjQUFjLE1BQU07UUFDdEIsSUFBTUssT0FBT0YsUUFBUUcsbUJBQW1CLENBQUNOO1FBRXpDLElBQUlLLFNBQVMsTUFBTTtZQUNqQixJQUFNRSxhQUFhRixLQUFLRyxTQUFTLElBQzNCQyxrQkFBa0JWLFVBQVVTLFNBQVM7WUFFM0NMLFFBQVFPLEtBQUssQ0FBQyxBQUFDLGlCQUF3REgsT0FBeENFLGlCQUFnQiwwQkFBbUMsT0FBWEYsWUFBVztZQUVsRixJQUFNSSxtQkFBbUJSLFFBQVFTLG1CQUFtQixJQUM5Q0MseUJBQXlCUixLQUFLUyxpQ0FBaUMsQ0FBQ2YsV0FBV1ksa0JBQWtCUjtZ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