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
var _substitutions = /*#__PURE__*/ _interop_require_default(require("../../substitutions"));
var _statement = /*#__PURE__*/ _interop_require_default(require("../../substitution/statement"));
var _context = require("../../utilities/context");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function unifyAWithRule(statement, reference, substitutions, context) {
    var unifiedWithRule = false;
    if (reference !== null) {
        var rule = context.findRuleByReference(reference);
        if (rule !== null) {
            var ruleString = rule.getString(), statementString = statement.getString();
            context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(ruleString, "' rule..."));
            var stepsOrSubproofs = context.getStepsOrSubproofs(), statementAndStepsUnified = rule.unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, context);
            unifiedWithRule = statementAndStepsUnified; ///
            if (unifiedWithRule) {
                context.debug("...unified the '".concat(statementString, "' statement with the '").concat(ruleString, "' rule."));
            }
        }
    }
    return unifiedWithRule;
}
function unifyAWithReference(statement, reference, substitutions, context) {
    var unifiedWithReference = false;
    if (reference !== null) {
        var metavariableVerified = reference.verifyMetavariable(context);
        if (metavariableVerified) {
            var statementString = statement.getString(), referenceString = reference.getString();
            context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(referenceString, "' reference..."));
            var metavariable = reference.getMetavariable(), specificContext = context, statementSubstitution = _statement.default.fromStatementAndMetavariable(statement, metavariable, context), substitution = statementSubstitution; ///
            substitutions.addSubstitution(substitution, specificContext);
            unifiedWithReference = true;
            if (unifiedWithReference) {
                context.debug("...unified the '".concat(statementString, "' statement with the '").concat(referenceString, "' reference."));
            }
        }
    }
    return unifiedWithReference;
}
function unifyAsSatisfiesAssertion(statement, reference, substitutions, context) {
    var unifiedAsSatisfiesAssertion = false;
    if (reference !== null) {
        var satisfiesAssertion = (0, _context.satisfiesAssertionFromStatement)(statement, context);
        if (satisfiesAssertion !== null) {
            var statementString = statement.getString();
            context.trace("Unifying the '".concat(statementString, "' statement as a satisfies assertion..."));
            var axiomLemmaTheoremConjecture = context.findAxiomLemmaTheoremConjectureByReference(reference);
            if (axiomLemmaTheoremConjecture !== null) {
                reference = satisfiesAssertion.getReference();
                var axiom = context.findAxiomByReference(reference), substitutions1 = _substitutions.default.fromNothing(), axiomLemmaTheoremConjectureUnified = axiom.unifyAxiomLemmaTheoremConjecture(axiomLemmaTheoremConjecture, substitutions1, context);
                if (axiomLemmaTheoremConjectureUnified) {
                    var substitutionsMatch = satisfiesAssertion.matchSubstitutions(substitutions1, context);
                    unifiedAsSatisfiesAssertion = substitutionsMatch; ///
                }
            }
            if (unifiedAsSatisfiesAssertion) {
                context.debug("...unified the '".concat(statementString, "' statement as a satisfies assertion."));
            }
        }
    }
    return unifiedAsSatisfiesAssertion;
}
function unifyAWithAxiomLemmaTheoremOrConjecture(statement, reference, substitutions, context) {
    var unifiedWithAxiomLemmaTheoremOrConjecture = false;
    if (reference !== null) {
        var axiomLemmaTheoremConjecture = context.findAxiomLemmaTheoremConjectureByReference(reference), generalSubstitutions = substitutions; ///
        if (axiomLemmaTheoremConjecture !== null) {
            var statementString = statement.getString(), axiomLemmaTheoremConjectureString = reference.getString();
            context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(axiomLemmaTheoremConjectureString, "' axiom, lemma, theorem or conjecture..."));
            var stepsOrSubproofs = context.getStepsOrSubproofs(), specificSubstitutions = _substitutions.default.fromNothing();
            substitutions = specificSubstitutions; ///
            var statementAndStepsUnified = axiomLemmaTheoremConjecture.unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, substitutions, context);
            if (statementAndStepsUnified) {
                var metavariable = reference.getMetavariable(), specificContext = context, statementSubstitution = _statement.default.fromStatementAndMetavariable(statement, metavariable, context), substitution = statementSubstitution; ///
                substitutions = generalSubstitutions; ///
                substitutions.addSubstitution(substitution, specificContext);
                unifiedWithAxiomLemmaTheoremOrConjecture = true;
            }
            if (unifiedWithAxiomLemmaTheoremOrConjecture) {
                context.debug("...unified the '".concat(statementString, "' statement with the '").concat(axiomLemmaTheoremConjectureString, "' axiom, lemma, theorem or conjecture."));
            }
        }
    }
    return unifiedWithAxiomLemmaTheoremOrConjecture;
}
function unifyAsEquality(statement, reference, substitutions, context) {
    var unifiedAsEquality = false;
    if (reference === null) {
        var equality = (0, _context.equalityFromStatement)(statement, context);
        if (equality !== null) {
            var statementString = statement.getString();
            context.trace("Unifying the '".concat(statementString, "' statement as an equality..."));
            unifiedAsEquality = true;
            context.debug("...unified the '".concat(statementString, "' statement as an equality."));
        }
    }
    return unifiedAsEquality;
}
function unifyAsJudgement(statement, reference, substitutions, context) {
    var unifiedAsJudgement = false;
    if (reference === null) {
        var judgement = (0, _context.judgementFromStatement)(statement, context);
        if (judgement !== null) {
            var statementString = statement.getString();
            context.trace("Unifying the '".concat(statementString, "' statement as a judgement..."));
            unifiedAsJudgement = true;
            context.debug("...unified the '".concat(statementString, "' statement as a judgement."));
        }
    }
    return unifiedAsJudgement;
}
function unifyAsTypeAssertion(statement, reference, substitutions, context) {
    var unifiedAsTypeAssertion = false;
    if (reference === null) {
        var typeAssertion = (0, _context.typeAssertionFromStatement)(statement, context);
        if (typeAssertion !== null) {
            var statementString = statement.getString();
            context.trace("Unifying the '".concat(statementString, "' statement as a type assertion..."));
            unifiedAsTypeAssertion = true;
            context.debug("...unified the '".concat(statementString, "' statement as a type assertion."));
        }
    }
    return unifiedAsTypeAssertion;
}
function unifyAsPropertyAssertion(statement, reference, substitutions, context) {
    var unifiedAsPropertyAssertion = false;
    if (reference === null) {
        var propertyAssertion = (0, _context.propertyAssertionFromStatement)(statement, context);
        if (propertyAssertion !== null) {
            var statementString = statement.getString();
            context.trace("Unifying the '".concat(statementString, "' statement as a property assertion..."));
            var term = propertyAssertion.getTerm(), equivalence = context.findEquivalenceByTerm(term);
            if (equivalence !== null) {
                unifiedAsPropertyAssertion = equivalence.someOtherTerm(term, function(term) {
                    var propertyRelation = propertyAssertion.getPropertyRelation(), propertyAssertionMatches = context.matchTermAndPropertyRelation(term, propertyRelation);
                    if (propertyAssertionMatches) {
                        return true;
                    }
                });
            }
            if (unifiedAsPropertyAssertion) {
                context.debug("...unified the '".concat(statementString, "' statement as a property assertion."));
            }
        }
    }
    return unifiedAsPropertyAssertion;
}
function unifyWithStepsOrSubproofs(statement, reference, substitutions, context) {
    var unifiedWithSteps = false;
    if (reference === null) {
        var stepsOrSubproofs = context.getStepsOrSubproofs(), statementUnifiedWithSteps = statement.unifyWithStepsOrSubproofs(stepsOrSubproofs, context);
        unifiedWithSteps = statementUnifiedWithSteps; ///
    }
    return unifiedWithSteps;
}
var unifyMixins = [
    unifyAWithRule,
    unifyAWithReference,
    unifyAsSatisfiesAssertion,
    unifyAWithAxiomLemmaTheoremOrConjecture,
    unifyAsEquality,
    unifyAsJudgement,
    unifyAsTypeAssertion,
    unifyAsPropertyAssertion,
    unifyWithStepsOrSubproofs
];
var _default = unifyMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taXhpbnMvc3RlcC91bmlmeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4uLy4uL3N1YnN0aXR1dGlvbnNcIjtcbmltcG9ydCBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gZnJvbSBcIi4uLy4uL3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnRcIjtcblxuaW1wb3J0IHsgZXF1YWxpdHlGcm9tU3RhdGVtZW50LFxuICAgICAgICAganVkZ2VtZW50RnJvbVN0YXRlbWVudCxcbiAgICAgICAgIHR5cGVBc3NlcnRpb25Gcm9tU3RhdGVtZW50LFxuICAgICAgICAgcHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50LFxuICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5mdW5jdGlvbiB1bmlmeUFXaXRoUnVsZShzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgdW5pZmllZFdpdGhSdWxlID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHJ1bGUgPSBjb250ZXh0LmZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIGlmIChydWxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBydWxlU3RyaW5nID0gcnVsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZS4uLmApO1xuXG4gICAgICBjb25zdCBzdGVwc09yU3VicHJvb2ZzID0gY29udGV4dC5nZXRTdGVwc09yU3VicHJvb2ZzKCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRBbmRTdGVwc1VuaWZpZWQgPSBydWxlLnVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyhzdGF0ZW1lbnQsIHN0ZXBzT3JTdWJwcm9vZnMsIGNvbnRleHQpO1xuXG4gICAgICB1bmlmaWVkV2l0aFJ1bGUgPSBzdGF0ZW1lbnRBbmRTdGVwc1VuaWZpZWQ7ICAvLy9cblxuICAgICAgaWYgKHVuaWZpZWRXaXRoUnVsZSkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaWZpZWRXaXRoUnVsZTtcbn1cblxuZnVuY3Rpb24gdW5pZnlBV2l0aFJlZmVyZW5jZShzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgdW5pZmllZFdpdGhSZWZlcmVuY2UgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSByZWZlcmVuY2UudmVyaWZ5TWV0YXZhcmlhYmxlKGNvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IFN0YXRlbWVudFN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgIHN1YnN0aXR1dGlvbnMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgdW5pZmllZFdpdGhSZWZlcmVuY2UgPSB0cnVlO1xuXG4gICAgICBpZiAodW5pZmllZFdpdGhSZWZlcmVuY2UpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZmllZFdpdGhSZWZlcmVuY2U7XG59XG5cbmZ1bmN0aW9uIHVuaWZ5QXNTYXRpc2ZpZXNBc3NlcnRpb24oc3RhdGVtZW50LCByZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHVuaWZpZWRBc1NhdGlzZmllc0Fzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgIT09IG51bGwpIHtcbiAgICBjb25zdCBzYXRpc2ZpZXNBc3NlcnRpb24gPSBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICAgIGNvbnN0IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSA9IGNvbnRleHQuZmluZEF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICAgIGlmIChheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUgIT09IG51bGwpIHtcbiAgICAgICAgcmVmZXJlbmNlID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmdldFJlZmVyZW5jZSgpO1xuXG4gICAgICAgIGNvbnN0IGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkID0gYXhpb20udW5pZnlBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCkge1xuICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNNYXRjaCA9IHNhdGlzZmllc0Fzc2VydGlvbi5tYXRjaFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgICB1bmlmaWVkQXNTYXRpc2ZpZXNBc3NlcnRpb24gPSBzdWJzdGl0dXRpb25zTWF0Y2g7ICAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodW5pZmllZEFzU2F0aXNmaWVzQXNzZXJ0aW9uKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHNhdGlzZmllcyBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaWZpZWRBc1NhdGlzZmllc0Fzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gdW5pZnlBV2l0aEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVkV2l0aEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSA9IGNvbnRleHQuZmluZEF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgZ2VuZXJhbFN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zOyAvLy9cblxuICAgIGlmIChheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmd9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZS4uLmApO1xuXG4gICAgICBjb25zdCBzdGVwc09yU3VicHJvb2ZzID0gY29udGV4dC5nZXRTdGVwc09yU3VicHJvb2ZzKCksXG4gICAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCk7XG5cbiAgICAgIHN1YnN0aXR1dGlvbnMgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbnM7ICAvLy9cblxuICAgICAgY29uc3Qgc3RhdGVtZW50QW5kU3RlcHNVbmlmaWVkID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLnVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyhzdGF0ZW1lbnQsIHN0ZXBzT3JTdWJwcm9vZnMsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50QW5kU3RlcHNVbmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBTdGF0ZW1lbnRTdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbnMgPSBnZW5lcmFsU3Vic3RpdHV0aW9uczsgLy8vXG5cbiAgICAgICAgc3Vic3RpdHV0aW9ucy5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIHVuaWZpZWRXaXRoQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodW5pZmllZFdpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7YXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nfScgYXhpb20sIGxlbW1hLCB0aGVvcmVtIG9yIGNvbmplY3R1cmUuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaWZpZWRXaXRoQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmU7XG59XG5cbmZ1bmN0aW9uIHVuaWZ5QXNFcXVhbGl0eShzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgdW5pZmllZEFzRXF1YWxpdHkgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgY29uc3QgZXF1YWxpdHkgPSBlcXVhbGl0eUZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChlcXVhbGl0eSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGFuIGVxdWFsaXR5Li4uYCk7XG5cbiAgICAgIHVuaWZpZWRBc0VxdWFsaXR5ID0gdHJ1ZTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGFuIGVxdWFsaXR5LmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlmaWVkQXNFcXVhbGl0eTtcbn1cblxuZnVuY3Rpb24gdW5pZnlBc0p1ZGdlbWVudChzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgdW5pZmllZEFzSnVkZ2VtZW50ID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudCA9IGp1ZGdlbWVudEZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChqdWRnZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIGp1ZGdlbWVudC4uLmApO1xuXG4gICAgICB1bmlmaWVkQXNKdWRnZW1lbnQgPSB0cnVlO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBqdWRnZW1lbnQuYCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaWZpZWRBc0p1ZGdlbWVudDtcbn1cblxuZnVuY3Rpb24gdW5pZnlBc1R5cGVBc3NlcnRpb24oc3RhdGVtZW50LCByZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHVuaWZpZWRBc1R5cGVBc3NlcnRpb24gPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgY29uc3QgdHlwZUFzc2VydGlvbiA9IHR5cGVBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAodHlwZUFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgdHlwZSBhc3NlcnRpb24uLi5gKTtcblxuICAgICAgdW5pZmllZEFzVHlwZUFzc2VydGlvbiA9IHRydWU7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHR5cGUgYXNzZXJ0aW9uLmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlmaWVkQXNUeXBlQXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB1bmlmeUFzUHJvcGVydHlBc3NlcnRpb24oc3RhdGVtZW50LCByZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHVuaWZpZWRBc1Byb3BlcnR5QXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uID0gcHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAocHJvcGVydHlBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHByb3BlcnR5IGFzc2VydGlvbi4uLmApO1xuXG4gICAgICBjb25zdCB0ZXJtID0gcHJvcGVydHlBc3NlcnRpb24uZ2V0VGVybSgpLFxuICAgICAgICAgICAgZXF1aXZhbGVuY2UgPSBjb250ZXh0LmZpbmRFcXVpdmFsZW5jZUJ5VGVybSh0ZXJtKTtcblxuICAgICAgaWYgKGVxdWl2YWxlbmNlICE9PSBudWxsKSB7XG4gICAgICAgIHVuaWZpZWRBc1Byb3BlcnR5QXNzZXJ0aW9uID0gZXF1aXZhbGVuY2Uuc29tZU90aGVyVGVybSh0ZXJtLCAodGVybSkgPT4geyAgLy8vXG4gICAgICAgICAgY29uc3QgcHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5QXNzZXJ0aW9uLmdldFByb3BlcnR5UmVsYXRpb24oKSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUFzc2VydGlvbk1hdGNoZXMgPSBjb250ZXh0Lm1hdGNoVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbik7XG5cbiAgICAgICAgICBpZiAocHJvcGVydHlBc3NlcnRpb25NYXRjaGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodW5pZmllZEFzUHJvcGVydHlBc3NlcnRpb24pIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgcHJvcGVydHkgYXNzZXJ0aW9uLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlmaWVkQXNQcm9wZXJ0eUFzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gdW5pZnlXaXRoU3RlcHNPclN1YnByb29mcyhzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgdW5pZmllZFdpdGhTdGVwcyA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICBjb25zdCBzdGVwc09yU3VicHJvb2ZzID0gY29udGV4dC5nZXRTdGVwc09yU3VicHJvb2ZzKCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllZFdpdGhTdGVwcyA9IHN0YXRlbWVudC51bmlmeVdpdGhTdGVwc09yU3VicHJvb2ZzKHN0ZXBzT3JTdWJwcm9vZnMsIGNvbnRleHQpO1xuXG4gICAgdW5pZmllZFdpdGhTdGVwcyA9IHN0YXRlbWVudFVuaWZpZWRXaXRoU3RlcHM7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHVuaWZpZWRXaXRoU3RlcHM7XG59XG5cbmNvbnN0IHVuaWZ5TWl4aW5zID0gW1xuICB1bmlmeUFXaXRoUnVsZSxcbiAgdW5pZnlBV2l0aFJlZmVyZW5jZSxcbiAgdW5pZnlBc1NhdGlzZmllc0Fzc2VydGlvbixcbiAgdW5pZnlBV2l0aEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlLFxuICB1bmlmeUFzRXF1YWxpdHksXG4gIHVuaWZ5QXNKdWRnZW1lbnQsXG4gIHVuaWZ5QXNUeXBlQXNzZXJ0aW9uLFxuICB1bmlmeUFzUHJvcGVydHlBc3NlcnRpb24sXG4gIHVuaWZ5V2l0aFN0ZXBzT3JTdWJwcm9vZnNcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHVuaWZ5TWl4aW5zO1xuXG4iXSwibmFtZXMiOlsidW5pZnlBV2l0aFJ1bGUiLCJzdGF0ZW1lbnQiLCJyZWZlcmVuY2UiLCJzdWJzdGl0dXRpb25zIiwiY29udGV4dCIsInVuaWZpZWRXaXRoUnVsZSIsInJ1bGUiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlIiwicnVsZVN0cmluZyIsImdldFN0cmluZyIsInN0YXRlbWVudFN0cmluZyIsInRyYWNlIiwic3RlcHNPclN1YnByb29mcyIsImdldFN0ZXBzT3JTdWJwcm9vZnMiLCJzdGF0ZW1lbnRBbmRTdGVwc1VuaWZpZWQiLCJ1bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMiLCJkZWJ1ZyIsInVuaWZ5QVdpdGhSZWZlcmVuY2UiLCJ1bmlmaWVkV2l0aFJlZmVyZW5jZSIsIm1ldGF2YXJpYWJsZVZlcmlmaWVkIiwidmVyaWZ5TWV0YXZhcmlhYmxlIiwicmVmZXJlbmNlU3RyaW5nIiwibWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwic3BlY2lmaWNDb250ZXh0Iiwic3RhdGVtZW50U3Vic3RpdHV0aW9uIiwiU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwiZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSIsInN1YnN0aXR1dGlvbiIsImFkZFN1YnN0aXR1dGlvbiIsInVuaWZ5QXNTYXRpc2ZpZXNBc3NlcnRpb24iLCJ1bmlmaWVkQXNTYXRpc2ZpZXNBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RhdGVtZW50IiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIiwiZmluZEF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZUJ5UmVmZXJlbmNlIiwiZ2V0UmVmZXJlbmNlIiwiYXhpb20iLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsIlN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsImF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVVuaWZpZWQiLCJ1bmlmeUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSIsInN1YnN0aXR1dGlvbnNNYXRjaCIsIm1hdGNoU3Vic3RpdHV0aW9ucyIsInVuaWZ5QVdpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSIsInVuaWZpZWRXaXRoQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUiLCJnZW5lcmFsU3Vic3RpdHV0aW9ucyIsImF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZyIsInNwZWNpZmljU3Vic3RpdHV0aW9ucyIsInVuaWZ5QXNFcXVhbGl0eSIsInVuaWZpZWRBc0VxdWFsaXR5IiwiZXF1YWxpdHkiLCJlcXVhbGl0eUZyb21TdGF0ZW1lbnQiLCJ1bmlmeUFzSnVkZ2VtZW50IiwidW5pZmllZEFzSnVkZ2VtZW50IiwianVkZ2VtZW50IiwianVkZ2VtZW50RnJvbVN0YXRlbWVudCIsInVuaWZ5QXNUeXBlQXNzZXJ0aW9uIiwidW5pZmllZEFzVHlwZUFzc2VydGlvbiIsInR5cGVBc3NlcnRpb24iLCJ0eXBlQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsInVuaWZ5QXNQcm9wZXJ0eUFzc2VydGlvbiIsInVuaWZpZWRBc1Byb3BlcnR5QXNzZXJ0aW9uIiwicHJvcGVydHlBc3NlcnRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJ0ZXJtIiwiZ2V0VGVybSIsImVxdWl2YWxlbmNlIiwiZmluZEVxdWl2YWxlbmNlQnlUZXJtIiwic29tZU90aGVyVGVybSIsInByb3BlcnR5UmVsYXRpb24iLCJnZXRQcm9wZXJ0eVJlbGF0aW9uIiwicHJvcGVydHlBc3NlcnRpb25NYXRjaGVzIiwibWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsInVuaWZ5V2l0aFN0ZXBzT3JTdWJwcm9vZnMiLCJ1bmlmaWVkV2l0aFN0ZXBzIiwic3RhdGVtZW50VW5pZmllZFdpdGhTdGVwcyIsInVuaWZ5TWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF3UUE7OztlQUFBOzs7b0VBdFEwQjtnRUFDUTt1QkFNYzs7Ozs7O0FBRWhELFNBQVNBLGVBQWVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxhQUFhLEVBQUVDLE9BQU87SUFDbEUsSUFBSUMsa0JBQWtCO0lBRXRCLElBQUlILGNBQWMsTUFBTTtRQUN0QixJQUFNSSxPQUFPRixRQUFRRyxtQkFBbUIsQ0FBQ0w7UUFFekMsSUFBSUksU0FBUyxNQUFNO1lBQ2pCLElBQU1FLGFBQWFGLEtBQUtHLFNBQVMsSUFDM0JDLGtCQUFrQlQsVUFBVVEsU0FBUztZQUUzQ0wsUUFBUU8sS0FBSyxDQUFDLEFBQUMsaUJBQXdESCxPQUF4Q0UsaUJBQWdCLDBCQUFtQyxPQUFYRixZQUFXO1lBRWxGLElBQU1JLG1CQUFtQlIsUUFBUVMsbUJBQW1CLElBQzlDQywyQkFBMkJSLEtBQUtTLGlDQUFpQyxDQUFDZCxXQUFXVyxrQkFBa0JSO1lBRXJHQyxrQkFBa0JTLDBCQUEyQixHQUFHO1lBRWhELElBQUlULGlCQUFpQjtnQkFDbkJELFFBQVFZLEtBQUssQ0FBQyxBQUFDLG1CQUEwRFIsT0FBeENFLGlCQUFnQiwwQkFBbUMsT0FBWEYsWUFBVztZQUN0RjtRQUNGO0lBQ0Y7SUFFQSxPQUFPSDtBQUNUO0FBRUEsU0FBU1ksb0JBQW9CaEIsU0FBUyxFQUFFQyxTQUFTLEVBQUVDLGFBQWEsRUFBRUMsT0FBTztJQUN2RSxJQUFJYyx1QkFBdUI7SUFFM0IsSUFBSWhCLGNBQWMsTUFBTTtRQUN0QixJQUFNaUIsdUJBQXVCakIsVUFBVWtCLGtCQUFrQixDQUFDaEI7UUFFMUQsSUFBSWUsc0JBQXNCO1lBQ3hCLElBQU1ULGtCQUFrQlQsVUFBVVEsU0FBUyxJQUNyQ1ksa0JBQWtCbkIsVUFBVU8sU0FBUztZQUUzQ0wsUUFB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