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
var _ontology = /*#__PURE__*/ _interop_require_default(require("../../ontology"));
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
            var StatementSubstitution = _ontology.default.StatementSubstitution, metavariable = reference.getMetavariable(), specificContext = context, statementSubstitution = StatementSubstitution.fromStatementAndMetavariable(statement, metavariable, context), substitution = statementSubstitution; ///
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
                        var Substitutions = _ontology.default.Substitutions, substitutions1 = Substitutions.fromNothing(), axiomLemmaTheoremOrConjectureUnifies = axiom.unifyAxiomLemmaTheoremOrConjecture(axiomLemmaTheoremOrConjecture, substitutions1, context);
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
        var Substitutions = _ontology.default.Substitutions, axiomLemmaTheoremOrConjecture = context.findAxiomLemmaTheoremOrConjectureByReference(reference), generalSubstitutions = substitutions; ///
        if (axiomLemmaTheoremOrConjecture !== null) {
            var statementString = statement.getString(), axiomLemmaTheoremOrConjectureString = reference.getString();
            context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(axiomLemmaTheoremOrConjectureString, "' axiom, lemma, theorem or conjecture..."));
            var stepsOrSubproofs = context.getStepsOrSubproofs();
            substitutions = Substitutions.fromNothing();
            var statementAndStepsUnify = axiomLemmaTheoremOrConjecture.unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, substitutions, context);
            if (statementAndStepsUnify) {
                var StatementSubstitution = _ontology.default.StatementSubstitution, metavariable = reference.getMetavariable(), statementSubstitution = StatementSubstitution.fromStatementAndMetavariable(statement, metavariable, context), substitution = statementSubstitution; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taXhpbnMvc3RlcC91bmlmeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBvbnRvbG9neSBmcm9tIFwiLi4vLi4vb250b2xvZ3lcIjtcbmltcG9ydCBTdWJzdGl0dXRpb25zIGZyb20gXCIuLi8uLi9zdWJzdGl0dXRpb25zXCI7XG5cbmltcG9ydCB7IGVxdWFsaXR5RnJvbVN0YXRlbWVudCxcbiAgICAgICAgIGp1ZGdlbWVudEZyb21TdGF0ZW1lbnQsXG4gICAgICAgICB0eXBlQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCxcbiAgICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCxcbiAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuY29uc3QgeyBiYWNrd2FyZHNTb21lIH0gPSBhcnJheVV0aWxpdGllcztcblxuZnVuY3Rpb24gdW5pZnlXaXRoUnVsZShzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVzV2l0aFJ1bGUgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgY29uc3QgcnVsZSA9IGNvbnRleHQuZmluZFJ1bGVCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgaWYgKHJ1bGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSBydWxlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3J1bGVTdHJpbmd9JyBydWxlLi4uYCk7XG5cbiAgICAgIGNvbnN0IHN0ZXBzT3JTdWJwcm9vZnMgPSBjb250ZXh0LmdldFN0ZXBzT3JTdWJwcm9vZnMoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudEFuZFN0ZXBzVW5pZnkgPSBydWxlLnVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyhzdGF0ZW1lbnQsIHN0ZXBzT3JTdWJwcm9vZnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50QW5kU3RlcHNVbmlmeSkge1xuICAgICAgICB1bmlmaWVzV2l0aFJ1bGUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodW5pZmllc1dpdGhSdWxlKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZS5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZmllc1dpdGhSdWxlO1xufVxuXG5mdW5jdGlvbiB1bmlmeVdpdGhSZWZlcmVuY2Uoc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgdW5pZmllc1dpdGhSZWZlcmVuY2UgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlVmVyaWZpZXMgPSByZWZlcmVuY2UudmVyaWZ5TWV0YXZhcmlhYmxlKGNvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICAgIGNvbnN0IHsgU3RhdGVtZW50U3Vic3RpdHV0aW9uIH0gPSBvbnRvbG9neSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IFN0YXRlbWVudFN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgIHN1YnN0aXR1dGlvbnMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgIHVuaWZpZXNXaXRoUmVmZXJlbmNlID0gdHJ1ZTtcblxuICAgICAgaWYgKHVuaWZpZXNXaXRoUmVmZXJlbmNlKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaWZpZXNXaXRoUmVmZXJlbmNlO1xufVxuXG5mdW5jdGlvbiB1bmlmeUFzU2F0aXNmaWVzQXNzZXJ0aW9uKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHVuaWZpZXNBc1NhdGlzZmllc0Fzc2VydGlvbiA9IGZhbHNlO1xuXG4gIHNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHNhdGlzZmllcyBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgYXNzaWdubWVudHMgPSBudWxsO1xuXG4gICAgc2F0aXNmaWVzQXNzZXJ0aW9uLnZlcmlmeVNpZ25hdHVyZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0ZXBzT3JTdWJwcm9vZnMgPSBjb250ZXh0LmdldFN0ZXBzT3JTdWJwcm9vZnMoKTtcblxuICAgICAgdW5pZmllc0FzU2F0aXNmaWVzQXNzZXJ0aW9uID0gYmFja3dhcmRzU29tZShzdGVwc09yU3VicHJvb2ZzLCAoc3RlcHNPclN1YnByb29mKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0ZXBPclN1YlByb29mVW5pZmllc1dJdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSBzdGVwc09yU3VicHJvb2YudW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uKHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0ZXBPclN1YlByb29mVW5pZmllc1dJdGhTYXRpc2ZpZXNBc3NlcnRpb24pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlID0gY29udGV4dC5maW5kQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICBpZiAoYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUgIT09IG51bGwpIHtcbiAgICAgICAgcmVmZXJlbmNlID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmdldFJlZmVyZW5jZSgpO1xuXG4gICAgICAgIGNvbnN0IGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICAgIGlmIChheGlvbSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHNhdGlzZmlhYmxlID0gYXhpb20uaXNTYXRpc2ZpYWJsZSgpO1xuXG4gICAgICAgICAgaWYgKHNhdGlzZmlhYmxlKSB7XG4gICAgICAgICAgICBjb25zdCB7IFN1YnN0aXR1dGlvbnMgfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICAgICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlVW5pZmllcyA9IGF4aW9tLnVuaWZ5QXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUoYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAoYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVVbmlmaWVzKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNDb3JyZWxhdGVzID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvbnNDb3JyZWxhdGVzKSB7XG4gICAgICAgICAgICAgICAgdW5pZmllc0FzU2F0aXNmaWVzQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBheGlvbVN0cmluZyA9IGF4aW9tLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKGBDYW5ub3QgdW5pZnkgd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBiZWNhdXNlIGl0IGlzIG5vdCBzYXRpc2ZpYWJsZS5gKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1bmlmaWVzQXNTYXRpc2ZpZXNBc3NlcnRpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHNhdGlzZmllcyBhc3NlcnRpb24uYCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaWZpZXNBc1NhdGlzZmllc0Fzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gdW5pZnlXaXRoQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUoc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgdW5pZmllc1dpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFN1YnN0aXR1dGlvbnMgfSA9IG9udG9sb2d5LFxuICAgICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlID0gY29udGV4dC5maW5kQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9uczsgLy8vXG5cbiAgICBpZiAoYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2F4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlU3RyaW5nfScgYXhpb20sIGxlbW1hLCB0aGVvcmVtIG9yIGNvbmplY3R1cmUuLi5gKTtcblxuICAgICAgY29uc3Qgc3RlcHNPclN1YnByb29mcyA9IGNvbnRleHQuZ2V0U3RlcHNPclN1YnByb29mcygpO1xuXG4gICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpO1xuXG4gICAgICBjb25zdCBzdGF0ZW1lbnRBbmRTdGVwc1VuaWZ5ID0gYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUudW5pZnlTdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzKHN0YXRlbWVudCwgc3RlcHNPclN1YnByb29mcywgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRBbmRTdGVwc1VuaWZ5KSB7XG4gICAgICAgIGNvbnN0IHsgU3RhdGVtZW50U3Vic3RpdHV0aW9uIH0gPSBvbnRvbG9neSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBTdGF0ZW1lbnRTdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbnMgPSBnZW5lcmFsU3Vic3RpdHV0aW9uczsgLy8vXG5cbiAgICAgICAgc3Vic3RpdHV0aW9ucy5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICB1bmlmaWVzV2l0aEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHVuaWZpZXNXaXRoQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2F4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlU3RyaW5nfScgYXhpb20sIGxlbW1hLCB0aGVvcmVtIG9yIGNvbmplY3R1cmUuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaWZpZXNXaXRoQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmU7XG59XG5cbmZ1bmN0aW9uIHVuaWZ5QUVxdWFsaXR5KHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHVuaWZpZXNBRXF1YWxpdHkgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgY29uc3QgZXF1YWxpdHkgPSBlcXVhbGl0eUZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChlcXVhbGl0eSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGFuIGVxdWFsaXR5Li4uYCk7XG5cbiAgICAgIGNvbnN0IGVxdWFsaXR5RXF1YWwgPSBlcXVhbGl0eS5pc0VxdWFsKGNvbnRleHQpO1xuXG4gICAgICBpZiAoZXF1YWxpdHlFcXVhbCkge1xuICAgICAgICB1bmlmaWVzQUVxdWFsaXR5ID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHVuaWZpZXNBRXF1YWxpdHkpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGFuIGVxdWFsaXR5LmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlmaWVzQUVxdWFsaXR5O1xufVxuXG5mdW5jdGlvbiB1bmlmeUFzSnVkZ2VtZW50KHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHVuaWZpZXNBc0p1ZGdlbWVudCA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICBjb25zdCBqdWRnZW1lbnQgPSBqdWRnZW1lbnRGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoanVkZ2VtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBqdWRnZW1lbnQuLi5gKTtcblxuICAgICAgdW5pZmllc0FzSnVkZ2VtZW50ID0gdHJ1ZTtcblxuICAgICAgaWYgKHVuaWZpZXNBc0p1ZGdlbWVudCkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBqdWRnZW1lbnQuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaWZpZXNBc0p1ZGdlbWVudDtcbn1cblxuZnVuY3Rpb24gdW5pZnlBc1R5cGVBc3NlcnRpb24oc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgdW5pZmllc0FzVHlwZUFzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uID0gdHlwZUFzc2VydGlvbkZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmICh0eXBlQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSB0eXBlIGFzc2VydGlvbi4uLmApO1xuXG4gICAgICB1bmlmaWVzQXNUeXBlQXNzZXJ0aW9uID0gdHJ1ZTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgdHlwZSBhc3NlcnRpb24uYCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaWZpZXNBc1R5cGVBc3NlcnRpb247XG59XG5cbmZ1bmN0aW9uIHVuaWZ5QXNQcm9wZXJ0eUFzc2VydGlvbihzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVzQXNQcm9wZXJ0eUFzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvbiA9IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHByb3BlcnR5QXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBwcm9wZXJ0eSBhc3NlcnRpb24uLi5gKTtcblxuICAgICAgY29uc3QgdGVybSA9IHByb3BlcnR5QXNzZXJ0aW9uLmdldFRlcm0oKSxcbiAgICAgICAgICAgIGVxdWl2YWxlbmNlID0gY29udGV4dC5maW5kRXF1aXZhbGVuY2VCeVRlcm0odGVybSk7XG5cbiAgICAgIGlmIChlcXVpdmFsZW5jZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvbk1hdGNoZXMgPSBlcXVpdmFsZW5jZS5zb21lT3RoZXJUZXJtKHRlcm0sICh0ZXJtKSA9PiB7ICAvLy9cbiAgICAgICAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlBc3NlcnRpb24uZ2V0UHJvcGVydHlSZWxhdGlvbigpLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uTWF0Y2hlcyA9IGNvbnRleHQubWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uKTtcblxuICAgICAgICAgIGlmIChwcm9wZXJ0eUFzc2VydGlvbk1hdGNoZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHByb3BlcnR5QXNzZXJ0aW9uTWF0Y2hlcykge1xuICAgICAgICAgIHVuaWZpZXNBc1Byb3BlcnR5QXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodW5pZmllc0FzUHJvcGVydHlBc3NlcnRpb24pIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgcHJvcGVydHkgYXNzZXJ0aW9uLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlmaWVzQXNQcm9wZXJ0eUFzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gdW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgaWYgKHNhdGlzZmllc0Fzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0ZXBzT3JTdWJwcm9vZnMgPSBjb250ZXh0LmdldFN0ZXBzT3JTdWJwcm9vZnMoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gc2F0aXNmaWVzQXNzZXJ0aW9uLnVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyhzdGF0ZW1lbnQsIHN0ZXBzT3JTdWJwcm9vZnMsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb247XG59XG5cbmZ1bmN0aW9uIGVxdWF0ZVdpdGhTdGVwc09yU3VicHJvb2ZzKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHVuaWZpZXNXaXRoU3RlcE9yU3VicHJvb2ZzID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHN0ZXBzT3JTdWJwcm9vZnMgPSBjb250ZXh0LmdldFN0ZXBzT3JTdWJwcm9vZnMoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aFN0ZXBzID0gc3RhdGVtZW50LmVxdWF0ZVdpdGhTdGVwc09yU3VicHJvb2ZzKHN0ZXBzT3JTdWJwcm9vZnMsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXNXaXRoU3RlcHMpIHtcbiAgICAgIHVuaWZpZXNXaXRoU3RlcE9yU3VicHJvb2ZzID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZmllc1dpdGhTdGVwT3JTdWJwcm9vZnM7XG59XG5cbmNvbnN0IHVuaWZ5TWl4aW5zID0gW1xuICB1bmlmeVdpdGhSdWxlLFxuICB1bmlmeVdpdGhSZWZlcmVuY2UsXG4gIHVuaWZ5QXNTYXRpc2ZpZXNBc3NlcnRpb24sXG4gIHVuaWZ5V2l0aEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlLFxuICB1bmlmeUFFcXVhbGl0eSxcbiAgdW5pZnlBc0p1ZGdlbWVudCxcbiAgdW5pZnlBc1R5cGVBc3NlcnRpb24sXG4gIHVuaWZ5QXNQcm9wZXJ0eUFzc2VydGlvbixcbiAgdW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uLFxuICBlcXVhdGVXaXRoU3RlcHNPclN1YnByb29mc1xuXTtcblxuZXhwb3J0IGRlZmF1bHQgdW5pZnlNaXhpbnM7XG5cbiJdLCJuYW1lcyI6WyJiYWNrd2FyZHNTb21lIiwiYXJyYXlVdGlsaXRpZXMiLCJ1bmlmeVdpdGhSdWxlIiwic3RhdGVtZW50IiwicmVmZXJlbmNlIiwic2F0aXNmaWVzQXNzZXJ0aW9uIiwic3Vic3RpdHV0aW9ucyIsImNvbnRleHQiLCJ1bmlmaWVzV2l0aFJ1bGUiLCJydWxlIiwiZmluZFJ1bGVCeVJlZmVyZW5jZSIsInJ1bGVTdHJpbmciLCJnZXRTdHJpbmciLCJzdGF0ZW1lbnRTdHJpbmciLCJ0cmFjZSIsInN0ZXBzT3JTdWJwcm9vZnMiLCJnZXRTdGVwc09yU3VicHJvb2ZzIiwic3RhdGVtZW50QW5kU3RlcHNVbmlmeSIsInVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyIsImRlYnVnIiwidW5pZnlXaXRoUmVmZXJlbmNlIiwidW5pZmllc1dpdGhSZWZlcmVuY2UiLCJtZXRhdmFyaWFibGVWZXJpZmllcyIsInZlcmlmeU1ldGF2YXJpYWJsZSIsInJlZmVyZW5jZVN0cmluZyIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsIm9udG9sb2d5IiwibWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwic3BlY2lmaWNDb250ZXh0Iiwic3RhdGVtZW50U3Vic3RpdHV0aW9uIiwiZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSIsInN1YnN0aXR1dGlvbiIsImFkZFN1YnN0aXR1dGlvbiIsInVuaWZ5QXNTYXRpc2ZpZXNBc3NlcnRpb24iLCJ1bmlmaWVzQXNTYXRpc2ZpZXNBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RhdGVtZW50Iiwic3RhdGVkIiwiYXNzaWdubWVudHMiLCJ2ZXJpZnlTaWduYXR1cmUiLCJzdGVwc09yU3VicHJvb2YiLCJzdGVwT3JTdWJQcm9vZlVuaWZpZXNXSXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwidW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwiYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUiLCJmaW5kQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVCeVJlZmVyZW5jZSIsImdldFJlZmVyZW5jZSIsImF4aW9tIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJzYXRpc2ZpYWJsZSIsImlzU2F0aXNmaWFibGUiLCJTdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVVuaWZpZXMiLCJ1bmlmeUF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlIiwic3Vic3RpdHV0aW9uc0NvcnJlbGF0ZXMiLCJjb3JyZWxhdGVTdWJzdGl0dXRpb25zIiwiYXhpb21TdHJpbmciLCJ1bmlmeVdpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSIsInVuaWZpZXNXaXRoQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUiLCJnZW5lcmFsU3Vic3RpdHV0aW9ucyIsImF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlU3RyaW5nIiwidW5pZnlBRXF1YWxpdHkiLCJ1bmlmaWVzQUVxdWFsaXR5IiwiZXF1YWxpdHkiLCJlcXVhbGl0eUZyb21TdGF0ZW1lbnQiLCJlcXVhbGl0eUVxdWFsIiwiaXNFcXVhbCIsInVuaWZ5QXNKdWRnZW1lbnQiLCJ1bmlmaWVzQXNKdWRnZW1lbnQiLCJqdWRnZW1lbnQiLCJqdWRnZW1lbnRGcm9tU3RhdGVtZW50IiwidW5pZnlBc1R5cGVBc3NlcnRpb24iLCJ1bmlmaWVzQXNUeXBlQXNzZXJ0aW9uIiwidHlwZUFzc2VydGlvbiIsInR5cGVBc3NlcnRpb25Gcm9tU3RhdGVtZW50IiwidW5pZnlBc1Byb3BlcnR5QXNzZXJ0aW9uIiwidW5pZmllc0FzUHJvcGVydHlBc3NlcnRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbiIsInByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsInRlcm0iLCJnZXRUZXJtIiwiZXF1aXZhbGVuY2UiLCJmaW5kRXF1aXZhbGVuY2VCeVRlcm0iLCJwcm9wZXJ0eUFzc2VydGlvbk1hdGNoZXMiLCJzb21lT3RoZXJUZXJtIiwicHJvcGVydHlSZWxhdGlvbiIsImdldFByb3BlcnR5UmVsYXRpb24iLCJtYXRjaFRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwidW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJzdGF0ZW1lbnRVbmlmaWVzIiwiZXF1YXRlV2l0aFN0ZXBzT3JTdWJwcm9vZnMiLCJ1bmlmaWVzV2l0aFN0ZXBPclN1YnByb29mcyIsInN0YXRlbWVudFVuaWZpZXNXaXRoU3RlcHMiLCJ1bmlmeU1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMFVBOzs7ZUFBQTs7O3lCQXhVK0I7K0RBRVY7b0VBQ0s7dUJBTXNCOzs7Ozs7QUFFaEQsSUFBTSxBQUFFQSxnQkFBa0JDLHlCQUFjLENBQWhDRDtBQUVSLFNBQVNFLGNBQWNDLFNBQVMsRUFBRUMsU0FBUyxFQUFF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