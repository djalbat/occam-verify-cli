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
    var unifiedWithRule = false;
    if (reference !== null) {
        var rule = context.findRuleByReference(reference);
        if (rule !== null) {
            var ruleString = rule.getString(), statementString = statement.getString();
            context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(ruleString, "' rule..."));
            var stepsOrSubproofs = context.getStepsOrSubproofs(), statementAndStepsUnified = rule.unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, context);
            if (statementAndStepsUnified) {
                unifiedWithRule = true;
            }
            if (unifiedWithRule) {
                context.debug("...unified the '".concat(statementString, "' statement with the '").concat(ruleString, "' rule."));
            }
        }
    }
    return unifiedWithRule;
}
function unifyWithReference(statement, reference, substitutions, context) {
    var unifiedWithReference = false;
    if (reference !== null) {
        var metavariableVerified = reference.verifyMetavariable(context);
        if (metavariableVerified) {
            var statementString = statement.getString(), referenceString = reference.getString();
            context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(referenceString, "' reference..."));
            var StatementSubstitution = _dom.default.StatementSubstitution, metavariable = reference.getMetavariable(), specificContext = context, statementSubstitution = StatementSubstitution.fromStatementAndMetavariable(statement, metavariable, context), substitution = statementSubstitution; ///
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
    var satisfiesAssertion = (0, _context.satisfiesAssertionFromStatement)(statement, context);
    if (satisfiesAssertion !== null) {
        var statementString = statement.getString();
        context.trace("Unifying the '".concat(statementString, "' statement as a satisfies assertion..."));
        var stated = true, assignments = null;
        satisfiesAssertion.verifySignature(assignments, stated, context);
        if (reference === null) {
            var stepsOrSubproofs = context.getStepsOrSubproofs();
            unifiedAsSatisfiesAssertion = backwardsSome(stepsOrSubproofs, function(stepsOrSubproof) {
                var satisfiedAssertionUnified = stepsOrSubproof.unifySatisfiesAssertion(satisfiesAssertion, context);
                if (satisfiedAssertionUnified) {
                    return true;
                }
            });
        } else {
            var axiomLemmaTheoremConjecture = context.findAxiomLemmaTheoremConjectureByReference(reference);
            if (axiomLemmaTheoremConjecture !== null) {
                reference = satisfiesAssertion.getReference();
                var axiom = context.findAxiomByReference(reference);
                if (axiom !== null) {
                    var substitutions1 = _substitutions.default.fromNothing(), axiomLemmaTheoremConjectureUnified = axiom.unifyAxiomLemmaTheoremConjecture(axiomLemmaTheoremConjecture, substitutions1, context);
                    if (axiomLemmaTheoremConjectureUnified) {
                        var substitutionsMatch = satisfiesAssertion.matchSubstitutions(substitutions1, context);
                        if (substitutionsMatch) {
                            unifiedAsSatisfiesAssertion = true;
                        }
                    }
                }
            }
        }
        if (unifiedAsSatisfiesAssertion) {
            context.debug("...unified the '".concat(statementString, "' statement as a satisfies assertion."));
        }
    }
    return unifiedAsSatisfiesAssertion;
}
function unifyWithAxiomLemmaTheoremOrConjecture(statement, reference, substitutions, context) {
    var unifiedWithAxiomLemmaTheoremOrConjecture = false;
    if (reference !== null) {
        var axiomLemmaTheoremConjecture = context.findAxiomLemmaTheoremConjectureByReference(reference), generalSubstitutions = substitutions; ///
        if (axiomLemmaTheoremConjecture !== null) {
            var statementString = statement.getString(), axiomLemmaTheoremConjectureString = reference.getString();
            context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(axiomLemmaTheoremConjectureString, "' axiom, lemma, theorem or conjecture..."));
            var stepsOrSubproofs = context.getStepsOrSubproofs();
            substitutions = _substitutions.default.fromNothing();
            var statementAndStepsUnified = axiomLemmaTheoremConjecture.unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, substitutions, context);
            if (statementAndStepsUnified) {
                var StatementSubstitution = _dom.default.StatementSubstitution, metavariable = reference.getMetavariable(), specificContext = context, statementSubstitution = StatementSubstitution.fromStatementAndMetavariable(statement, metavariable, context), substitution = statementSubstitution; ///
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
function unifyAEquality(statement, reference, substitutions, context) {
    var unifiedAEquality = false;
    if (reference === null) {
        var equality = (0, _context.equalityFromStatement)(statement, context);
        if (equality !== null) {
            var statementString = statement.getString();
            context.trace("Unifying the '".concat(statementString, "' statement as an equality..."));
            var equalityEqual = equality.isEqual(context);
            if (equalityEqual) {
                unifiedAEquality = true;
            }
            context.debug("...unified the '".concat(statementString, "' statement as an equality."));
        }
    }
    return unifiedAEquality;
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
                var propertyAssertionMatches = equivalence.someOtherTerm(term, function(term) {
                    var propertyRelation = propertyAssertion.getPropertyRelation(), propertyAssertionMatches = context.matchTermAndPropertyRelation(term, propertyRelation);
                    if (propertyAssertionMatches) {
                        return true;
                    }
                });
                if (propertyAssertionMatches) {
                    unifiedAsPropertyAssertion = true;
                }
            }
            if (unifiedAsPropertyAssertion) {
                context.debug("...unified the '".concat(statementString, "' statement as a property assertion."));
            }
        }
    }
    return unifiedAsPropertyAssertion;
}
function unifyWithSatisfiesAssertion(statement, reference, substitutions, context) {
    var unifiedWithSatisfiesAssertion = false;
    var stepsOrSubproofs = context.getStepsOrSubproofs(), satisfiesAssertions = stepsOrSubproofs.reduce(function(satisfiesAssertions, stepOrSubproof) {
        var stepOrSubproofStep = stepOrSubproof.isStep();
        if (stepOrSubproofStep) {
            var SatisfiesAssertion = _dom.default.SatisfiesAssertion, step = stepOrSubproof, statement = step.getStatement(), statementNode = statement.getNode(), satisfiesAssertion = SatisfiesAssertion.fromStatementNode(statementNode, context);
            if (satisfiesAssertion !== null) {
                satisfiesAssertions.unshift(satisfiesAssertion);
            }
        }
        return satisfiesAssertions;
    }, []), statementUnified = backwardsSome(satisfiesAssertions, function(satisfiesAssertion) {
        var statementUnified = satisfiesAssertion.unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, context);
        if (statementUnified) {
            return true;
        }
    });
    if (statementUnified) {
        unifiedWithSatisfiesAssertion = true;
    }
    return unifiedWithSatisfiesAssertion;
}
function equateWithStepsOrSubproofs(statement, reference, substitutions, context) {
    var unifiedWithStepOrSubproofs = false;
    if (reference === null) {
        var stepsOrSubproofs = context.getStepsOrSubproofs(), statementUnifiedWithSteps = statement.equateWithStepsOrSubproofs(stepsOrSubproofs, context);
        if (statementUnifiedWithSteps) {
            unifiedWithStepOrSubproofs = true;
        }
    }
    return unifiedWithStepOrSubproofs;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taXhpbnMvc3RlcC91bmlmeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4uLy4uL3N1YnN0aXR1dGlvbnNcIjtcblxuaW1wb3J0IHsgZXF1YWxpdHlGcm9tU3RhdGVtZW50LFxuICAgICAgICAganVkZ2VtZW50RnJvbVN0YXRlbWVudCxcbiAgICAgICAgIHR5cGVBc3NlcnRpb25Gcm9tU3RhdGVtZW50LFxuICAgICAgICAgcHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50LFxuICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5jb25zdCB7IGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5mdW5jdGlvbiB1bmlmeVdpdGhSdWxlKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVkV2l0aFJ1bGUgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgY29uc3QgcnVsZSA9IGNvbnRleHQuZmluZFJ1bGVCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgaWYgKHJ1bGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSBydWxlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3J1bGVTdHJpbmd9JyBydWxlLi4uYCk7XG5cbiAgICAgIGNvbnN0IHN0ZXBzT3JTdWJwcm9vZnMgPSBjb250ZXh0LmdldFN0ZXBzT3JTdWJwcm9vZnMoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudEFuZFN0ZXBzVW5pZmllZCA9IHJ1bGUudW5pZnlTdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzKHN0YXRlbWVudCwgc3RlcHNPclN1YnByb29mcywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRBbmRTdGVwc1VuaWZpZWQpIHtcbiAgICAgICAgdW5pZmllZFdpdGhSdWxlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHVuaWZpZWRXaXRoUnVsZSkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaWZpZWRXaXRoUnVsZTtcbn1cblxuZnVuY3Rpb24gdW5pZnlXaXRoUmVmZXJlbmNlKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVkV2l0aFJlZmVyZW5jZSA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgIT09IG51bGwpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVWZXJpZmllZCA9IHJlZmVyZW5jZS52ZXJpZnlNZXRhdmFyaWFibGUoY29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgICAgY29uc3QgeyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSA9IGRvbSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IFN0YXRlbWVudFN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgIHN1YnN0aXR1dGlvbnMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgdW5pZmllZFdpdGhSZWZlcmVuY2UgPSB0cnVlO1xuXG4gICAgICBpZiAodW5pZmllZFdpdGhSZWZlcmVuY2UpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZmllZFdpdGhSZWZlcmVuY2U7XG59XG5cbmZ1bmN0aW9uIHVuaWZ5QXNTYXRpc2ZpZXNBc3NlcnRpb24oc3RhdGVtZW50LCByZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHVuaWZpZWRBc1NhdGlzZmllc0Fzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGNvbnN0IHNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHNhdGlzZmllcyBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgYXNzaWdubWVudHMgPSBudWxsO1xuXG4gICAgc2F0aXNmaWVzQXNzZXJ0aW9uLnZlcmlmeVNpZ25hdHVyZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0ZXBzT3JTdWJwcm9vZnMgPSBjb250ZXh0LmdldFN0ZXBzT3JTdWJwcm9vZnMoKTtcblxuICAgICAgdW5pZmllZEFzU2F0aXNmaWVzQXNzZXJ0aW9uID0gYmFja3dhcmRzU29tZShzdGVwc09yU3VicHJvb2ZzLCAoc3RlcHNPclN1YnByb29mKSA9PiB7XG4gICAgICAgIGNvbnN0IHNhdGlzZmllZEFzc2VydGlvblVuaWZpZWQgPSBzdGVwc09yU3VicHJvb2YudW5pZnlTYXRpc2ZpZXNBc3NlcnRpb24oc2F0aXNmaWVzQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc2F0aXNmaWVkQXNzZXJ0aW9uVW5pZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlID0gY29udGV4dC5maW5kQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgICAgaWYgKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSAhPT0gbnVsbCkge1xuICAgICAgICByZWZlcmVuY2UgPSBzYXRpc2ZpZXNBc3NlcnRpb24uZ2V0UmVmZXJlbmNlKCk7XG5cbiAgICAgICAgY29uc3QgYXhpb20gPSBjb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICAgICAgaWYgKGF4aW9tICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkID0gYXhpb20udW5pZnlBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkKSB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zTWF0Y2ggPSBzYXRpc2ZpZXNBc3NlcnRpb24ubWF0Y2hTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uc01hdGNoKSB7XG4gICAgICAgICAgICAgIHVuaWZpZWRBc1NhdGlzZmllc0Fzc2VydGlvbiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHVuaWZpZWRBc1NhdGlzZmllc0Fzc2VydGlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgc2F0aXNmaWVzIGFzc2VydGlvbi5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZmllZEFzU2F0aXNmaWVzQXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB1bmlmeVdpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZShzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgdW5pZmllZFdpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgIT09IG51bGwpIHtcbiAgICBjb25zdCBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUgPSBjb250ZXh0LmZpbmRBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9uczsgLy8vXG5cbiAgICBpZiAoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7YXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nfScgYXhpb20sIGxlbW1hLCB0aGVvcmVtIG9yIGNvbmplY3R1cmUuLi5gKTtcblxuICAgICAgY29uc3Qgc3RlcHNPclN1YnByb29mcyA9IGNvbnRleHQuZ2V0U3RlcHNPclN1YnByb29mcygpO1xuXG4gICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpO1xuXG4gICAgICBjb25zdCBzdGF0ZW1lbnRBbmRTdGVwc1VuaWZpZWQgPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUudW5pZnlTdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzKHN0YXRlbWVudCwgc3RlcHNPclN1YnByb29mcywgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRBbmRTdGVwc1VuaWZpZWQpIHtcbiAgICAgICAgY29uc3QgeyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSA9IGRvbSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IFN0YXRlbWVudFN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgc3Vic3RpdHV0aW9ucyA9IGdlbmVyYWxTdWJzdGl0dXRpb25zOyAvLy9cblxuICAgICAgICBzdWJzdGl0dXRpb25zLmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgdW5pZmllZFdpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh1bmlmaWVkV2l0aEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmd9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZS5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZmllZFdpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZTtcbn1cblxuZnVuY3Rpb24gdW5pZnlBRXF1YWxpdHkoc3RhdGVtZW50LCByZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHVuaWZpZWRBRXF1YWxpdHkgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgY29uc3QgZXF1YWxpdHkgPSBlcXVhbGl0eUZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChlcXVhbGl0eSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGFuIGVxdWFsaXR5Li4uYCk7XG5cbiAgICAgIGNvbnN0IGVxdWFsaXR5RXF1YWwgPSBlcXVhbGl0eS5pc0VxdWFsKGNvbnRleHQpO1xuXG4gICAgICBpZiAoZXF1YWxpdHlFcXVhbCkge1xuICAgICAgICB1bmlmaWVkQUVxdWFsaXR5ID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGFuIGVxdWFsaXR5LmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlmaWVkQUVxdWFsaXR5O1xufVxuXG5mdW5jdGlvbiB1bmlmeUFzSnVkZ2VtZW50KHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVkQXNKdWRnZW1lbnQgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgY29uc3QganVkZ2VtZW50ID0ganVkZ2VtZW50RnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGp1ZGdlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEganVkZ2VtZW50Li4uYCk7XG5cbiAgICAgIHVuaWZpZWRBc0p1ZGdlbWVudCA9IHRydWU7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIGp1ZGdlbWVudC5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZmllZEFzSnVkZ2VtZW50O1xufVxuXG5mdW5jdGlvbiB1bmlmeUFzVHlwZUFzc2VydGlvbihzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgdW5pZmllZEFzVHlwZUFzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uID0gdHlwZUFzc2VydGlvbkZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmICh0eXBlQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSB0eXBlIGFzc2VydGlvbi4uLmApO1xuXG4gICAgICB1bmlmaWVkQXNUeXBlQXNzZXJ0aW9uID0gdHJ1ZTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgdHlwZSBhc3NlcnRpb24uYCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaWZpZWRBc1R5cGVBc3NlcnRpb247XG59XG5cbmZ1bmN0aW9uIHVuaWZ5QXNQcm9wZXJ0eUFzc2VydGlvbihzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgdW5pZmllZEFzUHJvcGVydHlBc3NlcnRpb24gPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgY29uc3QgcHJvcGVydHlBc3NlcnRpb24gPSBwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChwcm9wZXJ0eUFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgcHJvcGVydHkgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICAgIGNvbnN0IHRlcm0gPSBwcm9wZXJ0eUFzc2VydGlvbi5nZXRUZXJtKCksXG4gICAgICAgICAgICBlcXVpdmFsZW5jZSA9IGNvbnRleHQuZmluZEVxdWl2YWxlbmNlQnlUZXJtKHRlcm0pO1xuXG4gICAgICBpZiAoZXF1aXZhbGVuY2UgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcHJvcGVydHlBc3NlcnRpb25NYXRjaGVzID0gZXF1aXZhbGVuY2Uuc29tZU90aGVyVGVybSh0ZXJtLCAodGVybSkgPT4geyAgLy8vXG4gICAgICAgICAgY29uc3QgcHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5QXNzZXJ0aW9uLmdldFByb3BlcnR5UmVsYXRpb24oKSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUFzc2VydGlvbk1hdGNoZXMgPSBjb250ZXh0Lm1hdGNoVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbik7XG5cbiAgICAgICAgICBpZiAocHJvcGVydHlBc3NlcnRpb25NYXRjaGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChwcm9wZXJ0eUFzc2VydGlvbk1hdGNoZXMpIHtcbiAgICAgICAgICB1bmlmaWVkQXNQcm9wZXJ0eUFzc2VydGlvbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHVuaWZpZWRBc1Byb3BlcnR5QXNzZXJ0aW9uKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHByb3BlcnR5IGFzc2VydGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZmllZEFzUHJvcGVydHlBc3NlcnRpb247XG59XG5cbmZ1bmN0aW9uIHVuaWZ5V2l0aFNhdGlzZmllc0Fzc2VydGlvbihzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgdW5pZmllZFdpdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSBmYWxzZTtcblxuICBjb25zdCBzdGVwc09yU3VicHJvb2ZzID0gY29udGV4dC5nZXRTdGVwc09yU3VicHJvb2ZzKCksXG4gICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbnMgPSBzdGVwc09yU3VicHJvb2ZzLnJlZHVjZSgoc2F0aXNmaWVzQXNzZXJ0aW9ucywgc3RlcE9yU3VicHJvb2YpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGVwT3JTdWJwcm9vZlN0ZXAgPSBzdGVwT3JTdWJwcm9vZi5pc1N0ZXAoKTtcblxuICAgICAgICAgIGlmIChzdGVwT3JTdWJwcm9vZlN0ZXApIHtcbiAgICAgICAgICAgIGNvbnN0IHsgU2F0aXNmaWVzQXNzZXJ0aW9uIH0gPSBkb20sXG4gICAgICAgICAgICAgICAgICBzdGVwID0gc3RlcE9yU3VicHJvb2YsICAvLy9cbiAgICAgICAgICAgICAgICAgIHN0YXRlbWVudCA9IHN0ZXAuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IFNhdGlzZmllc0Fzc2VydGlvbi5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHNhdGlzZmllc0Fzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb25zLnVuc2hpZnQoc2F0aXNmaWVzQXNzZXJ0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9ucztcbiAgICAgICAgfSwgW10pLFxuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gYmFja3dhcmRzU29tZShzYXRpc2ZpZXNBc3NlcnRpb25zLCAoc2F0aXNmaWVzQXNzZXJ0aW9uKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllZCA9IHNhdGlzZmllc0Fzc2VydGlvbi51bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMoc3RhdGVtZW50LCBzdGVwc09yU3VicHJvb2ZzLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgdW5pZmllZFdpdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHVuaWZpZWRXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiBlcXVhdGVXaXRoU3RlcHNPclN1YnByb29mcyhzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgdW5pZmllZFdpdGhTdGVwT3JTdWJwcm9vZnMgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgY29uc3Qgc3RlcHNPclN1YnByb29mcyA9IGNvbnRleHQuZ2V0U3RlcHNPclN1YnByb29mcygpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWRXaXRoU3RlcHMgPSBzdGF0ZW1lbnQuZXF1YXRlV2l0aFN0ZXBzT3JTdWJwcm9vZnMoc3RlcHNPclN1YnByb29mcywgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllZFdpdGhTdGVwcykge1xuICAgICAgdW5pZmllZFdpdGhTdGVwT3JTdWJwcm9vZnMgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlmaWVkV2l0aFN0ZXBPclN1YnByb29mcztcbn1cblxuY29uc3QgdW5pZnlNaXhpbnMgPSBbXG4gIHVuaWZ5V2l0aFJ1bGUsXG4gIHVuaWZ5V2l0aFJlZmVyZW5jZSxcbiAgdW5pZnlBc1NhdGlzZmllc0Fzc2VydGlvbixcbiAgdW5pZnlXaXRoQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUsXG4gIHVuaWZ5QUVxdWFsaXR5LFxuICB1bmlmeUFzSnVkZ2VtZW50LFxuICB1bmlmeUFzVHlwZUFzc2VydGlvbixcbiAgdW5pZnlBc1Byb3BlcnR5QXNzZXJ0aW9uLFxuICB1bmlmeVdpdGhTYXRpc2ZpZXNBc3NlcnRpb24sXG4gIGVxdWF0ZVdpdGhTdGVwc09yU3VicHJvb2ZzXG5dO1xuXG5leHBvcnQgZGVmYXVsdCB1bmlmeU1peGlucztcblxuIl0sIm5hbWVzIjpbImJhY2t3YXJkc1NvbWUiLCJhcnJheVV0aWxpdGllcyIsInVuaWZ5V2l0aFJ1bGUiLCJzdGF0ZW1lbnQiLCJyZWZlcmVuY2UiLCJzdWJzdGl0dXRpb25zIiwiY29udGV4dCIsInVuaWZpZWRXaXRoUnVsZSIsInJ1bGUiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlIiwicnVsZVN0cmluZyIsImdldFN0cmluZyIsInN0YXRlbWVudFN0cmluZyIsInRyYWNlIiwic3RlcHNPclN1YnByb29mcyIsImdldFN0ZXBzT3JTdWJwcm9vZnMiLCJzdGF0ZW1lbnRBbmRTdGVwc1VuaWZpZWQiLCJ1bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMiLCJkZWJ1ZyIsInVuaWZ5V2l0aFJlZmVyZW5jZSIsInVuaWZpZWRXaXRoUmVmZXJlbmNlIiwibWV0YXZhcmlhYmxlVmVyaWZpZWQiLCJ2ZXJpZnlNZXRhdmFyaWFibGUiLCJyZWZlcmVuY2VTdHJpbmciLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJkb20iLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJzcGVjaWZpY0NvbnRleHQiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlIiwic3Vic3RpdHV0aW9uIiwiYWRkU3Vic3RpdHV0aW9uIiwidW5pZnlBc1NhdGlzZmllc0Fzc2VydGlvbiIsInVuaWZpZWRBc1NhdGlzZmllc0Fzc2VydGlvbiIsInNhdGlzZmllc0Fzc2VydGlvbiIsInNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJzdGF0ZWQiLCJhc3NpZ25tZW50cyIsInZlcmlmeVNpZ25hdHVyZSIsInN0ZXBzT3JTdWJwcm9vZiIsInNhdGlzZmllZEFzc2VydGlvblVuaWZpZWQiLCJ1bmlmeVNhdGlzZmllc0Fzc2VydGlvbiIsImF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSIsImZpbmRBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVCeVJlZmVyZW5jZSIsImdldFJlZmVyZW5jZSIsImF4aW9tIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJTdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkIiwidW5pZnlBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUiLCJzdWJzdGl0dXRpb25zTWF0Y2giLCJtYXRjaFN1YnN0aXR1dGlvbnMiLCJ1bmlmeVdpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSIsInVuaWZpZWRXaXRoQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUiLCJnZW5lcmFsU3Vic3RpdHV0aW9ucyIsImF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZyIsInVuaWZ5QUVxdWFsaXR5IiwidW5pZmllZEFFcXVhbGl0eSIsImVxdWFsaXR5IiwiZXF1YWxpdHlGcm9tU3RhdGVtZW50IiwiZXF1YWxpdHlFcXVhbCIsImlzRXF1YWwiLCJ1bmlmeUFzSnVkZ2VtZW50IiwidW5pZmllZEFzSnVkZ2VtZW50IiwianVkZ2VtZW50IiwianVkZ2VtZW50RnJvbVN0YXRlbWVudCIsInVuaWZ5QXNUeXBlQXNzZXJ0aW9uIiwidW5pZmllZEFzVHlwZUFzc2VydGlvbiIsInR5cGVBc3NlcnRpb24iLCJ0eXBlQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsInVuaWZ5QXNQcm9wZXJ0eUFzc2VydGlvbiIsInVuaWZpZWRBc1Byb3BlcnR5QXNzZXJ0aW9uIiwicHJvcGVydHlBc3NlcnRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJ0ZXJtIiwiZ2V0VGVybSIsImVxdWl2YWxlbmNlIiwiZmluZEVxdWl2YWxlbmNlQnlUZXJtIiwicHJvcGVydHlBc3NlcnRpb25NYXRjaGVzIiwic29tZU90aGVyVGVybSIsInByb3BlcnR5UmVsYXRpb24iLCJnZXRQcm9wZXJ0eVJlbGF0aW9uIiwibWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsInVuaWZ5V2l0aFNhdGlzZmllc0Fzc2VydGlvbiIsInVuaWZpZWRXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9ucyIsInJlZHVjZSIsInN0ZXBPclN1YnByb29mIiwic3RlcE9yU3VicHJvb2ZTdGVwIiwiaXNTdGVwIiwiU2F0aXNmaWVzQXNzZXJ0aW9uIiwic3RlcCIsImdldFN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJnZXROb2RlIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJ1bnNoaWZ0Iiwic3RhdGVtZW50VW5pZmllZCIsImVxdWF0ZVdpdGhTdGVwc09yU3VicHJvb2ZzIiwidW5pZmllZFdpdGhTdGVwT3JTdWJwcm9vZnMiLCJzdGF0ZW1lbnRVbmlmaWVkV2l0aFN0ZXBzIiwidW5pZnlNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWtWQTs7O2VBQUE7Ozt5QkFoVitCOzBEQUVmO29FQUNVO3VCQU1zQjs7Ozs7O0FBRWhELElBQU0sQUFBRUEsZ0JBQWtCQyx5QkFBYyxDQUFoQ0Q7QUFFUixTQUFTRSxjQUFjQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsYUFBYSxFQUFFQyxPQUFPO0lBQ2pFLElBQUlDLGtCQUFrQjtJQUV0QixJQUFJSCxjQUFjLE1BQU07UUFDdEIsSUFBTUksT0FBT0YsUUFBUUcsbUJBQW1CLENBQUNMO1FBRXpDLElBQUlJLFNBQVMsTUFBTTtZQUNqQixJQUFNRSxhQUFhRixLQUFLRyxTQUFTLElBQzNCQyxrQkFBa0JULFVBQVVRLFNBQVM7WUFFM0NMLFFBQVFPLEtBQUssQ0FBQyxBQUFDLGlCQUF3REgsT0FBeENFLGlCQUFnQiwwQkFBbUMsT0FBWEYsWUFBVztZQUVsRixJQUFNSSxtQkFBbUJSLFFBQVFTLG1CQUFtQixJQUM5Q0MsMkJBQTJCUixLQUFLUyxpQ0FBaUMsQ0FBQ2QsV0FBV1csa0JBQWtCUjtZQUVyRyxJQUFJVSwwQkFBMEI7Z0JBQzVCVCxrQkFBa0I7WUFDcEI7WUFFQSxJQUFJQSxpQkFBaUI7Z0JBQ25CRCxRQUFRWSxLQUFLLENBQUMsQUFBQyxtQkFBMERSLE9BQXhDRSxpQkFBZ0IsMEJBQW1DLE9BQVhGLFlBQVc7WUFDdEY7UUFDRjtJQUNGO0lBRUEsT0FBT0g7QUFDVDtBQUVBLFNBQVNZLG1CQUFtQmhCLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxhQUFhLEVBQUVDLE9BQU87SUFDdEUsSUFBSWMsdUJBQXVCO0lBRTNCLElBQUloQixjQUFjLE1BQU07UUFDdEIsSUFBTWlCLHVCQUF1QmpCLFVBQVVrQixrQkFBa0IsQ0FBQ2hCO1FBRTFELElB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