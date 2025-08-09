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
function unifyAWithRule(statement, reference, substitutions, context) {
    var unifiedWithRule = false;
    if (reference !== null) {
        var rule = context.findRuleByReference(reference);
        if (rule !== null) {
            var ruleString = rule.getString(), statementString = statement.getString();
            context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(ruleString, "' rule..."));
            var stepsOrSubproofs = context.getStepsOrSubproofs(), statementAndStepsUnified = rule.unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, context);
            unifiedWithRule = statementAndStepsUnified; ///
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
                        unifiedAsSatisfiesAssertion = substitutionsMatch; ///
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
function unifyAWithAxiomLemmaTheoremOrConjecture(statement, reference, substitutions, context) {
    var unifiedWithAxiomLemmaTheoremOrConjecture = false;
    if (reference !== null) {
        var axiomLemmaTheoremConjecture = context.findAxiomLemmaTheoremConjectureByReference(reference), generalSubstitutions = substitutions; ///
        if (axiomLemmaTheoremConjecture !== null) {
            var statementString = statement.getString(), axiomLemmaTheoremConjectureString = reference.getString();
            context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(axiomLemmaTheoremConjectureString, "' axiom, lemma, theorem or conjecture..."));
            var stepsOrSubproofs = context.getStepsOrSubproofs(), specificSubstitutions = _substitutions.default.fromNothing();
            substitutions = specificSubstitutions; ///
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
function unifyWithStepsOrSubproofs(statement, reference, substitutions, context) {
    var unifiedWithSteps = false;
    if (reference === null) {
        var stepsOrSubproofs = context.getStepsOrSubproofs(), statementUnifiedWithSteps = statement.unifyWithStepsOrSubproofs(stepsOrSubproofs, context);
        unifiedWithSteps = statementUnifiedWithSteps; ///
    }
    return unifiedWithSteps;
}
function unifyWithSatisfiesAssertion(statement, reference, substitutions, context) {
    var unifiedWithSatisfiesAssertion;
    var stepsOrSubproofs = context.getStepsOrSubproofs(), satisfiesAssertions = stepsOrSubproofs.reduce(function(satisfiesAssertions, stepOrSubproof) {
        var stepOrSubproofStep = stepOrSubproof.isStep();
        if (stepOrSubproofStep) {
            var SatisfiesAssertion = _dom.default.SatisfiesAssertion, step = stepOrSubproof, statement = step.getStatement(), statementNode = statement.getNode(), satisfiesAssertion = SatisfiesAssertion.fromStatementNode(statementNode, context);
            if (satisfiesAssertion !== null) {
                satisfiesAssertions.unshift(satisfiesAssertion);
            }
        }
        return satisfiesAssertions;
    }, []);
    unifiedWithSatisfiesAssertion = backwardsSome(satisfiesAssertions, function(satisfiesAssertion) {
        var statementUnified = satisfiesAssertion.unifyStatement(statement, context);
        if (statementUnified) {
            return true;
        }
    });
    return unifiedWithSatisfiesAssertion;
}
var unifyMixins = [
    unifyAWithRule,
    unifyAWithReference,
    unifyAsSatisfiesAssertion,
    unifyAWithAxiomLemmaTheoremOrConjecture,
    unifyAsEquality,
    unifyAsJudgement,
    unifyAsTypeAssertion,
    unifyAsPropertyAssertion,
    unifyWithStepsOrSubproofs,
    unifyWithSatisfiesAssertion
];
var _default = unifyMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taXhpbnMvc3RlcC91bmlmeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4uLy4uL3N1YnN0aXR1dGlvbnNcIjtcblxuaW1wb3J0IHsgZXF1YWxpdHlGcm9tU3RhdGVtZW50LFxuICAgICAgICAganVkZ2VtZW50RnJvbVN0YXRlbWVudCxcbiAgICAgICAgIHR5cGVBc3NlcnRpb25Gcm9tU3RhdGVtZW50LFxuICAgICAgICAgcHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50LFxuICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5jb25zdCB7IGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5mdW5jdGlvbiB1bmlmeUFXaXRoUnVsZShzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgdW5pZmllZFdpdGhSdWxlID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHJ1bGUgPSBjb250ZXh0LmZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIGlmIChydWxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBydWxlU3RyaW5nID0gcnVsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZS4uLmApO1xuXG4gICAgICBjb25zdCBzdGVwc09yU3VicHJvb2ZzID0gY29udGV4dC5nZXRTdGVwc09yU3VicHJvb2ZzKCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRBbmRTdGVwc1VuaWZpZWQgPSBydWxlLnVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyhzdGF0ZW1lbnQsIHN0ZXBzT3JTdWJwcm9vZnMsIGNvbnRleHQpO1xuXG4gICAgICB1bmlmaWVkV2l0aFJ1bGUgPSBzdGF0ZW1lbnRBbmRTdGVwc1VuaWZpZWQ7ICAvLy9cblxuICAgICAgaWYgKHVuaWZpZWRXaXRoUnVsZSkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaWZpZWRXaXRoUnVsZTtcbn1cblxuZnVuY3Rpb24gdW5pZnlBV2l0aFJlZmVyZW5jZShzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgdW5pZmllZFdpdGhSZWZlcmVuY2UgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSByZWZlcmVuY2UudmVyaWZ5TWV0YXZhcmlhYmxlKGNvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICAgIGNvbnN0IHsgU3RhdGVtZW50U3Vic3RpdHV0aW9uIH0gPSBkb20sXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBTdGF0ZW1lbnRTdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb247IC8vL1xuXG4gICAgICBzdWJzdGl0dXRpb25zLmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIHVuaWZpZWRXaXRoUmVmZXJlbmNlID0gdHJ1ZTtcblxuICAgICAgaWYgKHVuaWZpZWRXaXRoUmVmZXJlbmNlKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaWZpZWRXaXRoUmVmZXJlbmNlO1xufVxuXG5mdW5jdGlvbiB1bmlmeUFzU2F0aXNmaWVzQXNzZXJ0aW9uKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVkQXNTYXRpc2ZpZXNBc3NlcnRpb24gPSBmYWxzZTtcblxuICBjb25zdCBzYXRpc2ZpZXNBc3NlcnRpb24gPSBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgaWYgKHNhdGlzZmllc0Fzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgIGFzc2lnbm1lbnRzID0gbnVsbDtcblxuICAgIHNhdGlzZmllc0Fzc2VydGlvbi52ZXJpZnlTaWduYXR1cmUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGVwc09yU3VicHJvb2ZzID0gY29udGV4dC5nZXRTdGVwc09yU3VicHJvb2ZzKCk7XG5cbiAgICAgIHVuaWZpZWRBc1NhdGlzZmllc0Fzc2VydGlvbiA9IGJhY2t3YXJkc1NvbWUoc3RlcHNPclN1YnByb29mcywgKHN0ZXBzT3JTdWJwcm9vZikgPT4ge1xuICAgICAgICBjb25zdCBzYXRpc2ZpZWRBc3NlcnRpb25VbmlmaWVkID0gc3RlcHNPclN1YnByb29mLnVuaWZ5U2F0aXNmaWVzQXNzZXJ0aW9uKHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHNhdGlzZmllZEFzc2VydGlvblVuaWZpZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSA9IGNvbnRleHQuZmluZEF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICAgIGlmIChheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUgIT09IG51bGwpIHtcbiAgICAgICAgcmVmZXJlbmNlID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmdldFJlZmVyZW5jZSgpO1xuXG4gICAgICAgIGNvbnN0IGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICAgIGlmIChheGlvbSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCA9IGF4aW9tLnVuaWZ5QXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCkge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc01hdGNoID0gc2F0aXNmaWVzQXNzZXJ0aW9uLm1hdGNoU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgdW5pZmllZEFzU2F0aXNmaWVzQXNzZXJ0aW9uID0gc3Vic3RpdHV0aW9uc01hdGNoOyAgLy8vXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHVuaWZpZWRBc1NhdGlzZmllc0Fzc2VydGlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgc2F0aXNmaWVzIGFzc2VydGlvbi5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZmllZEFzU2F0aXNmaWVzQXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB1bmlmeUFXaXRoQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUoc3RhdGVtZW50LCByZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgbGV0IHVuaWZpZWRXaXRoQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgY29uc3QgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlID0gY29udGV4dC5maW5kQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICBnZW5lcmFsU3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnM7IC8vL1xuXG4gICAgaWYgKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2F4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZ30nIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSBvciBjb25qZWN0dXJlLi4uYCk7XG5cbiAgICAgIGNvbnN0IHN0ZXBzT3JTdWJwcm9vZnMgPSBjb250ZXh0LmdldFN0ZXBzT3JTdWJwcm9vZnMoKSxcbiAgICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKTtcblxuICAgICAgc3Vic3RpdHV0aW9ucyA9IHNwZWNpZmljU3Vic3RpdHV0aW9uczsgIC8vL1xuXG4gICAgICBjb25zdCBzdGF0ZW1lbnRBbmRTdGVwc1VuaWZpZWQgPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUudW5pZnlTdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzKHN0YXRlbWVudCwgc3RlcHNPclN1YnByb29mcywgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRBbmRTdGVwc1VuaWZpZWQpIHtcbiAgICAgICAgY29uc3QgeyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSA9IGRvbSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IFN0YXRlbWVudFN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgc3Vic3RpdHV0aW9ucyA9IGdlbmVyYWxTdWJzdGl0dXRpb25zOyAvLy9cblxuICAgICAgICBzdWJzdGl0dXRpb25zLmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgdW5pZmllZFdpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh1bmlmaWVkV2l0aEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmd9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZS5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZmllZFdpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZTtcbn1cblxuZnVuY3Rpb24gdW5pZnlBc0VxdWFsaXR5KHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVkQXNFcXVhbGl0eSA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICBjb25zdCBlcXVhbGl0eSA9IGVxdWFsaXR5RnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGVxdWFsaXR5ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYW4gZXF1YWxpdHkuLi5gKTtcblxuICAgICAgdW5pZmllZEFzRXF1YWxpdHkgPSB0cnVlO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYW4gZXF1YWxpdHkuYCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaWZpZWRBc0VxdWFsaXR5O1xufVxuXG5mdW5jdGlvbiB1bmlmeUFzSnVkZ2VtZW50KHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVkQXNKdWRnZW1lbnQgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgY29uc3QganVkZ2VtZW50ID0ganVkZ2VtZW50RnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGp1ZGdlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEganVkZ2VtZW50Li4uYCk7XG5cbiAgICAgIHVuaWZpZWRBc0p1ZGdlbWVudCA9IHRydWU7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIGp1ZGdlbWVudC5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZmllZEFzSnVkZ2VtZW50O1xufVxuXG5mdW5jdGlvbiB1bmlmeUFzVHlwZUFzc2VydGlvbihzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgdW5pZmllZEFzVHlwZUFzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uID0gdHlwZUFzc2VydGlvbkZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmICh0eXBlQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSB0eXBlIGFzc2VydGlvbi4uLmApO1xuXG4gICAgICB1bmlmaWVkQXNUeXBlQXNzZXJ0aW9uID0gdHJ1ZTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgdHlwZSBhc3NlcnRpb24uYCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaWZpZWRBc1R5cGVBc3NlcnRpb247XG59XG5cbmZ1bmN0aW9uIHVuaWZ5QXNQcm9wZXJ0eUFzc2VydGlvbihzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBsZXQgdW5pZmllZEFzUHJvcGVydHlBc3NlcnRpb24gPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgY29uc3QgcHJvcGVydHlBc3NlcnRpb24gPSBwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChwcm9wZXJ0eUFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgcHJvcGVydHkgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICAgIGNvbnN0IHRlcm0gPSBwcm9wZXJ0eUFzc2VydGlvbi5nZXRUZXJtKCksXG4gICAgICAgICAgICBlcXVpdmFsZW5jZSA9IGNvbnRleHQuZmluZEVxdWl2YWxlbmNlQnlUZXJtKHRlcm0pO1xuXG4gICAgICBpZiAoZXF1aXZhbGVuY2UgIT09IG51bGwpIHtcbiAgICAgICAgdW5pZmllZEFzUHJvcGVydHlBc3NlcnRpb24gPSBlcXVpdmFsZW5jZS5zb21lT3RoZXJUZXJtKHRlcm0sICh0ZXJtKSA9PiB7ICAvLy9cbiAgICAgICAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlBc3NlcnRpb24uZ2V0UHJvcGVydHlSZWxhdGlvbigpLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uTWF0Y2hlcyA9IGNvbnRleHQubWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uKTtcblxuICAgICAgICAgIGlmIChwcm9wZXJ0eUFzc2VydGlvbk1hdGNoZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh1bmlmaWVkQXNQcm9wZXJ0eUFzc2VydGlvbikge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBwcm9wZXJ0eSBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaWZpZWRBc1Byb3BlcnR5QXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB1bmlmeVdpdGhTdGVwc09yU3VicHJvb2ZzKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVkV2l0aFN0ZXBzID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHN0ZXBzT3JTdWJwcm9vZnMgPSBjb250ZXh0LmdldFN0ZXBzT3JTdWJwcm9vZnMoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkV2l0aFN0ZXBzID0gc3RhdGVtZW50LnVuaWZ5V2l0aFN0ZXBzT3JTdWJwcm9vZnMoc3RlcHNPclN1YnByb29mcywgY29udGV4dCk7XG5cbiAgICB1bmlmaWVkV2l0aFN0ZXBzID0gc3RhdGVtZW50VW5pZmllZFdpdGhTdGVwczsgLy8vXG4gIH1cblxuICByZXR1cm4gdW5pZmllZFdpdGhTdGVwcztcbn1cblxuZnVuY3Rpb24gdW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGxldCB1bmlmaWVkV2l0aFNhdGlzZmllc0Fzc2VydGlvbjtcblxuICBjb25zdCBzdGVwc09yU3VicHJvb2ZzID0gY29udGV4dC5nZXRTdGVwc09yU3VicHJvb2ZzKCksXG4gICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbnMgPSBzdGVwc09yU3VicHJvb2ZzLnJlZHVjZSgoc2F0aXNmaWVzQXNzZXJ0aW9ucywgc3RlcE9yU3VicHJvb2YpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGVwT3JTdWJwcm9vZlN0ZXAgPSBzdGVwT3JTdWJwcm9vZi5pc1N0ZXAoKTtcblxuICAgICAgICAgIGlmIChzdGVwT3JTdWJwcm9vZlN0ZXApIHtcbiAgICAgICAgICAgIGNvbnN0IHsgU2F0aXNmaWVzQXNzZXJ0aW9uIH0gPSBkb20sXG4gICAgICAgICAgICAgICAgICBzdGVwID0gc3RlcE9yU3VicHJvb2YsICAvLy9cbiAgICAgICAgICAgICAgICAgIHN0YXRlbWVudCA9IHN0ZXAuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IFNhdGlzZmllc0Fzc2VydGlvbi5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHNhdGlzZmllc0Fzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb25zLnVuc2hpZnQoc2F0aXNmaWVzQXNzZXJ0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9ucztcbiAgICAgICAgfSwgW10pO1xuXG4gIHVuaWZpZWRXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gYmFja3dhcmRzU29tZShzYXRpc2ZpZXNBc3NlcnRpb25zLCAoc2F0aXNmaWVzQXNzZXJ0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3RhdGVtZW50VW5pZmllZCA9IHNhdGlzZmllc0Fzc2VydGlvbi51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHVuaWZpZWRXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uO1xufVxuXG5jb25zdCB1bmlmeU1peGlucyA9IFtcbiAgdW5pZnlBV2l0aFJ1bGUsXG4gIHVuaWZ5QVdpdGhSZWZlcmVuY2UsXG4gIHVuaWZ5QXNTYXRpc2ZpZXNBc3NlcnRpb24sXG4gIHVuaWZ5QVdpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSxcbiAgdW5pZnlBc0VxdWFsaXR5LFxuICB1bmlmeUFzSnVkZ2VtZW50LFxuICB1bmlmeUFzVHlwZUFzc2VydGlvbixcbiAgdW5pZnlBc1Byb3BlcnR5QXNzZXJ0aW9uLFxuICB1bmlmeVdpdGhTdGVwc09yU3VicHJvb2ZzLFxuICB1bmlmeVdpdGhTYXRpc2ZpZXNBc3NlcnRpb25cbl07XG5cbmV4cG9ydCBkZWZhdWx0IHVuaWZ5TWl4aW5zO1xuXG4iXSwibmFtZXMiOlsiYmFja3dhcmRzU29tZSIsImFycmF5VXRpbGl0aWVzIiwidW5pZnlBV2l0aFJ1bGUiLCJzdGF0ZW1lbnQiLCJyZWZlcmVuY2UiLCJzdWJzdGl0dXRpb25zIiwiY29udGV4dCIsInVuaWZpZWRXaXRoUnVsZSIsInJ1bGUiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlIiwicnVsZVN0cmluZyIsImdldFN0cmluZyIsInN0YXRlbWVudFN0cmluZyIsInRyYWNlIiwic3RlcHNPclN1YnByb29mcyIsImdldFN0ZXBzT3JTdWJwcm9vZnMiLCJzdGF0ZW1lbnRBbmRTdGVwc1VuaWZpZWQiLCJ1bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMiLCJkZWJ1ZyIsInVuaWZ5QVdpdGhSZWZlcmVuY2UiLCJ1bmlmaWVkV2l0aFJlZmVyZW5jZSIsIm1ldGF2YXJpYWJsZVZlcmlmaWVkIiwidmVyaWZ5TWV0YXZhcmlhYmxlIiwicmVmZXJlbmNlU3RyaW5nIiwiU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwiZG9tIiwibWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwic3BlY2lmaWNDb250ZXh0Iiwic3RhdGVtZW50U3Vic3RpdHV0aW9uIiwiZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSIsInN1YnN0aXR1dGlvbiIsImFkZFN1YnN0aXR1dGlvbiIsInVuaWZ5QXNTYXRpc2ZpZXNBc3NlcnRpb24iLCJ1bmlmaWVkQXNTYXRpc2ZpZXNBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RhdGVtZW50Iiwic3RhdGVkIiwiYXNzaWdubWVudHMiLCJ2ZXJpZnlTaWduYXR1cmUiLCJzdGVwc09yU3VicHJvb2YiLCJzYXRpc2ZpZWRBc3NlcnRpb25VbmlmaWVkIiwidW5pZnlTYXRpc2ZpZXNBc3NlcnRpb24iLCJheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUiLCJmaW5kQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlQnlSZWZlcmVuY2UiLCJnZXRSZWZlcmVuY2UiLCJheGlvbSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwiU3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCIsInVuaWZ5QXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIiwic3Vic3RpdHV0aW9uc01hdGNoIiwibWF0Y2hTdWJzdGl0dXRpb25zIiwidW5pZnlBV2l0aEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlIiwidW5pZmllZFdpdGhBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSIsImdlbmVyYWxTdWJzdGl0dXRpb25zIiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nIiwic3BlY2lmaWNTdWJzdGl0dXRpb25zIiwidW5pZnlBc0VxdWFsaXR5IiwidW5pZmllZEFzRXF1YWxpdHkiLCJlcXVhbGl0eSIsImVxdWFsaXR5RnJvbVN0YXRlbWVudCIsInVuaWZ5QXNKdWRnZW1lbnQiLCJ1bmlmaWVkQXNKdWRnZW1lbnQiLCJqdWRnZW1lbnQiLCJqdWRnZW1lbnRGcm9tU3RhdGVtZW50IiwidW5pZnlBc1R5cGVBc3NlcnRpb24iLCJ1bmlmaWVkQXNUeXBlQXNzZXJ0aW9uIiwidHlwZUFzc2VydGlvbiIsInR5cGVBc3NlcnRpb25Gcm9tU3RhdGVtZW50IiwidW5pZnlBc1Byb3BlcnR5QXNzZXJ0aW9uIiwidW5pZmllZEFzUHJvcGVydHlBc3NlcnRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbiIsInByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsInRlcm0iLCJnZXRUZXJtIiwiZXF1aXZhbGVuY2UiLCJmaW5kRXF1aXZhbGVuY2VCeVRlcm0iLCJzb21lT3RoZXJUZXJtIiwicHJvcGVydHlSZWxhdGlvbiIsImdldFByb3BlcnR5UmVsYXRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbk1hdGNoZXMiLCJtYXRjaFRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwidW5pZnlXaXRoU3RlcHNPclN1YnByb29mcyIsInVuaWZpZWRXaXRoU3RlcHMiLCJzdGF0ZW1lbnRVbmlmaWVkV2l0aFN0ZXBzIiwidW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwidW5pZmllZFdpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb25zIiwicmVkdWNlIiwic3RlcE9yU3VicHJvb2YiLCJzdGVwT3JTdWJwcm9vZlN0ZXAiLCJpc1N0ZXAiLCJTYXRpc2ZpZXNBc3NlcnRpb24iLCJzdGVwIiwiZ2V0U3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsImdldE5vZGUiLCJmcm9tU3RhdGVtZW50Tm9kZSIsInVuc2hpZnQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwidW5pZnlTdGF0ZW1lbnQiLCJ1bmlmeU1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa1VBOzs7ZUFBQTs7O3lCQWhVK0I7MERBRWY7b0VBQ1U7dUJBTXNCOzs7Ozs7QUFFaEQsSUFBTSxBQUFFQSxnQkFBa0JDLHlCQUFjLENBQWhDRDtBQUVSLFNBQVNFLGVBQWVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxhQUFhLEVBQUVDLE9BQU87SUFDbEUsSUFBSUMsa0JBQWtCO0lBRXRCLElBQUlILGNBQWMsTUFBTTtRQUN0QixJQUFNSSxPQUFPRixRQUFRRyxtQkFBbUIsQ0FBQ0w7UUFFekMsSUFBSUks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