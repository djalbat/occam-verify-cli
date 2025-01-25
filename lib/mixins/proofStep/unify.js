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
        var axiomLemmaTheoremConjecture = context.findAxiomLemmaTheoremConjectureByReference(reference);
        if (axiomLemmaTheoremConjecture !== null) {
            var statementString = statement.getString(), axiomLemmaTheoremConjectureString = reference.getString();
            context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(axiomLemmaTheoremConjectureString, "' axiom, lemma, theorem or conjecture..."));
            var proofStepSubproofs = context.getProofStepSubproofs(), statementAndProofStepsUnified = axiomLemmaTheoremConjecture.unifyStatementAndProofStepSubproofs(statement, proofStepSubproofs, context);
            if (statementAndProofStepsUnified) {
                var metavariable = reference.getMetavariable(), specificContext = context, statementSubstitution = _statement.default.fromStatementAndMetavariable(statement, metavariable, context), substitution = statementSubstitution; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taXhpbnMvcHJvb2ZTdGVwL3VuaWZ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3RhdGVtZW50U3Vic3RpdHV0aW9uIGZyb20gXCIuLi8uLi9zdWJzdGl0dXRpb24vc3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IGVxdWFsaXR5RnJvbVN0YXRlbWVudCxcbiAgICAgICAgIGp1ZGdlbWVudEZyb21TdGF0ZW1lbnQsXG4gICAgICAgICB0eXBlQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCxcbiAgICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCxcbiAgICAgICAgIHNhdGlzZnlpbmdBc3NlcnRpb25Gcm9tU3RhdGVtZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmZ1bmN0aW9uIHVuaWZ5QVdpdGhSdWxlKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVkV2l0aFJ1bGUgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgY29uc3QgcnVsZSA9IGNvbnRleHQuZmluZFJ1bGVCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgaWYgKHJ1bGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSBydWxlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3J1bGVTdHJpbmd9JyBydWxlLi4uYCk7XG5cbiAgICAgIGNvbnN0IHByb29mU3RlcFN1YnByb29mcyA9IGNvbnRleHQuZ2V0UHJvb2ZTdGVwU3VicHJvb2ZzKCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRBbmRQcm9vZlN0ZXBzVW5pZmllZCA9IHJ1bGUudW5pZnlTdGF0ZW1lbnRBbmRQcm9vZlN0ZXBTdWJwcm9vZnMoc3RhdGVtZW50LCBwcm9vZlN0ZXBTdWJwcm9vZnMsIGNvbnRleHQpO1xuXG4gICAgICB1bmlmaWVkV2l0aFJ1bGUgPSBzdGF0ZW1lbnRBbmRQcm9vZlN0ZXBzVW5pZmllZDsgIC8vL1xuXG4gICAgICBpZiAodW5pZmllZFdpdGhSdWxlKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZS5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZmllZFdpdGhSdWxlO1xufVxuXG5mdW5jdGlvbiB1bmlmeUFXaXRoUmVmZXJlbmNlKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVkV2l0aFJlZmVyZW5jZSA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgIT09IG51bGwpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVWZXJpZmllZCA9IHJlZmVyZW5jZS52ZXJpZnlNZXRhdmFyaWFibGUoY29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gU3RhdGVtZW50U3Vic3RpdHV0aW9uLmZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uOyAvLy9cblxuICAgICAgc3Vic3RpdHV0aW9ucy5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICB1bmlmaWVkV2l0aFJlZmVyZW5jZSA9IHRydWU7XG5cbiAgICAgIGlmICh1bmlmaWVkV2l0aFJlZmVyZW5jZSkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlmaWVkV2l0aFJlZmVyZW5jZTtcbn1cblxuZnVuY3Rpb24gdW5pZnlBc1NhdGlzZnlpbmdBc3NlcnRpb24oc3RhdGVtZW50LCByZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHVuaWZpZWRBc1NhdGlzZnlpbmdBc3NlcnRpb24gPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2F0aXNmeWluZ0Fzc2VydGlvbiA9IHNhdGlzZnlpbmdBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoc2F0aXNmeWluZ0Fzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgc2F0aXNmeWluZyBhc3NlcnRpb24uLi5gKTtcblxuICAgICAgY29uc3QgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlID0gY29udGV4dC5maW5kQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgICAgaWYgKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSAhPT0gbnVsbCkge1xuICAgICAgICByZWZlcmVuY2UgPSBzYXRpc2Z5aW5nQXNzZXJ0aW9uLmdldFJlZmVyZW5jZSgpO1xuXG4gICAgICAgIGNvbnN0IGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkID0gYXhpb20udW5pZnlBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLCBjb250ZXh0KTtcblxuICAgICAgICB1bmlmaWVkQXNTYXRpc2Z5aW5nQXNzZXJ0aW9uID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZDsgIC8vL1xuICAgICAgfVxuXG4gICAgICBpZiAodW5pZmllZEFzU2F0aXNmeWluZ0Fzc2VydGlvbikge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBzYXRpc2Z5aW5nIGFzc2VydGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZmllZEFzU2F0aXNmeWluZ0Fzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gdW5pZnlBV2l0aEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVkV2l0aEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSA9IGNvbnRleHQuZmluZEF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICBpZiAoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7YXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nfScgYXhpb20sIGxlbW1hLCB0aGVvcmVtIG9yIGNvbmplY3R1cmUuLi5gKTtcblxuICAgICAgY29uc3QgcHJvb2ZTdGVwU3VicHJvb2ZzID0gY29udGV4dC5nZXRQcm9vZlN0ZXBTdWJwcm9vZnMoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudEFuZFByb29mU3RlcHNVbmlmaWVkID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLnVuaWZ5U3RhdGVtZW50QW5kUHJvb2ZTdGVwU3VicHJvb2ZzKHN0YXRlbWVudCwgcHJvb2ZTdGVwU3VicHJvb2ZzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudEFuZFByb29mU3RlcHNVbmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBTdGF0ZW1lbnRTdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbnMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICB1bmlmaWVkV2l0aEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHVuaWZpZWRXaXRoQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2F4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZ30nIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSBvciBjb25qZWN0dXJlLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlmaWVkV2l0aEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlO1xufVxuXG5mdW5jdGlvbiB1bmlmeUFzRXF1YWxpdHkoc3RhdGVtZW50LCByZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHVuaWZpZWRBc0VxdWFsaXR5ID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGVxdWFsaXR5ID0gZXF1YWxpdHlGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoZXF1YWxpdHkgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhbiBlcXVhbGl0eS4uLmApO1xuXG4gICAgICB1bmlmaWVkQXNFcXVhbGl0eSA9IHRydWU7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhbiBlcXVhbGl0eS5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZmllZEFzRXF1YWxpdHk7XG59XG5cbmZ1bmN0aW9uIHVuaWZ5QXNKdWRnZW1lbnQoc3RhdGVtZW50LCByZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHVuaWZpZWRBc0p1ZGdlbWVudCA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICBjb25zdCBqdWRnZW1lbnQgPSBqdWRnZW1lbnRGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoanVkZ2VtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBqdWRnZW1lbnQuLi5gKTtcblxuICAgICAgdW5pZmllZEFzSnVkZ2VtZW50ID0gdHJ1ZTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEganVkZ2VtZW50LmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlmaWVkQXNKdWRnZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHVuaWZ5QXNUeXBlQXNzZXJ0aW9uKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVkQXNUeXBlQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHR5cGVBc3NlcnRpb24gPSB0eXBlQXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHR5cGVBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHR5cGUgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICAgIHVuaWZpZWRBc1R5cGVBc3NlcnRpb24gPSB0cnVlO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSB0eXBlIGFzc2VydGlvbi5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZmllZEFzVHlwZUFzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gdW5pZnlBc1Byb3BlcnR5QXNzZXJ0aW9uKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVkQXNQcm9wZXJ0eUFzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvbiA9IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHByb3BlcnR5QXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBwcm9wZXJ0eSBhc3NlcnRpb24uLi5gKTtcblxuICAgICAgY29uc3QgdGVybSA9IHByb3BlcnR5QXNzZXJ0aW9uLmdldFRlcm0oKSxcbiAgICAgICAgICAgIGVxdWl2YWxlbmNlID0gY29udGV4dC5maW5kRXF1aXZhbGVuY2VCeVRlcm0odGVybSk7XG5cbiAgICAgIGlmIChlcXVpdmFsZW5jZSAhPT0gbnVsbCkge1xuICAgICAgICB1bmlmaWVkQXNQcm9wZXJ0eUFzc2VydGlvbiA9IGVxdWl2YWxlbmNlLnNvbWVPdGhlclRlcm0odGVybSwgKHRlcm0pID0+IHsgIC8vL1xuICAgICAgICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb24gPSBwcm9wZXJ0eUFzc2VydGlvbi5nZXRQcm9wZXJ0eVJlbGF0aW9uKCksXG4gICAgICAgICAgICAgICAgcHJvcGVydHlBc3NlcnRpb25NYXRjaGVzID0gY29udGV4dC5tYXRjaFRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24pO1xuXG4gICAgICAgICAgaWYgKHByb3BlcnR5QXNzZXJ0aW9uTWF0Y2hlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHVuaWZpZWRBc1Byb3BlcnR5QXNzZXJ0aW9uKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHByb3BlcnR5IGFzc2VydGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZmllZEFzUHJvcGVydHlBc3NlcnRpb247XG59XG5cbmZ1bmN0aW9uIHVuaWZ5V2l0aFByb29mU3RlcFN1YnByb29mcyhzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgdW5pZmllZFdpdGhQcm9vZlN0ZXBzID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHByb29mU3RlcFN1YnByb29mcyA9IGNvbnRleHQuZ2V0UHJvb2ZTdGVwU3VicHJvb2ZzKCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllZFdpdGhQcm9vZlN0ZXBzID0gc3RhdGVtZW50LnVuaWZ5V2l0aFByb29mU3RlcFN1YnByb29mcyhwcm9vZlN0ZXBTdWJwcm9vZnMsIGNvbnRleHQpO1xuXG4gICAgdW5pZmllZFdpdGhQcm9vZlN0ZXBzID0gc3RhdGVtZW50VW5pZmllZFdpdGhQcm9vZlN0ZXBzOyAvLy9cbiAgfVxuXG4gIHJldHVybiB1bmlmaWVkV2l0aFByb29mU3RlcHM7XG59XG5cbmNvbnN0IHVuaWZ5TWl4aW5zID0gW1xuICB1bmlmeUFXaXRoUnVsZSxcbiAgdW5pZnlBV2l0aFJlZmVyZW5jZSxcbiAgdW5pZnlBc1NhdGlzZnlpbmdBc3NlcnRpb24sXG4gIHVuaWZ5QVdpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSxcbiAgdW5pZnlBc0VxdWFsaXR5LFxuICB1bmlmeUFzSnVkZ2VtZW50LFxuICB1bmlmeUFzVHlwZUFzc2VydGlvbixcbiAgdW5pZnlBc1Byb3BlcnR5QXNzZXJ0aW9uLFxuICB1bmlmeVdpdGhQcm9vZlN0ZXBTdWJwcm9vZnNcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHVuaWZ5TWl4aW5zO1xuXG4iXSwibmFtZXMiOlsidW5pZnlBV2l0aFJ1bGUiLCJzdGF0ZW1lbnQiLCJyZWZlcmVuY2UiLCJzdWJzdGl0dXRpb25zIiwiY29udGV4dCIsInVuaWZpZWRXaXRoUnVsZSIsInJ1bGUiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlIiwicnVsZVN0cmluZyIsImdldFN0cmluZyIsInN0YXRlbWVudFN0cmluZyIsInRyYWNlIiwicHJvb2ZTdGVwU3VicHJvb2ZzIiwiZ2V0UHJvb2ZTdGVwU3VicHJvb2ZzIiwic3RhdGVtZW50QW5kUHJvb2ZTdGVwc1VuaWZpZWQiLCJ1bmlmeVN0YXRlbWVudEFuZFByb29mU3RlcFN1YnByb29mcyIsImRlYnVnIiwidW5pZnlBV2l0aFJlZmVyZW5jZSIsInVuaWZpZWRXaXRoUmVmZXJlbmNlIiwibWV0YXZhcmlhYmxlVmVyaWZpZWQiLCJ2ZXJpZnlNZXRhdmFyaWFibGUiLCJyZWZlcmVuY2VTdHJpbmciLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJzcGVjaWZpY0NvbnRleHQiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlIiwic3Vic3RpdHV0aW9uIiwiYWRkU3Vic3RpdHV0aW9uIiwidW5pZnlBc1NhdGlzZnlpbmdBc3NlcnRpb24iLCJ1bmlmaWVkQXNTYXRpc2Z5aW5nQXNzZXJ0aW9uIiwic2F0aXNmeWluZ0Fzc2VydGlvbiIsInNhdGlzZnlpbmdBc3NlcnRpb25Gcm9tU3RhdGVtZW50IiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIiwiZmluZEF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZUJ5UmVmZXJlbmNlIiwiZ2V0UmVmZXJlbmNlIiwiYXhpb20iLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsImF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVVuaWZpZWQiLCJ1bmlmeUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSIsInVuaWZ5QVdpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSIsInVuaWZpZWRXaXRoQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUiLCJheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmciLCJ1bmlmeUFzRXF1YWxpdHkiLCJ1bmlmaWVkQXNFcXVhbGl0eSIsImVxdWFsaXR5IiwiZXF1YWxpdHlGcm9tU3RhdGVtZW50IiwidW5pZnlBc0p1ZGdlbWVudCIsInVuaWZpZWRBc0p1ZGdlbWVudCIsImp1ZGdlbWVudCIsImp1ZGdlbWVudEZyb21TdGF0ZW1lbnQiLCJ1bmlmeUFzVHlwZUFzc2VydGlvbiIsInVuaWZpZWRBc1R5cGVBc3NlcnRpb24iLCJ0eXBlQXNzZXJ0aW9uIiwidHlwZUFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJ1bmlmeUFzUHJvcGVydHlBc3NlcnRpb24iLCJ1bmlmaWVkQXNQcm9wZXJ0eUFzc2VydGlvbiIsInByb3BlcnR5QXNzZXJ0aW9uIiwicHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50IiwidGVybSIsImdldFRlcm0iLCJlcXVpdmFsZW5jZSIsImZpbmRFcXVpdmFsZW5jZUJ5VGVybSIsInNvbWVPdGhlclRlcm0iLCJwcm9wZXJ0eVJlbGF0aW9uIiwiZ2V0UHJvcGVydHlSZWxhdGlvbiIsInByb3BlcnR5QXNzZXJ0aW9uTWF0Y2hlcyIsIm1hdGNoVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJ1bmlmeVdpdGhQcm9vZlN0ZXBTdWJwcm9vZnMiLCJ1bmlmaWVkV2l0aFByb29mU3RlcHMiLCJzdGF0ZW1lbnRVbmlmaWVkV2l0aFByb29mU3RlcHMiLCJ1bmlmeU1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMlBBOzs7ZUFBQTs7O2dFQXpQa0M7dUJBTWU7Ozs7OztBQUVqRCxTQUFTQSxlQUFlQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsYUFBYSxFQUFFQyxPQUFPO0lBQ2xFLElBQUlDLGtCQUFrQjtJQUV0QixJQUFJSCxjQUFjLE1BQU07UUFDdEIsSUFBTUksT0FBT0YsUUFBUUcsbUJBQW1CLENBQUNMO1FBRXpDLElBQUlJLFNBQVMsTUFBTTtZQUNqQixJQUFNRSxhQUFhRixLQUFLRyxTQUFTLElBQzNCQyxrQkFBa0JULFVBQVVRLFNBQVM7WUFFM0NMLFFBQVFPLEtBQUssQ0FBQyxBQUFDLGlCQUF3REgsT0FBeENFLGlCQUFnQiwwQkFBbUMsT0FBWEYsWUFBVztZQUVsRixJQUFNSSxxQkFBcUJSLFFBQVFTLHFCQUFxQixJQUNsREMsZ0NBQWdDUixLQUFLUyxtQ0FBbUMsQ0FBQ2QsV0FBV1csb0JBQW9CUjtZQUU5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