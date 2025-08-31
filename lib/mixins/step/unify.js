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
var _dom = /*#__PURE__*/ _interop_require_default(require("../../dom"));
var _substitutions = /*#__PURE__*/ _interop_require_default(require("../../substitutions"));
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
            var StatementSubstitution = _dom.default.StatementSubstitution, metavariable = reference.getMetavariable(), specificContext = context, statementSubstitution = StatementSubstitution.fromStatementAndMetavariable(statement, metavariable, context), substitution = statementSubstitution; ///
            substitutions.addSubstitution(substitution, specificContext);
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
                        var substitutions1 = _substitutions.default.fromNothing(), axiomLemmaTheoremOrConjectureUnifies = axiom.unifyAxiomLemmaTheoremOrConjecture(axiomLemmaTheoremOrConjecture, substitutions1, context);
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
        var axiomLemmaTheoremOrConjecture = context.findAxiomLemmaTheoremOrConjectureByReference(reference), generalSubstitutions = substitutions; ///
        if (axiomLemmaTheoremOrConjecture !== null) {
            var statementString = statement.getString(), axiomLemmaTheoremOrConjectureString = reference.getString();
            context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(axiomLemmaTheoremOrConjectureString, "' axiom, lemma, theorem or conjecture..."));
            var stepsOrSubproofs = context.getStepsOrSubproofs();
            substitutions = _substitutions.default.fromNothing();
            var statementAndStepsUnify = axiomLemmaTheoremOrConjecture.unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, substitutions, context);
            if (statementAndStepsUnify) {
                var StatementSubstitution = _dom.default.StatementSubstitution, metavariable = reference.getMetavariable(), specificContext = context, statementSubstitution = StatementSubstitution.fromStatementAndMetavariable(statement, metavariable, context), substitution = statementSubstitution; ///
                substitutions = generalSubstitutions; ///
                substitutions.addSubstitution(substitution, specificContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taXhpbnMvc3RlcC91bmlmeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4uLy4uL3N1YnN0aXR1dGlvbnNcIjtcblxuaW1wb3J0IHsgZXF1YWxpdHlGcm9tU3RhdGVtZW50LFxuICAgICAgICAganVkZ2VtZW50RnJvbVN0YXRlbWVudCxcbiAgICAgICAgIHR5cGVBc3NlcnRpb25Gcm9tU3RhdGVtZW50LFxuICAgICAgICAgcHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50LFxuICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5jb25zdCB7IGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5mdW5jdGlvbiB1bmlmeVdpdGhSdWxlKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHVuaWZpZXNXaXRoUnVsZSA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgIT09IG51bGwpIHtcbiAgICBjb25zdCBydWxlID0gY29udGV4dC5maW5kUnVsZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcnVsZVN0cmluZyA9IHJ1bGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUuLi5gKTtcblxuICAgICAgY29uc3Qgc3RlcHNPclN1YnByb29mcyA9IGNvbnRleHQuZ2V0U3RlcHNPclN1YnByb29mcygpLFxuICAgICAgICAgICAgc3RhdGVtZW50QW5kU3RlcHNVbmlmeSA9IHJ1bGUudW5pZnlTdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzKHN0YXRlbWVudCwgc3RlcHNPclN1YnByb29mcywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRBbmRTdGVwc1VuaWZ5KSB7XG4gICAgICAgIHVuaWZpZXNXaXRoUnVsZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh1bmlmaWVzV2l0aFJ1bGUpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3J1bGVTdHJpbmd9JyBydWxlLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlmaWVzV2l0aFJ1bGU7XG59XG5cbmZ1bmN0aW9uIHVuaWZ5V2l0aFJlZmVyZW5jZShzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVzV2l0aFJlZmVyZW5jZSA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgIT09IG51bGwpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVWZXJpZmllcyA9IHJlZmVyZW5jZS52ZXJpZnlNZXRhdmFyaWFibGUoY29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgICAgY29uc3QgeyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSA9IGRvbSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IFN0YXRlbWVudFN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgIHN1YnN0aXR1dGlvbnMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgdW5pZmllc1dpdGhSZWZlcmVuY2UgPSB0cnVlO1xuXG4gICAgICBpZiAodW5pZmllc1dpdGhSZWZlcmVuY2UpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZmllc1dpdGhSZWZlcmVuY2U7XG59XG5cbmZ1bmN0aW9uIHVuaWZ5QXNTYXRpc2ZpZXNBc3NlcnRpb24oc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgdW5pZmllc0FzU2F0aXNmaWVzQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gIGlmIChzYXRpc2ZpZXNBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgc2F0aXNmaWVzIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICBhc3NpZ25tZW50cyA9IG51bGw7XG5cbiAgICBzYXRpc2ZpZXNBc3NlcnRpb24udmVyaWZ5U2lnbmF0dXJlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RlcHNPclN1YnByb29mcyA9IGNvbnRleHQuZ2V0U3RlcHNPclN1YnByb29mcygpO1xuXG4gICAgICB1bmlmaWVzQXNTYXRpc2ZpZXNBc3NlcnRpb24gPSBiYWNrd2FyZHNTb21lKHN0ZXBzT3JTdWJwcm9vZnMsIChzdGVwc09yU3VicHJvb2YpID0+IHtcbiAgICAgICAgY29uc3Qgc3RlcE9yU3ViUHJvb2ZVbmlmaWVzV0l0aFNhdGlzZmllc0Fzc2VydGlvbiA9IHN0ZXBzT3JTdWJwcm9vZi51bmlmeVdpdGhTYXRpc2ZpZXNBc3NlcnRpb24oc2F0aXNmaWVzQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RlcE9yU3ViUHJvb2ZVbmlmaWVzV0l0aFNhdGlzZmllc0Fzc2VydGlvbikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUgPSBjb250ZXh0LmZpbmRBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICAgIGlmIChheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSAhPT0gbnVsbCkge1xuICAgICAgICByZWZlcmVuY2UgPSBzYXRpc2ZpZXNBc3NlcnRpb24uZ2V0UmVmZXJlbmNlKCk7XG5cbiAgICAgICAgY29uc3QgYXhpb20gPSBjb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICAgICAgaWYgKGF4aW9tICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3Qgc2F0aXNmaWFibGUgPSBheGlvbS5pc1NhdGlzZmlhYmxlKCk7XG5cbiAgICAgICAgICBpZiAoc2F0aXNmaWFibGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVVuaWZpZXMgPSBheGlvbS51bmlmeUF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlKGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlVW5pZmllcykge1xuICAgICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zQ29ycmVsYXRlcyA9IHNhdGlzZmllc0Fzc2VydGlvbi5jb3JyZWxhdGVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25zQ29ycmVsYXRlcykge1xuICAgICAgICAgICAgICAgIHVuaWZpZXNBc1NhdGlzZmllc0Fzc2VydGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYXhpb21TdHJpbmcgPSBheGlvbS5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZyhgQ2Fubm90IHVuaWZ5IHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYmVjYXVzZSBpdCBpcyBub3Qgc2F0aXNmaWFibGUuYClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodW5pZmllc0FzU2F0aXNmaWVzQXNzZXJ0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBzYXRpc2ZpZXMgYXNzZXJ0aW9uLmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlmaWVzQXNTYXRpc2ZpZXNBc3NlcnRpb247XG59XG5cbmZ1bmN0aW9uIHVuaWZ5V2l0aEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHVuaWZpZXNXaXRoQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgY29uc3QgYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUgPSBjb250ZXh0LmZpbmRBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgZ2VuZXJhbFN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zOyAvLy9cblxuICAgIGlmIChheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7YXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVTdHJpbmd9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZS4uLmApO1xuXG4gICAgICBjb25zdCBzdGVwc09yU3VicHJvb2ZzID0gY29udGV4dC5nZXRTdGVwc09yU3VicHJvb2ZzKCk7XG5cbiAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCk7XG5cbiAgICAgIGNvbnN0IHN0YXRlbWVudEFuZFN0ZXBzVW5pZnkgPSBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZS51bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMoc3RhdGVtZW50LCBzdGVwc09yU3VicHJvb2ZzLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudEFuZFN0ZXBzVW5pZnkpIHtcbiAgICAgICAgY29uc3QgeyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSA9IGRvbSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IFN0YXRlbWVudFN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgc3Vic3RpdHV0aW9ucyA9IGdlbmVyYWxTdWJzdGl0dXRpb25zOyAvLy9cblxuICAgICAgICBzdWJzdGl0dXRpb25zLmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgdW5pZmllc1dpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh1bmlmaWVzV2l0aEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVN0cmluZ30nIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSBvciBjb25qZWN0dXJlLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlmaWVzV2l0aEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlO1xufVxuXG5mdW5jdGlvbiB1bmlmeUFFcXVhbGl0eShzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVzQUVxdWFsaXR5ID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGVxdWFsaXR5ID0gZXF1YWxpdHlGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoZXF1YWxpdHkgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhbiBlcXVhbGl0eS4uLmApO1xuXG4gICAgICBjb25zdCBlcXVhbGl0eUVxdWFsID0gZXF1YWxpdHkuaXNFcXVhbChjb250ZXh0KTtcblxuICAgICAgaWYgKGVxdWFsaXR5RXF1YWwpIHtcbiAgICAgICAgdW5pZmllc0FFcXVhbGl0eSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh1bmlmaWVzQUVxdWFsaXR5KSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhbiBlcXVhbGl0eS5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZmllc0FFcXVhbGl0eTtcbn1cblxuZnVuY3Rpb24gdW5pZnlBc0p1ZGdlbWVudChzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVzQXNKdWRnZW1lbnQgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgY29uc3QganVkZ2VtZW50ID0ganVkZ2VtZW50RnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGp1ZGdlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEganVkZ2VtZW50Li4uYCk7XG5cbiAgICAgIHVuaWZpZXNBc0p1ZGdlbWVudCA9IHRydWU7XG5cbiAgICAgIGlmICh1bmlmaWVzQXNKdWRnZW1lbnQpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEganVkZ2VtZW50LmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlmaWVzQXNKdWRnZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHVuaWZ5QXNUeXBlQXNzZXJ0aW9uKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHVuaWZpZXNBc1R5cGVBc3NlcnRpb24gPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgY29uc3QgdHlwZUFzc2VydGlvbiA9IHR5cGVBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAodHlwZUFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgdHlwZSBhc3NlcnRpb24uLi5gKTtcblxuICAgICAgdW5pZmllc0FzVHlwZUFzc2VydGlvbiA9IHRydWU7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHR5cGUgYXNzZXJ0aW9uLmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlmaWVzQXNUeXBlQXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB1bmlmeUFzUHJvcGVydHlBc3NlcnRpb24oc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgdW5pZmllc0FzUHJvcGVydHlBc3NlcnRpb24gPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgY29uc3QgcHJvcGVydHlBc3NlcnRpb24gPSBwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChwcm9wZXJ0eUFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgcHJvcGVydHkgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICAgIGNvbnN0IHRlcm0gPSBwcm9wZXJ0eUFzc2VydGlvbi5nZXRUZXJtKCksXG4gICAgICAgICAgICBlcXVpdmFsZW5jZSA9IGNvbnRleHQuZmluZEVxdWl2YWxlbmNlQnlUZXJtKHRlcm0pO1xuXG4gICAgICBpZiAoZXF1aXZhbGVuY2UgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcHJvcGVydHlBc3NlcnRpb25NYXRjaGVzID0gZXF1aXZhbGVuY2Uuc29tZU90aGVyVGVybSh0ZXJtLCAodGVybSkgPT4geyAgLy8vXG4gICAgICAgICAgY29uc3QgcHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5QXNzZXJ0aW9uLmdldFByb3BlcnR5UmVsYXRpb24oKSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUFzc2VydGlvbk1hdGNoZXMgPSBjb250ZXh0Lm1hdGNoVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbik7XG5cbiAgICAgICAgICBpZiAocHJvcGVydHlBc3NlcnRpb25NYXRjaGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChwcm9wZXJ0eUFzc2VydGlvbk1hdGNoZXMpIHtcbiAgICAgICAgICB1bmlmaWVzQXNQcm9wZXJ0eUFzc2VydGlvbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHVuaWZpZXNBc1Byb3BlcnR5QXNzZXJ0aW9uKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHByb3BlcnR5IGFzc2VydGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZmllc0FzUHJvcGVydHlBc3NlcnRpb247XG59XG5cbmZ1bmN0aW9uIHVuaWZ5V2l0aFNhdGlzZmllc0Fzc2VydGlvbihzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGlmIChzYXRpc2ZpZXNBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGVwc09yU3VicHJvb2ZzID0gY29udGV4dC5nZXRTdGVwc09yU3VicHJvb2ZzKCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHNhdGlzZmllc0Fzc2VydGlvbi51bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMoc3RhdGVtZW50LCBzdGVwc09yU3VicHJvb2ZzLCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiBlcXVhdGVXaXRoU3RlcHNPclN1YnByb29mcyhzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVzV2l0aFN0ZXBPclN1YnByb29mcyA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICBjb25zdCBzdGVwc09yU3VicHJvb2ZzID0gY29udGV4dC5nZXRTdGVwc09yU3VicHJvb2ZzKCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllc1dpdGhTdGVwcyA9IHN0YXRlbWVudC5lcXVhdGVXaXRoU3RlcHNPclN1YnByb29mcyhzdGVwc09yU3VicHJvb2ZzLCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aFN0ZXBzKSB7XG4gICAgICB1bmlmaWVzV2l0aFN0ZXBPclN1YnByb29mcyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaWZpZXNXaXRoU3RlcE9yU3VicHJvb2ZzO1xufVxuXG5jb25zdCB1bmlmeU1peGlucyA9IFtcbiAgdW5pZnlXaXRoUnVsZSxcbiAgdW5pZnlXaXRoUmVmZXJlbmNlLFxuICB1bmlmeUFzU2F0aXNmaWVzQXNzZXJ0aW9uLFxuICB1bmlmeVdpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSxcbiAgdW5pZnlBRXF1YWxpdHksXG4gIHVuaWZ5QXNKdWRnZW1lbnQsXG4gIHVuaWZ5QXNUeXBlQXNzZXJ0aW9uLFxuICB1bmlmeUFzUHJvcGVydHlBc3NlcnRpb24sXG4gIHVuaWZ5V2l0aFNhdGlzZmllc0Fzc2VydGlvbixcbiAgZXF1YXRlV2l0aFN0ZXBzT3JTdWJwcm9vZnNcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHVuaWZ5TWl4aW5zO1xuXG4iXSwibmFtZXMiOlsiYmFja3dhcmRzU29tZSIsImFycmF5VXRpbGl0aWVzIiwidW5pZnlXaXRoUnVsZSIsInN0YXRlbWVudCIsInJlZmVyZW5jZSIsInNhdGlzZmllc0Fzc2VydGlvbiIsInN1YnN0aXR1dGlvbnMiLCJjb250ZXh0IiwidW5pZmllc1dpdGhSdWxlIiwicnVsZSIsImZpbmRSdWxlQnlSZWZlcmVuY2UiLCJydWxlU3RyaW5nIiwiZ2V0U3RyaW5nIiwic3RhdGVtZW50U3RyaW5nIiwidHJhY2UiLCJzdGVwc09yU3VicHJvb2ZzIiwiZ2V0U3RlcHNPclN1YnByb29mcyIsInN0YXRlbWVudEFuZFN0ZXBzVW5pZnkiLCJ1bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMiLCJkZWJ1ZyIsInVuaWZ5V2l0aFJlZmVyZW5jZSIsInVuaWZpZXNXaXRoUmVmZXJlbmNlIiwibWV0YXZhcmlhYmxlVmVyaWZpZXMiLCJ2ZXJpZnlNZXRhdmFyaWFibGUiLCJyZWZlcmVuY2VTdHJpbmciLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJkb20iLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJzcGVjaWZpY0NvbnRleHQiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlIiwic3Vic3RpdHV0aW9uIiwiYWRkU3Vic3RpdHV0aW9uIiwidW5pZnlBc1NhdGlzZmllc0Fzc2VydGlvbiIsInVuaWZpZXNBc1NhdGlzZmllc0Fzc2VydGlvbiIsInNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJzdGF0ZWQiLCJhc3NpZ25tZW50cyIsInZlcmlmeVNpZ25hdHVyZSIsInN0ZXBzT3JTdWJwcm9vZiIsInN0ZXBPclN1YlByb29mVW5pZmllc1dJdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJ1bmlmeVdpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSIsImZpbmRBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZUJ5UmVmZXJlbmNlIiwiZ2V0UmVmZXJlbmNlIiwiYXhpb20iLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsInNhdGlzZmlhYmxlIiwiaXNTYXRpc2ZpYWJsZSIsIlN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsImF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlVW5pZmllcyIsInVuaWZ5QXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUiLCJzdWJzdGl0dXRpb25zQ29ycmVsYXRlcyIsImNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMiLCJheGlvbVN0cmluZyIsInVuaWZ5V2l0aEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlIiwidW5pZmllc1dpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSIsImdlbmVyYWxTdWJzdGl0dXRpb25zIiwiYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVTdHJpbmciLCJ1bmlmeUFFcXVhbGl0eSIsInVuaWZpZXNBRXF1YWxpdHkiLCJlcXVhbGl0eSIsImVxdWFsaXR5RnJvbVN0YXRlbWVudCIsImVxdWFsaXR5RXF1YWwiLCJpc0VxdWFsIiwidW5pZnlBc0p1ZGdlbWVudCIsInVuaWZpZXNBc0p1ZGdlbWVudCIsImp1ZGdlbWVudCIsImp1ZGdlbWVudEZyb21TdGF0ZW1lbnQiLCJ1bmlmeUFzVHlwZUFzc2VydGlvbiIsInVuaWZpZXNBc1R5cGVBc3NlcnRpb24iLCJ0eXBlQXNzZXJ0aW9uIiwidHlwZUFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJ1bmlmeUFzUHJvcGVydHlBc3NlcnRpb24iLCJ1bmlmaWVzQXNQcm9wZXJ0eUFzc2VydGlvbiIsInByb3BlcnR5QXNzZXJ0aW9uIiwicHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50IiwidGVybSIsImdldFRlcm0iLCJlcXVpdmFsZW5jZSIsImZpbmRFcXVpdmFsZW5jZUJ5VGVybSIsInByb3BlcnR5QXNzZXJ0aW9uTWF0Y2hlcyIsInNvbWVPdGhlclRlcm0iLCJwcm9wZXJ0eVJlbGF0aW9uIiwiZ2V0UHJvcGVydHlSZWxhdGlvbiIsIm1hdGNoVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJ1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiIsInN0YXRlbWVudFVuaWZpZXMiLCJlcXVhdGVXaXRoU3RlcHNPclN1YnByb29mcyIsInVuaWZpZXNXaXRoU3RlcE9yU3VicHJvb2ZzIiwic3RhdGVtZW50VW5pZmllc1dpdGhTdGVwcyIsInVuaWZ5TWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF5VUE7OztlQUFBOzs7eUJBdlUrQjswREFFZjtvRUFDVTt1QkFNc0I7Ozs7OztBQUVoRCxJQUFNLEFBQUVBLGdCQUFrQkMseUJBQWMsQ0FBaENEO0FBRVIsU0FBU0UsY0FBY0MsU0FBUyxFQUFFQyxTQUFTLEVBQUVDLGtCQUFrQixFQUFFQyxhQUFhLEVBQUVDLE9BQU87SUFDckYsSUFBSUMsa0JBQWtCO0lB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