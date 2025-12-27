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
var _structure = /*#__PURE__*/ _interop_require_default(require("../../structure"));
var _context = require("../../utilities/context");
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
            var StatementSubstitution = _structure.default.StatementSubstitution, metavariable = reference.getMetavariable(), statementSubstitution = StatementSubstitution.fromStatementAndMetavariable(statement, metavariable, context), substitution = statementSubstitution; ///
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
    satisfiesAssertion = (0, _context.satisfiesAssertionFromStatement)(statement, context);
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
                        var Substitutions = _structure.default.Substitutions, substitutions1 = Substitutions.fromNothing(), axiomLemmaTheoremOrConjectureUnifies = axiom.unifyAxiomLemmaTheoremOrConjecture(axiomLemmaTheoremOrConjecture, substitutions1, context);
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
        var Substitutions = _structure.default.Substitutions, axiomLemmaTheoremOrConjecture = context.findAxiomLemmaTheoremOrConjectureByReference(reference), generalSubstitutions = substitutions; ///
        if (axiomLemmaTheoremOrConjecture !== null) {
            var statementString = statement.getString(), axiomLemmaTheoremOrConjectureString = reference.getString();
            context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(axiomLemmaTheoremOrConjectureString, "' axiom, lemma, theorem or conjecture..."));
            var stepsOrSubproofs = context.getStepsOrSubproofs();
            substitutions = Substitutions.fromNothing();
            var statementAndStepsUnify = axiomLemmaTheoremOrConjecture.unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, substitutions, context);
            if (statementAndStepsUnify) {
                var StatementSubstitution = _structure.default.StatementSubstitution, metavariable = reference.getMetavariable(), statementSubstitution = StatementSubstitution.fromStatementAndMetavariable(statement, metavariable, context), substitution = statementSubstitution; ///
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
        var equality = (0, _context.equalityFromStatement)(statement, context);
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
        var judgement = (0, _context.judgementFromStatement)(statement, context);
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
        var typeAssertion = (0, _context.typeAssertionFromStatement)(statement, context);
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
        var propertyAssertion = (0, _context.propertyAssertionFromStatement)(statement, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taXhpbnMvc3RlcC91bmlmeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBzdHJ1Y3R1cmUgZnJvbSBcIi4uLy4uL3N0cnVjdHVyZVwiO1xuXG5pbXBvcnQgeyBlcXVhbGl0eUZyb21TdGF0ZW1lbnQsXG4gICAgICAgICBqdWRnZW1lbnRGcm9tU3RhdGVtZW50LFxuICAgICAgICAgdHlwZUFzc2VydGlvbkZyb21TdGF0ZW1lbnQsXG4gICAgICAgICBwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnQsXG4gICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RhdGVtZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmNvbnN0IHsgYmFja3dhcmRzU29tZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIHVuaWZ5V2l0aFJ1bGUoc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgdW5pZmllc1dpdGhSdWxlID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHJ1bGUgPSBjb250ZXh0LmZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIGlmIChydWxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBydWxlU3RyaW5nID0gcnVsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZS4uLmApO1xuXG4gICAgICBjb25zdCBzdGVwc09yU3VicHJvb2ZzID0gY29udGV4dC5nZXRTdGVwc09yU3VicHJvb2ZzKCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRBbmRTdGVwc1VuaWZ5ID0gcnVsZS51bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMoc3RhdGVtZW50LCBzdGVwc09yU3VicHJvb2ZzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudEFuZFN0ZXBzVW5pZnkpIHtcbiAgICAgICAgdW5pZmllc1dpdGhSdWxlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHVuaWZpZXNXaXRoUnVsZSkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaWZpZXNXaXRoUnVsZTtcbn1cblxuZnVuY3Rpb24gdW5pZnlXaXRoUmVmZXJlbmNlKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHVuaWZpZXNXaXRoUmVmZXJlbmNlID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVZlcmlmaWVzID0gcmVmZXJlbmNlLnZlcmlmeU1ldGF2YXJpYWJsZShjb250ZXh0KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVWZXJpZmllcykge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgICBjb25zdCB7IFN0YXRlbWVudFN1YnN0aXR1dGlvbiB9ID0gc3RydWN0dXJlLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gU3RhdGVtZW50U3Vic3RpdHV0aW9uLmZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uOyAvLy9cblxuICAgICAgc3Vic3RpdHV0aW9ucy5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgdW5pZmllc1dpdGhSZWZlcmVuY2UgPSB0cnVlO1xuXG4gICAgICBpZiAodW5pZmllc1dpdGhSZWZlcmVuY2UpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZmllc1dpdGhSZWZlcmVuY2U7XG59XG5cbmZ1bmN0aW9uIHVuaWZ5QXNTYXRpc2ZpZXNBc3NlcnRpb24oc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgdW5pZmllc0FzU2F0aXNmaWVzQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gIGlmIChzYXRpc2ZpZXNBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgc2F0aXNmaWVzIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICBhc3NpZ25tZW50cyA9IG51bGw7XG5cbiAgICBzYXRpc2ZpZXNBc3NlcnRpb24udmVyaWZ5U2lnbmF0dXJlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RlcHNPclN1YnByb29mcyA9IGNvbnRleHQuZ2V0U3RlcHNPclN1YnByb29mcygpO1xuXG4gICAgICB1bmlmaWVzQXNTYXRpc2ZpZXNBc3NlcnRpb24gPSBiYWNrd2FyZHNTb21lKHN0ZXBzT3JTdWJwcm9vZnMsIChzdGVwc09yU3VicHJvb2YpID0+IHtcbiAgICAgICAgY29uc3Qgc3RlcE9yU3ViUHJvb2ZVbmlmaWVzV0l0aFNhdGlzZmllc0Fzc2VydGlvbiA9IHN0ZXBzT3JTdWJwcm9vZi51bmlmeVdpdGhTYXRpc2ZpZXNBc3NlcnRpb24oc2F0aXNmaWVzQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RlcE9yU3ViUHJvb2ZVbmlmaWVzV0l0aFNhdGlzZmllc0Fzc2VydGlvbikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUgPSBjb250ZXh0LmZpbmRBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICAgIGlmIChheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSAhPT0gbnVsbCkge1xuICAgICAgICByZWZlcmVuY2UgPSBzYXRpc2ZpZXNBc3NlcnRpb24uZ2V0UmVmZXJlbmNlKCk7XG5cbiAgICAgICAgY29uc3QgYXhpb20gPSBjb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICAgICAgaWYgKGF4aW9tICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3Qgc2F0aXNmaWFibGUgPSBheGlvbS5pc1NhdGlzZmlhYmxlKCk7XG5cbiAgICAgICAgICBpZiAoc2F0aXNmaWFibGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgU3Vic3RpdHV0aW9ucyB9ID0gc3RydWN0dXJlLFxuICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICAgICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlVW5pZmllcyA9IGF4aW9tLnVuaWZ5QXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUoYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAoYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVVbmlmaWVzKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNDb3JyZWxhdGVzID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvbnNDb3JyZWxhdGVzKSB7XG4gICAgICAgICAgICAgICAgdW5pZmllc0FzU2F0aXNmaWVzQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBheGlvbVN0cmluZyA9IGF4aW9tLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKGBDYW5ub3QgdW5pZnkgd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBiZWNhdXNlIGl0IGlzIG5vdCBzYXRpc2ZpYWJsZS5gKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1bmlmaWVzQXNTYXRpc2ZpZXNBc3NlcnRpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHNhdGlzZmllcyBhc3NlcnRpb24uYCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaWZpZXNBc1NhdGlzZmllc0Fzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gdW5pZnlXaXRoQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUoc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgdW5pZmllc1dpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFN1YnN0aXR1dGlvbnMgfSA9IHN0cnVjdHVyZSxcbiAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSA9IGNvbnRleHQuZmluZEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICBnZW5lcmFsU3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnM7IC8vL1xuXG4gICAgaWYgKGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVN0cmluZ30nIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSBvciBjb25qZWN0dXJlLi4uYCk7XG5cbiAgICAgIGNvbnN0IHN0ZXBzT3JTdWJwcm9vZnMgPSBjb250ZXh0LmdldFN0ZXBzT3JTdWJwcm9vZnMoKTtcblxuICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKTtcblxuICAgICAgY29uc3Qgc3RhdGVtZW50QW5kU3RlcHNVbmlmeSA9IGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlLnVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyhzdGF0ZW1lbnQsIHN0ZXBzT3JTdWJwcm9vZnMsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50QW5kU3RlcHNVbmlmeSkge1xuICAgICAgICBjb25zdCB7IFN0YXRlbWVudFN1YnN0aXR1dGlvbiB9ID0gc3RydWN0dXJlLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IFN0YXRlbWVudFN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgc3Vic3RpdHV0aW9ucyA9IGdlbmVyYWxTdWJzdGl0dXRpb25zOyAvLy9cblxuICAgICAgICBzdWJzdGl0dXRpb25zLmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIHVuaWZpZXNXaXRoQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodW5pZmllc1dpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7YXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVTdHJpbmd9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZS5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZmllc1dpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZTtcbn1cblxuZnVuY3Rpb24gdW5pZnlBRXF1YWxpdHkoc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgdW5pZmllc0FFcXVhbGl0eSA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICBjb25zdCBlcXVhbGl0eSA9IGVxdWFsaXR5RnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGVxdWFsaXR5ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYW4gZXF1YWxpdHkuLi5gKTtcblxuICAgICAgY29uc3QgZXF1YWxpdHlFcXVhbCA9IGVxdWFsaXR5LmlzRXF1YWwoY29udGV4dCk7XG5cbiAgICAgIGlmIChlcXVhbGl0eUVxdWFsKSB7XG4gICAgICAgIHVuaWZpZXNBRXF1YWxpdHkgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodW5pZmllc0FFcXVhbGl0eSkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYW4gZXF1YWxpdHkuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaWZpZXNBRXF1YWxpdHk7XG59XG5cbmZ1bmN0aW9uIHVuaWZ5QXNKdWRnZW1lbnQoc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgdW5pZmllc0FzSnVkZ2VtZW50ID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudCA9IGp1ZGdlbWVudEZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChqdWRnZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIGp1ZGdlbWVudC4uLmApO1xuXG4gICAgICB1bmlmaWVzQXNKdWRnZW1lbnQgPSB0cnVlO1xuXG4gICAgICBpZiAodW5pZmllc0FzSnVkZ2VtZW50KSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIGp1ZGdlbWVudC5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZmllc0FzSnVkZ2VtZW50O1xufVxuXG5mdW5jdGlvbiB1bmlmeUFzVHlwZUFzc2VydGlvbihzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVzQXNUeXBlQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHR5cGVBc3NlcnRpb24gPSB0eXBlQXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHR5cGVBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHR5cGUgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICAgIHVuaWZpZXNBc1R5cGVBc3NlcnRpb24gPSB0cnVlO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSB0eXBlIGFzc2VydGlvbi5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZmllc0FzVHlwZUFzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gdW5pZnlBc1Byb3BlcnR5QXNzZXJ0aW9uKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHVuaWZpZXNBc1Byb3BlcnR5QXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uID0gcHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAocHJvcGVydHlBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHByb3BlcnR5IGFzc2VydGlvbi4uLmApO1xuXG4gICAgICBjb25zdCB0ZXJtID0gcHJvcGVydHlBc3NlcnRpb24uZ2V0VGVybSgpLFxuICAgICAgICAgICAgZXF1aXZhbGVuY2UgPSBjb250ZXh0LmZpbmRFcXVpdmFsZW5jZUJ5VGVybSh0ZXJtKTtcblxuICAgICAgaWYgKGVxdWl2YWxlbmNlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uTWF0Y2hlcyA9IGVxdWl2YWxlbmNlLnNvbWVPdGhlclRlcm0odGVybSwgKHRlcm0pID0+IHsgIC8vL1xuICAgICAgICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb24gPSBwcm9wZXJ0eUFzc2VydGlvbi5nZXRQcm9wZXJ0eVJlbGF0aW9uKCksXG4gICAgICAgICAgICAgICAgcHJvcGVydHlBc3NlcnRpb25NYXRjaGVzID0gY29udGV4dC5tYXRjaFRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24pO1xuXG4gICAgICAgICAgaWYgKHByb3BlcnR5QXNzZXJ0aW9uTWF0Y2hlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocHJvcGVydHlBc3NlcnRpb25NYXRjaGVzKSB7XG4gICAgICAgICAgdW5pZmllc0FzUHJvcGVydHlBc3NlcnRpb24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh1bmlmaWVzQXNQcm9wZXJ0eUFzc2VydGlvbikge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBwcm9wZXJ0eSBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaWZpZXNBc1Byb3BlcnR5QXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB1bmlmeVdpdGhTYXRpc2ZpZXNBc3NlcnRpb24oc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSBmYWxzZTtcblxuICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RlcHNPclN1YnByb29mcyA9IGNvbnRleHQuZ2V0U3RlcHNPclN1YnByb29mcygpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSBzYXRpc2ZpZXNBc3NlcnRpb24udW5pZnlTdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzKHN0YXRlbWVudCwgc3RlcHNPclN1YnByb29mcywgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gZXF1YXRlV2l0aFN0ZXBzT3JTdWJwcm9vZnMoc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgdW5pZmllc1dpdGhTdGVwT3JTdWJwcm9vZnMgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgY29uc3Qgc3RlcHNPclN1YnByb29mcyA9IGNvbnRleHQuZ2V0U3RlcHNPclN1YnByb29mcygpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoU3RlcHMgPSBzdGF0ZW1lbnQuZXF1YXRlV2l0aFN0ZXBzT3JTdWJwcm9vZnMoc3RlcHNPclN1YnByb29mcywgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllc1dpdGhTdGVwcykge1xuICAgICAgdW5pZmllc1dpdGhTdGVwT3JTdWJwcm9vZnMgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlmaWVzV2l0aFN0ZXBPclN1YnByb29mcztcbn1cblxuY29uc3QgdW5pZnlNaXhpbnMgPSBbXG4gIHVuaWZ5V2l0aFJ1bGUsXG4gIHVuaWZ5V2l0aFJlZmVyZW5jZSxcbiAgdW5pZnlBc1NhdGlzZmllc0Fzc2VydGlvbixcbiAgdW5pZnlXaXRoQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUsXG4gIHVuaWZ5QUVxdWFsaXR5LFxuICB1bmlmeUFzSnVkZ2VtZW50LFxuICB1bmlmeUFzVHlwZUFzc2VydGlvbixcbiAgdW5pZnlBc1Byb3BlcnR5QXNzZXJ0aW9uLFxuICB1bmlmeVdpdGhTYXRpc2ZpZXNBc3NlcnRpb24sXG4gIGVxdWF0ZVdpdGhTdGVwc09yU3VicHJvb2ZzXG5dO1xuXG5leHBvcnQgZGVmYXVsdCB1bmlmeU1peGlucztcblxuIl0sIm5hbWVzIjpbImJhY2t3YXJkc1NvbWUiLCJhcnJheVV0aWxpdGllcyIsInVuaWZ5V2l0aFJ1bGUiLCJzdGF0ZW1lbnQiLCJyZWZlcmVuY2UiLCJzYXRpc2ZpZXNBc3NlcnRpb24iLCJzdWJzdGl0dXRpb25zIiwiY29udGV4dCIsInVuaWZpZXNXaXRoUnVsZSIsInJ1bGUiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlIiwicnVsZVN0cmluZyIsImdldFN0cmluZyIsInN0YXRlbWVudFN0cmluZyIsInRyYWNlIiwic3RlcHNPclN1YnByb29mcyIsImdldFN0ZXBzT3JTdWJwcm9vZnMiLCJzdGF0ZW1lbnRBbmRTdGVwc1VuaWZ5IiwidW5pZnlTdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzIiwiZGVidWciLCJ1bmlmeVdpdGhSZWZlcmVuY2UiLCJ1bmlmaWVzV2l0aFJlZmVyZW5jZSIsIm1ldGF2YXJpYWJsZVZlcmlmaWVzIiwidmVyaWZ5TWV0YXZhcmlhYmxlIiwicmVmZXJlbmNlU3RyaW5nIiwiU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwic3RydWN0dXJlIiwibWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uIiwiZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSIsInN1YnN0aXR1dGlvbiIsImFkZFN1YnN0aXR1dGlvbiIsInVuaWZ5QXNTYXRpc2ZpZXNBc3NlcnRpb24iLCJ1bmlmaWVzQXNTYXRpc2ZpZXNBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RhdGVtZW50Iiwic3RhdGVkIiwiYXNzaWdubWVudHMiLCJ2ZXJpZnlTaWduYXR1cmUiLCJzdGVwc09yU3VicHJvb2YiLCJzdGVwT3JTdWJQcm9vZlVuaWZpZXNXSXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwidW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwiYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUiLCJmaW5kQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVCeVJlZmVyZW5jZSIsImdldFJlZmVyZW5jZSIsImF4aW9tIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJzYXRpc2ZpYWJsZSIsImlzU2F0aXNmaWFibGUiLCJTdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVVuaWZpZXMiLCJ1bmlmeUF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlIiwic3Vic3RpdHV0aW9uc0NvcnJlbGF0ZXMiLCJjb3JyZWxhdGVTdWJzdGl0dXRpb25zIiwiYXhpb21TdHJpbmciLCJ1bmlmeVdpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSIsInVuaWZpZXNXaXRoQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUiLCJnZW5lcmFsU3Vic3RpdHV0aW9ucyIsImF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlU3RyaW5nIiwidW5pZnlBRXF1YWxpdHkiLCJ1bmlmaWVzQUVxdWFsaXR5IiwiZXF1YWxpdHkiLCJlcXVhbGl0eUZyb21TdGF0ZW1lbnQiLCJlcXVhbGl0eUVxdWFsIiwiaXNFcXVhbCIsInVuaWZ5QXNKdWRnZW1lbnQiLCJ1bmlmaWVzQXNKdWRnZW1lbnQiLCJqdWRnZW1lbnQiLCJqdWRnZW1lbnRGcm9tU3RhdGVtZW50IiwidW5pZnlBc1R5cGVBc3NlcnRpb24iLCJ1bmlmaWVzQXNUeXBlQXNzZXJ0aW9uIiwidHlwZUFzc2VydGlvbiIsInR5cGVBc3NlcnRpb25Gcm9tU3RhdGVtZW50IiwidW5pZnlBc1Byb3BlcnR5QXNzZXJ0aW9uIiwidW5pZmllc0FzUHJvcGVydHlBc3NlcnRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbiIsInByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsInRlcm0iLCJnZXRUZXJtIiwiZXF1aXZhbGVuY2UiLCJmaW5kRXF1aXZhbGVuY2VCeVRlcm0iLCJwcm9wZXJ0eUFzc2VydGlvbk1hdGNoZXMiLCJzb21lT3RoZXJUZXJtIiwicHJvcGVydHlSZWxhdGlvbiIsImdldFByb3BlcnR5UmVsYXRpb24iLCJtYXRjaFRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwidW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJzdGF0ZW1lbnRVbmlmaWVzIiwiZXF1YXRlV2l0aFN0ZXBzT3JTdWJwcm9vZnMiLCJ1bmlmaWVzV2l0aFN0ZXBPclN1YnByb29mcyIsInN0YXRlbWVudFVuaWZpZXNXaXRoU3RlcHMiLCJ1bmlmeU1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBd1VBOzs7ZUFBQTs7O3lCQXRVK0I7Z0VBRVQ7dUJBTTBCOzs7Ozs7QUFFaEQsSUFBTSxBQUFFQSxnQkFBa0JDLHlCQUFjLENBQWhDRDtBQUVSLFNBQVNFLGNBQWNDLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxrQkFBa0IsRUFBRUMsYUFBYSxFQUFFQyxPQUFPO0lBQ3JGLElBQUlDLGtCQUFrQjtJQUV0QixJQUFJSixjQUFjLE1BQU07UUFDdEIsSUFBTUssT0FBT0YsUUFBUUcsbUJBQW1CLENBQUNOO1FBRXpD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