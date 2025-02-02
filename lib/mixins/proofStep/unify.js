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
            var proofStepSubproofs = context.getProofStepSubproofs(), statementAndProofStepsUnified = rule.unifyStatementAndProofStepSubproofs(statement, proofStepSubproofs, context);
            unifiedWithRule = statementAndProofStepsUnified; ///
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
function unifyAsSatisfyingAssertion(statement, reference, substitutions, context) {
    var unifiedAsSatisfyingAssertion = false;
    if (reference !== null) {
        var satisfyingAssertion = (0, _context.satisfyingAssertionFromStatement)(statement, context);
        if (satisfyingAssertion !== null) {
            var statementString = statement.getString();
            context.trace("Unifying the '".concat(statementString, "' statement as a satisfying assertion..."));
            var axiomLemmaTheoremConjecture = context.findAxiomLemmaTheoremConjectureByReference(reference);
            if (axiomLemmaTheoremConjecture !== null) {
                reference = satisfyingAssertion.getReference();
                var axiom = context.findAxiomByReference(reference), substitutions1 = _substitutions.default.fromNothing(), axiomLemmaTheoremConjectureUnified = axiom.unifyAxiomLemmaTheoremConjecture(axiomLemmaTheoremConjecture, substitutions1, context);
                if (axiomLemmaTheoremConjectureUnified) {
                    var substitutionsMatch = satisfyingAssertion.matchSubstitutions(substitutions1, context);
                    unifiedAsSatisfyingAssertion = substitutionsMatch; ///
                }
            }
            if (unifiedAsSatisfyingAssertion) {
                context.debug("...unified the '".concat(statementString, "' statement as a satisfying assertion."));
            }
        }
    }
    return unifiedAsSatisfyingAssertion;
}
function unifyAWithAxiomLemmaTheoremOrConjecture(statement, reference, substitutions, context) {
    var unifiedWithAxiomLemmaTheoremOrConjecture = false;
    if (reference !== null) {
        var axiomLemmaTheoremConjecture = context.findAxiomLemmaTheoremConjectureByReference(reference), generalSubstitutions = substitutions; ///
        if (axiomLemmaTheoremConjecture !== null) {
            var statementString = statement.getString(), axiomLemmaTheoremConjectureString = reference.getString();
            context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(axiomLemmaTheoremConjectureString, "' axiom, lemma, theorem or conjecture..."));
            var proofStepSubproofs = context.getProofStepSubproofs(), specificSubstitutions = _substitutions.default.fromNothing();
            substitutions = specificSubstitutions; ///
            var statementAndProofStepsUnified = axiomLemmaTheoremConjecture.unifyStatementAndProofStepSubproofs(statement, proofStepSubproofs, substitutions, context);
            if (statementAndProofStepsUnified) {
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
function unifyWithProofStepSubproofs(statement, reference, substitutions, context) {
    var unifiedWithProofSteps = false;
    if (reference === null) {
        var proofStepSubproofs = context.getProofStepSubproofs(), statementUnifiedWithProofSteps = statement.unifyWithProofStepSubproofs(proofStepSubproofs, context);
        unifiedWithProofSteps = statementUnifiedWithProofSteps; ///
    }
    return unifiedWithProofSteps;
}
var unifyMixins = [
    unifyAWithRule,
    unifyAWithReference,
    unifyAsSatisfyingAssertion,
    unifyAWithAxiomLemmaTheoremOrConjecture,
    unifyAsEquality,
    unifyAsJudgement,
    unifyAsTypeAssertion,
    unifyAsPropertyAssertion,
    unifyWithProofStepSubproofs
];
var _default = unifyMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taXhpbnMvcHJvb2ZTdGVwL3VuaWZ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9ucyBmcm9tIFwiLi4vLi4vc3Vic3RpdHV0aW9uc1wiO1xuaW1wb3J0IFN0YXRlbWVudFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vLi4vc3Vic3RpdHV0aW9uL3N0YXRlbWVudFwiO1xuXG5pbXBvcnQgeyBlcXVhbGl0eUZyb21TdGF0ZW1lbnQsXG4gICAgICAgICBqdWRnZW1lbnRGcm9tU3RhdGVtZW50LFxuICAgICAgICAgdHlwZUFzc2VydGlvbkZyb21TdGF0ZW1lbnQsXG4gICAgICAgICBwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnQsXG4gICAgICAgICBzYXRpc2Z5aW5nQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5mdW5jdGlvbiB1bmlmeUFXaXRoUnVsZShzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgdW5pZmllZFdpdGhSdWxlID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHJ1bGUgPSBjb250ZXh0LmZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIGlmIChydWxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBydWxlU3RyaW5nID0gcnVsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZS4uLmApO1xuXG4gICAgICBjb25zdCBwcm9vZlN0ZXBTdWJwcm9vZnMgPSBjb250ZXh0LmdldFByb29mU3RlcFN1YnByb29mcygpLFxuICAgICAgICAgICAgc3RhdGVtZW50QW5kUHJvb2ZTdGVwc1VuaWZpZWQgPSBydWxlLnVuaWZ5U3RhdGVtZW50QW5kUHJvb2ZTdGVwU3VicHJvb2ZzKHN0YXRlbWVudCwgcHJvb2ZTdGVwU3VicHJvb2ZzLCBjb250ZXh0KTtcblxuICAgICAgdW5pZmllZFdpdGhSdWxlID0gc3RhdGVtZW50QW5kUHJvb2ZTdGVwc1VuaWZpZWQ7ICAvLy9cblxuICAgICAgaWYgKHVuaWZpZWRXaXRoUnVsZSkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaWZpZWRXaXRoUnVsZTtcbn1cblxuZnVuY3Rpb24gdW5pZnlBV2l0aFJlZmVyZW5jZShzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgdW5pZmllZFdpdGhSZWZlcmVuY2UgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSByZWZlcmVuY2UudmVyaWZ5TWV0YXZhcmlhYmxlKGNvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IFN0YXRlbWVudFN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgIHN1YnN0aXR1dGlvbnMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgdW5pZmllZFdpdGhSZWZlcmVuY2UgPSB0cnVlO1xuXG4gICAgICBpZiAodW5pZmllZFdpdGhSZWZlcmVuY2UpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZmllZFdpdGhSZWZlcmVuY2U7XG59XG5cbmZ1bmN0aW9uIHVuaWZ5QXNTYXRpc2Z5aW5nQXNzZXJ0aW9uKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVkQXNTYXRpc2Z5aW5nQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNhdGlzZnlpbmdBc3NlcnRpb24gPSBzYXRpc2Z5aW5nQXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHNhdGlzZnlpbmdBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHNhdGlzZnlpbmcgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICAgIGNvbnN0IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSA9IGNvbnRleHQuZmluZEF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICAgIGlmIChheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUgIT09IG51bGwpIHtcbiAgICAgICAgcmVmZXJlbmNlID0gc2F0aXNmeWluZ0Fzc2VydGlvbi5nZXRSZWZlcmVuY2UoKTtcblxuICAgICAgICBjb25zdCBheGlvbSA9IGNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCA9IGF4aW9tLnVuaWZ5QXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVVuaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zTWF0Y2ggPSBzYXRpc2Z5aW5nQXNzZXJ0aW9uLm1hdGNoU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICAgIHVuaWZpZWRBc1NhdGlzZnlpbmdBc3NlcnRpb24gPSBzdWJzdGl0dXRpb25zTWF0Y2g7ICAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodW5pZmllZEFzU2F0aXNmeWluZ0Fzc2VydGlvbikge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBzYXRpc2Z5aW5nIGFzc2VydGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZmllZEFzU2F0aXNmeWluZ0Fzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gdW5pZnlBV2l0aEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVkV2l0aEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSA9IGNvbnRleHQuZmluZEF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgZ2VuZXJhbFN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zOyAvLy9cblxuICAgIGlmIChheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmd9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZS4uLmApO1xuXG4gICAgICBjb25zdCBwcm9vZlN0ZXBTdWJwcm9vZnMgPSBjb250ZXh0LmdldFByb29mU3RlcFN1YnByb29mcygpLFxuICAgICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpO1xuXG4gICAgICBzdWJzdGl0dXRpb25zID0gc3BlY2lmaWNTdWJzdGl0dXRpb25zOyAgLy8vXG5cbiAgICAgIGNvbnN0IHN0YXRlbWVudEFuZFByb29mU3RlcHNVbmlmaWVkID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLnVuaWZ5U3RhdGVtZW50QW5kUHJvb2ZTdGVwU3VicHJvb2ZzKHN0YXRlbWVudCwgcHJvb2ZTdGVwU3VicHJvb2ZzLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudEFuZFByb29mU3RlcHNVbmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBTdGF0ZW1lbnRTdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbnMgPSBnZW5lcmFsU3Vic3RpdHV0aW9uczsgLy8vXG5cbiAgICAgICAgc3Vic3RpdHV0aW9ucy5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIHVuaWZpZWRXaXRoQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodW5pZmllZFdpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7YXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nfScgYXhpb20sIGxlbW1hLCB0aGVvcmVtIG9yIGNvbmplY3R1cmUuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaWZpZWRXaXRoQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmU7XG59XG5cbmZ1bmN0aW9uIHVuaWZ5QXNFcXVhbGl0eShzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgdW5pZmllZEFzRXF1YWxpdHkgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgY29uc3QgZXF1YWxpdHkgPSBlcXVhbGl0eUZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChlcXVhbGl0eSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGFuIGVxdWFsaXR5Li4uYCk7XG5cbiAgICAgIHVuaWZpZWRBc0VxdWFsaXR5ID0gdHJ1ZTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGFuIGVxdWFsaXR5LmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlmaWVkQXNFcXVhbGl0eTtcbn1cblxuZnVuY3Rpb24gdW5pZnlBc0p1ZGdlbWVudChzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgdW5pZmllZEFzSnVkZ2VtZW50ID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudCA9IGp1ZGdlbWVudEZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChqdWRnZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIGp1ZGdlbWVudC4uLmApO1xuXG4gICAgICB1bmlmaWVkQXNKdWRnZW1lbnQgPSB0cnVlO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBqdWRnZW1lbnQuYCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaWZpZWRBc0p1ZGdlbWVudDtcbn1cblxuZnVuY3Rpb24gdW5pZnlBc1R5cGVBc3NlcnRpb24oc3RhdGVtZW50LCByZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHVuaWZpZWRBc1R5cGVBc3NlcnRpb24gPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgY29uc3QgdHlwZUFzc2VydGlvbiA9IHR5cGVBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAodHlwZUFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgdHlwZSBhc3NlcnRpb24uLi5gKTtcblxuICAgICAgdW5pZmllZEFzVHlwZUFzc2VydGlvbiA9IHRydWU7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHR5cGUgYXNzZXJ0aW9uLmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlmaWVkQXNUeXBlQXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB1bmlmeUFzUHJvcGVydHlBc3NlcnRpb24oc3RhdGVtZW50LCByZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHVuaWZpZWRBc1Byb3BlcnR5QXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uID0gcHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAocHJvcGVydHlBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHByb3BlcnR5IGFzc2VydGlvbi4uLmApO1xuXG4gICAgICBjb25zdCB0ZXJtID0gcHJvcGVydHlBc3NlcnRpb24uZ2V0VGVybSgpLFxuICAgICAgICAgICAgZXF1aXZhbGVuY2UgPSBjb250ZXh0LmZpbmRFcXVpdmFsZW5jZUJ5VGVybSh0ZXJtKTtcblxuICAgICAgaWYgKGVxdWl2YWxlbmNlICE9PSBudWxsKSB7XG4gICAgICAgIHVuaWZpZWRBc1Byb3BlcnR5QXNzZXJ0aW9uID0gZXF1aXZhbGVuY2Uuc29tZU90aGVyVGVybSh0ZXJtLCAodGVybSkgPT4geyAgLy8vXG4gICAgICAgICAgY29uc3QgcHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5QXNzZXJ0aW9uLmdldFByb3BlcnR5UmVsYXRpb24oKSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUFzc2VydGlvbk1hdGNoZXMgPSBjb250ZXh0Lm1hdGNoVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbik7XG5cbiAgICAgICAgICBpZiAocHJvcGVydHlBc3NlcnRpb25NYXRjaGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodW5pZmllZEFzUHJvcGVydHlBc3NlcnRpb24pIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgcHJvcGVydHkgYXNzZXJ0aW9uLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlmaWVkQXNQcm9wZXJ0eUFzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gdW5pZnlXaXRoUHJvb2ZTdGVwU3VicHJvb2ZzKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVkV2l0aFByb29mU3RlcHMgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgY29uc3QgcHJvb2ZTdGVwU3VicHJvb2ZzID0gY29udGV4dC5nZXRQcm9vZlN0ZXBTdWJwcm9vZnMoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkV2l0aFByb29mU3RlcHMgPSBzdGF0ZW1lbnQudW5pZnlXaXRoUHJvb2ZTdGVwU3VicHJvb2ZzKHByb29mU3RlcFN1YnByb29mcywgY29udGV4dCk7XG5cbiAgICB1bmlmaWVkV2l0aFByb29mU3RlcHMgPSBzdGF0ZW1lbnRVbmlmaWVkV2l0aFByb29mU3RlcHM7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHVuaWZpZWRXaXRoUHJvb2ZTdGVwcztcbn1cblxuY29uc3QgdW5pZnlNaXhpbnMgPSBbXG4gIHVuaWZ5QVdpdGhSdWxlLFxuICB1bmlmeUFXaXRoUmVmZXJlbmNlLFxuICB1bmlmeUFzU2F0aXNmeWluZ0Fzc2VydGlvbixcbiAgdW5pZnlBV2l0aEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlLFxuICB1bmlmeUFzRXF1YWxpdHksXG4gIHVuaWZ5QXNKdWRnZW1lbnQsXG4gIHVuaWZ5QXNUeXBlQXNzZXJ0aW9uLFxuICB1bmlmeUFzUHJvcGVydHlBc3NlcnRpb24sXG4gIHVuaWZ5V2l0aFByb29mU3RlcFN1YnByb29mc1xuXTtcblxuZXhwb3J0IGRlZmF1bHQgdW5pZnlNaXhpbnM7XG5cbiJdLCJuYW1lcyI6WyJ1bmlmeUFXaXRoUnVsZSIsInN0YXRlbWVudCIsInJlZmVyZW5jZSIsInN1YnN0aXR1dGlvbnMiLCJjb250ZXh0IiwidW5pZmllZFdpdGhSdWxlIiwicnVsZSIsImZpbmRSdWxlQnlSZWZlcmVuY2UiLCJydWxlU3RyaW5nIiwiZ2V0U3RyaW5nIiwic3RhdGVtZW50U3RyaW5nIiwidHJhY2UiLCJwcm9vZlN0ZXBTdWJwcm9vZnMiLCJnZXRQcm9vZlN0ZXBTdWJwcm9vZnMiLCJzdGF0ZW1lbnRBbmRQcm9vZlN0ZXBzVW5pZmllZCIsInVuaWZ5U3RhdGVtZW50QW5kUHJvb2ZTdGVwU3VicHJvb2ZzIiwiZGVidWciLCJ1bmlmeUFXaXRoUmVmZXJlbmNlIiwidW5pZmllZFdpdGhSZWZlcmVuY2UiLCJtZXRhdmFyaWFibGVWZXJpZmllZCIsInZlcmlmeU1ldGF2YXJpYWJsZSIsInJlZmVyZW5jZVN0cmluZyIsIm1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZSIsInNwZWNpZmljQ29udGV4dCIsInN0YXRlbWVudFN1YnN0aXR1dGlvbiIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsImZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb24iLCJhZGRTdWJzdGl0dXRpb24iLCJ1bmlmeUFzU2F0aXNmeWluZ0Fzc2VydGlvbiIsInVuaWZpZWRBc1NhdGlzZnlpbmdBc3NlcnRpb24iLCJzYXRpc2Z5aW5nQXNzZXJ0aW9uIiwic2F0aXNmeWluZ0Fzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUiLCJmaW5kQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlQnlSZWZlcmVuY2UiLCJnZXRSZWZlcmVuY2UiLCJheGlvbSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwiU3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCIsInVuaWZ5QXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIiwic3Vic3RpdHV0aW9uc01hdGNoIiwibWF0Y2hTdWJzdGl0dXRpb25zIiwidW5pZnlBV2l0aEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlIiwidW5pZmllZFdpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSIsImdlbmVyYWxTdWJzdGl0dXRpb25zIiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nIiwic3BlY2lmaWNTdWJzdGl0dXRpb25zIiwidW5pZnlBc0VxdWFsaXR5IiwidW5pZmllZEFzRXF1YWxpdHkiLCJlcXVhbGl0eSIsImVxdWFsaXR5RnJvbVN0YXRlbWVudCIsInVuaWZ5QXNKdWRnZW1lbnQiLCJ1bmlmaWVkQXNKdWRnZW1lbnQiLCJqdWRnZW1lbnQiLCJqdWRnZW1lbnRGcm9tU3RhdGVtZW50IiwidW5pZnlBc1R5cGVBc3NlcnRpb24iLCJ1bmlmaWVkQXNUeXBlQXNzZXJ0aW9uIiwidHlwZUFzc2VydGlvbiIsInR5cGVBc3NlcnRpb25Gcm9tU3RhdGVtZW50IiwidW5pZnlBc1Byb3BlcnR5QXNzZXJ0aW9uIiwidW5pZmllZEFzUHJvcGVydHlBc3NlcnRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbiIsInByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsInRlcm0iLCJnZXRUZXJtIiwiZXF1aXZhbGVuY2UiLCJmaW5kRXF1aXZhbGVuY2VCeVRlcm0iLCJzb21lT3RoZXJUZXJtIiwicHJvcGVydHlSZWxhdGlvbiIsImdldFByb3BlcnR5UmVsYXRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbk1hdGNoZXMiLCJtYXRjaFRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwidW5pZnlXaXRoUHJvb2ZTdGVwU3VicHJvb2ZzIiwidW5pZmllZFdpdGhQcm9vZlN0ZXBzIiwic3RhdGVtZW50VW5pZmllZFdpdGhQcm9vZlN0ZXBzIiwidW5pZnlNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXdRQTs7O2VBQUE7OztvRUF0UTBCO2dFQUNRO3VCQU1lOzs7Ozs7QUFFakQsU0FBU0EsZUFBZUMsU0FBUyxFQUFFQyxTQUFTLEVBQUVDLGFBQWEsRUFBRUMsT0FBTztJQUNsRSxJQUFJQyxrQkFBa0I7SUFFdEIsSUFBSUgsY0FBYyxNQUFNO1FBQ3RCLElBQU1JLE9BQU9GLFFBQVFHLG1CQUFtQixDQUFDTDtRQUV6QyxJQUFJSSxTQUFTLE1BQU07WUFDakIsSUFBTUUsYUFBYUYsS0FBS0csU0FBUyxJQUMzQkMsa0JBQWtCVCxVQUFVUSxTQUFTO1lBRTNDTCxRQUFRTyxLQUFLLENBQUMsQUFBQyxpQkFBd0RILE9BQXhDRSxpQkFBZ0IsMEJBQW1DLE9BQVhGLFlBQVc7WUFFbEYsSUFBTUkscUJBQXFCUixRQUFRUyxxQkFBcUIsSUFDbERDLGdDQUFnQ1IsS0FBS1MsbUNBQW1DLENBQUNkLFdBQVdXLG9CQUFvQlI7WUFFOUdDLGtCQUFrQlMsK0JBQWdDLEdBQUc7WUFFckQsSUFBSVQsaUJBQWlCO2dCQUNuQkQsUUFBUVksS0FBSyxDQUFDLEFBQUMsbUJBQTBEUixPQUF4Q0UsaUJBQWdCLDBCQUFtQyxPQUFYRixZQUFXO1lBQ3RGO1FBQ0Y7SUFDRjtJQUVBLE9BQU9IO0FBQ1Q7QUFFQSxTQUFTWSxvQkFBb0JoQixTQUFTLEVBQUVDLFNBQVMsRUFBRUMsYUFBYSxFQUFFQyxPQUFPO0lBQ3ZFLElBQUljLHVCQUF1QjtJQUUzQixJQUFJaEIsY0FBYyxNQUFNO1FBQ3RCLElBQU1p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