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
            if (unifiedAEquality) {
                context.debug("...unified the '".concat(statementString, "' statement as an equality."));
            }
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
            if (unifiedAsJudgement) {
                context.debug("...unified the '".concat(statementString, "' statement as a judgement."));
            }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taXhpbnMvc3RlcC91bmlmeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4uLy4uL3N1YnN0aXR1dGlvbnNcIjtcblxuaW1wb3J0IHsgZXF1YWxpdHlGcm9tU3RhdGVtZW50LFxuICAgICAgICAganVkZ2VtZW50RnJvbVN0YXRlbWVudCxcbiAgICAgICAgIHR5cGVBc3NlcnRpb25Gcm9tU3RhdGVtZW50LFxuICAgICAgICAgcHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50LFxuICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5jb25zdCB7IGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5mdW5jdGlvbiB1bmlmeVdpdGhSdWxlKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVkV2l0aFJ1bGUgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgY29uc3QgcnVsZSA9IGNvbnRleHQuZmluZFJ1bGVCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgaWYgKHJ1bGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSBydWxlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3J1bGVTdHJpbmd9JyBydWxlLi4uYCk7XG5cbiAgICAgIGNvbnN0IHN0ZXBzT3JTdWJwcm9vZnMgPSBjb250ZXh0LmdldFN0ZXBzT3JTdWJwcm9vZnMoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudEFuZFN0ZXBzVW5pZmllZCA9IHJ1bGUudW5pZnlTdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzKHN0YXRlbWVudCwgc3RlcHNPclN1YnByb29mcywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRBbmRTdGVwc1VuaWZpZWQpIHtcbiAgICAgICAgdW5pZmllZFdpdGhSdWxlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHVuaWZpZWRXaXRoUnVsZSkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaWZpZWRXaXRoUnVsZTtcbn1cblxuZnVuY3Rpb24gdW5pZnlXaXRoUmVmZXJlbmNlKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVkV2l0aFJlZmVyZW5jZSA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgIT09IG51bGwpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVWZXJpZmllZCA9IHJlZmVyZW5jZS52ZXJpZnlNZXRhdmFyaWFibGUoY29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgICAgY29uc3QgeyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSA9IGRvbSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IFN0YXRlbWVudFN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgIHN1YnN0aXR1dGlvbnMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgdW5pZmllZFdpdGhSZWZlcmVuY2UgPSB0cnVlO1xuXG4gICAgICBpZiAodW5pZmllZFdpdGhSZWZlcmVuY2UpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZmllZFdpdGhSZWZlcmVuY2U7XG59XG5cbmZ1bmN0aW9uIHVuaWZ5QXNTYXRpc2ZpZXNBc3NlcnRpb24oc3RhdGVtZW50LCByZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHVuaWZpZWRBc1NhdGlzZmllc0Fzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGNvbnN0IHNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHNhdGlzZmllcyBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgYXNzaWdubWVudHMgPSBudWxsO1xuXG4gICAgc2F0aXNmaWVzQXNzZXJ0aW9uLnZlcmlmeVNpZ25hdHVyZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0ZXBzT3JTdWJwcm9vZnMgPSBjb250ZXh0LmdldFN0ZXBzT3JTdWJwcm9vZnMoKTtcblxuICAgICAgdW5pZmllZEFzU2F0aXNmaWVzQXNzZXJ0aW9uID0gYmFja3dhcmRzU29tZShzdGVwc09yU3VicHJvb2ZzLCAoc3RlcHNPclN1YnByb29mKSA9PiB7XG4gICAgICAgIGNvbnN0IHNhdGlzZmllZEFzc2VydGlvblVuaWZpZWQgPSBzdGVwc09yU3VicHJvb2YudW5pZnlTYXRpc2ZpZXNBc3NlcnRpb24oc2F0aXNmaWVzQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc2F0aXNmaWVkQXNzZXJ0aW9uVW5pZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlID0gY29udGV4dC5maW5kQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgICAgaWYgKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSAhPT0gbnVsbCkge1xuICAgICAgICByZWZlcmVuY2UgPSBzYXRpc2ZpZXNBc3NlcnRpb24uZ2V0UmVmZXJlbmNlKCk7XG5cbiAgICAgICAgY29uc3QgYXhpb20gPSBjb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICAgICAgaWYgKGF4aW9tICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkID0gYXhpb20udW5pZnlBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkKSB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zTWF0Y2ggPSBzYXRpc2ZpZXNBc3NlcnRpb24ubWF0Y2hTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uc01hdGNoKSB7XG4gICAgICAgICAgICAgIHVuaWZpZWRBc1NhdGlzZmllc0Fzc2VydGlvbiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHVuaWZpZWRBc1NhdGlzZmllc0Fzc2VydGlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgc2F0aXNmaWVzIGFzc2VydGlvbi5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZmllZEFzU2F0aXNmaWVzQXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB1bmlmeVdpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZShzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgdW5pZmllZFdpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgIT09IG51bGwpIHtcbiAgICBjb25zdCBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUgPSBjb250ZXh0LmZpbmRBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9uczsgLy8vXG5cbiAgICBpZiAoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7YXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nfScgYXhpb20sIGxlbW1hLCB0aGVvcmVtIG9yIGNvbmplY3R1cmUuLi5gKTtcblxuICAgICAgY29uc3Qgc3RlcHNPclN1YnByb29mcyA9IGNvbnRleHQuZ2V0U3RlcHNPclN1YnByb29mcygpO1xuXG4gICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpO1xuXG4gICAgICBjb25zdCBzdGF0ZW1lbnRBbmRTdGVwc1VuaWZpZWQgPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUudW5pZnlTdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzKHN0YXRlbWVudCwgc3RlcHNPclN1YnByb29mcywgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRBbmRTdGVwc1VuaWZpZWQpIHtcbiAgICAgICAgY29uc3QgeyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSA9IGRvbSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IFN0YXRlbWVudFN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgc3Vic3RpdHV0aW9ucyA9IGdlbmVyYWxTdWJzdGl0dXRpb25zOyAvLy9cblxuICAgICAgICBzdWJzdGl0dXRpb25zLmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgdW5pZmllZFdpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh1bmlmaWVkV2l0aEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmd9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZS5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZmllZFdpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZTtcbn1cblxuZnVuY3Rpb24gdW5pZnlBRXF1YWxpdHkoc3RhdGVtZW50LCByZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHVuaWZpZWRBRXF1YWxpdHkgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgY29uc3QgZXF1YWxpdHkgPSBlcXVhbGl0eUZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChlcXVhbGl0eSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGFuIGVxdWFsaXR5Li4uYCk7XG5cbiAgICAgIGNvbnN0IGVxdWFsaXR5RXF1YWwgPSBlcXVhbGl0eS5pc0VxdWFsKGNvbnRleHQpO1xuXG4gICAgICBpZiAoZXF1YWxpdHlFcXVhbCkge1xuICAgICAgICB1bmlmaWVkQUVxdWFsaXR5ID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHVuaWZpZWRBRXF1YWxpdHkpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGFuIGVxdWFsaXR5LmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlmaWVkQUVxdWFsaXR5O1xufVxuXG5mdW5jdGlvbiB1bmlmeUFzSnVkZ2VtZW50KHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVkQXNKdWRnZW1lbnQgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgY29uc3QganVkZ2VtZW50ID0ganVkZ2VtZW50RnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGp1ZGdlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEganVkZ2VtZW50Li4uYCk7XG5cbiAgICAgIHVuaWZpZWRBc0p1ZGdlbWVudCA9IHRydWU7XG5cbiAgICAgIGlmICh1bmlmaWVkQXNKdWRnZW1lbnQpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEganVkZ2VtZW50LmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlmaWVkQXNKdWRnZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHVuaWZ5QXNUeXBlQXNzZXJ0aW9uKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVkQXNUeXBlQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHR5cGVBc3NlcnRpb24gPSB0eXBlQXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHR5cGVBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHR5cGUgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICAgIHVuaWZpZWRBc1R5cGVBc3NlcnRpb24gPSB0cnVlO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSB0eXBlIGFzc2VydGlvbi5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZmllZEFzVHlwZUFzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gdW5pZnlBc1Byb3BlcnR5QXNzZXJ0aW9uKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVkQXNQcm9wZXJ0eUFzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvbiA9IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHByb3BlcnR5QXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBwcm9wZXJ0eSBhc3NlcnRpb24uLi5gKTtcblxuICAgICAgY29uc3QgdGVybSA9IHByb3BlcnR5QXNzZXJ0aW9uLmdldFRlcm0oKSxcbiAgICAgICAgICAgIGVxdWl2YWxlbmNlID0gY29udGV4dC5maW5kRXF1aXZhbGVuY2VCeVRlcm0odGVybSk7XG5cbiAgICAgIGlmIChlcXVpdmFsZW5jZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvbk1hdGNoZXMgPSBlcXVpdmFsZW5jZS5zb21lT3RoZXJUZXJtKHRlcm0sICh0ZXJtKSA9PiB7ICAvLy9cbiAgICAgICAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlBc3NlcnRpb24uZ2V0UHJvcGVydHlSZWxhdGlvbigpLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uTWF0Y2hlcyA9IGNvbnRleHQubWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uKTtcblxuICAgICAgICAgIGlmIChwcm9wZXJ0eUFzc2VydGlvbk1hdGNoZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHByb3BlcnR5QXNzZXJ0aW9uTWF0Y2hlcykge1xuICAgICAgICAgIHVuaWZpZWRBc1Byb3BlcnR5QXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodW5pZmllZEFzUHJvcGVydHlBc3NlcnRpb24pIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgcHJvcGVydHkgYXNzZXJ0aW9uLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlmaWVkQXNQcm9wZXJ0eUFzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gdW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVkV2l0aFNhdGlzZmllc0Fzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGNvbnN0IHN0ZXBzT3JTdWJwcm9vZnMgPSBjb250ZXh0LmdldFN0ZXBzT3JTdWJwcm9vZnMoKSxcbiAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9ucyA9IHN0ZXBzT3JTdWJwcm9vZnMucmVkdWNlKChzYXRpc2ZpZXNBc3NlcnRpb25zLCBzdGVwT3JTdWJwcm9vZikgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0ZXBPclN1YnByb29mU3RlcCA9IHN0ZXBPclN1YnByb29mLmlzU3RlcCgpO1xuXG4gICAgICAgICAgaWYgKHN0ZXBPclN1YnByb29mU3RlcCkge1xuICAgICAgICAgICAgY29uc3QgeyBTYXRpc2ZpZXNBc3NlcnRpb24gfSA9IGRvbSxcbiAgICAgICAgICAgICAgICAgIHN0ZXAgPSBzdGVwT3JTdWJwcm9vZiwgIC8vL1xuICAgICAgICAgICAgICAgICAgc3RhdGVtZW50ID0gc3RlcC5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gU2F0aXNmaWVzQXNzZXJ0aW9uLmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbnMudW5zaGlmdChzYXRpc2ZpZXNBc3NlcnRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb25zO1xuICAgICAgICB9LCBbXSksXG4gICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBiYWNrd2FyZHNTb21lKHNhdGlzZmllc0Fzc2VydGlvbnMsIChzYXRpc2ZpZXNBc3NlcnRpb24pID0+IHtcbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVkID0gc2F0aXNmaWVzQXNzZXJ0aW9uLnVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyhzdGF0ZW1lbnQsIHN0ZXBzT3JTdWJwcm9vZnMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICB1bmlmaWVkV2l0aFNhdGlzZmllc0Fzc2VydGlvbiA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gdW5pZmllZFdpdGhTYXRpc2ZpZXNBc3NlcnRpb247XG59XG5cbmZ1bmN0aW9uIGVxdWF0ZVdpdGhTdGVwc09yU3VicHJvb2ZzKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVkV2l0aFN0ZXBPclN1YnByb29mcyA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICBjb25zdCBzdGVwc09yU3VicHJvb2ZzID0gY29udGV4dC5nZXRTdGVwc09yU3VicHJvb2ZzKCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllZFdpdGhTdGVwcyA9IHN0YXRlbWVudC5lcXVhdGVXaXRoU3RlcHNPclN1YnByb29mcyhzdGVwc09yU3VicHJvb2ZzLCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkV2l0aFN0ZXBzKSB7XG4gICAgICB1bmlmaWVkV2l0aFN0ZXBPclN1YnByb29mcyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaWZpZWRXaXRoU3RlcE9yU3VicHJvb2ZzO1xufVxuXG5jb25zdCB1bmlmeU1peGlucyA9IFtcbiAgdW5pZnlXaXRoUnVsZSxcbiAgdW5pZnlXaXRoUmVmZXJlbmNlLFxuICB1bmlmeUFzU2F0aXNmaWVzQXNzZXJ0aW9uLFxuICB1bmlmeVdpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSxcbiAgdW5pZnlBRXF1YWxpdHksXG4gIHVuaWZ5QXNKdWRnZW1lbnQsXG4gIHVuaWZ5QXNUeXBlQXNzZXJ0aW9uLFxuICB1bmlmeUFzUHJvcGVydHlBc3NlcnRpb24sXG4gIHVuaWZ5V2l0aFNhdGlzZmllc0Fzc2VydGlvbixcbiAgZXF1YXRlV2l0aFN0ZXBzT3JTdWJwcm9vZnNcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHVuaWZ5TWl4aW5zO1xuXG4iXSwibmFtZXMiOlsiYmFja3dhcmRzU29tZSIsImFycmF5VXRpbGl0aWVzIiwidW5pZnlXaXRoUnVsZSIsInN0YXRlbWVudCIsInJlZmVyZW5jZSIsInN1YnN0aXR1dGlvbnMiLCJjb250ZXh0IiwidW5pZmllZFdpdGhSdWxlIiwicnVsZSIsImZpbmRSdWxlQnlSZWZlcmVuY2UiLCJydWxlU3RyaW5nIiwiZ2V0U3RyaW5nIiwic3RhdGVtZW50U3RyaW5nIiwidHJhY2UiLCJzdGVwc09yU3VicHJvb2ZzIiwiZ2V0U3RlcHNPclN1YnByb29mcyIsInN0YXRlbWVudEFuZFN0ZXBzVW5pZmllZCIsInVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyIsImRlYnVnIiwidW5pZnlXaXRoUmVmZXJlbmNlIiwidW5pZmllZFdpdGhSZWZlcmVuY2UiLCJtZXRhdmFyaWFibGVWZXJpZmllZCIsInZlcmlmeU1ldGF2YXJpYWJsZSIsInJlZmVyZW5jZVN0cmluZyIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsImRvbSIsIm1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZSIsInNwZWNpZmljQ29udGV4dCIsInN0YXRlbWVudFN1YnN0aXR1dGlvbiIsImZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb24iLCJhZGRTdWJzdGl0dXRpb24iLCJ1bmlmeUFzU2F0aXNmaWVzQXNzZXJ0aW9uIiwidW5pZmllZEFzU2F0aXNmaWVzQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsInN0YXRlZCIsImFzc2lnbm1lbnRzIiwidmVyaWZ5U2lnbmF0dXJlIiwic3RlcHNPclN1YnByb29mIiwic2F0aXNmaWVkQXNzZXJ0aW9uVW5pZmllZCIsInVuaWZ5U2F0aXNmaWVzQXNzZXJ0aW9uIiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIiwiZmluZEF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZUJ5UmVmZXJlbmNlIiwiZ2V0UmVmZXJlbmNlIiwiYXhpb20iLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsIlN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsImF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVVuaWZpZWQiLCJ1bmlmeUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSIsInN1YnN0aXR1dGlvbnNNYXRjaCIsIm1hdGNoU3Vic3RpdHV0aW9ucyIsInVuaWZ5V2l0aEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlIiwidW5pZmllZFdpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSIsImdlbmVyYWxTdWJzdGl0dXRpb25zIiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nIiwidW5pZnlBRXF1YWxpdHkiLCJ1bmlmaWVkQUVxdWFsaXR5IiwiZXF1YWxpdHkiLCJlcXVhbGl0eUZyb21TdGF0ZW1lbnQiLCJlcXVhbGl0eUVxdWFsIiwiaXNFcXVhbCIsInVuaWZ5QXNKdWRnZW1lbnQiLCJ1bmlmaWVkQXNKdWRnZW1lbnQiLCJqdWRnZW1lbnQiLCJqdWRnZW1lbnRGcm9tU3RhdGVtZW50IiwidW5pZnlBc1R5cGVBc3NlcnRpb24iLCJ1bmlmaWVkQXNUeXBlQXNzZXJ0aW9uIiwidHlwZUFzc2VydGlvbiIsInR5cGVBc3NlcnRpb25Gcm9tU3RhdGVtZW50IiwidW5pZnlBc1Byb3BlcnR5QXNzZXJ0aW9uIiwidW5pZmllZEFzUHJvcGVydHlBc3NlcnRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbiIsInByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsInRlcm0iLCJnZXRUZXJtIiwiZXF1aXZhbGVuY2UiLCJmaW5kRXF1aXZhbGVuY2VCeVRlcm0iLCJwcm9wZXJ0eUFzc2VydGlvbk1hdGNoZXMiLCJzb21lT3RoZXJUZXJtIiwicHJvcGVydHlSZWxhdGlvbiIsImdldFByb3BlcnR5UmVsYXRpb24iLCJtYXRjaFRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwidW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwidW5pZmllZFdpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb25zIiwicmVkdWNlIiwic3RlcE9yU3VicHJvb2YiLCJzdGVwT3JTdWJwcm9vZlN0ZXAiLCJpc1N0ZXAiLCJTYXRpc2ZpZXNBc3NlcnRpb24iLCJzdGVwIiwiZ2V0U3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsImdldE5vZGUiLCJmcm9tU3RhdGVtZW50Tm9kZSIsInVuc2hpZnQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwiZXF1YXRlV2l0aFN0ZXBzT3JTdWJwcm9vZnMiLCJ1bmlmaWVkV2l0aFN0ZXBPclN1YnByb29mcyIsInN0YXRlbWVudFVuaWZpZWRXaXRoU3RlcHMiLCJ1bmlmeU1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBc1ZBOzs7ZUFBQTs7O3lCQXBWK0I7MERBRWY7b0VBQ1U7dUJBTXNCOzs7Ozs7QUFFaEQsSUFBTSxBQUFFQSxnQkFBa0JDLHlCQUFjLENBQWhDRDtBQUVSLFNBQVNFLGNBQWNDLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxhQUFhLEVBQUVDLE9BQU87SUFDakUsSUFBSUMsa0JBQWtCO0lBRXRCLElBQUlILGNBQWMsTUFBTTtRQUN0QixJQUFNSSxPQUFPRixRQUFRRyxtQkFBbUIsQ0FBQ0w7UUFFekMsSUFBSUksU0FBUyxNQUFNO1lBQ2pCLElBQU1FLGFBQWFGLEtBQUtHLFNBQVMsSUFDM0JDLGtCQUFrQlQsVUFBVVEsU0FBUztZQUUzQ0wsUUFBUU8sS0FBSyxDQUFDLEFBQUMsaUJBQXdESCxPQUF4Q0UsaUJBQWdCLDBCQUFtQyxPQUFYRixZQUFXO1lBRWxGLElBQU1JLG1CQUFtQlIsUUFBUVMsbUJBQW1CLElBQzlDQywyQkFBMkJSLEtBQUtTLGlDQUFpQyxDQUFDZCxXQUFXVyxrQkFBa0JSO1lBRXJHLElBQUlVLDBCQUEwQjtnQkFDNUJULGtCQUFrQjtZQUNwQjtZQUVBLElBQUlBLGlCQUFpQjtnQkFDbkJELFFBQVFZLEtBQUssQ0FBQyxBQUFDLG1CQUEwRFIsT0FBeENFLGlCQUFnQiwwQkFBbUMsT0FBWEYsWUFBVztZQUN0RjtRQUNGO0lBQ0Y7SUFFQSxPQUFPSDtBQUNUO0FBRUEsU0FBU1ksbUJBQW1CaEIsU0FBUyxFQUFFQyxTQUFTLEVBQUVDLGFBQWEsRUFBRUMsT0FBTztJQUN0RSxJ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