"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _necessary = require("necessary");
var _ontology = /*#__PURE__*/ _interop_require_default(require("../../ontology"));
var _statement = require("../../utilities/statement");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var backwardsSome = _necessary.arrayUtilities.backwardsSome;
function unifyWithRule(statement, reference, satisfiesAssertion, substitutions, context) {
    var unifiesWithRule = false;
    if (reference !== null) {
        var rule = context.findRuleByReference(reference);
        if (rule !== null) {
            var ruleString = rule.getString(), statementString = statement.getString();
            context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(ruleString, "' rule..."));
            var stepsOrSubproofs = context.getStepsOrSubproofs(), statementAndStepsUnify = rule.unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, context);
            if (statementAndStepsUnify) {
                unifiesWithRule = true;
            }
            if (unifiesWithRule) {
                context.debug("...unified the '".concat(statementString, "' statement with the '").concat(ruleString, "' rule."));
            }
        }
    }
    return unifiesWithRule;
}
function unifyWithReference(statement, reference, satisfiesAssertion, substitutions, context) {
    var unifiesWithReference = false;
    if (reference !== null) {
        var metavariableVerifies = reference.verifyMetavariable(context);
        if (metavariableVerifies) {
            var statementString = statement.getString(), referenceString = reference.getString();
            context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(referenceString, "' reference..."));
            var StatementSubstitution = _ontology.default.StatementSubstitution, metavariable = reference.getMetavariable(), statementSubstitution = StatementSubstitution.fromStatementAndMetavariable(statement, metavariable, context), substitution = statementSubstitution; ///
            substitutions.addSubstitution(substitution, context);
            unifiesWithReference = true;
            if (unifiesWithReference) {
                context.debug("...unified the '".concat(statementString, "' statement with the '").concat(referenceString, "' reference."));
            }
        }
    }
    return unifiesWithReference;
}
function unifyAsSatisfiesAssertion(statement, reference, satisfiesAssertion, substitutions, context) {
    var unifiesAsSatisfiesAssertion = false;
    satisfiesAssertion = (0, _statement.satisfiesAssertionFromStatement)(statement, context);
    if (satisfiesAssertion !== null) {
        var statementString = statement.getString();
        context.trace("Unifying the '".concat(statementString, "' statement as a satisfies assertion..."));
        var stated = true, assignments = null;
        satisfiesAssertion.verifySignature(assignments, stated, context);
        if (reference === null) {
            var stepsOrSubproofs = context.getStepsOrSubproofs();
            unifiesAsSatisfiesAssertion = backwardsSome(stepsOrSubproofs, function(stepsOrSubproof) {
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
                        var Substitutions = _ontology.default.Substitutions, substitutions1 = Substitutions.fromNothing(), axiomLemmaTheoremOrConjectureUnifies = axiom.unifyAxiomLemmaTheoremOrConjecture(axiomLemmaTheoremOrConjecture, substitutions1, context);
                        if (axiomLemmaTheoremOrConjectureUnifies) {
                            var substitutionsCorrelates = satisfiesAssertion.correlateSubstitutions(substitutions1, context);
                            if (substitutionsCorrelates) {
                                unifiesAsSatisfiesAssertion = true;
                            }
                        }
                    } else {
                        var axiomString = axiom.getString();
                        context.debug("Cannot unify with the '".concat(axiomString, "' because it is not satisfiable."));
                    }
                }
            }
        }
        if (unifiesAsSatisfiesAssertion) {
            context.debug("...unified the '".concat(statementString, "' statement as a satisfies assertion."));
        }
    }
    return unifiesAsSatisfiesAssertion;
}
function unifyWithAxiomLemmaTheoremOrConjecture(statement, reference, satisfiesAssertion, substitutions, context) {
    var unifiesWithAxiomLemmaTheoremOrConjecture = false;
    if (reference !== null) {
        var Substitutions = _ontology.default.Substitutions, axiomLemmaTheoremOrConjecture = context.findAxiomLemmaTheoremOrConjectureByReference(reference), generalSubstitutions = substitutions; ///
        if (axiomLemmaTheoremOrConjecture !== null) {
            var statementString = statement.getString(), axiomLemmaTheoremOrConjectureString = reference.getString();
            context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(axiomLemmaTheoremOrConjectureString, "' axiom, lemma, theorem or conjecture..."));
            var stepsOrSubproofs = context.getStepsOrSubproofs();
            substitutions = Substitutions.fromNothing();
            var statementAndStepsUnify = axiomLemmaTheoremOrConjecture.unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, substitutions, context);
            if (statementAndStepsUnify) {
                var StatementSubstitution = _ontology.default.StatementSubstitution, metavariable = reference.getMetavariable(), statementSubstitution = StatementSubstitution.fromStatementAndMetavariable(statement, metavariable, context), substitution = statementSubstitution; ///
                substitutions = generalSubstitutions; ///
                substitutions.addSubstitution(substitution, context);
                unifiesWithAxiomLemmaTheoremOrConjecture = true;
            }
            if (unifiesWithAxiomLemmaTheoremOrConjecture) {
                context.debug("...unified the '".concat(statementString, "' statement with the '").concat(axiomLemmaTheoremOrConjectureString, "' axiom, lemma, theorem or conjecture."));
            }
        }
    }
    return unifiesWithAxiomLemmaTheoremOrConjecture;
}
function unifyAEquality(statement, reference, satisfiesAssertion, substitutions, context) {
    var unifiesAEquality = false;
    if (reference === null) {
        var equality = (0, _statement.equalityFromStatement)(statement, context);
        if (equality !== null) {
            var statementString = statement.getString();
            context.trace("Unifying the '".concat(statementString, "' statement as an equality..."));
            var equalityEqual = equality.isEqual(context);
            if (equalityEqual) {
                unifiesAEquality = true;
            }
            if (unifiesAEquality) {
                context.debug("...unified the '".concat(statementString, "' statement as an equality."));
            }
        }
    }
    return unifiesAEquality;
}
function unifyAsJudgement(statement, reference, satisfiesAssertion, substitutions, context) {
    var unifiesAsJudgement = false;
    if (reference === null) {
        var judgement = (0, _statement.judgementFromStatement)(statement, context);
        if (judgement !== null) {
            var statementString = statement.getString();
            context.trace("Unifying the '".concat(statementString, "' statement as a judgement..."));
            unifiesAsJudgement = true;
            if (unifiesAsJudgement) {
                context.debug("...unified the '".concat(statementString, "' statement as a judgement."));
            }
        }
    }
    return unifiesAsJudgement;
}
function unifyAsTypeAssertion(statement, reference, satisfiesAssertion, substitutions, context) {
    var unifiesAsTypeAssertion = false;
    if (reference === null) {
        var typeAssertion = (0, _statement.typeAssertionFromStatement)(statement, context);
        if (typeAssertion !== null) {
            var statementString = statement.getString();
            context.trace("Unifying the '".concat(statementString, "' statement as a type assertion..."));
            unifiesAsTypeAssertion = true;
            context.debug("...unified the '".concat(statementString, "' statement as a type assertion."));
        }
    }
    return unifiesAsTypeAssertion;
}
function unifyAsPropertyAssertion(statement, reference, satisfiesAssertion, substitutions, context) {
    var unifiesAsPropertyAssertion = false;
    if (reference === null) {
        var propertyAssertion = (0, _statement.propertyAssertionFromStatement)(statement, context);
        if (propertyAssertion !== null) {
            var statementString = statement.getString();
            context.trace("Unifying the '".concat(statementString, "' statement as a property assertion..."));
            var term = propertyAssertion.getTerm(), equivalence = context.findEquivalenceByTerm(term);
            if (equivalence !== null) {
                var propertyAssertionMatches = equivalence.someOtherTerm(term, function(term) {
                    var propertyRelation = propertyAssertion.getPropertyRelation(), propertyAssertionMatches = context.matchTermAndPropertyRelation(term, propertyRelation);
                    if (propertyAssertionMatches) {
                        return true;
                    }
                });
                if (propertyAssertionMatches) {
                    unifiesAsPropertyAssertion = true;
                }
            }
            if (unifiesAsPropertyAssertion) {
                context.debug("...unified the '".concat(statementString, "' statement as a property assertion."));
            }
        }
    }
    return unifiesAsPropertyAssertion;
}
function unifyWithSatisfiesAssertion(statement, reference, satisfiesAssertion, substitutions, context) {
    var unifiesWithSatisfiesAssertion = false;
    if (satisfiesAssertion !== null) {
        var stepsOrSubproofs = context.getStepsOrSubproofs(), statementUnifies = satisfiesAssertion.unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, context);
        if (statementUnifies) {
            unifiesWithSatisfiesAssertion = true;
        }
    }
    return unifiesWithSatisfiesAssertion;
}
function equateWithStepsOrSubproofs(statement, reference, satisfiesAssertion, substitutions, context) {
    var unifiesWithStepOrSubproofs = false;
    if (reference === null) {
        var stepsOrSubproofs = context.getStepsOrSubproofs(), statementUnifiesWithSteps = statement.equateWithStepsOrSubproofs(stepsOrSubproofs, context);
        if (statementUnifiesWithSteps) {
            unifiesWithStepOrSubproofs = true;
        }
    }
    return unifiesWithStepOrSubproofs;
}
var unifyMixins = [
    unifyWithRule,
    unifyWithReference,
    unifyAsSatisfiesAssertion,
    unifyWithAxiomLemmaTheoremOrConjecture,
    unifyAEquality,
    unifyAsJudgement,
    unifyAsTypeAssertion,
    unifyAsPropertyAssertion,
    unifyWithSatisfiesAssertion,
    equateWithStepsOrSubproofs
];
var _default = unifyMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taXhpbnMvc3RlcC91bmlmeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBvbnRvbG9neSBmcm9tIFwiLi4vLi4vb250b2xvZ3lcIjtcblxuaW1wb3J0IHsgZXF1YWxpdHlGcm9tU3RhdGVtZW50LFxuICAgICAgICAganVkZ2VtZW50RnJvbVN0YXRlbWVudCxcbiAgICAgICAgIHR5cGVBc3NlcnRpb25Gcm9tU3RhdGVtZW50LFxuICAgICAgICAgcHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50LFxuICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RhdGVtZW50XCI7XG5cbmNvbnN0IHsgYmFja3dhcmRzU29tZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIHVuaWZ5V2l0aFJ1bGUoc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgdW5pZmllc1dpdGhSdWxlID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHJ1bGUgPSBjb250ZXh0LmZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIGlmIChydWxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBydWxlU3RyaW5nID0gcnVsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZS4uLmApO1xuXG4gICAgICBjb25zdCBzdGVwc09yU3VicHJvb2ZzID0gY29udGV4dC5nZXRTdGVwc09yU3VicHJvb2ZzKCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRBbmRTdGVwc1VuaWZ5ID0gcnVsZS51bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMoc3RhdGVtZW50LCBzdGVwc09yU3VicHJvb2ZzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudEFuZFN0ZXBzVW5pZnkpIHtcbiAgICAgICAgdW5pZmllc1dpdGhSdWxlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHVuaWZpZXNXaXRoUnVsZSkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaWZpZXNXaXRoUnVsZTtcbn1cblxuZnVuY3Rpb24gdW5pZnlXaXRoUmVmZXJlbmNlKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHVuaWZpZXNXaXRoUmVmZXJlbmNlID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVZlcmlmaWVzID0gcmVmZXJlbmNlLnZlcmlmeU1ldGF2YXJpYWJsZShjb250ZXh0KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVWZXJpZmllcykge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgICBjb25zdCB7IFN0YXRlbWVudFN1YnN0aXR1dGlvbiB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBTdGF0ZW1lbnRTdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb247IC8vL1xuXG4gICAgICBzdWJzdGl0dXRpb25zLmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICB1bmlmaWVzV2l0aFJlZmVyZW5jZSA9IHRydWU7XG5cbiAgICAgIGlmICh1bmlmaWVzV2l0aFJlZmVyZW5jZSkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlmaWVzV2l0aFJlZmVyZW5jZTtcbn1cblxuZnVuY3Rpb24gdW5pZnlBc1NhdGlzZmllc0Fzc2VydGlvbihzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVzQXNTYXRpc2ZpZXNBc3NlcnRpb24gPSBmYWxzZTtcblxuICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgaWYgKHNhdGlzZmllc0Fzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgIGFzc2lnbm1lbnRzID0gbnVsbDtcblxuICAgIHNhdGlzZmllc0Fzc2VydGlvbi52ZXJpZnlTaWduYXR1cmUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGVwc09yU3VicHJvb2ZzID0gY29udGV4dC5nZXRTdGVwc09yU3VicHJvb2ZzKCk7XG5cbiAgICAgIHVuaWZpZXNBc1NhdGlzZmllc0Fzc2VydGlvbiA9IGJhY2t3YXJkc1NvbWUoc3RlcHNPclN1YnByb29mcywgKHN0ZXBzT3JTdWJwcm9vZikgPT4ge1xuICAgICAgICBjb25zdCBzdGVwT3JTdWJQcm9vZlVuaWZpZXNXSXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gc3RlcHNPclN1YnByb29mLnVuaWZ5V2l0aFNhdGlzZmllc0Fzc2VydGlvbihzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGVwT3JTdWJQcm9vZlVuaWZpZXNXSXRoU2F0aXNmaWVzQXNzZXJ0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSA9IGNvbnRleHQuZmluZEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgICAgaWYgKGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlICE9PSBudWxsKSB7XG4gICAgICAgIHJlZmVyZW5jZSA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRSZWZlcmVuY2UoKTtcblxuICAgICAgICBjb25zdCBheGlvbSA9IGNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgICAgICBpZiAoYXhpb20gIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBzYXRpc2ZpYWJsZSA9IGF4aW9tLmlzU2F0aXNmaWFibGUoKTtcblxuICAgICAgICAgIGlmIChzYXRpc2ZpYWJsZSkge1xuICAgICAgICAgICAgY29uc3QgeyBTdWJzdGl0dXRpb25zIH0gPSBvbnRvbG9neSxcbiAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVVuaWZpZXMgPSBheGlvbS51bmlmeUF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlKGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlVW5pZmllcykge1xuICAgICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zQ29ycmVsYXRlcyA9IHNhdGlzZmllc0Fzc2VydGlvbi5jb3JyZWxhdGVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25zQ29ycmVsYXRlcykge1xuICAgICAgICAgICAgICAgIHVuaWZpZXNBc1NhdGlzZmllc0Fzc2VydGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYXhpb21TdHJpbmcgPSBheGlvbS5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZyhgQ2Fubm90IHVuaWZ5IHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYmVjYXVzZSBpdCBpcyBub3Qgc2F0aXNmaWFibGUuYClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodW5pZmllc0FzU2F0aXNmaWVzQXNzZXJ0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBzYXRpc2ZpZXMgYXNzZXJ0aW9uLmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlmaWVzQXNTYXRpc2ZpZXNBc3NlcnRpb247XG59XG5cbmZ1bmN0aW9uIHVuaWZ5V2l0aEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHVuaWZpZXNXaXRoQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBTdWJzdGl0dXRpb25zIH0gPSBvbnRvbG9neSxcbiAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSA9IGNvbnRleHQuZmluZEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICBnZW5lcmFsU3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnM7IC8vL1xuXG4gICAgaWYgKGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVN0cmluZ30nIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSBvciBjb25qZWN0dXJlLi4uYCk7XG5cbiAgICAgIGNvbnN0IHN0ZXBzT3JTdWJwcm9vZnMgPSBjb250ZXh0LmdldFN0ZXBzT3JTdWJwcm9vZnMoKTtcblxuICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKTtcblxuICAgICAgY29uc3Qgc3RhdGVtZW50QW5kU3RlcHNVbmlmeSA9IGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlLnVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyhzdGF0ZW1lbnQsIHN0ZXBzT3JTdWJwcm9vZnMsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50QW5kU3RlcHNVbmlmeSkge1xuICAgICAgICBjb25zdCB7IFN0YXRlbWVudFN1YnN0aXR1dGlvbiB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gU3RhdGVtZW50U3Vic3RpdHV0aW9uLmZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgICBzdWJzdGl0dXRpb25zID0gZ2VuZXJhbFN1YnN0aXR1dGlvbnM7IC8vL1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbnMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgdW5pZmllc1dpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh1bmlmaWVzV2l0aEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVN0cmluZ30nIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSBvciBjb25qZWN0dXJlLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlmaWVzV2l0aEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlO1xufVxuXG5mdW5jdGlvbiB1bmlmeUFFcXVhbGl0eShzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVzQUVxdWFsaXR5ID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGVxdWFsaXR5ID0gZXF1YWxpdHlGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoZXF1YWxpdHkgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhbiBlcXVhbGl0eS4uLmApO1xuXG4gICAgICBjb25zdCBlcXVhbGl0eUVxdWFsID0gZXF1YWxpdHkuaXNFcXVhbChjb250ZXh0KTtcblxuICAgICAgaWYgKGVxdWFsaXR5RXF1YWwpIHtcbiAgICAgICAgdW5pZmllc0FFcXVhbGl0eSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh1bmlmaWVzQUVxdWFsaXR5KSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhbiBlcXVhbGl0eS5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZmllc0FFcXVhbGl0eTtcbn1cblxuZnVuY3Rpb24gdW5pZnlBc0p1ZGdlbWVudChzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVzQXNKdWRnZW1lbnQgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgY29uc3QganVkZ2VtZW50ID0ganVkZ2VtZW50RnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGp1ZGdlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEganVkZ2VtZW50Li4uYCk7XG5cbiAgICAgIHVuaWZpZXNBc0p1ZGdlbWVudCA9IHRydWU7XG5cbiAgICAgIGlmICh1bmlmaWVzQXNKdWRnZW1lbnQpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEganVkZ2VtZW50LmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlmaWVzQXNKdWRnZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHVuaWZ5QXNUeXBlQXNzZXJ0aW9uKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHVuaWZpZXNBc1R5cGVBc3NlcnRpb24gPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgY29uc3QgdHlwZUFzc2VydGlvbiA9IHR5cGVBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAodHlwZUFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgdHlwZSBhc3NlcnRpb24uLi5gKTtcblxuICAgICAgdW5pZmllc0FzVHlwZUFzc2VydGlvbiA9IHRydWU7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHR5cGUgYXNzZXJ0aW9uLmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlmaWVzQXNUeXBlQXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB1bmlmeUFzUHJvcGVydHlBc3NlcnRpb24oc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgdW5pZmllc0FzUHJvcGVydHlBc3NlcnRpb24gPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgY29uc3QgcHJvcGVydHlBc3NlcnRpb24gPSBwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChwcm9wZXJ0eUFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgcHJvcGVydHkgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICAgIGNvbnN0IHRlcm0gPSBwcm9wZXJ0eUFzc2VydGlvbi5nZXRUZXJtKCksXG4gICAgICAgICAgICBlcXVpdmFsZW5jZSA9IGNvbnRleHQuZmluZEVxdWl2YWxlbmNlQnlUZXJtKHRlcm0pO1xuXG4gICAgICBpZiAoZXF1aXZhbGVuY2UgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcHJvcGVydHlBc3NlcnRpb25NYXRjaGVzID0gZXF1aXZhbGVuY2Uuc29tZU90aGVyVGVybSh0ZXJtLCAodGVybSkgPT4geyAgLy8vXG4gICAgICAgICAgY29uc3QgcHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5QXNzZXJ0aW9uLmdldFByb3BlcnR5UmVsYXRpb24oKSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUFzc2VydGlvbk1hdGNoZXMgPSBjb250ZXh0Lm1hdGNoVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbik7XG5cbiAgICAgICAgICBpZiAocHJvcGVydHlBc3NlcnRpb25NYXRjaGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChwcm9wZXJ0eUFzc2VydGlvbk1hdGNoZXMpIHtcbiAgICAgICAgICB1bmlmaWVzQXNQcm9wZXJ0eUFzc2VydGlvbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHVuaWZpZXNBc1Byb3BlcnR5QXNzZXJ0aW9uKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHByb3BlcnR5IGFzc2VydGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZmllc0FzUHJvcGVydHlBc3NlcnRpb247XG59XG5cbmZ1bmN0aW9uIHVuaWZ5V2l0aFNhdGlzZmllc0Fzc2VydGlvbihzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGlmIChzYXRpc2ZpZXNBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGVwc09yU3VicHJvb2ZzID0gY29udGV4dC5nZXRTdGVwc09yU3VicHJvb2ZzKCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHNhdGlzZmllc0Fzc2VydGlvbi51bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMoc3RhdGVtZW50LCBzdGVwc09yU3VicHJvb2ZzLCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiBlcXVhdGVXaXRoU3RlcHNPclN1YnByb29mcyhzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVzV2l0aFN0ZXBPclN1YnByb29mcyA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICBjb25zdCBzdGVwc09yU3VicHJvb2ZzID0gY29udGV4dC5nZXRTdGVwc09yU3VicHJvb2ZzKCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllc1dpdGhTdGVwcyA9IHN0YXRlbWVudC5lcXVhdGVXaXRoU3RlcHNPclN1YnByb29mcyhzdGVwc09yU3VicHJvb2ZzLCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aFN0ZXBzKSB7XG4gICAgICB1bmlmaWVzV2l0aFN0ZXBPclN1YnByb29mcyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaWZpZXNXaXRoU3RlcE9yU3VicHJvb2ZzO1xufVxuXG5jb25zdCB1bmlmeU1peGlucyA9IFtcbiAgdW5pZnlXaXRoUnVsZSxcbiAgdW5pZnlXaXRoUmVmZXJlbmNlLFxuICB1bmlmeUFzU2F0aXNmaWVzQXNzZXJ0aW9uLFxuICB1bmlmeVdpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSxcbiAgdW5pZnlBRXF1YWxpdHksXG4gIHVuaWZ5QXNKdWRnZW1lbnQsXG4gIHVuaWZ5QXNUeXBlQXNzZXJ0aW9uLFxuICB1bmlmeUFzUHJvcGVydHlBc3NlcnRpb24sXG4gIHVuaWZ5V2l0aFNhdGlzZmllc0Fzc2VydGlvbixcbiAgZXF1YXRlV2l0aFN0ZXBzT3JTdWJwcm9vZnNcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHVuaWZ5TWl4aW5zO1xuXG4iXSwibmFtZXMiOlsiYmFja3dhcmRzU29tZSIsImFycmF5VXRpbGl0aWVzIiwidW5pZnlXaXRoUnVsZSIsInN0YXRlbWVudCIsInJlZmVyZW5jZSIsInNhdGlzZmllc0Fzc2VydGlvbiIsInN1YnN0aXR1dGlvbnMiLCJjb250ZXh0IiwidW5pZmllc1dpdGhSdWxlIiwicnVsZSIsImZpbmRSdWxlQnlSZWZlcmVuY2UiLCJydWxlU3RyaW5nIiwiZ2V0U3RyaW5nIiwic3RhdGVtZW50U3RyaW5nIiwidHJhY2UiLCJzdGVwc09yU3VicHJvb2ZzIiwiZ2V0U3RlcHNPclN1YnByb29mcyIsInN0YXRlbWVudEFuZFN0ZXBzVW5pZnkiLCJ1bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMiLCJkZWJ1ZyIsInVuaWZ5V2l0aFJlZmVyZW5jZSIsInVuaWZpZXNXaXRoUmVmZXJlbmNlIiwibWV0YXZhcmlhYmxlVmVyaWZpZXMiLCJ2ZXJpZnlNZXRhdmFyaWFibGUiLCJyZWZlcmVuY2VTdHJpbmciLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJvbnRvbG9neSIsIm1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZSIsInN0YXRlbWVudFN1YnN0aXR1dGlvbiIsImZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb24iLCJhZGRTdWJzdGl0dXRpb24iLCJ1bmlmeUFzU2F0aXNmaWVzQXNzZXJ0aW9uIiwidW5pZmllc0FzU2F0aXNmaWVzQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsInN0YXRlZCIsImFzc2lnbm1lbnRzIiwidmVyaWZ5U2lnbmF0dXJlIiwic3RlcHNPclN1YnByb29mIiwic3RlcE9yU3ViUHJvb2ZVbmlmaWVzV0l0aFNhdGlzZmllc0Fzc2VydGlvbiIsInVuaWZ5V2l0aFNhdGlzZmllc0Fzc2VydGlvbiIsImF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlIiwiZmluZEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlQnlSZWZlcmVuY2UiLCJnZXRSZWZlcmVuY2UiLCJheGlvbSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwic2F0aXNmaWFibGUiLCJpc1NhdGlzZmlhYmxlIiwiU3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwiYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVVbmlmaWVzIiwidW5pZnlBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSIsInN1YnN0aXR1dGlvbnNDb3JyZWxhdGVzIiwiY29ycmVsYXRlU3Vic3RpdHV0aW9ucyIsImF4aW9tU3RyaW5nIiwidW5pZnlXaXRoQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUiLCJ1bmlmaWVzV2l0aEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlIiwiZ2VuZXJhbFN1YnN0aXR1dGlvbnMiLCJheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVN0cmluZyIsInVuaWZ5QUVxdWFsaXR5IiwidW5pZmllc0FFcXVhbGl0eSIsImVxdWFsaXR5IiwiZXF1YWxpdHlGcm9tU3RhdGVtZW50IiwiZXF1YWxpdHlFcXVhbCIsImlzRXF1YWwiLCJ1bmlmeUFzSnVkZ2VtZW50IiwidW5pZmllc0FzSnVkZ2VtZW50IiwianVkZ2VtZW50IiwianVkZ2VtZW50RnJvbVN0YXRlbWVudCIsInVuaWZ5QXNUeXBlQXNzZXJ0aW9uIiwidW5pZmllc0FzVHlwZUFzc2VydGlvbiIsInR5cGVBc3NlcnRpb24iLCJ0eXBlQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsInVuaWZ5QXNQcm9wZXJ0eUFzc2VydGlvbiIsInVuaWZpZXNBc1Byb3BlcnR5QXNzZXJ0aW9uIiwicHJvcGVydHlBc3NlcnRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJ0ZXJtIiwiZ2V0VGVybSIsImVxdWl2YWxlbmNlIiwiZmluZEVxdWl2YWxlbmNlQnlUZXJtIiwicHJvcGVydHlBc3NlcnRpb25NYXRjaGVzIiwic29tZU90aGVyVGVybSIsInByb3BlcnR5UmVsYXRpb24iLCJnZXRQcm9wZXJ0eVJlbGF0aW9uIiwibWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsInVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwic3RhdGVtZW50VW5pZmllcyIsImVxdWF0ZVdpdGhTdGVwc09yU3VicHJvb2ZzIiwidW5pZmllc1dpdGhTdGVwT3JTdWJwcm9vZnMiLCJzdGF0ZW1lbnRVbmlmaWVzV2l0aFN0ZXBzIiwidW5pZnlNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXdVQTs7O2VBQUE7Ozt5QkF0VStCOytEQUVWO3lCQU0yQjs7Ozs7O0FBRWhELElBQU0sQUFBRUEsZ0JBQWtCQyx5QkFBYyxDQUFoQ0Q7QUFFUixTQUFTRSxjQUFjQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsa0JBQWtCLEVBQUVDLGFBQWEsRUFBRUMsT0FBTztJQUNyRixJQUFJQyxrQkFBa0I7SUFFdEIsSUFBSUosY0FBYyxNQUFNO1FBQ3RCLElBQU1LLE9BQU9GLFFBQVFHLG1CQUFtQixDQUFDTjtRQUV6QyxJQUFJ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