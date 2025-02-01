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
                var axiom = context.findAxiomByReference(reference), axiomLemmaTheoremConjectureUnified = axiom.unifyAxiomLemmaTheoremConjecture(axiomLemmaTheoremConjecture, context);
                unifiedAsSatisfyingAssertion = axiomLemmaTheoremConjectureUnified; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taXhpbnMvcHJvb2ZTdGVwL3VuaWZ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9ucyBmcm9tIFwiLi4vLi4vc3Vic3RpdHV0aW9uc1wiO1xuaW1wb3J0IFN0YXRlbWVudFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vLi4vc3Vic3RpdHV0aW9uL3N0YXRlbWVudFwiO1xuXG5pbXBvcnQgeyBlcXVhbGl0eUZyb21TdGF0ZW1lbnQsXG4gICAgICAgICBqdWRnZW1lbnRGcm9tU3RhdGVtZW50LFxuICAgICAgICAgdHlwZUFzc2VydGlvbkZyb21TdGF0ZW1lbnQsXG4gICAgICAgICBwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnQsXG4gICAgICAgICBzYXRpc2Z5aW5nQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5mdW5jdGlvbiB1bmlmeUFXaXRoUnVsZShzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgdW5pZmllZFdpdGhSdWxlID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHJ1bGUgPSBjb250ZXh0LmZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIGlmIChydWxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBydWxlU3RyaW5nID0gcnVsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZS4uLmApO1xuXG4gICAgICBjb25zdCBwcm9vZlN0ZXBTdWJwcm9vZnMgPSBjb250ZXh0LmdldFByb29mU3RlcFN1YnByb29mcygpLFxuICAgICAgICAgICAgc3RhdGVtZW50QW5kUHJvb2ZTdGVwc1VuaWZpZWQgPSBydWxlLnVuaWZ5U3RhdGVtZW50QW5kUHJvb2ZTdGVwU3VicHJvb2ZzKHN0YXRlbWVudCwgcHJvb2ZTdGVwU3VicHJvb2ZzLCBjb250ZXh0KTtcblxuICAgICAgdW5pZmllZFdpdGhSdWxlID0gc3RhdGVtZW50QW5kUHJvb2ZTdGVwc1VuaWZpZWQ7ICAvLy9cblxuICAgICAgaWYgKHVuaWZpZWRXaXRoUnVsZSkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaWZpZWRXaXRoUnVsZTtcbn1cblxuZnVuY3Rpb24gdW5pZnlBV2l0aFJlZmVyZW5jZShzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgdW5pZmllZFdpdGhSZWZlcmVuY2UgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSByZWZlcmVuY2UudmVyaWZ5TWV0YXZhcmlhYmxlKGNvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IFN0YXRlbWVudFN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgIHN1YnN0aXR1dGlvbnMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgdW5pZmllZFdpdGhSZWZlcmVuY2UgPSB0cnVlO1xuXG4gICAgICBpZiAodW5pZmllZFdpdGhSZWZlcmVuY2UpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZmllZFdpdGhSZWZlcmVuY2U7XG59XG5cbmZ1bmN0aW9uIHVuaWZ5QXNTYXRpc2Z5aW5nQXNzZXJ0aW9uKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVkQXNTYXRpc2Z5aW5nQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNhdGlzZnlpbmdBc3NlcnRpb24gPSBzYXRpc2Z5aW5nQXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHNhdGlzZnlpbmdBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHNhdGlzZnlpbmcgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICAgIGNvbnN0IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSA9IGNvbnRleHQuZmluZEF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICAgIGlmIChheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUgIT09IG51bGwpIHtcbiAgICAgICAgcmVmZXJlbmNlID0gc2F0aXNmeWluZ0Fzc2VydGlvbi5nZXRSZWZlcmVuY2UoKTtcblxuICAgICAgICBjb25zdCBheGlvbSA9IGNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCA9IGF4aW9tLnVuaWZ5QXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSwgY29udGV4dCk7XG5cbiAgICAgICAgdW5pZmllZEFzU2F0aXNmeWluZ0Fzc2VydGlvbiA9IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVVuaWZpZWQ7ICAvLy9cbiAgICAgIH1cblxuICAgICAgaWYgKHVuaWZpZWRBc1NhdGlzZnlpbmdBc3NlcnRpb24pIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgc2F0aXNmeWluZyBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaWZpZWRBc1NhdGlzZnlpbmdBc3NlcnRpb247XG59XG5cbmZ1bmN0aW9uIHVuaWZ5QVdpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZShzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgdW5pZmllZFdpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgIT09IG51bGwpIHtcbiAgICBjb25zdCBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUgPSBjb250ZXh0LmZpbmRBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9uczsgLy8vXG5cbiAgICBpZiAoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7YXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nfScgYXhpb20sIGxlbW1hLCB0aGVvcmVtIG9yIGNvbmplY3R1cmUuLi5gKTtcblxuICAgICAgY29uc3QgcHJvb2ZTdGVwU3VicHJvb2ZzID0gY29udGV4dC5nZXRQcm9vZlN0ZXBTdWJwcm9vZnMoKSxcbiAgICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKTtcblxuICAgICAgc3Vic3RpdHV0aW9ucyA9IHNwZWNpZmljU3Vic3RpdHV0aW9uczsgIC8vL1xuXG4gICAgICBjb25zdCBzdGF0ZW1lbnRBbmRQcm9vZlN0ZXBzVW5pZmllZCA9IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZS51bmlmeVN0YXRlbWVudEFuZFByb29mU3RlcFN1YnByb29mcyhzdGF0ZW1lbnQsIHByb29mU3RlcFN1YnByb29mcywgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRBbmRQcm9vZlN0ZXBzVW5pZmllZCkge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gU3RhdGVtZW50U3Vic3RpdHV0aW9uLmZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgICBzdWJzdGl0dXRpb25zID0gZ2VuZXJhbFN1YnN0aXR1dGlvbnM7IC8vL1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbnMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICB1bmlmaWVkV2l0aEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHVuaWZpZWRXaXRoQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2F4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZ30nIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSBvciBjb25qZWN0dXJlLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlmaWVkV2l0aEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlO1xufVxuXG5mdW5jdGlvbiB1bmlmeUFzRXF1YWxpdHkoc3RhdGVtZW50LCByZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHVuaWZpZWRBc0VxdWFsaXR5ID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGVxdWFsaXR5ID0gZXF1YWxpdHlGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoZXF1YWxpdHkgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhbiBlcXVhbGl0eS4uLmApO1xuXG4gICAgICB1bmlmaWVkQXNFcXVhbGl0eSA9IHRydWU7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhbiBlcXVhbGl0eS5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZmllZEFzRXF1YWxpdHk7XG59XG5cbmZ1bmN0aW9uIHVuaWZ5QXNKdWRnZW1lbnQoc3RhdGVtZW50LCByZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHVuaWZpZWRBc0p1ZGdlbWVudCA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICBjb25zdCBqdWRnZW1lbnQgPSBqdWRnZW1lbnRGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoanVkZ2VtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBqdWRnZW1lbnQuLi5gKTtcblxuICAgICAgdW5pZmllZEFzSnVkZ2VtZW50ID0gdHJ1ZTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEganVkZ2VtZW50LmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlmaWVkQXNKdWRnZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHVuaWZ5QXNUeXBlQXNzZXJ0aW9uKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVkQXNUeXBlQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHR5cGVBc3NlcnRpb24gPSB0eXBlQXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHR5cGVBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHR5cGUgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICAgIHVuaWZpZWRBc1R5cGVBc3NlcnRpb24gPSB0cnVlO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSB0eXBlIGFzc2VydGlvbi5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZmllZEFzVHlwZUFzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gdW5pZnlBc1Byb3BlcnR5QXNzZXJ0aW9uKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVkQXNQcm9wZXJ0eUFzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvbiA9IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHByb3BlcnR5QXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBwcm9wZXJ0eSBhc3NlcnRpb24uLi5gKTtcblxuICAgICAgY29uc3QgdGVybSA9IHByb3BlcnR5QXNzZXJ0aW9uLmdldFRlcm0oKSxcbiAgICAgICAgICAgIGVxdWl2YWxlbmNlID0gY29udGV4dC5maW5kRXF1aXZhbGVuY2VCeVRlcm0odGVybSk7XG5cbiAgICAgIGlmIChlcXVpdmFsZW5jZSAhPT0gbnVsbCkge1xuICAgICAgICB1bmlmaWVkQXNQcm9wZXJ0eUFzc2VydGlvbiA9IGVxdWl2YWxlbmNlLnNvbWVPdGhlclRlcm0odGVybSwgKHRlcm0pID0+IHsgIC8vL1xuICAgICAgICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb24gPSBwcm9wZXJ0eUFzc2VydGlvbi5nZXRQcm9wZXJ0eVJlbGF0aW9uKCksXG4gICAgICAgICAgICAgICAgcHJvcGVydHlBc3NlcnRpb25NYXRjaGVzID0gY29udGV4dC5tYXRjaFRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24pO1xuXG4gICAgICAgICAgaWYgKHByb3BlcnR5QXNzZXJ0aW9uTWF0Y2hlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHVuaWZpZWRBc1Byb3BlcnR5QXNzZXJ0aW9uKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHByb3BlcnR5IGFzc2VydGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZmllZEFzUHJvcGVydHlBc3NlcnRpb247XG59XG5cbmZ1bmN0aW9uIHVuaWZ5V2l0aFByb29mU3RlcFN1YnByb29mcyhzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgdW5pZmllZFdpdGhQcm9vZlN0ZXBzID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHByb29mU3RlcFN1YnByb29mcyA9IGNvbnRleHQuZ2V0UHJvb2ZTdGVwU3VicHJvb2ZzKCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllZFdpdGhQcm9vZlN0ZXBzID0gc3RhdGVtZW50LnVuaWZ5V2l0aFByb29mU3RlcFN1YnByb29mcyhwcm9vZlN0ZXBTdWJwcm9vZnMsIGNvbnRleHQpO1xuXG4gICAgdW5pZmllZFdpdGhQcm9vZlN0ZXBzID0gc3RhdGVtZW50VW5pZmllZFdpdGhQcm9vZlN0ZXBzOyAvLy9cbiAgfVxuXG4gIHJldHVybiB1bmlmaWVkV2l0aFByb29mU3RlcHM7XG59XG5cbmNvbnN0IHVuaWZ5TWl4aW5zID0gW1xuICB1bmlmeUFXaXRoUnVsZSxcbiAgdW5pZnlBV2l0aFJlZmVyZW5jZSxcbiAgdW5pZnlBc1NhdGlzZnlpbmdBc3NlcnRpb24sXG4gIHVuaWZ5QVdpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSxcbiAgdW5pZnlBc0VxdWFsaXR5LFxuICB1bmlmeUFzSnVkZ2VtZW50LFxuICB1bmlmeUFzVHlwZUFzc2VydGlvbixcbiAgdW5pZnlBc1Byb3BlcnR5QXNzZXJ0aW9uLFxuICB1bmlmeVdpdGhQcm9vZlN0ZXBTdWJwcm9vZnNcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHVuaWZ5TWl4aW5zO1xuXG4iXSwibmFtZXMiOlsidW5pZnlBV2l0aFJ1bGUiLCJzdGF0ZW1lbnQiLCJyZWZlcmVuY2UiLCJzdWJzdGl0dXRpb25zIiwiY29udGV4dCIsInVuaWZpZWRXaXRoUnVsZSIsInJ1bGUiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlIiwicnVsZVN0cmluZyIsImdldFN0cmluZyIsInN0YXRlbWVudFN0cmluZyIsInRyYWNlIiwicHJvb2ZTdGVwU3VicHJvb2ZzIiwiZ2V0UHJvb2ZTdGVwU3VicHJvb2ZzIiwic3RhdGVtZW50QW5kUHJvb2ZTdGVwc1VuaWZpZWQiLCJ1bmlmeVN0YXRlbWVudEFuZFByb29mU3RlcFN1YnByb29mcyIsImRlYnVnIiwidW5pZnlBV2l0aFJlZmVyZW5jZSIsInVuaWZpZWRXaXRoUmVmZXJlbmNlIiwibWV0YXZhcmlhYmxlVmVyaWZpZWQiLCJ2ZXJpZnlNZXRhdmFyaWFibGUiLCJyZWZlcmVuY2VTdHJpbmciLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJzcGVjaWZpY0NvbnRleHQiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlIiwic3Vic3RpdHV0aW9uIiwiYWRkU3Vic3RpdHV0aW9uIiwidW5pZnlBc1NhdGlzZnlpbmdBc3NlcnRpb24iLCJ1bmlmaWVkQXNTYXRpc2Z5aW5nQXNzZXJ0aW9uIiwic2F0aXNmeWluZ0Fzc2VydGlvbiIsInNhdGlzZnlpbmdBc3NlcnRpb25Gcm9tU3RhdGVtZW50IiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIiwiZmluZEF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZUJ5UmVmZXJlbmNlIiwiZ2V0UmVmZXJlbmNlIiwiYXhpb20iLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsImF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVVuaWZpZWQiLCJ1bmlmeUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSIsInVuaWZ5QVdpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSIsInVuaWZpZWRXaXRoQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUiLCJnZW5lcmFsU3Vic3RpdHV0aW9ucyIsImF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZyIsInNwZWNpZmljU3Vic3RpdHV0aW9ucyIsIlN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsInVuaWZ5QXNFcXVhbGl0eSIsInVuaWZpZWRBc0VxdWFsaXR5IiwiZXF1YWxpdHkiLCJlcXVhbGl0eUZyb21TdGF0ZW1lbnQiLCJ1bmlmeUFzSnVkZ2VtZW50IiwidW5pZmllZEFzSnVkZ2VtZW50IiwianVkZ2VtZW50IiwianVkZ2VtZW50RnJvbVN0YXRlbWVudCIsInVuaWZ5QXNUeXBlQXNzZXJ0aW9uIiwidW5pZmllZEFzVHlwZUFzc2VydGlvbiIsInR5cGVBc3NlcnRpb24iLCJ0eXBlQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsInVuaWZ5QXNQcm9wZXJ0eUFzc2VydGlvbiIsInVuaWZpZWRBc1Byb3BlcnR5QXNzZXJ0aW9uIiwicHJvcGVydHlBc3NlcnRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJ0ZXJtIiwiZ2V0VGVybSIsImVxdWl2YWxlbmNlIiwiZmluZEVxdWl2YWxlbmNlQnlUZXJtIiwic29tZU90aGVyVGVybSIsInByb3BlcnR5UmVsYXRpb24iLCJnZXRQcm9wZXJ0eVJlbGF0aW9uIiwicHJvcGVydHlBc3NlcnRpb25NYXRjaGVzIiwibWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsInVuaWZ5V2l0aFByb29mU3RlcFN1YnByb29mcyIsInVuaWZpZWRXaXRoUHJvb2ZTdGVwcyIsInN0YXRlbWVudFVuaWZpZWRXaXRoUHJvb2ZTdGVwcyIsInVuaWZ5TWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFtUUE7OztlQUFBOzs7b0VBalEwQjtnRUFD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