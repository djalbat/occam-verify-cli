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
function unifyWithRule(statement, reference, substitutions, context) {
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
function unifyWithReference(statement, reference, substitutions, context) {
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
function unifyAsSatisfiesAssertion(statement, reference, substitutions, context) {
    var unifiesAsSatisfiesAssertion = false;
    var satisfiesAssertion = (0, _context.satisfiesAssertionFromStatement)(statement, context);
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
                    var substitutions1 = _substitutions.default.fromNothing(), axiomLemmaTheoremOrConjectureUnifies = axiom.unifyAxiomLemmaTheoremOrConjecture(axiomLemmaTheoremOrConjecture, substitutions1, context);
                    if (axiomLemmaTheoremOrConjectureUnifies) {
                        var substitutionsCorrelates = satisfiesAssertion.correlateSubstitutions(substitutions1, context);
                        if (substitutionsCorrelates) {
                            unifiesAsSatisfiesAssertion = true;
                        }
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
function unifyWithAxiomLemmaTheoremOrConjecture(statement, reference, substitutions, context) {
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
function unifyAEquality(statement, reference, substitutions, context) {
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
function unifyAsJudgement(statement, reference, substitutions, context) {
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
function unifyAsTypeAssertion(statement, reference, substitutions, context) {
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
function unifyAsPropertyAssertion(statement, reference, substitutions, context) {
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
function unifyWithSatisfiesAssertion(statement, reference, substitutions, context) {
    var unifiesWithSatisfiesAssertion = false;
    var stepsOrSubproofs = context.getStepsOrSubproofs(), satisfiesAssertions = stepsOrSubproofs.reduce(function(satisfiesAssertions, stepOrSubproof) {
        var stepOrSubproofStep = stepOrSubproof.isStep();
        if (stepOrSubproofStep) {
            var SatisfiesAssertion = _dom.default.SatisfiesAssertion, step = stepOrSubproof, statement = step.getStatement(), statementNode = statement.getNode(), satisfiesAssertion = SatisfiesAssertion.fromStatementNode(statementNode, context);
            if (satisfiesAssertion !== null) {
                satisfiesAssertions.unshift(satisfiesAssertion);
            }
        }
        return satisfiesAssertions;
    }, []), statementUnifies = backwardsSome(satisfiesAssertions, function(satisfiesAssertion) {
        var statementUnifies = satisfiesAssertion.unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, context);
        if (statementUnifies) {
            return true;
        }
    });
    if (statementUnifies) {
        unifiesWithSatisfiesAssertion = true;
    }
    return unifiesWithSatisfiesAssertion;
}
function equateWithStepsOrSubproofs(statement, reference, substitutions, context) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taXhpbnMvc3RlcC91bmlmeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4uLy4uL3N1YnN0aXR1dGlvbnNcIjtcblxuaW1wb3J0IHsgZXF1YWxpdHlGcm9tU3RhdGVtZW50LFxuICAgICAgICAganVkZ2VtZW50RnJvbVN0YXRlbWVudCxcbiAgICAgICAgIHR5cGVBc3NlcnRpb25Gcm9tU3RhdGVtZW50LFxuICAgICAgICAgcHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50LFxuICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5jb25zdCB7IGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5mdW5jdGlvbiB1bmlmeVdpdGhSdWxlKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVzV2l0aFJ1bGUgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgY29uc3QgcnVsZSA9IGNvbnRleHQuZmluZFJ1bGVCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgaWYgKHJ1bGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSBydWxlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3J1bGVTdHJpbmd9JyBydWxlLi4uYCk7XG5cbiAgICAgIGNvbnN0IHN0ZXBzT3JTdWJwcm9vZnMgPSBjb250ZXh0LmdldFN0ZXBzT3JTdWJwcm9vZnMoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudEFuZFN0ZXBzVW5pZnkgPSBydWxlLnVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyhzdGF0ZW1lbnQsIHN0ZXBzT3JTdWJwcm9vZnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50QW5kU3RlcHNVbmlmeSkge1xuICAgICAgICB1bmlmaWVzV2l0aFJ1bGUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodW5pZmllc1dpdGhSdWxlKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZS5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZmllc1dpdGhSdWxlO1xufVxuXG5mdW5jdGlvbiB1bmlmeVdpdGhSZWZlcmVuY2Uoc3RhdGVtZW50LCByZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHVuaWZpZXNXaXRoUmVmZXJlbmNlID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVZlcmlmaWVzID0gcmVmZXJlbmNlLnZlcmlmeU1ldGF2YXJpYWJsZShjb250ZXh0KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVWZXJpZmllcykge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgICBjb25zdCB7IFN0YXRlbWVudFN1YnN0aXR1dGlvbiB9ID0gZG9tLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gU3RhdGVtZW50U3Vic3RpdHV0aW9uLmZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uOyAvLy9cblxuICAgICAgc3Vic3RpdHV0aW9ucy5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICB1bmlmaWVzV2l0aFJlZmVyZW5jZSA9IHRydWU7XG5cbiAgICAgIGlmICh1bmlmaWVzV2l0aFJlZmVyZW5jZSkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlmaWVzV2l0aFJlZmVyZW5jZTtcbn1cblxuZnVuY3Rpb24gdW5pZnlBc1NhdGlzZmllc0Fzc2VydGlvbihzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgdW5pZmllc0FzU2F0aXNmaWVzQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgY29uc3Qgc2F0aXNmaWVzQXNzZXJ0aW9uID0gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gIGlmIChzYXRpc2ZpZXNBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgc2F0aXNmaWVzIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICBhc3NpZ25tZW50cyA9IG51bGw7XG5cbiAgICBzYXRpc2ZpZXNBc3NlcnRpb24udmVyaWZ5U2lnbmF0dXJlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RlcHNPclN1YnByb29mcyA9IGNvbnRleHQuZ2V0U3RlcHNPclN1YnByb29mcygpO1xuXG4gICAgICB1bmlmaWVzQXNTYXRpc2ZpZXNBc3NlcnRpb24gPSBiYWNrd2FyZHNTb21lKHN0ZXBzT3JTdWJwcm9vZnMsIChzdGVwc09yU3VicHJvb2YpID0+IHtcbiAgICAgICAgY29uc3Qgc3RlcE9yU3ViUHJvb2ZVbmlmaWVzV0l0aFNhdGlzZmllc0Fzc2VydGlvbiA9IHN0ZXBzT3JTdWJwcm9vZi51bmlmeVdpdGhTYXRpc2ZpZXNBc3NlcnRpb24oc2F0aXNmaWVzQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RlcE9yU3ViUHJvb2ZVbmlmaWVzV0l0aFNhdGlzZmllc0Fzc2VydGlvbikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUgPSBjb250ZXh0LmZpbmRBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICAgIGlmIChheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSAhPT0gbnVsbCkge1xuICAgICAgICByZWZlcmVuY2UgPSBzYXRpc2ZpZXNBc3NlcnRpb24uZ2V0UmVmZXJlbmNlKCk7XG5cbiAgICAgICAgY29uc3QgYXhpb20gPSBjb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICAgICAgaWYgKGF4aW9tICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVVuaWZpZXMgPSBheGlvbS51bmlmeUF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlKGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVVuaWZpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNDb3JyZWxhdGVzID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25zQ29ycmVsYXRlcykge1xuICAgICAgICAgICAgICB1bmlmaWVzQXNTYXRpc2ZpZXNBc3NlcnRpb24gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1bmlmaWVzQXNTYXRpc2ZpZXNBc3NlcnRpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHNhdGlzZmllcyBhc3NlcnRpb24uYCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaWZpZXNBc1NhdGlzZmllc0Fzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gdW5pZnlXaXRoQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUoc3RhdGVtZW50LCByZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHVuaWZpZXNXaXRoQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgY29uc3QgYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUgPSBjb250ZXh0LmZpbmRBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgZ2VuZXJhbFN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zOyAvLy9cblxuICAgIGlmIChheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7YXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVTdHJpbmd9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZS4uLmApO1xuXG4gICAgICBjb25zdCBzdGVwc09yU3VicHJvb2ZzID0gY29udGV4dC5nZXRTdGVwc09yU3VicHJvb2ZzKCk7XG5cbiAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCk7XG5cbiAgICAgIGNvbnN0IHN0YXRlbWVudEFuZFN0ZXBzVW5pZnkgPSBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZS51bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMoc3RhdGVtZW50LCBzdGVwc09yU3VicHJvb2ZzLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudEFuZFN0ZXBzVW5pZnkpIHtcbiAgICAgICAgY29uc3QgeyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSA9IGRvbSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IFN0YXRlbWVudFN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgc3Vic3RpdHV0aW9ucyA9IGdlbmVyYWxTdWJzdGl0dXRpb25zOyAvLy9cblxuICAgICAgICBzdWJzdGl0dXRpb25zLmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgdW5pZmllc1dpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh1bmlmaWVzV2l0aEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVN0cmluZ30nIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSBvciBjb25qZWN0dXJlLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlmaWVzV2l0aEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlO1xufVxuXG5mdW5jdGlvbiB1bmlmeUFFcXVhbGl0eShzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgdW5pZmllc0FFcXVhbGl0eSA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICBjb25zdCBlcXVhbGl0eSA9IGVxdWFsaXR5RnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGVxdWFsaXR5ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYW4gZXF1YWxpdHkuLi5gKTtcblxuICAgICAgY29uc3QgZXF1YWxpdHlFcXVhbCA9IGVxdWFsaXR5LmlzRXF1YWwoY29udGV4dCk7XG5cbiAgICAgIGlmIChlcXVhbGl0eUVxdWFsKSB7XG4gICAgICAgIHVuaWZpZXNBRXF1YWxpdHkgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodW5pZmllc0FFcXVhbGl0eSkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYW4gZXF1YWxpdHkuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaWZpZXNBRXF1YWxpdHk7XG59XG5cbmZ1bmN0aW9uIHVuaWZ5QXNKdWRnZW1lbnQoc3RhdGVtZW50LCByZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHVuaWZpZXNBc0p1ZGdlbWVudCA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICBjb25zdCBqdWRnZW1lbnQgPSBqdWRnZW1lbnRGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoanVkZ2VtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBqdWRnZW1lbnQuLi5gKTtcblxuICAgICAgdW5pZmllc0FzSnVkZ2VtZW50ID0gdHJ1ZTtcblxuICAgICAgaWYgKHVuaWZpZXNBc0p1ZGdlbWVudCkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBqdWRnZW1lbnQuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaWZpZXNBc0p1ZGdlbWVudDtcbn1cblxuZnVuY3Rpb24gdW5pZnlBc1R5cGVBc3NlcnRpb24oc3RhdGVtZW50LCByZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHVuaWZpZXNBc1R5cGVBc3NlcnRpb24gPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgY29uc3QgdHlwZUFzc2VydGlvbiA9IHR5cGVBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAodHlwZUFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgdHlwZSBhc3NlcnRpb24uLi5gKTtcblxuICAgICAgdW5pZmllc0FzVHlwZUFzc2VydGlvbiA9IHRydWU7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHR5cGUgYXNzZXJ0aW9uLmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlmaWVzQXNUeXBlQXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB1bmlmeUFzUHJvcGVydHlBc3NlcnRpb24oc3RhdGVtZW50LCByZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHVuaWZpZXNBc1Byb3BlcnR5QXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uID0gcHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAocHJvcGVydHlBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHByb3BlcnR5IGFzc2VydGlvbi4uLmApO1xuXG4gICAgICBjb25zdCB0ZXJtID0gcHJvcGVydHlBc3NlcnRpb24uZ2V0VGVybSgpLFxuICAgICAgICAgICAgZXF1aXZhbGVuY2UgPSBjb250ZXh0LmZpbmRFcXVpdmFsZW5jZUJ5VGVybSh0ZXJtKTtcblxuICAgICAgaWYgKGVxdWl2YWxlbmNlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uTWF0Y2hlcyA9IGVxdWl2YWxlbmNlLnNvbWVPdGhlclRlcm0odGVybSwgKHRlcm0pID0+IHsgIC8vL1xuICAgICAgICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb24gPSBwcm9wZXJ0eUFzc2VydGlvbi5nZXRQcm9wZXJ0eVJlbGF0aW9uKCksXG4gICAgICAgICAgICAgICAgcHJvcGVydHlBc3NlcnRpb25NYXRjaGVzID0gY29udGV4dC5tYXRjaFRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24pO1xuXG4gICAgICAgICAgaWYgKHByb3BlcnR5QXNzZXJ0aW9uTWF0Y2hlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocHJvcGVydHlBc3NlcnRpb25NYXRjaGVzKSB7XG4gICAgICAgICAgdW5pZmllc0FzUHJvcGVydHlBc3NlcnRpb24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh1bmlmaWVzQXNQcm9wZXJ0eUFzc2VydGlvbikge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBwcm9wZXJ0eSBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaWZpZXNBc1Byb3BlcnR5QXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB1bmlmeVdpdGhTYXRpc2ZpZXNBc3NlcnRpb24oc3RhdGVtZW50LCByZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgY29uc3Qgc3RlcHNPclN1YnByb29mcyA9IGNvbnRleHQuZ2V0U3RlcHNPclN1YnByb29mcygpLFxuICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb25zID0gc3RlcHNPclN1YnByb29mcy5yZWR1Y2UoKHNhdGlzZmllc0Fzc2VydGlvbnMsIHN0ZXBPclN1YnByb29mKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RlcE9yU3VicHJvb2ZTdGVwID0gc3RlcE9yU3VicHJvb2YuaXNTdGVwKCk7XG5cbiAgICAgICAgICBpZiAoc3RlcE9yU3VicHJvb2ZTdGVwKSB7XG4gICAgICAgICAgICBjb25zdCB7IFNhdGlzZmllc0Fzc2VydGlvbiB9ID0gZG9tLFxuICAgICAgICAgICAgICAgICAgc3RlcCA9IHN0ZXBPclN1YnByb29mLCAgLy8vXG4gICAgICAgICAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGVwLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBTYXRpc2ZpZXNBc3NlcnRpb24uZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChzYXRpc2ZpZXNBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9ucy51bnNoaWZ0KHNhdGlzZmllc0Fzc2VydGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvbnM7XG4gICAgICAgIH0sIFtdKSxcbiAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IGJhY2t3YXJkc1NvbWUoc2F0aXNmaWVzQXNzZXJ0aW9ucywgKHNhdGlzZmllc0Fzc2VydGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZXMgPSBzYXRpc2ZpZXNBc3NlcnRpb24udW5pZnlTdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzKHN0YXRlbWVudCwgc3RlcHNPclN1YnByb29mcywgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgIHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gZXF1YXRlV2l0aFN0ZXBzT3JTdWJwcm9vZnMoc3RhdGVtZW50LCByZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHVuaWZpZXNXaXRoU3RlcE9yU3VicHJvb2ZzID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHN0ZXBzT3JTdWJwcm9vZnMgPSBjb250ZXh0LmdldFN0ZXBzT3JTdWJwcm9vZnMoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aFN0ZXBzID0gc3RhdGVtZW50LmVxdWF0ZVdpdGhTdGVwc09yU3VicHJvb2ZzKHN0ZXBzT3JTdWJwcm9vZnMsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXNXaXRoU3RlcHMpIHtcbiAgICAgIHVuaWZpZXNXaXRoU3RlcE9yU3VicHJvb2ZzID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZmllc1dpdGhTdGVwT3JTdWJwcm9vZnM7XG59XG5cbmNvbnN0IHVuaWZ5TWl4aW5zID0gW1xuICB1bmlmeVdpdGhSdWxlLFxuICB1bmlmeVdpdGhSZWZlcmVuY2UsXG4gIHVuaWZ5QXNTYXRpc2ZpZXNBc3NlcnRpb24sXG4gIHVuaWZ5V2l0aEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlLFxuICB1bmlmeUFFcXVhbGl0eSxcbiAgdW5pZnlBc0p1ZGdlbWVudCxcbiAgdW5pZnlBc1R5cGVBc3NlcnRpb24sXG4gIHVuaWZ5QXNQcm9wZXJ0eUFzc2VydGlvbixcbiAgdW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uLFxuICBlcXVhdGVXaXRoU3RlcHNPclN1YnByb29mc1xuXTtcblxuZXhwb3J0IGRlZmF1bHQgdW5pZnlNaXhpbnM7XG5cbiJdLCJuYW1lcyI6WyJiYWNrd2FyZHNTb21lIiwiYXJyYXlVdGlsaXRpZXMiLCJ1bmlmeVdpdGhSdWxlIiwic3RhdGVtZW50IiwicmVmZXJlbmNlIiwic3Vic3RpdHV0aW9ucyIsImNvbnRleHQiLCJ1bmlmaWVzV2l0aFJ1bGUiLCJydWxlIiwiZmluZFJ1bGVCeVJlZmVyZW5jZSIsInJ1bGVTdHJpbmciLCJnZXRTdHJpbmciLCJzdGF0ZW1lbnRTdHJpbmciLCJ0cmFjZSIsInN0ZXBzT3JTdWJwcm9vZnMiLCJnZXRTdGVwc09yU3VicHJvb2ZzIiwic3RhdGVtZW50QW5kU3RlcHNVbmlmeSIsInVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyIsImRlYnVnIiwidW5pZnlXaXRoUmVmZXJlbmNlIiwidW5pZmllc1dpdGhSZWZlcmVuY2UiLCJtZXRhdmFyaWFibGVWZXJpZmllcyIsInZlcmlmeU1ldGF2YXJpYWJsZSIsInJlZmVyZW5jZVN0cmluZyIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsImRvbSIsIm1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZSIsInNwZWNpZmljQ29udGV4dCIsInN0YXRlbWVudFN1YnN0aXR1dGlvbiIsImZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb24iLCJhZGRTdWJzdGl0dXRpb24iLCJ1bmlmeUFzU2F0aXNmaWVzQXNzZXJ0aW9uIiwidW5pZmllc0FzU2F0aXNmaWVzQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsInN0YXRlZCIsImFzc2lnbm1lbnRzIiwidmVyaWZ5U2lnbmF0dXJlIiwic3RlcHNPclN1YnByb29mIiwic3RlcE9yU3ViUHJvb2ZVbmlmaWVzV0l0aFNhdGlzZmllc0Fzc2VydGlvbiIsInVuaWZ5V2l0aFNhdGlzZmllc0Fzc2VydGlvbiIsImF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlIiwiZmluZEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlQnlSZWZlcmVuY2UiLCJnZXRSZWZlcmVuY2UiLCJheGlvbSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwiU3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwiYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVVbmlmaWVzIiwidW5pZnlBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSIsInN1YnN0aXR1dGlvbnNDb3JyZWxhdGVzIiwiY29ycmVsYXRlU3Vic3RpdHV0aW9ucyIsInVuaWZ5V2l0aEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlIiwidW5pZmllc1dpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSIsImdlbmVyYWxTdWJzdGl0dXRpb25zIiwiYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVTdHJpbmciLCJ1bmlmeUFFcXVhbGl0eSIsInVuaWZpZXNBRXF1YWxpdHkiLCJlcXVhbGl0eSIsImVxdWFsaXR5RnJvbVN0YXRlbWVudCIsImVxdWFsaXR5RXF1YWwiLCJpc0VxdWFsIiwidW5pZnlBc0p1ZGdlbWVudCIsInVuaWZpZXNBc0p1ZGdlbWVudCIsImp1ZGdlbWVudCIsImp1ZGdlbWVudEZyb21TdGF0ZW1lbnQiLCJ1bmlmeUFzVHlwZUFzc2VydGlvbiIsInVuaWZpZXNBc1R5cGVBc3NlcnRpb24iLCJ0eXBlQXNzZXJ0aW9uIiwidHlwZUFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJ1bmlmeUFzUHJvcGVydHlBc3NlcnRpb24iLCJ1bmlmaWVzQXNQcm9wZXJ0eUFzc2VydGlvbiIsInByb3BlcnR5QXNzZXJ0aW9uIiwicHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50IiwidGVybSIsImdldFRlcm0iLCJlcXVpdmFsZW5jZSIsImZpbmRFcXVpdmFsZW5jZUJ5VGVybSIsInByb3BlcnR5QXNzZXJ0aW9uTWF0Y2hlcyIsInNvbWVPdGhlclRlcm0iLCJwcm9wZXJ0eVJlbGF0aW9uIiwiZ2V0UHJvcGVydHlSZWxhdGlvbiIsIm1hdGNoVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJ1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiIsInNhdGlzZmllc0Fzc2VydGlvbnMiLCJyZWR1Y2UiLCJzdGVwT3JTdWJwcm9vZiIsInN0ZXBPclN1YnByb29mU3RlcCIsImlzU3RlcCIsIlNhdGlzZmllc0Fzc2VydGlvbiIsInN0ZXAiLCJnZXRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0Tm9kZSIsImZyb21TdGF0ZW1lbnROb2RlIiwidW5zaGlmdCIsInN0YXRlbWVudFVuaWZpZXMiLCJlcXVhdGVXaXRoU3RlcHNPclN1YnByb29mcyIsInVuaWZpZXNXaXRoU3RlcE9yU3VicHJvb2ZzIiwic3RhdGVtZW50VW5pZmllc1dpdGhTdGVwcyIsInVuaWZ5TWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzVkE7OztlQUFBOzs7eUJBcFYrQjswREFFZjtvRUFDVTt1QkFNc0I7Ozs7OztBQUVoRCxJQUFNLEFBQUVBLGdCQUFrQkMseUJBQWMsQ0FBaENEO0FBRVIsU0FBU0UsY0FBY0MsU0FBUyxFQUFFQyxTQUFTLEVBQUVDLGFBQWEsRUFBRUMsT0FBTztJQUNqRSxJQUFJQyxrQkFBa0I7SUFFdEIsSUFBSUgsY0FBYyxNQUFNO1FBQ3RCLElBQU1JLE9BQU9GLFFBQVFHLG1CQUFtQixDQUFDTDtRQUV6QyxJQUFJSSxTQUFTLE1BQU07WUFDakIsSUFBTUUsYUFBYUYsS0FBS0csU0FBUyxJQUMzQkMsa0JBQWtCVCxVQUFVUSxTQUFTO1lBRTNDTCxRQUFRTyxLQUFLLENBQUMsQUFBQyxpQkFBd0RILE9BQXhDRSxpQkFBZ0IsMEJBQW1DLE9BQVhGLFlBQVc7WUFFbEYsSUFBTUksbUJBQW1CUixRQUFRUyxtQkFBbUIsSUFDOUNDLHlCQUF5QlIsS0FBS1MsaUNBQWlDLENBQUNkLFdBQVdXLGtCQUFrQlI7WUFFbkcsSUFBSVUsd0JBQXdCO2dCQUMxQlQsa0JBQWtCO1lBQ3BCO1lBRUEsSUFBSUEsaUJBQWlCO2dCQUNuQkQsUUFBUVksS0FBSyxDQUFDLEFBQUMsbUJBQTBEUixPQUF4Q0UsaUJBQWdCLDBCQUFtQyxPQUFYRixZQUFXO1lBQ3RGO1FBQ0Y7SUFD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