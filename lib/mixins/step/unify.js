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
                var satisfiedAssertionUnifies = stepsOrSubproof.unifySatisfiesAssertion(satisfiesAssertion, context);
                if (satisfiedAssertionUnifies) {
                    return true;
                }
            });
        } else {
            var axiomLemmaTheoremConjecture = context.findAxiomLemmaTheoremConjectureByReference(reference);
            if (axiomLemmaTheoremConjecture !== null) {
                reference = satisfiesAssertion.getReference();
                var axiom = context.findAxiomByReference(reference);
                if (axiom !== null) {
                    var substitutions1 = _substitutions.default.fromNothing(), axiomLemmaTheoremConjectureUnifies = axiom.unifyAxiomLemmaTheoremConjecture(axiomLemmaTheoremConjecture, substitutions1, context);
                    if (axiomLemmaTheoremConjectureUnifies) {
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
        var axiomLemmaTheoremConjecture = context.findAxiomLemmaTheoremConjectureByReference(reference), generalSubstitutions = substitutions; ///
        if (axiomLemmaTheoremConjecture !== null) {
            var statementString = statement.getString(), axiomLemmaTheoremConjectureString = reference.getString();
            context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(axiomLemmaTheoremConjectureString, "' axiom, lemma, theorem or conjecture..."));
            var stepsOrSubproofs = context.getStepsOrSubproofs();
            substitutions = _substitutions.default.fromNothing();
            var statementAndStepsUnify = axiomLemmaTheoremConjecture.unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, substitutions, context);
            if (statementAndStepsUnify) {
                var StatementSubstitution = _dom.default.StatementSubstitution, metavariable = reference.getMetavariable(), specificContext = context, statementSubstitution = StatementSubstitution.fromStatementAndMetavariable(statement, metavariable, context), substitution = statementSubstitution; ///
                substitutions = generalSubstitutions; ///
                substitutions.addSubstitution(substitution, specificContext);
                unifiesWithAxiomLemmaTheoremOrConjecture = true;
            }
            if (unifiesWithAxiomLemmaTheoremOrConjecture) {
                context.debug("...unified the '".concat(statementString, "' statement with the '").concat(axiomLemmaTheoremConjectureString, "' axiom, lemma, theorem or conjecture."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taXhpbnMvc3RlcC91bmlmeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4uLy4uL3N1YnN0aXR1dGlvbnNcIjtcblxuaW1wb3J0IHsgZXF1YWxpdHlGcm9tU3RhdGVtZW50LFxuICAgICAgICAganVkZ2VtZW50RnJvbVN0YXRlbWVudCxcbiAgICAgICAgIHR5cGVBc3NlcnRpb25Gcm9tU3RhdGVtZW50LFxuICAgICAgICAgcHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50LFxuICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5jb25zdCB7IGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5mdW5jdGlvbiB1bmlmeVdpdGhSdWxlKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVzV2l0aFJ1bGUgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgY29uc3QgcnVsZSA9IGNvbnRleHQuZmluZFJ1bGVCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgaWYgKHJ1bGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSBydWxlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3J1bGVTdHJpbmd9JyBydWxlLi4uYCk7XG5cbiAgICAgIGNvbnN0IHN0ZXBzT3JTdWJwcm9vZnMgPSBjb250ZXh0LmdldFN0ZXBzT3JTdWJwcm9vZnMoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudEFuZFN0ZXBzVW5pZnkgPSBydWxlLnVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyhzdGF0ZW1lbnQsIHN0ZXBzT3JTdWJwcm9vZnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50QW5kU3RlcHNVbmlmeSkge1xuICAgICAgICB1bmlmaWVzV2l0aFJ1bGUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodW5pZmllc1dpdGhSdWxlKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZS5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZmllc1dpdGhSdWxlO1xufVxuXG5mdW5jdGlvbiB1bmlmeVdpdGhSZWZlcmVuY2Uoc3RhdGVtZW50LCByZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHVuaWZpZXNXaXRoUmVmZXJlbmNlID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVZlcmlmaWVzID0gcmVmZXJlbmNlLnZlcmlmeU1ldGF2YXJpYWJsZShjb250ZXh0KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVWZXJpZmllcykge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgICBjb25zdCB7IFN0YXRlbWVudFN1YnN0aXR1dGlvbiB9ID0gZG9tLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gU3RhdGVtZW50U3Vic3RpdHV0aW9uLmZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uOyAvLy9cblxuICAgICAgc3Vic3RpdHV0aW9ucy5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICB1bmlmaWVzV2l0aFJlZmVyZW5jZSA9IHRydWU7XG5cbiAgICAgIGlmICh1bmlmaWVzV2l0aFJlZmVyZW5jZSkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlmaWVzV2l0aFJlZmVyZW5jZTtcbn1cblxuZnVuY3Rpb24gdW5pZnlBc1NhdGlzZmllc0Fzc2VydGlvbihzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgdW5pZmllc0FzU2F0aXNmaWVzQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgY29uc3Qgc2F0aXNmaWVzQXNzZXJ0aW9uID0gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gIGlmIChzYXRpc2ZpZXNBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgc2F0aXNmaWVzIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICBhc3NpZ25tZW50cyA9IG51bGw7XG5cbiAgICBzYXRpc2ZpZXNBc3NlcnRpb24udmVyaWZ5U2lnbmF0dXJlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RlcHNPclN1YnByb29mcyA9IGNvbnRleHQuZ2V0U3RlcHNPclN1YnByb29mcygpO1xuXG4gICAgICB1bmlmaWVzQXNTYXRpc2ZpZXNBc3NlcnRpb24gPSBiYWNrd2FyZHNTb21lKHN0ZXBzT3JTdWJwcm9vZnMsIChzdGVwc09yU3VicHJvb2YpID0+IHtcbiAgICAgICAgY29uc3Qgc2F0aXNmaWVkQXNzZXJ0aW9uVW5pZmllcyA9IHN0ZXBzT3JTdWJwcm9vZi51bmlmeVNhdGlzZmllc0Fzc2VydGlvbihzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzYXRpc2ZpZWRBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUgPSBjb250ZXh0LmZpbmRBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICBpZiAoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlICE9PSBudWxsKSB7XG4gICAgICAgIHJlZmVyZW5jZSA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRSZWZlcmVuY2UoKTtcblxuICAgICAgICBjb25zdCBheGlvbSA9IGNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgICAgICBpZiAoYXhpb20gIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVVuaWZpZXMgPSBheGlvbS51bmlmeUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVVuaWZpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNDb3JyZWxhdGVzID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25zQ29ycmVsYXRlcykge1xuICAgICAgICAgICAgICB1bmlmaWVzQXNTYXRpc2ZpZXNBc3NlcnRpb24gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1bmlmaWVzQXNTYXRpc2ZpZXNBc3NlcnRpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHNhdGlzZmllcyBhc3NlcnRpb24uYCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaWZpZXNBc1NhdGlzZmllc0Fzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gdW5pZnlXaXRoQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUoc3RhdGVtZW50LCByZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHVuaWZpZXNXaXRoQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgY29uc3QgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlID0gY29udGV4dC5maW5kQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICBnZW5lcmFsU3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnM7IC8vL1xuXG4gICAgaWYgKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2F4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZ30nIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSBvciBjb25qZWN0dXJlLi4uYCk7XG5cbiAgICAgIGNvbnN0IHN0ZXBzT3JTdWJwcm9vZnMgPSBjb250ZXh0LmdldFN0ZXBzT3JTdWJwcm9vZnMoKTtcblxuICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKTtcblxuICAgICAgY29uc3Qgc3RhdGVtZW50QW5kU3RlcHNVbmlmeSA9IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZS51bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMoc3RhdGVtZW50LCBzdGVwc09yU3VicHJvb2ZzLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudEFuZFN0ZXBzVW5pZnkpIHtcbiAgICAgICAgY29uc3QgeyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSA9IGRvbSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IFN0YXRlbWVudFN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgc3Vic3RpdHV0aW9ucyA9IGdlbmVyYWxTdWJzdGl0dXRpb25zOyAvLy9cblxuICAgICAgICBzdWJzdGl0dXRpb25zLmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgdW5pZmllc1dpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh1bmlmaWVzV2l0aEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmd9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZS5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZmllc1dpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZTtcbn1cblxuZnVuY3Rpb24gdW5pZnlBRXF1YWxpdHkoc3RhdGVtZW50LCByZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHVuaWZpZXNBRXF1YWxpdHkgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgY29uc3QgZXF1YWxpdHkgPSBlcXVhbGl0eUZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChlcXVhbGl0eSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGFuIGVxdWFsaXR5Li4uYCk7XG5cbiAgICAgIGNvbnN0IGVxdWFsaXR5RXF1YWwgPSBlcXVhbGl0eS5pc0VxdWFsKGNvbnRleHQpO1xuXG4gICAgICBpZiAoZXF1YWxpdHlFcXVhbCkge1xuICAgICAgICB1bmlmaWVzQUVxdWFsaXR5ID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHVuaWZpZXNBRXF1YWxpdHkpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGFuIGVxdWFsaXR5LmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlmaWVzQUVxdWFsaXR5O1xufVxuXG5mdW5jdGlvbiB1bmlmeUFzSnVkZ2VtZW50KHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVzQXNKdWRnZW1lbnQgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgY29uc3QganVkZ2VtZW50ID0ganVkZ2VtZW50RnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGp1ZGdlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEganVkZ2VtZW50Li4uYCk7XG5cbiAgICAgIHVuaWZpZXNBc0p1ZGdlbWVudCA9IHRydWU7XG5cbiAgICAgIGlmICh1bmlmaWVzQXNKdWRnZW1lbnQpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEganVkZ2VtZW50LmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlmaWVzQXNKdWRnZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHVuaWZ5QXNUeXBlQXNzZXJ0aW9uKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVzQXNUeXBlQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHR5cGVBc3NlcnRpb24gPSB0eXBlQXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHR5cGVBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHR5cGUgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICAgIHVuaWZpZXNBc1R5cGVBc3NlcnRpb24gPSB0cnVlO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSB0eXBlIGFzc2VydGlvbi5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZmllc0FzVHlwZUFzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gdW5pZnlBc1Byb3BlcnR5QXNzZXJ0aW9uKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVzQXNQcm9wZXJ0eUFzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvbiA9IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHByb3BlcnR5QXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBwcm9wZXJ0eSBhc3NlcnRpb24uLi5gKTtcblxuICAgICAgY29uc3QgdGVybSA9IHByb3BlcnR5QXNzZXJ0aW9uLmdldFRlcm0oKSxcbiAgICAgICAgICAgIGVxdWl2YWxlbmNlID0gY29udGV4dC5maW5kRXF1aXZhbGVuY2VCeVRlcm0odGVybSk7XG5cbiAgICAgIGlmIChlcXVpdmFsZW5jZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvbk1hdGNoZXMgPSBlcXVpdmFsZW5jZS5zb21lT3RoZXJUZXJtKHRlcm0sICh0ZXJtKSA9PiB7ICAvLy9cbiAgICAgICAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlBc3NlcnRpb24uZ2V0UHJvcGVydHlSZWxhdGlvbigpLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uTWF0Y2hlcyA9IGNvbnRleHQubWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uKTtcblxuICAgICAgICAgIGlmIChwcm9wZXJ0eUFzc2VydGlvbk1hdGNoZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHByb3BlcnR5QXNzZXJ0aW9uTWF0Y2hlcykge1xuICAgICAgICAgIHVuaWZpZXNBc1Byb3BlcnR5QXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodW5pZmllc0FzUHJvcGVydHlBc3NlcnRpb24pIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgcHJvcGVydHkgYXNzZXJ0aW9uLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlmaWVzQXNQcm9wZXJ0eUFzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gdW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGNvbnN0IHN0ZXBzT3JTdWJwcm9vZnMgPSBjb250ZXh0LmdldFN0ZXBzT3JTdWJwcm9vZnMoKSxcbiAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9ucyA9IHN0ZXBzT3JTdWJwcm9vZnMucmVkdWNlKChzYXRpc2ZpZXNBc3NlcnRpb25zLCBzdGVwT3JTdWJwcm9vZikgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0ZXBPclN1YnByb29mU3RlcCA9IHN0ZXBPclN1YnByb29mLmlzU3RlcCgpO1xuXG4gICAgICAgICAgaWYgKHN0ZXBPclN1YnByb29mU3RlcCkge1xuICAgICAgICAgICAgY29uc3QgeyBTYXRpc2ZpZXNBc3NlcnRpb24gfSA9IGRvbSxcbiAgICAgICAgICAgICAgICAgIHN0ZXAgPSBzdGVwT3JTdWJwcm9vZiwgIC8vL1xuICAgICAgICAgICAgICAgICAgc3RhdGVtZW50ID0gc3RlcC5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gU2F0aXNmaWVzQXNzZXJ0aW9uLmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbnMudW5zaGlmdChzYXRpc2ZpZXNBc3NlcnRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb25zO1xuICAgICAgICB9LCBbXSksXG4gICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSBiYWNrd2FyZHNTb21lKHNhdGlzZmllc0Fzc2VydGlvbnMsIChzYXRpc2ZpZXNBc3NlcnRpb24pID0+IHtcbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzID0gc2F0aXNmaWVzQXNzZXJ0aW9uLnVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyhzdGF0ZW1lbnQsIHN0ZXBzT3JTdWJwcm9vZnMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb247XG59XG5cbmZ1bmN0aW9uIGVxdWF0ZVdpdGhTdGVwc09yU3VicHJvb2ZzKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVzV2l0aFN0ZXBPclN1YnByb29mcyA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICBjb25zdCBzdGVwc09yU3VicHJvb2ZzID0gY29udGV4dC5nZXRTdGVwc09yU3VicHJvb2ZzKCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllc1dpdGhTdGVwcyA9IHN0YXRlbWVudC5lcXVhdGVXaXRoU3RlcHNPclN1YnByb29mcyhzdGVwc09yU3VicHJvb2ZzLCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aFN0ZXBzKSB7XG4gICAgICB1bmlmaWVzV2l0aFN0ZXBPclN1YnByb29mcyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaWZpZXNXaXRoU3RlcE9yU3VicHJvb2ZzO1xufVxuXG5jb25zdCB1bmlmeU1peGlucyA9IFtcbiAgdW5pZnlXaXRoUnVsZSxcbiAgdW5pZnlXaXRoUmVmZXJlbmNlLFxuICB1bmlmeUFzU2F0aXNmaWVzQXNzZXJ0aW9uLFxuICB1bmlmeVdpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSxcbiAgdW5pZnlBRXF1YWxpdHksXG4gIHVuaWZ5QXNKdWRnZW1lbnQsXG4gIHVuaWZ5QXNUeXBlQXNzZXJ0aW9uLFxuICB1bmlmeUFzUHJvcGVydHlBc3NlcnRpb24sXG4gIHVuaWZ5V2l0aFNhdGlzZmllc0Fzc2VydGlvbixcbiAgZXF1YXRlV2l0aFN0ZXBzT3JTdWJwcm9vZnNcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHVuaWZ5TWl4aW5zO1xuXG4iXSwibmFtZXMiOlsiYmFja3dhcmRzU29tZSIsImFycmF5VXRpbGl0aWVzIiwidW5pZnlXaXRoUnVsZSIsInN0YXRlbWVudCIsInJlZmVyZW5jZSIsInN1YnN0aXR1dGlvbnMiLCJjb250ZXh0IiwidW5pZmllc1dpdGhSdWxlIiwicnVsZSIsImZpbmRSdWxlQnlSZWZlcmVuY2UiLCJydWxlU3RyaW5nIiwiZ2V0U3RyaW5nIiwic3RhdGVtZW50U3RyaW5nIiwidHJhY2UiLCJzdGVwc09yU3VicHJvb2ZzIiwiZ2V0U3RlcHNPclN1YnByb29mcyIsInN0YXRlbWVudEFuZFN0ZXBzVW5pZnkiLCJ1bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMiLCJkZWJ1ZyIsInVuaWZ5V2l0aFJlZmVyZW5jZSIsInVuaWZpZXNXaXRoUmVmZXJlbmNlIiwibWV0YXZhcmlhYmxlVmVyaWZpZXMiLCJ2ZXJpZnlNZXRhdmFyaWFibGUiLCJyZWZlcmVuY2VTdHJpbmciLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJkb20iLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJzcGVjaWZpY0NvbnRleHQiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlIiwic3Vic3RpdHV0aW9uIiwiYWRkU3Vic3RpdHV0aW9uIiwidW5pZnlBc1NhdGlzZmllc0Fzc2VydGlvbiIsInVuaWZpZXNBc1NhdGlzZmllc0Fzc2VydGlvbiIsInNhdGlzZmllc0Fzc2VydGlvbiIsInNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJzdGF0ZWQiLCJhc3NpZ25tZW50cyIsInZlcmlmeVNpZ25hdHVyZSIsInN0ZXBzT3JTdWJwcm9vZiIsInNhdGlzZmllZEFzc2VydGlvblVuaWZpZXMiLCJ1bmlmeVNhdGlzZmllc0Fzc2VydGlvbiIsImF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSIsImZpbmRBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVCeVJlZmVyZW5jZSIsImdldFJlZmVyZW5jZSIsImF4aW9tIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJTdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVzIiwidW5pZnlBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUiLCJzdWJzdGl0dXRpb25zQ29ycmVsYXRlcyIsImNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMiLCJ1bmlmeVdpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSIsInVuaWZpZXNXaXRoQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUiLCJnZW5lcmFsU3Vic3RpdHV0aW9ucyIsImF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZyIsInVuaWZ5QUVxdWFsaXR5IiwidW5pZmllc0FFcXVhbGl0eSIsImVxdWFsaXR5IiwiZXF1YWxpdHlGcm9tU3RhdGVtZW50IiwiZXF1YWxpdHlFcXVhbCIsImlzRXF1YWwiLCJ1bmlmeUFzSnVkZ2VtZW50IiwidW5pZmllc0FzSnVkZ2VtZW50IiwianVkZ2VtZW50IiwianVkZ2VtZW50RnJvbVN0YXRlbWVudCIsInVuaWZ5QXNUeXBlQXNzZXJ0aW9uIiwidW5pZmllc0FzVHlwZUFzc2VydGlvbiIsInR5cGVBc3NlcnRpb24iLCJ0eXBlQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsInVuaWZ5QXNQcm9wZXJ0eUFzc2VydGlvbiIsInVuaWZpZXNBc1Byb3BlcnR5QXNzZXJ0aW9uIiwicHJvcGVydHlBc3NlcnRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJ0ZXJtIiwiZ2V0VGVybSIsImVxdWl2YWxlbmNlIiwiZmluZEVxdWl2YWxlbmNlQnlUZXJtIiwicHJvcGVydHlBc3NlcnRpb25NYXRjaGVzIiwic29tZU90aGVyVGVybSIsInByb3BlcnR5UmVsYXRpb24iLCJnZXRQcm9wZXJ0eVJlbGF0aW9uIiwibWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsInVuaWZ5V2l0aFNhdGlzZmllc0Fzc2VydGlvbiIsInVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9ucyIsInJlZHVjZSIsInN0ZXBPclN1YnByb29mIiwic3RlcE9yU3VicHJvb2ZTdGVwIiwiaXNTdGVwIiwiU2F0aXNmaWVzQXNzZXJ0aW9uIiwic3RlcCIsImdldFN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJnZXROb2RlIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJ1bnNoaWZ0Iiwic3RhdGVtZW50VW5pZmllcyIsImVxdWF0ZVdpdGhTdGVwc09yU3VicHJvb2ZzIiwidW5pZmllc1dpdGhTdGVwT3JTdWJwcm9vZnMiLCJzdGF0ZW1lbnRVbmlmaWVzV2l0aFN0ZXBzIiwidW5pZnlNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXNWQTs7O2VBQUE7Ozt5QkFwVitCOzBEQUVmO29FQUNVO3VCQU1zQjs7Ozs7O0FBRWhELElBQU0sQUFBRUEsZ0JBQWtCQyx5QkFBYyxDQUFoQ0Q7QUFFUixTQUFTRSxjQUFjQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsYUFBYSxFQUFFQyxPQUFPO0lBQ2pFLElBQUlDLGtCQUFrQjtJQUV0QixJQUFJSCxjQUFjLE1BQU07UUFDdEIsSUFBTUksT0FBT0YsUUFBUUcsbUJBQW1CLENBQUNMO1FBRXpDLElBQUlJLFNBQVMsTUFBTTtZQUNqQixJQUFNRSxhQUFhRixLQUFLRyxTQUFTLElBQzNCQyxrQkFBa0JULFVBQVVRLFNBQVM7WUFFM0NMLFFBQVFPLEtBQUssQ0FBQyxBQUFDLGlCQUF3REgsT0FBeENFLGlCQUFnQiwwQkFBbUMsT0FBWEYsWUFBVztZQUVsRixJQUFNSSxtQkFBbUJSLFFBQVFTLG1CQUFtQixJQUM5Q0MseUJBQXlCUixLQUFLUyxpQ0FBaUMsQ0FBQ2QsV0FBV1csa0JBQWtCUjtZQUVuRyxJQUFJVSx3QkFBd0I7Z0JBQzFCVCxrQkFBa0I7WUFDcEI7WUFFQSxJQUFJQSxpQkFBaUI7Z0JBQ25CRCxRQUFRWSxLQUFLLENBQUMsQUFBQyxtQkFBMERSLE9BQXhDRSxpQkFBZ0IsMEJBQW1DLE9BQVhGLFlBQVc7WUFDdEY7UUFDRjtJQUNGO0lBRUEsT0FBT0g7QUFDVDtBQUVBLFNBQVNZLG1CQUFtQmhCLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxhQUFhLEVBQUVD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